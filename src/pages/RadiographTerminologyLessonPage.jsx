import { useEffect } from 'react'
import { radiographLesson as lesson } from '../content/radiographTerminology.js'
import { course } from '../content/curriculum.js'
import { useProgress } from '../context/progress-context.js'
import { Icon } from '../components/Icon.jsx'
import { Breadcrumbs, ButtonLink, PageIntro, Pill } from '../components/PageElements.jsx'
import '../radiograph-images.css'

function DefinitionGrid({ entries }) {
  return <div className="radiograph-definition-grid">{entries.map((entry) => <article key={entry.term}><h3>{entry.term}</h3><p>{entry.meaning}</p>{entry.cue && <span>{entry.cue}</span>}</article>)}</div>
}

function TeachingFigure({ src, alt, caption }) {
  return <figure className="radiograph-figure"><img src={src} alt={alt} loading="lazy" /><figcaption>{caption}</figcaption></figure>
}

function ProjectionExample({ example }) {
  return <article className="projection-example">
    <header><span>{example.abbreviation}</span><h3>{example.term}</h3></header>
    <div className="projection-example__image"><img src={example.image} alt={example.alt} loading="lazy" /></div>
    <dl>
      <div><dt>Patient position</dt><dd>{example.patientPosition}</dd></div>
      <div><dt>Beam path</dt><dd>{example.beam}</dd></div>
      <div><dt>Why this name?</dt><dd>{example.position}</dd></div>
      <div><dt>Read the marker</dt><dd>{example.marker}</dd></div>
    </dl>
    <p className="projection-example__credit">From the SVC Radiograph Positioning Guide, slide {example.sourceSlide} · Original image credit: <a href={example.sourceUrl} target="_blank" rel="noreferrer">{example.source}</a></p>
  </article>
}

export function RadiographTerminologyLessonPage() {
  const { startLesson } = useProgress()
  useEffect(() => { startLesson(lesson.id, `/lessons/${lesson.id}`, lesson.title) }, [startLesson])

  return <div className="page-container lesson-page"><Breadcrumbs items={[{ label: 'Dashboard', to: '/' }, { label: course.title, to: `/courses/${course.id}` }, { label: lesson.title }]} /><div className="lesson-layout"><article className="lesson-content radiograph-lesson">
    <PageIntro eyebrow={lesson.eyebrow} title={lesson.title} description={lesson.summary}><div className="lesson-meta"><span><Icon name="clock" size={18} /> {lesson.estimatedMinutes} minutes</span><Pill tone="orange">{lesson.riskLevel}</Pill><Pill tone="blue">Projection language</Pill></div></PageIntro>
    <section className="objective-panel" aria-labelledby="radiograph-objectives"><div className="objective-panel__icon"><Icon name="target" size={28} /></div><div><p className="card-kicker">By the end</p><h2 id="radiograph-objectives">Learning objectives</h2><ul className="check-list">{lesson.objectives.map((objective) => <li key={objective}><Icon name="check" size={18} /><span>{objective}</span></li>)}</ul></div></section>

    <section className="lesson-section" id="core-language"><p className="eyebrow">Start with the nouns</p><h2>X-ray, radiograph, and radiography are not interchangeable</h2><p>The words are often mixed together in conversation. Using each one accurately makes documentation and handoffs clearer.</p><DefinitionGrid entries={lesson.coreTerms} /><aside className="radiograph-language-rule"><Icon name="image" size={24} /><p><strong>Say it clearly:</strong> The x-ray passes through the patient during radiography and produces a radiograph.</p></aside></section>

    <section className="lesson-section" id="position-projection"><p className="eyebrow">The naming rule</p><h2>Position describes the patient. Projection describes the beam.</h2><p>A projection name follows the primary beam from the surface where it enters the patient to the surface where it exits. “View” is common conversational wording, but projection is the more precise term for beam direction.</p><DefinitionGrid entries={lesson.projectionTerms} /><div className="beam-name-rule"><span>Beam entry</span><strong>→</strong><span>Beam exit</span><b>= projection name</b></div><aside className="lesson-callout"><Icon name="spark" size={22} /><div><strong>Right lateral example</strong><p>A dog in right lateral recumbency has its right side nearest the detector. The beam travels from the left side toward the right side, producing a right lateral projection.</p></div></aside></section>

    <section className="lesson-section" id="common-projections"><p className="eyebrow">Common projections</p><h2>Follow the beam through real radiographs</h2><p>Start with the beam path, then use the anatomical marker and image orientation to confirm what you are viewing.</p><aside className="lesson-callout"><Icon name="shield" size={22} /><div><strong>Position without unnecessary exposure</strong><p>{lesson.positioningSafetyRule}</p></div></aside><div className="projection-example-grid">{lesson.projectionExamples.map((example) => <ProjectionExample key={example.abbreviation} example={example} />)}</div><aside className="clinic-orientation-panel"><div><p className="card-kicker">SVC image orientation</p><h3>How the clinic displays each radiograph</h3></div><dl>{lesson.clinicOrientationRules.map((rule) => <div key={rule.label}><dt>{rule.label}</dt><dd>{rule.text}</dd></div>)}</dl></aside><aside className="lesson-callout"><Icon name="image" size={22} /><div><strong>Applied at SVC</strong><p>{lesson.clinicStudyPattern}</p></div></aside><aside className="contrast-card"><strong>Oblique is intentional</strong><p>An oblique projection deliberately changes the angle to reduce superimposition or isolate a structure. Rotation is unintended positioning error. Do not use the two terms interchangeably.</p></aside></section>

    <section className="lesson-section" id="appearance"><p className="eyebrow">Describe what the image shows</p><h2>Relative shades—not automatic diagnoses</h2><p>Radiographic appearance depends on how much of the beam reaches the detector. Describe the relative opacity and location before interpreting what a finding represents.</p><div className="density-scale" aria-label="Five basic radiographic opacities from gas to metal">{lesson.densities.map((density, index) => <article key={density.name} style={{ '--density-step': index }}><span>{density.appearance}</span><h3>{density.name}</h3><p>{density.explanation}</p></article>)}</div><DefinitionGrid entries={lesson.appearanceTerms} /><aside className="lesson-callout"><Icon name="shield" size={22} /><div><strong>Describe before interpreting</strong><p>“Radiopaque material projects over the abdomen” describes appearance and location. Calling it a swallowed foreign body adds an interpretation that requires the veterinarian’s assessment.</p></div></aside></section>

    <section className="lesson-section" id="quality"><p className="eyebrow">Technical-quality language</p><h2>Name the issue so the team can respond</h2><TeachingFigure src="/radiography/image-quality.svg" alt="Four diagrams comparing straight positioning, rotation, motion artifact, and a field wider than the needed collimated area." caption="Straight positioning, motion control, appropriate collimation, and correct markers support a diagnostic study and help avoid unnecessary repeat exposures." /><DefinitionGrid entries={lesson.qualityTerms} /></section>

    <section className="lesson-section" id="handoff"><p className="eyebrow">From observation to handoff</p><h2>Use objective radiographic language</h2><div className="radiograph-handoff-stack">{lesson.handoffs.map((handoff) => <article key={handoff.everyday}><div><span>Everyday wording</span><p>{handoff.everyday}</p></div><strong aria-hidden="true">→</strong><div><span>Clear handoff</span><p>{handoff.clinical}</p></div><aside><strong>Why this works:</strong> {handoff.why}</aside></article>)}</div></section>

    <section className="lesson-section" id="safety"><p className="eyebrow">Radiation-safety language</p><h2>Know the terms—and follow the protocol</h2><DefinitionGrid entries={lesson.safetyTerms} /><aside className="radiograph-safety-panel"><Icon name="shield" size={28} /><div><strong>Terminology is not positioning authorization</strong><p>{lesson.safetyRule}</p></div></aside></section>

    <section className="source-panel" id="radiograph-sources"><div className="source-panel__heading"><div><p className="eyebrow">Content trust</p><h2>Sources and review</h2></div><Pill tone="blue">{lesson.reviewStatus}</Pill></div><dl className="review-details"><div><dt>Last reviewed</dt><dd>{lesson.reviewedAt}</dd></div><div><dt>Review type</dt><dd>{lesson.reviewerRole}</dd></div><div><dt>Scope</dt><dd>{lesson.species.join(' · ')}</dd></div></dl><ul className="source-list">{lesson.sources.map((source) => <li key={source.title}>{source.url ? <a href={source.url} target="_blank" rel="noreferrer">{source.title}</a> : <strong>{source.title}</strong>}<span>{source.organization}</span><p>{source.note}</p></li>)}</ul></section>
    <div className="lesson-next"><div><p className="card-kicker">Course finale</p><h2>Check your radiographic language.</h2><p>Five questions covering projections, image quality, objective description, and safety terminology.</p></div><ButtonLink to={`/lessons/${lesson.id}/quiz`}>Start knowledge check</ButtonLink></div>
  </article><aside className="lesson-sidebar" aria-label="Lesson contents"><p className="card-kicker">In this lesson</p><ol>{lesson.sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}><span>0{index + 1}</span>{section.title}</a></li>)}</ol><ButtonLink to={`/lessons/${lesson.id}/reference`} variant="quiet">Open reference card</ButtonLink></aside></div></div>
}
