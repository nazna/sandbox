# example-nodejs-unleash-feature-flags

> Experimental proejct to learn feature flags with Unleash

## Usage

Start unleash server with Docker

```shellscript
$ docker compose up -d
$ docker compose down --rmi all --volumes --remove-orphans
```

ReactDOM.renderToReadableStream を使う方法

- `tsx --conditions=browser src/main.tsx` や `node --conditions=browser src/main.tsx` で実行できる
- Node.js 環境で動かす場合は ReactDOM の Conditional Exports のため `renderToReadableStream` が import できない
- Fastify では `reply.send()` で ReadableStream を送れない
