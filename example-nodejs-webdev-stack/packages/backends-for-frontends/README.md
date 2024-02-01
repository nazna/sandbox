# backends-for-frontends

> Backends for Frontends with Nest.js

## Todos

- [ ] InMemory キャッシュを導入する
- [ ] Express ではなく Fastify を利用する
- [ ] `Query.author` で `Book` も取得できるようにする
- [ ] class-validator を使った Validation を導入する (`@UsePipes(new ValidationPipe({ transform: true }))`)
- [ ] 取得したアイテムの長さが `limit` と正しいか単体テストする
- [ ] `Query.books` と `Query.authors` で Connection 型スキーマを作成し `total` と `nodes: [Book!]!` を返す
- [ ] [GraphQL Inspector Action](https://graphql-inspector.com/docs/products/action)を導入する
