import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createCloudPractitionerExam } from '../../data/cloudPractitionerExam';
import { cloudPractitionerQuestions } from '../../data/cloudPractitionerQuestions';
import { cloudPractitionerQuestions2 } from '../../data/cloudPractitionerQuestions2';
import ExamProtection from '../../components/ExamProtection';
import { getCurrentUser, saveExamResult } from '../../services/userService';

const EXAM_DURATION_SECONDS = 5400; // 90 minutos para cada simulado de estudo.
const IN_PROGRESS_KEY = 'guru_certificate_cloud_exam_in_progress';

// Recupera o simulado em andamento (mesmas questões, respostas e prazo) após recarregar a página.
const loadSavedExam = (storageKey, questionBank) => {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (!saved || saved.userId !== (getCurrentUser()?.id ?? null)
      || !Number.isFinite(saved.deadline) || typeof saved.attemptId !== 'string'
      || !Array.isArray(saved.questionIds) || saved.questionIds.length !== questionBank.length
      || new Set(saved.questionIds).size !== questionBank.length
      || !Number.isInteger(saved.currentQuestion) || saved.currentQuestion < 0
      || !saved.selectedAnswers || !saved.answeredQuestions || !saved.lockedQuestions) return null;
    // Uma tentativa expirada também é recuperada: o timer a encerra com as respostas salvas.
    const questions = saved.questionIds.map(id => questionBank.find(question => question.id === id));
    return questions.every(Boolean) ? { ...saved, questions } : null;
  } catch {
    return null;
  }
};

// O armazenamento pode estar cheio ou bloqueado; a tentativa continua em memória nesse caso.
const safeStorage = action => {
  try {
    action();
  } catch {
    // Sem persistência, o simulado segue funcionando, apenas sem retomada após recarregar.
  }
};

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


const NavBar = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: var(--spacing-4);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const NavCenter = styled.div`
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
  grid-column: 2;

  @media (max-width: 768px) {
    grid-column: 1;
  }
`;

const NavEnd = styled.div`
  grid-column: 3;
  justify-self: end;

  @media (max-width: 768px) {
    grid-column: 1;
    justify-self: center;
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

const CloudPractitioner = ({ variant = 1 }) => {
  const navigate = useNavigate();
  const questionBank = variant === 2 ? cloudPractitionerQuestions2 : cloudPractitionerQuestions;
  const examType = variant === 2 ? 'cloud-practitioner-2' : 'cloud-practitioner';
  const storageKey = variant === 2 ? `${IN_PROGRESS_KEY}_2` : IN_PROGRESS_KEY;
  const [saved] = useState(() => loadSavedExam(storageKey, questionBank));
  const [ownerId] = useState(() => getCurrentUser()?.id ?? null);
  const [examQuestions] = useState(() => saved?.questions ?? createCloudPractitionerExam(questionBank));
  const [attemptId] = useState(() => saved?.attemptId ?? `cp-${Date.now()}-${Math.random().toString(36).slice(2)}`);
  const [deadline] = useState(() => saved?.deadline ?? Date.now() + EXAM_DURATION_SECONDS * 1000);
  const [currentQuestion, setCurrentQuestion] = useState(() => Math.min(saved?.currentQuestion ?? 0, examQuestions.length - 1));
  const [selectedAnswers, setSelectedAnswers] = useState(saved?.selectedAnswers ?? {});
  const [answeredQuestions, setAnsweredQuestions] = useState(saved?.answeredQuestions ?? {});
  const [lockedQuestions, setLockedQuestions] = useState(saved?.lockedQuestions ?? {}); // Questões bloqueadas após seleção
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, Math.ceil((deadline - Date.now()) / 1000)));
  const [language, setLanguage] = useState('pt-BR');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [results, setResults] = useState(null);
  const [saveStatus, setSaveStatus] = useState('');
  const finishedRef = useRef(false);


  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getSelectedAnswerIndices = (questionIndex) => {
    const answer = selectedAnswers[questionIndex];
    if (Array.isArray(answer)) return answer;
    return answer === undefined ? [] : [answer];
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    if (lockedQuestions[questionIndex]) return;

    const question = examQuestions[questionIndex];
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
    setAnsweredQuestions(prev => ({
      ...prev,
      [questionIndex]: isCorrect
    }));
    setLockedQuestions(prev => ({
      ...prev,
      [questionIndex]: true
    }));
  };

  const checkAnswer = (questionIndex, selectedAnswer) => {
    const question = examQuestions[questionIndex];
    const correctAnswers = question.alternatives.reduce(
      (indices, alternative, index) => alternative.correct ? [...indices, index] : indices,
      []
    );
    const selected = Array.isArray(selectedAnswer) ? selectedAnswer : [selectedAnswer];
    return selected.length === correctAnswers.length
      && correctAnswers.every(index => selected.includes(index));
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

  const nextQuestion = () => {
    if (currentQuestion === examQuestions.length - 1) {
      finishExam();
      return;
    }

    const selected = getSelectedAnswerIndices(currentQuestion);
    if (selected.length === 0 || !lockedQuestions[currentQuestion]) {
      setModalContent({
        title: 'Atenção',
        message: examQuestions[currentQuestion].multiple
          ? 'Selecione e confirme sua resposta antes de continuar.'
          : 'Por favor, selecione uma resposta antes de continuar.',
        type: 'warning'
      });
      setShowModal(true);
      return;
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  // Rola só depois de renderizar a nova questão: com rolagem suave iniciada antes,
  // a mudança de altura da página fazia o navegador terminar mais abaixo.
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentQuestion]);

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishExam = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    const correctAnswers = Object.values(answeredQuestions).filter(Boolean).length;
    const totalQuestions = examQuestions.length;
    const percentage = (correctAnswers / totalQuestions) * 100;
    const passed = percentage >= 70;

    // Identificar questões respondidas incorretamente (não respondidas só reduzem a nota) e seus tópicos
    const wrongQuestionIds = [];
    const topics = new Set();

    examQuestions.forEach((question, questionIndex) => {
      if (lockedQuestions[questionIndex] && !answeredQuestions[questionIndex]) {
        wrongQuestionIds.push(question.id);

        // Extrair tópico do título
        if (question.title && question.title['pt-BR']) {
          // Pegar a primeira parte do título antes do hífen como tópico
          const topic = question.title['pt-BR'].split(' - ')[0] || question.title['pt-BR'];
          topics.add(topic);
        }
      }
    });

    const result = {
      correct: correctAnswers,
      total: totalQuestions,
      percentage: percentage.toFixed(1),
      passed: passed,
      wrongQuestions: wrongQuestionIds,
      topics: Array.from(topics)
    };

    setResults(result);

    // Salvar resultado se usuário estiver logado
    const currentUser = getCurrentUser();
    if (currentUser && currentUser.id === ownerId) {
      setSaveStatus('Salvando resultado...');
      saveExamResult(currentUser.id, examType, { ...result, id: attemptId })
        .then(() => setSaveStatus('Resultado salvo no ranking.'))
        .catch(error => setSaveStatus(error.pending
          ? `${error.message} O resultado ficou pendente neste navegador; abra o ranking ou perfil para tentar sincronizar novamente.`
          : `${error.message} O resultado não foi salvo. Anote sua nota antes de sair.`));
    } else if (ownerId) {
      setSaveStatus('A conta mudou durante o simulado. O resultado não foi salvo.');
    }

    safeStorage(() => localStorage.removeItem(storageKey));
    setIsFinished(true);
  }, [answeredQuestions, lockedQuestions, examQuestions, attemptId, examType, ownerId, storageKey]);

  useEffect(() => {
    if (isFinished) return;
    safeStorage(() => localStorage.setItem(storageKey, JSON.stringify({
      attemptId,
      userId: ownerId,
      deadline,
      questionIds: examQuestions.map(question => question.id),
      selectedAnswers,
      answeredQuestions,
      lockedQuestions,
      currentQuestion
    })));
  }, [isFinished, attemptId, deadline, examQuestions, selectedAnswers, answeredQuestions, lockedQuestions, currentQuestion, ownerId, storageKey]);

  // Timer effect
  useEffect(() => {
    if (timeLeft > 0 && !isFinished) {
      const timer = setTimeout(() => setTimeLeft(Math.max(0, Math.ceil((deadline - Date.now()) / 1000))), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !isFinished) {
      finishExam();
    }
  }, [timeLeft, isFinished, finishExam, deadline]);

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
              {saveStatus && <p role="status">{saveStatus}</p>}
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

  const currentQ = examQuestions[currentQuestion];
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
    <ExamProtection>
      <SimuladoContainer>
        <Content>
        <h1>Cloud Practitioner: Simulado {variant}</h1>
        <Header>
          <QuestionCounter>
            {currentQuestion + 1} / {examQuestions.length}
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

          {(currentQ.question[language] || currentQ.question['pt-BR']) && (
            <QuestionText>
              {currentQ.question[language] || currentQ.question['pt-BR']}
            </QuestionText>
          )}
          {currentQ.multiple && (
            <QuestionText>
              {language === 'pt-BR'
                ? 'Selecione todas as alternativas corretas e confirme sua resposta.'
                : 'Select all correct options and confirm your answer.'}
            </QuestionText>
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
                  id={`question-${currentQuestion}-answer-${index}`}
                  type={currentQ.multiple ? 'checkbox' : 'radio'}
                  name={`question-${currentQuestion}`}
                  checked={selectedAnswerIndices.includes(index)}
                  onChange={() => handleAnswerSelect(currentQuestion, index)}
                  disabled={isLocked}
                />
                <label htmlFor={`question-${currentQuestion}-answer-${index}`}>
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
                const generalExplanation = currentQ.explanation;
                const relevantIndices = currentQ.multiple
                  ? Array.from(new Set([...selectedAnswerIndices, ...correctAnswerIndices])).sort((a, b) => a - b)
                  : selectedAnswerIndices;
                const relevantAlternatives = relevantIndices.map(index => currentQ.alternatives[index]);
                const correctAlternative = currentQ.alternatives[correctAnswerIndices[0]];
                const getText = text => text?.[language] || text?.['pt-BR'] || '';
                const explanation = selectedAlternative?.explanation || generalExplanation;
                if (!currentQ.multiple && !explanation && !correctAlternative?.explanation) return null;

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
                          {!isCorrect && (
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

        <NavBar>
          <NavCenter>
          {currentQ.multiple && (
            <Button
              className="secondary"
              onClick={confirmAnswer}
              disabled={!hasSelectedAnswers || isLocked}
            >
              Confirmar resposta
            </Button>
          )}
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
            disabled={currentQuestion < examQuestions.length - 1 && (!hasSelectedAnswers || !isLocked)}
          >
            {currentQuestion === examQuestions.length - 1 ? 'Finalizar' : 'Próxima →'}
          </Button>
          </NavCenter>

          <NavEnd>
            {currentQuestion < examQuestions.length - 1 && (
              <Button
                className="danger"
                onClick={finishExam}
              >
                Finalizar Agora
              </Button>
            )}
          </NavEnd>
        </NavBar>
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
