import { YogaLogger } from 'graphql-yoga';
import pino from 'pino';

// @ts-expect-error
export const logger = pino();

export const logging: YogaLogger = {
  debug(...args) {
    logger.debug(...args);
  },
  info(...args) {
    logger.info(...args);
  },
  warn(...args) {
    logger.warn(...args);
  },
  error(...args) {
    logger.error(...args);
  },
};
