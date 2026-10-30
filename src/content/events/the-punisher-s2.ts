// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('the-punisher-s2', [
  {
    id: 'castle-executes-russo',
    date: { year: 2017, order: 70 },
    title: 'Frank Castle protects Amy and executes Billy Russo',
    text: [
      "[Frank Castle](the-punisher) has been living a quiet life on the road until he suddenly becomes embroiled in the attempted murder of a young girl, **Amy**, from a religious-political group, **Dinah Madani** saves him. **Billy Russo** escapes from the hospital to his psychotherapist **Dr. Dumont's** house, they develop a relationship. Billy's army goes on a successful robbery and murder spree through the city. Dumont tells Russo how to break Castle: destroy his sense of moral superiority over his prey. Castle enters the office while still chasing Russo and finds three dead women. Believing that he killed the three women during his attack, Castle allows himself to be arrested, **Karen Page** visits him at the Hospital. Amy attempts to free Castle. Madani tells Karen about evidence not adding up. Madani push Dumont out of her apartment window in self-defense after the psychotherapist attacks her. After witnessing Dumont's fall, **Russo** tries to kill Madani in retaliation, but is mortally shot by her and forced to escape when the police arrive. Castle executes him. Three months later, Castle resumes his activities as [The Punisher](the-punisher) while Madani works for the C.I.A.",
    ],
    deaths: [
      { name: 'Russo', presumed: false },
    ],
  },
]);
