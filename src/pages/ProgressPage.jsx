import { useState } from 'react'
import { lessons } from '../content/lessons.js'
import { countCompletedLessons, collectMissedConcepts, highestBestScore } from '../domain/progressSummary.js'
import { useProgress } from '../context/progress-context.js'
import { ButtonLink, PageIntro, Pill, ProgressBar } from '../components/PageElements.jsx'

export function ProgressPage() {
  const { progress, reset } = useProgress(), [confirming, setConfirming] = useState(false)
  // Summary numbers now come from every lesson in the shared list.
  const completedCount = countCompletedLessons(lessons, progress)
  const bestScore = highestBestScore(lessons, progress)
  const totalAttempts = lessons.reduce((total, item) => total + (progress.lessons[item.id]?.attempts ?? 0), 0)
  const reviewCount = collectMissedConcepts(lessons, progress).reduce((total, group) => total + group.concepts.length, 0)
  return <div className="page-container page-stack"><PageIntro eyebrow="Saved on this device" title="My progress" description="Your study history is stored in this browser only. It does not contain patient or client information and does not sync between devices." />
    <section className="progress-dashboard"><article className="progress-stat"><span>Lessons completed</span><strong>{completedCount}</strong><small>of {lessons.length} available</small></article><article className="progress-stat"><span>Best quiz score</span><strong>{bestScore ?? '—'}{bestScore !== null ? '%' : ''}</strong><small>{totalAttempts ? `${totalAttempts} attempt${totalAttempts === 1 ? '' : 's'} total` : 'No attempts yet'}</small></article><article className="progress-stat"><span>Review concepts</span><strong>{reviewCount}</strong><small>from latest attempts</small></article></section>
    {/* One card per lesson, built from the shared list. */}
    {lessons.map((item) => { const saved = progress.lessons[item.id], percentage = saved?.complete ? 100 : saved?.started ? 35 : 0
      return <section className="saved-course-card" key={item.id}><div><p className="card-kicker">Medical Terminology</p><h2>{item.title}</h2><ProgressBar value={percentage} label={`${item.title} progress`} /></div><div><Pill tone={saved?.complete ? 'blue' : 'neutral'}>{saved?.complete ? 'Complete' : saved?.started ? 'In progress' : 'Not started'}</Pill><ButtonLink to={`/lessons/${item.id}`} variant="secondary">{saved?.started ? 'Open lesson' : 'Start lesson'}</ButtonLink></div></section> })}
    <section className="data-panel"><div><p className="eyebrow">Local data</p><h2>Reset learning progress</h2><p>This removes only Vet Tech Learning progress from this browser. It cannot be undone.</p></div>{!confirming ? <button className="button button--danger" type="button" onClick={() => setConfirming(true)}>Reset progress</button> : <div className="confirm-reset" role="group" aria-label="Confirm progress reset"><strong>Remove all saved progress?</strong><div><button className="button button--danger" type="button" onClick={() => { reset(); setConfirming(false) }}>Yes, reset</button><button className="button button--quiet" type="button" onClick={() => setConfirming(false)}>Cancel</button></div></div>}</section></div>
}
