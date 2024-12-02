import { scheduler } from 'node:timers/promises';
import { Hono } from 'hono';

export const api = new Hono();

const apiRoute = api
  .get('/hello', async (c) => {
    await scheduler.wait(1_000);

    return c.json({
      message: 'Hello, world!',
    });
  })
  .get('/bye', async (c) => {
    await scheduler.wait(8_00);

    return c.json({
      message: 'Goodbye :(',
    });
  });

export type ApiType = typeof apiRoute;
