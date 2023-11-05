import fastify from "fastify";
import { Readable } from "node:stream";
import { ReadableStream } from "node:stream/web";
import { renderToReadableStream } from "react-dom/server";

const app = fastify();

app.get("/stream", async (_, reply) => {
  reply.header("X-Content-Type-Options", "nosniff");
  reply.header("Content-Type", "text/html");

  const webstream = await renderToReadableStream(<p>Helloooooo</p>);
  const stream = Readable.fromWeb(webstream as unknown as ReadableStream);

  return reply.send(stream);
});

app.listen({ port: 8080 });
