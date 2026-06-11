# Content Lock

The current BookDataZ content and business data are locked. Visual work must consume the existing source-of-truth exports without rewriting, duplicating, or fabricating them.

## Protected Source Files

- `src/resource/data.js`
- `src/resource/mockdata.js`

Do not edit these files unless a separate content or business-data change is explicitly approved.

## Protected Values

- All `datacollections` values.
- All `mailinglinks` names, icons, slugs, and routes, including routes derived from the names.
- All `whatweoffer` titles and content.
- All `mockData` industry descriptions, chart values, keywords, and slugs.
- All `CATEGORIES` titles, counts, and subcategories.
- Existing contact and business literals throughout the application unless separately approved.

## Usage Rules

- Import and render protected data from its source-of-truth file.
- Do not duplicate protected data into components or new data files.
- Do not replace protected content with placeholder, mock, or invented SaaS content.
- Run `npm run check:content` after changes that could affect protected content or its rendering.
