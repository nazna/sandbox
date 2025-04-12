import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphql } from 'graphql';

const typeDefs = `
  type Query {
    review(id: ID!): Review
  }

  type Review {
    id: ID!
    score: Float!
    place: Place
  }

  type Place {
    id: ID!
    name: String!
  }
`;

const resolvers = {
  Query: {
    review: (_, { id }) => ({
      id: String(id),
      score: 3.8,
    }),
  },
  Review: {
    place: ({ id }) => {
      if (id === '0') {
        throw new Error('Place取得でエラーが発生しました');
      }
      return { id: `${id}_${id}`, name: 'テスト施設名' };
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const source = `
  query TestOp {
    review(id: "0") {
      id
      score
      place {
        id
        name
      }
    }
  }
`;

const res = await graphql({
  schema,
  source,
});

console.log(JSON.stringify(res, null, 2));
