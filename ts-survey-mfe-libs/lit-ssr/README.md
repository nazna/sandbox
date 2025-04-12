# Lit SSR

## Notes

- import-a-module-for-side-effects-only で LitElement を継承したクラスを読み込む必要がある
- client 用のビルドが必要だが、宣言的 Shadow DOM に自動でアタッチされる
- server 用ビルドで固定で import してるが dynamic import にすればリクエストタイムでマイクロフロントエンドできるか？
  - HTML 返すときに読み込む client 用の LitElement は動的に必要なものだけ組み立てられる
    - client.ts の Hydration じゃない script
  - server 用の import がたぶん dynamic import でもダメそう
    - utils.ts のやつ
    - いや、URL 指定で読み込めばいけるかも
  - 固定で読み込むとビルドタイムの内容しか反映できなくてデプロイが密結合になるから意味ないはず
  - vm module 使えば安全に評価できるか？
- SSR 用のスクリプトを読み込まないとレスポンスできないなら HTML Streaming できないのかな

## References

- [Dynamic import with HTTP URLs in Node.js](https://dev.to/mxfellner/dynamic-import-with-http-urls-in-node-js-7og)
