import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Ranking from './Ranking';
import { getCurrentUser, getRanking } from '../services/userService';

jest.mock('../services/userService', () => ({ getCurrentUser: jest.fn(), getRanking: jest.fn() }));
jest.mock('../components/Reveal', () => ({ children }) => <div>{children}</div>);

const entry = { userId: 'student', username: 'Estudante', examType: 'developer-associate', bestPercentage: 90, position: 1 };
const openRanking = () => render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Ranking /></MemoryRouter>);
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
  fireEvent.click(screen.getByRole('button', { name: 'Cloud Practitioner', exact: true }));
  expect(await screen.findByText('Estudante')).toBeInTheDocument();
  expect(getRanking).toHaveBeenLastCalledWith('cloud-practitioner');
  expect(screen.queryByRole('button', { name: 'Cloud Practitioner 2' })).not.toBeInTheDocument();
});

test('visitante consulta o ranking público e pode tentar de novo após falha', async () => {
  getCurrentUser.mockReturnValue(null);
  getRanking.mockRejectedValueOnce(new Error('Servidor indisponível'));
  openRanking();
  expect(await screen.findByRole('alert')).toHaveTextContent('Servidor indisponível');
  fireEvent.click(screen.getByRole('button', { name: 'Tentar novamente' }));
  expect(await screen.findByText('Estudante')).toBeInTheDocument();
});

test('exibe uma única classificação Cloud Practitioner, com a nota combinada das provas', async () => {
  getCurrentUser.mockReturnValue({ id: 'student' });
  getRanking.mockResolvedValue([{ ...entry, examType: 'cloud-practitioner', bestPercentage: 100, totalExams: 2 }]);
  openRanking();
  expect(await screen.findByText('Estudante')).toBeInTheDocument();
  expect(screen.getAllByText('Estudante')).toHaveLength(1);
  expect(screen.getByRole('button', { name: 'Cloud Practitioner', exact: true })).toBeInTheDocument();
  expect(screen.queryByText(/Cloud Practitioner: Simulado/)).not.toBeInTheDocument();
  expect(screen.getByText('100%')).toBeInTheDocument();
});
