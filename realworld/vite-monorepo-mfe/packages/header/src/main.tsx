import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Header from './header';
import { container } from './main.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <main className={container}>
      <Header />
    </main>
  </StrictMode>,
);
