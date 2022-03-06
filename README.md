# example-monorepo-app

> Example monorepo application

## Todos

- [ ] docker-compose を利用するように環境を変更する
- [ ] Bazel を導入する
  - [ ] [Bazel の解説（TS, Docker イメージ、リモートキャッシュ）](https://zenn.dev/kesin11/books/c86010deb5b8008f394f)
  - [ ] [jin/awesome-bazel](https://github.com/jin/awesome-bazel)
- [ ] ポート番号など共通で管理すべき config をまとめる
- [ ] Aggregator/Backend での Versioning を導入する
- [ ] [GraphQL Inspector](https://github.com/kamilkisiela/graphql-inspector) を GitHub Actions で導入する
- [ ] ヘルスチェック用のエンドポイントを各コンポーネントに作成する
- [ ] 分散トレーシングに対応する

## 実行環境

| component  | local          | container      |
| ---------- | -------------- | -------------- |
| database   | N/A            | 127.0.0.1:3306 |
| aggregator | localhost:8000 | localhost:3000 |
| frontend   | localhost:8010 | localhost:3010 |
| backend    | localhost:8020 | localhost:3020 |

## 設計

- サーバーサイドでは時刻は UTC で扱う
  - ただしログは Asia/Tokyo で出力する
- 簡単のためパスワード等の秘匿すべき情報をソースコードに直接記載する
  - Docker イメージにも焼かれる
- バリデーションルール
  - Backend ではデータベースの制限を満たすかどうか
  - 特定の文字しか受け付けないといった制限は Aggregator で実装する
- グローバルユニーク ID は `base64(${type}:${id})` とする

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

## 参考

- [Spring MVC Async vs Spring WebFlux](https://www.baeldung.com/spring-mvc-async-vs-webflux)
- [Spring MVC から Spring WebFlux へ](https://www.alpha.co.jp/blog/202105_02?utm_source=pocket_mylist)
- [Spring Boot 爆速パフォーマンスアップ](https://qiita.com/cypher256/items/347f86ba10075debe6e6)
- [VS Code の Remote Containers で Java 12 開発環境を構築](https://blog.kondoumh.com/entry/2019/09/22/100000)
- [IntelliJ+Docker で local を汚さず開発](https://qiita.com/darai0512/items/b3144e60c165d1810632)
- [VSCode で Java(Gradle)プロジェクトを作成して Docker コンテナ上で開発する](https://qiita.com/mfunaki/items/2c7169f6fa177b9b28fd)
