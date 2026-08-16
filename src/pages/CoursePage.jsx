import { Link } from 'react-router'
import { course, lesson, plannedCourses } from '../content/curriculum.js'
import { useProgress } from '../context/progress-context.js'
import { Icon } from '../components/Icon.jsx'
import { Breadcrumbs, ButtonLink, PageIntro, Pill, ProgressBar } from '../components/PageElements.jsx'

export function CoursePage() {
  const { progress } = useProgress()
  const saved = progress.lessons[lesson.id]
  const percentage = saved?.complete ? 100 : saved?.started ? 35 : 0
  return <div className="page-container page-stack">
    <Breadcrumbs items={[{ label: 'Dashboard', to: '/' }, { label: 'Courses' }]} />
    <PageIntro eyebrow="Core foundations" title={course.title} description={course.description}><div className="pill-row"><Pill tone="blue">1 lesson available</Pill><Pill tone="neutral">3 more planned</Pill></div></PageIntro>
    <section className="course-overview-grid" aria-label="Course overview"><div className="course-progress-panel"><span className="large-icon"><Icon name="book" size={38} /></span><div><p className="card-kicker">Your course progress</p><strong className="big-number">{percentage}%</strong></div><ProgressBar value={percentage} label="Medical Terminology progress" /></div><div className="course-goals-panel"><p className="card-kicker">Why start here?</p><h2>A shared vocabulary supports every future skill.</h2><p>Terminology makes intake notes, TPR records, radiographic views, and clinical handoffs more precise.</p></div></section>
    <section aria-labelledby="lessons-heading"><div className="section-heading section-heading--split compact-heading"><div><p className="eyebrow">Course lessons</p><h2 id="lessons-heading">Begin with orientation</h2></div><span className="muted-copy">1 of {course.lessonCount} ready</span></div>
      <article className="lesson-row"><span className={saved?.complete ? 'lesson-number is-complete' : 'lesson-number'}>{saved?.complete ? <Icon name="check" /> : '01'}</span><div className="lesson-row__copy"><div className="pill-row"><Pill tone="orange">Foundational</Pill><span>{lesson.estimatedMinutes} min</span></div><h3>{lesson.title}</h3><p>{lesson.summary}</p></div><ButtonLink to={`/lessons/${lesson.id}`} variant="secondary">{saved?.complete ? 'Review' : saved?.started ? 'Continue' : 'Start lesson'}</ButtonLink></article>
      {plannedCourses.map((item, index) => <article className="lesson-row lesson-row--planned" key={item.title}><span className="lesson-number">0{index + 2}</span><div className="lesson-row__copy"><div className="pill-row"><Pill tone="neutral">Planned</Pill></div><h3>{item.title}</h3><p>{item.description}</p></div><span className="planned-label">Coming later</span></article>)}
    </section><p className="course-footnote">Looking for all learning areas? <Link to="/">Return to the dashboard</Link> to preview specialty tracks.</p>
  </div>
}
