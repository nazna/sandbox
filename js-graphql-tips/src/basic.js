import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphql } from 'graphql';

const typeDefs = `
  type Query {
    """
    # レビューを１つ取得します
    """
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
    review: () => ({
      id: '1',
      score: 4.5,
    }),
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const source = `
  query TestOp {
    review(id: "1") {
      id
      score
      place {
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
