import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavigationButtons from '../../components/NavigationButtons';
import { cloudPractitionerQuestions } from '../../data/cloudPractitionerQuestions';
import { cloudPractitionerDomains } from '../../data/cloudPractitionerDomains';

const Container = styled.div`
  min-height: calc(100vh - 160px);
  padding: var(--spacing-6) 0;
  background-color: var(--aws-gray-100);
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
`;

const Header = styled.div`
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
  box-shadow: var(--shadow-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-4);
`;

const DomainName = styled.div`
  font-weight: 700;
  color: var(--aws-blue);
  font-size: var(--font-size-lg);
`;

const QuestionCounter = styled.div`
  background-color: var(--aws-green);
  color: var(--aws-white);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: var(--font-size-lg);
`;

const LanguageButton = styled.button`
  background-color: var(--aws-blue);
  color: var(--aws-white);
  border: none;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--aws-blue-light);
  }
`;

const QuestionCard = styled.div`
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  margin-bottom: var(--spacing-6);
  box-shadow: var(--shadow-lg);
`;

const QuestionTitle = styled.h2`
  color: var(--aws-orange);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-bottom: var(--spacing-4);
  text-align: center;
`;

const QuestionDescription = styled.div`
  font-size: var(--font-size-lg);
  color: var(--aws-gray-700);
  margin-bottom: var(--spacing-6);
  line-height: 1.6;
`;

const AlternativesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
`;

const AlternativeItem = styled.li`
  display: flex;
  align-items: flex-start;
  padding: var(--spacing-4);
  border: 2px solid var(--aws-gray-200);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--aws-orange);
    background-color: var(--aws-gray-100);
  }

  &.selected {
    border-color: var(--aws-orange);
    background-color: var(--aws-orange-light);
  }

  &.correct {
    border-color: var(--aws-green);
    background-color: var(--aws-green-light);
  }

  &.incorrect {
    border-color: var(--aws-red);
    background-color: var(--aws-red-light);
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.7;

    &:hover {
      border-color: var(--aws-gray-200);
      background-color: var(--aws-white);
    }
  }

  input {
    margin-right: var(--spacing-3);
    margin-top: var(--spacing-1);
    transform: scale(1.2);
  }

  label {
    flex: 1;
    cursor: pointer;
    font-weight: 500;
    line-height: 1.5;
  }
`;

const StatusMessage = styled.div`
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  margin-top: var(--spacing-4);
  text-align: center;
  font-weight: 600;

  &.correct {
    background-color: var(--aws-green-light);
    color: var(--aws-green);
    border: 1px solid var(--aws-green);
  }

  &.incorrect {
    background-color: var(--aws-red-light);
    color: var(--aws-red);
    border: 1px solid var(--aws-red);
  }
`;

const ExplanationBox = styled.div`
  padding: var(--spacing-5);
  border-radius: var(--radius-lg);
  margin-top: var(--spacing-4);
  background-color: var(--aws-white);
  border-left: 4px solid var(--aws-blue);
  box-shadow: var(--shadow-md);

  h4 {
    color: var(--aws-blue);
    margin-bottom: var(--spacing-2);
    font-size: var(--font-size-lg);
    font-weight: 700;
  }

  p {
    color: var(--aws-gray-700);
    line-height: 1.6;
    margin: 0;
  }
`;

const Button = styled.button`
  padding: var(--spacing-3) var(--spacing-6);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 120px;

  &.primary {
    background-color: var(--aws-orange);
    color: var(--aws-white);
    &:hover:not(:disabled) { background-color: var(--aws-orange-dark); }
  }

  &.secondary {
    background-color: var(--aws-gray-200);
    color: var(--aws-gray-700);
    &:hover:not(:disabled) { background-color: var(--aws-gray-300); }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-12);

  h1 {
    color: var(--aws-blue);
    margin-bottom: var(--spacing-4);
  }
`;

const ResultCard = styled.div`
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-lg);
  text-align: center;

  h2 {
    color: var(--aws-blue);
    margin-bottom: var(--spacing-2);
  }

  p {
    color: var(--aws-gray-600);
    margin-bottom: var(--spacing-2);
  }
`;

const CloudPractitionerDomainSession = () => {
  const { domainId } = useParams();
  const navigate = useNavigate();
  const domain = cloudPractitionerDomains.find(d => d.slug === domainId);
  const questions = domain ? cloudPractitionerQuestions.filter(q => q.domain === domainId) : [];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [lockedQuestions, setLockedQuestions] = useState({});
  const [language, setLanguage] = useState('pt-BR');
  const [isFinished, setIsFinished] = useState(false);

  // Reinicia a sessão sempre que o domínio mudar
  useEffect(() => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setAnsweredQuestions({});
    setLockedQuestions({});
    setIsFinished(false);
  }, [domainId]);

  if (!domain || questions.length === 0) {
    return (
      <Container>
        <Content>
          <NavigationButtons backPath="/simulado/cloud-practitioner/dominios" />
          <EmptyState>
            <h1>Domínio não encontrado</h1>
            <p>Volte e escolha um domínio válido para praticar.</p>
          </EmptyState>
        </Content>
      </Container>
    );
  }

  const getSelectedAnswerIndices = (questionIndex) => {
    const answer = selectedAnswers[questionIndex];
    if (Array.isArray(answer)) return answer;
    return answer === undefined ? [] : [answer];
  };

  const checkAnswer = (questionIndex, selectedAnswer) => {
    const correctAnswers = questions[questionIndex].alternatives.reduce(
      (indices, alternative, index) => alternative.correct ? [...indices, index] : indices,
      []
    );
    const selected = Array.isArray(selectedAnswer) ? selectedAnswer : [selectedAnswer];
    return selected.length === correctAnswers.length
      && correctAnswers.every(index => selected.includes(index));
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    if (lockedQuestions[questionIndex]) return;

    const question = questions[questionIndex];
    if (question.multiple) {
      setSelectedAnswers(prev => {
        const selected = Array.isArray(prev[questionIndex]) ? prev[questionIndex] : [];
        const next = selected.includes(answerIndex)
          ? selected.filter(index => index !== answerIndex)
          : [...selected, answerIndex];
        return { ...prev, [questionIndex]: next };
      });
      return;
    }

    setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answerIndex }));
    const isCorrect = checkAnswer(questionIndex, [answerIndex]);
    setAnsweredQuestions(prev => ({ ...prev, [questionIndex]: isCorrect }));
    setLockedQuestions(prev => ({ ...prev, [questionIndex]: true }));
  };

  const confirmAnswer = () => {
    const selected = getSelectedAnswerIndices(currentQuestion);
    if (selected.length === 0 || lockedQuestions[currentQuestion]) return;

    setAnsweredQuestions(prev => ({
      ...prev,
      [currentQuestion]: checkAnswer(currentQuestion, selected)
    }));
    setLockedQuestions(prev => ({ ...prev, [currentQuestion]: true }));
  };

  const goToNext = () => {
    if (!lockedQuestions[currentQuestion]) return;
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const toggleLanguage = () => setLanguage(prev => (prev === 'pt-BR' ? 'en' : 'pt-BR'));

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setAnsweredQuestions({});
    setLockedQuestions({});
    setIsFinished(false);
  };

  if (isFinished) {
    const correctCount = Object.values(answeredQuestions).filter(Boolean).length;
    const percentage = ((correctCount / questions.length) * 100).toFixed(1);

    return (
      <Container>
        <Content>
          <NavigationButtons backPath="/simulado/cloud-practitioner/dominios" />
          <ResultCard>
            <h2>Domínio concluído: {domain.name['pt-BR']}</h2>
            <p>Você acertou {correctCount} de {questions.length} questões ({percentage}%)</p>
            <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--spacing-6)' }}>
              <Button className="secondary" onClick={handleRestart}>Praticar Novamente</Button>
              <Button className="primary" onClick={() => navigate('/simulado/cloud-practitioner/dominios')}>
                Escolher Outro Domínio
              </Button>
            </div>
          </ResultCard>
        </Content>
      </Container>
    );
  }

  const currentQ = questions[currentQuestion];
  const selectedAnswerIndices = getSelectedAnswerIndices(currentQuestion);
  const hasSelectedAnswers = selectedAnswerIndices.length > 0;
  const isAnswered = Boolean(lockedQuestions[currentQuestion]);
  const isCorrect = answeredQuestions[currentQuestion];
  const isLocked = lockedQuestions[currentQuestion];
  const correctAnswerIndices = currentQ.alternatives.reduce(
    (indices, alternative, index) => alternative.correct ? [...indices, index] : indices,
    []
  );

  return (
    <Container>
      <Content>
        <NavigationButtons backPath="/simulado/cloud-practitioner/dominios" />

        <Header>
          <DomainName>{domain.name['pt-BR']}</DomainName>
          <QuestionCounter>{currentQuestion + 1} / {questions.length}</QuestionCounter>
          <LanguageButton onClick={toggleLanguage}>
            {language === 'pt-BR' ? 'EN' : 'PT'}
          </LanguageButton>
        </Header>

        <QuestionCard>
          <QuestionTitle>
            {currentQ.title[language] || currentQ.title['pt-BR']}
          </QuestionTitle>

          <QuestionDescription>
            {currentQ.description[language] || currentQ.description['pt-BR']}
          </QuestionDescription>
          {currentQ.multiple && (
            <QuestionDescription>
              {language === 'pt-BR'
                ? 'Selecione todas as alternativas corretas e confirme sua resposta.'
                : 'Select all correct options and confirm your answer.'}
            </QuestionDescription>
          )}

          <AlternativesList>
            {currentQ.alternatives.map((alt, index) => (
              <AlternativeItem
                key={index}
                className={`
                  ${selectedAnswerIndices.includes(index) ? 'selected' : ''}
                  ${isAnswered ? (alt.correct ? 'correct' : (selectedAnswerIndices.includes(index) ? 'incorrect' : '')) : ''}
                  ${isLocked ? 'disabled' : ''}
                `}
                onClick={event => {
                  if (event.target === event.currentTarget && !isLocked) {
                    handleAnswerSelect(currentQuestion, index);
                  }
                }}
              >
                <input
                  id={`domain-question-${currentQuestion}-answer-${index}`}
                  type={currentQ.multiple ? 'checkbox' : 'radio'}
                  name={`domain-question-${currentQuestion}`}
                  checked={selectedAnswerIndices.includes(index)}
                  onChange={() => handleAnswerSelect(currentQuestion, index)}
                  disabled={isLocked}
                />
                <label htmlFor={`domain-question-${currentQuestion}-answer-${index}`}>
                  {alt.title[language] || alt.title['pt-BR']}
                </label>
              </AlternativeItem>
            ))}
          </AlternativesList>

          {isAnswered && (
            <>
              <StatusMessage className={isCorrect ? 'correct' : 'incorrect'}>
                {isCorrect ? '✓ Correto!' : '✗ Incorreto'}
              </StatusMessage>
              {(() => {
                const selectedAlternative = currentQ.alternatives[selectedAnswerIndices[0]];
                const correctAlternative = currentQ.alternatives[correctAnswerIndices[0]];
                const getText = text => text?.[language] || text?.['pt-BR'] || '';
                const explanation = selectedAlternative?.explanation || correctAlternative?.explanation || currentQ.explanation;
                const relevantIndices = currentQ.multiple
                  ? Array.from(new Set([...selectedAnswerIndices, ...correctAnswerIndices])).sort((a, b) => a - b)
                  : selectedAnswerIndices;
                const relevantAlternatives = relevantIndices.map(index => currentQ.alternatives[index]);
                if (!currentQ.multiple && !explanation) return null;

                return (
                  <ExplanationBox>
                    <h4>📚 Explicação:</h4>
                    {currentQ.multiple ? (
                      <p style={{ marginBottom: 'var(--spacing-3)', fontWeight: '600' }}>
                        {language === 'pt-BR' ? 'Respostas corretas: ' : 'Correct answers: '}
                        {correctAnswerIndices.map(index => (
                          currentQ.alternatives[index].title[language]
                            || currentQ.alternatives[index].title['pt-BR']
                        )).join('; ')}
                      </p>
                    ) : null}
                    {currentQ.multiple
                      ? relevantAlternatives.map(alternative => (
                        <p key={alternative.title['pt-BR']} style={{ marginBottom: 'var(--spacing-2)' }}>
                          <strong>{alternative.title[language] || alternative.title['pt-BR']}: </strong>
                          {alternative.explanation[language] || alternative.explanation['pt-BR']}
                        </p>
                      ))
                      : (
                        <>
                          {!isCorrect && correctAlternative && (
                            <p style={{ marginBottom: 'var(--spacing-2)', fontWeight: '600', color: 'var(--aws-red)' }}>
                              {language === 'pt-BR' ? 'A resposta correta é: ' : 'The correct answer is: '}
                              {getText(correctAlternative.title)}
                            </p>
                          )}
                          {correctAlternative && <p style={{ marginBottom: 'var(--spacing-3)' }}>{getText(correctAlternative.explanation)}</p>}
                          {!isCorrect && selectedAlternative && (
                            <>
                              <p style={{ marginBottom: 'var(--spacing-2)', fontWeight: '600' }}>
                                {language === 'pt-BR' ? 'Sua resposta: ' : 'Your answer: '}
                                {getText(selectedAlternative.title)}
                              </p>
                              <p>{getText(selectedAlternative.explanation)}</p>
                            </>
                          )}
                        </>
                      )}
                  </ExplanationBox>
                );
              })()}
            </>
          )}
        </QuestionCard>

        <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
          {currentQ.multiple && (
            <Button
              className="secondary"
              onClick={confirmAnswer}
              disabled={!hasSelectedAnswers || isLocked}
            >
              Confirmar resposta
            </Button>
          )}
          <Button className="secondary" onClick={goToPrevious} disabled={currentQuestion === 0}>
            ← Anterior
          </Button>
          <Button className="primary" onClick={goToNext} disabled={!hasSelectedAnswers || !isLocked}>
            {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próxima →'}
          </Button>
        </div>
      </Content>
    </Container>
  );
};

export default CloudPractitionerDomainSession;
