# example-monorepo-app

> Example monorepo application

## Todos

- [ ] docker-compose を利用するように環境を変更する
- [ ] Bazel を導入する
- [ ] ポート番号など共通で管理すべき config をまとめる
- [ ] Aggregator/Backend での Versioning を導入する
- [ ] [GraphQL Inspector](https://github.com/kamilkisiela/graphql-inspector) を GitHub Actions で導入する
- [ ] ヘルスチェック用のエンドポイントを各コンポーネントに作成する
- [ ] 分散トレーシングに対応する

## 実行環境

| component  | local          | container      |
|------------|----------------|----------------|
| database   | N/A            | 127.0.0.1:3306 |
| aggregator | localhost:8000 | localhost:3000 |
| frontend   | localhost:8010 | localhost:3010 |
| backend    | localhost:8020 | localhost:3020 |

## 設計

- サーバーサイドでは時刻は UTC で扱う
  - ただしログは Asia/Tokyo で出力する
- 簡単のためパスワード等の秘匿すべき情報をソースコードに直接記載する
  - Docker イメージにも焼かれる

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
$ docker container run --name backend --publish 3020:8020 --network example-monorepo-app-network --detach --rm example-monorepo-app/backend:latest
```

不要なイメージやコンテナを削除する

```shell
$ docker system prune -a
```
