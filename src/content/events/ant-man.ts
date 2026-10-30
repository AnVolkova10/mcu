// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('ant-man', [
  {
    id: 'hank-pym-quits-shield',
    date: { year: 1989, order: 20 },
    title: 'Hank Pym quits S.H.I.E.L.D. to protect his shrinking tech',
    text: [
      'Scientist **Hank Pym** resigns from *S.H.I.E.L.D.* after discovering their attempt to replicate his **Ant-Man shrinking technology.** Believing the technology would be dangerous if replicated, Pym vows to hide it for as long as he lives.',
    ],
  },
  {
    id: 'scott-lang-goes-subatomic',
    date: { year: 2015, order: 60 },
    title: 'Scott Lang goes subatomic to defeat Darren Cross',
    text: [
      "**Pym's** estranged daughter, [Hope van Dyne](wasp), and former protégé, **Darren Cross**, have forced him out of his company, *Pym Technologies*. Cross is close to perfecting a shrinking suit of his own, **the Yellowjacket**, which horrifies Pym.",
      'Upon his release from prison, well-meaning thief [Scott Lang](ant-man) agrees to join his friend Luis and crew and commit a burglary into a house and cracks its safe, but only finds what he believes to be an **old motorcycle suit.** After trying the suit on, Lang accidentally shrinks himself to the size of an insect. Terrified by the experience, he returns the suit to the house, but is arrested on the way out. Pym, the homeowner, visits Lang in jail and smuggles the suit into his cell to help him break out.',
      "Pym, who manipulated Lang through into stealing the suit as a test, wants Lang to become the new Ant-Man to steal the Yellowjacket from Cross. They train Lang to fight and to control ants. While Van Dyne harbors resentment towards Pym about her mother **Janet's** death, he reveals that Janet, known as the Wasp, **disappeared into a subatomic quantum realm** while disabling a Soviet nuclear missile. Pym warns Lang that he could suffer a similar fate if he overrides his suit's regulator. They send him to steal a device that will aid their heist from the Avengers' headquarters, where he briefly fights [Sam Wilson](falcon).",
      "Cross kidnap Ant-Man and intends to sell both the Yellowjacket and Ant-Man suits to *Hydra*. Lang breaks free and Pym is shot. Lang pursues Cross, while the explosives Ant-Man put detonate, imploding the building as Pym and Van Dyne escape. Cross dons the Yellowjacket and attacks Lang, takes **Cassie** (Ant-Man's daughter) hostage to lure Lang into another fight. Lang overrides the regulator and shrinks to subatomic size to penetrate Cross' suit and sabotage it to shrink uncontrollably, presumably killing **Cross**. Lang **disappears into the quantum realm but manages to reverse the effects and returns to the macroscopic world.**. Wilson is looking for him.",
    ],
    deaths: [
      { name: 'Cross', presumed: true },
    ],
  },
]);
