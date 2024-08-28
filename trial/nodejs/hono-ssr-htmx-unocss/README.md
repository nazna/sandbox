# example-hono-ssr-htmx-unocss

> Vite + Hono + SSR hono/jsx + htmx + UnoCSS

## Notes

- vite-plugin-watch-and-run は `npm run dev` で起動したときに run オプションを実行しない
- watchKind オプションで ready を指定しても起動時に発動しない (謎)
- unocss/cli で watch オプションを使ってもよいが vite-plugin-watch-and-run を使ってみる
- Custom Plugin を作成して Vite の起動時にビルドステップを実行する
- Node.js の TypeScript サポートがきたので、Vite のビルドステップが不要なら Node.js のみでもいいかも
- wrangler の dev と deploy コマンドは `--assets` というオプションがあるが、問題なくデプロイできるのかは確認した方が良い
- VSCode か TypeScript のエラーで `hx-on:htmx:validation:validate` 属性が使えないため、サーバーサイドでのみ検証することになる
