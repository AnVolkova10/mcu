// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('agent-carter-s2', [
  {
    id: 'peggy-carter-soe',
    date: { year: 1940 },
    title: "Michael Carter's death drives Peggy into the SOE",
    text: [
      "In Hampstead, England in 1940, [Peggy Carter](peggy-carter) prepares for an unfulfilling, conventional domestic marriage to interior ministry official Fred Wells, suppressing her passion for tactical intelligence and field work. Her devoted brother, British Army Lieutenant [Michael Carter](michael-carter), visits on the eve of her wedding and passionately urges her to accept a classified invitation from the British *Special Operations Executive (SOE)*, knowing her true strength lies on the front lines. Shortly before the ceremony, devastating news arrives: Michael has been killed in action during the Battle of France. Shattered by grief yet illuminated by Michael's belief in her destiny, Peggy calls off the wedding, enlists in the SOE, and embarks on her legendary wartime career as an elite intelligence operative.",
    ],
    locations: [
      'carter-family-estate-and-church-of-st-jude',
    ],
    deaths: [
      { character: 'michael-carter', presumed: false, note: 'KIA in France' },
    ],
  },
  {
    id: 'whitney-frost-zero-matter',
    date: { year: 1947, order: 10 },
    title: 'Peggy Carter strips Whitney Frost of Zero Matter',
    text: [
      "[Peggy Carter](peggy-carter) travels to Los Angeles to assist West Coast SSR Chief [Daniel Sousa](daniel-sousa) in investigating an impossible homicide: a body frozen solid in a lake during a sweltering heatwave. The case leads them to *Isodyne Energy*, where quantum physicist [Dr. Jason Wilkes](jason-wilkes) tapped into an extra-dimensional anomaly called ==Zero Matter (Darkforce)==. An explosion leaves Wilkes phased in an intangible state and infects brilliant actress [Agnes Cully (Whitney Frost / Madame Masque)](whitney-frost), granting her the terrifying power to absorb living matter on contact. Backed by the clandestine **Council of Nine**, Frost seeks total cosmic power. Working alongside [Edwin Jarvis](edwin-jarvis), [Howard Stark](howard-stark), and Sousa, Peggy deploys a gamma rift cannon at Stark Pictures to extract the Zero Matter from Frost and restore Wilkes' physical form. In the aftermath, Peggy and Daniel Sousa share a romantic embrace, while SSR Chief Jack Thompson is ambushed and shot in his hotel room by an unknown assassin who steals Peggy's classified file.",
    ],
    locations: [
      'ssr-west-coast-branch',
      'isodyne-energy-particle-laboratory',
      'stark-pictures-motion-picture-studio',
    ],
  },
]);
