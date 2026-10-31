import React, { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Accordion from './Accordion';

const Demo = () => {
  const [open, setOpen] = useState(false);
  return (
    <Accordion id="demo" header="Simulado 1" isOpen={open} onToggle={() => setOpen(!open)}>
      Conteúdo detalhado
    </Accordion>
  );
};

test('abre e fecha o painel com aria-expanded', () => {
  render(<Demo />);
  const toggle = screen.getByRole('button', { name: /Simulado 1/ });

  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(screen.queryByText('Conteúdo detalhado')).not.toBeInTheDocument();

  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByRole('region')).toHaveTextContent('Conteúdo detalhado');

  fireEvent.click(toggle);
  expect(screen.queryByText('Conteúdo detalhado')).not.toBeInTheDocument();
});
