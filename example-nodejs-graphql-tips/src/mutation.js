import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphql } from 'graphql';

const typeDefs = `
  type Query {
    hello: String!
  }

  type Mutation {
    createFavorite(id: ID!): CreateFavoritePayload
  }

  union CreateFavoritePayload = CreateFavoriteSuccess | FavoriteNotFound

  type CreateFavoriteSuccess {
    id: ID!
  }

  type FavoriteNotFound {
    message: String!
  }
`;

const resolvers = {
  Mutation: {
    createFavorite: (_, { id }) => {
      if (id === '1') {
        return { __typename: 'FavoriteNotFound', message: 'failed' };
      }
      return { __typename: 'CreateFavoriteSuccess', id: '1' };
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const source = `
  mutation TestOp {
    createFavorite(id: "0") {
      ... on CreateFavoriteSuccess {
        id
      }
      ... on FavoriteNotFound {
        message
      }
    }
  }
`;

const res = await graphql({
  schema,
  source,
});

console.log(JSON.stringify(res, null, 2));
