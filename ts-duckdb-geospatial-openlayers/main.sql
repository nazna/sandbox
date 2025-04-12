INSTALL spatial;

LOAD spatial;

CREATE TABLE
  locations AS
SELECT
  row_number() OVER () AS id,
  P04_002 AS name,
  geom
FROM
  ST_Read ('./P04-20_33.geojson');

CREATE TABLE
  result AS
SELECT
  t1.id AS id,
  t1.name AS name,
  count(t2.id) AS nearby_count,
  t1.geom AS geometry
FROM
  locations t1
  LEFT JOIN locations t2 ON t1.id != t2.id
  AND ST_Distance_Sphere (t1.geom, t2.geom) <= 5000
GROUP BY
  t1.id,
  t1.name,
  t1.geom
ORDER BY
  nearby_count DESC, id ASC;

COPY result TO './result.geojson'
WITH
  (FORMAT GDAL, DRIVER 'GeoJSON');
