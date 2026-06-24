/**
 * HeroDepthBackground — production background layer for the homepage hero.
 *
 * Adapts the approved "Claude Design" hero concept (deep blue/violet enterprise
 * depth) into the existing hero viewport. It is purely decorative: absolutely
 * positioned behind the foreground, `pointer-events: none`, and contributes no
 * layout height — so the approved hero rhythm and the right dashboard card stay
 * exactly as deployed.
 *
 * All visuals are CSS-driven (transform / opacity only) and themed via the
 * shared CSS custom properties (--accent, --accent-2, --accent-soft,
 * --shadow-rgb …) so it follows the active ThemeTweaks palette. Motion is gated
 * by `prefers-reduced-motion` and most objects are hidden on small screens
 * (see globals.css).
 */
const NET_LINES = [
  [180, 120, 360, 220],
  [360, 220, 250, 400],
  [360, 220, 560, 150],
  [560, 150, 760, 300],
  [760, 300, 960, 200],
  [960, 200, 1180, 330],
  [760, 300, 700, 470],
  [1180, 330, 1300, 500],
];

const NET_NODES = [
  { x: 180, y: 120, d: "0s" },
  { x: 360, y: 220, d: "0.8s" },
  { x: 560, y: 150, d: "0.4s" },
  { x: 250, y: 400, d: "1.2s" },
  { x: 760, y: 300, d: "0.2s" },
  { x: 960, y: 200, d: "0.6s" },
  { x: 1180, y: 330, d: "1s" },
  { x: 700, y: 470, d: "1.4s" },
  { x: 1300, y: 500, d: "0.9s" },
];

export default function HeroDepthBackground() {
  return (
    <div className="hero-depth" aria-hidden="true">
      {/* Layered glow blobs (depth) */}
      <span className="hero-depth-blob hero-depth-blob-1" />
      <span className="hero-depth-blob hero-depth-blob-2" />
      <span className="hero-depth-blob hero-depth-blob-3" />

      {/* Abstract data / network constellation */}
      <svg
        className="hero-depth-net"
        viewBox="0 0 1440 600"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="hero-depth-net-lines">
          {NET_LINES.map(([x1, y1, x2, y2], i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </g>
        <g className="hero-depth-net-nodes">
          {NET_NODES.map((n, i) => (
            <circle key={i} cx={n.x} cy={n.y} r="3.4" style={{ animationDelay: n.d }} />
          ))}
        </g>
      </svg>

      {/* Soft tilted orbital rings */}
      <div className="hero-depth-rings">
        <div className="hero-depth-rings-tilt">
          <div className="hero-depth-ring hero-depth-ring-1">
            <span className="hero-depth-ring-dot" />
          </div>
          <div className="hero-depth-ring hero-depth-ring-2">
            <span className="hero-depth-ring-dot hero-depth-ring-dot-2" />
          </div>
          <div className="hero-depth-ring hero-depth-ring-3" />
        </div>
      </div>

      {/* Floating translucent glass data tiles */}
      <div className="hero-depth-tile hero-depth-tile-a">
        <div className="hero-depth-tile-head">
          <span className="hero-depth-tile-bar" />
          <span className="hero-depth-tile-dot" />
        </div>
        <div className="hero-depth-tile-bars">
          <span style={{ height: "42%" }} />
          <span style={{ height: "74%" }} />
          <span style={{ height: "56%" }} />
          <span style={{ height: "96%" }} />
          <span style={{ height: "64%" }} />
        </div>
      </div>

      <div className="hero-depth-tile hero-depth-tile-b">
        <div className="hero-depth-tile-head">
          <span className="hero-depth-tile-chip" />
          <span className="hero-depth-tile-bar hero-depth-tile-bar-wide" />
        </div>
        <div className="hero-depth-tile-rows">
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Glass orbs */}
      <span className="hero-depth-orb hero-depth-orb-1" />
      <span className="hero-depth-orb hero-depth-orb-2" />

      {/* Readability scrim — keeps the headline crisp + dashboard dominant */}
      <div className="hero-depth-scrim" />
    </div>
  );
}
