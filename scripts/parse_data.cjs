const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

// Match all article blocks or top-level structures in main
// Notice some articles were nested like <article><article><h2>...
// Let's parse by <h2> to extract era blocks
const eraRegex = /<h2>(.*?)<\/h2>/g;
const eraPositions = [];
let match;
while ((match = eraRegex.exec(html)) !== null) {
  eraPositions.push({ title: match[1].trim(), index: match.index, length: match[0].length });
}

console.log(`Found ${eraPositions.length} eras.`);

const eras = [];

for (let i = 0; i < eraPositions.length; i++) {
  const current = eraPositions[i];
  const next = eraPositions[i + 1];
  const content = html.slice(current.index + current.length, next ? next.index : html.length);
  
  // Extract all sections in this era
  const sectionRegex = /<section\s+class="([^"]+)">([\s\S]*?)<\/section>/g;
  const sections = [];
  let sMatch;
  while ((sMatch = sectionRegex.exec(content)) !== null) {
    const rawClass = sMatch[1].trim();
    const sectionBody = sMatch[2].trim();
    
    // Extract optional h1 or h5 titles
    const h1Match = sectionBody.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h5Match = sectionBody.match(/<h5[^>]*>([\s\S]*?)<\/h5>/i);
    const title = h1Match ? h1Match[1].replace(/<[^>]+>/g, ' ').trim() : 
                  (h5Match ? h5Match[1].replace(/<[^>]+>/g, ' ').trim() : '');
                  
    // Extract all paragraphs
    const pMatches = [...sectionBody.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map(p => p[1].trim());
    
    sections.push({
      classes: rawClass.split(/\s+/),
      rawClass,
      title,
      paragraphs: pMatches,
      rawHtml: sectionBody
    });
  }
  
  eras.push({
    era: current.title,
    cleanEra: current.title.replace(/^-|-$/g, '').trim(),
    sectionsCount: sections.length,
    sections
  });
}

console.log('Sample parsed era 0:', JSON.stringify(eras[0], null, 2));
console.log('Sample parsed era 5 (-1931-):', JSON.stringify(eras[5], null, 2));
console.log('Total sections across all eras:', eras.reduce((sum, e) => sum + e.sections.length, 0));

fs.writeFileSync(path.join(__dirname, 'parsed_eras.json'), JSON.stringify(eras, null, 2), 'utf8');
console.log('Saved parsed_eras.json');
