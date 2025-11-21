// Serviço para gerenciar usuários e resultados dos simulados

const STORAGE_KEYS = {
  USERS: 'guru_certificate_users',
  CURRENT_USER: 'guru_certificate_current_user',
  RESULTS: 'guru_certificate_results'
};

// Funções de usuário
export const registerUser = (username, email, password) => {
  const users = getUsers();
  
  // Verificar se usuário já existe
  if (users.find(u => u.username === username || u.email === email)) {
    throw new Error('Usuário ou email já cadastrado');
  }
  
  // Validar senha
  if (!password || password.length < 6) {
    throw new Error('A senha deve ter pelo menos 6 caracteres');
  }
  
  const newUser = {
    id: Date.now().toString(),
    username,
    email,
    password, // Em produção, isso deveria ser hash
    createdAt: new Date().toISOString()
  };
  
  users.push(newUser);
  localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  
  // Fazer login automático
  setCurrentUser(newUser);
  
  return newUser;
};

export const loginUser = (username, password) => {
  const users = getUsers();
  const user = users.find(u => u.username === username);
  
  if (!user) {
    throw new Error('Usuário não encontrado');
  }
  
  if (!password || user.password !== password) {
    throw new Error('Senha incorreta');
  }
  
  setCurrentUser(user);
  return user;
};

export const logoutUser = () => {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
};

export const getCurrentUser = () => {
  const userStr = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
  return userStr ? JSON.parse(userStr) : null;
};

export const getUsers = () => {
  const usersStr = localStorage.getItem(STORAGE_KEYS.USERS);
  return usersStr ? JSON.parse(usersStr) : [];
};

const setCurrentUser = (user) => {
  localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
};

// Funções de resultados
export const saveExamResult = (userId, examType, result) => {
  const results = getResults();
  
  const examResult = {
    id: Date.now().toString(),
    userId,
    examType, // 'cloud-practitioner', 'developer-associate', 'solutions-architect'
    correct: result.correct,
    total: result.total,
    percentage: parseFloat(result.percentage),
    passed: result.passed,
    wrongQuestions: result.wrongQuestions || [], // IDs das questões erradas
    topics: result.topics || [], // Assuntos das questões erradas
    timestamp: new Date().toISOString()
  };
  
  results.push(examResult);
  localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(results));
  
  return examResult;
};

export const getUserResults = (userId) => {
  const results = getResults();
  return results.filter(r => r.userId === userId);
};

export const getAllResults = () => {
  return getResults();
};

const getResults = () => {
  const resultsStr = localStorage.getItem(STORAGE_KEYS.RESULTS);
  return resultsStr ? JSON.parse(resultsStr) : [];
};

// Funções de estatísticas
export const getUserStatistics = (userId) => {
  const results = getUserResults(userId);
  
  if (results.length === 0) {
    return {
      totalExams: 0,
      totalCorrect: 0,
      totalWrong: 0,
      totalQuestions: 0,
      averagePercentage: 0,
      byExamType: {
        'cloud-practitioner': { exams: 0, correct: 0, wrong: 0 },
        'developer-associate': { exams: 0, correct: 0, wrong: 0 },
        'solutions-architect': { exams: 0, correct: 0, wrong: 0 }
      },
      topicsToReview: [],
      detailedResults: []
    };
  }
  
  let totalCorrect = 0;
  let totalWrong = 0;
  let totalQuestions = 0;
  let totalPercentage = 0;
  const byExamType = {
    'cloud-practitioner': { exams: 0, correct: 0, wrong: 0 },
    'developer-associate': { exams: 0, correct: 0, wrong: 0 },
    'solutions-architect': { exams: 0, correct: 0, wrong: 0 }
  };
  const topicsMap = {};
  
  // Ordenar resultados por data (mais recente primeiro)
  const sortedResults = [...results].sort((a, b) => 
    new Date(b.timestamp) - new Date(a.timestamp)
  );
  
  sortedResults.forEach(result => {
    totalCorrect += result.correct;
    totalWrong += (result.total - result.correct);
    totalQuestions += result.total;
    totalPercentage += result.percentage;
    
    // Por tipo de exame
    if (byExamType[result.examType]) {
      byExamType[result.examType].exams += 1;
      byExamType[result.examType].correct += result.correct;
      byExamType[result.examType].wrong += (result.total - result.correct);
    }
    
    // Assuntos para revisar
    if (result.topics && result.topics.length > 0) {
      result.topics.forEach(topic => {
        topicsMap[topic] = (topicsMap[topic] || 0) + 1;
      });
    }
  });
  
  // Ordenar assuntos por frequência (mais erros primeiro)
  const topicsToReview = Object.entries(topicsMap)
    .map(([topic, count]) => ({ topic, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10); // Top 10 assuntos
  
  return {
    totalExams: results.length,
    totalCorrect,
    totalWrong,
    totalQuestions,
    averagePercentage: (totalPercentage / results.length).toFixed(1),
    byExamType,
    topicsToReview,
    detailedResults: sortedResults // Resultados detalhados ordenados por data
  };
};

// Funções de ranking
export const getRanking = (examType = null) => {
  const results = getAllResults();
  const users = getUsers();
  
  // Filtrar resultados por tipo de exame se especificado
  const filteredResults = examType 
    ? results.filter(r => r.examType === examType)
    : results; // Se null, mostrar todos mas agrupar por trilha
  
  // Agrupar por usuário e tipo de exame
  // Sempre usar userId_examType como chave para manter trilhas separadas
  const userScores = {};
  
  filteredResults.forEach(result => {
    // Sempre usar userId_examType como chave para manter trilhas separadas
    const key = `${result.userId}_${result.examType}`;
    
    if (!userScores[key]) {
      const user = users.find(u => u.id === result.userId);
      userScores[key] = {
        userId: result.userId,
        username: user ? user.username : 'Usuário Desconhecido',
        examType: result.examType, // Sempre usar o examType do resultado
        totalCorrect: 0,
        totalExams: 0,
        bestPercentage: 0
      };
    }
    
    userScores[key].totalCorrect += result.correct;
    userScores[key].totalExams += 1;
    if (result.percentage > userScores[key].bestPercentage) {
      userScores[key].bestPercentage = result.percentage;
    }
  });
  
  // Converter para array e ordenar por total de acertos
  // Se examType foi especificado, ordenar apenas dentro daquela trilha
  // Se não, ordenar todas as trilhas juntas
  const ranking = Object.values(userScores)
    .sort((a, b) => {
      // Se examType foi especificado, ordenar apenas por acertos
      if (examType) {
        return b.totalCorrect - a.totalCorrect;
      }
      // Se não, ordenar primeiro por examType, depois por acertos
      if (a.examType !== b.examType) {
        return a.examType.localeCompare(b.examType);
      }
      return b.totalCorrect - a.totalCorrect;
    })
    .map((entry, index) => {
      // Calcular posição considerando apenas a trilha específica
      if (examType) {
        // Se filtrado por trilha, posição é simples
        return {
          ...entry,
          position: index + 1
        };
      } else {
        // Se mostrando todas as trilhas, calcular posição dentro de cada trilha
        const sameTrilha = Object.values(userScores)
          .filter(e => e.examType === entry.examType)
          .sort((a, b) => b.totalCorrect - a.totalCorrect);
        const positionInTrilha = sameTrilha.findIndex(e => 
          e.userId === entry.userId && e.examType === entry.examType
        ) + 1;
        return {
          ...entry,
          position: positionInTrilha
        };
      }
    });
  
  return ranking;
};

// Funções auxiliares para extrair assuntos das questões
export const extractTopicsFromQuestions = (questions, wrongQuestionIds) => {
  const topics = new Set();
  
  wrongQuestionIds.forEach(questionId => {
    const question = questions.find(q => q.id === questionId);
    if (question && question.topic) {
      topics.add(question.topic);
    }
  });
  
  return Array.from(topics);
};

