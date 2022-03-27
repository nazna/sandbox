# example-golang-echo

> Example golang application with Echo, sqlc and zerolog

## Environment

- WSL 2 on Windows 11
- Visual Studio Code 1.64.2
- Golang 1.17.6
- Echo v4

## Development

```shell
go run ./src/main.go
```

## Todos

- [ ] Enable devcontainer
- [ ] Associate rz
- [ ] Introduce task runner

## Examples

Find a user

```shell
curl -X GET -H 'Content-Type: application/json' -sS localhost:8080/api/users/1 | jq
```

Create a user

```shell
curl -X POST -H 'Content-Type: application/json' -sS localhost:8080/api/users -d '{"name": "Alma"}' | jq
```

## Memo

```sql
CREATE OR REPLACE FUNCTION function_users_updated_at() RETURNS opaque AS '
  BEGIN
    new.updated_at := ''now'';
    return new;
  END;
' LANGUAGE 'plpgsql';

CREATE OR REPLACE TRIGGER trigger_users_updated_at BEFORE UPDATE
  ON users FOR EACH row EXECUTE PROCEDURE function_users_updated_at();
```

## References

- [sqlc Documentation](https://docs.sqlc.dev/en/latest/index.html)
- [7oh2020/go-rest-api-example](https://github.com/7oh2020/go-rest-api-example)
- [ryokky59/go-layered-architecture-sample](https://github.com/ryokky59/go-layered-architecture-sample)
- [ulwlu/go-cleanarchitecture-apiserver](https://github.com/ulwlu/go-cleanarchitecture-apiserver)
- [Goで書けるタスクランナーMageが快適すぎて捗る](https://qiita.com/townewgokgok/items/faad9327927947646a23)
- [Go の命名規則](https://micnncim.com/posts/ja/go-naming-convention)
- [【Go】Echo エラー処理を実装する](https://kimagureneet.hatenablog.com/entry/2017/10/24/010329)
- [mori-dev/app_error.go](https://gist.github.com/mori-dev/0ae89dc0918d2b1c644d34dbee29b408)
- [Go言語 - enumを定義する](https://blog.y-yuki.net/entry/2017/05/09/000000)
- [goで文字列ベースのenumの定義はこんな感じが良いかもしれない](https://pod.hatenablog.com/entry/2020/05/02/030634)
