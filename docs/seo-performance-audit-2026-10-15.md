# SEO and performance audit — 15 October 2026

The site has a sound technical foundation, but its search visibility can improve substantially. The biggest content opportunity is to give individual projects useful, linkable case-study pages. The clearest performance problem is font delivery, especially on Japanese pages. There is also a confirmed rendering failure when JavaScript or local storage is unavailable.

**Scope and evidence.** Reviewed revision `588e076`, all 12 live portfolio pages, shared components, translations, project data, sitemap, redirects, and response headers. Ran Lighthouse 13.5.0 against four live pages using Chrome 155, mobile emulation, simulated network throttling and 4× CPU slowdown. Browser checks separately verified rendering failure modes and modal behavior. These are single lab runs, not real-user percentile measurements. No application or deployment changes were made for this review. Audience-specific suggestions assume the portfolio should help both clients and recruiters; keyword demand was not measured.

**Measured results**

| Live page | Performance | SEO checks | Accessibility | LCP | Blocking time | Layout shift |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `/en/` | 86 | 100 | 93 | 3.2 s | 0 ms | 0.001 |
| `/en/projects/` | 86 | 100 | 93 | 3.2 s | 0 ms | 0 |
| `/en/about/` | 88 | 100 | 93 | 3.1 s | 0 ms | 0 |
| `/ja/` | 71 | 100 | 93 | 4.6 s | 0 ms | 0 |

All four scored 100 for Lighthouse best practices. The SEO score reflects basic automated checks, not ranking potential: the missing canonical was marked “not applicable,” and structured data validation was a manual check. A 100 does not establish that titles are compelling, descriptions are unique, projects have search landing pages, or the site ranks for relevant queries.

LCP measures when the largest visible content appears. Google's good threshold is 2.5 seconds, evaluated at the 75th percentile of real visits. These lab measurements identify work to do; they do not establish the site's field Core Web Vitals status. [Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds)

**What already works**

- All 12 localized pages return 200 and contain HTML content without requiring client-side rendering.
- Each has one H1, a description, language metadata, image alternatives, and reciprocal English/Japanese/French `hreflang` links.
- `robots.txt` advertises the working sitemap index; its child sitemap lists the 12 content URLs. The old sitemap URL redirects, and missing routes now return 404.
- HTTP redirects to HTTPS. Extension and trailing-slash variants tested redirect to the slash URLs.
- Compressed HTML is approximately 3.6–8.3 KB across the 12 sampled responses. First-party CSS transferred roughly 4.7 KB in Lighthouse.
- Lighthouse recorded zero total blocking time and almost no layout shift. Images use WebP with explicit dimensions; project modal images were not downloaded during the initial projects-page audit.
- Although React is installed and a client bundle exists in the build directory, the audited pages do not load that runtime. Removing the integration would mainly simplify dependencies, not produce a demonstrated browser speed improvement.

**1. High priority: the page can become completely invisible**

Evidence: [theme visibility rule](../src/styles/theme.css#L25) and [theme initialization](../src/layouts/Layout.astro#L34).

The stylesheet hides the entire document until the inline theme script sets `data-theme-initialized`. In Chrome, disabling JavaScript left the document hidden. Simulating a `localStorage` access exception also left it hidden because initialization stops before that attribute is set. Normal rendering worked.

This is an availability and progressive-enhancement defect. It can also affect tools that do not execute JavaScript, but it is not evidence that Google currently cannot index the site.

Recommendation: show content by default, make storage access optional with error handling, and use CSS for a usable default color scheme. A theme initialization failure should never hide the page.

**2. High priority for visibility: seven projects have no individual landing pages**

Evidence: [project buttons](../src/pages/[lang]/projects.astro#L49), [modal content](../src/components/sections/ProjectModal.astro#L21), and [project data](../src/data/projects.ts).

Project rows are buttons opening hidden dialogs. Opening Trakio leaves the URL at `/en/projects/`; there is no route such as `/en/projects/trakio/`, independent title, description, or sitemap entry. The homepage's “View project” link also goes to the general list.

The detailed text is present in the HTML and public search retrieved it, so claiming it is unindexable would be incorrect. The limitation is that an individual project cannot have its own search result URL, inbound links, or focused case study.

Recommendation: create substantial pages for the strongest projects first, linked with ordinary anchors. Cover the problem, your role, technical decisions, screenshots, actual outcomes, and relevant live/source links. Keep modals only as optional enhancements. Do not generate thin pages merely to increase URL count. [Google's crawlable-link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)

**3. High priority for performance: font loading delays first render**

Evidence: [shared Google Fonts stylesheet](../src/layouts/Layout.astro#L107), [font selection](../src/styles/fonts.css), and the recorded Lighthouse network requests.

Every page requests a stylesheet covering Space Grotesk, Inter, and Klee One. The font stylesheet alone transferred about 31.7 KB and is render blocking. English loaded two font resources totaling about 71.4 KB. Japanese loaded 17 totaling about 322.9 KB; roughly 300 KB came from Klee One subsets. It did not download all three families' font files on every page: browsers select the fonts actually used.

Lighthouse estimated render-blocking savings of approximately 1.39 seconds on the English homepage and 2.81 seconds on Japanese. Those estimates are diagnostic, not promised gains.

Recommendation: load only the families and weights each locale uses; consider a system Japanese body font or restrict the decorative Japanese font to a small heading subset. Compare properly subsetted, self-hosted WOFF2 with the current delivery. Preserve `font-display: swap`, which is already configured, and preload only genuinely critical resources. [Font loading guidance](https://web.dev/learn/performance/optimize-web-fonts)

**4. Medium priority: descriptions are duplicated and some titles are not localized**

Evidence: [description defaults](../src/layouts/Layout.astro#L13), [homepage title](../src/pages/[lang]/index.astro#L25), and [About title](../src/pages/[lang]/about.astro#L23).

The 12 pages produce only three distinct descriptions: every page within a language uses the same generic description. Japanese and French descriptions are hardcoded in the layout, so passing a page-specific description alone would only fix English. Home and About titles remain English in all locales. The Japanese description also contains the apparent typo “クフトマン.”

Recommendation: provide localized title and description data for every page. Describe the actual page and service rather than repeating “digital craftsman.” For example, test a truthful homepage title combining your name, backend/mobile specialization, and Tokyo where appropriate. This improves relevance and snippet quality; descriptions are not a guaranteed ranking boost. [Google's description guidance](https://developers.google.com/search/docs/appearance/snippet), [title language guidance](https://developers.google.com/search/docs/appearance/title-link)

**5. Medium priority: canonical URLs are missing while another host serves the content**

Evidence: [shared head](../src/layouts/Layout.astro#L68). None of the 12 live pages declares a canonical in HTML; the sampled headers did not declare one either. `https://portfoliov2-9ks.pages.dev/en/` also returns 200 with the portfolio and no `X-Robots-Tag` header.

Google can select a canonical without this tag, so its absence is not an automatic penalty. However, the production Pages hostname supplies a concrete duplicate URL to consolidate.

Recommendation: add an absolute self-referencing canonical for each preferred public URL, keeping each language version canonical to itself. Redirect the production `pages.dev` hostname to `kevintim.com`, without accidentally redirecting unrelated preview deployments. The existing `hreflang` links are useful and should remain. `x-default` is optional; repeating language annotations in the sitemap is not required when valid HTML annotations already exist. [Canonical guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [localized-page guidance](https://developers.google.com/search/docs/specialty/international/localized-versions)

**6. Medium priority: branding artwork and portrait downloads can shrink**

Evidence: [HeroLogo](../src/components/common/HeroLogo.astro#L6) and [portrait image](../src/pages/[lang]/about.astro#L43).

Both logo SVG source files are 100,437 bytes. Lighthouse confirmed that both downloaded, about 27.6 KB each transferred, despite only one being visible for the selected theme. The decorative dark logo was the LCP element on the English homepage and projects page.

The portrait transferred about 96.8 KB. Lighthouse estimated approximately 66 KiB could be saved through additional compression. It is already eager-loaded, which is appropriate for this visible image.

Recommendation: optimize the existing vectors and use a single theme-aware asset or a loading approach that avoids fetching both. Retest LCP after this change rather than blindly giving decorative artwork highest priority. Lower portrait compression quality with visual comparison and add suitable responsive image candidates where useful. Avoid lazy-loading the visible portrait.

**7. Medium priority: structured data is stale or uses unsuitable schema**

Evidence: [project JSON-LD](../src/layouts/Layout.astro#L139) and [expertise JSON-LD](../src/layouts/Layout.astro#L181).

The project list is hardcoded to two entries although the page contains seven. Cryptrack is described as a Go/Wails macOS desktop app, while current project data describes React Native/Expo and links to an App Store app. The expertise block uses `@type: Skill`; that Schema.org endpoint returned 404. `programmingLanguage` belongs to `SoftwareSourceCode`, rather than the `SoftwareApplication` objects currently used.

Recommendation: derive structured data from the actual content, correct or remove unsupported types/properties, and use stable Person identity references. Add appropriate page/project types only where they accurately describe the page. Validate with Schema.org and Google's Rich Results Test; do not invent reviews or ratings to satisfy rich-result requirements. Valid markup does not guarantee a rich result. [Structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies), [programmingLanguage property](https://schema.org/programmingLanguage)

**8. Medium priority for sharing: preview images are fragile**

Evidence: [social metadata](../src/layouts/Layout.astro#L60).

All pages advertise the same relative SVG logo URL for Open Graph and Twitter, with 80×80 dimensions declared. This gives little project context and is less robust across preview clients than an absolute URL to a suitable raster image. A failing preview on a specific social platform was not directly tested.

Recommendation: use an absolute URL for a readable branded PNG/JPEG/WebP preview, with accurate dimensions and alt text. A 1200×630 design is a useful general target; project pages can use project-specific images. Use a large-image card where supported. This targets sharing and click-through, not a direct ranking factor.

**9. Accessibility and smaller technical findings**

- **Contrast:** Lighthouse found dark-mode faint text at 2.53:1, below the 4.5:1 expectation for small text. Improve the faint palette and check both themes. [Palette](../src/styles/theme.css#L16)
- **Main landmark:** no audited content page has a `<main>` element. Wrap the main page content appropriately. This is a semantic/accessibility fix, not a demonstrated ranking penalty.
- **Dialogs:** `aria-labelledby="modal-title-7"` points to a nonexistent element. Browser testing confirmed it, and focus remains on the opener after opening. The manager does not implement focus trapping/restoration. Fix the label and keyboard behavior or use an accessible native dialog pattern. [Modal](../src/components/sections/ProjectModal.astro#L25), [manager](../src/scripts/modal.ts#L4)
- **Old contact routes:** `/en/contact/` returns 200 HTML containing a meta refresh to `/en/about`, instead of an HTTP permanent redirect. The slashless contact URL adds a 308 first. Use direct platform redirects, preferably to `/en/about/#contact`, for all three locales. [Astro redirects](../astro.config.mjs#L11)
- **Root redirect:** `/` currently redirects to `/en`, which then redirects to `/en/`. Point directly to the preferred slash URL to remove a hop. Consider a permanent redirect only if English is intended to remain the fixed default.
- **Browser caching:** sampled hashed SVGs have a four-hour cache lifetime with revalidation. Longer immutable browser caching for hashed `/_astro/` assets may help repeat visits. Keep HTML revalidating so deployments remain fresh; do not apply immutable caching globally.
- **Content consistency:** the featured Trakio mobile app is labeled “FEATURED · WEB DESIGN.” The homepage emphasizes web design while About emphasizes backend/mobile/AI. Align the positioning with the work you want to attract. [Featured label](../src/i18n/translation/en.ts#L27)
- **`www` availability:** two requests to `www.kevintim.com` timed out, including an unrestricted check. Investigate its DNS/TLS/redirect configuration before using it in profiles. These timeouts do not identify the underlying cause.

**Recommended order**

1. Fix default visibility and optional storage access. Add canonical URLs, unique localized metadata, accurate structured data, and robust social previews.
2. Reduce font delivery costs, especially Japanese; optimize the logos and portrait; repeat representative mobile audits and check visual quality.
3. Publish detailed, linked case studies for the strongest two or three projects, then expand where there is meaningful content. Align titles, services, and examples around the desired audience.
4. Resolve accessibility issues, redirect chains, duplicate production hostname, and hashed-asset caching.
5. Establish an organic-search baseline, then assess outcomes using impressions, clicks, relevant queries, and contact conversions rather than Lighthouse SEO alone.

**What remains unmeasured**

No Search Console property data, ranking history, backlink inventory, or organic conversion data was available, so this audit does not establish current traffic, actual index coverage, penalties, or the reason for low visibility. Public search returned the English homepage and projects page; that is not a full coverage audit. The public PageSpeed API returned 429, so the performance results above come from local Lighthouse. Field INP and 75th-percentile Core Web Vitals remain unverified.

For an account-based follow-up, provide a Search Console export or optionally install Windsor.ai and connect the relevant Search Console property. The integration was discoverable but was not installed or connected during this audit. No integration is required to implement the code findings above.
