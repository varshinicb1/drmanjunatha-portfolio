# Tailwind v4 Amber/Stone Theme

## Use Case
Warm, sophisticated academic/professional portfolio theme using Tailwind v4 (zero-config) with Bebas Neue + Montserrat fonts.

## Font Setup
```tsx
// layout.tsx
import { Bebas_Neue, Montserrat } from 'next/font/google';

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
```

```css
/* globals.css */
@import "tailwindcss";
.bebas-neue-regular { font-family: var(--font-bebas-neue); }
body { font-family: var(--font-montserrat); background: #f8f8f8; }
```

## Color Palette
| Token | Tailwind Class | Usage |
|---|---|---|
| Primary accent | `amber-700` (#b45309) | Headings, icons, buttons, links |
| Light accent | `amber-400` / `amber-50` | Hover borders, card backgrounds |
| Text | `stone-900` (#1c1917) | Headings, body text |
| Muted text | `stone-500` / `stone-700` | Subtitles, descriptions |
| Card bg | `bg-stone-100` | Alternating section background |
| Section bg | `bg-white` | Content backgrounds |
| Section alt | `bg-stone-100` | Alternating sections |

## Section Alternating
```tsx
// Sections alternate bg-white / bg-stone-100
<section className="w-full bg-white py-14 md:py-20">
<section className="w-full bg-stone-100 py-14 md:py-20">
```

## Card Pattern
```tsx
<div className="bg-white rounded-xl p-6 border border-stone-200 shadow-sm
    shadow-stone-200/50 hover:shadow-md hover:border-amber-300 transition-all duration-300">
```

## Key CSS Classes
- `.bebas-neue-regular` — for all headings (6xl/7xl)
- `.section-divider` — gradient rule between sections
- `tracking-[0.2em] uppercase text-amber-700 text-sm font-semibold` — section label
- `text-6xl md:text-7xl bebas-neue-regular text-stone-900 mt-1` — section heading

## No tailwind.config.js
Tailwind v4 uses CSS-based config. All customization goes in `globals.css`.
