# example-monorepo-app

> Example monorepo application

## Todos

- [ ] Bazel を導入する
- [ ] ポート番号など共通で管理すべき config をまとめる
- [ ] Aggregator/Backend での Versioning を導入する
- [ ] [GraphQL Inspector](https://github.com/kamilkisiela/graphql-inspector) を GitHub Actions で導入する

## コンテナ実行

イメージをビルドする

```shell
$ docker image build --tag example-monorepo-app/database:latest ./database
$ docker image build --tag example-monorepo-app/backend:latest ./backend
```

ネットワークを作成する

```shell
$ docker network create example-monorepo-app-network
```

コンテナを起動する

```shell
$ docker container run --name database --publish 3306:3306 --network example-monorepo-app-network --detach --rm example-monorepo-app/database:latest
$ docker container run --name backend --publish 8082:8082 --network example-monorepo-app-network --detach --rm example-monorepo-app/backend:latest
```

不要なイメージやコンテナを削除する

```shell
$ docker system prune -a
```
