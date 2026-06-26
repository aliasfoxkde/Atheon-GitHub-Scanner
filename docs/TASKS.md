# Tasks

## Completed
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
- [x] Fix stop hook JSON validation error
- [x] Commit, push, and deploy latest build
- [x] Deep audit of web-app for gaps/issues
- [x] Fix critical/high/medium audit findings (memory leak, toggle bug, silent failures, aria labels)

## Pending (Lower Priority)
- [ ] PWA install prompt / beforeinstallprompt handling
- [ ] Offline banner when navigator.onLine === false
- [ ] Add more E2E tests for uncovered features
- [ ] Performance optimization (code splitting, lazy loading)
- [ ] Migrate to TypeScript (from JavaScript)
- [ ] Lighthouse audit (target 90+ Performance, 95+ Accessibility)

## Known Issues (Low Priority - Tracked)
- SettingsContext writes to localStorage on every change (acceptable for small settings object)
- CompareModal may refetch when ids array reference changes (low-frequency interaction)
