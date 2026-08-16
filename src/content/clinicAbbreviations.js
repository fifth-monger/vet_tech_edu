export const medicationRoutes = [
  { abbreviation: 'IV', meaning: 'Intravenous', plain: 'Into a vein' },
  { abbreviation: 'SC/SQ', meaning: 'Subcutaneous', plain: 'Under the skin', note: 'SC and SQ identify the same route.' },
  { abbreviation: 'CA', meaning: 'In the catheter', plain: 'SVC-specific shorthand for medication administered through an existing catheter', note: 'Confirm which catheter is intended from the record context.' },
  { abbreviation: 'IM', meaning: 'Intramuscular', plain: 'Into a muscle' },
  { abbreviation: 'IN', meaning: 'Intranasal', plain: 'Into the nose' },
  { abbreviation: 'IC', meaning: 'Intracardiac', plain: 'Into the heart', note: 'A highly specific route; confirm the context rather than relying on the initials alone.' },
  { abbreviation: 'PO', meaning: 'Per os', plain: 'By mouth', note: 'Per os is Latin for “by mouth.”' },
  { abbreviation: 'IMM', meaning: 'Intramammary', plain: 'Into the mammary gland through the teat canal', note: 'Commonly encountered in large-animal medicine.' },
  { abbreviation: 'PR', meaning: 'Per rectum', plain: 'Through the rectum' },
]

export const medicationFrequencies = [
  { abbreviation: 'SID', meaning: 'Once daily', note: 'The FDA has documented SID being misread as BID or QID.' },
  { abbreviation: 'BID', meaning: 'Twice daily', note: 'Not automatically every 12 hours unless that interval is specified.' },
  { abbreviation: 'TID', meaning: 'Three times daily', note: 'Not automatically every eight hours unless that interval is specified.' },
  { abbreviation: 'QID', meaning: 'Four times daily', note: 'Not automatically every six hours unless that interval is specified.' },
  { abbreviation: 'QOD/EOD', meaning: 'Every other day', note: 'Error-prone shorthand; write “every other day” externally.' },
  { abbreviation: 'q2h', meaning: 'Every two hours', note: 'An exact two-hour interval—not the same as twice daily.' },
  { abbreviation: 'PRN', meaning: 'As needed', note: 'Complete instructions must explain when it may be given and any maximum frequency.' },
]

export const clinicDirections = [
  { abbreviation: 'F/C', meaning: 'Free choice or ad libitum', plain: 'Available without a set limit', note: 'The SVC reference writes “Ad Libidum”; the standard Latin spelling is ad libitum.' },
  { abbreviation: 'NPO', meaning: 'Nothing by mouth', plain: 'No food, water, or oral medication unless the instructions specify an exception', note: 'Always provide the actual fasting start time and clarify water and medication instructions.' },
  { abbreviation: 'SA', meaning: 'Small animal', plain: 'Service or patient category for small animals' },
  { abbreviation: 'LA', meaning: 'Large animal', plain: 'Service or patient category for large animals' },
  { abbreviation: 'MB', meaning: 'In medication box', plain: 'SVC-specific shorthand indicating that something is in the medication box', note: 'Confirm which box is being referenced when context is unclear.' },
]

export const procedureEntries = [
  { abbreviation: 'BW', meaning: 'Body weight', plain: 'Patient’s measured weight' },
  { abbreviation: 'Tx', meaning: 'Treatment or therapy', plain: 'Treatment performed or planned' },
  { abbreviation: 'Sx', meaning: 'Surgery', plain: 'Surgical procedure' },
  { abbreviation: 'Bx', meaning: 'Biopsy', plain: 'Collection of tissue for examination' },
  { abbreviation: 'fx', meaning: 'Fracture', plain: 'A broken bone' },
  { abbreviation: 'OHE', meaning: 'Ovariohysterectomy', plain: 'Spay procedure involving removal of the ovaries and uterus' },
  { abbreviation: 'RV', meaning: 'Rabies vaccine', plain: 'Rabies vaccination' },
  { abbreviation: 'HWT', meaning: 'Heartworm test', plain: 'Testing for heartworm infection' },
  { abbreviation: 'CBC', meaning: 'Complete blood count', plain: 'Evaluation of blood cell populations' },
  { abbreviation: 'Panel', meaning: 'Comprehensive chemistry', plain: 'SVC-specific name for the comprehensive chemistry panel', note: 'Verify the included tests when that detail matters.' },
  { abbreviation: 'B. profile/Pre-Surg', meaning: 'Limited chemistry profile', plain: 'SVC-specific shorthand for the limited pre-surgical chemistry profile' },
  { abbreviation: 'PCV', meaning: 'Packed cell volume', plain: 'Proportion of blood made up of red blood cells' },
  { abbreviation: 'TP', meaning: 'Total protein', plain: 'Measured total blood protein' },
  { abbreviation: 'UA', meaning: 'Urinalysis', plain: 'Laboratory evaluation of urine' },
  { abbreviation: 'USG', meaning: 'Urine specific gravity', plain: 'Measurement of urine concentration' },
  { abbreviation: 'LRS', meaning: 'Lactated Ringer’s Solution', plain: 'A balanced crystalloid fluid' },
  { abbreviation: 'RTG', meaning: 'Ready to go', plain: 'SVC-specific shorthand indicating that the patient is ready to go' },
  { abbreviation: 'TGH', meaning: 'To go home or to give at home', plain: 'SVC-specific shorthand meaning “to go home” or “to give at home”', note: 'Confirm the intended meaning from context.' },
]

export const conditionEntries = [
  { abbreviation: 'AI', meaning: 'Artificial insemination', plain: 'Reproductive procedure' },
  { abbreviation: 'HBC', meaning: 'Hit by car', plain: 'Reported or known vehicular trauma' },
  { abbreviation: 'ADR', meaning: 'Ain’t doing right', plain: 'Informal shorthand for vague, nonspecific concerns', note: 'Not a diagnosis. Document the specific history and observations that are known.' },
  { abbreviation: 'FUO', meaning: 'Fever of unknown origin', plain: 'Fever whose cause has not been identified' },
  { abbreviation: 'FAD', meaning: 'Flea allergy dermatitis', plain: 'Allergic skin disease associated with flea exposure' },
  { abbreviation: 'HGE', meaning: 'Hemorrhagic gastroenteritis', plain: 'Historical name for acute hemorrhagic diarrhea syndrome', note: 'AHDS is the current term commonly used for this syndrome.' },
  { abbreviation: 'US', meaning: 'Ultrasound', plain: 'Diagnostic ultrasonography' },
  { abbreviation: 'AP', meaning: 'Acupuncture', plain: 'At SVC, AP means acupuncture', note: 'The abbreviation may have other meanings elsewhere.' },
  { abbreviation: 'CHF', meaning: 'Congestive heart failure', plain: 'Clinical syndrome caused by heart disease and fluid congestion' },
  { abbreviation: 'ARF', meaning: 'Acute renal failure', plain: 'Older shorthand for an acute loss of kidney function', note: 'Acute kidney injury, or AKI, is commonly used in current medical terminology.' },
  { abbreviation: 'DJD', meaning: 'Degenerative joint disease', plain: 'Degenerative disease affecting a joint' },
  { abbreviation: 'OA', meaning: 'Osteoarthritis', plain: 'Degenerative joint disease with structural joint changes' },
  { abbreviation: 'IVDD', meaning: 'Intervertebral disc disease', plain: 'Disease affecting the discs between vertebrae' },
  { abbreviation: 'FHO/FHNE', meaning: 'Femoral head ostectomy or femoral head and neck excision', plain: 'Surgical removal of the femoral head, with or without the neck' },
]

export const speciesGroups = [
  { title: 'Cats', entries: [
    { abbreviation: 'FeLV', meaning: 'Feline leukemia virus', plain: 'Feline viral disease terminology' },
    { abbreviation: 'FIV', meaning: 'Feline immunodeficiency virus', plain: 'Feline viral disease terminology' },
    { abbreviation: 'FLUTD', meaning: 'Feline lower urinary tract disease', plain: 'Umbrella term for lower urinary tract disorders in cats' },
    { abbreviation: 'FVRCP/FeRCP', meaning: 'Feline viral rhinotracheitis, calicivirus, and panleukopenia', plain: 'Feline combination vaccine terminology' },
  ] },
  { title: 'Dogs', entries: [
    { abbreviation: 'RV', meaning: 'Rabies vaccine', plain: 'Rabies vaccination' },
    { abbreviation: 'KC', meaning: 'Kennel cough or Bordetella', plain: 'Canine respiratory preventive-care shorthand' },
    { abbreviation: 'DHLPP', meaning: 'Distemper, hepatitis/adenovirus, leptospirosis, parainfluenza, and parvovirus', plain: 'Canine combination vaccine terminology', note: 'Components and naming can vary; verify the product and record.' },
    { abbreviation: 'DHPP', meaning: 'Distemper, hepatitis/adenovirus, parainfluenza, and parvovirus', plain: 'Canine combination vaccine terminology', note: 'Components and naming can vary; verify the product and record.' },
    { abbreviation: 'RS', meaning: 'Rattlesnake', plain: 'At SVC, RS refers to the rattlesnake vaccine' },
  ] },
  { title: 'Horses', entries: [
    { abbreviation: 'EEE', meaning: 'Eastern equine encephalomyelitis', plain: 'Equine disease and vaccine terminology' },
    { abbreviation: 'WEE', meaning: 'Western equine encephalomyelitis', plain: 'Equine disease and vaccine terminology' },
    { abbreviation: 'VEE', meaning: 'Venezuelan equine encephalomyelitis', plain: 'Equine disease and vaccine terminology' },
    { abbreviation: 'EHV', meaning: 'Equine herpesvirus', plain: 'Equine viral disease terminology' },
    { abbreviation: 'WNV', meaning: 'West Nile virus', plain: 'Equine disease and vaccine terminology' },
    { abbreviation: 'EIA', meaning: 'Equine infectious anemia', plain: 'Often associated with Coggins testing' },
    { abbreviation: 'EPM', meaning: 'Equine protozoal myeloencephalitis', plain: 'Equine neurologic disease terminology' },
    { abbreviation: 'HYPP', meaning: 'Hyperkalemic periodic paralysis', plain: 'Inherited equine muscle disease terminology' },
  ] },
  { title: 'Cattle', entries: [
    { abbreviation: 'BSE', meaning: 'Breeding soundness examination', plain: 'At SVC, BSE means breeding soundness examination in cattle records', note: 'The abbreviation may have other meanings elsewhere.' },
    { abbreviation: 'Bruc', meaning: 'Brucellosis or Bangs', plain: 'Specify whether the record refers to testing or vaccination' },
    { abbreviation: 'Trich', meaning: 'Tritrichomonas foetus test', plain: 'Cattle reproductive-disease testing' },
    { abbreviation: 'IBR/BVD', meaning: 'Infectious bovine rhinotracheitis and bovine viral diarrhea', plain: 'At SVC, IBR/BVD identifies a respiratory combination vaccine', note: 'The SVC reference also lists parainfluenza III and bovine respiratory syncytial virus components.' },
    { abbreviation: 'Blackleg/9-way', meaning: 'Clostridial combination vaccine terminology', plain: 'Verify the exact vaccine product and components' },
  ] },
]

export const abbreviationLesson = {
  id: 'common-clinic-abbreviations',
  courseId: 'medical-terminology',
  title: 'Common Clinic Abbreviations',
  eyebrow: 'Medical Terminology · Lesson 4',
  summary: 'Learn to interpret SVC’s internal shorthand and translate it into complete medical language.',
  estimatedMinutes: 24,
  riskLevel: 'Medication safety',
  species: ['Dogs, cats, horses & cattle', 'SVC internal terminology'],
  reviewStatus: 'SVC source aligned',
  reviewedAt: 'August 16, 2026',
  reviewerRole: 'SVC source alignment and medication-safety review',
  status: 'approved',
  objectives: [
    'Expand common SVC abbreviations into their full meanings.',
    'Group abbreviations by route, frequency, procedure, diagnostic test, condition, and species.',
    'Translate internal medication abbreviations into fully written prescription and client instructions.',
    'Recognize SVC-specific abbreviations and terms whose meaning depends on context.',
    'Stop and verify an unfamiliar abbreviation instead of guessing.',
  ],
  sections: [
    { id: 'internal-rule', title: 'Internal-use rule' }, { id: 'routes', title: 'Medication routes' },
    { id: 'frequencies', title: 'Frequency and directions' }, { id: 'procedures', title: 'Procedures and diagnostics' },
    { id: 'conditions', title: 'Conditions and context' }, { id: 'species', title: 'Species terminology' },
    { id: 'translations', title: 'Translate the shorthand' },
  ],
  internalRule: {
    title: 'Internal shorthand only',
    text: 'These abbreviations help SVC team members read and understand internal medical records. Prescriptions, medication labels, pharmacy communications, discharge instructions, and client-facing directions must write out the complete instructions.',
    checklist: ['Medication and strength', 'Dose', 'Route written in full', 'Frequency written in full', 'Duration or stopping instructions'],
  },
  translations: [
    { title: 'Medication direction', internal: 'Medication PO BID.', external: 'Give the prescribed medication by mouth twice daily.', why: 'The route and frequency are written out for anyone outside the internal clinic system.' },
    { title: 'Diagnostic plan', internal: 'CBC, panel, UA.', external: 'Complete blood count, SVC comprehensive chemistry panel, and urinalysis.', why: 'The expanded wording identifies each diagnostic test and clarifies what “panel” means at SVC.' },
    { title: 'Patient history', internal: 'HBC; ADR since yesterday.', external: 'The patient was reportedly hit by a car and has reportedly not been acting normally since yesterday.', why: 'The translation preserves the source and timeline. The record should then describe the specific signs that are known.' },
    { title: 'Preventive status', internal: 'DHPP and RV UTD per owner.', external: 'The owner reports that the dog’s combination vaccine and rabies vaccine are current. Supporting records are not available.', why: 'The complete wording explains both abbreviations and preserves that the status is client-reported.' },
  ],
  questions: [
    { id: 'q-po', concept: 'Medication routes', prompt: 'What does PO mean in SVC’s internal shorthand?', options: ['By mouth', 'Under the skin', 'Into a muscle', 'Through the rectum'], correctAnswer: 'By mouth', explanation: 'PO comes from per os and indicates an oral route. On prescriptions and client instructions, write “by mouth.”' },
    { id: 'q-prescription', concept: 'Medication safety', prompt: 'Which wording belongs on a prescription or client medication label?', options: ['Give by mouth twice daily.', 'Give PO BID.', 'Give PO SID.', 'Give PRN PO.'], correctAnswer: 'Give by mouth twice daily.', explanation: 'Route and frequency abbreviations are for internal recognition. Write complete instructions when they leave the clinic system.' },
    { id: 'q-context', concept: 'Context-dependent shorthand', prompt: 'You encounter an unfamiliar abbreviation in a patient record. What should you do?', options: ['Confirm its meaning from the clinic context or an approved source.', 'Choose the most common online meaning.', 'Remove it from the record.', 'Assume it is a medication route.'], correctAnswer: 'Confirm its meaning from the clinic context or an approved source.', explanation: 'The same letters can mean different things in different settings. Never guess at an unfamiliar abbreviation.' },
    { id: 'q-cbc', concept: 'Diagnostics', prompt: 'What does CBC stand for?', options: ['Complete blood count', 'Comprehensive body check', 'Canine blood chemistry', 'Clinical baseline count'], correctAnswer: 'Complete blood count', explanation: 'CBC is the internal abbreviation for complete blood count.' },
    { id: 'q-bse', concept: 'SVC-specific context', prompt: 'In the SVC cattle list, what does BSE mean?', options: ['Breeding soundness examination', 'Bovine spongiform encephalopathy', 'Basic serum evaluation', 'Bovine surgical examination'], correctAnswer: 'Breeding soundness examination', explanation: 'At SVC, BSE is cattle shorthand for a breeding soundness examination. This is why context must be confirmed.' },
  ],
  sources: [
    { title: 'Common Abbreviations', organization: 'SVC', note: 'SVC reference for routes, frequency terms, procedures, conditions, and species abbreviations.' },
    { title: 'A Microgram of Prevention Is Worth a Milligram of Cure', organization: 'U.S. Food and Drug Administration', url: 'https://www.fda.gov/animal-veterinary/resources-you/microgram-prevention-worth-milligram-cure-preventing-medication-errors-animals', note: 'Documents veterinary medication errors caused by unclear abbreviations and recommends complete prescription wording.' },
    { title: 'Use of Abbreviations, Acronyms, Symbols and Dose Designations', organization: 'The Joint Commission', url: 'https://www.jointcommission.org/en-us/knowledge-library/support-center/standards-interpretation/standards-faqs/000001229', note: 'Supports standardized terminology and identifies error-prone medication abbreviations.' },
    { title: 'Acute Hemorrhagic Diarrhea Syndrome in Dogs', organization: 'Merck Veterinary Manual', url: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-large-intestine-in-small-animals/acute-hemorrhagic-diarrhea-syndrome-in-dogs', note: 'Supports the current AHDS term and the historical HGE name.' },
  ],
}

export const abbreviationReferenceGroups = [
  { title: 'Medication routes', entries: medicationRoutes, internal: true },
  { title: 'Medication frequency', entries: medicationFrequencies, internal: true },
  { title: 'Clinic directions', entries: clinicDirections },
  { title: 'Procedures and diagnostics', entries: procedureEntries },
  { title: 'Conditions and treatments', entries: conditionEntries },
  ...speciesGroups,
]

export const abbreviationReferenceEntries = abbreviationReferenceGroups.flatMap((group) =>
  group.entries.map((entry) => ({ ...entry, category: group.title, internal: Boolean(group.internal) })),
)
