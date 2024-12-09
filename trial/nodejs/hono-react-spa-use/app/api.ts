import { scheduler } from 'node:timers/promises';
import { Hono } from 'hono';

export const api = new Hono();

const apiRoute = api.get('/say', async (c) => {
  await scheduler.wait(200);

  return c.json({
    message: 'Hello',
  });
});

export type ApiType = typeof apiRoute;
