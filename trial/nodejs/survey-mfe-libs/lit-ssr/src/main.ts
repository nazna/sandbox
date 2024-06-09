import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { render } from '@lit-labs/ssr';
import { collectResult } from '@lit-labs/ssr/lib/render-result.js';
import { Hono } from 'hono';
import { makeDocument } from './utils.js';

const app = new Hono();

app.use('/*', serveStatic({ root: './dist' }))

app.get('/', async (c) => {
  const ssrResult = render(makeDocument());
  const result = await collectResult(ssrResult);

  return c.html(result);
});

serve(app, (info) => console.log(`Server is running on http://localhost:${info.port}`));
