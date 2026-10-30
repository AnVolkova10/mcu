/** Small geometry helpers for the globe. Coordinates are [lng, lat], as GeoJSON expects. */

export type LngLat = [number, number];

const rad = (d: number) => (d * Math.PI) / 180;
const deg = (r: number) => (r * 180) / Math.PI;

const toVector = ([lng, lat]: LngLat) => [Math.cos(rad(lat)) * Math.cos(rad(lng)), Math.cos(rad(lat)) * Math.sin(rad(lng)), Math.sin(rad(lat))];

/** Points along the shortest path between two places. Longitudes stay continuous across the antimeridian. */
export function greatCircle(from: LngLat, to: LngLat, steps = 48): LngLat[] {
  const a = toVector(from);
  const b = toVector(to);
  const angle = Math.acos(Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2])));
  if (angle < 1e-6) return [from, to];
  const points: LngLat[] = [];
  let previous = from[0];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const s1 = Math.sin((1 - t) * angle) / Math.sin(angle);
    const s2 = Math.sin(t * angle) / Math.sin(angle);
    const [x, y, z] = [0, 1, 2].map((k) => s1 * a[k] + s2 * b[k]);
    let lng = deg(Math.atan2(y, x));
    while (lng - previous > 180) lng -= 360;
    while (lng - previous < -180) lng += 360;
    previous = lng;
    points.push([lng, deg(Math.atan2(z, Math.hypot(x, y)))]);
  }
  return points;
}

/** Meridians and parallels: the holographic grid over the globe. */
export function graticule(step = 15): GeoJSON.FeatureCollection {
  const line = (coordinates: LngLat[]): GeoJSON.Feature => ({ type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates } });
  const features: GeoJSON.Feature[] = [];
  for (let lng = -180; lng < 180; lng += step) features.push(line(Array.from({ length: 37 }, (_, i) => [lng, -90 + i * 5] as LngLat)));
  for (let lat = -75; lat <= 75; lat += step) features.push(line(Array.from({ length: 73 }, (_, i) => [-180 + i * 5, lat] as LngLat)));
  return { type: 'FeatureCollection', features };
}
