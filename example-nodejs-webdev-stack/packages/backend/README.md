# backend

> Backend with Express.js

## Todos

- [ ] Category `faker.hacker.verb()` を Books に追加する
- [ ] 画像系を Unsplash に変更する
- [ ] `/v1/authors` で `bookIds` を返すようにする
- [ ] `/v1/books` と `/v1/authors` の Response を `total` を含む `Books` に変更する
- [ ] 更新系 API を実装する (POST and PUT)
- [ ] [Winston](https://github.com/winstonjs/winston) などの Logger を導入する

## APIs

- [[GET] /v1/books](http://localhost:5000/v1/books)
  - Return books `Book[]`
  - `limit` and `offset` query is available
    - The default value for `limit` is 10
    - The default value for `offset` is 0
- [[GET] /v1/books/:bookId](http://localhost:5000/v1/books/1)
  - Return a book `Book`
- [[GET] /v1/authors](http://localhost:5000/v1/authors)
  - Return authors `Author[]`
  - `limit` and `offset` query is available
    - The default value for `limit` is 10
    - The default value for `offset` is 0
- [[GET] /v1/authors/:authorId](http://localhost:5000/v1/authors/1)
  - Return a author `Author`

## Models

### Book

```typescript
type Book = {
  bookId: number
  authorId: number
  title: string
  image: string
  publishedAt: string
}
```

### Author

```typescript
type Author = {
  authorId: number
  name: string
  avatar: string
}
```
