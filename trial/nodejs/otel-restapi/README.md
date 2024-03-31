# example-nodejs-otel-restapi

> Experimental project to learn OpenTelemetry with Fastify

## Notes

- Logs の設定方法について
  - Node.js では Logs は Experimental のため計装方法がまだ十分な資料がなさそう
  - https://github.com/open-telemetry/opentelemetry-js/blob/main/experimental/examples/logs/index.ts
  - api-logs を使って GlobalLoggerProvider にセットするのが基本っぽい
  - sdk-node の logRecordProcessor を設定することもできるが、実装内容は api-logs を使うのとほぼ同じ
    - https://github.com/open-telemetry/opentelemetry-js/blob/main/experimental/packages/opentelemetry-sdk-node/src/sdk.ts#L359
    - Resource を使い回すのが簡単
    - できればこっちを使うほうが良さそうだが、Logger をどうやって取り出すのか不明
      - LoggerProvider を別でインスタンス化してもよいのか？
  - timestamp, severityText, body, attributes を JSON でログ出力する必要があるが、だれがやるか
    - 開発中は stdout にほしい
    - 本番などでは stdout からとるシステムでもいいし、Collector に OTLP で送信しても良い
    - Logger.emit() にその責務を担わせるか、Logger が emit() と stdout をどっちもやるか
      - LogProcessor() が複数の Exporter を持てないから開発中に stdout でも OpenObserve でも確認するのが難しい
      - MultiLogRecordProcessor でいけるかも
    - PinoInstrument を使わないと span とか trace を失う気がする

## References

- [OpenTelemetry を使用して Node.js アプリケーションを計装する](https://azukiazusa.dev/blog/instrumenting-Node-js-applications-with-open-telemetry/)
- [Node.js アプリケーションを OpenTelemetry で計装してみる](https://zenn.dev/chot/articles/a37937b5dca703)
- [OpenObserve Documentation](https://openobserve.ai/docs/)
- [SigNoz](https://github.com/SigNoz/signoz)
- [Vunovati/pino-opentelemetry-transport](https://github.com/Vunovati/pino-opentelemetry-transport)
- [Vunovati/otlp-logger](https://github.com/Vunovati/otlp-logger)
- [Logs Data Model](https://opentelemetry.io/docs/specs/otel/logs/data-model/)
