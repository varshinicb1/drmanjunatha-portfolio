# Dr. Manjunatha C — Academic Portfolio

Personal academic portfolio website for **Dr. Manjunatha C**, Associate Professor at RV College of Engineering, Bengaluru.

Built with Next.js 16 + TypeScript + Tailwind v4, deployed to Firebase Hosting as a static export.

## Tech Stack

- **Framework:** Next.js 16.2.9 (static export via `output: 'export'`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** GSAP (ScrollTrigger) + Lenis
- **3D Background:** Three.js (molecular structure)
- **Deployment:** Firebase Hosting
- **Build:** webpack (Turbopack unavailable on win32/x64)

## Live Site

https://drmanjunatha-cv-portfolio.web.app

## Getting Started

```powershell
# Install dependencies
npm install

# Development server
npx next dev --webpack

# Production build (static export to out/)
npx next build --webpack

# Deploy to Firebase
npx firebase deploy --only hosting

# Full cycle
npx next build --webpack && npx firebase deploy --only hosting
```

## Project Structure

```
src/
  app/
    page.tsx          # Main page (3 pillars composition)
    globals.css       # Design system, fonts, theme
    layout.tsx        # Root layout with SEO metadata
  components/
    Navbar.tsx        # Sticky navbar with hamburger menu
    Preloader.tsx     # GSAP entrance animation
    SmoothScroll.tsx  # Lenis smooth scroll wrapper
    NanoBackground.tsx # Three.js molecular background
    Hero.tsx          # 50/50 split hero with about cards
    SectionPillar.tsx # Gradient amber section banner
    Experience.tsx    # Career accordion with logos
    Education.tsx     # Timeline with university logos
    AcademicActivities.tsx # Conferences, workshops, FDPs
    CoverShowcase.tsx # Full-width journal cover panels
    Recommendations.tsx # 6 illustrated SVG research cards
    ResearchGuidance.tsx # PhD/M.Tech/B.E. student supervision
    Publications.tsx  # Full pubs with logos, patents, Q-badges
    Projects.tsx      # Funded + guided projects with search
    Awards.tsx        # Awards and recognitions
    AdminLeadership.tsx # Leadership, expertise, memberships
    Contact.tsx       # Contact cards, location, recognition
    GetInTouch.tsx    # CTA banner with email buttons
    Footer.tsx        # Footer with scroll-to-top
  data/
    profile.ts        # All professor data (700+ lines)
  utils/
    logos.ts          # Institution → logo path mapping
```

## Section Order (3 Pillars)

1. **01 Academics:** Education → Experience → Academic Activities
2. **02 Research:** Cover Showcase → Research Areas → Research Guidance → Publications → Projects → Awards
3. **03 Admin & Leadership:** Admin Leadership (leadership, technical expertise, memberships) → Contact → Get In Touch

## Design System

- **Fonts:** Bebas Neue (headings), Montserrat (body)
- **Background:** Light `#f8f8f8` / white alternating sections
- **Accent:** Amber/gold (`amber-600`, `amber-400`)
- **Cards:** White with `border-gray-200`, hover: `border-amber-200`
- **Animations:** GSAP ScrollTrigger + Lenis smooth scroll
- **Icons:** Custom illustrated SVGs for research areas

## Data Sources

- `CV-Manjunatha Channegowda-07-05-2026-FINAL.pdf` — 46-page CV
- `Dr_Manjunatha_Industry_Profile.pdf` — 5-page industry profile
- Journal covers in `public/covers/`
- Patent certificates in `public/patents/`
- 56 journal logos in `public/journal-logos/`

## Known Issues

- SWC native binary corrupted on win32 — WASM fallback used automatically
- Must use `--webpack` flag (no Turbopack on Windows x64)
- Firebase cache: HTML `no-cache`, assets 1-year immutable
- Hard refresh (Ctrl+F5) required after deploy

## GitHub

https://github.com/varshinicb1/drmanjunatha-portfolio
