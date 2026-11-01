import React from 'react';
import styled from 'styled-components';
import NavigationButtons from '../components/NavigationButtons';
import Reveal from '../components/Reveal';

const AboutContainer = styled.div`
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

const TeamSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-12);
`;

const TeamCard = styled.div`
  background-color: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-6);
  text-align: center;
  box-shadow: var(--shadow-lg);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-xl);

    .avatar img {
      transform: scale(1.08);
    }
  }

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--spacing-4);
    border: 4px solid var(--aws-orange);
    background: linear-gradient(135deg, var(--aws-orange), var(--aws-orange-dark));
    font-size: 3rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 50%;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }
  
  h3 {
    color: var(--aws-blue);
    font-size: var(--font-size-xl);
    font-weight: 600;
    margin-bottom: var(--spacing-2);
  }
  
  
  p {
    color: var(--aws-gray-600);
    line-height: 1.6;
  }
`;


const About = () => {
  return (
    <AboutContainer>
      <Content>
        <NavigationButtons />
        <Reveal>
          <Header>
            <h1>Contribuintes</h1>
            <p>
              Conheça os profissionais que contribuem para o sucesso da plataforma Guru Certificate,
              ajudando você a alcançar suas certificações AWS.
            </p>
          </Header>
        </Reveal>

        <TeamSection>
          <Reveal delay="0s">
          <TeamCard>
            <div className="avatar">
              <img src="/assets/images/Fotos-Perfil/Sharlles.jpg" alt="Sharlles Anderson" />
            </div>
            <h3>Sharlles Anderson</h3>
            <p>
              Profissional de TI em formação pela UFERSA, com mais de quatro anos de experiência em suporte técnico, infraestrutura e telecomunicações.
              Perfil analítico com foco em resolução de problemas, unindo conhecimento técnico a comunicação clara.
              Direcionando carreira para Cloud e DevOps, com experiência prática em AWS (EC2, S3, IAM), Terraform, Ansible, Docker e Kubernetes. Busca atuar como Analista de Suporte Cloud ou DevOps, aplicando automação e infraestrutura como código.
            </p>
            <a
              href="https://www.linkedin.com/in/sharlles-andersonn/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#0077B5',
                textDecoration: 'none',
                fontWeight: '500',
                marginTop: '1rem',
                display: 'inline-block'
              }}
            >
              LinkedIn
            </a>
          </TeamCard>
          </Reveal>

          <Reveal delay="0.1s">
          <TeamCard>
            <div className="avatar">
              <img src="/assets/images/Fotos-Perfil/Pedro.png" alt="Pedro Paulo" />
            </div>
            <h3>Pedro Paulo</h3>
            <p>
              Desenvolvedor Full Stack com formação em Ciência e Tecnologia pela UFERSA, especializado em desenvolvimento web e integração de sistemas corporativos.
              Experiência em aplicações escaláveis utilizando React.js, C#, .NET, Entity Framework e SQL Server.
              Atua com metodologias ágeis, Clean Code e versionamento com Git, combinando expertise técnica com visão de negócios e experiência do usuário.
            </p>
            <a
              href="https://www.linkedin.com/in/pedropaulodfr/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#0077B5',
                textDecoration: 'none',
                fontWeight: '500',
                marginTop: '1rem',
                display: 'inline-block'
              }}
            >
              LinkedIn
            </a>
          </TeamCard>
          </Reveal>

          <Reveal delay="0.2s">
          <TeamCard>
            <div className="avatar">
              <img src="/assets/images/Fotos-Perfil/Jefferson.png" alt="Jefferson Bezerra" />
            </div>
            <h3>Jefferson Bezerra</h3>
            <p>
              Profissional experiente em tecnologia e inovação.
              Contribui com expertise técnica e estratégica para o desenvolvimento e crescimento da plataforma Guru Certificate.
            </p>
            <a
              href="https://www.linkedin.com/in/jefferson-bezerra-gama/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#0077B5',
                textDecoration: 'none',
                fontWeight: '500',
                marginTop: '1rem',
                display: 'inline-block'
              }}
            >
              LinkedIn
            </a>
          </TeamCard>
          </Reveal>

          <Reveal delay="0.3s">
          <TeamCard>
            <div className="avatar">
              <img src="/assets/images/Fotos-Perfil/Hugo.jpg" alt="Hugo Santos" />
            </div>
            <h3>Hugo Santos</h3>
            <p>
              Desenvolvedor de software com 18 anos de experiência, construída principalmente no ecossistema PHP e Symfony, com APIs REST, integrações, bancos de dados relacionais e NoSQL, mensageria, Docker e nuvem.
              Hoje é Desenvolvedor PHP Sênior e amplia sua atuação para Java, com Spring Boot, Kafka, PostgreSQL, DDD e arquiteturas orientadas a eventos, aprofundando AWS, Kubernetes e arquitetura de software.
              Possui as certificações PSM I e Zend Certified Engineer.
            </p>
            <a
              href="https://www.linkedin.com/in/hugodesenvolvedor"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#0077B5',
                textDecoration: 'none',
                fontWeight: '500',
                marginTop: '1rem',
                display: 'inline-block'
              }}
            >
              LinkedIn
            </a>
          </TeamCard>
          </Reveal>
        </TeamSection>
      </Content>
    </AboutContainer>
  );
};

export default About;
