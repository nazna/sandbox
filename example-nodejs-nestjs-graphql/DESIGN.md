# DESIGN

## Bird's Eye View

- スキーマファースト
- Resolver -> Service -> Repository の実行関係である
- Service は他の Service を使わず Repository を使う
- DataLoader は Repository を使う

### Technology Stack

- [NestJS](https://nestjs.com/)
  - [Express](https://expressjs.com/)
- [GraphQL](https://graphql.org/)
  - [DataLoader](https://github.com/graphql/dataloader)
- [Prisma](https://www.prisma.io/)
- [Nano ID](https://github.com/ai/nanoid)
- [TypeScript](https://www.typescriptlang.org/)

## Code Map

```
src
|-- main.ts // サーバー起動
|-- app.module.ts // エントリーモジュール
|-- cat // Catスキーマモジュール
|   |-- args // クエリ引数モデル
|   |-- cat-owner.loader.ts // Cat.ownerのリゾルバー用DataLoader
|   |-- cat.mapper.ts // 取得結果をスキーマにマッピングする
|   |-- cat.module.ts // Catモジュール管理
|   |-- cat.repository.ts // 外部との接続処理
|   |-- cat.resolver.ts // Catスキーマリゾルバー
|   `-- cat.service.ts // ビジネスロジック
|-- owner // Ownerスキーマモジュール
|-- helpers // 各種ヘルパー等
|   |-- error-code.ts // エラーコード一覧
|   |-- filters // 例外フィルタ
|   |   |-- bad-request.filter.ts
|   |   |-- internal-server-error.filter.ts
|   |   `-- not-found.filter.ts
|   `-- prisma.repository.ts // Prisma抽象クラス
|-- schema // GraphQLスキーマ
|   |-- cat.graphql
|   |-- common.graphql
|   `-- owner.graphql
|-- schema.ts // スキーマから生成された型定義
`-- typegen.ts // スキーマから型定義を生成するスクリプト
```

## GraphQL Schema

### Query

- ページネーションが必要な場合は Connection を実装する
- ルートクエリは必ず Nullable とする

### Pagination

- 簡単のためオフセットベースのページネーションで実装する
- `offset`, `limit` は引数そのままのためレスポンスには含めない
- 取得した件数はレスポンスされる `nodes` の長さで取得する
- ヒットした件数は Connection の `totalCount` で取得する
  - ヒットした件数を取得するために 2 つ並列で SQL が発行するが、これは普通なのか分かってない

### Mutation

- 引数 `input` を必須とする
- `${Object}Payload` をレスポンスする

## Implementation Notes

- エラー時にキャッシュされているのか、その場合どのような値がキャッシュされているのかを知りたい
- Playground ではエラー内容はバリデーション条件を表現できないのが気になる
- `JSON.stringify` の第 2 引数 `replacer` でマスクすのもありかと思ったが表示する必要そもそもない
- アクセスログをどう扱うかは考慮していない
  - できれば Frontend から `traceId` みたいなのでアクセスログ、エラーログをまとめたい
- Union type によるエラースキーマの表現は良さそうだが実例が少ないので見送り
- Permission や認証認可を directive で制御する方法も試したい

### About `fieldResolverEnhancers`

/src/app.module.ts に記述されている `fieldResolverEnhancers` オプションで `filters` を設定していないと Field resolver が例外を発生させたときに対応する Exception Filters が機能しない。

## References

- [Exception filters](https://docs.nestjs.com/graphql/other-features#exception-filters)
- [axios の error handling](https://qiita.com/yuta-katayama-23/items/5b8bf72236eec9cadf41)
- [Why aren't NestJS GraphQL validation errors placed in the error message field?](https://stackoverflow.com/questions/61045881/why-arent-nestjs-graphql-validation-errors-placed-in-the-error-message-field)
