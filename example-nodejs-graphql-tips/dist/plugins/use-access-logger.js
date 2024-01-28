import { logger } from '../logger.js';
export const useAccessLogger = () => {
    return {
        onResponse({ request, serverContext, response }) {
            const url = request.url;
            const method = request.method;
            const userAgent = request.headers.get('user-agent');
            const status = response.status;
            const operationName = serverContext?.params?.operationName;
            logger.info({ url, method, userAgent, status, operationName });
        },
    };
};
//# sourceMappingURL=use-access-logger.js.map