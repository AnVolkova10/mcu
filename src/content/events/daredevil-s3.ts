// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('daredevil-s3', [
  {
    id: 'fisk-walks-free',
    date: { year: 2017, order: 60 },
    title: 'Wilson Fisk walks free until Matt Murdock beats him',
    text: [
      `After being seriously injured when a building collapses on him, [Matt Murdock](daredevil) washes out to **Father Paul Lantom**, who entrusts Matt to the care of **Sister Maggie** at the Saint Agnes Orphanage, where Matt was raised. As he slowly recovers, Matt has a crisis of faith and decides that he would rather put his life in danger and continue fighting as Daredevil than return to his civilian life. **Karen Page and Foggy Nelson**, start to lose hope that he may still be alive. In prison, criminal **Wilson Fisk** decides to make a deal with the *FBI* to protect his love **Vanessa Mariana**. The case is assigned to Agent **Ray Nadeem**, who is struggling with being unable to receive a promotion due to financial troubles. Fisk's intel leads to the arrest of the elusive Albanian syndicate's leaders. Nadeem agrees to move Fisk out of prison, but their convoy is attacked by the Albanians. Fisk is saved by Agent **"Dex" Poindexter**, who has incredibly accurate shooting skills and executes some of the attackers even after they surrender.`,
      "The FBI house Fisk in the penthouse suite of a hotel they use as a safehouse. News of his release from prison becomes public. Matt vows to stop Fisk and return him to prison. Foggy, unhappy with Matt's demands, tells Karen that Matt is alive. When Fisk learns that Matt survived his attack, he tells the FBI that he has a criminal fixer named Matt Murdock. Dex has psychopathic tendencies. Fisk sees the potential for Dex to become the new villain. Matt offers to testify against Fisk and agrees to turn himself in to the FBI in order to clear his name. Dex instead goes to the Bulletin dressed as Daredevil, fights off Matt and kills a witness.",
      'Daredevil is attacked by the public and media. Nadeem realizes that Dex is the attacker. Matt later overhears Sister Maggie praying about the fact that she is his mother. Fist is blackmailing the FBI. Karen attends a service at Clinton Church when Dex, dressed as Daredevil, arrives and kills **Lantom**, intending to then kill Karen. Choosing between saving Karen and lying in wait for Fisk, Matt races to the church where he confronts Dex but escapes.',
      "The Justice Department drops all charges against Fisk, who announces his freedom to the public with a speech that proclaims Daredevil as the public's enemy. Dex kills **Nadeem** but before, **he sent a video message that serves as his dying declaration, detailing all of Fisk's crimes.** Dex attacks Fisk and Vanessa knowing he has been manipulated. Matt soon joins the fight. Fisk defeats Dex, leaving him paralyzed, while Matt overpowers and beats Fisk but chooses to spare his life. Fisk agrees to return to prison and leave Karen and Foggy alone if Matt does not reveal Vanessa's involvement in Nadeem's death. With Fisk arrested, **Foggy suggests to Matt and Karen that they all start working together again.** Dex later goes through experimental surgery to fix his spine and becomes Bullseye.",
    ],
    deaths: [
      { name: 'Lantom', presumed: false },
      { name: 'Nadeem', presumed: false },
    ],
  },
]);
