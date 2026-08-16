import { useEffect } from 'react'
import { medicalRecordLesson as lesson } from '../content/medicalRecord.js'
import { useProgress } from '../context/progress-context.js'
import { Icon } from '../components/Icon.jsx'
import { Breadcrumbs, ButtonLink, PageIntro, Pill } from '../components/PageElements.jsx'

export function MedicalRecordReferencePage() {
  const { visit } = useProgress()
  useEffect(() => { visit(`/lessons/${lesson.id}/reference`, 'Medical-record language reference') }, [visit])

  return <div className="page-container page-stack"><Breadcrumbs items={[{ label: 'Lesson', to: `/lessons/${lesson.id}` }, { label: 'Reference card' }]} /><PageIntro eyebrow="Quick reference" title="Medical-record language at a glance" description="Review the SVC SOAP structure, responsibility labels, common abbreviations, and accuracy words."><div className="pill-row"><Pill tone="blue">SVC SOP aligned</Pill><Pill tone="orange">Foundational</Pill></div></PageIntro>
    <section className="record-reference-grid" aria-label="Medical-record language reference">{lesson.referenceGroups.map((group, index) => <article key={group.title}><span className="record-reference-grid__number">0{index + 1}</span><h2>{group.title}</h2><ul>{group.items.map((item) => <li key={item}><Icon name="check" size={18} /><span>{item}</span></li>)}</ul></article>)}</section>
    <aside className="reference-reminder record-reference-reminder"><strong>Remember:</strong> Preserve where information came from. A client report, direct observation, and veterinarian assessment are not interchangeable.</aside>
    <div className="button-row page-actions"><ButtonLink to={`/lessons/${lesson.id}/quiz`}>Take the knowledge check</ButtonLink><ButtonLink to={`/lessons/${lesson.id}`} variant="secondary">Return to lesson</ButtonLink></div>
  </div>
}
