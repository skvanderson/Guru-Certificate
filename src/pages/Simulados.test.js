import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Simulados from './Simulados';

jest.mock('../components/Reveal', () => ({ children }) => <div>{children}</div>);

test('o catálogo oferece dois simulados de Practitioner com links e quantidades distintos', () => {
  render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Simulados /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: 'Cloud Practitioner — Simulado 1' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Cloud Practitioner — Simulado 2' })).toBeInTheDocument();
  expect(screen.getByText('65 questões baseadas no exame oficial')).toBeInTheDocument();
  expect(screen.getByText('69 questões adicionais em ordem aleatória')).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: 'Iniciar Simulado', exact: true })[0]).toHaveAttribute('href', '/simulado/cloud-practitioner');
  expect(screen.getByRole('link', { name: 'Iniciar Simulado 2' })).toHaveAttribute('href', '/simulado/cloud-practitioner-2');
});
