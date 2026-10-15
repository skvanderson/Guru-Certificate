import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { registerUser, loginUser } from '../services/userService';
import NavigationButtons from '../components/NavigationButtons';

const Container = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8) var(--spacing-4);
  background: linear-gradient(135deg, var(--aws-blue) 0%, var(--aws-blue-light) 100%);
`;

const cardIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const Card = styled.div`
  background: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  max-width: 450px;
  width: 100%;
  box-shadow: var(--shadow-xl);
  animation: ${cardIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1);
`;

const Title = styled.h1`
  color: var(--aws-blue);
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-2);
  text-align: center;
`;

const Subtitle = styled.p`
  color: var(--aws-gray-600);
  text-align: center;
  margin-bottom: var(--spacing-8);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

const Label = styled.label`
  color: var(--aws-gray-700);
  font-weight: 600;
  font-size: var(--font-size-sm);
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4);
  border: 2px solid ${props => props.$hasError ? '#DC2626' : 'var(--aws-gray-300)'};
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--aws-blue);
    box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.1);
  }
`;

const ToggleVisibilityButton = styled.button`
  position: absolute;
  right: var(--spacing-3);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--aws-gray-600);
  font-size: var(--font-size-sm);
  font-weight: 600;
  padding: 0 var(--spacing-2);

  &:hover {
    color: var(--aws-blue);
  }
`;

const HelperText = styled.span`
  font-size: var(--font-size-sm);
  color: ${props => props.color || 'var(--aws-gray-600)'};
`;

const Button = styled.button`
  padding: var(--spacing-4) var(--spacing-6);
  background-color: var(--aws-orange);
  color: var(--aws-white);
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 600;
  font-size: var(--font-size-base);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: var(--aws-orange-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  background-color: #FEE2E2;
  color: #DC2626;
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  border-left: 4px solid #DC2626;
`;

const SuccessMessage = styled.div`
  background-color: #D1FAE5;
  color: #059669;
  padding: var(--spacing-3) var(--spacing-4);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  border-left: 4px solid #059669;
`;

const ToggleText = styled.p`
  text-align: center;
  color: var(--aws-gray-600);
  margin-top: var(--spacing-6);
  
  a {
    color: var(--aws-blue);
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const USERNAME_REGEX = /^[A-Za-z0-9_.-]{3,20}$/;

const Register = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const passwordsMatch = confirmPassword.length > 0 && password === confirmPassword;
  const passwordsMismatch = confirmPassword.length > 0 && password !== confirmPassword;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (isLogin) {
        // Login
        if (!username.trim() || !password.trim()) {
          throw new Error('Por favor, informe usuário e senha');
        }

        await loginUser(username.trim(), password);
        setSuccess('Login realizado com sucesso!');
        setTimeout(() => {
          navigate('/perfil');
        }, 1000);
      } else {
        // Cadastro
        if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
          throw new Error('Por favor, preencha todos os campos');
        }

        if (!USERNAME_REGEX.test(username.trim())) {
          throw new Error('O usuário deve ter entre 3 e 20 caracteres, sem espaços ou acentos (use letras, números, "_", "." ou "-")');
        }

        if (!EMAIL_REGEX.test(email.trim())) {
          throw new Error('Por favor, informe um email válido');
        }

        if (password.length < 6) {
          throw new Error('A senha deve ter pelo menos 6 caracteres');
        }

        if (password !== confirmPassword) {
          throw new Error('As senhas não coincidem');
        }

        await registerUser(username.trim(), email.trim(), password);
        setSuccess('Cadastro realizado com sucesso!');
        setTimeout(() => {
          navigate('/perfil');
        }, 1000);
      }
    } catch (err) {
      setError(err.message || 'Ocorreu um erro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Card>
        <NavigationButtons />
        <Title>{isLogin ? 'Login' : 'Cadastro'}</Title>
        <Subtitle>
          {isLogin
            ? 'Entre para acompanhar seu progresso e ver seu ranking'
            : 'Crie sua conta para salvar seus resultados e acompanhar seu progresso'
          }
        </Subtitle>

        {error && <ErrorMessage role="alert">{error}</ErrorMessage>}
        {success && <SuccessMessage role="status">{success}</SuccessMessage>}

        <Form onSubmit={handleSubmit} noValidate>
          <FormGroup>
            <Label htmlFor="username">Usuário</Label>
            <Input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              required
            />
            {!isLogin && (
              <HelperText>3 a 20 caracteres, sem espaços ou acentos</HelperText>
            )}
          </FormGroup>

          {!isLogin && (
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                required
              />
            </FormGroup>
          )}

          <FormGroup>
            <Label htmlFor="password">Senha</Label>
            <InputWrapper>
              <Input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete={isLogin ? 'current-password' : 'new-password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={isLogin ? "Digite sua senha" : "Digite sua senha (mín. 6 caracteres)"}
                required
              />
              <ToggleVisibilityButton
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {showPassword ? 'Ocultar' : 'Mostrar'}
              </ToggleVisibilityButton>
            </InputWrapper>
          </FormGroup>

          {!isLogin && (
            <FormGroup>
              <Label htmlFor="confirmPassword">Confirmar Senha</Label>
              <InputWrapper>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirme sua senha"
                  $hasError={passwordsMismatch}
                  required
                />
                <ToggleVisibilityButton
                  type="button"
                  onClick={() => setShowConfirmPassword(prev => !prev)}
                  aria-label={showConfirmPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                  {showConfirmPassword ? 'Ocultar' : 'Mostrar'}
                </ToggleVisibilityButton>
              </InputWrapper>
              {passwordsMismatch && (
                <HelperText color="#DC2626">As senhas não coincidem</HelperText>
              )}
              {passwordsMatch && (
                <HelperText color="#059669">As senhas coincidem</HelperText>
              )}
            </FormGroup>
          )}

          <Button type="submit" disabled={loading}>
            {loading ? 'Processando...' : (isLogin ? 'Entrar' : 'Cadastrar')}
          </Button>
        </Form>

        <ToggleText>
          {isLogin ? (
            <>
              Não tem uma conta?{' '}
              <Link to="#" onClick={(e) => { 
                e.preventDefault(); 
                setIsLogin(false); 
                setError(''); 
                setPassword('');
                setConfirmPassword('');
              }}>
                Cadastre-se
              </Link>
            </>
          ) : (
            <>
              Já tem uma conta?{' '}
              <Link to="#" onClick={(e) => { 
                e.preventDefault(); 
                setIsLogin(true); 
                setError(''); 
                setEmail('');
                setPassword('');
                setConfirmPassword('');
              }}>
                Faça login
              </Link>
            </>
          )}
        </ToggleText>
      </Card>
    </Container>
  );
};

export default Register;

