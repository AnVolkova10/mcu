export type ActiveScreen = 
  | 'timeline' 
  | 'media' 
  | 'characters' 
  | 'stones' 
  | 'map'
  | 'bookmarks' 
  | 'stats';

export type TimelineCategory = 
  | 'ancient' 
  | 'early-century' 
  | 'golden-age' 
  | 'avengers-era' 
  | 'infinity-war' 
  | 'future';

export type TimelineType = 
  | 'sacred-616' 
  | 'branched-616' 
  | 'outside-time' 
  | 'multiverse-alternate';

export type CharacterStatus = 'alive' | 'deceased' | 'presumably-dead' | 'variable';

export interface EventLocation {
  name: string;             // e.g. "Auschwitz", "Isodyne Energy", "Tønsberg Crypt", "Brooklyn Docks"
  cityOrRegion?: string;    // e.g. "New York City", "Bavaria", "Swiss Alps", "Crete", "Hollywood"
  countryOrRealm: string;   // e.g. "United States", "Poland", "Wakanda", "Norway", "Greece", "Asgard"
  planet?: string;          // e.g. "Earth", "Asgard", "Jotunheim", "Vormir", "K'un-Lun", "Earth Orbit"
  coordinates?: [number, number]; // [lat, lng] for Earth surface locations
  orbitType?: 'LEO' | 'GEO' | 'lunar' | 'deep-space' | 'realm' | 'dimension'; // For orbital & off-world locations
  altitudeKm?: number;      // e.g. 350 for LEO, 35786 for GEO, 384400 for Moon
  celestialSystem?: 'terrestrial-orbit' | 'solar-system' | 'nine-realms' | 'deep-space' | 'multiverse';
  characters?: string[];    // Optional explicit character IDs present at this specific location
}

export interface CharacterMention {
  name: string;
  characterId: string;
  isDead?: boolean;
  isPresumablyDead?: boolean;
  isSecondary?: boolean;
  isEnemy?: boolean;
}

export interface TimelineEvent {
  id: string;
  eraId: string;
  eraTitle: string;
  mediaKey: string;
  mediaTitle: string;
  mediaType: 'movie' | 'series' | 'oneshot' | 'special';
  mediaPhase: string;
  isAlternativeTimeline: boolean;
  timelineType?: TimelineType;
  earthDesignation?: string;
  branchDetails?: string;
  rawClasses: string[];
  rawHtml: string;
  paragraphs: string[];
  characters: string[];
  stones: string[];
  deaths: string[];
  mcuHighlights: string[];
  locations?: EventLocation[];
}

export interface EraGroup {
  id: string;
  title: string;
  cleanTitle: string;
  category: TimelineCategory;
  events: TimelineEvent[];
}

export interface Character {
  id: string;
  name: string;
  alias?: string;
  cssClass: string;
  color: string;
  bgBadge: string;
  textBadge: string;
  borderBadge: string;
  role: 'hero' | 'villain' | 'anti-hero' | 'secondary' | 'cosmic' | 'civilian';
  affiliation: string;
  groups: string[];
  originLocation: string;
  status: CharacterStatus;
  bio: string;
  imageIcon?: string;
}

export interface MediaItem {
  id: string;
  cssClass: string;
  title: string;
  shortTitle: string;
  releaseYear: string;
  type: 'movie' | 'series' | 'oneshot' | 'special';
  phase: 'Phase 1' | 'Phase 2' | 'Phase 3' | 'Phase 4' | 'Phase 5' | 'Phase 6' | 'Marvel Television' | 'One-Shot';
  posterColor: string;
  timelineOrder: number;
  description: string;
  isAnimated?: boolean;
  chronologicalEra?: string;
  timelineType?: TimelineType;
  primaryUniverse?: string;
  studio?: 'Marvel Studios' | 'Disney+' | 'ABC' | 'Netflix' | 'Freeform' | 'Prime Video' | 'One Shot' | 'Other' | 'Fox' | 'Sony';
}

export interface InfinityStone {
  id: 'space' | 'reality' | 'power' | 'mind' | 'time' | 'soul';
  name: string;
  cssClass: string;
  color: string;
  colorHex: string;
  glowColor: string;
  vessel: string;
  powerDescription: string;
  firstAppearance: string;
  currentStatus: string;
  journey: {
    era: string;
    location: string;
    holder: string;
    eventSummary: string;
  }[];
}

export interface TimelineFilterState {
  searchQuery: string;
  selectedCharacter: string | null;
  selectedGroup: string | null;
  selectedOrigin: string | null;
  selectedMedia: string | null;
  selectedStone: string | null;
  selectedPhase: string | null;
  selectedCategory: TimelineCategory | 'all';
  selectedUniverse: string | null;
  onlyAlternative: boolean;
  onlyCanon: boolean;
  onlyDeaths: boolean;
}
