# Algarve Bread Co.

Public, bilingual bakery website for Lachlan in Lagos, Portugal. The deployed app is in `site1/`; the older `frontend/` directory is only the initial scaffold. Docker builds `site1/` and Flask serves its output.

## Local preview

```sh
cd site1
npm ci
npm run dev -- --host 127.0.0.1 --port 5174 --strictPort
```

Live reference: https://bread.johnmgibson.com/
Local draft: http://127.0.0.1:5174/

Production check: `npm run build` in `site1/`.

## November 13, 2026 design review

Design baseline: `b27cf6e` on `origin/dev`. The pull request branch `redesign/algarve-bread-main` starts from the latest `origin/main` and includes the existing dev site foundation plus the editorial redesign. Opening the PR does not publish it; merging into main triggers the repository deployment workflow.

### Problems in the previous page

- Base44 title/favicon, dead social links, and Marcus branding on a Lachlan site.
- Newsletter submission only toggled a success message; no subscriber was stored.
- Unsupported childhood story, baking-duration statistics, popularity badges, and nutrition claims.
- Oversized photo overlay and repeated rounded cards gave the bakery a generic template appearance.
- Bread descriptions were revealed on hover, making discovery harder on phones.
- Public page loaded unused account/public-settings requests against a missing Base44 API.

### Implemented direction

Paper background, forest-green type and panels, restrained terracotta accent, an original line-drawn loaf mark, a split hero, and a bread-first editorial layout. Visible product descriptions, expand/collapse range, market information panel, mailto inquiries, and native expandable FAQs. Full English/Portuguese content, language metadata, mobile navigation, skip link, keyboard focus states, reduced-motion support, and a branded 404 page.

Removed the public page's unused Base44 account bootstrap and development instrumentation. Old template components and dependencies remain on disk for reference; the current page does not import them.

### Content still needs owner confirmation

This preview retains the previous site's six bread varieties, Saturday 08:00–13:00 schedule, Lagos market name, and `lachlan@algarvebreadco.com` address. They have not been independently verified. Product descriptions are draft copy based on the existing range, not verified ingredient lists. Confirm these before publishing.

Needed for a finished business site:

1. Exact market address/stall and confirmed map destination.
2. Actual prices, loaf weights, availability, and ingredient/allergen information.
3. A verified contact method and real social profiles.
4. Real photographs of Lachlan, his loaves, and the market stall. Current bread illustrations are the existing generated Base44 assets, reused for composition only.
5. Lachlan's own short story, in his words. The large L monogram is an interim visual, not a substitute for a real baker portrait.
6. If a mailing list or ordering system is wanted, implement actual delivery/storage and clear success/error states.

### Validation

Production build passed. Browser checked desktop and 390px/320px layouts, English/Portuguese switching, bread expansion, mobile section navigation, and FAQ disclosure. No horizontal overflow observed at those mobile sizes. Contact links are mailto links; no email was sent. Remote images and Google Fonts still require network access. Existing dependency audit and outdated Browserslist advisories are separate maintenance work.
