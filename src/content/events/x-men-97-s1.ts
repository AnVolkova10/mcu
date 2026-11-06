// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('x-men-97-s1', [
  {
    id: 'young-en-sabah-nur-rescue',
    date: { year: -3000, order: 10, approx: true },
    segment: 'E10',
    title: 'Lost in ancient Egypt, X-Men meet the young En Sabah Nur',
    text: [
      "Pulled through time, [Rogue](rogue-anna-marie), [Nightcrawler](nightcrawler-kurt-wagner) and [Beast](hank-mccoy) wake far from home, in ancient Egypt. They ask the young man they have just rescued for his name, and he answers: [En Sabah Nur](en-sabah-nur-apocalypse).",
    ],
    cast: ['charles-xavier', 'erik-lehnsherr'],
    locations: ['nile-valley-and-giza-dunes'],
  },
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
    objects: [
      { id: 'cerebro', at: ['xaviers-school-for-gifted-youngsters'] },
      { id: 'sentinels', at: ['sahara-sentinel-sub-facility'] },
      { id: 'magneto-helmet', at: ['xaviers-school-for-gifted-youngsters'] },
    ],
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
    segment: 'E5',
    title: 'A giant Master Mold destroys Genosha, and Gambit dies stopping it',
    text: [
      "On the day the United Nations admits Genosha, its council, with [Madelyne](madelyne-pryor-goblin-queen), [Emma Frost](emma-frost), [Moira MacTaggert](moira-mactaggert) and [Nightcrawler](nightcrawler-kurt-wagner), names [Magneto](erik-lehnsherr) chancellor; he asks [Rogue](rogue-anna-marie) to govern with him, and she and [Gambit](gambit-remy-lebeau) agree to stay friends. At the mansion, where [Trish Tilby](trish-tilby) learns that [Scott](cyclops-scott-summers) gave up his son, [Jean Grey](jean-grey) kisses [Logan](logan-wolverine), who sends her back to Scott, and finds Scott in a psychic link with Madelyne. At the gala [Cable](cable-nathan-summers) appears from the future to warn them and is pulled back, and a giant [Master Mold](master-mold) and its [Sentinels](object:sentinels) destroy Genosha, killing thousands, Madelyne, Moira and the Morlock boy Leech among them. Gambit charges the giant with his power and dies destroying it.",
    ],
    cast: ['hank-mccoy', 'callisto', 'sean-cassidy', 'sebastian-shaw', 'valerie-cooper'],
    locations: ['xaviers-school-for-gifted-youngsters', 'genosha-capital-and-council-plaza', 'astral-plane'],
    objects: [{ id: 'sentinels', at: ['genosha-capital-and-council-plaza'] }],
    deaths: ['gambit-remy-lebeau', 'madelyne-pryor-goblin-queen', 'moira-mactaggert', { name: 'Leech' }],
  },
  {
    id: 'xavier-rite-of-mdashaa',
    date: { year: 1997, order: 81 },
    segment: 'E6',
    title: "Xavier sees Genosha fall and leaves the Shi'ar for Earth",
    text: [
      "A year after the Shi'ar healed him, [Charles Xavier](charles-xavier) is to marry [Lilandra](lilandra-neramani), and as [Deathbird](deathbird) and the Imperial Guard beat the Kree of [Ronan](ronan), she demands the Rite of M'Dashaa: Xavier must purge every memory of Earth. At the rite he pulls everyone into the astral plane, where he sees Genosha destroyed and Gambit dead, and he decides to return to his X-Men.",
    ],
    cast: ['gladiator-kallark'],
    locations: ['shiar-imperial-crown-world-chandilar', 'astral-plane'],
  },
  {
    id: 'storm-reclaims-powers',
    date: { year: 1997, order: 82 },
    segment: 'E3–E6',
    title: 'Storm wins back her powers from the Adversary with Forge\'s help',
    text: [
      "In a Dallas bar the powerless [Storm](storm-ororo-munroe) meets [Forge](forge), an old friend of Xavier's, who takes her to his ranch to give her back her powers. His machine fails, and he admits that the Defense Department built devices to neutralize mutants from his early designs; Storm leaves, and an owl that has circled them shows itself as [the Adversary](the-adversary), who poisons Forge.",
      "Forge drives the demon off with his mother's spell, and they ride to Snowsnake Tower for a cactus that grows in its caves, where Storm faces the Adversary and her own fear, takes back her powers and heals Forge. Then they hear that the nations will not take back the mutants displaced from Genosha.",
    ],
    locations: ['tequila-mockingbird-bar', 'eagle-plaza-ranch-and-sacred-caverns', 'snowsnake-tower'],
  },
  {
    id: 'rogue-hunts-bastion',
    date: { year: 1997, order: 90 },
    segment: 'E7',
    title: 'Rogue hunts the killers of Genosha, and Bastion comes out of hiding',
    text: [
      "After [Gambit](gambit-remy-lebeau)'s funeral in New Orleans, [Rogue](rogue-anna-marie) breaks into the facility built to hold the Hulk, where [General Ross](thaddeus-ross) and [Captain America](steve-rogers) guard Trask, and tracks [Henry Gyrich](henry-gyrich) to Mexico City; while Scott and Jean search the ruins of Genosha and find [Emma Frost](emma-frost) alive, [Bastion](bastion-sebastion-gilberti) kills Gyrich. [Roberto](sunspot-roberto-da-costa) tells his mother, [Nina da Costa](nina-da-costa), that he is a mutant, and she asks him to keep it quiet. [Bolivar Trask](bolivar-trask) leads the X-Men to a lab of Operation: Zero Tolerance at the UN Peace Legion in Madripoor and turns out to be a Prime Sentinel, until [Cable](cable-nathan-summers), Scott's son grown up, stops him. Bastion, with [Mister Sinister](mister-sinister-nathaniel-essex) working for him, holds [Magneto](erik-lehnsherr) prisoner as the Shi'ar announce that Xavier is alive.",
    ],
    cast: ['cyclops-scott-summers', 'jean-grey', 'hank-mccoy', 'nightcrawler-kurt-wagner', 'jubilee-jubilation-lee', 'logan-wolverine', 'amelia-voght', 'trish-tilby', 'senator-robert-kelly'],
    locations: ['new-orleans-bayou', 'gamma-base-and-desert-badlands', 'genosha-capital-and-council-plaza', 'mexico-city-ozt-facility', 'da-costa-home', 'xaviers-school-for-gifted-youngsters', 'un-peace-legion-madripoor', 'galapagos-ozt-bastion-citadel'],
    deaths: ['henry-gyrich'],
  },
  {
    id: 'magneto-global-emp',
    date: { year: 1997, order: 100 },
    segment: 'E8–E10',
    title: 'Magneto blacks out the Earth, and the X-Men bring down Bastion',
    text: [
      "[Cable](cable-nathan-summers) tells the X-Men that [Bastion](bastion-sebastion-gilberti), whose Operation: Zero Tolerance counts [Doctor Doom](victor-von-doom) among its members, used Genosha to win backing for Prime Sentinels made with Sinister's techno-organic virus. In Harmony, Pennsylvania, [Jean Grey](jean-grey) reads Bastion's childhood home: a boy who could hear machines, whose father was infected by Sentinel technology from the future. The Prime Sentinels wake, [Trish Tilby](trish-tilby) among them, and burn down the mansion, [Nina da Costa](nina-da-costa) hands Roberto to them, and [Val Cooper](valerie-cooper) frees [Magneto](erik-lehnsherr), who blacks out the Earth and shuts them down as [Charles Xavier](charles-xavier) returns.",
      "With the world's power failing, Xavier sends one team after Magneto and another, under [Storm](storm-ororo-munroe), her powers back, to Bastion's base on Isla Morada, with a scrambler that [Forge](forge) and [Beast](hank-mccoy) tune on Muir Island. Magneto offers the mutants a new Genosha on Asteroid M, and [Rogue](rogue-anna-marie) and [Roberto](sunspot-roberto-da-costa) go with him; when [Wolverine](logan-wolverine) stabs him, Magneto tears the [adamantium](object:adamantium) out of his skeleton.",
      "Xavier makes Magneto give the Earth its power back, and on Isla Morada Jean, calling on the Phoenix, burns away the mutant DNA [Mister Sinister](mister-sinister-nathaniel-essex) stole, while the scrambler cuts Bastion off from the Prime Sentinels. Bastion goes to bring Asteroid M down on the East Coast, President [Kelly](senator-robert-kelly), with [T'Chaka](tchaka) of Wakanda among the leaders on his call, fires missiles at it, and Bastion refuses Rogue's hand as they hit; Xavier and Magneto push the asteroid into space, where it explodes. In New York [Peter Parker](spider-man), [Mary Jane](mary-jane-watson) and [Flash Thompson](flash-thompson) watch it.",
    ],
    cast: ['cyclops-scott-summers', 'nightcrawler-kurt-wagner', 'jubilee-jubilation-lee', 'morph-kevin-sydney'],
    locations: ['xaviers-school-for-gifted-youngsters', 'gilberti-house-harmony', 'da-costa-home', 'north-magnetic-pole-ground-zero', 'muir-island-mutant-research-facility', 'galapagos-ozt-bastion-citadel', 'asteroid-m', 'astral-plane'],
    objects: [
      { id: 'cerebro', at: ['xaviers-school-for-gifted-youngsters'] },
      { id: 'sentinels', at: ['galapagos-ozt-bastion-citadel'] },
      { id: 'adamantium', at: ['asteroid-m'] },
      { id: 'magneto-helmet', at: ['asteroid-m'] },
    ],
  },
  {
    id: 'bishop-finds-forge',
    date: { year: 1998, order: 10, approx: true },
    segment: 'E10',
    title: 'Six months after E-Day, Bishop tells Forge the X-Men are lost in time',
    text: [
      "Six months after E-Day, with Graydon Creed gaining on President Kelly in the polls, [Bishop](bishop-lucas-bishop) finds [Forge](forge), who has searched for months for the X-Men believed dead with Asteroid M, and tells him that someone pulled them through time and they must rescue them. In the ruins of Genosha, [Apocalypse](en-sabah-nur-apocalypse) grieves over so much death, holding one of Gambit's cards.",
    ],
    locations: ['eagle-plaza-ranch-and-sacred-caverns', 'genosha-capital-and-council-plaza'],
  },
  {
    id: 'cyclops-jean-mother-askani',
    date: { year: 3960, order: 10 },
    segment: 'E10',
    title: 'Cyclops and Jean meet Mother Askani and young Nathan',
    text: [
      "Pulled through time, [Scott Summers](cyclops-scott-summers) and [Jean Grey](jean-grey) wake in 3960, a long way from a place called Crestcoast. [Mother Askani](mother-askani-rachel-summers), leader of Clan Askani, greets them and calls over a boy named [Nathan](young-nathan-summers).",
    ],
    locations: ['clan-askani-sanctuary-citadel'],
  },
]);
