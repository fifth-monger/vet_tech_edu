import { describe, expect, it } from 'vitest'
import { scoreQuiz } from './quiz.js'

const questions = [
  { id: 'one', concept: 'Axis', correctAnswer: 'Cranial' },
  { id: 'two', concept: 'Axis', correctAnswer: 'Caudal' },
  { id: 'three', concept: 'Depth', correctAnswer: 'Deep' },
]

describe('scoreQuiz', () => {
  it('scores answers and keeps unique missed concepts', () => {
    const result = scoreQuiz(questions, { one: 'Cranial', two: 'Cranial', three: 'Superficial' })
    expect(result.correctCount).toBe(1)
    expect(result.percentage).toBe(33)
    expect(result.missedConcepts).toEqual(['Axis', 'Depth'])
  })
  it('handles an empty question set', () => {
    expect(scoreQuiz([], {})).toMatchObject({ correctCount: 0, total: 0, percentage: 0 })
  })
})
