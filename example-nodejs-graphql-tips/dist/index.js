import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchema } from '@graphql-tools/load';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { useDisableIntrospection } from '@graphql-yoga/plugin-disable-introspection';
import { createYoga } from 'graphql-yoga';
import { createServer } from 'node:http';
import { logger, logging } from './logger.js';
import { useAccessLogger } from './plugins/use-access-logger.js';
import { resolvers } from './resolvers.js';
class Tester {
    constructor(msg) {
        console.log(msg);
    }
}
const isDev = process.env.NODE_CONFIG_ENV !== 'production';
const typeDefs = await loadSchema('./src/**/*.graphql', { loaders: [new GraphQLFileLoader()] });
const schema = makeExecutableSchema({ typeDefs, resolvers });
const context = {
    loader: new Tester('aaa'),
};
const graphiql = isDev
    ? {
        title: 'GraphiQL',
        additionalHeaders: { 'X-Engt-Client-Identifier': 'graphiql' },
    }
    : false;
const plugins = isDev ? [useAccessLogger()] : [useAccessLogger(), useDisableIntrospection()];
const yoga = createYoga({ schema, context, logging, graphiql, plugins });
const server = createServer(yoga);
server.listen(8080, () => {
    logger.info('Server is running on http://localhost:8080/graphql');
});
//# sourceMappingURL=index.js.map