"use client";

import { usePathname } from "next/navigation";

const PageHeader = () => {
  const pathname = usePathname(); // Get the current pathname

  // Don't render the header on the home page
  if (pathname === "/") {
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

  // Apply bg-slate-300 only for Browse Datacards page
  const bgColor = pathname === "/datacard" ? "bg-slate-600" : "bg-customBlue";

  return (
    <div className={`relative ${bgColor} text-white`}>
      <div className="absolute inset-0 bg-opacity-60"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h1 className="text-4xl font-bold capitalize">{title}</h1>
        <p className="text-lg text-gray-300 mt-2">
          {pathname.split("/").filter((path) => path).map((path, index, arr) => (
            <span key={index} className={index === arr.length - 1 ? "text-white" : "text-gray-300"}>
              {index === arr.length - 1 ? path.replace(/-/g, " ") : `${path.replace(/-/g, " ")} > `}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
