import { useEffect, useMemo, useRef, useState } from 'react';
import { Map as MapLibre, Marker, Popup, setWorkerUrl, type ExpressionSpecification, type GeoJSONSource, type MapGeoJSONFeature } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import mapWorkerUrl from 'maplibre-gl/dist/maplibre-gl-worker.mjs?worker&url';
import type { Place, Trace } from '@/domain/atlas';
import { readableOn } from '@/domain/colors';
import { earthStyle } from './earthStyle';
import { greatCircle, type LngLat } from './geo';

interface EarthViewProps {
  places: Place[];
  selected: string | null;
  onSelect: (locationId: string | null) => void;
  trace: Trace | null;
  stopIndex: number;
}

// MapLibre looks for its worker next to its own file; once bundled it has to be told where it went.
setWorkerUrl(mapWorkerUrl);

const TRANSPARENT = 'rgba(0,0,0,0)';
const REVEAL_MS = 1100;
const toLngLat = ([lat, lng]: readonly [number, number]): LngLat => [lng, lat];

/** On phones the card is a bottom sheet: the subject of the camera rises into the free space above it. */
const sheetOffset = (): [number, number] => (window.innerWidth < 640 ? [0, -100] : [0, 0]);

const placeFeatures = (places: Place[]): GeoJSON.FeatureCollection => ({
  type: 'FeatureCollection',
  features: places.map(({ location, events, universe }) => ({
    type: 'Feature',
    geometry: { type: 'Point', coordinates: toLngLat(location.coords!) },
    properties: { id: location.id, name: location.name, count: events.length, color: universe.color },
  })),
});

/** The whole journey as one line, plus how far along it each Earth stop sits (0–1). */
function buildPath(trace: Trace) {
  const stops = trace.stops.flatMap((stop, index) => (stop.location.coords ? [{ index, point: toLngLat(stop.location.coords) }] : []));
  const line: LngLat[] = [];
  const lengths = [0];
  stops.slice(1).forEach((stop, i) => {
    const arc = greatCircle(stops[i].point, stop.point);
    line.push(...(i === 0 ? arc : arc.slice(1)));
    const span = arc.slice(1).reduce((sum, p, k) => sum + Math.hypot(p[0] - arc[k][0], p[1] - arc[k][1]), 0);
    lengths.push(lengths[lengths.length - 1] + span);
  });
  const total = lengths[lengths.length - 1] || 1;
  return { stops, line, progressAt: lengths.map((l) => l / total) };
}

/** Line color up to `progress`, with a bright head, transparent after it. */
function revealGradient(color: string, progress: number): ExpressionSpecification {
  const end = Math.min(0.9995, Math.max(0.002, progress));
  return ['interpolate', ['linear'], ['line-progress'], 0, color, Math.max(0.0005, end - 0.0015), color, end, '#ffffff', end + 0.0004, TRANSPARENT];
}

export function EarthView({ places, selected, onSelect, trace, stopIndex }: EarthViewProps) {
  const container = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibre | null>(null);
  const [ready, setReady] = useState(false);
  const spinning = useRef(true);
  const revealed = useRef(0);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  const path = useMemo(() => (trace ? buildPath(trace) : null), [trace]);
  const data = useMemo(() => placeFeatures(places), [places]);

  // Create the map once; everything else updates it through sources and paint properties.
  useEffect(() => {
    const map = new MapLibre({
      container: container.current!,
      style: earthStyle,
      center: [-40, 22],
      zoom: 2.15,
      minZoom: 0.6,
      maxZoom: 16,
      attributionControl: { compact: true },
    });
    mapRef.current = map;

    const popup = new Popup({ closeButton: false, closeOnClick: false, offset: 12, className: 'atlas-popup' });
    const stopSpin = () => { spinning.current = false; };
    map.on('mousedown', stopSpin);
    map.on('touchstart', stopSpin);
    map.on('wheel', stopSpin);

    map.on('load', () => {
      map.addSource('places', { type: 'geojson', data: { type: 'FeatureCollection', features: [] }, cluster: true, clusterRadius: 34, clusterMaxZoom: 8 });
      map.addLayer({
        id: 'pin-glow',
        type: 'circle',
        source: 'places',
        paint: {
          'circle-color': ['coalesce', ['get', 'color'], '#ffffff'],
          'circle-radius': ['case', ['has', 'point_count'], ['interpolate', ['linear'], ['get', 'point_count'], 2, 20, 40, 42], 15],
          'circle-opacity': 0.22,
          'circle-blur': 1,
        },
      });
      map.addLayer({
        id: 'pin-core',
        type: 'circle',
        source: 'places',
        paint: {
          'circle-color': ['coalesce', ['get', 'color'], '#101014'],
          'circle-radius': ['case', ['has', 'point_count'], ['interpolate', ['linear'], ['get', 'point_count'], 2, 11, 40, 20], 5],
          'circle-stroke-color': ['case', ['has', 'point_count'], '#ffffff', '#0b0b0e'],
          'circle-stroke-width': ['case', ['has', 'point_count'], 1, 1.5],
          'circle-stroke-opacity': 0.9,
        },
      });
      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'places',
        filter: ['has', 'point_count'],
        layout: { 'text-field': ['get', 'point_count'], 'text-font': ['Noto Sans Regular'], 'text-size': 11, 'text-allow-overlap': true },
        paint: { 'text-color': '#ffffff' },
      });

      map.addSource('trace', { type: 'geojson', lineMetrics: true, data: { type: 'FeatureCollection', features: [] } });
      map.addSource('trace-stops', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
      map.addLayer({ id: 'trace-glow', type: 'line', source: 'trace', layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-width': 9, 'line-blur': 7, 'line-opacity': 0.55 } });
      map.addLayer({ id: 'trace-line', type: 'line', source: 'trace', layout: { 'line-cap': 'round', 'line-join': 'round' }, paint: { 'line-width': 2.5 } });
      map.addLayer({
        id: 'trace-stop',
        type: 'circle',
        source: 'trace-stops',
        paint: { 'circle-radius': ['case', ['get', 'active'], 7, 4], 'circle-color': ['get', 'color'], 'circle-stroke-color': '#ffffff', 'circle-stroke-width': ['case', ['get', 'active'], 2, 0.8] },
      });
      setReady(true);
    });

    const expandCluster = async (feature: MapGeoJSONFeature) => {
      const source = map.getSource('places') as GeoJSONSource;
      const zoom = await source.getClusterExpansionZoom(feature.properties.cluster_id as number);
      map.easeTo({ center: (feature.geometry as GeoJSON.Point).coordinates as LngLat, zoom: zoom + 0.3, duration: 900 });
    };

    map.on('click', 'pin-core', (e) => {
      const feature = e.features?.[0];
      if (!feature) return;
      stopSpin();
      if (feature.properties.cluster_id !== undefined) void expandCluster(feature);
      else onSelectRef.current(feature.properties.id as string);
    });
    map.on('mouseenter', 'pin-core', (e) => {
      map.getCanvas().style.cursor = 'pointer';
      const feature = e.features?.[0];
      if (!feature) return;
      const { point_count: cluster, name, count } = feature.properties;
      popup
        .setLngLat((feature.geometry as GeoJSON.Point).coordinates as LngLat)
        .setText(cluster ? `${cluster} places` : `${name} · ${count} ${count === 1 ? 'event' : 'events'}`)
        .addTo(map);
    });
    map.on('mouseleave', 'pin-core', () => {
      map.getCanvas().style.cursor = '';
      popup.remove();
    });

    let frame = 0;
    const spin = () => {
      if (spinning.current && !map.isMoving()) {
        const c = map.getCenter();
        map.setCenter([c.lng + 0.035, c.lat]);
      }
      frame = requestAnimationFrame(spin);
    };
    frame = requestAnimationFrame(spin);

    return () => {
      cancelAnimationFrame(frame);
      setReady(false);
      map.remove();
      mapRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (ready) (mapRef.current?.getSource('places') as GeoJSONSource | undefined)?.setData(data);
  }, [ready, data]);

  // A pulsing marker on the selected place, and a flight to reach it.
  useEffect(() => {
    const map = mapRef.current;
    if (!ready || !map || !selected) return;
    const place = places.find((p) => p.location.id === selected);
    if (!place) return;
    spinning.current = false;
    const center = toLngLat(place.location.coords!);
    const element = document.createElement('span');
    element.className = 'atlas-pulse';
    element.style.setProperty('--pulse', place.universe.color);
    const marker = new Marker({ element }).setLngLat(center).addTo(map);
    map.flyTo({ center, zoom: Math.max(map.getZoom(), 4.6), offset: sheetOffset(), duration: 1800, essential: true });
    return () => { marker.remove(); };
  }, [ready, selected, places]);

  // Journey: hide the pins, draw the path, fit it on screen.
  useEffect(() => {
    const map = mapRef.current;
    if (!ready || !map) return;
    const visibility = trace ? 'none' : 'visible';
    ['pin-glow', 'pin-core', 'cluster-count'].forEach((id) => map.setLayoutProperty(id, 'visibility', visibility));
    const line: GeoJSON.FeatureCollection = {
      type: 'FeatureCollection',
      features: path && path.line.length > 1 ? [{ type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: path.line } }] : [],
    };
    (map.getSource('trace') as GeoJSONSource).setData(line);
    revealed.current = 0;
    if (trace && path?.line.length) {
      spinning.current = false;
      const color = readableOn(trace.color);
      map.setPaintProperty('trace-glow', 'line-gradient', revealGradient(color, 0.002));
      map.setPaintProperty('trace-line', 'line-gradient', revealGradient(color, 0.002));
    }
  }, [ready, trace, path]);

  // Advance along the journey: the line grows and the camera follows.
  useEffect(() => {
    const map = mapRef.current;
    if (!ready || !map || !trace || !path) return;
    const stopsData: GeoJSON.FeatureCollection = {
      type: 'FeatureCollection',
      features: path.stops.map(({ index, point }) => ({
        type: 'Feature',
        geometry: { type: 'Point', coordinates: point },
        properties: { active: index === stopIndex, color: readableOn(trace.color) },
      })),
    };
    (map.getSource('trace-stops') as GeoJSONSource).setData(stopsData);

    const reached = path.stops.filter((s) => s.index <= stopIndex).length - 1;
    const target = reached > 0 ? path.progressAt[reached] : 0.002;
    const current = path.stops.find((s) => s.index === stopIndex);
    if (current) map.flyTo({ center: current.point, zoom: 3.2, offset: sheetOffset(), duration: 1500, essential: true });

    const from = revealed.current;
    const color = readableOn(trace.color);
    const start = performance.now();
    let frame = 0;
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / REVEAL_MS);
      const eased = 1 - (1 - t) ** 3;
      const progress = from + (target - from) * eased;
      revealed.current = progress;
      if (path.line.length > 1) {
        const gradient = revealGradient(color, progress);
        map.setPaintProperty('trace-glow', 'line-gradient', gradient);
        map.setPaintProperty('trace-line', 'line-gradient', gradient);
      }
      if (t < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [ready, trace, path, stopIndex]);

  // MapLibre's stylesheet forces position: relative on its container, so the sizing lives on a wrapper.
  return (
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#0a1224_0%,#030407_70%)]">
      <div ref={container} className="size-full" />
    </div>
  );
}
