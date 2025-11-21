import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NavigationButtons from '../components/NavigationButtons';
import { getCurrentUser, getRanking } from '../services/userService';

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
  text-align: center;
  margin-bottom: var(--spacing-8);
`;

const Title = styled.h1`
  color: var(--aws-blue);
  font-size: var(--font-size-4xl);
  margin: 0 0 var(--spacing-4) 0;
`;

const Subtitle = styled.p`
  color: var(--aws-gray-600);
  font-size: var(--font-size-lg);
  margin: 0;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-8);
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: var(--spacing-3) var(--spacing-6);
  background-color: ${props => props.active ? 'var(--aws-orange)' : 'var(--aws-white)'};
  color: ${props => props.active ? 'var(--aws-white)' : 'var(--aws-gray-700)'};
  border: 2px solid ${props => props.active ? 'var(--aws-orange)' : 'var(--aws-gray-300)'};
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--aws-orange-dark)' : 'var(--aws-gray-50)'};
    transform: translateY(-2px);
  }
`;

const RankingTable = styled.div`
  background: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
  overflow-x: auto;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 200px 150px;
  gap: var(--spacing-4);
  padding: var(--spacing-4);
  background: var(--aws-gray-50);
  border-radius: var(--radius-lg);
  font-weight: 600;
  color: var(--aws-gray-700);
  margin-bottom: var(--spacing-4);
  
  @media (max-width: 768px) {
    grid-template-columns: 60px 1fr 120px 100px;
    font-size: var(--font-size-sm);
  }
`;

const RankingRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 200px 150px;
  gap: var(--spacing-4);
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-2);
  transition: all 0.2s ease;
  background: ${props => props.highlight ? 'linear-gradient(135deg, #FFE5B4 0%, #FFD89B 100%)' : 'var(--aws-white)'};
  border: ${props => props.highlight ? '2px solid var(--aws-orange)' : '1px solid var(--aws-gray-200)'};
  
  &:hover {
    background: ${props => props.highlight ? 'linear-gradient(135deg, #FFE5B4 0%, #FFD89B 100%)' : 'var(--aws-gray-50)'};
    transform: translateX(4px);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 60px 1fr 120px 100px;
    font-size: var(--font-size-sm);
  }
`;

const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--font-size-xl);
  color: ${props => {
    if (props.position === 1) return '#FFD700'; // Gold
    if (props.position === 2) return '#C0C0C0'; // Silver
    if (props.position === 3) return '#CD7F32'; // Bronze
    return 'var(--aws-gray-600)';
  }};
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

const Username = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  color: var(--aws-gray-800);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`;

const ExamType = styled.div`
  display: flex;
  align-items: center;
  color: var(--aws-gray-700);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-sm);
  }
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 700;
  font-size: var(--font-size-lg);
  color: var(--aws-green);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-base);
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-12);
  color: var(--aws-gray-600);
  
  p {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-4);
  }
`;

const getExamTypeName = (type) => {
  const names = {
    'cloud-practitioner': 'Cloud Practitioner',
    'developer-associate': 'Developer Associate',
    'solutions-architect': 'Solutions Architect'
  };
  return names[type] || type;
};

const Ranking = () => {
  const [currentUser] = useState(getCurrentUser());
  const [filter, setFilter] = useState(null); // null = todos, 'cloud-practitioner', etc.
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    const rankingData = getRanking(filter);
    setRanking(rankingData);
  }, [filter]);

  const getCurrentUserPosition = () => {
    if (!currentUser) return null;
    
    if (filter) {
      // Buscar posição na trilha específica
      const userEntry = ranking.find(entry => 
        entry.userId === currentUser.id && entry.examType === filter
      );
      return userEntry ? userEntry.position : null;
    } else {
      // Buscar melhor posição geral
      const userEntries = ranking.filter(entry => entry.userId === currentUser.id);
      if (userEntries.length === 0) return null;
      return Math.min(...userEntries.map(e => e.position));
    }
  };

  const getCurrentUserScore = () => {
    if (!currentUser) return null;
    
    if (filter) {
      const userEntry = ranking.find(entry => 
        entry.userId === currentUser.id && entry.examType === filter
      );
      return userEntry ? userEntry.totalCorrect : null;
    } else {
      const userEntries = ranking.filter(entry => entry.userId === currentUser.id);
      if (userEntries.length === 0) return null;
      return userEntries.reduce((sum, e) => sum + e.totalCorrect, 0);
    }
  };

  const userPosition = getCurrentUserPosition();
  const userScore = getCurrentUserScore();

  return (
    <Container>
      <Content>
        <NavigationButtons />
        
        <Header>
          <Title>Ranking</Title>
          <Subtitle>
            Veja sua posição e compare com outros estudantes
          </Subtitle>
        </Header>

        {currentUser && userPosition && (
          <div style={{
            background: 'linear-gradient(135deg, #FFE5B4 0%, #FFD89B 100%)',
            padding: 'var(--spacing-6)',
            borderRadius: 'var(--radius-xl)',
            marginBottom: 'var(--spacing-8)',
            textAlign: 'center',
            border: '2px solid var(--aws-orange)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <h2 style={{ color: 'var(--aws-blue)', margin: '0 0 var(--spacing-2) 0' }}>
              Sua Posição
            </h2>
            <p style={{ fontSize: 'var(--font-size-2xl)', fontWeight: '700', color: 'var(--aws-gray-800)', margin: '0' }}>
              {userPosition}ª posição
              {filter && ` em ${getExamTypeName(filter)}`}
            </p>
            <p style={{ color: 'var(--aws-gray-600)', margin: 'var(--spacing-2) 0 0 0' }}>
              {userScore} acertos
            </p>
          </div>
        )}

        <FilterButtons>
          <FilterButton 
            active={filter === null}
            onClick={() => setFilter(null)}
          >
            Todos
          </FilterButton>
          <FilterButton 
            active={filter === 'cloud-practitioner'}
            onClick={() => setFilter('cloud-practitioner')}
          >
            Cloud Practitioner
          </FilterButton>
          <FilterButton 
            active={filter === 'developer-associate'}
            onClick={() => setFilter('developer-associate')}
          >
            Developer Associate
          </FilterButton>
          <FilterButton 
            active={filter === 'solutions-architect'}
            onClick={() => setFilter('solutions-architect')}
          >
            Solutions Architect
          </FilterButton>
        </FilterButtons>

        {ranking.length === 0 ? (
          <EmptyState>
            <p>Nenhum resultado ainda. Seja o primeiro a aparecer no ranking!</p>
            <p>Realize um simulado para começar a competir.</p>
          </EmptyState>
        ) : (
          <RankingTable>
            <TableHeader>
              <div>Posição</div>
              <div>Usuário</div>
              <div>Trilha</div>
              <div style={{ textAlign: 'right' }}>Acertos</div>
            </TableHeader>
            
            {ranking.map((entry) => (
              <RankingRow 
                key={`${entry.userId}_${entry.examType}`}
                highlight={currentUser && entry.userId === currentUser.id}
              >
                <Position position={entry.position}>
                  {entry.position}º
                </Position>
                <Username>
                  {entry.username}
                </Username>
                <ExamType>{getExamTypeName(entry.examType)}</ExamType>
                <Score>{entry.totalCorrect} acertos</Score>
              </RankingRow>
            ))}
          </RankingTable>
        )}
      </Content>
    </Container>
  );
};

export default Ranking;

