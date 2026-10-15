# Project case studies

The approved layout replaces project dialogs with normal, linkable pages at
`/{lang}/projects/{slug}/`. All seven projects have English, Japanese, and French
versions, for 21 case-study pages and 33 content pages in the sitemap.

| Project | Slug |
| --- | --- |
| Trakio | `trakio` |
| Voy Travel | `voy-travel` |
| Cryptrack | `cryptrack` |
| Naps shaving | `naps-shaving` |
| Kakurega | `kakurega` |
| siriusGarage | `sirius-garage` |
| Tsuuka | `tsuuka` |

Each page includes the existing translated overview and technical details,
responsive project artwork, technology tags, an external project link when one
exists, a next-project link, and a contact link. No project metrics or outcomes
were invented. The homepage's featured project links directly to its case study.

SEO metadata includes a unique localized title and description, an absolute
canonical, reciprocal language alternatives, CreativeWork and breadcrumb data,
and a project-specific 1200×630 social image. Project-list structured data points
to the portfolio case-study URLs. Images and pages are generated during Astro's
static build; no runtime API or Pages Function is needed.

The shared project data owns the slugs and categories. Case-study UI labels live
in `src/i18n/case-study.ts`. Add substantive translated project content to the
existing translation dictionaries when extending the case studies.

Validation covered all 33 pages and internal links, unique titles/descriptions,
all seven social images, both color themes on all 21 case studies, and navigation
through the mobile language switcher. The case studies also rendered with
JavaScript disabled. Automated accessibility checks reported no violations, and
representative mobile/desktop screenshots had no horizontal overflow.

Tsuuka was previously named MoneySwap. Its former `/{lang}/projects/moneyswap/`
URLs redirect permanently to `/{lang}/projects/tsuuka/` in each language.
