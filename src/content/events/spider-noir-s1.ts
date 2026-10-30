// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('spider-noir-s1', [
  {
    id: 'ben-reilly-spider-powers',
    date: { year: 1917, end: 1918, order: 10 },
    title: 'Ben Reilly gains spider powers during a POW rescue',
    text: [
      "During World War I in Europe, soldier [Ben Reilly](ben-reilly-noir) infiltrates a clandestine enemy laboratory where prisoners of war are subjected to illegal genetic animal-hybrid experimentation. During a daring rescue mission to liberate the captive POWs, Ben is accidentally bitten by a mutated half-spider test subject. While other subjects suffer fatal biological instability, Ben's genetics adapt, granting him superhuman arachnid strength, heightened reflexes, wall-crawling, and a preternatural spider-sense. Meanwhile, fellow captive [Dirk Leyden](megawatt-noir) survives brutal electrical experiments, developing volatile bio-electric generation powers and adopting the moniker [Megawatt](megawatt-noir).",
    ],
    locations: ['clandestine-pow-laboratory'],
  },
  {
    id: 'ruby-williams-death',
    date: { year: 1928, end: 1930, approx: true },
    title: "Ruby Williams' death ends The Spider's crusade",
    text: [
      "Returning from the Great War under the assumed identity of [Ben Reilly](ben-reilly-noir), he dons a trench coat, fedora, and dark goggles to operate as [The Spider](ben-reilly-noir), New York City's only masked superhero combating rampant mobsters and corrupt syndicates. However, his crusade turns to tragedy when a retaliatory underworld ambush claims the life of his beloved fiancée, [Ruby Williams](ruby-williams-noir). Devastated by grief and crushed by guilt over the consequences of his double life, Ben hangs up his mask and coat, abandoning his vigilante mantle for five years of reclusive despair.",
    ],
    locations: [
      'manhattan-alleyways-and-williams-residence',
    ],
    deaths: ['ruby-williams-noir'],
  },
  {
    id: 'spider-topples-silvermane',
    date: { year: 1935 },
    title: 'Ben Reilly returns as The Spider to topple Silvermane',
    text: [
      'In 1935 Great Depression New York, weary and reclusive private investigator [Ben Reilly](ben-reilly-noir) operates a modest detective agency alongside his sharp-witted, fiercely loyal secretary [Janet Ruiz](janet-ruiz-noir), who manages the office and shields Ben from troublesome clients. The office is suddenly thrust into the underworld spotlight when aging kingpin [Finbar Byrne (Silvermane)](silvermane-noir) hires Ben following a series of coordinated, superpowered strikes against his syndicate. Silvermane suspects an inside leak and contracts Ben to root out the saboteur. Teaming up with fearless *Daily Bugle* reporter [Robbie Robertson](robbie-robertson-noir) and crossing paths with the alluring nightclub singer [Cat Hardy](cat-hardy-noir) at the Black Cat Club, Ben uncovers a far darker conspiracy: Silvermane is secretly harvesting mutated human subjects to synthesize an unstable enhancement formula and build an unstoppable private army to seize absolute dominion over the city.',
      "As the investigation deepens, Ben is hunted by Silvermane's lethal enforcers—the dense, towering [Lonnie Lincoln (Tombstone)](tombstone-noir), the sand-manipulating brute [Flint Marko (Sandman)](sandman-noir), and the violently unstable bio-electric powerhouse [Dirk Leyden (Megawatt)](megawatt-noir). Leyden unleashes destructive high-voltage blackouts and bombings across Manhattan. Facing Leyden forces Ben to confront their shared past, recognizing that Megawatt's monstrous powers stem from the very same wartime POW experiments in Europe that originally altered Ben's own DNA.",
      "When Silvermane double-crosses his own enforcers to eliminate all loose ends, a desperate struggle erupts across New York over vials of a stabilizing chemical antidote. Recognizing Silvermane's psychopathic betrayal, [Sandman](sandman-noir) turns on his masters and secretly allies with Ben to disrupt Megawatt's assault. During the climactic waterfront warehouse confrontation, Robbie is taken hostage and placed in mortal peril. Pushed beyond his physical limits, Ben Reilly sheds five years of trauma and cynicism, dons his iconic trench coat, fedora, and dark goggles, and publicly reveals his identity to rescue Robbie and neutralize Megawatt in a massive electrical surge. With Silvermane's syndicate shattered, Ben fully embraces his calling, reborn as [The Spider](ben-reilly-noir) to watch over New York from the shadows.",
    ],
    locations: [
      'reilly-investigation-office',
      'the-cats-meow-nightclub',
      'daily-bugle-headquarters',
      'brooklyn-naval-docks',
    ],
  },
]);
