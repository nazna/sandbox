# Flue

> TypeScript + Flue

## Notes

- ワークフローが決まっているなら Flue で実装して呼びだす形が正確でよさそう
- Hermes や Skills でも可能だろうが安定しそう
- [Pi Coding Agent](https://pi.dev/models?provider=nvidia) からモデルを探す
  - Pi は Nvidia NIM のモデルのサポートが限定的
  - Pi は Provider ごとに API_KEY の prefix が定められている
- Zed でも開発は快適にできる
  - Pi は ACP に対応しているため、その点は VSCode よりも快適
  - ただし一部の Extension は ACP 未対応でエラーになる
  - 完全に自作するか Terminal Threads を活用する

## References

- [Flue — The Open Agent Framework](https://flueframework.com/)
- [AI エージェントフレームワーク Flue を試してみた](https://azukiazusa.dev/blog/ai-agent-framework-flue)
