import pino from 'pino';
export const logger = pino();
export const logging = {
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
//# sourceMappingURL=logger.js.map