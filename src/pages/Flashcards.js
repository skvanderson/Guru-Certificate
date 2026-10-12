import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavigationButtons from '../components/NavigationButtons';
import Reveal from '../components/Reveal';
import { cloudPractitionerFlashcards } from '../data/cloudPractitionerFlashcards';
import { developerAssociateFlashcards } from '../data/developerAssociateFlashcards';
import { solutionsArchitectFlashcards } from '../data/solutionsArchitectFlashcards';

const FlashcardsContainer = styled.div`
  min-height: calc(100vh - 160px);
  padding: var(--spacing-12) 0;
  background: linear-gradient(135deg, var(--aws-gray-100) 0%, var(--aws-blue-light) 100%);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-12);

  h1 {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    color: var(--aws-blue);
    margin-bottom: var(--spacing-4);
  }

  p {
    font-size: var(--font-size-lg);
    color: var(--aws-gray-600);
    max-width: 600px;
    margin: 0 auto;
  }
`;

const TracksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-8);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
`;

const TrackCard = styled.div`
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-lg);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-xl);
    border-color: var(--aws-orange);

    .icon {
      transform: scale(1.15) rotate(-4deg);
    }
  }
`;

const TrackIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-4);
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

const TrackTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--aws-blue);
  margin-bottom: var(--spacing-3);
`;

const TrackDescription = styled.p`
  color: var(--aws-gray-600);
  line-height: 1.6;
  margin-bottom: var(--spacing-4);
  flex-grow: 1;
`;

const CardCount = styled.div`
  display: inline-block;
  background-color: var(--aws-gray-100);
  color: var(--aws-blue);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 600;
  margin-bottom: var(--spacing-6);
  align-self: flex-start;
`;

const StartButton = styled(Link)`
  background-color: var(--aws-orange);
  color: var(--aws-white);
  text-decoration: none;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: 600;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--aws-orange-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

const tracks = [
  {
    examType: 'cloud-practitioner',
    icon: '☁️',
    title: 'Cloud Practitioner',
    description: 'Conceitos fundamentais da nuvem AWS: serviços essenciais, modelo de responsabilidade compartilhada, precificação e suporte.',
    cards: cloudPractitionerFlashcards
  },
  {
    examType: 'developer-associate',
    icon: '💻',
    title: 'Developer Associate',
    description: 'Serverless, APIs, bancos de dados, mensageria e CI/CD — termos e conceitos essenciais para quem desenvolve na AWS.',
    cards: developerAssociateFlashcards
  },
  {
    examType: 'solutions-architect',
    icon: '🏗️',
    title: 'Solutions Architect',
    description: 'Arquitetura de alta disponibilidade, redes, recuperação de desastres e segurança para desenhar soluções na AWS.',
    cards: solutionsArchitectFlashcards
  }
];

const Flashcards = () => {
  return (
    <FlashcardsContainer>
      <Content>
        <NavigationButtons />
        <Reveal>
          <Header>
            <h1>Flash Cards</h1>
            <p>
              Revise os conceitos mais importantes de cada certificação em formato de cartão.
              Escolha uma trilha para começar a estudar.
            </p>
          </Header>
        </Reveal>

        <TracksGrid>
          {tracks.map((track, index) => (
            <Reveal key={track.examType} delay={`${index * 0.1}s`}>
              <TrackCard>
                <TrackIcon className="icon">{track.icon}</TrackIcon>
                <TrackTitle>{track.title}</TrackTitle>
                <TrackDescription>{track.description}</TrackDescription>
                <CardCount>{track.cards.length} cartões</CardCount>
                <StartButton to={`/flashcards/${track.examType}`}>
                  Estudar Agora
                </StartButton>
              </TrackCard>
            </Reveal>
          ))}
        </TracksGrid>
      </Content>
    </FlashcardsContainer>
  );
};

export default Flashcards;
