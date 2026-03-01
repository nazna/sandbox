# python-google-adk

> [WIP] Demo LLM Application with Google Agent Development Kit

## Usage

```sh
mise run setup
mise run check
mise run dev
```

## Notes

products.parquet は以下の構造である。

```
┌──────────────────────┬─────────────┬─────────┬─────────┬─────────┬─────────┐
│     column_name      │ column_type │  null   │   key   │ default │  extra  │
│       varchar        │   varchar   │ varchar │ varchar │ varchar │ varchar │
├──────────────────────┼─────────────┼─────────┼─────────┼─────────┼─────────┤
│ product_id           │ VARCHAR     │ YES     │ NULL    │ NULL    │ NULL    │
│ product_title        │ VARCHAR     │ YES     │ NULL    │ NULL    │ NULL    │
│ product_description  │ VARCHAR     │ YES     │ NULL    │ NULL    │ NULL    │
│ product_bullet_point │ VARCHAR     │ YES     │ NULL    │ NULL    │ NULL    │
│ product_brand        │ VARCHAR     │ YES     │ NULL    │ NULL    │ NULL    │
│ product_color        │ VARCHAR     │ YES     │ NULL    │ NULL    │ NULL    │
│ product_locale       │ VARCHAR     │ YES     │ NULL    │ NULL    │ NULL    │
└──────────────────────┴─────────────┴─────────┴─────────┴─────────┴─────────┘
```

いずれ全文検索プラグイン fts も導入してハイブリッド検索も試したい。

## References

- [Agent Development Kit](https://google.github.io/adk-docs/)
- [Sample Agents](https://github.com/google/adk-samples/tree/main/python/agents)
- [DuckDB-VSS](https://github.com/duckdb/duckdb-vss)
- [Shopping Queries Dataset](https://github.com/amazon-science/esci-data)
- [Embeddings](https://ai.google.dev/gemini-api/docs/embeddings?hl=ja)
- [DuckDB でハイブリッド検索](https://voluntas.ghost.io/duckdb-hybrid-search/)
- [日本語 Static Embedding と DuckDB を使用したベクトル検索 RAG の構築方法](https://zenn.dev/tfutada/articles/e8306122f674b0)
- [uv + Ruff + mypy で構築する超軽量 Python 開発環境 – イメージサイズ削減・型安全性確保を実現](https://tech-lab.sios.jp/archives/50142)
