// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('iron-man-tas-s1', [
  {
    id: 'hypnotia-sinks-prometheus',
    date: { year: 1993, order: 160 },
    segment: 'E1',
    title: 'Hypnotia sinks a Russian nuclear sub with its crew under her spell',
    text: [
      "Near the Arctic, [Hypnotia](hypnotia), an agent of [the Mandarin](mandarin), puts the crew of the Russian nuclear submarine Prometheus under her spell, to serve him in a year's time, and sinks it. [Whirlwind](whirlwind) and [Dreadknight](dreadknight) steal a microchip from Stark Enterprises that will work with her device.",
    ],
    cast: ['tony-stark', 'julia-carpenter-spider-woman'],
    locations: ['barents-sea', 'stark-enterprises-and-force-works-compound'],
  },
  {
    id: 'hypnotized-sailors-channel-tunnel',
    date: { year: 1994, order: 160 },
    segment: 'E1–E12',
    title: "Force Works foils the Mandarin's plots, from London to the Andes",
    text: [
      'A year later the sailors of the Prometheus wake as radioactive zombies and pour into the new Channel Tunnel of [Justin Hammer](justin-hammer), until [Iron Man](tony-stark) and Force Works stop them: [War Machine](war-machine), [Spider-Woman](julia-carpenter-spider-woman), [Century](century), [Hawkeye](hawkeye) and the [Scarlet Witch](scarlet-witch).',
      "The team keeps foiling [the Mandarin](mandarin), Hammer, [MODOK](modok-george-tarleton) and [Hypnotia](hypnotia). They shut down [Ultimo](ultimo), an alien robot found in a Latin American volcano; free War Machine from MODOK's mind-controlling E.L.F.; rescue [Rachel Carpenter](rachel-carpenter), Julia's daughter, whom Hypnotia used as bait; and stop Stark's stolen Grim Reaper jet from bombing the Pentagon.",
      "MODOK turns to them to save his wife, the supermodel [Alana Ulanova](alana-ulanova), at Emerald Cove; a spell hidden in the Mandarin's diary makes half the team disarm Stark's security; a robot double of Iron Man holds the world hostage with the Dark Water Fever; and Hawkeye, suspected of spying, turns out to have been caring for his sick grandfather. When [Fin Fang Foom](fin-fang-foom) traps Iron Man in an ice cave, Tony repairs his armor alone until his team digs him out.",
    ],
    cast: ['grey-gargoyle', 'blacklash', 'titanium-man', 'dreadknight', 'blizzard', 'whirlwind', 'living-laser'],
    locations: ['stark-enterprises-and-force-works-compound', 'prometheus-off-scotland', 'hammer-channel-tunnel', 'mandarins-volcanic-lair', 'stark-test-range-baja', 'low-earth-orbit-and-exosphere-space', 'mission-control-houston', 'hammer-industries', 'emerald-cove', 'peruvian-andes-village', 'hammer-hills', 'arctic-glacial-chasm'],
  },
  {
    id: 'tony-julia-wedding',
    date: { year: 1994, order: 260 },
    segment: 'E13',
    title: 'Tony marries Julia, and a robot double fools the Mandarin',
    text: [
      '[Tony Stark](tony-stark) marries [Julia Carpenter](julia-carpenter-spider-woman), after [the Mandarin](mandarin) works out from the tapes of their battles that Tony Stark is Iron Man. The Mandarin seizes Tony as the couple drives away, but Iron Man arrives with Force Works: the Tony who married Julia was a robot double, and the news writes the wedding off as a financial hoax.',
    ],
    cast: ['modok-george-tarleton', 'hawkeye', 'war-machine', 'rachel-carpenter', 'justin-hammer', 'hypnotia'],
    locations: ['stark-enterprises-and-force-works-compound', 'mandarins-volcanic-lair'],
  },
]);
