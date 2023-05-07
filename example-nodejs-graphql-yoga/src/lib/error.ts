import { GraphQLError } from 'graphql';

export const codes = {
  ERR_USER_NOT_FOUND: 'ERR_USER_NOT_FOUND',
} as const;

export class NotFoundError extends GraphQLError {
  constructor(message: string, code: keyof typeof codes) {
    super(message, {
      extensions: {
        code: code,
        http: {
          status: 404,
        },
      },
    });
  }
}
