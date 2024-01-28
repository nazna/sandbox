import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { loadSchema } from '@graphql-tools/load';

import { Resolvers } from './resolvers-types.js';
import { searchPlaces } from './services.js';

export const typeDefs = await loadSchema('./src/**/*.graphql', { loaders: [new GraphQLFileLoader()] });

export const resolvers: Resolvers = {
  Query: {
    search(_, { query, limit, offset }) {
      return searchPlaces(query, limit, offset);
    },
  },
  Place: {
    reviews(parent, _, { reviewLoader }) {
      return reviewLoader.load(parent.placeId);
    },
  },
};
