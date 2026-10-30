// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.
import { defineEvents } from '@/domain/define';

export default defineEvents('jessica-jones-s2', [
  {
    id: 'jessica-mother-alisa',
    date: { year: 2017, order: 30 },
    title: 'Jessica Jones learns the IGH killer is her mother',
    text: [
      '[Jessica Jones](jessica-jones) is driven by **Trish Walker** , to investigate *IGH*. Trish is being stalked by her ex-boyfriend **Will Simpson** . Meanwhile, **Pryce Cheng** – a private investigator – attempts to hire Jessica, but is rebuffed. Jessica finds that **Dr. Kozlov** , has recently died in “an accident”. When Jones and Walker later encounter **Will** , he denies his involvement and claims he was just protecting Walker from the real murderer – shortly before being killed himself. **Jeri Hogarth** is revealed to have ALS and is facing a buy-out from her legal partners. She asks Jones to investigate them. While Jones is investigating the killer they find **Inez Green**, a nurse who worked for IGH, and gives her to Hogarth. Trish is ab-using the IGH **performance-enhancing drugs** left behind by Simpson.',
      'Jessica meets **Karl Malus**, the scientist behind the experiments. Inez tells Hogarth that one of the IGH test subjects can heal people. Jones tracks down Malus, only to be told that the killer is actually her real mother, **Alisa**. She survived the accident but her injuries were so severe that the healing process altered her looks and gave her a personality disorder causing extreme mood swings. Alisa stayed with Malus in the hope that he can cure her and they fell in love.Trish and **Malcolm** sleep together, although when Malcolm realises she’s addicted to IGH’s drug he leaves. With Hogarth’s help, Alisa avoids jail – but only if she’ll give up Malus. Jessica convinces Malus to leave the country so that he can be safe from the authorities – they just need **Oscar** (Jessica’s new lover and superintendent)to forge him a passport. Hogarth realises that she’s been scammed. Trish asks Malus to give her abilities like Jessica’s, and he agrees. **Malus** takes his own life rather than go to jail, and Alisa sees a report of this on the news which throws her into a rage, meaning she kills her guard then escapes prison. Jess tries to kill Alisa but can’t, so Alisa knocks her out.',
      'Trish sees that Alisa is there on the news, goes there and kills **Alisa** before disappearing. With her confidence restored, Hogarth uses material acquired by Malcolm to blackmail her partners into giving her money to start her own law firm. Malcolm joins Cheng’s agency and begins working for Hogarth. Back at home, Jessica and Oscar begin a relationship, and meanwhile Trish discovers that **her reflexes have been heightened.**',
    ],
    deaths: [
      { name: 'Dr. Kozlov', presumed: false },
      { name: 'Will', presumed: false },
      { name: 'Malus', presumed: false },
      { name: 'Alisa', presumed: false },
    ],
  },
]);
