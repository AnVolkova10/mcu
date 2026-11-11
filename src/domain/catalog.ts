/** Catalog entities with their ids attached, plus id-safe lookups. */
import { universes as universeData, branches as branchData } from '@/content/catalog/universes';
import { series as seriesData } from '@/content/catalog/series';
import { productions as productionData, studioOfNetwork, studios as studioData } from '@/content/catalog/productions';
import { factions as factionData } from '@/content/catalog/factions';
import { characters as characterData } from '@/content/catalog/characters';
import { cast } from '@/content/catalog/cast';
import { portraits } from '@/content/catalog/portraits';
import { locations as locationData } from '@/content/catalog/locations';
import { cosmosNodes as cosmosData } from '@/content/catalog/cosmos';
import { stones as stoneData } from '@/content/catalog/stones';
import { objectKinds as objectKindData, objects as objectData } from '@/content/catalog/objects';
import type {
  BranchId, BranchInput, CharacterCredit, CharacterId, CharacterInput, CharacterPortraits, CosmosNodeId, CosmosNodeInput, FactionId, FactionInput,
  LocationId, LocationInput, ObjectId, ObjectInput, ObjectKindId, ObjectKindInput, ProductionId, ProductionInput, SeriesId, SeriesInput, StoneId, StoneInput,
  StudioId, StudioInput, UniverseId, UniverseInput,
} from './schema';

type WithId<I, T> = T & { readonly id: I };

export type Universe = WithId<UniverseId, UniverseInput>;
export type Branch = WithId<BranchId, BranchInput>;
export type Series = WithId<SeriesId, SeriesInput>;
export type Studio = WithId<StudioId, StudioInput>;
/** A production with its short title, and the studio whose color it wears. */
export type Production = WithId<ProductionId, ProductionInput> & { readonly shortTitle: string; readonly studio: Studio; readonly color: string };
export type Faction = WithId<FactionId, FactionInput>;
export type Character = WithId<CharacterId, CharacterInput> & {
  readonly label: string;
  readonly portraits: CharacterPortraits;
  readonly credits: readonly CharacterCredit[];
};
export type Location = WithId<LocationId, LocationInput>;
export type CosmosNode = WithId<CosmosNodeId, CosmosNodeInput>;
export type Stone = WithId<StoneId, StoneInput>;
export type ObjectKind = WithId<ObjectKindId, ObjectKindInput>;
export type ArchiveObject = WithId<ObjectId, ObjectInput> & { readonly color: string; readonly kindLabel: string };

function withIds<I extends string, T>(data: Record<I, T>): Record<I, WithId<I, T>> {
  return Object.fromEntries(Object.entries(data).map(([id, v]) => [id, { ...(v as T), id }])) as Record<I, WithId<I, T>>;
}

export const universes = withIds<UniverseId, UniverseInput>(universeData);
export const branches = withIds<BranchId, BranchInput>(branchData);
export const series = withIds<SeriesId, SeriesInput>(seriesData);
export const factions = withIds<FactionId, FactionInput>(factionData);
export const locations = withIds<LocationId, LocationInput>(locationData);
export const cosmosNodes = withIds<CosmosNodeId, CosmosNodeInput>(cosmosData);
export const stones = withIds<StoneId, StoneInput>(stoneData);
export const objectKinds = withIds<ObjectKindId, ObjectKindInput>(objectKindData);
export const studios = withIds<StudioId, StudioInput>(studioData);

export const productions = Object.fromEntries(
  Object.entries(withIds<ProductionId, ProductionInput>(productionData)).map(([id, p]) => {
    const s = p.series ? series[p.series] : undefined;
    const studio = studios[studioOfNetwork[p.network]];
    return [id, { ...p, shortTitle: s && p.season ? `${s.shortTitle} S${p.season}` : p.title, studio, color: studio.color }];
  }),
) as Record<ProductionId, Production>;

export const characters = Object.fromEntries(
  Object.entries(withIds<CharacterId, CharacterInput>(characterData)).map(([id, c]) => [id, { ...c, label: c.alias ?? c.name, portraits: portraits[c.id] ?? {}, credits: cast[c.id] ?? [] }]),
) as Record<CharacterId, Character>;

export const objects = Object.fromEntries(
  Object.entries(withIds<ObjectId, ObjectInput>(objectData)).map(([id, o]) => [id, { ...o, color: objectKinds[o.kind].color, kindLabel: objectKinds[o.kind].label }]),
) as Record<ObjectId, ArchiveObject>;

const lookup = <T>(table: Record<string, T>) => (id: string | undefined | null): T | undefined =>
  id && Object.prototype.hasOwnProperty.call(table, id) ? table[id] : undefined;

export const getUniverse = lookup<Universe>(universes);
export const getBranch = lookup<Branch>(branches);
export const getProduction = lookup<Production>(productions);
export const getFaction = lookup<Faction>(factions);
export const getCharacter = lookup<Character>(characters);
export const getLocation = lookup<Location>(locations);
export const getCosmosNode = lookup<CosmosNode>(cosmosNodes);
export const getStone = lookup<Stone>(stones);
export const getObject = lookup<ArchiveObject>(objects);

export const universeList = Object.values(universes) as Universe[];
export const productionList = Object.values(productions) as Production[];

/** How far a production has been checked: verified in this audit, audited only by Gemini in v2, or inherited from v1 untouched. */
export type Review = 'verified' | 'gemini' | 'legacy';
export const reviewOf = (p: Pick<Production, 'status' | 'verified'>): Review => (p.status === 'legacy' ? 'legacy' : p.verified ? 'verified' : 'gemini');
/** The tag of a production that is not verified, and what it means. */
export const REVIEW_LABEL: Record<Exclude<Review, 'verified'>, string> = { gemini: 'v2 · Gemini', legacy: 'v1 · unaudited' };
export const REVIEW_NOTE: Record<Exclude<Review, 'verified'>, string> = {
  gemini: 'Audited in v2 with Gemini, not verified yet',
  legacy: 'Inherited from v1, not audited yet',
};
export const characterList = (Object.values(characters) as Character[]).sort((a, b) => a.label.localeCompare(b.label));
export const factionList = (Object.values(factions) as Faction[]).sort((a, b) => a.name.localeCompare(b.name));
export const stoneList = Object.values(stones) as Stone[];
export const objectKindList = Object.values(objectKinds) as ObjectKind[];
export const objectList = (Object.values(objects) as ArchiveObject[]).sort((a, b) => a.name.localeCompare(b.name));
export const locationList = Object.values(locations) as Location[];
