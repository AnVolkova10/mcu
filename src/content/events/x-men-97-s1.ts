// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-97-s1', [
  {
    id: 'magneto-un-trial',
    date: { year: 1997, order: 60 },
    segment: 'E1–E2',
    title: 'Magneto inherits the X-Men and stands trial at the United Nations',
    text: [
      "A year after [Charles Xavier](charles-xavier) was shot, [Cyclops](cyclops-scott-summers) and [Storm](storm-ororo-munroe) lead the X-Men to free [Roberto da Costa](sunspot-roberto-da-costa) from the Friends of Humanity, who carry Sentinel weapons, and question [Henry Gyrich](henry-gyrich) at Rikers. With [Cerebro](object:cerebro), Cyclops's pregnant wife, in truth Sinister's clone [Madelyne Pryor](madelyne-pryor-goblin-queen), traces [Bolivar Trask](bolivar-trask) to a backup Master Mold in the Sahara, which the team destroys with its [Sentinels](object:sentinels). That night [Magneto](erik-lehnsherr) reads them Xavier's will: the school and the X-Men are now his.",
      "Magneto saves people at Coney Island, frees the Morlocks from the Friends of Humanity and sends them to Genosha, then gives himself up to [Val Cooper](valerie-cooper) to stand trial at the United Nations. There the [X-Cutioner](x-cutioner-carl-denti) fires at him and Storm, taking the blast, loses her powers, while at Westchester Memorial [Rogue](rogue-anna-marie) delivers Madelyne's son, [Nathan](young-nathan-summers). The UN pardons Magneto and opens talks to admit Genosha, Storm leaves the mansion, and the real [Jean Grey](jean-grey) rings its doorbell.",
    ],
    cast: ['logan-wolverine', 'hank-mccoy', 'jubilee-jubilation-lee', 'gambit-remy-lebeau', 'morph-kevin-sydney', 'bishop-lucas-bishop', 'callisto', 'trish-tilby'],
    locations: ['xaviers-school-for-gifted-youngsters', 'rookers-island', 'sahara-sentinel-sub-facility', 'coney-island', 'morlock-subterranean-tunnels-and-nyc-sewers', 'united-nations-headquarters', 'westchester-memorial-hospital'],
    objects: [{ id: 'cerebro', at: ['xaviers-school-for-gifted-youngsters'] }, { id: 'sentinels', at: ['sahara-sentinel-sub-facility'] }, { id: 'magneto-helmet', at: ['xaviers-school-for-gifted-youngsters'] }],
  },
  {
    id: 'madelyne-goblin-queen',
    date: { year: 1997, order: 70 },
    segment: 'E3',
    title: 'Sinister reveals his clone and turns Madelyne into the Goblin Queen',
    text: [
      "[Beast](hank-mccoy) finds that the newcomer is the real [Jean Grey](jean-grey) and that the Jean who married Scott is a clone, and [Mister Sinister](mister-sinister-nathaniel-essex) takes over his creation's mind and makes her the Goblin Queen, who turns the mansion into a hell of each X-Man's fears. [Morph](morph-kevin-sydney) leads a team to one of Sinister's labs and Jean frees the clone from inside her mind, but Sinister escapes after infecting [Nathan](young-nathan-summers) with a techno-organic virus. [Bishop](bishop-lucas-bishop) takes the baby into the future to find a cure, [Scott](cyclops-scott-summers) walks out, and the clone, who says no one knows when Sinister switched the two women, leaves as [Madelyne Pryor](madelyne-pryor-goblin-queen).",
    ],
    cast: ['logan-wolverine', 'gambit-remy-lebeau', 'rogue-anna-marie', 'erik-lehnsherr', 'sunspot-roberto-da-costa', 'jubilee-jubilation-lee'],
    locations: ['xaviers-school-for-gifted-youngsters', 'mister-sinisters-secret-genetic-lab', 'astral-plane'],
  },
  {
    id: 'jubilee-motendo',
    date: { year: 1997, order: 75 },
    segment: 'E4',
    title: 'Mojo traps Jubilee and Roberto in a video game on her birthday',
    text: [
      "On [Jubilee](jubilee-jubilation-lee)'s 18th birthday a Motendo console pulls her and [Roberto](sunspot-roberto-da-costa) into a game of [Mojo](mojo)'s, with levels built from her memories of the X-Men's old battles. With the help of Abscissa, an older copy of Jubilee left in the game's test version, they beat Mojo and come home.",
    ],
    cast: ['erik-lehnsherr', 'rogue-anna-marie', 'gambit-remy-lebeau'],
    locations: ['xaviers-school-for-gifted-youngsters', 'mojoverse-digital-dimension'],
  },
  {
    id: 'gambit-sacrifice-genosha',
    date: { year: 1997, order: 80 },
    segment: 'E5–E6',
    title: 'A giant Master Mold destroys Genosha, and Gambit dies stopping it',
    text: [
      'On the day the United Nations admits Genosha, its council, with [Madelyne](madelyne-pryor-goblin-queen), [Emma Frost](emma-frost), [Moira MacTaggert](moira-mactaggert) and [Nightcrawler](nightcrawler-kurt-wagner), names [Magneto](erik-lehnsherr) chancellor; he asks [Rogue](rogue-anna-marie) to govern with him, and she and [Gambit](gambit-remy-lebeau) agree to stay friends. At the mansion, where [Trish Tilby](trish-tilby) learns that [Scott](cyclops-scott-summers) gave up his son, [Jean Grey](jean-grey) kisses [Logan](logan-wolverine), who sends her back to Scott, and finds Scott in a psychic link with Madelyne. At the gala [Cable](cable-nathan-summers) appears from the future to warn them and is pulled back, and a giant [Master Mold](master-mold) and its [Sentinels](object:sentinels) destroy Genosha, killing thousands, Madelyne, Moira, the Morlock boy Leech and Illyana, the sister of [Colossus](colossus-piotr-rasputin), among them. Gambit charges the giant with his power and dies destroying it.',
      "Far away, a year after the Shi'ar healed him, [Charles Xavier](charles-xavier) is to marry [Lilandra](lilandra-neramani), who demands the Rite of M'Dashaa: he must purge every memory of Earth. At the rite he pulls everyone into the astral plane, where he sees Genosha destroyed and Gambit dead, and he decides to return to his X-Men.",
    ],
    cast: ['hank-mccoy', 'callisto', 'sean-cassidy', 'sebastian-shaw', 'valerie-cooper', 'deathbird', 'ronan', 'gladiator-kallark'],
    locations: ['xaviers-school-for-gifted-youngsters', 'genosha-capital-and-council-plaza', 'astral-plane', 'shiar-imperial-crown-world-chandilar'],
    objects: [{ id: 'sentinels', at: ['genosha-capital-and-council-plaza'] }],
    deaths: ['gambit-remy-lebeau', 'madelyne-pryor-goblin-queen', 'moira-mactaggert', { name: 'Leech' }, { name: 'Illyana' }],
  },
  {
    id: 'storm-reclaims-powers',
    date: { year: 1997, order: 82 },
    segment: 'E3–E6',
    title: "Storm wins back her powers from the Adversary with Forge's help",
    text: [
      "In a Dallas bar the powerless [Storm](storm-ororo-munroe) meets [Forge](forge), an old friend of Xavier's, who takes her to his ranch to give her back her powers. His machine fails, and he admits that the Defense Department built devices to neutralize mutants from his early designs; Storm leaves, and an owl that has circled them shows itself as [the Adversary](the-adversary), who poisons Forge.",
      "Forge drives the demon off with his mother's spell, and they ride to Snowsnake Tower for a cactus that grows in its caves, where Storm faces the Adversary and her own fear, takes back her powers and heals Forge. Then they hear that the nations will not take back the mutants displaced from Genosha.",
    ],
    locations: ['tequila-mockingbird-bar', 'eagle-plaza-ranch-and-sacred-caverns', 'snowsnake-tower'],
  },
  {
    id: 'rogue-hunts-bastion',
    date: { year: 1997, order: 90 },
    segment: 'E7–E10',
    title: 'The X-Men bring down Bastion as Magneto blacks out the Earth',
    text: [
      "After [Gambit](gambit-remy-lebeau)'s funeral in New Orleans, [Rogue](rogue-anna-marie) hunts the killers of Genosha and tracks [Henry Gyrich](henry-gyrich) to Mexico City, where [Bastion](bastion-sebastion-gilberti) kills him, while Scott and Jean find [Emma Frost](emma-frost) alive in the ruins. [Bolivar Trask](bolivar-trask) turns out to be one of Bastion's Prime Sentinels, until [Cable](cable-nathan-summers), Scott's son grown up, stops him, and Bastion, with [Mister Sinister](mister-sinister-nathaniel-essex) working for him, holds [Magneto](erik-lehnsherr) prisoner as the Shi'ar announce that Xavier is alive.",
      "Bastion's Operation: Zero Tolerance, which counts [Doctor Doom](victor-von-doom) among its members, used Genosha to win backing for Prime Sentinels made with Sinister's techno-organic virus. The Prime Sentinels wake, [Trish Tilby](trish-tilby) among them, and burn down the mansion, [Nina da Costa](nina-da-costa) hands her son [Roberto](sunspot-roberto-da-costa) to them, and [Val Cooper](valerie-cooper) frees Magneto, who blacks out the Earth and shuts them down as [Charles Xavier](charles-xavier) returns.",
      "Magneto offers the mutants a new Genosha on Asteroid M and tears the [adamantium](object:adamantium) out of [Wolverine](logan-wolverine) when he stabs him, until Xavier makes him give the Earth its power back. On Isla Morada, where [Storm](storm-ororo-munroe), her powers back, leads a team to Bastion's base, [Jean Grey](jean-grey), calling on the Phoenix, burns away the mutant DNA Sinister stole; Bastion tries to drop Asteroid M on the East Coast, President [Kelly](senator-robert-kelly), with [T'Chaka](tchaka) of Wakanda on his call, fires missiles at it, and Bastion refuses Rogue's hand as they hit. Xavier and Magneto push the asteroid into space, where it explodes, as [Peter Parker](spider-man), [Mary Jane](mary-jane-watson) and [Flash Thompson](flash-thompson) watch from New York.",
    ],
    cast: ['thaddeus-ross', 'steve-rogers', 'cyclops-scott-summers', 'hank-mccoy', 'nightcrawler-kurt-wagner', 'jubilee-jubilation-lee', 'amelia-voght', 'forge', 'morph-kevin-sydney'],
    locations: ['new-orleans-bayou', 'gamma-base-and-desert-badlands', 'genosha-capital-and-council-plaza', 'mexico-city-ozt-facility', 'da-costa-home', 'xaviers-school-for-gifted-youngsters', 'un-peace-legion-madripoor', 'galapagos-ozt-bastion-citadel', 'gilberti-house-harmony', 'north-magnetic-pole-ground-zero', 'muir-island-mutant-research-facility', 'asteroid-m', 'astral-plane'],
    objects: [{ id: 'adamantium', at: ['asteroid-m'] }, { id: 'cerebro', at: ['xaviers-school-for-gifted-youngsters'] }, { id: 'sentinels', at: ['galapagos-ozt-bastion-citadel'] }, { id: 'magneto-helmet', at: ['asteroid-m'] }],
    deaths: ['henry-gyrich'],
  },
]);
