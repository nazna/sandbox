import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { WinstonInstrumentation } from "@opentelemetry/instrumentation-winston";
import {
	Resource,
	envDetectorSync,
	hostDetectorSync,
	processDetectorSync,
} from "@opentelemetry/resources";
import { NodeSDK, logs, metrics, tracing } from "@opentelemetry/sdk-node";
import {
	ATTR_SERVICE_NAME,
	ATTR_SERVICE_VERSION,
} from "@opentelemetry/semantic-conventions";
import pkg from "./package.json" with { type: "json" };

const traceExporter = new OTLPTraceExporter();

const sdk = new NodeSDK({
	resource: Resource.default().merge(
		new Resource({
			[ATTR_SERVICE_NAME]: pkg.name,
			[ATTR_SERVICE_VERSION]: pkg.version,
		}),
	),
	resourceDetectors: [envDetectorSync, hostDetectorSync, processDetectorSync],
	instrumentations: [new WinstonInstrumentation(), new HttpInstrumentation()],
	metricReader: new metrics.PeriodicExportingMetricReader({
		exporter: new OTLPMetricExporter(),
	}),
	logRecordProcessors: [
		new logs.SimpleLogRecordProcessor(new OTLPLogExporter()),
	],
	traceExporter,
	spanProcessors: [new tracing.SimpleSpanProcessor(traceExporter)],
});

process.on("beforeExit", async () => {
	await sdk.shutdown();
});

sdk.start();
