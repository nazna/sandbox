# vite-monorepo-mfe

## Notes

- React や TypeScript は Root の依存にすべきなのか
  - 基本的には分けておくほうが良いと考えている
  - それぞれのパッケージごとにバージョンを更新できる方が分離しやすい
  - バージョン更新に破壊的変更があるようだと分けるのは危険かもしれない
- packages/todo の開発をするときに本物の packages/core を使うにはどうすればよいのか
  - 逆に packages/core の開発をするときは packages/todo のビルドされたものを読み込むようにしている
  - 良い方法が思いつかない
- 開発中も manifest.json を利用できるか
  - https://github.com/owlsdepartment/vite-plugin-dev-manifest
  - これを使えばできそう
- Dynamic import はどうやら default export されている必要がある
  - Node.js では HTTP Import できないので一度ダウンロードする必要がある
  - 定期的なダウンロードファイルの更新があるとよい
- packages/header のように画像ファイルを埋め込まれている場合にアクセスできない
  - URL にしておくか、静的ファイルをダウンロード可能にするなどの検討が必要である
- Vite の modes は以下の優先順になる (出典: [Vite の modes がビルドにどう影響するか調べる](https://zenn.dev/kazuma1989/scraps/0c9124d2903453))
  1. 環境変数 NODE_ENV
  2. .env ファイル内の NODE_ENV
  3. CLI オプションの --mode
  4. vite.config の mode
  5. CLI コマンドが serve か build か

## References

- [sasoria/astro-microfrontends-ssr](https://github.com/sasoria/astro-microfrontends-ssr)
- [create-vite-extra/template-ssr-react](https://github.com/bluwy/create-vite-extra/tree/master/template-ssr-react)
