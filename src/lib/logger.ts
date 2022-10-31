import { pino } from 'pino';

interface LogValue {
  status: number;
  origin: string;
  path: string;
  user_agent: string;
  operation_name: string;
}

interface Logger extends pino.Logger {
  info: <T extends LogValue>(obj: T) => void;
}

export const logger = pino({
  name: 'egy',
  base: null,
  timestamp: () => `",time":"${new Date().toISOString()}"`,
}) as Logger;
