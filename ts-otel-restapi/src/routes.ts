import type { FastifyInstance } from 'fastify';

export const routes = async (fastify: FastifyInstance) => {
  fastify.get('/', async (req, reply) => {
    req.log.info(null, 'Hello, world');

    return reply.send({ message: 'Hello, world' });
  });

  fastify.get('/dice', async (req, reply) => {
    const rolled = Math.floor(Math.random() * 6) + 1;

    req.log.info({ rolled }, 'Successfully rolled.');

    return reply.send({ rolled });
  });

  fastify.get('/error', async (_, reply) => {
    throw reply.notImplemented('Sorry, this is always error');
  });
};
