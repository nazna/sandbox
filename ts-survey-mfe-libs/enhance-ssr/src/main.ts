import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { makeClickCounter } from './click-counter.js';
import { makeDocument } from './utils.js';

const app = new Hono();

app.get('/click-counter', async (c) => {
  return c.html(makeClickCounter());
});

app.get('/', async (c) => {
  const response = await fetch('http://localhost:3000/click-counter');
  const content = await response.text();

  return c.html(makeDocument(content));
});

serve(app, (info) => console.log(`Server is running on http://localhost:${info.port}`));
