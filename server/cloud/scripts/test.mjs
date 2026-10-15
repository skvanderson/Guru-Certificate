import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFile } from 'node:fs/promises';
import worker from '../worker/index.js';
const sqlite = new DatabaseSync(':memory:');
sqlite.exec(await readFile(new URL('../drizzle/0000_guru.sql', import.meta.url), 'utf8'));
const db = {
  prepare(sql) {
    let values = [];
    return {
      bind(...args) { values = args; return this; },
      async first() { return sqlite.prepare(sql).get(...values) || null; },
      async all() { return { results: sqlite.prepare(sql).all(...values) }; },
      async run() { return sqlite.prepare(sql).run(...values); }
    };
  },
  async batch(statements) { const results=[]; for(const stmt of statements) results.push(await stmt.all()); return results; }
};
async function call(path, body, token) {
  const response = await worker.fetch(new Request(`https://api.example.com${path}`, {
    method: body ? 'POST' : 'GET', headers: { 'Content-Type':'application/json', ...(token ? { Authorization:`Bearer ${token}` } : {}) },
    ...(body ? { body:JSON.stringify(body) } : {})
  }), { DB:db });
  return { status:response.status, data:await response.json() };
}
try {
  assert.equal((await call('/api/health')).status, 200);
  const first = await call('/api/register', { username:'estudante', email:'first@example.com', password:'senha123' });
  assert.equal(first.status, 201);
  const { user, token } = first.data;
  assert.equal(user.password_hash, undefined);
  assert.equal((await call('/api/register', { username:'ESTUDANTE', email:'third@example.com', password:'senha123' })).status, 409);
  const exam = { id:'attempt-1', userId:user.id, examType:'developer-associate', correct:18, total:20, percentage:100, wrongQuestions:[], topics:[] };
  assert.equal((await call('/api/results', exam)).status, 401);
  assert.equal((await call('/api/results', exam, token)).status, 201);
  await call('/api/results', exam, token);
  const newcomer = (await call('/api/register', { username:'novo', email:'new@example.com', password:'senha123' })).data;
  assert.deepEqual((await call('/api/results', null, newcomer.token)).data, []);
  assert.equal((await call('/api/results', exam, newcomer.token)).status, 403);
  const ranking = (await call('/api/ranking')).data;
  assert.equal(ranking.length, 1);
  assert.equal(ranking[0].username, 'estudante');
  assert.equal(ranking[0].totalExams, 1);
  assert.equal(ranking[0].bestPercentage, 90);
  assert.equal(ranking[0].email, undefined);
  assert.deepEqual((await call('/api/ranking?examType=cloud-practitioner')).data, []);
  await call('/api/results', { ...exam, id:'attempt-2', userId:newcomer.user.id, correct:20 }, newcomer.token);
  assert.deepEqual((await call('/api/ranking')).data.map(r=>[r.username,r.position]), [['novo',1],['estudante',2]]);
  assert.equal((await call('/api/results', { ...exam, id:'invalid', correct:21 }, token)).status, 400);
  assert.equal((await call('/api/login', { username:'estudante', password:'errada' })).status, 401);
  const login = await call('/api/login', { username:'estudante', password:'senha123' });
  assert.equal(login.status, 200);
  await call('/api/logout', {}, login.data.token);
  assert.equal((await call('/api/results', null, login.data.token)).status, 401);
  const preflight = await worker.fetch(new Request('https://api.example.com/api/register', { method:'OPTIONS' }), { DB:db });
  assert.equal(preflight.status, 204);
  assert.equal(preflight.headers.get('Access-Control-Allow-Headers'), 'Content-Type, Authorization');
  console.log('PASS: cadastro, login, duas contas, ranking público, filtros, validação, privacidade, reenvio e CORS.');
} finally { sqlite.close(); }
