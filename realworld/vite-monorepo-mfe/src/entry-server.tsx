import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { App } from './app';

export const render = async () => {
  const appHtml = renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );

  return { appHtml };
};
