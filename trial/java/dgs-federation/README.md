# example-java-dgs-federation

> Experimental project for DGS GraphQL Federation

## Usage

SubGraph をまとめあげて SuperGraph を作成する。

```shellscript
$ rover supergraph compose --config ./supergraph.yaml --output ./supergraph.graphql
```

devcontainer を立ち上げて `place-api` と `review-api` を起動したら http://localhost:8080/ を開く。

```graphql
query ExampleQuery {
  places {
    placeId
    name
    createdAt
    reviews {
      reviewId
      body
      createdAt
    }
  }
}
```

## Todo

- DGS Codegen の適切な使い方が分からない

## References

- [Federation - DGS Framework](https://netflix.github.io/dgs/federation/)
- [Apollo Router Docker Image](https://github.com/apollographql/router/pkgs/container/router)
- [node-gradle/gradle-node-plugin](https://github.com/node-gradle/gradle-node-plugin)
- [Data Loaders (N+1)](https://netflix.github.io/dgs/data-loaders/)
- [Using Data Loaders with Apollo Federation](https://medium.com/volvo-car-mobility-tech/using-data-loaders-with-apollo-federation-f21260e3abd1)
