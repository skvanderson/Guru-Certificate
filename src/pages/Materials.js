import React from 'react';
import styled from 'styled-components';
import NavigationButtons from '../components/NavigationButtons';

const MaterialsContainer = styled.div`
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

const MaterialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-12);
`;

const MaterialCard = styled.div`
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
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
  margin-bottom: var(--spacing-4);
  
  .icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--aws-orange), var(--aws-orange-dark));
    border-radius: var(--radius-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: var(--spacing-4);
    font-size: var(--font-size-xl);
    color: var(--aws-white);
  }
  
  h3 {
    color: var(--aws-blue);
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin: 0;
  }
`;

const CardContent = styled.div`
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
      font-size: var(--font-size-sm);
      
      &::before {
        content: "✓";
        color: var(--aws-green);
        font-weight: bold;
        margin-right: var(--spacing-2);
      }
    }
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--aws-orange);
  color: var(--aws-white);
  text-decoration: none;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: 600;
  transition: all 0.2s ease;
  margin-top: var(--spacing-4);
  
  &:hover {
    background-color: var(--aws-orange-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
`;

const ImageSection = styled.div`
  text-align: center;
  margin-top: var(--spacing-12);
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: var(--radius-xl);
    box-shadow: var(--shadow-lg);
  }
`;

const Materials = () => {
  return (
    <MaterialsContainer>
      <Content>
        <NavigationButtons />
        <Header>
          <h1>Materiais de Estudo</h1>
          <p>
            Recursos exclusivos para ajudar você a se preparar para as certificações AWS. 
            Baixe nossos materiais e acelere seu aprendizado.
          </p>
        </Header>

        <MaterialsGrid>
          <MaterialCard>
            <CardHeader>
              <div className="icon">📚</div>
              <h3>Guia Completo Cloud Practitioner</h3>
            </CardHeader>
            <CardContent>
              <p>
                Guia completo com todos os conceitos fundamentais da AWS Cloud Practitioner, 
                incluindo serviços principais, arquitetura e boas práticas.
              </p>
              <ul className="features">
                <li>Conceitos fundamentais de cloud computing</li>
                <li>Serviços principais da AWS</li>
                <li>Modelo de responsabilidade compartilhada</li>
                <li>Boas práticas de segurança</li>
                <li>Exemplos práticos e casos de uso</li>
              </ul>
              <DownloadButton href="#" download>
                📥 Baixar PDF
              </DownloadButton>
            </CardContent>
          </MaterialCard>

          <MaterialCard>
            <CardHeader>
              <div className="icon">🏗️</div>
              <h3>Arquitetura de Soluções AWS</h3>
            </CardHeader>
            <CardContent>
              <p>
                Material focado em arquitetura de soluções escaláveis, seguras e 
                econômicas na AWS. Ideal para quem está se preparando para o exame SAA.
              </p>
              <ul className="features">
                <li>Padrões de arquitetura</li>
                <li>Design de sistemas escaláveis</li>
                <li>Otimização de custos</li>
                <li>Disaster recovery</li>
                <li>Diagramas e exemplos práticos</li>
              </ul>
              <DownloadButton href="#" download>
                📥 Baixar PDF
              </DownloadButton>
            </CardContent>
          </MaterialCard>

          <MaterialCard>
            <CardHeader>
              <div className="icon">🔒</div>
              <h3>Segurança na AWS</h3>
            </CardHeader>
            <CardContent>
              <p>
                Guia completo sobre segurança na AWS, cobrindo IAM, criptografia, 
                monitoramento e conformidade.
              </p>
              <ul className="features">
                <li>Identity and Access Management (IAM)</li>
                <li>Criptografia e chaves</li>
                <li>Monitoramento e logging</li>
                <li>Conformidade e auditoria</li>
                <li>Melhores práticas de segurança</li>
              </ul>
              <DownloadButton href="#" download>
                📥 Baixar PDF
              </DownloadButton>
            </CardContent>
          </MaterialCard>

          <MaterialCard>
            <CardHeader>
              <div className="icon">💰</div>
              <h3>Otimização de Custos</h3>
            </CardHeader>
            <CardContent>
              <p>
                Estratégias e ferramentas para otimizar custos na AWS, incluindo 
                análise de uso e recomendações de economia.
              </p>
              <ul className="features">
                <li>Análise de custos e uso</li>
                <li>Instâncias reservadas</li>
                <li>Spot instances</li>
                <li>Savings Plans</li>
                <li>Ferramentas de otimização</li>
              </ul>
              <DownloadButton href="#" download>
                📥 Baixar PDF
              </DownloadButton>
            </CardContent>
          </MaterialCard>

          <MaterialCard>
            <CardHeader>
              <div className="icon">📊</div>
              <h3>Cheat Sheets AWS</h3>
            </CardHeader>
            <CardContent>
              <p>
                Resumos rápidos dos principais serviços AWS com comandos, 
                configurações e dicas importantes para consulta rápida.
              </p>
              <ul className="features">
                <li>Comandos CLI essenciais</li>
                <li>Configurações de serviços</li>
                <li>Limites e quotas</li>
                <li>Dicas de troubleshooting</li>
                <li>Formato compacto para consulta</li>
              </ul>
              <DownloadButton href="#" download>
                📥 Baixar PDF
              </DownloadButton>
            </CardContent>
          </MaterialCard>

          <MaterialCard>
            <CardHeader>
              <div className="icon">🎯</div>
              <h3>Plano de Estudos</h3>
            </CardHeader>
            <CardContent>
              <p>
                Cronograma estruturado de estudos para cada certificação AWS, 
                com metas semanais e recursos recomendados.
              </p>
              <ul className="features">
                <li>Cronograma de 8 semanas</li>
                <li>Metas semanais definidas</li>
                <li>Recursos por tópico</li>
                <li>Simulados programados</li>
                <li>Checklist de preparação</li>
              </ul>
              <DownloadButton href="#" download>
                📥 Baixar PDF
              </DownloadButton>
            </CardContent>
          </MaterialCard>
        </MaterialsGrid>

        <ImageSection>
          <img 
            src="/assets/images/illustrations/materials-illustration.svg" 
            alt="Study Materials" 
          />
        </ImageSection>
      </Content>
    </MaterialsContainer>
  );
};

export default Materials;
