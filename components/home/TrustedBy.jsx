"use client";

import Image from "next/image";

// Presentation-only logo assets (legacy /public/images set, mirrored into
// /public/trusted-logos). No claims or names — just the brand mark tiles the
// original site presented under "Trusted By". Curated to the legacy-approved
// subset (4, 7, 9 were intentionally omitted there too).
const LOGOS = [1, 2, 3, 5, 6, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
  (id) => ({ id, src: `/trusted-logos/bookdataz-logo-${id}.jpg` })
);

const LogoTile = ({ logo, ariaHidden = false }) => (
  <div className="trusted-logo-tile" aria-hidden={ariaHidden || undefined}>
    <Image
      src={logo.src}
      alt={ariaHidden ? "" : `Brand logo ${logo.id}`}
      width={150}
      height={60}
      className="trusted-logo-img"
    />
  </div>
);

const TrustedBy = () => (
  <div className="trusted-marquee" aria-label="Trusted by data-driven teams">
    <div className="trusted-marquee-fade trusted-marquee-fade-l" aria-hidden="true" />
    <div className="trusted-marquee-fade trusted-marquee-fade-r" aria-hidden="true" />

    {/* Animated marquee (motion-safe). Track duplicated for a seamless loop. */}
    <div className="trusted-marquee-viewport" data-marquee="true">
      <div className="trusted-marquee-track">
        {LOGOS.map((logo) => (
          <LogoTile key={`a-${logo.id}`} logo={logo} />
        ))}
        {LOGOS.map((logo) => (
          <LogoTile key={`b-${logo.id}`} logo={logo} ariaHidden />
        ))}
      </div>
    </div>

    {/* Static responsive grid fallback for reduced-motion users. */}
    <div className="trusted-grid" data-marquee-fallback="true">
      {LOGOS.map((logo) => (
        <LogoTile key={`g-${logo.id}`} logo={logo} />
      ))}
    </div>
  </div>
);

export default TrustedBy;
