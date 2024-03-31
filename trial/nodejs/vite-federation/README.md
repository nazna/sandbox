# example-nodejs-vite-federation

> Experimental project of Vite Federation

## Memo

- `wasmer run wasmer/winterjs --net --mapdir=src:src src/main.tsx` で動くと嬉しいなと思ったけどまだ無理そう
- Hono をこのままだと Node.js で動かせないので、node-server を使うか Fastify を使うかにしたほうがいいかも
  - Fastify にすると Vite が使えないかもしれず、その場合 Module Federation をどう実現するか
- vite-plugin-federation で expose するコンポーネントは Default Export されている必要がある
- 型定義を配布できないから別の方法で型定義を共有する手段を考える必要がある
