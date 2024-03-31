# example-axum

> Example rust application with axum

## Development

データベース作成

```shell
sqlite3 ./database/sandbox.sqlite3 < ./database/ddl.sql
```

Rust/Cargo 使い方

- フォーマット: `cargo fmt`
- ビルド: `cargo build`
- 実行: `cargo run`

## Example usage

ユーザー全取得 200 OK

```shell
curl -X GET -H 'Content-Type: application/json' -sS localhost:3000/api/v1/users | jq
```

ユーザー単体取得 200 OK

```shell
curl -X GET -H 'Content-Type: application/json' -sS localhost:3000/api/v1/users/01FWB8FXR9DDVVARBT0K3E8X85 | jq
```

ユーザー単体取得 404 Not Found

```shell
curl -X GET -H 'Content-Type: application/json' -sS localhost:3000/api/v1/users/01FVPK6ZJ3S5BP4XHTBYE1F5D1 | jq
```

ユーザー作成 201 Created

```shell
curl -X POST -H 'Content-Type: application/json' -sS localhost:3000/api/v1/users -d '{"nickname": "Alice"}' | jq
```

ユーザー作成 400 Bad Request

```shell
curl -X POST -H 'Content-Type: application/json' -sS localhost:3000/api/v1/users -d '{"nickname": "abcdefghijklmnopqrstuvwxyzabcdefg"}' | jq
```

ユーザー編集 200 OK

```shell
curl -X PUT -H 'Content-Type: application/json' -sS localhost:3000/api/v1/users/01FWB8FXR9DDVVARBT0K3E8X85 -d '{"nickname": "Alma"}' | jq
```

ユーザー削除 200 OK

```shell
curl -X DELETE -H 'Content-Type: application/json' -sS localhost:3000/api/v1/users/01FWB8FXR9DDVVARBT0K3E8X85 -d '{"deleteReason": "ユーザー自身による削除"}' | jq
```

タスク作成 201 Created

```shell
curl -X POST -H 'Content-Type: application/json' -sS localhost:3000/api/v1/tasks -d '{"body": "Buy a coffee", "user_id": "01FWB8FXR9DDVVARBT0K3E8X85"}' | jq
```

## References

- [launchbadge/realworld-axum-sqlx](https://github.com/launchbadge/realworld-axum-sqlx)
- [CathalMullan/throwaway](https://github.com/CathalMullan/throwaway)
