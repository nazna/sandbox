# example-spring-modulith

> Experimental project of Spring Modulith

## Environment

- Java 19
- Intellij IDEA 2022.3 (Ultimate Edition)

## Development

### エディターを設定する

### DB等の環境を構築する

```shell
docker compose down --rmi all --volumes --remove-orphans
docker compose up -d
docker container run -it --net=host redis redis-cli -h localhost
```

### 動作確認コマンド

```shell
curl -X GET -H 'Content-Type: application.json' -sS http://localhost:8080/api/users/v1/7 | jq
curl -X POST -H 'Content-Type: application/json' -sS http://localhost:8080/api/users/v1 --data '{"name": "alma"}' | jq
```

OpenAPIでAPIのI/Fを確認できます: [OpenAPI](http://localhost:8080/openapi.html)

## Todo

- [ ] Gradle multi-projectを利用して apps/api, apps/tool, apps/batch を作成する
- [ ] GitHub ActionsのCICDを作成する
    - [ ] 複数のprojectを1つのPRで変更しないように検知する
    - [ ] 変更のあったprojectのみデプロイする
- [ ] Eventによるmodule間の連携を実装する
    - [ ] likeの更新があればuserのいいね数をpub/subで更新する
    - [ ] user, articleの更新があればsearchの全文検索インデックスをpub/subで更新する
- [ ] 管理者用ツールを [refine](https://github.com/refinedev/refine)
  か [react-admin](https://github.com/marmelab/react-admin) で作成する

## Warning

Dockerコンテナにパスワードがハードコーディングされているのは、本アプリケーションが実験用でローカルマシン環境でしか動作しない想定のためです

## Reference

- [Gradle/Kotlinで開発する私的ベストプラクティス2022](https://blog.kengo-toda.jp/entry/2022/02/06/122835)
- [Spring Modulith でモジュラモノリスなアプリの構造を検証してみた](https://acro-engineer.hatenablog.com/entry/2022/12/09/170000)