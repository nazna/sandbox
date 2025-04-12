import helmet from '@fastify/helmet';
import sensible from '@fastify/sensible';
import fastify from 'fastify';
import { pino } from 'pino';
import { routes } from './routes.js';

const logger = pino({
  transport: {
    target: './otel-transport.js',
  },
});

const app = fastify({
  logger,
  requestTimeout: 5_000,
  ignoreTrailingSlash: true,
  ignoreDuplicateSlashes: true,
});

app.register(helmet);
app.register(sensible);
app.register(routes);

await app.listen({ port: 8080 });
