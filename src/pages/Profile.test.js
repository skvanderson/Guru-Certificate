import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Profile from './Profile';
import { getCurrentUser, getUserStatistics } from '../services/userService';
import { cloudPractitionerQuestions2 } from '../data/cloudPractitionerQuestions2';

jest.mock('../services/userService', () => ({
  getCurrentUser: jest.fn(),
  getUserStatistics: jest.fn(),
  getWrongCount: result => result.wrongQuestions.length,
  logoutUser: jest.fn()
}));

const makeResult = (id, timestamp) => ({
  id, examType: 'cloud-practitioner', correct: 1, total: 65, percentage: 1.5,
  passed: false, wrongQuestions: [], topics: [], timestamp
});

test('lista de simulados começa fechada e mantém no máximo um aberto', async () => {
  getCurrentUser.mockReturnValue({ id: 'student', username: 'Estudante' });
  getUserStatistics.mockResolvedValue({
    totalExams: 2, totalCorrect: 2, totalWrong: 0, totalQuestions: 130, averagePercentage: '1.5',
    byExamType: {}, topicsToReview: [],
    detailedResults: [makeResult('new', '2026-10-27T12:00:00Z'), makeResult('old', '2026-10-27T10:00:00Z')]
  });

  render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Profile /></MemoryRouter>);

  const toggles = await screen.findAllByRole('button', { name: /Simulado \d/ });
  expect(toggles[0]).toHaveAttribute('aria-expanded', 'false');
  expect(toggles[1]).toHaveAttribute('aria-expanded', 'false');

  fireEvent.click(toggles[0]);
  expect(toggles[0]).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(toggles[1]);
  expect(toggles[1]).toHaveAttribute('aria-expanded', 'true');
  expect(toggles[0]).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggles[1]);
  expect(toggles[1]).toHaveAttribute('aria-expanded', 'false');
});

test('numera simulados em ordem cronológica e agrupa assuntos em accordion', async () => {
  getCurrentUser.mockReturnValue({ id: 'student', username: 'Estudante' });
  getUserStatistics.mockResolvedValue({
    totalExams: 2, totalCorrect: 2, totalWrong: 0, totalQuestions: 130, averagePercentage: '1.5',
    byExamType: {}, topicsToReview: [{ topic: 'Amazon S3', count: 2 }],
    detailedResults: [makeResult('new', '2026-10-27T12:00:00Z'), makeResult('old', '2026-10-27T10:00:00Z')]
  });

  render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Profile /></MemoryRouter>);

  const toggles = await screen.findAllByRole('button', { name: /Simulado \d/ });
  expect(toggles[0]).toHaveTextContent('Simulado 2');
  expect(toggles[1]).toHaveTextContent('Simulado 1');

  const topics = screen.getByRole('button', { name: /Assuntos para Revisar/ });
  expect(topics).toHaveAttribute('aria-expanded', 'false');
  expect(screen.queryByText('Amazon S3')).not.toBeInTheDocument();
  fireEvent.click(topics);
  expect(screen.getByText('Amazon S3')).toBeInTheDocument();
});

test('o perfil resolve questões erradas do segundo banco e identifica o simulado', async () => {
  const question = cloudPractitionerQuestions2[0];
  getCurrentUser.mockReturnValue({ id: 'student', username: 'Estudante' });
  getUserStatistics.mockResolvedValue({
    totalExams: 1, totalCorrect: 0, totalWrong: 1, totalQuestions: 69, averagePercentage: '0.0',
    byExamType: { 'cloud-practitioner-2': { exams: 1, correct: 0, wrong: 1 } }, topicsToReview: [],
    detailedResults: [{ ...makeResult('second', '2026-10-31T12:00:00Z'), examType: 'cloud-practitioner-2', total: 69, correct: 0, percentage: 0, wrongQuestions: [question.id] }]
  });
  render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Profile /></MemoryRouter>);
  const toggle = await screen.findByRole('button', { name: /Simulado 1: AWS Cloud Practitioner: Simulado 2/ });
  fireEvent.click(toggle);
  expect(screen.getByText(question.description['pt-BR'])).toBeInTheDocument();
  expect(screen.getByText('Questões Erradas (1)', { exact: false })).toBeInTheDocument();
});
