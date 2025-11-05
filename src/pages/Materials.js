import React from 'react';
import styled from 'styled-components';
import NavigationButtons from '../components/NavigationButtons';

const MaterialsContainer = styled.div`
  min-height: calc(100vh - 160px);
  padding: var(--spacing-12) 0;
  background: linear-gradient(135deg, var(--aws-gray-100) 0%, var(--aws-blue-light) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  width: 100%;
`;

const ConstructionCard = styled.div`
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-16);
  box-shadow: var(--shadow-xl);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  border: 2px solid var(--aws-orange);
  
  @media (max-width: 768px) {
    padding: var(--spacing-12) var(--spacing-6);
  }
`;

const Icon = styled.div`
  font-size: 6rem;
  margin-bottom: var(--spacing-6);
  animation: pulse 2s ease-in-out infinite;
  
  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 4rem;
    margin-bottom: var(--spacing-4);
  }
`;

const Title = styled.h1`
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--aws-blue);
  margin-bottom: var(--spacing-6);
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-4);
  }
`;

const Message = styled.p`
  font-size: var(--font-size-xl);
  color: var(--aws-gray-600);
  line-height: 1.8;
  margin-bottom: var(--spacing-8);
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
    margin-bottom: var(--spacing-6);
  }
`;

const InfoBox = styled.div`
  background-color: var(--aws-gray-100);
  border-radius: var(--radius-lg);
  padding: var(--spacing-6);
  margin-top: var(--spacing-8);
  border-left: 4px solid var(--aws-orange);
  
  p {
    font-size: var(--font-size-lg);
    color: var(--aws-gray-700);
    line-height: 1.6;
    margin: 0;
    
    strong {
      color: var(--aws-blue);
      font-weight: 600;
    }
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-4);
    margin-top: var(--spacing-6);
    
    p {
      font-size: var(--font-size-base);
    }
  }
`;

const Materials = () => {
  return (
    <MaterialsContainer>
      <Content>
        <NavigationButtons />
        <ConstructionCard>
          <Icon>🚧</Icon>
          <Title>Materiais em Construção</Title>
          <Message>
            Estamos trabalhando para disponibilizar materiais de estudo completos 
            e de alta qualidade para você!
          </Message>
          <InfoBox>
            <p>
              <strong>Em breve</strong>, materiais em formato PDF estarão disponíveis 
              para download, incluindo guias completos, resumos e recursos exclusivos 
              para suas certificações AWS.
            </p>
          </InfoBox>
        </ConstructionCard>
      </Content>
    </MaterialsContainer>
  );
};

export default Materials;
