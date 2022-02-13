# example-axum

> Example rust application with axum

## Development

データベース作成

```shell
sqlite3 sandbox.sqlite3 < ./database/ddl.sql
```

## Example usage

ユーザー単体取得

```shell
curl -X GET -H 'Content-Type: application/json' -sS localhost:3000/api/v1/users | jq .
```

ユーザー作成

```shell
curl -X POST -H 'Content-Type: application/json' -sS localhost:3000/api/v1/users -d '{"nickname": "Alice"}' | jq .
```

ユーザー編集

```shell
curl -X PUT -H 'Content-Type: application/json' -sS localhost:3000/api/v1/users -d '{"id": "01FVPK6ZJ3S5BP4XHTBYE1F5D1", "nickname": "Alma"}' | jq .
```

ユーザー削除

```shell
curl -X GET -H 'Content-Type: application/json' -sS localhost:3000/api/v1/tasks | jq .
```

タスク作成

```shell
curl -X POST -H 'Content-Type: application/json' -sS localhost:3000/api/v1/tasks -d '{"body": "Alice", "user_id": "01FVPK6ZJ3S5BP4XHTBYE1F5D1"}' | jq .
```

## References

- [launchbadge/realworld-axum-sqlx](https://github.com/launchbadge/realworld-axum-sqlx)
