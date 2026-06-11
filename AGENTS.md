# BookDataZ Agent Rules

These rules apply to all future coding-agent work in this repository.

## Content And Data

- Preserve all real BookDataZ data.
- Do not invent placeholder content.
- Use `src/resource/data.js` and `src/resource/mockdata.js` as the source of truth.
- Do not duplicate, rewrite, or replace source-of-truth data unless a separate change is explicitly approved.
- Follow the protections documented in `docs/content_lock.md`.

## Implementation

- Keep all existing routes working.
- Do not create standalone HTML prototypes.
- Make changes within the existing application and its established patterns.
- Do not run `npm audit fix --force` unless explicitly approved.

## Verification

- Run `npm run check:content` after changes that could affect content, data, routes, or rendering.
- Run the project build check after implementation changes.
- Record completed checks and any failures in the final report.
