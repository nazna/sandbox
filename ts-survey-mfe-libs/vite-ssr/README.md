# Vite SSR

## Notes

- App Shell 側を [Vike](https://vike.dev/) でやればいいかも？
  - Hono の React Renderer は使えないか
  - @hono/node-server 使うと Vite で開発するのが難しそうなんよな
- Vite v6 にして Environment API 使うのもあり、どうやら Rntime API はあんまりよくなさそう
  - https://www.npmjs.com/package/vite/v/6.0.0-alpha.15
- @vitejs/plugin-react の Fast Refresh 用のスクリプトを手書きしないといけないのだるいな
  - ViteDevServer.transformIndexHtml が使えるならこれで良いんだけど
  - hono/react-renderer じゃなくてもいいか？
  - それなら React じゃなくて hono/jsx でもいいんだよな

環境変数の型定義をする方法

```typescript
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: string;
  }
}
```

## References

- [Hono で API 付き雑 React SPA 最小](https://zenn.dev/yusukebe/articles/06d9cc1714bfb7)
- [kazukixmatsuda/react-setup-2024](https://github.com/kazukixmatsuda/react-setup-2024)
- [sasoria/astro-microfrontends-ssr](https://github.com/sasoria/astro-microfrontends-ssr)
- [bluwy/create-vite-extra/template-ssr-react](https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-react)
- [vite で TypeScript のバックエンド開発環境を動かす](https://zenn.dev/akinor1ty/articles/a17352d81b67b1)
- [hi-ogawa/vite-environment-examples/examples/react-ssr](https://github.com/hi-ogawa/vite-environment-examples/tree/main/examples/react-ssr)
- [hi-ogawa/vite-plugin-ssr-middleware](https://github.com/hi-ogawa/vite-plugins/tree/main/packages/vite-plugin-ssr-middleware)
