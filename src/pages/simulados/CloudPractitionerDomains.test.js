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
  'security-compliance': 45,
  'cloud-technology-services': 47,
  'billing-pricing-support': 16
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
