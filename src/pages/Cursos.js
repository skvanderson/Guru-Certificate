import React from 'react';
import styled from 'styled-components';
import NavigationButtons from '../components/NavigationButtons';

const CursosContainer = styled.div`
  min-height: calc(100vh - 160px);
  padding: var(--spacing-12) 0;
  background: linear-gradient(135deg, var(--aws-gray-100) 0%, var(--aws-orange-light) 100%);
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
    line-height: 1.6;
  }
`;

const CursosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-12);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
`;

const CursoCard = styled.div`
  background: var(--aws-white);
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

const CursoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-6);
  
  .icon {
    font-size: 3rem;
    margin-right: var(--spacing-4);
  }
  
  h2 {
    color: var(--aws-blue);
    font-size: var(--font-size-2xl);
    font-weight: 700;
    margin: 0;
  }
`;

const CursoContent = styled.div`
  p {
    color: var(--aws-gray-600);
    line-height: 1.6;
    margin-bottom: var(--spacing-6);
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin-bottom: var(--spacing-6);
    
    li {
      padding: var(--spacing-2) 0;
      color: var(--aws-gray-700);
      position: relative;
      padding-left: var(--spacing-6);
      
      &:before {
        content: "✓";
        position: absolute;
        left: 0;
        color: var(--aws-green);
        font-weight: bold;
      }
    }
  }
`;

const CursoButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-4) var(--spacing-8);
  background-color: var(--aws-orange);
  color: var(--aws-white);
  text-decoration: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  transition: all 0.2s ease;
  font-size: var(--font-size-base);
  width: 100%;
  
  &:hover {
    background-color: var(--aws-orange-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
  }
`;

const InfoSection = styled.div`
  background: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-lg);
  text-align: center;
  
  h3 {
    color: var(--aws-blue);
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-4);
  }
  
  p {
    color: var(--aws-gray-600);
    line-height: 1.6;
    margin-bottom: var(--spacing-6);
  }
`;

const Cursos = () => {
  return (
    <CursosContainer>
      <Content>
        <Header>
          <h1>Cursos para Aprender Nuvem</h1>
          <p>
            Descubra os melhores cursos gratuitos para se preparar para certificações AWS 
            e iniciar sua carreira em computação em nuvem.
          </p>
        </Header>

        <CursosGrid>
          <CursoCard>
            <CursoHeader>
              <span className="icon">🎓</span>
              <h2>Escola da Nuvem</h2>
            </CursoHeader>
            <CursoContent>
              <p>
                <strong>Fundamentos em Nuvem AWS + IA</strong> - Curso gratuito, online e ao vivo 
                que ensina os fundamentos da computação em nuvem AWS e os primeiros passos na 
                Inteligência Artificial.
              </p>
              <ul>
                <li>Curso 100% gratuito e online</li>
                <li>Aulas ao vivo de segunda a sexta</li>
                <li>15 horas semanais de estudo</li>
                <li>Baseado no programa AWS re/Start</li>
                <li>Conexão com oportunidades de emprego</li>
                <li>Preparação para certificações AWS</li>
                <li>Introdução à Inteligência Artificial</li>
              </ul>
              <CursoButton 
                href="https://escoladanuvem.org/cursos/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Inscrever-se na Escola da Nuvem
              </CursoButton>
            </CursoContent>
          </CursoCard>

          <CursoCard>
            <CursoHeader>
              <span className="icon">☁️</span>
              <h2>Campinho Digital</h2>
            </CursoHeader>
            <CursoContent>
              <p>
                <strong>AWS re/Start - Soluções na Nuvem</strong> - Formação completa em parceria 
                com a AWS que prepara estudantes para os desafios do mercado de trabalho em 
                computação em nuvem.
              </p>
              <ul>
                <li>350 horas de curso (12 semanas)</li>
                <li>100% online e gratuito</li>
                <li>Segunda a sexta, 18h30 às 22h30</li>
                <li>Voucher gratuito para certificação</li>
                <li>Rede de apoio exclusiva</li>
                <li>Conexão com tech recruiters</li>
                <li>Laboratórios práticos</li>
              </ul>
              <CursoButton 
                href="https://www.campinhodigital.org/curso-aws-solu%C3%A7%C3%B5es-na-nuvem" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Inscrever-se no Campinho Digital
              </CursoButton>
            </CursoContent>
          </CursoCard>
        </CursosGrid>

        <InfoSection>
          <h3>Por que fazer esses cursos?</h3>
          <p>
            Ambos os cursos são <strong>100% gratuitos</strong> e oferecem uma formação completa 
            em computação em nuvem AWS. Eles são ideais para quem quer iniciar uma carreira em 
            tecnologia, mesmo sem experiência prévia. Os cursos incluem preparação para 
            certificações, conexão com o mercado de trabalho e suporte completo durante toda 
            a jornada de aprendizado.
          </p>
        </InfoSection>

        <div style={{ marginTop: 'var(--spacing-12)' }}>
        <NavigationButtons backPath="/" />
        </div>
      </Content>
    </CursosContainer>
  );
};

export default Cursos;