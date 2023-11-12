import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

const el = document.getElementById('root');

createRoot(el as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
