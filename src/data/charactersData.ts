import { Character } from '@/types';

export const charactersData: Record<string, Character> = {
  "steve-rogers": {
    "id": "steve-rogers",
    "name": "Steve Rogers / Captain America",
    "alias": "Captain America",
    "cssClass": "captain-america",
    "color": "#3b82f6",
    "bgBadge": "bg-blue-950/80 hover:bg-blue-900/90",
    "textBadge": "text-blue-300",
    "borderBadge": "border-blue-700",
    "role": "hero",
    "affiliation": "Avengers / SSR",
    "groups": [
      "Avengers",
      "Howling Commandos",
      "SSR",
      "S.H.I.E.L.D."
    ],
    "originLocation": "Brooklyn, New York (Earth)",
    "status": "alive",
    "bio": "Super-soldier leader of the Avengers and WWII war hero."
  },
  "bucky-barnes": {
    "id": "bucky-barnes",
    "name": "Bucky Barnes / Winter Soldier",
    "alias": "Winter Soldier",
    "cssClass": "winter-soldier",
    "color": "#0ea5e9",
    "bgBadge": "bg-sky-950/80 hover:bg-sky-900/90",
    "textBadge": "text-sky-300",
    "borderBadge": "border-sky-700",
    "role": "anti-hero",
    "affiliation": "Avengers / Wakanda / Howling Commandos",
    "groups": [
      "Howling Commandos",
      "HYDRA / Winter Soldier",
      "Avengers",
      "Wakanda"
    ],
    "originLocation": "Brooklyn, New York (Earth)",
    "status": "alive",
    "bio": "Enhanced assassin who broke free from HYDRA mind control and found redemption in Wakanda."
  },
  "peggy-carter": {
    "id": "peggy-carter",
    "name": "Peggy Carter",
    "alias": "Agent Carter",
    "cssClass": "peggy-carter",
    "color": "#10b981",
    "bgBadge": "bg-emerald-950/80 hover:bg-emerald-900/90",
    "textBadge": "text-emerald-300",
    "borderBadge": "border-emerald-700",
    "role": "hero",
    "affiliation": "SSR / S.H.I.E.L.D. Founder",
    "groups": [
      "SSR",
      "S.H.I.E.L.D.",
      "Howling Commandos"
    ],
    "originLocation": "London, England (Earth)",
    "status": "deceased",
    "bio": "Founding director of S.H.I.E.L.D. and legendary SSR field agent."
  },
  "howard-stark": {
    "id": "howard-stark",
    "name": "Howard Stark",
    "alias": "Howard Stark",
    "cssClass": "howard-stark",
    "color": "#f87171",
    "bgBadge": "bg-red-950/80 hover:bg-red-900/90",
    "textBadge": "text-red-300",
    "borderBadge": "border-red-700",
    "role": "hero",
    "affiliation": "Stark Industries / S.H.I.E.L.D. Founder",
    "groups": [
      "Stark Industries",
      "SSR",
      "S.H.I.E.L.D."
    ],
    "originLocation": "New York (Earth)",
    "status": "deceased",
    "bio": "Visionary engineer, founder of Stark Industries and co-founder of S.H.I.E.L.D."
  },
  "tony-stark": {
    "id": "tony-stark",
    "name": "Tony Stark / Iron Man",
    "alias": "Iron Man",
    "cssClass": "iron-man",
    "color": "#ef4444",
    "bgBadge": "bg-red-950/80 hover:bg-red-900/90",
    "textBadge": "text-red-300",
    "borderBadge": "border-red-700",
    "role": "hero",
    "affiliation": "Avengers / Stark Industries",
    "groups": [
      "Avengers",
      "Stark Industries",
      "Illuminati"
    ],
    "originLocation": "New York / Malibu (Earth)",
    "status": "deceased",
    "bio": "Genius, billionaire, playboy, philanthropist who forged the Iron Man armor and saved the universe."
  },
  "thor": {
    "id": "thor",
    "name": "Thor Odinson",
    "alias": "God of Thunder",
    "cssClass": "thor",
    "color": "#fbbf24",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-700",
    "role": "hero",
    "affiliation": "Asgardian Royalty / Avengers",
    "groups": [
      "Avengers",
      "Asgardian Royalty",
      "Revengers",
      "Guardians of the Galaxy"
    ],
    "originLocation": "Asgard (Nine Realms)",
    "status": "alive",
    "bio": "Asgardian God of Thunder, wielder of Mjolnir and Stormbreaker."
  },
  "loki": {
    "id": "loki",
    "name": "Loki Laufeyson",
    "alias": "God of Mischief",
    "cssClass": "loki",
    "color": "#22c55e",
    "bgBadge": "bg-green-950/80 hover:bg-green-900/90",
    "textBadge": "text-green-300",
    "borderBadge": "border-green-700",
    "role": "anti-hero",
    "affiliation": "Asgard / TVA / Multiverse",
    "groups": [
      "Asgardian Royalty",
      "Frost Giants of Jotunheim",
      "Revengers",
      "TVA"
    ],
    "originLocation": "Jotunheim / Asgard",
    "status": "alive",
    "bio": "God of Mischief who became the God of Stories and protector of the Multiverse."
  },
  "hulk": {
    "id": "hulk",
    "name": "Bruce Banner / The Hulk",
    "alias": "The Hulk",
    "cssClass": "hulk",
    "color": "#16a34a",
    "bgBadge": "bg-emerald-950/80 hover:bg-emerald-900/90",
    "textBadge": "text-emerald-300",
    "borderBadge": "border-emerald-700",
    "role": "hero",
    "affiliation": "Avengers",
    "groups": [
      "Avengers",
      "Revengers",
      "Sakaar Champions"
    ],
    "originLocation": "Dayton, Ohio (Earth)",
    "status": "alive",
    "bio": "Gamma radiation scientist who shares his body with the Incredible Hulk."
  },
  "black-widow": {
    "id": "black-widow",
    "name": "Natasha Romanoff / Black Widow",
    "alias": "Black Widow",
    "cssClass": "black-widow",
    "color": "#c084fc",
    "bgBadge": "bg-purple-950/80 hover:bg-purple-900/90",
    "textBadge": "text-purple-300",
    "borderBadge": "border-purple-700",
    "role": "hero",
    "affiliation": "Avengers / S.H.I.E.L.D. / Red Room",
    "groups": [
      "Avengers",
      "S.H.I.E.L.D.",
      "Red Room Widows"
    ],
    "originLocation": "Stalingrad, Russia (Earth)",
    "status": "deceased",
    "bio": "Master spy and founding Avenger who sacrificed herself on Vormir for the Soul Stone."
  },
  "hawkeye": {
    "id": "hawkeye",
    "name": "Clint Barton / Hawkeye",
    "alias": "Hawkeye / Ronin",
    "cssClass": "hawkeye",
    "color": "#a855f7",
    "bgBadge": "bg-purple-950/80 hover:bg-purple-900/90",
    "textBadge": "text-purple-300",
    "borderBadge": "border-purple-700",
    "role": "hero",
    "affiliation": "Avengers / S.H.I.E.L.D.",
    "groups": [
      "Avengers",
      "S.H.I.E.L.D.",
      "Ronin"
    ],
    "originLocation": "Waverly, Iowa (Earth)",
    "status": "alive",
    "bio": "Master marksman, master archer, and founding Avenger."
  },
  "star-lord": {
    "id": "star-lord",
    "name": "Peter Quill / Star-Lord",
    "alias": "Star-Lord",
    "cssClass": "star-lord",
    "color": "#f43f5e",
    "bgBadge": "bg-rose-950/80 hover:bg-rose-900/90",
    "textBadge": "text-rose-300",
    "borderBadge": "border-rose-700",
    "role": "hero",
    "affiliation": "Guardians of the Galaxy / Ravagers",
    "groups": [
      "Guardians of the Galaxy",
      "Ravagers"
    ],
    "originLocation": "Missouri (Earth) / Cosmic",
    "status": "alive",
    "bio": "Human-Celestial hybrid and leader of the Guardians of the Galaxy."
  },
  "gamora": {
    "id": "gamora",
    "name": "Gamora",
    "alias": "Deadliest Woman in the Galaxy",
    "cssClass": "gamora",
    "color": "#84cc16",
    "bgBadge": "bg-lime-950/80 hover:bg-lime-900/90",
    "textBadge": "text-lime-300",
    "borderBadge": "border-lime-700",
    "role": "hero",
    "affiliation": "Guardians of the Galaxy / Ravagers",
    "groups": [
      "Guardians of the Galaxy",
      "Children of Thanos",
      "Ravagers"
    ],
    "originLocation": "Zen-Whoberi (Cosmic)",
    "status": "alive",
    "bio": "Adopted daughter of Thanos who rebelled to become a Guardian of the Galaxy."
  },
  "rocket": {
    "id": "rocket",
    "name": "Rocket Raccoon",
    "alias": "Rocket",
    "cssClass": "rocket",
    "color": "#f97316",
    "bgBadge": "bg-orange-950/80 hover:bg-orange-900/90",
    "textBadge": "text-orange-300",
    "borderBadge": "border-orange-700",
    "role": "hero",
    "affiliation": "Guardians of the Galaxy / Avengers",
    "groups": [
      "Guardians of the Galaxy",
      "Avengers"
    ],
    "originLocation": "Counter-Earth / Halfworld (Cosmic)",
    "status": "alive",
    "bio": "Genetically enhanced tactical genius and captain of the Guardians."
  },
  "groot": {
    "id": "groot",
    "name": "Groot",
    "alias": "Groot",
    "cssClass": "groot",
    "color": "#65a30d",
    "bgBadge": "bg-lime-950/80 hover:bg-lime-900/90",
    "textBadge": "text-lime-300",
    "borderBadge": "border-lime-700",
    "role": "hero",
    "affiliation": "Guardians of the Galaxy",
    "groups": [
      "Guardians of the Galaxy",
      "Avengers"
    ],
    "originLocation": "Planet X (Cosmic)",
    "status": "alive",
    "bio": "Flora colossus and loyal Guardian of the Galaxy."
  },
  "drax": {
    "id": "drax",
    "name": "Drax the Destroyer",
    "alias": "Drax",
    "cssClass": "drax",
    "color": "#fb7185",
    "bgBadge": "bg-rose-950/80 hover:bg-rose-900/90",
    "textBadge": "text-rose-300",
    "borderBadge": "border-rose-700",
    "role": "hero",
    "affiliation": "Guardians of the Galaxy",
    "groups": [
      "Guardians of the Galaxy"
    ],
    "originLocation": "Kylos (Cosmic)",
    "status": "alive",
    "bio": "Fierce warrior driven by honor and loyalty to his adopted family."
  },
  "doctor-strange": {
    "id": "doctor-strange",
    "name": "Dr. Stephen Strange",
    "alias": "Doctor Strange",
    "cssClass": "doctor-strange",
    "color": "#0ea5e9",
    "bgBadge": "bg-sky-950/80 hover:bg-sky-900/90",
    "textBadge": "text-sky-300",
    "borderBadge": "border-sky-700",
    "role": "hero",
    "affiliation": "Masters of the Mystic Arts / Avengers",
    "groups": [
      "Masters of the Mystic Arts",
      "Avengers",
      "Midnight Sons"
    ],
    "originLocation": "New York / Kamar-Taj (Earth)",
    "status": "alive",
    "bio": "Master of the Mystic Arts and guardian of Earth's magical realms."
  },
  "spider-man": {
    "id": "spider-man",
    "name": "Peter Parker / Spider-Man",
    "alias": "Spider-Man",
    "cssClass": "spider-man",
    "color": "#ef4444",
    "bgBadge": "bg-red-950/80 hover:bg-red-900/90",
    "textBadge": "text-red-300",
    "borderBadge": "border-red-700",
    "role": "hero",
    "affiliation": "Avengers / Queens Vigilantes",
    "groups": [
      "Avengers",
      "Queens Vigilantes"
    ],
    "originLocation": "Queens, New York (Earth)",
    "status": "alive",
    "bio": "Friendly neighborhood web-slinger empowered by a radioactive spider bite."
  },
  "black-panther": {
    "id": "black-panther",
    "name": "T'Challa / Black Panther",
    "alias": "Black Panther",
    "cssClass": "black-panther",
    "color": "#ffffff",
    "bgBadge": "bg-zinc-900 hover:bg-zinc-800",
    "textBadge": "text-white",
    "borderBadge": "border-zinc-500",
    "role": "hero",
    "affiliation": "Wakandan Royal Family / Avengers",
    "groups": [
      "Wakandan Royal Family",
      "Avengers",
      "Hatut Zeraze Overseers"
    ],
    "originLocation": "Birnin Zana, Wakanda (Earth)",
    "status": "deceased",
    "bio": "King of Wakanda and Black Panther who opened his nation's secrets to the world."
  },
  "scarlet-witch": {
    "id": "scarlet-witch",
    "name": "Wanda Maximoff / Scarlet Witch",
    "alias": "Scarlet Witch",
    "cssClass": "scarlet-witch",
    "color": "#e11d48",
    "bgBadge": "bg-rose-950/80 hover:bg-rose-900/90",
    "textBadge": "text-rose-300",
    "borderBadge": "border-rose-700",
    "role": "anti-hero",
    "affiliation": "Avengers / Westview",
    "groups": [
      "Avengers",
      "HYDRA Experiments",
      "Coven of Chaos"
    ],
    "originLocation": "Sokovia (Earth)",
    "status": "variable",
    "bio": "Mythological wielder of Chaos Magic and the prophesied Scarlet Witch."
  },
  "vision": {
    "id": "vision",
    "name": "Vision",
    "alias": "Vision",
    "cssClass": "vision",
    "color": "#38bdf8",
    "bgBadge": "bg-sky-950/80 hover:bg-sky-900/90",
    "textBadge": "text-sky-300",
    "borderBadge": "border-sky-700",
    "role": "hero",
    "affiliation": "Avengers",
    "groups": [
      "Avengers",
      "S.W.O.R.D."
    ],
    "originLocation": "Avengers Tower / Wakanda (Earth)",
    "status": "alive",
    "bio": "Synthezoid born of vibranium and the Mind Stone."
  },
  "falcon": {
    "id": "falcon",
    "name": "Sam Wilson / Captain America",
    "alias": "Captain America / Falcon",
    "cssClass": "falcon",
    "color": "#38bdf8",
    "bgBadge": "bg-sky-950/80 hover:bg-sky-900/90",
    "textBadge": "text-sky-300",
    "borderBadge": "border-sky-700",
    "role": "hero",
    "affiliation": "Avengers / US Air Force",
    "groups": [
      "Avengers",
      "US Air Force"
    ],
    "originLocation": "Delacroix, Louisiana (Earth)",
    "status": "alive",
    "bio": "USAF pararescue veteran who took up the mantle and vibranium shield of Captain America."
  },
  "war-machine": {
    "id": "war-machine",
    "name": "James Rhodes / War Machine",
    "alias": "War Machine / Iron Patriot",
    "cssClass": "war-machine",
    "color": "#94a3b8",
    "bgBadge": "bg-slate-950/80 hover:bg-slate-900/90",
    "textBadge": "text-slate-300",
    "borderBadge": "border-slate-700",
    "role": "hero",
    "affiliation": "US Air Force / Avengers",
    "groups": [
      "Avengers",
      "US Air Force"
    ],
    "originLocation": "Philadelphia (Earth)",
    "status": "alive",
    "bio": "Colonel James Rhodes, heavily armored Avenger."
  },
  "ant-man": {
    "id": "ant-man",
    "name": "Scott Lang / Ant-Man",
    "alias": "Ant-Man",
    "cssClass": "ant-man",
    "color": "#ef4444",
    "bgBadge": "bg-red-950/80 hover:bg-red-900/90",
    "textBadge": "text-red-300",
    "borderBadge": "border-red-700",
    "role": "hero",
    "affiliation": "Avengers / Pym Technologies",
    "groups": [
      "Avengers",
      "Pym Technologies",
      "Quantum Explorers"
    ],
    "originLocation": "San Francisco, California (Earth)",
    "status": "alive",
    "bio": "Master thief turned size-changing Avenger and explorer of the Quantum Realm."
  },
  "wasp": {
    "id": "wasp",
    "name": "Hope van Dyne / Wasp",
    "alias": "The Wasp",
    "cssClass": "wasp",
    "color": "#facc15",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-700",
    "role": "hero",
    "affiliation": "Avengers / Pym Technologies",
    "groups": [
      "Avengers",
      "Pym Technologies",
      "Quantum Explorers"
    ],
    "originLocation": "San Francisco, California (Earth)",
    "status": "alive",
    "bio": "Skilled martial artist and winged size-changer."
  },
  "daredevil": {
    "id": "daredevil",
    "name": "Matt Murdock / Daredevil",
    "alias": "Daredevil",
    "cssClass": "daredevil",
    "color": "#dc2626",
    "bgBadge": "bg-red-950/80 hover:bg-red-900/90",
    "textBadge": "text-red-300",
    "borderBadge": "border-red-700",
    "role": "hero",
    "affiliation": "Defenders / Nelson & Murdock",
    "groups": [
      "Defenders",
      "Nelson & Murdock",
      "Midnight Sons"
    ],
    "originLocation": "Hell's Kitchen, New York (Earth)",
    "status": "alive",
    "bio": "Blind lawyer turned vigilante Man Without Fear."
  },
  "jessica-jones": {
    "id": "jessica-jones",
    "name": "Jessica Jones",
    "alias": "Jessica Jones",
    "cssClass": "jessica-jones",
    "color": "#9333ea",
    "bgBadge": "bg-purple-950/80 hover:bg-purple-900/90",
    "textBadge": "text-purple-300",
    "borderBadge": "border-purple-700",
    "role": "hero",
    "affiliation": "Defenders / Alias Investigations",
    "groups": [
      "Defenders",
      "Alias Investigations"
    ],
    "originLocation": "New York (Earth)",
    "status": "alive",
    "bio": "Super-strong private investigator."
  },
  "luke-cage": {
    "id": "luke-cage",
    "name": "Luke Cage",
    "alias": "Power Man",
    "cssClass": "luke-cage",
    "color": "#f59e0b",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-700",
    "role": "hero",
    "affiliation": "Defenders / Harlem",
    "groups": [
      "Defenders",
      "Heroes for Hire",
      "Harlem Defenders"
    ],
    "originLocation": "Harlem, New York (Earth)",
    "status": "alive",
    "bio": "Bulletproof hero and guardian of Harlem."
  },
  "iron-fist": {
    "id": "iron-fist",
    "name": "Danny Rand / Iron Fist",
    "alias": "Iron Fist",
    "cssClass": "iron-fist",
    "color": "#eab308",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-600",
    "role": "hero",
    "affiliation": "K'un-Lun / Defenders",
    "groups": [
      "K'un-Lun Order",
      "Defenders",
      "Heroes for Hire",
      "Rand Enterprises"
    ],
    "originLocation": "K'un-Lun / New York",
    "status": "alive",
    "bio": "Immortal weapon of K'un-Lun who defeated Shou-Lao the Undying and channels dragon Chi into glowing golden fists."
  },
  "the-punisher": {
    "id": "the-punisher",
    "name": "Frank Castle / The Punisher",
    "alias": "The Punisher",
    "cssClass": "the-punisher",
    "color": "#ffffff",
    "bgBadge": "bg-zinc-950/80 hover:bg-zinc-900/90",
    "textBadge": "text-zinc-300",
    "borderBadge": "border-zinc-700",
    "role": "anti-hero",
    "affiliation": "US Marine Corps / Vigilantes",
    "groups": [
      "US Marine Corps",
      "Vigilantes"
    ],
    "originLocation": "New York (Earth)",
    "status": "alive",
    "bio": "War veteran waging a one-man war on organized crime."
  },
  "coulson": {
    "id": "coulson",
    "name": "Phil Coulson",
    "alias": "Director Coulson",
    "cssClass": "coulson",
    "color": "#38bdf8",
    "bgBadge": "bg-sky-950/80 hover:bg-sky-900/90",
    "textBadge": "text-sky-300",
    "borderBadge": "border-sky-700",
    "role": "hero",
    "affiliation": "S.H.I.E.L.D. / Secret Warriors",
    "groups": [
      "S.H.I.E.L.D.",
      "Agents of S.H.I.E.L.D.",
      "Avengers Initiative"
    ],
    "originLocation": "Manitowoc, Wisconsin (Earth)",
    "status": "alive",
    "bio": "Heart of S.H.I.E.L.D., architect of the Avengers Initiative and director of the underground agency."
  },
  "fury": {
    "id": "fury",
    "name": "Nick Fury",
    "alias": "Director Fury",
    "cssClass": "fury",
    "color": "#818cf8",
    "bgBadge": "bg-indigo-950/80 hover:bg-indigo-900/90",
    "textBadge": "text-indigo-300",
    "borderBadge": "border-indigo-700",
    "role": "hero",
    "affiliation": "S.H.I.E.L.D. / S.A.B.E.R.",
    "groups": [
      "S.H.I.E.L.D.",
      "S.A.B.E.R.",
      "Avengers Initiative"
    ],
    "originLocation": "Earth / S.A.B.E.R. Station",
    "status": "alive",
    "bio": "Former Director of S.H.I.E.L.D. and founder of the Avengers."
  },
  "may": {
    "id": "may",
    "name": "Melinda May",
    "alias": "The Cavalry",
    "cssClass": "may",
    "color": "#e4e4e7",
    "bgBadge": "bg-zinc-950/80 hover:bg-zinc-900/90",
    "textBadge": "text-zinc-300",
    "borderBadge": "border-zinc-700",
    "role": "hero",
    "affiliation": "S.H.I.E.L.D.",
    "groups": [
      "S.H.I.E.L.D.",
      "Agents of S.H.I.E.L.D."
    ],
    "originLocation": "Earth",
    "status": "alive",
    "bio": "Legendary S.H.I.E.L.D. combat pilot and martial artist known as The Cavalry."
  },
  "skye": {
    "id": "skye",
    "name": "Daisy Johnson / Quake",
    "alias": "Quake",
    "cssClass": "skye",
    "color": "#fb923c",
    "bgBadge": "bg-orange-950/80 hover:bg-orange-900/90",
    "textBadge": "text-orange-300",
    "borderBadge": "border-orange-700",
    "role": "hero",
    "affiliation": "S.H.I.E.L.D. / Secret Warriors / Inhumans",
    "groups": [
      "S.H.I.E.L.D.",
      "Agents of S.H.I.E.L.D.",
      "Secret Warriors",
      "Inhumans"
    ],
    "originLocation": "Hunan, China (Earth)",
    "status": "alive",
    "bio": "Inhuman seismic agent, hacker, and director of the Secret Warriors."
  },
  "thanos": {
    "id": "thanos",
    "name": "Thanos",
    "alias": "The Mad Titan",
    "cssClass": "thanos",
    "color": "#9333ea",
    "bgBadge": "bg-purple-950/80 hover:bg-purple-900/90",
    "textBadge": "text-purple-300",
    "borderBadge": "border-purple-700",
    "role": "villain",
    "affiliation": "Black Order / Titan",
    "groups": [
      "Black Order",
      "Titan Survivors"
    ],
    "originLocation": "Titan (Cosmic)",
    "status": "deceased",
    "bio": "The Mad Titan who assembled the Infinity Gauntlet and wiped out half of all universal life."
  },
  "odin": {
    "id": "odin",
    "name": "Odin Borson",
    "alias": "Allfather",
    "cssClass": "odin",
    "color": "#fbbf24",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-700",
    "role": "hero",
    "affiliation": "Asgardian Royalty",
    "groups": [
      "Asgardian Royalty",
      "Nine Realms Protectors"
    ],
    "originLocation": "Asgard (Nine Realms)",
    "status": "deceased",
    "bio": "King of Asgard, protector of the Nine Realms and father of Thor and Loki."
  },
  "noni": {
    "id": "noni",
    "name": "Noni",
    "alias": "Noni",
    "cssClass": "noni",
    "color": "#a78bfa",
    "bgBadge": "bg-purple-950/80 hover:bg-purple-900/90",
    "textBadge": "text-purple-300",
    "borderBadge": "border-purple-700",
    "role": "hero",
    "affiliation": "Hatut Zeraze / Wakanda",
    "groups": [
      "Hatut Zeraze",
      "Dora Milaje",
      "Wakanda"
    ],
    "originLocation": "Crete / Wakanda (Earth)",
    "status": "alive",
    "bio": "Former Dora Milaje warrior turned Hatut Zeraze operative who hunted rogue War Dogs in 1260 B.C.E. Crete."
  },
  "the-lion": {
    "id": "the-lion",
    "name": "The Lion",
    "alias": "The Lion",
    "cssClass": "the-lion",
    "color": "#f59e0b",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-700",
    "role": "villain",
    "affiliation": "Rogue War Dogs / Crete Warlords",
    "groups": [
      "Rogue War Dogs",
      "Wakanda Exiles"
    ],
    "originLocation": "Crete / Wakanda (Earth)",
    "status": "deceased",
    "bio": "Traitorous War Dog warlord who built an illicit Vibranium weapon empire in ancient Crete."
  },
  "memnon": {
    "id": "memnon",
    "name": "Memnon",
    "alias": "Memnon",
    "cssClass": "memnon",
    "color": "#60a5fa",
    "bgBadge": "bg-blue-950/80 hover:bg-blue-900/90",
    "textBadge": "text-blue-300",
    "borderBadge": "border-blue-700",
    "role": "hero",
    "affiliation": "Hatut Zeraze / Myrmidons",
    "groups": [
      "Hatut Zeraze",
      "Myrmidons",
      "Wakanda"
    ],
    "originLocation": "Troy / Wakanda (Earth)",
    "status": "alive",
    "bio": "Wakandan spy embedded undercover alongside Achilles during the Trojan War to reclaim Vibranium relics."
  },
  "jorani": {
    "id": "jorani",
    "name": "Jorani (Iron Fist)",
    "alias": "Iron Fist (15th Century)",
    "cssClass": "jorani",
    "color": "#eab308",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-600",
    "role": "hero",
    "affiliation": "K'un-Lun / Iron Fist",
    "groups": [
      "K'un-Lun Order",
      "Iron Fist",
      "Masters of Chi"
    ],
    "originLocation": "K'un-Lun / Medieval China",
    "status": "alive",
    "bio": "Legendary female Iron Fist of K'un-Lun who wielded the golden dragon Chi in 15th-century China alongside the Hatut Zeraze."
  },
  "kuda": {
    "id": "kuda",
    "name": "Kuda",
    "alias": "Kuda",
    "cssClass": "kuda",
    "color": "#c084fc",
    "bgBadge": "bg-purple-950/80 hover:bg-purple-900/90",
    "textBadge": "text-purple-300",
    "borderBadge": "border-purple-700",
    "role": "hero",
    "affiliation": "Hatut Zeraze / Wakanda",
    "groups": [
      "Hatut Zeraze",
      "Wakanda"
    ],
    "originLocation": "Adwa, Ethiopia / Wakanda (Earth)",
    "status": "alive",
    "bio": "Veteran War Dog operative who guided Prince Tafari during the 1896 Battle of Adwa."
  },
  "prince-tafari": {
    "id": "prince-tafari",
    "name": "Prince Tafari",
    "alias": "Tafari",
    "cssClass": "prince-tafari",
    "color": "#fbbf24",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-700",
    "role": "hero",
    "affiliation": "Wakandan Royal Family",
    "groups": [
      "Wakandan Royal Family",
      "Wakanda"
    ],
    "originLocation": "Wakanda (Earth)",
    "status": "alive",
    "bio": "Young Wakandan prince on his rite-of-passage mission into 1896 Ethiopia."
  },
  "last-black-panther": {
    "id": "last-black-panther",
    "name": "The Last Black Panther",
    "alias": "Queen of Future Wakanda",
    "cssClass": "last-black-panther",
    "color": "#e879f9",
    "bgBadge": "bg-fuchsia-950/80 hover:bg-fuchsia-900/90",
    "textBadge": "text-fuchsia-300",
    "borderBadge": "border-fuchsia-700",
    "role": "hero",
    "affiliation": "Future Wakanda (c. 2400 C.E.)",
    "groups": [
      "Wakandan Royal Family",
      "Future Wakanda",
      "Time Travelers"
    ],
    "originLocation": "Future Wakanda (c. 2400 C.E.)",
    "status": "alive",
    "bio": "Queen of Wakanda and final Black Panther who traveled back 500 years in time to prevent the fall of Wakanda against the alien Horde."
  },
  "ben-reilly-noir": {
    "id": "ben-reilly-noir",
    "name": "Ben Reilly / The Spider",
    "alias": "Spider-Noir",
    "cssClass": "ben-reilly-noir",
    "color": "#94a3b8",
    "bgBadge": "bg-slate-950/80 hover:bg-slate-900/90",
    "textBadge": "text-slate-300",
    "borderBadge": "border-slate-600",
    "role": "hero",
    "affiliation": "Private Investigator / The Spider",
    "groups": [
      "Spider-Verse",
      "Earth-90214 Heroes",
      "1930s New York"
    ],
    "originLocation": "New York City (Earth-90214)",
    "status": "alive",
    "bio": "Grizzled Great War veteran turned 1930s private investigator who gained arachnid abilities after being bitten by a mutated test subject during a wartime POW rescue mission."
  },
  "megawatt-noir": {
    "id": "megawatt-noir",
    "name": "Dirk Leyden / Megawatt",
    "alias": "Megawatt",
    "cssClass": "megawatt-noir",
    "color": "#facc15",
    "bgBadge": "bg-yellow-950/80 hover:bg-yellow-900/90",
    "textBadge": "text-yellow-300",
    "borderBadge": "border-yellow-600",
    "role": "villain",
    "affiliation": "Silvermane Crime Syndicate",
    "groups": [
      "Silvermane Syndicate",
      "Earth-90214 Villains"
    ],
    "originLocation": "New York City (Earth-90214)",
    "status": "alive",
    "bio": "Volatile criminal enforcer who survived wartime POW experiments, developing the deadly ability to project devastating bio-electric charges."
  },
  "robbie-robertson-noir": {
    "id": "robbie-robertson-noir",
    "name": "Robbie Robertson",
    "alias": "Robbie Robertson",
    "cssClass": "robbie-robertson-noir",
    "color": "#38bdf8",
    "bgBadge": "bg-sky-950/80 hover:bg-sky-900/90",
    "textBadge": "text-sky-300",
    "borderBadge": "border-sky-600",
    "role": "secondary",
    "affiliation": "The Daily Bugle",
    "groups": [
      "Daily Bugle",
      "1930s New York"
    ],
    "originLocation": "New York City (Earth-90214)",
    "status": "alive",
    "bio": "Courageous Daily Bugle journalist who partners with Ben Reilly to expose underworld corruption."
  },
  "silvermane-noir": {
    "id": "silvermane-noir",
    "name": "Finbar Byrne / Silvermane",
    "alias": "Silvermane",
    "cssClass": "silvermane-noir",
    "color": "#cbd5e1",
    "bgBadge": "bg-zinc-950/80 hover:bg-zinc-900/90",
    "textBadge": "text-zinc-300",
    "borderBadge": "border-zinc-600",
    "role": "villain",
    "affiliation": "Silvermane Crime Syndicate",
    "groups": [
      "Silvermane Syndicate",
      "Earth-90214 Villains",
      "Organized Crime"
    ],
    "originLocation": "New York City (Earth-90214)",
    "status": "alive",
    "bio": "Ruthless aging mob kingpin ruling the New York underworld during the Great Depression."
  },
  "cat-hardy-noir": {
    "id": "cat-hardy-noir",
    "name": "Cat Hardy",
    "alias": "Cat Hardy",
    "cssClass": "cat-hardy-noir",
    "color": "#c084fc",
    "bgBadge": "bg-purple-950/80 hover:bg-purple-900/90",
    "textBadge": "text-purple-300",
    "borderBadge": "border-purple-600",
    "role": "anti-hero",
    "affiliation": "The Black Cat Club / Freelance",
    "groups": [
      "1930s New York",
      "Spider-Verse"
    ],
    "originLocation": "New York City (Earth-90214)",
    "status": "alive",
    "bio": "Glamorous and shrewd nightclub singer caught between rival mob bosses and her dangerous allure with Ben Reilly."
  },
  "sandman-noir": {
    "id": "sandman-noir",
    "name": "Flint Marko / Sandman",
    "alias": "Sandman",
    "cssClass": "sandman-noir",
    "color": "#fbbf24",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-600",
    "role": "villain",
    "affiliation": "Underworld Enforcer",
    "groups": [
      "Earth-90214 Villains",
      "Organized Crime"
    ],
    "originLocation": "New York City (Earth-90214)",
    "status": "alive",
    "bio": "Superpowered enforcer with dense, sand-manipulating physical durability in the service of criminal syndicates."
  },
  "tombstone-noir": {
    "id": "tombstone-noir",
    "name": "Lonnie Lincoln / Tombstone",
    "alias": "Tombstone",
    "cssClass": "tombstone-noir",
    "color": "#e2e8f0",
    "bgBadge": "bg-slate-950/80 hover:bg-slate-900/90",
    "textBadge": "text-slate-200",
    "borderBadge": "border-slate-500",
    "role": "villain",
    "affiliation": "Underworld Enforcer",
    "groups": [
      "Earth-90214 Villains",
      "Organized Crime"
    ],
    "originLocation": "New York City (Earth-90214)",
    "status": "alive",
    "bio": "Towering, stone-faced mob enforcer feared across 1930s New York for his brutal physical dominance."
  },
  "ruby-williams-noir": {
    "id": "ruby-williams-noir",
    "name": "Ruby Williams",
    "alias": "Ruby Williams",
    "cssClass": "ruby-williams-noir",
    "color": "#f43f5e",
    "bgBadge": "bg-rose-950/80 hover:bg-rose-900/90",
    "textBadge": "text-rose-300",
    "borderBadge": "border-rose-600",
    "role": "civilian",
    "affiliation": "Ben Reilly's Fiancée",
    "groups": [
      "1930s New York"
    ],
    "originLocation": "New York City (Earth-90214)",
    "status": "deceased",
    "bio": "Ben Reilly's beloved fiancée whose tragic assassination by mobsters caused him to abandon his superhero mantle."
  },
  "janet-ruiz-noir": {
    "id": "janet-ruiz-noir",
    "name": "Janet Ruiz",
    "alias": "Janet Ruiz",
    "cssClass": "janet-ruiz-noir",
    "color": "#34d399",
    "bgBadge": "bg-emerald-950/80 hover:bg-emerald-900/90",
    "textBadge": "text-emerald-300",
    "borderBadge": "border-emerald-600",
    "role": "civilian",
    "affiliation": "Ben Reilly Detective Agency",
    "groups": [
      "1930s New York",
      "Earth-90214 Allies"
    ],
    "originLocation": "New York City (Earth-90214)",
    "status": "alive",
    "bio": "Ben Reilly's sharp-witted, loyal, and street-smart secretary at his private investigation agency who manages clients and keeps him grounded."
  },
  "red-skull": {
    "id": "red-skull",
    "name": "Johann Schmidt / Red Skull",
    "alias": "Red Skull",
    "cssClass": "red-skull",
    "color": "#ef4444",
    "bgBadge": "bg-red-950/90 hover:bg-red-900/90",
    "textBadge": "text-red-300",
    "borderBadge": "border-red-600",
    "role": "villain",
    "affiliation": "HYDRA / Nazi Special Weapons Division",
    "groups": [
      "HYDRA",
      "Third Reich (Defected)"
    ],
    "originLocation": "Germany (Earth)",
    "status": "presumably-dead",
    "bio": "Ruthless founder of HYDRA who took an early imperfect super-soldier serum and wielded the Tesseract to achieve global conquest."
  },
  "arnim-zola": {
    "id": "arnim-zola",
    "name": "Dr. Arnim Zola",
    "alias": "Arnim Zola",
    "cssClass": "arnim-zola",
    "color": "#a3e635",
    "bgBadge": "bg-lime-950/80 hover:bg-lime-900/90",
    "textBadge": "text-lime-300",
    "borderBadge": "border-lime-700",
    "role": "villain",
    "affiliation": "HYDRA / S.H.I.E.L.D.",
    "groups": [
      "HYDRA",
      "SSR / Operation Paperclip",
      "S.H.I.E.L.D."
    ],
    "originLocation": "Switzerland / Germany (Earth)",
    "status": "deceased",
    "bio": "Brilliant HYDRA biochemist and geneticist who harnessed the Tesseract energy and later secretly planted HYDRA's parasite inside S.H.I.E.L.D."
  },
  "abraham-erskine": {
    "id": "abraham-erskine",
    "name": "Dr. Abraham Erskine",
    "alias": "Dr. Erskine",
    "cssClass": "abraham-erskine",
    "color": "#60a5fa",
    "bgBadge": "bg-blue-950/80 hover:bg-blue-900/90",
    "textBadge": "text-blue-300",
    "borderBadge": "border-blue-700",
    "role": "secondary",
    "affiliation": "Strategic Scientific Reserve (SSR)",
    "groups": [
      "SSR",
      "Project Rebirth"
    ],
    "originLocation": "Augsburg, Germany (Earth)",
    "status": "deceased",
    "bio": "German biochemist who fled Nazi Germany and developed the legendary Super-Soldier Serum, selecting Steve Rogers for his good heart."
  },
  "chester-phillips": {
    "id": "chester-phillips",
    "name": "Colonel Chester Phillips",
    "alias": "Colonel Phillips",
    "cssClass": "chester-phillips",
    "color": "#a1a1aa",
    "bgBadge": "bg-zinc-950/80 hover:bg-zinc-900/90",
    "textBadge": "text-zinc-300",
    "borderBadge": "border-zinc-700",
    "role": "secondary",
    "affiliation": "SSR Military Commander / S.H.I.E.L.D. Founder",
    "groups": [
      "SSR",
      "US Army",
      "S.H.I.E.L.D."
    ],
    "originLocation": "United States (Earth)",
    "status": "deceased",
    "bio": "No-nonsense US Army colonel and military head of the Strategic Scientific Reserve during World War II."
  },
  "dum-dum-dugan": {
    "id": "dum-dum-dugan",
    "name": "Timothy 'Dum Dum' Dugan",
    "alias": "Dum Dum Dugan",
    "cssClass": "dum-dum-dugan",
    "color": "#f59e0b",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-700",
    "role": "hero",
    "affiliation": "Howling Commandos / SSR / S.H.I.E.L.D.",
    "groups": [
      "Howling Commandos",
      "SSR",
      "S.H.I.E.L.D."
    ],
    "originLocation": "Boston, Massachusetts (Earth)",
    "status": "deceased",
    "bio": "Iconic bowler-hat-wearing marksman and second-in-command of Captain America's Howling Commandos."
  },
  "maria-hill": {
    "id": "maria-hill",
    "name": "Maria Hill",
    "alias": "Agent Hill",
    "cssClass": "maria-hill",
    "color": "#94a3b8",
    "bgBadge": "bg-slate-950/80 hover:bg-slate-900/90",
    "textBadge": "text-slate-300",
    "borderBadge": "border-slate-600",
    "role": "hero",
    "affiliation": "S.H.I.E.L.D. / Stark Industries",
    "groups": [
      "S.H.I.E.L.D.",
      "Avengers Allies"
    ],
    "originLocation": "Chicago, Illinois (Earth)",
    "status": "deceased",
    "bio": "Deputy Director of S.H.I.E.L.D. and Nick Fury's most trusted right hand."
  },
  "shuri": {
    "id": "shuri",
    "name": "Shuri / Black Panther",
    "alias": "Black Panther",
    "cssClass": "shuri",
    "color": "#c084fc",
    "bgBadge": "bg-purple-950/80 hover:bg-purple-900/90",
    "textBadge": "text-purple-300",
    "borderBadge": "border-purple-600",
    "role": "hero",
    "affiliation": "Wakandan Royal Family / Black Panther",
    "groups": [
      "Wakandan Royal Family",
      "Wakanda",
      "Avengers Allies"
    ],
    "originLocation": "Birnin Zana, Wakanda (Earth)",
    "status": "alive",
    "bio": "Princess of Wakanda, genius head of the Wakandan Design Group, and successor Black Panther."
  },
  "okoye": {
    "id": "okoye",
    "name": "Okoye",
    "alias": "General Okoye",
    "cssClass": "okoye",
    "color": "#f59e0b",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-600",
    "role": "hero",
    "affiliation": "Dora Milaje / Midnight Angels",
    "groups": [
      "Dora Milaje",
      "Wakanda",
      "Midnight Angels",
      "Avengers"
    ],
    "originLocation": "Wakanda (Earth)",
    "status": "alive",
    "bio": "Fiercely loyal General of the Dora Milaje and champion warrior of Wakanda."
  },
  "nakia": {
    "id": "nakia",
    "name": "Nakia",
    "alias": "Nakia",
    "cssClass": "nakia",
    "color": "#10b981",
    "bgBadge": "bg-emerald-950/80 hover:bg-emerald-900/90",
    "textBadge": "text-emerald-300",
    "borderBadge": "border-emerald-600",
    "role": "hero",
    "affiliation": "War Dogs / Wakanda",
    "groups": [
      "War Dogs",
      "Wakanda"
    ],
    "originLocation": "Wakanda (Earth)",
    "status": "alive",
    "bio": "Elite War Dog undercover operative who dedicated her life to saving oppressed people worldwide."
  },
  "nebula": {
    "id": "nebula",
    "name": "Nebula",
    "alias": "Nebula",
    "cssClass": "nebula",
    "color": "#38bdf8",
    "bgBadge": "bg-sky-950/80 hover:bg-sky-900/90",
    "textBadge": "text-sky-300",
    "borderBadge": "border-sky-600",
    "role": "hero",
    "affiliation": "Guardians of the Galaxy / Avengers",
    "groups": [
      "Guardians of the Galaxy",
      "Avengers",
      "Children of Thanos"
    ],
    "originLocation": "Luphom Prime (Cosmic)",
    "status": "alive",
    "bio": "Cybernetically enhanced assassin daughter of Thanos who broke free to become a Guardian of the Galaxy."
  },
  "mantis": {
    "id": "mantis",
    "name": "Mantis",
    "alias": "Mantis",
    "cssClass": "mantis",
    "color": "#a3e635",
    "bgBadge": "bg-lime-950/80 hover:bg-lime-900/90",
    "textBadge": "text-lime-300",
    "borderBadge": "border-lime-600",
    "role": "hero",
    "affiliation": "Guardians of the Galaxy",
    "groups": [
      "Guardians of the Galaxy"
    ],
    "originLocation": "Ego's Planet (Cosmic)",
    "status": "alive",
    "bio": "Empathic alien with antennae capable of sensing and manipulating emotions, daughter of Ego and sister of Peter Quill."
  },
  "valkyrie": {
    "id": "valkyrie",
    "name": "Brunnhilde / King Valkyrie",
    "alias": "King Valkyrie",
    "cssClass": "valkyrie",
    "color": "#38bdf8",
    "bgBadge": "bg-sky-950/80 hover:bg-sky-900/90",
    "textBadge": "text-sky-300",
    "borderBadge": "border-sky-600",
    "role": "hero",
    "affiliation": "Asgard / New Asgard",
    "groups": [
      "Valkyrior",
      "Asgard / New Asgard",
      "Revengers"
    ],
    "originLocation": "Asgard (Cosmic / Asgard)",
    "status": "alive",
    "bio": "Legendary Asgardian warrior who survived the slaughter by Hela and later became King of New Asgard."
  },
  "colleen-wing": {
    "id": "colleen-wing",
    "name": "Colleen Wing",
    "alias": "Colleen Wing",
    "cssClass": "colleen-wing",
    "color": "#facc15",
    "bgBadge": "bg-yellow-950/80 hover:bg-yellow-900/90",
    "textBadge": "text-yellow-300",
    "borderBadge": "border-yellow-600",
    "role": "hero",
    "affiliation": "Daughters of the Dragon / Iron Fist",
    "groups": [
      "Daughters of the Dragon",
      "Defenders Allies",
      "The Hand (Defected)"
    ],
    "originLocation": "New York City (Earth)",
    "status": "alive",
    "bio": "Master martial artist and katana wielder who learned to channel the glowing Chi of the Iron Fist through her blade."
  },
  "pietro": {
    "id": "pietro",
    "name": "Pietro Maximoff / Quicksilver",
    "alias": "Quicksilver",
    "cssClass": "pietro",
    "color": "#38bdf8",
    "bgBadge": "bg-sky-950/80 hover:bg-sky-900/90",
    "textBadge": "text-sky-300",
    "borderBadge": "border-sky-600",
    "role": "hero",
    "affiliation": "Avengers",
    "groups": [
      "Avengers",
      "HYDRA Volunteers"
    ],
    "originLocation": "Sokovia (Earth)",
    "status": "deceased",
    "bio": "Sokovian speedster enhanced by the Mind Stone who sacrificed his life to save Hawkeye and a child in the Battle of Sokovia."
  },
  "carol-danvers": {
    "id": "carol-danvers",
    "name": "Carol Danvers / Captain Marvel",
    "alias": "Captain Marvel",
    "cssClass": "captain-marvel",
    "color": "#fbbf24",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-600",
    "role": "hero",
    "affiliation": "Avengers / Starforce",
    "groups": [
      "Avengers",
      "Starforce (Defected)",
      "US Air Force"
    ],
    "originLocation": "Boston, Massachusetts (Earth)",
    "status": "alive",
    "bio": "Cosmic powerhouse infused with Space Stone energy after surviving an experimental light-speed engine explosion."
  },
  "talos": {
    "id": "talos",
    "name": "Talos",
    "alias": "General Talos",
    "cssClass": "talos",
    "color": "#4ade80",
    "bgBadge": "bg-emerald-950/80 hover:bg-emerald-900/90",
    "textBadge": "text-emerald-300",
    "borderBadge": "border-emerald-600",
    "role": "hero",
    "affiliation": "Skrulls / S.H.I.E.L.D. Allies",
    "groups": [
      "Skrulls",
      "Nick Fury Allies"
    ],
    "originLocation": "Skrullos (Cosmic)",
    "status": "deceased",
    "bio": "Skrull general and shapeshifter who allied with Carol Danvers and Nick Fury to protect Skrull refugees."
  },
  "goose": {
    "id": "goose",
    "name": "Goose",
    "alias": "Goose the Flerken",
    "cssClass": "goose",
    "color": "#fb923c",
    "bgBadge": "bg-orange-950/80 hover:bg-orange-900/90",
    "textBadge": "text-orange-300",
    "borderBadge": "border-orange-600",
    "role": "hero",
    "affiliation": "Carol Danvers / Nick Fury Companion",
    "groups": [
      "Flerkens",
      "Cosmic Creatures"
    ],
    "originLocation": "Cosmic",
    "status": "alive",
    "bio": "Alien Flerken resembling a ginger tabby cat that houses pocket dimensions and tentacles in its mouth."
  },
  "elektra": {
    "id": "elektra",
    "name": "Elektra Natchios / Black Sky",
    "alias": "Elektra",
    "cssClass": "elektra",
    "color": "#f43f5e",
    "bgBadge": "bg-rose-950/80 hover:bg-rose-900/90",
    "textBadge": "text-rose-300",
    "borderBadge": "border-rose-600",
    "role": "anti-hero",
    "affiliation": "The Hand / Matt Murdock Ally",
    "groups": [
      "The Hand / Black Sky",
      "Chaste"
    ],
    "originLocation": "New York City (Earth)",
    "status": "deceased",
    "bio": "Lethal sai-wielding assassin resurrected by The Hand as the ultimate living weapon known as the Black Sky."
  },
  "cloak": {
    "id": "cloak",
    "name": "Tyrone Johnson / Cloak",
    "alias": "Cloak",
    "cssClass": "cloak",
    "color": "#818cf8",
    "bgBadge": "bg-indigo-950/80 hover:bg-indigo-900/90",
    "textBadge": "text-indigo-300",
    "borderBadge": "border-indigo-600",
    "role": "hero",
    "affiliation": "Cloak and Dagger",
    "groups": [
      "Cloak and Dagger",
      "Marvel Knights"
    ],
    "originLocation": "New Orleans, Louisiana (Earth)",
    "status": "alive",
    "bio": "Hero connected to the Darkforce dimension, capable of teleportation and intangible shadowy engulfment."
  },
  "dagger": {
    "id": "dagger",
    "name": "Tandy Bowen / Dagger",
    "alias": "Dagger",
    "cssClass": "dagger",
    "color": "#fef08a",
    "bgBadge": "bg-yellow-950/80 hover:bg-yellow-900/90",
    "textBadge": "text-yellow-300",
    "borderBadge": "border-yellow-600",
    "role": "hero",
    "affiliation": "Cloak and Dagger",
    "groups": [
      "Cloak and Dagger",
      "Marvel Knights"
    ],
    "originLocation": "New Orleans, Louisiana (Earth)",
    "status": "alive",
    "bio": "Hero capable of generating concentrated hard-light daggers and purging darkness from human souls."
  },
  "edwin-jarvis": {
    "id": "edwin-jarvis",
    "name": "Edwin Jarvis",
    "alias": "Jarvis",
    "cssClass": "edwin-jarvis",
    "color": "#38bdf8",
    "bgBadge": "bg-sky-950/80 hover:bg-sky-900/90",
    "textBadge": "text-sky-300",
    "borderBadge": "border-sky-600",
    "role": "hero",
    "affiliation": "Stark Household / SSR Ally",
    "groups": [
      "Stark Household",
      "SSR Allies",
      "Avengers Allies"
    ],
    "originLocation": "London, England (Earth)",
    "status": "deceased",
    "bio": "Howard Stark's exceptionally loyal and capable British butler who partnered with Peggy Carter on high-stakes covert field missions."
  },
  "daniel-sousa": {
    "id": "daniel-sousa",
    "name": "Daniel Sousa",
    "alias": "Chief Sousa",
    "cssClass": "daniel-sousa",
    "color": "#10b981",
    "bgBadge": "bg-emerald-950/80 hover:bg-emerald-900/90",
    "textBadge": "text-emerald-300",
    "borderBadge": "border-emerald-600",
    "role": "hero",
    "affiliation": "SSR Chief (Los Angeles) / S.H.I.E.L.D.",
    "groups": [
      "SSR",
      "S.H.I.E.L.D.",
      "Time Travelers"
    ],
    "originLocation": "United States (Earth)",
    "status": "alive",
    "bio": "Honorable WWII veteran and brilliant SSR Los Angeles Chief who fought alongside Peggy Carter against the Council of Nine."
  },
  "dottie-underwood": {
    "id": "dottie-underwood",
    "name": "Dottie Underwood",
    "alias": "Black Widow",
    "cssClass": "dottie-underwood",
    "color": "#f43f5e",
    "bgBadge": "bg-rose-950/80 hover:bg-rose-900/90",
    "textBadge": "text-rose-300",
    "borderBadge": "border-rose-600",
    "role": "villain",
    "affiliation": "Red Room / Leviathan",
    "groups": [
      "Red Room / Black Widows",
      "Leviathan"
    ],
    "originLocation": "Soviet Union (Earth)",
    "status": "alive",
    "bio": "Deadly, ruthless Soviet Black Widow assassin trained in the Red Room who served as Leviathan's primary enforcer in 1946 New York."
  },
  "johann-fennhoff": {
    "id": "johann-fennhoff",
    "name": "Dr. Johann Fennhoff",
    "alias": "Dr. Faustus",
    "cssClass": "johann-fennhoff",
    "color": "#c084fc",
    "bgBadge": "bg-purple-950/80 hover:bg-purple-900/90",
    "textBadge": "text-purple-300",
    "borderBadge": "border-purple-600",
    "role": "villain",
    "affiliation": "Leviathan / HYDRA Collaborator",
    "groups": [
      "Leviathan",
      "HYDRA Allies"
    ],
    "originLocation": "Russia (Earth)",
    "status": "deceased",
    "bio": "Master Soviet psychiatrist and hypnotist for Leviathan whose psychological manipulation techniques influenced Arnim Zola's Winter Soldier programming."
  },
  "whitney-frost": {
    "id": "whitney-frost",
    "name": "Agnes Cully / Whitney Frost",
    "alias": "Madame Masque",
    "cssClass": "whitney-frost",
    "color": "#818cf8",
    "bgBadge": "bg-indigo-950/80 hover:bg-indigo-900/90",
    "textBadge": "text-indigo-300",
    "borderBadge": "border-indigo-600",
    "role": "villain",
    "affiliation": "Council of Nine / Isodyne Energy",
    "groups": [
      "Council of Nine",
      "Zero Matter Hosts",
      "Secret Empire"
    ],
    "originLocation": "Hollywood, California (Earth)",
    "status": "alive",
    "bio": "Genius scientist and glamorous Hollywood actress who absorbed extra-dimensional Zero Matter, gaining the terrifying power to consume living matter on contact."
  },
  "jason-wilkes": {
    "id": "jason-wilkes",
    "name": "Dr. Jason Wilkes",
    "alias": "Dr. Wilkes",
    "cssClass": "jason-wilkes",
    "color": "#2dd4bf",
    "bgBadge": "bg-teal-950/80 hover:bg-teal-900/90",
    "textBadge": "text-teal-300",
    "borderBadge": "border-teal-600",
    "role": "hero",
    "affiliation": "Isodyne Energy / SSR Ally",
    "groups": [
      "SSR Allies",
      "Zero Matter Research"
    ],
    "originLocation": "Los Angeles, California (Earth)",
    "status": "alive",
    "bio": "Brilliant quantum physicist whose research into the Darkforce rift left him intangibly phased until cured by Peggy Carter and Howard Stark."
  },
  "charles-xavier": {
    "id": "charles-xavier",
    "name": "Charles Xavier / Professor X",
    "alias": "Professor X",
    "cssClass": "charles-xavier",
    "color": "#38bdf8",
    "bgBadge": "bg-sky-950/80 hover:bg-sky-900/90",
    "textBadge": "text-sky-300",
    "borderBadge": "border-sky-600",
    "role": "hero",
    "affiliation": "X-Men / Xavier's School for Gifted Youngsters",
    "groups": [
      "X-Men",
      "Division X",
      "Illuminati",
      "Mutants"
    ],
    "originLocation": "Westchester, New York (Earth-10005)",
    "status": "alive",
    "bio": "World's most powerful telepath and genetics scholar who dreams of peaceful coexistence between mutants and humanity, founder of Xavier's School and the X-Men."
  },
  "erik-lehnsherr": {
    "id": "erik-lehnsherr",
    "name": "Erik Lehnsherr / Magneto",
    "alias": "Magneto",
    "cssClass": "erik-lehnsherr",
    "color": "#ef4444",
    "bgBadge": "bg-red-950/80 hover:bg-red-900/90",
    "textBadge": "text-red-300",
    "borderBadge": "border-red-600",
    "role": "anti-hero",
    "affiliation": "Brotherhood of Mutants / Division X",
    "groups": [
      "Brotherhood of Mutants",
      "Division X",
      "Mutants"
    ],
    "originLocation": "Poland / Germany (Earth-10005)",
    "status": "alive",
    "bio": "Holocaust survivor and Master of Magnetism who believes mutantkind must defend itself by any means necessary against human prejudice."
  },
  "raven-darkholme": {
    "id": "raven-darkholme",
    "name": "Raven Darkhölme / Mystique",
    "alias": "Mystique",
    "cssClass": "raven-darkholme",
    "color": "#60a5fa",
    "bgBadge": "bg-blue-950/80 hover:bg-blue-900/90",
    "textBadge": "text-blue-300",
    "borderBadge": "border-blue-600",
    "role": "anti-hero",
    "affiliation": "Brotherhood of Mutants / X-Men",
    "groups": [
      "Brotherhood of Mutants",
      "X-Men",
      "Division X",
      "Mutants"
    ],
    "originLocation": "Westchester, New York (Earth-10005)",
    "status": "alive",
    "bio": "Shapeshifting mutant with natural blue scales and yellow eyes, foster sister to Charles Xavier who chose to embrace her true mutant identity with Magneto."
  },
  "hank-mccoy": {
    "id": "hank-mccoy",
    "name": "Dr. Hank McCoy / Beast",
    "alias": "Beast",
    "cssClass": "hank-mccoy",
    "color": "#3b82f6",
    "bgBadge": "bg-blue-950/80 hover:bg-blue-900/90",
    "textBadge": "text-blue-300",
    "borderBadge": "border-blue-600",
    "role": "hero",
    "affiliation": "X-Men / Division X / CIA",
    "groups": [
      "X-Men",
      "Division X",
      "Mutants"
    ],
    "originLocation": "United States (Earth-10005)",
    "status": "alive",
    "bio": "Brilliant geneticist and aerospace engineer whose attempt to cure his prehensile feet resulted in a permanent transformation into a blue-furred powerhouse."
  },
  "sebastian-shaw": {
    "id": "sebastian-shaw",
    "name": "Sebastian Shaw / Dr. Klaus Schmidt",
    "alias": "Black King",
    "cssClass": "sebastian-shaw",
    "color": "#dc2626",
    "bgBadge": "bg-red-950/80 hover:bg-red-900/90",
    "textBadge": "text-red-300",
    "borderBadge": "border-red-700",
    "role": "villain",
    "affiliation": "Hellfire Club",
    "groups": [
      "Hellfire Club",
      "Nazi Scientists",
      "Mutants"
    ],
    "originLocation": "Germany / United States (Earth-10005)",
    "status": "deceased",
    "bio": "Ruthless leader of the Hellfire Club capable of absorbing kinetic and thermal energy to amplify his physical strength, murdered by Magneto with a Nazi coin."
  },
  "emma-frost": {
    "id": "emma-frost",
    "name": "Emma Frost",
    "alias": "White Queen",
    "cssClass": "emma-frost",
    "color": "#e2e8f0",
    "bgBadge": "bg-slate-900/80 hover:bg-slate-800/90",
    "textBadge": "text-slate-200",
    "borderBadge": "border-slate-400",
    "role": "villain",
    "affiliation": "Hellfire Club / Brotherhood of Mutants",
    "groups": [
      "Hellfire Club",
      "Brotherhood of Mutants",
      "Mutants"
    ],
    "originLocation": "Boston, Massachusetts (Earth-10005)",
    "status": "alive",
    "bio": "Formidable telepath who can transform her body into organic, bulletproof diamond at will, Shaw's chief lieutenant."
  },
  "moira-mactaggert": {
    "id": "moira-mactaggert",
    "name": "Moira MacTaggert",
    "alias": "Agent MacTaggert",
    "cssClass": "moira-mactaggert",
    "color": "#94a3b8",
    "bgBadge": "bg-slate-950/80 hover:bg-slate-900/90",
    "textBadge": "text-slate-300",
    "borderBadge": "border-slate-600",
    "role": "secondary",
    "affiliation": "Central Intelligence Agency (CIA) / X-Men Ally",
    "groups": [
      "CIA",
      "Division X Allies"
    ],
    "originLocation": "United States (Earth-10005)",
    "status": "alive",
    "bio": "Fearless CIA operative who discovered the mutant threat posed by the Hellfire Club and partnered with Charles Xavier to establish Division X."
  },
  "alex-summers": {
    "id": "alex-summers",
    "name": "Alex Summers / Havok",
    "alias": "Havok",
    "cssClass": "alex-summers",
    "color": "#f59e0b",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-600",
    "role": "hero",
    "affiliation": "X-Men / Division X",
    "groups": [
      "X-Men",
      "Division X",
      "Mutants"
    ],
    "originLocation": "Omaha, Nebraska (Earth-10005)",
    "status": "alive",
    "bio": "Mutant capable of absorbing cosmic radiation and discharging destructive, concentric plasma energy rings from his chest."
  },
  "sean-cassidy": {
    "id": "sean-cassidy",
    "name": "Sean Cassidy / Banshee",
    "alias": "Banshee",
    "cssClass": "sean-cassidy",
    "color": "#10b981",
    "bgBadge": "bg-emerald-950/80 hover:bg-emerald-900/90",
    "textBadge": "text-emerald-300",
    "borderBadge": "border-emerald-600",
    "role": "hero",
    "affiliation": "X-Men / Division X",
    "groups": [
      "X-Men",
      "Division X",
      "Mutants"
    ],
    "originLocation": "Ireland (Earth-10005)",
    "status": "alive",
    "bio": "Young mutant gifted with powerful vocal cords capable of producing high-frequency acoustic shockwaves, sonic flight, and sonar echolocation."
  },
  "logan-wolverine": {
    "id": "logan-wolverine",
    "name": "James 'Logan' Howlett / Wolverine",
    "alias": "Wolverine",
    "cssClass": "logan-wolverine",
    "color": "#fbbf24",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-500",
    "role": "hero",
    "affiliation": "X-Men / Weapon X / Team X",
    "groups": [
      "X-Men",
      "Weapon X",
      "Team X",
      "Mutants"
    ],
    "originLocation": "Northwest Territories, Canada (Earth-10005)",
    "status": "alive",
    "bio": "Centuries-old mutant warrior endowed with enhanced animal senses, a regenerative healing factor, retractable bone claws fused with indestructible Adamantium, and an iconic bad attitude."
  },
  "victor-creed": {
    "id": "victor-creed",
    "name": "Victor Creed / Sabretooth",
    "alias": "Sabretooth",
    "cssClass": "victor-creed",
    "color": "#f97316",
    "bgBadge": "bg-orange-950/80 hover:bg-orange-900/90",
    "textBadge": "text-orange-300",
    "borderBadge": "border-orange-600",
    "role": "villain",
    "affiliation": "Team X / Weapon X / Brotherhood",
    "groups": [
      "Team X",
      "Weapon X",
      "Mutants"
    ],
    "originLocation": "Northwest Territories, Canada (Earth-10005)",
    "status": "alive",
    "bio": "Feral mutant predator possessing rapid cellular regeneration, feline fangs, razor-sharp claws, and an insatiable bloodlust; half-brother and eternal rival to Wolverine."
  },
  "william-stryker": {
    "id": "william-stryker",
    "name": "Colonel William Stryker",
    "alias": "Col. Stryker",
    "cssClass": "william-stryker",
    "color": "#71717a",
    "bgBadge": "bg-zinc-950/80 hover:bg-zinc-900/90",
    "textBadge": "text-zinc-300",
    "borderBadge": "border-zinc-500",
    "role": "villain",
    "affiliation": "Weapon X / US Armed Forces",
    "groups": [
      "Weapon X",
      "US Army",
      "Anti-Mutant Coalition"
    ],
    "originLocation": "United States (Earth-10005)",
    "status": "alive",
    "bio": "Ruthless military intelligence colonel obsessed with harvesting mutant biology, commander of Team X and the architect of the Weapon X Adamantium procedure and Weapon XI."
  },
  "kayla-silverfox": {
    "id": "kayla-silverfox",
    "name": "Kayla Silverfox",
    "alias": "Silver Fox",
    "cssClass": "kayla-silverfox",
    "color": "#a855f7",
    "bgBadge": "bg-purple-950/80 hover:bg-purple-900/90",
    "textBadge": "text-purple-300",
    "borderBadge": "border-purple-600",
    "role": "hero",
    "affiliation": "Schoolteacher / Weapon X Prisoner",
    "groups": [
      "Mutants"
    ],
    "originLocation": "Canadian Rockies, Canada (Earth-10005)",
    "status": "deceased",
    "bio": "Gentle mutant endowed with tactile hypnotic persuasion; Logan's beloved partner in the Canadian Rockies who sacrifices her life to ensure the freedom of captive mutant children."
  },
  "remy-lebeau-gambit": {
    "id": "remy-lebeau-gambit",
    "name": "Remy LeBeau / Gambit",
    "alias": "Gambit",
    "cssClass": "remy-lebeau-gambit",
    "color": "#ec4899",
    "bgBadge": "bg-pink-950/80 hover:bg-pink-900/90",
    "textBadge": "text-pink-300",
    "borderBadge": "border-pink-600",
    "role": "hero",
    "affiliation": "Cajun Thief / X-Men Ally",
    "groups": [
      "Mutants",
      "X-Men Allies"
    ],
    "originLocation": "New Orleans, Louisiana (Earth-10005)",
    "status": "alive",
    "bio": "Charming Cajun mutant gambler capable of charging inanimate objects with volatile kinetic explosive energy, wielding an acrobatic bo staff and playing cards."
  },
  "wade-wilson": {
    "id": "wade-wilson",
    "name": "Wade Wilson / Weapon XI",
    "alias": "Deadpool / Weapon XI",
    "cssClass": "wade-wilson",
    "color": "#dc2626",
    "bgBadge": "bg-red-950/80 hover:bg-red-900/90",
    "textBadge": "text-red-300",
    "borderBadge": "border-red-600",
    "role": "anti-hero",
    "affiliation": "Team X / Weapon X",
    "groups": [
      "Team X",
      "Weapon X",
      "Mutants"
    ],
    "originLocation": "Canada / United States (Earth-10005)",
    "status": "variable",
    "bio": "Mouthy mercenary swordsman transformed through surgical gene splicing into Weapon XI (The Mutant Killer) with teleportation, optic blasts, and adamantium arm blades."
  },
  "john-wraith": {
    "id": "john-wraith",
    "name": "John Wraith / Kestrel",
    "alias": "Kestrel",
    "cssClass": "john-wraith",
    "color": "#06b6d4",
    "bgBadge": "bg-cyan-950/80 hover:bg-cyan-900/90",
    "textBadge": "text-cyan-300",
    "borderBadge": "border-cyan-600",
    "role": "hero",
    "affiliation": "Team X / Las Vegas Boxing Manager",
    "groups": [
      "Team X",
      "Mutants"
    ],
    "originLocation": "United States (Earth-10005)",
    "status": "deceased",
    "bio": "Loyal mutant veteran of Team X capable of instantaneous line-of-sight spatial teleportation; ally to Logan murdered by Victor Creed."
  },
  "fred-dukes": {
    "id": "fred-dukes",
    "name": "Fred J. Dukes / Blob",
    "alias": "The Blob",
    "cssClass": "fred-dukes",
    "color": "#ca8a04",
    "bgBadge": "bg-yellow-950/80 hover:bg-yellow-900/90",
    "textBadge": "text-yellow-300",
    "borderBadge": "border-yellow-600",
    "role": "anti-hero",
    "affiliation": "Team X / Underground Boxing",
    "groups": [
      "Team X",
      "Mutants"
    ],
    "originLocation": "United States (Earth-10005)",
    "status": "alive",
    "bio": "Former Team X powerhouse possessing superhuman kinetic mass, elastic skin, and an impenetrable gravitational center."
  },
  "agent-zero": {
    "id": "agent-zero",
    "name": "David North / Agent Zero",
    "alias": "Agent Zero / Maverick",
    "cssClass": "agent-zero",
    "color": "#64748b",
    "bgBadge": "bg-slate-950/80 hover:bg-slate-900/90",
    "textBadge": "text-slate-300",
    "borderBadge": "border-slate-500",
    "role": "villain",
    "affiliation": "Team X / Weapon X",
    "groups": [
      "Team X",
      "Weapon X",
      "Mutants"
    ],
    "originLocation": "United States (Earth-10005)",
    "status": "deceased",
    "bio": "Cold-blooded mutant tracker and lethal marksman possessing inhuman projectile reflexes, sniper accuracy, and kinetic impact absorption."
  },
  "cyclops-scott-summers": {
    "id": "cyclops-scott-summers",
    "name": "Scott Summers / Cyclops",
    "alias": "Cyclops",
    "cssClass": "cyclops-scott-summers",
    "color": "#3b82f6",
    "bgBadge": "bg-blue-950/80 hover:bg-blue-900/90",
    "textBadge": "text-blue-300",
    "borderBadge": "border-blue-600",
    "role": "hero",
    "affiliation": "Xavier's School for Gifted Youngsters / X-Men",
    "groups": [
      "X-Men",
      "Mutants"
    ],
    "originLocation": "United States (Earth-10005)",
    "status": "alive",
    "bio": "Mutant leader gifted with powerful, uncontrollable beams of ruby-red concussive optic energy emitted constantly from his eyes, harnessed through specialized quartz-ruby visors."
  },
  "quicksilver-peter-maximoff": {
    "id": "quicksilver-peter-maximoff",
    "name": "Peter Maximoff / Quicksilver",
    "alias": "Quicksilver",
    "cssClass": "quicksilver-peter-maximoff",
    "color": "#93c5fd",
    "bgBadge": "bg-sky-950/80 hover:bg-sky-900/90",
    "textBadge": "text-sky-300",
    "borderBadge": "border-sky-500",
    "role": "hero",
    "affiliation": "X-Men / Independent",
    "groups": [
      "X-Men",
      "Mutants"
    ],
    "originLocation": "Virginia, United States (Earth-10005)",
    "status": "alive",
    "bio": "Playful and hyper-accelerated mutant capable of moving and reacting at extreme hypersonic speeds, making bullets and physical environments appear virtually frozen in time."
  },
  "bolivar-trask": {
    "id": "bolivar-trask",
    "name": "Dr. Bolivar Trask",
    "alias": "Trask",
    "cssClass": "bolivar-trask",
    "color": "#d97706",
    "bgBadge": "bg-amber-950/80 hover:bg-amber-900/90",
    "textBadge": "text-amber-300",
    "borderBadge": "border-amber-600",
    "role": "villain",
    "affiliation": "Trask Industries / US Department of Defense",
    "groups": [
      "Trask Industries",
      "Humanity"
    ],
    "originLocation": "United States (Earth-10005)",
    "status": "alive",
    "bio": "Visionary military scientist and founder of Trask Industries who designed the robotic Sentinel program, harvesting mutant genetic tissue to construct humanity's ultimate anti-mutant defense systems."
  },
  "kitty-pryde": {
    "id": "kitty-pryde",
    "name": "Kitty Pryde / Shadowcat",
    "alias": "Shadowcat",
    "cssClass": "kitty-pryde",
    "color": "#a78bfa",
    "bgBadge": "bg-purple-950/80 hover:bg-purple-900/90",
    "textBadge": "text-purple-300",
    "borderBadge": "border-purple-500",
    "role": "hero",
    "affiliation": "Mutant Resistance / X-Men",
    "groups": [
      "X-Men",
      "Mutants"
    ],
    "originLocation": "United States (Earth-10005)",
    "status": "alive",
    "bio": "Mutant with the power of molecular phasing who developed a chronal phase-shift ability, allowing her to send a person's consciousness back through time to change historical events."
  },
  "storm-ororo-munroe": {
    "id": "storm-ororo-munroe",
    "name": "Ororo Munroe / Storm",
    "alias": "Storm",
    "cssClass": "storm-ororo-munroe",
    "color": "#38bdf8",
    "bgBadge": "bg-cyan-950/80 hover:bg-cyan-900/90",
    "textBadge": "text-cyan-300",
    "borderBadge": "border-cyan-500",
    "role": "hero",
    "affiliation": "Xavier's School for Gifted Youngsters / X-Men",
    "groups": [
      "X-Men",
      "Mutants"
    ],
    "originLocation": "Earth-10005",
    "status": "alive",
    "bio": "Veteran X-Men leader with atmospheric godlike control over weather patterns, summoning torrential blizzards, lightning strikes, hurricane gale-force winds, and tornado shields."
  },
  "iceman-bobby-drake": {
    "id": "iceman-bobby-drake",
    "name": "Bobby Drake / Iceman",
    "alias": "Iceman",
    "cssClass": "iceman-bobby-drake",
    "color": "#67e8f9",
    "bgBadge": "bg-sky-950/80 hover:bg-sky-900/90",
    "textBadge": "text-sky-300",
    "borderBadge": "border-sky-400",
    "role": "hero",
    "affiliation": "Mutant Resistance / X-Men",
    "groups": [
      "X-Men",
      "Mutants"
    ],
    "originLocation": "United States (Earth-10005)",
    "status": "alive",
    "bio": "Omega-level mutant capable of lowering his thermal body temperature to absolute zero, transforming his physical form into solid organic ice and generating massive cryokinetic ice slides and frost blasts."
  },
  "colossus-piotr-rasputin": {
    "id": "colossus-piotr-rasputin",
    "name": "Piotr Rasputin / Colossus",
    "alias": "Colossus",
    "cssClass": "colossus-piotr-rasputin",
    "color": "#e2e8f0",
    "bgBadge": "bg-slate-900/80 hover:bg-slate-800/90",
    "textBadge": "text-slate-200",
    "borderBadge": "border-slate-400",
    "role": "hero",
    "affiliation": "Mutant Resistance / X-Men",
    "groups": [
      "X-Men",
      "Mutants"
    ],
    "originLocation": "Russia (Earth-10005)",
    "status": "alive",
    "bio": "Heroic Russian mutant who can willingly convert his entire epidermis and muscular tissue into impervious organic steel, granting him godlike brute strength and near-impenetrable durability."
  },
  "bishop-lucas-bishop": {
    "id": "bishop-lucas-bishop",
    "name": "Lucas Bishop",
    "alias": "Bishop",
    "cssClass": "bishop-lucas-bishop",
    "color": "#f87171",
    "bgBadge": "bg-red-950/80 hover:bg-red-900/90",
    "textBadge": "text-red-300",
    "borderBadge": "border-red-600",
    "role": "hero",
    "affiliation": "Mutant Resistance",
    "groups": [
      "Mutants"
    ],
    "originLocation": "Earth-10005",
    "status": "alive",
    "bio": "Futuristic guerrilla warrior possessing the mutant ability to absorb all forms of kinetic, thermal, and directed energy and redirect it through high-caliber tactical plasma weaponry."
  },
  "blink-clarice-ferguson": {
    "id": "blink-clarice-ferguson",
    "name": "Clarice Ferguson / Blink",
    "alias": "Blink",
    "cssClass": "blink-clarice-ferguson",
    "color": "#c084fc",
    "bgBadge": "bg-fuchsia-950/80 hover:bg-fuchsia-900/90",
    "textBadge": "text-fuchsia-300",
    "borderBadge": "border-fuchsia-500",
    "role": "hero",
    "affiliation": "Mutant Resistance",
    "groups": [
      "Mutants"
    ],
    "originLocation": "Earth-10005",
    "status": "alive",
    "bio": "Skilled tactical resistance fighter who creates shimmering spatial teleportation portals by throwing purple crystalline energy daggers across the battlefield."
  },
  "sunspot-roberto-da-costa": {
    "id": "sunspot-roberto-da-costa",
    "name": "Roberto da Costa / Sunspot",
    "alias": "Sunspot",
    "cssClass": "sunspot-roberto-da-costa",
    "color": "#fb923c",
    "bgBadge": "bg-orange-950/80 hover:bg-orange-900/90",
    "textBadge": "text-orange-300",
    "borderBadge": "border-orange-500",
    "role": "hero",
    "affiliation": "Mutant Resistance",
    "groups": [
      "Mutants"
    ],
    "originLocation": "Brazil (Earth-10005)",
    "status": "alive",
    "bio": "Brazilian mutant who absorbs and channels solar radiation to combust into a fiery solar plasma form capable of supersonic flight and devastating thermal energy blasts."
  },
  "warpath-james-proudstar": {
    "id": "warpath-james-proudstar",
    "name": "James Proudstar / Warpath",
    "alias": "Warpath",
    "cssClass": "warpath-james-proudstar",
    "color": "#a8a29e",
    "bgBadge": "bg-stone-900/80 hover:bg-stone-800/90",
    "textBadge": "text-stone-300",
    "borderBadge": "border-stone-500",
    "role": "hero",
    "affiliation": "Mutant Resistance",
    "groups": [
      "Mutants"
    ],
    "originLocation": "United States (Earth-10005)",
    "status": "alive",
    "bio": "Apache warrior mutant with hyper-heightened superhuman senses, superhuman agility, physical invulnerability, and deadly dual vibranium bowie combat knives."
  },
  "en-sabah-nur-apocalypse": {
    "id": "en-sabah-nur-apocalypse",
    "name": "En Sabah Nur / Apocalypse",
    "alias": "Apocalypse",
    "cssClass": "en-sabah-nur-apocalypse",
    "color": "#818cf8",
    "bgBadge": "bg-indigo-950/80 hover:bg-indigo-900/90",
    "textBadge": "text-indigo-300",
    "borderBadge": "border-indigo-500",
    "role": "villain",
    "affiliation": "The Four Horsemen of Apocalypse",
    "groups": [
      "Mutants"
    ],
    "originLocation": "Ancient Egypt (Earth-10005)",
    "status": "alive",
    "bio": "The world's first ancient mutant, revered as an omnipotent deity in Ancient Egypt who wields near-limitless telekinesis, molecular manipulation, and physical transmigration."
  },
  "jean-grey": {
    "id": "jean-grey",
    "name": "Jean Grey / Phoenix",
    "alias": "Phoenix",
    "cssClass": "jean-grey",
    "color": "#f97316",
    "bgBadge": "bg-orange-950/80 hover:bg-orange-900/90",
    "textBadge": "text-orange-300",
    "borderBadge": "border-orange-500",
    "role": "hero",
    "affiliation": "Xavier's School for Gifted Youngsters / X-Men",
    "groups": [
      "X-Men",
      "Mutants"
    ],
    "originLocation": "United States (Earth-10005)",
    "status": "alive",
    "bio": "Omega-level mutant telepath and telekinetic endowed with limitless psionic potential, capable of rearranging matter at the subatomic level and channeling the primordial Phoenix Force."
  },
  "nightcrawler-kurt-wagner": {
    "id": "nightcrawler-kurt-wagner",
    "name": "Kurt Wagner / Nightcrawler",
    "alias": "Nightcrawler",
    "cssClass": "nightcrawler-kurt-wagner",
    "color": "#60a5fa",
    "bgBadge": "bg-indigo-950/80 hover:bg-indigo-900/90",
    "textBadge": "text-indigo-300",
    "borderBadge": "border-indigo-500",
    "role": "hero",
    "affiliation": "Xavier's School for Gifted Youngsters / X-Men",
    "groups": [
      "X-Men",
      "Mutants"
    ],
    "originLocation": "Bavaria, Germany (Earth-10005)",
    "status": "alive",
    "bio": "Gentle, deeply spiritual mutant possessing indigo fur, acrobatic agility, a prehensile tail, and the ability to instantly teleport across space in a cloud of sulfurous blue smoke (BAMF)."
  },
  "psylocke-betsy-braddock": {
    "id": "psylocke-betsy-braddock",
    "name": "Betsy Braddock / Psylocke",
    "alias": "Psylocke",
    "cssClass": "psylocke-betsy-braddock",
    "color": "#e879f9",
    "bgBadge": "bg-fuchsia-950/80 hover:bg-fuchsia-900/90",
    "textBadge": "text-fuchsia-300",
    "borderBadge": "border-fuchsia-500",
    "role": "villain",
    "affiliation": "The Four Horsemen of Apocalypse (Pestilence)",
    "groups": [
      "Mutants"
    ],
    "originLocation": "Earth-10005",
    "status": "alive",
    "bio": "Deadly martial artist and mutant tracker capable of telepathic sensory tracking and manifesting lethal solid psionic energy blades, whips, and katanas from her hands."
  },
  "archangel-warren-worthington": {
    "id": "archangel-warren-worthington",
    "name": "Warren Worthington III / Archangel",
    "alias": "Archangel",
    "cssClass": "archangel-warren-worthington",
    "color": "#cbd5e1",
    "bgBadge": "bg-slate-900/80 hover:bg-slate-800/90",
    "textBadge": "text-slate-300",
    "borderBadge": "border-slate-500",
    "role": "villain",
    "affiliation": "The Four Horsemen of Apocalypse (Death)",
    "groups": [
      "Mutants"
    ],
    "originLocation": "Earth-10005",
    "status": "deceased",
    "bio": "Mutant aerial combatant originally gifted with feathered wings, bio-mechanically enhanced by Apocalypse with impenetrable metallic razor wings that fire lethal razor-sharp steel flechettes."
  }
};

export const allCharacters: Character[] = Object.values(charactersData);



