import { useEffect, useMemo, useState } from 'react'
import { abbreviationLesson as lesson, abbreviationReferenceEntries } from '../content/clinicAbbreviations.js'
import { useProgress } from '../context/progress-context.js'
import { Icon } from '../components/Icon.jsx'
import { Breadcrumbs, ButtonLink, PageIntro, Pill } from '../components/PageElements.jsx'

export function ClinicAbbreviationsReferencePage() {
  const [query, setQuery] = useState('')
  const { visit } = useProgress()
  useEffect(() => { visit(`/lessons/${lesson.id}/reference`, 'SVC abbreviation reference') }, [visit])
  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return abbreviationReferenceEntries
    const exactAbbreviations = abbreviationReferenceEntries.filter((entry) => entry.abbreviation.toLowerCase() === normalized)
    if (exactAbbreviations.length > 0) return exactAbbreviations
    return abbreviationReferenceEntries.filter((entry) => [entry.abbreviation, entry.meaning, entry.plain, entry.category, entry.note].filter(Boolean).some((value) => value.toLowerCase().includes(normalized)))
  }, [query])

  return <div className="page-container page-stack"><Breadcrumbs items={[{ label: 'Lesson', to: `/lessons/${lesson.id}` }, { label: 'Abbreviation reference' }]} /><PageIntro eyebrow="Searchable reference" title="SVC abbreviations at a glance" description="Search SVC internal shorthand by abbreviation, complete meaning, category, or context note."><div className="pill-row"><Pill tone="blue">{abbreviationReferenceEntries.length} entries</Pill><Pill tone="orange">Internal shorthand</Pill></div></PageIntro>
    <section className="abbreviation-search-panel" aria-labelledby="search-heading"><label htmlFor="abbreviation-search"><span id="search-heading">Search abbreviations</span><div><Icon name="search" size={20} /><input id="abbreviation-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try PO, heartworm, cattle, or ultrasound" /></div></label><p>{matches.length} {matches.length === 1 ? 'match' : 'matches'}</p></section>
    {matches.length > 0 ? <section className="abbreviation-reference-results" aria-live="polite">{matches.map((entry) => <article key={`${entry.category}-${entry.abbreviation}`}><header><strong>{entry.abbreviation}</strong><span>{entry.category}</span></header><h2>{entry.meaning}</h2>{entry.plain && <p>{entry.plain}</p>}{entry.note && <aside>{entry.note}</aside>}</article>)}</section> : <div className="empty-state abbreviation-empty"><Icon name="search" size={30} /><h2>No abbreviations found</h2><p>Try a shorter abbreviation, a complete medical term, or a category such as “horse” or “diagnostics.”</p><button className="button button--secondary" type="button" onClick={() => setQuery('')}>Clear search</button></div>}
    <aside className="reference-reminder record-reference-reminder"><strong>Medication-safety rule:</strong> Medication abbreviations are for internal recognition. Prescriptions, labels, pharmacy communications, discharge instructions, and client directions must use complete wording.</aside>
    <div className="button-row page-actions"><ButtonLink to={`/lessons/${lesson.id}/quiz`}>Take the knowledge check</ButtonLink><ButtonLink to={`/lessons/${lesson.id}`} variant="secondary">Return to lesson</ButtonLink></div>
  </div>
}
