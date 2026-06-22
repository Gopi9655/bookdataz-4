# Global Theme Audit — One ThemeTweaks System for the Whole Site

_Last updated: 2026-06-22_

## Goal

Make a **single** ThemeTweaks palette selection drive the entire website
(every page and shared component) through one shared CSS-variable layer, and
restore the source-backed social-proof data (testimonials with star ratings,
Trusted-By logos) that the redesign had dropped.

There is **one** ThemeTweaks selector (`components/dev/ThemeTweaks.jsx`). It is
not duplicated per route. No route-specific theme logic was introduced.

## How one selector now controls the whole site

1. **ThemeTweaks** writes a palette's core tokens onto
   `document.documentElement.style` and sets
   `document.documentElement.dataset.theme` (unchanged mechanism).
2. **`lib/themePalettes.js`** — every palette is `{ ...BASE, ...overrides }`.
   `BASE` defines 24 core tokens (surfaces, text, accents, hero, contrast,
   footer, shadow). Palettes override only what differs, so every palette is a
   complete, readable token set. Palettes were **not** removed and no single
   palette was locked in.
3. **`src/app/globals.css :root`** derives the entire *semantic* token set from
   those core tokens via `var()` / `color-mix()`:
   `--page-bg`, `--section-bg`, `--section-alt-bg`, `--section-muted-bg`,
   `--section-contrast-bg/-text/-muted`, `--surface-1/2/3`,
   `--card-bg`, `--card-elevated-bg`, `--card-border`,
   `--accent-tint/-soft/-strong/-border`, `--cta-bg/-text`,
   `--nav-*`, `--dropdown-bg/-text/-muted/-border`,
   `--footer-bg/-text`, `--testimonial-bg`, `--trusted-logo-bg`,
   `--focus-ring`, `--shadow-rgb`.
   Because these live in the stylesheet (not inline), they **recompute
   automatically** whenever ThemeTweaks changes the core tokens — so every
   route that consumes them re-themes with no per-route code.
4. Components reach the palette three ways, all funnelling into the same tokens:
   - **`.bdz-*` semantic classes** (new shared layer) for refactored markup.
   - **Direct token utilities** (`bg-[var(--…)]`, `text-[color:var(--…)]`) in
     the shared chrome (Navbar, Footer, PageHeader, homepage section headings).
   - **THEME COMPAT OVERRIDES** — a central block that remaps the legacy
     hardcoded Tailwind utilities (`bg-white`, `gray-*`, `slate-*`, `orange-*`,
     warm hex values, `blue-*`) onto the same tokens, so the long tail of
     existing markup follows the palette without rewriting every file.

## New semantic class system (`globals.css`)

Added a shared `.bdz-*` layer so future/refactored markup uses semantics, not
raw colors:

`.bdz-page`, `.bdz-section`, `.bdz-section-alt`, `.bdz-section-muted`,
`.bdz-section-contrast`, `.bdz-card`, `.bdz-card-elevated`, `.bdz-gradient-card`,
`.bdz-heading`, `.bdz-text`, `.bdz-muted`, `.bdz-eyebrow`, `.bdz-chip`,
`.bdz-button-primary`, `.bdz-button-secondary`, `.bdz-page-header`,
`.bdz-logo-tile`, `.bdz-social-proof-section`.

Each maps directly to palette tokens (see the `BDZ SEMANTIC CLASSES` block).

## Token additions (`globals.css :root`)

| Token | Derivation | Why |
|-------|-----------|-----|
| `--page-bg` | `var(--site-bg)` | semantic page background for `.bdz-page` |
| `--section-muted-bg` | `color-mix(surface-2 70%, surface-1)` | third light rhythm surface |
| `--card-elevated-bg` | `var(--card-bg-2)` | elevated card surface |
| `--dropdown-bg/-text/-muted/-border` | card/text/border tokens | promoted to `:root` so every menu inherits them (mega-menu may still override locally) |

## Files changed

| File | What changed | Token / class used |
|------|--------------|--------------------|
| `src/app/globals.css` | Added `.bdz-*` semantic classes; added `--page-bg`, `--section-muted-bg`, `--card-elevated-bg`, root-level `--dropdown-*`; extended compat layer for generic neutrals (`bg-white`, `gray-*`, `slate` bg, `slate-400/300/200` text, placeholders) and remaining accent shades (`orange-400/100/50`, `orange-50/50–60`, `orange-400/10–12`); added testimonial star styles | all theme tokens |
| `src/app/page.js` | Homepage `SectionHeading` eyebrow/title/description recolored from `text-orange-700` / `text-[#151515]` / `text-slate-600` (and light variants) to `var(--accent-strong/-soft)`, `var(--heading)`/`--section-contrast-text`, `var(--text-muted)`/`--section-contrast-muted` | `--accent-*`, `--heading`, `--text-muted`, `--section-contrast-*` |
| `components/PageHeader.js` | Replaced fixed `bg-[#1b1714]` + fixed orange radial with `.bdz-page-header`; title to `--section-contrast-text` | `.bdz-page-header`, `--section-contrast-text` |
| `components/Navbar.js` | (already token-driven) verified nav + mailing mega-menu follow `--nav-*` / `--dropdown-*` / `--accent-*`; dropdown centered under the item, solid surface | `--nav-*`, `--dropdown-*`, `--accent-*` |
| `components/home/TestimonialsCarousel.jsx` | Added source-backed `StarRating` (lucide `Star`) driven by `rating` | `--accent`, `--text-muted` |
| `src/app/about/page.js` | Renders all source-backed testimonials; added star row from `rating` (themed for dark section) | `--accent-soft` |
| `src/resource/testimonials.js` | Replaced 3-entry placeholder set with all 7 **source-backed** legacy testimonials (name, role, quote, image, `rating`), verbatim | n/a (data) |
| `components/home/TrustedBy.jsx` | Source-backed logo marquee (15 legacy logos) + reduced-motion grid fallback | `--trusted-logo-bg`, `--card-border`, `--accent-border` |

## Hardcoded color patterns audited and how they are handled

Audited across `src/app`, `components`, `globals.css`, `tailwind.config.js`,
`lib/themePalettes.js`, `components/dev/ThemeTweaks.jsx`.

| Pattern | Resolution | Maps to |
|---------|-----------|---------|
| `text-orange-700/800`, `text-[#b84a1d]` | compat | `--accent-strong` |
| `text-orange-500/600`, `text-orange-400` | compat | `--accent` |
| `text-orange-100/200/300`, `text-orange-50` | compat | `--accent-soft` |
| `bg-orange-500/600`, `bg-orange-400` | compat | `--accent` |
| `bg-orange-50` (+/50,/60,/90), `bg-orange-100`, `bg-orange-400/10–12` | compat | `--accent-tint` |
| `border-orange-100/200/300/400/50` | compat | `--accent-border` |
| `from-/via-/to-orange-*` gradients | compat | `--accent` / `--accent-soft` |
| `text-[#151515]`, `text-slate-950/900`, `text-gray-900/800` | compat | `--heading` |
| `text-slate-800…500`, `text-gray-700…400`, warm hex body | compat | `--text-muted` |
| `text-slate-400/300/200`, `text-gray-300/200` (light-on-dark) | compat | `--section-contrast-muted` |
| `bg-white`, `bg-white/72…95`, warm-hex card bg, `bg-gray-50` | compat | `--card-bg` |
| `bg-gray-100/200` | compat | `--surface-2` |
| `bg-slate-950/900/800` dark bands | compat | `--section-contrast-bg` |
| dark hex page bands (`#1b1714`, `#211814`, …) | compat | `--section-contrast-bg` |
| `border-gray-*`, `border-slate-200`, warm-hex borders | compat | `--card-border` |
| `placeholder:text-slate-400/gray-400` | compat | `--text-muted` |
| `blue-*` (legacy contact/inner) | compat | `--accent-*` / `--card-border` |
| `brandWarm-*` | compat | `--surface-1/2` |
| Homepage `SectionHeading`, `PageHeader` | **refactored** to tokens / `.bdz-*` | semantic |

## Intentionally left hardcoded (with reason)

- **`white/<alpha>` overlays** (`bg-white/[0.05]`, `border-white/10`,
  `text-white`) inside dark *contrast* sections (hero, CTA, reach, tech,
  command centre, footer panel). These sit on `--section-contrast-bg`, which is
  dark on every palette, so translucent white is the correct, palette-agnostic
  treatment. Re-tokenising them would break legibility on dark themes.
- **`emerald-*` / brand-green** status accents ("Verified", "live") — a
  semantic *status* color (green = verified), deliberately independent of the
  brand accent. Driven by `--brand-green` / `--brand-green-soft`.
- **`src/app/visual-lab/`** — internal dev playground, not a shipped route;
  excluded from the audit.

## Result

Switching any palette in ThemeTweaks now recolors the homepage **and** every
internal page (about, contact, datacard, technology, industry detail, mission,
story, team) plus shared chrome (navbar, mailing-list dropdown, footer,
page headers, chatbot/cookie surfaces) coherently, via one shared token layer —
no per-route theme code, no removed palettes, no locked palette.
