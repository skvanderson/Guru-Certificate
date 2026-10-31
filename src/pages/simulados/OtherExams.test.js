import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import SolutionsArchitect from './SolutionsArchitect';
import DeveloperAssociate from './DeveloperAssociate';
import { solutionsArchitectQuestions } from '../../data/solutionsArchitectQuestions';
import { developerAssociateQuestions } from '../../data/developerAssociateQuestions';
import { getCurrentUser, saveExamResult } from '../../services/userService';

jest.mock('../../components/ExamProtection', () => ({ children }) => children);
jest.mock('../../services/userService', () => ({
  getCurrentUser: jest.fn(),
  saveExamResult: jest.fn()
}));

const exams = [
  ['Solutions Architect', SolutionsArchitect, solutionsArchitectQuestions, 'solutions-architect'],
  ['Developer Associate', DeveloperAssociate, developerAssociateQuestions, 'developer-associate']
];

const renderExam = Component => render(
  <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Component />
  </MemoryRouter>
);

const choose = index => fireEvent.click(screen.getAllByRole('radio')[index]);

beforeEach(() => {
  getCurrentUser.mockReturnValue({ id: 'student' });
  saveExamResult.mockResolvedValue();
});

describe.each(exams)('simulado %s', (_name, Component, questions, examType) => {
  test('tem 20 questões e bloqueia o avanço até responder', () => {
    renderExam(Component);

    expect(questions).toHaveLength(20);
    expect(screen.getByText('1 / 20')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Próxima →' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '← Anterior' })).toBeDisabled();
  });

  test('acertar todas as questões salva o resultado com total 20', async () => {
    renderExam(Component);

    questions.forEach((question, index) => {
      choose(question.alternatives.findIndex(alt => alt.correct));
      expect(screen.getByText('✓ Correto!')).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: index === 19 ? 'Finalizar' : 'Próxima →' }));
    });

    expect(screen.getByText('Você acertou 20 de 20 questões')).toBeInTheDocument();
    expect(saveExamResult).toHaveBeenCalledWith('student', examType, expect.objectContaining({
      correct: 20, total: 20, passed: true, wrongQuestions: []
    }));
    await screen.findByText('Resultado salvo no ranking.');
  });

  test('errar mostra a resposta correta e finalizar agora conta as não respondidas como erradas', async () => {
    renderExam(Component);

    const wrongIndex = questions[0].alternatives.findIndex(alt => !alt.correct);
    choose(wrongIndex);
    expect(screen.getByText('✗ Incorreto')).toBeInTheDocument();
    expect(screen.getByText(/A resposta correta é:/)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Finalizar Agora' }));
    expect(screen.getByText('Você acertou 0 de 20 questões')).toBeInTheDocument();
    expect(saveExamResult).toHaveBeenCalledWith('student', examType, expect.objectContaining({
      correct: 0, total: 20, passed: false
    }));
    expect(saveExamResult.mock.calls[0][2].wrongQuestions).toHaveLength(20);
    await screen.findByText('Resultado salvo no ranking.');
  });
});
