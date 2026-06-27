# System Architecture — Atheon GitHub Scanner

## Overview

Atheon GitHub Scanner is a **fully static PWA** with embedded data. No backend required at runtime. All scan data is baked into the web app at build time.

```
┌─────────────────────────────────────────────────────────────┐
│                     Cloudflare Pages                        │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────────┐   │
│  │ index.html  │  │ SW (Workbox)  │  │ embedded-data  │   │
│  │ + JS/CSS    │  │ precaches app │  │ (2.1MB JSON)  │   │
│  └─────────────┘  └──────────────┘  └────────────────┘   │
│                            │                                 │
│                   runtime caching                            │
│                   (NetworkFirst,                           │
│                    5min TTL)                                │
└─────────────────────────────────────────────────────────────┘
                            │
                     browser fetch
                            │
              ┌──────────────┴──────────────┐
              │                              │
         First visit                  Returning user
         (full precache)           (SW serves cached app,
                                     checks network for data)
```

## Tech Stack

| Component | Technology | Role |
|-----------|------------|------|
| UI Framework | React 18 | Component rendering |
| Build Tool | Vite 5 | Dev server, bundling, HMR |
| Styling | Tailwind CSS 3 | Utility-first CSS |
| Charts | Recharts | Data visualization |
| Routing | React Router 6 | SPA navigation |
| PWA | vite-plugin-pwa / Workbox | Service worker, offline |
| Testing (unit) | Jest + Testing Library | Component logic |
| Testing (e2e) | Playwright | Browser automation |
| CI/CD | GitHub Actions | Automation |
| Deployment | Cloudflare Pages | CDN hosting, previews |

## Data Architecture

**Build-time data pipeline:**
```
data/*.json → regenerate-data.cjs → public/embedded-data.json
                                        ↓
                               vite build → dist/
                                        ↓
                               wrangler deploy → Cloudflare Pages
```

**Runtime data flow:**
```
fetch('/embedded-data.json')
    ↓
SW intercepts (if cached + fresh) OR network fetch
    ↓
response.json() → React state → components
```

**Embedded data shape:**
```json
{
  "total_repositories": 2182,
  "average_quality_score": 83.4,
  "tier_distribution": { "A": 1800, "B": 200, ... },
  "language_distribution": { "JavaScript": 900, ... },
  "top_languages": [{ "language": "JavaScript", "count": 900, "avgScore": 85.2 }, ...],
  "recent_scans": [{ "id": "...", "name": "...", "quality_score": 86, ... }, ...],
  "security_stats": { "critical": 12, "high": 45, ... },
  "last_updated": "2026-06-26T..."
}
```

## Routing Architecture

```
/                     → Dashboard        (stats, recent scans, search)
/dashboard            → Dashboard        (alias)
/reports              → Reports          (filterable table, sort, export)
/reports/:id         → ReportDetail     (individual report view)
/trending            → Trending         (watchlist, top scorers)
/submit              → Submit           (form to request scan)
/pipeline            → Pipeline         (pattern reference, derived stats)
/settings            → Settings         (preferences)
/about               → About            (static info)
/api                 → ApiDocs          (API reference)
/nonexistent         → NotFound         (404)
```

## PWA Architecture

**Registration:** `vite-plugin-pwa` auto-generates `registerSW.js`, imported in `main.jsx`.

**Precache (build time):**
- All `dist/` assets: JS chunks, CSS, HTML, icons
- `embedded-data.json` is EXCLUDED (too large at 2.1MB)

**Runtime cache (SW):**
| Asset | Strategy | TTL |
|-------|----------|-----|
| `/embedded-data.json` | NetworkFirst | 5 min |
| Images (png/svg/ico) | CacheFirst | 30 days |
| Everything else | Precache | — |

**Offline fallback:** `/offline.html` shown when navigating to uncached routes offline.

## State Management

| State | Method | Persisted |
|-------|--------|-----------|
| Theme | ThemeContext (classList on `<html>`) | No (in-memory) |
| Settings | SettingsContext → localStorage | Yes |
| Toast queue | ToastContext (useReducer) | No |
| Reports data | Component state (useState) | No |
| Bookmarks | localStorage (`atheon_bookmarks`) | Yes |

## Performance Design

**Code splitting:**
```javascript
manualChunks: {
  'react-vendor': ['react', 'react-dom', 'react-router-dom'],
  'charts': ['recharts']
}
```

**Bundle sizes (gzip):**
- react-vendor: 53KB
- charts: 110KB
- index (app code): 55KB
- CSS: 9KB

**Optimizations:**
- Skeleton loaders instead of spinners (no layout shift)
- `AbortSignal` on all fetches (cancels stale requests)
- `useMemo`/`useCallback` on expensive computations
- `React.memo` on chart components

## Security

- No user authentication (public data only)
- No backend = no injection attack surface
- CSP headers configured in Cloudflare Pages
- External API calls (npm/PyPI) use `encodeURIComponent` + timeout + retry
- No `eval()` or `new Function()` in client code
