// One shared list of every published lesson, in course order.
// Pages import this list instead of importing lessons one by one,
// so a new lesson only needs to be added here to be counted everywhere.
import { lesson as directionalTermsLesson } from './curriculum.js'
import { medicalRecordLesson } from './medicalRecord.js'
import { wordBuildingLesson } from './wordBuilding.js'
import { abbreviationLesson } from './clinicAbbreviations.js'
import { radiographLesson } from './radiographTerminology.js'

export const lessons = [
  directionalTermsLesson,
  medicalRecordLesson,
  wordBuildingLesson,
  abbreviationLesson,
  radiographLesson,
]
