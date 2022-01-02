# backend

> Backend of example monorepo application

## 環境構築

- macOS Monterey 12.0.1
- Java 17 (Temurin 17)
- IntelliJ IDEA 2021.3 (Ultimate Edition)
- Docker 20.10.11

### Intellij IDEA

- Annotation Processor を有効にする
- Editor > Code Style > Kotlin で以下の設定をする
  - Top-Level Symbols で Use single name import を選択する
  - Java Statics adn Enum Members で Use single name import を選択する

## 動作確認

ユーザー作成

```shell
$ curl -X POST -H 'Content-Type: application/json' -sS http://localhost:8082/api/v1/users --data '{}'
```
