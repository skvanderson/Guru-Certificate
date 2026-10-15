import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Ranking from './Ranking';
import { getCurrentUser, getRanking } from '../services/userService';

jest.mock('../services/userService', () => ({ getCurrentUser: jest.fn(), getRanking: jest.fn() }));
jest.mock('../components/Reveal', () => ({ children }) => <div>{children}</div>);

const entry = { userId: 'student', username: 'Estudante', examType: 'developer-associate', bestPercentage: 90, position: 1 };
const openRanking = () => render(<MemoryRouter><Ranking /></MemoryRouter>);
beforeEach(() => { jest.clearAllMocks(); getRanking.mockResolvedValue([entry]); });

test('exibe posição após o simulado sem falhar ao renderizar a animação', async () => {
  getCurrentUser.mockReturnValue({ id: 'student' });
  openRanking();
  expect(await screen.findByText('Sua Posição')).toBeInTheDocument();
  expect(screen.getByText('Estudante')).toBeInTheDocument();
  expect(screen.getByText('90%')).toBeInTheDocument();
});

test('conta nova sem resultados vê outros estudantes e pode filtrar', async () => {
  getCurrentUser.mockReturnValue({ id: 'new-user' });
  openRanking();
  expect(await screen.findByText('Estudante')).toBeInTheDocument();
  expect(screen.queryByText('Sua Posição')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Cloud Practitioner' }));
  expect(await screen.findByText('Estudante')).toBeInTheDocument();
  expect(getRanking).toHaveBeenLastCalledWith('cloud-practitioner');
});

test('visitante consulta o ranking público e pode tentar de novo após falha', async () => {
  getCurrentUser.mockReturnValue(null);
  getRanking.mockRejectedValueOnce(new Error('Servidor indisponível'));
  openRanking();
  expect(await screen.findByRole('alert')).toHaveTextContent('Servidor indisponível');
  fireEvent.click(screen.getByRole('button', { name: 'Tentar novamente' }));
  expect(await screen.findByText('Estudante')).toBeInTheDocument();
});
