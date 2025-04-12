import { logs } from '@opentelemetry/api-logs';
import build from 'pino-abstract-transport';

const OTEL_SEVERITY_NUMBER_MAP = new Map<number, number>([
  [10, 1],
  [20, 5],
  [30, 9],
  [40, 13],
  [50, 17],
  [60, 21],
]);

const OTEL_SEVERITY_TEXT_MAP = new Map<number, string>([
  [0, 'UNSPECIFIED'],
  [1, 'TRACE'],
  [5, 'DEBUG'],
  [9, 'INFO'],
  [13, 'WARN'],
  [17, 'ERROR'],
  [21, 'FATAL'],
]);

const otelLogger = logs.getLogger('example-nodejs-otel-restapi');

export default async function () {
  return build(async (source) => {
    for await (const obj of source) {
      const { time, level, msg, ...attributes } = obj;

      const severityNumber = OTEL_SEVERITY_NUMBER_MAP.get(obj.level) ?? 0;
      const severityText = OTEL_SEVERITY_TEXT_MAP.get(severityNumber) ?? 'UNSPECIFIED';

      otelLogger.emit({
        timestamp: obj.time,
        severityNumber,
        severityText,
        body: msg,
        attributes,
      });
    }
  });
}
