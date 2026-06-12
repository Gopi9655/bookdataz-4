# BookDataZ Redesign — Claude Instructions

## Data & Content Lock (NEVER TOUCH)

- **Do not modify** `src/resource/data.js` or `src/resource/mockdata.js` under any circumstances.
- All rendered content (category names, counts, subcategories, industry slugs, record counts) must be sourced exclusively from these two files via their existing exports.
- Do not hardcode or inline any data that already exists in those files.

## Route & API Preservation

- Preserve all existing routes exactly: `/`, `/about`, `/contact`, `/datacard`, `/mission`, `/story`, `/team`, `/technology`, `/[industry]`.
- Do not rename, remove, or add route segments.
- Do not alter `src/app/api/contact/route.ts` — the POST handler, field names, validation schema (Zod), and email logic are locked.
- Do not change contact form field names, types, or the reCAPTCHA integration (`react-google-recaptcha`).
- The `[industry]` dynamic route must continue to resolve slugs from `data.js` — do not add or remove slug entries.

## Fabrication Prohibition

Never introduce any of the following unless they exist verbatim in `data.js` or `mockdata.js`:

- Testimonials, quotes, or attributed reviews
- Company names, brand logos, or client lists
- Country or city names — if global reach must be conveyed, use abstract geographic visuals (gradient maps, dot-grid globes) rather than naming specific countries. Do not name a country unless it appears as approved public content in the data files.
- Star ratings or numeric scores
- "Trusted by X companies" or similar aggregate claims
- Record counts, percentages, or coverage metrics invented outside the data files
- Named employees, founders, or team members
- Awards, certifications, or press mentions

## Visual Direction

**Goal:** Premium futuristic B2B SaaS — a serious, credible email-data intelligence platform.

### Palette (balanced — not dark-only, not flat-light)

| Token        | Usage                                      |
|--------------|--------------------------------------------|
| Pearl `#F5F4F0` / `#FAFAF8` | Page backgrounds, card surfaces  |
| Navy `#0B1F3A` / `#112240`  | Primary text, hero backdrops, section anchors |
| Orange `#E8622A` / `#F4743B` | CTAs, active states, accent strokes |
| Steel-blue `#4A90B8` / `#6AABCC` | Secondary actions, data highlights, gradients |
| Mid-grey `#C8CDD6`          | Dividers, subtle borders |

Do not shift the overall page into full dark-mode (no `bg-black` or `bg-gray-900` base). Do not use flat all-white layouts. Pearl + navy contrast is the base.

### Motion

- Use Framer Motion (`framer-motion` is already installed) for all animations.
- Preferred patterns: scroll-triggered fade+slide via `useInView` / `react-intersection-observer`, staggered children, viewport-aware parallax.
- 3D card tilt effects (CSS `perspective` + `rotateX`/`rotateY` on hover) are approved for data cards and feature tiles.
- Do not use Three.js/WebGL unless explicitly approved in the current task. Prefer CSS, SVG, gradients, transforms, and existing lightweight motion.
- No janky CSS keyframe loops; prefer spring-based Framer Motion variants.
- Respect `prefers-reduced-motion` — wrap all decorative animations in a motion-safe guard.

### Layout

- Premium large-whitespace layout with clear visual hierarchy.
- Section rhythm: full-bleed hero → data-anchor strip → feature grid → CTA band.
- Cards: rounded-2xl, subtle shadow, hover lift + 3D tilt, thin orange or steel-blue border accent.
- Typography: large display weights for headings (font-bold or font-extrabold), relaxed tracking, not condensed.
- No stock-photo placeholders. SVG icons (`lucide-react`, `react-icons`) and data-driven charts (`chart.js` / `react-chartjs-2`) are approved visuals.

### What to Avoid

- Dark cyber / hacker aesthetic (neon green, pure black backgrounds, scanline effects)
- Corporate flat light (all white, no depth, no motion)
- Glassmorphism overuse — one subtle frosted panel per page maximum
- Animated particle fields that obscure content

## After Every Edit — Required Checks

Run these three commands in order and fix any failures before committing:

```bash
npm run check:content   # content lock guard
git diff --check        # trailing whitespace / conflict markers
npm run build           # Next.js production build
```

A commit with a failing build or content-lock violation must not be pushed.

## Stack Reference

- Next.js 15, React 19, Tailwind CSS 3
- Framer Motion 11 (animation)
- Three.js 0.171 (installed but gated — use only when explicitly approved per task)
- react-google-recaptcha 3 (contact form — do not replace)
- react-intersection-observer 9 (scroll triggers)
- lucide-react, react-icons (icons)
- chart.js 4 / react-chartjs-2 5 (data visualisation)
- No additional UI-component libraries unless approved.
