# Plan: Foundations & Global Styles Implementation

## Objective
Establish the baseline "Midnight Nebula" theme.

## Tasks
1. **Dependency Setup**
   - Install `framer-motion` (for animations).
   - Install `lucide-react` (for consistent iconography).
   - Install `clsx` and `tailwind-merge` (for cleaner utility class management).

2. **Tailwind Configuration**
   - Define custom colors: `midnight` (`#030014`), `violet-glow` (`#8B5CF6`), `cyan-glow` (`#06B6D4`).
   - Define custom font families: `space-grotesk`, `inter`.
   - Add backdrop-blur utilities if not already present.

3. **Global Styles Injection**
   - Add Google Fonts link or local import in `index.html`.
   - Update `index.css` to apply the background and default text colors.
   - Setup a centralized `App.tsx` wrapper for the ambient background effect.

4. **Ambient Background Implementation**
   - Create a fixed container with radial-gradient overlays to create the "Nebula" look.
   - Ensure it stays behind all content.

## Verification
- Run `npm run dev` to verify the background and font loading.
- Check Lighthouse accessibility score for the base theme.
