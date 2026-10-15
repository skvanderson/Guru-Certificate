const examTypes = ['cloud-practitioner', 'developer-associate', 'solutions-architect'];
const fail = (status, message) => Object.assign(new Error(message), { status });
const encoder = new TextEncoder();
const hex = buffer => [...new Uint8Array(buffer)].map(n => n.toString(16).padStart(2, '0')).join('');
const digest = async value => hex(await crypto.subtle.digest('SHA-256', encoder.encode(value)));
const randomToken = () => hex(crypto.getRandomValues(new Uint8Array(32)));
const headers = {
  'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff', 'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
};
const json = (status, body) => new Response(JSON.stringify(body), { status, headers });
const publicUser = user => ({ id: user.id, username: user.username, email: user.email, createdAt: user.created_at });

async function passwordHash(password, salt) {
  const key = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveBits']);
  return hex(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: encoder.encode(salt), iterations: 100000 }, key, 256));
}
async function bodyOf(request) {
  if (Number(request.headers.get('Content-Length')) > 65536) throw fail(413, 'Requisição muito grande');
  const reader = request.body?.getReader();
  if (!reader) throw fail(400, 'JSON inválido');
  const chunks = [];
  let size = 0;
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 65536) { await reader.cancel(); throw fail(413, 'Requisição muito grande'); }
    chunks.push(value);
  }
  const buffer = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) { buffer.set(chunk, offset); offset += chunk.length; }
  try {
    const data = JSON.parse(new TextDecoder().decode(buffer));
    if (!data || typeof data !== 'object' || Array.isArray(data)) throw new Error();
    return data;
  } catch { throw fail(400, 'JSON inválido'); }
}
async function authenticate(request, db) {
  const token = (request.headers.get('Authorization') || '').replace(/^Bearer /, '');
  const session = await db.prepare('SELECT user_id FROM sessions WHERE token_hash = ? AND expires_at > ?').bind(await digest(token), Date.now()).first();
  if (!session) throw fail(401, 'Sua sessão expirou. Entre novamente.');
  return session.user_id;
}
async function sessionFor(user, db) {
  const token = randomToken();
  await db.batch([
    db.prepare('DELETE FROM sessions WHERE expires_at <= ?').bind(Date.now()),
    db.prepare('INSERT INTO sessions VALUES (?, ?, ?)').bind(await digest(token), user.id, Date.now() + 30 * 86400000)
  ]);
  return { user: publicUser(user), token };
}
async function limitAuth(request, username, db) {
  const now = Date.now();
  const key = await digest(`${request.headers.get('CF-Connecting-IP') || 'unknown'}:${username.toLowerCase()}`);
  const statements = await db.batch([
    db.prepare('DELETE FROM auth_attempts WHERE expires_at <= ?').bind(now),
    db.prepare('INSERT INTO auth_attempts VALUES (?, 1, ?) ON CONFLICT(key) DO UPDATE SET count = count + 1 RETURNING count').bind(key, now + 60000)
  ]);
  if (statements[1].results[0].count > 20) throw fail(429, 'Muitas tentativas. Aguarde um minuto.');
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
    const db = env.DB;
    try {
      const url = new URL(request.url);
      if (request.method === 'GET' && url.pathname === '/') return json(200, { service: 'Guru Certificate API', health: '/api/health', ranking: '/api/ranking' });
      if (request.method === 'GET' && url.pathname === '/api/health') {
        await db.prepare('SELECT 1 FROM users LIMIT 1').first();
        return json(200, { ok: true });
      }
      if (request.method === 'POST' && ['/api/register', '/api/login'].includes(url.pathname)) {
        const body = await bodyOf(request);
        const username = typeof body.username === 'string' ? body.username.trim() : '';
        if (username.length > 20 || typeof body.password !== 'string' || body.password.length < 6 || body.password.length > 256) throw fail(400, 'Usuário ou senha inválidos');
        await limitAuth(request, username, db);
        if (url.pathname === '/api/register') {
          const email = typeof body.email === 'string' ? body.email.trim() : '';
          if (!/^[A-Za-z0-9_.-]{3,20}$/.test(username) || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw fail(400, 'Usuário ou email inválido');
          const salt = randomToken();
          const hash = await passwordHash(body.password, salt);
          const user = { id: crypto.randomUUID(), username, email, created_at: new Date().toISOString() };
          try {
            await db.prepare('INSERT INTO users VALUES (?, ?, ?, ?, ?, ?)').bind(user.id, username, email, hash, salt, user.created_at).run();
          } catch (error) {
            if (error.message.includes('UNIQUE')) throw fail(409, 'Usuário ou email já cadastrado');
            throw error;
          }
          return json(201, await sessionFor(user, db));
        }
        const user = await db.prepare('SELECT * FROM users WHERE username = ?').bind(username).first();
        const hash = await passwordHash(body.password, user?.salt || 'invalid-user');
        // Compare fixed-length derived hashes without early exit.
        const expected = user?.password_hash || '0'.repeat(64);
        let difference = 0;
        for (let i = 0; i < 64; i++) difference |= hash.charCodeAt(i) ^ expected.charCodeAt(i);
        if (!user || difference) throw fail(401, 'Usuário ou senha incorretos');
        return json(200, await sessionFor(user, db));
      }
      if (request.method === 'POST' && url.pathname === '/api/logout') {
        await db.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(await digest((request.headers.get('Authorization') || '').replace(/^Bearer /, ''))).run();
        return json(200, { ok: true });
      }
      if (request.method === 'GET' && url.pathname === '/api/ranking') {
        const examType = url.searchParams.get('examType');
        if (examType && !examTypes.includes(examType)) throw fail(400, 'Trilha inválida');
        const ranking = await db.prepare(`WITH scores AS (
          SELECT r.user_id AS userId, u.username, r.exam_type AS examType,
            SUM(r.correct) AS totalCorrect, COUNT(*) AS totalExams, MAX(r.percentage) AS bestPercentage
          FROM results r JOIN users u ON u.id = r.user_id GROUP BY r.user_id, r.exam_type
        ) SELECT *, ROW_NUMBER() OVER (PARTITION BY examType ORDER BY bestPercentage DESC, totalCorrect DESC, userId) AS position
          FROM scores WHERE (? IS NULL OR examType = ?) ORDER BY examType, position`).bind(examType, examType).all();
        return json(200, ranking.results);
      }
      if (url.pathname === '/api/results') {
        const userId = await authenticate(request, db);
        if (request.method === 'GET') {
          const { results } = await db.prepare('SELECT * FROM results WHERE user_id = ? ORDER BY timestamp DESC').bind(userId).all();
          return json(200, results.map(r => ({
            id: r.id, userId: r.user_id, examType: r.exam_type, correct: r.correct, total: r.total,
            percentage: r.percentage, passed: r.percentage >= 70, wrongQuestions: JSON.parse(r.wrong_questions),
            topics: JSON.parse(r.topics), timestamp: r.timestamp
          })));
        }
        if (request.method === 'POST') {
          const body = await bodyOf(request);
          if (body.userId && body.userId !== userId) throw fail(403, 'Este resultado pertence a outra conta');
          const { id, examType, correct, total } = body;
          if (typeof id !== 'string' || !/^[\w-]{1,80}$/.test(id) || !examTypes.includes(examType) ||
            !Number.isInteger(correct) || !Number.isInteger(total) || total !== (examType === 'cloud-practitioner' ? 65 : 20) || correct < 0 || correct > total ||
            !Array.isArray(body.wrongQuestions) || !body.wrongQuestions.every(q => typeof q === 'string' || Number.isInteger(q)) ||
            !Array.isArray(body.topics) || !body.topics.every(t => typeof t === 'string' && t.length <= 500)) throw fail(400, 'Resultado inválido');
          const existing = await db.prepare('SELECT user_id FROM results WHERE id = ?').bind(id).first();
          if (existing && existing.user_id !== userId) throw fail(409, 'Identificador de resultado indisponível');
          await db.prepare('INSERT OR IGNORE INTO results VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)').bind(
            id, userId, examType, correct, total, Number((correct / total * 100).toFixed(1)),
            JSON.stringify(body.wrongQuestions), JSON.stringify(body.topics), new Date().toISOString()
          ).run();
          // A concurrent conflicting insert must not be reported as a successful save.
          const saved = await db.prepare('SELECT user_id FROM results WHERE id = ?').bind(id).first();
          if (saved.user_id !== userId) throw fail(409, 'Identificador de resultado indisponível');
          return json(201, { id });
        }
      }
      throw fail(404, 'Não encontrado');
    } catch (error) {
      if (!error.status) console.error('API failure:', error.message);
      return json(error.status || 500, { message: error.status ? error.message : 'Erro interno no servidor' });
    }
  }
};
