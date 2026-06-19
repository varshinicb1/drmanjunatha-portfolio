# TODO — Dr. Manjunatha C Portfolio

## High Priority
- [ ] Verify all 120+ publications render in static export (check content size limits)
- [ ] Add PDF download buttons for CV and industry profile
- [ ] Add Google Scholar / ResearchGate / ORCID links
- [ ] Add contact form (needs backend/function or Formspree)

## Medium Priority
- [ ] Add PWA support (service worker, manifest, offline page)
- [ ] Add analytics (Google Analytics or Plausible)
- [ ] Add dark mode toggle
- [ ] Add blog/news section for latest publications
- [ ] Add image lazy loading optimization (native `loading="lazy"`)
- [ ] Add testimonials or collaboration logos

## Low Priority
- [ ] Add conference/workshop details with expandable view
- [ ] Add PhD student supervision profiles
- [ ] Add sitemap.xml for SEO
- [ ] Add RSS feed for publications

## Known Bugs
- [x] SWC binary corruption on win32 — must use --webpack flag (workaround active)
- [ ] pnpm-lock.yaml conflict — rename to .bak when using npm
- [ ] Firebase deploy may need `firebase.json` `headers` config re-verified

## Completed
- [x] Full publication list (120+ papers) with year tabs, search, Q-badges
- [x] Journal logos inline next to publications (56 logos, fallback chain)
- [x] Logo-first sorting (publications with logos displayed first)
- [x] Patent images inline in patent cards (removed modal)
- [x] Site restructured into 3 pillars (Academics, Research, Admin)
- [x] Sticky navbar with hamburger menu and smooth scroll links
- [x] Hero 50/50 split with WebP/PNG picture element
- [x] Mobile responsiveness (headings, cards, grids, touch targets)
- [x] GSAP opacity bugs fixed (24 components, toggleActions pattern)
- [x] SEO: Open Graph, Twitter Card, JSON-LD Person schema
- [x] Accessibility: aria-labels, roles, touch targets >= 44px
- [x] Section dividers between all sections
- [x] Get In Touch CTA section
- [x] Scroll-to-top button
- [x] CoverShowcase with 3 high-res journal covers
- [x] Custom illustrated SVGs for 6 research areas
- [x] Git repo initialized and pushed to GitHub
