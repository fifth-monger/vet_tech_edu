// Small pure helpers that turn saved progress into numbers for the screens.
// "Pure" means: same input -> same output, no React, no localStorage. Easy to test.

// How many lessons in the list are marked complete?
export function countCompletedLessons(lessons, progress) {
  return lessons.filter((lesson) => progress.lessons[lesson.id]?.complete).length
}

// Overall course percentage. A started lesson counts as 35% of one lesson,
// a completed lesson counts as a whole lesson (same rule the app already used).
export function courseProgressPercent(lessons, progress) {
  if (!lessons.length) return 0
  const units = lessons.reduce((total, lesson) => {
    const saved = progress.lessons[lesson.id]
    return total + (saved?.complete ? 1 : saved?.started ? 0.35 : 0)
  }, 0)
  return Math.round((units / lessons.length) * 100)
}

// The first lesson that is not complete yet, or null when everything is done.
export function findNextLesson(lessons, progress) {
  return lessons.find((lesson) => !progress.lessons[lesson.id]?.complete) ?? null
}

// Missed concepts grouped by lesson. Lessons with nothing missed are left out.
// Returns: [{ lesson, concepts: ['...'], bestScore }]
export function collectMissedConcepts(lessons, progress) {
  return lessons
    .map((lesson) => {
      const saved = progress.lessons[lesson.id]
      return { lesson, concepts: saved?.missedConcepts ?? [], bestScore: saved?.bestScore }
    })
    .filter((group) => group.concepts.length > 0)
}

// Highest best score across all lessons, or null if no quiz has been taken.
export function highestBestScore(lessons, progress) {
  const scores = lessons.map((lesson) => progress.lessons[lesson.id]?.bestScore).filter((score) => score !== undefined)
  return scores.length ? Math.max(...scores) : null
}
