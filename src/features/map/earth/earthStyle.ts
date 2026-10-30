import type { StyleSpecification } from 'maplibre-gl';
import { graticule } from './geo';

const OCEAN = '#050810';
const LAND = '#14161f';
const COAST = '#e62429';
const INK = '#a2a2ad';

/** Dark S.H.I.E.L.D.-table globe, drawn from free OpenFreeMap vector tiles (no API key). */
export const earthStyle: StyleSpecification = {
  version: 8,
  projection: { type: 'globe' },
  sky: {
    'sky-color': '#0b1a33',
    'horizon-color': '#1d3b6e',
    'fog-color': '#0b1a33',
    'fog-ground-blend': 0.8,
    'horizon-fog-blend': 0.6,
    'sky-horizon-blend': 0.9,
    'atmosphere-blend': ['interpolate', ['linear'], ['zoom'], 0, 1, 4, 0.9, 6, 0],
  },
  glyphs: 'https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf',
  sources: {
    tiles: { type: 'vector', url: 'https://tiles.openfreemap.org/planet' },
    graticule: { type: 'geojson', data: graticule() },
  },
  layers: [
    { id: 'land', type: 'background', paint: { 'background-color': LAND } },
    { id: 'ocean', type: 'fill', source: 'tiles', 'source-layer': 'water', paint: { 'fill-color': OCEAN } },
    {
      id: 'coast-glow',
      type: 'line',
      source: 'tiles',
      'source-layer': 'water',
      paint: { 'line-color': COAST, 'line-opacity': 0.28, 'line-blur': 3, 'line-width': ['interpolate', ['linear'], ['zoom'], 0, 2, 8, 5] },
    },
    {
      id: 'coast',
      type: 'line',
      source: 'tiles',
      'source-layer': 'water',
      paint: { 'line-color': COAST, 'line-opacity': 0.75, 'line-width': ['interpolate', ['linear'], ['zoom'], 0, 0.4, 8, 1] },
    },
    {
      id: 'borders',
      type: 'line',
      source: 'tiles',
      'source-layer': 'boundary',
      filter: ['all', ['==', ['get', 'admin_level'], 2], ['!=', ['get', 'maritime'], 1]],
      paint: { 'line-color': '#3b3d4a', 'line-width': 0.6 },
    },
    {
      id: 'roads',
      type: 'line',
      source: 'tiles',
      'source-layer': 'transportation',
      minzoom: 9,
      paint: { 'line-color': '#262833', 'line-width': ['interpolate', ['linear'], ['zoom'], 9, 0.3, 16, 3] },
    },
    { id: 'buildings', type: 'fill', source: 'tiles', 'source-layer': 'building', minzoom: 13, paint: { 'fill-color': '#1d2029' } },
    { id: 'grid', type: 'line', source: 'graticule', maxzoom: 6, paint: { 'line-color': '#ffffff', 'line-opacity': 0.05, 'line-width': 0.6 } },
    {
      id: 'city-labels',
      type: 'symbol',
      source: 'tiles',
      'source-layer': 'place',
      minzoom: 4,
      filter: ['==', ['get', 'class'], 'city'],
      layout: { 'text-field': ['coalesce', ['get', 'name:en'], ['get', 'name']], 'text-font': ['Noto Sans Regular'], 'text-size': 11 },
      paint: { 'text-color': INK, 'text-halo-color': '#000000', 'text-halo-width': 1 },
    },
    {
      id: 'country-labels',
      type: 'symbol',
      source: 'tiles',
      'source-layer': 'place',
      minzoom: 2,
      maxzoom: 6,
      filter: ['==', ['get', 'class'], 'country'],
      layout: {
        'text-field': ['upcase', ['coalesce', ['get', 'name:en'], ['get', 'name']]],
        'text-font': ['Noto Sans Regular'],
        'text-size': 10,
        'text-letter-spacing': 0.18,
      },
      paint: { 'text-color': '#6c6c78', 'text-halo-color': '#000000', 'text-halo-width': 1 },
    },
  ],
};
