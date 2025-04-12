# example-duckdb-geospatial

> DuckDB + GeoSpatial

## Usage

```sh
$ duckdb < ./main.sql
$ npm run dev
```

## Notes

- `duckdb --ui` だと geometry 型が文字化けする
- `SUMMARIZE tbl` で null チェックできる D

## References

- [国土数値情報 | 医療機関データ](https://nlftp.mlit.go.jp/ksj/gml/datalist/KsjTmplt-P04-2020.html)
- [kepler.gl](https://kepler.gl/)
- [GeoJS](https://opengeoscience.github.io/geojs/index.html)
- [Leaflet](https://leafletjs.com/)
- [OpenLayers](https://openlayers.org/)
  - [GeoJSON](https://openlayers.org/en/latest/examples/geojson.html)
  - [Earthquakes Heatmap](https://openlayers.org/en/latest/examples/heatmap-earthquakes.html)
