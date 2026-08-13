const fs = require('fs');
const path = require('path');

const htmlRaw = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

// Strip HTML comments so commented out blocks like the blank 2021 are not treated as active eras
const html = htmlRaw.replace(/<!--[\s\S]*?-->/g, '');

const mediaInfoMap = {
  'thor-1': { title: 'Thor', releaseYear: '2011', type: 'movie', phase: 'Phase 1', color: '#ffbf10' },
  'thor-2': { title: 'Thor: The Dark World', releaseYear: '2013', type: 'movie', phase: 'Phase 2', color: '#921c1c' },
  'thor-3': { title: 'Thor: Ragnarok', releaseYear: '2017', type: 'movie', phase: 'Phase 3', color: '#00d2be' },
  'black-panther-1': { title: 'Black Panther', releaseYear: '2018', type: 'movie', phase: 'Phase 3', color: '#9b5de5' },
  'agents-of-shield-i': { title: 'Agents of S.H.I.E.L.D. (Season 1)', releaseYear: '2013-2014', type: 'series', phase: 'Marvel Television', color: '#4a5568' },
  'agents-of-shield-ii': { title: 'Agents of S.H.I.E.L.D. (Season 2)', releaseYear: '2014-2015', type: 'series', phase: 'Marvel Television', color: '#4a5568' },
  'agents-of-shield-iii': { title: 'Agents of S.H.I.E.L.D. (Season 3)', releaseYear: '2015-2016', type: 'series', phase: 'Marvel Television', color: '#4a5568' },
  'agents-of-shield-iv': { title: 'Agents of S.H.I.E.L.D. (Season 4)', releaseYear: '2016-2017', type: 'series', phase: 'Marvel Television', color: '#4a5568' },
  'agents-of-shield-v': { title: 'Agents of S.H.I.E.L.D. (Season 5)', releaseYear: '2017-2018', type: 'series', phase: 'Marvel Television', color: '#4a5568' },
  'agents-of-shield-vi': { title: 'Agents of S.H.I.E.L.D. (Season 6)', releaseYear: '2019', type: 'series', phase: 'Marvel Television', color: '#4a5568' },
  'agents-of-shield-vii': { title: 'Agents of S.H.I.E.L.D. (Season 7)', releaseYear: '2020', type: 'series', phase: 'Marvel Television', color: '#4a5568' },
  'agents-of-shield-slingshot': { title: 'Agents of S.H.I.E.L.D.: Slingshot', releaseYear: '2016', type: 'series', phase: 'Marvel Television', color: '#319795' },
  'inhumans-i': { title: 'Inhumans (Season 1)', releaseYear: '2017', type: 'series', phase: 'Marvel Television', color: '#2b6cb0' },
  'the-defenders-i': { title: 'The Defenders (Season 1)', releaseYear: '2017', type: 'series', phase: 'Marvel Television', color: '#c53030' },
  'captain-america-1': { title: 'Captain America: The First Avenger', releaseYear: '2011', type: 'movie', phase: 'Phase 1', color: '#2b6cb0' },
  'captain-america-2': { title: 'Captain America: The Winter Soldier', releaseYear: '2014', type: 'movie', phase: 'Phase 2', color: '#2c5282' },
  'captain-america-3': { title: 'Captain America: Civil War', releaseYear: '2016', type: 'movie', phase: 'Phase 3', color: '#9b2c2c' },
  'agent-carter-i': { title: 'Agent Carter (Season 1)', releaseYear: '2015', type: 'series', phase: 'Marvel Television', color: '#2f855a' },
  'agent-carter-ii': { title: 'Agent Carter (Season 2)', releaseYear: '2016', type: 'series', phase: 'Marvel Television', color: '#276749' },
  'one-shot-agent-carter': { title: 'Marvel One-Shot: Agent Carter', releaseYear: '2013', type: 'oneshot', phase: 'One-Shot', color: '#38a169' },
  'one-shot-a-funny-thing': { title: 'Marvel One-Shot: A Funny Thing Happened on the Way to Thor\'s Hammer', releaseYear: '2011', type: 'oneshot', phase: 'One-Shot', color: '#d69e2e' },
  'one-shot-the-consultant': { title: 'Marvel One-Shot: The Consultant', releaseYear: '2011', type: 'oneshot', phase: 'One-Shot', color: '#805ad5' },
  'one-shot-item-47': { title: 'Marvel One-Shot: Item 47', releaseYear: '2012', type: 'oneshot', phase: 'One-Shot', color: '#4a5568' },
  'one-shot-all-hail': { title: 'Marvel One-Shot: All Hail the King', releaseYear: '2014', type: 'oneshot', phase: 'One-Shot', color: '#e53e3e' },
  'team-thor': { title: 'Team Thor', releaseYear: '2016', type: 'oneshot', phase: 'One-Shot', color: '#ecc94b' },
  'iron-man-1': { title: 'Iron Man', releaseYear: '2008', type: 'movie', phase: 'Phase 1', color: '#e53e3e' },
  'iron-man-2': { title: 'Iron Man 2', releaseYear: '2010', type: 'movie', phase: 'Phase 1', color: '#dd6b20' },
  'iron-man-3': { title: 'Iron Man 3', releaseYear: '2013', type: 'movie', phase: 'Phase 2', color: '#c53030' },
  'hulk-1': { title: 'The Incredible Hulk', releaseYear: '2008', type: 'movie', phase: 'Phase 1', color: '#38a169' },
  'guardians-of-the-galaxy-1': { title: 'Guardians of the Galaxy', releaseYear: '2014', type: 'movie', phase: 'Phase 2', color: '#805ad5' },
  'guardians-of-the-galaxy-2': { title: 'Guardians of the Galaxy Vol. 2', releaseYear: '2017', type: 'movie', phase: 'Phase 3', color: '#d53f8c' },
  'captain-marvel-1': { title: 'Captain Marvel', releaseYear: '2019', type: 'movie', phase: 'Phase 3', color: '#e53e3e' },
  'ant-man-1': { title: 'Ant-Man', releaseYear: '2015', type: 'movie', phase: 'Phase 2', color: '#9b2c2c' },
  'ant-man-2': { title: 'Ant-Man and the Wasp', releaseYear: '2018', type: 'movie', phase: 'Phase 3', color: '#d69e2e' },
  'daredevil-i': { title: 'Daredevil (Season 1)', releaseYear: '2015', type: 'series', phase: 'Marvel Television', color: '#9b2c2c' },
  'daredevil-ii': { title: 'Daredevil (Season 2)', releaseYear: '2016', type: 'series', phase: 'Marvel Television', color: '#742a2a' },
  'daredevil-iii': { title: 'Daredevil (Season 3)', releaseYear: '2018', type: 'series', phase: 'Marvel Television', color: '#521b1b' },
  'iron-fist-i': { title: 'Iron Fist (Season 1)', releaseYear: '2017', type: 'series', phase: 'Marvel Television', color: '#d69e2e' },
  'iron-fist-ii': { title: 'Iron Fist (Season 2)', releaseYear: '2018', type: 'series', phase: 'Marvel Television', color: '#b7791f' },
  'jessica-jones-i': { title: 'Jessica Jones (Season 1)', releaseYear: '2015', type: 'series', phase: 'Marvel Television', color: '#553c9a' },
  'jessica-jones-ii': { title: 'Jessica Jones (Season 2)', releaseYear: '2018', type: 'series', phase: 'Marvel Television', color: '#44337a' },
  'jessica-jones-iii': { title: 'Jessica Jones (Season 3)', releaseYear: '2019', type: 'series', phase: 'Marvel Television', color: '#322659' },
  'luke-cage-i': { title: 'Luke Cage (Season 1)', releaseYear: '2016', type: 'series', phase: 'Marvel Television', color: '#dd6b20' },
  'luke-cage-ii': { title: 'Luke Cage (Season 2)', releaseYear: '2018', type: 'series', phase: 'Marvel Television', color: '#c05621' },
  'the-punisher-i': { title: 'The Punisher (Season 1)', releaseYear: '2017', type: 'series', phase: 'Marvel Television', color: '#1a202c' },
  'the-punisher-ii': { title: 'The Punisher (Season 2)', releaseYear: '2019', type: 'series', phase: 'Marvel Television', color: '#2d3748' },
  'black-widow-1': { title: 'Black Widow', releaseYear: '2021', type: 'movie', phase: 'Phase 4', color: '#742a2a' },
  'avengers-1': { title: 'The Avengers', releaseYear: '2012', type: 'movie', phase: 'Phase 1', color: '#3182ce' },
  'avengers-2': { title: 'Avengers: Age of Ultron', releaseYear: '2015', type: 'movie', phase: 'Phase 2', color: '#319795' },
  'avengers-3': { title: 'Avengers: Infinity War', releaseYear: '2018', type: 'movie', phase: 'Phase 3', color: '#6b46c1' },
  'spider-man-1': { title: 'Spider-Man: Homecoming', releaseYear: '2017', type: 'movie', phase: 'Phase 3', color: '#c53030' },
  'doctor-strange-1': { title: 'Doctor Strange', releaseYear: '2016', type: 'movie', phase: 'Phase 3', color: '#2b6cb0' },
  'cloak-&-dagger-i': { title: 'Cloak & Dagger (Season 1)', releaseYear: '2018', type: 'series', phase: 'Marvel Television', color: '#2b6cb0' },
  'cloak-&-dagger-ii': { title: 'Cloak & Dagger (Season 2)', releaseYear: '2019', type: 'series', phase: 'Marvel Television', color: '#2c5282' }
};

const charactersMap = {
  'captain-america': { name: 'Steve Rogers / Captain America', alias: 'Captain America', color: '#3b82f6', affiliation: 'Avengers / SSR', role: 'hero', bio: 'The First Avenger and leader of Earth\'s Mightiest Heroes.' },
  'iron-man': { name: 'Tony Stark / Iron Man', alias: 'Iron Man', color: '#ef4444', affiliation: 'Avengers / Stark Industries', role: 'hero', bio: 'Genius, billionaire, playboy, philanthropist.' },
  'thor': { name: 'Thor Odinson', alias: 'God of Thunder', color: '#eab308', affiliation: 'Avengers / Asgard', role: 'hero', bio: 'Crown Prince and God of Thunder of Asgard.' },
  'hulk': { name: 'Bruce Banner / Hulk', alias: 'The Incredible Hulk', color: '#22c55e', affiliation: 'Avengers', role: 'hero', bio: 'Renowned gamma radiation physicist turned emerald powerhouse.' },
  'black-widow': { name: 'Natasha Romanoff / Black Widow', alias: 'Black Widow', color: '#a855f7', affiliation: 'Avengers / S.H.I.E.L.D.', role: 'hero', bio: 'Master assassin and founding Avenger.' },
  'hawkeye': { name: 'Clint Barton / Hawkeye', alias: 'Hawkeye', color: '#9333ea', affiliation: 'Avengers / S.H.I.E.L.D.', role: 'hero', bio: 'World\'s greatest marksman and archer.' },
  'winter-soldier': { name: 'Bucky Barnes / Winter Soldier', alias: 'Winter Soldier', color: '#38bdf8', affiliation: 'Howling Commandos / HYDRA / Avengers', role: 'hero', bio: 'Steve Rogers\' lifelong best friend and former lethal operative.' },
  'peggy-carter': { name: 'Peggy Carter', alias: 'Agent Carter', color: '#10b981', affiliation: 'SSR / S.H.I.E.L.D.', role: 'hero', bio: 'Founding member and director of S.H.I.E.L.D.' },
  'howard-stark': { name: 'Howard Stark', alias: 'Howard Stark', color: '#b91c1c', affiliation: 'Stark Industries / SSR / S.H.I.E.L.D.', role: 'hero', bio: 'Visionary inventor and founder of Stark Industries.' },
  'fury': { name: 'Nick Fury', alias: 'Director Fury', color: '#6366f1', affiliation: 'S.H.I.E.L.D.', role: 'hero', bio: 'Director of S.H.I.E.L.D. and architect of the Avengers Initiative.' },
  'coulson': { name: 'Phil Coulson', alias: 'Agent Coulson', color: '#3b82f6', affiliation: 'S.H.I.E.L.D.', role: 'hero', bio: 'The heart and backbone of S.H.I.E.L.D.' },
  'maria-hill': { name: 'Maria Hill', alias: 'Agent Hill', color: '#1e3a8a', affiliation: 'S.H.I.E.L.D. / Stark Industries', role: 'hero', bio: 'Deputy Director of S.H.I.E.L.D.' },
  'may': { name: 'Melinda May', alias: 'The Cavalry', color: '#94a3b8', affiliation: 'S.H.I.E.L.D.', role: 'hero', bio: 'Ace pilot and formidable combat specialist.' },
  'skye': { name: 'Daisy Johnson / Skye / Quake', alias: 'Quake', color: '#f97316', affiliation: 'S.H.I.E.L.D. / Secret Warriors', role: 'hero', bio: 'Inhuman agent capable of seismic vibrations.' },
  'loki': { name: 'Loki Laufeyson', alias: 'God of Mischief', color: '#16a34a', affiliation: 'Asgard', role: 'anti-hero', bio: 'Prince of Asgard, Master of Magic and Mischief.' },
  'odin': { name: 'Odin Borson', alias: 'Allfather', color: '#06b6d4', affiliation: 'Asgard', role: 'cosmic', bio: 'King of Asgard and protector of the Nine Realms.' },
  'star-lord': { name: 'Peter Quill / Star-Lord', alias: 'Star-Lord', color: '#be123c', affiliation: 'Guardians of the Galaxy', role: 'hero', bio: 'Celestial-human hybrid and leader of the Guardians of the Galaxy.' },
  'gamora': { name: 'Gamora', alias: 'Deadliest Woman in the Galaxy', color: '#84cc16', affiliation: 'Guardians of the Galaxy', role: 'hero', bio: 'Daughter of Thanos and deadliest assassin.' },
  'rocket': { name: 'Rocket Raccoon', alias: 'Rocket', color: '#d97706', affiliation: 'Guardians of the Galaxy', role: 'hero', bio: 'Genius engineer and weapons specialist.' },
  'groot': { name: 'Groot', alias: 'Groot', color: '#65a30d', affiliation: 'Guardians of the Galaxy', role: 'hero', bio: 'Flora Colossus companion of Rocket.' },
  'drax': { name: 'Drax the Destroyer', alias: 'Drax', color: '#f43f5e', affiliation: 'Guardians of the Galaxy', role: 'hero', bio: 'Vengeful warrior seeking Thanos.' },
  'mantis': { name: 'Mantis', alias: 'Mantis', color: '#f472b6', affiliation: 'Guardians of the Galaxy', role: 'hero', bio: 'Empathic companion with emotional healing abilities.' },
  'nebula': { name: 'Nebula', alias: 'Nebula', color: '#2563eb', affiliation: 'Guardians of the Galaxy', role: 'hero', bio: 'Cybernetically enhanced daughter of Thanos.' },
  'captain-marvel': { name: 'Carol Danvers / Captain Marvel', alias: 'Captain Marvel', color: '#ef4444', affiliation: 'Starforce / Avengers', role: 'hero', bio: 'Cosmic powerhouse infused with Space Stone energy.' },
  'doctor-strange': { name: 'Stephen Strange / Doctor Strange', alias: 'Doctor Strange', color: '#0284c7', affiliation: 'Masters of the Mystic Arts', role: 'hero', bio: 'Master of the Mystic Arts and guardian of the Time Stone.' },
  'spider-man': { name: 'Peter Parker / Spider-Man', alias: 'Spider-Man', color: '#dc2626', affiliation: 'Avengers / Queens', role: 'hero', bio: 'Your friendly neighborhood Spider-Man.' },
  'black-panther': { name: 'T\'Challa / Black Panther', alias: 'Black Panther', color: '#0f172a', affiliation: 'Avengers / Wakanda', role: 'hero', bio: 'King and protector of Wakanda.' },
  'shuri': { name: 'Shuri', alias: 'Princess of Wakanda', color: '#78350f', affiliation: 'Wakanda', role: 'hero', bio: 'Genius scientist and princess of Wakanda.' },
  'okoye': { name: 'Okoye', alias: 'General Okoye', color: '#dc2626', affiliation: 'Dora Milaje / Wakanda', role: 'hero', bio: 'General of the Dora Milaje.' },
  'nakia': { name: 'Nakia', alias: 'War Dog', color: '#15803d', affiliation: 'War Dogs / Wakanda', role: 'hero', bio: 'Wakandan spy and activist.' },
  'scarlet-witch': { name: 'Wanda Maximoff / Scarlet Witch', alias: 'Scarlet Witch', color: '#991b1b', affiliation: 'Avengers', role: 'hero', bio: 'Chaos magic wielder amplified by the Mind Stone.' },
  'pietro': { name: 'Pietro Maximoff / Quicksilver', alias: 'Quicksilver', color: '#06b6d4', affiliation: 'Avengers', role: 'hero', bio: 'Supersonic speedster enhanced by the Mind Stone.' },
  'vision': { name: 'Vision', alias: 'Vision', color: '#3b82f6', affiliation: 'Avengers', role: 'hero', bio: 'Synthezoid born of vibranium and the Mind Stone.' },
  'falcon': { name: 'Sam Wilson / Falcon', alias: 'Falcon', color: '#713f12', affiliation: 'Avengers', role: 'hero', bio: 'Air Force pararescue operative and winged Avenger.' },
  'war-machine': { name: 'James Rhodes / War Machine', alias: 'War Machine', color: '#38bdf8', affiliation: 'US Air Force / Avengers', role: 'hero', bio: 'Colonel James Rhodes, heavily armored Avenger.' },
  'ant-man': { name: 'Scott Lang / Ant-Man', alias: 'Ant-Man', color: '#991b1b', affiliation: 'Avengers', role: 'hero', bio: 'Master thief turned size-shifting superhero.' },
  'wasp': { name: 'Hope van Dyne / Wasp', alias: 'The Wasp', color: '#eab308', affiliation: 'Pym Technologies', role: 'hero', bio: 'Skilled martial artist and winged size-changer.' },
  'daredevil': { name: 'Matt Murdock / Daredevil', alias: 'Daredevil', color: '#7f1d1d', affiliation: 'Defenders / Hell\'s Kitchen', role: 'hero', bio: 'Blind lawyer turned vigilante Man Without Fear.' },
  'jessica-jones': { name: 'Jessica Jones', alias: 'Jessica Jones', color: '#6b21a8', affiliation: 'Alias Investigations / Defenders', role: 'hero', bio: 'Super-strong private investigator.' },
  'luke-cage': { name: 'Luke Cage', alias: 'Power Man', color: '#d97706', affiliation: 'Defenders / Harlem', role: 'hero', bio: 'Bulletproof hero of Harlem.' },
  'iron-fist': { name: 'Danny Rand / Iron Fist', alias: 'Iron Fist', color: '#ca8a04', affiliation: 'Defenders / Rand Enterprises', role: 'hero', bio: 'Immortal Iron Fist, protector of K\'un-Lun.' },
  'the-punisher': { name: 'Frank Castle / The Punisher', alias: 'The Punisher', color: '#0f172a', affiliation: 'Vigilante', role: 'anti-hero', bio: 'Ex-marine waging a one-man war on crime.' },
  'elektra': { name: 'Elektra Natchios', alias: 'Elektra / Black Sky', color: '#881337', affiliation: 'The Hand / Chaste', role: 'anti-hero', bio: 'Lethal martial artist and the Hand\'s Black Sky.' },
  'colleen-wing': { name: 'Colleen Wing', alias: 'Colleen Wing', color: '#94a3b8', affiliation: 'Daughters of the Dragon / Defenders', role: 'hero', bio: 'Master swordswoman and martial artist.' },
  'cloak': { name: 'Tyrone Johnson / Cloak', alias: 'Cloak', color: '#1e1b4b', affiliation: 'Cloak & Dagger', role: 'hero', bio: 'Channeler of Darkforce dimension.' },
  'dagger': { name: 'Tandy Bowen / Dagger', alias: 'Dagger', color: '#e2e8f0', affiliation: 'Cloak & Dagger', role: 'hero', bio: 'Channeler of Lightforce daggers.' },
  'valkyrie': { name: 'Brunnhilde / Valkyrie', alias: 'Valkyrie', color: '#f59e0b', affiliation: 'Asgard / Revengers', role: 'hero', bio: 'Legendary warrior and King of New Asgard.' },
  'talos': { name: 'Talos', alias: 'Talos the Skrull', color: '#65a30d', affiliation: 'Skrulls', role: 'hero', bio: 'Skrull general fighting for his people\'s survival.' },
  'goose': { name: 'Goose the Cat', alias: 'Goose (Flerken)', color: '#ea580c', affiliation: 'Captain Marvel', role: 'cosmic', bio: 'Flerken creature with pocket dimensions inside.' },
  'thanos': { name: 'Thanos', alias: 'The Mad Titan', color: '#7e22ce', affiliation: 'Black Order', role: 'villain', bio: 'The Mad Titan seeking the 6 Infinity Stones.' }
};

const stonesMap = {
  'tesseract': 'space',
  'aether': 'reality',
  'power-stone': 'power',
  'mind-stone': 'mind',
  'eye-of-agamotto': 'time',
  'soul-stone': 'soul'
};

// Parse Eras and Events
const eraRegex = /<h2>(.*?)<\/h2>/g;
const eraPositions = [];
let match;
while ((match = eraRegex.exec(html)) !== null) {
  eraPositions.push({ title: match[1].trim(), index: match.index, length: match[0].length });
}

function getCategory(title) {
  const clean = title.replace(/^-|-$/g, '').trim().toLowerCase();
  if (clean.includes('eons') || clean.includes('years ago') || clean.includes('ad')) return 'ancient';
  const year = parseInt(clean, 10);
  if (!isNaN(year)) {
    if (year <= 1960) return 'early-century';
    if (year <= 2009) return 'golden-age';
    if (year <= 2017) return 'avengers-era';
    if (year <= 2020) return 'infinity-war';
    return 'future';
  }
  return 'ancient';
}

const parsedEras = [];

for (let i = 0; i < eraPositions.length; i++) {
  const current = eraPositions[i];
  const next = eraPositions[i + 1];
  const content = html.slice(current.index + current.length, next ? next.index : html.length);
  
  const sectionRegex = /<section\s+class="([^"]+)">([\s\S]*?)<\/section>/g;
  const events = [];
  let sMatch;
  let eventIdx = 0;
  
  while ((sMatch = sectionRegex.exec(content)) !== null) {
    eventIdx++;
    const rawClass = sMatch[1].trim();
    const sectionBody = sMatch[2].trim();
    
    // Extract media key and alternative timeline flag
    const classList = rawClass.split(/\s+/);
    const isAlt = classList.includes('alternative');
    const mediaKeys = classList.filter(c => c !== 'alternative');
    const primaryMediaKey = mediaKeys[0] || 'mcu-event';
    const mediaInfo = mediaInfoMap[primaryMediaKey] || {
      title: primaryMediaKey.replace(/-/g, ' ').toUpperCase(),
      releaseYear: '',
      type: 'movie',
      phase: 'Phase 1'
    };
    
    // Extract explicit title from h1 or h5
    const h1Match = sectionBody.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h5Match = sectionBody.match(/<h5[^>]*>([\s\S]*?)<\/h5>/i);
    let explicitTitle = '';
    if (h1Match) explicitTitle = h1Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    else if (h5Match) explicitTitle = h5Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    
    // Extract paragraphs
    const paragraphs = [...sectionBody.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
      .map(p => p[1].replace(/\r?\n\s*/g, ' ').trim())
      .filter(p => p.length > 0);
      
    // Detect characters, stones, deaths, mcu highlights
    const characterIds = new Set();
    const stoneIds = new Set();
    const deaths = [];
    const mcuHighlights = [];
    
    // Scan strong tags
    const strongMatches = [...sectionBody.matchAll(/<strong\s+class="([^"]+)">([\s\S]*?)<\/strong>/gi)];
    strongMatches.forEach(sm => {
      const classes = sm[1].split(/\s+/);
      const text = sm[2].replace(/<[^>]+>/g, '').trim();
      classes.forEach(cls => {
        if (stonesMap[cls]) stoneIds.add(stonesMap[cls]);
        if (charactersMap[cls]) characterIds.add(cls);
        if (cls === 'dead' || cls === 'presumably-dead' || cls === 'pressumably') {
          deaths.push(text);
        }
        if (cls === 'mcu') {
          mcuHighlights.push(text);
        }
      });
    });
    
    const eventId = `event-${current.title.replace(/[^a-zA-Z0-9]/g, '_')}-${eventIdx}`;
    
    events.push({
      id: eventId,
      eraId: `era-${current.title.replace(/[^a-zA-Z0-9]/g, '_')}`,
      eraTitle: current.title.replace(/^-|-$/g, '').trim(),
      mediaKey: primaryMediaKey,
      mediaTitle: explicitTitle || mediaInfo.title,
      mediaType: mediaInfo.type,
      mediaPhase: mediaInfo.phase,
      isAlternativeTimeline: isAlt,
      rawClasses: classList,
      rawHtml: sectionBody,
      paragraphs,
      characters: Array.from(characterIds),
      stones: Array.from(stoneIds),
      deaths: Array.from(new Set(deaths)),
      mcuHighlights: Array.from(new Set(mcuHighlights))
    });
  }
  
  if (events.length > 0) {
    const cleanTitle = current.title.replace(/^-|-$/g, '').trim();
    parsedEras.push({
      id: `era-${current.title.replace(/[^a-zA-Z0-9]/g, '_')}`,
      title: current.title,
      cleanTitle,
      category: getCategory(current.title),
      events
    });
  }
}

// Make sure output dir exists
const dataDir = path.join(__dirname, '../src/data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Write timelineData.ts
const timelineTsContent = `import { EraGroup } from '@/types';\n\nexport const timelineEras: EraGroup[] = ${JSON.stringify(parsedEras, null, 2)};\n`;
fs.writeFileSync(path.join(dataDir, 'timelineData.ts'), timelineTsContent, 'utf8');

// Write charactersData.ts
const allCharactersList = Object.entries(charactersMap).map(([id, char]) => ({
  id,
  name: char.name,
  alias: char.alias,
  cssClass: id,
  color: char.color,
  bgBadge: 'bg-slate-800/80 hover:bg-slate-700/90',
  textBadge: 'text-white',
  borderBadge: 'border-slate-700',
  role: char.role,
  affiliation: char.affiliation,
  status: 'alive',
  bio: char.bio
}));

const charactersTsContent = `import { Character } from '@/types';\n\nexport const charactersData: Record<string, Character> = ${JSON.stringify(
  Object.fromEntries(allCharactersList.map(c => [c.id, c])),
  null,
  2
)};\n\nexport const allCharacters: Character[] = Object.values(charactersData);\n`;
fs.writeFileSync(path.join(dataDir, 'charactersData.ts'), charactersTsContent, 'utf8');

// Write mediaData.ts
const mediaList = Object.entries(mediaInfoMap).map(([id, info], idx) => ({
  id,
  cssClass: id,
  title: info.title,
  shortTitle: info.title.split(':')[0],
  releaseYear: info.releaseYear,
  type: info.type,
  phase: info.phase,
  posterColor: info.color,
  timelineOrder: idx + 1,
  description: `Official entry in the Marvel Cinematic Universe - ${info.phase} (${info.releaseYear})`
}));

const mediaTsContent = `import { MediaItem } from '@/types';\n\nexport const mediaData: Record<string, MediaItem> = ${JSON.stringify(
  Object.fromEntries(mediaList.map(m => [m.id, m])),
  null,
  2
)};\n\nexport const allMedia: MediaItem[] = Object.values(mediaData);\n`;
fs.writeFileSync(path.join(dataDir, 'mediaData.ts'), mediaTsContent, 'utf8');

// Write infinityStonesData.ts
const infinityStones = [
  {
    id: 'space',
    name: 'Space Stone (Gema del Espacio)',
    cssClass: 'tesseract',
    color: 'Azul Cósmico',
    colorHex: '#3b82f6',
    glowColor: 'rgba(59, 130, 246, 0.6)',
    vessel: 'Tesseract / Cosmic Cube',
    powerDescription: 'Permite teletransportarse a través del universo y manipular el tejido del espacio-tiempo.',
    firstAppearance: 'Captain America: The First Avenger / Thor',
    currentStatus: 'Destruida por Thanos en 2018 tras el Chasquido.',
    journey: [
      { era: '965 AD', location: 'Tønsberg, Noruega', holder: 'Odin (Asgard)', eventSummary: 'Odin oculta el Tesseract en un templo nórdico tras vencer a los Gigantes de Hielo.' },
      { era: '1942', location: 'Tønsberg, Noruega', holder: 'Johann Schmidt (Red Skull)', eventSummary: 'Red Skull roba el Tesseract para alimentar las armas científicas de HYDRA.' },
      { era: '1945', location: 'Océano Ártico', holder: 'Howard Stark / SSR', eventSummary: 'Howard Stark recupera el Tesseract del fondo del océano.' },
      { era: '1995', location: 'Laboratorio de Mar-Vell', holder: 'Mar-Vell / Goose / Nick Fury', eventSummary: 'Goose el Flerken ingiere el Tesseract y luego lo regurgita en el escritorio de Nick Fury en SHIELD.' },
      { era: '2012', location: 'Nueva York', holder: 'Loki / Thor', eventSummary: 'Loki abre el portal Chitauri; tras la batalla de NY, Thor lo lleva a la bóveda de Asgard.' },
      { era: '2017', location: 'Asgard / Ragnarok', holder: 'Loki', eventSummary: 'Loki recupera el Tesseract de la bóveda de Asgard antes de la destrucción por Surtur.' },
      { era: '2018', location: 'Statesman (Nave Asgardiana)', holder: 'Thanos', eventSummary: 'Thanos rompe el Tesseract y coloca la Gema del Espacio en el Guantelete del Infinito.' }
    ]
  },
  {
    id: 'reality',
    name: 'Reality Stone (Gema de la Realidad)',
    cssClass: 'aether',
    color: 'Rojo Carmesí',
    colorHex: '#ef4444',
    glowColor: 'rgba(239, 68, 68, 0.6)',
    vessel: 'Aether (Éter)',
    powerDescription: 'Capaz de alterar la realidad misma, transformando materia según la voluntad del portador.',
    firstAppearance: 'Thor: The Dark World',
    currentStatus: 'Destruida por Thanos en 2018.',
    journey: [
      { era: 'Eons ago', location: 'Svartalfheim', holder: 'Bor (Padre de Odin)', eventSummary: 'Bor derrota a Malekith y a los Elfos Oscuros, escondiendo el Éter en una columna de piedra.' },
      { era: '2013', location: 'Svartalfheim / Asgard / Londres', holder: 'Jane Foster / Malekith / Thor / Coleccionista', eventSummary: 'Jane Foster absorbe accidentalmente el Éter; Thor vence a Malekith y los guerreros de Asgard se lo entregan al Coleccionista en Knowhere.' },
      { era: '2018', location: 'Knowhere', holder: 'Thanos', eventSummary: 'Thanos embosca al Coleccionista y obtiene la Gema de la Realidad.' }
    ]
  },
  {
    id: 'power',
    name: 'Power Stone (Gema del Poder)',
    cssClass: 'power-stone',
    color: 'Púrpura Destructor',
    colorHex: '#a855f7',
    glowColor: 'rgba(168, 85, 247, 0.6)',
    vessel: 'El Orbe de Morag',
    powerDescription: 'Otorga fuerza sobrehumana inconmensurable y el poder de erradicar civilizaciones y planetas enteros.',
    firstAppearance: 'Guardians of the Galaxy',
    currentStatus: 'Destruida por Thanos en 2018.',
    journey: [
      { era: 'Ancestral', location: 'Morag', holder: 'Templarios Celestiales', eventSummary: 'Encapsulada dentro del Orbe en las profundidades del templo sumergido de Morag.' },
      { era: '2014', location: 'Morag / Xandar', holder: 'Peter Quill / Ronan el Acusador / Nova Corps', eventSummary: 'Los Guardianes de la Galaxia canalizan su energía juntos para destruir a Ronan y entregan el Orbe a la seguridad de Nova Corps en Xandar.' },
      { era: '2018', location: 'Xandar', holder: 'Thanos', eventSummary: 'Thanos diezma Xandar y toma la primera gema de su guantelete.' }
    ]
  },
  {
    id: 'mind',
    name: 'Mind Stone (Gema de la Mente)',
    cssClass: 'mind-stone',
    color: 'Amarillo Astral',
    colorHex: '#eab308',
    glowColor: 'rgba(234, 179, 8, 0.6)',
    vessel: 'Cetro Chitauri / Frente de Vision',
    powerDescription: 'Control mental absoluto, telepatía, intelecto supremo y chispa vital capaz de crear conciencias sintéticas.',
    firstAppearance: 'The Avengers / Avengers: Age of Ultron',
    currentStatus: 'Arrancada de la frente de Visión por Thanos en Wakanda (2018).',
    journey: [
      { era: '2012', location: 'Santuario / Nueva York', holder: 'Thanos / Loki / S.H.I.E.L.D. (HYDRA)', eventSummary: 'Thanos presta el cetro a Loki para la invasión de la Tierra; tras la batalla es confiscado por HYDRA encubierta.' },
      { era: '2015', location: 'Sokovia / Torre de los Vengadores', holder: 'Baron Strucker / Ultron / Vision', eventSummary: 'Strucker experimenta en Wanda y Pietro; Ultron crea el cuerpo sintético de Visión donde la gema cobra vida.' },
      { era: '2018', location: 'Wakanda', holder: 'Thanos', eventSummary: 'Thanos retrocede el tiempo con la Gema del Tiempo tras la detonación de Wanda y arranca la gema de Visión.' }
    ]
  },
  {
    id: 'time',
    name: 'Time Stone (Gema del Tiempo)',
    cssClass: 'eye-of-agamotto',
    color: 'Verde Temporal',
    colorHex: '#22c55e',
    glowColor: 'rgba(34, 197, 94, 0.6)',
    vessel: 'Ojo de Agamotto',
    powerDescription: 'Permite manipular el flujo temporal: retroceder, avanzar, crear bucles temporales y ver futuros alternos.',
    firstAppearance: 'Doctor Strange',
    currentStatus: 'Destruida por Thanos en 2018.',
    journey: [
      { era: 'Ancestral', location: 'Kamar-Taj', holder: 'Agamotto / Ancestral', eventSummary: 'El primer Hechicero Supremo Agamotto crea el amuleto protector para salvaguardar la Tierra.' },
      { era: '2016', location: 'Hong Kong / Dimensión Oscura', holder: 'Doctor Stephen Strange', eventSummary: 'Strange atrapa a Dormammu en un bucle temporal infinito para salvar el planeta.' },
      { era: '2018', location: 'Titán', holder: 'Thanos', eventSummary: 'Doctor Strange entrega la Gema del Tiempo a Thanos para salvar la vida de Tony Stark y asegurar el único futuro victorioso (1 en 14,000,605).' }
    ]
  },
  {
    id: 'soul',
    name: 'Soul Stone (Gema del Alma)',
    cssClass: 'soul-stone',
    color: 'Naranja Etéreo',
    colorHex: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.6)',
    vessel: 'Altar de Vormir',
    powerDescription: 'Gobierna sobre la vida, la muerte y el plano astral de las almas. Exige un sacrificio irreparable ("un alma por un alma").',
    firstAppearance: 'Avengers: Infinity War',
    currentStatus: 'Destruida por Thanos en 2018.',
    journey: [
      { era: 'Eons ago', location: 'Vormir', holder: 'Guardián de la Piedra (Red Skull)', eventSummary: 'Johann Schmidt es transportado por el Tesseract a Vormir como castigo cósmico para guiar a otros.' },
      { era: '2018', location: 'Vormir', holder: 'Thanos', eventSummary: 'Thanos sacrifica a su hija adoptiva Gamora lanzándola por el acantilado para reclamar la Gema del Alma.' }
    ]
  }
];

const stonesTsContent = `import { InfinityStone } from '@/types';\n\nexport const infinityStonesData: InfinityStone[] = ${JSON.stringify(infinityStones, null, 2)};\n`;
fs.writeFileSync(path.join(dataDir, 'infinityStonesData.ts'), stonesTsContent, 'utf8');

console.log('All TypeScript data files generated successfully in src/data/ !');
