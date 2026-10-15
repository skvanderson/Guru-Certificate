import { getUserResults } from './apiService';
export { registerUser, loginUser, getCurrentUser, logoutUser, saveExamResult, getRanking, getUserResults } from './apiService';

export const getUserStatistics = async (userId) => {
  const results = await getUserResults(userId);
  
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

