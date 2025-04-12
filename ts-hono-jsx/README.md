# example-hono-jsx

> Vite + hono/jsx like Single Page Application

## Notes

- state を書き換えてもコンポーネントが再レンダリングされない
- 親から props として渡すと再レンダリングされる
- このあたりは React との差分になりそう
- fetch 周りをちゃんとやるなら React を使ったほうがいいかも
- use と Suspense も SPA ではサポートされてなさそう
  - https://github.com/honojs/hono/issues/1959

## References

- [yusukebe/hono-spa-react](https://github.com/yusukebe/hono-spa-react)
- [streamich/react-use](https://github.com/streamich/react-use)
