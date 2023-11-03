import { Hono } from 'hono';
import { Suspense } from 'react';
import { renderToReadableStream } from 'react-dom/server';
import { Todos } from './todos';

const app = new Hono();

app.get('/', async (c) => {
  const stream = await renderToReadableStream(
    <html lang="ja">
      <body>
        <Suspense fallback={<div>loading...</div>}>
          <Todos />
        </Suspense>
      </body>
    </html>,
  );

  return c.stream((s) => s.pipe(stream));
});

export default app;
