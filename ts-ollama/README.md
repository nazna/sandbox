# example-ollama

> Example of Node.js Ollama

## Usage

```sh
$ ollama serve &
$ node ./main.ts
```

### Results

DeepSeek-R1 は日本語での回答がだいぶ怪しいため英語のプロンプトで試す。

#### phi4:latest

- 日本語のプロンプトでもちゃんと認識するし、応答の日本語も問題ない
- 出力まで時間がかかる
- 一蘭は東京駅にはない、新橋駅が最寄りのはず

```
Certainly! Here are five ramen restaurants near Tokyo Station that cater to solo diners and remain open until late:

1. **Afuri (Tokyo Station Kyobashi Ichiba Branch)**
   - Known for its yuzu shio ramen.
   - Late-night menu available.
   - [Menu & Details](https://www.afuriramen.com/en/)

2. **Ichiran Ramen Tokyo Station**
   - Offers a unique solo dining experience in private booths.
   - Open until midnight or later, depending on the day.
   - Menu details can be found directly at their location.

3. **Ippudo Nishi-Azabu (inside Lumine Est Store)**
   - Famous for its tonkotsu ramen with a spicy kick.
   - Extended hours for late-night dining.
   - [Menu & Details](https://www.ippudou.co.jp/)

4. **Menya Musashi Tokyo Station**
   - Specializes in rich and flavorful miso ramen.
   - Open until around midnight.
   - Menu details available upon visit or via their website.

5. **Shin-Yoshi Ramen**
   - Offers a variety of tonkotsu ramen styles.
   - Accepts late reservations.
   - Check directly at the restaurant for menu specifics as online options are limited.

These restaurants provide a great experience for solo diners and have menus that can be enjoyed well into the night. Always check their current operating hours, especially around holidays or special events, as they may vary. Enjoy your ramen adventure!
```

#### DeepSeek-R1

- 日本語の入力は認識するようだが、日本語の応答はだいぶ怪しい
- phi4 に比べてかなり高速
- URL がほしいという要求に正確に応えているが東京駅の近くという条件を忘れてそう

```
Here are five ramen restaurants near Tokyo Station that may be open around midnight:

1. **Yatai Ramen - Ueno Station (Ueno Road, Bunkyo-ku)**
   - **Description**: A popular ramen spot with a variety of flavors and options for both takeout and delivery.
   - **Takeout/Delivery**: Yes
   - **Menu**: Visit their official website: [Yatai Ramen](https://www.yatairamen.com/en)

2. **Yatai Ramen - Shinjuku (1-31-82 Yatai Road, Shinjuku-ku)**
   - **Description**: Another branch known for its quality ramen and friendly service.
   - **Takeout/Delivery**: Yes
   - **Menu**: Visit their official website: [Yatai Ramen](https://www.yatairamen.com/en)

3. **Omoide Yatai (1-52-62 Yatai Road, Shinjuku-ku)**
   - **Description**: Specializes in young ramen with innovative dishes.
   - **Takeout/Delivery**: Yes
   - **Menu**: Visit their official website: [Omoide Yatai](https://www.omoideyatai.com/en)

4. **Yuki-Yatai (3-7568 Kitano, Bunkyo-ku)**
   - **Description**: Offers a modern take on ramen with a focus on quality and taste.
   - **Takeout/Delivery**: Yes
   - **Menu**: Visit their official website: [Yuki-Yatai](https://www.yukiyatai.com/en)

5. **Takahashi Ramen (3-8914 Kitano, Bunkyo-ku)**
   - **Description**: Known for its extensive menu and ramen variety.
   - **Takeout/Delivery**: Yes
   - **Menu**: Visit their official website: [Takahashi Ramen](https://www.takahashiramen.com/en)

These restaurants are conveniently located near Tokyo Station and offer both takeout and delivery options, making them ideal for dining out alone. Be sure to check their opening hours and availability on the respective websites or by contacting them directly if you plan to visit around midnight.
```

## Notes

- プロンプトは適当にしたが、ちゃんとシステムプロンプトも与えたうえでユーザープロンプトもちゃんと与えたほうがいいかも
- 言ってないのに phi4 は営業時間も教えてくれる、deepseek-r1 はテイクアウト・デリバリーも教えてくれる
  - プロンプトの意図としては営業時間を教えてくれるほうが嬉しいが、混んでるかどうかがほしい情報だと思う
- Google とかの検索エンジンでは場所語 1 つと目的語 1 つぐらいしか入力しない人が多いと思うが、チャット形式だとコンテキストを与えやすい
- Chroma を使って Embedding も試してみたいがまた今度にする

## References

- [Ollama を使って Llama3 をカスタマイズしてみた(初心者向け解説)](https://note.com/doerstokyo_kb/n/n27092ccc720c)
- [【ChatGPT× グルメ】ChatGPT に予約可能な飲食店を選んでもらった](https://note.com/discovery_ai/n/nc657fc7ce8b9)
- [【総務部 OL】ランチ決めに役立つ ♪ 美味しいランチを探すプロンプト](https://chapro.jp/prompt/18793)
- [Chroma](https://www.trychroma.com/)
