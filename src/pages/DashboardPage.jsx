import { Link } from 'react-router'
import { course, plannedCourses, speciesTracks } from '../content/curriculum.js'
import { useProgress } from '../context/progress-context.js'
import { Icon } from '../components/Icon.jsx'
import { ButtonLink, Pill, ProgressBar } from '../components/PageElements.jsx'

function LearningOrbit() {
  return <div className="learning-orbit" aria-label="Specialty areas: avian, reptile, rabbit, and rodent"><div className="orbit-center"><svg viewBox="0 0 110 110" aria-hidden="true"><path className="orbit-cross" d="M43 17h24v26h26v24H67v26H43V67H17V43h26V17Z" /><path className="orbit-paw" d="M39 60c0-8 7-14 16-14s16 6 16 14c0 7-6 12-16 12S39 67 39 60Z" /><circle className="orbit-paw" cx="39" cy="42" r="6" /><circle className="orbit-paw" cx="52" cy="36" r="6" /><circle className="orbit-paw" cx="66" cy="39" r="6" /><circle className="orbit-paw" cx="74" cy="50" r="6" /></svg><strong>One foundation</strong><span>many species</span></div><span className="orbit-chip orbit-chip--one">Avian</span><span className="orbit-chip orbit-chip--two">Reptile</span><span className="orbit-chip orbit-chip--three">Rabbit</span><span className="orbit-chip orbit-chip--four">Rodent</span></div>
}

export function DashboardPage() {
  const { progress } = useProgress()
  const lessonProgress = progress.lessons['anatomical-directional-terms']
  const hasStarted = Boolean(lessonProgress?.started)
  const complete = Boolean(lessonProgress?.complete)
  const progressValue = complete ? 100 : hasStarted ? 35 : 0
  const resumeTo = progress.lastVisited?.path ?? '/lessons/anatomical-directional-terms'
  return <>
    <section className="hero-section"><div className="page-container hero-grid"><div className="hero-copy"><Pill tone="orange"><Icon name="spark" size={16} /> Built for veterinary learners</Pill><h1>Learn the language behind <em>better patient care.</em></h1><p>Short, practical lessons for veterinary technicians—with thoughtful foundations for avian, reptile, rabbit, and rodent medicine.</p><div className="hero-actions"><ButtonLink to={hasStarted ? resumeTo : '/courses/medical-terminology'}>{hasStarted ? 'Continue learning' : 'Start learning'}</ButtonLink><Link className="text-link" to="/courses">Explore courses <span aria-hidden="true">→</span></Link></div><p className="hero-note"><Icon name="shield" size={18} /> No account needed. Progress stays on this device.</p></div><LearningOrbit /></div></section>
    <section className="section page-container" aria-labelledby="continue-heading"><div className="section-heading section-heading--split"><div><p className="eyebrow">Your next step</p><h2 id="continue-heading">{hasStarted ? 'Keep your momentum' : 'Start with a strong foundation'}</h2></div><Pill tone="blue">Recommended first</Pill></div><article className="continue-card"><div className="continue-icon"><Icon name="book" size={30} /></div><div className="continue-main"><p className="card-kicker">Core foundation</p><h3>{course.title}</h3><p>{course.description}</p><ProgressBar value={progressValue} label={complete ? 'Lesson complete' : 'Course progress'} /></div><div className="continue-action"><span>{complete ? `Best score: ${lessonProgress.bestScore}%` : '12 min lesson'}</span><ButtonLink to={hasStarted ? resumeTo : '/courses/medical-terminology'} variant="secondary">{complete ? 'Review lesson' : hasStarted ? 'Resume' : 'View course'}</ButtonLink></div></article></section>
    <section className="section section--tint"><div className="page-container"><div className="section-heading"><p className="eyebrow">Core foundations</p><h2>Build skills in a sensible order</h2><p>Upcoming courses are visible so you can see where the curriculum is headed.</p></div><div className="course-grid">{plannedCourses.map((item) => <article className="course-card" key={item.title}><span className="course-card__icon"><Icon name={item.icon} size={26} /></span><Pill tone="neutral">Planned</Pill><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></div></section>
    <section className="section page-container"><div className="section-heading section-heading--center"><p className="eyebrow">Future specialty tracks</p><h2>Species-aware from the beginning</h2><p>Each track will start with anatomy, husbandry history, and safe observation before advancing to sensitive skills.</p></div><div className="species-grid">{speciesTracks.map(([name, note], index) => <article className={`species-card species-card--${index + 1}`} key={name}><span className="species-card__number">0{index + 1}</span><h3>{name}</h3><p>{note}</p><span className="species-card__status">Track planned</span></article>)}</div></section>
  </>
}
