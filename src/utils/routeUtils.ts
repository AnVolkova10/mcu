import { ActiveScreen } from '@/types';

export const VALID_SCREENS: readonly ActiveScreen[] = [
  'timeline',
  'media',
  'characters',
  'stones',
  'map',
  'bookmarks',
  'stats',
] as const;

export interface ParsedRoute {
  screen: ActiveScreen;
  params: Record<string, string>;
}

export interface MapLocationPinPayload {
  name: string;
  cityOrRegion?: string;
  countryOrRealm?: string;
  planet?: string;
  coordinates?: [number, number];
  orbitType?: 'LEO' | 'GEO' | 'lunar' | 'deep-space' | 'realm' | 'dimension';
  altitudeKm?: number;
  celestialSystem?: 'terrestrial-orbit' | 'solar-system' | 'nine-realms' | 'deep-space' | 'multiverse';
  eventId?: string;
}

/**
 * Parses window.location.hash into screen and query parameters.
 * Examples:
 *   "#/map?loc=Giza&lat=29.97&lng=31.13" -> { screen: 'map', params: { loc: 'Giza', ... } }
 *   "#/characters" -> { screen: 'characters', params: {} }
 *   "" or "#" -> { screen: 'timeline', params: {} }
 */
export function parseHash(hash: string): ParsedRoute {
  const clean = (hash || '').replace(/^#\/?/, '');
  const [screenPart, queryPart] = clean.split('?');
  const screen = VALID_SCREENS.includes(screenPart as ActiveScreen)
    ? (screenPart as ActiveScreen)
    : 'timeline';

  const params: Record<string, string> = {};
  if (queryPart) {
    const searchParams = new URLSearchParams(queryPart);
    searchParams.forEach((val, key) => {
      params[key] = val;
    });
  }
  return { screen, params };
}

/**
 * Generates clean hash URL for a given screen.
 */
export function buildScreenHash(screen: ActiveScreen): string {
  return `#/${screen}`;
}

/**
 * Generates deep-linkable hash URL for the map screen with selected location details.
 */
export function buildLocationHash(loc: MapLocationPinPayload): string {
  const params = new URLSearchParams();
  if (loc.name) params.set('loc', loc.name);
  if (loc.cityOrRegion) params.set('city', loc.cityOrRegion);
  if (loc.countryOrRealm) params.set('country', loc.countryOrRealm);
  if (loc.planet) params.set('planet', loc.planet);
  if (loc.coordinates && loc.coordinates.length === 2) {
    params.set('lat', loc.coordinates[0].toString());
    params.set('lng', loc.coordinates[1].toString());
  }
  if (loc.orbitType) params.set('orbit', loc.orbitType);
  if (loc.altitudeKm !== undefined) params.set('alt', loc.altitudeKm.toString());
  if (loc.celestialSystem) params.set('system', loc.celestialSystem);
  if (loc.eventId) params.set('event', loc.eventId);

  const q = params.toString();
  return `#/map${q ? `?${q}` : ''}`;
}

/**
 * Synchronously retrieves initial ActiveScreen from current URL hash,
 * ensuring tabs opened via middle-click or direct links start on the right view immediately.
 */
export function getInitialActiveScreen(): ActiveScreen {
  if (typeof window === 'undefined') return 'timeline';
  return parseHash(window.location.hash).screen;
}

/**
 * Synchronously parses initial map pin parameters from URL hash if screen is map.
 */
export function getInitialMapLocationPin(): MapLocationPinPayload | null {
  if (typeof window === 'undefined') return null;
  const { screen, params } = parseHash(window.location.hash);
  if (screen !== 'map' || (!params.loc && !params.lat && !params.event)) return null;

  const { loc, city, country, planet, lat, lng, orbit, alt, system, event } = params;
  const coords: [number, number] | undefined =
    lat && lng && !isNaN(parseFloat(lat)) && !isNaN(parseFloat(lng))
      ? [parseFloat(lat), parseFloat(lng)]
      : undefined;

  return {
    name: loc || 'Target Location',
    cityOrRegion: city,
    countryOrRealm: country,
    planet: planet,
    coordinates: coords,
    orbitType: orbit as any,
    altitudeKm: alt && !isNaN(parseFloat(alt)) ? parseFloat(alt) : undefined,
    celestialSystem: system as any,
    eventId: event,
  };
}
