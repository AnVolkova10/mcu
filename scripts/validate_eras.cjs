const fs = require('fs');
const path = require('path');
const eras = JSON.parse(fs.readFileSync(path.join(__dirname, 'parsed_eras.json'), 'utf8'));

console.log('Total eras:', eras.length);
const emptyEras = eras.filter(e => e.sections.length === 0);
console.log('Empty eras:', emptyEras.map(e => e.era));

eras.forEach((e, idx) => {
  console.log(`[${idx + 1}/${eras.length}] ${e.era} -> ${e.sections.length} sections (${e.sections.map(s => s.rawClass).join(', ')})`);
});
