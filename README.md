# example-java-spring-boot-webapp

> Example web application on Java and Spring Boot

## Environment

- Java 17 (Preview: pattern matching for switch statements)
- Intellij IDEA 2022.2.3 (Ultimate Edition)

## Development

DB等の環境を構築する

```shell
docker compose down --rmi all --volumes --remove-orphans
docker compose up -d
docker container run -it --net=host redis redis-cli -h localhost
```

動作確認コマンド

```shell
curl -X GET -H 'Content-Type: application.json' -sS http://localhost:8080/api/users/v1/15 | jq
curl -X POST -H 'Content-Type: application/json' -sS http://localhost:8080/api/users/v1 --data '{"name": "alma"}' | jq
```

OpenAPIでAPIのI/Fを確認できます: [ReDoc](http://localhost:8080/docs)

## Warning

Docker containers password is hard-coded because this application is experimental and running on local machine. 
