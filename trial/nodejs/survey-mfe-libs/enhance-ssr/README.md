# Enhance SSR

## Notes

- TypeScript サポートが貧弱 (SSR パッケージに型定義がない)
- EnhanceElemFn が同期なのでルーティングレベルでしか外部情報を取得できない
- MFE として HTML を返すことはできるが、style 要素が消失する
  - [Enhance DSD](https://github.com/enhance-dev/enhance-dsd)で対策できるかも
- この HTML 文字列として埋め込む方法で XSS の危険性がないのか？
- Render Function を使うとどうなるのか、Event Handler 使えるのか
  - 使えなさそう、そりゃ Hydrate してないからそうか
