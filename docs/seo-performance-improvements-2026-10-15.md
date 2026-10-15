# SEO and performance implementation — 15 October 2026

Implemented the approved audit items 1 and 3–7. Individual project routes are
held for UI approval; the current production project list still opens modals.

- Content is visible without JavaScript; storage failures no longer interrupt
  rendering or theme switching. Mobile navigation also works without scripts.
- All 12 pages have unique localized titles/descriptions, absolute canonical
  URLs, reciprocal language alternatives, and page-specific social images.
- Structured data derives from the seven current projects and three actual
  service descriptions, with a shared Person identity. Removed obsolete app
  details, unsupported Skill objects, and unsuitable programmingLanguage fields.
- Fonts are served locally with versioned filenames and their OFL licenses.
  Japanese body text uses system Japanese fonts; Latin typography remains Inter
  and Space Grotesk. The previous Google Fonts stylesheet and Klee One downloads
  are gone.
- The hero uses one 35 KB optimized vector as a theme-aware CSS mask instead of
  two 100 KB SVG images. The portrait uses responsive WebP candidates at quality
  75, with eager loading and high priority retained for visible content.
- Added four 1200×630 raster social cards and a small favicon. Regenerate them
  with `npm run social:build`; no image service is needed.
- Fixed dark/light contrast, main landmarks, skip navigation, focus indicators,
  menu state, duplicate toggle IDs, dialog labels, focus trapping/restoration,
  keyboard scrolling, inert backgrounds, and reduced-motion handling.
- Old contact paths now use platform 301 redirects directly to the contact
  section. The root redirect skips the extra slash-normalization hop. Hashed
  assets and versioned fonts use immutable browser caching; HTML stays fresh.

**Verification before publishing:** Astro build and whitespace checks passed.
Chrome verified all 12 titles/descriptions/canonicals and zero external font
requests. Automated axe checks found zero violations on all 12 pages in both
themes and on all seven open dialogs. Keyboard tests verified focus entry,
forward/backward focus wrapping, Escape, restoration, and background inertness.
JavaScript-disabled and blocked-storage rendering checks passed.

**Case-study concept:** https://case-study-ui-preview.portfoliov2-9ks.pages.dev

The separate preview includes a project list plus Trakio and Voy Travel pages.
Desktop and mobile checks passed with no horizontal overflow. Robots metadata
and response headers prevent indexing. These files are outside production Astro
routes, and publishing the real localized case-study structure awaits approval.

Account-level `pages.dev` hostname redirects and `www` DNS configuration require
Cloudflare Rules/DNS permissions beyond the saved Pages login. This change sets
the preferred production canonical in the HTML without adding server-side
middleware to the static portfolio.

The baseline audit and metrics remain in the adjacent dated report files. Lab
performance measurements are not real-user percentile Core Web Vitals or proof
of search ranking changes.
