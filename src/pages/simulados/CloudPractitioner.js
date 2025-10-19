import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { cloudPractitionerQuestions } from '../../data/cloudPractitionerQuestions';
import ExamProtection from '../../components/ExamProtection';

const SimuladoContainer = styled.div`
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


const QuestionCounter = styled.div`
  background-color: var(--aws-green);
  color: var(--aws-white);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: var(--font-size-lg);
`;

const Timer = styled.div`
  background-color: var(--aws-orange);
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

const QuestionText = styled.div`
  font-size: var(--font-size-base);
  color: var(--aws-gray-600);
  margin-bottom: var(--spacing-6);
  font-weight: 500;
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
    
    label {
      cursor: not-allowed;
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
    
    &:hover:not(:disabled) {
      background-color: var(--aws-orange-dark);
      transform: translateY(-1px);
    }
  }
  
  &.secondary {
    background-color: var(--aws-gray-200);
    color: var(--aws-gray-700);
    
    &:hover:not(:disabled) {
      background-color: var(--aws-gray-300);
    }
  }
  
  &.danger {
    background-color: var(--aws-red);
    color: var(--aws-white);
    
    &:hover:not(:disabled) {
      background-color: #B91C1C;
      transform: translateY(-1px);
    }
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  max-width: 500px;
  width: 90%;
  text-align: center;
  box-shadow: var(--shadow-xl);
  
  h2 {
    color: var(--aws-blue);
    margin-bottom: var(--spacing-4);
  }
  
  p {
    color: var(--aws-gray-600);
    margin-bottom: var(--spacing-6);
    line-height: 1.6;
  }
`;

const CloudPractitioner = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [lockedQuestions, setLockedQuestions] = useState({}); // Questões bloqueadas após seleção
  const [timeLeft, setTimeLeft] = useState(5400); // 90 minutes in seconds
  const [language, setLanguage] = useState('pt-BR');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [results, setResults] = useState(null);


  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    // Não permite alterar resposta se a questão já foi respondida ou bloqueada
    if (answeredQuestions[questionIndex] || lockedQuestions[questionIndex]) return;
    
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
    
    // Bloqueia a questão imediatamente após seleção
    setLockedQuestions(prev => ({
      ...prev,
      [questionIndex]: true
    }));
  };

  const checkAnswer = (questionIndex, selectedAnswer) => {
    const question = cloudPractitionerQuestions[questionIndex];
    const correctAnswer = question.alternatives.findIndex(alt => alt.correct);
    return selectedAnswer === correctAnswer;
  };

  const nextQuestion = () => {
    if (selectedAnswers[currentQuestion] === undefined) {
      setModalContent({
        title: 'Atenção',
        message: 'Por favor, selecione uma resposta antes de continuar.',
        type: 'warning'
      });
      setShowModal(true);
      return;
    }

    const isCorrect = checkAnswer(currentQuestion, selectedAnswers[currentQuestion]);
    setAnsweredQuestions(prev => ({
      ...prev,
      [currentQuestion]: isCorrect
    }));

    // Navegação imediata sem modal de feedback
    if (currentQuestion < cloudPractitionerQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      finishExam();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishExam = useCallback(() => {
    const correctAnswers = Object.values(answeredQuestions).filter(Boolean).length;
    const totalQuestions = cloudPractitionerQuestions.length;
    const percentage = (correctAnswers / totalQuestions) * 100;
    const passed = percentage >= 70;

    setResults({
      correct: correctAnswers,
      total: totalQuestions,
      percentage: percentage.toFixed(1),
      passed: passed
    });
    setIsFinished(true);
    setShowModal(true);
  }, [answeredQuestions]);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isFinished) {
      finishExam();
    }
  }, [timeLeft, isFinished, finishExam]);

  const closeModal = () => {
    setShowModal(false);
    if (isFinished) {
      navigate('/simulados');
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR');
  };

  if (isFinished && results) {
    return (
      <SimuladoContainer>
        <Content>
          <QuestionCard>
            <QuestionTitle>Resultado Final</QuestionTitle>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                {results.passed ? '🎉' : '😔'}
              </div>
              <h3 style={{ color: results.passed ? 'var(--aws-green)' : 'var(--aws-red)', marginBottom: '1rem' }}>
                {results.passed ? 'Parabéns! Você foi aprovado!' : 'Você não foi aprovado desta vez.'}
              </h3>
              <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                Você acertou {results.correct} de {results.total} questões
              </p>
              <p style={{ fontSize: '1.1rem', fontWeight: '600' }}>
                ({results.percentage}% de acertos)
              </p>
            </div>
            <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button className="primary" onClick={() => navigate('/simulados')}>
                Voltar aos Simulados
              </Button>
              <Button className="secondary" onClick={() => window.location.reload()}>
                Tentar Novamente
              </Button>
            </div>
          </QuestionCard>
        </Content>
      </SimuladoContainer>
    );
  }

  const currentQ = cloudPractitionerQuestions[currentQuestion];
  const isAnswered = answeredQuestions[currentQuestion];
  const isLocked = lockedQuestions[currentQuestion];

  return (
    <ExamProtection>
      <SimuladoContainer>
        <Content>
        <Header>
          <QuestionCounter>
            {currentQuestion + 1} / {cloudPractitionerQuestions.length}
          </QuestionCounter>
          <Timer>
            ⏱️ {formatTime(timeLeft)}
          </Timer>
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
          
          {currentQ.question[language] && (
            <QuestionText>
              {currentQ.question[language]}
            </QuestionText>
          )}

          <AlternativesList>
            {currentQ.alternatives.map((alt, index) => (
              <AlternativeItem
                key={index}
                className={`
                  ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}
                  ${isAnswered ? (alt.correct ? 'correct' : selectedAnswers[currentQuestion] === index ? 'incorrect' : '') : ''}
                  ${isLocked ? 'disabled' : ''}
                `}
                onClick={() => !isLocked && handleAnswerSelect(currentQuestion, index)}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion}`}
                  checked={selectedAnswers[currentQuestion] === index}
                  onChange={() => handleAnswerSelect(currentQuestion, index)}
                  disabled={isLocked}
                />
                <label>
                  {alt.title[language] || alt.title['pt-BR']}
                </label>
              </AlternativeItem>
            ))}
          </AlternativesList>

          {isAnswered && (
            <StatusMessage className={answeredQuestions[currentQuestion] ? 'correct' : 'incorrect'}>
              {answeredQuestions[currentQuestion] ? '✓ Correto!' : '✗ Incorreto'}
            </StatusMessage>
          )}
        </QuestionCard>

        <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button 
            className="secondary" 
            onClick={previousQuestion}
            disabled={currentQuestion === 0}
          >
            ← Anterior
          </Button>
          
          <Button 
            className="primary" 
            onClick={nextQuestion}
            disabled={selectedAnswers[currentQuestion] === undefined}
          >
            {currentQuestion === cloudPractitionerQuestions.length - 1 ? 'Finalizar' : 'Próxima →'}
          </Button>
          
          <Button 
            className="danger" 
            onClick={finishExam}
          >
            Finalizar Agora
          </Button>
        </div>
      </Content>

      {showModal && (
        <Modal onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <h2>{modalContent.title}</h2>
            <p>{modalContent.message}</p>
            <Button className="primary" onClick={closeModal}>
              Fechar
            </Button>
          </ModalContent>
        </Modal>
      )}
      </SimuladoContainer>
    </ExamProtection>
  );
};

export default CloudPractitioner;
