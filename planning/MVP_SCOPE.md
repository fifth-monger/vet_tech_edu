# Vet Tech Educational Web App — MVP Scope

**Status:** Draft 1  
**Created:** August 14, 2026

## Objective

Prove a complete, trustworthy learning loop with a small body of foundational content. A learner should be able to find a lesson, learn, practice, receive explanatory feedback, save progress, and return for review.

## Included

### Application shell

- Responsive navigation and dashboard
- Course, lesson, quiz, reference-card, review, and progress screens
- Sources and content-review information

### Foundational curriculum

#### Medical terminology

- Directional and anatomical terms
- Body regions and systems
- Descriptive exam language
- Selected abbreviations and ambiguity warnings

#### Client intake and history

- Presenting complaint, timeline, and progression
- Appetite, water intake, elimination, activity, and behavior
- Medications, supplements, relevant history, diet, environment, exposure, travel, trauma, and possible toxins
- Open-ended and clarifying questions
- Client report versus staff observation
- Avoiding diagnostic or leading language

#### TPR and initial observations

- Purpose of temperature, pulse or heart rate, and respiration measurements
- Weight and clinic-approved initial observations
- Measurement versus interpretation
- Patient stress, unreliable readings, safety limits, and escalation
- Species and patient differences at a conceptual level

The MVP teaches principles and documentation; it does not certify hands-on competency.

#### Objective documentation

- Subjective history versus objective observation
- Neutral wording, relevant negatives, units, and time context
- Turning informal client language into an accurate attributed note

#### Introductory radiograph terminology

- Projection and positioning vocabulary
- Directional terminology, orientation, labeling, and view naming
- The difference between obtaining an image, assessing technical quality, and veterinary interpretation

### Learning interactions

- Single-choice, matching, and scenario-based questions as they are introduced
- Immediate explanations
- Lesson completion and retries
- Missed-concept review

### Local progress

- Save progress in the browser
- Resume the most recently visited lesson
- Confirm before resetting progress
- Explain the limits of device-local storage

### Content trust indicators

Every published clinical lesson includes:

- Species applicability
- Objectives and risk classification
- Sources and last-reviewed date
- Reviewer status
- Educational-use notice

### Quality requirements

- Phone and desktop layouts
- Keyboard navigation and semantic controls
- Sufficient contrast and reduced-motion support
- Tests for scoring, persistence, and the primary user journey when those systems are introduced

## Conditionally included

One lower-risk **Avian Foundations** lesson may close the MVP if the core system is stable and the content is sourced and reviewed. Recommended topic: avian husbandry history and distant observation—not restraint, venipuncture, medication, or emergency treatment.

## Excluded

- Accounts, cloud sync, social features, and leaderboards
- Clinic protocol management or continuing-education certification
- Patient profiles or medical records
- Symptom checking, diagnosis, treatment, or dosing
- AI clinical chat or image interpretation
- Full procedural instruction for restraint, venipuncture, injections, vaccines, anesthesia, or surgery
- Paid subscriptions

## Post-MVP candidates

### Lower risk

- Search and glossary
- Flashcards and spaced review
- More documentation and husbandry-history scenarios
- Offline installation
- Progress export and import

### Clinically sensitive

- Handling and restraint
- Blood-collection concepts
- Radiographic positioning
- Vaccines and preventive care
- Species-specific urgent warning signs

These require stronger source review, explicit limits, and qualified professional review.

## Release acceptance

- Primary learning flow works without an account.
- Progress persists across a browser restart.
- Incorrect answers include explanations.
- Draft or unreviewed clinical content is withheld.
- Published clinical content has complete source metadata.
- Core accessibility checks pass.
- Editorial review removes ambiguous or diagnostic wording.

## Scope-change rule

A feature enters the MVP only when it is necessary to prove the learning loop or protect safety, accessibility, or content integrity.

