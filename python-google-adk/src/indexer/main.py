import time

import duckdb
from google import genai
from google.genai import types

client = genai.Client()

connection = duckdb.connect("products.duckdb")

connection.install_extension("vss")
connection.load_extension("vss")

connection.sql("CREATE SEQUENCE IF NOT EXISTS id_sequence START 1;")
connection.sql("""
CREATE TABLE IF NOT EXISTS products (
    id INTEGER DEFAULT nextval('id_sequence') PRIMARY KEY,
    title VARCHAR,
    description VARCHAR,
    bullet_point VARCHAR,
    color VARCHAR,
    locales VARCHAR,
    embeddings FLOAT[3072]
);
""")

while True:
    df = connection.sql("SELECT * FROM read_parquet('products.parquet');").fetch_df_chunk()

    if df.empty:
        break

    src = df.apply(
        lambda row: (
            f"id:{row['product_id']}, title:{row['product_title']}, description:{row['product_description']}, bullet_point:{row['product_bullet_point']}, brand:{row['product_brand']}, color:{row['product_color']}"
        ),
        axis=1,
    ).tolist()

    batch_size = 100
    all_embeddings = []

    for i in range(0, len(src), batch_size):
        batch = src[i : i + batch_size]

        result = client.models.embed_content(
            model="gemini-embedding-001",
            contents=batch,
            config=types.EmbedContentConfig(task_type="RETRIEVAL_DOCUMENT"),
        )

        all_embeddings.extend(result.embeddings)
        time.sleep(60)

    df["embeddings"] = all_embeddings

    connection.execute("INSERT INTO products SELECT * FROM df;")

connection.close()
