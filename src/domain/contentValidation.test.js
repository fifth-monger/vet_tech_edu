import { describe, expect, it } from 'vitest'
import { lesson } from '../content/curriculum.js'
import { medicalRecordLesson } from '../content/medicalRecord.js'
import { wordBuildingLesson } from '../content/wordBuilding.js'
import { abbreviationLesson } from '../content/clinicAbbreviations.js'
import { validateLesson } from './contentValidation.js'

describe('lesson content validation', () => {
  it('publishes the sourced directional terms lesson', () => {
    expect(validateLesson(lesson)).toEqual([])
  })

  it('publishes the SVC-aligned medical-record language lesson', () => {
    expect(validateLesson(medicalRecordLesson)).toEqual([])
  })

  it('publishes the sourced medical word-building lesson', () => {
    expect(validateLesson(wordBuildingLesson)).toEqual([])
  })

  it('publishes the SVC clinic-abbreviation lesson', () => {
    expect(validateLesson(abbreviationLesson)).toEqual([])
  })

  it('rejects an unapproved lesson with a broken answer', () => {
    const invalidLesson = {
      ...lesson,
      status: 'draft',
      questions: [{
        id: 'broken',
        options: ['One'],
        correctAnswer: 'Two',
        explanation: '',
      }],
    }

    expect(validateLesson(invalidLesson)).toContain('Lesson must be approved.')
    expect(validateLesson(invalidLesson)).toContain(
      'Question broken has an invalid correct answer.',
    )
  })
})
