// Contas e resultados compartilhados pelo backend.
const API_URL = (process.env.REACT_APP_API_URL || '').replace(/\/$/, '');
const SESSION_KEY = 'guru_certificate_session';
const PENDING_KEY = 'guru_certificate_pending_results';
const readLocal = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
};

async function request(endpoint, options = {}) {
  const session = readLocal(SESSION_KEY, null);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(`${API_URL}/api${endpoint}`, {
      ...options,
      headers: { 'Content-Type': 'application/json', ...(session ? { Authorization: `Bearer ${session.token}` } : {}) },
      signal: controller.signal
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Não foi possível concluir a solicitação');
    return data;
  } catch (error) {
    if (error.name === 'AbortError' || error instanceof TypeError || error instanceof SyntaxError) {
      throw new Error('Não foi possível conectar ao servidor. Tente novamente.');
    }
    throw error;
  } finally { clearTimeout(timeout); }
}

async function authenticate(endpoint, body) {
  const session = await request(endpoint, { method: 'POST', body: JSON.stringify(body) });
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  localStorage.removeItem('guru_certificate_current_user');
  return session.user;
}
export const registerUser = (username, email, password) => authenticate('/register', { username, email, password });
export const loginUser = (username, password) => authenticate('/login', { username, password });
export const getCurrentUser = () => readLocal(SESSION_KEY, null)?.user || null;
export const logoutUser = () => {
  request('/logout', { method: 'POST' }).catch(() => {});
  localStorage.removeItem(SESSION_KEY);
};

export const syncPendingResults = async () => {
  const currentUser = getCurrentUser();
  if (!currentUser) return;
  const pending = readLocal(PENDING_KEY, []);
  for (const result of pending.filter(r => r.userId === currentUser.id)) {
    await request('/results', { method: 'POST', body: JSON.stringify(result) });
    localStorage.setItem(PENDING_KEY, JSON.stringify(readLocal(PENDING_KEY, []).filter(r => r.id !== result.id)));
  }
};

export const saveExamResult = async (userId, examType, result) => {
  if (getCurrentUser()?.id !== userId) throw new Error('Entre novamente para salvar o resultado');
  const examResult = {
    ...result, userId, examType,
    id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    wrongQuestions: result.wrongQuestions || [], topics: result.topics || []
  };
  localStorage.setItem(PENDING_KEY, JSON.stringify([...readLocal(PENDING_KEY, []), examResult]));
  await syncPendingResults();
  return examResult;
};

export const getUserResults = async (userId) => {
  if (getCurrentUser()?.id !== userId) return [];
  await syncPendingResults();
  return request('/results');
};

export const getRanking = async (examType = null) => {
  await syncPendingResults().catch(() => {});
  return request(`/ranking${examType ? `?examType=${encodeURIComponent(examType)}` : ''}`);
};
