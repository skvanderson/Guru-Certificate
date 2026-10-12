import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavigationButtons from '../../components/NavigationButtons';
import { cloudPractitionerQuestions } from '../../data/cloudPractitionerQuestions';
import { cloudPractitionerDomains } from '../../data/cloudPractitionerDomains';

const Container = styled.div`
  min-height: calc(100vh - 160px);
  padding: var(--spacing-12) 0;
  background: linear-gradient(135deg, var(--aws-gray-100) 0%, var(--aws-blue-light) 100%);
`;

const Content = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-10);

  h1 {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    color: var(--aws-blue);
    margin-bottom: var(--spacing-4);
  }

  p {
    font-size: var(--font-size-lg);
    color: var(--aws-gray-600);
    max-width: 650px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const DomainsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
`;

const DomainCard = styled.div`
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-lg);
  border: 2px solid transparent;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-6);
  flex-wrap: wrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
    border-color: var(--aws-orange);
  }
`;

const DomainInfo = styled.div`
  flex: 1;
  min-width: 260px;
`;

const DomainTitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-2);
  flex-wrap: wrap;
`;

const DomainTitle = styled.h3`
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--aws-blue);
`;

const WeightBadge = styled.span`
  background-color: var(--aws-gray-100);
  color: var(--aws-blue);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  font-weight: 700;
`;

const DomainDescription = styled.p`
  color: var(--aws-gray-600);
  line-height: 1.6;
  margin-bottom: var(--spacing-2);
`;

const QuestionCountTag = styled.span`
  color: var(--aws-gray-600);
  font-size: var(--font-size-sm);
  font-weight: 600;
`;

const PracticeButton = styled(Link)`
  background-color: var(--aws-orange);
  color: var(--aws-white);
  text-decoration: none;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--aws-orange-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

const CloudPractitionerDomains = () => {
  return (
    <Container>
      <Content>
        <NavigationButtons backPath="/simulados" />
        <Header>
          <h1>Praticar por Domínio</h1>
          <p>
            O exame AWS Cloud Practitioner (CLF-C02) é dividido em 4 domínios de conhecimento.
            Escolha um domínio para praticar apenas as questões daquele assunto, sem cronômetro,
            no seu ritmo.
          </p>
        </Header>

        <DomainsList>
          {cloudPractitionerDomains.map((domain) => {
            const count = cloudPractitionerQuestions.filter(q => q.domain === domain.slug).length;
            return (
              <DomainCard key={domain.slug}>
                <DomainInfo>
                  <DomainTitleRow>
                    <DomainTitle>{domain.name['pt-BR']}</DomainTitle>
                    <WeightBadge>{domain.weight} da prova</WeightBadge>
                  </DomainTitleRow>
                  <DomainDescription>{domain.description['pt-BR']}</DomainDescription>
                  <QuestionCountTag>{count} questões disponíveis</QuestionCountTag>
                </DomainInfo>
                <PracticeButton to={`/simulado/cloud-practitioner/dominio/${domain.slug}`}>
                  Praticar Domínio
                </PracticeButton>
              </DomainCard>
            );
          })}
        </DomainsList>
      </Content>
    </Container>
  );
};

export default CloudPractitionerDomains;
