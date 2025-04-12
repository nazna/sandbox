import { serve } from "@hono/node-server";
import { zValidator } from "@hono/zod-validator";
import { OpenTelemetryTransportV3 } from "@opentelemetry/winston-transport";
import { Hono } from "hono";
import { compress } from "hono/compress";
import { secureHeaders } from "hono/secure-headers";
import { scheduler } from "node:timers/promises";
import winston from "winston";
import { z } from "zod";

const log = winston.createLogger({
	transports: [
		new winston.transports.Console(),
		new OpenTelemetryTransportV3(),
	],
});

const schema = z.object({
	id: z.number({ coerce: true }),
});

const app = new Hono();

app.use(secureHeaders());
app.use(compress());

app.get("/amplifier", zValidator("query", schema), async (c) => {
	const { id } = c.req.valid("query");

	log.info(`Request accepted / with id=${id}`);

	if (id === 213) {
		throw new Error("500 - Internal Server Error");
	}

	const delta = Math.floor(Math.random() * 10) + 1;
	await scheduler.wait(delta * 5);

	return c.json({
		id,
		factor: delta > 9 ? 100 : 10,
		delta,
	});
});

app.onError((err, c) => {
	const eres = {
		name: err.name,
		status: 500,
		message: err.message,
	};

	log.error(err.message, eres);
	return c.json(eres, { status: 500 });
});

serve(app, ({ port }) => {
	log.info(`Server is running on http://localhost:${port}`);
});
