// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('iron-man-tas-s1', [
  {
    id: 'force-works-ultimo',
    date: { year: 1994, order: 100 },
    title: 'Tony Stark forms Force Works and subdues Ultimo',
    text: [
      "On the West Coast, industrialist [Tony Stark (Iron Man)](tony-stark) establishes the tactical response collective **Force Works** at his coastal compound in Point Dume, California, joining forces with [James Rhodes (War Machine)](war-machine), [Julia Carpenter (Spider-Woman)](julia-carpenter-spider-woman), [Century](century), [Clint Barton (Hawkeye)](hawkeye), and [Wanda Maximoff (Scarlet Witch)](scarlet-witch). Warlord [The Mandarin](mandarin) unleashes his first strike by raising the sunken Russian nuclear submarine *Prometheus*, converting its deceased crew into radioactive zombies through dark Makluan science. When Force Works repels the underwater assault, Mandarin, backed by [M.O.D.O.K.](modok-george-tarleton) and corporate saboteur [Justin Hammer](justin-hammer), awakens the colossal alien automaton [Ultimo](ultimo) from an active volcanic caldera. Iron Man deploys heavy modular munitions to sever Ultimo's thermal control conduit, subduing the titan and securing California.",
    ],
    locations: [
      'stark-enterprises-and-force-works-compound',
      'mandarins-volcanic-lair',
    ],
  },
  {
    id: 'iron-man-saves-rachel',
    date: { year: 1994, order: 110 },
    title: "Iron Man storms Mandarin's fortress to save Rachel",
    text: [
      "[M.O.D.O.K.](modok-george-tarleton) and [The Mandarin](mandarin) initiate a catastrophic cyber-warfare infiltration against Stark Enterprises, injecting a polymorphic worm into global financial exchanges and the military early warning network. Hijacking satellite telemetry, the villains briefly override War Machine's targeting HUD before [Tony Stark](tony-stark) expels the virus. Escalating the vendetta, Mandarin's syndicate abducts Rachel, the young daughter of [Julia Carpenter (Spider-Woman)](julia-carpenter-spider-woman), to force Stark into surrendering his orbital particle-beam satellite. Battling severe power depletion within his armor's chest arc generator, Iron Man coordinates with [War Machine](war-machine) and Spider-Woman to storm Mandarin's mountain fortress, execute an extraction of Rachel, and disable the hijacked orbital payload.",
    ],
    cast: ['justin-hammer'],
    locations: ['stark-pacific-cyber-defense-center'],
  },
  {
    id: 'tony-recalls-yinsen',
    date: { year: 1994, order: 180 },
    title: "Trapped with Mandarin, Tony recalls Yinsen's sacrifice",
    text: [
      "While battling [The Mandarin](mandarin) in the Arctic Circle, an avalanche buries [Tony Stark](tony-stark) and his bitter foe in an icy subterranean cavern. Facing hypothermia, Tony's armor telemetry logs recall his genesis in Southeast Asia: captured by warlords with shrapnel near his heart, Tony and fellow captive [Professor Ho Yinsen](ho-yinsen) forged the original iron Mark I suit, with Yinsen sacrificing his life so Stark could escape. Rescued by [War Machine](war-machine) and [Hawkeye](hawkeye), Tony stages a fraudulent high-society wedding to [Julia Carpenter (Spider-Woman)](julia-carpenter-spider-woman) to definitively mislead Mandarin into believing Tony Stark and Iron Man are separate individuals.",
    ],
    locations: ['arctic-glacial-chasm', 'stark-enterprise-force-works-compound'],
    deaths: ['ho-yinsen'],
  },
]);
