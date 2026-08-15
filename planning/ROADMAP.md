# Vet Tech Educational Web App — Roadmap

**Status:** Draft 2  
**Created:** August 14, 2026  
**Revised:** August 15, 2026

## Principle

Build one trustworthy learning loop before a large content library. Introduce unfamiliar tools only when the current milestone creates a reason to learn them.

Every meaningful coding milestone follows:

> AI demonstrates → Victoria modifies → Victoria explains → Victoria recreates.

Dates remain unset until Victoria's actual work schedule and energy are known.

## Milestone 0: Repository and React foundation

### Part A — repository foundation

- Dedicated project folder
- Planning documents
- README and `.gitignore`
- Local Git repository and initial planning commit

### Part B — React foundation

- React with JavaScript and Vite
- Plain CSS
- Base application shell
- Home screen
- Initial responsive layout
- Explanation of every generated file before feature work

React Router and testing tools are not added until their purpose is concrete.

### Acceptance gate

- Repository state is clean after the planning commit.
- The app starts and builds locally after scaffolding.
- Victoria can identify `index.html`, `main.jsx`, `App.jsx`, and the stylesheet.
- Victoria can explain the path from browser entry point to rendered component.

### Learning checkpoint

- Victoria predicts which component controls visible text.
- AI demonstrates one small change.
- Victoria makes a second change and explains it.

## Milestone 1: Navigation and content foundation

- Introduce React Router when multiple screens become real.
- Add home, courses, lesson, and not-found screens.
- Define the first JavaScript lesson object.
- Render lesson objectives, sections, species, risk, sources, and review status.
- Add content validation.

**Gate:** The first lesson is rendered from content data; incomplete or unapproved content is withheld.

**Learning:** Victoria explains props, arrays, object access, list rendering, and route selection.

## Milestone 2: Knowledge checks

- Question and answer components
- Selection, submission, explanations, summary, retry, and missed concepts
- Reference-card screen
- Introduce Vitest and React Testing Library when scoring behavior exists

**Gate:** Scoring is tested, keyboard use works, every answer is explained, and completion is distinct from mastery.

**Learning:** Victoria explains state, event handlers, conditional rendering, and why scoring logic is separated.

## Milestone 3: Local progress

- Versioned progress structure
- `localStorage` functions
- Continue-learning action
- Course and lesson indicators
- Review screen
- Confirmed reset and corrupt-data recovery
- Persistence tests

**Gate:** Progress survives reload, resumes correctly, and resets only after confirmation.

**Learning:** Victoria explains temporary versus saved state, browser-storage limits, and schema versions.

## Milestone 4: Foundational MVP curriculum

- Directional and anatomical terminology
- Objective descriptions
- Client communication and presenting complaint
- History collection
- TPR purpose, context, documentation, and escalation
- Subjective versus objective documentation
- Applied intake and handoff
- Introductory radiograph terminology

**Gate:** Published lessons pass validation, claims have sources, clinical material has required review, and no content implies diagnosis or unsupervised competency.

**Learning:** Victoria modifies a lesson, question set, and reference card and explains how content reaches the page.

## Milestone 5: MVP quality and release

- Mobile and desktop review
- Accessibility fixes
- Error and empty states
- Introduce Playwright for the complete user journey
- Performance and editorial review
- Deployment documentation and release checklist

**Gate:** MVP acceptance criteria pass, the primary journey works, limitations are documented, and Victoria can run, build, test, and explain the app.

## Milestone 6: Avian foundations

- Track overview and terminology
- Husbandry and nutritional history
- Distant observation and stress awareness
- Applied intake scenario
- Qualified clinical review

Handling, venipuncture, medication, and emergency treatment remain outside this milestone.

## Milestone 7: Species expansion

1. Rabbit foundations
2. Rodent foundations with species distinctions
3. Reptile foundations with taxonomic and husbandry distinctions

Each begins with terminology, husbandry, intake, and distant observation before procedures.

## Milestone 8: Clinically sensitive skills

Potential releases:

- Handling and restraint
- Blood-collection concepts
- Radiographic positioning
- Vaccines and preventive care
- Urgent escalation

Each requires qualified review, sources, supervision rules, prerequisites, stop criteria, and a clear distinction between conceptual learning and hands-on competency.

## Deferred backlog

- TypeScript migration
- Tailwind evaluation
- Search and glossary
- Spaced repetition
- PWA and offline mode
- Progress export/import
- Optional accounts and sync
- Editorial tools and clinic-specific paths

## Definition of done

- Acceptance gate is satisfied.
- Relevant tests pass.
- Keyboard and mobile behavior are verified.
- Clinical review matches risk.
- Documentation reflects meaningful changes.
- No backlog feature is quietly promoted.
- Victoria can describe or modify the important new code.

## Immediate next action

After reviewing the repository foundation, scaffold the smallest React + JavaScript + Vite project. Before editing generated files, inspect each one and explain its role.

