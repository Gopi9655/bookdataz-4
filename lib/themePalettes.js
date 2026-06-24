// =============================================================================
// THEME PALETTES — curated premium theme system for BookDataZ.
// -----------------------------------------------------------------------------
// Each palette is a coherent, full-site token set. The ThemeTweaks panel
// applies a palette by writing these CSS custom properties onto
// document.documentElement; globals.css derives the remaining (tint / border /
// gradient / shadow / dropdown / cta / nav-active) tokens from these via
// color-mix(), so one selection re-themes the entire site.
//
// Direction (client): ENTERPRISE ROYAL BLUE — vibrant, high-contrast, creative
// but corporate. Blue / indigo / violet / sapphire focused. No orange-led look;
// only tiny warm details are acceptable. Default = Enterprise Royal Blue.
//
// NOTE: presentation tokens only — no copy, counts, clients, or claims here.
// =============================================================================

// Default theme = Enterprise Royal Blue. Every palette spreads this BASE and
// overrides only what differs, guaranteeing a complete, readable token set.
const BASE = {
  "--site-bg":
    "radial-gradient(circle at 12% -6%, rgba(47,86,230,0.10), transparent 32%), radial-gradient(circle at 92% 2%, rgba(109,74,214,0.08), transparent 34%), linear-gradient(180deg, #f5f7ff 0%, #eef1fc 52%, #e7ecfb 100%)",
  "--surface-1": "#f3f6fe",
  "--surface-2": "#e8eefb",
  "--card-bg": "#ffffff",
  "--card-border": "#d8e1f5",
  "--heading": "#0c1c44",
  "--text-main": "#273352",
  "--text-muted": "#586691",
  "--accent": "#2f56e6",
  "--accent-2": "#6d4ad6",
  "--accent-soft": "#93a6f7",
  "--accent-strong": "#2342c4",
  "--nav-bg": "rgba(255,255,255,0.86)",
  "--nav-text": "#0c1c44",
  "--hero-bg":
    "radial-gradient(circle at 82% 12%, rgba(109,74,214,0.34), transparent 42%), radial-gradient(circle at 6% 100%, rgba(47,86,230,0.30), transparent 40%), linear-gradient(155deg, #0d1f5c 0%, #1a36a8 56%, #0c1a4e 100%)",
  "--hero-text": "#ffffff",
  "--hero-muted": "rgba(223,230,250,0.84)",
  "--hero-eyebrow": "var(--accent-soft)",
  "--hero-card-bg": "rgba(255,255,255,0.10)",
  "--hero-card-text": "#ffffff",
  "--hero-card-border": "rgba(255,255,255,0.20)",
  // Hero highlight phrase — light ice/lavender for the (default) dark hero.
  "--hero-highlight": "#bcd4ff",
  "--hero-highlight-2": "#ecdcff",
  "--hero-highlight-glow": "rgba(124,162,255,0.5)",
  // Premium highlight gradient (.hero-premium-highlight). DARK hero = luminous
  // icy-cyan -> silver -> electric blue-violet. Reactive to the palette accents
  // but deliberately vivid so the phrase never melts into a blue/purple hero or
  // reads like the plain white headline. lightHero() overrides these for bright
  // heroes with deep royal/indigo.
  "--hero-highlight-start": "color-mix(in srgb, var(--accent-soft) 42%, #a9f0ff 58%)",
  "--hero-highlight-mid": "color-mix(in srgb, #ffffff 64%, var(--accent-soft) 36%)",
  "--hero-highlight-end": "color-mix(in srgb, var(--accent-2) 62%, #d2c2ff 38%)",
  "--hero-highlight-glow-strong": "color-mix(in srgb, var(--accent-soft) 55%, transparent)",
  "--section-contrast-bg":
    "linear-gradient(155deg, #0d1f5c 0%, #122a86 55%, #0a164a 100%)",
  "--footer-bg": "#0a1540",
  "--shadow-rgb": "12, 28, 78",
};

// Shared light-hero block (white navbar + bright hero + dark hero text).
const lightHero = (heroBg, eyebrow = "var(--accent-strong)") => ({
  "--hero-bg": heroBg,
  "--hero-text": "#0c1c44",
  "--hero-muted": "#4d5a7d",
  "--hero-eyebrow": eyebrow,
  "--hero-card-bg": "#ffffff",
  "--hero-card-text": "#0c1c44",
  "--hero-card-border": "#d8e1f5",
  // Light hero → deep royal/indigo highlight so the phrase stays high-contrast.
  "--hero-highlight": "var(--accent-strong)",
  "--hero-highlight-2": "var(--accent-2)",
  "--hero-highlight-glow": "rgba(35,66,196,0.22)",
  // Premium highlight gradient on a bright hero: deep royal -> royal -> indigo,
  // so the phrase reads as a rich, saturated accent against the light backdrop.
  "--hero-highlight-start": "var(--accent-strong)",
  "--hero-highlight-mid": "var(--accent)",
  "--hero-highlight-end": "var(--accent-2)",
  "--hero-highlight-glow-strong": "color-mix(in srgb, var(--accent) 26%, transparent)",
});

// Shared dark-page block (dark surfaces, light text). Pass accent overrides.
const darkPage = (over = {}) => ({
  "--surface-1": "#111c38",
  "--surface-2": "#0d1830",
  "--card-bg": "#16234a",
  "--card-border": "rgba(255,255,255,0.12)",
  "--heading": "#eef3fe",
  "--text-main": "#cdd8ef",
  "--text-muted": "#93a3c6",
  "--nav-bg": "rgba(10,17,40,0.88)",
  "--nav-text": "#eef3fe",
  "--hero-text": "#ffffff",
  "--hero-muted": "rgba(220,230,250,0.80)",
  "--hero-eyebrow": "var(--accent-soft)",
  "--hero-card-bg": "rgba(255,255,255,0.07)",
  "--hero-card-text": "#ffffff",
  "--hero-card-border": "rgba(255,255,255,0.14)",
  "--shadow-rgb": "2, 6, 23",
  ...over,
});

const mk = (id, name, category, vars) => ({
  id,
  name,
  category,
  vars: { ...BASE, ...vars },
});

export const THEME_PALETTES = [
  // ===== A. Enterprise Royal Blue (flagship family) =======================
  mk("enterprise-royal-blue", "Enterprise Royal Blue", "Enterprise Royal Blue", {
    // BASE — vibrant royal blue + violet, light enterprise surfaces. DEFAULT.
  }),

  mk(
    "enterprise-royal-blue-deep",
    "Enterprise Royal Blue Deep",
    "Enterprise Royal Blue",
    {
      "--site-bg":
        "radial-gradient(circle at 12% -6%, rgba(36,66,196,0.12), transparent 32%), linear-gradient(180deg, #eef1fc 0%, #e2e8f8 100%)",
      "--surface-1": "#eaeffb",
      "--surface-2": "#dde6f7",
      "--card-border": "#cdd9f0",
      "--accent": "#2649dd",
      "--accent-2": "#5b3fd0",
      "--accent-strong": "#1c39b4",
      "--hero-bg":
        "radial-gradient(circle at 82% 12%, rgba(91,63,208,0.36), transparent 42%), linear-gradient(155deg, #081245 0%, #16277e 56%, #060e38 100%)",
      "--section-contrast-bg":
        "linear-gradient(155deg, #081245 0%, #122170 55%, #050c34 100%)",
      "--footer-bg": "#060d34",
      "--shadow-rgb": "8, 18, 69",
    }
  ),

  mk(
    "enterprise-royal-blue-glass",
    "Enterprise Royal Blue Glass",
    "Enterprise Royal Blue",
    {
      "--site-bg":
        "radial-gradient(circle at 86% -4%, rgba(47,86,230,0.10), transparent 30%), linear-gradient(180deg, #ffffff 0%, #eef3fe 100%)",
      "--surface-1": "#f6f9ff",
      "--surface-2": "#eaf1fe",
      "--card-bg": "#ffffff",
      "--card-border": "#dbe6f8",
      "--accent": "#3358e8",
      "--accent-2": "#7458de",
      ...lightHero(
        "radial-gradient(circle at 84% 12%, rgba(47,86,230,0.18), transparent 42%), radial-gradient(circle at 8% 100%, rgba(109,74,214,0.14), transparent 40%), linear-gradient(160deg, #ffffff 0%, #e7eefe 100%)"
      ),
      "--section-contrast-bg":
        "linear-gradient(155deg, #102364 0%, #1a3699 55%, #0c1a52 100%)",
      "--footer-bg": "#0b1648",
      "--shadow-rgb": "20, 44, 120",
    }
  ),

  mk(
    "enterprise-royal-blue-slate",
    "Enterprise Royal Blue Slate",
    "Enterprise Royal Blue",
    {
      "--site-bg":
        "radial-gradient(circle at 14% -4%, rgba(58,92,200,0.07), transparent 30%), linear-gradient(180deg, #f4f6fb 0%, #e9edf5 100%)",
      "--surface-1": "#eef1f7",
      "--surface-2": "#e1e7f1",
      "--card-border": "#d2dae8",
      "--heading": "#16233f",
      "--text-main": "#303c57",
      "--text-muted": "#5e6c89",
      "--accent": "#2f56e6",
      "--accent-2": "#5566c4",
      "--accent-strong": "#2342c4",
      "--hero-bg":
        "radial-gradient(circle at 82% 14%, rgba(58,92,200,0.30), transparent 42%), linear-gradient(155deg, #142143 0%, #233b7f 58%, #101a38 100%)",
      "--section-contrast-bg":
        "linear-gradient(155deg, #18233f 0%, #233a72 55%, #121a30 100%)",
      "--footer-bg": "#121a32",
      "--shadow-rgb": "22, 35, 63",
    }
  ),

  // ===== B. Royal Blue family ============================================
  mk("royal-blue-dark", "Royal Blue Dark", "Royal Blue", {
    "--site-bg":
      "radial-gradient(circle at 12% -6%, rgba(47,86,230,0.20), transparent 34%), radial-gradient(circle at 92% 4%, rgba(91,63,208,0.16), transparent 36%), linear-gradient(180deg, #0a1230 0%, #0a1430 60%, #070e26 100%)",
    "--accent": "#3a64ff",
    "--accent-2": "#7c5cf0",
    "--accent-soft": "#9db2ff",
    "--accent-strong": "#8aa0ff",
    "--hero-bg":
      "radial-gradient(circle at 82% 12%, rgba(124,92,240,0.36), transparent 44%), radial-gradient(circle at 6% 100%, rgba(58,100,255,0.30), transparent 42%), linear-gradient(155deg, #0a1540 0%, #14257a 56%, #070f30 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #0a1644 0%, #182c86 55%, #070e30 100%)",
    "--footer-bg": "#060c24",
    ...darkPage(),
  }),

  mk("royal-blue-night", "Royal Blue Night", "Royal Blue", {
    "--site-bg":
      "radial-gradient(circle at 14% -6%, rgba(45,80,210,0.18), transparent 34%), linear-gradient(180deg, #060b22 0%, #05091c 100%)",
    "--accent": "#3458f6",
    "--accent-2": "#6f4ae0",
    "--accent-soft": "#90a6ff",
    "--accent-strong": "#88a0ff",
    "--hero-bg":
      "radial-gradient(circle at 80% 12%, rgba(111,74,224,0.34), transparent 44%), linear-gradient(155deg, #060d30 0%, #102063 58%, #04081f 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #07112e 0%, #122168 55%, #04081e 100%)",
    "--footer-bg": "#04081c",
    ...darkPage({
      "--surface-1": "#0c1430",
      "--surface-2": "#080f26",
      "--card-bg": "#101a3c",
    }),
  }),

  mk("royal-blue-steel", "Royal Blue Steel", "Royal Blue", {
    "--site-bg":
      "radial-gradient(circle at 14% -4%, rgba(64,98,170,0.08), transparent 30%), linear-gradient(180deg, #f4f7fb 0%, #e8edf4 100%)",
    "--surface-1": "#eef2f8",
    "--surface-2": "#e0e8f2",
    "--card-border": "#d0dae8",
    "--heading": "#15263f",
    "--text-main": "#2f3f57",
    "--text-muted": "#5d6e88",
    "--accent": "#2b5bd6",
    "--accent-2": "#4f78b8",
    "--accent-soft": "#8fb0e6",
    "--accent-strong": "#1f47b4",
    "--hero-bg":
      "radial-gradient(circle at 82% 14%, rgba(79,120,184,0.30), transparent 42%), linear-gradient(155deg, #13233f 0%, #244577 58%, #0f1c34 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #15263f 0%, #244577 55%, #101d31 100%)",
    "--footer-bg": "#101d33",
    "--shadow-rgb": "21, 38, 63",
  }),

  mk("royal-blue-executive", "Royal Blue Executive", "Royal Blue", {
    "--site-bg":
      "radial-gradient(circle at 12% -6%, rgba(38,73,221,0.09), transparent 32%), linear-gradient(180deg, #f4f7ff 0%, #eaeffb 100%)",
    "--surface-1": "#eef3fe",
    "--surface-2": "#e1e9fa",
    "--card-border": "#d4e0f4",
    "--accent": "#2749d8",
    "--accent-2": "#5e54e0",
    "--accent-strong": "#1d39b0",
    "--hero-bg":
      "radial-gradient(circle at 80% 12%, rgba(94,84,224,0.30), transparent 44%), linear-gradient(155deg, #0c1c54 0%, #1c3290 56%, #0a1648 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #0c1c54 0%, #1a2f88 55%, #0a1444 100%)",
    "--footer-bg": "#091240",
    "--shadow-rgb": "12, 28, 84",
  }),

  // ===== C. Blue Violet family ===========================================
  mk("blue-violet-premium", "Blue Violet Premium", "Blue Violet", {
    "--site-bg":
      "radial-gradient(circle at 12% -6%, rgba(124,58,237,0.10), transparent 32%), radial-gradient(circle at 92% 0%, rgba(47,86,230,0.08), transparent 34%), linear-gradient(180deg, #f7f5ff 0%, #efeafe 100%)",
    "--surface-1": "#f5f1ff",
    "--surface-2": "#ebe3fc",
    "--card-border": "#e0d6f5",
    "--heading": "#1c1146",
    "--text-main": "#352a55",
    "--text-muted": "#675a86",
    "--accent": "#7c3aed",
    "--accent-2": "#3a64f0",
    "--accent-soft": "#b69cf6",
    "--accent-strong": "#5f2bc0",
    "--hero-bg":
      "radial-gradient(circle at 82% 12%, rgba(124,58,237,0.38), transparent 44%), radial-gradient(circle at 6% 100%, rgba(58,100,240,0.28), transparent 40%), linear-gradient(155deg, #1a0f54 0%, #3a1f9e 56%, #150b46 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #1a0f54 0%, #341c92 55%, #130a44 100%)",
    "--footer-bg": "#130a42",
    "--shadow-rgb": "34, 18, 84",
  }),

  mk("blue-violet-dark", "Blue Violet Dark", "Blue Violet", {
    "--site-bg":
      "radial-gradient(circle at 14% -6%, rgba(124,58,237,0.20), transparent 34%), linear-gradient(180deg, #100a2c 0%, #0b0722 100%)",
    "--accent": "#8b5cf6",
    "--accent-2": "#4f7bf0",
    "--accent-soft": "#c4adfa",
    "--accent-strong": "#b497f7",
    "--hero-bg":
      "radial-gradient(circle at 80% 12%, rgba(139,92,246,0.38), transparent 44%), linear-gradient(155deg, #150b46 0%, #34209a 58%, #0e0734 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #160c48 0%, #311c90 55%, #0d0730 100%)",
    "--footer-bg": "#0c0628",
    ...darkPage({
      "--surface-1": "#15103a",
      "--surface-2": "#100b2c",
      "--card-bg": "#1d1750",
      "--text-muted": "#a097c4",
    }),
  }),

  mk("blue-violet-glass", "Blue Violet Glass", "Blue Violet", {
    "--site-bg":
      "radial-gradient(circle at 86% -4%, rgba(124,58,237,0.10), transparent 30%), linear-gradient(180deg, #ffffff 0%, #f1ecfe 100%)",
    "--surface-1": "#f8f5ff",
    "--surface-2": "#efe8fd",
    "--card-bg": "#ffffff",
    "--card-border": "#e4dbf7",
    "--heading": "#1c1146",
    "--text-main": "#352a55",
    "--text-muted": "#6a5d8a",
    "--accent": "#7c3aed",
    "--accent-2": "#4f6df0",
    "--accent-strong": "#5f2bc0",
    ...lightHero(
      "radial-gradient(circle at 84% 12%, rgba(124,58,237,0.18), transparent 42%), radial-gradient(circle at 8% 100%, rgba(58,100,240,0.12), transparent 40%), linear-gradient(160deg, #ffffff 0%, #efe7fe 100%)"
    ),
    "--section-contrast-bg":
      "linear-gradient(155deg, #1d1158 0%, #3a219c 55%, #160c48 100%)",
    "--footer-bg": "#160c48",
    "--shadow-rgb": "40, 22, 96",
  }),

  // ===== D. Indigo & Cobalt ==============================================
  mk("indigo-enterprise", "Indigo Enterprise", "Indigo & Cobalt", {
    "--site-bg":
      "radial-gradient(circle at 12% -6%, rgba(79,70,229,0.09), transparent 32%), linear-gradient(180deg, #f5f6ff 0%, #ecedfb 100%)",
    "--surface-1": "#f1f2fe",
    "--surface-2": "#e4e6fa",
    "--card-border": "#d8dbf4",
    "--heading": "#13164a",
    "--text-main": "#2c3059",
    "--text-muted": "#5c618d",
    "--accent": "#4f46e5",
    "--accent-2": "#6d5ee8",
    "--accent-soft": "#a6a0f5",
    "--accent-strong": "#3d35c0",
    "--hero-bg":
      "radial-gradient(circle at 82% 12%, rgba(79,70,229,0.34), transparent 44%), linear-gradient(155deg, #11144f 0%, #2a2a9e 56%, #0e1044 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #11144f 0%, #272795 55%, #0d0f42 100%)",
    "--footer-bg": "#0c0e3c",
    "--shadow-rgb": "19, 22, 74",
  }),

  mk("indigo-royal", "Indigo Royal", "Indigo & Cobalt", {
    "--site-bg":
      "radial-gradient(circle at 14% -6%, rgba(67,56,202,0.18), transparent 34%), linear-gradient(180deg, #0c0d2e 0%, #090a24 100%)",
    "--accent": "#6366f1",
    "--accent-2": "#8b5cf6",
    "--accent-soft": "#aeb0fb",
    "--accent-strong": "#a7a9fb",
    "--hero-bg":
      "radial-gradient(circle at 80% 12%, rgba(99,102,241,0.36), transparent 44%), linear-gradient(155deg, #0d0f44 0%, #272798 58%, #0a0b34 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #0d0f44 0%, #242492 55%, #090a30 100%)",
    "--footer-bg": "#080926",
    ...darkPage({
      "--surface-1": "#10123a",
      "--surface-2": "#0c0d2c",
      "--card-bg": "#181a4c",
    }),
  }),

  mk("cobalt-command", "Cobalt Command", "Indigo & Cobalt", {
    "--accent": "#1d4ed8",
    "--accent-2": "#2563eb",
    "--accent-soft": "#8db2f5",
    "--accent-strong": "#1740b0",
    "--hero-bg":
      "radial-gradient(circle at 82% 14%, rgba(29,78,216,0.32), transparent 42%), linear-gradient(155deg, #08193f 0%, #143a8e 58%, #061230 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #08193f 0%, #143686 55%, #050f2c 100%)",
    "--footer-bg": "#050e28",
    "--shadow-rgb": "8, 25, 63",
  }),

  mk("cobalt-executive", "Cobalt Executive", "Indigo & Cobalt", {
    "--site-bg":
      "radial-gradient(circle at 12% -6%, rgba(37,99,235,0.09), transparent 32%), linear-gradient(180deg, #f4f8ff 0%, #e9f0fb 100%)",
    "--surface-1": "#eef4fe",
    "--surface-2": "#dfeafa",
    "--card-border": "#d2e1f4",
    "--heading": "#0c2150",
    "--text-main": "#283c5c",
    "--text-muted": "#566c90",
    "--accent": "#2563eb",
    "--accent-2": "#4f88e8",
    "--accent-soft": "#92b6f4",
    "--accent-strong": "#1c4fbf",
    "--hero-bg":
      "radial-gradient(circle at 82% 12%, rgba(37,99,235,0.32), transparent 44%), linear-gradient(155deg, #0a2150 0%, #143f96 56%, #081b44 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #0a2150 0%, #133b8c 55%, #07173c 100%)",
    "--footer-bg": "#071638",
    "--shadow-rgb": "10, 33, 80",
  }),

  // ===== E. Sapphire & Navy ==============================================
  mk("sapphire-data-cloud", "Sapphire Data Cloud", "Sapphire & Navy", {
    "--site-bg":
      "radial-gradient(circle at 86% -4%, rgba(14,126,201,0.10), transparent 30%), linear-gradient(180deg, #f4fbff 0%, #e7f3fb 100%)",
    "--surface-1": "#eef8fe",
    "--surface-2": "#ddeefa",
    "--card-border": "#cfe5f3",
    "--heading": "#0a2b4c",
    "--text-main": "#274157",
    "--text-muted": "#52718c",
    "--accent": "#0e7ec9",
    "--accent-2": "#3a64e6",
    "--accent-soft": "#7cc1ec",
    "--accent-strong": "#0a63a6",
    "--hero-bg":
      "radial-gradient(circle at 82% 12%, rgba(14,126,201,0.32), transparent 42%), radial-gradient(circle at 6% 100%, rgba(58,100,230,0.24), transparent 40%), linear-gradient(155deg, #062a52 0%, #0f4f93 56%, #051f3e 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #062a52 0%, #0e498a 55%, #041a36 100%)",
    "--footer-bg": "#041a36",
    "--shadow-rgb": "10, 43, 76",
  }),

  mk("sapphire-graphite", "Sapphire Graphite", "Sapphire & Navy", {
    "--site-bg":
      "radial-gradient(circle at 14% -6%, rgba(31,111,214,0.16), transparent 34%), linear-gradient(180deg, #0c1322 0%, #0a0f1c 100%)",
    "--accent": "#2f8ae0",
    "--accent-2": "#5a7cf0",
    "--accent-soft": "#86b8ee",
    "--accent-strong": "#7fb2ec",
    "--hero-bg":
      "radial-gradient(circle at 80% 12%, rgba(47,138,224,0.32), transparent 44%), linear-gradient(155deg, #08182f 0%, #134277 58%, #050f20 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #091a32 0%, #134073 55%, #050e1e 100%)",
    "--footer-bg": "#050d1c",
    ...darkPage({
      "--surface-1": "#0e1626",
      "--surface-2": "#0a111e",
      "--card-bg": "#142036",
      "--text-muted": "#8ea2bc",
    }),
  }),

  mk("navy-intelligence", "Navy Intelligence", "Sapphire & Navy", {
    "--site-bg":
      "radial-gradient(circle at 12% -6%, rgba(40,79,158,0.09), transparent 32%), linear-gradient(180deg, #f3f6fb 0%, #e8edf5 100%)",
    "--surface-1": "#eef2f9",
    "--surface-2": "#dfe7f2",
    "--card-border": "#d1dce9",
    "--heading": "#0a1c3c",
    "--text-main": "#26374f",
    "--text-muted": "#566889",
    "--accent": "#284f9e",
    "--accent-2": "#3f72c4",
    "--accent-soft": "#89a8d8",
    "--accent-strong": "#1d3d80",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(40,79,158,0.34), transparent 42%), linear-gradient(155deg, #08152f 0%, #143468 58%, #060f24 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #08152f 0%, #133163 55%, #050d20 100%)",
    "--footer-bg": "#050d20",
    "--shadow-rgb": "8, 21, 47",
  }),

  mk("navy-purple-prime", "Navy Purple Prime", "Sapphire & Navy", {
    "--site-bg":
      "radial-gradient(circle at 12% -6%, rgba(99,70,200,0.10), transparent 32%), radial-gradient(circle at 92% 0%, rgba(40,79,158,0.08), transparent 34%), linear-gradient(180deg, #f5f4fc 0%, #ebe9f7 100%)",
    "--surface-1": "#f1eefb",
    "--surface-2": "#e3def4",
    "--card-border": "#d7d0ec",
    "--heading": "#171244",
    "--text-main": "#2f2a54",
    "--text-muted": "#5f5885",
    "--accent": "#5b4bd0",
    "--accent-2": "#2f5ad6",
    "--accent-soft": "#a99cee",
    "--accent-strong": "#4636ad",
    "--hero-bg":
      "radial-gradient(circle at 82% 12%, rgba(91,75,208,0.36), transparent 44%), radial-gradient(circle at 6% 100%, rgba(47,90,214,0.24), transparent 40%), linear-gradient(155deg, #100c44 0%, #28208c 56%, #0c0838 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #100c44 0%, #261e86 55%, #0b0834 100%)",
    "--footer-bg": "#0a0730",
    "--shadow-rgb": "23, 18, 68",
  }),

  mk("midnight-enterprise", "Midnight Enterprise", "Sapphire & Navy", {
    "--site-bg":
      "radial-gradient(circle at 14% -6%, rgba(47,86,230,0.16), transparent 34%), radial-gradient(circle at 90% 2%, rgba(109,74,214,0.12), transparent 36%), linear-gradient(180deg, #080b1e 0%, #060814 100%)",
    "--accent": "#4f7bff",
    "--accent-2": "#7c5cf0",
    "--accent-soft": "#9fb6ff",
    "--accent-strong": "#92aaff",
    "--hero-bg":
      "radial-gradient(circle at 80% 12%, rgba(124,92,240,0.34), transparent 44%), radial-gradient(circle at 6% 100%, rgba(79,123,255,0.28), transparent 42%), linear-gradient(155deg, #070b28 0%, #131f66 58%, #04061a 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #080c2c 0%, #141f6a 55%, #04061a 100%)",
    "--footer-bg": "#04061a",
    ...darkPage({
      "--surface-1": "#0b1024",
      "--surface-2": "#080b18",
      "--card-bg": "#121833",
    }),
  }),

  // ===== F. Light enterprise / neutral blues =============================
  mk("azure-boardroom", "Azure Boardroom", "Light Enterprise", {
    "--site-bg":
      "radial-gradient(circle at 86% -4%, rgba(56,130,246,0.09), transparent 30%), linear-gradient(180deg, #ffffff 0%, #eef5fe 100%)",
    "--surface-1": "#f5faff",
    "--surface-2": "#e8f1fd",
    "--card-bg": "#ffffff",
    "--card-border": "#d9e7f8",
    "--heading": "#0c2a52",
    "--text-main": "#293f5b",
    "--text-muted": "#566f90",
    "--accent": "#2f7bf0",
    "--accent-2": "#5a8ef0",
    "--accent-soft": "#92bdf6",
    "--accent-strong": "#1f5bc8",
    ...lightHero(
      "radial-gradient(circle at 84% 12%, rgba(47,123,240,0.16), transparent 42%), linear-gradient(160deg, #ffffff 0%, #e6f0fd 100%)"
    ),
    "--section-contrast-bg":
      "linear-gradient(155deg, #0c2a52 0%, #134093 55%, #091f40 100%)",
    "--footer-bg": "#091f40",
    "--shadow-rgb": "12, 42, 82",
  }),

  mk("arctic-blue-enterprise", "Arctic Blue Enterprise", "Light Enterprise", {
    "--site-bg":
      "radial-gradient(circle at 86% -4%, rgba(56,160,216,0.08), transparent 30%), linear-gradient(180deg, #fbfdff 0%, #ecf4f9 100%)",
    "--surface-1": "#f2f9fd",
    "--surface-2": "#e3eff7",
    "--card-bg": "#ffffff",
    "--card-border": "#d4e6f1",
    "--heading": "#0d2d48",
    "--text-main": "#284356",
    "--text-muted": "#557287",
    "--accent": "#1f88c9",
    "--accent-2": "#3f74d6",
    "--accent-soft": "#83c4e8",
    "--accent-strong": "#1668a4",
    ...lightHero(
      "radial-gradient(circle at 84% 12%, rgba(31,136,201,0.16), transparent 42%), linear-gradient(160deg, #ffffff 0%, #e2eff7 100%)"
    ),
    "--section-contrast-bg":
      "linear-gradient(155deg, #0d2d48 0%, #154d7c 55%, #0a2238 100%)",
    "--footer-bg": "#0a2238",
    "--shadow-rgb": "13, 45, 72",
  }),

  mk("steel-blue-saas", "Steel Blue SaaS", "Light Enterprise", {
    "--site-bg":
      "radial-gradient(circle at 14% -4%, rgba(74,116,150,0.07), transparent 30%), linear-gradient(180deg, #f6f8fa 0%, #ebeff3 100%)",
    "--surface-1": "#f1f4f7",
    "--surface-2": "#e4eaf0",
    "--card-border": "#d6dee7",
    "--heading": "#1a2c3c",
    "--text-main": "#33455a",
    "--text-muted": "#5f7188",
    "--accent": "#3d6f93",
    "--accent-2": "#4f7bb8",
    "--accent-soft": "#8ab1cc",
    "--accent-strong": "#2f5876",
    "--hero-bg":
      "radial-gradient(circle at 80% 14%, rgba(61,111,147,0.30), transparent 42%), linear-gradient(155deg, #16303f 0%, #284f66 58%, #122633 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #16303f 0%, #264a60 55%, #11222e 100%)",
    "--footer-bg": "#11222e",
    "--shadow-rgb": "26, 44, 60",
  }),

  mk("deep-data-blue", "Deep Data Blue", "Light Enterprise", {
    "--site-bg":
      "radial-gradient(circle at 12% -6%, rgba(28,79,160,0.09), transparent 32%), linear-gradient(180deg, #f4f7fc 0%, #e8eef7 100%)",
    "--surface-1": "#eef3fb",
    "--surface-2": "#dfe8f5",
    "--card-border": "#d1ddee",
    "--heading": "#08203f",
    "--text-main": "#243a55",
    "--text-muted": "#516a8a",
    "--accent": "#1c4fa0",
    "--accent-2": "#3a6ec4",
    "--accent-soft": "#85a8d6",
    "--accent-strong": "#143d80",
    "--hero-bg":
      "radial-gradient(circle at 80% 12%, rgba(28,79,160,0.34), transparent 44%), linear-gradient(155deg, #051a44 0%, #0f3a80 58%, #04122f 100%)",
    "--section-contrast-bg":
      "linear-gradient(155deg, #051a44 0%, #0e3576 55%, #03102b 100%)",
    "--footer-bg": "#03102b",
    "--shadow-rgb": "8, 32, 63",
  }),
];

export default THEME_PALETTES;
