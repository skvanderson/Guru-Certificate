import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--aws-blue);
  color: var(--aws-white);
  padding: var(--spacing-12) 0 var(--spacing-6);
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-8);
  
  @media (max-width: 768px) {
    gap: var(--spacing-6);
  }
`;

const Logo = styled.div`
  img {
    height: 60px;
    width: auto;
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 800px;
  
  p {
    margin-bottom: var(--spacing-3);
    line-height: 1.8;
    font-size: var(--font-size-lg);
  }
  
  .slogan {
    font-weight: 700;
    font-size: var(--font-size-xl);
    color: var(--aws-orange);
    margin-bottom: var(--spacing-4);
  }
  
  .quote {
    font-style: italic;
    color: var(--aws-gray-200);
    font-size: var(--font-size-base);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: var(--spacing-6);
  border-top: 1px solid var(--aws-blue-light);
  margin-top: var(--spacing-6);
  width: 100%;
  font-size: var(--font-size-sm);
  color: var(--aws-gray-300);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
      <Logo>
        <img src="/assets/images/logos/logo.icon.png" alt="Guru Certificate" />
      </Logo>
        
        <Content>
          <p className="slogan">Elevando Carreiras na Nuvem</p>
          <p className="quote">
            "O sucesso não é um destino, é uma jornada. Cada simulado que você completa, 
            cada conceito que você domina, é um passo em direção à sua certificação AWS."
          </p>
        </Content>
        
        
        <Copyright>
          <p>&copy; 2024 Guru Certificate. Todos os direitos reservados.</p>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
