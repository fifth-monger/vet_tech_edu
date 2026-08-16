import { useEffect } from 'react'
import { lesson } from '../content/curriculum.js'
import { useProgress } from '../context/progress-context.js'
import { Icon } from '../components/Icon.jsx'
import { Breadcrumbs, ButtonLink, PageIntro, Pill } from '../components/PageElements.jsx'

function AppliedExample({ example }) {
  return <div className="applied-example">
    <div className="applied-example__heading"><div><p className="card-kicker">Applied example</p><h3>How it sounds in the clinic</h3></div><Pill tone="orange">{example.species}</Pill></div>
    <div className="owner-words"><span>What the owner says</span><p>{example.ownerSays}</p></div>
    <div className="location-translation"><span>Translate the location</span><p>{example.translation}</p></div>
    <dl className="record-examples">
      <div><dt>Subjective · owner report</dt><dd>{example.subjective}</dd></div>
      <div><dt>Possible objective wording · for doctor review</dt><dd>{example.objective}</dd></div>
    </dl>
    <aside className="example-reason"><Icon name="spark" size={20} /><div><strong>Why this works</strong><p>{example.why}</p></div></aside>
  </div>
}

export function LessonPage() {
  const { startLesson } = useProgress()
  useEffect(() => { startLesson(lesson.id, `/lessons/${lesson.id}`, lesson.title) }, [startLesson])
  return <div className="page-container lesson-page"><Breadcrumbs items={[{ label: 'Dashboard', to: '/' }, { label: 'Medical Terminology', to: '/courses/medical-terminology' }, { label: lesson.title }]} /><div className="lesson-layout"><article className="lesson-content">
    <PageIntro eyebrow={lesson.eyebrow} title={lesson.title} description={lesson.summary}><div className="lesson-meta"><span><Icon name="clock" size={18} /> {lesson.estimatedMinutes} minutes</span><Pill tone="orange">{lesson.riskLevel}</Pill><Pill tone="blue">{lesson.species[0]}</Pill></div></PageIntro>
    <section className="objective-panel" aria-labelledby="objectives-heading"><div className="objective-panel__icon"><Icon name="target" size={28} /></div><div><p className="card-kicker">By the end</p><h2 id="objectives-heading">Learning objectives</h2><ul className="check-list">{lesson.objectives.map((objective) => <li key={objective}><Icon name="check" size={18} /><span>{objective}</span></li>)}</ul></div></section>
    {lesson.sections.map((section) => <section className="lesson-section" id={section.id} key={section.id}><p className="eyebrow">{section.kicker}</p><h2>{section.title}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.terms && <div className="term-grid">{section.terms.map((item) => <article className="term-card" key={item.term}><h3>{item.term}</h3><p>{item.definition}</p><span>{item.cue}</span></article>)}</div>}{section.appliedExample && <AppliedExample example={section.appliedExample} />}{section.callout && <aside className="lesson-callout"><Icon name="spark" size={22} /><div><strong>{section.callout.label}</strong><p>{section.callout.text}</p></div></aside>}</section>)}
    <section className="source-panel" id="lesson-sources"><div className="source-panel__heading"><div><p className="eyebrow">Content trust</p><h2>Sources and review</h2></div><Pill tone="blue">{lesson.reviewStatus}</Pill></div><dl className="review-details"><div><dt>Last reviewed</dt><dd>{lesson.reviewedAt}</dd></div><div><dt>Review type</dt><dd>{lesson.reviewerRole}</dd></div><div><dt>Scope</dt><dd>{lesson.species.join(' · ')}</dd></div></dl><ul className="source-list">{lesson.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.title}</a><span>{source.organization}</span><p>{source.note}</p></li>)}</ul></section>
    <div className="lesson-next"><div><p className="card-kicker">Ready to practice?</p><h2>Check what stuck.</h2><p>Five questions, each with an explanation. Your score is for review—not proof of clinical competency.</p></div><ButtonLink to={`/lessons/${lesson.id}/quiz`}>Start knowledge check</ButtonLink></div>
  </article><aside className="lesson-sidebar" aria-label="Lesson contents"><p className="card-kicker">In this lesson</p><ol>{lesson.sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}><span>{String(index + 1).padStart(2, '0')}</span>{section.title}</a></li>)}<li><a href="#lesson-sources"><span>{String(lesson.sections.length + 1).padStart(2, '0')}</span>Sources & review</a></li></ol><ButtonLink to={`/lessons/${lesson.id}/reference`} variant="quiet">Open reference card</ButtonLink></aside></div></div>
}
