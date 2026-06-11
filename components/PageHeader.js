"use client";

import { usePathname } from "next/navigation";
import Container from "./ui/Container";

const PageHeader = () => {
  const pathname = usePathname(); // Get the current pathname

  // Redesigned pages provide their own full hero and page title.
  if (["/", "/datacard", "/technology"].includes(pathname)) {
    return null;
  }

  // Map static routes to page titles
  const routeTitles = {
    "/about": "About Us",
    "/contact": "Contact Us",
    "/datacard": "Browse Datacards",
    "/technology": "Technology List",
  };

  // Dynamically format industry pages (handles "/automotive-industry", etc.)
  const formattedTitle = pathname
    .split("/")
    .filter((path) => path)
    .map((path) => path.replace(/-/g, " ")) // Converts "automotive-industry" to "Automotive Industry"
    .join(" > "); // Breadcrumb-style title

  // Determine the final title
  const title = routeTitles[pathname] || formattedTitle || "Page";

  return (
    <div className="relative border-b border-white/10 bg-[#071a2d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_42%)]" />
      <Container className="relative z-10 py-5 md:py-8">
        <h1 className="text-2xl md:text-4xl font-bold capitalize">{title}</h1>
      </Container>
    </div>
  );
};

export default PageHeader;
