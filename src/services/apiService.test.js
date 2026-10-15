import { registerUser, saveExamResult, getRanking, logoutUser } from './apiService';

const ok = data => Promise.resolve({ ok: true, json: async () => data });
beforeEach(() => { localStorage.clear(); global.fetch = jest.fn(); });
afterEach(() => { delete global.fetch; });

test('resultado offline fica pendente e sincroniza ao consultar o ranking', async () => {
  fetch.mockImplementationOnce(() => ok({ user: { id: 'student', username: 'Estudante' }, token: 'session-token' }));
  await registerUser('Estudante', 'student@example.com', 'senha123');
  expect(localStorage.getItem('guru_certificate_session')).not.toContain('senha123');
  fetch.mockRejectedValueOnce(new TypeError('offline'));
  await expect(saveExamResult('student', 'developer-associate', { correct: 18, total: 20 })).rejects.toThrow('conectar');
  const pending = JSON.parse(localStorage.getItem('guru_certificate_pending_results'));
  expect(pending).toHaveLength(1);
  fetch.mockImplementationOnce(() => ok({ id: pending[0].id })).mockImplementationOnce(() => ok([]));
  await getRanking();
  expect(JSON.parse(localStorage.getItem('guru_certificate_pending_results'))).toEqual([]);
  expect(JSON.parse(fetch.mock.calls[2][1].body).id).toBe(pending[0].id);
  fetch.mockImplementationOnce(() => ok({ ok: true }));
  logoutUser();
  expect(localStorage.getItem('guru_certificate_session')).toBeNull();
});
