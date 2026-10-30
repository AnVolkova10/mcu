// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('spider-man-tas-s1', [
  {
    id: 'spider-man-rogues-gallery',
    date: { year: 1994, order: 190 },
    title: 'Spider-Man battles the Lizard and a growing rogues gallery',
    text: [
      "In Queens, [Peter Parker](spider-man) continues his vigilante career while studying biophysics at Empire State University and selling freelance photos to [J. Jonah Jameson](j-jonah-jameson) at The Daily Bugle. Peter faces a escalating rogues gallery: his mentor Dr. Curt Connors mutates into the savage [Lizard](curt-connors-lizard) in the sewer system, Spencer Smythe deploys robotic Spider-Slayers financed by [Norman Osborn](norman-osborn), titanium-tentacled genius [Doctor Octopus](doctor-octopus) abducts [Felicia Hardy](felicia-hardy), special-effects master [Mysterio](mysterio-quentin-beck) frames Spider-Man for grand larceny, Jameson's funded Neogenic experiment transforms Mac Gargan into the psychotic [Scorpion](scorpion-mac-gargan), and big-game hunter [Kraven the Hunter](kraven-the-hunter) stalks him across Central Park.",
    ],
    locations: ['empire-state-university-and-daily-bugle'],
  },
  {
    id: 'alien-symbiote-venom',
    date: { year: 1994, order: 200 },
    title: 'Peter sheds the alien symbiote and defeats Venom',
    text: [
      "Astronaut John Jameson's Prometheus X shuttle crash-lands on the Manhattan Bridge, bringing back an extraterrestrial Prometheum X mineral and an amorphous black alien symbiote. The parasite bonds to [Spider-Man](spider-man), transforming his costume into a sleek black suit that amplifies his strength and produces organic webbing, but feeds on his aggression. Recognizing its parasitic malice after nearly murdering the Shocker, Peter climbs the bell tower of Our Lady of Saints Church, using the bronze bell vibrations to tear the symbiote from his body. The creature drops into the shadows and bonds with disgraced reporter [Eddie Brock](eddie-brock-venom), creating [Venom](eddie-brock-venom). After defeating Venom by launching him into space on a rocket probe, Spider-Man battles the glider-riding [Hobgoblin](hobgoblin) and unmasks international spy [Chameleon](chameleon).",
    ],
    locations: [
      'manhattan-bridge-and-our-lady-of-saints-church-bell-tower',
    ],
  },
]);
