# Vet Tech Educational Web App — User Flows

**Status:** Draft 1  
**Created:** August 14, 2026

## Experience principles

- Make the next useful action obvious.
- Support five-minute study sessions without losing context.
- Inform without pressuring through progress indicators.
- Make incorrect answers educational.
- Keep species, safety limits, sources, and review status easy to find.
- Design for comfortable phone use.

## Information architecture

```text
Home
├── Continue learning
├── Core foundations
│   ├── Medical terminology
│   ├── Patient intake and TPR
│   ├── Documentation
│   └── Radiography foundations
├── Species tracks
│   ├── Avian
│   ├── Reptile
│   ├── Rabbit
│   └── Rodent
├── Review
└── Progress
```

Unpublished tracks are labeled as planned rather than displayed as empty courses.

## Flow 1: First visit

1. Learner opens the app.
2. Home states its purpose and links to educational-use and privacy notices.
3. Learner sees the recommended starting course.
4. Learner selects **Start with Medical Terminology**.
5. The lesson shows objectives, study time, species scope, and prerequisites.

## Flow 2: Complete a lesson

1. Learner opens a lesson.
2. Header shows title, objectives, progress, risk, and species.
3. Learner reads short instructional sections and an applied example.
4. Learner completes practice and opens the knowledge check.
5. Meaningful progress is saved.

## Flow 3: Knowledge check

1. Learner answers one question at a time.
2. The app records the response and explains the answer.
3. Completion summarizes understood and missed concepts.
4. Learner reviews, retries, or continues.

Do not use trick questions, hide clinical assumptions, or imply that a score equals competency.

## Flow 4: Resume learning

1. Learner returns on the same browser and device.
2. Home displays the last lesson.
3. The lesson resumes near the saved position.

If progress is missing, explain the limits of browser storage without implying cloud recovery.

## Flow 5: Review missed concepts

1. Review groups missed questions by concept.
2. Learner opens a concept, reviews the explanation and reference card, and answers another practice question.
3. Review progress remains separate from the original attempt.

## Flow 6: Look up a term

For the MVP, the learner opens a terminology reference list and selects a term to see its definition, relationships, example, species notes, and sources. Global search is post-MVP and must not imitate a diagnostic symptom checker.

## Flow 7: Practice intake and TPR

1. A scenario identifies the species and presenting complaint.
2. Learner selects useful follow-up questions.
3. Learner sorts information into client report, direct observation, measurement, and veterinary assessment.
4. Learner forms a concise handoff.
5. Feedback identifies missing context, leading questions, assumptions, and escalation needs.

## Flow 8: Explore a species track

1. Learner selects avian, reptile, rabbit, or rodent.
2. The track explains its scope and prerequisites.
3. Available courses appear in recommended order.
4. Unavailable high-risk lessons explain their prerequisite or review status.

## Flow 9: View sources and limits

From a lesson, the learner can view review status, date, species, region limits, reviewer role, citations, supervision requirements, and escalation guidance, then return to the same place.

## Flow 10: Reset progress

The learner deliberately chooses reset, sees exactly what will be removed, and confirms or cancels. Only this app's stored learning progress is cleared.

## Primary journey

```text
Open app
→ Start Medical Terminology
→ Complete lesson
→ Complete knowledge check
→ Review explanation
→ Save progress
→ Open reference card
→ Return and resume
```

## Important states

- Nothing started yet
- No missed concepts
- Planned but unpublished track
- Missing or corrupt progress
- Lesson load failure
- Incomplete source metadata
- Lesson marked `needs_update` or retired

Untrusted clinical content is withheld rather than partially displayed as approved.

## Accessibility

- Keyboard access and predictable focus
- Correctness conveyed with text and semantics, not color alone
- Comfortable touch targets
- Screen-reader announcements for questions and results
- Reduced motion and no ordinary learning timers
- Plain language alongside terminology

