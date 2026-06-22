"use client";

import { usePathname } from "next/navigation";
import Container from "./ui/Container";

const PageHeader = () => {
  const pathname = usePathname(); // Get the current pathname
  const redesignedRoutes = [
    "/",
    "/about",
    "/contact",
    "/datacard",
    "/mission",
    "/story",
    "/team",
    "/technology",
  ];

  // Map static routes to page titles
  const routeTitles = {
    "/about": "About Us",
    "/contact": "Contact Us",
    "/mission": "Mission",
    "/story": "Story",
    "/team": "Team",
  };

  // Redesigned pages and top-level industry routes provide their own page title.
  const isTopLevelDynamicRoute =
    pathname.split("/").filter(Boolean).length === 1 && !routeTitles[pathname];

  if (
    redesignedRoutes.includes(pathname) ||
    isTopLevelDynamicRoute
  ) {
    return null;
  }

  const formattedTitle = pathname
    .split("/")
    .filter((path) => path)
    .map((path) => path.replace(/-/g, " "))
    .join(" > ");

  const title = routeTitles[pathname] || formattedTitle || "Page";

  return (
    <div className="bdz-page-header relative border-b border-white/10">
      <Container className="relative z-10 py-5 md:py-8">
        <h1 className="text-2xl font-bold capitalize tracking-tight text-[color:var(--section-contrast-text)] md:text-4xl">
          {title}
        </h1>
      </Container>
    </div>
  );
};

export default PageHeader;
