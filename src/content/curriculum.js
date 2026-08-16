export const lesson = {
  id: 'anatomical-directional-terms',
  courseId: 'medical-terminology',
  title: 'Describing Location Accurately',
  eyebrow: 'Medical Terminology · Lesson 1',
  summary: 'Learn five common term pairs by translating everyday descriptions into clear medical-record wording.',
  estimatedMinutes: 18,
  species: ['Dogs, cats & livestock', 'General mammalian anatomy'],
  riskLevel: 'Foundational',
  reviewStatus: 'Source verified',
  reviewedAt: 'August 15, 2026',
  reviewerRole: 'Editorial and source review',
  status: 'approved',
  objectives: [
    'Recognize five common directional term pairs.',
    'Translate an owner’s everyday description into clearer medical-record wording.',
    'Describe a location without guessing its cause or making a diagnosis.',
    'Separate what the owner reports from what is observed during the examination.',
  ],
  sections: [
    {
      id: 'why-language-matters',
      kicker: 'Start here',
      title: 'Start with one location at a time',
      paragraphs: [
        'Veterinary teams use directional terms so everyone understands exactly where a finding is located. These terms are more precise than phrases such as “near the top,” “on the outside,” or “a little below it.”',
        'Left and right always belong to the patient—not the person looking at the animal. When possible, use a known body part such as the elbow, shoulder, knee, or tail as a landmark.',
        'Record what the owner reports and what can be observed or measured. If information is unknown, document that it is unknown instead of guessing.',
      ],
      callout: { label: 'Describe—do not diagnose', text: 'A directional term makes a location more precise. It does not identify what caused the finding or turn an observation into a diagnosis.' },
    },
    {
      id: 'body-axis', kicker: 'Pair 1', title: 'Cranial ↔ caudal',
      terms: [
        { term: 'Cranial', definition: 'Toward the animal’s head.', cue: 'Think: Your cranium is your skull—cranial points toward the head.' },
        { term: 'Caudal', definition: 'Toward the animal’s tail.', cue: 'Think: Picture a cow swishing its tail at its caudal end.' },
      ],
      appliedExample: {
        species: 'Dog',
        ownerSays: '“I noticed a small bald spot just behind his right shoulder.”',
        translation: 'Use the right shoulder as the reference point. Because the spot is behind the shoulder, toward the tail, it is caudal to the right shoulder. If the spot were in front of the shoulder, toward the head, it would be cranial to the right shoulder.',
        subjective: 'Owner reports a small area of hair loss behind the right shoulder, first noticed yesterday.',
        objective: 'Approximately 1 cm area of hair loss caudal to the right shoulder.',
        why: 'The note identifies what was found, which side is involved, and its position compared with the shoulder. It does not guess why the hair loss occurred.',
      },
    },
    {
      id: 'back-belly', kicker: 'Pair 2', title: 'Dorsal ↔ ventral',
      terms: [
        { term: 'Dorsal', definition: 'Toward the animal’s back or upper surface.', cue: 'Think: A dolphin’s dorsal fin is on its back.' },
        { term: 'Ventral', definition: 'Toward the animal’s belly or underside.', cue: 'Think: A vest zips over your ventral side—your chest and belly.' },
      ],
      appliedExample: {
        species: 'Cat',
        ownerSays: '“There is a dark spot on the underside of her belly.”',
        translation: 'Use the cat’s back and belly as the reference surfaces. Because the spot is on the underside of the abdomen, it is on the ventral surface. If the spot were on the back or upper surface, it would be on the dorsal surface.',
        subjective: 'Owner reports a dark spot on the underside of the abdomen, first noticed this morning.',
        objective: 'Approximately 2 cm darkened area on the ventral abdomen.',
        why: 'The note describes the visible color, location, and size. It does not call the area a bruise, burn, or infection unless the veterinarian makes that assessment.',
      },
    },
    {
      id: 'midline', kicker: 'Pair 3', title: 'Medial ↔ lateral',
      terms: [
        { term: 'Medial', definition: 'Toward the center line of the animal’s body.', cue: 'Think: Medial meets in the middle.' },
        { term: 'Lateral', definition: 'Away from the center line, toward the outside of the body.', cue: 'Think: Your lats spread along the outer sides of your upper body—lateral means toward the side.' },
      ],
      appliedExample: {
        species: 'Horse',
        ownerSays: '“The outside of her left back leg looks swollen.”',
        translation: 'Use the center line of the horse’s body as the reference point. Because the raised area is on the outer side of the leg, away from the center line, it is on the lateral surface. If it were on the inner side of the leg, toward the center line, it would be on the medial surface.',
        subjective: 'Owner reports swelling on the outside of the left hind leg, first noticed this morning.',
        objective: 'Raised area noted on the lateral surface of the left hind limb.',
        why: 'Lateral replaces the less precise phrase “on the outside.” If the area can be measured safely, the measurement may also be recorded.',
      },
    },
    {
      id: 'limbs', kicker: 'Pair 4', title: 'Proximal ↔ distal',
      terms: [
        { term: 'Proximal', definition: 'Closer to where a limb connects to the body.', cue: 'Think: Proximity means near—proximal stays near the body.' },
        { term: 'Distal', definition: 'Farther from the body and closer to the paw, hoof, or end of a limb.', cue: 'Think: Distal sounds like distant—farther from the body.' },
      ],
      appliedExample: {
        species: 'Goat',
        ownerSays: '“There is a red spot on his left front leg, below the elbow and closer to the hoof.”',
        translation: 'Use the left elbow as the reference point. Because the spot is below the elbow and closer to the hoof, it is farther from the body and therefore distal to the elbow. If the spot were above the elbow and closer to the body, it would be proximal to the elbow.',
        subjective: 'Owner reports a red spot on the left front leg near the hoof. Owner is unsure when it appeared.',
        objective: 'Small red area on the left forelimb, distal to the elbow.',
        why: 'The elbow provides a clear landmark. The note also records that the timeline is unknown instead of guessing when the area appeared.',
      },
    },
    {
      id: 'depth', kicker: 'Pair 5', title: 'Superficial ↔ deep',
      terms: [
        { term: 'Superficial', definition: 'At or close to the body’s surface.', cue: 'Think: A surface-level scrape is superficial.' },
        { term: 'Deep', definition: 'Farther below the body’s surface.', cue: 'Think: A deep diver travels far below the surface.' },
      ],
      appliedExample: {
        species: 'Pig',
        ownerSays: '“It looks like she scraped the surface of her skin.”',
        translation: 'Use the body’s surface as the reference point. Because the finding is limited to the surface of the skin, it can be described as superficial. If a veterinarian confirms that a finding extends farther below the surface, it can be described as deep.',
        subjective: 'Owner reports a possible scrape on the right side of the chest. Cause is unknown.',
        objective: 'Approximately 1 cm superficial linear red area on the right side of the chest.',
        why: 'Do not describe a wound as deep only because it looks serious. If depth is uncertain, describe what can be seen and leave the assessment to the veterinarian.',
      },
    },
  ],
  questions: [
    { id: 'q-caudal', concept: 'Cranial and caudal', prompt: 'A dog has a patch of hair loss behind the shoulder, toward the tail. Which term describes its location relative to the shoulder?', options: ['Cranial', 'Caudal', 'Dorsal', 'Medial'], correctAnswer: 'Caudal', explanation: 'Caudal means toward the tail. The patch is on the tail-facing side of the shoulder.' },
    { id: 'q-ventral', concept: 'Dorsal and ventral', prompt: 'A cow has a skin finding on the underside of her abdomen. Which term describes that surface?', options: ['Dorsal', 'Ventral', 'Proximal', 'Lateral'], correctAnswer: 'Ventral', explanation: 'Ventral means toward the belly or underside of the body.' },
    { id: 'q-lateral', concept: 'Medial and lateral', prompt: 'A raised area is on the outside of a horse’s right hind limb. Which term describes that location?', options: ['Medial', 'Lateral', 'Cranial', 'Deep'], correctAnswer: 'Lateral', explanation: 'Lateral means away from the body’s center line, toward the outside.' },
    { id: 'q-distal', concept: 'Proximal and distal', prompt: 'A finding on a goat’s front leg is closer to the hoof than the elbow. Which term describes its position relative to the elbow?', options: ['Proximal', 'Distal', 'Ventral', 'Caudal'], correctAnswer: 'Distal', explanation: 'Distal means farther from where the limb connects to the body.' },
    { id: 'q-superficial', concept: 'Superficial and deep', prompt: 'A visible scrape affects only the surface of a pig’s skin. Which term best describes it?', options: ['Deep', 'Medial', 'Superficial', 'Cranial'], correctAnswer: 'Superficial', explanation: 'Superficial means at or close to the body’s surface.' },
  ],
  referenceTerms: [
    ['Cranial', 'Toward the head', 'Caudal'], ['Caudal', 'Toward the tail', 'Cranial'],
    ['Dorsal', 'Toward the back', 'Ventral'], ['Ventral', 'Toward the belly', 'Dorsal'],
    ['Medial', 'Toward the midline', 'Lateral'], ['Lateral', 'Away from the midline', 'Medial'],
    ['Proximal', 'Nearer trunk or origin', 'Distal'], ['Distal', 'Farther from trunk or origin', 'Proximal'],
    ['Superficial', 'Closer to the surface', 'Deep'], ['Deep', 'Farther from the surface', 'Superficial'],
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
  lessonCount: 5, availableLessons: 4,
}

export const plannedTerminologyLessons = [
  { title: 'Radiograph & Projection Terminology', description: 'Learn the positioning, projection, orientation, and labeling terms used around radiographs.' },
]

export const plannedCourses = [
  { title: 'Patient Intake & TPR', description: 'Gather a clear history, record initial observations, and prepare a concise handoff.', icon: 'pulse' },
  { title: 'Objective Documentation', description: 'Separate client report, direct observation, measurement, and interpretation.', icon: 'notes' },
  { title: 'Radiography Foundations', description: 'Learn projection, positioning, orientation, labeling, and view terminology.', icon: 'image' },
]

export const speciesTracks = [
  ['Avian', 'Feathered patients'], ['Reptile', 'Taxon-aware care'], ['Rabbit', 'Lagomorph focus'], ['Rodent', 'Species-specific foundations'],
]
