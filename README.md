# example-java-spring-boot-webapp

> Example web application on Java and Spring Boot

## Environment

- Java 17 (Preview: pattern matching for switch statements)
- Intellij IDEA 2022.2.3 (Ultimate Edition)

## Design

- Lombokを使わない
- 認証・認可は考えない
- ReDocでOpenAPIを提供する
- Spring Webfluxを採用する

## Development

DB等の環境を構築する

```shell
docker compose down --rmi all --volumes --remove-orphans
docker compose up -d
docker container run -it --net=host redis redis-cli -h localhost
```

動作確認コマンド

```shell
curl -X GET -H 'Content-Type: application.json' -sS http://localhost:8080/api/users/v1/7 | jq
curl -X POST -H 'Content-Type: application/json' -sS http://localhost:8080/api/users/v1 --data '{"name": "alma"}' | jq
```

OpenAPIでAPIのI/Fを確認できます: [ReDoc](http://localhost:8080/docs)

## Warning

Dockerコンテナにパスワードがハードコーディングされているのは、本アプリケーションが実験用でローカルマシン環境でしか動作しない想定のためです
