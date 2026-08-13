const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, '../index.html'), 'utf8');

// Extract all article blocks, h2s, sections, and class names
const h2Matches = [...html.matchAll(/<h2>(.*?)<\/h2>/g)].map(m => m[1].trim());
console.log('Total Eras/Headings:', h2Matches.length);
console.log('Sample Headings:', h2Matches.slice(0, 15));

// Let's find all unique classes in sections and strong/span/em elements
const sectionClassMatches = [...html.matchAll(/<section\s+class="([^"]+)"/g)].map(m => m[1].trim());
const uniqueSectionClasses = new Set();
sectionClassMatches.forEach(cls => cls.split(/\s+/).forEach(c => uniqueSectionClasses.add(c)));
console.log('\nUnique Section Classes:', Array.from(uniqueSectionClasses));

const tagClassMatches = [...html.matchAll(/<strong\s+class="([^"]+)"/g)].map(m => m[1].trim());
const uniqueTagClasses = new Set();
tagClassMatches.forEach(cls => cls.split(/\s+/).forEach(c => uniqueTagClasses.add(c)));
console.log('\nUnique Tag Classes:', Array.from(uniqueTagClasses));
