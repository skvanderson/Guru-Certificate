import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Simulados from './Simulados';

jest.mock('../components/Reveal', () => ({ children }) => <div>{children}</div>);

test('o catálogo reúne os dois simulados de Practitioner em um único card', () => {
  render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Simulados /></MemoryRouter>);
  expect(screen.getAllByRole('heading', { name: /Cloud Practitioner/ })).toHaveLength(1);
  expect(screen.getAllByAltText('AWS Cloud Practitioner Badge')).toHaveLength(1);
  expect(screen.getByText('Simulado 1: 65 questões · Simulado 2: 69 questões')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Simulado 1', exact: true })).toHaveAttribute('href', '/simulado/cloud-practitioner');
  expect(screen.getByRole('link', { name: 'Simulado 2', exact: true })).toHaveAttribute('href', '/simulado/cloud-practitioner-2');
  expect(screen.getAllByRole('link', { name: 'Flash Cards', exact: true })).toHaveLength(3);
  expect(screen.getAllByRole('link', { name: 'Flash Cards', exact: true })[0]).toHaveAttribute('href', '/flashcards/cloud-practitioner');
  expect(screen.getByRole('link', { name: 'Praticar por Domínio', exact: true })).toHaveAttribute('href', '/simulado/cloud-practitioner/dominios');
});
