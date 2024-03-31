# example-nodejs-unleash-feature-flags

> Experimental proejct to learn feature flags with Unleash

## Usage

Start unleash server with Docker

```shellscript
$ docker compose up -d
$ docker compose down --rmi all --volumes --remove-orphans
```

ReactDOM.renderToReadableStream を使う方法

- `npx tsx --conditions=worker src/stream.tsx` や `node --conditions=browser src/stream.tsx` で実行できる
- Node.js 環境で動かす場合は ReactDOM の Conditional Exports のため `renderToReadableStream` が import できない
- Fastify では `reply.send()` で ReadableStream を送れないため、`Readable.fromWeb()` で変換する
- 2023 年 11 月 5 日現在は型定義がおかしいぽいので無理やり型をあてる
