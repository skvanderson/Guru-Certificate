import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import NavigationButtons from '../components/NavigationButtons';
import { getCurrentUser, getUserStatistics, logoutUser } from '../services/userService';
import { cloudPractitionerQuestions } from '../data/cloudPractitionerQuestions';
import { developerAssociateQuestions } from '../data/developerAssociateQuestions';
import { solutionsArchitectQuestions } from '../data/solutionsArchitectQuestions';

const Container = styled.div`
  min-height: calc(100vh - 80px);
  padding: var(--spacing-8) var(--spacing-4);
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-8);
  flex-wrap: wrap;
  gap: var(--spacing-4);
`;

const Title = styled.h1`
  color: var(--aws-blue);
  font-size: var(--font-size-4xl);
  margin: 0;
`;

const LogoutButton = styled.button`
  padding: var(--spacing-3) var(--spacing-6);
  background-color: var(--aws-red);
  color: var(--aws-white);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #B91C1C;
    transform: translateY(-2px);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-8);
`;

const StatCard = styled.div`
  background: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }
`;

const StatLabel = styled.p`
  color: var(--aws-gray-600);
  font-size: var(--font-size-sm);
  margin: 0 0 var(--spacing-2) 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const StatValue = styled.h2`
  color: var(--aws-blue);
  font-size: var(--font-size-3xl);
  margin: 0;
  font-weight: 700;
`;

const ExamTypeSection = styled.div`
  background: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-6);
`;

const SectionTitle = styled.h2`
  color: var(--aws-blue);
  font-size: var(--font-size-2xl);
  margin: 0 0 var(--spacing-6) 0;
`;

const ExamTypeCard = styled.div`
  background: var(--aws-gray-50);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-4);
  border-left: 4px solid var(--aws-orange);
`;

const ExamTypeName = styled.h3`
  color: var(--aws-gray-800);
  font-size: var(--font-size-lg);
  margin: 0 0 var(--spacing-2) 0;
`;

const ExamTypeStats = styled.div`
  display: flex;
  gap: var(--spacing-6);
  flex-wrap: wrap;
`;

const ExamTypeStat = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExamTypeStatLabel = styled.span`
  color: var(--aws-gray-600);
  font-size: var(--font-size-sm);
`;

const ExamTypeStatValue = styled.span`
  color: var(--aws-blue);
  font-weight: 600;
  font-size: var(--font-size-lg);
`;

const TopicsSection = styled.div`
  background: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
`;

const TopicsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

const TopicItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-3) var(--spacing-4);
  background: var(--aws-gray-50);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--aws-red);
`;

const TopicName = styled.span`
  color: var(--aws-gray-800);
  font-weight: 500;
`;

const TopicCount = styled.span`
  color: var(--aws-red);
  font-weight: 600;
  background: #FEE2E2;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-md);
`;

const ExamDetailsSection = styled.div`
  background: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-6);
`;

const ExamHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-4);
  padding-bottom: var(--spacing-4);
  border-bottom: 2px solid var(--aws-gray-200);
  flex-wrap: wrap;
  gap: var(--spacing-4);
`;

const ExamTitle = styled.h3`
  color: var(--aws-blue);
  font-size: var(--font-size-xl);
  margin: 0;
`;

const ExamDate = styled.span`
  color: var(--aws-gray-600);
  font-size: var(--font-size-sm);
`;

const ExamSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-6);
`;

const SummaryItem = styled.div`
  text-align: center;
  padding: var(--spacing-3);
  background: var(--aws-gray-50);
  border-radius: var(--radius-lg);
`;

const SummaryLabel = styled.div`
  color: var(--aws-gray-600);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-1);
`;

const SummaryValue = styled.div`
  color: var(--aws-blue);
  font-weight: 700;
  font-size: var(--font-size-lg);
`;

const AnalysisBox = styled.div`
  background: linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 100%);
  border-left: 4px solid var(--aws-blue);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-4);
`;

const AnalysisTitle = styled.h4`
  color: var(--aws-blue);
  margin: 0 0 var(--spacing-2) 0;
  font-size: var(--font-size-lg);
`;

const AnalysisText = styled.p`
  color: var(--aws-gray-700);
  margin: 0;
  line-height: 1.6;
`;

const WrongQuestionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

const WrongQuestionItem = styled.div`
  background: var(--aws-gray-50);
  border-left: 4px solid var(--aws-red);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
`;

const QuestionTitle = styled.div`
  color: var(--aws-gray-800);
  font-weight: 600;
  margin-bottom: var(--spacing-2);
  font-size: var(--font-size-base);
`;

const QuestionDescription = styled.div`
  color: var(--aws-gray-600);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-2);
  line-height: 1.5;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-12);
  color: var(--aws-gray-600);
  
  p {
    margin-bottom: var(--spacing-4);
    font-size: var(--font-size-lg);
  }
  
  a {
    color: var(--aws-blue);
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const getExamTypeName = (type) => {
  const names = {
    'cloud-practitioner': 'AWS Cloud Practitioner',
    'developer-associate': 'AWS Developer Associate',
    'solutions-architect': 'AWS Solutions Architect'
  };
  return names[type] || type;
};

const getQuestionsByType = (type) => {
  switch(type) {
    case 'cloud-practitioner':
      return cloudPractitionerQuestions;
    case 'developer-associate':
      return developerAssociateQuestions;
    case 'solutions-architect':
      return solutionsArchitectQuestions;
    default:
      return [];
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

const getPersonalizedAnalysis = (result) => {
  const percentage = result.percentage;
  const wrongCount = result.total - result.correct;
  const total = result.total;
  
  let analysis = '';
  let recommendation = '';
  
  if (percentage >= 90) {
    analysis = 'Excelente desempenho! Você demonstrou domínio sólido do conteúdo.';
    recommendation = 'Continue mantendo esse nível. Considere revisar os poucos erros para alcançar a perfeição.';
  } else if (percentage >= 70) {
    analysis = 'Bom desempenho! Você está no caminho certo para a certificação.';
    recommendation = `Você errou ${wrongCount} de ${total} questões. Foque em revisar os assuntos onde teve mais dificuldade.`;
  } else if (percentage >= 50) {
    analysis = 'Desempenho regular. Há espaço para melhoria significativa.';
    recommendation = `Você errou ${wrongCount} de ${total} questões. É importante revisar os conceitos fundamentais antes de tentar novamente.`;
  } else {
    analysis = 'Desempenho abaixo do esperado. É necessário mais estudo antes de tentar a certificação.';
    recommendation = `Você errou ${wrongCount} de ${total} questões. Recomendamos estudar mais os fundamentos antes de fazer outro simulado.`;
  }
  
  if (result.topics && result.topics.length > 0) {
    recommendation += ` Os assuntos que mais precisam de atenção são: ${result.topics.slice(0, 3).join(', ')}.`;
  }
  
  return { analysis, recommendation };
};

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const currentUser = getCurrentUser();
    
    if (!currentUser) {
      navigate('/cadastro');
      return;
    }
    
    setUser(currentUser);
    const stats = getUserStatistics(currentUser.id);
    setStatistics(stats);
    setLoading(false);
  }, [navigate]);

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  if (loading) {
    return (
      <Container>
        <Content>
          <p>Carregando...</p>
        </Content>
      </Container>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Content>
        <NavigationButtons />
        
        <Header>
          <div>
            <Title>Perfil de {user.username}</Title>
            <p style={{ color: 'var(--aws-gray-600)', margin: 'var(--spacing-2) 0 0 0' }}>
              Acompanhe seu progresso e veja onde precisa melhorar
            </p>
          </div>
          <LogoutButton onClick={handleLogout}>Sair</LogoutButton>
        </Header>

        {statistics.totalExams === 0 ? (
          <EmptyState>
            <p>Você ainda não realizou nenhum simulado.</p>
            <p>
              <Link to="/simulados">Comece agora</Link> e veja suas estatísticas aqui!
            </p>
          </EmptyState>
        ) : (
          <>
            <StatsGrid>
              <StatCard>
                <StatLabel>Total de Simulados</StatLabel>
                <StatValue>{statistics.totalExams}</StatValue>
              </StatCard>
              
              <StatCard>
                <StatLabel>Total de Acertos</StatLabel>
                <StatValue style={{ color: 'var(--aws-green)' }}>
                  {statistics.totalCorrect}
                </StatValue>
              </StatCard>
              
              <StatCard>
                <StatLabel>Total de Erros</StatLabel>
                <StatValue style={{ color: 'var(--aws-red)' }}>
                  {statistics.totalWrong}
                </StatValue>
              </StatCard>
              
              <StatCard>
                <StatLabel>Média de Acertos</StatLabel>
                <StatValue>{statistics.averagePercentage}%</StatValue>
              </StatCard>
            </StatsGrid>

            <ExamTypeSection>
              <SectionTitle>Estatísticas por Certificação</SectionTitle>
              
              {Object.entries(statistics.byExamType).map(([type, stats]) => {
                if (stats.exams === 0) return null;
                
                return (
                  <ExamTypeCard key={type}>
                    <ExamTypeName>{getExamTypeName(type)}</ExamTypeName>
                    <ExamTypeStats>
                      <ExamTypeStat>
                        <ExamTypeStatLabel>Simulados</ExamTypeStatLabel>
                        <ExamTypeStatValue>{stats.exams}</ExamTypeStatValue>
                      </ExamTypeStat>
                      <ExamTypeStat>
                        <ExamTypeStatLabel>Acertos</ExamTypeStatLabel>
                        <ExamTypeStatValue style={{ color: 'var(--aws-green)' }}>
                          {stats.correct}
                        </ExamTypeStatValue>
                      </ExamTypeStat>
                      <ExamTypeStat>
                        <ExamTypeStatLabel>Erros</ExamTypeStatLabel>
                        <ExamTypeStatValue style={{ color: 'var(--aws-red)' }}>
                          {stats.wrong}
                        </ExamTypeStatValue>
                      </ExamTypeStat>
                    </ExamTypeStats>
                  </ExamTypeCard>
                );
              })}
            </ExamTypeSection>

            {statistics.topicsToReview.length > 0 && (
              <TopicsSection>
                <SectionTitle>Assuntos para Revisar (Geral)</SectionTitle>
                <p style={{ color: 'var(--aws-gray-600)', marginBottom: 'var(--spacing-4)' }}>
                  Estes são os assuntos que você mais errou em todos os simulados. Foque neles para melhorar seu desempenho!
                </p>
                <TopicsList>
                  {statistics.topicsToReview.map((item, index) => (
                    <TopicItem key={index}>
                      <TopicName>{item.topic}</TopicName>
                      <TopicCount>{item.count} erro{item.count > 1 ? 's' : ''}</TopicCount>
                    </TopicItem>
                  ))}
                </TopicsList>
              </TopicsSection>
            )}

            {statistics.detailedResults && statistics.detailedResults.length > 0 && (
              <ExamDetailsSection>
                <SectionTitle>Análise Detalhada por Simulado</SectionTitle>
                <p style={{ color: 'var(--aws-gray-600)', marginBottom: 'var(--spacing-6)' }}>
                  Veja os detalhes de cada simulado realizado, incluindo as questões erradas e recomendações personalizadas.
                </p>
                
                {statistics.detailedResults.map((result, index) => {
                  const questions = getQuestionsByType(result.examType);
                  const analysis = getPersonalizedAnalysis(result);
                  
                  return (
                    <ExamDetailsSection key={result.id} style={{ marginBottom: 'var(--spacing-6)' }}>
                      <ExamHeader>
                        <div>
                          <ExamTitle>
                            Simulado {index + 1}: {getExamTypeName(result.examType)}
                          </ExamTitle>
                          <ExamDate>{formatDate(result.timestamp)}</ExamDate>
                        </div>
                        <div style={{ 
                          padding: 'var(--spacing-2) var(--spacing-4)',
                          background: result.passed ? '#D1FAE5' : '#FEE2E2',
                          color: result.passed ? '#059669' : '#DC2626',
                          borderRadius: 'var(--radius-md)',
                          fontWeight: '600',
                          fontSize: 'var(--font-size-sm)'
                        }}>
                          {result.passed ? '✓ Aprovado' : '✗ Não Aprovado'}
                        </div>
                      </ExamHeader>
                      
                      <ExamSummary>
                        <SummaryItem>
                          <SummaryLabel>Acertos</SummaryLabel>
                          <SummaryValue style={{ color: 'var(--aws-green)' }}>
                            {result.correct}/{result.total}
                          </SummaryValue>
                        </SummaryItem>
                        <SummaryItem>
                          <SummaryLabel>Erros</SummaryLabel>
                          <SummaryValue style={{ color: 'var(--aws-red)' }}>
                            {result.total - result.correct}/{result.total}
                          </SummaryValue>
                        </SummaryItem>
                        <SummaryItem>
                          <SummaryLabel>Percentual</SummaryLabel>
                          <SummaryValue>{result.percentage}%</SummaryValue>
                        </SummaryItem>
                        <SummaryItem>
                          <SummaryLabel>Assuntos com Erros</SummaryLabel>
                          <SummaryValue>{result.topics?.length || 0}</SummaryValue>
                        </SummaryItem>
                      </ExamSummary>
                      
                      <AnalysisBox>
                        <AnalysisTitle>📊 Análise Personalizada</AnalysisTitle>
                        <AnalysisText>
                          <strong>{analysis.analysis}</strong>
                        </AnalysisText>
                        <AnalysisText style={{ marginTop: 'var(--spacing-2)' }}>
                          {analysis.recommendation}
                        </AnalysisText>
                      </AnalysisBox>
                      
                      {result.wrongQuestions && result.wrongQuestions.length > 0 && (
                        <div>
                          <h4 style={{ 
                            color: 'var(--aws-red)', 
                            marginBottom: 'var(--spacing-4)',
                            fontSize: 'var(--font-size-lg)'
                          }}>
                            ❌ Questões Erradas ({result.wrongQuestions.length})
                          </h4>
                          <WrongQuestionsList>
                            {result.wrongQuestions.map((questionId) => {
                              const question = questions.find(q => q.id === questionId);
                              if (!question) return null;
                              
                              return (
                                <WrongQuestionItem key={questionId}>
                                  <QuestionTitle>
                                    {question.title?.['pt-BR'] || question.title || `Questão ${questionId}`}
                                  </QuestionTitle>
                                  {question.description?.['pt-BR'] && (
                                    <QuestionDescription>
                                      {question.description['pt-BR']}
                                    </QuestionDescription>
                                  )}
                                  {question.explanation?.['pt-BR'] && (
                                    <div style={{
                                      marginTop: 'var(--spacing-2)',
                                      padding: 'var(--spacing-2)',
                                      background: 'var(--aws-white)',
                                      borderRadius: 'var(--radius-md)',
                                      fontSize: 'var(--font-size-sm)',
                                      color: 'var(--aws-gray-700)',
                                      lineHeight: '1.5'
                                    }}>
                                      <strong>💡 Explicação:</strong> {question.explanation['pt-BR']}
                                    </div>
                                  )}
                                </WrongQuestionItem>
                              );
                            })}
                          </WrongQuestionsList>
                        </div>
                      )}
                      
                      {result.topics && result.topics.length > 0 && (
                        <div style={{ marginTop: 'var(--spacing-4)' }}>
                          <h4 style={{ 
                            color: 'var(--aws-orange)', 
                            marginBottom: 'var(--spacing-3)',
                            fontSize: 'var(--font-size-base)'
                          }}>
                            📚 Assuntos que Precisam de Revisão neste Simulado:
                          </h4>
                          <div style={{ 
                            display: 'flex', 
                            flexWrap: 'wrap', 
                            gap: 'var(--spacing-2)' 
                          }}>
                            {result.topics.map((topic, idx) => (
                              <span
                                key={idx}
                                style={{
                                  padding: 'var(--spacing-1) var(--spacing-3)',
                                  background: '#FEE2E2',
                                  color: 'var(--aws-red)',
                                  borderRadius: 'var(--radius-md)',
                                  fontSize: 'var(--font-size-sm)',
                                  fontWeight: '500'
                                }}
                              >
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </ExamDetailsSection>
                  );
                })}
              </ExamDetailsSection>
            )}
          </>
        )}
      </Content>
    </Container>
  );
};

export default Profile;

