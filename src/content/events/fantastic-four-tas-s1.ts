// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('fantastic-four-tas-s1', [
  {
    id: 'doom-ancient-greece',
    date: { year: -480, order: 10 },
    segment: 'E10',
    title: 'Reed, Johnny and Ben fight beside the Greeks at Thermopylae',
    text: [
      'Sent back in time on the Time Platform of [Doctor Doom](victor-von-doom) with forty-eight hours to find a coffin, [Reed Richards](reed-richards), [Johnny Storm](johnny-storm) and [Ben Grimm](ben-grimm) arrive at the Battle of Thermopylae and side with the Greeks against the invading Persians. The Greeks give them armor and take them to the Oracle of Delphi, who tells them where the coffin is, and they follow a river with Reed stretched into a boat. At the coffin, vapors knock them out and the Persians imprison them; they escape and stop the invading forces. The grateful Greeks ask them to stay, and Ben agrees, but the platform pulls the three back to the present.',
    ],
    locations: ['ancient-aegean-battlegrounds', 'mycenaean-citadel-and-aegean-coastal-ruins'],
  },
  {
    id: 'cosmic-rays-mutation',
    date: { year: 1994, order: 270 },
    segment: 'E1–E2',
    title: 'The Fantastic Four tell their origin at a Dick Clark telethon',
    text: [
      "[Reed Richards](reed-richards), [Sue Storm](sue-storm), [Johnny Storm](johnny-storm) and [Ben Grimm](ben-grimm) go on a telethon with Dick Clark and Gary Owens to raise money for State University, Reed's old university, with their new book, *Fan 4*. When Dick Clark asks how they got their powers, the four tell him their story, while the Thing pushes the audience to buy the book. By the end, the telethon reaches $5 million.",
    ],
    locations: ['telethon-studio'],
  },
  {
    id: 'namor-kidnaps-susan-storm',
    date: { year: 1994, order: 280 },
    segment: 'E3',
    title: "Namor kidnaps Sue, and the FF help him stop Krang's invasion",
    text: [
      'At a science lecture, the scientist turns out to be [Namor](namor-the-sub-mariner), Prince of Atlantis, risen from the ocean because surface dwellers are polluting it; he mutates an octopus in a tank to show what the pollution does. He kidnaps [Sue Storm](sue-storm) to make her his queen and takes her down to Atlantis.',
      '[Reed](reed-richards), [Johnny](johnny-storm) and [Ben](ben-grimm) follow and fight Namor, until he learns that his warlord [Krang](krang) has launched an invasion of the surface world against his wishes. Together they stop the Atlantean forces and defeat Krang, and the four leave Atlantis in an uneasy alliance with Namor.',
    ],
    cast: ['lady-dorma'],
    locations: ['atlantis-sovereign-throne-and-abyssal-trenches'],
  },
  {
    id: 'skrulls-frame-the-ff',
    date: { year: 1994, order: 290 },
    segment: 'E4',
    title: 'Skrull impostors frame the FF, and Reed scares off the Skrull Emperor',
    text: [
      'While [the Thing](ben-grimm) plays a video game in which Skrulls attack New York, a Skrull agent posing as President Bill Clinton sends the Fantastic Four after creatures sighted in the North Atlantic, perhaps under Namor, near a NASA tracking station. Meanwhile Skrull impostors of the four, sent from a Mothership hidden behind the Moon, attack a power plant, wait at the Trump Plaza to steal the crown of Queen Elizabeth II and wreck an experimental jet, so the real Clinton orders the team captured, and the Navy arrests them when the creatures turn out to be holograms.',
      "The four escape and beat the impostors before they can hit the Andromeda space shuttle, and [Reed Richards](reed-richards), disguised as one of the agents, flies the Fantasticar to the Mothership, where clips of old monster movies convince the Skrull Emperor that Earth is too dangerous. He calls off the invasion and gives Reed medals, which turn out to be plastic, and the four agents end up as goats, made to like it by a hypnotic ray of Reed's.",
    ],
    cast: ['sue-storm', 'johnny-storm'],
    locations: ['baxter-building-and-upper-manhattan', 'north-atlantic', 'skrull-mothership'],
  },
  {
    id: 'surfer-rebels-against-galactus',
    date: { year: 1994, order: 300 },
    segment: 'E5–E6',
    title: 'Galactus comes for Earth, and Alicia turns the Silver Surfer',
    text: [
      "[Reed Richards](reed-richards) detects an energy signature like the cosmic rays that gave the four their powers. The sky over New York seems to catch fire, panicked New Yorkers blame the Human Torch, and the flames give way to a field of space debris: [Uatu the Watcher](uatu-the-watcher) appears in Reed's lab and explains that he made it to hide Earth from the [Silver Surfer](silver-surfer), herald of [Galactus](galactus), who drains whole worlds. The Surfer finds Earth anyway and signals his master from the roof of the Baxter Building, the Thing rams him off the edge, and the ship of Galactus appears over Manhattan.",
      'The Watcher appeals to Galactus in vain, and [Johnny](johnny-storm) and [Ben](ben-grimm) attack him to no effect. [Alicia Masters](alicia-masters) takes in the unconscious Surfer at her apartment, learns his mission and asks him to turn on his master. When the four attack the device Galactus is building to drain the planet, he summons [Firelord](firelord) and [Terrax](terrax); the Watcher boosts the powers of Johnny so he can reach the ship and bring back the weapon they need, and Alicia convinces the Surfer to help save the Earth.',
    ],
    cast: ['sue-storm'],
    locations: ['baxter-building-and-upper-manhattan', 'manhattan-stratosphere-and-taa-ii-worldship'],
  },
  {
    id: 'super-skrull-sealed-in-volcano',
    date: { year: 1994, order: 310 },
    segment: 'E7',
    title: "The Super-Skrull copies the FF's powers and is sealed in a volcano",
    text: [
      'Wanting revenge for their failed invasion, the Skrulls build a device that lets one of their own copy the powers of all four of the Fantastic Four, and send the [Super-Skrull](super-skrull) to Earth. He fights the team across the planet until [Reed Richards](reed-richards) finds that his powers come from a beam sent from the Skrull homeworld. Reed builds a blocker and the team draws the Super-Skrull to a mountain with a cavernous peak, where Reed cuts off his powers and [the Human Torch](johnny-storm) seals him inside a volcano.',
    ],
    cast: ['sue-storm', 'ben-grimm', 'alicia-masters'],
    locations: ['baxter-building-and-upper-manhattan', 'super-skrull-volcano'],
  },
  {
    id: 'castle-doom-raid',
    date: { year: 1994, order: 320 },
    segment: 'E8–E10',
    title: 'Doom holds Sue while Reed, Johnny and Ben fetch a coffin from the past',
    text: [
      'At the Baxter Building the lights go out despite the emergency generator and an energy field traps the four, and [Reed Richards](reed-richards) knows the voice: [Victor von Doom](victor-von-doom), an old college classmate. Doom flies them to his castle in Latveria and locks each one in a cell built to counter their powers. He frees [Sue Storm](sue-storm) and invites her to dinner, and she accepts out of fear for the others; there he tells her about his father.',
      'Reed, [Johnny](johnny-storm) and [Ben](ben-grimm) escape, destroy the guarding Doombots and get through the traps of the castle, but the Doom they attack is a Doombot, and the real one traps them again. His deal: they travel back in time on his Time Platform and bring him a coffin lost centuries ago, or Sue dies. They come back with it, it turns out to be a fake, and in the confusion the four escape in the Fantasticar.',
    ],
    cast: ['alicia-masters'],
    locations: ['baxter-building-and-upper-manhattan', 'castle-doom-and-haasenstadt-citadel'],
  },
  {
    id: 'mole-man-sinks-rockefeller-center',
    date: { year: 1994, order: 330 },
    segment: 'E11',
    title: 'The Mole Man sinks Rockefeller Center',
    text: [
      'The Fantastic Four are at a charity function at Rockefeller Center when the [Mole Man](mole-man), who rules from the bottom of the world with his Moloids, drags the building underground. He wants them dead, fearing that only they can stop him from taking over the world.',
    ],
    cast: ['reed-richards', 'sue-storm', 'johnny-storm', 'ben-grimm', 'alicia-masters'],
    locations: ['rockefeller-center', 'subterranean-cavern-kingdom'],
  },
  {
    id: 'negative-zone-annihilus',
    date: { year: 1994, order: 340 },
    segment: 'E12',
    title: "Annihilus and Blastaar bring their war through Reed's portal",
    text: [
      'In the Baxter Building, [Reed Richards](reed-richards) accidentally opens a portal to the Negative Zone, and through it come [Annihilus](annihilus) and then his mortal enemy, [Blastaar](blastaar). The two declare war on each other over the Earth, and the Fantastic Four have to send them back before it is too late.',
    ],
    cast: ['sue-storm', 'johnny-storm', 'ben-grimm', 'alicia-masters'],
    locations: ['baxter-building-and-upper-manhattan', 'the-negative-zone'],
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
