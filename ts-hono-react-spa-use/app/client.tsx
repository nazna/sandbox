'use client';

import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { Message, fetchMessage } from './components/message';

function App() {
  return (
    <div>
      <h3>This is app</h3>
      <Suspense fallback="Loading...">
        <Message promise={fetchMessage()} />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
