// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('agent-carter-s1', [
  {
    id: 'red-room-dottie-underwood',
    date: { year: 1937 },
    title: 'The Red Room forges Dottie Underwood into an assassin',
    text: [
      'In Soviet Russia in 1937, the clandestine **Red Room Academy** subjects young orphan girls to brutal psychological conditioning and lethal martial indoctrination. Handcuffed to their iron bunk frames at night while forced to watch classic American animated films like *Snow White and the Seven Dwarfs* to assimilate western mannerisms, the young girls—including the exceptionally ruthless [Dorothy "Dottie" Underwood](dottie-underwood)—are pitted against one another in fatal hand-to-hand combat drills, forging the earliest generation of elite Soviet sleeper assassins for Leviathan.',
    ],
    locations: ['red-room-academy-training-facility'],
  },
  {
    id: 'peggy-foils-leviathan',
    date: { year: 1946 },
    title: 'Peggy Carter clears Howard Stark and foils Leviathan',
    text: [
      "[Peggy Carter](peggy-carter) balances her routine at the *Strategic Scientific Reserve (SSR)* in New York City with covertly assisting [Howard Stark](howard-stark), who has been framed for treason and trafficking devastating weapons (==Midnight Oil==) to enemies of the United States. Assisted in the field by Stark's loyal, refined butler [Edwin Jarvis](edwin-jarvis), Peggy uncovers a web of Soviet subversion orchestrated by the shadow syndicate **Leviathan**, led by master hypnotist [Dr. Johann Fennhoff](johann-fennhoff) and lethal Red Room Black Widow assassin [Dottie Underwood](dottie-underwood) (*Dottie I love you*). After foiling a catastrophic plot to gas and bomb Manhattan, Fennhoff is imprisoned alongside [Dr. Arnim Zola](arnim-zola), planting the seeds for future psychological conditioning protocols. Having cleared Stark's name, Peggy finds personal peace and releases the final vial of ==Steve Rogers' Super-Soldier blood== into the ocean from the Brooklyn Bridge.",
    ],
    locations: [
      { id: 'ssr-new-york-field-headquarters', note: 'The Automata' },
      'stark-country-estate',
      'brooklyn-bridge',
    ],
  },
]);
