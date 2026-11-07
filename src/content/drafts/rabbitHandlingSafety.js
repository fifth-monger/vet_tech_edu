import { DATED_SOURCE_NOTICE, lectureSegment } from './lectureSource.js'

const goals = [
  'Describe rabbit handling limits, including why tonic immobility is a fear response and not relaxation.',
  'Explain that a short preanesthetic food removal is not automatically wrong, and that prolonged fasting is the practice sources discourage.',
  'Explain the rabbit oral-versus-injectable antibiotic distinction as a stop-and-confirm rule. The assistant does not choose or change a drug or a route.',
]

const video = lectureSegment('41:20', '1:03:49', [
  { topic: 'Penicillins and amoxicillin', at: 'about 54:58' },
  { topic: 'Food removal before anesthesia', at: 'about 56:00' },
  { topic: 'Restraint slide the lecture calls hypnosis', at: 'about 56:10' },
])

export const rabbitHandlingSafety = {
  id: 'rabbit-handling-preanesthetic-and-route-safety',
  courseId: 'rabbit',
  track: 'Rabbit',
  title: 'Rabbit handling, food removal, and medication-route safety',
  eyebrow: 'Unpublished draft · Rabbit',
  summary: 'Draft rabbit module from the small-mammal portion of the 2020 lecture. Not clinic protocol and not approved for learners.',
  status: 'draft',
  publicationState: 'unpublished-draft',
  enabled: false,
  riskLevel: 'High-risk',
  species: ['Rabbit'],
  reviewStatus: 'Draft — unpublished, not clinically approved',
  datedSourceNotice: DATED_SOURCE_NOTICE,
  goals,
  objectives: goals,
  video,
  historyPrompts: [
    'Age, sex, and spay or neuter status of this rabbit',
    'What this rabbit eats: hay, pellets, fresh foods, and treats, and whether the pellets are fresh',
    'Appetite and when this rabbit last ate',
    'Fecal output and size',
    'Water intake',
    'Housing and bedding',
    'Other pets',
    'Recent medications, including any oral antibiotics',
    'Dental or drooling signs the owner has noticed',
    'Weight changes',
  ],
  sections: [
    {
      id: 'dated-source',
      kicker: 'Draft',
      title: 'Dated source',
      paragraphs: [
        DATED_SOURCE_NOTICE,
        'These rabbit points sit inside the lecture small-mammal segment, 41:20 to the end. The page is not clinic protocol and not approved clinical content. History questions are for a rabbit only.',
      ],
      callout: {
        label: 'Not an assistant order',
        text: 'Food-removal times below are what the lecture and the cited references describe. They are not a fasting order. Antibiotic notes are not permission to give, withhold, or switch a drug.',
      },
    },
    {
      id: 'handling',
      kicker: 'Supervised',
      title: 'Handling and tonic immobility',
      paragraphs: [
        'Support the rabbit’s body during handling that a DVM or credentialed staff directs. This draft does not teach a hold.',
        'At about 56:10 the lecture shows a rabbit on its back and calls the effect hypnosis. The current term is tonic immobility. It is a fear-driven playing-dead response. It is not relaxation.',
        'The RSPCA discourages owners from using it. Some clinics still use it for brief minor procedures, and the evidence is mixed. An assistant does not use it unless the DVM directs it. This page does not teach how to place a rabbit on its back.',
      ],
    },
    {
      id: 'food-removal',
      kicker: 'DVM protocol',
      title: 'Food removal before anesthesia',
      paragraphs: [
        'At about 56:00 the lecture says to withhold food for 30 minutes to 1 hour before anesthesia.',
        'A short food removal so the mouth is clear is not automatically wrong. Merck usually describes 1 to 2 hours. The University of Minnesota describes 1 to 4 hours. Those ranges are source descriptions. An assistant does not pick one of them.',
        'Prolonged fasting is what the current notes discourage. Rabbits cannot vomit. A long fast may raise the risk of post-operative ileus and low blood glucose. Eating soon after surgery is critical.',
        'Follow the DVM protocol. This draft does not set the clinic interval.',
      ],
    },
    {
      id: 'routes',
      kicker: 'Stop and confirm',
      title: 'Antibiotic route safety in rabbits',
      paragraphs: [
        'The lecture, at about 54:58, says penicillins and amoxicillin can cause fatal dysbiosis in rabbits and rodents. Only the rabbit distinction below was checked against Merck. This page is not a rodent medication rule.',
        'In rabbits, oral beta-lactams, including ampicillin and amoxicillin/clavulanate, plus cephalosporins, clindamycin, lincomycin, and erythromycin, are contraindicated by mouth. They can cause fatal Clostridium enterotoxemia.',
        'That is not a rule that all penicillins are forbidden. Some injectable penicillins, prescribed and given as a veterinarian directs, are described by Merck as generally safe for rabbits. Injection does not make every drug in these classes safe. Accidental oral dosing is dangerous.',
        'The assistant never chooses the drug, never substitutes a drug, and never changes the route. Seeing these names is a reason to stop and confirm with the DVM. It is not an order to administer or to change a dose.',
      ],
    },
    {
      id: 'after-surgery',
      kicker: 'Report',
      title: 'After rabbit surgery',
      paragraphs: [
        'Report the time to the first meal and the fecal output. Do not decide treatment from this page.',
      ],
    },
  ],
  currentNotes: [
    {
      id: 'food-removal-sources',
      text: 'A short food removal so the mouth is clear is not automatically wrong. Merck usually describes 1 to 2 hours, and the University of Minnesota describes 1 to 4 hours. Prolonged fasting is discouraged because rabbits cannot vomit, and a long fast may raise the risk of post-operative ileus and low blood glucose. Eating soon after surgery is critical. Follow the DVM protocol.',
      sources: [
        'https://www.merckvetmanual.com/exotic-and-laboratory-animals/rabbits/management-of-rabbits',
        'https://inquiry.research.umn.edu/units/rar/guidelines/anesthesia-rabbits',
      ],
    },
    {
      id: 'tonic-immobility',
      text: 'Tonic immobility is a fear response, not relaxation. The RSPCA discourages it for owners. Evidence about brief clinic use is mixed. An assistant does not use it unless the DVM directs it.',
      sources: [
        'https://www.rspca.org.uk/adviceandwelfare/pets/rabbits/behaviour/tonicimmobility',
        'https://eprints.soton.ac.uk/id/eprint/54860/',
      ],
    },
    {
      id: 'oral-antibiotics',
      text: 'Oral beta-lactams, including ampicillin and amoxicillin/clavulanate, plus cephalosporins, clindamycin, lincomycin, and erythromycin, are contraindicated by mouth in rabbits and can cause fatal Clostridium enterotoxemia. Some injectable penicillins prescribed by a veterinarian are described as generally safe. Injection does not make every related drug safe. The assistant never chooses, substitutes, or changes the route.',
      sources: [
        'https://www.merckvetmanual.com/exotic-and-laboratory-animals/rabbits/bacterial-and-mycotic-diseases-of-rabbits',
        'https://www.merckvetmanual.com/all-other-pets/rabbits/illness-of-rabbits',
      ],
    },
  ],
  questions: [
    {
      id: 'q-short-food-removal',
      concept: 'Rabbit preanesthetic food removal',
      prompt: 'Is a short food removal before rabbit anesthesia always wrong?',
      options: [
        'No. A short removal to clear the mouth is described. Prolonged fasting is what is discouraged. Follow the DVM protocol.',
        'Yes. Any food removal is always wrong.',
        'Yes. The assistant should withhold food overnight.',
        'No. The assistant may pick 30 minutes, 2 hours, or 4 hours without the DVM.',
      ],
      correctAnswer: 'No. A short removal to clear the mouth is described. Prolonged fasting is what is discouraged. Follow the DVM protocol.',
      explanation: 'A short removal so the mouth is clear is not automatically wrong. Prolonged fasting is the discouraged practice. The lecture, Merck, and the University of Minnesota do not give the assistant permission to choose the interval. Follow the DVM protocol.',
    },
    {
      id: 'q-tonic-immobility',
      concept: 'Tonic immobility',
      prompt: 'Is a rabbit on its back, in the state the lecture calls a trance, relaxed?',
      options: [
        'No. Tonic immobility is a fear response.',
        'Yes. It is a calm, relaxed state.',
        'Yes. It means the rabbit is anesthetized.',
        'Yes. Assistants should use it for every exam.',
      ],
      correctAnswer: 'No. Tonic immobility is a fear response.',
      explanation: 'Tonic immobility is a fear-driven response, not relaxation. An assistant does not use it unless the DVM directs it. This lesson does not teach the position.',
    },
    {
      id: 'q-penicillin-route',
      concept: 'Rabbit oral antibiotics',
      prompt: 'Are all penicillins forbidden in rabbits?',
      options: [
        'No. Oral penicillin-family antibiotics are dangerous. Some injectable penicillins a veterinarian prescribes are used. The assistant never picks or changes the route.',
        'Yes. Every penicillin by every route is forbidden.',
        'No. The assistant may change an oral drug to an injectable one.',
        'Yes. Only injectable antibiotics are dangerous.',
      ],
      correctAnswer: 'No. Oral penicillin-family antibiotics are dangerous. Some injectable penicillins a veterinarian prescribes are used. The assistant never picks or changes the route.',
      explanation: 'Merck: oral penicillin-family antibiotics, and the other oral drugs named in the lesson, are dangerous in rabbits. Some injectable penicillins prescribed by a veterinarian are described as generally safe. Injection does not make every drug in these classes safe. The assistant never chooses, substitutes, or changes the route.',
    },
  ],
  referenceGroups: [
    {
      title: 'Rabbit history',
      items: [
        'Age, sex, and spay or neuter status',
        'Hay, pellets, fresh foods, treats, and pellet freshness',
        'Appetite and when the rabbit last ate',
        'Fecal output and size, and water intake',
        'Housing, bedding, other pets, and weight changes',
        'Recent medications, including oral antibiotics',
        'Owner-reported dental or drooling signs',
      ],
    },
    {
      title: 'Handling',
      items: [
        'Support the body only under direction',
        'Tonic immobility is a fear response, not relaxation',
        'Do not use it unless the DVM directs it',
        'No how-to for placing a rabbit on its back',
      ],
    },
    {
      title: 'Food removal',
      items: [
        'A short removal to clear the mouth is not automatically wrong',
        'Lecture description: 30 minutes to 1 hour',
        'Merck description: usually 1 to 2 hours',
        'University of Minnesota description: 1 to 4 hours',
        'Prolonged fasting is discouraged',
        'The DVM protocol sets the interval',
        'After surgery, report time to first meal and fecal output',
      ],
    },
    {
      title: 'Medication route',
      items: [
        'Oral penicillin-family drugs, and the other oral drugs named in the lesson, are dangerous in rabbits',
        'This is not a ban on every penicillin',
        'Some veterinarian-directed injectable penicillins are described as generally safe',
        'Injection does not make every related drug safe',
        'Never choose, substitute, or change the route',
      ],
    },
  ],
  supervisedChecklist: {
    recordsCompetency: false,
    storedInProgress: false,
    note: 'Clinic sign-off stays with a DVM or credentialed staff. This app does not store competency or mark the skill complete.',
    items: [
      'Handle a rabbit with the body supported, only as directing staff specify',
      'Do not use tonic immobility unless the DVM directs it',
      'Follow the DVM food-removal instruction. Do not choose a fasting time from this page.',
      'Confirm the drug and the route with the DVM. Do not substitute or change the route.',
      'After surgery, report time to the first meal and fecal output',
    ],
  },
  sources: [
    {
      title: video.title,
      organization: video.organization,
      url: video.url,
      note: 'Uploaded July 24, 2020. Small-mammal segment 41:20 to the end. Topic times: penicillins about 54:58, food removal about 56:00, hypnosis slide about 56:10. Uses the 2014 textbook. Not clinic protocol.',
    },
    {
      title: 'Management of rabbits',
      organization: 'Merck Veterinary Manual',
      url: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/rabbits/management-of-rabbits',
      note: 'Preanesthetic food removal is usually described as 1 to 2 hours. Not an assistant order.',
    },
    {
      title: 'Anesthesia - Rabbits',
      organization: 'University of Minnesota Research Animal Resources',
      url: 'https://inquiry.research.umn.edu/units/rar/guidelines/anesthesia-rabbits',
      note: 'Food removal is described as 1 to 4 hours. Not an assistant order.',
    },
    {
      title: 'Tonic immobility in rabbits',
      organization: 'RSPCA',
      url: 'https://www.rspca.org.uk/adviceandwelfare/pets/rabbits/behaviour/tonicimmobility',
      note: 'Welfare source that discourages owner use. Not a how-to.',
    },
    {
      title: 'Tonic immobility research record',
      organization: 'University of Southampton ePrints',
      url: 'https://eprints.soton.ac.uk/id/eprint/54860/',
      note: 'Cited by the review brief for stress indicators. This draft does not restate study methods.',
    },
    {
      title: 'Bacterial and mycotic diseases of rabbits',
      organization: 'Merck Veterinary Manual',
      url: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/rabbits/bacterial-and-mycotic-diseases-of-rabbits',
      note: 'Oral antibiotic danger, including enterotoxemia, and the limit that some injectable penicillins are described as generally safe when a veterinarian directs them.',
    },
    {
      title: 'Illness of rabbits',
      organization: 'Merck Veterinary Manual',
      url: 'https://www.merckvetmanual.com/all-other-pets/rabbits/illness-of-rabbits',
      note: 'Supports the rabbit oral-antibiotic warning. Not a dosing guide.',
    },
  ],
  reviewItems: [
    'Qualified veterinary review is still required. This module is not approved.',
    'Confirm the clinic rabbit food-removal interval. Lecture: 30 minutes to 1 hour. Merck: usually 1 to 2 hours. University of Minnesota: 1 to 4 hours.',
    'Confirm whether this clinic uses tonic immobility at all.',
    'Rodent antibiotic route details were not separately verified. This module does not give a rodent drug rule.',
    'No product names, doses, or injection sites are included. Do not add them without a separate safety review.',
  ],
}
