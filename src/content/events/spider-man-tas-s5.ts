// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('spider-man-tas-s5', [
  {
    id: 'captain-america-vortex',
    date: { year: 1945, order: 30, approx: true },
    segment: 'E4–E5',
    title: 'Captain America pushes the Red Skull into the Doomsday vortex',
    text: [
      'In World War II, five more super soldiers are made after [Captain America](steve-rogers), with powers that only work with rings: [the Whizzer](whizzer-robert-frank), [Miss America](miss-america-madeline-joyce), [the Thunderer](thunderer-jerry-carstairs), [the Destroyer](destroyer-keene-marlowe) and the Black Marvel, secretly [Omar Mosely](black-marvel-omar-mosely). In their last adventure they raid the Doomsday Complex of the [Red Skull](red-skull) in the Bronx, where Captain America pushes the Skull into the field of its vortex and both are trapped; the Warriors divide its keys among themselves and are forgotten.',
    ],
    locations: ['red-skulls-doomsday-device-subterranean-bunker'],
  },
  {
    id: 'peter-mary-jane-wedding',
    date: { year: 1997, order: 10 },
    segment: 'E1',
    title: 'Peter marries Mary Jane, and Harry attacks the wedding as the Goblin',
    text: [
      '[Harry Osborn](harry-osborn) escapes from Ravencroft and attacks the wedding of [Peter Parker](spider-man) and [Mary Jane](mary-jane-clone) as the Green Goblin, with the [Scorpion](scorpion-mac-gargan); Spider-Man and the [Black Cat](felicia-hardy) fight them outside, and Liz Allan talks Harry into giving himself up. Peter marries Mary Jane, and from limbo [Norman Osborn](norman-osborn) watches in rage.',
    ],
    cast: ['may-parker', 'ashley-kafka', 'alistair-smythe', 'wilson-fisk-kingpin', 'j-jonah-jameson', 'curt-connors-lizard', 'robbie-robertson-noir', 'flash-thompson', 'herbert-landon'],
    locations: ['national-bank', 'ravencroft', 'daily-bugle-headquarters', 'chrysler-building', 'oscorp-industries', 'wedding-church', 'interdimensional-limbo'],
  },
  {
    id: 'forgotten-warriors-electro',
    date: { year: 1997, order: 20 },
    segment: 'E2–E6',
    title: 'The Six Forgotten Warriors reunite against the Red Skull and Electro',
    text: [
      "In Moscow, where Peter goes to clear his parents of being called spies, [Spider-Man](spider-man) is caught between [Silver Sable](silver-sable), the Insidious Six of [the Kingpin](wilson-fisk-kingpin) and a Red Skull who is really the Moscow police chief [Rheinholt Kragov](electro-rheinholt-kragov), the Skull's son. Back in New York, Spider-Man finds the old Six American Warriors, who fought beside [Captain America](steve-rogers) in World War II and kept the keys of the Red Skull's Doomsday Device.",
      '[The Chameleon](chameleon) helps Kragov free their father, the [Red Skull](red-skull), and Captain America from the vortex. The Device turns Kragov into Electro, who takes over the S.H.I.E.L.D. Helicarrier and demands to rule the world, until Captain America goes back into the vortex with the Red Skull, Electro is drawn in after them, and Spider-Man and the Warriors destroy it.',
    ],
    cast: ['destroyer-keene-marlowe', 'may-parker', 'robbie-robertson-noir', 'adrian-toomes', 'black-marvel-omar-mosely', 'j-jonah-jameson', 'doctor-octopus', 'rhino', 'shocker', 'scorpion-mac-gargan', 'whizzer-robert-frank', 'miss-america-madeline-joyce', 'thunderer-jerry-carstairs', 'fury', 'herbert-landon', 'mary-jane-clone'],
    locations: ['aunt-mays-house', 'daily-bugle-headquarters', 'chrysler-building', 'moscow-police-headquarters', 'illyena-groitzig-apartment', 'manhattan-chapel-and-chernobyl-nuclear-complex', 'omar-mosely-home', 'red-skulls-doomsday-device-subterranean-bunker', 'helicarrier-over-new-york-harbor', 'united-nations-headquarters'],
  },
  {
    id: 'mary-jane-clone-revealed',
    date: { year: 1997, order: 30 },
    segment: 'E7–E8',
    title: 'Hydro-Man returns, and Peter learns that Mary Jane is a clone',
    text: [
      'On their honeymoon at Niagara Falls, [Mary Jane](mary-jane-clone) is carried off by Hydro-Man and finds she has water powers like his. [Spider-Man](spider-man) follows him to the underwater lab of [Miles Warren](miles-warren), who has cloned Hydro-Man and then Mary Jane from a lock of her hair: both clones are unstable and evaporate, and hers tells Peter that the real Mary Jane loves him more than anything. [Madame Web](madame-web) offers to take him to find her once he does his part.',
    ],
    cast: ['felicia-hardy', 'alistair-smythe', 'terri-lee', 'may-parker'],
    locations: ['niagara-falls', 'dr-miles-warrens-offshore-aquatic-bio-dome', 'george-washington-bridge-and-manhattan-skyline'],
    deaths: ['mary-jane-clone', { name: 'Hydro-Man Clone' }],
  },
  {
    id: 'spider-man-battleworld',
    date: { year: 1997, order: 40 },
    segment: 'E9–E11',
    title: "Spider-Man leads the heroes of the Beyonder's Secret Wars",
    text: [
      "To learn whether good is stronger than evil, [the Beyonder](the-beyonder) sets [Doctor Octopus](doctor-octopus), [Doctor Doom](victor-von-doom), [Alistair Smythe](alistair-smythe), the [Lizard](curt-connors-lizard) and the [Red Skull](red-skull) loose on a paradise planet, and [Spider-Man](spider-man) leads the seven heroes he may bring: the Fantastic Four, [Iron Man](tony-stark), [Captain America](steve-rogers) and [Storm](storm-ororo-munroe). The Lizard and later the [Black Cat](felicia-hardy) join them, and they bring down the Red Skull's empire.",
      "Doom absorbs the Beyonder's power to keep the peace, but the creatures of his dreams come to life, and the heroes defeat him. The Beyonder sends them home with their memories erased, and tells Spider-Man that this was a test of whether he was worthy of the true challenge.",
    ],
    cast: ['madame-web', 'reed-richards', 'sue-storm', 'johnny-storm', 'ben-grimm', 'michael-morbius', 'blade-eric-brooks', 'miriam'],
    locations: ['battleworld-proving-ground', 'miriam-castle'],
  },
  {
    id: 'spider-men-spider-carnage',
    date: { year: 1997, order: 50 },
    segment: 'E12–E13',
    title: 'Spider-Man leads Spider-Men of other realities against Spider-Carnage',
    text: [
      "[Madame Web](madame-web) gives [Spider-Man](spider-man) five Spider-Men of other realities to lead against [Spider-Carnage](spider-carnage), a Peter Parker bonded with a Carnage symbiote who means to destroy every reality with a bomb: the Scarlet Spider, an armored Spider-Man, a six-armed one, one with Doctor Octopus's arms and an actor who plays Spider-Man. Spider-Carnage escapes to the armored Spider-Man's world, where everyone knows Peter is Spider-Man and Mary Jane and Uncle Ben are alive, and when Uncle Ben reaches the Peter inside him, he throws himself into an unstable portal that destroys him.",
      "In the actor's reality, where Spider-Man is fiction, Spider-Man takes his creator, [Stan Lee](stan-lee-creator), web-swinging, and Madame Web takes him to find the real Mary Jane.",
    ],
    cast: ['the-beyonder'],
    locations: ['spider-carnage-new-york', 'peter-parker-science-foundation', 'earth-real-skyscraper-rooftop'],
    deaths: ['spider-carnage'],
  },
]);
