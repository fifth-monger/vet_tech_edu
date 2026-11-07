import { DATED_SOURCE_NOTICE, lectureSegment } from './lectureSource.js'

const goals = [
  'Explain that guinea pigs need vitamin C in the diet because they cannot make it.',
  'Explain that vitamin C in pellets breaks down and that rabbit pellets are not a substitute.',
  'Recognize deficiency signs as findings to report, not as a diagnosis.',
  'Leave the amount with the DVM. This draft gives no amount and does not recommend water supplementation.',
]

const video = lectureSegment('41:20', '1:03:49', [
  {
    topic: 'Guinea pig vitamin C',
    at: 'Inside the small-mammal segment. The brief does not give a separate timestamp.',
  },
])

export const guineaPigVitaminC = {
  id: 'guinea-pig-vitamin-c',
  courseId: 'rodent',
  track: 'Rodent',
  title: 'Guinea pig vitamin C',
  eyebrow: 'Unpublished draft · Rodent',
  summary: 'Draft guinea pig vitamin C module for the planned rodent track. It does not cover other rodent species. Not clinic protocol and not approved for learners.',
  status: 'draft',
  publicationState: 'unpublished-draft',
  enabled: false,
  riskLevel: 'Clinical',
  species: ['Guinea pig'],
  reviewStatus: 'Draft — unpublished, not clinically approved',
  datedSourceNotice: DATED_SOURCE_NOTICE,
  goals,
  objectives: goals,
  video,
  historyPrompts: [
    'Confirm the patient is a guinea pig, then ask age and sex',
    'Which pellets are fed, and whether they are rabbit pellets',
    'How fresh the pellets are, because vitamin C in pellets breaks down over time',
    'Fresh foods offered',
    'Appetite and when this guinea pig last ate',
    'Water intake, as history only',
    'Housing and bedding',
    'Weight changes',
    'Owner-reported rough coat, not eating, trouble eating, lameness, swollen joints, or delayed healing',
  ],
  sections: [
    {
      id: 'dated-source',
      kicker: 'Draft',
      title: 'Dated source',
      paragraphs: [
        DATED_SOURCE_NOTICE,
        'The lecture says guinea pigs need dietary vitamin C. The current notes below are the ones marked confirmed in the review brief. This page is not clinic protocol. It is about guinea pigs only.',
      ],
      callout: {
        label: 'No amount on this page',
        text: 'The DVM sets the amount. This draft does not give one, and it does not recommend adding vitamin C to the water.',
      },
    },
    {
      id: 'cannot-make',
      kicker: 'Current note',
      title: 'Guinea pigs cannot make vitamin C',
      paragraphs: [
        'Guinea pigs cannot make vitamin C. They need it in the diet.',
      ],
    },
    {
      id: 'pellets',
      kicker: 'Diet history',
      title: 'Pellets',
      paragraphs: [
        'Vitamin C in pellets breaks down over time. Ask how fresh the pellets are.',
        'Do not substitute rabbit pellets. They do not have enough vitamin C.',
      ],
    },
    {
      id: 'signs',
      kicker: 'Report',
      title: 'Signs to report',
      paragraphs: [
        'Deficiency signs named in the current notes include a rough coat, not eating or trouble eating, lameness or swollen joints, and delayed healing.',
        'Record what the owner reports or what staff can see, and report it to the DVM. Do not diagnose from this list.',
      ],
    },
    {
      id: 'no-amount',
      kicker: 'DVM',
      title: 'No amount and no water supplementation',
      paragraphs: [
        'Water supplementation is not recommended.',
        'Amounts are set by the DVM, so none are given here.',
      ],
    },
  ],
  currentNotes: [
    {
      id: 'vitamin-c-confirmed',
      text: 'Guinea pigs cannot make vitamin C. Vitamin C in pellets breaks down over time. Do not substitute rabbit pellets. Deficiency signs include a rough coat, not eating or trouble eating, lameness or swollen joints, and delayed healing. Water supplementation is not recommended. Amounts are set by the DVM, so none are given here.',
      sources: [
        'https://www.merckvetmanual.com/exotic-and-laboratory-animals/guinea-pigs/noninfectious-diseases-of-guinea-pigs',
        'https://www.merckvetmanual.com/all-other-pets/guinea-pigs/diet-for-a-guinea-pig',
      ],
    },
  ],
  questions: [
    {
      id: 'q-vitamin-c-synthesis',
      concept: 'Guinea pig vitamin C',
      prompt: 'Why do guinea pigs need vitamin C in their diet?',
      options: [
        'They cannot make it themselves.',
        'They make it when they have sunlight.',
        'They need it only while they are ill.',
        'They are born with a supply that lasts the whole life.',
      ],
      correctAnswer: 'They cannot make it themselves.',
      explanation: 'Guinea pigs cannot make vitamin C. The cited Merck pages are the current sources for this confirmed note.',
    },
    {
      id: 'q-rabbit-pellets',
      concept: 'Guinea pig pellets',
      prompt: 'Why not feed a guinea pig rabbit pellets?',
      options: [
        'They do not have enough vitamin C.',
        'They are the same diet with a different label.',
        'They contain more vitamin C than a guinea pig needs.',
        'Guinea pigs make vitamin C if they eat rabbit pellets.',
      ],
      correctAnswer: 'They do not have enough vitamin C.',
      explanation: 'Rabbit pellets do not have enough vitamin C. Do not substitute them for guinea pig pellets. Merck diet source cited in the lesson.',
    },
    {
      id: 'q-vitamin-c-amount',
      concept: 'Guinea pig vitamin C amount',
      prompt: 'Who sets how much vitamin C a guinea pig receives?',
      options: [
        'The DVM. This lesson does not give an amount.',
        'The assistant uses one amount for every guinea pig.',
        'Add vitamin C to the drinking water as a standard step.',
        'The assistant chooses an amount from the pellet bag.',
      ],
      correctAnswer: 'The DVM. This lesson does not give an amount.',
      explanation: 'Amounts are set by the DVM, so none are given here. Water supplementation is not recommended.',
    },
  ],
  referenceGroups: [
    {
      title: 'Guinea pig history',
      items: [
        'Species, age, and sex',
        'Pellet type, including whether they are rabbit pellets',
        'Pellet freshness',
        'Fresh foods, appetite, and when the guinea pig last ate',
        'Water intake as history, not as a supplementation plan',
        'Housing, bedding, and weight changes',
        'Report a rough coat, eating trouble, lameness, swollen joints, or delayed healing',
      ],
    },
    {
      title: 'Vitamin C',
      items: [
        'Guinea pigs cannot make vitamin C',
        'Vitamin C in pellets breaks down over time',
        'Do not substitute rabbit pellets',
        'Water supplementation is not recommended',
        'The DVM sets the amount. None is printed here.',
      ],
    },
  ],
  supervisedChecklist: {
    recordsCompetency: false,
    storedInProgress: false,
    note: 'Clinic sign-off stays with a DVM or credentialed staff. This app does not store competency or mark the skill complete.',
    items: [
      'Ask which pellets this guinea pig eats and how fresh they are',
      'Do not substitute rabbit pellets',
      'Report possible deficiency signs without diagnosing',
      'Do not state a vitamin C amount',
    ],
  },
  sources: [
    {
      title: video.title,
      organization: video.organization,
      url: video.url,
      note: 'Uploaded July 24, 2020. Guinea pig vitamin C is topic C1 inside the small-mammal segment, 41:20 to the end. The brief does not give a tighter timestamp. Uses the 2014 textbook. Not clinic protocol.',
    },
    {
      title: 'Noninfectious diseases of guinea pigs',
      organization: 'Merck Veterinary Manual',
      url: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/guinea-pigs/noninfectious-diseases-of-guinea-pigs',
      note: 'Confirmed current source for dietary vitamin C requirement and deficiency signs. No amount is copied into this draft.',
    },
    {
      title: 'Diet for a guinea pig',
      organization: 'Merck Veterinary Manual',
      url: 'https://www.merckvetmanual.com/all-other-pets/guinea-pigs/diet-for-a-guinea-pig',
      note: 'Confirmed current source for pellet vitamin C fading, not using rabbit pellets, and not recommending water supplementation.',
    },
  ],
  reviewItems: [
    'Qualified veterinary review is still required. This module is not approved.',
    'Confirm the clinic vitamin C practice, and keep amounts out of the lesson unless a separate dosing review exists.',
    'Deficiency signs are for reporting. They are not a diagnosis list.',
    'No other rodent species is covered. Do not paste this lesson onto another species.',
  ],
}
