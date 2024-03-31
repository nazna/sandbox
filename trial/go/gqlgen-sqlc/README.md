# example-gqlgen-sqlc

> Experimental project to learn golang with gqlgen and sqlc

## Warning

DO NOT USE THIS IN PRODUCTION.

- GraphQL Instrospection が有効になっています
- GraphQL Playground (GraphiQL) が有効になっています
- 不正なクエリのエスケープを行っていません
- 入力のバリデーションを行っていません
- 私は Go 言語は初心者です

## Todos

- [ ] `@deprecated` ディレクティブのフィールド使用ログの出力を実装してみる
- [ ] Field Resolver を実装してみる
- [ ] dataloader を実装してみる
- [ ] Custom Scalar を実装してみる
- [ ] 入力のバリデーションを実装する
- [ ] 認証・認可を実装する
- [ ] 更新系の実装時に sqlite のトリガーを作成する

## Development

```shellscript
sqlite3 sandbox.sqlite3 < ./database/schema.sql
sqlite3 sandbox.sqlite3 < ./database/dml.sql
sqlite3 -column -header sandbox.sqlite3 'SELECT * FROM user;'
go run github.com/99designs/gqlgen generate
sqlc generate
```

## Usage

```graphql
query QueryUserSuccess {
  user(userId: "1") {
    id
    userId
    username
    createdAt
    updatedAt
  }
}

query QueryUserNotFound {
  user(userId: "99") {
    id
    userId
    username
  }
}

query QueryUserBadRequest {
  user(userId: "abc") {
    id
    userId
    username
  }
}
```

## References

- [99designs/gqlgen](https://github.com/99designs/gqlgen)
- [kyleconroy/sqlc](https://github.com/kyleconroy/sqlc)
