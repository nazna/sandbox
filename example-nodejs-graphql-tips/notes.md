## はじめに

実践で使ってない想像での知識が多分に含まれます。

## Code First vs Schema First

Schema First では生成されるのは型定義になるのでロジックをもたせることができない。
そのため GraphQL Schema とは別にドメインクラスを用意する対策が考えられるが、ほぼ二重定義になってしまう。

### Visibiliy

Schema First では基本的には特定のフィールドを型定義はするがアクセスさせたくないということが難しい。

## Error handling

## Nullability

## Logging

## Security

### Query Depth Limitation

### Disable GraphiQL

### Disable Introspection

- ここまでやっても推測は可能なので、完全に防ぎたいなら Persisted Query しかない

## Versioning

## さいごに

探せば書籍もインターネットの記事もたくさんありますので、より興味のある方

## Misc

### @stream, @defer directives

## References

- [Production Ready GraphQL](https://book.productionreadygraphql.com/)
- [GraphQL を導入する時に考えておいたほうが良いこと](https://engineering.mercari.com/blog/entry/20220303-concerns-with-using-graphql/)
- [Shopify GraphQL Design Tutorial](https://github.com/Shopify/graphql-design-tutorial)
