# ts-mcp-server

> MCP Server with TypeScript SDK

## Notes

以下の 2 つのツールを実装し、MCP Host から実行できるか検証する。

- current_time
- uuid

MCP Host には CLI から使えるのがよいので以下の 2 つを試す。

- oterm
- gptme

MCP Server が正しく実装できてるか確認する。

```sh
$ npx @modelcontextprotocol/inspector node main.ts

Tool Result: Success
```

実際に使ってみる。

```sh
$ ollama serve

$ ollama run gemma3
$ ollama run qwen3

$ vim ~/.local/share/oterm/config.json
$ uvx oterm

> what time is it now?

> <thought\>
> Okay, the user asked, "what time is it now?" I called the current_time function, and the response was 2025-05-06T11:06:41.516Z. Now I need to present this time in a user-friendly format. Let me check the time zone. The response seems to be in UTC since it's in ISO 8601 format without a time zone offset. But maybe the user wants their local time. Wait, the original query didn't specify, so maybe I should just provide the UTC time as given. Alternatively, perhaps I should convert it to the user's local time. But since I don't have information about the user's location, it's safer to provide the UTC time. Let me format the date and time properly. The current time is May 6, 2025, at 11:06:41 UTC. I'll present it like that.
> </thought\>

The current time is **May 6, 2025, 11:06:41 UTC**.
```

どうやらモデルが Gemma 3 だと Tools を選択できない。
Qwen3 だと選択できるのでモデルによるっぽい。

UUID もちゃんと Tools を呼び出して生成できることをログから確認できた。

一応 gptme も試してみたが、たぶん有料モデルを選択しないとダメっぽい。

```sh
$ vim ~/.config/gptme/config.toml
$ uvx gptme
```

これで動くはずだが Google AI Studio で使えるので Gemini で試すと Gemini 1.5 Flash しか使えない。
Gemini 2.0 Flash Thinking もあるはずだがエラーになる。

Gemini 1.5 Flash だと MCP Server を認識しないようで現在時刻を取得する Python のコードとかを提案するだけ。

## References

- [Ollama で実装する無料 MCP Agent](https://zenn.dev/sora_kumo/articles/ollama-mcp-agent)
- [gemma3](https://ollama.com/library/gemma3)
- [qwen3](https://ollama.com/library/qwen3)
