import { createServer } from 'node:http';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { useDisableIntrospection } from '@graphql-yoga/plugin-disable-introspection';
import { createYoga } from 'graphql-yoga';
import { context } from './context.js';
import { logger, logging } from './logger.js';
import { useAccessLogger } from './plugins/use-access-logger.js';
import { resolvers, typeDefs } from './resolvers.js';

const isDev = process.env.NODE_CONFIG_ENV !== 'production';

const schema = makeExecutableSchema({ typeDefs, resolvers });
const graphiql = isDev;
const plugins = isDev ? [useAccessLogger()] : [useAccessLogger(), useDisableIntrospection()];

const yoga = createYoga({ schema, context, logging, graphiql, plugins });

// @ts-expect-error
const server = createServer(yoga);

server.listen(8080, () => {
  logger.info('Server is running on http://localhost:8080/graphql');
});
