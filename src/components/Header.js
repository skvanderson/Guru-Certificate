import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCurrentUser, logoutUser } from '../services/userService';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--aws-blue);
  box-shadow: var(--shadow-md);
  z-index: 1000;
  height: 80px;
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-4);
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  text-decoration: none;
  color: var(--aws-white);
  font-size: var(--font-size-xl);
  font-weight: 700;
  
  img {
    height: 40px;
    width: auto;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: var(--spacing-6);
  margin: 0;
  padding: 0;
  align-items: center;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  a {
    color: var(--aws-white);
    text-decoration: none;
    font-weight: 500;
    padding: var(--spacing-2) var(--spacing-3);
    border-radius: var(--radius-md);
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    line-height: 1;
    
    &:hover {
      background-color: var(--aws-blue-light);
      color: var(--aws-orange);
    }
    
    &.active {
      background-color: var(--aws-orange);
      color: var(--aws-white);
    }
    
    &.cta-button {
      background-color: #FF9900 !important;
      color: white !important;
      padding: 12px 24px !important;
      border-radius: 8px !important;
      font-weight: 600 !important;
      font-size: 14px !important;
      text-decoration: none !important;
      transition: all 0.2s ease !important;
      display: inline-flex !important;
      align-items: center !important;
      gap: 8px !important;
      white-space: nowrap !important;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
      
      &:hover {
        background-color: #E88B00 !important;
        transform: translateY(-2px) !important;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;
        color: white !important;
      }
    }
  }
`;

const UserInfo = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  color: var(--aws-white);
  font-weight: 600;
  font-size: var(--font-size-base);
  text-decoration: none;
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--radius-md);
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--aws-blue-light);
    color: var(--aws-orange);
  }
`;

const LogoutButton = styled.button`
  background-color: var(--aws-red);
  color: var(--aws-white);
  border: none;
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: var(--font-size-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: #B91C1C;
    transform: translateY(-1px);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--aws-white);
  font-size: var(--font-size-xl);
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: var(--aws-blue);
  box-shadow: var(--shadow-lg);
  
  @media (min-width: 769px) {
    display: none;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: var(--spacing-4);
    
    li {
      margin-bottom: var(--spacing-2);
      
      a {
        color: var(--aws-white);
        text-decoration: none;
        font-weight: 500;
        padding: var(--spacing-3);
        border-radius: var(--radius-md);
        display: block;
        transition: background-color 0.2s ease;
        
        &:hover {
          background-color: var(--aws-blue);
        }
      }
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const location = useLocation();

  // Atualizar usuário quando a rota mudar (para refletir login/logout)
  React.useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          <img src="/assets/images/logos/logo.icon.png" alt="Guru Certificate" />
        </Logo>
        
        <NavMenu>
          <NavItem>
            <Link to="/contribuintes" className={isActive('/contribuintes') ? 'active' : ''}>
              CONTRIBUINTES
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/simulados" className={isActive('/simulados') ? 'active' : ''}>
              SIMULADOS
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/cursos" className={isActive('/cursos') ? 'active' : ''}>
              CURSOS
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/materiais" className={isActive('/materiais') ? 'active' : ''}>
              HANDS ON
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/ranking" className={isActive('/ranking') ? 'active' : ''}>
              RANKING
            </Link>
          </NavItem>
          {currentUser ? (
            <>
              <NavItem>
                <UserInfo to="/perfil" className={isActive('/perfil') ? 'active' : ''}>
                  {currentUser.username.toUpperCase()}
                </UserInfo>
              </NavItem>
              <NavItem>
                <LogoutButton onClick={handleLogout}>
                  Sair
                </LogoutButton>
              </NavItem>
            </>
          ) : (
            <NavItem>
              <Link to="/cadastro" className="cta-button">
                CADASTRO
              </Link>
            </NavItem>
          )}
        </NavMenu>
        
        <MobileMenuButton onClick={toggleMobileMenu}>
          ☰
        </MobileMenuButton>
      </Nav>
      
      <MobileMenu isOpen={isMobileMenuOpen}>
        <ul>
          <li>
            <Link to="/contribuintes" onClick={() => setIsMobileMenuOpen(false)}>
              CONTRIBUINTES
            </Link>
          </li>
          <li>
            <Link to="/simulados" onClick={() => setIsMobileMenuOpen(false)}>
              SIMULADOS
            </Link>
          </li>
          <li>
            <Link to="/cursos" onClick={() => setIsMobileMenuOpen(false)}>
              CURSOS
            </Link>
          </li>
          <li>
            <Link to="/materiais" onClick={() => setIsMobileMenuOpen(false)}>
              HANDS ON
            </Link>
          </li>
          <li>
            <Link to="/ranking" onClick={() => setIsMobileMenuOpen(false)}>
              RANKING
            </Link>
          </li>
          {currentUser ? (
            <>
              <li>
                <Link 
                  to="/perfil" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    color: 'var(--aws-white)',
                    textDecoration: 'none',
                    fontWeight: '600',
                    padding: 'var(--spacing-3)',
                    borderRadius: 'var(--radius-md)',
                    display: 'block',
                    transition: 'background-color 0.2s ease'
                  }}
                >
                  {currentUser.username.toUpperCase()}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'var(--aws-red)',
                    color: 'var(--aws-white)',
                    border: 'none',
                    padding: 'var(--spacing-3)',
                    borderRadius: 'var(--radius-md)',
                    fontWeight: '600',
                    cursor: 'pointer',
                    fontSize: 'var(--font-size-base)'
                  }}
                >
                  Sair
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/cadastro" onClick={() => setIsMobileMenuOpen(false)}>
                CADASTRO
              </Link>
            </li>
          )}
        </ul>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;