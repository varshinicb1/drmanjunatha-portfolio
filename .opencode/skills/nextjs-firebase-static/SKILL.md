# Next.js Static Export → Firebase Hosting

## Use Case
Deploy a Next.js static site (`output: 'export'`) to Firebase Hosting. Covers the Windows-specific webpack workaround, cache headers, and full deployment cycle.

## Setup
```jsonc
// next.config.ts
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
};
```

## Commands
```powershell
# Dev server (Turbopack unavailable on win32/x64)
npx next dev --webpack

# Build
npx next build --webpack

# Deploy
npx firebase deploy --only hosting

# Full cycle
npx next build --webpack && npx firebase deploy --only hosting
```

## Firebase Config
```jsonc
// firebase.json — cache headers
{
  "hosting": {
    "headers": [
      { "source": "**/*.html", "headers": [{ "key": "Cache-Control", "value": "no-cache" }] },
      { "source": "**/*.@(js|css|png|jpg|gif|svg|webp|ico|woff2)", "headers": [{ "key": "Cache-Control", "value": "max-age=31536000, immutable" }] }
    ]
  }
}
```

## Known Issues
- SWC native binary corrupt on Windows → WASM fallback used automatically
- Turbopack unavailable on win32/x64 → pass `--webpack` flag
- Hard refresh (Ctrl+F5) required after deploy to clear cached JS bundles
- `pnpm-lock.yaml` must be renamed when switching between pnpm/npm
