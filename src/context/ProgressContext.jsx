import { useCallback, useMemo, useState } from 'react'
import { clearProgress, createDefaultProgress, loadProgress, saveProgress } from '../services/progress.js'
import { ProgressContext } from './progress-context.js'

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress)
  const update = useCallback((updater) => { setProgress((current) => saveProgress(updater(current))) }, [])
  const visit = useCallback((path, title) => { update((current) => ({ ...current, lastVisited: { path, title } })) }, [update])
  const startLesson = useCallback((lessonId, path, title) => {
    update((current) => ({
      ...current,
      lastVisited: { path, title },
      lessons: { ...current.lessons, [lessonId]: { ...current.lessons[lessonId], started: true, startedAt: current.lessons[lessonId]?.startedAt ?? new Date().toISOString() } },
    }))
  }, [update])
  const recordQuiz = useCallback((lessonId, result) => {
    update((current) => {
      const existing = current.lessons[lessonId] ?? {}
      return {
        ...current,
        lastVisited: { path: `/lessons/${lessonId}/reference`, title: 'Open your reference card' },
        lessons: { ...current.lessons, [lessonId]: { ...existing, started: true, complete: true, attempts: (existing.attempts ?? 0) + 1, bestScore: Math.max(existing.bestScore ?? 0, result.percentage), latestScore: result.percentage, missedConcepts: result.missedConcepts, completedAt: new Date().toISOString() } },
      }
    })
  }, [update])
  const reset = useCallback(() => { clearProgress(); setProgress(createDefaultProgress()) }, [])
  const value = useMemo(() => ({ progress, visit, startLesson, recordQuiz, reset }), [progress, visit, startLesson, recordQuiz, reset])
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}
