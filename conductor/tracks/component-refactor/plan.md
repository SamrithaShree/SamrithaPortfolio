# Plan: Component Refactor Implementation

## Objective
Implement glassmorphism and refined UI across key portfolio sections.

## 1. Navbar Modernization
- **Refactor `Navbar.tsx`**:
  - Replace `bg-gray-800` with `glass-navbar`.
  - On desktop, use `max-w-[70%]` or `max-w-4xl` for a centered dock appearance.
  - Update `Sam.dev` logo: use `font-space` and a cyan-to-violet gradient.
  - Links: Use subtle white/50 color, switching to white/100 on hover.
  - Add Lucide `Menu` and `X` icons.

## 2. Hero Section Refactor
- **Refactor `Hero.tsx`**:
  - Main Heading: `font-space`, `text-6xl+`, `bg-clip-text` with cyan/violet gradient.
  - Sub-heading: Semi-transparent slate, refined spacing.
  - Add a "Status Pill": Fixed top right of the hero with a breathing animation.
  - CTA Buttons: One "Solid Glass" and one "Outline" variant.

## 3. Project Showcase Upgrade
- **Refactor `ProjectCard.tsx` and `Projects.tsx`**:
  - Apply `glass-card` class.
  - Image: Add subtle inner glow or rounded-xl border.
  - Tags: Semi-transparent chips with tech-specific colored borders.
  - Lucide icons for External Link and GitHub.

## 4. Skills & Tech Stack
- **Refactor `Skills.tsx` and `SkillCard.tsx`**:
  - Ensure all cards use the same glass foundation.
  - Use monochrome tech icons for a cleaner look.

## Verification
- Test mobile menu responsiveness.
- Check hover states across all buttons and links.
- Performance audit on backdrop-blur surfaces.
