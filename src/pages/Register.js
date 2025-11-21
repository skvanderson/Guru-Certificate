import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { registerUser, loginUser } from '../services/userService';

const Container = styled.div`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-8) var(--spacing-4);
  background: linear-gradient(135deg, var(--aws-blue) 0%, var(--aws-blue-light) 100%);
`;

const Card = styled.div`
  background: var(--aws-white);
  border-radius: var(--radius-xl);
  padding: var(--spacing-8);
  max-width: 450px;
  width: 100%;
  box-shadow: var(--shadow-xl);
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

const Input = styled.input`
  padding: var(--spacing-3) var(--spacing-4);
  border: 2px solid var(--aws-gray-300);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-base);
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: var(--aws-blue);
    box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.1);
  }
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

const Register = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

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
        
        loginUser(username.trim(), password);
        setSuccess('Login realizado com sucesso!');
        setTimeout(() => {
          navigate('/perfil');
        }, 1000);
      } else {
        // Cadastro
        if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
          throw new Error('Por favor, preencha todos os campos');
        }
        
        if (!email.includes('@')) {
          throw new Error('Por favor, informe um email válido');
        }
        
        if (password.length < 6) {
          throw new Error('A senha deve ter pelo menos 6 caracteres');
        }
        
        if (password !== confirmPassword) {
          throw new Error('As senhas não coincidem');
        }
        
        registerUser(username.trim(), email.trim(), password);
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
        <Title>{isLogin ? 'Login' : 'Cadastro'}</Title>
        <Subtitle>
          {isLogin 
            ? 'Entre para acompanhar seu progresso e ver seu ranking'
            : 'Crie sua conta para salvar seus resultados e acompanhar seu progresso'
          }
        </Subtitle>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        {success && <SuccessMessage>{success}</SuccessMessage>}

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Usuário</Label>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              required
            />
          </FormGroup>

          {!isLogin && (
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email"
                required
              />
            </FormGroup>
          )}

          <FormGroup>
            <Label>Senha</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={isLogin ? "Digite sua senha" : "Digite sua senha (mín. 6 caracteres)"}
              required
            />
          </FormGroup>

          {!isLogin && (
            <FormGroup>
              <Label>Confirmar Senha</Label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirme sua senha"
                required
              />
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

