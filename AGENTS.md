# Dr. Manjunatha C — Portfolio Website

## Project Info
- **Framework:** Next.js 16 + TypeScript + Tailwind v4
- **Deployment:** Firebase Hosting (static export)
- **URL:** https://drmanjunatha-cv-portfolio.web.app
- **Build:** `npx next build --webpack` (Turbopack unavailable on win32/x64)
- **Export:** Static files to `out/` directory

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
    page.tsx          # Main page (composition of all sections)
    globals.css       # Design system (fonts, theme, animations)
    layout.tsx        # Root layout
  components/
    Preloader.tsx     # GSAP entrance animation
    SmoothScroll.tsx  # Lenis smooth scroll wrapper
    NanoBackground.tsx # 3D molecule background (Three.js)
    Hero.tsx          # Hero + About section
    Experience.tsx    # Career accordion with logo badges
    Education.tsx     # Timeline with university logos
    Projects.tsx      # Funded projects + stats
    Publications.tsx  # Journal covers + publications + patents + memberships
    TechnicalExpertise.tsx # Industry expertise + solutions + engagement models
    Recommendations.tsx # Research areas grid
    Contact.tsx       # Contact cards + location + recognition
    Footer.tsx        # 4-column footer
  data/
    profile.ts        # All professor data
  utils/
    logos.ts          # Institution → logo path mapping
```

## Section Order (page.tsx)
1. Preloader → 2. SmoothScroll → 3. NanoBackground → 4. Hero (About)
5. Experience → 6. Education → 7. Projects (Funded Projects + Stats)
8. Publications (Publications & Patents + Memberships)
9. TechnicalExpertise (Industry Profile data)
10. Recommendations (Research Areas)
11. Contact → 12. Footer

## Design System
- **Fonts:** Bebas Neue (headings), Montserrat (body)
- **Background:** Light `#f8f8f8` / white alternating sections
- **Accent:** Amber/gold (`amber-600`, `amber-400`)
- **Cards:** White with `border-gray-200`, hover: `border-amber-200`
- **Animations:** GSAP ScrollTrigger + Lenis smooth scroll

## Data Sources
- `CV-Manjunatha Channegowda-07-05-2026-FINAL.pdf` — Main CV (46 pages): education, experience, 120+ publications, 6 patents, 62+ guided projects, conferences, workshops
- `Dr_Manjunatha_Industry_Profile.pdf` — Industry profile (5 pages): technical expertise, consultancy offerings, engagement models, solutions
- All images from PDFs extracted to `public/extracted_images/`

## Known Issues
- SWC native binary is corrupted — WASM fallback used automatically
- pnpm-lock.yaml must be renamed when switching between pnpm/npm
- Build must use `--webpack` flag (no Turbopack on Windows x64)
- Firebase cache headers: no-cache for HTML, 1-year immutable for assets

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
