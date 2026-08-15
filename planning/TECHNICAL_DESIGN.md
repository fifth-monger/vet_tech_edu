# Vet Tech Educational Web App — Technical Design

**Status:** Draft 2  
**Created:** August 14, 2026  
**Revised:** August 15, 2026  
**Decision state:** Approved direction; React application not yet scaffolded

## Objective

Build an accessible educational web app with structured lessons, practice, knowledge checks, reference cards, and local progress. The architecture should remain understandable to a learner and grow only when the product demonstrates a need.

## Learning-first stack

### Milestone 0

| Area | Choice | Why now |
|---|---|---|
| UI | React with JavaScript | Strengthens React and JavaScript fundamentals without adding TypeScript syntax immediately |
| Build tool | Vite | Provides the local development and production-build environment |
| Styling | Plain CSS | Builds on Victoria's existing CSS knowledge and keeps styling transparent |
| Version control | Git | Makes every learning step inspectable and reversible |

### Introduced when needed

| Tool | Trigger |
|---|---|
| React Router | When the first real multi-screen navigation is built |
| Vitest and React Testing Library | When scoring or progress logic creates behavior worth testing |
| Playwright | When a complete user journey exists |
| TypeScript | After the JavaScript content model is understood and type safety would clearly help |
| Tailwind CSS | Only after comparing it with the existing CSS and choosing it intentionally |

This sequence changes the order of adoption, not the long-term capabilities of the app.

## Architecture

The MVP is a client-rendered application without a backend.

```text
Structured lesson content
          ↓
   Content repository
          ↓
 React screens/components
          ↓
 Learning behavior ─────→ Progress service
                                ↓
                         Browser storage
```

- Content owns educational facts, questions, citations, and review metadata.
- Domain functions own scoring, completion, and review calculations.
- Components render information and collect user actions.
- Persistence saves progress through a small replaceable interface.

## Expected structure after scaffolding

```text
vet-tech-learning/
├── public/
├── src/
│   ├── app/
│   ├── components/
│   ├── content/
│   ├── domain/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   └── main.jsx
├── planning/
├── .gitignore
├── package.json
└── README.md
```

Folders should be added as the associated concepts appear, not created empty in advance.

## Planned routes

| Route | Purpose |
|---|---|
| `/` | Dashboard and resume action |
| `/courses` | Core courses and species tracks |
| `/courses/:courseId` | Course overview and progress |
| `/lessons/:lessonId` | Lesson instruction and practice |
| `/lessons/:lessonId/quiz` | Knowledge check |
| `/lessons/:lessonId/reference` | Reference card |
| `/review` | Missed concepts |
| `/progress` | Progress and local-data controls |

Stable identifiers—not titles—will be used in routes and saved progress.

## Initial JavaScript content shape

```js
export const lesson = {
  id: "anatomical-directional-terms",
  courseId: "medical-terminology",
  title: "Anatomical Directional Terms",
  summary: "",
  estimatedMinutes: 10,
  objectives: [],
  prerequisites: [],
  species: ["general"],
  riskLevel: "foundational",
  reviewStatus: "approved",
  reviewedAt: "",
  reviewerRole: "",
  sections: [],
  questions: [],
  referenceCard: null,
  sources: [],
};
```

We will first understand and validate this JavaScript structure. TypeScript types may later formalize it after Victoria can explain the data flow.

## Content rules

- Only approved lessons appear in normal learning paths.
- Every published lesson has objectives, instruction, questions, explanations, sources, and review metadata.
- Identifiers remain stable and unique.
- Validation detects duplicates, broken references, invalid correct answers, missing explanations, and incomplete approval metadata.
- Clinical content that fails validation is unavailable, not partially rendered.

## Progress model

```js
const progress = {
  schemaVersion: 1,
  updatedAt: "",
  lastVisited: null,
  lessons: {},
};
```

A lesson is marked complete after the learner reaches the end and submits its knowledge check. Score remains separate from completion so exposure is not confused with mastery.

Progress begins in `localStorage` behind functions such as `loadProgress`, `saveProgress`, and `resetProgress`. The code will include a namespace, schema version, data validation, corrupt-data recovery, and confirmed reset. It will never store real patient or client information.

## State strategy

- Component state controls temporary interactions.
- Shared React state later exposes learner progress.
- Pure JavaScript functions calculate scores and review needs.
- No third-party state library is added without a demonstrated need.

## Component direction

Likely concepts include:

- Layout: application shell, header, navigation, page container
- Learning: course card, lesson header, objectives, section, example, reference card
- Quiz: question, answer options, feedback, summary, missed concepts
- Trust: species, risk, review status, sources, educational and escalation notices

Components should represent meaningful reusable ideas rather than wrappers created only to reduce line count.

## Accessibility and interaction

- Semantic landmarks and headings
- Keyboard-accessible navigation and questions
- Visible focus and programmatic labels
- Sufficient contrast and no color-only feedback
- Reduced-motion support and no ordinary learning timers
- Focus management after navigation and submissions
- Comfortable mobile touch targets

## Testing sequence

Testing tools are introduced alongside behavior:

1. Pure JavaScript checks for early content validation if needed.
2. Vitest for scoring, completion, progress, and content validation.
3. React Testing Library for user-visible component behavior.
4. Playwright after the full lesson-to-resume journey exists.

## Privacy and security

- No accounts, medical records, analytics, or trackers in the MVP
- No real patient, client, or clinic data
- No user-entered clinical decision support
- Lesson content is data, never executable markup

## First vertical slice

- Application shell
- Dashboard with one recommended course
- One approved Anatomical Directional Terms lesson
- Applied example, small knowledge check, explanations, and reference card
- Sources and review metadata
- Local progress and resume behavior
- Phone and desktop layouts

Additional lessons wait until this path works cleanly.

## Deferred decisions

- Final name and visual identity
- TypeScript migration
- Tailwind adoption
- Search and spaced repetition
- PWA and offline installation
- Cloud backend and authentication
- Editorial dashboard and analytics

