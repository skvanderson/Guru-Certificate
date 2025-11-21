import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavigationButtons from '../components/NavigationButtons';

const HandsOnContainer = styled.div`
  min-height: calc(100vh - 160px);
  padding: var(--spacing-12) 0;
  background: linear-gradient(135deg, var(--aws-gray-100) 0%, var(--aws-blue-light) 100%);
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  width: 100%;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-10);
`;

const Title = styled.h1`
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--aws-blue);
  margin: 0 0 var(--spacing-4) 0;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`;

const Subtitle = styled.p`
  font-size: var(--font-size-xl);
  color: var(--aws-gray-600);
  margin: 0;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-lg);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-6);
  margin-top: var(--spacing-8);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-4);
  }
`;

const ProjectCard = styled.div`
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
  border: 2px solid var(--aws-gray-200);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
    border-color: var(--aws-orange);
  }
`;

const ProjectNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--aws-orange) 0%, var(--aws-orange-dark) 100%);
  color: var(--aws-white);
  border-radius: var(--radius-full);
  font-weight: 700;
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-4);
`;

const ProjectTitle = styled.h2`
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--aws-blue);
  margin: 0 0 var(--spacing-3) 0;
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  font-size: var(--font-size-base);
  color: var(--aws-gray-700);
  line-height: 1.6;
  margin: 0 0 var(--spacing-4) 0;
  flex-grow: 1;
`;

const ServicesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2);
  margin-top: var(--spacing-4);
`;

const ServiceTag = styled.span`
  background-color: var(--aws-gray-100);
  color: var(--aws-blue);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 600;
  border: 1px solid var(--aws-gray-300);
`;

const projects = [
  {
    number: 0,
    title: 'Como Criar uma Conta AWS - Guia Completo',
    description: 'Aprenda passo a passo como criar sua conta AWS e entender o novo sistema de créditos ($100 USD iniciais). Tutorial essencial para começar a usar os serviços AWS com segurança.',
    services: ['Conta AWS']
  },
  {
    number: 1,
    title: 'Criar um Site Estático com S3 e CloudFront',
    description: 'Demonstração de como hospedar um site estático usando o Amazon S3 para armazenar os arquivos do site e o Amazon CloudFront para entrega de conteúdo de maneira eficiente.',
    services: ['S3', 'CloudFront']
  },
  {
    number: 2,
    title: 'Construir uma Aplicação de Blog com AWS Lambda e DynamoDB',
    description: 'Utilização de serviços serverless, como AWS Lambda e Amazon DynamoDB, para criar uma aplicação de blog sem a necessidade de gerenciar infraestrutura de servidores.',
    services: ['Lambda', 'DynamoDB']
  },
  {
    number: 3,
    title: 'Implantar um Aplicativo Serverless com AWS Amplify',
    description: 'Exploração do AWS Amplify para criar, implantar e gerenciar aplicativos front-end e back-end de forma rápida e fácil.',
    services: ['Amplify']
  },
  {
    number: 4,
    title: 'Criar um Bot de Conversação com Lex e Lambda',
    description: 'Utilização de serviços de IA, como Amazon Lex (um serviço de conversação de voz e texto) e AWS Lambda, para criar um bot de conversação que pode interagir com os usuários.',
    services: ['Lex', 'Lambda']
  },
  {
    number: 5,
    title: 'Configurar um Pipeline de CI/CD com AWS CodePipeline',
    description: 'Demonstração de como criar um pipeline de integração contínua e entrega contínua (CI/CD) usando o AWS CodePipeline para automatizar o processo de implantação de aplicativos.',
    services: ['CodePipeline', 'CI/CD']
  },
  {
    number: 6,
    title: 'Hospedar um Aplicativo Web em um Servidor EC2',
    description: 'Aprendizado sobre a configuração de um servidor EC2 na AWS para hospedar e executar um aplicativo web.',
    services: ['EC2']
  },
  {
    number: 7,
    title: 'Implementar um Servidor de E-mail com Amazon SES',
    description: 'Exploração do Amazon Simple Email Service (SES) para configurar um servidor de e-mail e enviar e-mails em grande escala de forma segura e confiável.',
    services: ['SES']
  },
  {
    number: 8,
    title: 'Criar uma API RESTful com API Gateway e Lambda',
    description: 'Utilização do Amazon API Gateway e AWS Lambda para criar uma API RESTful que pode ser usada para construir aplicativos web e móveis.',
    services: ['API Gateway', 'Lambda']
  },
  {
    number: 9,
    title: 'Realizar Análise de Dados com Amazon Redshift',
    description: 'Demonstração de como usar o Amazon Redshift para executar análises de dados em grande escala e obter insights valiosos a partir de conjuntos de dados.',
    services: ['Redshift']
  },
  {
    number: 10,
    title: 'Implementar um Pipeline de Dados com AWS Glue e S3',
    description: 'Utilização do AWS Glue e Amazon S3 para criar um pipeline de dados que pode extrair, transformar e carregar (ETL) dados de várias fontes para armazenamento na nuvem.',
    services: ['Glue', 'S3']
  }
];

const Materials = () => {
  const navigate = useNavigate();

  const handleCardClick = (projectNumber) => {
    navigate(`/hands-on/tutorial/${projectNumber}`);
  };

  return (
    <HandsOnContainer>
      <Content>
        <NavigationButtons />
        
        <Header>
          <Title>Hands On - Projetos Práticos AWS</Title>
          <Subtitle>
            10 Projetos Práticos Divertidos para Aprender AWS
          </Subtitle>
        </Header>

        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard 
              key={project.number}
              onClick={() => handleCardClick(project.number)}
            >
              <ProjectNumber>{project.number}</ProjectNumber>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ServicesList>
                {project.services.map((service, index) => (
                  <ServiceTag key={index}>{service}</ServiceTag>
                ))}
              </ServicesList>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Content>
    </HandsOnContainer>
  );
};

export default Materials;
