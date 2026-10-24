import { lessons } from '../content/lessons.js'
import { collectMissedConcepts, countCompletedLessons } from '../domain/progressSummary.js'
import { useProgress } from '../context/progress-context.js'
import { ButtonLink, PageIntro, Pill } from '../components/PageElements.jsx'
import { Icon } from '../components/Icon.jsx'

export function ReviewPage() {
  const { progress } = useProgress()
  // Missed concepts from EVERY lesson, grouped by lesson.
  const groups = collectMissedConcepts(lessons, progress)
  const anyComplete = countCompletedLessons(lessons, progress) > 0
  return <div className="page-container page-stack"><PageIntro eyebrow="Focused review" title="Practice what needs another look" description="Missed concepts appear here after a knowledge check. Review is separate from your original attempt." />
    {groups.length > 0 ? groups.map(({ lesson, concepts, bestScore }) => <section className="review-list" key={lesson.id} aria-labelledby={`review-${lesson.id}`}><div className="section-heading section-heading--split compact-heading"><div><p className="eyebrow">{lesson.title}</p><h2 id={`review-${lesson.id}`}>{concepts.length} concept{concepts.length === 1 ? '' : 's'} to revisit</h2></div><Pill tone="orange">Best score {bestScore}%</Pill></div>{concepts.map((concept, index) => <article className="review-row" key={concept}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{concept}</h3><p>Revisit this idea in the lesson or reference card, then try the knowledge check again.</p></div></article>)}<div className="button-row"><ButtonLink to={`/lessons/${lesson.id}/reference`}>Open reference card</ButtonLink><ButtonLink to={`/lessons/${lesson.id}/quiz`} variant="secondary">Retry quiz</ButtonLink></div></section>)
    : <section className="empty-state"><span><Icon name="book" size={34} /></span><h2>{anyComplete ? 'Nothing is waiting for review.' : 'Your review queue is empty.'}</h2><p>{anyComplete ? 'You cleared every concept on your latest attempts.' : 'Complete a knowledge check and any missed concepts will appear here.'}</p><ButtonLink to={anyComplete ? '/courses/medical-terminology' : `/lessons/${lessons[0].id}`}>{anyComplete ? 'Back to the course' : 'Start the first lesson'}</ButtonLink></section>}</div>
}
