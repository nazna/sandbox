# example-rust-async-graphql

> Rust + async-graphql + sqlx

## Usage

```shellscript
$ sqlite3 database/sandbox.sqlite3 < database/schema.sql
$ sqlite3 database/sandbox.sqlite3 < database/dml.sql
$ cargo clippy
$ cargo run
$ open http://localhost:8080
```

## Queries and Mutations

```grahpql
{
  node(id: "User_1") {
    ... on User {
      userId
      username
      createdAt
      updatedAt
    }
  }
  user(userId: 1) {
    id
    userId
    username
    createdAt
    updatedAt
  }
  task(taskId: 1) {
    id
    taskId
    userId
    body
    isCompleted
    createdAt
    updatedAt
  }
}
```

## References

- [bkonkle/rust-example-caster-api](https://github.com/bkonkle/rust-example-caster-api)
- [Rust の新しい HTTP サーバーのクレート Axum をフルに活用してサーバーサイドアプリケーション開発をしてみる](https://blog-dry.com/entry/2021/12/26/002649)
