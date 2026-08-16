import { useEffect } from 'react'
import { radiographLesson as lesson } from '../content/radiographTerminology.js'
import { useProgress } from '../context/progress-context.js'
import { Icon } from '../components/Icon.jsx'
import { Breadcrumbs, ButtonLink, PageIntro, Pill } from '../components/PageElements.jsx'

export function RadiographTerminologyReferencePage() {
  const { visit } = useProgress()
  useEffect(() => { visit(`/lessons/${lesson.id}/reference`, 'Radiograph terminology reference') }, [visit])
  return <div className="page-container page-stack"><Breadcrumbs items={[{ label: 'Lesson', to: `/lessons/${lesson.id}` }, { label: 'Reference card' }]} /><PageIntro eyebrow="Quick reference" title="Radiograph terminology at a glance" description="Review projection naming, image appearance, technical-quality language, and radiation-safety terms."><div className="pill-row"><Pill tone="blue">Projection language</Pill><Pill tone="orange">Radiation safety</Pill></div></PageIntro>
    <section className="record-reference-grid" aria-label="Radiograph terminology reference">{lesson.referenceGroups.map((group, index) => <article key={group.title}><span className="record-reference-grid__number">0{index + 1}</span><h2>{group.title}</h2><ul>{group.items.map((item) => <li key={item}><Icon name="check" size={18} /><span>{item}</span></li>)}</ul></article>)}</section>
    <aside className="reference-reminder record-reference-reminder"><strong>Remember:</strong> A projection name follows beam entry to beam exit. Describe image quality and appearance objectively, and follow supervised clinic protocols for positioning and exposure.</aside>
    <div className="button-row page-actions"><ButtonLink to={`/lessons/${lesson.id}/quiz`}>Take the knowledge check</ButtonLink><ButtonLink to={`/lessons/${lesson.id}`} variant="secondary">Return to lesson</ButtonLink></div>
  </div>
}
