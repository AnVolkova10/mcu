// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('agents-of-shield-s3', [
  {
    id: 'kree-creates-hive',
    date: { year: -3000, approx: true, order: 10 },
    title: 'A rogue Kree faction creates Hive and the Inhumans',
    text: [
      "A rogue faction of *Kree* came to Earth seeking to create an army of super soldiers to aid in their empire's many wars. They conducted their first experiment on a human creating **Hive**, implanting latent genes that, once activated through a mutagenic process known as Terrigenesis gave the new Inhumans access to unique superhuman abilities.",
    ],
    locations: ['ancient-monolith-incursion-site', 'maveth-wasteland-and-hive-exile-outpost'],
  },
  {
    id: 'hive-returns-in-ward',
    date: { year: 2016, order: 30 },
    title: "Hive returns in Ward's body and takes over Daisy",
    segment: 'E1–E19',
    text: [
      "[Phil Coulson](coulson): killed Ward to revenge his lover Rosalind with His bionic hand that also has a shield. , [Melinda May](may): came from vacation and said her last goodbye to Andrew. , [Skye](skye): Su nombre es [Daisy](skye) ahora. She leads *The Secret Warrior Initiative* with the 3 new recruits (**Lincoln**, **Elena** and **Joey** ), Hive has taken control of her. , **Leo Fitz**: In love with Jemma, they had sex!!! yay!! , **Jemma Simmons**: Fitz went through **the Monolith** and saved her with the help of Daisy, she wantws to come back to save **Will** but Hive killed him. , **Mack**: has a brother, Daisy's partner. , **Lincoln**: will do anything for Daisy. Her couple.",
      '**Recovery Missions:** Alien gene dormant in humans is begining to show all over the globe.',
      `**Enemies:** , **Grant Ward**: Wants to rebuild *HYDRA* the "right" way. Killed by Phil, now his body is Hive's vessel , **Lash**: is Andrew, went through Terrigenesis nos is a blue monster that wants to kill inhumans , **Hive**: the first inhuman to be created by the Kree, was vanished now has comeback in Ward's body. Can infect inhumans and make them part of the collective willingly , **Malick** presumably last head of HYDRA, when Hive kills His daughter, he give SHIELDS lal information to destroy all HYDRA facilities. Killed by Skye under Hive's influence.`,
      '**Secondary appearances:** , **Andrew**: came from vacations and got terrigenesiado. , **Rosalind**: leader of the *ATCU (Advanced Threat Containment Unit)* in association with the US government to neutralise alien threat and infection. Fell in love with Phil, killed by Ward , **Randolph** helped the team get with the Monolith. , **Talbot** Mayor Glenn, new leader of the ATCU , **Hunter**: sacrificed work to save SHIELD. , **Bobbi Morse**: sacrificed work to save SHIELD.',
      '**Places:** *The Cocoon*(SHIELDS training facility). *HYDRA Vault*(constain a set of **mini-Monoliths** to open another portal to engineer the return of Hive.)',
    ],
    deaths: [
      { name: 'Will', presumed: false },
      { name: 'Grant Ward', presumed: false },
      { name: 'Malick', presumed: false },
      { name: 'Rosalind', presumed: false },
    ],
  },
  {
    id: 'lincoln-sacrifice-hive',
    date: { year: 2016, order: 80 },
    title: 'Lincoln sacrifices himself to end Hive',
    segment: 'E20–E22',
    text: [
      `[Phil Coulson](coulson): is no longer director of SHIELD. , [Melinda May](may): Still by Phil's side. , [Daisy](skye): goes by her Vigilante name "Quake", evading SHIELD, feels guilty about Lincoln's death. **Lincoln** dies killing Hive, **Elena** wounded, but safe , **Leo Fitz**: couple of Jemma , **Jemma Simmons**: Wants to do things with Fitz , **Mack**: in love with YO-yo (Elena)`,
      '**Recovery Missions:** Warhead with the terrigenesis made by Hive to make Primitives.',
      '**Enemies:** , **Lash**: died saving Daisy and fullfilling his duty. , **Hive**: went boom. , **Radcliffe**:an unorthodox scientist, creates AIDA an IA.',
      '**Secondary appearances:** , **Talbot** Helps Phil.',
    ],
    deaths: [
      { name: 'Lincoln', presumed: false },
      { name: 'Lash', presumed: false },
      { name: 'Hive', presumed: false },
    ],
  },
]);
