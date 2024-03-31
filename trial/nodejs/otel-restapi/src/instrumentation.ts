import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-http';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { FastifyInstrumentation } from '@opentelemetry/instrumentation-fastify';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { PinoInstrumentation } from '@opentelemetry/instrumentation-pino';
import { NodeSDK, logs, metrics, resources } from '@opentelemetry/sdk-node';
import { SEMRESATTRS_SERVICE_NAME, SEMRESATTRS_SERVICE_VERSION } from '@opentelemetry/semantic-conventions';

const resource = new resources.Resource({
  [SEMRESATTRS_SERVICE_NAME]: 'example-nodejs-otel-restapi',
  [SEMRESATTRS_SERVICE_VERSION]: '0.0.1',
});

const instrumentations = [new HttpInstrumentation(), new FastifyInstrumentation(), new PinoInstrumentation()];
const metricReader = new metrics.PeriodicExportingMetricReader({ exporter: new OTLPMetricExporter() });
const traceExporter = new OTLPTraceExporter();
const logRecordProcessor = new logs.SimpleLogRecordProcessor(new OTLPLogExporter());

const sdk = new NodeSDK({ resource, instrumentations, metricReader, traceExporter, logRecordProcessor });

process.on('beforeExit', async () => {
  await sdk.shutdown();
});

sdk.start();
