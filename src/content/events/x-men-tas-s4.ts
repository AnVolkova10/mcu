// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-tas-s4', [
  {
    id: 'young-xavier-fitzroy',
    date: { year: 1959 },
    title: 'Wolverine and Storm shield young Xavier from Fitzroy',
    text: [
      'Manipulated by the genocidal Master Mold in a devastated future, temporal renegades [Trevor Fitzroy](trevor-fitzroy) and Bantam travel backward through time to Oxford, England in 1959. Their catastrophic mission: assassinate a twenty-year-old [Charles Xavier](charles-xavier) before he can conceptualize his dream of human-mutant peaceful coexistence or found the X-Men. In the original timeline, Fitzroy successfully vaporizes the young telepath in a roadside ambush, triggering a localized temporal shockwave that completely rewrites history into a dystopian alternate 1995 where Magneto leads a desperate mutant resistance against Nimrod and Sentinels.',
      "Refusing to let reality crumble, alternate versions of [Wolverine](logan-wolverine) and [Storm](storm-ororo-munroe) ally with time-traveling siblings [Bishop](bishop-lucas-bishop) and Shard. Entering the temporal conduit, they arrive in 1959 moments before the fatal blast, intercepting Fitzroy's plasma strike and shielding young Xavier. Banishing Fitzroy back into the time stream, they restore Xavier's survival, repairing the Sacred Timeline of Earth-92131.",
    ],
    locations: [
      'oxford-university-campus-and-country-road',
    ],
  },
  {
    id: 'bishop-shard-timeline-repair',
    date: { year: 1995, order: 120 },
    title: 'Bishop and Shard repair the fractured timeline',
    text: [
      "Following the temporal assassination attempt in 1959, the prime timeline briefly fractures into an alternate 1995 apocalyptic dystopia where a heroic [Magneto](erik-lehnsherr) leads the surviving mutant resistance alongside battle-hardened variants of [Wolverine](logan-wolverine) and [Storm](storm-ororo-munroe) against legionnaires of Nimrod and [Master Mold](master-mold) Sentinels, until temporal travelers [Bishop](bishop-lucas-bishop) and Shard rectify the past. Concurrently in Scotland, Moira MacTaggert's reality-warping mutant son [Kevin MacTaggert (Proteus)](proteus-kevin-mactaggert) escapes containment on Muir Island, distorting structures and physics across Edinburgh before [Wolverine](logan-wolverine) and [Beast](hank-mccoy) compel him to confront his grief and dissolve his rampage.",
    ],
    cast: ['charles-xavier'],
    locations: [
      'muir-island-research-complex-and-edinburgh',
    ],
    deaths: ['proteus-kevin-mactaggert'],
  },
  {
    id: 'cortez-betrays-magneto',
    date: { year: 1995, order: 130 },
    title: 'Fabian Cortez betrays Magneto on Asteroid M',
    text: [
      "Determined to offer mutants permanent emancipation from human persecution, [Magneto](erik-lehnsherr) marshals his resources in orbit, constructing the sovereign celestial haven known as Asteroid M. Welcoming mutant refugees from across the globe, Magneto's vision of peaceful orbital sanctuary is subverted from within by his duplicitous lieutenant [Fabian Cortez](fabian-cortez). Craving total war against humanity, Cortez secretly fires nuclear warheads at human metropolises while framing humanity for a torpedo strike against Asteroid M, leaving Magneto trapped beneath collapsing structural bulkheads.",
      "The X-Men deploy to Asteroid M aboard the Blackbird to disarm the warheads and uncover Cortez's deception. Rescued from the wreckage by [Charles Xavier](charles-xavier) and [Beast](hank-mccoy), Magneto discovers Cortez's betrayal and uses his magnetic mastery to alter the trajectories of the nuclear warheads, sacrificing himself to pilot the doomed orbital citadel into the deep exosphere away from Earth. While Cortez flees, Magneto's noble sacrifice inspires reverence across the mutant diaspora.",
    ],
    cast: ['logan-wolverine'],
    locations: [
      { id: 'asteroid-m', note: 'Mutant Orbital Haven' },
    ],
    deaths: [
      { character: 'erik-lehnsherr', presumed: true, note: 'Presumed Lost in Orbital Descent' },
    ],
  },
  {
    id: 'magneto-discovers-children',
    date: { year: 1995, order: 140 },
    title: 'Magneto discovers Wanda and Pietro are his children',
    text: [
      'Driven by urgent distress calls from Transia, speedster [Pietro Maximoff (Quicksilver)](pietro) and reality-manipulator [Wanda Maximoff (Scarlet Witch)](scarlet-witch) journey to the mystical slopes of Mount Wundagore to unravel the hidden mystery of their parentage. Captured by the genetic zealot High Evolutionary and his anthropomorphic New Men, the twins are subjected to biological analysis at the Wundagore Citadel. Alerted to the anomaly, [Magneto](erik-lehnsherr) and [Wolverine](logan-wolverine) penetrate the mountain fortress.',
      "During a fierce confrontation against the Evolutionary's bio-beasts, bovine midwife Bova reveals an earth-shattering secret: Wanda and Pietro are the biological children of Magneto and his late wife Magda, hidden at Wundagore after her tragic death. Overwhelmed by grief and paternal love, Magneto unites with his long-lost children to overthrow the High Evolutionary's experiments, forever altering the emotional landscape of the Master of Magnetism.",
    ],
    locations: [
      'mount-wundagore-genetic-citadel-and-bovas-cottage',
    ],
  },
  {
    id: 'apocalypse-axis-of-time',
    date: { year: 1995, order: 150 },
    title: 'The X-Men thwart Apocalypse in the Axis of Time',
    text: [
      "Ancient immortal mutant [Apocalypse](en-sabah-nur-apocalypse) unites with [Mister Sinister](mister-sinister-nathaniel-essex) and [Magneto](erik-lehnsherr) to enact his grand design: abducting the world's greatest psychic mutants ([Charles Xavier](charles-xavier), [Jean Grey](jean-grey), [Psylocke](psylocke-betsy-braddock), Moondragon, Oracle, [Emma Frost](emma-frost)) and imprisoning them in the Lazarus Chambers located inside the **Axis of Time**—the nexus of all timelines. [Cable](cable-nathan-summers), [Bishop](bishop-lucas-bishop), and the X-Men mount a cross-temporal offensive across ancient Egypt, futuristic 3999 CE, and the extra-dimensional temporal core. [Wolverine](logan-wolverine), [Cyclops](cyclops-scott-summers), and [Cable](cable-nathan-summers) shatter the Lazarus Chamber conduits, freeing the psychics whose combined telepathic cascade expels Apocalypse into a dimensional vacuum and resets the timeline.",
    ],
    locations: [
      { id: 'the-axis-of-time', note: 'Temporal Nexus' },
    ],
  },
]);
