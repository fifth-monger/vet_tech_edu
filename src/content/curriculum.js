export const lesson = {
  id: 'anatomical-directional-terms',
  courseId: 'medical-terminology',
  title: 'Anatomical Directional Terms',
  eyebrow: 'Medical Terminology · Lesson 1',
  summary: 'Build a shared map for describing exactly where a structure or observation is located on an animal.',
  estimatedMinutes: 15,
  species: ['General veterinary anatomy', 'Mammal examples'],
  riskLevel: 'Foundational',
  reviewStatus: 'Source verified',
  reviewedAt: 'August 15, 2026',
  reviewerRole: 'Editorial and source review',
  status: 'approved',
  objectives: [
    'Pair common directional terms with their opposites.',
    'Choose terms that fit a quadruped instead of defaulting to human anatomy language.',
    'Describe the relationship between two structures clearly and neutrally.',
  ],
  sections: [
    {
      id: 'why-language-matters',
      kicker: 'Start here',
      title: 'A shared map prevents ambiguity',
      paragraphs: [
        'Directional terms describe one structure in relation to another. They help the veterinary team communicate clearly in notes, handoffs, imaging, and conversation.',
        'Always name the reference point. “The lesion is distal” is incomplete; “the lesion is distal to the carpus” tells the reader what the comparison is.',
      ],
      callout: { label: 'Core habit', text: 'Describe what you can locate or observe. A directional term adds precision; it does not turn an observation into a diagnosis.' },
    },
    {
      id: 'body-axis', kicker: 'Pair 1', title: 'Cranial ↔ caudal',
      terms: [
        { term: 'Cranial', definition: 'Toward the cranium, or head, on the neck and trunk.', cue: 'Think: cranium.' },
        { term: 'Caudal', definition: 'Toward the tail on the neck and trunk.', cue: 'Think: cauda, Latin for tail.' },
      ],
      example: 'The heart is cranial to the diaphragm. The pelvis is caudal to the abdomen.',
    },
    {
      id: 'back-belly', kicker: 'Pair 2', title: 'Dorsal ↔ ventral',
      terms: [
        { term: 'Dorsal', definition: 'Toward the back or corresponding upper surface.', cue: 'A dolphin’s dorsal fin is on its back.' },
        { term: 'Ventral', definition: 'Toward the belly or underside of the trunk.', cue: 'Think: belly-facing surface.' },
      ],
      example: 'The vertebral column is dorsal to the sternum. The sternum is ventral to the heart.',
    },
    {
      id: 'midline', kicker: 'Pair 3', title: 'Medial ↔ lateral',
      terms: [
        { term: 'Medial', definition: 'Toward the median plane, or body midline.', cue: 'Move toward the middle.' },
        { term: 'Lateral', definition: 'Away from the median plane, toward the side.', cue: 'Move toward the outer side.' },
      ],
      example: 'The heart is medial to the lungs. Each lung is lateral to the heart.',
    },
    {
      id: 'limbs-depth', kicker: 'Two more pairs', title: 'Proximal, distal, superficial, and deep',
      terms: [
        { term: 'Proximal', definition: 'Nearer the trunk or the point where a structure begins.', cue: 'Proximity means nearness.' },
        { term: 'Distal', definition: 'Farther from the trunk or point of origin.', cue: 'Distant from the starting point.' },
        { term: 'Superficial', definition: 'Closer to the body surface.', cue: 'Near the surface.' },
        { term: 'Deep', definition: 'Farther from the body surface.', cue: 'Under more layers.' },
      ],
      example: 'The elbow is proximal to the carpus. The skin is superficial to the muscles.',
    },
    {
      id: 'head-and-paws', kicker: 'Region-specific language', title: 'The head and distal limbs use extra landmarks',
      paragraphs: [
        'On the head, rostral means toward the nose. Caudal means toward the back of the head. On the distal forelimb, palmar identifies the surface opposite the dorsal surface; on the distal hindlimb, that surface is plantar.',
        'Veterinary nomenclature generally avoids superior and inferior for quadrupeds because those human-orientation terms can create confusion.',
      ],
      callout: { label: 'Species note', text: 'This lesson introduces the general mammalian framework. Avian and reptile tracks will call out the conventions and anatomical differences that matter for those groups.' },
    },
  ],
  scenario: {
    title: 'Put the map to work',
    prompt: 'A fictional rabbit has a small area of hair loss on the outer side of the left forelimb, below the elbow and close to the skin surface.',
    note: 'A neutral location description could use lateral, distal to the elbow, and superficial. It should not guess at the cause.',
  },
  documentationExample: {
    title: 'From plain language to an exam note',
    plainLanguage: '“She has a scrape on the outside of her left front leg, a little below the elbow, and she has been limping since this morning.”',
    termMap: [
      ['outside', 'lateral aspect'],
      ['left front leg', 'left thoracic limb'],
      ['below the elbow', 'distal to the elbow · antebrachium'],
      ['close to the skin surface', 'superficial'],
    ],
    examNote: [
      { label: 'Client report', text: 'Client reports patient began “limping on the left front leg” this morning after free-roam time.' },
      { label: 'Tech observation', text: 'Intermittent decreased weight bearing on left thoracic limb observed during ambulation.' },
      { label: 'Location', text: 'Approx. 1 cm superficial alopecic area on lateral aspect of left antebrachium, distal to elbow; no active bleeding observed.' },
      { label: 'Next step', text: 'DVM evaluation pending.' },
    ],
    caution: 'Document only what the client reported, what you directly observed, and what you measured. Do not substitute an unconfirmed diagnosis such as “sprain” or “infection.” Follow your clinic’s required format and scope of responsibility.',
  },
  questions: [
    { id: 'q-dorsal', concept: 'Dorsal and ventral', prompt: 'The vertebral column is ____ to the sternum.', options: ['Ventral', 'Dorsal', 'Distal', 'Lateral'], correctAnswer: 'Dorsal', explanation: 'Dorsal means toward the back. In a quadruped, the vertebral column lies dorsal to the sternum.' },
    { id: 'q-cranial', concept: 'Cranial and caudal', prompt: 'Which statement uses cranial and caudal correctly?', options: ['The pelvis is cranial to the abdomen.', 'The diaphragm is caudal to the pelvis.', 'The heart is cranial to the diaphragm.', 'The tail is cranial to the thorax.'], correctAnswer: 'The heart is cranial to the diaphragm.', explanation: 'Cranial points toward the head and caudal toward the tail. The heart sits on the head-facing side of the diaphragm.' },
    { id: 'q-medial', concept: 'Medial and lateral', prompt: 'The heart is ____ to the lungs.', options: ['Medial', 'Lateral', 'Superficial', 'Rostral'], correctAnswer: 'Medial', explanation: 'Medial means toward the median plane. The heart is closer to the body midline than either lung.' },
    { id: 'q-proximal', concept: 'Proximal and distal', prompt: 'On a forelimb, the elbow is ____ to the carpus.', options: ['Distal', 'Plantar', 'Proximal', 'Caudal'], correctAnswer: 'Proximal', explanation: 'The elbow is nearer the trunk than the carpus, so it is proximal to the carpus.' },
    { id: 'q-human-terms', concept: 'Veterinary orientation', prompt: 'Why are superior and inferior generally avoided as directional terms for quadrupeds?', options: ['They only describe bones.', 'They can be confusing when human orientation is applied to four-legged animals.', 'They are abbreviations rather than words.', 'They are used only in radiography.'], correctAnswer: 'They can be confusing when human orientation is applied to four-legged animals.', explanation: 'Veterinary anatomy uses terms suited to the animal’s axes. WAVA restricts superior and inferior because their human-anatomy meaning can confuse quadruped orientation.' },
  ],
  referenceTerms: [
    ['Cranial', 'Toward the head', 'Caudal'], ['Caudal', 'Toward the tail', 'Cranial'],
    ['Dorsal', 'Toward the back', 'Ventral'], ['Ventral', 'Toward the belly', 'Dorsal'],
    ['Medial', 'Toward the midline', 'Lateral'], ['Lateral', 'Away from the midline', 'Medial'],
    ['Proximal', 'Nearer trunk or origin', 'Distal'], ['Distal', 'Farther from trunk or origin', 'Proximal'],
    ['Superficial', 'Closer to the surface', 'Deep'], ['Deep', 'Farther from the surface', 'Superficial'],
    ['Rostral', 'Toward the nose on the head', 'Caudal'],
  ],
  sources: [
    { title: 'Nomina Anatomica Veterinaria, Sixth Edition', organization: 'World Association of Veterinary Anatomists', url: 'https://wava-amav.org/wava-documents.html', note: 'Standard veterinary anatomical nomenclature and directional-term conventions.' },
    { title: 'Directional Anatomical Terminology teaching resources', organization: 'Texas A&M School of Veterinary Medicine & Biomedical Sciences', url: 'https://vetmed.tamu.edu/peer/teacher-requested-resources/', note: 'Veterinary teaching context for learning and applying directional terminology.' },
    { title: 'Tips for Efficient Wellness Visits', organization: 'American Animal Hospital Association', url: 'https://www.aaha.org/resources/life-stage-canine-2019/tips-for-efficient-wellness-visits/', note: 'Supports clear documentation of historical and physical examination information for communication and continuity.' },
  ],
}

export const course = {
  id: 'medical-terminology', title: 'Medical Terminology',
  description: 'Build the language you will use across patient intake, documentation, radiography, and every species track.',
  lessonCount: 4, availableLessons: 1,
}

export const plannedCourses = [
  { title: 'Patient Intake & TPR', description: 'Gather a clear history, record initial observations, and prepare a concise handoff.', icon: 'pulse' },
  { title: 'Objective Documentation', description: 'Separate client report, direct observation, measurement, and interpretation.', icon: 'notes' },
  { title: 'Radiography Foundations', description: 'Learn projection, positioning, orientation, labeling, and view terminology.', icon: 'image' },
]

export const speciesTracks = [
  ['Avian', 'Feathered patients'], ['Reptile', 'Taxon-aware care'], ['Rabbit', 'Lagomorph focus'], ['Rodent', 'Species-specific foundations'],
]
