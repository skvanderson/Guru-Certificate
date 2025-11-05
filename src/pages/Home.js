import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: calc(100vh - 160px);
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--aws-gray-100) 0%, var(--aws-blue-light) 100%);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-8) var(--spacing-4);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
    text-align: center;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  h1 {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    color: var(--aws-blue);
    margin: 0 0 var(--spacing-6) 0;
    line-height: 1.2;
    width: 100%;
    
    @media (max-width: 768px) {
      font-size: var(--font-size-3xl);
      text-align: center;
    }
  }
  
  p {
    font-size: var(--font-size-lg);
    color: var(--aws-gray-600);
    margin: 0 0 var(--spacing-8) 0;
    line-height: 1.6;
    width: 100%;
    
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: var(--spacing-4);
  flex-wrap: wrap;
  width: 100%;
  margin: 0;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-lg);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: var(--font-size-base);
  
  &.primary {
    background-color: var(--aws-orange);
    color: var(--aws-white);
    
    &:hover {
      background-color: var(--aws-orange-dark);
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }
  }
  
  &.secondary {
    background-color: transparent;
    color: var(--aws-blue);
    border: 2px solid var(--aws-blue);
    
    &:hover {
      background-color: var(--aws-blue);
      color: var(--aws-white);
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-xl);
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Content>
        <TextContent>
          <h1>Bem-vindo à GURU Certificate!</h1>
          <p>
            Inicie sua jornada de aprendizado hoje. Junte-se a nós e comece a
            estudar agora mesmo para conquistar suas certificações AWS.
          </p>
          <CTAButtons>
            <Button to="/simulados" className="primary">
              Começar Simulados
            </Button>
            <Button to="/cursos" className="secondary">
              Cursos para Aprender Nuvem
            </Button>
            <Button to="/quem-somos" className="secondary">
              Conhecer Mais
            </Button>
          </CTAButtons>
        </TextContent>
        
        <ImageContainer>
          <img
            src="/assets/images/illustrations/gugu-certicate.png"
            alt="Guru Certificate - Certificações AWS"
          />
        </ImageContainer>
      </Content>
    </HomeContainer>
  );
};

export default Home;
