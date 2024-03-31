import { makeExecutableSchema } from '@graphql-tools/schema';
import { graphql } from 'graphql';

const getRandom = (min, max) => {
  const imin = Math.ceil(min);
  const imax = Math.floor(max);
  return Math.floor(Math.random() * (imax - imin + 1) + imin);
};

const fetchPlace = async (id) => {
  console.log(`/place?id=${id}`);
  return { id: `${id}_${id}`, name: 'テスト施設名' };
};

const typeDefs = `
  type Query {
    reviews: [Review!]
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
    reviews: () => {
      return [...Array(5)].map((_, i) => ({
        id: String(i),
        score: getRandom(0, 5),
      }));
    },
  },
  Review: {
    place: async ({ id }) => {
      console.log(`Review.place resolver invoked. id=${id}`);
      return fetchPlace(id);
    },
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const source = `
  query TestOp {
    reviews {
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
