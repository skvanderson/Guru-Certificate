const http = require('node:http');
const { DatabaseSync } = require('node:sqlite');
const { randomUUID, randomBytes, createHash, scrypt, timingSafeEqual } = require('node:crypto');
const { promisify } = require('node:util');
const { mkdirSync, existsSync, readFileSync } = require('node:fs');
const path = require('node:path');

const hashPassword = promisify(scrypt);
const examTypes = ['cloud-practitioner', 'developer-associate', 'solutions-architect'];
const publicUser = user => ({ id: user.id, username: user.username, email: user.email, createdAt: user.created_at });
const tokenHash = token => createHash('sha256').update(token).digest('hex');
const fail = (status, message) => Object.assign(new Error(message), { status });

function createApp({ databasePath = process.env.DATABASE_PATH || path.join(__dirname, 'data', 'guru.sqlite'), allowedOrigin = process.env.ALLOWED_ORIGIN } = {}) {
  if (databasePath !== ':memory:') mkdirSync(path.dirname(databasePath), { recursive: true });
  const db = new DatabaseSync(databasePath);
  db.exec(`PRAGMA foreign_keys = ON; PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY, username TEXT NOT NULL COLLATE NOCASE UNIQUE,
      email TEXT NOT NULL COLLATE NOCASE UNIQUE, password_hash TEXT NOT NULL,
      salt TEXT NOT NULL, created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS sessions (
      token_hash TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), expires_at INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS results (
      id TEXT PRIMARY KEY, user_id TEXT NOT NULL REFERENCES users(id), exam_type TEXT NOT NULL,
      correct INTEGER NOT NULL, total INTEGER NOT NULL, percentage REAL NOT NULL,
      wrong_questions TEXT NOT NULL, topics TEXT NOT NULL, timestamp TEXT NOT NULL
    );
    CREATE INDEX IF NOT EXISTS results_user ON results(user_id);
    CREATE INDEX IF NOT EXISTS results_exam ON results(exam_type);`);

  function send(res, status, body) {
    res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
    res.end(JSON.stringify(body));
  }
  async function readBody(req) {
    let body = '';
    for await (const chunk of req) {
      body += chunk;
      if (Buffer.byteLength(body) > 65536) throw fail(413, 'Requisição muito grande');
    }
    try {
      const data = JSON.parse(body);
      if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error();
      return data;
    } catch { throw fail(400, 'JSON inválido'); }
  }
  function authenticate(req) {
    const token = (req.headers.authorization || '').replace(/^Bearer /, '');
    const session = db.prepare('SELECT user_id FROM sessions WHERE token_hash = ? AND expires_at > ?').get(tokenHash(token), Date.now());
    if (!session) throw fail(401, 'Sua sessão expirou. Entre novamente.');
    return session.user_id;
  }
  function sessionFor(user) {
    const token = randomBytes(32).toString('hex');
    db.prepare('DELETE FROM sessions WHERE expires_at <= ?').run(Date.now());
    db.prepare('INSERT INTO sessions VALUES (?, ?, ?)').run(tokenHash(token), user.id, Date.now() + 30 * 86400000);
    return { user: publicUser(user), token };
  }
  // Limit repeated authentication requests without retaining IPs indefinitely.
  const attempts = new Map();
  const server = http.createServer(async (req, res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (allowedOrigin && req.headers.origin === allowedOrigin) {
      res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
      res.setHeader('Vary', 'Origin');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    }
    if (req.method === 'OPTIONS') { res.writeHead(204); res.end(); return; }
    try {
      const url = new URL(req.url, 'http://localhost');
      if (url.pathname === '/api/health') return send(res, 200, { ok: true });
      if (req.method === 'POST' && ['/api/register', '/api/login'].includes(url.pathname)) {
        const now = Date.now();
        for (const [key, value] of attempts) if (value.until <= now) attempts.delete(key);
        const ip = req.socket.remoteAddress;
        const attempt = attempts.get(ip) || { count: 0, until: now + 60000 };
        attempts.set(ip, attempt);
        if (++attempt.count > 20) throw fail(429, 'Muitas tentativas. Aguarde um minuto.');
        const body = await readBody(req);
        const username = typeof body.username === 'string' ? body.username.trim() : '';
        if (typeof body.password !== 'string' || body.password.length < 6 || body.password.length > 256) throw fail(400, 'A senha deve ter entre 6 e 256 caracteres');
        if (url.pathname === '/api/register') {
          const email = typeof body.email === 'string' ? body.email.trim() : '';
          if (!/^[A-Za-z0-9_.-]{3,20}$/.test(username) || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw fail(400, 'Usuário ou email inválido');
          const salt = randomBytes(16).toString('hex');
          const passwordHash = (await hashPassword(body.password, salt, 64)).toString('hex');
          const user = { id: randomUUID(), username, email, created_at: new Date().toISOString() };
          try {
            db.prepare('INSERT INTO users VALUES (?, ?, ?, ?, ?, ?)').run(user.id, username, email, passwordHash, salt, user.created_at);
          } catch (error) {
            if (error.code === 'ERR_SQLITE_ERROR' && error.message.includes('UNIQUE')) throw fail(409, 'Usuário ou email já cadastrado');
            throw error;
          }
          return send(res, 201, sessionFor(user));
        }
        const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
        const derived = await hashPassword(body.password, user ? user.salt : 'invalid-user', 64);
        if (!user || !timingSafeEqual(derived, Buffer.from(user.password_hash, 'hex'))) throw fail(401, 'Usuário ou senha incorretos');
        return send(res, 200, sessionFor(user));
      }
      if (req.method === 'POST' && url.pathname === '/api/logout') {
        db.prepare('DELETE FROM sessions WHERE token_hash = ?').run(tokenHash((req.headers.authorization || '').replace(/^Bearer /, '')));
        return send(res, 200, { ok: true });
      }
      if (req.method === 'GET' && url.pathname === '/api/ranking') {
        const examType = url.searchParams.get('examType');
        if (examType && !examTypes.includes(examType)) throw fail(400, 'Trilha inválida');
        const ranking = db.prepare(`WITH scores AS (
          SELECT r.user_id AS userId, u.username, r.exam_type AS examType,
            SUM(r.correct) AS totalCorrect, COUNT(*) AS totalExams, MAX(r.percentage) AS bestPercentage
          FROM results r JOIN users u ON u.id = r.user_id GROUP BY r.user_id, r.exam_type
        ) SELECT *, ROW_NUMBER() OVER (PARTITION BY examType ORDER BY bestPercentage DESC, totalCorrect DESC, userId) AS position
          FROM scores WHERE (? IS NULL OR examType = ?) ORDER BY examType, position`).all(examType, examType);
        return send(res, 200, ranking);
      }
      if (url.pathname === '/api/results') {
        const userId = authenticate(req);
        if (req.method === 'GET') {
          const results = db.prepare('SELECT * FROM results WHERE user_id = ? ORDER BY timestamp DESC').all(userId).map(r => ({
            id: r.id, userId: r.user_id, examType: r.exam_type, correct: r.correct, total: r.total,
            percentage: r.percentage, passed: r.percentage >= 70, wrongQuestions: JSON.parse(r.wrong_questions),
            topics: JSON.parse(r.topics), timestamp: r.timestamp
          }));
          return send(res, 200, results);
        }
        if (req.method === 'POST') {
          const body = await readBody(req);
          if (body.userId && body.userId !== userId) throw fail(403, 'Este resultado pertence a outra conta');
          const { id, examType, correct, total } = body;
          if (typeof id !== 'string' || !/^[\w-]{1,80}$/.test(id) || !examTypes.includes(examType) ||
              !Number.isInteger(correct) || !Number.isInteger(total) || total !== (examType === 'cloud-practitioner' ? 65 : 20) || correct < 0 || correct > total ||
              !Array.isArray(body.wrongQuestions) || !body.wrongQuestions.every(q => typeof q === 'string' || Number.isInteger(q)) ||
              !Array.isArray(body.topics) || !body.topics.every(t => typeof t === 'string' && t.length <= 500)) throw fail(400, 'Resultado inválido');
          const existing = db.prepare('SELECT user_id FROM results WHERE id = ?').get(id);
          if (existing && existing.user_id !== userId) throw fail(409, 'Identificador de resultado indisponível');
          db.prepare('INSERT OR IGNORE INTO results VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)').run(
            id, userId, examType, correct, total, Number((correct / total * 100).toFixed(1)),
            JSON.stringify(body.wrongQuestions), JSON.stringify(body.topics), new Date().toISOString()
          );
          return send(res, 201, { id });
        }
      }
      // A single persistent Node service can host both the API and the React build.
      if (req.method === 'GET' && !url.pathname.startsWith('/api/')) {
        const root = path.resolve(__dirname, '../build');
        const target = path.resolve(root, '.' + decodeURIComponent(url.pathname));
        if (!target.startsWith(root + path.sep) && target !== root) throw fail(404, 'Não encontrado');
        const file = existsSync(target) && require('node:fs').statSync(target).isFile() ? target : path.join(root, 'index.html');
        if (existsSync(file)) {
          const types = { '.html': 'text/html; charset=utf-8', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.jpg': 'image/jpeg', '.webp': 'image/webp' };
          res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
          res.end(readFileSync(file));
          return;
        }
      }
      throw fail(404, 'Não encontrado');
    } catch (error) {
      if (!error.status) console.error(error);
      send(res, error.status || 500, { message: error.status ? error.message : 'Erro interno no servidor' });
    }
  });
  server.on('close', () => db.close());
  return server;
}

if (require.main === module) {
  const port = Number(process.env.PORT || 3001);
  createApp().listen(port, '0.0.0.0', () => console.log(`Guru Certificate: http://localhost:${port}`));
}
module.exports = { createApp };
