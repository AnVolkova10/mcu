import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useStore } from '@/store/useStore';
import { timelineEras } from '@/data/timelineData';
import { infinityStonesData } from '@/data/infinityStonesData';
import { EventLocation, TimelineEvent } from '@/types';
import L from 'leaflet';
import { 
  Globe2, 
  MapPin, 
  Search, 
  Filter, 
  Compass, 
  Clock, 
  Shield, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ArrowRight,
  Crosshair,
  Maximize2,
  ZoomIn,
  ZoomOut,
  Orbit,
  Sparkle,
  Radio,
  Eye,
  Rocket,
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Calendar,
  Zap,
  ChevronRight,
  ChevronLeft,
  Route,
  Navigation
} from 'lucide-react';
import { mediaData } from '@/data/mediaData';

// Helper to extract a numeric year representation from cleanTitle
export function parseYearRange(title: string): [number, number] {
  const clean = title.trim();

  if (clean.includes('Eons ago')) return [-10000000, -10000000];
  if (clean.includes('1.000.000 years ago')) return [-1000000, -1000000];
  if (clean.includes('5000 years ago')) return [-3000, -3000];
  if (clean.includes('2000 years ago')) return [-20, -20];

  // BCE check
  if (clean.toUpperCase().includes('B.C.E.') || clean.toUpperCase().includes('BCE')) {
    const match = clean.match(/\d+/);
    if (match) {
      const yr = -parseInt(match[0], 10);
      return [yr, yr];
    }
  }

  // AD check
  if (clean.toUpperCase().includes('AD')) {
    const match = clean.match(/\d+/);
    if (match) {
      const yr = parseInt(match[0], 10);
      return [yr, yr];
    }
  }

  // CE check
  if (clean.toUpperCase().includes('C.E.') || clean.toUpperCase().includes('CE')) {
    const match = clean.match(/\d+/);
    if (match) {
      const yr = parseInt(match[0], 10);
      return [yr, yr];
    }
  }

  // Range check
  const rangeMatch = clean.match(/(\d{4})\s*[-–]\s*(\d{4})/);
  if (rangeMatch) {
    return [parseInt(rangeMatch[1], 10), parseInt(rangeMatch[2], 10)];
  }

  // Single 4-digit year
  const singleMatch = clean.match(/\b(18\d{2}|19\d{2}|20\d{2})\b/);
  if (singleMatch) {
    const yr = parseInt(singleMatch[0], 10);
    return [yr, yr];
  }

  return [1940, 1960];
}

interface MapPinItem {
  id: string;
  name: string;
  cityOrRegion?: string;
  countryOrRealm: string;
  planet?: string;
  coordinates: [number, number]; // [lat, lng]
  events: {
    event: TimelineEvent;
    eraTitle: string;
    eraCleanTitle: string;
    startYear: number;
    endYear: number;
  }[];
  earthDesignation: string;
  universeGroup: '616' | '10005' | '90214' | 'cosmic';
  minYear: number;
  maxYear: number;
}

interface CosmicRealm {
  id: string;
  name: string;
  type: 'realm' | 'cosmic' | 'multiverse' | 'dimension';
  description: string;
  color: string;
  x: number;
  y: number;
  radius: number;
  universeFilterKey?: '616' | '10005' | '90214' | 'cosmic';
  eventsCount: number;
  featuredEvents: {
    title: string;
    era: string;
    media: string;
    eventId?: string;
  }[];
}

export interface StoneTrajectoryStop {
  order: number;
  locationName: string;
  regionAndCountry: string;
  era: string;
  vessel: string;
  coordinates: [number, number];
  description: string;
  media: string;
  eventId?: string;
}

export interface StoneTrajectory {
  id: string;
  name: string;
  vessel: string;
  colorHex: string;
  glowColor: string;
  description: string;
  stops: StoneTrajectoryStop[];
}

const STONE_TRAJECTORIES: Record<string, StoneTrajectory> = {
  'space-stone': {
    id: 'space-stone',
    name: 'Space Stone (Tesseract)',
    vessel: 'Tesseract (Cosmic Cube)',
    colorHex: '#38bdf8',
    glowColor: 'rgba(56, 189, 248, 0.4)',
    description: 'Allows instantaneous travel across any point in the universe. Traveled from Norse legends through WWII HYDRA, Project P.E.G.A.S.U.S., and the Battle of New York.',
    stops: [
      {
        order: 1,
        locationName: 'Ancient Norse Crypt',
        regionAndCountry: 'Tønsberg, Norway',
        era: '965 AD / 1942',
        vessel: 'Tesseract Hidden in Church Wall',
        coordinates: [59.267, 10.407],
        description: 'Guarded by Norse worshipers for centuries until retrieved by Johann Schmidt (Red Skull).',
        media: 'Captain America: The First Avenger',
        eventId: 'event-_1942_-1'
      },
      {
        order: 2,
        locationName: 'Castle Kaufmann HYDRA Weapons Division',
        regionAndCountry: 'Bavaria, Germany',
        era: '1942',
        vessel: 'HYDRA Energy Extraction Crucible',
        coordinates: [51.165, 10.451],
        description: 'Arnim Zola harnesses Tesseract energy to power advanced laser weaponry.',
        media: 'Captain America: The First Avenger',
        eventId: 'event-_1942_-1'
      },
      {
        order: 3,
        locationName: 'Valkyrie Crash Trench',
        regionAndCountry: 'Arctic Ice Sheet',
        era: '1945',
        vessel: 'Valkyrie Cockpit',
        coordinates: [78.223, 15.646],
        description: 'Red Skull teleports through a wormhole; Tesseract burns through hull into the freezing Arctic ocean.',
        media: 'Captain America: The First Avenger',
        eventId: 'event-_1945_-1'
      },
      {
        order: 4,
        locationName: 'Sub-Arctic Ocean Recovery',
        regionAndCountry: 'North Atlantic Ocean',
        era: '1945',
        vessel: 'SSR Deep Sea Bathysphere',
        coordinates: [63.000, -20.000],
        description: 'Howard Stark recovers the glowing Tesseract from the seabed while searching for Captain America.',
        media: 'Captain America: The First Avenger'
      },
      {
        order: 5,
        locationName: 'Project P.E.G.A.S.U.S. Joint Dark Energy Facility',
        regionAndCountry: 'Mojave Desert, California',
        era: '1995 / 2012',
        vessel: 'Containment Vault',
        coordinates: [35.011, -115.473],
        description: 'Wendy Lawson & Dr. Selvig experiment on light-speed energy; Loki opens a portal to Earth.',
        media: 'Captain Marvel / The Avengers'
      },
      {
        order: 6,
        locationName: 'Stark Tower (Battle of New York)',
        regionAndCountry: 'Manhattan, New York City',
        era: '2012',
        vessel: 'Selvig Portal Generator',
        coordinates: [40.7580, -73.9855],
        description: 'Opens the Chitauri wormhole over Manhattan; Black Widow closes it with Loki\'s scepter; Thor takes it to Asgard.',
        media: 'The Avengers'
      },
      {
        order: 7,
        locationName: 'Wakanda Battlefield',
        regionAndCountry: 'Birnin Zana, Wakanda',
        era: '2018',
        vessel: 'Infinity Gauntlet',
        coordinates: [-3.382, 36.682],
        description: 'Thanos shatters the Tesseract aboard the Statesman to claim the Space Stone for his Gauntlet.',
        media: 'Avengers: Infinity War'
      }
    ]
  },
  'reality-stone': {
    id: 'reality-stone',
    name: 'Reality Stone (Aether)',
    vessel: 'The Aether (Fluid Dark Matter)',
    colorHex: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.4)',
    description: 'Alters the laws of reality, converting matter into dark matter. Weaponized by Malekith 5000 years ago, hidden in London convergence anomaly.',
    stops: [
      {
        order: 1,
        locationName: 'Svartalfheim Dark World',
        regionAndCountry: 'Dark Elves Realm',
        era: '2988 BC / 5000 Years Ago',
        vessel: 'The Aether Swarm',
        coordinates: [60.000, 15.000],
        description: 'King Bor of Asgard defeats Malekith and buries the fluid Aether deep within a hidden dimensional chamber.',
        media: 'Thor: The Dark World',
        eventId: 'event-_Eons_ago_-1'
      },
      {
        order: 2,
        locationName: 'Greenwich & Old Royal Naval College',
        regionAndCountry: 'London, United Kingdom',
        era: '2013',
        vessel: 'Jane Foster Body Absorption',
        coordinates: [51.4826, -0.0077],
        description: 'Jane Foster stumbles into an anomaly and absorbs the Aether; Thor and Malekith clash across the Nine Realms.',
        media: 'Thor: The Dark World'
      },
      {
        order: 3,
        locationName: 'Wakanda Final Stand',
        regionAndCountry: 'Birnin Zana, Wakanda',
        era: '2018',
        vessel: 'Infinity Gauntlet',
        coordinates: [-3.382, 36.682],
        description: 'Thanos takes the Reality Stone from the Collector on Knowhere and wields it during the Battle of Wakanda.',
        media: 'Avengers: Infinity War'
      }
    ]
  },
  'time-stone': {
    id: 'time-stone',
    name: 'Time Stone (Eye of Agamotto)',
    vessel: 'Eye of Agamotto',
    colorHex: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    description: 'Controls the flow of time, granting reversal, acceleration, and infinite loops. Guarded by the Sorcerer Supreme in Kamar-Taj.',
    stops: [
      {
        order: 1,
        locationName: 'Kamar-Taj Mystic Library',
        regionAndCountry: 'Kathmandu, Nepal',
        era: 'Ancient Times – 2016',
        vessel: 'Eye of Agamotto Relic',
        coordinates: [27.7172, 85.3240],
        description: 'First Sorcerer Supreme Agamotto encases the Time Stone; Doctor Strange studies its temporal spells.',
        media: 'Doctor Strange'
      },
      {
        order: 2,
        locationName: 'New York Sanctum Sanctorum',
        regionAndCountry: '177A Bleecker St, Manhattan, NY',
        era: '2016 – 2018',
        vessel: 'Doctor Strange Amulet',
        coordinates: [40.7291, -73.9980],
        description: 'Doctor Strange guards the Sanctum Sanctorum and shields the Time Stone from Ebony Maw and Cull Obsidian.',
        media: 'Doctor Strange / Avengers: Infinity War'
      },
      {
        order: 3,
        locationName: 'Hong Kong Sanctum Breach',
        regionAndCountry: 'Kowloon, Hong Kong',
        era: '2016',
        vessel: 'Temporal Loop Engine',
        coordinates: [22.3193, 114.1694],
        description: 'Doctor Strange reverses city destruction and traps Dormammu in an infinite time loop to save Earth.',
        media: 'Doctor Strange'
      },
      {
        order: 4,
        locationName: 'Wakanda Forest & Vision Reversal',
        regionAndCountry: 'Birnin Zana, Wakanda',
        era: '2018',
        vessel: 'Infinity Gauntlet',
        coordinates: [-3.382, 36.682],
        description: 'Thanos uses the Time Stone on Earth to reverse Wanda\'s destruction of the Mind Stone and complete his Gauntlet.',
        media: 'Avengers: Infinity War'
      }
    ]
  },
  'mind-stone': {
    id: 'mind-stone',
    name: 'Mind Stone (Scepter & Vision)',
    vessel: 'Chitauri Scepter / Vision Forehead',
    colorHex: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.4)',
    description: 'Grants telepathy, consciousness alteration, and life spark. Traveled in Loki\'s scepter before animating Vision.',
    stops: [
      {
        order: 1,
        locationName: 'Stark Tower / Battle of New York',
        regionAndCountry: 'Manhattan, New York',
        era: '2012',
        vessel: 'Chitauri Scepter',
        coordinates: [40.7580, -73.9855],
        description: 'Loki brainwashes Hawkeye and Selvig with the scepter; retrieved by S.H.I.E.L.D. (secretly HYDRA).',
        media: 'The Avengers'
      },
      {
        order: 2,
        locationName: 'HYDRA Sokovia Research Fortress',
        regionAndCountry: 'Novi Grad, Sokovia',
        era: '2012 – 2015',
        vessel: 'Human Mutation Chamber',
        coordinates: [45.8150, 15.9819],
        description: 'Baron von Strucker unlocks the superhuman powers of Wanda Maximoff (Scarlet Witch) and Pietro Maximoff (Quicksilver).',
        media: 'Avengers: Age of Ultron'
      },
      {
        order: 3,
        locationName: 'Avengers Tower Laboratory',
        regionAndCountry: 'Manhattan, New York',
        era: '2015',
        vessel: 'Synthetic Vision Forehead',
        coordinates: [40.7580, -73.9855],
        description: 'Ultron creates a vibranium cradle body; Thor strikes it with lightning, creating the synthezoid Vision.',
        media: 'Avengers: Age of Ultron'
      },
      {
        order: 4,
        locationName: 'Avengers Upstate Compound',
        regionAndCountry: 'Upstate New York',
        era: '2016 – 2018',
        vessel: 'Vision Synthezoid Lifeform',
        coordinates: [41.3500, -73.9500],
        description: 'Vision resides as an Avenger and bonds with Wanda Maximoff.',
        media: 'Captain America: Civil War'
      },
      {
        order: 5,
        locationName: 'Waverley Train Station',
        regionAndCountry: 'Edinburgh, Scotland',
        era: '2018',
        vessel: 'Vision Synthezoid Lifeform',
        coordinates: [55.9520, -3.1890],
        description: 'Corvus Glaive and Proxima Midnight ambush Vision to carve out the stone; rescued by Captain America and Black Widow.',
        media: 'Avengers: Infinity War'
      },
      {
        order: 6,
        locationName: 'Shuri\'s Royal Medical Lab',
        regionAndCountry: 'Birnin Zana, Wakanda',
        era: '2018',
        vessel: 'Infinity Gauntlet',
        coordinates: [-3.382, 36.682],
        description: 'Shuri attempts non-lethal neural extraction before Thanos tears the Mind Stone from Vision\'s forehead.',
        media: 'Avengers: Infinity War'
      }
    ]
  },
  'power-stone': {
    id: 'power-stone',
    name: 'Power Stone (The Orb)',
    vessel: 'The Orb Containment Shell',
    colorHex: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    description: 'Unleashes devastating cosmic energy capable of destroying entire planetary surfaces.',
    stops: [
      {
        order: 1,
        locationName: 'Wakanda Planetary Incursion',
        regionAndCountry: 'Birnin Zana, Wakanda',
        era: '2018',
        vessel: 'Infinity Gauntlet',
        coordinates: [-3.382, 36.682],
        description: 'Thanos wields the Power Stone acquired from Xandar to overpower Earth\'s heroes in Wakanda.',
        media: 'Avengers: Infinity War'
      }
    ]
  },
  'soul-stone': {
    id: 'soul-stone',
    name: 'Soul Stone',
    vessel: 'Shrine of Vormir',
    colorHex: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    description: 'Dominates the realm of souls and life essence, requiring a sacrifice of that which is loved most.',
    stops: [
      {
        order: 1,
        locationName: 'Wakanda Final Confrontation',
        regionAndCountry: 'Birnin Zana, Wakanda',
        era: '2018',
        vessel: 'Infinity Gauntlet',
        coordinates: [-3.382, 36.682],
        description: 'Thanos brings the Soul Stone to Earth following Gamora\'s sacrifice on Vormir to perform the Decimation.',
        media: 'Avengers: Infinity War'
      }
    ]
  }
};

type EraPresetKey = 'all' | 'ancient' | 'ww1-depression' | 'ww2' | 'cold-war' | 'avengers' | 'future';

interface EraPreset {
  id: EraPresetKey;
  label: string;
  icon: string;
  range: [number, number];
  description: string;
}

const ERA_PRESETS: EraPreset[] = [
  { id: 'all', label: 'All History', icon: '🌌', range: [-10000000, 3000], description: 'Full history across all epochs.' },
  { id: 'ancient', label: 'Ancient (Pre-1900)', icon: '🏛️', range: [-10000000, 1900], description: 'Knossos, Troy, Shaanxi, Adwa, Tønsberg 965.' },
  { id: 'ww1-depression', label: 'WWI & Noir (1914–1939)', icon: '🕵️', range: [1914, 1939], description: 'WWI Western Front & 1930s Great Depression (Spider-Noir).' },
  { id: 'ww2', label: 'World War II (1940–1945)', icon: '🛡️', range: [1940, 1945], description: 'Captain America TFA, Auschwitz 1944 (Magneto), AoS 1945.' },
  { id: 'cold-war', label: 'Cold War (1946–1970)', icon: '💼', range: [1946, 1970], description: 'Agent Carter (T1 & T2), Smithsonian 1953, Cuban Missile Crisis 1962.' },
  { id: 'avengers', label: 'Avengers Era (2008–2023)', icon: '⚡', range: [2008, 2023], description: 'Marvel Studios Infinity Saga.' },
  { id: 'future', label: 'Future (2024–2400+)', icon: '🚀', range: [2024, 3000], description: 'Post-Endgame & 2400 Future.' },
];

export const MapScreen: React.FC = () => {
  const { 
    setActiveScreen, 
    setSelectedStoneId, 
    selectedMapStoneTrajectoryId, 
    setSelectedMapStoneTrajectoryId 
  } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUniverse, setSelectedUniverse] = useState<string>('all');
  const [selectedPinId, setSelectedPinId] = useState<string | null>(null);
  const [mapViewMode, setMapViewMode] = useState<'earth' | 'cosmic'>('earth');
  const [selectedCosmicRealmId, setSelectedCosmicRealmId] = useState<string | null>(null);

  // Temporal Range Controls State
  const [selectedPreset, setSelectedPreset] = useState<EraPresetKey>('all');
  const [customRange, setCustomRange] = useState<[number, number]>([-10000000, 3000]);
  const [isPlayingSimulation, setIsPlayingSimulation] = useState(false);
  const [simulationIndex, setSimulationIndex] = useState(0);

  // Infinity Stone Trajectory Tracker State
  const [activeStoneTrajectoryId, setActiveStoneTrajectoryId] = useState<string | null>(selectedMapStoneTrajectoryId || null);
  const [selectedTrajectoryStopIndex, setSelectedTrajectoryStopIndex] = useState<number | null>(null);
  const [isTracingTrajectory, setIsTracingTrajectory] = useState(false);

  // Listen to external selection from StoneDrawer
  useEffect(() => {
    if (selectedMapStoneTrajectoryId) {
      setActiveStoneTrajectoryId(selectedMapStoneTrajectoryId);
      setSelectedTrajectoryStopIndex(0);
      setMapViewMode('earth');
      const traj = STONE_TRAJECTORIES[selectedMapStoneTrajectoryId];
      if (traj && traj.stops.length > 0) {
        setTimeout(() => {
          mapInstanceRef.current?.invalidateSize();
          mapInstanceRef.current?.flyTo(traj.stops[0].coordinates, 4.5, { duration: 1.2 });
        }, 150);
      }
    }
  }, [selectedMapStoneTrajectoryId]);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const polylineRef = useRef<L.Polyline | null>(null);
  const trajectoryMarkersRef = useRef<L.Marker[]>([]);

  // Compile all unique geographic / cosmic pins across all timeline eras
  const allPins = useMemo<MapPinItem[]>(() => {
    const pinsMap = new Map<string, MapPinItem>();

    timelineEras.forEach((era) => {
      const [startYr, endYr] = parseYearRange(era.cleanTitle);

      era.events.forEach((evt) => {
        if (evt.locations && evt.locations.length > 0) {
          evt.locations.forEach((loc) => {
            if (loc.coordinates) {
              const key = `${loc.name}-${loc.countryOrRealm}-${loc.coordinates[0]}-${loc.coordinates[1]}`;
              
              let universeGroup: '616' | '10005' | '90214' | 'cosmic' = '616';
              if (evt.earthDesignation?.includes('10005') || loc.planet?.includes('10005')) {
                universeGroup = '10005';
              } else if (evt.earthDesignation?.includes('90214') || loc.planet?.includes('90214')) {
                universeGroup = '90214';
              } else if (loc.planet && loc.planet !== 'Earth') {
                universeGroup = 'cosmic';
              }

              if (!pinsMap.has(key)) {
                pinsMap.set(key, {
                  id: key,
                  name: loc.name,
                  cityOrRegion: loc.cityOrRegion,
                  countryOrRealm: loc.countryOrRealm,
                  planet: loc.planet || 'Earth',
                  coordinates: loc.coordinates,
                  events: [],
                  earthDesignation: evt.earthDesignation || 'Earth-616',
                  universeGroup,
                  minYear: startYr,
                  maxYear: endYr,
                });
              }

              const item = pinsMap.get(key)!;
              item.minYear = Math.min(item.minYear, startYr);
              item.maxYear = Math.max(item.maxYear, endYr);

              item.events.push({
                event: evt,
                eraTitle: era.title,
                eraCleanTitle: era.cleanTitle,
                startYear: startYr,
                endYear: endYr,
              });
            }
          });
        }
      });
    });

    return Array.from(pinsMap.values());
  }, []);

  // Distinct timeline eras for the horizontal chrono-ribbon
  const chronoEras = useMemo(() => {
    const list: { id: string; cleanTitle: string; title: string; year: number; eventCount: number }[] = [];
    timelineEras.forEach((era) => {
      const hasLocs = era.events.some((e) => e.locations && e.locations.length > 0);
      if (hasLocs) {
        const [startY] = parseYearRange(era.cleanTitle);
        list.push({
          id: era.id,
          cleanTitle: era.cleanTitle,
          title: era.title,
          year: startY,
          eventCount: era.events.length,
        });
      }
    });
    return list;
  }, []);

  // Active stone trajectory object
  const activeStoneTrajectory = useMemo(() => {
    if (!activeStoneTrajectoryId) return null;
    return STONE_TRAJECTORIES[activeStoneTrajectoryId] || null;
  }, [activeStoneTrajectoryId]);

  // Filter pins based on Universe, Search, and Temporal Year Range!
  const filteredPins = useMemo(() => {
    const [minRange, maxRange] = customRange;

    return allPins.filter((pin) => {
      // 1. Temporal Year Range Filter
      const hasEventInRange = pin.events.some(
        (e) => e.endYear >= minRange && e.startYear <= maxRange
      );
      if (!hasEventInRange) return false;

      // 2. Universe Filter
      if (selectedUniverse === '616' && pin.universeGroup !== '616') return false;
      if (selectedUniverse === '10005' && pin.universeGroup !== '10005') return false;
      if (selectedUniverse === '90214' && pin.universeGroup !== '90214') return false;
      if (selectedUniverse === 'cosmic' && pin.universeGroup !== 'cosmic') return false;

      // 3. Text Search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = pin.name.toLowerCase().includes(q);
        const matchCity = pin.cityOrRegion?.toLowerCase().includes(q);
        const matchCountry = pin.countryOrRealm.toLowerCase().includes(q);
        const matchPlanet = pin.planet?.toLowerCase().includes(q);
        const matchEvents = pin.events.some((e) => 
          e.event.mediaTitle.toLowerCase().includes(q) || 
          e.eraCleanTitle.toLowerCase().includes(q)
        );
        if (!matchName && !matchCity && !matchCountry && !matchPlanet && !matchEvents) {
          return false;
        }
      }

      return true;
    });
  }, [allPins, selectedUniverse, searchQuery, customRange]);

  const activePin = useMemo(() => {
    if (!selectedPinId) return filteredPins[0] || null;
    return allPins.find((p) => p.id === selectedPinId) || filteredPins[0] || null;
  }, [allPins, filteredPins, selectedPinId]);

  // Set Preset Range
  const handleSelectPreset = (presetKey: EraPresetKey) => {
    setSelectedPreset(presetKey);
    const p = ERA_PRESETS.find((pr) => pr.id === presetKey);
    if (p) {
      setCustomRange(p.range);
      const inRangePins = allPins.filter(
        (pin) => pin.events.some((e) => e.endYear >= p.range[0] && e.startYear <= p.range[1])
      );
      if (inRangePins.length > 0) {
        setSelectedPinId(inRangePins[0].id);
        if (mapInstanceRef.current && mapViewMode === 'earth') {
          mapInstanceRef.current.flyTo(inRangePins[0].coordinates, 4.5, { duration: 1.2 });
        }
      }
    }
  };

  // Focus a single Era from Chrono Ribbon
  const handleSelectChronoEra = (eraCleanTitle: string) => {
    const [startYear, endYear] = parseYearRange(eraCleanTitle);
    const windowMin = startYear < 1900 ? startYear - 100 : startYear - 2;
    const windowMax = startYear < 1900 ? endYear + 100 : endYear + 2;
    setCustomRange([windowMin, windowMax]);
    setSelectedPreset('all');

    const matchingPin = allPins.find((pin) =>
      pin.events.some((e) => e.eraCleanTitle === eraCleanTitle)
    );
    if (matchingPin) {
      setSelectedPinId(matchingPin.id);
      if (mapInstanceRef.current && mapViewMode === 'earth') {
        mapInstanceRef.current.flyTo(matchingPin.coordinates, 5.5, { duration: 1.2 });
      }
    }
  };

  // Simulation Timeline Player
  useEffect(() => {
    if (!isPlayingSimulation) return;

    const playablePresets: EraPresetKey[] = ['ancient', 'ww1-depression', 'ww2', 'cold-war', 'avengers', 'future'];
    const timer = setInterval(() => {
      setSimulationIndex((prev) => {
        const next = (prev + 1) % playablePresets.length;
        handleSelectPreset(playablePresets[next]);
        return next;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [isPlayingSimulation]);

  // Tracing Stone Trajectory Animation
  useEffect(() => {
    if (!isTracingTrajectory || !activeStoneTrajectory) return;

    let currentIdx = 0;
    const stops = activeStoneTrajectory.stops;
    if (stops.length === 0) return;

    const interval = setInterval(() => {
      if (currentIdx >= stops.length) {
        setIsTracingTrajectory(false);
        clearInterval(interval);
        return;
      }

      const stop = stops[currentIdx];
      setSelectedTrajectoryStopIndex(currentIdx);
      if (mapInstanceRef.current && mapViewMode === 'earth') {
        mapInstanceRef.current.flyTo(stop.coordinates, 5, { duration: 1.5 });
      }
      currentIdx++;
    }, 2800);

    return () => clearInterval(interval);
  }, [isTracingTrajectory, activeStoneTrajectory, mapViewMode]);

  // Helper for pin styling
  const getPinColor = (group: string, isSelected: boolean) => {
    if (isSelected) return '#ffffff';
    switch (group) {
      case '10005':
        return '#f59e0b'; // Gold for Fox X-Men
      case '90214':
        return '#c084fc'; // Purple for Spider-Noir
      case 'cosmic':
        return '#10b981'; // Emerald for Cosmic / Wakanda / K'un-Lun
      default:
        return '#e62429'; // Marvel Red for Earth-616
    }
  };

  // Initialize and update Leaflet Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const map = L.map(mapContainerRef.current, {
        center: [30, 0],
        zoom: 2.4,
        minZoom: 1.8,
        maxZoom: 18,
        zoomControl: false,
        attributionControl: true,
        worldCopyJump: true,
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a> | S.H.I.E.L.D. Tactical Cartography',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      L.control.zoom({ position: 'topright' }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Clear old general markers
    markersRef.current.forEach((m) => m.remove());
    markersRef.current = [];

    // Clear old trajectory lines and waypoint markers
    if (polylineRef.current) {
      polylineRef.current.remove();
      polylineRef.current = null;
    }
    trajectoryMarkersRef.current.forEach((m) => m.remove());
    trajectoryMarkersRef.current = [];

    // 1. RENDER INFINITY STONE TRAJECTORY IF ACTIVE
    if (activeStoneTrajectory) {
      const latLngs = activeStoneTrajectory.stops.map((s) => s.coordinates);

      // Draw Glowing Polyline Path
      const polyline = L.polyline(latLngs, {
        color: activeStoneTrajectory.colorHex,
        weight: 3.5,
        opacity: 0.9,
        dashArray: '8, 10',
      }).addTo(map);
      polylineRef.current = polyline;

      // Draw Numbered Waypoint Markers
      activeStoneTrajectory.stops.forEach((stop, index) => {
        const isStopSelected = selectedTrajectoryStopIndex === index;
        const waypointIcon = L.divIcon({
          className: 'stone-waypoint-pin',
          html: `
            <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
              <div style="position: absolute; inset: -4px; border-radius: 50%; background-color: ${activeStoneTrajectory.colorHex}; opacity: ${isStopSelected ? '0.9' : '0.4'}; animation: ping 2s cubic-bezier(0,0,0.2,1) infinite;"></div>
              <div style="position: relative; width: 22px; height: 22px; border-radius: 50%; background-color: #000000; border: 2px solid ${activeStoneTrajectory.colorHex}; box-shadow: 0 0 14px ${activeStoneTrajectory.colorHex}; display: flex; align-items: center; justify-content: center; color: ${activeStoneTrajectory.colorHex}; font-weight: 900; font-size: 11px; font-family: inherit;">
                ${stop.order}
              </div>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        const stopMarker = L.marker(stop.coordinates, { icon: waypointIcon }).addTo(map);

        stopMarker.bindTooltip(
          `<div style="font-family: inherit; font-size: 11px; font-weight: 700; color: #ffffff; background: #000000; padding: 4px 8px; border-radius: 4px; border: 1px solid ${activeStoneTrajectory.colorHex};">
            <div style="color: ${activeStoneTrajectory.colorHex}; font-size: 10px; font-weight: 800; text-transform: uppercase;">STOP ${stop.order} • ${stop.era}</div>
            <div style="color: #ffffff;">${stop.locationName}</div>
            <div style="font-size: 9px; color: #94a3b8;">${stop.vessel}</div>
          </div>`,
          { direction: 'top', offset: [0, -12], opacity: 0.95 }
        );

        stopMarker.on('click', () => {
          setSelectedTrajectoryStopIndex(index);
          map.flyTo(stop.coordinates, 5.5, { duration: 1.2 });
        });

        trajectoryMarkersRef.current.push(stopMarker);
      });

    } else {
      // 2. RENDER NORMAL LOCATION PINS
      filteredPins.forEach((pin) => {
        const isSelected = activePin?.id === pin.id;
        const color = getPinColor(pin.universeGroup, isSelected);

        const customIcon = L.divIcon({
          className: 'custom-mcu-pin',
          html: `
            <div style="position: relative; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
              <div style="position: absolute; inset: -4px; border-radius: 50%; background-color: ${color}; opacity: ${isSelected ? '0.85' : '0.28'}; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
              <div style="position: relative; width: 15px; height: 15px; border-radius: 50%; background-color: ${color}; border: 2px solid #ffffff; box-shadow: 0 0 12px ${color}; display: flex; align-items: center; justify-content: center;">
                <div style="width: 4px; height: 4px; border-radius: 50%; background-color: #000000;"></div>
              </div>
            </div>
          `,
          iconSize: [28, 28],
          iconAnchor: [14, 14],
        });

        const marker = L.marker(pin.coordinates, { icon: customIcon }).addTo(map);

        marker.bindTooltip(
          `<div style="font-family: inherit; font-size: 11px; font-weight: 700; color: #ffffff; background: #000000; padding: 3px 8px; border-radius: 4px; border: 1px solid ${color};">
            <div>${pin.cityOrRegion ? `${pin.cityOrRegion}, ${pin.countryOrRealm}` : pin.name}</div>
            <div style="font-size: 9px; color: #94a3b8; font-weight: normal;">${pin.events.map(e => e.eraCleanTitle).join(' • ')}</div>
          </div>`,
          { direction: 'top', offset: [0, -10], opacity: 0.95 }
        );

        marker.on('click', () => {
          setSelectedPinId(pin.id);
          map.flyTo(pin.coordinates, Math.max(map.getZoom(), 5), { duration: 1.2 });
        });

        markersRef.current.push(marker);
      });
    }

    setTimeout(() => {
      map.invalidateSize();
    }, 150);

  }, [filteredPins, activePin, activeStoneTrajectory, selectedTrajectoryStopIndex]);

  // When switching to Earth mode, invalidate size
  useEffect(() => {
    if (mapViewMode === 'earth' && mapInstanceRef.current) {
      setTimeout(() => {
        mapInstanceRef.current?.invalidateSize();
        if (activeStoneTrajectory && activeStoneTrajectory.stops.length > 0) {
          mapInstanceRef.current?.flyTo(activeStoneTrajectory.stops[0].coordinates, 4, { duration: 1.2 });
        } else if (activePin) {
          mapInstanceRef.current?.flyTo(activePin.coordinates, 4.5, { duration: 1.2 });
        }
      }, 100);
    }
  }, [mapViewMode, activeStoneTrajectory]);

  // Select Infinity Stone Trajectory
  const handleSelectStoneTrajectory = (stoneId: string | null) => {
    setActiveStoneTrajectoryId(stoneId);
    setSelectedMapStoneTrajectoryId(stoneId);
    setSelectedTrajectoryStopIndex(stoneId ? 0 : null);
    setIsTracingTrajectory(false);

    if (stoneId && mapInstanceRef.current && mapViewMode === 'earth') {
      const traj = STONE_TRAJECTORIES[stoneId];
      if (traj && traj.stops.length > 0) {
        mapInstanceRef.current.flyTo(traj.stops[0].coordinates, 4, { duration: 1.2 });
      }
    }
  };

  const jumpToTimelineEvent = (eventId: string) => {
    setActiveScreen('timeline');
    setTimeout(() => {
      const el = document.getElementById(eventId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-2', 'ring-[#e62429]', 'transition-all');
        setTimeout(() => el.classList.remove('ring-2', 'ring-[#e62429]'), 3000);
      }
    }, 150);
  };

  // Cosmic & Multiverse Orrery Realms Data
  const cosmicRealms: CosmicRealm[] = useMemo(() => [
    {
      id: 'midgard',
      name: 'Earth-616 (Sacred Timeline / Midgard)',
      type: 'realm',
      description: 'The central reality and anchor of the Sacred Timeline where the Avengers, SSR, S.H.I.E.L.D., and Wakanda defend history.',
      color: '#38bdf8',
      x: 50,
      y: 50,
      radius: 42,
      universeFilterKey: '616',
      eventsCount: 15,
      featuredEvents: [
        { title: 'Project Rebirth & Captain America', era: '1943', media: 'Captain America: The First Avenger', eventId: 'event-_1943_-1' },
        { title: 'The Battle of Adwa & Wakanda', era: '1896', media: 'Eyes of Wakanda', eventId: 'event-_1896_-1' },
        { title: 'Leviathan Infiltration & Stark Weapons', era: '1946', media: "Marvel's Agent Carter", eventId: 'event-_1946_-1' }
      ]
    },
    {
      id: 'earth-10005',
      name: 'Earth-10005 (Fox X-Men Universe)',
      type: 'multiverse',
      description: 'Parallel timeline where Homo Superior emerges during the Cold War under the opposing leadership of Charles Xavier and Magneto.',
      color: '#f59e0b',
      x: 24,
      y: 35,
      radius: 36,
      universeFilterKey: '10005',
      eventsCount: 2,
      featuredEvents: [
        { title: 'Auschwitz Discovery & Magneto Awakening', era: '1944', media: 'X-Men: First Class', eventId: 'event-1944-xmen-1' },
        { title: 'Cuban Missile Crisis & Division X Split', era: '1962', media: 'X-Men: First Class', eventId: 'event-1962-xmen-1' }
      ]
    },
    {
      id: 'earth-90214',
      name: 'Earth-90214 (Spider-Noir Universe)',
      type: 'multiverse',
      description: 'Alternate gritty 1930s Great Depression New York universe where Ben Reilly operates as the fedora-wearing vigilante The Spider.',
      color: '#c084fc',
      x: 76,
      y: 35,
      radius: 34,
      universeFilterKey: '90214',
      eventsCount: 3,
      featuredEvents: [
        { title: 'WWI Laboratory Rescue & Spider Bite', era: 'c. 1917', media: 'Spider-Noir', eventId: 'event-1917-spider-noir-1' },
        { title: 'Great Depression Vigilante Rebirth', era: '1935', media: 'Spider-Noir', eventId: 'event-1935-spider-noir-1' }
      ]
    },
    {
      id: 'asgard',
      name: 'Asgard (Realm of the Gods)',
      type: 'realm',
      description: 'Golden realm ruled by Odin Allfather, protector of the Nine Realms and home to Thor, Loki, and the Bifrost Bridge.',
      color: '#eab308',
      x: 50,
      y: 18,
      radius: 32,
      universeFilterKey: '616',
      eventsCount: 4,
      featuredEvents: [
        { title: 'Battle of Tønsberg & Frost Giants Defeat', era: '965 AD', media: 'Thor', eventId: 'event-_965_AD_-1' },
        { title: 'Ancient War with Dark Elves & The Aether', era: '5000 years ago', media: 'Thor: The Dark World', eventId: 'event-_5000_years_ago_-1' }
      ]
    },
    {
      id: 'kun-lun',
      name: "K'un-Lun & Ancient Relics",
      type: 'dimension',
      description: "One of the Seven Capital Cities of Heaven, a mystical pocket dimension connecting to Earth, protected by the Immortal Iron Fist.",
      color: '#10b981',
      x: 72,
      y: 68,
      radius: 28,
      universeFilterKey: 'cosmic',
      eventsCount: 1,
      featuredEvents: [
        { title: 'Hatut Zeraze crosses paths with Iron Fist', era: 'c. 1400 C.E.', media: 'Eyes of Wakanda', eventId: 'event-_1400_CE_-1' }
      ]
    },
    {
      id: 'quantum-realm',
      name: 'Quantum Realm (Subatomic Dimension)',
      type: 'dimension',
      description: 'Microverse outside the laws of standard space and time, accessible through Pym Particles or time vortexes.',
      color: '#f43f5e',
      x: 28,
      y: 68,
      radius: 28,
      universeFilterKey: '616',
      eventsCount: 1,
      featuredEvents: [
        { title: 'Endgame Quantum Time Heists Preparation', era: '2023 / Outside Time', media: 'Avengers: Endgame' }
      ]
    },
    {
      id: 'future-2091',
      name: 'Earth-TRN676 (2091 Shattered Earth)',
      type: 'multiverse',
      description: 'Dystopian future timeline where planet Earth was shattered and its remnants are ruled by the Kree at the Lighthouse station.',
      color: '#94a3b8',
      x: 50,
      y: 84,
      radius: 26,
      universeFilterKey: '616',
      eventsCount: 1,
      featuredEvents: [
        { title: 'S.H.I.E.L.D. Future Time Displacement', era: '2091', media: 'Agents of S.H.I.E.L.D. (Season 5)', eventId: 'event-_2091_-1' }
      ]
    }
  ], []);

  const activeCosmicRealm = useMemo(() => {
    if (!selectedCosmicRealmId) return cosmicRealms[0];
    return cosmicRealms.find((r) => r.id === selectedCosmicRealmId) || cosmicRealms[0];
  }, [cosmicRealms, selectedCosmicRealmId]);

  // Navigate directly from Cosmic Orrery to an Earth on the Real Map
  const navigateToEarthUniverse = (universeKey?: '616' | '10005' | '90214' | 'cosmic' | 'all') => {
    const targetUniverse = universeKey || 'all';
    setSelectedUniverse(targetUniverse);
    setMapViewMode('earth');

    setTimeout(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
        const pinsForUniverse = allPins.filter(
          (p) => targetUniverse === 'all' || p.universeGroup === targetUniverse
        );
        if (pinsForUniverse.length > 0) {
          const targetPin = pinsForUniverse[0];
          setSelectedPinId(targetPin.id);
          mapInstanceRef.current.flyTo(targetPin.coordinates, 4.5, { duration: 1.2 });
        } else {
          mapInstanceRef.current.setView([30, 0], 2.4);
        }
      }
    }, 150);
  };

  const formatYearLabel = (yr: number) => {
    if (yr <= -10000) return 'Ancient';
    if (yr < 0) return `${Math.abs(yr)} BCE`;
    if (yr >= 3000) return 'Future';
    return `${yr}`;
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 font-din">
      
      {/* Tactical Header Bar & Mode Switcher */}
      <div className="bg-[#121622] border-2 border-sky-950 rounded-2xl p-4 sm:p-5 mb-4 shadow-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-600 text-white text-[11px] font-black tracking-widest uppercase mb-1 shadow font-title">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '12s' }} />
            <span>S.H.I.E.L.D. TACTICAL CARTOGRAPHY & INFINITY TRAJECTORY RECON</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-wide uppercase font-title leading-tight">
            GLOBAL & <span className="text-sky-400">CHRONOLOGICAL</span> THEATRE
          </h1>
        </div>

        {/* View Mode Toggle + Simulation */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <div className="flex items-center gap-1 bg-[#090d14] p-1 rounded-xl border border-sky-950">
            <button
              onClick={() => setMapViewMode('earth')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-black font-title tracking-wider uppercase transition-all cursor-pointer ${
                mapViewMode === 'earth'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>EARTH MAP</span>
            </button>
            
            <button
              onClick={() => setMapViewMode('cosmic')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-black font-title tracking-wider uppercase transition-all cursor-pointer ${
                mapViewMode === 'cosmic'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Orbit className="w-3.5 h-3.5" />
              <span>COSMIC REALMS</span>
            </button>
          </div>

          <button
            onClick={() => setIsPlayingSimulation(!isPlayingSimulation)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold font-title uppercase tracking-wider transition-all cursor-pointer shadow ${
              isPlayingSimulation
                ? 'bg-emerald-600 text-white animate-pulse'
                : 'bg-[#090d14] text-zinc-300 border border-[#232f45] hover:border-emerald-500 hover:text-white'
            }`}
            title="Auto-play through historical eras"
          >
            {isPlayingSimulation ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PAUSE SIMULATION</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span className="hidden sm:inline">SIMULATE ERAS</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* VIEW 1: EARTH THEATRE (Real Leaflet Dark Map) */}
      <div className={mapViewMode === 'earth' ? 'block' : 'hidden'}>
        
        {/* Top Filter Bar: Search + Realities */}
        <div className="bg-[#121622] border border-sky-950 rounded-xl p-3 mb-4 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between shadow-xl">
          
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search location (e.g. Brooklyn, Auschwitz, Crete, Oxford, Villa Gesell, Tønsberg)..."
              className="w-full bg-[#090d14] border border-[#232f45] rounded-lg pl-10 pr-4 py-1.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 font-din"
            />
          </div>

          {/* Universe & Reality Selector */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setSelectedUniverse('all')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer ${
                selectedUniverse === 'all'
                  ? 'bg-sky-600 text-white shadow'
                  : 'bg-[#090d14] text-zinc-400 border border-[#232f45] hover:text-white'
              }`}
            >
              All Realities ({filteredPins.length})
            </button>
            <button
              onClick={() => setSelectedUniverse('616')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer ${
                selectedUniverse === '616'
                  ? 'bg-[#e62429] text-white shadow'
                  : 'bg-[#090d14] text-zinc-400 border border-[#232f45] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#e62429]" />
              Earth-616
            </button>
            <button
              onClick={() => setSelectedUniverse('10005')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer ${
                selectedUniverse === '10005'
                  ? 'bg-amber-600 text-white shadow'
                  : 'bg-[#090d14] text-zinc-400 border border-[#232f45] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Fox X-Men
            </button>
            <button
              onClick={() => setSelectedUniverse('90214')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer ${
                selectedUniverse === '90214'
                  ? 'bg-purple-600 text-white shadow'
                  : 'bg-[#090d14] text-zinc-400 border border-[#232f45] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-purple-400" />
              Spider-Noir
            </button>
            <button
              onClick={() => setSelectedUniverse('cosmic')}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer ${
                selectedUniverse === 'cosmic'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'bg-[#090d14] text-zinc-400 border border-[#232f45] hover:text-white'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Cosmic / Wakanda
            </button>
          </div>

        </div>

        {/* Main Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Left 8 Cols: Large Map Canvas + Integrated Bottom Deck */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Map Frame */}
            <div className="bg-[#090d14] border-2 border-sky-950 rounded-2xl p-3 sm:p-4 relative shadow-2xl">
              
              {/* Tactical Status Header */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-sky-950/80 text-xs font-mono text-sky-400/80">
                <div className="flex items-center gap-2">
                  <Crosshair className="w-4 h-4 text-sky-400 animate-pulse" />
                  <span>
                    {activeStoneTrajectory
                      ? `TRAJECTORY VECTOR ACTIVE • ${activeStoneTrajectory.name.toUpperCase()}`
                      : 'SATELLITE RECONNAISSANCE GRID • SYS.ONLINE'}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[11px]">
                  <span>
                    {activeStoneTrajectory
                      ? `STOPS: ${activeStoneTrajectory.stops.length}`
                      : `PINS: ${filteredPins.length}`}
                  </span>
                  <span className="hidden sm:inline">PAN & ZOOM ENABLED</span>
                </div>
              </div>

              {/* Leaflet Map Big Canvas */}
              <div 
                ref={mapContainerRef} 
                className="w-full h-[480px] sm:h-[540px] lg:h-[620px] rounded-xl overflow-hidden border border-sky-900/50 shadow-inner z-10"
              />

              {/* Map Quick Legend / Trajectory Controller */}
              <div className="mt-3 pt-2 border-t border-sky-950/80 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400 font-din">
                {activeStoneTrajectory ? (
                  <div className="flex items-center gap-3">
                    <span 
                      className="px-2.5 py-1 rounded text-xs font-black font-title tracking-wider uppercase text-white shadow"
                      style={{ backgroundColor: activeStoneTrajectory.colorHex }}
                    >
                      {activeStoneTrajectory.name}
                    </span>
                    <button
                      onClick={() => setIsTracingTrajectory(!isTracingTrajectory)}
                      className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#000000] border border-sky-600 text-sky-300 hover:text-white text-xs font-bold font-title uppercase tracking-wider cursor-pointer shadow transition-all"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>{isTracingTrajectory ? 'STOP TRACING' : 'TRACE HISTORICAL TRAJECTORY'}</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center gap-4 flex-wrap text-[11px]">
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#e62429]" />
                      Earth-616
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      Fox X-Men (10005)
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                      Spider-Noir (90214)
                    </span>
                    <span className="flex items-center gap-1.5 text-zinc-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      Wakanda / Cosmic
                    </span>
                  </div>
                )}

                <button
                  onClick={() => setMapViewMode('cosmic')}
                  className="flex items-center gap-1 text-sky-400 hover:text-white font-bold tracking-wider uppercase text-[11px] font-title cursor-pointer transition-colors"
                >
                  <span>ZOOM OUT TO MULTIVERSE</span>
                  <Orbit className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* INTEGRATED BOTTOM CONTROL CONSOLE: STONES + TIMELINE ERAS */}
            <div className="bg-[#10141f] border-2 border-sky-950 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-4">
              
              {/* SECTION 1: INFINITY STONE TRAJECTORY TRACKER */}
              <div className="pb-3 border-b border-sky-950/80">
                <div className="flex items-center justify-between gap-3 mb-2.5 flex-wrap">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-indigo-300 font-title">
                    <Route className="w-4 h-4 text-indigo-400" />
                    <span>INFINITY STONE TRAJECTORY TRACKER:</span>
                  </div>
                  {activeStoneTrajectory && (
                    <span 
                      className="px-2.5 py-0.5 rounded text-[11px] font-black font-title tracking-wider uppercase text-white shadow"
                      style={{ backgroundColor: activeStoneTrajectory.colorHex }}
                    >
                      ACTIVE: {activeStoneTrajectory.name} ({activeStoneTrajectory.stops.length} STOPS)
                    </span>
                  )}
                </div>

                {/* 6 Stone Selector Buttons */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                  <button
                    onClick={() => handleSelectStoneTrajectory(null)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold font-title tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                      activeStoneTrajectoryId === null
                        ? 'bg-zinc-700 text-white shadow'
                        : 'bg-[#060910] text-zinc-400 border border-[#1e293b] hover:text-white'
                    }`}
                  >
                    All Locations
                  </button>

                  {Object.values(STONE_TRAJECTORIES).map((stone) => {
                    const isSelected = activeStoneTrajectoryId === stone.id;
                    return (
                      <button
                        key={stone.id}
                        onClick={() => handleSelectStoneTrajectory(stone.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-title tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer shrink-0 shadow-sm ${
                          isSelected
                            ? 'text-white ring-2 ring-white shadow-lg'
                            : 'bg-[#060910] text-zinc-400 border border-[#1e293b] hover:text-white'
                        }`}
                        style={{
                          backgroundColor: isSelected ? stone.colorHex : undefined,
                          borderColor: isSelected ? stone.colorHex : undefined,
                        }}
                      >
                        <Sparkles className="w-3 h-3" style={{ color: isSelected ? '#ffffff' : stone.colorHex }} />
                        <span>{stone.name.split(' (')[0]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 2: HISTORICAL ERA SCRUBBER & CHRONOLOGY */}
              <div>
                <div className="flex items-center justify-between gap-3 mb-2.5 flex-wrap">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-sky-300 font-title">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    <span>HISTORICAL ERA SCRUBBER & CHRONOLOGY</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="hidden sm:inline">ACTIVE WINDOW:</span>
                    <span className="px-2.5 py-0.5 rounded bg-[#040810] border border-sky-800 text-sky-300 font-bold">
                      {formatYearLabel(customRange[0])} ➔ {formatYearLabel(customRange[1])}
                    </span>
                    <button
                      onClick={() => handleSelectPreset('all')}
                      className="p-1 rounded bg-[#1c2333] hover:bg-[#2a344d] text-zinc-400 hover:text-white cursor-pointer transition-colors"
                      title="Reset to All History"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Era Preset Buttons */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                  {ERA_PRESETS.map((preset) => {
                    const isSelected = selectedPreset === preset.id;
                    return (
                      <button
                        key={preset.id}
                        onClick={() => handleSelectPreset(preset.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-title tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer shrink-0 shadow-sm ${
                          isSelected
                            ? 'bg-sky-500 text-white ring-2 ring-sky-300 shadow-md'
                            : 'bg-[#090d14] text-zinc-400 border border-[#1e293b] hover:border-sky-500 hover:text-white'
                        }`}
                        title={preset.description}
                      >
                        <span>{preset.icon}</span>
                        <span>{preset.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3: QUICK SPECIFIC YEARS RIBBON */}
              <div className="pt-3 border-t border-sky-950/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest shrink-0 font-title">
                  QUICK YEARS:
                </span>
                {chronoEras.map((cEra) => (
                  <button
                    key={cEra.id}
                    onClick={() => handleSelectChronoEra(cEra.cleanTitle)}
                    className="px-2.5 py-1 rounded-md bg-[#060910] hover:bg-sky-900/60 border border-[#1e293b] hover:border-sky-400 text-zinc-300 hover:text-white text-[11px] font-mono whitespace-nowrap transition-all cursor-pointer shrink-0 shadow-sm"
                  >
                    {cEra.cleanTitle.split(' (')[0]}
                  </button>
                ))}
              </div>

            </div>

          </div>

          {/* Right 4 Cols: Location / Stone Trajectory Dossier */}
          <div className="lg:col-span-4 space-y-4">
            {activeStoneTrajectory ? (
              // Stone Trajectory Intel Deck
              <div className="bg-[#141414] border-2 rounded-2xl p-6 shadow-2xl relative overflow-hidden" style={{ borderColor: `${activeStoneTrajectory.colorHex}66` }}>
                
                {/* Header Title */}
                <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-[#242424]">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5" style={{ color: activeStoneTrajectory.colorHex }} />
                      <span className="text-[11px] font-bold tracking-widest uppercase font-title" style={{ color: activeStoneTrajectory.colorHex }}>
                        INFINITY RELIC TRAJECTORY
                      </span>
                    </div>
                    <h2 className="text-xl font-black text-white uppercase font-title leading-tight">
                      {activeStoneTrajectory.name}
                    </h2>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Vessel: <strong className="text-zinc-200">{activeStoneTrajectory.vessel}</strong>
                    </p>
                  </div>

                  <button
                    onClick={() => setSelectedStoneId(activeStoneTrajectory.id.replace('-stone', '') as any)}
                    className="p-2 rounded-lg bg-[#090d14] border hover:border-white text-white transition-colors cursor-pointer"
                    style={{ borderColor: activeStoneTrajectory.colorHex }}
                    title="Open Full Infinity Stone Dossier"
                  >
                    <ExternalLink className="w-4 h-4" style={{ color: activeStoneTrajectory.colorHex }} />
                  </button>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-300 leading-relaxed mb-5 bg-[#0a0a0a] p-3.5 rounded-xl border border-[#27272a]">
                  {activeStoneTrajectory.description}
                </p>

                {/* Waypoints Sequence */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5 font-title">
                    <Route className="w-3.5 h-3.5" style={{ color: activeStoneTrajectory.colorHex }} />
                    <span>CHRONOLOGICAL TRAJECTORY STOPS ({activeStoneTrajectory.stops.length})</span>
                  </h3>

                  <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1">
                    {activeStoneTrajectory.stops.map((stop, sIdx) => {
                      const isSelected = selectedTrajectoryStopIndex === sIdx;
                      return (
                        <div
                          key={sIdx}
                          onClick={() => {
                            setSelectedTrajectoryStopIndex(sIdx);
                            if (mapInstanceRef.current) {
                              mapInstanceRef.current.flyTo(stop.coordinates, 6, { duration: 1.2 });
                            }
                          }}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer group ${
                            isSelected
                              ? 'bg-[#1e293b]/70 shadow-lg'
                              : 'bg-[#181818] border-[#2a2a2a] hover:border-zinc-500'
                          }`}
                          style={{
                            borderColor: isSelected ? activeStoneTrajectory.colorHex : undefined,
                          }}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <div className="flex items-center gap-2">
                              <span 
                                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-black font-title"
                                style={{ backgroundColor: activeStoneTrajectory.colorHex }}
                              >
                                {stop.order}
                              </span>
                              <span className="text-xs font-black font-title tracking-wider text-white uppercase group-hover:text-sky-300 transition-colors">
                                {stop.locationName}
                              </span>
                            </div>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0a0a0a] border border-[#333333] text-zinc-400 font-title uppercase">
                              {stop.era}
                            </span>
                          </div>

                          <div className="text-[11px] text-zinc-400 mb-1.5 font-mono">
                            📍 {stop.regionAndCountry}
                          </div>

                          <p className="text-xs text-zinc-300 leading-relaxed mb-2 font-din">
                            {stop.description}
                          </p>

                          {stop.eventId && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                jumpToTimelineEvent(stop.eventId!);
                              }}
                              className="w-full flex items-center justify-center gap-1.5 py-1 rounded bg-[#000000] hover:bg-[#e62429] text-zinc-300 hover:text-white border border-[#333333] text-[11px] font-bold font-title tracking-wider uppercase transition-all cursor-pointer"
                            >
                              <span>OPEN IN TIMELINE</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            ) : activePin ? (
              // Regular Location Intel Dossier
              <div className="bg-[#141414] border-2 border-sky-900/60 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
                
                {/* Header Title */}
                <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-[#242424]">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span 
                        className="w-2.5 h-2.5 rounded-full shrink-0" 
                        style={{ backgroundColor: getPinColor(activePin.universeGroup, false) }}
                      />
                      <span className="text-[11px] font-bold tracking-widest text-sky-400 uppercase font-title">
                        {activePin.earthDesignation}
                      </span>
                    </div>
                    <h2 className="text-xl font-black text-white uppercase font-title leading-tight">
                      {activePin.name}
                    </h2>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {activePin.cityOrRegion ? `${activePin.cityOrRegion}, ` : ''}{activePin.countryOrRealm} • <span className="text-zinc-300">{activePin.planet}</span>
                    </p>
                  </div>

                  <div className="p-2 rounded-lg bg-[#090d14] border border-sky-950 text-sky-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>

                {/* Coordinates & Focus Action */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#0a0a0a] border border-[#262626] mb-5 text-xs font-mono">
                  <span className="text-zinc-500">COORDINATES:</span>
                  <span className="text-sky-300 font-bold">
                    {activePin.coordinates[0].toFixed(4)}° N, {activePin.coordinates[1].toFixed(4)}° E
                  </span>
                </div>

                {/* Associated Historical Events */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5 font-title">
                    <Clock className="w-3.5 h-3.5 text-[#e62429]" />
                    <span>HISTORICAL EVENTS AT THIS SITE ({activePin.events.length})</span>
                  </h3>

                  <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                    {activePin.events.map(({ event, eraTitle, eraCleanTitle }) => (
                      <div 
                        key={event.id}
                        className="p-3.5 rounded-xl bg-[#181818] border border-[#2a2a2a] hover:border-sky-500/80 transition-all group"
                      >
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-black font-title tracking-wider text-white uppercase group-hover:text-sky-300 transition-colors">
                            {eraTitle}
                          </span>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0a0a0a] border border-[#333333] text-zinc-400 font-title uppercase">
                            {event.mediaTitle}
                          </span>
                        </div>

                        <p className="text-xs text-zinc-300 leading-relaxed mb-3 line-clamp-3 font-din">
                          {event.paragraphs[0]?.replace(/<[^>]*>?/gm, '')}
                        </p>

                        <button
                          onClick={() => jumpToTimelineEvent(event.id)}
                          className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-[#000000] hover:bg-[#e62429] text-zinc-300 hover:text-white border border-[#333333] hover:border-[#e62429] text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer shadow-sm"
                        >
                          <span>OPEN IN TIMELINE</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              <div className="bg-[#141414] border border-[#27272a] rounded-2xl p-8 text-center text-zinc-500">
                <Compass className="w-8 h-8 mx-auto mb-2 text-zinc-600" />
                <p className="text-xs font-din">No locations active in this historical period. Select another era below the map.</p>
              </div>
            )}
          </div>

        </div>

      </div>

      {/* VIEW 2: COSMIC ORRERY & MULTIVERSE REALMS */}
      <div className={mapViewMode === 'cosmic' ? 'block' : 'hidden'}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 8 Cols: Celestial Space & Multiverse Interactive Orrery */}
          <div className="lg:col-span-8 bg-[#060814] border-2 border-purple-950 rounded-2xl p-6 relative shadow-2xl overflow-hidden">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-purple-950 text-xs font-mono text-purple-300/80">
              <div className="flex items-center gap-2">
                <Orbit className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '20s' }} />
                <span>MULTIVERSAL ORRERY & CELESTIAL REALMS CANVAS</span>
              </div>
              <span>COSMIC REALMS: <strong className="text-white">{cosmicRealms.length}</strong></span>
            </div>

            {/* Orrery Canvas */}
            <div className="relative w-full h-[520px] sm:h-[580px] bg-[#03040a] border border-purple-900/40 rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
              
              {/* Cosmic Starfield & Nebula Background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#03040a] to-[#010206] pointer-events-none" />
              
              {/* Concentric Orbital Rings */}
              <div className="absolute w-[80%] aspect-square rounded-full border border-purple-500/10 pointer-events-none animate-spin" style={{ animationDuration: '90s' }} />
              <div className="absolute w-[58%] aspect-square rounded-full border border-sky-500/15 pointer-events-none animate-spin" style={{ animationDuration: '60s' }} />
              <div className="absolute w-[36%] aspect-square rounded-full border border-amber-500/20 pointer-events-none animate-spin" style={{ animationDuration: '40s' }} />

              {/* Celestial Nodes / Multiverse Spheres */}
              {cosmicRealms.map((realm) => {
                const isSelected = activeCosmicRealm.id === realm.id;
                return (
                  <button
                    key={realm.id}
                    onClick={() => {
                      setSelectedCosmicRealmId(realm.id);
                    }}
                    style={{ left: `${realm.x}%`, top: `${realm.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group/realm cursor-pointer focus:outline-none transition-transform z-20"
                  >
                    {/* Pulsing Aura */}
                    <div 
                      className={`absolute -inset-4 rounded-full transition-all ${
                        isSelected ? 'animate-pulse opacity-80' : 'opacity-20 group-hover/realm:opacity-60'
                      }`}
                      style={{ backgroundColor: realm.color, filter: 'blur(8px)' }}
                    />

                    {/* Planet / Realm Sphere */}
                    <div 
                      className={`relative rounded-full flex items-center justify-center border-2 transition-all shadow-2xl ${
                        isSelected 
                          ? 'scale-125 ring-4 ring-white/60' 
                          : 'group-hover:scale-110'
                      }`}
                      style={{
                        width: `${realm.radius}px`,
                        height: `${realm.radius}px`,
                        backgroundColor: '#000000',
                        borderColor: realm.color,
                        boxShadow: `0 0 15px ${realm.color}`,
                      }}
                    >
                      <Sparkles className="w-3.5 h-3.5" style={{ color: realm.color }} />
                    </div>

                    {/* Label Badge */}
                    <div 
                      className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2.5 py-0.5 rounded text-[10px] font-bold font-title tracking-wider uppercase whitespace-nowrap transition-all shadow-xl ${
                        isSelected 
                          ? 'bg-white text-black ring-2 ring-purple-500' 
                          : 'bg-black/90 text-zinc-300 border border-zinc-700 group-hover/realm:border-white'
                      }`}
                    >
                      {realm.name.split(' (')[0]}
                    </div>
                  </button>
                );
              })}

            </div>

            {/* Back to Earth Map Button */}
            <div className="mt-4 pt-3 border-t border-purple-950 flex items-center justify-between text-xs text-zinc-400 font-din">
              <span className="text-purple-300">CLICK ANY CELESTIAL REALM TO VIEW ITS MULTIVERSAL DOSSIER</span>
              <button
                onClick={() => navigateToEarthUniverse('all')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold font-title uppercase text-xs cursor-pointer shadow transition-all"
              >
                <Globe2 className="w-3.5 h-3.5" />
                <span>RETURN TO EARTH MAP</span>
              </button>
            </div>

          </div>

          {/* Right 4 Cols: Celestial Realm Dossier */}
          <div className="lg:col-span-4">
            <div className="bg-[#141414] border-2 border-purple-900/60 rounded-2xl p-6 shadow-2xl">
              
              {/* Realm Header */}
              <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-[#242424]">
                <div>
                  <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2 py-0.5 rounded bg-purple-950 border border-purple-600 text-purple-300">
                    {activeCosmicRealm.type.toUpperCase()}
                  </span>
                  <h2 className="text-xl font-black text-white uppercase font-title leading-tight mt-2">
                    {activeCosmicRealm.name}
                  </h2>
                </div>

                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white border shadow-lg shrink-0"
                  style={{ backgroundColor: `${activeCosmicRealm.color}22`, borderColor: activeCosmicRealm.color }}
                >
                  <Orbit className="w-5 h-5" style={{ color: activeCosmicRealm.color }} />
                </div>
              </div>

              {/* Enter Earth Reality Map Action */}
              <button
                onClick={() => navigateToEarthUniverse(activeCosmicRealm.universeFilterKey)}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold font-title uppercase text-xs mb-4 shadow-lg cursor-pointer transition-all"
              >
                <Globe2 className="w-4 h-4" />
                <span>EXPLORE THIS REALITY ON REAL MAP</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Description */}
              <p className="text-xs text-zinc-300 leading-relaxed mb-6 bg-[#0a0a0a] p-4 rounded-xl border border-[#27272a]">
                {activeCosmicRealm.description}
              </p>

              {/* Featured Timeline Events in Realm */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-1.5 font-title">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>KEY EVENTS IN THIS REALM</span>
                </h3>

                <div className="space-y-3">
                  {activeCosmicRealm.featuredEvents.map((evt, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#181818] border border-[#2a2a2a] hover:border-purple-500/80 transition-all"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-xs font-black font-title tracking-wider text-white uppercase">
                          {evt.era}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#0a0a0a] border border-[#333333] text-zinc-400 font-title uppercase">
                          {evt.media}
                        </span>
                      </div>

                      <p className="text-xs text-zinc-300 mb-2 font-din">
                        {evt.title}
                      </p>

                      {evt.eventId && (
                        <button
                          onClick={() => jumpToTimelineEvent(evt.eventId!)}
                          className="w-full flex items-center justify-center gap-1.5 py-1 rounded bg-[#000000] hover:bg-purple-600 text-zinc-300 hover:text-white border border-[#333333] text-[11px] font-bold font-title tracking-wider uppercase transition-all cursor-pointer"
                        >
                          <span>OPEN IN TIMELINE</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
