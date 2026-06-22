// =============================================================================
// THEME PALETTES — temporary visual-selection tooling for BookDataZ.
// -----------------------------------------------------------------------------
// Each palette is a coherent, full-site token set. The ThemeTweaks dev panel
// applies a palette by writing these CSS custom properties onto
// document.documentElement; globals.css derives the remaining (tint / border /
// gradient / shadow) tokens from these via color-mix.
//
// NOTE: These are presentation tokens only. No copy, counts, clients, or
// claims are defined here — content stays sourced from the locked data files.
// =============================================================================

// Default theme (Cobalt Orange Executive). Every palette spreads this BASE and
// overrides only what differs, guaranteeing a complete, readable token set.
const BASE = {
  "--site-bg":
    "radial-gradient(circle at 12% -4%, rgba(46,91,186,0.06), transparent 30%), linear-gradient(180deg, #f7f9fc 0%, #eff3f9 52%, #e9eef6 100%)",
  "--surface-1": "#f4f7fb",
  "--surface-2": "#eaf0f8",
  "--card-bg": "#ffffff",
  "--card-border": "#dce4ef",
  "--heading": "#0b1f3a",
  "--text-main": "#243349",
  "--text-muted": "#5a6b82",
  "--accent": "#e8622a",
  "--accent-2": "#2e5bba",
  "--accent-soft": "#f4a37a",
  "--accent-strong": "#c24a18",
  "--nav-bg": "rgba(255,255,255,0.85)",
  "--nav-text": "#0b1f3a",
  "--hero-bg":
    "radial-gradient(circle at 82% 14%, rgba(46,91,186,0.2), transparent 38%), radial-gradient(circle at 4% 100%, rgba(232,98,42,0.12), transparent 36%), linear-gradient(155deg, #0c2a63 0%, #103a86 55%, #0b2552 100%)",
  "--hero-text": "#ffffff",
  "--hero-muted": "rgba(226,234,247,0.82)",
  "--hero-eyebrow": "var(--accent-soft)",
  "--hero-card-bg": "rgba(255,255,255,0.1)",
  "--hero-card-text": "#ffffff",
  "--hero-card-border": "rgba(255,255,255,0.18)",
  "--section-contrast-bg": "linear-gradient(155deg, #0b1f3a 0%, #0a1a30 100%)",
  "--footer-bg": "#0a1a30",
  "--shadow-rgb": "11, 31, 58",
};

// Shared light-hero block (white navbar + bright hero + dark hero text).
const lightHero = (heroBg, eyebrow = "var(--accent-strong)") => ({
  "--hero-bg": heroBg,
  "--hero-text": "#0b1f3a",
  "--hero-muted": "#566179",
  "--hero-eyebrow": eyebrow,
  "--hero-card-bg": "#ffffff",
  "--hero-card-text": "#0b1f3a",
  "--hero-card-border": "#dce4ef",
});

// Shared dark-page block (dark surfaces, light text). Pass accent overrides.
const darkPage = (over = {}) => ({
  "--surface-1": "#111d30",
  "--surface-2": "#0e1828",
  "--card-bg": "#15233a",
  "--card-border": "rgba(255,255,255,0.10)",
  "--heading": "#eef3fb",
  "--text-main": "#ccd7e8",
  "--text-muted": "#8ea0b8",
  "--nav-bg": "rgba(11,18,30,0.86)",
  "--nav-text": "#eef3fb",
  "--hero-text": "#ffffff",
  "--hero-muted": "rgba(220,230,245,0.78)",
  "--hero-eyebrow": "var(--accent-soft)",
  "--hero-card-bg": "rgba(255,255,255,0.06)",
  "--hero-card-text": "#ffffff",
  "--hero-card-border": "rgba(255,255,255,0.12)",
  "--shadow-rgb": "0, 0, 0",
  ...over,
});

const mk = (id, name, category, vars) => ({
  id,
  name,
  category,
  // Previous-site inspired = confident blue/indigo gradient hero + orange CTA.
  vars: { ...BASE, ...vars },
});

export const THEME_PALETTES = [
  // ----- A. Professional blue-first SaaS variants -------------------------
  mk("cobalt-orange-executive", "Cobalt Orange Executive", "Blue-first SaaS", {
    // BASE — confident cobalt gradient hero, orange CTA, white navbar.
  }),

  mk("azure-white-enterprise", "Azure White Enterprise", "Blue-first SaaS", {
    "--site-bg":
      "radial-gradient(circle at 88% -4%, rgba(47,111,176,0.07), transparent 30%), linear-gradient(180deg, #fbfdff 0%, #f1f6fc 100%)",
    "--surface-1": "#f4f9fe",
    "--surface-2": "#e9f1fa",
    "--card-border": "#dbe7f3",
    "--heading": "#0e2c52",
    "--text-main": "#2a3c54",
    "--text-muted": "#5d708a",
    "--accent": "#e8622a",
    "--accent-2": "#2f6fb0",
    "--accent-soft": "#f2a679",
    "--accent-strong": "#c24a18",
    ...lightHero(
      "radial-gradient(circle at 84% 12%, rgba(47,111,176,0.16), transparent 40%), linear-gradient(160deg, #ffffff 0%, #eaf2fb 100%)"
    ),
    "--section-contrast-bg": "linear-gradient(155deg, #0e2c52 0%, #0a2342 100%)",
    "--footer-bg": "#0a2342",
    "--shadow-rgb": "14, 44, 82",
  }),

  mk("navy-cobalt-premium", "Navy Cobalt Premium", "Blue-first SaaS", {
    "--accent": "#ef6a2c",
    "--accent-2": "#27488f",
    "--hero-bg":
      "radial-gradient(circle at 80% 16%, rgba(39,72,143,0.28), transparent 40%), linear-gradient(155deg, #0a1f44 0%, #0d2d6b 60%, #091a3a 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #0a1f44 0%, #07142e 100%)",
    "--footer-bg": "#07142e",
  }),

  mk("royal-blue-data", "Royal Blue Data", "Blue-first SaaS", {
    "--accent": "#2b50d6",
    "--accent-2": "#1b349c",
    "--accent-soft": "#8ea4f0",
    "--accent-strong": "#2340b4",
    "--heading": "#101a3d",
    "--text-muted": "#5a648a",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(43,80,214,0.32), transparent 42%), linear-gradient(155deg, #16266b 0%, #21379e 55%, #131f55 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #131f55 0%, #0d1640 100%)",
    "--footer-bg": "#0d1640",
    "--shadow-rgb": "16, 26, 61",
  }),

  mk("cloud-blue-service", "Cloud Blue Service", "Blue-first SaaS", {
    "--site-bg":
      "radial-gradient(circle at 86% -4%, rgba(74,144,184,0.08), transparent 30%), linear-gradient(180deg, #fbfeff 0%, #eef6fb 100%)",
    "--surface-1": "#f1f9fd",
    "--surface-2": "#e4f1f9",
    "--card-border": "#d6e7f1",
    "--heading": "#103048",
    "--text-main": "#28425a",
    "--text-muted": "#5a7388",
    "--accent": "#ef6a2c",
    "--accent-2": "#4a90b8",
    "--accent-soft": "#f2a679",
    ...lightHero(
      "radial-gradient(circle at 82% 14%, rgba(74,144,184,0.18), transparent 42%), linear-gradient(160deg, #ffffff 0%, #e4f1f8 100%)"
    ),
    "--section-contrast-bg": "linear-gradient(155deg, #103048 0%, #0c2536 100%)",
    "--footer-bg": "#0c2536",
    "--shadow-rgb": "16, 48, 72",
  }),

  mk("trust-blue-orange", "Trust Blue Orange", "Blue-first SaaS", {
    "--accent": "#ee6b2d",
    "--accent-2": "#1f63b8",
    "--hero-bg":
      "radial-gradient(circle at 82% 14%, rgba(31,99,184,0.26), transparent 42%), linear-gradient(155deg, #0d2c63 0%, #134a96 60%, #0c2552 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #0d2c63 0%, #0a1f47 100%)",
    "--footer-bg": "#0a1f47",
  }),

  mk("blue-steel-saas", "Blue Steel SaaS", "Blue-first SaaS", {
    "--site-bg":
      "radial-gradient(circle at 14% -4%, rgba(74,116,150,0.07), transparent 30%), linear-gradient(180deg, #f6f8fa 0%, #eceff3 100%)",
    "--surface-1": "#f1f4f7",
    "--surface-2": "#e6ebf0",
    "--card-border": "#d8dfe7",
    "--heading": "#1b2c3c",
    "--text-main": "#34465a",
    "--text-muted": "#62748a",
    "--accent": "#e06a36",
    "--accent-2": "#3d6f93",
    "--accent-soft": "#eaa57f",
    "--accent-strong": "#b6541f",
    "--hero-bg":
      "radial-gradient(circle at 80% 16%, rgba(61,111,147,0.3), transparent 42%), linear-gradient(155deg, #1d3447 0%, #2c5067 58%, #182c3c 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #1d3447 0%, #142531 100%)",
    "--footer-bg": "#142531",
    "--shadow-rgb": "27, 44, 60",
  }),

  mk("deep-blue-white-cta", "Deep Blue White CTA", "Blue-first SaaS", {
    "--accent": "#f3743a",
    "--accent-2": "#1c4fa0",
    "--card-border": "#d9e2ef",
    "--hero-bg":
      "radial-gradient(circle at 80% 12%, rgba(28,79,160,0.32), transparent 42%), linear-gradient(155deg, #071f4a 0%, #0f3c86 60%, #061738 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #071f4a 0%, #04122e 100%)",
    "--footer-bg": "#04122e",
    "--shadow-rgb": "7, 31, 74",
  }),

  // ----- B. Modern gradient / hero variants (previous-site inspired) ------
  mk("blue-violet-data-premium", "Blue Violet Data Premium", "Gradient hero", {
    "--accent": "#f4743b",
    "--accent-2": "#6446c8",
    "--accent-soft": "#f6a87b",
    "--heading": "#1a1740",
    "--text-muted": "#5f5b86",
    "--hero-bg":
      "radial-gradient(circle at 82% 14%, rgba(124,84,224,0.3), transparent 44%), linear-gradient(150deg, #241a63 0%, #3a2a9c 52%, #1c1450 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #1c1450 0%, #130d39 100%)",
    "--footer-bg": "#130d39",
    "--shadow-rgb": "26, 23, 64",
  }),

  mk("indigo-orange-service", "Indigo Orange Service", "Gradient hero", {
    "--accent": "#ef6a2c",
    "--accent-2": "#4338ca",
    "--accent-soft": "#f2a679",
    "--heading": "#1b1c4b",
    "--text-muted": "#5c5d86",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(79,70,229,0.32), transparent 44%), linear-gradient(152deg, #1e1f5c 0%, #322f9e 55%, #181951 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #181951 0%, #11123b 100%)",
    "--footer-bg": "#11123b",
    "--shadow-rgb": "27, 28, 75",
  }),

  mk("electric-blue-purple", "Electric Blue Purple Controlled", "Gradient hero", {
    "--accent": "#f59124",
    "--accent-2": "#5a44d6",
    "--accent-soft": "#f7be72",
    "--accent-strong": "#cf6f12",
    "--heading": "#161a45",
    "--text-muted": "#5a5f88",
    "--hero-bg":
      "radial-gradient(circle at 78% 12%, rgba(64,120,255,0.32), transparent 42%), radial-gradient(circle at 18% 92%, rgba(122,72,220,0.26), transparent 40%), linear-gradient(150deg, #161d63 0%, #2d3aa8 52%, #181452 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #161d63 0%, #0f123f 100%)",
    "--footer-bg": "#0f123f",
    "--shadow-rgb": "22, 26, 69",
  }),

  mk("global-data-gradient", "Global Data Gradient", "Gradient hero", {
    "--accent": "#ef6a2c",
    "--accent-2": "#1796a6",
    "--accent-soft": "#f2a679",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(23,150,166,0.3), transparent 44%), linear-gradient(150deg, #0b2c5e 0%, #115e86 50%, #0c3a56 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #0b2c5e 0%, #082138 100%)",
    "--footer-bg": "#082138",
    "--shadow-rgb": "11, 44, 94",
  }),

  mk("executive-indigo", "Executive Indigo", "Gradient hero", {
    "--accent": "#ee6a2c",
    "--accent-2": "#3b3f99",
    "--heading": "#191a40",
    "--text-muted": "#5a5b80",
    "--hero-bg":
      "radial-gradient(circle at 82% 16%, rgba(59,63,153,0.3), transparent 42%), linear-gradient(155deg, #1a1c4e 0%, #272a78 58%, #15163f 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #15163f 0%, #0f1030 100%)",
    "--footer-bg": "#0f1030",
    "--shadow-rgb": "25, 26, 64",
  }),

  mk("premium-blue-aurora", "Premium Blue Aurora", "Gradient hero", {
    "--accent": "#f4743b",
    "--accent-2": "#2bb6c4",
    "--accent-soft": "#f6a87b",
    "--hero-bg":
      "radial-gradient(circle at 78% 10%, rgba(43,182,196,0.28), transparent 42%), radial-gradient(circle at 20% 96%, rgba(46,91,186,0.26), transparent 42%), linear-gradient(150deg, #0a2a5e 0%, #0f3f7e 54%, #0a2348 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #0a2a5e 0%, #071c3e 100%)",
    "--footer-bg": "#071c3e",
    "--shadow-rgb": "10, 42, 94",
  }),

  // ----- C. White / orange professional variants -------------------------
  mk("orange-white-saas", "Orange White SaaS", "White / orange", {
    "--site-bg":
      "radial-gradient(circle at 88% -4%, rgba(232,98,42,0.06), transparent 30%), linear-gradient(180deg, #fffdfb 0%, #fdf5ef 100%)",
    "--surface-1": "#fff8f3",
    "--surface-2": "#fdeee4",
    "--card-border": "#f0e0d3",
    "--heading": "#231a14",
    "--text-main": "#3d3128",
    "--text-muted": "#7a6a5d",
    "--accent": "#ef6a2c",
    "--accent-2": "#c4521c",
    "--accent-soft": "#f4a778",
    "--accent-strong": "#bf4e18",
    ...lightHero(
      "radial-gradient(circle at 84% 12%, rgba(232,98,42,0.16), transparent 42%), linear-gradient(160deg, #ffffff 0%, #fdeadd 100%)",
      "var(--accent-strong)"
    ),
    "--hero-text": "#231a14",
    "--hero-muted": "#6f5f52",
    "--hero-card-text": "#231a14",
    "--hero-card-border": "#f0e0d3",
    "--section-contrast-bg": "linear-gradient(155deg, #241a14 0%, #1a120d 100%)",
    "--footer-bg": "#1a120d",
    "--shadow-rgb": "60, 40, 28",
  }),

  mk("clean-ivory-orange", "Clean Ivory Orange", "White / orange", {
    "--site-bg":
      "radial-gradient(circle at 12% -4%, rgba(232,98,42,0.05), transparent 30%), linear-gradient(180deg, #fcfbf7 0%, #f6f2ea 100%)",
    "--surface-1": "#f8f5ee",
    "--surface-2": "#f1ece1",
    "--card-border": "#e7e0d2",
    "--heading": "#22201a",
    "--text-main": "#3c382f",
    "--text-muted": "#766f60",
    "--accent": "#e8622a",
    "--accent-2": "#a8632a",
    "--accent-soft": "#f0a574",
    "--accent-strong": "#bb4d1a",
    ...lightHero(
      "radial-gradient(circle at 84% 14%, rgba(232,98,42,0.13), transparent 42%), linear-gradient(160deg, #fcfbf7 0%, #f1e9dc 100%)"
    ),
    "--hero-text": "#22201a",
    "--hero-muted": "#6d6657",
    "--hero-card-text": "#22201a",
    "--hero-card-border": "#e7e0d2",
    "--section-contrast-bg": "linear-gradient(155deg, #232019 0%, #181610 100%)",
    "--footer-bg": "#181610",
    "--shadow-rgb": "60, 56, 47",
  }),

  mk("warm-white-executive", "Warm White Executive", "White / orange", {
    "--site-bg":
      "radial-gradient(circle at 86% -4%, rgba(46,91,186,0.05), transparent 30%), linear-gradient(180deg, #fdfcfa 0%, #f4f3ef 100%)",
    "--surface-1": "#f7f6f2",
    "--surface-2": "#eeede7",
    "--card-border": "#e3e1d9",
    "--heading": "#15233a",
    "--text-main": "#33404f",
    "--text-muted": "#6a7281",
    "--accent": "#ec6a2d",
    "--accent-2": "#2e5bba",
    "--accent-strong": "#bf4e18",
    ...lightHero(
      "radial-gradient(circle at 84% 14%, rgba(46,91,186,0.12), transparent 42%), linear-gradient(160deg, #fdfcfa 0%, #eeece5 100%)"
    ),
    "--section-contrast-bg": "linear-gradient(155deg, #15233a 0%, #101b2c 100%)",
    "--footer-bg": "#101b2c",
    "--shadow-rgb": "33, 40, 50",
  }),

  mk("minimal-orange-data", "Minimal Orange Data", "White / orange", {
    "--site-bg": "linear-gradient(180deg, #ffffff 0%, #f7f7f6 100%)",
    "--surface-1": "#f8f8f7",
    "--surface-2": "#f0f0ee",
    "--card-border": "#e6e6e3",
    "--heading": "#1a1a1a",
    "--text-main": "#33332f",
    "--text-muted": "#6f6f69",
    "--accent": "#ef6a2c",
    "--accent-2": "#1f1f1f",
    "--accent-soft": "#f4a778",
    "--accent-strong": "#c8521c",
    ...lightHero(
      "radial-gradient(circle at 84% 14%, rgba(232,98,42,0.1), transparent 42%), linear-gradient(160deg, #ffffff 0%, #f3f3f1 100%)"
    ),
    "--hero-text": "#1a1a1a",
    "--hero-muted": "#5f5f59",
    "--hero-card-text": "#1a1a1a",
    "--hero-card-border": "#e6e6e3",
    "--section-contrast-bg": "linear-gradient(155deg, #1c1c1c 0%, #121212 100%)",
    "--footer-bg": "#121212",
    "--shadow-rgb": "26, 26, 26",
  }),

  // ----- D. Dark-but-not-hacker premium variants -------------------------
  mk("midnight-blue-orange", "Midnight Blue Orange", "Dark premium",
    darkPage({
      "--site-bg":
        "radial-gradient(circle at 14% -4%, rgba(232,98,42,0.08), transparent 30%), linear-gradient(180deg, #0c1626 0%, #0a1320 100%)",
      "--accent": "#f4743b",
      "--accent-2": "#3f6fd0",
      "--accent-soft": "#f8a877",
      "--accent-strong": "#f4743b",
      "--hero-bg":
        "radial-gradient(circle at 80% 14%, rgba(63,111,208,0.3), transparent 42%), linear-gradient(155deg, #102146 0%, #16336e 58%, #0b1730 100%)",
      "--section-contrast-bg": "linear-gradient(155deg, #0a1320 0%, #070d17 100%)",
      "--footer-bg": "#070d17",
    })
  ),

  mk("graphite-cobalt", "Graphite Cobalt", "Dark premium",
    darkPage({
      "--site-bg":
        "radial-gradient(circle at 14% -4%, rgba(58,108,196,0.08), transparent 30%), linear-gradient(180deg, #16181d 0%, #101216 100%)",
      "--surface-1": "#1b1e24",
      "--surface-2": "#16191e",
      "--card-bg": "#1f232b",
      "--accent": "#3f7ad6",
      "--accent-2": "#2b5bb0",
      "--accent-soft": "#8fb4ec",
      "--accent-strong": "#5a93e0",
      "--nav-bg": "rgba(16,18,22,0.86)",
      "--hero-bg":
        "radial-gradient(circle at 80% 14%, rgba(63,122,214,0.28), transparent 42%), linear-gradient(155deg, #1a1f29 0%, #24314a 58%, #15181f 100%)",
      "--section-contrast-bg": "linear-gradient(155deg, #16181d 0%, #0d0f12 100%)",
      "--footer-bg": "#0d0f12",
    })
  ),

  mk("dark-navy-white", "Dark Navy White", "Dark premium",
    darkPage({
      "--site-bg":
        "radial-gradient(circle at 14% -4%, rgba(255,255,255,0.04), transparent 30%), linear-gradient(180deg, #0c1a30 0%, #091322 100%)",
      "--surface-1": "#102239",
      "--surface-2": "#0d1d31",
      "--card-bg": "#13294a",
      "--accent": "#f3743a",
      "--accent-2": "#3f6fd0",
      "--accent-soft": "#f7a877",
      "--accent-strong": "#f3743a",
      "--hero-bg":
        "radial-gradient(circle at 80% 14%, rgba(63,111,208,0.3), transparent 42%), linear-gradient(155deg, #0d2348 0%, #143a78 58%, #0a1d3c 100%)",
      "--section-contrast-bg": "linear-gradient(155deg, #091322 0%, #060d18 100%)",
      "--footer-bg": "#060d18",
    })
  ),

  mk("charcoal-orange-premium", "Charcoal Orange Premium", "Dark premium",
    darkPage({
      "--site-bg":
        "radial-gradient(circle at 14% -4%, rgba(232,98,42,0.09), transparent 30%), linear-gradient(180deg, #171513 0%, #100f0d 100%)",
      "--surface-1": "#1d1a17",
      "--surface-2": "#171513",
      "--card-bg": "#221e1a",
      "--card-border": "rgba(255,255,255,0.09)",
      "--accent": "#f4743b",
      "--accent-2": "#c4521c",
      "--accent-soft": "#f8ab7c",
      "--accent-strong": "#f4743b",
      "--nav-bg": "rgba(16,15,13,0.86)",
      "--hero-bg":
        "radial-gradient(circle at 80% 14%, rgba(244,116,59,0.22), transparent 42%), linear-gradient(155deg, #211c18 0%, #2e2620 58%, #19150f 100%)",
      "--section-contrast-bg": "linear-gradient(155deg, #171513 0%, #0e0c0a 100%)",
      "--footer-bg": "#0e0c0a",
    })
  ),

  // ----- E. Neutral premium B2B variants ---------------------------------
  mk("stone-blue-orange", "Stone Blue Orange", "Neutral premium", {
    "--site-bg":
      "radial-gradient(circle at 14% -4%, rgba(46,91,186,0.05), transparent 30%), linear-gradient(180deg, #f7f7f5 0%, #efefec 100%)",
    "--surface-1": "#f3f3f0",
    "--surface-2": "#e9e9e4",
    "--card-border": "#deded7",
    "--heading": "#23262b",
    "--text-main": "#3b3f46",
    "--text-muted": "#6d7078",
    "--accent": "#e8622a",
    "--accent-2": "#33639e",
    "--accent-strong": "#bd4d18",
    ...lightHero(
      "radial-gradient(circle at 84% 14%, rgba(51,99,158,0.13), transparent 42%), linear-gradient(160deg, #f7f7f5 0%, #e7e7e2 100%)"
    ),
    "--hero-text": "#23262b",
    "--hero-muted": "#5f636b",
    "--hero-card-text": "#23262b",
    "--hero-card-border": "#deded7",
    "--section-contrast-bg": "linear-gradient(155deg, #23262b 0%, #18191d 100%)",
    "--footer-bg": "#18191d",
    "--shadow-rgb": "35, 38, 43",
  }),

  mk("platinum-cobalt", "Platinum Cobalt", "Neutral premium", {
    "--site-bg":
      "radial-gradient(circle at 86% -4%, rgba(46,91,186,0.06), transparent 30%), linear-gradient(180deg, #fafbfc 0%, #f0f2f5 100%)",
    "--surface-1": "#f4f6f8",
    "--surface-2": "#e9ecf0",
    "--card-border": "#dde1e7",
    "--heading": "#1a2230",
    "--text-main": "#36404e",
    "--text-muted": "#666f7d",
    "--accent": "#2e5bba",
    "--accent-2": "#1f3f8c",
    "--accent-soft": "#8ba6dd",
    "--accent-strong": "#26499a",
    ...lightHero(
      "radial-gradient(circle at 84% 14%, rgba(46,91,186,0.14), transparent 42%), linear-gradient(160deg, #fafbfc 0%, #e7ecf2 100%)"
    ),
    "--section-contrast-bg": "linear-gradient(155deg, #1a2230 0%, #121822 100%)",
    "--footer-bg": "#121822",
    "--shadow-rgb": "26, 34, 48",
  }),

  mk("slate-white-orange", "Slate White Orange", "Neutral premium", {
    "--site-bg":
      "radial-gradient(circle at 14% -4%, rgba(100,116,139,0.06), transparent 30%), linear-gradient(180deg, #fbfcfd 0%, #f1f3f6 100%)",
    "--surface-1": "#f4f6f8",
    "--surface-2": "#e8ecf1",
    "--card-border": "#dce1e8",
    "--heading": "#1e293b",
    "--text-main": "#384458",
    "--text-muted": "#64748b",
    "--accent": "#ef6a2c",
    "--accent-2": "#475569",
    "--accent-strong": "#c8521c",
    ...lightHero(
      "radial-gradient(circle at 84% 14%, rgba(71,85,105,0.12), transparent 42%), linear-gradient(160deg, #fbfcfd 0%, #e7ebf0 100%)"
    ),
    "--hero-text": "#1e293b",
    "--hero-muted": "#5b6677",
    "--hero-card-text": "#1e293b",
    "--hero-card-border": "#dce1e8",
    "--section-contrast-bg": "linear-gradient(155deg, #1e293b 0%, #141c2a 100%)",
    "--footer-bg": "#141c2a",
    "--shadow-rgb": "30, 41, 59",
  }),

  mk("sand-blue-professional", "Sand Blue Professional", "Neutral premium", {
    "--site-bg":
      "radial-gradient(circle at 14% -4%, rgba(46,91,186,0.05), transparent 30%), linear-gradient(180deg, #faf8f3 0%, #f2efe7 100%)",
    "--surface-1": "#f6f3ec",
    "--surface-2": "#ece8de",
    "--card-border": "#e2ddd0",
    "--heading": "#1d2b3a",
    "--text-main": "#3a4150",
    "--text-muted": "#6f7180",
    "--accent": "#e8622a",
    "--accent-2": "#2f6299",
    "--accent-strong": "#bd4d18",
    ...lightHero(
      "radial-gradient(circle at 84% 14%, rgba(47,98,153,0.13), transparent 42%), linear-gradient(160deg, #faf8f3 0%, #ece6da 100%)"
    ),
    "--hero-text": "#1d2b3a",
    "--hero-muted": "#5e6675",
    "--hero-card-text": "#1d2b3a",
    "--hero-card-border": "#e2ddd0",
    "--section-contrast-bg": "linear-gradient(155deg, #1d2b3a 0%, #141f2b 100%)",
    "--footer-bg": "#141f2b",
    "--shadow-rgb": "29, 43, 58",
  }),

  // ----- Optional extras --------------------------------------------------
  mk("teal-blue-enterprise", "Teal Blue Enterprise", "Blue-first SaaS", {
    "--accent": "#ef6a2c",
    "--accent-2": "#0e7c86",
    "--accent-soft": "#f2a679",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(14,124,134,0.3), transparent 44%), linear-gradient(150deg, #07303f 0%, #0b5563 52%, #07303d 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #07303f 0%, #052028 100%)",
    "--footer-bg": "#052028",
    "--shadow-rgb": "7, 48, 63",
  }),

  mk("sky-navy-global", "Sky Navy Global", "Blue-first SaaS", {
    "--site-bg":
      "radial-gradient(circle at 86% -4%, rgba(56,138,196,0.08), transparent 30%), linear-gradient(180deg, #fbfdff 0%, #edf5fb 100%)",
    "--surface-1": "#f2f8fd",
    "--surface-2": "#e3f0f9",
    "--card-border": "#d6e6f2",
    "--heading": "#0d2747",
    "--text-main": "#2a3f58",
    "--text-muted": "#5c7287",
    "--accent": "#ef6a2c",
    "--accent-2": "#388ac4",
    "--accent-soft": "#f2a679",
    ...lightHero(
      "radial-gradient(circle at 82% 14%, rgba(56,138,196,0.18), transparent 42%), linear-gradient(160deg, #ffffff 0%, #e1eef9 100%)"
    ),
    "--section-contrast-bg": "linear-gradient(155deg, #0d2747 0%, #091d38 100%)",
    "--footer-bg": "#091d38",
    "--shadow-rgb": "13, 39, 71",
  }),

  // ========================================================================
  // Expansion set — 20 additional curated blue/orange systems.
  // Old-site opening pattern (white navbar + blue/indigo gradient hero +
  // orange CTA + light right card) is reproduced by: Executive Cobalt Orange,
  // Navy White Orange, Blue Gradient Premium, Global Data Blue.
  // ========================================================================
  mk("executive-cobalt-orange", "Executive Cobalt Orange", "Blue-first SaaS", {
    "--accent": "#ef6a2c",
    "--accent-2": "#2b54b8",
    "--accent-soft": "#f4a87c",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(43,84,184,0.3), transparent 42%), radial-gradient(circle at 6% 100%, rgba(239,106,44,0.12), transparent 36%), linear-gradient(155deg, #0a2356 0%, #14409a 58%, #0a1f4c 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #0a2356 0%, #07173a 100%)",
    "--footer-bg": "#07173a",
    "--shadow-rgb": "10, 35, 86",
  }),

  mk("deep-azure-orange", "Deep Azure Orange", "Blue-first SaaS", {
    "--accent": "#ee6a2c",
    "--accent-2": "#1f74c4",
    "--accent-soft": "#f2a679",
    "--heading": "#0d2c4d",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(31,116,196,0.32), transparent 44%), linear-gradient(155deg, #082a52 0%, #0f4f8e 58%, #07223f 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #082a52 0%, #051a34 100%)",
    "--footer-bg": "#051a34",
    "--shadow-rgb": "8, 42, 82",
  }),

  mk("enterprise-royal-blue", "Enterprise Royal Blue", "Blue-first SaaS", {
    "--accent": "#f0762f",
    "--accent-2": "#2741b0",
    "--accent-soft": "#f4a87c",
    "--heading": "#121a44",
    "--text-muted": "#586089",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(39,65,176,0.34), transparent 44%), linear-gradient(155deg, #14206a 0%, #2335a4 56%, #101a54 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #14206a 0%, #0d1444 100%)",
    "--footer-bg": "#0d1444",
    "--shadow-rgb": "18, 26, 68",
  }),

  mk("navy-white-orange", "Navy White Orange", "Blue-first SaaS", {
    "--accent": "#ef6a2c",
    "--accent-2": "#21407f",
    "--card-border": "#d8e1ee",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(33,64,127,0.3), transparent 42%), linear-gradient(155deg, #091d3f 0%, #133463 58%, #08182f 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #091d3f 0%, #061224 100%)",
    "--footer-bg": "#061224",
    "--shadow-rgb": "9, 29, 63",
  }),

  mk("blue-gradient-premium", "Blue Gradient Premium", "Gradient hero", {
    "--accent": "#f4743b",
    "--accent-2": "#2f6fe0",
    "--accent-soft": "#f6a87b",
    "--hero-bg":
      "radial-gradient(circle at 78% 10%, rgba(47,111,224,0.34), transparent 44%), radial-gradient(circle at 20% 96%, rgba(20,60,160,0.3), transparent 44%), linear-gradient(150deg, #0a2768 0%, #134bb0 52%, #0a2056 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #0a2768 0%, #07173f 100%)",
    "--footer-bg": "#07173f",
    "--shadow-rgb": "10, 39, 104",
  }),

  mk("cobalt-graphite-saas", "Cobalt Graphite SaaS", "Neutral premium", {
    "--site-bg":
      "radial-gradient(circle at 14% -4%, rgba(46,91,186,0.06), transparent 30%), linear-gradient(180deg, #f6f7f9 0%, #ebedf1 100%)",
    "--surface-1": "#f1f3f6",
    "--surface-2": "#e6e9ee",
    "--card-border": "#dadee5",
    "--heading": "#1c2530",
    "--text-main": "#36404c",
    "--text-muted": "#646d7a",
    "--accent": "#ef6a2c",
    "--accent-2": "#2f5bba",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(47,91,186,0.3), transparent 42%), linear-gradient(155deg, #1b2533 0%, #233a64 58%, #161d28 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #1b2533 0%, #11161d 100%)",
    "--footer-bg": "#11161d",
    "--shadow-rgb": "28, 37, 48",
  }),

  mk("indigo-data-orange", "Indigo Data Orange", "Gradient hero", {
    "--accent": "#ef6a2c",
    "--accent-2": "#4a45cc",
    "--accent-soft": "#f2a679",
    "--heading": "#1a1b48",
    "--text-muted": "#5b5c84",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(74,69,204,0.32), transparent 44%), linear-gradient(152deg, #1c1d5e 0%, #322ea0 55%, #17184f 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #17184f 0%, #101139 100%)",
    "--footer-bg": "#101139",
    "--shadow-rgb": "26, 27, 72",
  }),

  mk("atlantic-blue-b2b", "Atlantic Blue B2B", "Blue-first SaaS", {
    "--accent": "#ee6a2c",
    "--accent-2": "#1d6aa6",
    "--accent-soft": "#f2a679",
    "--heading": "#0d2c44",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(29,106,166,0.3), transparent 44%), linear-gradient(155deg, #082c4c 0%, #0d4f7c 58%, #072339 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #082c4c 0%, #051c30 100%)",
    "--footer-bg": "#051c30",
    "--shadow-rgb": "8, 44, 76",
  }),

  mk("clean-sky-enterprise", "Clean Sky Enterprise", "Light SaaS", {
    "--site-bg":
      "radial-gradient(circle at 86% -4%, rgba(56,138,196,0.08), transparent 30%), linear-gradient(180deg, #fbfdff 0%, #edf5fb 100%)",
    "--surface-1": "#f1f8fd",
    "--surface-2": "#e2eff8",
    "--card-border": "#d5e5f1",
    "--heading": "#0e2c4c",
    "--text-main": "#2a4058",
    "--text-muted": "#5b7188",
    "--accent": "#ef6a2c",
    "--accent-2": "#2f86c2",
    ...lightHero(
      "radial-gradient(circle at 82% 14%, rgba(47,134,194,0.18), transparent 42%), linear-gradient(160deg, #ffffff 0%, #e1eef9 100%)"
    ),
    "--section-contrast-bg": "linear-gradient(155deg, #0e2c4c 0%, #0a2039 100%)",
    "--footer-bg": "#0a2039",
    "--shadow-rgb": "14, 44, 76",
  }),

  mk("bright-blue-orange-cta", "Bright Blue Orange CTA", "Blue-first SaaS", {
    "--accent": "#f86f2b",
    "--accent-2": "#1f6fe0",
    "--accent-soft": "#fbab78",
    "--accent-strong": "#d4561a",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(31,111,224,0.34), transparent 44%), linear-gradient(155deg, #0a2a72 0%, #1452c4 58%, #0a2258 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #0a2a72 0%, #071a48 100%)",
    "--footer-bg": "#071a48",
    "--shadow-rgb": "10, 42, 114",
  }),

  mk("trust-blue-white", "Trust Blue White", "Light SaaS", {
    "--site-bg":
      "radial-gradient(circle at 86% -4%, rgba(31,99,184,0.06), transparent 30%), linear-gradient(180deg, #fbfdff 0%, #eef4fb 100%)",
    "--surface-1": "#f3f7fc",
    "--surface-2": "#e7eff9",
    "--card-border": "#d9e3f0",
    "--heading": "#0d264c",
    "--text-main": "#2a3c56",
    "--text-muted": "#5c6e88",
    "--accent": "#ef6a2c",
    "--accent-2": "#1f63b8",
    ...lightHero(
      "radial-gradient(circle at 82% 14%, rgba(31,99,184,0.16), transparent 42%), linear-gradient(160deg, #ffffff 0%, #e6eef9 100%)"
    ),
    "--section-contrast-bg": "linear-gradient(155deg, #0d264c 0%, #091c39 100%)",
    "--footer-bg": "#091c39",
    "--shadow-rgb": "13, 38, 76",
  }),

  mk("denim-orange-professional", "Denim Orange Professional", "Neutral premium", {
    "--site-bg":
      "radial-gradient(circle at 14% -4%, rgba(58,90,140,0.06), transparent 30%), linear-gradient(180deg, #f7f8fa 0%, #eceef2 100%)",
    "--surface-1": "#f2f4f7",
    "--surface-2": "#e6eaf0",
    "--card-border": "#d9dee7",
    "--heading": "#21304a",
    "--text-main": "#3a455a",
    "--text-muted": "#646f82",
    "--accent": "#ee6a2c",
    "--accent-2": "#3a5a8c",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(58,90,140,0.32), transparent 42%), linear-gradient(155deg, #1c2c47 0%, #2c4670 58%, #16233a 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #1c2c47 0%, #121b2c 100%)",
    "--footer-bg": "#121b2c",
    "--shadow-rgb": "33, 48, 74",
  }),

  mk("deep-ocean-orange", "Deep Ocean Orange", "Dark premium",
    darkPage({
      "--site-bg":
        "radial-gradient(circle at 14% -4%, rgba(232,98,42,0.07), transparent 30%), linear-gradient(180deg, #0a1a26 0%, #07131c 100%)",
      "--surface-1": "#0f2330",
      "--surface-2": "#0c1d28",
      "--card-bg": "#123040",
      "--accent": "#f4743b",
      "--accent-2": "#1f9ab0",
      "--accent-soft": "#f8a877",
      "--accent-strong": "#f4743b",
      "--hero-bg":
        "radial-gradient(circle at 80% 14%, rgba(31,154,176,0.28), transparent 44%), linear-gradient(155deg, #0a2c3e 0%, #0e4f63 58%, #07212e 100%)",
      "--section-contrast-bg": "linear-gradient(155deg, #07131c 0%, #040c12 100%)",
      "--footer-bg": "#040c12",
    })
  ),

  mk("premium-blue-violet", "Premium Blue Violet", "Gradient hero", {
    "--accent": "#f4743b",
    "--accent-2": "#5a52d4",
    "--accent-soft": "#f6a87b",
    "--heading": "#191a45",
    "--text-muted": "#5b5c85",
    "--hero-bg":
      "radial-gradient(circle at 78% 12%, rgba(70,110,240,0.3), transparent 44%), radial-gradient(circle at 20% 94%, rgba(110,80,212,0.26), transparent 42%), linear-gradient(150deg, #171c5c 0%, #2e349e 52%, #161452 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #161452 0%, #0f0e3a 100%)",
    "--footer-bg": "#0f0e3a",
    "--shadow-rgb": "25, 26, 69",
  }),

  mk("global-data-blue", "Global Data Blue", "Gradient hero", {
    "--accent": "#ef6a2c",
    "--accent-2": "#2563c4",
    "--accent-soft": "#f2a679",
    "--hero-bg":
      "radial-gradient(circle at 78% 12%, rgba(37,99,196,0.32), transparent 44%), radial-gradient(circle at 18% 95%, rgba(14,124,134,0.22), transparent 42%), linear-gradient(150deg, #0a2a60 0%, #134a9c 52%, #0a2150 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #0a2a60 0%, #07183c 100%)",
    "--footer-bg": "#07183c",
    "--shadow-rgb": "10, 42, 96",
  }),

  mk("classic-saas-blue", "Classic SaaS Blue", "Light SaaS", {
    "--site-bg":
      "radial-gradient(circle at 86% -4%, rgba(37,99,196,0.06), transparent 30%), linear-gradient(180deg, #fbfcfe 0%, #eff3fa 100%)",
    "--surface-1": "#f3f6fc",
    "--surface-2": "#e8eef8",
    "--card-border": "#dbe3f0",
    "--heading": "#10284f",
    "--text-main": "#2b3c58",
    "--text-muted": "#5d6d88",
    "--accent": "#ef6a2c",
    "--accent-2": "#2563c4",
    ...lightHero(
      "radial-gradient(circle at 82% 14%, rgba(37,99,196,0.16), transparent 42%), linear-gradient(160deg, #ffffff 0%, #e6eef9 100%)"
    ),
    "--section-contrast-bg": "linear-gradient(155deg, #10284f 0%, #0b1d3b 100%)",
    "--footer-bg": "#0b1d3b",
    "--shadow-rgb": "16, 40, 79",
  }),

  mk("white-blue-orange", "White Blue Orange", "Light SaaS", {
    "--site-bg": "linear-gradient(180deg, #ffffff 0%, #f4f7fb 100%)",
    "--surface-1": "#f6f9fd",
    "--surface-2": "#edf2f9",
    "--card-border": "#dde5f0",
    "--heading": "#11294d",
    "--text-main": "#2c3d57",
    "--text-muted": "#5e6e88",
    "--accent": "#ef6a2c",
    "--accent-2": "#2e5bba",
    ...lightHero(
      "radial-gradient(circle at 82% 14%, rgba(46,91,186,0.14), transparent 42%), linear-gradient(160deg, #ffffff 0%, #eaf1fb 100%)"
    ),
    "--section-contrast-bg": "linear-gradient(155deg, #11294d 0%, #0c1e3a 100%)",
    "--footer-bg": "#0c1e3a",
    "--shadow-rgb": "17, 41, 77",
  }),

  mk("navy-cloud-orange", "Navy Cloud Orange", "Blue-first SaaS", {
    "--site-bg":
      "radial-gradient(circle at 86% -4%, rgba(46,91,186,0.07), transparent 30%), linear-gradient(180deg, #f9fbfe 0%, #eef3f9 100%)",
    "--surface-1": "#f2f6fc",
    "--surface-2": "#e7eef8",
    "--card-border": "#d9e2f0",
    "--accent": "#ef6a2c",
    "--accent-2": "#284f9e",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(40,79,158,0.32), transparent 42%), linear-gradient(155deg, #0b2150 0%, #143a82 58%, #0a1c43 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #0b2150 0%, #081633 100%)",
    "--footer-bg": "#081633",
    "--shadow-rgb": "11, 33, 80",
  }),

  mk("steel-blue-premium", "Steel Blue Premium", "Neutral premium", {
    "--site-bg":
      "radial-gradient(circle at 14% -4%, rgba(74,116,150,0.07), transparent 30%), linear-gradient(180deg, #f6f8fa 0%, #ebeff3 100%)",
    "--surface-1": "#f1f4f7",
    "--surface-2": "#e5ebf0",
    "--card-border": "#d7dee6",
    "--heading": "#1b2c3c",
    "--text-main": "#34465a",
    "--text-muted": "#62748a",
    "--accent": "#ec6a2d",
    "--accent-2": "#3d6f93",
    "--accent-strong": "#bd4d18",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(61,111,147,0.32), transparent 42%), linear-gradient(155deg, #19303f 0%, #2a4d63 58%, #152834 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #19303f 0%, #12222e 100%)",
    "--footer-bg": "#12222e",
    "--shadow-rgb": "27, 44, 60",
  }),

  mk("modern-blue-service", "Modern Blue Service", "Blue-first SaaS", {
    "--accent": "#ef6a2c",
    "--accent-2": "#2a63cc",
    "--accent-soft": "#f2a679",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(42,99,204,0.32), transparent 44%), linear-gradient(155deg, #0a255e 0%, #13459e 58%, #0a1f50 100%)",
    "--section-contrast-bg": "linear-gradient(155deg, #0a255e 0%, #07173b 100%)",
    "--footer-bg": "#07173b",
    "--shadow-rgb": "10, 37, 94",
  }),
];

export default THEME_PALETTES;
