import { DATED_SOURCE_NOTICE, lectureSegment } from './lectureSource.js'

const goals = [
  'Collect the supplied bird history before the bird is handled.',
  'Treat transport and towel restraint as supervised skills. This draft does not list holds or setup steps.',
  'Name the three parts of a bird dropping from the lecture, and report changes to the DVM.',
  'Name diagnostics a DVM may order as an overview of the assistant support role only.',
  'Explain psittacosis as a zoonosis and the basic precautions from the cited CDC pages.',
]

const video = lectureSegment('0:00', '28:07')

export const avianClinicIntake = {
  id: 'avian-clinic-intake',
  courseId: 'avian',
  track: 'Avian',
  title: 'Bird intake, droppings, and psittacosis',
  eyebrow: 'Unpublished draft · Avian',
  summary: 'Draft bird-intake module from the 2020 lecture segment. Not clinic protocol and not approved for learners.',
  status: 'draft',
  publicationState: 'unpublished-draft',
  enabled: false,
  riskLevel: 'High-risk',
  species: ['Birds'],
  reviewStatus: 'Draft — unpublished, not clinically approved',
  datedSourceNotice: DATED_SOURCE_NOTICE,
  goals,
  objectives: goals,
  video,
  historyPrompts: [
    'Species, age, and how long the bird has been owned',
    'Recent purchase or new birds in the home',
    'Diet: seed versus pellets, and fresh foods',
    'Cage setup and cleaning',
    'Changes in droppings',
    'Appetite and weight',
    'Breathing changes or tail bobbing',
    'Time out of the cage and exposures such as toxins or other pets',
    'Prior medications',
  ],
  sections: [
    {
      id: 'dated-source',
      kicker: 'Draft',
      title: 'Dated source',
      paragraphs: [
        DATED_SOURCE_NOTICE,
        'This page is a supplemental 2020 lecture that uses the 2014 textbook. It is not Sinton Veterinary Clinic protocol, and it is not approved clinical content.',
      ],
      callout: {
        label: 'Not approved clinical content',
        text: 'Completion of this draft would not be competency. Nothing here is a drug dose or an independent procedure.',
      },
    },
    {
      id: 'history',
      kicker: 'Before handling',
      title: 'Bird history',
      paragraphs: [
        'Collect the bird history before the bird is handled. Ask the bird-specific questions in the history list. Do not substitute a generic small-mammal history.',
        'Record what the owner reports. Report breathing changes, tail bobbing, appetite or weight changes, and dropping changes to the DVM. Do not turn those reports into a diagnosis.',
      ],
    },
    {
      id: 'transport-and-towel',
      kicker: 'Supervised',
      title: 'Transport and towel restraint',
      paragraphs: [
        'The lecture covers transport of a bird coming into the clinic, and towel restraint goals and cautions, under supervision.',
        'The review brief did not include a verified list of transport tips or restraint holds. This draft does not invent those steps. Move and restrain a bird only as a DVM or credentialed staff directs. Stop and ask for help when the method is unclear.',
      ],
    },
    {
      id: 'droppings',
      kicker: 'Report',
      title: 'Dropping parts',
      paragraphs: [
        'Per the lecture, a bird dropping has three parts to identify: feces, urates, and liquid urine.',
        'Report changes to the DVM. The brief did not add appearance rules for normal versus abnormal droppings, so this draft does not invent color, volume, or texture standards.',
      ],
    },
    {
      id: 'diagnostics-overview',
      kicker: 'Overview only',
      title: 'Diagnostics the DVM may order',
      paragraphs: [
        'The lecture names crop wash, cloacal swab, venipuncture, and anesthesia as diagnostics or support a DVM may use. The assistant role is support only.',
        'This draft does not include steps for those procedures and does not include doses. Do not perform them from this page.',
      ],
    },
    {
      id: 'psittacosis',
      kicker: 'Current note',
      title: 'Psittacosis',
      paragraphs: [
        'Psittacosis is caused by Chlamydia psittaci. Birds can shed it without looking sick. People catch it mostly by breathing dust from dried droppings or secretions.',
        'Precautions from the cited CDC pages: wash hands, wet surfaces before cleaning, and do not dry sweep or vacuum.',
      ],
    },
  ],
  currentNotes: [
    {
      id: 'psittacosis-cdc',
      text: 'Psittacosis is caused by Chlamydia psittaci. Birds can shed it without looking sick. People catch it mostly by breathing dust from dried droppings or secretions. Wash hands, wet surfaces before cleaning, and do not dry sweep or vacuum.',
      sources: [
        'https://www.cdc.gov/psittacosis/about/index.html',
        'https://www.cdc.gov/psittacosis/prevention/index.html',
      ],
    },
  ],
  questions: [
    {
      id: 'q-psittacosis-route',
      concept: 'Psittacosis transmission',
      prompt: 'How do people most commonly catch psittacosis?',
      options: [
        'Mostly by breathing dust from dried bird droppings or secretions',
        'Only by touching intact feathers',
        'Only after a towel restraint',
        'Only by eating the bird’s seed',
      ],
      correctAnswer: 'Mostly by breathing dust from dried bird droppings or secretions',
      explanation: 'CDC: people most commonly catch psittacosis by breathing dust from dried droppings or secretions.',
    },
    {
      id: 'q-psittacosis-shedding',
      concept: 'Psittacosis shedding',
      prompt: 'Can a bird that looks healthy shed Chlamydia psittaci?',
      options: [
        'Yes',
        'No',
        'Only after the bird has died',
        'Only during towel restraint',
      ],
      correctAnswer: 'Yes',
      explanation: 'Yes. CDC: birds can shed Chlamydia psittaci without looking sick.',
    },
    {
      id: 'q-dry-sweeping',
      concept: 'Psittacosis cleaning',
      prompt: 'Why is dry sweeping a bird cage discouraged?',
      options: [
        'It puts infectious dust in the air. Wet the surfaces first.',
        'It removes vitamin C from the cage.',
        'It is the required way to restrain the bird.',
        'It is the CDC preferred cleaning method.',
      ],
      correctAnswer: 'It puts infectious dust in the air. Wet the surfaces first.',
      explanation: 'Dry sweeping puts infectious dust in the air. Wet the surfaces first. Also avoid vacuuming dried droppings or secretions. CDC prevention page.',
    },
    {
      id: 'q-dropping-parts',
      concept: 'Bird droppings',
      prompt: 'Which three parts of a bird dropping does the lecture ask you to identify?',
      options: [
        'Feces, urates, and liquid urine',
        'Feces only',
        'Feathers, seed, and water',
        'Urine and blood only',
      ],
      correctAnswer: 'Feces, urates, and liquid urine',
      explanation: 'Per the lecture, identify feces, urates, and liquid urine. Report changes to the DVM. This draft does not add appearance rules.',
    },
  ],
  referenceGroups: [
    {
      title: 'Bird history to collect first',
      items: [
        'Species, age, and how long owned',
        'Recent purchase or new birds',
        'Seed versus pellets, and fresh foods',
        'Cage setup and cleaning',
        'Dropping changes, appetite, weight, breathing, tail bobbing',
        'Time out of the cage, toxins, other pets, prior medications',
      ],
    },
    {
      title: 'Droppings',
      items: [
        'Lecture parts: feces, urates, and liquid urine',
        'Report changes to the DVM',
        'No appearance standards are added in this draft',
      ],
    },
    {
      title: 'Psittacosis precautions',
      items: [
        'Cause: Chlamydia psittaci',
        'A healthy-looking bird can shed it',
        'People mostly breathe dust from dried droppings or secretions',
        'Wash hands, wet surfaces, no dry sweeping or vacuuming',
      ],
    },
    {
      title: 'Support role only',
      items: [
        'Crop wash, cloacal swab, venipuncture, and anesthesia are names of DVM-directed care',
        'No steps and no doses on this page',
        'Transport and towel restraint only with a DVM or credentialed staff directing',
      ],
    },
  ],
  supervisedChecklist: {
    recordsCompetency: false,
    storedInProgress: false,
    note: 'Clinic sign-off stays with a DVM or credentialed staff. This app does not store competency or mark the skill complete.',
    items: [
      'Take a bird owner history before handling',
      'Transport and holding only as directing staff specify. No setup steps are in this draft.',
      'Towel restraint only while a DVM or credentialed staff directs it',
      'Identify feces, urates, and liquid urine, and report changes',
      'Psittacosis cleaning: wash hands, wet surfaces, no dry sweeping or vacuuming',
    ],
  },
  sources: [
    {
      title: video.title,
      organization: video.organization,
      url: video.url,
      note: 'Uploaded July 24, 2020. Runtime 1:03:49. Birds segment 0:00-28:07. Uses the 2014 textbook. Supplemental lecture, not clinic protocol.',
    },
    {
      title: 'About psittacosis',
      organization: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/psittacosis/about/index.html',
      note: 'Cause, shedding without visible illness, and inhalation of dust from dried droppings or secretions.',
    },
    {
      title: 'Psittacosis prevention',
      organization: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/psittacosis/prevention/index.html',
      note: 'Handwashing, wetting surfaces, and avoiding dry sweeping or vacuuming.',
    },
  ],
  reviewItems: [
    'Qualified veterinary review is still required. This module is not approved.',
    'Transport tips and towel-restraint holds were not in the brief. They are not written here.',
    'Normal versus abnormal dropping appearance was not specified. Confirm any clinic examples before a later revision.',
    'Confirm clinic zoonosis cleaning practice against the CDC precautions before publication.',
    'Crop wash, cloacal swab, venipuncture, and anesthesia remain overview names only.',
  ],
}
