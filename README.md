# example-nestjs-graphql-prisma

> An example NestJS + GraphQL + Prisma

## Todo

- [ ] Field Resolver で例外を投げても Exception Filter でキャッチされないかを確認
  - [ ] [Exception filters](https://docs.nestjs.com/exception-filters)
  - [ ] [nestjs のエラーハンドリングってどうやるの](https://yyyank.blogspot.com/2019/08/nestjs.html)
- [ ] [fieldResolverEnhancers](https://docs.nestjs.com/graphql/other-features#execute-enhancers-at-the-field-resolver-level)を有効にしたときのパフォーマンス
  - [ ] Root Resolver で普通なレスポンスサイズ
  - [ ] Root Resolver で巨大なレスポンスサイズ
  - [ ] Field Resolver で普通なレスポンスサイズ
  - [ ] Field Resolver で巨大なレスポンスサイズ
- [ ] resolver や service の戻り値を[ReturnType](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)にできるか
- [ ] nanoid が衝突して create 失敗したときの処理
- [ ] DataLoader に変更する [例](https://github.com/nazna/example-typegraphql-dataloader/blob/main/src/resolvers/book.field.ts)

## Query

```graphql
query Cat {
  cat(catId: "YIq-n7_y-_osFaGYdR34Y") {
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
  ID_ASC: '+cat_id',
  ID_DESC: '-cat_id',
  CREATED_ASC: '+created_at',
  CREATED_DESC: '-created_at',
} as const
```
