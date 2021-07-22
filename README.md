# example-nestjs-graphql-performance

> An example to test performance NestJS GraphQL

## 確認したいこと

- [ ] Field Resolver で例外を投げても Exception Filter でキャッチされない
- [ ] [fieldResolverEnhancers](https://docs.nestjs.com/graphql/other-features#execute-enhancers-at-the-field-resolver-level)を有効にしたときのパフォーマンス
  - [ ] Root Resolver で普通なレスポンスサイズ
  - [ ] Root Resolver で巨大なレスポンスサイズ
  - [ ] Field Resolver で普通なレスポンスサイズ
  - [ ] Field Resolver で巨大なレスポンスサイズ
- [ ] resolver や service の戻り値を[ReturnType](https://www.typescriptlang.org/docs/handbook/utility-types.html#returntypetype)にできるか
