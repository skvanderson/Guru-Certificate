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
  const exam = (id, correct, examType = 'developer-associate') => ({ id, correct, total: ({ 'cloud-practitioner': 65, 'cloud-practitioner-2': 69 })[examType] || 20, examType, wrongQuestions: [], topics: [] });
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
    await call('/results', exam('new-cloud', 65, 'cloud-practitioner'), newcomer.token);
    await call('/results', exam('new-solutions', 20, 'solutions-architect'), newcomer.token);
    const ana = (await call('/register', { username: 'Ana', email: 'ana@example.com', password: 'senha123' })).data;
    await call('/results', exam('ana-1', 20), ana.token);
    // Ranking geral: nota, depois nome, depois prova; empates dividem a posição sem pular a seguinte.
    const overall = (await call('/ranking')).data;
    assert.deepEqual(overall.map(r => [r.username, r.examType, r.position]), [
      ['Ana', 'developer-associate', 1],
      ['novo', 'cloud-practitioner', 1],
      ['novo', 'developer-associate', 1],
      ['novo', 'solutions-architect', 1],
      ['estudante', 'developer-associate', 2],
      ['estudante', 'cloud-practitioner', 3]
    ]);
    assert.equal((await call('/results', exam('cloud-2', 69, 'cloud-practitioner-2'), student.token)).status, 201);
    assert.equal((await call('/results', { ...exam('bad-total', 60, 'cloud-practitioner-2'), total: 65 }, student.token)).status, 400);
    assert.equal((await call('/results', { ...exam('wrong-bank', 60, 'cloud-practitioner'), total: 69 }, student.token)).status, 400);
    const practitioner2 = (await call('/ranking?examType=cloud-practitioner-2')).data;
    assert.equal(practitioner2.length, 1);
    assert.equal(practitioner2[0].bestPercentage, 100);
    assert.equal((await call('/ranking?examType=cloud-practitioner')).data.length, 2);
    assert.equal((await call('/results', { ...exam('bad', 22) }, student.token)).status, 400);
    assert.equal((await call('/results', { ...exam('wrong-user', 20), userId: student.user.id }, newcomer.token)).status, 403);
    assert.equal((await call('/results', exam('attempt-1', 20), newcomer.token)).status, 409);
    assert.equal((await call('/login', { username: 'estudante', password: 'errada123' })).status, 401);
    await new Promise(resolve => server.close(resolve));
    await start();
    assert.equal((await call('/ranking')).data.length, 7);
    assert.equal((await call('/results', null, student.token)).data.length, 4);
    const login = await call('/login', { username: 'estudante', password: 'senha123' });
    assert.equal(login.status, 200);
    await call('/logout', {}, login.data.token);
    assert.equal((await call('/results', null, login.data.token)).status, 401);
  } finally {
    if (server?.listening) await new Promise(resolve => server.close(resolve));
    rmSync(directory, { recursive: true, force: true });
  }
});
