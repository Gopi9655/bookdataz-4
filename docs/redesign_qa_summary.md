# Redesign Production QA Summary

## Repository State

- Branch: `redesign-foundation-data-locked`
- Latest commit before QA: `394435a384b43a670cd0873cc58e9407d3de68fc`
- QA date: `2026-06-11`
- Production server: `npm run start -- -p 3001`

## Commands Run

- `npm run check:content`
- `git diff --check`
- `npm run build`
- `npm run start -- -p 3001`
- Production HTTP status checks with `curl`
- Headless Chromium production-mode screenshot and runtime checks
- `sha256sum src/resource/data.js src/resource/mockdata.js`

## Validation Results

- Initial content-lock check: passed
- Initial `git diff --check`: passed
- Initial production build: passed
- Final content-lock check after fix: passed
- Final `git diff --check` after fix: passed
- Final production build after fix: passed
- Console/hydration errors on sampled screenshot routes: none observed
- Missing images after production scroll-through: none observed
- Large rendered elements left at `opacity: 0`: none observed
- Mobile horizontal document overflow at 390px: none observed

## Routes Checked

The following routes returned `200` in production mode:

- `/`
- `/about`
- `/contact`
- `/datacard`
- `/technology`
- `/mission`
- `/story`
- `/team`
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

`/unknown-industry` returned the expected `404`.

## Screenshots

Desktop and mobile full-page screenshots:

- `docs/qa-screenshots/home-desktop.png`
- `docs/qa-screenshots/home-mobile.png`
- `docs/qa-screenshots/datacard-desktop.png`
- `docs/qa-screenshots/datacard-mobile.png`
- `docs/qa-screenshots/technology-desktop.png`
- `docs/qa-screenshots/technology-mobile.png`
- `docs/qa-screenshots/contact-desktop.png`
- `docs/qa-screenshots/contact-mobile.png`
- `docs/qa-screenshots/about-desktop.png`
- `docs/qa-screenshots/about-mobile.png`
- `docs/qa-screenshots/team-desktop.png`
- `docs/qa-screenshots/team-mobile.png`
- `docs/qa-screenshots/automotive-industry-desktop.png`
- `docs/qa-screenshots/automotive-industry-mobile.png`
- `docs/qa-screenshots/banking-and-finance-desktop.png`
- `docs/qa-screenshots/banking-and-finance-mobile.png`

Additional interaction evidence:

- `docs/qa-screenshots/home-desktop-dropdown.png`
- `docs/qa-screenshots/home-mobile-menu.png`
- `docs/qa-screenshots/home-mobile-cookie-consent.png`
- `docs/qa-screenshots/automotive-industry-mobile-chart-viewport.png`

## Issues Found And Fixed

- Found: the desktop Mailing Lists dropdown extended about 203px beyond the right edge of a 1425px viewport.
- Fixed: right-aligned the dropdown to its trigger in `components/Navbar.js`.
- Verified after fix: dropdown bounds are fully inside the viewport and document width remains equal to viewport width.

No other code changes were required by production QA.

## Remaining Known Limitations

- Playwright was not installed in the project, so screenshots and browser diagnostics used system headless Chromium through the Chrome DevTools Protocol.
- Headless Chromium full-page capture can omit offscreen canvas chart datasets. A focused viewport screenshot and canvas pixel checks confirmed that charts render when viewed normally.
- Contact form submission was not sent during QA. The production form layout was inspected, but reCAPTCHA and external delivery behavior were not exercised.

## Protected Data Confirmation

`src/resource/data.js` and `src/resource/mockdata.js` were unchanged.

- `src/resource/data.js` SHA-256: `b8686909fbe4982881989812c883b394a499cc85eb5fbd4f247d90e0944a34ab`
- `src/resource/mockdata.js` SHA-256: `7411b3c688056e838a8fc28187873732b2d02fda834216eba6cac434652d183f`
