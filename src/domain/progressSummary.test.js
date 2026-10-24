import { describe, expect, it } from 'vitest'
import { collectMissedConcepts, countCompletedLessons, courseProgressPercent, findNextLesson, highestBestScore } from './progressSummary.js'
import { lessons as realLessons } from '../content/lessons.js'

// Tiny fake lessons keep the tests easy to read.
const lessons = [{ id: 'a' }, { id: 'b' }, { id: 'c' }]
const progress = {
  lessons: {
    a: { started: true, complete: true, bestScore: 80, missedConcepts: ['Axis'] },
    b: { started: true },
    c: undefined,
  },
}
const empty = { lessons: {} }

describe('progress summary helpers', () => {
  it('counts only completed lessons', () => {
    expect(countCompletedLessons(lessons, progress)).toBe(1)
    expect(countCompletedLessons(lessons, empty)).toBe(0)
  })
  it('calculates course percentage across every lesson', () => {
    // (1 + 0.35 + 0) / 3 = 45%
    expect(courseProgressPercent(lessons, progress)).toBe(45)
    expect(courseProgressPercent([], progress)).toBe(0)
  })
  it('finds the first unfinished lesson', () => {
    expect(findNextLesson(lessons, progress).id).toBe('b')
    expect(findNextLesson(lessons, { lessons: { a: { complete: true }, b: { complete: true }, c: { complete: true } } })).toBeNull()
  })
  it('collects missed concepts from every lesson, grouped by lesson', () => {
    const withTwo = { lessons: { ...progress.lessons, c: { complete: true, bestScore: 60, missedConcepts: ['SOAP', 'Abbreviations'] } } }
    const groups = collectMissedConcepts(lessons, withTwo)
    expect(groups.map((group) => group.lesson.id)).toEqual(['a', 'c'])
    expect(groups[1].concepts).toEqual(['SOAP', 'Abbreviations'])
  })
  it('finds the highest best score or null', () => {
    expect(highestBestScore(lessons, progress)).toBe(80)
    expect(highestBestScore(lessons, empty)).toBeNull()
  })
  it('shared lesson list has every lesson once', () => {
    const ids = realLessons.map((lesson) => lesson.id)
    expect(ids).toHaveLength(5)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
