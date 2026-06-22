// Source-backed testimonial content — copied verbatim from the legacy
// production site (bookdataz-4-main/src/app/page.js `testimonials` array).
// Do NOT add, invent, or alter any names, roles, companies, locations, quotes,
// or ratings. Only safe HTML escaping happens at render time.
//
// Field map vs. legacy source:
//   name        -> name        (verbatim)
//   role        <- position    (verbatim — company / location context)
//   quote       <- testimonial (verbatim quote text)
//   image       -> image       (existing portrait asset in public/testimonials/)
//   rating      -> rating      (verbatim numeric source rating; drives stars)
//
// Portrait assets are the original legacy files, mirrored into this repo's
// public/testimonials/ folder under their original names.
export const testimonials = [
  {
    name: "Rachel Summers",
    role: "VP of Sales Enablement, LeadHive UK",
    quote:
      "BookDataz provided us with highly segmented B2B email lists that dramatically boosted our lead conversion. Their precision is unmatched in the data industry.",
    image: "/testimonials/testimonial3 (1).jpg",
    rating: 5,
  },
  {
    name: "Jonathan Lee",
    role: "Chief Revenue Officer, USA California",
    quote:
      "The data quality from BookDataz helped streamline our outbound efforts across multiple EU markets. We noticed an immediate uplift in campaign engagement.",
    image: "/testimonials/testimonial3 (1).png",
    rating: 5,
  },
  {
    name: "Eric Donovan",
    role: "Head of Demand Generation, PipelineX Canada",
    quote:
      "Our SDR team loves BookDataz. Their accurate targeting and verified contacts helped us reduce bounce rates and close more enterprise deals.",
    image: "/testimonials/testimonial3 (1).webp",
    rating: 5,
  },
  {
    name: "Laura Cheng",
    role: "Director of Business Intelligence, ZenithData Australia",
    quote:
      "BookDataz is a game-changer. Their B2B datasets helped us unlock new sectors we hadn't tapped into before. Support team is top-notch too!",
    image: "/testimonials/testimonial3 (2).jpg",
    rating: 5,
  },
  {
    name: "Darren Mitchell",
    role: "Email List Strategist, USA Texas",
    quote:
      "We've worked with multiple data providers in the DACH region—BookDataz outperformed them all. Their lists are clean, compliant, and deliver real ROI.",
    image: "/testimonials/testimonial3 (2).webp",
    rating: 5,
  },
  {
    name: "Isabelle Fournier",
    role: "USA new york",
    quote:
      "What impressed us most was the speed and relevance of the data. BookDataz helped us hit aggressive Q2 targets with tailored industry contact lists.",
    image: "/testimonials/testimonial3 (7).jpg",
    rating: 5,
  },
  {
    name: "Anastasia Volkov",
    role: "VP of Strategy, Ireland Dublin",
    quote:
      "We expanded our outreach into Western markets thanks to BookDataz. Their GDPR-compliant data allowed us to scale safely and quickly.",
    image: "/testimonials/testimonial3 (3).webp",
    rating: 5,
  },
];
