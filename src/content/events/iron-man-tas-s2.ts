// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('iron-man-tas-s2', [
  {
    id: 'stark-disbands-force-works',
    date: { year: 1995, order: 128 },
    segment: 'E1',
    title: "Fin Fang Foom's brothers open a portal, and Force Works breaks up",
    text: [
      "In China, [Fin Fang Foom](fin-fang-foom) brings his four brothers to [the Mandarin](mandarin), and the five dragons open a portal to their home world. [Iron Man](tony-stark) joins his power to the Mandarin's to destroy it: Fin Fang Foom dies, and the Mandarin loses his rings. Because Tony faked his death on the way, [Hawkeye](hawkeye), the [Scarlet Witch](scarlet-witch) and [Century](century) leave Force Works.",
    ],
    cast: ['justin-hammer', 'fury', 'hypnotia', 'blizzard', 'war-machine', 'julia-carpenter-spider-woman', 'homer-ai'],
    locations: ['hammer-industries', 'stark-enterprises-and-force-works-compound', 'hidden-valley'],
    deaths: ['fin-fang-foom'],
  },
  {
    id: 'firebrand-blacks-out-los-angeles',
    date: { year: 1995, order: 129 },
    segment: 'E2–E7, E10',
    title: 'The Mandarin regains his rings as Iron Man fights A.I.M. and Firebrand',
    text: [
      "While [the Mandarin](mandarin) hunts down his lost rings one by one, [Firebrand](firebrand) blacks out Los Angeles and blows up its dam, and [War Machine](war-machine) saves him and [Iron Man](tony-stark) but decides to hang up his armor. In space, the [Sunturion](sunturion) gives his life to stop A.I.M.'s attack on New York, and A.I.M. sends Tony a clone of his father, who drains Tony's knowledge into the armor of the [Crimson Dynamo](crimson-dynamo).",
      "Iron Man shrinks inside [Hawkeye](hawkeye) to heal his injured spine, with a shrunken [Ultimo](ultimo) on his trail, and [the Hacker](the-hacker) is caught. With War Machine, back in his armor, he drives [Dark Aegis](dark-aegis) off the planet Elysian, and in Egypt he destroys the Eye of Isis, which had turned [Madame Masque](madame-masque-whitney-frost) into a goddess. The Mandarin takes a ring from [MODOK](modok-george-tarleton), and its visions show him the weak points of Iron Man's armors.",
    ],
    cast: ['julia-carpenter-spider-woman', 'homer-ai', 'dum-dum-dugan', 'fury', 'titanium-man'],
    locations: ['stark-enterprises-and-force-works-compound', 'rockson-refinery', 'star-well-satellite', 'the-sun', 'elysian', 'refinery-tunnels-egypt'],
    deaths: ['sunturion'],
  },
  {
    id: 'iron-man-armor-wars',
    date: { year: 1995, order: 136 },
    segment: 'E8–E9',
    title: 'Iron Man wages the Armor Wars against his own stolen designs',
    text: [
      "[Tony Stark](tony-stark) finds his own designs in the armor of the [Crimson Dynamo](crimson-dynamo), stolen by the [Ghost](ghost) and sold by [Justin Hammer](justin-hammer), and as Iron Man he shuts down every armor built from them, from [Blizzard](blizzard) and [Blacklash](blacklash) to [War Machine](war-machine)'s, while the United Nations condemns him and Tony publicly fires him. Hammer's robot Firepower blows up the armor and the world thinks Iron Man is dead, but Tony was running it by remote control, and in a bigger armor he stops Firepower's neutron bomb.",
    ],
    cast: ['hawkeye', 'fury', 'mandarin', 'julia-carpenter-spider-woman', 'homer-ai'],
    locations: ['stark-enterprises-and-force-works-compound', 'museum-of-modern-art', 'hammer-industries', 'the-vault', 'stark-towers-site'],
  },
  {
    id: 'leader-hulk-time-trip',
    date: { year: 1995, order: 138 },
    segment: 'E11',
    title: 'The Leader sends Iron Man and the Hulk through time',
    text: [
      "[The Leader](the-leader-samuel-sterns) uses two of the Mandarin's rings to go back and kill the young [Bruce Banner](hulk) before the gamma bomb test, and a ring throws the Hulk and [Iron Man](tony-stark) back to the time of the dinosaurs. At the test, Iron Man shields the young Banner so that he can become the Hulk, and [James Rhodes](war-machine) brings everyone back but the Leader.",
    ],
    cast: ['julia-carpenter-spider-woman', 'mandarin', 'homer-ai'],
    locations: ['stark-enterprises-and-force-works-compound'],
  },
  {
    id: 'mandarin-heart-of-darkness',
    date: { year: 1995, order: 139 },
    segment: 'E12–E13',
    title: 'The Mandarin covers Manhattan in a mist and learns who Iron Man is',
    text: [
      'With all ten rings, [the Mandarin](mandarin) covers Manhattan in a mist that kills all power, fed by the Heart of Darkness, a crystal in his lair. Force Works reunites, but at the Heart the armor of [Tony Stark](tony-stark) fails, and the Mandarin takes off his helmet and learns who Iron Man is.',
      '[War Machine](war-machine) frees Tony, the bio-energy microprocessor of [Su Yin](su-yin) gives him an armor the mist cannot stop, and he destroys the Heart and leaves the Mandarin to a band of mountain bandits.',
    ],
    cast: ['modok-george-tarleton', 'julia-carpenter-spider-woman', 'hawkeye', 'scarlet-witch', 'century', 'homer-ai', 'hypnotia', 'blizzard', 'whirlwind', 'blacklash'],
    locations: ['united-nations-headquarters', 'hong-kong', 'the-mandarins-mountain-citadel-and-dragon-chamber', 'stark-enterprises-hong-kong'],
  },
]);
