# example-otel-mlt

> OpenTelemetry Metrics, Logs and Traces

## Usage

```sh
$ docker compose up -d
$ docker compose run --rm -T k6 run /etc/k6/k6.js
$ docker compose down --rmi all --volumes --remove-orphans
```

| component               | url                                  | exposed |
| ----------------------- | ------------------------------------ | ------- |
| Dice                    | http://localhost:8080/dice?id=1      | true    |
| Amplifier               | http://localhost:3000/amplifier?id=1 | false   |
| Grafana                 | http://localhost:8081                | true    |
| Mimir                   | http://mimir:9009/otlp               | false   |
| Loki                    | http://loki:3100/otlp                | false   |
| Tempo                   | http://tempo:3200                    | false   |
| OpenTelemetry Collector | http://opentelemetry-collector:4318  | false   |
| Postgres                | postgresql://postgres:5432/sandbox   | false   |

## Memo

- xk6 を使って OTLP 形式で負荷テスト結果を出力できる
  - Docker イメージは提供されてないみたいなので専用バイナリを出力して実行する形にするしかなさそう
  - 今度やってみる
