// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('agent-carter-s2', [
  {
    id: 'agnes-cully-goes-to-hollywood',
    date: { year: 1934 },
    segment: 'E4',
    title: 'Agnes Cully leaves Oklahoma for Hollywood',
    text: [
      "In Broxton, Oklahoma, young Agnes Cully fixes radios and invents devices, but the university turns her down for being a woman. In 1934 she is in Hollywood, where a talent agent offers to make her a star: the future [Whitney Frost](whitney-frost).",
    ],
    locations: ['broxton-oklahoma', 'hollywood'],
  },
  {
    id: 'peggy-carter-soe',
    date: { year: 1940 },
    segment: 'E4',
    title: "Michael Carter's death drives Peggy into the SOE",
    text: [
      "In England in 1940, [Peggy Carter](peggy-carter), a codebreaker at Bletchley Park engaged to be married, is offered a place in the Special Operations Executive. When her brother, [Michael Carter](michael-carter), is killed in the war, she leaves her fiancé and accepts.",
    ],
    locations: ['carter-family-estate-and-church-of-st-jude'],
    deaths: ['michael-carter'],
  },
  {
    id: 'peggy-finds-zero-matter',
    date: { year: 1947, order: 5 },
    segment: 'E1–E5',
    title: 'Peggy Carter follows a frozen body to Zero Matter',
    text: [
      "After [Peggy Carter](peggy-carter) and [Jack Thompson](jack-thompson) catch [Dottie Underwood](dottie-underwood) in New York, [Daniel Sousa](daniel-sousa), now SSR chief in Los Angeles, asks for help with a body frozen in a lake during a heat wave. The case leads to Isodyne Energy, owned by [Calvin Chadwick](calvin-chadwick), husband of the actress [Whitney Frost](whitney-frost), and to [Zero Matter](object:zero-matter), which leaves [Jason Wilkes](jason-wilkes) intangible and enters Frost.",
      "With [Edwin Jarvis](edwin-jarvis) and [Howard Stark](howard-stark), Peggy uncovers the Council of Nine, protected by [Vernon Masters](vernon-masters). She stops Frost from taking an atomic bomb at a Roxxon warehouse, but is badly wounded.",
    ],
    locations: ['bowery-savings-bank', 'echo-park', 'ssr-west-coast-branch', 'isodyne-energy-particle-laboratory', 'arena-club', 'roxxon-warehouse'],
  },
  {
    id: 'whitney-frost-zero-matter',
    date: { year: 1947, order: 10 },
    segment: 'E6–E10',
    title: 'Peggy Carter strips Whitney Frost of Zero Matter',
    text: [
      "At a campaign event, [Whitney Frost](whitney-frost) destroys [Calvin Chadwick](calvin-chadwick) and half of the Council of Nine and takes over the rest, with [Joseph Manfredi](joseph-manfredi) at her side. She shoots [Ana Jarvis](ana-jarvis), who survives, and kidnaps [Jason Wilkes](jason-wilkes), who is drawn into a rift opened by an atomic bomb in the Mojave and comes back full of [Zero Matter](object:zero-matter). Frost kills [Vernon Masters](vernon-masters) and absorbs it all.",
      "[Peggy Carter](peggy-carter) and [Howard Stark](howard-stark) open a new rift at Stark Pictures and a gamma cannon drives the Zero Matter out of her, leaving her insane in an asylum. Peggy stays in Los Angeles with [Daniel Sousa](daniel-sousa), and [Jack Thompson](jack-thompson) is shot in his hotel room by someone who takes her file.",
    ],
    locations: ['macarthur-grand-hotel', 'isodyne-test-site', 'stark-pictures-motion-picture-studio', 'ssr-west-coast-branch'],
    cast: ['edwin-jarvis'],
    deaths: ['calvin-chadwick', 'vernon-masters'],
  },
]);
