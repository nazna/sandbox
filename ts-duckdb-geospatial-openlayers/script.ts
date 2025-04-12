import './style.css';
import { Map as OpenLayersMap, View } from 'ol';
import { GeoJSON } from 'ol/format';
import { Heatmap as HeatmapLayer, Tile as TileLayer } from 'ol/layer';
import { fromLonLat } from 'ol/proj';
import { OSM, Vector } from 'ol/source';

const res = await fetch('/result.geojson');
const geojson = await res.json();

new OpenLayersMap({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    new HeatmapLayer({
      source: new Vector({
        features: new GeoJSON({ featureProjection: 'EPSG:3857' }).readFeatures(geojson),
      }),
      blur: 16,
      radius: 8,
      weight: (feature) => feature.get('nearby_count'),
    }),
  ],
  view: new View({
    center: fromLonLat([133.935032, 34.661739]),
    zoom: 10,
  }),
});
