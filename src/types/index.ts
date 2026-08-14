export type ActiveScreen = 
  | 'timeline' 
  | 'media' 
  | 'characters' 
  | 'stones' 
  | 'bookmarks' 
  | 'stats';

export type TimelineCategory = 
  | 'ancient' 
  | 'early-century' 
  | 'golden-age' 
  | 'avengers-era' 
  | 'infinity-war' 
  | 'future';

export type CharacterStatus = 'alive' | 'deceased' | 'presumably-dead' | 'variable';

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
  rawClasses: string[];
  rawHtml: string;
  paragraphs: string[];
  characters: string[];
  stones: string[];
  deaths: string[];
  mcuHighlights: string[];
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
  onlyAlternative: boolean;
  onlyCanon: boolean;
  onlyDeaths: boolean;
}
