# example-nestjs-graphql-prisma

> An example NestJS + GraphQL + Prisma

## Todo

- レート制限
- クエリ複雑さ制限
- ホワイトリストクエリ または Persisted Query
- Create Mutation で `nanoid` が衝突したときのリトライ処理とエラーハンドリング
- 性能テスト
  - [fieldResolverEnhancers](https://docs.nestjs.com/graphql/other-features#execute-enhancers-at-the-field-resolver-level) の設定ありなし
  - Root resolver でレスポンスサイズ大小, Field resolver でレスポンスサイズ大小
- Union type でデータ種別を分けてみる実装
- API リクエストの実装例
  - リトライ処理
  - [SWAPI](https://swapi.dev/)

## Query

```graphql
query Cat {
  cat(catId: "aoyhsavxzm") {
    id
    name
  }
}

query Cats {
  cats {
    pageInfo {
      limit
      offset
      total
    }
    nodes {
      id
      name
    }
  }
}

query CatOnNotFoundError {
  cat(catId: "notfound") {
    id
    name
  }
}

query CatOnValidationError {
  cat(catId: "invalid#") {
    id
    name
  }
}
```

## Memo

EnumResolver 実装してみても良いかも

```typescript
export const CatSortResolver = {
  CREATED_ASC: '+created_at',
  CREATED_DESC: '-created_at',
} as const
```
