# Session State — Dr. Manjunatha C Portfolio

## Current Status: COMPLETED
Last build & deploy: Success (79+ files, Firebase hosting)
Live URL: https://drmanjunatha-cv-portfolio.web.app
GitHub: https://github.com/varshinicb1/drmanjunatha-portfolio

## Final Site Structure (3 Pillars)

### 01 Academics
- **Education** — Timeline with university logos (PhD, NET, M.Sc, B.Sc)
- **Experience** — Accordion with 8 employer logos (RVCE, GE, IISc, etc.)
- **Academic Activities** — Conferences, workshops, FDPs with Show All buttons

### 02 Research
- **Cover Showcase** — 3 full-width high-res journal cover panels
- **Research Areas** — 6 custom illustrated SVG cards (battery, sensors, etc.)
- **Research Guidance** — PhD, M.Tech, B.E. project supervision lists
- **Publications** — Full 120+ list, year tabs, search, Q-badges, inline journal logos, inline patent images, logo-first sorting
- **Projects** — Funded projects (5) + guided projects (62+, decade grouped), search
- **Awards** — Awards and recognitions

### 03 Admin & Leadership
- **Admin Leadership** — Leadership roles, technical expertise, industry solutions, engagement models, professional memberships with logos
- **Contact** — Contact cards, location, recognition logos
- **Get In Touch** — Amber CTA banner, email buttons
- **Footer** — Links, scroll-to-top button

## Key Features Delivered
- Sticky navbar with hamburger and 5 nav links
- GSAP ScrollTrigger + Lenis smooth scroll (all opacity bugs fixed)
- Three.js molecular background
- Preloader entrance animation
- Full publication list with year filter tabs, search, Q-rating color badges
- 56 journal logos displayed inline with fallback chain (jpg→gif→webp→png)
- 3 high-res journal covers as full-width background panels
- Patent certificates displayed inline (no modal)
- Custom multi-colored SVG icons for 6 research areas
- SEO: Open Graph, Twitter Card, JSON-LD Person schema
- Accessibility: aria-labels, roles, 44px+ touch targets
- Mobile responsive: headings, grids, spacing, timeline
- WebP hero image (1.03MB, 72% smaller than PNG)
- Section dividers between all sections

## Next Session
1. Read AGENTS.md for project structure
2. Run `npx next dev --webpack` to test locally
3. Build: `npx next build --webpack`
4. Deploy: `npx firebase deploy --only hosting`
5. (Optional) Add new features from TODO.md

## Developer Notes
- Profile data in `src/data/profile.ts` (700+ lines)
- Journal logos in `public/journal-logos/` (56 files, numbered 1–56)
- Hero photo: `public/new-pic.webp` (fallback `public/hero-photo.jpg`)
- All images unoptimized (static export limitation)
- Hard refresh (Ctrl+F5) required after each deploy
