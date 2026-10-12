import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import Reveal from '../components/Reveal';

// ---------- Keyframes ----------

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const floatY = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.08); }
`;

// ---------- Hero ----------

const HeroSection = styled.div`
  position: relative;
  overflow: hidden;
  padding: var(--spacing-20) 0 var(--spacing-16);
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--aws-gray-100) 0%, var(--aws-blue-light) 100%);

  @media (max-width: 768px) {
    padding: var(--spacing-12) 0;
  }
`;

const GlowBlob = styled.div`
  position: absolute;
  top: 50%;
  right: 8%;
  width: 420px;
  height: 420px;
  transform: translateY(-50%);
  background: radial-gradient(circle, var(--aws-orange) 0%, transparent 70%);
  opacity: 0.5;
  filter: blur(60px);
  animation: ${pulseGlow} 6s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-8) var(--spacing-4);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;
  width: 100%;

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
    opacity: 0;
    animation: ${fadeInUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;

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
    opacity: 0;
    animation: ${fadeInUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards;

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
  align-items: center;
  width: 100%;
  margin: 0;
  opacity: 0;
  animation: ${fadeInUp} 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  justify-content: center;
  padding: var(--spacing-4) var(--spacing-8);
  border-radius: var(--radius-lg);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  font-size: var(--font-size-base);

  &.primary {
    background-color: var(--aws-orange);
    color: var(--aws-white);
    box-shadow: var(--shadow-md);

    &:hover {
      background-color: var(--aws-orange-dark);
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
    }
  }

  &.secondary {
    background-color: var(--aws-blue);
    color: var(--aws-white);

    &:hover {
      background-color: var(--aws-blue-light);
      transform: translateY(-3px);
      box-shadow: var(--shadow-lg);
    }
  }
`;

const TertiaryLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  color: var(--aws-blue);
  font-weight: 600;
  text-decoration: none;
  padding: var(--spacing-3) var(--spacing-2);
  transition: all 0.25s ease;

  .arrow {
    transition: transform 0.25s ease;
  }

  &:hover {
    color: var(--aws-orange);

    .arrow {
      transform: translateX(4px);
    }
  }
`;

const BadgesShowcase = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-6);
  opacity: 0;
  animation: ${fadeInUp} 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
`;

const BadgesRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--spacing-6);

  @media (max-width: 480px) {
    gap: var(--spacing-3);
  }
`;

const BadgeFloat = styled.div`
  animation: ${floatY} ${props => props.$duration || '5s'} ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};

  img {
    width: ${props => props.$size || '110px'};
    height: auto;
    filter: drop-shadow(0 12px 20px rgba(0, 0, 0, 0.18));

    @media (max-width: 480px) {
      width: 76px;
    }
  }
`;

const Wordmark = styled.div`
  text-align: center;
  max-width: 100%;

  .title {
    font-size: var(--font-size-3xl);
    font-weight: 800;
    letter-spacing: 1px;
    background: linear-gradient(135deg, var(--aws-blue) 0%, var(--aws-orange) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: var(--aws-blue);

    @media (max-width: 480px) {
      font-size: var(--font-size-xl);
    }
  }

  .tag {
    display: inline-block;
    margin-top: var(--spacing-2);
    padding: var(--spacing-1) var(--spacing-4);
    background-color: var(--aws-white);
    color: var(--aws-gray-600);
    border-radius: var(--radius-full);
    font-size: var(--font-size-sm);
    font-weight: 600;
    box-shadow: var(--shadow-sm);
  }
`;

// ---------- Features section ----------

const Section = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-16) var(--spacing-4);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-12);

  h2 {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--aws-blue);
    margin: 0 0 var(--spacing-3) 0;
  }

  p {
    font-size: var(--font-size-lg);
    color: var(--aws-gray-600);
    max-width: 560px;
    margin: 0 auto;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-6);

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(Link)`
  display: block;
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  text-decoration: none;
  box-shadow: var(--shadow-md);
  border: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  height: 100%;

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-xl);
    border-color: var(--aws-orange);
  }

  .icon {
    font-size: 2.25rem;
    margin-bottom: var(--spacing-4);
  }

  h3 {
    font-size: var(--font-size-lg);
    font-weight: 700;
    color: var(--aws-blue);
    margin: 0 0 var(--spacing-2) 0;
  }

  p {
    font-size: var(--font-size-sm);
    color: var(--aws-gray-600);
    line-height: 1.6;
    margin: 0;
  }
`;

// ---------- How it works ----------

const StepsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-8);
  position: relative;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Step = styled.div`
  text-align: center;
  position: relative;
`;

const StepNumber = styled.div`
  width: 56px;
  height: 56px;
  margin: 0 auto var(--spacing-4);
  border-radius: 50%;
  background: linear-gradient(135deg, var(--aws-orange) 0%, var(--aws-orange-dark) 100%);
  color: var(--aws-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: var(--font-size-xl);
  box-shadow: var(--shadow-md);
`;

const StepTitle = styled.h3`
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--aws-blue);
  margin: 0 0 var(--spacing-2) 0;
`;

const StepText = styled.p`
  color: var(--aws-gray-600);
  font-size: var(--font-size-sm);
  line-height: 1.6;
  max-width: 280px;
  margin: 0 auto;
`;

// ---------- Closing CTA ----------

const ClosingSection = styled.div`
  background: linear-gradient(135deg, var(--aws-blue) 0%, var(--aws-blue-dark) 100%);
  padding: var(--spacing-16) var(--spacing-4);
`;

const ClosingContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;

  h2 {
    color: var(--aws-white);
    font-size: var(--font-size-3xl);
    font-weight: 700;
    margin: 0 0 var(--spacing-4) 0;
  }

  p {
    color: var(--aws-gray-200, rgba(255, 255, 255, 0.8));
    font-size: var(--font-size-lg);
    margin: 0 0 var(--spacing-8) 0;
    line-height: 1.6;
  }
`;

const ClosingButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
  background-color: var(--aws-orange);
  color: var(--aws-white);
  text-decoration: none;
  padding: var(--spacing-4) var(--spacing-10);
  border-radius: var(--radius-lg);
  font-weight: 700;
  font-size: var(--font-size-lg);
  box-shadow: var(--shadow-lg);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background-color: var(--aws-orange-dark);
    transform: translateY(-3px) scale(1.02);
  }
`;

// ---------- Data ----------

const features = [
  {
    icon: '📝',
    title: 'Simulados',
    description: '105 questões nível de prova, cobrindo Cloud Practitioner, Solutions Architect e Developer Associate.',
    to: '/simulados'
  },
  {
    icon: '🗂️',
    title: 'Flash Cards',
    description: 'Revise os conceitos-chave de cada certificação em formato de cartão, no seu ritmo.',
    to: '/flashcards'
  },
  {
    icon: '🛠️',
    title: 'Hands On',
    description: 'Projetos práticos guiados para colocar a mão na massa em serviços reais da AWS.',
    to: '/materiais'
  },
  {
    icon: '🏆',
    title: 'Ranking',
    description: 'Acompanhe seu aproveitamento e compare seu progresso com outros estudantes.',
    to: '/ranking'
  }
];

const steps = [
  {
    title: 'Escolha uma trilha',
    text: 'Cloud Practitioner, Solutions Architect ou Developer Associate — comece pela certificação que faz sentido para você.'
  },
  {
    title: 'Estude e pratique',
    text: 'Combine simulados, flash cards e laboratórios práticos para fixar o conteúdo de verdade.'
  },
  {
    title: 'Acompanhe seu progresso',
    text: 'Veja seu aproveitamento no perfil e sua posição no ranking geral.'
  }
];

const Home = () => {
  return (
    <div>
      <HeroSection>
        <GlowBlob />
        <HeroContent>
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
              <TertiaryLink to="/contribuintes">
                Conhecer o projeto <span className="arrow">→</span>
              </TertiaryLink>
            </CTAButtons>
          </TextContent>

          <BadgesShowcase>
            <BadgesRow>
              <BadgeFloat $delay="0s" $duration="5.5s" $size="100px">
                <img
                  src="/assets/images/badges/aws-certified-cloud-practitioner.png"
                  alt="AWS Certified Cloud Practitioner"
                />
              </BadgeFloat>
              <BadgeFloat $delay="0.6s" $duration="6.5s" $size="130px">
                <img
                  src="/assets/images/badges/aws-certified-solutions-architect-associate.png"
                  alt="AWS Certified Solutions Architect Associate"
                />
              </BadgeFloat>
              <BadgeFloat $delay="1.2s" $duration="6s" $size="100px">
                <img
                  src="/assets/images/badges/aws-certified-developer-associate.png"
                  alt="AWS Certified Developer Associate"
                />
              </BadgeFloat>
            </BadgesRow>
            <Wordmark>
              <div className="title">GURU CERTIFICATIONS</div>
              <span className="tag">3 certificações AWS disponíveis</span>
            </Wordmark>
          </BadgesShowcase>
        </HeroContent>
      </HeroSection>

      <Section>
        <Reveal>
          <SectionHeader>
            <h2>Tudo que você precisa em um só lugar</h2>
            <p>Ferramentas pensadas para cada etapa da sua preparação, do primeiro contato à véspera da prova.</p>
          </SectionHeader>
        </Reveal>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={`${index * 0.1}s`}>
              <FeatureCard to={feature.to}>
                <div className="icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </FeatureCard>
            </Reveal>
          ))}
        </FeaturesGrid>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Reveal>
          <SectionHeader>
            <h2>Como funciona</h2>
            <p>Três passos simples entre você e sua certificação AWS.</p>
          </SectionHeader>
        </Reveal>
        <Reveal delay="0.1s">
          <StepsRow>
            {steps.map((step, index) => (
              <Step key={step.title}>
                <StepNumber>{index + 1}</StepNumber>
                <StepTitle>{step.title}</StepTitle>
                <StepText>{step.text}</StepText>
              </Step>
            ))}
          </StepsRow>
        </Reveal>
      </Section>

      <ClosingSection>
        <Reveal>
          <ClosingContent>
            <h2>Pronto para começar sua jornada AWS?</h2>
            <p>Crie sua conta gratuita, acompanhe seu progresso e conquiste sua certificação.</p>
            <ClosingButton to="/cadastro">Criar Conta Grátis</ClosingButton>
          </ClosingContent>
        </Reveal>
      </ClosingSection>
    </div>
  );
};

export default Home;
