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
            <div className="avatar">👨‍💻</div>
            <h3>Sharlles Anderson</h3>
            <p>
              Desenvolvedor e entusiasta de tecnologia cloud. 
              Contribui para o desenvolvimento e evolução da plataforma.
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
            <div className="avatar">👨‍💼</div>
            <h3>Jefferson Bezerra</h3>
            <p>
              Profissional experiente em tecnologia e inovação. 
              Contribui com expertise técnica e estratégica para a plataforma.
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
