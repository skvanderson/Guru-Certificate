import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CloudPractitioner from './CloudPractitioner';
import CloudPractitionerDomainSession from './CloudPractitionerDomainSession';
import { cloudPractitionerQuestions } from '../../data/cloudPractitionerQuestions';
import { cloudPractitionerQuestions2 } from '../../data/cloudPractitionerQuestions2';
import { createCloudPractitionerExam } from '../../data/cloudPractitionerExam';
import { getCurrentUser, saveExamResult } from '../../services/apiService';

jest.mock('../../components/ExamProtection', () => ({ children }) => children);
jest.mock('../../data/cloudPractitionerExam', () => ({
  createCloudPractitionerExam: jest.fn()
}));

jest.mock('../../services/apiService', () => ({
  getCurrentUser: jest.fn(),
  saveExamResult: jest.fn()
}));

const originalQuestions = cloudPractitionerQuestions.slice();

const makeQuestion = ({ id, multiple = false, alternatives }) => ({
  id,
  domain: 'cloud-concepts',
  title: { 'pt-BR': `Questão ${id}`, en: `Question ${id}` },
  description: { 'pt-BR': `Enunciado da questão ${id}`, en: `Question ${id} prompt` },
  question: { 'pt-BR': '', en: '' },
  multiple,
  answered: false,
  correct: false,
  alternatives: alternatives.map(({ title, correct }) => ({
    title: { 'pt-BR': title, en: title },
    correct,
    explanation: {
      'pt-BR': `Explicação: ${title}`,
      en: `Explanation: ${title}`
    }
  })),
  explanation: { 'pt-BR': `Explicação da questão ${id}`, en: `Explanation for question ${id}` }
});

const singleQuestion = makeQuestion({
  id: 1,
  alternatives: [
    { title: 'Resposta única correta', correct: true },
    { title: 'Resposta única incorreta', correct: false }
  ]
});

const multipleQuestion = makeQuestion({
  id: 2,
  multiple: true,
  alternatives: [
    { title: 'Resposta múltipla correta A', correct: true },
    { title: 'Resposta múltipla incorreta', correct: false },
    { title: 'Resposta múltipla correta B', correct: true }
  ]
});

const renderFullExam = (variant = 1) => render(
  <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <CloudPractitioner variant={variant} />
  </MemoryRouter>
);

const renderDomainSession = () => render(
  <MemoryRouter initialEntries={['/simulado/cloud-practitioner/dominio/cloud-concepts']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route
        path="/simulado/cloud-practitioner/dominio/:domainId"
        element={<CloudPractitionerDomainSession />}
      />
    </Routes>
  </MemoryRouter>
);

const advanceToMultipleQuestion = () => {
  fireEvent.click(screen.getByText('Resposta única correta'));
  fireEvent.click(screen.getByRole('button', { name: 'Próxima →' }));
  expect(screen.getByText('Enunciado da questão 2')).toBeInTheDocument();
};

beforeEach(() => {
  localStorage.clear();
  cloudPractitionerQuestions.splice(
    0,
    cloudPractitionerQuestions.length,
    singleQuestion,
    multipleQuestion
  );
  createCloudPractitionerExam.mockReturnValue([singleQuestion, multipleQuestion]);
  getCurrentUser.mockReturnValue({ id: 'student' });
  saveExamResult.mockResolvedValue();
});

afterEach(() => {
  cloudPractitionerQuestions.splice(
    0,
    cloudPractitionerQuestions.length,
    ...originalQuestions
  );
});

test('mantém a seleção única e o feedback imediato nas questões comuns', () => {
  renderFullExam();

  expect(screen.getAllByRole('radio')).toHaveLength(2);
  fireEvent.click(screen.getByText('Resposta única correta'));

  expect(screen.getByText('✓ Correto!')).toBeInTheDocument();
  expect(screen.getAllByRole('radio')[0]).toBeChecked();
});

test('no simulado completo, confirma as opções corretas e calcula a pontuação ao finalizar', async () => {
  renderFullExam();
  advanceToMultipleQuestion();

  const checkboxes = screen.getAllByRole('checkbox');
  expect(checkboxes).toHaveLength(3);

  const nextButton = screen.getByRole('button', { name: 'Finalizar' });
  expect(nextButton).toBeEnabled();
  fireEvent.click(checkboxes[0]);
  fireEvent.click(checkboxes[2]);
  expect(checkboxes[0]).toBeChecked();
  expect(checkboxes[2]).toBeChecked();
  expect(screen.queryByText('✓ Correto!')).not.toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Confirmar resposta' }));

  expect(screen.getByText('✓ Correto!')).toBeInTheDocument();
  expect(screen.getByText(/Respostas corretas:/)).toHaveTextContent(
    'Resposta múltipla correta A; Resposta múltipla correta B'
  );
  expect(nextButton).toBeEnabled();
  fireEvent.click(nextButton);
  expect(screen.getByText('Você acertou 2 de 2 questões')).toBeInTheDocument();
  await screen.findByText('Resultado salvo no ranking.');
});

test.each([
  ['omitir uma opção correta', [0]],
  ['selecionar uma opção incorreta extra', [0, 1, 2]]
])('no simulado completo, marca como incorreta a resposta que %s', async (_description, selections) => {
  renderFullExam();
  advanceToMultipleQuestion();

  const checkboxes = screen.getAllByRole('checkbox');
  selections.forEach(index => fireEvent.click(checkboxes[index]));
  fireEvent.click(screen.getByRole('button', { name: 'Confirmar resposta' }));

  expect(screen.getByText('✗ Incorreto')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Finalizar' }));
  expect(screen.getByText('Você acertou 1 de 2 questões')).toBeInTheDocument();
  await screen.findByText('Resultado salvo no ranking.');
});

test('na sessão por domínio, permite múltiplas seleções e confirma a resposta antes de pontuar', () => {
  renderDomainSession();
  advanceToMultipleQuestion();

  const checkboxes = screen.getAllByRole('checkbox');
  expect(checkboxes).toHaveLength(3);
  const nextButton = screen.getByRole('button', { name: 'Finalizar' });
  expect(nextButton).toBeDisabled();
  fireEvent.click(checkboxes[0]);
  fireEvent.click(checkboxes[2]);
  expect(nextButton).toBeDisabled();

  fireEvent.click(screen.getByRole('button', { name: 'Confirmar resposta' }));
  expect(screen.getByText('✓ Correto!')).toBeInTheDocument();
  expect(screen.getByText(/Respostas corretas:/)).toHaveTextContent(
    'Resposta múltipla correta A; Resposta múltipla correta B'
  );
  fireEvent.click(screen.getByRole('button', { name: 'Finalizar' }));
  expect(screen.getByText('Você acertou 2 de 2 questões (100.0%)')).toBeInTheDocument();
});

test.each([
  ['omitir uma opção correta', [0]],
  ['selecionar uma opção incorreta extra', [0, 1, 2]]
])('na sessão por domínio, pontua como incorreta a resposta que %s', (_description, selections) => {
  renderDomainSession();
  advanceToMultipleQuestion();

  const checkboxes = screen.getAllByRole('checkbox');
  selections.forEach(index => fireEvent.click(checkboxes[index]));
  fireEvent.click(screen.getByRole('button', { name: 'Confirmar resposta' }));

  expect(screen.getByText('✗ Incorreto')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Finalizar' }));
  expect(screen.getByText('Você acertou 1 de 2 questões (50.0%)')).toBeInTheDocument();
});

test('questões não respondidas reduzem a nota mas não entram na lista de erradas', async () => {
  renderFullExam();

  fireEvent.click(screen.getByText('Resposta única incorreta'));
  fireEvent.click(screen.getByRole('button', { name: 'Finalizar Agora' }));

  expect(screen.getByText('Você acertou 0 de 2 questões')).toBeInTheDocument();
  expect(saveExamResult).toHaveBeenCalledWith(
    'student',
    'cloud-practitioner',
    expect.objectContaining({ correct: 0, total: 2, wrongQuestions: [1] })
  );
  await screen.findByText('Resultado salvo no ranking.');
});

test('ao recarregar, mantém as mesmas questões e as respostas já dadas', () => {
  const { unmount } = renderFullExam();
  fireEvent.click(screen.getByText('Resposta única correta'));
  unmount();

  createCloudPractitionerExam.mockReturnValue([multipleQuestion, singleQuestion]);
  renderFullExam();

  expect(createCloudPractitionerExam).toHaveBeenCalledTimes(1);
  expect(screen.getByText('Enunciado da questão 1')).toBeInTheDocument();
  expect(screen.getByText('✓ Correto!')).toBeInTheDocument();
  expect(screen.getAllByRole('radio')[0]).toBeChecked();
});

test('ao recarregar, continua na questão em que estava', () => {
  const { unmount } = renderFullExam();
  fireEvent.click(screen.getByText('Resposta única correta'));
  fireEvent.click(screen.getByRole('button', { name: 'Próxima →' }));
  expect(screen.getByText('Enunciado da questão 2')).toBeInTheDocument();
  unmount();

  renderFullExam();

  expect(screen.getByText('Enunciado da questão 2')).toBeInTheDocument();
});

test('finalizar limpa o simulado em andamento', async () => {
  renderFullExam();
  fireEvent.click(screen.getByText('Resposta única correta'));
  expect(localStorage.getItem('guru_certificate_cloud_exam_in_progress')).not.toBeNull();
  fireEvent.click(screen.getByRole('button', { name: 'Finalizar Agora' }));
  expect(localStorage.getItem('guru_certificate_cloud_exam_in_progress')).toBeNull();
  await screen.findByText('Resultado salvo no ranking.');
});

test('Próxima e Anterior rolam a página para o topo', () => {
  window.scrollTo = jest.fn();
  renderFullExam();
  fireEvent.click(screen.getByText('Resposta única correta'));
  fireEvent.click(screen.getByRole('button', { name: 'Próxima →' }));
  expect(window.scrollTo).toHaveBeenCalledTimes(1);
  fireEvent.click(screen.getByRole('button', { name: '← Anterior' }));
  expect(window.scrollTo).toHaveBeenCalledTimes(2);
  expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
});

test('resposta única errada mostra a explicação da correta e a da resposta escolhida', () => {
  renderFullExam();
  fireEvent.click(screen.getByText('Resposta única incorreta'));

  expect(screen.getByText(/A resposta correta é:/)).toHaveTextContent('Resposta única correta');
  expect(screen.getByText('Explicação: Resposta única correta')).toBeInTheDocument();
  expect(screen.getByText(/Sua resposta:/)).toHaveTextContent('Resposta única incorreta');
  expect(screen.getByText('Explicação: Resposta única incorreta')).toBeInTheDocument();
});

test('resposta única certa mostra só a explicação da correta', () => {
  renderFullExam();
  fireEvent.click(screen.getByText('Resposta única correta'));

  expect(screen.getByText('Explicação: Resposta única correta')).toBeInTheDocument();
  expect(screen.queryByText(/A resposta correta é:/)).not.toBeInTheDocument();
  expect(screen.queryByText(/Sua resposta:/)).not.toBeInTheDocument();
});

test('na sessão por domínio, resposta única errada mostra a explicação da correta e a da escolhida', () => {
  renderDomainSession();
  fireEvent.click(screen.getByText('Resposta única incorreta'));

  expect(screen.getByText(/A resposta correta é:/)).toHaveTextContent('Resposta única correta');
  expect(screen.getByText('Explicação: Resposta única correta')).toBeInTheDocument();
  expect(screen.getByText(/Sua resposta:/)).toHaveTextContent('Resposta única incorreta');
  expect(screen.getByText('Explicação: Resposta única incorreta')).toBeInTheDocument();
});

test('na última questão esconde "Finalizar Agora" e mantém "Finalizar"', () => {
  renderFullExam();
  expect(screen.getByRole('button', { name: 'Finalizar Agora' })).toBeInTheDocument();

  advanceToMultipleQuestion();
  expect(screen.queryByRole('button', { name: 'Finalizar Agora' })).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Finalizar' })).toBeInTheDocument();
});

test('na última questão, "Finalizar" fica ativo mesmo sem resposta', async () => {
  renderFullExam();
  advanceToMultipleQuestion();

  const finish = screen.getByRole('button', { name: 'Finalizar' });
  expect(finish).toBeEnabled();
  fireEvent.click(finish);

  expect(screen.getByText('Você acertou 1 de 2 questões')).toBeInTheDocument();
  await screen.findByText('Resultado salvo no ranking.');
});

test('se o armazenamento do navegador falhar, o simulado continua e finaliza', async () => {
  const setItem = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('QuotaExceededError'); });
  const removeItem = jest.spyOn(Storage.prototype, 'removeItem').mockImplementation(() => { throw new Error('blocked'); });
  try {
    renderFullExam();
    fireEvent.click(screen.getByText('Resposta única correta'));
    expect(screen.getByText('✓ Correto!')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Finalizar Agora' }));
    expect(screen.getByText('Você acertou 1 de 2 questões')).toBeInTheDocument();
    await screen.findByText('Resultado salvo no ranking.');
  } finally {
    setItem.mockRestore();
    removeItem.mockRestore();
  }
});

test('duas abas com a mesma tentativa enviam o mesmo id', async () => {
  const first = renderFullExam();
  fireEvent.click(screen.getByText('Resposta única correta'));
  const snapshot = localStorage.getItem('guru_certificate_cloud_exam_in_progress');
  first.unmount();

  localStorage.setItem('guru_certificate_cloud_exam_in_progress', snapshot);
  const tabA = renderFullExam();
  fireEvent.click(screen.getByRole('button', { name: 'Finalizar Agora' }));
  await screen.findByText('Resultado salvo no ranking.');
  tabA.unmount();

  localStorage.setItem('guru_certificate_cloud_exam_in_progress', snapshot);
  renderFullExam();
  fireEvent.click(screen.getByRole('button', { name: 'Finalizar Agora' }));
  await screen.findAllByText('Resultado salvo no ranking.');

  expect(saveExamResult).toHaveBeenCalledTimes(2);
  expect(saveExamResult.mock.calls[0][2].id).toBe(saveExamResult.mock.calls[1][2].id);
});

test('ao voltar depois do prazo, encerra a tentativa salva com os mesmos acertos e id', async () => {
  const first = renderFullExam();
  fireEvent.click(screen.getByText('Resposta única correta'));
  const saved = JSON.parse(localStorage.getItem('guru_certificate_cloud_exam_in_progress'));
  first.unmount();
  saved.deadline = Date.now() - 1000;
  localStorage.setItem('guru_certificate_cloud_exam_in_progress', JSON.stringify(saved));

  renderFullExam();
  expect(screen.getByText('Você acertou 1 de 2 questões')).toBeInTheDocument();
  expect(createCloudPractitionerExam).toHaveBeenCalledTimes(1);
  expect(saveExamResult).toHaveBeenCalledTimes(1);
  expect(saveExamResult).toHaveBeenCalledWith('student', 'cloud-practitioner', expect.objectContaining({ id: saved.attemptId, correct: 1 }));
  expect(localStorage.getItem('guru_certificate_cloud_exam_in_progress')).toBeNull();
  await screen.findByText('Resultado salvo no ranking.');
});

test('o segundo simulado usa só as 69 adicionais e mantém o progresso do primeiro', async () => {
  const first = renderFullExam();
  fireEvent.click(screen.getByText('Resposta única correta'));
  const firstSnapshot = localStorage.getItem('guru_certificate_cloud_exam_in_progress');
  first.unmount();
  createCloudPractitionerExam.mockReturnValue(cloudPractitionerQuestions2);

  const second = renderFullExam(2);
  expect(screen.getByRole('heading', { name: 'Cloud Practitioner — Simulado 2' })).toBeInTheDocument();
  expect(screen.getByText('1 / 69')).toBeInTheDocument();
  const secondSaved = JSON.parse(localStorage.getItem('guru_certificate_cloud_exam_in_progress_2'));
  expect(secondSaved.questionIds).toEqual(cloudPractitionerQuestions2.map(question => question.id));
  fireEvent.click(screen.getByRole('button', { name: 'Finalizar Agora' }));
  expect(saveExamResult).toHaveBeenCalledWith('student', 'cloud-practitioner-2', expect.objectContaining({ total: 69 }));
  expect(localStorage.getItem('guru_certificate_cloud_exam_in_progress_2')).toBeNull();
  expect(localStorage.getItem('guru_certificate_cloud_exam_in_progress')).toBe(firstSnapshot);
  await screen.findByText('Resultado salvo no ranking.');
  second.unmount();

  renderFullExam();
  expect(screen.getByText('✓ Correto!')).toBeInTheDocument();
  expect(screen.getByText('1 / 2')).toBeInTheDocument();
});

test('uma troca de conta não atribui a tentativa à outra pessoa', () => {
  renderFullExam();
  fireEvent.click(screen.getByText('Resposta única correta'));
  getCurrentUser.mockReturnValue({ id: 'other-student' });
  fireEvent.click(screen.getByRole('button', { name: 'Finalizar Agora' }));
  expect(saveExamResult).not.toHaveBeenCalled();
  expect(screen.getByRole('status')).toHaveTextContent('A conta mudou');
});

test('não promete sincronização quando o resultado foi rejeitado e descartado', async () => {
  saveExamResult.mockRejectedValue(new Error('Resultado inválido'));
  renderFullExam();
  fireEvent.click(screen.getByRole('button', { name: 'Finalizar Agora' }));
  await screen.findByText(/O resultado não foi salvo\./);
  expect(screen.getByRole('status')).not.toHaveTextContent('pendente');
});
