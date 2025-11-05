import React from 'react';
import styled from 'styled-components';
import NavigationButtons from '../components/NavigationButtons';

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
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
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
        <Header>
          <h1>Contribuintes</h1>
          <p>
            Conheça os profissionais que contribuem para o sucesso da plataforma Guru Certificate, 
            ajudando você a alcançar suas certificações AWS.
          </p>
        </Header>

        <TeamSection>
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

          <TeamCard>
            <div className="avatar">
              <img src="/assets/images/Fotos-Perfil/Ivonaldo.png" alt="Ivonaldo Micheluti Dias" />
            </div>
            <h3>Ivonaldo Micheluti Dias</h3>
            <p>
              Profissional de TI com mais de 10 anos de experiência em infraestrutura e cloud computing. 
              Atua no Portobello Grupo garantindo disponibilidade, segurança e performance de ambientes críticos. 
              Especialista em infraestrutura híbrida, automação, FinOps e monitoramento. Certificado pelas principais provedoras de nuvem (Oracle, AWS e Google) e pela 4Linux, com formações em Linux System Administrator, Network Engineer e Containers. Ampliando especialização em FinOps, DevSecOps e automação de infraestrutura.
            </p>
            <a 
              href="https://www.linkedin.com/in/ivonaldo-micheluti-dias-61580470/" 
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

          <TeamCard>
            <div className="avatar">
              <img src="/assets/images/Fotos-Perfil/Wesley.png" alt="Wesley Cavalcante" />
            </div>
            <h3>Wesley Cavalcante</h3>
            <p>
              Apaixonado por tecnologia e inovação, dedicado ao aprendizado contínuo em programação e desenvolvimento de software. 
              Comprometido com o aprimoramento constante de habilidades e busca por conhecimento relevante. 
              Objetiva contribuir para projetos que façam a diferença, utilizando as melhores práticas e as tecnologias mais recentes.
            </p>
            <a 
              href="https://www.linkedin.com/in/wesleycavalcante-dev/" 
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

          <TeamCard>
            <div className="avatar">
              <img src="/assets/images/Fotos-Perfil/Tainar.png" alt="Taynar Simões" />
            </div>
            <h3>Taynar Simões</h3>
            <p>
              Formada em Análise e Desenvolvimento de Sistemas e cursando Design na Unicesumar. 
              Possui conhecimento em HTML, CSS, JavaScript, Figma, Git e GitHub, além de linguagens como C, C++, C# e Java. 
              Experiência com ferramentas de design e edição como Photoshop, Illustrator, Premiere, After Effects, Canva e CapCut.
            </p>
            <a 
              href="https://www.linkedin.com/in/taynasimoes/" 
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

          <TeamCard>
            <div className="avatar">
              <img src="/assets/images/Fotos-Perfil/Elizangela.png" alt="Elizângela Rosa da Silva Costa" />
            </div>
            <h3>Elizângela Rosa da Silva Costa</h3>
            <p>
              Profissional com aproximadamente 4 anos de experiência em qualidade de sistemas, análise de requisitos e análise de negócios. 
              Especialista em metodologias ágeis Scrum, com prática em ferramentas como Jira, SVN, Microsoft Visio, Mantis Bug Tracker e TestLink. 
              Conhecimento em BPMN com Bizagi e gerenciamento de projetos com Microsoft Project.
            </p>
            <a 
              href="https://www.linkedin.com/in/eliz%C3%A2ngela-rosa-da-silva-costa-538aa131/" 
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
        </TeamSection>
      </Content>
    </AboutContainer>
  );
};

export default About;
