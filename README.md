# Civil Safety Website Rebuild

Next.js rebuild of the [Civil Safety](https://www.civilsafety.com.au) homepage, built as a portfolio demo of a modernised marketing site with working course search.

**Live demo:** [civil-safety.vercel.app](https://civil-safety.vercel.app)

**Garrett Macarthur**  
Founder & Lead Developer, [Formist](https://www.formist.com.au)

---

## Summary

Homepage and course catalogue with keyword, category, location, and popular-course filters. One `searchCourses` function powers the UI and `GET /api/courses`.

Rather than a PDF portfolio, this is a deployable codebase: typed components, validated API inputs, and search logic written once and reused. Nav and CTAs are visual only except course search.

---

## Highlights

- Homepage sections (hero, stats, popular courses, testimonials, locations) in Civil Safety branding
- Course search on `/courses` with shared server logic and a typed API route
- Zod validation, cache headers, security headers, sitemap, robots.txt
- Vitest tests for search and API behaviour

---

## Tech Stack

### This project

| Layer | Tools |
| ----- | ----- |
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS 4, Lucide icons |
| Validation | Zod |
| Testing | Vitest |
| Tooling | ESLint, Prettier, Turbopack (dev) |
| Deployment | Vercel |

### Broader stack (Formist)

Production client work through Formist uses the full stack. This demo is the frontend and API slice; larger builds typically also draw on the below.

| Area | Technologies |
| ---- | ------------ |
| Languages | TypeScript, JavaScript, PHP |
| Frontend | Next.js, React, Tailwind CSS |
| Backend | Laravel, REST APIs, integrations |
| Data | PostgreSQL, Redis |
| Infrastructure | Docker, AWS, CI/CD |
| Quality | Unit & integration testing, schema validation, logging |

---

## API

```http
GET /api/courses?q=traffic&location=gold-coast
```

Returns `courses` and `total`. Query params: `q`, `category`, `location`, `popular`.

Logic lives in `src/lib/courses.ts`, used by `src/app/courses/page.tsx` and `src/app/api/courses/route.ts`.

---

## Project structure

```
src/
├── app/           Routes, layout, API, SEO files
├── components/    Home, courses, layout, UI
├── data/          Site copy, courses, locations
├── lib/           Search logic, utilities
└── types/         Shared TypeScript types
public/images/     Static assets
```

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build && npm run start   # production
npm run test                     # Vitest
npm run lint                     # ESLint
```

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` for metadata and Open Graph.

---

## About

Gold Coast based full stack developer working across web applications, SaaS platforms, education systems, booking workflows, mobile apps, APIs, UX/UI, and cloud infrastructure.

### Formist

**[Formist](https://www.formist.com.au)** is my software consultancy. We build bespoke systems for Australian organisations: custom CRMs, integrations, booking and workflow tools, education portals, and internal platforms. The work spans architecture through deployment, with an emphasis on maintainable code, typed APIs, and systems that scale without constant rewrites.

### Selected work

**Marymount College Intranet**  
Large scale school platform covering resource booking, behaviour management, staff development, parent communications, and student administration.

**Orbit**  
Privacy first social platform architecture centred on user ownership and security.

### Background

**Founder & Lead Developer, Formist / Innerbit**  
Design and delivery of custom software, business systems, and web applications for clients across education, operations, and internal tooling.

**Apple**  
Former Apple Certified Macintosh Technician and Apple Genius.

**Unisys**  
Field engineer providing enterprise support across client environments.

---

## Note

Portfolio demonstration only, not an official Civil Safety product. Nav and CTAs are intentionally non-functional except course search. This repo is meant to show how I approach frontend structure, shared business logic, validated APIs, and code that is straightforward to extend on a real contract.

Garrett Macarthur
