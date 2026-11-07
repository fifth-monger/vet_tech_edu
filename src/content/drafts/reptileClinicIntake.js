import { DATED_SOURCE_NOTICE, lectureSegment } from './lectureSource.js'

const goals = [
  'Describe reptile handling as species-appropriate and supervised, and say when to get help. This draft does not give holds.',
  'Explain why a heat and humidity gradient matters for an ectotherm, using the lecture concept.',
  'Describe the assistant support role for DVM diagnostics, venipuncture, and anesthesia as an overview only.',
  'Apply the cited CDC Salmonella hygiene points for staff and owners.',
]

const video = lectureSegment('28:07', '41:20')

export const reptileClinicIntake = {
  id: 'reptile-clinic-intake',
  courseId: 'reptile',
  track: 'Reptile',
  title: 'Reptile husbandry history and Salmonella',
  eyebrow: 'Unpublished draft · Reptile',
  summary: 'Draft reptile module from the 2020 lecture segment. Not clinic protocol and not approved for learners.',
  status: 'draft',
  publicationState: 'unpublished-draft',
  enabled: false,
  riskLevel: 'High-risk',
  species: ['Reptiles'],
  reviewStatus: 'Draft — unpublished, not clinically approved',
  datedSourceNotice: DATED_SOURCE_NOTICE,
  goals,
  objectives: goals,
  video,
  historyPrompts: [
    'Species and age',
    'Enclosure size',
    'Heat source and temperatures on the warm side and the cool side',
    'Humidity',
    'UV lighting and bulb age',
    'Diet and how often the reptile eats',
    'Last shed and shed quality',
    'Last defecation',
    'Household members at higher risk for Salmonella',
  ],
  sections: [
    {
      id: 'dated-source',
      kicker: 'Draft',
      title: 'Dated source',
      paragraphs: [
        DATED_SOURCE_NOTICE,
        'This page is a supplemental 2020 lecture that uses the 2014 textbook. It is not clinic protocol, and it is not approved clinical content.',
      ],
      callout: {
        label: 'Not approved clinical content',
        text: 'Do not generalize one reptile group to all reptiles. This draft gives no numeric temperature, humidity, or UV targets.',
      },
    },
    {
      id: 'handling',
      kicker: 'Supervised',
      title: 'Handling',
      paragraphs: [
        'Handling has to fit the species. Get help when the animal, the method, or the handler’s experience does not match.',
        'The brief did not include verified holds for snakes, lizards, chelonians, or other groups. This draft does not invent them. Handle a reptile only as a DVM or credentialed staff directs.',
      ],
    },
    {
      id: 'gradient',
      kicker: 'Husbandry',
      title: 'Heat and humidity',
      paragraphs: [
        'Reptiles in this lesson are ectotherms: they rely on outside heat.',
        'A thermal gradient lets the reptile regulate body temperature by moving between warmer and cooler areas. Ask for the warm side, the cool side, humidity, UV light, and bulb age. Do not fill in numbers that the owner did not give, and do not use one species target for every reptile.',
      ],
    },
    {
      id: 'diagnostics-overview',
      kicker: 'Overview only',
      title: 'Diagnostics, venipuncture, and anesthesia',
      paragraphs: [
        'The lecture includes the assistant support role for diagnostics, venipuncture, and anesthesia. This draft does not include steps or doses.',
        'If an injection site comes up, the DVM decides. This page does not teach an injection site.',
      ],
    },
    {
      id: 'salmonella',
      kicker: 'Current note',
      title: 'Salmonella hygiene',
      paragraphs: [
        'Reptiles often carry Salmonella even when they look healthy. Tank water and equipment can spread it.',
        'Higher-risk groups on the cited CDC page are children under 5, adults over 65, and immunocompromised people.',
        'Wash hands. Keep reptiles and their gear away from food areas.',
        'The cited CDC page also covers amphibians. This module applies the hygiene points to reptiles, as in the lecture segment. It does not add amphibian husbandry.',
      ],
    },
  ],
  currentNotes: [
    {
      id: 'salmonella-cdc',
      text: 'Reptiles often carry Salmonella even when healthy. Tank water and equipment can spread it. Children under 5, adults over 65, and immunocompromised people are at higher risk. Wash hands, and keep reptiles and their gear away from food areas.',
      sources: ['https://www.cdc.gov/healthy-pets/about/reptiles-and-amphibians.html'],
    },
  ],
  questions: [
    {
      id: 'q-salmonella-carriage',
      concept: 'Reptile Salmonella carriage',
      prompt: 'Can a healthy-looking reptile carry Salmonella?',
      options: [
        'Yes',
        'No',
        'Only if it has skipped a shed',
        'Only if the enclosure has no water',
      ],
      correctAnswer: 'Yes',
      explanation: 'Yes. CDC: reptiles often carry Salmonella even when they look healthy.',
    },
    {
      id: 'q-salmonella-risk-groups',
      concept: 'Salmonella risk groups',
      prompt: 'Which groups does the cited CDC page name as higher risk for reptile Salmonella?',
      options: [
        'Children under 5, adults over 65, and immunocompromised people',
        'Only adults between 20 and 40',
        'Only people who keep birds',
        'Only people who work outdoors',
      ],
      correctAnswer: 'Children under 5, adults over 65, and immunocompromised people',
      explanation: 'CDC higher-risk groups are children under 5, adults over 65, and immunocompromised people. The brief accepted any two of those groups. This single-choice item uses the full list so one answer can be scored.',
    },
    {
      id: 'q-thermal-gradient',
      concept: 'Thermal gradient',
      prompt: 'Why provide a thermal gradient for a reptile?',
      options: [
        'Reptiles regulate body temperature by moving between warmer and cooler areas',
        'Reptiles make all the heat they need without a gradient',
        'A gradient is only a bird-housing idea',
        'Humidity replaces the need for a warm side and a cool side',
      ],
      correctAnswer: 'Reptiles regulate body temperature by moving between warmer and cooler areas',
      explanation: 'Lecture concept: ectotherms regulate body temperature by moving between warmer and cooler areas. This draft does not add numeric targets.',
    },
  ],
  referenceGroups: [
    {
      title: 'Reptile history',
      items: [
        'Species and age',
        'Enclosure size',
        'Warm side, cool side, and heat source',
        'Humidity, UV light, and bulb age',
        'Diet and how often it eats',
        'Last shed, shed quality, and last defecation',
        'Higher-risk people in the household',
      ],
    },
    {
      title: 'Gradient',
      items: [
        'Ectotherm: relies on outside heat',
        'The animal moves between warmer and cooler areas',
        'Do not copy one species target onto every reptile',
        'No numeric targets in this draft',
      ],
    },
    {
      title: 'Salmonella',
      items: [
        'A healthy-looking reptile can carry Salmonella',
        'Tank water and equipment can spread it',
        'Higher risk: children under 5, adults over 65, immunocompromised people',
        'Wash hands and keep the animal and gear away from food areas',
      ],
    },
  ],
  supervisedChecklist: {
    recordsCompetency: false,
    storedInProgress: false,
    note: 'Clinic sign-off stays with a DVM or credentialed staff. This app does not store competency or mark the skill complete.',
    items: [
      'Take a reptile history, including warm side, cool side, humidity, and UV',
      'Get help for handling. No hold is taught on this page.',
      'Salmonella hygiene: wash hands, and keep the reptile and gear away from food areas',
    ],
  },
  sources: [
    {
      title: video.title,
      organization: video.organization,
      url: video.url,
      note: 'Uploaded July 24, 2020. Runtime 1:03:49. Reptile segment 28:07-41:20. Uses the 2014 textbook. Supplemental lecture, not clinic protocol.',
    },
    {
      title: 'Reptiles and amphibians',
      organization: 'Centers for Disease Control and Prevention',
      url: 'https://www.cdc.gov/healthy-pets/about/reptiles-and-amphibians.html',
      note: 'Salmonella carriage, spread by habitat water and equipment, higher-risk groups, handwashing, and keeping animals and supplies out of food areas. Amphibian husbandry is not added here.',
    },
  ],
  reviewItems: [
    'Qualified veterinary review is still required. This module is not approved.',
    'Species-specific handling steps were not verified and are not written.',
    'No temperature, humidity, or UV numbers were in the brief. Do not add them without a reviewed source.',
    'No injection-site rule is included. Any injection site stays with the DVM.',
    'Confirm clinic Salmonella hygiene against the CDC page before publication.',
  ],
}
