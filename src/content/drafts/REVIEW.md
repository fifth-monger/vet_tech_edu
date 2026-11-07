# Unpublished species drafts

Status: draft for review. These four modules are in the repository so they can be read. They are not enabled, not approved, and not clinic protocol.

The source is a supplemental lecture, "McCurnin's Chapter 23, Care of Exotic Animals" (Sinclair College Veterinary Technology, YouTube, uploaded July 24, 2020, 1:03:49), based on the 2014 textbook: https://youtu.be/fBiSVCKSn7k

Every module carries this notice: "Lecture from 2020 using the 2014 textbook. See the Current notes."

No clinical sign-off is claimed. Dr. Thoms has not approved this text. Sinton Veterinary Clinic has not approved it. No one was contacted for this change.

`validateLesson` is unchanged. It still rejects any lesson whose status is not `approved`, and it still requires review metadata. These modules are `draft` and have no `reviewedAt` or `reviewerRole`, so they fail that gate. They are not imported by the app shell, course list, routes, or progress storage.

## Track mapping

There is no exotic course. The planned dashboard tracks stay Avian, Reptile, Rabbit, and Rodent.

| Draft id | Track label | Proposed course id | Video span | File |
|---|---|---|---|---|
| `avian-clinic-intake` | Avian | `avian` | 0:00-28:07 | `src/content/drafts/avianClinicIntake.js` |
| `reptile-clinic-intake` | Reptile | `reptile` | 28:07-41:20 | `src/content/drafts/reptileClinicIntake.js` |
| `rabbit-handling-preanesthetic-and-route-safety` | Rabbit | `rabbit` | 41:20-end; topics about 54:58, 56:00, and 56:10 | `src/content/drafts/rabbitHandlingSafety.js` |
| `guinea-pig-vitamin-c` | Rodent | `rodent` | 41:20-end; no tighter vitamin C timestamp was supplied | `src/content/drafts/guineaPigVitaminC.js` |

Live lesson ids are unchanged: `anatomical-directional-terms`, `understanding-medical-records`, `building-medical-words`, `common-clinic-abbreviations`, `radiograph-projection-terminology`. Progress storage stays `vet-tech-learning:progress`, schema version 1.

## What a reviewer will find in each module

- Goals in `goals` and `objectives`
- Species-specific `historyPrompts`
- Timestamped `video` citation
- `currentNotes` with the brief's current-source URLs
- Single-choice `questions` (`correctAnswer` is one of `options`, plus `explanation`)
- `referenceGroups` of `{ title, items }`
- `supervisedChecklist` with `recordsCompetency: false` and `storedInProgress: false`
- `sources`, `reviewItems`, `status: "draft"`, `publicationState: "unpublished-draft"`

The supervised checklist is documentation only. It does not create a competency record or a progress field.

## Kept out on purpose

Recorded in `src/content/drafts/omissions.js`. These are not taught:

- Ferret diet claims from brief section C5, including kitten or cat food
- Brief quiz Q6, and any statement that a diet prevents insulinoma
- A universal small-mammal diet or history
- Facts for hamsters, gerbils, mice, rats, prairie dogs, hedgehogs, or sugar gliders
- Doses and actionable invasive-procedure steps
- The unsupported 85% disease statistic
- An absolute "never fast" rule
- A blanket statement that all penicillins are contraindicated
- A broad renal-portal rule about never injecting the back half

Ferret diet is only this open question: what ferret diet, if any, should the clinic teach? `ferretDietPendingQuestion.teachesClaim` is false.

## Open review items

### Avian

- Veterinary review before any publication
- Transport tips and towel-restraint holds were not in the brief, so none are written
- Dropping appearance standards were not specified
- Confirm clinic psittacosis cleaning against the CDC pages
- Crop wash, cloacal swab, venipuncture, and anesthesia stay overview names

Sources: the lecture; https://www.cdc.gov/psittacosis/about/index.html ; https://www.cdc.gov/psittacosis/prevention/index.html

### Reptile

- Veterinary review before any publication
- No species-specific holds
- No temperature, humidity, or UV numbers
- No injection-site rule
- Confirm clinic Salmonella hygiene against the CDC page

Source: the lecture; https://www.cdc.gov/healthy-pets/about/reptiles-and-amphibians.html

The CDC page also mentions amphibians. This module does not add amphibian husbandry.

### Rabbit

- Veterinary review before any publication
- Confirm the clinic food-removal interval. Lecture: 30 minutes to 1 hour. Merck: usually 1 to 2 hours. University of Minnesota: 1 to 4 hours. A short removal to clear the mouth is not presented as automatically wrong. Prolonged fasting is the discouraged practice.
- Confirm whether the clinic uses tonic immobility. It is a fear response, not relaxation.
- Rodent antibiotic routes were not verified and are not taught as a rule
- No product names, doses, or injection sites

Sources: the lecture; Merck rabbit management; University of Minnesota rabbit anesthesia; RSPCA tonic immobility; Southampton ePrint 54860; Merck bacterial and mycotic diseases of rabbits; Merck illness of rabbits. URLs are on the module.

### Guinea pig (rodent track)

- Veterinary review before any publication
- Confirm clinic vitamin C practice and keep amounts out unless a separate dosing review exists
- Deficiency signs are for reporting, not diagnosis
- Do not apply this module to other rodent species

Sources: the lecture; https://www.merckvetmanual.com/exotic-and-laboratory-animals/guinea-pigs/noninfectious-diseases-of-guinea-pigs ; https://www.merckvetmanual.com/all-other-pets/guinea-pigs/diet-for-a-guinea-pig

## Not in this change

- No new routes
- No addition to the course `availableLessons` list
- No live lesson registry
- No progress-schema change
- No edit to `validateLesson`
- No merge and no deploy
- Pull request #1 is not included
