"use client";

// =============================================================================
// ThemeTweaks — TEMPORARY visual-selection tooling.
// -----------------------------------------------------------------------------
// A floating panel for live-previewing the curated palettes in lib/themePalettes
// across the whole site. It writes the palette's CSS custom properties onto
// <html>, persists the choice in localStorage, and mirrors the id on
// document.documentElement.dataset.theme.
//
// Visibility gate (panel is hidden unless one is true):
//   - running in development (NODE_ENV !== "production"), OR
//   - URL contains ?themeTweaks=1, OR
//   - localStorage "bdz-theme-panel" === "1"
//
// The *selected palette* is always re-applied on load (even when the panel is
// hidden) so a chosen direction persists. Remove this component + its <html>
// inline styles to fully revert. Styling is intentionally inline so the panel
// is unaffected by the theme it is editing.
// =============================================================================

import { useEffect, useMemo, useState } from "react";
import { THEME_PALETTES } from "../../lib/themePalettes";

const STORAGE_KEY = "bdz-theme";
const PANEL_KEY = "bdz-theme-panel";
const DEFAULT_ID = THEME_PALETTES[0].id;

// Every palette carries the full token set, so one palette's keys == all keys.
const TOKEN_KEYS = Object.keys(THEME_PALETTES[0].vars);

const applyPalette = (palette) => {
  if (typeof document === "undefined" || !palette) return;
  const root = document.documentElement;
  // Clear any previously-applied tokens so omitted keys fall back to :root.
  TOKEN_KEYS.forEach((key) => root.style.removeProperty(key));
  Object.entries(palette.vars).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
  root.dataset.theme = palette.id;
};

const findPalette = (id) =>
  THEME_PALETTES.find((palette) => palette.id === id) ?? THEME_PALETTES[0];

const swatch = (color, ring) => ({
  width: 16,
  height: 16,
  borderRadius: 5,
  background: color,
  boxShadow: ring ? "0 0 0 1.5px rgba(255,255,255,0.85)" : "none",
  border: "1px solid rgba(0,0,0,0.18)",
  flex: "none",
});

const ThemeTweaks = () => {
  const [mounted, setMounted] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState(DEFAULT_ID);
  const [pendingPaletteId, setPendingPaletteId] = useState(null);
  const [hideRequested, setHideRequested] = useState(false);

  // Apply persisted palette + decide whether the panel is visible.
  useEffect(() => {
    setMounted(true);

    let storedPalette = findPalette(DEFAULT_ID);
    try {
      storedPalette = findPalette(
        window.localStorage.getItem(STORAGE_KEY) || DEFAULT_ID
      );
    } catch {
      /* ignore storage access errors */
    }
    setActiveId(storedPalette.id);
    applyPalette(storedPalette);

    const isDev = process.env.NODE_ENV !== "production";
    const params = new URLSearchParams(window.location.search);
    const queryEnabled = params.get("themeTweaks") === "1";
    let panelFlag = false;
    try {
      // Persist the enabled state when explicitly turned on via the URL.
      if (queryEnabled) {
        window.localStorage.setItem(PANEL_KEY, "1");
        panelFlag = true;
      } else {
        panelFlag = window.localStorage.getItem(PANEL_KEY) === "1";
      }
    } catch {
      /* ignore */
    }
    setEnabled(isDev || queryEnabled || panelFlag);
  }, []);

  // Keep palette persistence in localStorage after explicit user selections.
  useEffect(() => {
    if (!pendingPaletteId) return;

    const palette = findPalette(pendingPaletteId);
    applyPalette(palette);
    try {
      window.localStorage.setItem(STORAGE_KEY, palette.id);
    } catch {
      /* ignore */
    }
    setPendingPaletteId(null);
  }, [pendingPaletteId]);

  // Allow production testers to remove the persisted panel flag.
  useEffect(() => {
    if (!hideRequested) return;

    try {
      window.localStorage.removeItem(PANEL_KEY);
    } catch {
      /* ignore */
    }
    setOpen(false);
    setEnabled(false);
    setHideRequested(false);
  }, [hideRequested]);

  // Escape closes the open panel (keyboard accessibility).
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const select = (palette) => {
    setActiveId(palette.id);
    setPendingPaletteId(palette.id);
  };

  const grouped = useMemo(() => {
    const map = new Map();
    THEME_PALETTES.forEach((palette) => {
      if (!map.has(palette.category)) map.set(palette.category, []);
      map.get(palette.category).push(palette);
    });
    return Array.from(map.entries());
  }, []);

  if (!mounted || !enabled) return null;

  const activeName = findPalette(activeId).name;

  return (
    <div
      style={{
        position: "fixed",
        left: 16,
        bottom: 16,
        zIndex: 2147483000,
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {open ? (
        <div
          role="dialog"
          aria-label="Theme Tweaks palette selector"
          style={{
            width: "min(296px, calc(100vw - 32px))",
            maxHeight: "min(72vh, 600px)",
            display: "flex",
            flexDirection: "column",
            borderRadius: 16,
            overflow: "hidden",
            background: "#0f1117",
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 30px 70px -30px rgba(0,0,0,0.8)",
            color: "#e7ebf2",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 8,
              padding: "12px 14px",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 0.4 }}>
                Theme Tweaks
              </div>
              <div
                style={{
                  fontSize: 11,
                  color: "#9aa3b2",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                title={activeName}
              >
                {activeName} · {THEME_PALETTES.length} palettes
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close theme panel"
              style={{
                cursor: "pointer",
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.06)",
                color: "#e7ebf2",
                borderRadius: 8,
                width: 26,
                height: 26,
                lineHeight: "22px",
                fontSize: 15,
                flex: "none",
              }}
            >
              ×
            </button>
          </div>

          <div style={{ overflowY: "auto", padding: "8px 10px 12px" }}>
            {grouped.map(([category, palettes]) => (
              <div key={category} style={{ marginTop: 8 }}>
                <div
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    color: "#7f8aa0",
                    padding: "6px 6px 4px",
                  }}
                >
                  {category}
                </div>
                {palettes.map((palette) => {
                  const isActive = palette.id === activeId;
                  return (
                    <button
                      key={palette.id}
                      type="button"
                      onClick={() => select(palette)}
                      aria-pressed={isActive}
                      title={palette.name}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        width: "100%",
                        textAlign: "left",
                        cursor: "pointer",
                        padding: "8px 8px",
                        marginBottom: 2,
                        borderRadius: 10,
                        border: isActive
                          ? "1px solid rgba(120,160,255,0.7)"
                          : "1px solid transparent",
                        background: isActive
                          ? "rgba(120,160,255,0.14)"
                          : "transparent",
                        color: "#e7ebf2",
                      }}
                    >
                      <span style={{ display: "flex", gap: 3, flex: "none" }}>
                        <span style={swatch(palette.vars["--accent"])} />
                        <span style={swatch(palette.vars["--accent-soft"])} />
                        <span style={swatch(palette.vars["--accent-2"])} />
                        <span style={swatch(palette.vars["--heading"])} />
                        <span
                          style={swatch(
                            palette.vars["--footer-bg"] ||
                              palette.vars["--heading"]
                          )}
                        />
                      </span>
                      <span
                        style={{
                          fontSize: 12.5,
                          fontWeight: isActive ? 700 : 500,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {palette.name}
                      </span>
                      {isActive && (
                        <span
                          aria-hidden="true"
                          style={{
                            marginLeft: "auto",
                            fontSize: 12,
                            fontWeight: 800,
                            color: "#8fb0ff",
                            flex: "none",
                          }}
                        >
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <div
            style={{
              padding: "10px 12px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              gap: 8,
            }}
          >
            <button
              type="button"
              onClick={() => select(findPalette(DEFAULT_ID))}
              style={{
                flex: 1,
                cursor: "pointer",
                fontSize: 11.5,
                fontWeight: 600,
                padding: "8px 10px",
                borderRadius: 9,
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.06)",
                color: "#e7ebf2",
              }}
            >
              Reset theme
            </button>
            <button
              type="button"
              onClick={() => setHideRequested(true)}
              style={{
                flex: 1,
                cursor: "pointer",
                fontSize: 11.5,
                fontWeight: 600,
                padding: "8px 10px",
                borderRadius: 9,
                border: "1px solid rgba(255,255,255,0.16)",
                background: "rgba(255,255,255,0.02)",
                color: "#e7ebf2",
              }}
            >
              Hide panel
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open theme tweaks"
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "10px 14px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.14)",
            background: "#0f1117",
            color: "#e7ebf2",
            boxShadow: "0 18px 40px -18px rgba(0,0,0,0.7)",
            fontSize: 12.5,
            fontWeight: 700,
          }}
        >
          <span
            style={{
              display: "inline-flex",
              gap: 3,
            }}
          >
            <span style={swatch("var(--accent)")} />
            <span style={swatch("var(--accent-2)")} />
          </span>
          Theme
        </button>
      )}
    </div>
  );
};

export default ThemeTweaks;
