import React from 'react';

// Ícones vetoriais com o mesmo traço e cores herdadas da interface.
const paths = {
  cloud: 'M7 18a5 5 0 0 1-1-9.9 6.5 6.5 0 0 1 12.6 1.4A4.3 4.3 0 0 1 18 18Z',
  code: 'm8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18',
  layers: 'm12 3 10 5-10 5L2 8Zm-10 9 10 5 10-5M2 16l10 5 10-5',
  clipboard: 'M9 4H6a2 2 0 0 0-2 2v14h16V6a2 2 0 0 0-2-2h-3M9 2h6v4H9Zm-1 9h8m-8 4h5',
  book: 'M12 5C9 3 5 3 2 4v15c3-1 7-1 10 1m0-15c3-2 7-2 10-1v15c-3-1-7-1-10 1Zm-7 3h4m-4 4h4m6-4h4m-4 4h4',
  tools: 'm14 6 4 4m-7 3L3 21l-2-2 8-8M14 2a6 6 0 0 0-5 9l4 4a6 6 0 0 0 9-5l-4 2-4-4 2-4Z',
  trophy: 'M7 3h10v6a5 5 0 0 1-10 0Zm0 2H3v3a4 4 0 0 0 4 4m10-7h4v3a4 4 0 0 1-4 4m-5 2v5m-4 2h8m-7-2h6',
  graduation: 'm2 9 10-5 10 5-10 5Zm4 2v6c4 3 8 3 12 0v-6m4-2v8',
  target: 'M20 12a8 8 0 1 1-8-8m5-2v5h5m-5 0-5 5m3 0a3 3 0 1 1-3-3',
  award: 'M16.5 9a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM8 13l-2 9 6-3 6 3-2-9',
  chart: 'M3 3v18h18M7 17v-5m5 5V7m5 10v-8',
  bulb: 'M9 18h6m-6 3h6m-6-6a6 6 0 1 1 6 0v3H9Zm3-11v2',
  checkCircle: 'M22 11a10 10 0 1 1-6-8m-9 8 5 5L22 4',
  alertCircle: 'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Zm-10-5v6m0 4h.01',
  clock: 'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM12 6v6l4 2',
  shuffle: 'M3 6h3l12 12h3m-4-4 4 4-4 4M3 18h3l4-4m4-4 4-4h3m-4-4 4 4-4 4',
  pointer: 'm5 2 14 10-7 1-3 7Z'
};

const Icon = ({ name, size = '1em', style, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    style={{ verticalAlign: '-0.125em', flexShrink: 0, ...style }}
    {...props}
  >
    <path d={paths[name]} />
  </svg>
);

export default Icon;
