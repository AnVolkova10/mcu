import fs from 'fs';
import path from 'path';

const basePath = 'c:/Users/curzi/Volkova/Coding/Personal/MCU';

// Load timeline data
const timelineRaw = fs.readFileSync(path.join(basePath, 'src/data/timelineData.ts'), 'utf8');
const charactersRaw = fs.readFileSync(path.join(basePath, 'src/data/charactersData.ts'), 'utf8');
const mediaRaw = fs.readFileSync(path.join(basePath, 'src/data/mediaData.ts'), 'utf8');
const stonesRaw = fs.readFileSync(path.join(basePath, 'src/data/infinityStonesData.ts'), 'utf8');

const findings = [];

// Common English spelling typos often seen in raw dumps
const commonTypos = [
  { regex: /\btecnology\b/gi, fix: 'technology', context: 'Spelling typo' },
  { regex: /\bbuttom\b/gi, fix: 'button', context: 'Spelling typo' },
  { regex: /\bdecease\b/gi, fix: 'disease', context: 'Spelling typo (Alzheimer\'s disease)' },
  { regex: /\bDark Elfs\b/gi, fix: 'Dark Elves', context: 'Grammar/spelling' },
  { regex: /\bressurrection\b/gi, fix: 'resurrection', context: 'Spelling typo' },
  { regex: /\binlove\b/gi, fix: 'in love', context: 'Typo / spacing' },
  { regex: /\bpossible taking\b/gi, fix: 'possibly taking', context: 'Grammar' },
  { regex: /\bprision\b/gi, fix: 'prison', context: 'Spelling typo' },
  { regex: /\blooses\b/gi, fix: 'loses', context: 'Spelling typo' },
  { regex: /\baccidentaly\b/gi, fix: 'accidentally', context: 'Spelling typo' },
  { regex: /\bmourns\b/gi, fix: 'mourn', context: 'Grammar agreement (Karen and Foggy mourn)' },
  { regex: /\bwithout even heard\b/gi, fix: 'without even hearing', context: 'Grammar' },
  { regex: /\band being and S\.H\.I\.E\.L\.D\b/gi, fix: 'being a S.H.I.E.L.D.', context: 'Typo' },
  { regex: /\bMarila Hill\b/gi, fix: 'Maria Hill', context: 'Character name typo' },
  { regex: /\bDani Rand\b/gi, fix: 'Danny Rand', context: 'Character name typo' },
  { regex: /\bS\.H\.I\.L\.D\b/gi, fix: 'S.H.I.E.L.D.', context: 'Acronym typo' },
  { regex: /\bxd\b/gi, fix: '[remove casual chat "xd"]', context: 'Informal artifact' },
  { regex: /\bkinda\b/gi, fix: 'somewhat', context: 'Colloquial' },
  { regex: /\bmanages to escape\b/gi, fix: 'manage to escape', context: 'Grammar agreement' },
  { regex: /\bher birthright Danny discovers\b/gi, fix: 'which Danny discovers is her birthright', context: 'Syntax/Cohesion' },
  { regex: /\bconstructed\b/gi, fix: 'who constructed', context: 'Syntax' },
  { regex: /\bslaved by\b/gi, fix: 'enslaved by', context: 'Word choice' },
  { regex: /\bslaved the last\b/gi, fix: 'enslaved the last', context: 'Word choice' },
  { regex: /\bHe came cryogenic\b/gi, fix: 'He arrived in cryogenic stasis', context: 'Coherence' },
  { regex: /\bwarns her: to NOT to save\b/gi, fix: 'warns her not to save', context: 'Redundant to' },
  { regex: /\bgets destroyed when\b/gi, fix: 'It gets destroyed when', context: 'Sentence structure' },
  { regex: /\bappearences\b/gi, fix: 'appearances', context: 'Spelling typo' },
];

console.log("=== SCANNING FOR TYPOS & COHERENCE ISSUES ===");

commonTypos.forEach(t => {
  let match;
  while ((match = t.regex.exec(timelineRaw)) !== null) {
    const start = Math.max(0, match.index - 40);
    const end = Math.min(timelineRaw.length, match.index + 50);
    findings.push({
      file: 'src/data/timelineData.ts',
      match: match[0],
      suggestedFix: t.fix,
      context: t.context,
      snippet: timelineRaw.substring(start, end).replace(/\r?\n/g, ' ')
    });
  }
});

// Also scan for Spanish UI text inconsistencies
const uiFiles = [
  'src/components/FilterBar.tsx',
  'src/components/Navbar.tsx',
  'src/components/EventCard.tsx',
  'src/components/CharacterDrawer.tsx',
  'src/components/MediaDetailModal.tsx',
  'src/components/SearchModal.tsx',
  'src/screens/CharactersScreen.tsx',
  'src/screens/MediaScreen.tsx',
  'src/screens/StonesScreen.tsx',
  'src/screens/BookmarksScreen.tsx',
  'src/screens/StatsScreen.tsx',
  'index.html'
];

uiFiles.forEach(f => {
  const filePath = path.join(basePath, f);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    // Check for common Spanish typos/grammar
    const spanishChecks = [
      { regex: /linea de tiempo/gi, fix: 'Línea temporal / Cronología (falta tilde: Línea)', desc: 'Falta de tilde' },
      { regex: /peliculas/gi, fix: 'Películas (falta tilde)', desc: 'Falta de tilde' },
      { regex: /mas\b/gi, fix: 'más (revisar tilde)', desc: 'Posible falta de tilde' },
      { regex: /ultimas/gi, fix: 'Últimas (falta tilde)', desc: 'Falta de tilde' },
    ];
    spanishChecks.forEach(sc => {
      let m;
      while ((m = sc.regex.exec(content)) !== null) {
        // filter out imports or code identifiers
        const start = Math.max(0, m.index - 30);
        const end = Math.min(content.length, m.index + 40);
        const snip = content.substring(start, end);
        if (!snip.includes('import') && !snip.includes('from') && !snip.includes('.css') && !snip.includes('.svg') && !snip.includes('const') && !snip.includes('id:')) {
          findings.push({
            file: f,
            match: m[0],
            suggestedFix: sc.fix,
            context: sc.desc,
            snippet: snip.replace(/\r?\n/g, ' ')
          });
        }
      }
    });
  }
});

fs.writeFileSync(path.join(basePath, 'scratch_findings.json'), JSON.stringify(findings, null, 2));
console.log(`Found ${findings.length} potential issues. Written to scratch_findings.json`);
