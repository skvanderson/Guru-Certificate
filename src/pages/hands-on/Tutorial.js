import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavigationButtons from '../../components/NavigationButtons';
import { tutorials } from '../../data/tutorialsData';

const TutorialContainer = styled.div`
  min-height: calc(100vh - 160px);
  padding: var(--spacing-12) 0;
  background: linear-gradient(135deg, var(--aws-gray-100) 0%, var(--aws-blue-light) 100%);
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  width: 100%;
`;

const Header = styled.div`
  margin-bottom: var(--spacing-8);
`;

const Title = styled.h1`
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--aws-blue);
  margin: 0 0 var(--spacing-4) 0;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`;

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const InfoBox = styled.div`
  background-color: var(--aws-white);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  border-left: 4px solid ${props => props.color || 'var(--aws-orange)'};
  flex: 1;
  min-width: 200px;
`;

const InfoLabel = styled.div`
  font-size: var(--font-size-sm);
  color: var(--aws-gray-600);
  margin-bottom: var(--spacing-1);
  font-weight: 600;
`;

const InfoValue = styled.div`
  font-size: var(--font-size-base);
  color: var(--aws-gray-800);
  font-weight: 600;
`;

const FreeTierBox = styled.div`
  background: linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%);
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  border: 2px solid var(--aws-green);
`;

const FreeTierTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--aws-green);
  margin: 0 0 var(--spacing-2) 0;
`;

const FreeTierText = styled.p`
  font-size: var(--font-size-base);
  color: var(--aws-gray-700);
  margin: 0;
  line-height: 1.6;
`;

const Section = styled.section`
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  margin-bottom: var(--spacing-6);
  box-shadow: var(--shadow-md);
`;

const SectionTitle = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--aws-blue);
  margin: 0 0 var(--spacing-4) 0;
  padding-bottom: var(--spacing-3);
  border-bottom: 2px solid var(--aws-gray-200);
`;

const StepsList = styled.ol`
  list-style: none;
  counter-reset: step-counter;
  padding: 0;
  margin: 0;
`;

const Step = styled.li`
  counter-increment: step-counter;
  margin-bottom: var(--spacing-6);
  padding-left: var(--spacing-10);
  position: relative;
  
  &::before {
    content: counter(step-counter);
    position: absolute;
    left: 0;
    top: 0;
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, var(--aws-orange) 0%, var(--aws-orange-dark) 100%);
    color: var(--aws-white);
    border-radius: var(--radius-full);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: var(--font-size-base);
  }
`;

const StepTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--aws-blue);
  margin: 0 0 var(--spacing-2) 0;
`;

const StepContent = styled.div`
  font-size: var(--font-size-base);
  color: var(--aws-gray-700);
  line-height: 1.8;
  
  p {
    margin: 0 0 var(--spacing-3) 0;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  code {
    background-color: var(--aws-gray-100);
    padding: 2px 6px;
    border-radius: var(--radius-sm);
    font-family: 'Courier New', monospace;
    font-size: var(--font-size-sm);
    color: #000000;
    font-weight: 600;
  }
  
  ul, ol {
    margin: var(--spacing-3) 0;
    padding-left: var(--spacing-6);
    
    li {
      margin-bottom: var(--spacing-2);
      line-height: 1.6;
    }
  }
`;

const CodeBlock = styled.pre`
  background-color: #f5f5f5;
  color: #000000;
  padding: var(--spacing-4);
  border-radius: var(--radius-lg);
  overflow-x: auto;
  margin: var(--spacing-3) 0;
  font-size: var(--font-size-sm);
  line-height: 1.6;
  border: 1px solid var(--aws-gray-300);
  font-family: 'Courier New', monospace;
  
  code {
    background: none;
    padding: 0;
    color: #000000;
    font-weight: 500;
  }
`;

const DocLink = styled.a`
  color: var(--aws-orange);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease;
  
  &:hover {
    border-bottom-color: var(--aws-orange);
  }
`;

const WarningBox = styled.div`
  background-color: #FFF3CD;
  border-left: 4px solid #FFC107;
  border-radius: var(--radius-lg);
  padding: var(--spacing-4);
  margin: var(--spacing-4) 0;
`;

const WarningTitle = styled.div`
  font-weight: 700;
  color: #856404;
  margin-bottom: var(--spacing-2);
`;

const WarningText = styled.div`
  color: #856404;
  font-size: var(--font-size-sm);
  line-height: 1.6;
`;

const Tutorial = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tutorial = tutorials.find(t => t.id === parseInt(id));

  if (!tutorial) {
    return (
      <TutorialContainer>
        <Content>
          <NavigationButtons />
          <div style={{ textAlign: 'center', padding: 'var(--spacing-12)' }}>
            <h1>Tutorial não encontrado</h1>
            <p>Tutorial não encontrado. Por favor, volte para a página de Hands On.</p>
          </div>
        </Content>
      </TutorialContainer>
    );
  }

  return (
    <TutorialContainer>
      <Content>
        <NavigationButtons />
        
        <Header>
          <Title>{tutorial.title}</Title>
          <MetaInfo>
            <InfoBox color="var(--aws-orange)">
              <InfoLabel>Dificuldade</InfoLabel>
              <InfoValue>{tutorial.difficulty}</InfoValue>
            </InfoBox>
            <InfoBox color="var(--aws-blue)">
              <InfoLabel>Tempo Estimado</InfoLabel>
              <InfoValue>{tutorial.estimatedTime}</InfoValue>
            </InfoBox>
            <InfoBox color="var(--aws-green)">
              <InfoLabel>Serviços AWS</InfoLabel>
              <InfoValue>{tutorial.services.join(', ')}</InfoValue>
            </InfoBox>
          </MetaInfo>

          {tutorial.freeTier && (
            <FreeTierBox>
              <FreeTierTitle>✓ Compatível com Free Tier</FreeTierTitle>
              <FreeTierText>{tutorial.freeTier}</FreeTierText>
            </FreeTierBox>
          )}
        </Header>

        <Section>
          <SectionTitle>Pré-requisitos</SectionTitle>
          <StepContent>
            <ul>
              {tutorial.prerequisites.map((prereq, index) => (
                <li key={index}>{prereq}</li>
              ))}
            </ul>
          </StepContent>
        </Section>

        <Section>
          <SectionTitle>Passo a Passo</SectionTitle>
          <StepsList>
            {tutorial.steps.map((step, index) => (
              <Step key={index}>
                <StepTitle>{step.title}</StepTitle>
                <StepContent>
                  {step.content.map((content, contentIndex) => {
                    if (typeof content === 'string') {
                      return <p key={contentIndex}>{content}</p>;
                    }
                    if (content.type === 'code') {
                      return (
                        <CodeBlock key={contentIndex}>
                          <code>{content.value}</code>
                        </CodeBlock>
                      );
                    }
                    if (content.type === 'list') {
                      return (
                        <ul key={contentIndex}>
                          {content.items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      );
                    }
                    if (content.type === 'warning') {
                      return (
                        <WarningBox key={contentIndex}>
                          <WarningTitle>{content.title}</WarningTitle>
                          <WarningText>{content.text}</WarningText>
                        </WarningBox>
                      );
                    }
                    if (content.type === 'link') {
                      return (
                        <p key={contentIndex}>
                          Para mais informações, consulte a{' '}
                          <DocLink href={content.url} target="_blank" rel="noopener noreferrer">
                            documentação oficial da AWS
                          </DocLink>
                          .
                        </p>
                      );
                    }
                    return null;
                  })}
                </StepContent>
              </Step>
            ))}
          </StepsList>
        </Section>

        {tutorial.references && tutorial.references.length > 0 && (
          <Section>
            <SectionTitle>Referências e Documentação</SectionTitle>
            <StepContent>
              <ul>
                {tutorial.references.map((ref, index) => (
                  <li key={index}>
                    <DocLink href={ref.url} target="_blank" rel="noopener noreferrer">
                      {ref.title}
                    </DocLink>
                  </li>
                ))}
              </ul>
            </StepContent>
          </Section>
        )}
      </Content>
    </TutorialContainer>
  );
};

export default Tutorial;

