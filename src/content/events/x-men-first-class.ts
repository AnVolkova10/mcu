// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-first-class', [
  {
    id: 'erik-powers-auschwitz',
    date: { year: 1944, order: 10 },
    title: "Erik Lehnsherr's magnetic powers awaken at Auschwitz",
    text: [
      "In Nazi-occupied Poland at the Auschwitz concentration camp, young [Erik Lehnsherr](erik-lehnsherr) is violently torn from his parents. Overwhelmed by traumatic despair, his mutant magnetic powers awaken, warping and tearing the camp's heavy iron gates. Observing his power, sadistic Nazi scientist Dr. Klaus Schmidt ([Sebastian Shaw](sebastian-shaw)) shoots Erik's mother in cold blood to force Erik to unleash his devastating magnetic fury.",
      'Simultaneously in Westchester County, New York, young telepath [Charles Xavier](charles-xavier) discovers young shapeshifter [Raven Darkhölme (Mystique)](raven-darkholme) disguised as his mother stealing food in the kitchen. Recognizing they are both extraordinary, Charles warmly welcomes Raven into his wealthy family home as his beloved foster sister.',
    ],
    locations: ['auschwitz-birkenau-concentration-camp', 'xavier-family-manor'],
    deaths: [
      { name: 'Edie Lehnsherr', presumed: false },
    ],
  },
  {
    id: 'charles-erik-stop-shaw',
    date: { year: 1962 },
    title: 'Charles and Erik stop Shaw but part as rivals',
    text: [
      "In 1962 during the Cold War, adult [Erik Lehnsherr](erik-lehnsherr) hunts Nazi war criminals across South America, targeting energy-absorbing Hellfire Club leader [Sebastian Shaw](sebastian-shaw). CIA Agent [Moira MacTaggert](moira-mactaggert) discovers Shaw's plot to trigger World War III and recruits Oxford genetics professor [Charles Xavier](charles-xavier) and [Raven Darkhölme](raven-darkholme). In Miami, Charles telepathically saves Erik from drowning, forming a bond of brothers. They establish CIA *Division X*, recruiting young mutants [Dr. Hank McCoy (Beast)](hank-mccoy), [Alex Summers (Havok)](alex-summers), [Sean Cassidy (Banshee)](sean-cassidy), Angel Salvadore, and Darwin (briefly crossing paths with [Logan / Wolverine](logan-wolverine) in a bar).",
      "Shaw, [Emma Frost](emma-frost), Azazel, and Riptide ambush Division X, killing Darwin and convincing Angel to defect. In response, Hank develops an experimental genetic serum to cure his prehensile feet; however, it severely backfires, transforming him permanently into the blue-furred powerhouse known as [Beast](hank-mccoy). At the Cuban Missile Crisis naval blockade, the X-Men intercept Shaw's nuclear submarine. Erik breaches the vessel, strips Shaw of his telepathy-blocking helmet, and avenges his mother by slowly driving a Nazi coin through Shaw's brain while Charles holds Shaw paralyzed in a shared mental link.",
      "When the terrified US and Soviet fleets unite to fire their full missile barrage at the mutants on the beach, Magneto stops the missiles mid-air and redirects them back to annihilate the warships. Charles tackles Erik to prevent the massacre; during the struggle, Moira fires at Erik, and a deflected bullet strikes Charles in the spine, paralyzing his lower body. Grieving the fracture of their dream, Raven, Angel, Azazel, and Riptide leave with Erik—who dons Shaw's helmet as [Magneto](erik-lehnsherr) to lead the **Brotherhood of Mutants**. Charles returns to his mansion in a wheelchair to establish **Xavier's School for Gifted Youngsters**, telepathically wiping Moira's memory of their location.",
    ],
    locations: [
      'villa-gesell-nazi-hideout',
      'oxford-university-faculty-of-genetics',
      'miami-coastline-and-shaw-yacht',
      'cia-division-x-secret-facility',
      'cuban-missile-crisis-naval-quarantine-line',
      'xaviers-school-for-gifted-youngsters',
    ],
    deaths: [
      { name: 'Armando Muñoz / Darwin', presumed: false },
      'sebastian-shaw',
    ],
  },
]);
