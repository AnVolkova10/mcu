// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('captain-marvel', [
  {
    id: 'carol-go-kart-crash',
    date: { year: 1971, approx: true },
    title: 'Young Carol Danvers rises from a go-kart crash',
    text: [
      'In suburban Boston, Massachusetts circa 1971, six-year-old [Carol Danvers](carol-danvers) modifies and enters a homemade motorized go-kart in a neighborhood speed trial. Taking a high-speed turn with reckless bravado, the kart flips over and crashes violently into a wooden barrier. Bloodied, scraped, and coughing from the dust, young Carol is immediately berated by her stern, domineering father, who shouts that racing is no place for a girl and orders her to quit. Refusing to yield to fear or discouragement, Carol fiercely wipes away her tears, stands straight back up on her own feet, and brushes off the gravel—establishing the stubborn, unstoppable resilience that would define her journey as Captain Marvel.',
    ],
    locations: [
      'danvers-family-residence-and-neighborhood-speedway',
    ],
  },
  {
    id: 'carol-absorbs-space-stone',
    date: { year: 1989, order: 10 },
    title: 'Carol absorbs the Space Stone blast and becomes Vers',
    text: [
      "Under the auspices of joint USAF-NASA initiative Project P.E.G.A.S.U.S., renegade Kree scientist [Dr. Wendy Lawson (Mar-Vell)](mar-vell-wendy-lawson) conducts a secret test flight of an experimental sub-orbital light-speed engine powered directly by the cosmic energy of the [Tesseract (Space Stone)](stone:space), piloted by ace Air Force Captain [Carol Danvers](carol-danvers). Intercepted by a Kree scout vessel, the experimental jet is shot down over the Mojave Desert. Kree Commander [Yon-Rogg](yon-rogg) executes Lawson on the crash site to secure the core. Refusing to yield the technology, Danvers destroys the engine with her service pistol, ==absorbing the catastrophic Space Stone explosion into her cellular matrix==. Surviving with superhuman cosmic vitality but total retrograde amnesia, Carol is abducted by Yon-Rogg to Hala, infused with Kree blood, and refashioned as Starforce warrior 'Vers'.",
    ],
    locations: ['project-pegasus-mojave-crash-range'],
    deaths: ['mar-vell-wendy-lawson'],
    stones: ['space'],
  },
  {
    id: 'carol-danvers-full-power',
    date: { year: 1995, order: 10 },
    title: 'Carol Danvers regains her memories and full power',
    text: [
      'On the Kree capital planet of Hala, Starforce warrior [Vers](carol-danvers) trains under commander [Yon-Rogg](yon-rogg) while suppressed by the organic AI [Supreme Intelligence](supreme-intelligence). During an extraction mission on border world Torfa, Vers is captured by Skrull commander [Talos](talos), who probes her subconscious for memory coordinates of an experimental light-speed engine on Earth.',
      "Escaping Kree custody, Vers crash-lands into a Blockbuster Video store in Los Angeles. Her presence attracts S.H.I.E.L.D. agents [Nick Fury](fury) and [Phil Coulson](coulson). Infiltrating the underground Project P.E.G.A.S.U.S. facility in the Mojave Desert, Vers and Fury discover she was Air Force test pilot Carol Danvers, presumed dead since 1989 alongside Dr. Wendy Lawson. Accompanied by ginger cat [Goose](goose), they escape aboard a Quadjet to Louisiana to meet veteran pilot [Maria Rambeau](maria-rambeau) and young [Monica](monica-rambeau), who restore Carol's memories.",
      "Talos arrives unarmed, revealing that Lawson was renegade Kree scientist Mar-Vell and that the Skrulls are displaced refugees fleeing Kree genocide. Using Lawson's coordinates, Danvers, Fury, Rambeau, and Talos board the Quadjet and dock with ==Mar-Vell's cloaked orbital laboratory== hidden in Earth's orbit, discovering surviving Skrull families and the [Tesseract](stone:space).",
      "Starforce ambushes the station. Overcoming the Supreme Intelligence's psychic suppression and extracting her photon inhibitor implant, Danvers unlocks her full Binary cosmic potential. Goose reveals itself as an alien Flerken, swallowing the Tesseract and blinding Fury's left eye. Danvers obliterates the Kree ballistic warheads sent by Ronan the Accuser, subdues Yon-Rogg, and exiles him back to Hala. Leaving Fury a modified emergency transmitter pager, Carol departs for the stars to find the Skrulls a permanent homeworld. Inspired, Fury drafts the Avengers Initiative. Months later in his office, Goose regurgitates the Tesseract onto Fury's desk.",
    ],
    cast: ['mar-vell-wendy-lawson', 'minn-erva', 'korath', 'ronan'],
    locations: [
      'blockbuster-video-crash-site-and-metro-transit',
      'project-pegasus-joint-dark-energy-facility',
      'rambeau-residence-and-louisiana-bayou',
      'mar-vells-cloaked-orbital-laboratory',
      'hala-imperial-city',
      'torfa-border-world-outpost',
    ],
    deaths: ['minn-erva'],
    stones: ['space'],
  },
  {
    id: 'danvers-arrives-fury-pager',
    date: { year: 2018, order: 40 },
    title: "Carol Danvers arrives as Fury's pager goes silent",
    text: [
      "In the catastrophic immediate aftermath of Thanos's Decimation, the surviving Avengers—[Steve Rogers](steve-rogers), [Natasha Romanoff](black-widow), [Bruce Banner](hulk), and [James Rhodes](war-machine)—monitor Nick Fury's recovered cosmic transmitter pager as its signal battery suddenly terminates. Turning around in the central communications laboratory of the New Avengers Facility, [Carol Danvers](carol-danvers) abruptly materializes via photon light-speed, asking: 'Where's Fury?'",
    ],
    locations: ['new-avengers-facility-central-lab'],
  },
]);
