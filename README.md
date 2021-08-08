# example-nestjs-graphql-prisma

> An example NestJS + GraphQL + Prisma

## Todo

- [ ] [fieldResolverEnhancers](https://docs.nestjs.com/graphql/other-features#execute-enhancers-at-the-field-resolver-level)を有効にしたときのパフォーマンス
  - [ ] Root Resolver で普通なレスポンスサイズ
  - [ ] Root Resolver で巨大なレスポンスサイズ
  - [ ] Field Resolver で普通なレスポンスサイズ
  - [ ] Field Resolver で巨大なレスポンスサイズ
- [ ] nanoid が衝突して create 失敗したときの処理

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
