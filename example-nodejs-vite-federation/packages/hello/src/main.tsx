import React from 'react';
import { createRoot } from 'react-dom/client';
import { Hello } from './hello';

const el = document.getElementById('root');

createRoot(el as HTMLElement).render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
);
