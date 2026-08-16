export function scoreQuiz(questions, answers) {
  const results = questions.map((question) => ({
    id: question.id,
    concept: question.concept,
    answer: answers[question.id] ?? null,
    correct: answers[question.id] === question.correctAnswer,
  }))
  const correctCount = results.filter((result) => result.correct).length
  const percentage = questions.length ? Math.round((correctCount / questions.length) * 100) : 0
  return {
    correctCount,
    total: questions.length,
    percentage,
    results,
    missedConcepts: [...new Set(results.filter((result) => !result.correct).map((result) => result.concept))],
  }
}
