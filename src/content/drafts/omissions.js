// Editorial exclusions. These are review boundaries, not lesson text.
// teaching: false means the four draft modules must not teach the claim.

export const editorialOmissions = [
  {
    id: 'c5-ferret-diet',
    teaching: false,
    note: 'Omit lecture claims that a high-quality kitten or cat food is a ferret diet.',
  },
  {
    id: 'quiz-q6-insulinoma',
    teaching: false,
    note: 'Omit the unverified true/false item that a special diet prevents insulinoma.',
  },
  {
    id: 'ferret-diet-pending-dvm',
    teaching: false,
    note: 'The only ferret-diet content is an open question for the veterinarian. No diet is taught.',
  },
  {
    id: 'universal-small-mammal-history',
    teaching: false,
    note: 'History prompts stay species-specific. No shared small-mammal diet or history is taught.',
  },
  {
    id: 'unverified-other-species',
    teaching: false,
    note: 'No independent facts for hamsters, gerbils, mice, rats, prairie dogs, hedgehogs, or sugar gliders.',
  },
  {
    id: 'doses-and-invasive-steps',
    teaching: false,
    note: 'No doses and no actionable steps for invasive procedures.',
  },
  {
    id: 'statistic-85',
    teaching: false,
    note: 'The unsupported 85% disease statistic is omitted.',
  },
  {
    id: 'never-fast',
    teaching: false,
    note: 'Do not teach an absolute never-fast rule. Prolonged fasting is the discouraged practice.',
  },
  {
    id: 'blanket-penicillin-prohibition',
    teaching: false,
    note: 'Do not teach that all penicillins are contraindicated or forbidden.',
  },
  {
    id: 'renal-portal-rule',
    teaching: false,
    note: 'The broad renal-portal never-inject-the-back-half rule is omitted. Injection sites stay with the DVM.',
  },
]

export const ferretDietPendingQuestion = {
  id: 'ferret-diet-pending-dvm',
  status: 'pending-dvm-question',
  teachesClaim: false,
  question: 'What ferret diet, if any, should the clinic teach?',
  omittedLectureClaims: [
    'A high-quality kitten or cat food is suggested by the lecture.',
    'A diet link to insulinoma is suspected, not proven, and must not be taught as prevention.',
  ],
  omittedQuizId: 'brief-q6',
}
