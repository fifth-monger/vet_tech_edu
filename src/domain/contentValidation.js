export function validateLesson(lesson) {
  const issues = []

  if (!lesson?.id) issues.push('Lesson id is required.')
  if (!lesson?.title) issues.push('Lesson title is required.')
  if (lesson?.status !== 'approved') issues.push('Lesson must be approved.')
  if (!lesson?.objectives?.length) issues.push('At least one objective is required.')
  if (!lesson?.sections?.length) issues.push('At least one section is required.')
  if (!lesson?.sources?.length) issues.push('At least one source is required.')
  if (!lesson?.reviewedAt || !lesson?.reviewerRole) {
    issues.push('Review metadata is incomplete.')
  }

  lesson?.questions?.forEach((question) => {
    if (!question.options?.includes(question.correctAnswer)) {
      issues.push(`Question ${question.id} has an invalid correct answer.`)
    }
    if (!question.explanation) {
      issues.push(`Question ${question.id} needs an explanation.`)
    }
  })

  return issues
}
