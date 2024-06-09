# WebC SSR

## Notes

- 仕組みとしては悪くない、コンパイルによって HTML,CSS,JS が分離して出てくるのはすごい
- VSCode の拡張機能がまともなのがなくて WebC がシンタックスハイライトできない
- WebC の関数群も型がなくて実装を見ないと分からない
- bundleMode とかよくわからない
  - 11ty と組み合わせないと使いづらそう
- SSG するならよさそうだが、やはり厳しい
- JSX で書いて、宣言的 Shadow DOM として出力されるのが良さそうだが...
- WebC の記法を覚えなくてはならない
- マークアップに不要な値の取り回しが難点ぽい

## References

- [Server-Side Rendering | Vite](https://vitejs.dev/guide/ssr)
- [@hono/react-renderer](https://www.npmjs.com/package/@hono/react-renderer)
- [Env Variables and Modes](https://vitejs.dev/guide/env-and-mode)
- [Vite の modes がビルドにどう影響するか調べる](https://zenn.dev/kazuma1989/scraps/0c9124d2903453)
- [Hono and React full stack dev](https://zenn.dev/jp/articles/bfd5996bc430f4)
