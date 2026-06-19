# Dr. Manjunatha C — Portfolio Website

## Project Info
- **Framework:** Next.js 16 + TypeScript + Tailwind v4
- **Deployment:** Firebase Hosting (static export)
- **URL:** https://drmanjunatha-cv-portfolio.web.app
- **Build:** `npx next build --webpack` (Turbopack unavailable on win32/x64)
- **Export:** Static files to `out/` directory
- **GitHub:** https://github.com/varshinicb1/drmanjunatha-portfolio

## Commands
```powershell
# Dev
npx next dev --webpack

# Build
npx next build --webpack

# Deploy
npx firebase deploy --only hosting

# Full cycle
npx next build --webpack && npx firebase deploy --only hosting
```

## Code Structure
```
src/
  app/
    page.tsx          # Main page (3 pillars composition)
    globals.css       # Design system (fonts, theme, animations, scroll-margin)
    layout.tsx        # Root layout (SEO, OG, JSON-LD)
  components/
    Navbar.tsx        # Sticky navbar, hamburger, 5 nav links
    Preloader.tsx     # GSAP entrance animation
    SmoothScroll.tsx  # Lenis smooth scroll wrapper
    NanoBackground.tsx # 3D molecule background (Three.js)
    Hero.tsx          # 50/50 split, <picture> WebP/PNG, stats bar
    SectionPillar.tsx # Gradient amber banner (num + title + subtitle)
    Experience.tsx    # Career accordion with employer logos
    Education.tsx     # Timeline with university logos
    AcademicActivities.tsx # Conferences, workshops, FDPs with Show All
    CoverShowcase.tsx # Full-width journal cover panels
    Recommendations.tsx # 6 illustrated SVG research area cards
    ResearchGuidance.tsx # PhD/M.Tech/B.E. supervision lists
    Publications.tsx  # Full pub list, JournalLogo (stateful fallback),
                      # year tabs, search, Q-badges, patents inline
    Projects.tsx      # Funded projects + guided projects, decade groups
    Awards.tsx        # Awards and recognitions
    AdminLeadership.tsx # Leadership, technical expertise, memberships
    Contact.tsx       # Contact cards + location + recognition
    GetInTouch.tsx    # Amber CTA banner, email buttons
    Footer.tsx        # Footer + scroll-to-top button
  data/
    profile.ts        # All professor data (700+ lines)
  utils/
    logos.ts          # Institution → logo path mapping
```

## Section Order (page.tsx — 3 Pillars)
```
01 ACADEMICS:  Education → Experience → AcademicActivities
02 RESEARCH:   CoverShowcase → Recommendations → ResearchGuidance
               → Publications → Projects → Awards
03 ADMIN:      AdminLeadership → Contact → GetInTouch → Footer
```
Wrapped in: Preloader → SmoothScroll → NanoBackground → Navbar → [pillars] → Footer

## Design System
- **Fonts:** Bebas Neue (headings), Montserrat (body)
- **Background:** Light `#f8f8f8` / white alternating sections
- **Accent:** Amber/gold (`amber-600`, `amber-400`)
- **Cards:** White with `border-gray-200`, hover: `border-amber-200`
- **Animations:** GSAP ScrollTrigger + Lenis smooth scroll
- **Pattern:** `gsap.set()` + `gsap.from()` + `toggleActions: 'play none none none'`

## Mobile Touch Targets
- All interactive elements: `min-h-11` / `py-3.5` (minimum 44px)
- Year filter tabs: `text-sm py-2.5 px-4`
- Hamburger: `p-3 min-w-11 min-h-11`
- Scroll-to-top: `w-11 h-11`

## Data Sources
- `CV-Manjunatha Channegowda-07-05-2026-FINAL.pdf` — Main CV (46 pages)
- `Dr_Manjunatha_Industry_Profile.pdf` — Industry profile (5 pages)
- Images: `public/new-pic.webp` (hero), `public/covers/` (3 journal covers), `public/patents/` (2 patent certs), `public/journal-logos/` (56 logos)

## Known Issues
- SWC native binary is corrupted — WASM fallback used automatically
- Build must use `--webpack` flag (no Turbopack on Windows x64)
- Firebase cache headers: no-cache for HTML, 1-year immutable for assets
- Hard refresh (Ctrl+F5) required after every deploy

## Logo Mapping (utils/logos.ts)
| Institution | File |
|---|---|
| RV College of Engineering | rvce-logo.png |
| Indian Institute of Science (IISc) | iisc-logo.png |
| General Electric, GE India | ge-logo.svg |
| Visvesvaraya Technological University (VTU) | vtu-logo.png |
| Bangalore University | bub-logo.png |
| American Chemical Society (ACS) | acs-logo.svg |
| Royal Society of Chemistry (RSC) | rsc-logo.svg |
| CSIR-UGC / MHRD | csir-logo.jpg |
| The National Pre-University College | national-pu-logo.png |
| Deeksha Centre for Learning | deeksha-logo.png |
