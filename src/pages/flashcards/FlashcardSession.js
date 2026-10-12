import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavigationButtons from '../../components/NavigationButtons';
import { cloudPractitionerFlashcards } from '../../data/cloudPractitionerFlashcards';
import { developerAssociateFlashcards } from '../../data/developerAssociateFlashcards';
import { solutionsArchitectFlashcards } from '../../data/solutionsArchitectFlashcards';

const EXAM_INFO = {
  'cloud-practitioner': { name: 'Cloud Practitioner', cards: cloudPractitionerFlashcards },
  'developer-associate': { name: 'Developer Associate', cards: developerAssociateFlashcards },
  'solutions-architect': { name: 'Solutions Architect', cards: solutionsArchitectFlashcards }
};

const shuffleOrder = (length) => {
  const result = Array.from({ length }, (_, i) => i);
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const SessionContainer = styled.div`
  min-height: calc(100vh - 160px);
  padding: var(--spacing-6) 0;
  background-color: var(--aws-gray-100);
`;

const Content = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
`;

const Header = styled.div`
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-4) var(--spacing-6);
  margin-bottom: var(--spacing-6);
  box-shadow: var(--shadow-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-3);
`;

const Counter = styled.div`
  background-color: var(--aws-green);
  color: var(--aws-white);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-weight: 600;
`;

const TrackName = styled.div`
  font-weight: 700;
  color: var(--aws-blue);
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

const CardOuter = styled.div`
  perspective: 1500px;
  cursor: pointer;
  min-height: 320px;
  margin-bottom: var(--spacing-6);
  outline: none;
`;

const CardInner = styled.div`
  position: relative;
  width: 100%;
  min-height: 320px;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  transform: ${props => props.$flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const CardFace = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8);
  text-align: center;
`;

const CardFront = styled(CardFace)`
  background: linear-gradient(135deg, var(--aws-blue) 0%, var(--aws-blue-light) 100%);
  color: var(--aws-white);
`;

const CardBack = styled(CardFace)`
  background-color: var(--aws-white);
  color: var(--aws-gray-700);
  border: 2px solid var(--aws-orange);
  transform: rotateY(180deg);
`;

const CategoryTag = styled.div`
  position: absolute;
  top: var(--spacing-4);
  left: var(--spacing-4);
  background-color: rgba(255, 153, 0, 0.15);
  color: var(--aws-orange-dark);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-md);
  font-size: var(--font-size-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CardFrontTag = styled(CategoryTag)`
  background-color: rgba(255, 255, 255, 0.15);
  color: var(--aws-white);
`;

const CardText = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: 600;
  line-height: 1.5;
`;

const FlipHint = styled.div`
  position: absolute;
  bottom: var(--spacing-4);
  font-size: var(--font-size-sm);
  opacity: 0.7;
`;

const NavButtons = styled.div`
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
`;

const AssessmentButtons = styled.div`
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  padding: var(--spacing-3) var(--spacing-6);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 140px;

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

  &.success {
    background-color: var(--aws-green);
    color: var(--aws-white);
    &:hover:not(:disabled) { background-color: #008a44; }
  }

  &.danger {
    background-color: var(--aws-red);
    color: var(--aws-white);
    &:hover:not(:disabled) { background-color: #B91C1C; }
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
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
    margin-bottom: var(--spacing-4);
    font-size: var(--font-size-2xl);
  }

  p {
    color: var(--aws-gray-600);
    margin-bottom: var(--spacing-4);
  }
`;

const ResultStats = styled.div`
  display: flex;
  gap: var(--spacing-6);
  justify-content: center;
  font-weight: 700;
  font-size: var(--font-size-lg);
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-12);

  h1 {
    color: var(--aws-blue);
    margin-bottom: var(--spacing-4);
  }
`;

const FlashcardSession = () => {
  const { examType } = useParams();
  const navigate = useNavigate();
  const examInfo = EXAM_INFO[examType];

  const [order, setOrder] = useState(() => examInfo ? shuffleOrder(examInfo.cards.length).map((_, i) => i).sort((a, b) => a - b) : []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [language, setLanguage] = useState('pt-BR');
  const [assessment, setAssessment] = useState({});

  // Reinicia o estado da sessão sempre que a trilha (examType) mudar
  useEffect(() => {
    if (examInfo) {
      setOrder(examInfo.cards.map((_, i) => i));
      setCurrentIndex(0);
      setFlipped(false);
      setAssessment({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examType]);

  if (!examInfo) {
    return (
      <SessionContainer>
        <Content>
          <NavigationButtons backPath="/flashcards" />
          <EmptyState>
            <h1>Trilha não encontrada</h1>
            <p>Volte para a página de Flash Cards e escolha uma trilha válida.</p>
          </EmptyState>
        </Content>
      </SessionContainer>
    );
  }

  const totalCards = examInfo.cards.length;
  const isFinished = currentIndex >= totalCards;
  const currentCard = !isFinished ? examInfo.cards[order[currentIndex]] : null;

  const toggleFlip = () => setFlipped(prev => !prev);

  const handleFlipKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  };

  const goToNext = () => {
    setFlipped(false);
    setCurrentIndex(prev => Math.min(prev + 1, totalCards));
  };

  const goToPrevious = () => {
    setFlipped(false);
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleAssessment = (level) => {
    setAssessment(prev => ({ ...prev, [currentCard.id]: level }));
    goToNext();
  };

  const handleShuffle = () => {
    setOrder(shuffleOrder(totalCards));
    setCurrentIndex(0);
    setFlipped(false);
    setAssessment({});
  };

  const handleRestartInOrder = () => {
    setOrder(examInfo.cards.map((_, i) => i));
    setCurrentIndex(0);
    setFlipped(false);
    setAssessment({});
  };

  const toggleLanguage = () => setLanguage(prev => (prev === 'pt-BR' ? 'en' : 'pt-BR'));

  const knownCount = Object.values(assessment).filter(v => v === 'known').length;
  const reviewCount = Object.values(assessment).filter(v => v === 'review').length;

  if (isFinished) {
    return (
      <SessionContainer>
        <Content>
          <NavigationButtons backPath="/flashcards" />
          <ResultCard>
            <h2>🎉 Sessão concluída!</h2>
            <p>Você revisou todos os {totalCards} cartões de {examInfo.name}.</p>
            <ResultStats>
              <span style={{ color: 'var(--aws-green)' }}>😊 {knownCount} já sabia</span>
              <span style={{ color: 'var(--aws-red)' }}>😕 {reviewCount} para revisar</span>
            </ResultStats>
            <div style={{ display: 'flex', gap: 'var(--spacing-4)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--spacing-6)' }}>
              <ActionButton className="secondary" onClick={handleShuffle}>🔀 Embaralhar e Repetir</ActionButton>
              <ActionButton className="primary" onClick={() => navigate('/flashcards')}>Voltar aos Flash Cards</ActionButton>
            </div>
          </ResultCard>
        </Content>
      </SessionContainer>
    );
  }

  return (
    <SessionContainer>
      <Content>
        <NavigationButtons backPath="/flashcards" />

        <Header>
          <Counter>{currentIndex + 1} / {totalCards}</Counter>
          <TrackName>{examInfo.name}</TrackName>
          <LanguageButton onClick={toggleLanguage}>
            {language === 'pt-BR' ? 'EN' : 'PT'}
          </LanguageButton>
        </Header>

        <CardOuter
          onClick={toggleFlip}
          onKeyDown={handleFlipKeyDown}
          role="button"
          tabIndex={0}
          aria-pressed={flipped}
        >
          <CardInner $flipped={flipped}>
            <CardFront>
              <CardFrontTag>
                {currentCard.category?.[language] || currentCard.category?.['pt-BR']}
              </CardFrontTag>
              <CardText>{currentCard.front[language] || currentCard.front['pt-BR']}</CardText>
              <FlipHint>👆 Toque para virar</FlipHint>
            </CardFront>
            <CardBack>
              <CategoryTag>
                {currentCard.category?.[language] || currentCard.category?.['pt-BR']}
              </CategoryTag>
              <CardText style={{ fontSize: 'var(--font-size-lg)', fontWeight: 500 }}>
                {currentCard.back[language] || currentCard.back['pt-BR']}
              </CardText>
              <FlipHint>👆 Toque para voltar</FlipHint>
            </CardBack>
          </CardInner>
        </CardOuter>

        {flipped ? (
          <AssessmentButtons>
            <ActionButton className="danger" onClick={() => handleAssessment('review')}>
              😕 Preciso Revisar
            </ActionButton>
            <ActionButton className="success" onClick={() => handleAssessment('known')}>
              😊 Já Sabia
            </ActionButton>
          </AssessmentButtons>
        ) : (
          <NavButtons>
            <ActionButton className="secondary" onClick={goToPrevious} disabled={currentIndex === 0}>
              ← Anterior
            </ActionButton>
            <ActionButton className="secondary" onClick={handleShuffle}>
              🔀 Embaralhar
            </ActionButton>
            <ActionButton className="primary" onClick={goToNext}>
              Pular →
            </ActionButton>
          </NavButtons>
        )}

        {(order.length !== totalCards || currentIndex > 0) && (
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-6)' }}>
            <ActionButton className="secondary" onClick={handleRestartInOrder}>
              ↺ Reiniciar em Ordem
            </ActionButton>
          </div>
        )}
      </Content>
    </SessionContainer>
  );
};

export default FlashcardSession;
