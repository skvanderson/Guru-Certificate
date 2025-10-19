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
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto;
  grid-template-areas:
    "logo content social"
    "copyright copyright copyright";
  gap: var(--spacing-8);
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "logo"
      "content"
      "social"
      "copyright";
    text-align: center;
    gap: var(--spacing-6);
  }
`;

const Logo = styled.div`
  grid-area: logo;
  
  img {
    height: 60px;
    width: auto;
  }
  
  @media (max-width: 768px) {
    justify-self: center;
  }
`;

const Content = styled.div`
  grid-area: content;
  text-align: center;
  
  p {
    margin-bottom: var(--spacing-2);
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const SocialMedia = styled.div`
  grid-area: social;
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: var(--aws-blue-light);
    border-radius: 50%;
    transition: all 0.2s ease;
    
    &:hover {
      background-color: var(--aws-orange);
      transform: translateY(-2px);
    }
    
    img {
      width: 24px;
      height: 24px;
      filter: brightness(0) invert(1);
    }
  }
  
  @media (max-width: 768px) {
    justify-self: center;
  }
`;


const Copyright = styled.div`
  grid-area: copyright;
  text-align: center;
  padding-top: var(--spacing-6);
  border-top: 1px solid var(--aws-blue-light);
  margin-top: var(--spacing-6);
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
          <p>Desbrave o conhecimento. Transforme o futuro</p>
          <p>"Continue estudando e alcance sua certificação AWS! Sucesso nos estudos!"</p>
        </Content>
        
        <SocialMedia>
          <a href="https://www.linkedin.com/company/guru-certificate" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/assets/images/icons/linkedin.svg" alt="LinkedIn" />
          </a>
        </SocialMedia>
        
        
        <Copyright>
          <p>&copy; 2024 Guru Certificate. Todos os direitos reservados.</p>
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
