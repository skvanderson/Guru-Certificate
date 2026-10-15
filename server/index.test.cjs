const { test } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const { mkdtempSync, rmSync } = require('node:fs');
const { tmpdir } = require('node:os');
const path = require('node:path');
const { createApp } = require('./index.cjs');

test('ranking compartilhado, autenticação, filtros e persistência após reiniciar', async () => {
  const directory = mkdtempSync(path.join(tmpdir(), 'guru-ranking-'));
  const databasePath = path.join(directory, 'test.sqlite');
  let server;
  let base;
  async function start() {
    server = createApp({ databasePath });
    server.listen(0, '127.0.0.1');
    await once(server, 'listening');
    base = `http://127.0.0.1:${server.address().port}/api`;
  }
  async function call(route, body, token) {
    const response = await fetch(base + route, { method: body ? 'POST' : 'GET',
      headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      ...(body ? { body: JSON.stringify(body) } : {}) });
    return { status: response.status, data: await response.json() };
  }
  const exam = (id, correct, examType = 'developer-associate') => ({ id, correct, total: examType === 'cloud-practitioner' ? 65 : 20, examType, wrongQuestions: [], topics: [] });
  try {
    await start();
    const student = (await call('/register', { username: 'estudante', email: 'estudante@example.com', password: 'senha123' })).data;
    assert.ok(student.token);
    assert.equal(student.user.password, undefined);
    assert.equal((await call('/register', { username: 'ESTUDANTE', email: 'other@example.com', password: 'senha123' })).status, 409);
    assert.equal((await call('/results', exam('unauthorized', 18))).status, 401);
    assert.equal((await call('/results', exam('attempt-1', 18), student.token)).status, 201);
    await call('/results', exam('attempt-1', 18), student.token); // Retry must not duplicate.
    await call('/results', exam('attempt-2', 15), student.token);
    await call('/results', exam('cloud-1', 50, 'cloud-practitioner'), student.token);
    const newcomer = (await call('/register', { username: 'novo', email: 'novo@example.com', password: 'senha123' })).data;
    assert.deepEqual((await call('/results', null, newcomer.token)).data, []);
    const ranking = await call('/ranking'); // Separate unauthenticated client.
    assert.equal(ranking.data.length, 2);
    const developer = ranking.data.find(r => r.examType === 'developer-associate');
    assert.equal(developer.username, 'estudante');
    assert.equal(developer.bestPercentage, 90);
    assert.equal(developer.totalExams, 2);
    assert.equal(developer.position, 1);
    assert.equal(developer.email, undefined);
    await call('/results', exam('new-1', 20), newcomer.token);
    const filtered = (await call('/ranking?examType=developer-associate')).data;
    assert.deepEqual(filtered.map(r => [r.username, r.position]), [['novo', 1], ['estudante', 2]]);
    assert.equal((await call('/results', { ...exam('bad', 22) }, student.token)).status, 400);
    assert.equal((await call('/results', { ...exam('wrong-user', 20), userId: student.user.id }, newcomer.token)).status, 403);
    assert.equal((await call('/results', exam('attempt-1', 20), newcomer.token)).status, 409);
    assert.equal((await call('/login', { username: 'estudante', password: 'errada123' })).status, 401);
    await new Promise(resolve => server.close(resolve));
    await start();
    assert.equal((await call('/ranking')).data.length, 3);
    assert.equal((await call('/results', null, student.token)).data.length, 3);
    const login = await call('/login', { username: 'estudante', password: 'senha123' });
    assert.equal(login.status, 200);
    await call('/logout', {}, login.data.token);
    assert.equal((await call('/results', null, login.data.token)).status, 401);
  } finally {
    if (server?.listening) await new Promise(resolve => server.close(resolve));
    rmSync(directory, { recursive: true, force: true });
  }
});
