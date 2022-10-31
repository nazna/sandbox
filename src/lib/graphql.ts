import { GraphQLID } from 'graphql';

interface ResolvedGlobalId {
  type: string | undefined;
  id: string | undefined;
}

const GLOBAL_ID_SEPARATER = ':::';

export const toGlobalId = (type: string, id: string): string => {
  return `${type}${GLOBAL_ID_SEPARATER}${GraphQLID.serialize(id)}`;
};

export const fromGlobalId = (globalId: string): ResolvedGlobalId => {
  const parsed = globalId.split(':::');
  return {
    type: parsed[0],
    id: parsed[1],
  };
};
