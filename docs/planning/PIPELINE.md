# Pipeline & Data Flow

## End-to-End Pipeline

```
┌─────────────────────────────────────────────────────────────────┐
│  1. DATA COLLECTION (Scanner Agents)                            │
│     /nas/Temp/repos/Atheon-GitHub-Scanner/agents/               │
│     - github_scanner.py                                         │
│     - npm_speed_scanner.py                                       │
│     - python_ultra_fast_scanner.py                               │
│     - go_scanner.py                                             │
│     - rubygems_scanner.py                                       │
│     - universal_package_scanner.py                               │
│           ↓                                                     │
│  2. DATA AGGREGATION                                           │
│     - quality_audit_system.py (merge + deduplicate)             │
│     - Regenerate embedded-data.json                             │
│           ↓                                                     │
│  3. EMBEDDED DATA (public/embedded-data.json)                  │
│     2182 repositories, 2.1MB                                     │
│           ↓                                                     │
│  4. BUILD (Vite)                                              │
│     npm run build → dist/                                        │
│     - JS chunks (react-vendor, charts, index)                   │
│     - CSS                                                        │
│     - PWA assets (SW, manifest)                                │
│           ↓                                                     │
│  5. DEPLOY (Cloudflare Pages)                                  │
│     wrangler pages deploy → atheon-scanner.pages.dev              │
│           ↓                                                     │
│  6. RUNTIME                                                     │
│     Browser → Service Worker → Cache + Network                   │
└─────────────────────────────────────────────────────────────────┘
```

## Data Generation Pipeline

### Scanner Agents

Each scanner agent (`agents/*.py`) scans a specific ecosystem:

| Agent | Ecosystem | Key Patterns |
|-------|-----------|-------------|
| `github_scanner.py` | GitHub repos | README, license, topics |
| `npm_speed_scanner.py` | npm packages | dependencies, versions |
| `python_ultra_fast_scanner.py` | PyPI | package metadata, classifiers |
| `go_scanner.py` | Go modules | imports, go.mod |
| `rubygems_scanner.py` | RubyGems | gemspec, Gemfile |

**Output format:** JSONL (one record per line)

### Quality Audit System

`quality_audit_system.py` aggregates and processes scan results:

```python
# Pseudocode
for each jsonl file:
    for each line:
        record = parse(line)
        # Deduplicate by full_name
        # Compute quality_score
        # Compute tier (A/B/C/D/F)
        # Aggregate into embedded-data.json
```

**Quality score formula:**
```javascript
score = 50                          // base
  + Math.min(25, Math.log1p(stars) * 2.5)           // stars (log scale)
  + Math.min(10, (forks/stars) * 20)              // fork ratio
  + ...                                           // open issues, etc.
```

**Tier assignment:**
| Tier | Score Range |
|------|-------------|
| A | 90-100 |
| B | 75-89 |
| C | 60-74 |
| D | 40-59 |
| F | 0-39 |

## Web App Build Pipeline

### Vite Build Steps

1. **Transform** — ESBuild transforms JSX → JS
2. **Chunk** — Rollup splits into `react-vendor`, `charts`, `index`
3. **CSS** — Tailwind purged, PostCSS processed
4. **Assets** — Icons, fonts copied
5. **PWA** — vite-plugin-pwa generates SW + manifest
6. **Precache manifest** — Workbox precache list generated

### Output (`dist/`)

```
dist/
├── index.html
├── assets/
│   ├── index-DHkeCpwU.js      (app code, 224KB)
│   ├── index-Bg3wAgrf.css     (styles, 47KB)
│   ├── react-vendor-DKH_MRF1.js (react, 162KB)
│   └── charts-CuMD8065.js     (recharts, 411KB)
├── sw.js                       (service worker)
├── workbox-*.js
├── manifest.webmanifest
├── icons/
└── embedded-data.json           (NOT precached, fetched at runtime)
```

### PWA Plugin Flow

```javascript
// vite.config.js
VitePWA({
  registerType: 'autoUpdate',
  workbox: {
    globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
    // Note: embedded-data.json excluded via maximumFileSizeToCacheInBytes
  }
})
```

## Service Worker Runtime Flow

```
Browser requests /embedded-data.json
         │
         ▼
┌─────────────────────┐
│ Service Worker      │
│  (Workbox)         │
└─────────┬───────────┘
          │
    NetworkFirst?
          │
     ┌────┴────┐
     │         │
  Cache      Network
  +5min      │
     │         │
     └────┬────┘
          │
    Response
    (cached if network slow/error)
```

## GitHub Actions Pipeline

```
Push to web-app/src/**
         │
         ▼
┌─────────────────┐
│ test-unit job   │
│  - npm ci       │
│  - jest        │
└────────┬────────┘
         │ pass
         ▼
┌─────────────────┐
│ build job       │
│  - npm ci       │
│  - vite build  │
└────────┬────────┘
         │ pass
         ▼
┌─────────────────┐
│ lighthouse job │
│ (master only)  │
│  - serve dist  │
│  - lighthouse   │
└─────────────────┘
```

## Local Development Pipeline

```bash
# Terminal 1: Dev server
npm run dev
# → http://localhost:3000
# → HMR enabled

# Terminal 2: Tests
npm run test:unit -- --watch
# → Jest watching for changes

# Terminal 3: E2E (if headed)
npm run test:e2e:headed
# → Playwright with browser visible
```

## Preview Deployment Pipeline (PRs)

```
PR opened/updated
         │
         ▼
┌─────────────────┐
│ CI runs         │
│ (test-unit,     │
│  build)         │
└────────┬────────┘
         │ pass
         ▼
┌─────────────────┐
│ cloudflare/     │
│ pages-action    │
└────────┬────────┘
         │
         ▼
   Preview URL posted to PR
   e.g., https://abc123.atheon-scanner.pages.dev
```

## Data Refresh Pipeline

When scanner data is updated:

```bash
# 1. Run scanners (in /nas/.../agents/)
python quality_audit_system.py

# 2. Regenerate embedded-data.json
cd web-app
node ../scripts/regenerate-data.cjs

# 3. Verify
cat public/embedded-data.json | python -m json.tool | head -20

# 4. Commit
git add public/embedded-data.json
git commit -m "chore: update embedded data (2182 repos)"

# 5. Push → CI → Deploy
git push origin master
```

## Test Pipeline

```
┌─────────────────────────────────────────┐
│  UNIT TESTS (Jest)                      │
│  src/**/*.test.{js,jsx}                  │
│  - colors, date, scanCategories        │
│  - ToastContext, SettingsContext        │
│  - useKeyboardShortcuts                 │
│  39 tests, runs in ~2s                  │
└──────────────────┬──────────────────────┘
                   │
┌──────────────────┴──────────────────────┐
│  E2E TESTS (Playwright)                  │
│  tests/e2e/*.spec.js                    │
│  - basic-ui, compare-modal               │
│  - keyboard-shortcuts, settings          │
│  - reports-filters, user-flows          │
│  Runs against preview server             │
└─────────────────────────────────────────┘
```

## Deployment Artifacts

| Artifact | Size | Purpose |
|---------|------|---------|
| `dist/index.html` | 2.5KB | Entry point |
| `dist/assets/*.js` | ~800KB total | App code + vendor |
| `dist/assets/*.css` | 47KB | Styles |
| `dist/sw.js` | — | Service worker |
| `public/embedded-data.json` | 2.1MB | Scan data (not in dist) |
