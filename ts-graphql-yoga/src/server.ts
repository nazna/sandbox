import { loadFilesSync } from '@graphql-tools/load-files';
import { createSchema, createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import config from './lib/config.js';
import { useAccessLogger } from './plugins/use-access-logger.js';
import { resolvers } from './resolver.js';

const typeDefs = loadFilesSync('./src/schema/*.graphql');

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  graphiql: {
    title: 'GraphiQL | example-graphql-yoga',
    additionalHeaders: { 'X-Egy-Client-Identifier': config.allowedClientIdentifier },
  },
  plugins: [useAccessLogger()],
});

const server = createServer(yoga);

server.listen(8080, () => {
  console.info('Server is running on http://localhost:8080/graphql');
});
