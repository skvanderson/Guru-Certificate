import React from 'react';
import styled from 'styled-components';
import NavigationButtons from '../components/NavigationButtons';
import Reveal from '../components/Reveal';

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
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-xl);
    border-color: var(--aws-orange);

    .icon {
      transform: scale(1.15) rotate(-4deg);
    }
  }
`;

const CursoHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-6);

  .icon {
    font-size: 3rem;
    margin-right: var(--spacing-4);
    display: inline-block;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
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
  margin-bottom: var(--spacing-16);

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

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-8);

  h2 {
    color: var(--aws-blue);
    font-size: var(--font-size-3xl);
    font-weight: 700;
    margin: 0 0 var(--spacing-3) 0;
  }

  p {
    color: var(--aws-gray-600);
    max-width: 640px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const AwsPlatformCard = styled.div`
  background: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-10);
  border: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: var(--aws-orange);
    box-shadow: var(--shadow-xl);
  }

  @media (max-width: 640px) {
    flex-direction: column;
    text-align: center;
  }
`;

const AwsPlatformIcon = styled.div`
  font-size: 3.5rem;
  flex-shrink: 0;
`;

const AwsPlatformInfo = styled.div`
  flex: 1;

  h3 {
    color: var(--aws-blue);
    font-size: var(--font-size-xl);
    font-weight: 700;
    margin: 0 0 var(--spacing-2) 0;
  }

  p {
    color: var(--aws-gray-600);
    line-height: 1.6;
    margin: 0;
  }
`;

const AwsPlatformButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3) var(--spacing-6);
  background-color: var(--aws-blue);
  color: var(--aws-white);
  text-decoration: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--aws-blue-light);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

const QuestSubheader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-6);

  h3 {
    color: var(--aws-blue);
    font-size: var(--font-size-2xl);
    font-weight: 700;
    margin: 0 0 var(--spacing-2) 0;
  }

  p {
    color: var(--aws-gray-600);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const QuestGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-10);
`;

const QuestCard = styled.div`
  background: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow-md);
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-xl);
    border-color: var(--aws-orange);
  }
`;

const QuestBadge = styled.span`
  display: inline-block;
  align-self: flex-start;
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 700;
  margin-bottom: var(--spacing-3);
  background-color: ${props => props.$free ? '#D1FAE5' : 'var(--aws-gray-100)'};
  color: ${props => props.$free ? '#059669' : 'var(--aws-gray-700)'};
`;

const QuestTitle = styled.h4`
  color: var(--aws-blue);
  font-size: var(--font-size-lg);
  font-weight: 700;
  margin: 0 0 var(--spacing-4) 0;
  flex-grow: 1;
`;

const QuestButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3) var(--spacing-5);
  background-color: var(--aws-orange);
  color: var(--aws-white);
  text-decoration: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: var(--font-size-sm);
  transition: all 0.2s ease;

  &:hover {
    background-color: var(--aws-orange-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

const cloudQuestCourses = [
  {
    title: 'Cloud Practitioner',
    description: 'Explore os fundamentos da AWS resolvendo desafios práticos em um mundo 3D gamificado.',
    free: true,
    url: 'https://skillbuilder.aws/learn/FU5WCYVGKY/aws-cloud-quest-cloud-practitioner/3BDEGUXF8P'
  },
  {
    title: 'Generative AI Cloud Practitioner',
    description: 'Aprenda os conceitos essenciais de IA generativa na AWS de forma interativa.',
    free: true,
    url: 'https://skillbuilder.aws/learn/5YB3FCEE1H/aws-cloud-quest-generative-ai-practitioner/Z78FJTJC7MAZ'
  },
  {
    title: 'Security',
    description: 'Pratique conceitos de segurança na nuvem resolvendo missões realistas.',
    free: false,
    url: 'https://skillbuilder.aws/learn/XHN86JM8PS/aws-cloud-quest-security/UPM9DNB9BY'
  },
  {
    title: 'Networking',
    description: 'Construa e configure redes na AWS enquanto avança pelas missões do jogo.',
    free: false,
    url: 'https://skillbuilder.aws/learn/UMUS6X3UFZ/aws-cloud-quest-networking/GDDNZXMRCV'
  },
  {
    title: 'Serverless Developer',
    description: 'Desenvolva aplicações serverless na prática, missão por missão.',
    free: false,
    url: 'https://skillbuilder.aws/learn/5EHN168DQA/aws-cloud-quest-serverless-developer/ZPBR2YMVGB'
  },
  {
    title: 'Solutions Architect',
    description: 'Desenhe arquiteturas de soluções na AWS em cenários práticos gamificados.',
    free: false,
    url: 'https://skillbuilder.aws/learn/1KGYFXENMW/aws-cloud-quest-solutions-architect/X46N7CNXX7'
  }
];

const Cursos = () => {
  return (
    <CursosContainer>
      <Content>
        <Reveal>
          <Header>
            <h1>Cursos para Aprender Nuvem</h1>
            <p>
              Das formações do programa AWS re/Start à plataforma oficial de treinamento da AWS:
              escolha o caminho ideal para acelerar sua jornada rumo à certificação.
            </p>
          </Header>
        </Reveal>

        <CursosGrid>
          <Reveal delay="0.1s">
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
          </Reveal>

          <Reveal delay="0.2s">
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
          </Reveal>
        </CursosGrid>

        <Reveal delay="0.1s">
          <InfoSection>
            <h3>Por que fazer essas formações?</h3>
            <p>
              Escola da Nuvem e Campinho Digital são realizações locais do programa{' '}
              <strong>AWS re/Start</strong>, ambas <strong>100% gratuitas</strong> e com uma
              formação completa em computação em nuvem AWS. São ideais para quem quer iniciar uma
              carreira em tecnologia, mesmo sem experiência prévia, e incluem preparação para
              certificações, conexão com o mercado de trabalho e suporte completo durante toda
              a jornada de aprendizado.
            </p>
          </InfoSection>
        </Reveal>

        <Reveal>
          <SectionHeader>
            <h2>Plataforma de Cursos da AWS</h2>
            <p>
              Prefere estudar direto na fonte? A própria AWS oferece uma plataforma completa de
              treinamento oficial, com cursos, jogos práticos e credenciais digitais.
            </p>
          </SectionHeader>
        </Reveal>

        <Reveal>
          <AwsPlatformCard>
            <AwsPlatformIcon>🎯</AwsPlatformIcon>
            <AwsPlatformInfo>
              <h3>AWS Skill Builder</h3>
              <p>
                Plataforma oficial de treinamento da AWS, com centenas de cursos digitais
                gratuitos e pagos, laboratórios práticos e trilhas de aprendizado para todas
                as certificações.
              </p>
            </AwsPlatformInfo>
            <AwsPlatformButton
              href="https://skillbuilder.aws/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar o Skill Builder
            </AwsPlatformButton>
          </AwsPlatformCard>
        </Reveal>

        <Reveal>
          <QuestSubheader>
            <h3>🎮 AWS Cloud Quest</h3>
            <p>
              Aprenda na prática em um mundo 3D gamificado, resolvendo desafios reais de cada
              área da AWS. Clique em qualquer curso abaixo para se inscrever diretamente.
            </p>
          </QuestSubheader>
        </Reveal>

        <QuestGrid>
          {cloudQuestCourses.map((quest, index) => (
            <Reveal key={quest.title} delay={`${(index % 3) * 0.08}s`}>
              <QuestCard>
                <QuestBadge $free={quest.free}>
                  {quest.free ? 'Gratuito' : 'Requer assinatura'}
                </QuestBadge>
                <QuestTitle>{quest.title}</QuestTitle>
                <p style={{ color: 'var(--aws-gray-600)', lineHeight: 1.6, marginBottom: 'var(--spacing-4)' }}>
                  {quest.description}
                </p>
                <QuestButton href={quest.url} target="_blank" rel="noopener noreferrer">
                  Jogar Agora
                </QuestButton>
              </QuestCard>
            </Reveal>
          ))}
        </QuestGrid>

        <Reveal>
          <AwsPlatformCard>
            <AwsPlatformIcon>🏅</AwsPlatformIcon>
            <AwsPlatformInfo>
              <h3>Microcredenciais AWS</h3>
              <p>
                Certificações digitais que comprovam habilidades específicas em serviços e
                soluções da AWS — um complemento ideal para o seu currículo entre um exame
                de certificação e outro.
              </p>
            </AwsPlatformInfo>
            <AwsPlatformButton
              href="https://skillbuilder.aws/certification/microcredentials"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Microcredenciais
            </AwsPlatformButton>
          </AwsPlatformCard>
        </Reveal>

        <div style={{ marginTop: 'var(--spacing-12)' }}>
        <NavigationButtons backPath="/" />
        </div>
      </Content>
    </CursosContainer>
  );
};

export default Cursos;