"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

/**
 * TechConstellation — a reusable, theme-aware orbital hero visual.
 *
 * Pure CSS / SVG / Framer Motion (no Three.js): a central glass node anchors
 * concentric rings of orbiting icon nodes. Styling is driven entirely by the
 * site's CSS custom properties, so every palette re-themes it automatically.
 *
 * Decorative only — the `count` and `icons` are passed in from already-rendered
 * page content; this component invents no data.
 *
 * Respects prefers-reduced-motion: orbit + tilt are disabled and a calm static
 * arrangement is shown instead.
 */
export default function TechConstellation({
  count,
  label = "Technologies",
  icons = [],
}) {
  const reduceMotion = useReducedMotion();
  const wrapperRef = useRef(null);

  // Pointer-driven 3D tilt (approved perspective + rotateX/rotateY pattern).
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-10, 10]), {
    stiffness: 120,
    damping: 18,
  });

  const handlePointerMove = (event) => {
    if (reduceMotion) return;
    const node = wrapperRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handlePointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  // Two orbital rings. Radii are percentages of the square's half-extent.
  const inner = icons.slice(0, 2);
  const outer = icons.slice(2);
  const rings = [
    { nodes: inner.length ? inner : icons.slice(0, 1), radius: 27, duration: 26, direction: 1, size: 44 },
    { nodes: outer.length ? outer : icons, radius: 43, duration: 38, direction: -1, size: 40 },
  ];

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
      className="tech-constellation-wrap"
    >
      <motion.div
        ref={wrapperRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={
          reduceMotion
            ? undefined
            : { rotateX, rotateY, transformPerspective: 1000 }
        }
        className="tech-constellation"
        role="img"
        aria-label={`${count} ${label}`}
      >
        {/* Soft radial backdrop + concentric guide rings */}
        <span className="tech-constellation-glow" aria-hidden="true" />
        <span className="tech-constellation-ringline tech-constellation-ringline-1" aria-hidden="true" />
        <span className="tech-constellation-ringline tech-constellation-ringline-2" aria-hidden="true" />

        {/* Central node — the real, page-sourced count */}
        <div className="tech-constellation-core">
          <span className="tech-constellation-core-accent" aria-hidden="true" />
          <span className="tech-constellation-count tabular-nums">{count}</span>
          <span className="tech-constellation-label">{label}</span>
        </div>

        {/* Orbiting icon nodes */}
        {rings.map((ring, ringIndex) => (
          <motion.div
            key={ringIndex}
            className="tech-constellation-orbit"
            animate={reduceMotion ? undefined : { rotate: 360 * ring.direction }}
            transition={
              reduceMotion
                ? undefined
                : { duration: ring.duration, ease: "linear", repeat: Infinity }
            }
          >
            {ring.nodes.map((Icon, nodeIndex) => {
              const angle =
                (nodeIndex / ring.nodes.length) * Math.PI * 2 +
                (ringIndex ? Math.PI / ring.nodes.length : 0);
              const left = 50 + ring.radius * Math.cos(angle);
              const top = 50 + ring.radius * Math.sin(angle);

              return (
                <div
                  key={nodeIndex}
                  className="tech-constellation-node"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: ring.size,
                    height: ring.size,
                  }}
                >
                  {/* Counter-rotate so glyphs stay upright while the ring spins */}
                  <motion.div
                    className="tech-constellation-node-inner"
                    animate={
                      reduceMotion
                        ? undefined
                        : { rotate: -360 * ring.direction }
                    }
                    transition={
                      reduceMotion
                        ? undefined
                        : {
                            duration: ring.duration,
                            ease: "linear",
                            repeat: Infinity,
                          }
                    }
                  >
                    <Icon size={ringIndex ? 18 : 20} strokeWidth={1.75} />
                  </motion.div>
                </div>
              );
            })}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
