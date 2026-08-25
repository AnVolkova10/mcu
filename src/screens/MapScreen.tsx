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
  Navigation,
  User,
  Users,
  ChevronDown
} from 'lucide-react';
import { mediaData } from '@/data/mediaData';
import { allCharacters, charactersData } from '@/data/charactersData';

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
        regionAndCountry: 'Arctic Circle / Greenland Ice Sheet',
        era: '1945',
        vessel: 'Valkyrie Cockpit',
        coordinates: [67.5, -35.0],
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

export interface HistoricalStoneSnapshot {
  stoneId: string;
  name: string;
  vessel: string;
  colorHex: string;
  coordinates: [number, number];
  locationName: string;
  regionAndCountry: string;
  bearer: string;
  yearRange: [number, number];
  description: string;
}

export const HISTORICAL_STONE_SNAPSHOTS: HistoricalStoneSnapshot[] = [
  // SPACE STONE (TESSERACT)
  {
    stoneId: 'space-stone',
    name: 'Space Stone (Tesseract)',
    vessel: 'Tesseract Relic',
    colorHex: '#38bdf8',
    coordinates: [64.15, -21.94],
    locationName: 'Royal Vault of Odin',
    regionAndCountry: 'Asgard',
    bearer: 'King Bor / Odin Allfather',
    yearRange: [-10000000, 964],
    description: 'Brought to Earth by Odin during the Norse wars against the Frost Giants.'
  },
  {
    stoneId: 'space-stone',
    name: 'Space Stone (Tesseract)',
    vessel: 'Church Crypt Relic',
    colorHex: '#38bdf8',
    coordinates: [59.267, 10.407],
    locationName: 'Ancient Norse Crypt',
    regionAndCountry: 'Tønsberg, Norway',
    bearer: 'Norse Church Cult / Guardian',
    yearRange: [965, 1941],
    description: 'Concealed behind a stone fresco carved with Yggdrasil.'
  },
  {
    stoneId: 'space-stone',
    name: 'Space Stone (Tesseract)',
    vessel: 'HYDRA Extraction Matrix',
    colorHex: '#38bdf8',
    coordinates: [51.165, 10.451],
    locationName: 'Castle Kaufmann / HYDRA Weapons Lab',
    regionAndCountry: 'Bavaria & Austrian Alps',
    bearer: 'Johann Schmidt (Red Skull) & Arnim Zola',
    yearRange: [1942, 1944],
    description: 'Harnessed to power HYDRA energy weapons and the Valkyrie super-bomber.'
  },
  {
    stoneId: 'space-stone',
    name: 'Space Stone (Tesseract)',
    vessel: 'SSR Deep Sea Recovery',
    colorHex: '#38bdf8',
    coordinates: [67.5, -35.0],
    locationName: 'Arctic Ocean Seabed',
    regionAndCountry: 'Arctic Circle / Greenland Trench',
    bearer: 'Howard Stark / SSR Recovery Team',
    yearRange: [1945, 1945],
    description: 'Fell from the Valkyrie hull into the ice shelf; recovered by Howard Stark.'
  },
  {
    stoneId: 'space-stone',
    name: 'Space Stone (Tesseract)',
    vessel: 'SSR / S.H.I.E.L.D. Secure Vault',
    colorHex: '#38bdf8',
    coordinates: [40.7128, -74.0060],
    locationName: 'SSR Archives & Howard Stark Vault',
    regionAndCountry: 'Manhattan, New York',
    bearer: 'Howard Stark / Peggy Carter / S.H.I.E.L.D.',
    yearRange: [1946, 1994],
    description: 'Studied by Howard Stark and early S.H.I.E.L.D. founders.'
  },
  {
    stoneId: 'space-stone',
    name: 'Space Stone (Tesseract)',
    vessel: 'Project P.E.G.A.S.U.S. Laboratory',
    colorHex: '#38bdf8',
    coordinates: [35.011, -115.473],
    locationName: 'Joint Dark Energy Facility',
    regionAndCountry: 'Mojave Desert, California',
    bearer: 'Dr. Wendy Lawson (Mar-Vell) / Nick Fury / Dr. Erik Selvig',
    yearRange: [1995, 2011],
    description: 'Researched for light-speed engine propulsion and energy extraction.'
  },
  {
    stoneId: 'space-stone',
    name: 'Space Stone (Tesseract)',
    vessel: 'Chitauri Wormhole Generator',
    colorHex: '#38bdf8',
    coordinates: [40.7580, -73.9855],
    locationName: 'Stark Tower / Battle of New York',
    regionAndCountry: 'Manhattan, New York City',
    bearer: 'Loki / Avengers / Thor',
    yearRange: [2012, 2012],
    description: 'Thor returns the Tesseract to Asgard following the Battle of New York.'
  },
  {
    stoneId: 'space-stone',
    name: 'Space Stone (Tesseract)',
    vessel: 'Asgard Royal Vault',
    colorHex: '#38bdf8',
    coordinates: [64.15, -21.94],
    locationName: 'Odin\'s Vault',
    regionAndCountry: 'Asgard',
    bearer: 'Heimdall / Loki',
    yearRange: [2013, 2017],
    description: 'Locked in the Vault until Loki steals it during the destruction of Asgard.'
  },
  {
    stoneId: 'space-stone',
    name: 'Space Stone',
    vessel: 'Infinity Gauntlet',
    colorHex: '#38bdf8',
    coordinates: [-3.382, 36.682],
    locationName: 'Wakanda Battlefield',
    regionAndCountry: 'Birnin Zana, Wakanda',
    bearer: 'Thanos',
    yearRange: [2018, 3000],
    description: 'Crushed from the Tesseract and slotted into the Infinity Gauntlet.'
  },

  // TIME STONE (EYE OF AGAMOTTO)
  {
    stoneId: 'time-stone',
    name: 'Time Stone (Eye of Agamotto)',
    vessel: 'Eye of Agamotto Amulet',
    colorHex: '#10b981',
    coordinates: [27.7172, 85.3240],
    locationName: 'Kamar-Taj Mystic Library',
    regionAndCountry: 'Kathmandu, Nepal',
    bearer: 'Agamotto / Ancient One / Masters of Mystic Arts',
    yearRange: [-10000000, 2015],
    description: 'Enshrined in the Eye of Agamotto to safeguard the flow of time and protect Earth from cosmic perils.'
  },
  {
    stoneId: 'time-stone',
    name: 'Time Stone (Eye of Agamotto)',
    vessel: 'Doctor Strange Amulet',
    colorHex: '#10b981',
    coordinates: [40.7291, -73.9980],
    locationName: 'New York Sanctum Sanctorum',
    regionAndCountry: 'Manhattan, New York',
    bearer: 'Doctor Stephen Strange',
    yearRange: [2016, 2017],
    description: 'Used by Doctor Strange to defeat Dormammu and protect the multiverse.'
  },
  {
    stoneId: 'time-stone',
    name: 'Time Stone',
    vessel: 'Infinity Gauntlet',
    colorHex: '#10b981',
    coordinates: [-3.382, 36.682],
    locationName: 'Wakanda Final Stand',
    regionAndCountry: 'Birnin Zana, Wakanda',
    bearer: 'Thanos',
    yearRange: [2018, 3000],
    description: 'Surrendered on Titan to save Tony Stark; used on Earth to undo Mind Stone destruction.'
  },

  // REALITY STONE (THE AETHER)
  {
    stoneId: 'reality-stone',
    name: 'Reality Stone (The Aether)',
    vessel: 'Fluid Dark Matter (Aether)',
    colorHex: '#ef4444',
    coordinates: [60.000, 15.000],
    locationName: 'Svartalfheim Deep Chamber',
    regionAndCountry: 'Dark World / Dimensional Void',
    bearer: 'King Bor of Asgard (Sealed)',
    yearRange: [-10000000, 2012],
    description: 'Buried deep within a stone column where no one could ever find it.'
  },
  {
    stoneId: 'reality-stone',
    name: 'Reality Stone (The Aether)',
    vessel: 'Host Infection / Extraction',
    colorHex: '#ef4444',
    coordinates: [51.4826, -0.0077],
    locationName: 'Greenwich Convergence Zone',
    regionAndCountry: 'London, United Kingdom',
    bearer: 'Jane Foster / Malekith / Thor',
    yearRange: [2013, 2013],
    description: 'Absorbed by Jane Foster and weaponized by Malekith during the Nine Realms Convergence.'
  },
  {
    stoneId: 'reality-stone',
    name: 'Reality Stone (The Aether)',
    vessel: 'The Collector\'s Museum Vault',
    colorHex: '#ef4444',
    coordinates: [18.2206, -66.5901],
    locationName: 'Knowhere Mining Colony',
    regionAndCountry: 'Celestial Severed Head (Knowhere)',
    bearer: 'Taneleer Tivan (The Collector)',
    yearRange: [2014, 2017],
    description: 'Entrusted to The Collector by Asgardians because two stones should not remain together.'
  },
  {
    stoneId: 'reality-stone',
    name: 'Reality Stone',
    vessel: 'Infinity Gauntlet',
    colorHex: '#ef4444',
    coordinates: [-3.382, 36.682],
    locationName: 'Wakanda Battlefield',
    regionAndCountry: 'Birnin Zana, Wakanda',
    bearer: 'Thanos',
    yearRange: [2018, 3000],
    description: 'Claimed by Thanos on Knowhere to warp reality across the cosmos.'
  },

  // MIND STONE
  {
    stoneId: 'mind-stone',
    name: 'Mind Stone',
    vessel: 'Chitauri Scepter / S.H.I.E.L.D.',
    colorHex: '#eab308',
    coordinates: [40.7580, -73.9855],
    locationName: 'Battle of New York / Stark Tower',
    regionAndCountry: 'Manhattan, New York',
    bearer: 'Loki / STRIKE HYDRA Unit',
    yearRange: [2012, 2012],
    description: 'Gifted to Loki by Thanos; covertly seized by undercover HYDRA operatives in S.H.I.E.L.D.'
  },
  {
    stoneId: 'mind-stone',
    name: 'Mind Stone',
    vessel: 'Human Mutation Chamber',
    colorHex: '#eab308',
    coordinates: [45.8150, 15.9819],
    locationName: 'HYDRA Sokovia Research Fortress',
    regionAndCountry: 'Novi Grad, Sokovia',
    bearer: 'Baron Wolfgang von Strucker / Dr. List',
    yearRange: [2013, 2015],
    description: 'Used to perform genetic human enhancement on Wanda and Pietro Maximoff.'
  },
  {
    stoneId: 'mind-stone',
    name: 'Mind Stone',
    vessel: 'Vision Synthezoid Forehead',
    colorHex: '#eab308',
    coordinates: [41.3500, -73.9500],
    locationName: 'Avengers Upstate Facility',
    regionAndCountry: 'New York, United States',
    bearer: 'Vision',
    yearRange: [2015, 2017],
    description: 'Implanted into Vision\'s synthetic vibranium body, providing him sapience and cosmic energy beams.'
  },
  {
    stoneId: 'mind-stone',
    name: 'Mind Stone',
    vessel: 'Infinity Gauntlet',
    colorHex: '#eab308',
    coordinates: [-3.382, 36.682],
    locationName: 'Wakanda Forest Stand',
    regionAndCountry: 'Birnin Zana, Wakanda',
    bearer: 'Thanos',
    yearRange: [2018, 3000],
    description: 'Ripped from Vision\'s forehead after Thanos reverses time.'
  },

  // POWER STONE (THE ORB)
  {
    stoneId: 'power-stone',
    name: 'Power Stone (The Orb)',
    vessel: 'The Orb Containment Shell',
    colorHex: '#a855f7',
    coordinates: [-12.000, 120.000],
    locationName: 'Temple Vault of Morag',
    regionAndCountry: 'Planet Morag (Submerged Ocean Ruins)',
    bearer: 'Ancient Celestials / Temple Guardians',
    yearRange: [-10000000, 2013],
    description: 'Submerged beneath boiling oceans until the waters recede once every 300 years.'
  },
  {
    stoneId: 'power-stone',
    name: 'Power Stone (The Orb)',
    vessel: 'Nova Corps High Security Vault',
    colorHex: '#a855f7',
    coordinates: [25.2048, 55.2708],
    locationName: 'Nova Corps Citadel',
    regionAndCountry: 'Planet Xandar',
    bearer: 'Nova Prime Irani Rael & Nova Corps',
    yearRange: [2014, 2017],
    description: 'Entrusted to the Nova Corps for galactic defense following the defeat of Ronan the Accuser.'
  },
  {
    stoneId: 'power-stone',
    name: 'Power Stone',
    vessel: 'Infinity Gauntlet',
    colorHex: '#a855f7',
    coordinates: [-3.382, 36.682],
    locationName: 'Wakanda Battlefield',
    regionAndCountry: 'Birnin Zana, Wakanda',
    bearer: 'Thanos',
    yearRange: [2018, 3000],
    description: 'Thanos decimates Xandar to seize the Power Stone as his first relic.'
  },

  // SOUL STONE
  {
    stoneId: 'soul-stone',
    name: 'Soul Stone',
    vessel: 'Altar of Vormir',
    colorHex: '#f97316',
    coordinates: [15.000, 45.000],
    locationName: 'Shrine of the Lost Soul',
    regionAndCountry: 'Planet Vormir',
    bearer: 'Red Skull (Stonekeeper)',
    yearRange: [-10000000, 2017],
    description: 'Guarded by the spectral Red Skull, awaiting a sacrifice of that which is loved most.'
  },
  {
    stoneId: 'soul-stone',
    name: 'Soul Stone',
    vessel: 'Infinity Gauntlet',
    colorHex: '#f97316',
    coordinates: [-3.382, 36.682],
    locationName: 'Wakanda Battlefield',
    regionAndCountry: 'Birnin Zana, Wakanda',
    bearer: 'Thanos',
    yearRange: [2018, 3000],
    description: 'Acquired through the sacrifice of Gamora on Vormir.'
  }
];

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

// Reusable Horizontal Drag-to-Scroll Container for Pills
export const DragScrollRow: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = '' }) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = rowRef.current;
    if (!el) return;
    isDown.current = true;
    startX.current = e.pageX - el.offsetLeft;
    scrollLeft.current = el.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    const el = rowRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    el.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div
      ref={rowRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      className={`overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing select-none ${className}`}
    >
      {children}
    </div>
  );
};

export const MapScreen: React.FC = () => {
  const { 
    setActiveScreen, 
    setSelectedStoneId, 
    selectedMapStoneTrajectoryId, 
    setSelectedMapStoneTrajectoryId,
    selectedMapCharacterId,
    setSelectedMapCharacterId
  } = useStore();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUniverse, setSelectedUniverse] = useState<string>('all');
  const [selectedPinId, setSelectedPinId] = useState<string | null>(null);
  const [mapViewMode, setMapViewMode] = useState<'earth' | 'cosmic'>('earth');
  const [selectedCosmicRealmId, setSelectedCosmicRealmId] = useState<string | null>(null);

  // Helper to normalize stone trajectory ID
  const normalizeStoneId = (id: string | null) => {
    if (!id) return null;
    return id.endsWith('-stone') ? id : `${id}-stone`;
  };

  // Helper to normalize character ID (aliases -> canonical character keys)
  const normalizeCharacterId = (id: string | null) => {
    if (!id) return null;
    if (id === 'spider-noir') return 'ben-reilly-noir';
    if (id === 'captain-america') return 'steve-rogers';
    if (id === 'agent-carter') return 'peggy-carter';
    if (id === 'magneto') return 'erik-lehnsherr';
    if (id === 'professor-x') return 'charles-xavier';
    if (id === 'winter-soldier') return 'bucky-barnes';
    if (id === 'wolverine') return 'logan-wolverine';
    return id;
  };

  // Temporal Range Controls State
  const [selectedPreset, setSelectedPreset] = useState<EraPresetKey>('all');
  const [customRange, setCustomRange] = useState<[number, number]>([-10000000, 3000]);
  const [isPlayingSimulation, setIsPlayingSimulation] = useState(false);
  const [simulationIndex, setSimulationIndex] = useState(0);

  // Infinity Stone Trajectory Tracker State
  const [activeStoneTrajectoryId, setActiveStoneTrajectoryId] = useState<string | null>(
    selectedMapStoneTrajectoryId ? normalizeStoneId(selectedMapStoneTrajectoryId) : null
  );
  
  // Character Trajectory Tracker State
  const [activeCharacterId, setActiveCharacterId] = useState<string | null>(
    selectedMapCharacterId ? normalizeCharacterId(selectedMapCharacterId) : null
  );
  const [selectedTrajectoryStopIndex, setSelectedTrajectoryStopIndex] = useState<number | null>(null);
  const [isTracingTrajectory, setIsTracingTrajectory] = useState(false);

  // Snapshot Multi-Entity Layer Mode (Locations, Characters, Stones, All)
  const [snapshotLayerMode, setSnapshotLayerMode] = useState<'locations' | 'characters' | 'stones' | 'all'>('locations');
  const [selectedSnapshotTab, setSelectedSnapshotTab] = useState<'locations' | 'characters' | 'stones'>('locations');

  // Synchronized Handlers to keep Map Layers, Bottom Console and Right Dossier 100% in sync
  const handleSelectSnapshotLayer = (layer: 'locations' | 'characters' | 'stones' | 'all') => {
    setSnapshotLayerMode(layer);
    if (layer === 'locations') {
      setSelectedSnapshotTab('locations');
    } else if (layer === 'characters') {
      setSelectedSnapshotTab('characters');
    } else if (layer === 'stones') {
      setSelectedSnapshotTab('stones');
    }
  };

  const handleSelectSnapshotTab = (tab: 'locations' | 'characters' | 'stones') => {
    setSelectedSnapshotTab(tab);
    setSnapshotLayerMode(tab);
  };

  // Listen to external selection from StoneDrawer
  useEffect(() => {
    if (selectedMapStoneTrajectoryId) {
      const normalizedId = normalizeStoneId(selectedMapStoneTrajectoryId);
      setActiveStoneTrajectoryId(normalizedId);
      setActiveCharacterId(null);
      setSelectedTrajectoryStopIndex(0);
      setMapViewMode('earth');
      const traj = normalizedId ? STONE_TRAJECTORIES[normalizedId] : null;
      if (traj && traj.stops.length > 0) {
        setTimeout(() => {
          mapInstanceRef.current?.invalidateSize();
          const polyCoords = traj.stops.map((s) => s.coordinates);
          const poly = L.polyline(polyCoords);
          mapInstanceRef.current?.fitBounds(poly.getBounds().pad(0.18), { maxZoom: 5, animate: true });
        }, 150);
      }
    }
  }, [selectedMapStoneTrajectoryId]);

  // Listen to external selection from CharacterDrawer
  useEffect(() => {
    if (selectedMapCharacterId) {
      const normalizedId = normalizeCharacterId(selectedMapCharacterId);
      setActiveCharacterId(normalizedId);
      setActiveStoneTrajectoryId(null);
      setSelectedTrajectoryStopIndex(0);
      setMapViewMode('earth');
    }
  }, [selectedMapCharacterId]);

  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const polylineRef = useRef<L.Polyline | null>(null);
  const trajectoryMarkersRef = useRef<L.Marker[]>([]);

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

  // Characters sorted alphabetically (A-Z) by display name
  const sortedCharacters = useMemo(() => {
    return [...allCharacters].sort((a, b) => {
      const nameA = (a.alias || a.name).toLowerCase();
      const nameB = (b.alias || b.name).toLowerCase();
      return nameA.localeCompare(nameB);
    });
  }, []);

  // 6 Infinity Stones status snapshot in the current active temporal range
  const activeSnapshotStones = useMemo(() => {
    const [minY, maxY] = customRange;
    const stonesMap = new Map<string, HistoricalStoneSnapshot>();

    HISTORICAL_STONE_SNAPSHOTS.forEach((stone) => {
      const [sMin, sMax] = stone.yearRange;
      const overlaps = sMax >= minY && sMin <= maxY;
      if (overlaps) {
        if (!stonesMap.has(stone.stoneId)) {
          stonesMap.set(stone.stoneId, stone);
        }
      }
    });

    return Array.from(stonesMap.values());
  }, [customRange]);

  // Active characters & operatives snapshot in the current temporal range and universe
  const activeSnapshotCharacters = useMemo(() => {
    const [minY, maxY] = customRange;
    const charList: {
      charId: string;
      name: string;
      alias?: string;
      color: string;
      role: string;
      coordinates: [number, number];
      locationName: string;
      cityOrRegion?: string;
      countryOrRealm: string;
      planet: string;
      eraTitle: string;
      eraCleanTitle: string;
      mediaTitle: string;
      eventId: string;
      universeGroup: '616' | '10005' | '90214' | 'cosmic';
    }[] = [];

    const seen = new Set<string>();

    timelineEras.forEach((era) => {
      const [startYr, endYr] = parseYearRange(era.cleanTitle);
      const inRange = endYr >= minY && startYr <= maxY;
      if (!inRange) return;

      era.events.forEach((evt) => {
        let universeGroup: '616' | '10005' | '90214' | 'cosmic' = '616';
        if (evt.earthDesignation?.includes('10005')) {
          universeGroup = '10005';
        } else if (evt.earthDesignation?.includes('90214')) {
          universeGroup = '90214';
        } else if (evt.locations?.some((l) => l.planet && l.planet !== 'Earth')) {
          universeGroup = 'cosmic';
        }

        if (selectedUniverse !== 'all' && universeGroup !== selectedUniverse) {
          return;
        }

        if (evt.characters && evt.characters.length > 0 && evt.locations && evt.locations.length > 0) {
          evt.characters.forEach((rawCharId) => {
            const charId = normalizeCharacterId(rawCharId) || rawCharId;
            const charInfo = charactersData[charId] || allCharacters.find((c) => c.id === charId);
            const color = charInfo?.color || '#38bdf8';
            const name = charInfo?.name || charId;
            const alias = charInfo?.alias;
            const role = charInfo?.role || 'hero';

            evt.locations!.forEach((loc) => {
              if (loc.coordinates) {
                const dedupeKey = `${charId}-${loc.name}-${loc.coordinates[0]}-${loc.coordinates[1]}`;
                if (!seen.has(dedupeKey)) {
                  seen.add(dedupeKey);
                  charList.push({
                    charId,
                    name,
                    alias,
                    color,
                    role,
                    coordinates: loc.coordinates,
                    locationName: loc.name,
                    cityOrRegion: loc.cityOrRegion,
                    countryOrRealm: loc.countryOrRealm,
                    planet: loc.planet || 'Earth',
                    eraTitle: era.title,
                    eraCleanTitle: era.cleanTitle,
                    mediaTitle: evt.mediaTitle,
                    eventId: evt.id,
                    universeGroup,
                  });
                }
              }
            });
          });
        }
      });
    });

    return charList;
  }, [customRange, selectedUniverse]);

  // Active stone trajectory object
  const activeStoneTrajectory = useMemo(() => {
    if (!activeStoneTrajectoryId) return null;
    return STONE_TRAJECTORIES[activeStoneTrajectoryId] || null;
  }, [activeStoneTrajectoryId]);

  // Dynamic active character trajectory compiled from timeline data!
  const activeCharacterTrajectory = useMemo(() => {
    if (!activeCharacterId) return null;
    const char = charactersData[activeCharacterId];
    if (!char) return null;

    const stops: StoneTrajectoryStop[] = [];
    let order = 1;

    timelineEras.forEach((era) => {
      era.events.forEach((evt) => {
        const isPresent = evt.characters.includes(char.id) || evt.rawHtml.includes(`class="${char.cssClass}`);
        if (isPresent && evt.locations && evt.locations.length > 0) {
          evt.locations.forEach((loc) => {
            if (loc.coordinates) {
              const lastStop = stops[stops.length - 1];
              const isSameCoord = lastStop && 
                Math.abs(lastStop.coordinates[0] - loc.coordinates[0]) < 0.001 &&
                Math.abs(lastStop.coordinates[1] - loc.coordinates[1]) < 0.001;

              if (!isSameCoord) {
                stops.push({
                  order: order++,
                  locationName: loc.name,
                  regionAndCountry: loc.cityOrRegion ? `${loc.cityOrRegion}, ${loc.countryOrRealm}` : loc.countryOrRealm,
                  era: era.cleanTitle.split(' (')[0],
                  vessel: `Mission: ${evt.mediaTitle}`,
                  coordinates: loc.coordinates,
                  description: evt.paragraphs[0]?.replace(/<[^>]*>?/gm, '').slice(0, 180) + '...' || '',
                  media: evt.mediaTitle,
                  eventId: evt.id,
                });
              }
            }
          });
        }
      });
    });

    return {
      id: char.id,
      name: char.alias || char.name,
      fullName: char.name,
      vessel: char.role || 'MCU Hero/Villain',
      colorHex: char.color || '#38bdf8',
      glowColor: `${char.color || '#38bdf8'}66`,
      description: char.bio || 'Operative historical field missions recorded by S.H.I.E.L.D.',
      stops,
    };
  }, [activeCharacterId]);

  // Unified active trajectory (Stone OR Character)
  const currentTrajectory = useMemo(() => {
    if (activeCharacterTrajectory && activeCharacterTrajectory.stops.length > 0) {
      return activeCharacterTrajectory;
    }
    if (activeStoneTrajectory) {
      return activeStoneTrajectory;
    }
    return null;
  }, [activeCharacterTrajectory, activeStoneTrajectory]);

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

  // Tracing Active Trajectory Animation (Stones & Characters)
  useEffect(() => {
    if (!isTracingTrajectory || !currentTrajectory) return;

    let currentIdx = 0;
    const stops = currentTrajectory.stops;
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
        const targetLat = Math.min(65, Math.max(-60, stop.coordinates[0]));
        mapInstanceRef.current.flyTo([targetLat, stop.coordinates[1]], 4.8, { duration: 1.5 });
      }
      currentIdx++;
    }, 2800);

    return () => clearInterval(interval);
  }, [isTracingTrajectory, currentTrajectory, mapViewMode]);

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
      const southWest = L.latLng(-70, -180);
      const northEast = L.latLng(75, 180);
      const mapBounds = L.latLngBounds(southWest, northEast);

      const map = L.map(mapContainerRef.current, {
        center: [25, 0],
        zoom: 2.3,
        minZoom: 2,
        maxZoom: 18,
        zoomControl: false,
        attributionControl: true,
        worldCopyJump: false,
        maxBounds: mapBounds,
        maxBoundsViscosity: 1.0,
      });

      // 1. Dark Base Map (Landmasses, oceans, borders)
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Esri | S.H.I.E.L.D. Tactical Cartography',
        maxZoom: 16,
        noWrap: false,
      }).addTo(map);

      // 2. 100% English Reference Layer (Continents, Countries, Oceans, Cities in English)
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Esri English Global Labels',
        maxZoom: 16,
        noWrap: false,
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

    // 1. RENDER ACTIVE TRAJECTORY IF ACTIVE (CHARACTER OR INFINITY STONE)
    if (currentTrajectory && currentTrajectory.stops.length > 0) {
      const latLngs = currentTrajectory.stops.map((s) => s.coordinates);

      // Draw Glowing Polyline Path
      const polyline = L.polyline(latLngs, {
        color: currentTrajectory.colorHex,
        weight: 3.5,
        opacity: 0.9,
        dashArray: '8, 10',
      }).addTo(map);
      polylineRef.current = polyline;

      // Fit bounds automatically so all points are framed in the center without void!
      if (!isTracingTrajectory) {
        map.fitBounds(polyline.getBounds().pad(0.18), { maxZoom: 5, animate: true });
      }

      // Draw Numbered Waypoint Markers
      currentTrajectory.stops.forEach((stop, index) => {
        const isStopSelected = selectedTrajectoryStopIndex === index;
        const waypointIcon = L.divIcon({
          className: 'trajectory-waypoint-pin',
          html: `
            <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
              <div style="position: absolute; inset: -4px; border-radius: 50%; background-color: ${currentTrajectory.colorHex}; opacity: ${isStopSelected ? '0.9' : '0.4'}; animation: ping 2s cubic-bezier(0,0,0.2,1) infinite;"></div>
              <div style="position: relative; width: 22px; height: 22px; border-radius: 50%; background-color: #000000; border: 2px solid ${currentTrajectory.colorHex}; box-shadow: 0 0 14px ${currentTrajectory.colorHex}; display: flex; align-items: center; justify-content: center; color: ${currentTrajectory.colorHex}; font-weight: 900; font-size: 11px; font-family: inherit;">
                ${stop.order}
              </div>
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 16],
        });

        const stopMarker = L.marker(stop.coordinates, { icon: waypointIcon }).addTo(map);

        stopMarker.bindTooltip(
          `<div style="font-family: inherit; font-size: 11px; font-weight: 700; color: #ffffff; background: #000000; padding: 4px 8px; border-radius: 4px; border: 1px solid ${currentTrajectory.colorHex};">
            <div style="color: ${currentTrajectory.colorHex}; font-size: 10px; font-weight: 800; text-transform: uppercase;">STOP ${stop.order} • ${stop.era}</div>
            <div style="color: #ffffff;">${stop.locationName}</div>
            <div style="font-size: 9px; color: #94a3b8;">${stop.vessel}</div>
          </div>`,
          { direction: 'top', offset: [0, -12], opacity: 0.95 }
        );

        stopMarker.on('click', () => {
          setSelectedTrajectoryStopIndex(index);
          const targetLat = Math.min(65, Math.max(-60, stop.coordinates[0]));
          map.flyTo([targetLat, stop.coordinates[1]], 5, { duration: 1.2 });
        });

        trajectoryMarkersRef.current.push(stopMarker);
      });

    } else {
      // 2. RENDER MULTI-ENTITY SNAPSHOT (LOCATIONS, CHARACTERS, AND INFINITY STONES)

      // 2A. Standard Location Pins
      if (snapshotLayerMode === 'all' || snapshotLayerMode === 'locations') {
        filteredPins.forEach((pin) => {
          const isSelected = activePin?.id === pin.id;
          const color = getPinColor(pin.universeGroup, isSelected);

          const customIcon = L.divIcon({
            className: 'custom-mcu-pin',
            html: `
              <div style="position: relative; width: 26px; height: 26px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                <div style="position: absolute; inset: -3px; border-radius: 50%; background-color: ${color}; opacity: ${isSelected ? '0.85' : '0.22'}; animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;"></div>
                <div style="position: relative; width: 14px; height: 14px; border-radius: 50%; background-color: ${color}; border: 2px solid #ffffff; box-shadow: 0 0 10px ${color}; display: flex; align-items: center; justify-content: center;">
                  <div style="width: 3.5px; height: 3.5px; border-radius: 50%; background-color: #000000;"></div>
                </div>
              </div>
            `,
            iconSize: [26, 26],
            iconAnchor: [13, 13],
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
            const targetLat = Math.min(65, Math.max(-60, pin.coordinates[0]));
            map.flyTo([targetLat, pin.coordinates[1]], Math.max(map.getZoom(), 4.8), { duration: 1.2 });
          });

          markersRef.current.push(marker);
        });
      }

      // 2B. Active Characters in this Era Snapshot
      if (snapshotLayerMode === 'all' || snapshotLayerMode === 'characters') {
        activeSnapshotCharacters.forEach((char) => {
          const charIcon = L.divIcon({
            className: 'snapshot-char-pin',
            html: `
              <div style="position: relative; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                <div style="position: absolute; inset: -2px; border-radius: 50%; background-color: ${char.color}; opacity: 0.35; animation: ping 2.5s cubic-bezier(0,0,0.2,1) infinite;"></div>
                <div style="position: relative; width: 22px; height: 22px; border-radius: 50%; background-color: #050811; border: 2px solid ${char.color}; box-shadow: 0 0 10px ${char.color}; display: flex; align-items: center; justify-content: center; color: #ffffff; font-weight: 900; font-size: 9px; font-family: inherit;">
                  ${(char.alias || char.name).substring(0, 2).toUpperCase()}
                </div>
              </div>
            `,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
          });

          const marker = L.marker(char.coordinates, { icon: charIcon }).addTo(map);

          marker.bindTooltip(
            `<div style="font-family: inherit; font-size: 11px; font-weight: 700; color: #ffffff; background: #000000; padding: 4px 8px; border-radius: 4px; border: 1px solid ${char.color};">
              <div style="color: ${char.color}; font-size: 10px; font-weight: 800; text-transform: uppercase;">👤 ${char.alias || char.name} • ${char.role.toUpperCase()}</div>
              <div style="color: #ffffff;">${char.locationName}</div>
              <div style="font-size: 9px; color: #94a3b8;">${char.eraCleanTitle} • ${char.mediaTitle}</div>
            </div>`,
            { direction: 'top', offset: [0, -12], opacity: 0.95 }
          );

          marker.on('click', () => {
            const targetLat = Math.min(65, Math.max(-60, char.coordinates[0]));
            map.flyTo([targetLat, char.coordinates[1]], 5.5, { duration: 1.2 });
          });

          markersRef.current.push(marker);
        });
      }

      // 2C. 6 Infinity Stones Global Status in this Era Snapshot
      if (snapshotLayerMode === 'all' || snapshotLayerMode === 'stones') {
        activeSnapshotStones.forEach((stone) => {
          const stoneIcon = L.divIcon({
            className: 'snapshot-stone-pin',
            html: `
              <div style="position: relative; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                <div style="position: absolute; inset: -3px; border-radius: 50%; background-color: ${stone.colorHex}; opacity: 0.5; animation: ping 1.8s cubic-bezier(0,0,0.2,1) infinite;"></div>
                <div style="position: relative; width: 20px; height: 20px; border-radius: 4px; background-color: #000000; border: 2px solid ${stone.colorHex}; box-shadow: 0 0 14px ${stone.colorHex}; transform: rotate(45deg); display: flex; align-items: center; justify-content: center;">
                  <div style="width: 7px; height: 7px; border-radius: 1.5px; background-color: ${stone.colorHex};"></div>
                </div>
              </div>
            `,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
          });

          const marker = L.marker(stone.coordinates, { icon: stoneIcon }).addTo(map);

          marker.bindTooltip(
            `<div style="font-family: inherit; font-size: 11px; font-weight: 700; color: #ffffff; background: #000000; padding: 4px 8px; border-radius: 4px; border: 1px solid ${stone.colorHex};">
              <div style="color: ${stone.colorHex}; font-size: 10px; font-weight: 800; text-transform: uppercase;">💎 ${stone.name}</div>
              <div style="color: #ffffff;">${stone.locationName} (${stone.regionAndCountry})</div>
              <div style="font-size: 9px; color: #cbd5e1;">Bearer: ${stone.bearer} • ${stone.vessel}</div>
            </div>`,
            { direction: 'top', offset: [0, -14], opacity: 0.95 }
          );

          marker.on('click', () => {
            const targetLat = Math.min(65, Math.max(-60, stone.coordinates[0]));
            map.flyTo([targetLat, stone.coordinates[1]], 5.5, { duration: 1.2 });
          });

          markersRef.current.push(marker);
        });
      }
    }

    setTimeout(() => {
      map.invalidateSize();
    }, 150);

  }, [filteredPins, activePin, currentTrajectory, selectedTrajectoryStopIndex, snapshotLayerMode, activeSnapshotCharacters, activeSnapshotStones]);

  // When switching to Earth mode, invalidate size
  useEffect(() => {
    if (mapViewMode === 'earth' && mapInstanceRef.current) {
      setTimeout(() => {
        mapInstanceRef.current?.invalidateSize();
        if (currentTrajectory && currentTrajectory.stops.length > 0) {
          const polyCoords = currentTrajectory.stops.map((s) => s.coordinates);
          const poly = L.polyline(polyCoords);
          mapInstanceRef.current?.fitBounds(poly.getBounds().pad(0.18), { maxZoom: 5, animate: true });
        } else if (activePin) {
          const targetLat = Math.min(65, Math.max(-60, activePin.coordinates[0]));
          mapInstanceRef.current?.flyTo([targetLat, activePin.coordinates[1]], 4.5, { duration: 1.2 });
        }
      }, 100);
    }
  }, [mapViewMode, currentTrajectory]);

  // Select Infinity Stone Trajectory
  const handleSelectStoneTrajectory = (stoneId: string | null) => {
    setActiveStoneTrajectoryId(stoneId);
    setActiveCharacterId(null);
    setSelectedMapStoneTrajectoryId(stoneId);
    setSelectedMapCharacterId(null);
    setSelectedTrajectoryStopIndex(stoneId ? 0 : null);
    setIsTracingTrajectory(false);

    if (stoneId && mapInstanceRef.current && mapViewMode === 'earth') {
      const traj = STONE_TRAJECTORIES[stoneId];
      if (traj && traj.stops.length > 0) {
        const polyCoords = traj.stops.map((s) => s.coordinates);
        const poly = L.polyline(polyCoords);
        mapInstanceRef.current.fitBounds(poly.getBounds().pad(0.18), { maxZoom: 5, animate: true });
      }
    }
  };

  // Select Character Trajectory
  const handleSelectCharacterTrajectory = (rawCharId: string | null) => {
    const charId = normalizeCharacterId(rawCharId);
    setActiveCharacterId(charId);
    setActiveStoneTrajectoryId(null);
    setSelectedMapCharacterId(charId);
    setSelectedMapStoneTrajectoryId(null);
    setSelectedTrajectoryStopIndex(charId ? 0 : null);
    setIsTracingTrajectory(false);

    if (charId && mapInstanceRef.current && mapViewMode === 'earth') {
      const char = charactersData[charId];
      if (char) {
        const stops: [number, number][] = [];
        timelineEras.forEach((era) => {
          era.events.forEach((evt) => {
            const isPresent = evt.characters.includes(char.id) || evt.rawHtml.includes(`class="${char.cssClass}`);
            if (isPresent && evt.locations) {
              evt.locations.forEach((loc) => {
                if (loc.coordinates) stops.push(loc.coordinates);
              });
            }
          });
        });
        if (stops.length > 0) {
          const poly = L.polyline(stops);
          mapInstanceRef.current.fitBounds(poly.getBounds().pad(0.18), { maxZoom: 5, animate: true });
        }
      }
    }
  };

  // Waypoint Stop Stepping Controller
  const goToNextStop = () => {
    if (!currentTrajectory || currentTrajectory.stops.length === 0) return;
    const current = selectedTrajectoryStopIndex ?? 0;
    const next = (current + 1) % currentTrajectory.stops.length;
    setSelectedTrajectoryStopIndex(next);
    const stop = currentTrajectory.stops[next];
    if (mapInstanceRef.current && stop) {
      const targetLat = Math.min(65, Math.max(-60, stop.coordinates[0]));
      mapInstanceRef.current.flyTo([targetLat, stop.coordinates[1]], 5.5, { duration: 1.2 });
    }
  };

  const goToPrevStop = () => {
    if (!currentTrajectory || currentTrajectory.stops.length === 0) return;
    const current = selectedTrajectoryStopIndex ?? 0;
    const prev = (current - 1 + currentTrajectory.stops.length) % currentTrajectory.stops.length;
    setSelectedTrajectoryStopIndex(prev);
    const stop = currentTrajectory.stops[prev];
    if (mapInstanceRef.current && stop) {
      const targetLat = Math.min(65, Math.max(-60, stop.coordinates[0]));
      mapInstanceRef.current.flyTo([targetLat, stop.coordinates[1]], 5.5, { duration: 1.2 });
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
          mapInstanceRef.current.setView([25, 0], 2.3);
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

  // Prominent audited character chips for quick recon
  const quickCharacters = [
    { id: 'steve-rogers', label: 'Captain America', color: '#38bdf8' },
    { id: 'peggy-carter', label: 'Agent Carter', color: '#ef4444' },
    { id: 'erik-lehnsherr', label: 'Magneto', color: '#dc2626' },
    { id: 'charles-xavier', label: 'Professor X', color: '#38bdf8' },
    { id: 'ben-reilly-noir', label: 'Spider-Noir', color: '#c084fc' },
    { id: 'bucky-barnes', label: 'Winter Soldier', color: '#94a3b8' },
    { id: 'howard-stark', label: 'Howard Stark', color: '#f59e0b' },
    { id: 'logan-wolverine', label: 'Wolverine', color: '#fbbf24' },
    { id: 'shuri', label: 'Shuri', color: '#a855f7' },
    { id: 'thor', label: 'Thor', color: '#eab308' },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 font-din">
      
      {/* Tactical Header Bar & Mode Switcher */}
      <div className="bg-[#121622] border-2 border-sky-950 rounded-2xl p-4 sm:p-5 mb-4 shadow-2xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-sky-600 text-white text-[11px] font-black tracking-widest uppercase mb-1 shadow font-title">
            <Compass className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '12s' }} />
            <span>S.H.I.E.L.D. TACTICAL CARTOGRAPHY & OPERATIVE RECON</span>
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
                    {currentTrajectory
                      ? `TRAJECTORY VECTOR ACTIVE • ${currentTrajectory.name.toUpperCase()} (${currentTrajectory.stops.length} STOPS)`
                      : 'SATELLITE RECONNAISSANCE GRID • SYS.ONLINE'}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[11px]">
                  <span>
                    {currentTrajectory
                      ? `STOPS: ${currentTrajectory.stops.length}`
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
                {currentTrajectory ? (
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span 
                      className="px-2.5 py-1 rounded text-xs font-black font-title tracking-wider uppercase text-white shadow"
                      style={{ backgroundColor: currentTrajectory.colorHex }}
                    >
                      {currentTrajectory.name}
                    </span>

                    {/* Interactive Step Arrows: Prev / Stop X of Total / Next */}
                    <div className="flex items-center bg-[#000000] border border-[#232f45] rounded-lg p-0.5 shadow">
                      <button
                        onClick={goToPrevStop}
                        className="px-2 py-1 rounded hover:bg-[#1f293d] text-zinc-300 hover:text-white flex items-center gap-1 text-xs font-bold font-title cursor-pointer transition-all active:scale-95"
                        title="Previous Waypoint Stop"
                      >
                        <ChevronLeft className="w-4 h-4 text-sky-400" />
                        <span className="hidden sm:inline">PREV</span>
                      </button>

                      <div className="px-2.5 py-1 text-xs font-mono font-bold text-sky-300 border-x border-[#232f45] flex items-center gap-1.5 whitespace-nowrap">
                        <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: currentTrajectory.colorHex }} />
                        <span>STOP {(selectedTrajectoryStopIndex ?? 0) + 1} / {currentTrajectory.stops.length}</span>
                      </div>

                      <button
                        onClick={goToNextStop}
                        className="px-2 py-1 rounded hover:bg-[#1f293d] text-zinc-300 hover:text-white flex items-center gap-1 text-xs font-bold font-title cursor-pointer transition-all active:scale-95"
                        title="Next Waypoint Stop"
                      >
                        <span className="hidden sm:inline">NEXT</span>
                        <ChevronRight className="w-4 h-4 text-sky-400" />
                      </button>
                    </div>

                    {/* Auto-Trace Play / Pause */}
                    <button
                      onClick={() => setIsTracingTrajectory(!isTracingTrajectory)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#000000] border border-sky-600 text-sky-300 hover:text-white text-xs font-bold font-title uppercase tracking-wider cursor-pointer shadow transition-all hover:bg-sky-950"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>{isTracingTrajectory ? 'PAUSE TRACE' : 'AUTO-TRACE'}</span>
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

            {/* INTEGRATED BOTTOM CONTROL CONSOLE: HISTORICAL + CHARACTERS + STONES */}
            <div className="bg-[#10141f] border-2 border-sky-950 rounded-2xl p-4 sm:p-5 shadow-2xl space-y-4">
              
              {/* SECTION 1: HISTORICAL ERA SCRUBBER & CHRONOLOGY */}
              <div className="pb-3 border-b border-sky-950/80">
                <div className="flex items-center justify-between gap-3 mb-2.5 flex-wrap">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-sky-300 font-title">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    <span>HISTORICAL ERA SCRUBBER & CHRONOLOGY</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 flex-wrap">
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

                {/* Snapshot Multi-Entity Layer Toggles (Locations First) */}
                <div className="mb-2.5 flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[10px] font-black text-sky-400/80 uppercase tracking-widest font-title">
                    TEMPORAL SNAPSHOT LAYERS:
                  </span>
                  <div className="flex items-center gap-1.5 p-0.5 bg-[#050811] rounded-lg border border-sky-900/60 overflow-x-auto no-scrollbar">
                    <button
                      onClick={() => handleSelectSnapshotLayer('locations')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold font-title uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                        snapshotLayerMode === 'locations'
                          ? 'bg-sky-600 text-white shadow'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <MapPin className="w-3 h-3" />
                      <span>Locations ({filteredPins.length})</span>
                    </button>
                    <button
                      onClick={() => handleSelectSnapshotLayer('characters')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold font-title uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                        snapshotLayerMode === 'characters'
                          ? 'bg-sky-500 text-white shadow'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Users className="w-3 h-3" />
                      <span>Figures ({activeSnapshotCharacters.length})</span>
                    </button>
                    <button
                      onClick={() => handleSelectSnapshotLayer('stones')}
                      className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs font-bold font-title uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                        snapshotLayerMode === 'stones'
                          ? 'bg-indigo-600 text-white shadow'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>6 Stones ({activeSnapshotStones.length})</span>
                    </button>
                    <button
                      onClick={() => handleSelectSnapshotLayer('all')}
                      className={`px-2.5 py-1 rounded text-xs font-bold font-title uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                        snapshotLayerMode === 'all'
                          ? 'bg-zinc-700 text-white shadow'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      🌐 All Snapshot
                    </button>
                  </div>
                </div>

                {/* Era Preset Buttons */}
                <DragScrollRow className="flex items-center gap-2 pb-2">
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
                </DragScrollRow>

                {/* Quick Specific Years Ribbon */}
                <DragScrollRow className="pt-2 border-t border-sky-950/60 flex items-center gap-2">
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
                </DragScrollRow>
              </div>

              {/* SECTION 2: CHARACTER RECON & TRAJECTORY TRACKER */}
              <div className="pb-3 border-b border-sky-950/80">
                <div className="flex items-center justify-between gap-3 mb-2.5 flex-wrap">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-sky-300 font-title">
                    <Users className="w-4 h-4 text-sky-400" />
                    <span>CHARACTER RECON & MISSION TRAJECTORY:</span>
                  </div>
                  {activeCharacterTrajectory && (
                    <span 
                      className="px-2.5 py-0.5 rounded text-[11px] font-black font-title tracking-wider uppercase text-white shadow"
                      style={{ backgroundColor: activeCharacterTrajectory.colorHex }}
                    >
                      ACTIVE: {activeCharacterTrajectory.name} ({activeCharacterTrajectory.stops.length} MISSIONS)
                    </span>
                  )}
                </div>

                {/* Character Quick Chips + Alphabetical Dropdown */}
                <DragScrollRow className="flex items-center gap-2 pb-1">
                  <button
                    onClick={() => {
                      handleSelectCharacterTrajectory(null);
                      handleSelectStoneTrajectory(null);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold font-title tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer ${
                      activeCharacterId === null && activeStoneTrajectoryId === null
                        ? 'bg-zinc-700 text-white shadow'
                        : 'bg-[#060910] text-zinc-400 border border-[#1e293b] hover:text-white'
                    }`}
                  >
                    All Locations
                  </button>

                  {quickCharacters.map((qc) => {
                    const isSelected = activeCharacterId === qc.id;
                    return (
                      <button
                        key={qc.id}
                        onClick={() => handleSelectCharacterTrajectory(qc.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-title tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer shrink-0 shadow-sm ${
                          isSelected
                            ? 'text-white ring-2 ring-white shadow-lg'
                            : 'bg-[#060910] text-zinc-400 border border-[#1e293b] hover:text-white'
                        }`}
                        style={{
                          backgroundColor: isSelected ? qc.color : undefined,
                          borderColor: isSelected ? qc.color : undefined,
                        }}
                      >
                        <User className="w-3 h-3" style={{ color: isSelected ? '#ffffff' : qc.color }} />
                        <span>{qc.label}</span>
                      </button>
                    );
                  })}

                  {/* Character Selector Dropdown (A-Z Sorted) */}
                  <div className="relative shrink-0">
                    <select
                      value={activeCharacterId || ''}
                      onChange={(e) => handleSelectCharacterTrajectory(e.target.value || null)}
                      className="bg-[#060910] border border-[#1e293b] text-zinc-300 text-xs rounded-lg pl-3 pr-8 py-1.5 focus:outline-none focus:border-sky-500 font-din cursor-pointer hover:border-sky-400 transition-colors appearance-none"
                    >
                      <option value="">All Characters</option>
                      {sortedCharacters.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.alias || c.name}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500 pointer-events-none" />
                  </div>
                </DragScrollRow>
              </div>

              {/* SECTION 3: INFINITY STONE TRAJECTORY TRACKER */}
              <div>
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
                <DragScrollRow className="flex items-center gap-1.5 pb-1">
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
                </DragScrollRow>
              </div>

            </div>

          </div>

          {/* Right 4 Cols: Location / Trajectory Dossier */}
          <div className="lg:col-span-4 space-y-4">
            {currentTrajectory ? (
              // Active Trajectory Intel Deck (Character or Infinity Stone)
              <div className="bg-[#141414] border-2 rounded-2xl p-6 shadow-2xl relative overflow-hidden" style={{ borderColor: `${currentTrajectory.colorHex}66` }}>
                
                {/* Header Title */}
                <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-[#242424]">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-3.5 h-3.5" style={{ color: currentTrajectory.colorHex }} />
                      <span className="text-[11px] font-bold tracking-widest uppercase font-title" style={{ color: currentTrajectory.colorHex }}>
                        {activeCharacterTrajectory ? 'OPERATIVE MISSION VECTOR' : 'INFINITY RELIC TRAJECTORY'}
                      </span>
                    </div>
                    <h2 className="text-xl font-black text-white uppercase font-title leading-tight">
                      {currentTrajectory.name}
                    </h2>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {currentTrajectory.vessel}
                    </p>
                  </div>

                  {activeStoneTrajectory ? (
                    <button
                      onClick={() => setSelectedStoneId(activeStoneTrajectory.id.replace('-stone', '') as any)}
                      className="p-2 rounded-lg bg-[#090d14] border hover:border-white text-white transition-colors cursor-pointer"
                      style={{ borderColor: currentTrajectory.colorHex }}
                      title="Open Full Infinity Stone Dossier"
                    >
                      <ExternalLink className="w-4 h-4" style={{ color: currentTrajectory.colorHex }} />
                    </button>
                  ) : activeCharacterId ? (
                    <button
                      onClick={() => {
                        const { setSelectedCharacterId } = useStore.getState();
                        setSelectedCharacterId(activeCharacterId);
                      }}
                      className="p-2 rounded-lg bg-[#090d14] border hover:border-white text-white transition-colors cursor-pointer"
                      style={{ borderColor: currentTrajectory.colorHex }}
                      title="Open Character Dossier"
                    >
                      <ExternalLink className="w-4 h-4" style={{ color: currentTrajectory.colorHex }} />
                    </button>
                  ) : null}
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-300 leading-relaxed mb-5 bg-[#0a0a0a] p-3.5 rounded-xl border border-[#27272a]">
                  {currentTrajectory.description}
                </p>

                {/* Waypoints Sequence */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-[#27272a]">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5 font-title">
                      <Route className="w-3.5 h-3.5" style={{ color: currentTrajectory.colorHex }} />
                      <span>CHRONOLOGICAL STOPS ({currentTrajectory.stops.length})</span>
                    </h3>

                    {/* Step-by-Step Waypoint Arrows */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={goToPrevStop}
                        className="p-1 rounded bg-[#0a0a0a] border border-[#2e2e2e] hover:border-white text-zinc-400 hover:text-white cursor-pointer transition-colors"
                        title="Previous stop"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-[11px] font-mono font-bold text-sky-300 px-1.5">
                        {(selectedTrajectoryStopIndex ?? 0) + 1}/{currentTrajectory.stops.length}
                      </span>
                      <button
                        onClick={goToNextStop}
                        className="p-1 rounded bg-[#0a0a0a] border border-[#2e2e2e] hover:border-white text-zinc-400 hover:text-white cursor-pointer transition-colors"
                        title="Next stop"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 max-h-[440px] overflow-y-auto pr-1">
                    {currentTrajectory.stops.map((stop, sIdx) => {
                      const isSelected = selectedTrajectoryStopIndex === sIdx;
                      return (
                        <div
                          key={sIdx}
                          onClick={() => {
                            setSelectedTrajectoryStopIndex(sIdx);
                            if (mapInstanceRef.current) {
                              const targetLat = Math.min(65, Math.max(-60, stop.coordinates[0]));
                              mapInstanceRef.current.flyTo([targetLat, stop.coordinates[1]], 5.5, { duration: 1.2 });
                            }
                          }}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer group ${
                            isSelected
                              ? 'bg-[#1e293b]/70 shadow-lg'
                              : 'bg-[#181818] border-[#2a2a2a] hover:border-zinc-500'
                          }`}
                          style={{
                            borderColor: isSelected ? currentTrajectory.colorHex : undefined,
                          }}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <div className="flex items-center gap-2">
                              <span 
                                className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-black font-title"
                                style={{ backgroundColor: currentTrajectory.colorHex }}
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
            ) : (
              // Strategic Reconnaissance & Temporal Snapshot Intelligence Deck
              <div className="bg-[#141414] border-2 border-sky-900/60 rounded-2xl p-5 shadow-2xl relative overflow-hidden space-y-4">
                
                {/* Header Title */}
                <div className="border-b border-[#242424] pb-3">
                  <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-sky-400" />
                      <span className="text-[11px] font-black tracking-widest text-sky-400 uppercase font-title">
                        STRATEGIC RECONNAISSANCE INTEL
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#090d14] border border-sky-900 text-sky-300 font-mono text-[10px] font-bold">
                      {selectedUniverse === 'all' ? 'ALL REALITIES' : `UNIVERSE ${selectedUniverse}`}
                    </span>
                  </div>
                  <h2 className="text-lg font-black text-white uppercase font-title leading-tight">
                    WINDOW: {formatYearLabel(customRange[0])} ➔ {formatYearLabel(customRange[1])}
                  </h2>
                </div>

                {/* Sub-Tabs: Locations (First) / Figures (Second) / Stones (Third) */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-[#090d14] rounded-xl border border-[#232f45]">
                  <button
                    onClick={() => handleSelectSnapshotTab('locations')}
                    className={`py-1.5 px-1.5 sm:px-2 rounded-lg text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer text-center truncate ${
                      selectedSnapshotTab === 'locations'
                        ? 'bg-sky-600 text-white shadow'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    📍 Sites ({filteredPins.length})
                  </button>
                  <button
                    onClick={() => handleSelectSnapshotTab('characters')}
                    className={`py-1.5 px-1.5 sm:px-2 rounded-lg text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer text-center truncate ${
                      selectedSnapshotTab === 'characters'
                        ? 'bg-sky-500 text-white shadow'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    👥 Figures ({activeSnapshotCharacters.length})
                  </button>
                  <button
                    onClick={() => handleSelectSnapshotTab('stones')}
                    className={`py-1.5 px-1.5 sm:px-2 rounded-lg text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer text-center truncate ${
                      selectedSnapshotTab === 'stones'
                        ? 'bg-indigo-600 text-white shadow'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    💎 6 Stones ({activeSnapshotStones.length})
                  </button>
                </div>

                {/* TAB 1: LOCATIONS & ACTIVE PIN INTEL DOSSIER (FIRST PRIORITY) */}
                {selectedSnapshotTab === 'locations' && (
                  <div className="space-y-4 max-h-[500px] overflow-y-auto pr-1">
                    {activePin ? (
                      // Dedicated Detailed Location Dossier Card for the clicked pin
                      <div className="bg-[#181818] border border-sky-600/70 rounded-xl p-4 shadow-lg space-y-3.5">
                        {/* Header Title */}
                        <div className="flex items-start justify-between gap-2 pb-2.5 border-b border-[#2d2d2d]">
                          <div>
                            <div className="flex items-center gap-1.5 mb-1">
                              <span 
                                className="w-2.5 h-2.5 rounded-full shrink-0" 
                                style={{ backgroundColor: getPinColor(activePin.universeGroup, false) }}
                              />
                              <span className="text-[10px] font-bold tracking-widest text-sky-400 uppercase font-title">
                                {activePin.earthDesignation}
                              </span>
                            </div>
                            <h3 className="text-base font-black text-white uppercase font-title leading-snug">
                              {activePin.name}
                            </h3>
                            <p className="text-[11px] text-zinc-400 mt-0.5">
                              {activePin.cityOrRegion ? `${activePin.cityOrRegion}, ` : ''}{activePin.countryOrRealm} • <span className="text-zinc-300">{activePin.planet}</span>
                            </p>
                          </div>

                          <div className="p-1.5 rounded bg-[#090d14] border border-sky-950 text-sky-400">
                            <MapPin className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Coordinates */}
                        <div className="flex items-center justify-between p-2 rounded-lg bg-[#0a0a0a] border border-[#262626] text-[11px] font-mono">
                          <span className="text-zinc-500">COORDINATES:</span>
                          <span className="text-sky-300 font-bold">
                            {activePin.coordinates[0].toFixed(4)}° N, {activePin.coordinates[1].toFixed(4)}° E
                          </span>
                        </div>

                        {/* Associated Historical Events */}
                        <div>
                          <div className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2 flex items-center gap-1.5 font-title">
                            <Clock className="w-3.5 h-3.5 text-[#e62429]" />
                            <span>EVENTS AT THIS SITE ({activePin.events.length})</span>
                          </div>

                          <div className="space-y-2.5">
                            {activePin.events.map(({ event, eraTitle }) => (
                              <div 
                                key={event.id}
                                className="p-3 rounded-lg bg-[#0e131d] border border-[#232f45] hover:border-sky-500/80 transition-all"
                              >
                                <div className="flex items-center justify-between gap-2 mb-1.5">
                                  <span className="text-xs font-black font-title tracking-wider text-white uppercase">
                                    {eraTitle}
                                  </span>
                                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#060910] border border-[#333333] text-zinc-400 font-title uppercase">
                                    {event.mediaTitle}
                                  </span>
                                </div>

                                <p className="text-[11px] text-zinc-300 leading-relaxed mb-2.5 font-din line-clamp-3">
                                  {event.paragraphs[0]?.replace(/<[^>]*>?/gm, '')}
                                </p>

                                <button
                                  onClick={() => jumpToTimelineEvent(event.id)}
                                  className="w-full flex items-center justify-center gap-1.5 py-1 rounded bg-[#000000] hover:bg-[#e62429] text-zinc-300 hover:text-white border border-[#333333] hover:border-[#e62429] text-[10px] font-bold font-title tracking-wider uppercase transition-all cursor-pointer"
                                >
                                  <span>OPEN IN TIMELINE</span>
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Other Locations in Current Window */}
                        {filteredPins.length > 1 && (
                          <div className="pt-2.5 border-t border-[#2a2a2a]">
                            <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mb-1.5 font-title">
                              SWITCH LOCATION IN THIS ERA:
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {filteredPins.filter(p => p.id !== activePin.id).slice(0, 8).map((p) => (
                                <button
                                  key={p.id}
                                  onClick={() => {
                                    setSelectedPinId(p.id);
                                    if (mapInstanceRef.current) {
                                      const targetLat = Math.min(65, Math.max(-60, p.coordinates[0]));
                                      mapInstanceRef.current.flyTo([targetLat, p.coordinates[1]], 5.5, { duration: 1.2 });
                                    }
                                  }}
                                  className="px-2 py-0.5 rounded bg-[#090d14] hover:bg-sky-950 border border-[#232f45] hover:border-sky-400 text-zinc-300 hover:text-white text-[10px] font-din truncate max-w-[140px] cursor-pointer"
                                >
                                  {p.name}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : filteredPins.length === 0 ? (
                      <div className="p-6 text-center text-zinc-500 text-xs font-din">
                        No locations active in this period. Select another era below the map.
                      </div>
                    ) : (
                      <div className="space-y-2.5">
                        {filteredPins.map((pin) => (
                          <div
                            key={pin.id}
                            onClick={() => {
                              setSelectedPinId(pin.id);
                              if (mapInstanceRef.current) {
                                const targetLat = Math.min(65, Math.max(-60, pin.coordinates[0]));
                                mapInstanceRef.current.flyTo([targetLat, pin.coordinates[1]], 5.5, { duration: 1.2 });
                              }
                            }}
                            className="p-3 rounded-xl bg-[#181818] border border-[#2a2a2a] hover:border-sky-500/80 transition-all cursor-pointer group"
                          >
                            <div className="flex items-center justify-between gap-2 mb-1">
                              <div className="flex items-center gap-2">
                                <span 
                                  className="w-2.5 h-2.5 rounded-full shrink-0"
                                  style={{ backgroundColor: getPinColor(pin.universeGroup, false) }}
                                />
                                <span className="text-xs font-black font-title tracking-wider text-white uppercase group-hover:text-sky-300 transition-colors">
                                  {pin.name}
                                </span>
                              </div>
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-[#0a0a0a] border border-[#333333] text-zinc-400 font-title uppercase">
                                {pin.earthDesignation.split(' (')[0]}
                              </span>
                            </div>

                            <div className="text-[11px] text-zinc-400 font-din">
                              {pin.cityOrRegion ? `${pin.cityOrRegion}, ` : ''}{pin.countryOrRealm}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* TAB 2: ACTIVE CHARACTERS IN THIS ERA */}
                {selectedSnapshotTab === 'characters' && (
                  <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                    {activeSnapshotCharacters.length === 0 ? (
                      <div className="p-6 text-center text-zinc-500 text-xs font-din">
                        No active characters documented in this specific timeline window.
                      </div>
                    ) : (
                      activeSnapshotCharacters.map((char, cIdx) => (
                        <div
                          key={cIdx}
                          onClick={() => {
                            if (mapInstanceRef.current) {
                              const targetLat = Math.min(65, Math.max(-60, char.coordinates[0]));
                              mapInstanceRef.current.flyTo([targetLat, char.coordinates[1]], 5.5, { duration: 1.2 });
                            }
                          }}
                          className="p-3 rounded-xl bg-[#181818] border border-[#2a2a2a] hover:border-sky-500/80 transition-all cursor-pointer group"
                        >
                          <div className="flex items-center justify-between gap-2 mb-1.5">
                            <div className="flex items-center gap-2">
                              <span 
                                className="w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black text-black font-title shrink-0"
                                style={{ backgroundColor: char.color }}
                              >
                                {(char.alias || char.name).substring(0, 2).toUpperCase()}
                              </span>
                              <span className="text-xs font-black font-title tracking-wider text-white uppercase group-hover:text-sky-300 transition-colors">
                                {char.alias || char.name}
                              </span>
                            </div>
                            <span 
                              className="text-[9px] font-bold px-2 py-0.5 rounded uppercase font-title"
                              style={{ 
                                backgroundColor: `${char.color}20`,
                                color: char.color,
                                border: `1px solid ${char.color}40`
                              }}
                            >
                              {char.role}
                            </span>
                          </div>

                          <div className="text-[11px] text-zinc-300 font-din mb-1">
                            📍 <strong>{char.locationName}</strong> {char.cityOrRegion ? `(${char.cityOrRegion}, ${char.countryOrRealm})` : `(${char.countryOrRealm})`}
                          </div>
                          <div className="text-[10px] text-zinc-500 flex items-center justify-between">
                            <span>{char.eraCleanTitle}</span>
                            <span className="text-zinc-400 font-bold">{char.mediaTitle}</span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                )}

                {/* TAB 3: 6 INFINITY STONES GLOBAL STATUS IN THIS ERA */}
                {selectedSnapshotTab === 'stones' && (
                  <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-1">
                    {activeSnapshotStones.map((stone, sIdx) => (
                      <div
                        key={sIdx}
                        onClick={() => {
                          if (mapInstanceRef.current) {
                            const targetLat = Math.min(65, Math.max(-60, stone.coordinates[0]));
                            mapInstanceRef.current.flyTo([targetLat, stone.coordinates[1]], 5.5, { duration: 1.2 });
                          }
                        }}
                        className="p-3.5 rounded-xl bg-[#181818] border transition-all cursor-pointer group hover:shadow-lg"
                        style={{ borderColor: `${stone.colorHex}55` }}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <div className="flex items-center gap-2">
                            <span 
                              className="w-4 h-4 rounded-sm rotate-45 flex items-center justify-center shrink-0 shadow"
                              style={{ backgroundColor: stone.colorHex }}
                            />
                            <span className="text-xs font-black font-title tracking-wider text-white uppercase group-hover:text-sky-300 transition-colors">
                              {stone.name}
                            </span>
                          </div>
                          <span 
                            className="text-[9px] font-black px-2 py-0.5 rounded uppercase font-title shadow-sm"
                            style={{ backgroundColor: stone.colorHex, color: '#000000' }}
                          >
                            ACTIVE RELIC
                          </span>
                        </div>

                        <div className="text-[11px] text-white font-bold font-din mb-1">
                          📍 {stone.locationName} <span className="text-zinc-400 font-normal">({stone.regionAndCountry})</span>
                        </div>
                        <div className="text-[10px] text-zinc-300 font-mono mb-1.5">
                          <span className="text-zinc-500 font-bold">BEARER/GUARDIAN:</span> {stone.bearer}
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-relaxed font-din line-clamp-2">
                          {stone.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

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
