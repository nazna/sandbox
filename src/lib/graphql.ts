import { base32decode, base32encode } from './base32.js';

interface ResolvedGlobalId {
  type: string | undefined;
  id: string | undefined;
}

const GLOBAL_ID_SEPARATER = ':::';

export const toGlobalId = (type: string, id: string): string => {
  return base32encode(`${type}${GLOBAL_ID_SEPARATER}${id}`);
};

export const fromGlobalId = (globalId: string): ResolvedGlobalId => {
  const parsed = base32decode(globalId).split(':::');
  return {
    type: parsed[0],
    id: parsed[1],
  };
};
