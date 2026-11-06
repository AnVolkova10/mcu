// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('fantastic-four-tas-s1', [
  {
    id: 'doom-ancient-greece',
    date: { year: -480, order: 10 },
    segment: 'E10',
    title: 'Reed, Johnny and Ben fight beside the Greeks at Thermopylae',
    text: [
      'Sent back in time by [Doctor Doom](victor-von-doom) to find a coffin, [Reed Richards](reed-richards), [Johnny Storm](johnny-storm) and [Ben Grimm](ben-grimm) land at the Battle of Thermopylae and fight beside the Greeks against the invading Persians. The Oracle of Delphi tells them where the coffin is, and the grateful Greeks ask them to stay, but the Time Platform pulls the three back to the present.',
    ],
    locations: ['ancient-aegean-battlegrounds', 'mycenaean-citadel-and-aegean-coastal-ruins'],
  },
  {
    id: 'cosmic-rays-mutation',
    date: { year: 1994, order: 270 },
    segment: 'E1–E4, E7, E11–E12',
    title: 'The Fantastic Four face Namor, the Skrulls, the Mole Man and Annihilus',
    text: [
      "On a Dick Clark telethon, [Reed Richards](reed-richards), [Sue Storm](sue-storm), [Johnny Storm](johnny-storm) and [Ben Grimm](ben-grimm) tell how they got their powers and raise $5 million for Reed's old university. [Namor](namor-the-sub-mariner) kidnaps Sue to make her his queen, until the four help him stop the invasion of the surface launched by his warlord [Krang](krang).",
      'Skrull impostors frame the four, and Reed scares the Skrull Emperor away from Earth with clips of old monster movies; the [Super-Skrull](super-skrull), who copies their powers, ends up sealed inside a volcano. The [Mole Man](mole-man) drags Rockefeller Center underground, and [Annihilus](annihilus) and [Blastaar](blastaar) come through a portal Reed opens by accident to wage their war over the Earth, until the four have to send them back to the Negative Zone.',
    ],
    cast: ['lady-dorma', 'alicia-masters'],
    locations: ['telethon-studio', 'atlantis-sovereign-throne-and-abyssal-trenches', 'baxter-building-and-upper-manhattan', 'north-atlantic', 'skrull-mothership', 'super-skrull-volcano', 'rockefeller-center', 'subterranean-cavern-kingdom', 'the-negative-zone'],
  },
  {
    id: 'surfer-rebels-against-galactus',
    date: { year: 1994, order: 300 },
    segment: 'E5–E6',
    title: 'Galactus comes for Earth, and Alicia turns the Silver Surfer',
    text: [
      '[Uatu the Watcher](uatu-the-watcher) tries to hide Earth from the [Silver Surfer](silver-surfer), herald of [Galactus](galactus), who drains whole worlds, but the Surfer finds it, and the ship of Galactus appears over Manhattan. [Alicia Masters](alicia-masters) takes in the unconscious Surfer and convinces him to turn on his master, while the Watcher boosts [Johnny Storm](johnny-storm) so that he can reach the ship and bring back the weapon the four need to save the Earth.',
    ],
    cast: ['reed-richards', 'ben-grimm', 'firelord', 'terrax', 'sue-storm'],
    locations: ['baxter-building-and-upper-manhattan', 'manhattan-stratosphere-and-taa-ii-worldship'],
  },
  {
    id: 'castle-doom-raid',
    date: { year: 1994, order: 320 },
    segment: 'E8–E10',
    title: 'Doom holds Sue while Reed, Johnny and Ben fetch a coffin from the past',
    text: [
      "[Victor von Doom](victor-von-doom), Reed's old college classmate, traps the four in his castle in Latveria and holds [Sue Storm](sue-storm) hostage: [Reed](reed-richards), [Johnny](johnny-storm) and [Ben](ben-grimm) must travel back in time on his Time Platform and bring him a coffin lost centuries ago. The coffin they bring back turns out to be a fake, and in the confusion the four escape in the Fantasticar.",
    ],
    cast: ['alicia-masters'],
    locations: ['baxter-building-and-upper-manhattan', 'castle-doom-and-haasenstadt-citadel'],
  },
  {
    id: 'doom-steals-power-cosmic',
    date: { year: 1994, order: 350 },
    segment: 'E13',
    title: "Doom steals the Silver Surfer's power, and Galactus stops him",
    text: [
      '[Doctor Doom](victor-von-doom) returns and steals the Power Cosmic from the [Silver Surfer](silver-surfer). With that power he takes on the Fantastic Four, then tries to steal the powers of [Galactus](galactus) as well, and Galactus himself stops him. Holograms of [Iron Man](tony-stark), [War Machine](war-machine) and [Ultimo](ultimo) also turn up.',
    ],
    cast: ['reed-richards', 'sue-storm', 'johnny-storm', 'ben-grimm', 'alicia-masters'],
    locations: ['baxter-building-and-upper-manhattan', 'manhattan-stratosphere-and-taa-ii-worldship'],
  },
]);
