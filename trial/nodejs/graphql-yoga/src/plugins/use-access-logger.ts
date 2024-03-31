import type { Plugin } from '@envelop/core';
import type { ExecutionResult } from 'graphql';
import type { IncomingMessage, ServerResponse } from 'http';
import { logger } from '../lib/logger.js';

export const useAccessLogger = (): Plugin<{ req: IncomingMessage; res: ServerResponse; request: Request }> => {
  return {
    onExecute() {
      return {
        onExecuteDone: ({ args, result }) => {
          const url = new URL(args.contextValue.request.url);

          const { headers } = args.contextValue.request;
          const extensionsHttp = (result as ExecutionResult).errors
            ?.map((e) => e.extensions['http'] as Record<string, unknown>)
            .find((e) => e);

          logger.info({
            status: Number(extensionsHttp?.['status']) || 200,
            origin: url.origin,
            path: url.pathname,
            user_agent: headers.get('sec-ch-ua') || 'unknown_user_agent',
            operation_name: args.operationName || 'unknown_operation_name',
          });
        },
      };
    },
  };
};
