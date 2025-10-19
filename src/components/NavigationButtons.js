import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NavigationContainer = styled.div`
  display: flex;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-6);
  flex-wrap: wrap;
`;

const NavButton = styled.button`
  background-color: var(--aws-gray-200);
  color: var(--aws-gray-700);
  border: none;
  padding: var(--spacing-3) var(--spacing-6);
  border-radius: var(--radius-lg);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  outline: none;
  user-select: none;
  
  &:hover {
    background-color: var(--aws-gray-300);
    transform: translateY(-1px);
    box-shadow: var(--shadow-sm);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(35, 47, 62, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const HomeButton = styled(NavButton)`
  background-color: var(--aws-orange);
  color: var(--aws-white);
  
  &:hover {
    background-color: var(--aws-orange-dark);
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
  }
  
  &:focus {
    box-shadow: 0 0 0 2px rgba(255, 153, 0, 0.3);
  }
`;

const NavigationButtons = ({ backPath = null, showHome = true, showBack = true }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (backPath) {
      navigate(backPath);
    } else {
      navigate(-1);
    }
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <NavigationContainer>
      {showBack && (
        <NavButton onClick={handleBack}>
          ← Voltar
        </NavButton>
      )}
      {showHome && (
        <HomeButton onClick={handleHome}>
          🏠 Home
        </HomeButton>
      )}
    </NavigationContainer>
  );
};

export default NavigationButtons;

