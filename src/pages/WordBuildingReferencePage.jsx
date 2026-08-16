import { useEffect } from 'react'
import { wordBuildingLesson as lesson } from '../content/wordBuilding.js'
import { useProgress } from '../context/progress-context.js'
import { Icon } from '../components/Icon.jsx'
import { Breadcrumbs, ButtonLink, PageIntro, Pill } from '../components/PageElements.jsx'

export function WordBuildingReferencePage() {
  const { visit } = useProgress()
  useEffect(() => { visit(`/lessons/${lesson.id}/reference`, 'Medical word-building reference') }, [visit])
  return <div className="page-container page-stack"><Breadcrumbs items={[{ label: 'Lesson', to: `/lessons/${lesson.id}` }, { label: 'Reference card' }]} /><PageIntro eyebrow="Quick reference" title="Medical word parts at a glance" description="Review common prefixes, suffixes, SVC route terms, and the basic word-building pattern."><div className="pill-row"><Pill tone="blue">SVC examples</Pill><Pill tone="orange">Foundational</Pill></div></PageIntro>
    <section className="record-reference-grid" aria-label="Medical word-building reference">{lesson.referenceGroups.map((group, index) => <article key={group.title}><span className="record-reference-grid__number">0{index + 1}</span><h2>{group.title}</h2><ul>{group.items.map((item) => <li key={item}><Icon name="check" size={18} /><span>{item}</span></li>)}</ul></article>)}</section>
    <aside className="reference-reminder record-reference-reminder"><strong>Remember:</strong> Word parts help you estimate a term’s general meaning. They do not replace the patient’s clinical evidence or the veterinarian’s assessment.</aside>
    <div className="button-row page-actions"><ButtonLink to={`/lessons/${lesson.id}/quiz`}>Take the knowledge check</ButtonLink><ButtonLink to={`/lessons/${lesson.id}`} variant="secondary">Return to lesson</ButtonLink></div>
  </div>
}
