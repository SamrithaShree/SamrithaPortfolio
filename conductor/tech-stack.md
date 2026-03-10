# Tech Stack: Portfolio 2.0 UI/UX Modernization

## Objective
Implement the "Midnight Nebula" design system using Tailwind CSS and Framer Motion for high performance and premium visuals.

## Core Stack
- **Framework:** React + Vite + TypeScript.
- **Styling:** Tailwind CSS (Primary).
- **Animation:** Framer Motion (Scroll reveals, micro-interactions).
- **Icons:** Lucide React.
- **Fonts:** Space Grotesk, Inter (via Google Fonts or local).

## Component Architecture
- **Global Styles:** Centralized in `index.css` or `App.css` via Tailwind utility classes.
- **SectionWrapper:** Common layout container with entrance animations.
- **Shared Components:** `Button.tsx`, `SkillCard.tsx`, `ProjectCard.tsx` (all enhanced with glassmorphism).

## Implementation Strategy
- **Brownfield-First:** No changes to existing data schemas in `constants.ts`.
- **Phased Rollout:** Foundational styles first, followed by section-by-section redesign.
- **Performance:** Limit backdrop-blur usage and optimize image assets.

## Deployment
- **Platform:** (Assuming GitHub Pages/Vercel/Netlify as per existing flow).
- **CI/CD:** GitHub Actions (as seen in `.github/workflows/deploy.yml`).
