import { codes, NotFoundError } from './lib/error.js';
import { toGlobalId } from './lib/graphql.js';
import type { Resolvers } from './types.js';

export const resolvers: Resolvers = {
  Query: {
    user: async (_parent, args) => {
      if (args.userId === '2') {
        throw new NotFoundError('User is not found', codes.ERR_USER_NOT_FOUND);
      }

      return {
        id: toGlobalId('User', args.userId),
        userId: args.userId,
        name: 'Alma',
      };
    },
  },
};
