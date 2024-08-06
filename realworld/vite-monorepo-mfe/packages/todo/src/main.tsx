import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import Todo from './todo';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <main className="container">
      <Todo />
    </main>
  </StrictMode>,
);
