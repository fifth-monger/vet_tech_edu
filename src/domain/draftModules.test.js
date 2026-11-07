import { readdirSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { draftModules } from '../content/drafts/index.js'
import { editorialOmissions, ferretDietPendingQuestion } from '../content/drafts/omissions.js'
import { abbreviationLesson } from '../content/clinicAbbreviations.js'
import { course, lesson, speciesTracks } from '../content/curriculum.js'
import { medicalRecordLesson } from '../content/medicalRecord.js'
import { radiographLesson } from '../content/radiographTerminology.js'
import { wordBuildingLesson } from '../content/wordBuilding.js'
import { STORAGE_KEY, createDefaultProgress } from '../services/progress.js'
import { validateLesson } from './contentValidation.js'

const srcRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const datedNotice = 'Lecture from 2020 using the 2014 textbook. See the Current notes.'
const liveLessons = [lesson, medicalRecordLesson, wordBuildingLesson, abbreviationLesson, radiographLesson]
const liveIds = [
  'anatomical-directional-terms',
  'understanding-medical-records',
  'building-medical-words',
  'common-clinic-abbreviations',
  'radiograph-projection-terminology',
]
const draftIds = [
  'avian-clinic-intake',
  'reptile-clinic-intake',
  'rabbit-handling-preanesthetic-and-route-safety',
  'guinea-pig-vitamin-c',
]

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'drafts') continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path, files)
    else if (/\.(js|jsx|css|md)$/.test(entry.name) && entry.name !== 'draftModules.test.js') files.push(path)
  }
  return files
}

function byId(module, id) {
  return module.questions.find((question) => question.id === id)
}

describe('unpublished species drafts', () => {
  it('keeps the approved-only gate and the live lessons', () => {
    const gate = readFileSync(join(srcRoot, 'domain/contentValidation.js'), 'utf8')
    expect(gate).toContain("lesson?.status !== 'approved'")
    expect(gate).not.toContain("status === 'draft'")
    expect(liveLessons.map((item) => item.id)).toEqual(liveIds)
    for (const item of liveLessons) {
      expect(item.status).toBe('approved')
      expect(validateLesson(item)).toEqual([])
    }
    expect(course.id).toBe('medical-terminology')
    expect(course.lessonCount).toBe(5)
    expect(speciesTracks).toEqual([
      ['Avian', 'Feathered patients'],
      ['Reptile', 'Taxon-aware care'],
      ['Rabbit', 'Lagomorph focus'],
      ['Rodent', 'Species-specific foundations'],
    ])
    expect(STORAGE_KEY).toBe('vet-tech-learning:progress')
    expect(createDefaultProgress()).toEqual({ schemaVersion: 1, updatedAt: null, lastVisited: null, lessons: {} })
  })

  it('maps four unpublished drafts onto the planned tracks and no exotic course', () => {
    expect(draftModules.map((item) => item.id)).toEqual(draftIds)
    expect(draftModules.map((item) => [item.track, item.courseId])).toEqual([
      ['Avian', 'avian'],
      ['Reptile', 'reptile'],
      ['Rabbit', 'rabbit'],
      ['Rodent', 'rodent'],
    ])
    expect(draftModules.map((item) => item.species)).toEqual([['Birds'], ['Reptiles'], ['Rabbit'], ['Guinea pig']])
    for (const item of draftModules) {
      expect(item.status).toBe('draft')
      expect(item.publicationState).toBe('unpublished-draft')
      expect(item.enabled).toBe(false)
      expect(item.reviewedAt).toBeUndefined()
      expect(item.reviewerRole).toBeUndefined()
      expect(item.courseId).not.toBe('exotic')
      expect(item.datedSourceNotice).toBe(datedNotice)
      expect(item.video.url).toBe('https://youtu.be/fBiSVCKSn7k')
      expect(item.video.uploaded).toBe('July 24, 2020')
      expect(item.video.textbook).toContain('2014')
      expect(item.goals.length).toBeGreaterThan(0)
      expect(item.objectives).toEqual(item.goals)
      expect(item.historyPrompts.length).toBeGreaterThan(0)
      expect(item.referenceGroups.every((group) => group.title && group.items.length > 0)).toBe(true)
      expect(item.supervisedChecklist.recordsCompetency).toBe(false)
      expect(item.supervisedChecklist.storedInProgress).toBe(false)
      expect(validateLesson(item).sort()).toEqual(['Lesson must be approved.', 'Review metadata is incomplete.'].sort())
    }
    const histories = draftModules.map((item) => JSON.stringify(item.historyPrompts))
    expect(new Set(histories).size).toBe(4)
  })

  it('keeps single-choice answers inside the supplied claims', () => {
    const avian = draftModules[0]
    const reptile = draftModules[1]
    const rabbit = draftModules[2]
    const guineaPig = draftModules[3]
    expect(avian.video).toMatchObject({ segmentStart: '0:00', segmentEnd: '28:07' })
    expect(reptile.video).toMatchObject({ segmentStart: '28:07', segmentEnd: '41:20' })
    expect(rabbit.video.topicTimestamps.map((topic) => topic.at)).toEqual(['about 54:58', 'about 56:00', 'about 56:10'])
    expect(guineaPig.video.topicTimestamps[0].at).toContain('does not give a separate timestamp')

    const expected = [
      [avian, 'q-psittacosis-route', 'Mostly by breathing dust from dried bird droppings or secretions'],
      [avian, 'q-psittacosis-shedding', 'Yes'],
      [avian, 'q-dry-sweeping', 'It puts infectious dust in the air. Wet the surfaces first.'],
      [avian, 'q-dropping-parts', 'Feces, urates, and liquid urine'],
      [reptile, 'q-salmonella-carriage', 'Yes'],
      [reptile, 'q-salmonella-risk-groups', 'Children under 5, adults over 65, and immunocompromised people'],
      [reptile, 'q-thermal-gradient', 'Reptiles regulate body temperature by moving between warmer and cooler areas'],
      [rabbit, 'q-short-food-removal', 'No. A short removal to clear the mouth is described. Prolonged fasting is what is discouraged. Follow the DVM protocol.'],
      [rabbit, 'q-tonic-immobility', 'No. Tonic immobility is a fear response.'],
      [rabbit, 'q-penicillin-route', 'No. Oral penicillin-family antibiotics are dangerous. Some injectable penicillins a veterinarian prescribes are used. The assistant never picks or changes the route.'],
      [guineaPig, 'q-vitamin-c-synthesis', 'They cannot make it themselves.'],
      [guineaPig, 'q-rabbit-pellets', 'They do not have enough vitamin C.'],
      [guineaPig, 'q-vitamin-c-amount', 'The DVM. This lesson does not give an amount.'],
    ]
    expect(avian.questions).toHaveLength(4)
    expect(reptile.questions).toHaveLength(3)
    expect(rabbit.questions).toHaveLength(3)
    expect(guineaPig.questions).toHaveLength(3)
    for (const [module, id, correctAnswer] of expected) {
      const question = byId(module, id)
      expect(question.options).toContain(correctAnswer)
      expect(question.correctAnswer).toBe(correctAnswer)
      expect(question.explanation.length).toBeGreaterThan(0)
      expect(question.concept.length).toBeGreaterThan(0)
    }
    expect(JSON.stringify(rabbit)).toContain('not automatically wrong')
    expect(JSON.stringify(rabbit)).toContain('It is not relaxation.')
    expect(JSON.stringify(rabbit)).toContain('never chooses the drug')
    expect(JSON.stringify(guineaPig)).toContain('cannot make vitamin C')
    expect(JSON.stringify(guineaPig)).toContain('Water supplementation is not recommended.')
  })

  it('records exclusions without teaching them', () => {
    expect(editorialOmissions.every((item) => item.teaching === false)).toBe(true)
    expect(ferretDietPendingQuestion).toMatchObject({
      id: 'ferret-diet-pending-dvm',
      status: 'pending-dvm-question',
      teachesClaim: false,
      omittedQuizId: 'brief-q6',
    })
    expect(draftIds).not.toContain(ferretDietPendingQuestion.id)
    const taught = JSON.stringify(draftModules)
    const banned = [
      /ferret/i,
      /insulinoma/i,
      /kitten/i,
      /85\s*%/,
      /never fast/i,
      /renal-portal/i,
      /renal portal/i,
      /hamster/i,
      /gerbil/i,
      /hedgehog/i,
      /sugar glider/i,
      /prairie dog/i,
      /\bmouse\b/i,
      /\bmice\b/i,
      /\brat\b/i,
      /\brats\b/i,
      /mg\/kg/i,
      /step-by-step/i,
      /\b\d+(?:\.\d+)?\s*(?:mg|mcg|µg|ug|iu|ml|mls|cc)\b/i,
    ]
    for (const pattern of banned) expect(taught).not.toMatch(pattern)
    expect(taught).not.toContain('all penicillins are contraindicated')
    const correctAnswers = draftModules.flatMap((item) => item.questions.map((question) => question.correctAnswer)).join('\n')
    expect(correctAnswers).not.toMatch(/all penicillins are forbidden/i)
    expect(correctAnswers).not.toMatch(/any food removal is always wrong/i)
  })

  it('does not register or expose the drafts in the live app', () => {
    const liveText = walk(srcRoot).map((path) => readFileSync(path, 'utf8')).join('\n')
    expect(liveText).not.toContain('content/drafts')
    for (const id of draftIds) expect(liveText).not.toContain(id)
    const app = readFileSync(join(srcRoot, 'App.jsx'), 'utf8')
    const lessonPaths = [...app.matchAll(/path="(lessons\/[^"]+)"/g)].map((match) => match[1])
    expect(lessonPaths).toEqual([
      'lessons/anatomical-directional-terms',
      'lessons/anatomical-directional-terms/quiz',
      'lessons/anatomical-directional-terms/reference',
      'lessons/understanding-medical-records',
      'lessons/understanding-medical-records/quiz',
      'lessons/understanding-medical-records/reference',
      'lessons/building-medical-words',
      'lessons/building-medical-words/quiz',
      'lessons/building-medical-words/reference',
      'lessons/common-clinic-abbreviations',
      'lessons/common-clinic-abbreviations/quiz',
      'lessons/common-clinic-abbreviations/reference',
      'lessons/radiograph-projection-terminology',
      'lessons/radiograph-projection-terminology/quiz',
      'lessons/radiograph-projection-terminology/reference',
    ])
    const coursePage = readFileSync(join(srcRoot, 'pages/CoursePage.jsx'), 'utf8')
    expect(coursePage).toContain('const availableLessons = [lesson, medicalRecordLesson, wordBuildingLesson, abbreviationLesson, radiographLesson]')
    expect(coursePage).not.toContain('draftModules')
    expect(coursePage).not.toContain('content/drafts')
  })
})
