import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import CloudPractitionerDomains from './CloudPractitionerDomains';
import CloudPractitionerDomainSession from './CloudPractitionerDomainSession';
import { cloudPractitionerQuestions } from '../../data/cloudPractitionerQuestions';
import { cloudPractitionerQuestions2 } from '../../data/cloudPractitionerQuestions2';
import { cloudPractitionerDomains } from '../../data/cloudPractitionerDomains';
import { getCloudPractitionerDomainQuestions, getCloudPractitionerPracticeQuestions } from '../../data/cloudPractitionerPractice';

const routerOptions = { v7_startTransition: true, v7_relativeSplatPath: true };
const counts = {
  'cloud-concepts': 26,
  'security-compliance': 44,
  'cloud-technology-services': 46,
  'billing-pricing-support': 18
};

test('a prática contém todas as 134 questões dos dois simulados, sem duplicações ou domínios ausentes', () => {
  const questions = getCloudPractitionerPracticeQuestions();
  expect(questions).toHaveLength(134);
  expect(new Set(questions.map(question => question.id)).size).toBe(134);
  expect(questions).toEqual([...cloudPractitionerQuestions, ...cloudPractitionerQuestions2]);
  const grouped = cloudPractitionerDomains.flatMap(domain => getCloudPractitionerDomainQuestions(domain.slug));
  expect(new Set(grouped.map(question => question.id))).toEqual(new Set(questions.map(question => question.id)));
  expect(getCloudPractitionerDomainQuestions('invalid')).toEqual([]);
});

test('o catálogo mostra as contagens completas e o total dos dois bancos', () => {
  render(<MemoryRouter future={routerOptions}><CloudPractitionerDomains /></MemoryRouter>);
  expect(screen.getByText(/134 questões dos Simulados 1 e 2/)).toBeInTheDocument();
  Object.values(counts).forEach(count => {
    expect(screen.getByText(`${count} questões disponíveis`)).toBeInTheDocument();
  });
});

test.each([
  ['cloud-concepts', [70, 112]],
  ['security-compliance', [1, 68, 79, 103, 114, 116, 125]],
  ['cloud-technology-services', [71, 83, 95, 117]],
  ['billing-pricing-support', [99, 119, 133]]
])('classifica pelo assunto cobrado no domínio %s', (domainId, ids) => {
  ids.forEach(id => {
    const question = getCloudPractitionerPracticeQuestions().find(item => item.id === id);
    expect(question.domain).toBe(domainId);
    expect(getCloudPractitionerDomainQuestions(domainId)).toContain(question);
    cloudPractitionerDomains.filter(domain => domain.slug !== domainId).forEach(domain => {
      expect(getCloudPractitionerDomainQuestions(domain.slug)).not.toContain(question);
    });
  });
});

test.each(cloudPractitionerDomains.flatMap(domain => [
  [domain.slug, true], [domain.slug, false]
]))('conclui todas as questões de %s com respostas corretas=%s sem bloquear o avanço', (domainId, correct) => {
  render(
    <MemoryRouter initialEntries={[`/simulado/cloud-practitioner/dominio/${domainId}`]} future={routerOptions}>
      <Routes>
        <Route path="/simulado/cloud-practitioner/dominio/:domainId" element={<CloudPractitionerDomainSession />} />
      </Routes>
    </MemoryRouter>
  );
  const questions = getCloudPractitionerDomainQuestions(domainId);
  questions.forEach((question, index) => {
    expect(screen.getByText(`${index + 1} / ${questions.length}`)).toBeInTheDocument();
    expect(screen.getByText(question.description['pt-BR'])).toBeInTheDocument();
    const inputs = screen.getAllByRole(question.multiple ? 'checkbox' : 'radio');
    const selections = correct
      ? question.alternatives.map((alternative, i) => alternative.correct ? i : -1).filter(i => i >= 0)
      : [question.alternatives.findIndex(alternative => !alternative.correct)];
    selections.forEach(i => fireEvent.click(screen.getByLabelText(question.alternatives[i].title['pt-BR'])));
    if (question.multiple) {
      const confirm = screen.getByRole('button', { name: 'Confirmar resposta' });
      expect(confirm).toBeEnabled();
      fireEvent.click(confirm);
    }
    expect(screen.getByText(correct ? '✓ Correto!' : '✗ Incorreto')).toBeInTheDocument();
    inputs.forEach(input => expect(input).toBeDisabled());
    const next = screen.getByRole('button', { name: index === questions.length - 1 ? 'Finalizar' : 'Próxima →' });
    expect(next).toBeEnabled();
    fireEvent.click(next);
  });
  expect(screen.getByText(`Você acertou ${correct ? questions.length : 0} de ${questions.length} questões (${correct ? '100.0' : '0.0'}%)`)).toBeInTheDocument();
});

test.each(Object.entries(counts))('a sessão %s permite chegar às questões adicionais e usa o total %i', (domainId, count) => {
  render(
    <MemoryRouter initialEntries={[`/simulado/cloud-practitioner/dominio/${domainId}`]} future={routerOptions}>
      <Routes>
        <Route path="/simulado/cloud-practitioner/dominio/:domainId" element={<CloudPractitionerDomainSession />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText(`1 / ${count}`)).toBeInTheDocument();
  const originals = cloudPractitionerQuestions.filter(question => question.domain === domainId);
  originals.forEach(question => {
    const correctIndex = question.alternatives.findIndex(alternative => alternative.correct);
    fireEvent.click(screen.getAllByRole('radio')[correctIndex]);
    fireEvent.click(screen.getByRole('button', { name: 'Próxima →' }));
  });
  const firstAdditional = cloudPractitionerQuestions2.find(question => question.domain === domainId);
  expect(screen.getByText(firstAdditional.description['pt-BR'])).toBeInTheDocument();
  expect(screen.getByText(`${originals.length + 1} / ${count}`)).toBeInTheDocument();
});
