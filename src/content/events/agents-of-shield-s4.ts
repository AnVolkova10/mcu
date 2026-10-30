// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('agents-of-shield-s4', [
  {
    id: 'radcliffe-darkhold-rescue',
    date: { year: 2017, order: 90 },
    title: 'Radcliffe uses the Darkhold to rescue Coulson and Fitz',
    segment: 'E1–E8',
    text: [
      '[Phil Coulson](coulson): best agent in the field , [Melinda May](may): has a tactical team trained, has been copied , [Daisy](skye): gone rogue, now with SHIELD again, erases any trace in the system about what happened with Elena, last year , **Leo Fitz**: helps Radcliffe with Aida , **Jemma Simmons**: promoted and bossy , **Mack**: in love with Elena, wont engage , **Elena**: in love with Mack, helping Daisy , **Jeffrey Mace**: the new director of SHIELD, an inhuman with super-strength.',
      '**Recovery Missions:** **The Darkhold:** a dangerous book that can open a ==dimension==',
      '**Enemies:** **Ghost Rider**: strucked a deal with **Robbie** as The Devil.',
      '**Secondary appearances:** ,**Radcliffe**: now working for SHIELD, hides **Aida** an IA perfectioned by Fitz. Reads the Darkhold and creates a portal to a dimension to save Phil and Fitz, copies May, gone rogue.',
      "**Places:** Roxxon Energy Plant (Peggy's).",
    ],
  },
  {
    id: 'ghost-rider-slays-aida',
    date: { year: 2017, order: 120 },
    title: 'Ghost Rider slays Aida, creator of the Framework',
    segment: 'E9–E22',
    text: [
      '[Phil Coulson](coulson): in love with May , [Melinda May](may): in love with Phil , [Daisy](skye): came back with the team , **Leo Fitz**: feels guilty for all the things Aida did And the things he did in The Framework , **Jemma Simmons**: supports Fitz , **Mack**: his daughter lived in The Framework. , **Elena**: saved mack from The collapse of The Framework , **Jeffrey Mace**: died as a hero in The Framework.',
      '**Recovery Missions:** **The Darkhold:** Ghost Rider took it away.',
      '**Enemies:** **Ghost Rider**: strucked a deal with **Robbie** and with Phil Coulson to kill Aida. , **Radcliffe**: , **Aida** killed by Ghost Rider , **Tactical Team**: our agents been kidnaped and now **work in a prison in space.**',
      '**Secondary appearances:** , **The Koenig Brothers and sister**: helped hide the Darhold , **Talbot** angry with the team, looking for them.',
      "**Places:** The Labrinth: Koenig's place to hide things, *The Framework*: a programmed world made by Aida, persons without they first regret.",
    ],
    deaths: [
      { name: 'Jeffrey Mace', presumed: false },
      { name: 'Radcliffe', presumed: false },
      { name: 'Aida', presumed: false },
      { name: 'The Framework', presumed: false },
    ],
  },
]);
