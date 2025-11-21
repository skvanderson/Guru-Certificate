import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Simulados from './pages/Simulados';
import Cursos from './pages/Cursos';
import Materials from './pages/Materials';
import Tutorial from './pages/hands-on/Tutorial';
import CloudPractitioner from './pages/simulados/CloudPractitioner';
import SolutionsArchitect from './pages/simulados/SolutionsArchitect';
import DeveloperAssociate from './pages/simulados/DeveloperAssociate';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Ranking from './pages/Ranking';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 80px; /* Account for fixed header */
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<Navigate to="/contribuintes" replace />} />
            <Route path="/contribuintes" element={<About />} />
            <Route path="/simulados" element={<Simulados />} />
            <Route path="/cursos" element={<Cursos />} />
            <Route path="/materiais" element={<Materials />} />
            <Route path="/hands-on/tutorial/:id" element={<Tutorial />} />
            <Route path="/simulado/cloud-practitioner" element={<CloudPractitioner />} />
            <Route path="/simulado/solutions-architect" element={<SolutionsArchitect />} />
            <Route path="/simulado/developer-associate" element={<DeveloperAssociate />} />
            <Route path="/cadastro" element={<Register />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/ranking" element={<Ranking />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
