import { describe, expect, it } from 'vitest'
import { lesson } from '../content/curriculum.js'
import { validateLesson } from './contentValidation.js'

describe('lesson content validation', () => {
  it('publishes the sourced directional terms lesson', () => {
    expect(validateLesson(lesson)).toEqual([])
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
