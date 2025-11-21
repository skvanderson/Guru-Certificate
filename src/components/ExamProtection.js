import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

const ProtectionOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #ff0000, #ff4500, #ff0000);
  background-size: 400% 400%;
  animation: gradientShift 2s ease infinite;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  font-family: Arial, sans-serif;
  
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const WarningContent = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 20px;
  border: 3px solid white;
  box-shadow: 0 0 50px rgba(255, 0, 0, 0.5);
  max-width: 600px;
  margin: 0 1rem;
`;

const WarningTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ff0000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  animation: pulse 1s ease-in-out infinite alternate;
  
  @keyframes pulse {
    from { transform: scale(1); }
    to { transform: scale(1.05); }
  }
`;

const WarningText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const WarningSubtext = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const Countdown = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #ffff00;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  animation: blink 1s ease-in-out infinite;
  
  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0.3; }
  }
`;

const ExamProtection = ({ children }) => {
  const [showWarning, setShowWarning] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const isWarningActiveRef = useRef(false);

  useEffect(() => {
    // Verificar se é dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Variáveis para controle de avisos
    let warningTimer = null;
    let lastWarningTime = 0;
    const WARNING_COOLDOWN = 3000; // 3 segundos entre avisos
    
    // Armazenar tamanho inicial da janela
    let initialWidth = window.innerWidth;
    let initialHeight = window.innerHeight;
    let resizeTimer = null;

    // Proteção contra seleção de texto
    const preventTextSelection = (e) => {
      e.preventDefault();
      return false;
    };

    // Proteção contra clique direito
    const preventRightClick = (e) => {
      e.preventDefault();
      return false;
    };

    // Proteção contra atalhos de teclado
    const preventKeyboardShortcuts = (e) => {
      // Ctrl+C, Ctrl+A, Ctrl+S, Ctrl+P, Ctrl+Shift+I, F12, Print Screen
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'a' || e.key === 's' || e.key === 'p')) ||
        (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        e.key === 'F12' ||
        e.key === 'PrintScreen' ||
        e.key === 'F11'
      ) {
        e.preventDefault();
        triggerWarning();
        return false;
      }
    };


    // Detectar tentativas de captura
    const detectCapture = () => {
      // Detectar mudanças no foco da janela (possível captura)
      // Desabilitar detecção de visibility change pois causa muitos falsos positivos
      // (mudanças de aba, notificações do sistema, etc.)
      // Apenas detectar através de atalhos de teclado que já estão cobertos
      const handleVisibilityChange = () => {
        // Desabilitado - não fazer nada para evitar falsos positivos
        // Em produção, poderia ser reativado com lógica mais sofisticada
      };

      // Detectar mudanças no tamanho da janela (apenas mudanças significativas)
      const handleResize = () => {
        // No mobile, desabilitar completamente a detecção de resize
        // pois mudanças pequenas são muito comuns (barra de navegação, rotação, etc)
        if (isMobile) {
          // Atualizar tamanho inicial silenciosamente para evitar falsos positivos
          if (resizeTimer) {
            clearTimeout(resizeTimer);
          }
          
          resizeTimer = setTimeout(() => {
            // Apenas atualizar o tamanho inicial, sem disparar aviso
            initialWidth = window.innerWidth;
            initialHeight = window.innerHeight;
          }, 1000);
          return; // Não fazer mais nada no mobile
        }
        
        // No desktop, verificar mudanças significativas apenas
        if (resizeTimer) {
          clearTimeout(resizeTimer);
        }
        
        resizeTimer = setTimeout(() => {
          const currentWidth = window.innerWidth;
          const currentHeight = window.innerHeight;
          
          const widthDiff = Math.abs(currentWidth - initialWidth);
          const heightDiff = Math.abs(currentHeight - initialHeight);
          
          // No desktop, threshold muito maior (100px) para evitar falsos positivos
          // Só disparar se for uma mudança realmente significativa (redimensionamento de janela)
          if (widthDiff > 100 || heightDiff > 100) {
            initialWidth = currentWidth;
            initialHeight = currentHeight;
            triggerWarning();
          } else {
            // Atualizar silenciosamente para pequenas mudanças
            initialWidth = currentWidth;
            initialHeight = currentHeight;
          }
        }, 500);
      };

      // Detectar tentativas de abrir DevTools
      // Desabilitar detecção automática de DevTools pois causa muitos falsos positivos
      // Apenas detectar através de atalhos de teclado (F12, Ctrl+Shift+I) que já estão cobertos
      // const devtoolsInterval = null; // Desabilitado

      document.addEventListener('visibilitychange', handleVisibilityChange);
      window.addEventListener('resize', handleResize);
      
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        window.removeEventListener('resize', handleResize);
        if (resizeTimer) clearTimeout(resizeTimer);
        // DevTools detection e visibility change desabilitados para evitar falsos positivos
      };
    };

    // Função para mostrar aviso (com cooldown para evitar spam)
    const triggerWarning = () => {
      const now = Date.now();
      
      // Evitar múltiplos avisos em sequência
      if (now - lastWarningTime < WARNING_COOLDOWN) {
        return;
      }
      
      // Se já está mostrando aviso, não mostrar outro
      if (isWarningActiveRef.current) {
        return;
      }
      
      lastWarningTime = now;
      isWarningActiveRef.current = true;
      setShowWarning(true);
      setCountdown(5);
      
      // Limpar timer anterior se existir
      if (warningTimer) {
        clearInterval(warningTimer);
      }
      
      // Countdown
      warningTimer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(warningTimer);
            isWarningActiveRef.current = false;
            setShowWarning(false);
            return 5;
          }
          return prev - 1;
        });
      }, 1000);
    };

    // Aplicar proteções
    document.addEventListener('selectstart', preventTextSelection);
    document.addEventListener('contextmenu', preventRightClick);
    document.addEventListener('keydown', preventKeyboardShortcuts);
    
    // Proteção contra drag and drop
    document.addEventListener('dragstart', preventTextSelection);
    document.addEventListener('drop', preventTextSelection);
    
    // Proteção contra captura
    const cleanup = detectCapture();

    // CSS para desabilitar seleção
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    document.body.style.msUserSelect = 'none';

    // Cleanup
    return () => {
      document.removeEventListener('selectstart', preventTextSelection);
      document.removeEventListener('contextmenu', preventRightClick);
      document.removeEventListener('keydown', preventKeyboardShortcuts);
      document.removeEventListener('dragstart', preventTextSelection);
      document.removeEventListener('drop', preventTextSelection);
      
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      document.body.style.mozUserSelect = '';
      document.body.style.msUserSelect = '';
      
      if (cleanup) cleanup();
    };
  }, []);

  if (showWarning) {
    return (
      <ProtectionOverlay>
        <WarningContent>
          <WarningTitle>⚠️ ATENÇÃO! ⚠️</WarningTitle>
          <WarningText>
            TENTATIVA DE VIOLAÇÃO DETECTADA!
          </WarningText>
          <WarningSubtext>
            Captura de tela, cópia de conteúdo ou uso de ferramentas de desenvolvimento não são permitidos durante o exame.
          </WarningSubtext>
          <WarningSubtext>
            Esta violação foi registrada e pode resultar na desqualificação do exame.
          </WarningSubtext>
          <Countdown>
            Retornando ao exame em: {countdown} segundos
          </Countdown>
        </WarningContent>
      </ProtectionOverlay>
    );
  }

  return children;
};

export default ExamProtection;
