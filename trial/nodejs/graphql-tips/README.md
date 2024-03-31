# GraphQL サーバーサイド編

## 概要

GraphQL でサーバーサイドの開発を行う際のスキーマ設計や実装に役立つかもしれない知識をまとめます。

## GraphQL とは

GraphQL はグラフ構造のデータから任意の形でデータを取り出すための Query Language です。
静的型付けなのでクエリ実行前にスキーマに対して正しいかどうかを検証でき、得られるデータがどのような形かを規定できます。
また従来の REST API はユースケースをサーバー側が決定するのに対し、GraphQL ではクライアント側がユースケースを決定します。

```graphql
type Query {
  review(id: ID!): Review
}

type Review {
  id: ID!
  score: Float!
}
```

このような GraphQL スキーマが定義されているとき、適切に Resolver を実装すれば以下のようなレスポンスが得られます。

```json
{
  "data": {
    "review": {
      "id": "1",
      "score": 4.5
    }
  }
}
```

以下では GraphQL のリファレンス実装である[graphql-js](https://github.com/graphql/graphql-js)をもとに記載します。
他のプログラミング言語でも基本的な考え方は同じです。

ここでは説明しませんが、GraphQL を実際に触るときは基本的には Meta 社が開発する[Relay](https://relay.dev/)に従うのが良いです。
冗長に感じられる部分はカスタマイズして良いと思いますが、GraphQL のパフォーマンスを最大限発揮するにはクライアントサイドでのキャッシュや Fragment Colocation を考慮する必要があるため、ある程度 Relay の GraphQL Relay Specification に則るのが良さそうです。
具体例が欲しい場合は GitHub GraphQL API v4 が非常に参考になります。

## 開発

GraphQL の開発においてこれを知っておくとよいという点についてまとめます。
ほとんど[Production Ready GraphQL](https://book.productionreadygraphql.com/)や Relay Server Specification の内容と同じです。

### Code First vs. Schema First

[Pothos](https://github.com/hayes/pothos)や[gqtx](https://github.com/sikanhe/gqtx)を使うとコードから GraphQL スキーマを生成できます。
このような方法は Code First と呼ばれます。

```javascript
builder.queryType({
  fields: (t) => ({
    hello: t.string({
      resolve: () => "Hello, world!",
    }),
  }),
});
```

上記のコードからは次のような GraphQL スキーマが得られます。

```graphql
type Query {
  hello: String!
}
```

一方で以下のような GraphQL のスキーマ定義を用意して、対応する Resolver を実装する方法は Schema First と呼ばれます。

```graphql
type Query {
  hello: String!
}
```

```javascript
const resolvers = {
  Query: {
    hello: () => "Hello, world!",
  },
};
```

どちらかが優れてると一概に判断することは難しいです。
私は Schema First しか開発したことがないですが、一長一短あるように思います。

Code First では何もせずとも必ずスキーマと実装の型が安全であることが保証されますが、Schema First でも GraphQL Code Generator により同様の恩恵を受けられます。

強いて言えば Schema First では公開したくないフィールドを定義できないという点があげられそうですが、スキーマ設計次第ではとくにデメリットではないはずです。

Schema First でコードを生成する場合、生成した ObjectType にロジックをもたせることができません。
ObjectType を Class として扱い、メソッドを実装したい・コンストラクタを変更したいという場合は Schema First では工夫が必要になります。

GraphQL に限りませんがどういった I/F にするかといった設計が大事です。

### グラフ構造にする

GraphQL では ID 参照を用いた構造化ではなく、直接参照でグラフ構造を定義しましょう。

以下のようなスキーマでは複数回のリクエストが必要になってしまいます。

```graphql
type Query {
  review(id: ID!): Review
  place(id: ID!): Place
}

type Review {
  id: ID!
  score: Int!
  placeId: ID!
}

type Place {
  id: ID!
  name: String!
}
```

以下のようにスキーマ定義すれば一度のリクエストで必要なデータを取得できます。

```graphql
type Query {
  review(id: ID!): Review
}

type Review {
  id: ID!
  score: Int!
  place: Place
}

type Place {
  id: ID!
  name: String!
}
```

`Review` だけ必要な場合は次のようなクエリでリクエストすれば良いです。
このとき Resolver はフィールド単位で解決するため、不要な `Place` の取得は行われないです。

```grahpql
query ReviewOnlyOp {
  review(id: "1") {
    id
    score
  }
}
```

### Nullability

GraphQL のフィールドはデフォルトで Nullable ですが、３つの意味を持ちます。

- そのフィールド自体が値として null になりうる
- そのフィールド自体が値として null になりえない
- 値としては null になりえないが、エラー等で null になりえる

1 つ目の 2 つ目については他のプログラミング言語でも特に変わりないと思いますが、3 つ目については GraphQL の特徴です。

```graphql
type Query {
  review(id: ID!): Review
}

type Review {
  id: ID!
  score: Float!
  place: Place
}

type Place {
  id: ID!
  name: String!
}
```

`Review.place` が nullable になっているスキーマ定義で `Review.place` の取得に利用する API がエラーを返した場合どうなるでしょうか？
`Query.review` は別 API で正常に取得できているものとします。

```graphql
query TestOp {
  review(id: "0") {
    id
    score
    place {
      id
      name
    }
  }
}
```

```json
{
  "errors": [
    {
      "message": "Place取得でエラーが発生しました",
      "locations": [
        {
          "line": 6,
          "column": 7
        }
      ],
      "path": ["review", "place"]
    }
  ],
  "data": {
    "review": {
      "id": "0",
      "score": 3.8,
      "place": null
    }
  }
}
```

`review` には取得できたデータはレスポンスされていますが、エラーとなった `place` は null になります。
また `errors` という項目もレスポンスされます。

このため正常に取得できた部分のみを表示するし、エラーになった部分は表示しない・エラーダイアログを出すなどの実装が行なえます。

一方で Non-Null にした場合はどうでしょうか？

```graphql
type Query {
  review(id: ID!): Review
}

type Review {
  id: ID!
  score: Float!
  place: Place!
}

type Place {
  id: ID!
  name: String!
}
```

```json
{
  "errors": [
    {
      "message": "Place取得でエラーが発生しました",
      "locations": [
        {
          "line": 6,
          "column": 7
        }
      ],
      "path": ["review", "place"]
    }
  ],
  "data": {
    "review": null
  }
}
```

`review` の情報は取得できているのに、それらのデータを一切参照できません。
このようにエラーをその ObjectType に閉じ込める性質があります。

一般的にはプリミティブ型になるフィールドは Non-Null、Field Resolver で解決されるフィールドは Nullable にするのが良さそうだと思います。
Non-Null なフィールドから Nullable にすると破壊的変更になってしまい、現実的にはそのような変更を行うことは困難です．

また何かしらエラーが発生した場合は何も表示せずにすべてエラーにしてしまうという挙動を強制したい場合は、その限りではないので要件に合う方法を考えることが大切です。

### エラーハンドリング

個別にハンドリングして表示を切り替えるようなアプリケーションエラーはスキーマで表現することもできます。
この方法であればスキーマ定義からどのようなエラーが発生しうるのかをクライアント側が分かるため制御がしやすいです。

当然ですが、ネットワークエラーなどのエラーも発生しうるのでそれらのエラーハンドリングは必要です。

```graphql
type Mutation {
  createFavorite(id: ID!): CreateFavoritePayload
}

union CreateFavoritePayload = CreateFavoriteSuccess | FavoriteNotFound

type CreateFavoriteSuccess {
  id: ID!
}

type FavoriteNotFound {
  message: String!
}
```

```graphql
mutation TestOp {
  createFavorite(id: "0") {
    ... on CreateFavoriteSuccess {
      id
    }
    ... on FavoriteNotFound {
      message
    }
  }
}
```

ID が 0 の場合エラーになるとすると、次のようなレスポンスが得られます。

```json
{
  "data": {
    "createFavorite": {
      "message": "failed"
    }
  }
}
```

ID が 0 以外の正常の場合は次のようなレスポンスになります。

```json
{
  "data": {
    "createFavorite": {
      "id": "1"
    }
  }
}
```

4xx 系のエラーはスキーマで、5xx 系のエラーは GraphQL 標準エラーで表現するのがよいのではないかと思います。
ただしキャッシュを利用する場合はエラー系のレスポンスがキャッシュされて問題ないのかは慎重に考える必要があります。

### N+1 問題

GraphQL のサーバー実装では特に意識せずに開発すると N+1 問題が発生しやすいです。
以下のようなスキーマを考えます。
`Query.reviews` によりレビューのリストを取得し、1 つのレビューは投稿対象の施設情報 `Review.place` と紐づいているとします。
またレビュー一覧取得 API と施設単体取得 API はそれぞれ別 API だとします。

```graphql
type Query {
  reviews: [Review!]
}

type Review {
  id: ID!
  score: Float!
  place: Place
}

type Place {
  id: ID!
  name: String!
}
```

```graphql
query TestOp {
  reviews {
    id
    score
    place {
      name
    }
  }
}
```

このようなクエリを実行すると 1 度のリクエストで 5 件のレビューが取得できますが、そこからさらにそれぞれのレビューに対して 1 回ずつ、合計で 5 回のリクエストが発生します。
これが N+1 問題です。

```text
Review.place resolver invoked. id=0
/place?id=0
Review.place resolver invoked. id=1
/place?id=1
Review.place resolver invoked. id=2
/place?id=2
Review.place resolver invoked. id=3
/place?id=3
Review.place resolver invoked. id=4
/place?id=4
```

```json
{
  "data": {
    "reviews": [
      {
        "id": "0",
        "score": 0,
        "place": {
          "id": "0_0",
          "name": "テスト施設名"
        }
      },
      {
        "id": "1",
        "score": 3,
        "place": {
          "id": "1_1",
          "name": "テスト施設名"
        }
      },
      ...
    ]
  }
}
```

これを解決するために[DataLoader](https://github.com/graphql/dataloader)を利用します。
DataLoader を使って Resolver を適切に実装すると以下のように処理が行われたことが分かります。
`Review.place` の Resolver は 5 回呼ばれますが、そこからの API コールは 1 つにまとめられています。

```text
Review.place resolver is invoked by id=0
Review.place resolver is invoked by id=1
Review.place resolver is invoked by id=2
Review.place resolver is invoked by id=3
Review.place resolver is invoked by id=4
fetchPlaces is invoked by ids=0,1,2,3,4
```

以下のようなコードを記述し、`Dataloader#load()` を呼び出すことでリクエストがまとめられます。
コンストラクタにバッチ処理関数を与えますが、この関数にはいくつか守らなければならない制約があります。

- keys の長さと戻り値の配列の長さが等しい
- keys の順序と戻り値の配列の順序が等しい

つまり key に対応する値が取得できなかった場合は長さを維持するために null か Error を返す、key に対応する戻り値のマッピングは実装者に委ねられています。

```javascript
// fetchPlacesは /places?id=1&id=2&id=3 のようにリクエストした結果をリストで返す
const placesLoader = new DataLoader(async (keys) => {
  return fetchPlaces(keys);
});

const p1 = placesLoader.load("1");
const p2 = placesLoader.load("2");
const p3 = placesLoader.load("3");

const [pa, pb, pc] = await Promise.all([p1, p2, p3]);
```

DataLoader の仕組みについては参考になるブログ記事がありますので、そちらを参照していただければと思います。
JavaScript の DataLoader 実装はイベントループをもとにした仕組みをデフォルトとしていますが、100ms 待つなどのスケジューラも指定もでき、他のプラグラミング言語にも実装されたライブラリがあります。

GraphQL でリストを返す Resolver を実装する際は N+1 問題を引き起こしていないかを常に考えるようにしましょう。

- [graphql/dataloader のバッチの仕組みを理解する](https://hireroo.io/journal/tech/dataloader-how-batch-works)
- [graphql/dataloader を読んだ話](https://lyohe.github.io/blog/2021/12/16/reading-dataloader/)
- [Node.js でのイベントループの仕組みとタイマーについて](https://hiroppy.me/blog/nodejs-event-loop/)
- [Node.js のイベントループの仕組みを整理する](https://hireroo.io/journal/tech/nodejs_event_loop)

## 運用

約 2 年ほど BFF として GraphQL サーバーを運用した経験をもとに、いくつか運用していてよかったことや気になってこうすればよかったと思うことを書きます。

### スキーマに Description を書く

GraphQL のスキーマには Markdown で備考を記載することができます。

```graphql
type Query {
  """
  # レビューを１つ取得します
  """
  review(id: ID!): Review
}
```

説明がなくても理解できるスキーマ設計を心がけるべきですが、できるだけ記載するのがよいです。
Directive でバリデーションを行わない場合はバリデーションルールをスキーマから把握できないので、バリデーションやエラーコードについて書かれていると嬉しいです。

### OperationName を必ずつけさせる

クライアント側には必ず OperationName をつけてもらいましょう。
`TestOp` これです。

```graphql
query TestOp {
  hello
}
```

REST API でも `src` というクエリパラメータを付けるケースがあると思いますが、それと似た用途です。
他の利用者と被る可能性やなりすまされる可能性はありますが、クライアント側のコードを追うのに非常に便利です。

### 命名規則を統一する

GraphQL スキーマのフィールドの命名規則は必ず統一しましょう。
Query には `reviewById` ではなく `review` のようにリソースをそのまま表現するのがよいとされていますが、現実的には `reviewByPlaceId` がほしくなるケースもあると思います。
矛盾のない命名規則を予め規約として定められていると治安が守られます。

Mutation は動詞を先に持ってくる派閥と名詞を先に持ってくる派閥があります。

```graphql
type Mutation {
  createFavorite(input: CreateFavoriteInput!): CreateFavoritePayload
  favoriteRemove(input: FavoriteRemoveInput!): FavoriteRemovePayload
}
```

どちらでも構いませんが、統一してください。
個人的には `createFavorite` が好みです。

### Enum, Custum Scalar

GraphQL には Enum や Custom Scalar(DDD でいう値オブジェクトみたいな、どちらかというと Nominal Type とか Branded Type とか言われるかもしれない)があります。

```graphql
enum STATUS {
  OPEN
  CLOSED
}

type Place {
  createdAt: DateTimeRfc3339
}
```

実装時にこれらの型定義を活かせるようなエコシステムが存在しますので、積極的に使えると良さそうです。

### 曖昧な引数をとらない

```graphql
type Query {
  search(q: String!, limit: Int, offset: Int): PlaceConnection
}
```

`limit` や `offset` を指定してない場合どのような挙動をするのかスキーマから読み取れないです。
このようなスキーマ定義は避け、デフォルト値を設定するか、必須引数にするか、せめて説明文を書くようにしましょう。

デフォルト値はあとから変更したくなった場合に影響範囲の調査が大変なので必須にするのがよいと思っています。
引数は Non-Null から Nullable にするのは破壊的変更でないのでとりあえず必須でも困らないと思います。

```graphql
type Query {
  search(q: String!, limit: Int = 10, offset: Int!): PlaceConnection
}
```

### アクセスログ

GraphQL は /graphql のようなエンドポイントで POST メソッドで待ち受けることが一般的です。
一般的なアクセスログをそのまま使おうとすると全部同じリクエストにしか見えないという状況になり、調査で困難を極めます。

[GraphQL Envelop](https://the-guild.dev/graphql/envelop)を使うと比較的容易にプラグインを実装できるので、これを利用してアクセスログを拡張しておくのがよいです。
OperationName は必ず落としましょう。

できればクエリもログに落としたいですが、うっかり秘密情報が紛れ込む可能性があります。

```graphql
mutation SecretOp {
  changePassword(current: "abc", next: "123")
}
```

query の場合でも variables に見えてはいけない情報が入ってくる可能性はありますので、マスク処理をするなど設計時に考えられているとベストです。

### アプリケーションログ

ここは特に REST API と異なる点はないです。
調査時に必要となる情報はちゃんとログに落としましょう、無駄なログは抑制しましょうなどは同じです。

強いて言えば使わなくなったフィールドが利用されているかといったログやメトリクスが出力されていると嬉しいです。
REST API と違って Deprecated になったフィールドがどこから使われているかがルーティングから絞りにくいです。

Field レベルで使われている頻度やレイテンシを計測できると便利そうですが、まだチャレンジしたことはないです。
OpenTelemetry でいい感じに計装してみたいです。

### セキュリティー

クエリの深さ制限を必ず実装しましょう。
GraphQL ではクライアント側がユースケースを決定できるため、巨大なリクエストを送ることが可能です。

```graphql
query HugeOp {
  review {
    score
    place {
      name
      review {
        score
        place {
          name
        }
      }
    }
  }
}
```

バックエンドサーバーにも負荷がかかる懸念が高いですし、このようなクエリはまず不正なので深さを 5 段までにするといったバリデーションは必ず行いましょう。
大抵の場合プラグインが公開されています。

```graphql
query WideOp {
  review1: review {
    score
  }
  review2: review {
    score
  }
  review3: review {
    score
  }
}
```

深さ制限だけでは上記のようなクエリによる攻撃を防げません。
クエリの複雑さ制限をすることが一般的です。
参照するフィールド数をカウントして、一度のリクエストで一定数以上のフィールドを参照しようとするクエリはエラーにします。

ここまでやっても特定の Field の負荷が大きすぎて問題になるとかであれば Persisted Query の導入が考えられます。

```graphql
query TestOp {
  hello
}
```

```javascript
const whitelist = ["query TestOpe { hello }"];
```

このようなクエリのみを許可するホワイトリストにすることで制限を厳しくできますが、これなら REST API で良いのではとなるかもしれません。
Persisted Query をサーバーに登録するための運用方法もよく検討する必要がでてきます。

また[GraphiQL](https://github.com/graphql/graphiql)や[Schema Introspection](https://graphql.org/learn/introspection/)は外部に公開しないようにしましょう。

### 破壊的変更

これまでに Nullability に関連して破壊的変更について何度か言及しましたが、GraphQL では破壊的変更をうっかり行ってしまう可能性があります。
レビューで確実に気づけるとも限らないので[GraphQL Inspector](https://the-guild.dev/graphql/inspector)を CI に導入しましょう。
自動で破壊的変更が存在する Pull-Request かどうかをチェックしてくれます。

## まとめ

運用編は他にも書きたいことがあった気がするのですが、最近 GraphQL サーバーの運用をしていないので記憶が薄れてしまいました。

色々書きましたが、[Production Ready GraphQL](https://book.productionreadygraphql.com/)に従っていれば間違いないです。
具体例に困ったら GitHub GraphQL API を参考にするのが良いです。

このドキュメントでは認証・認可について言及しませんでしたが、GraphQL で認証・認可を行うのは REST API より難しいと言ってよいと思います。
ルーティング単位で認可できないためフィールド単位で解決した場合どうするかを検討する必要があります。
インターネットに露出する GraphQL を運用する場合はとんでもないインシデントを引き起こしかねないので一層注意が必要です。

TypeScript で実装する際は[GraphQL Code Generator](https://the-guild.dev/graphql/codegen)や[GraphQL Tools](https://the-guild.dev/graphql/tools)を使うとより便利に開発できるので積極的に採用しましょう。

[NestJS](https://nestjs.com/)など GraphQL を組み込んだフレームワークもあるので、興味があれば触ってみるとよいと思います。
個人的には現状では[GraphQL Yoga](https://the-guild.dev/graphql/yoga-server)+[GraphQL Envelop](https://the-guild.dev/graphql/envelop)が良さそうです。
Java でも[GraphQL Java](https://www.graphql-java.com/)や[Spring for GraphQL](https://spring.pleiades.io/projects/spring-graphql)、[Netflix DGS](https://netflix.github.io/dgs/)があります。

## 参考リンク

- [Production Ready GraphQL](https://book.productionreadygraphql.com/)
- [GraphQL @ Yelp Guidelines](https://yelp.github.io/graphql-guidelines/)
- [GraphQL スキーマ設計ガイド 第 2 版](https://vvakame.booth.pm/items/1576562)
- [Shopify GraphQL Design Tutorial](https://github.com/Shopify/graphql-design-tutorial)
- [GraphQL を導入する時に考えておいたほうが良いこと](https://engineering.mercari.com/blog/entry/20220303-concerns-with-using-graphql/)
- [GraphQL API 設計で気をつけること](https://wawoon.dev/posts/tips-of-graphql-schema-design)
- [Relay に学ぶ GraphQL のスキーマ設計](https://cockscomb.hatenablog.com/entry/designing-graphql-schema-learned-from-relay)
