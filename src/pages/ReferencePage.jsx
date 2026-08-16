import { useEffect } from 'react'
import { lesson } from '../content/curriculum.js'
import { useProgress } from '../context/progress-context.js'
import { Breadcrumbs, ButtonLink, PageIntro, Pill } from '../components/PageElements.jsx'

export function ReferencePage() {
  const { visit } = useProgress()
  useEffect(() => { visit(`/lessons/${lesson.id}/reference`, 'Directional terms reference card') }, [visit])
  return <div className="page-container page-stack"><Breadcrumbs items={[{ label: 'Lesson', to: `/lessons/${lesson.id}` }, { label: 'Reference card' }]} /><PageIntro eyebrow="Quick reference" title="Directional terms at a glance" description="Use this card for review. In real documentation, always include the structure or landmark used for comparison."><div className="pill-row"><Pill tone="blue">General mammalian framework</Pill><Pill tone="orange">Foundational</Pill></div></PageIntro><section className="reference-card" aria-labelledby="reference-heading"><div className="reference-card__top"><div><p className="eyebrow">Relationship map</p><h2 id="reference-heading">Term · direction · opposite</h2></div><span>Source verified {lesson.reviewedAt}</span></div><div className="reference-table-wrap"><table><thead><tr><th>Term</th><th>Means</th><th>Common opposite</th></tr></thead><tbody>{lesson.referenceTerms.map(([term, meaning, opposite]) => <tr key={term}><th scope="row">{term}</th><td>{meaning}</td><td>{opposite}</td></tr>)}</tbody></table></div><aside className="reference-reminder"><strong>Remember:</strong> “Distal” alone is incomplete. “Distal to the elbow” anchors the description.</aside></section><div className="button-row page-actions"><ButtonLink to={`/lessons/${lesson.id}/quiz`}>Take the quiz</ButtonLink><ButtonLink to={`/lessons/${lesson.id}`} variant="secondary">Return to lesson</ButtonLink></div></div>
}
