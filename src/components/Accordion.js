import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--aws-white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-6);
  overflow: hidden;
`;

const Toggle = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-4);
  width: 100%;
  padding: var(--spacing-4) var(--spacing-6);
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font: inherit;

  &:hover {
    background: var(--aws-gray-50);
  }
`;

const Chevron = styled.span`
  color: var(--aws-gray-600);
  transition: transform 0.2s ease;
  transform: rotate(${({ $open }) => ($open ? '180deg' : '0')});
`;

const Panel = styled.div`
  padding: var(--spacing-6);
  border-top: 2px solid var(--aws-gray-200);
`;

const Accordion = ({ id, header, isOpen, onToggle, children }) => (
  <Wrapper>
    <Toggle
      type="button"
      id={`${id}-toggle`}
      aria-expanded={isOpen}
      aria-controls={`${id}-panel`}
      onClick={onToggle}
    >
      <div style={{ flex: 1 }}>{header}</div>
      <Chevron aria-hidden="true" $open={isOpen}>▼</Chevron>
    </Toggle>
    {isOpen && (
      <Panel id={`${id}-panel`} role="region" aria-labelledby={`${id}-toggle`}>
        {children}
      </Panel>
    )}
  </Wrapper>
);

export default Accordion;
