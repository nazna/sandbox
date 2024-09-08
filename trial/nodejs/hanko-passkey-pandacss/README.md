# example-hanko-passkey-pandacss

> Example Hanko + Panda CSS

## Notes

Run containers for development

```shell
$ docker compose down --rmi all --volumes --remove-orphans
$ docker compose up -d
```

Run the application for development

```shell
$ npm install
$ npm run dev
```

Environments for development

| name                    | origin                |
| ----------------------- | --------------------- |
| Frontend                | http://localhost:8080 |
| Hanko Public API        | http://localhost:8081 |
| Hanko Admin API         | http://localhost:8082 |
| pgweb (Postgres Web UI) | http://localhost:8083 |
| Mailpit (Web UI)        | http://localhost:8084 |

## References

- [Hanko](https://www.hanko.io/)
  - [docker-compose/base.yaml](https://github.com/teamhanko/hanko/blob/main/deploy/docker-compose/base.yaml)
  - [examples/react](https://github.com/teamhanko/hanko/tree/main/frontend/examples/react)
  - [examples/express](https://github.com/teamhanko/hanko/tree/main/frontend/examples/express)
- [Hanko を使ってパスキーを使った指紋認証を Web で試してみる](https://zenn.dev/voicy/articles/5a12524c38f5cb)
- [葉桜の季節に君へルーティングライブラリ wouter を紹介するということ](https://zenn.dev/uttk/articles/introduction-of-wouter)
- [Mailpit](https://mailpit.axllent.org/)
- [Panda CSS](https://panda-css.com/)
- [Mitosis](https://mitosis.builder.io/)
