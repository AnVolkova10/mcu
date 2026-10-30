/**
 * Shapes of the hand-written content in `src/content`.
 * Every reference between entities is an ID, so TypeScript flags a typo the moment it is written.
 */
import type { UniverseId, BranchId } from '@/content/catalog/universes';
import type { SeriesId } from '@/content/catalog/series';
import type { ProductionId } from '@/content/catalog/productions';
import type { FactionId } from '@/content/catalog/factions';
import type { CharacterId } from '@/content/catalog/characters';
import type { LocationId } from '@/content/catalog/locations';
import type { CosmosNodeId } from '@/content/catalog/cosmos';
import type { StoneId } from '@/content/catalog/stones';

export type { UniverseId, BranchId, SeriesId, ProductionId, FactionId, CharacterId, LocationId, CosmosNodeId, StoneId };

// ─── Universes ────────────────────────────────────────────────────────────────

export interface UniverseInput {
  /** Official designation, e.g. "Earth-616". */
  name: string;
  /** Friendly name shown in the UI, e.g. "Sacred Timeline". */
  label: string;
  /** Tiny badge text, e.g. "616". */
  short: string;
  /** Identity color used for badges, map pins and multiverse strands. */
  color: string;
  description: string;
}

export interface BranchInput {
  universe: UniverseId;
  name: string;
  /** In-universe year where this branch splits from its universe. */
  divergence: number;
  description: string;
}

// ─── Productions ──────────────────────────────────────────────────────────────

export type Network =
  | 'Marvel Studios'
  | 'ABC'
  | 'Netflix'
  | 'Freeform'
  | 'Hulu'
  | 'Disney+'
  | 'Prime Video'
  | 'FX'
  | '20th Century Fox'
  | 'Fox Kids'
  | 'Syndication'
  | 'UPN'
  | 'Marvel One-Shot';

export type Phase = 'Phase 1' | 'Phase 2' | 'Phase 3' | 'Phase 4' | 'Phase 5' | 'Phase 6';

/**
 * audited: reviewed under the in-universe rules; the validator is strict with it.
 * legacy:  inherited from v1 (2021 HTML); shown as-is and only required not to break anything.
 */
export type AuditStatus = 'audited' | 'legacy';

export interface SeriesInput {
  title: string;
  /** Short label for chips, e.g. "X-Men: TAS". */
  shortTitle: string;
  network: Network;
  animated?: boolean;
  /** TMDB TV id, used only by the poster sync script. */
  tmdbId?: number;
}

export interface ProductionInput {
  kind: 'movie' | 'season' | 'special' | 'short';
  title: string;
  /** Seasons only. */
  series?: SeriesId;
  season?: number;
  /** Release year or range as printed, e.g. "2013" or "2013–2014". */
  released: string;
  network: Network;
  /** MCU phase, only for Marvel Studios / Marvel Television productions. */
  phase?: Phase;
  universe: UniverseId;
  status: AuditStatus;
  animated?: boolean;
  /** Accent color for chips. */
  color: string;
  description?: string;
  /** TMDB movie id (movies, specials, shorts). Seasons use their series' tmdbId. */
  tmdbId?: number;
  /** Filled by `npm run posters:sync`. Path on image.tmdb.org, e.g. "/abc123.jpg". */
  poster?: string;
}

// ─── Characters & factions ────────────────────────────────────────────────────

export type CharacterRole = 'hero' | 'villain' | 'anti-hero' | 'secondary' | 'civilian' | 'cosmic';
export type CharacterStatus = 'alive' | 'deceased' | 'presumably-dead' | 'variable';

export interface FactionInput {
  name: string;
}

export interface CharacterInput {
  name: string;
  /** Codename or best-known name, e.g. "Captain America". */
  alias?: string;
  /** Identity color. Text contrast is computed automatically, any hue works. */
  color: string;
  role: CharacterRole;
  status: CharacterStatus;
  factions: readonly FactionId[];
  origin?: string;
  bio: string;
  /** Notes for versions of the character in other universes. */
  variants?: Partial<Record<UniverseId, string>>;
}

// ─── Places ───────────────────────────────────────────────────────────────────

export type LocationKind = 'earth' | 'orbit' | 'space' | 'dimension';

export interface LocationInput {
  name: string;
  /** City or region. */
  place?: string;
  /** Country, realm or galaxy. */
  country?: string;
  kind: LocationKind;
  /** [latitude, longitude]. Required for kind "earth". */
  coords?: readonly [number, number];
  /** Node of the Cosmos map. Required for every kind except "earth". */
  node?: CosmosNodeId;
}

export type CosmosZone = 'orbit' | 'realms' | 'deep-space' | 'dimensions';

export interface CosmosNodeInput {
  name: string;
  zone: CosmosZone;
  /** Visual archetype for the 3D scene. */
  look: 'planet' | 'moon' | 'station' | 'realm' | 'portal' | 'nexus';
  color: string;
  description: string;
}

// ─── Infinity Stones ──────────────────────────────────────────────────────────

export interface StoneStopInput {
  date: EventDateInput;
  location: LocationId;
  holder: string;
  vessel?: string;
  note: string;
  /** Full event id (production.slug) where this happens, when the timeline has it. */
  event?: string;
}

export interface StoneInput {
  name: string;
  vessel: string;
  color: string;
  power: string;
  firstAppearance: string;
  status: string;
  journey: readonly StoneStopInput[];
}

// ─── Events ───────────────────────────────────────────────────────────────────

/**
 * In-universe date. The year (negative = BCE) is what orders the whole timeline.
 * - `end`: last year of a range (e.g. 1861–1865).
 * - `approx`: shows "c." before the year.
 * - `label`: replaces the printed date when the source uses a relative one ("5,000 years ago").
 * - `order`: position among events of the same year (lower first). Leave gaps: 10, 20, 30…
 */
export interface EventDateInput {
  year: number;
  end?: number;
  approx?: boolean;
  label?: string;
  order?: number;
}

export type LocationRef = LocationId | { id: LocationId; note?: string };

export type DeathRef =
  | CharacterId
  | { character: CharacterId; presumed?: boolean; note?: string }
  | { name: string; presumed?: boolean; note?: string };

export interface EventInput {
  /** Short slug, unique inside its production file. The full id becomes "<production>.<id>". */
  id: string;
  date: EventDateInput;
  title: string;
  /**
   * Paragraphs written in the archive markup:
   *   [Label](character-id)   link to a character
   *   [Label](stone:space)    link to an Infinity Stone
   *   **bold**  *italic*  ==key item==
   */
  text: readonly string[];
  /** Episodes or part of the production this event covers, e.g. "E1–E7". */
  segment?: string;
  /** Overrides the production's universe (crossovers). */
  universe?: UniverseId;
  branch?: BranchId;
  /** Characters present but not linked in the text. */
  cast?: readonly CharacterId[];
  locations?: readonly LocationRef[];
  deaths?: readonly DeathRef[];
  stones?: readonly StoneId[];
  /** Other productions that also show this event. */
  alsoIn?: readonly ProductionId[];
}
