import { WebC } from '@11ty/webc';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { makeDocument } from './utils.js';

const app = new Hono();

app.get('/', async (c) => {
  const webc = new WebC();

  webc.defineComponents('./src/*.webc');
  webc.setInputPath('./src/page.webc');
  webc.setBundlerMode(true);

  const { html, css, js } = await webc.compile();

  return c.html(makeDocument(html, css, js));
});

serve(app, (info) => console.log(`Server is running on http://localhost:${info.port}`));
