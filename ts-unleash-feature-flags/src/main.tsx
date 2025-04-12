import fastify from "fastify";
import { renderToPipeableStream } from "react-dom/server";
import { startUnleash } from "unleash-client";
import { Hello } from "./hello";
import { SayGoodbye } from "./say-goodbye";

const INITIAL_HTML = "<!DOCTYPE html>";

const unleash = await startUnleash({
  url: "http://localhost:4242/api",
  appName: "enuff",
  customHeaders: { Authorization: "default:development.unleash-insecure-api-token" },
});

const app = fastify();

app.get("/", (_, reply) => {
  reply.header("X-Content-Type-Options", "nosniff");
  reply.header("Content-Type", "text/html");

  const enabled = unleash.isEnabled("demo.say-goodbye");

  const stream = renderToPipeableStream(
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>example-nodejs-unleash-feature-flags</title>
      </head>
      <body>
        <Hello />
        <SayGoodbye enabled={enabled} />
      </body>
    </html>,
    {
      onShellReady() {
        reply.raw.write(INITIAL_HTML);
        stream.pipe(reply.raw);
      },
    }
  );
});

await app.listen({ port: 8080 });
