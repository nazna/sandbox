# example-spring-boot-otel

> Spring Boot + OpenTelemetry

## Notes

| name          | origin                                    |
| ------------- | ----------------------------------------- |
| Application   | http://localhost:8080/?q=ark              |
| pgweb         | http://localhost:8081                     |
| MinIO API     | http://localhost:8082                     |
| MinIO Console | http://localhost:8083                     |
| Comment API   | http://localhost:8084/comment?id=1&id=222 |

```shell
$ docker compose up -d
$ docker compose down --rmi all --volumes --remove-orphans
```

WinterJS で Fake Comment API を動かそうと思ったけれどちょっと面倒かも。
普通に Node.js で動かす。

Development Containers の localhost には `http://host.docker.internal:8080` でアクセスできるが今回は関係ない。

## References

- OpenTelemetry
  - [Java | OpenTelemetry](https://opentelemetry.io/docs/languages/java/)
  - [Spring Boot starter / Getting started](https://opentelemetry.io/docs/zero-code/java/spring-boot-starter/getting-started/)
  - [Manage Telemetry with SDK](https://opentelemetry.io/docs/languages/java/sdk/)
  - [Observability Support](https://docs.spring.io/spring-framework/reference/integration/observability.html)
  - [OpenTelemetry Collector でアプリの Metric/Trace/Log を Grafana に連携する](https://qiita.com/tbt_atsu/items/cc96cd845d4852d18aa7)
  - [Spring Boot 3 でオブザーバビリティが強化されたそうなのでこの期にまとめて触ってみる](https://qiita.com/s-ota/items/49a9ec13f19fd10b3a5b)
  - [OpenTelemetry による計装と OpenTelemetry Collector について調べてみた](https://sreake.com/blog/opentelemetry-instrumentation/)
  - [Spring Boot Actuator × Micrometer Tracing × OpenTelemetry でトレーシング](https://kazuhira-r.hatenablog.com/entry/2023/11/03/234914)
  - [Spring Boot Actuator と Grafana Stack が連携できるように設定する](https://zenn.dev/kazokmr/scraps/3ad22721062367)
  - [Spring Boot アプリケーションにおけるメトリクスの取り方の基本](https://engineering.linecorp.com/ja/blog/metrics-capture-spring)
- Grafana
  - [AGPL が適する場所、適さない場所](https://future-architect.github.io/articles/20220929a/)
  - [Run Grafana Docker image](https://grafana.com/docs/grafana/latest/setup-grafana/installation/docker/)
    - おそらく grafana/grafana と grafana/grafana-oss は同じ
  - [Grizzly と Grafonnet で始める Grafana Dashboards as Code](https://dasalog.hatenablog.jp/entry/2024/07/16/100252)
  - [Grafana のダッシュボードを grafonnet を使って管理する](https://44smkn.hatenadiary.com/entry/2021/02/07/160107)
  - [grafana/intro-to-mltp](https://github.com/grafana/intro-to-mltp)
  - [テレメトリーを関連付けて Grafana で Metrics から Trace にジャンプする](https://zenn.dev/k6s4i53rx/articles/otel-trace-exemplar-grafana)
  - [OpenTelemetry と Grafana で Logs と Metrics と Traces を接続する](https://qiita.com/hir00/items/1339f81ffba155195e17)
  - [Grafana で Dashboard と DataSource の設定をファイルで管理する[Configuration as Code]](https://zenn.dev/ring_belle/articles/grafana-cac-docker)
  - [ridakaddir/java-Observability-using-OpenTelemetry-Tempo-and-Loki](https://github.com/ridakaddir/java-Observability-using-OpenTelemetry-Tempo-and-Loki)
  - [Pratap22/open-telemetry](https://github.com/Pratap22/open-telemetry)
  - [grafana/config/datasources.yml](https://github.com/nunchistudio/docker-opentelemetry/blob/main/grafana/config/datasources.yml)
- Grafana Beyla
  - eBPF で自動計装するらしい
  - [Grafana Beyla](https://grafana.com/docs/beyla/latest/)
  - [Run Beyla as a Docker container](https://grafana.com/docs/beyla/latest/setup/docker/)
- Grafana Alloy
  - OpenTelemetry Collector Compatible な代替実装らしい
  - [Grafana Alloy](https://grafana.com/docs/alloy/latest/)
  - [Run Grafana Alloy in a Docker container](https://grafana.com/docs/alloy/latest/set-up/install/docker/)
  - [Use Grafana Alloy to send logs to Loki](https://grafana.com/docs/alloy/latest/tutorials/send-logs-to-loki/)
  - [Collect OpenTelemetry data and forward it to any OpenTelemetry-compatible endpoint](https://grafana.com/docs/alloy/latest/collect/opentelemetry-data/)
- WebAssembly
  - [Docker ＋ Wasm で WASM をコンテナとして実行する](https://developer.mamezou-tech.com/blogs/2023/01/25/using-wasm-on-docker/)
  - [Wasm workloads (Beta)](https://docs.docker.com/desktop/wasm/)
- Docker Compose
  - [Docker で Node.js を動かすときのベストプラクティス](https://blog.shinonome.io/nodejs-docker/)
  - [distroless/nodejs](https://github.com/GoogleContainerTools/distroless/blob/main/nodejs/README.md)
- VSCode
  - [JDK Requirements](https://github.com/redhat-developer/vscode-java/wiki/JDK-Requirements)
- PostgreSQL
  - [Monitoring PostgreSQL Performance using OpenTelemetry](https://uptrace.dev/get/monitor/opentelemetry-postgresql.html)
- Misc
  - [Faker](https://fakerjs.dev/)
