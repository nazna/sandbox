# example-java-spring-graphql

> Experimental project for Spring GraphQL

## Usage

API Key を確認する。

```shellscript
$ curl -X GET -H 'Content-Type: application/json' -H 'Authorization: Bearer this-is-a-meilisearch-secret-key' 'http://localhost:8081/keys' | jq
```

インデックスを作成する。

```shellscript
$ curl -X POST -H 'Content-Type: application/json' -H 'Authorization: Bearer this-is-a-meilisearch-secret-key' 'http://localhost:8081/indexes' --data-binary '{ "uid": "items", "primaryKey": "itemId" }'
```

ドキュメントを追加する。

```shellscript
$ curl -X POST -H 'Content-Type: application/json' -H 'Authorization: Bearer this-is-a-meilisearch-secret-key' 'http://localhost:8081/indexes/items/documents' --data-binary '{ "itemId": "1", "name": "alma" }'
```

## Notes

devcontainer 内で localhost にアクセスすることはできません。  
`http://localhost:8080` を `http://host.docker.internal:8080` でアクセスできます。

## References

- [Meilisearch Documentation](https://www.meilisearch.com/docs)
