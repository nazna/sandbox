# example-nodejs-graphql-tips

> Notes for GraphQL server tips

## Usage

Open GraphiQL and run the below query:

```graphql
{
  search(query: "test", limit: 2, offset: 0) {
    total
    places {
      placeId
      name
      reviews {
        reviewId
        score
        text
      }
    }
  }
}
```

## References

- [Node.js でのイベントループの仕組みとタイマーについて](https://hiroppy.me/blog/nodejs-event-loop/)
- [Node.js のイベントループの仕組みを整理する](https://hireroo.io/journal/tech/nodejs_event_loop)
- [graphql/dataloader のバッチの仕組みを理解する](https://hireroo.io/journal/tech/dataloader-how-batch-works)
- [graphql/dataloader を読んだ話](https://lyohe.github.io/blog/2021/12/16/reading-dataloader/)
- [Quickstart - OpenObserve](https://openobserve.ai/docs/quickstart/)
- [OpenTelemetry を使用して Node.js アプリケーションを計装する](https://azukiazusa.dev/blog/instrumenting-Node-js-applications-with-open-telemetry/)
