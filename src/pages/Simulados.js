import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavigationButtons from '../components/NavigationButtons';

const SimuladosContainer = styled.div`
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

const SimuladosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-12);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
`;

const SimuladoCard = styled.div`
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-lg);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
    border-color: var(--aws-orange);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-6);
  
  .badge {
    width: 80px;
    height: auto;
    margin-right: var(--spacing-4);
    flex-shrink: 0;
    
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
  
  h3 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--aws-blue);
    margin: 0;
  }
`;

const CardContent = styled.div`
  margin-bottom: var(--spacing-6);
  
  p {
    color: var(--aws-gray-600);
    line-height: 1.6;
    margin-bottom: var(--spacing-4);
  }
  
  .features {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      display: flex;
      align-items: center;
      margin-bottom: var(--spacing-2);
      color: var(--aws-gray-600);
      
      &::before {
        content: "✓";
        color: var(--aws-green);
        font-weight: bold;
        margin-right: var(--spacing-2);
      }
    }
  }
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--spacing-4);
  }
`;

const StartButton = styled(Link)`
  background-color: var(--aws-orange);
  color: var(--aws-white);
  text-decoration: none;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--aws-orange-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

const Difficulty = styled.span`
  background-color: var(--aws-gray-200);
  color: var(--aws-gray-700);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 500;
`;

const Simulados = () => {
  return (
    <SimuladosContainer>
      <Content>
        <NavigationButtons />
        <Header>
          <h1>Simulados</h1>
          <p>
            Selecione um dos simulados abaixo para começar sua jornada de preparação 
            para as certificações AWS. Nossos simulados são baseados em questões reais 
            dos exames oficiais.
          </p>
        </Header>
        
        <SimuladosGrid>
          <SimuladoCard>
            <CardHeader>
              <div className="badge">
                <img src="/assets/images/badges/aws-certified-cloud-practitioner.png" alt="AWS Cloud Practitioner Badge" />
              </div>
              <h3>Cloud Practitioner CLF-02</h3>
            </CardHeader>
            <CardContent>
              <p>
                Simulado para a certificação AWS Cloud Practitioner, ideal para iniciantes 
                que desejam entender os fundamentos da nuvem AWS.
              </p>
              <ul className="features">
                <li>20 questões baseadas no exame oficial</li>
                <li>Tempo limite de 40 minutos</li>
                <li>Explicações detalhadas das respostas</li>
                <li>Suporte a português e inglês</li>
              </ul>
            </CardContent>
            <CardFooter>
              <StartButton to="/simulado/cloud-practitioner">
                Iniciar Simulado
              </StartButton>
              <Difficulty>Iniciante</Difficulty>
            </CardFooter>
          </SimuladoCard>
          
          <SimuladoCard>
            <CardHeader>
              <div className="badge">
                <img src="/assets/images/badges/aws-certified-solutions-architect-associate.png" alt="AWS Solutions Architect Associate Badge" />
              </div>
              <h3>Solutions Architect - SSA</h3>
            </CardHeader>
            <CardContent>
              <p>
                Simulado para a certificação AWS Solutions Architect Associate, 
                focado em arquitetura de soluções escaláveis e seguras.
              </p>
              <ul className="features">
                <li>20 questões baseadas no exame oficial</li>
                <li>Tempo limite de 40 minutos</li>
                <li>Cenários práticos de arquitetura</li>
                <li>Análise de custos e performance</li>
              </ul>
            </CardContent>
            <CardFooter>
              <StartButton to="/simulado/solutions-architect">
                Iniciar Simulado
              </StartButton>
              <Difficulty>Intermediário</Difficulty>
            </CardFooter>
          </SimuladoCard>
          
          <SimuladoCard>
            <CardHeader>
              <div className="badge">
                <img src="/assets/images/badges/aws-certified-developer-associate.png" alt="AWS Developer Associate Badge" />
              </div>
              <h3>Developer Associate - DVA</h3>
            </CardHeader>
            <CardContent>
              <p>
                Simulado para a certificação AWS Developer Associate, 
                focado em desenvolvimento de aplicações serverless e CI/CD.
              </p>
              <ul className="features">
                <li>20 questões baseadas no exame oficial</li>
                <li>Tempo limite de 40 minutos</li>
                <li>Cenários complexos de desenvolvimento</li>
                <li>Foco em Lambda, API Gateway e DevOps</li>
              </ul>
            </CardContent>
            <CardFooter>
              <StartButton to="/simulado/developer-associate">
                Iniciar Simulado
              </StartButton>
              <Difficulty>Intermediário</Difficulty>
            </CardFooter>
          </SimuladoCard>
        </SimuladosGrid>
      </Content>
    </SimuladosContainer>
  );
};

export default Simulados;
