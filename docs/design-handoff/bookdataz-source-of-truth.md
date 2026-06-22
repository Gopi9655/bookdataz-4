# BookDataZ Source Of Truth For Visual Redesign Prototype

This handoff is for a complete visual redesign prototype only. It documents the current repo facts, route structure, content protections, and desired visual direction. It does not authorize production redesign work or protected data edits.

## Scope And Inspected Sources

Inspected source files and docs:

- `src/resource/data.js`
- `src/resource/mockdata.js`
- `src/resource/testimonials.js`
- `src/app/page.js`
- `src/app/layout.js`
- `src/app/datacard/page.js`
- `src/app/technology/page.js`
- `src/app/[industry]/page.jsx`
- `src/app/about/page.js`
- `src/app/contact/page.js`
- `src/app/mission/page.js`
- `src/app/story/page.js`
- `components/Navbar.js`
- `components/Footer.js`
- `components/PageHeader.js`
- `components/IndustryDetails.jsx`
- `components/home/CoverageCommandCenter.jsx`
- `components/home/DataStreams.jsx`
- `components/home/GlobalReach.jsx`
- `components/home/HeroDashboard.jsx`
- `components/home/TestimonialsCarousel.jsx`
- `components/home/ValueCarousel.jsx`
- `src/app/globals.css`
- `tailwind.config.js`
- `public/logo-bookdataz.svg`
- `public/logo-premium.svg`
- `public/images/*`
- `docs/content_lock.md`
- `docs/route_manifest.md`
- `docs/design_contract.md`
- `docs/redesign_qa_summary.md`

## 1. Project Identity

BookDataZ is presented as a B2B database and data-solutions provider. The site sells access to business contact data, email databases, industry mailing lists, datacards, technology/install-base lists, account profiling, data-driven marketing support, and custom data solutions.

Current services actually stated in the repo:

- Premium B2B email data, datacards, industry lists, and databases.
- Custom Data: custom extraction services for Google Maps data.
- Tailored Data Solutions: transforming raw data into strategic insights and customized solutions.
- Bulk Email Messaging: the service title says "Bulk Email Messaging"; the service body currently describes bulk WhatsApp messaging.
- Data-driven marketing and account profiling services.
- B2B databases of key decision-makers, professionals, and executives, customized to requirements.
- Technology list / install-base targeting by platform.
- Contact form and free data sample CTA.

The site must communicate:

- BookDataZ is a premium professional B2B data provider.
- Data is targeted, verified, up to date, and useful for sales and marketing outreach.
- Coverage is global and spans many industries and categories.
- The product supports business growth, lead generation, segmentation, and campaign workflows.
- Trust, compliance, and data quality matter.
- The redesign must not invent new statistics, client names, countries, certifications, testimonials, or product claims.

Existing brand identity:

- `public/logo-bookdataz.svg` shows an email/data icon and the wordmark.
- "Book" is orange.
- "DataZ" is navy.
- The icon uses blue/navy as an email/data mark.
- The icon includes orange data-line detail.
- The icon includes a small green verified badge as a trust cue.
- `public/logo-premium.svg`, `public/logo-b.jpg`, and `public/images/bookdataz-logo-*.jpg` also exist as logo-related assets.

## 2. Protected Content Rules

Hard protected files:

- `src/resource/data.js`
- `src/resource/mockdata.js`

Additional protected source:

- `src/resource/testimonials.js` states testimonial content must not be added, invented, or altered.

Content-lock rules from `docs/content_lock.md`:

- Do not edit protected source files unless a separate content or business-data change is explicitly approved.
- Do not duplicate protected data into components or new data files.
- Do not replace protected content with placeholder, mock, or invented SaaS content.
- Import and render protected data from the source-of-truth files.
- Protected values include all `datacollections`, `mailinglinks`, `whatweoffer`, `mockData`, and `CATEGORIES` content.

Available content-lock command:

```bash
npm run check:content
```

Redesign and prototype work must reuse existing repo data. Do not invent claims, counts, testimonials, industries, company names, countries, or certifications.

## 3. Actual Factual Claims Found In Repo

### Data Collection Stats

From `src/resource/data.js`:

| Number | Heading |
| --- | --- |
| 450M+ | EXTENSIVE DATA COLLECTIONS |
| 11M+ | VERIFIED ACTIVE BUSINESS |
| 160+ | NATIONS REPRESENTED |
| 412K+ | GLOBAL HEALTHCARE PROFESSIONALS |
| 7000+ | LEADING ENTERPRISE AS CLIENTS |

### Mailing List Industries

From `src/resource/data.js`:

- Automotive Industry
- Banking and Finance
- Construction Companies
- Educational Industries
- Food and Beverages
- Healthcare Industries
- Manufacturing Industries
- Oil and Gas
- Pharmaceuticals
- Real Estate
- Retail Industries
- Travel and Transport Industries

### Data Categories And Counts

From `src/resource/mockdata.js`: 18 categories and 180 subcategory listings.

| Category | Count |
| --- | --- |
| Healthcare | 5,026,500 |
| Technology | 2,566,372 |
| Finance | 4,539,826 |
| Education | 7,067,704 |
| Retail | 1,850,923 |
| Manufacturing | 9,088,010 |
| Energy | 5,062,600 |
| Hospitality | 10,050,900 |
| Real Estate | 2,262,600 |
| Government | 1,480,960 |
| Automotive | 1,562,600 |
| Telecommunications | 2,010,550 |
| Logistics | 1,310,087 |
| Legal Services | 1,690,180 |
| Media and Entertainment | 1,025,350 |
| Non-Profit | 1,025,350 |
| Construction | 2,095,180 |
| Food and Beverage | 2,045,670 |

### Datacard Claims

From `src/app/datacard/page.js`:

- BookDataz is described as a prominent B2B marketing solution provider specializing in data-driven marketing and account profiling services.
- The page states BookDataz provides B2B databases of key decision-makers, professionals, and executives that can be customized to requirements.
- It states "170+ Million" email contacts.
- It states "100% Data Ownership Guarantee".
- It states "Privacy Compliant: CAN-SPAM & GDPR".
- It states "1-to-1 Campaign Assistance: Phone, Email".
- It states "Custom Build List Delivery: 24-72 Hours".
- Compliance labels shown: GDPR Ready, CCPA Ready, Privacy Shield.

### Technology And Data Intelligence Claims

From `src/app/page.js`:

- "Technology & Data Intelligence"
- "Transform Your Future with BookDataz's Futuristic Solutions"
- "As pioneers in AI-powered DaaS and SaaS solutions, we deliver expertise in Contextual Intelligence, Ad hoc Sales, Marketing, and Growth Strategies."
- "BookDataz stands at the forefront of data innovation, offering an unrivaled blend of cutting-edge AI-powered solutions and deep industry expertise that transforms raw data into strategic insights."

From `src/app/technology/page.js`:

- The technology page targets accounts by the platforms they run.
- It lets users search the full install-base directory.
- The current technology array contains 133 named technologies.

### Organization And Contact Facts

From `src/app/layout.js`, `components/Footer.js`, and `src/app/contact/page.js`:

- US Office: 6150 Poplar Ave, Suite 200, Memphis, TN 38119, United States.
- UK Office: Gateway East, White City, London W12 7TU, United Kingdom.
- Sales email: `sales@bookdataz.com`.
- Contact/footer phone: `+1 (901)-300-5501`.
- Structured data telephone in `layout.js`: `+1-901-942-8334`.
- Founding date in structured data: 2013.
- Structured data area served: US, CA, SG, Western Europe.
- LinkedIn URL in structured data: `https://www.linkedin.com/company/bookdataz`.

The phone numbers differ in the current repo. Do not resolve or rewrite this without separate business approval.

### Testimonials

From `src/resource/testimonials.js`:

- Lars Petersen, Marketing Manager, NovaLink Denmark.
- Darren Mitchell, Email List Strategist, Datastream Berlin.
- Isabelle Fournier, CMO, BlueMetric France.

Do not invent additional testimonials, names, roles, companies, locations, or quotes.

## 4. Current Route Structure

Routes documented in `docs/route_manifest.md` and discovered in `src/app`:

| Route | Source | Notes |
| --- | --- | --- |
| `/` | `src/app/page.js` | Homepage. |
| `/about` | `src/app/about/page.js` | About BookDataZ. |
| `/contact` | `src/app/contact/page.js` | Contact form, FAQ, map, contact details. |
| `/datacard` | `src/app/datacard/page.js` | Browse data categories and counts. Supports query filtering in UI. |
| `/mission` | `src/app/mission/page.js` | Mission and vision page. |
| `/story` | `src/app/story/page.js` | Story page. |
| `/team` | `src/app/team/page.js` | Team page. |
| `/technology` | `src/app/technology/page.js` | Technology list search page. |
| `/visual-lab` | `src/app/visual-lab/page.js` | Existing isolated brand-refresh experiment route. Not listed in `docs/route_manifest.md`. |
| `/api/contact` | `src/app/api/contact/route.ts` | POST contact API. |

Dynamic industry routes are served by:

- `src/app/[industry]/page.jsx`
- `generateStaticParams()` returns `Object.keys(mockData)`.
- Unknown slugs call `notFound()`.
- `docs/redesign_qa_summary.md` documents `/unknown-industry` returning the expected 404.

Industry routes:

- `/automotive-industry`
- `/banking-and-finance`
- `/construction-companies`
- `/educational-industries`
- `/food-and-beverages`
- `/healthcare-industries`
- `/manufacturing-industries`
- `/oil-and-gas`
- `/pharmaceuticals`
- `/real-estate`
- `/retail-industries`
- `/travel-and-transport-industries`

Company routes:

- No separate `[company]` dynamic route was found.
- "Construction Companies" is a mailing/industry route, not a company-detail route.

## 5. Current Homepage Structure

The homepage body is `src/app/page.js`. Global chrome comes from `src/app/layout.js`. `PageHeader` returns `null` for `/`, so the homepage does not render the generic page header.

| Order | Section | Current file/component | Purpose | Data source | Content that must remain true | Can be redesigned visually |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Navbar | `components/Navbar.js` via `src/app/layout.js` | Main navigation, logo, mailing-list dropdown, mobile menu. | `mailinglinks` from `src/resource/data.js`. | Route labels and industry links must remain valid. Logo identity must remain. | Layout, spacing, dropdown styling, sticky treatment, mobile menu animation. |
| 2 | Hero | `src/app/page.js`, `components/home/DataStreams.jsx`, `components/home/HeroDashboard.jsx` | Introduces premium email B2B databases, global reach, sample/datacard CTAs, top stats. | `datacollections`, `CATEGORIES`. | Do not change existing stat values or invent new coverage claims. Keep free sample and datacard CTAs. | Hero composition, typography, right-side data card, motion, visual depth, section height. |
| 3 | Data Coverage / Command Centre | `src/app/page.js`, `components/home/CoverageCommandCenter.jsx`, `components/home/CategoryIcon.jsx` | Interactive category selector showing record counts, subcategories, and largest categories by volume. | `CATEGORIES` from `src/resource/mockdata.js`. | Category names, counts, and subcategories must come from source data. | Can become a more premium coverage explorer, data map, table, cards, 3D/motion surface, or simpler interactive view. |
| 4 | Coverage CTA | `src/app/page.js` | Sends users to datacards or contact sample request. | Static copy in page. | Do not invent new sample/database promises. | Visual treatment, button hierarchy, placement. |
| 5 | Value Section | `src/app/page.js`, `components/home/ValueCarousel.jsx` | Explains why teams choose BookDataZ with carousel slides built from protected stats and categories. | `datacollections`, `CATEGORIES`. | Any numeric slide claims must remain tied to source values. | Carousel style, card motion, layout, density, premium feel. |
| 6 | Global Reach | `src/app/page.js`, `components/home/GlobalReach.jsx` | Visualizes worldwide outreach using the `160+ NATIONS REPRESENTED` stat. | `datacollections`. | Do not add country names unless already approved in source. Keep 160+ nations factual. | Globe/network visual, motion, layout, contrast, iconography. |
| 7 | Stats Strip | `src/app/page.js` | Shows all five `datacollections` metrics. | `datacollections`. | All five numbers and headings must remain exact. | Strip layout, typography, background, animation. |
| 8 | Industry Database | `src/app/page.js` | Links to 12 industry mailing-list routes with icons. | `mailinglinks`. | Industry names, icons, and route slugs must remain derived from source data. | Card design, grid, hover states, imagery treatment. |
| 9 | Services | `src/app/page.js` | Shows what BookDataZ offers. | `whatweoffer` from `src/resource/data.js`. | Titles and service body copy must not be rewritten without approval. | Icons, card visual language, section composition. |
| 10 | Technology Intelligence | `src/app/page.js` | Promotes technology/data intelligence and links to `/technology`. | Static homepage copy. | Only use claims already present unless separately approved. | Band style, feature card style, motion, background, right-side visual. |
| 11 | Testimonials | `src/app/page.js`, `components/home/TestimonialsCarousel.jsx` | Shows approved testimonial carousel. | `testimonials` from `src/resource/testimonials.js`. | Names, roles, companies, locations, and quotes must remain exact. | Carousel layout, testimonial card style, controls, rhythm. |
| 12 | CTA | `src/app/page.js` | Final conversion CTA to contact. | Static homepage copy. | Do not invent new guarantees or outcomes. | Visual impact, background, CTA hierarchy, layout. |
| 13 | Footer | `components/Footer.js` via `src/app/layout.js` | Company links, industries, contact details, offices, copyright. | Static footer groups plus logo asset. | Keep routes valid and preserve contact/business literals unless approved. | Footer hierarchy, color, density, responsive layout. |

Current homepage components that are not imported by `src/app/page.js`:

- `components/HeroSection.jsx`
- `components/WhatWeOffer.jsx`

Treat these as legacy or unused until proven otherwise.

## 6. Current Visual Problems To Solve

Observed from the current code and requested design direction:

- Dull grey/black color correction is needed. The current site relies heavily on slate/near-black surfaces, dark navy bands, and grey text.
- The experience is too dashboard-like. The hero is named and built as `HeroDashboard`; the coverage area is a "command centre"; many visuals look like analytics/admin panels.
- The site needs more premium B2B service feel and less generic SaaS/admin feel.
- The hero is too bulky. Current hero and dashboard CSS force large min-heights and dense metric/dashboard content.
- The right-side hero card is not strong enough as a premium visual centerpiece.
- Repeated CSS overrides cause confusion. `src/app/globals.css` contains many `!important` overrides that fight component Tailwind classes.
- The color system is inconsistent across Tailwind config, CSS variables, app pages, legacy components, and the isolated `/visual-lab` route.
- Previous all-blue/admin direction should be avoided.
- Avoid a cold hacker/cyberpunk look, excessive dark grids, and random AI/neon gradients.
- The redesign should keep the current data integrity but feel more polished, warmer, clearer, and more high-end.

## 7. Desired Redesign Direction

The next design target:

- Premium professional B2B service website.
- High-end data provider, not a generic software dashboard.
- Clean, trustworthy, global, modern.
- Confident use of white space, warm premium surfaces, navy structure, and orange conversion energy.
- Clear first-screen positioning around BookDataZ as a premium B2B data provider.
- Strong hero with refined right-side data card or data visual.
- Visual interest through motion, 3D, depth, and data-line elements, but polished and restrained.

Avoid:

- Hacker/cyberpunk style.
- Generic admin dashboard style.
- Dull grey-black palette.
- Pale washed blue palette.
- Random AI/neon gradients.
- All-blue admin look.
- Invented claims, invented customers, invented logos, invented certifications, or invented counts.

## 8. Brand And Color Direction

Preserve the existing BookDataZ identity:

- Book orange.
- DataZ blue/navy.
- Orange motion/data lines.
- Blue email/data icon.
- Optional green verified accent used sparingly only as a trust cue.

Suggested palette:

| Role | Color |
| --- | --- |
| Book orange | `#F15A24` / `#FF6B2A` |
| DataZ navy | `#073A5C` / `#082F57` |
| Premium blue | `#0B5FA5` / `#1687D9` |
| Verified green | `#16A66A` / `#22C55E` |
| Clean white | `#FFFFFF` |
| Warm surface | `#FFF7F0` |
| Soft blue surface | `#EEF7FF` |
| Body text navy | `#102033` |

Color-use guidance:

- Orange should lead CTAs and kinetic data-line accents.
- Navy should provide authority and structure, especially for text and premium anchor sections.
- Premium blue should be the data/accent system, not the whole page.
- Green should be rare and only for verified/trust cues.
- White and warm surfaces should carry more of the page than black/slate.

## 9. Prototype Requirements For Claude Design

Copy this section directly into Claude Design:

```text
Design a completely new BookDataZ homepage prototype.

Use this source-of-truth handoff as the factual content guide. Follow the current route structure and homepage section structure, but redesign the visual experience from scratch as a premium B2B data-service website.

Do not invent new claims, statistics, client names, testimonials, certifications, countries, routes, or services. Reuse only the facts found in the existing repo:
- 450M+ EXTENSIVE DATA COLLECTIONS
- 11M+ VERIFIED ACTIVE BUSINESS
- 160+ NATIONS REPRESENTED
- 412K+ GLOBAL HEALTHCARE PROFESSIONALS
- 7000+ LEADING ENTERPRISE AS CLIENTS
- 18 data categories and their exact counts
- 12 mailing-list industry routes
- Existing services: Custom Data, Tailored Data Solutions, Bulk Email Messaging
- Existing technology/data intelligence wording only

Keep the BookDataZ identity:
- Book orange
- DataZ blue/navy
- Blue email/data icon
- Orange data/motion lines
- Optional green verified accent used sparingly as a trust cue

Design direction:
- Premium professional B2B service website
- High-end data provider
- Clean, trustworthy, global, modern
- Strong first-screen positioning
- High-end hero with refined right-side data card or data visual
- Motion/3D/fancy visual elements are allowed, but they must feel clean, professional, and restrained

Avoid:
- Hacker/cyberpunk
- Generic admin dashboard
- Dull grey-black
- Pale washed blue
- Random AI/neon gradients
- Previous all-blue/admin look
- Placeholder content or invented SaaS claims

Include responsive behavior:
- Desktop homepage layout
- Mobile homepage layout
- Mobile navigation behavior
- Hero, data coverage, industry cards, services, testimonials, CTA, and footer behavior on mobile

The prototype should be visual only. Do not overwrite production app files. Keep source data unchanged.
```

## 10. Implementation Guardrails

Prototype first:

- Do not overwrite the production homepage, components, or global styles during prototype exploration.
- Do not create standalone HTML prototypes in this repo.
- If a prototype is implemented in-app, use an isolated route or branch and keep production routes working.

Later implementation:

- Create a new branch before production implementation.
- Preserve all existing routes in `docs/route_manifest.md`.
- Preserve `/visual-lab` unless explicitly removed by the project owner.
- Keep `src/resource/data.js` and `src/resource/mockdata.js` unchanged.
- Keep testimonial content unchanged unless separately approved.
- Reuse protected data through imports; do not copy protected data into new files.
- Do not run `npm audit fix --force` unless explicitly approved.

Required checks for future implementation work:

```bash
npm run check:content
git diff -- src/resource/data.js src/resource/mockdata.js
git diff --check
npm run build
```

For this handoff-only task, the required verification is:

```bash
npm run check:content
git diff -- src/resource/data.js src/resource/mockdata.js
git diff --check
```
