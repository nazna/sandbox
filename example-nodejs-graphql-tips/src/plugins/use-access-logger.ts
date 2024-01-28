import { Plugin } from 'graphql-yoga';
import { logger } from '../logger.js';

export const useAccessLogger = (): Plugin => {
  return {
    onResponse({ request, serverContext, response }) {
      const url = request.url;
      const method = request.method;
      const userAgent = request.headers.get('user-agent');
      const status = response.status;
      // @ts-expect-error
      const operationName = serverContext?.params?.operationName;

      logger.info({ url, method, userAgent, status, operationName });
    },
  };
};
