# Plan: Motion & Final Polish Implementation

## Objective
Apply Framer Motion animations to elevate the user experience.

## 1. Scroll-Reveal System
- **Update `SectionWrapper.tsx`**:
  - Wrap content in `motion.div`.
  - Use `initial={{ opacity: 0, y: 20 }}`, `whileInView={{ opacity: 1, y: 0 }}`, `viewport={{ once: true, margin: "-100px" }}`.
  - Set `transition={{ duration: 0.8, ease: "easeOut" }}`.

## 2. Stagger Animations
- **Update `Skills.tsx`**:
  - Add `variants` for staggered children reveals.
- **Update `Projects.tsx`**:
  - Apply same stagger logic to `ProjectCard` grid.

## 3. CTA & Interaction Polish
- **Update `Button.tsx`**:
  - Add `whileHover={{ scale: 1.05 }}` and `whileTap={{ scale: 0.95 }}` to all buttons.
- **Update `Hero.tsx`**:
  - Add a soft "float" or "pulse" animation to the profile image container.

## 4. Final Consistency Pass
- Audit contrast for cyan/violet accents on dark background.
- Test mobile menu transition smoothness.
- Ensure all Lucide icons are correctly sized.

## Verification
- Run production build and test on a real mobile device if possible.
- Check Lighthouse accessibility score.
