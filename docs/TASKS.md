# Tasks

## Completed

### Core App
- [x] Fix tailwind.config.js: add `darkMode: 'class'`
- [x] Rebuild embedded-data.json with real data pipeline (2182 repos)
- [x] Replace SecurityRadarChart with real security data
- [x] Rebuild and deploy
- [x] Add skeleton loading states
- [x] Add keyboard shortcuts (g d/r/t/s/p/a, /, ?, Esc)
- [x] Add CompareModal for side-by-side comparison
- [x] Add Settings page with display/density controls
- [x] Add sortable columns and CSV/JSON export to Reports
- [x] Add global search to Dashboard (Cmd/Ctrl+K)

### Architecture & Performance
- [x] Code splitting (react-vendor, charts chunks)
- [x] PWA with service worker (vite-plugin-pwa)
- [x] Offline-capable (embedded data + runtime caching)
- [x] AbortSignal for cancellable fetches
- [x] TypeScript support (tsconfig, vite-plugin-checker)
- [x] Vite build optimization (chunkSizeWarningLimit: 1000→500, sourcemaps off)

### Testing & CI/CD
- [x] Unit tests: 84 passing (ThemeContext, ErrorBoundary, Skeleton, EmptyState, api.js — added 45 tests)
- [x] E2E tests: 182 passing (About, ApiDocs, NotFound, Pipeline, ReportDetail pages — added 5 new spec files)
- [x] GitHub Actions CI (web-app-ci.yml — lint + unit + Playwright + build on PR)
- [x] Lighthouse CI workflow on master push (perf≥0.85, FCP/LCP/interactive→error, interactive≤3000ms)
- [x] ESLint v9 flat config + Prettier + husky/lint-staged pre-commit hooks
- [x] Remove lint.spec.js from Playwright (ESLint belongs in CI/pre-commit)

### PWA & SEO
- [x] Add PWA offline fallback (offline.html)
- [x] Add manifest (vite-plugin-pwa auto-generates)
- [x] Add robots.txt
- [x] Add sitemap.xml (7 routes)
- [x] Add browserconfig.xml (Windows tile)
- [x] Add print stylesheet (print.css)

### Accessibility
- [x] Skip-to-content link
- [x] aria-current on active nav links
- [x] aria-haspopup/aria-expanded on column picker menu
- [x] aria-labels on Settings reset, clear filters, print buttons
- [x] aria-label on Settings icon in nav
- [x] role="status" + aria-busy on skeleton loaders
- [x] Focus trap in modals (Escape to close)
- [x] Skeleton loaders instead of spinners

### Infrastructure & Docs
- [x] Fix stop hook JSON validation error (outcome-analyzer.py always outputs JSON)
- [x] Add web-app README.md
- [x] Fix package.json name/description/homepage/repository/keywords
- [x] sitemap.xml fixed to cover all 7 routes
- [x] Expand docs/planning/ — SDLC, WORKFLOW, DEPLOYMENT with CI pipeline, publishing, hotfix flow, release process

## Pending (Future Work)

### High Priority
- [x] Run E2E Playwright tests (182 passing — `npm run test:e2e`)
- [ ] sitemap.xml auto-generation on deploy (currently static, manual update)
- [ ] PWA push notifications / background sync for scan submission

### Medium Priority
- [x] Convert pages to React.lazy + Suspense for route-level code splitting
- [x] Add CSV/JSON import for watchlist/bookmarks
- [ ] Add search autocomplete with debounce visualization
- [x] Add data refresh indicator (last-updated timestamp with countdown)
- [x] Improve print stylesheet (add ReportDetail print view)
- [x] Add `/api` page with interactive API explorer

### Low Priority / Nice-to-Have
- [x] Custom scrollbar styling
- [x] `prefers-reduced-motion` media query check
- [x] Apple touch icon (uses icon-192.svg)
- [ ] Animated page transitions
- [ ] Favicon.ico fallback for very old browsers
- [ ] Add `lang` attribute dynamic update for i18n readiness
- [ ] Add changelog entry for web-app releases
