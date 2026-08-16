# Vet Tech Learning

A practical, species-aware educational web app for veterinary technicians and veterinary support staff.

The project will begin with medical terminology, client intake, TPR, objective documentation, and introductory radiograph terminology. Later specialty tracks will cover birds, reptiles, rabbits, and rodents.

## Current status

The first complete learning slice is live in the React app:

- Responsive dashboard and course overview
- A source-verified Anatomical Directional Terms lesson
- Five-question knowledge check with explanations
- Quick-reference card and missed-concept review
- Versioned, device-local progress with confirmed reset
- Automated checks for scoring, persistence, and lesson content

Future foundational courses and the avian, reptile, rabbit, and rodent tracks are shown as planned rather than empty or published content.

## Run locally

```bash
npm install
npm run dev
```

Use `npm test`, `npm run lint`, and `npm run build` to run the project checks.

## Learning-first build approach

This project is both a working product and a way for Victoria to strengthen independent engineering skills.

- Build in small, inspectable stages.
- Explain unfamiliar terminology, syntax, structure, and design decisions.
- Distinguish demonstrated code from code Victoria already understands.
- Use the progression: AI demonstrates → Victoria modifies → Victoria explains → Victoria recreates.
- End meaningful coding sessions with what is understood and what still needs practice.

## Initial technology direction

- React with JavaScript
- Vite
- Plain CSS
- Git

React Router and Vitest were introduced with the first multi-screen learning flow and its scoring and progress behavior. TypeScript and Tailwind CSS remain deferred.

## Planning documents

See [`planning/`](planning/) for the product brief, MVP scope, curriculum, safety policy, user flows, technical design, and roadmap.
