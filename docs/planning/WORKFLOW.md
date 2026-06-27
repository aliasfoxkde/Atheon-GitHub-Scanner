# Workflow & Automation

## Git Hooks

### Project-Level Hooks (`.claude/hooks/`)

| Hook | Trigger | Purpose | Blocking? |
|------|---------|---------|-----------|
| `path-boundary-hook.py` | Pre-tool-use (Write/Edit/Bash) | Prevents writes outside repo | Yes |
| `protect-canonical-config-hook.py` | Pre-tool-use (Write/Edit) | Protects CLAUDE.md, .claude configs | Yes |
| `ai-coordination-hook.py` | Pre-tool-use | Multi-agent coordination | No |
| `scaffolding-enforcement-hook.py` | Pre-tool-use | TaskWizer scaffold validation | Yes |
| `anti-pattern-prevention-hook.py` | Pre-tool-use | Code smell detection | No |
| `dead-code-prevention-hook.py` | Pre-tool-use | Dead code detection | No |
| `pattern-suggestion-hook.py` | Pre-tool-use | Pattern suggestions | No |
| `methodology-retrieval-hook.py` | Pre-tool-use | Methodology retrieval | No |

### Global Hooks (`~/.claude/hooks/`)

| Hook | Trigger | Purpose | Blocking? |
|------|---------|---------|-----------|
| `outcome-analyzer.py` | Stop | Session outcome analysis | No |

**Stop hook behavior:**
- Runs after every Claude Code session ends
- Analyzes git commits, enforcement logs, test results
- Outputs to `~/.claude/projects/-home-mkinney-repos-backend/memory/outcomes.md`
- Always outputs valid JSON (fixed in session 2026-06-26)
- `continueOnError: true` — never blocks sessions

## Claude Code Session Workflow

### Starting a Session
```bash
# Canonical launch (recommended)
./scripts/claude-canonical

# Or start in specific project
cd /nas/Temp/repos/Atheon-GitHub-Scanner
claude
```

### During Session
1. **Hook fires before each tool call** — validates file paths, canonical docs, antipatterns
2. **AI makes changes** — edits, writes, bash commands
3. **Git hooks run locally** — pre-push gates (complexity, file size)
4. **Commit often** — descriptive messages with conventional format
5. **Don't use `git stash`** — use feature branches instead

### Ending a Session
1. **Commit all work** before switching contexts
2. **Push to remote** if work is ready
3. **Stop hook runs** — outcome analyzer, hooks execute
4. **Output is summarized** — session outcome JSON

## Claude Code Settings

`~/.claude/settings.json` controls hook behavior:

```json
{
  "hooks": {
    "PreToolUse": [
      { "matcher": "Write|Edit|Bash", "command": "path-boundary-hook.py", "continueOnError": false },
      { "matcher": "Write|Edit|Bash", "command": "protect-canonical-config-hook.py", "continueOnError": false },
      { "matcher": "Write|Edit|Bash", "command": "ai-coordination-hook.py", "continueOnError": true },
      ...
    ],
    "Stop": [
      { "command": "outcome-analyzer.py", "continueOnError": true }
    ]
  }
}
```

## Pre-Push Hooks (Local)

Before `git push`, these run locally:

### Complexity Gate (`.githooks/pre-push.d/10-complexity-gate`)
- Max function length: 50 lines
- Max file length: 500 lines
- Max cyclomatic complexity: 10

### Clean Branch Check (`.githooks/pre-push.d/20-clean-branch`)
- Advisory warning for dirty working tree
- Doesn't block push

### Coverage Gate (`.githooks/pre-push.d/30-coverage-gate`)
- Minimum coverage thresholds
- Blocks if below threshold

## CI/CD Workflows

### GitHub Actions

**`.github/workflows/web-app-ci.yml`** — triggers on PR to `web-app/**` and push to `master`:
1. `lint` — ESLint + Prettier check
2. `test` — Jest unit tests + Playwright E2E tests
3. `build` — Vite production build + artifact upload

**`.github/workflows/lighthouse.yml`** — triggers on push to `master` when `src/**`, `public/**`, `vite.config.js`, `.lighthouserc.json` change:
1. Builds web app
2. Runs Lighthouse CI against production URL (3 runs)
3. Enforces budget thresholds (perf≥0.85, a11y≥0.9, bp≥0.9, seo≥0.9)
4. Uploads HTML report as artifact

### Local Validation Commands

```bash
# Before commit — lint-staged runs automatically via husky pre-commit
# To run manually:
npm run lint        # ESLint + fix
npm run test:unit  # Jest tests
npm run build      # Vite build
```

# Before push
git push origin master
```

## Development Workflow

### Feature Development
```bash
# 1. Create branch
git checkout -b feature/my-feature

# 2. Make changes, commit
git add .
git commit -m "feat(scope): description"

# 3. Run local checks
make doctor

# 4. Push
git push -u origin feature/my-feature

# 5. Open PR, wait for CI
# CI: unit tests + build

# 6. Merge (squash)
gh pr merge --squash

# 7. Delete branch
git branch -d feature/my-feature
git push origin --delete feature/my-feature
```

### Bug Fix Flow
```bash
git checkout -b fix/bug-description
# fix, test, commit
git push -u origin fix/bug-description
# PR → CI → merge
```

## Cloudflare Pages Deployment

### Preview Deployments (PRs)
- Triggered via `cloudflare/pages-action` in CI
- URL: `https://<hash>.atheon-scanner.pages.dev`
- PR comment posted automatically

### Production Deployments
- Triggered on push to `master`
- URL: `https://atheon-scanner.pages.dev`
- Uses `npx wrangler pages deploy`

### Wrangler Config
Project configured in `wrangler.toml` or via CLI flags:
```bash
npx wrangler pages deploy dist \
  --project-name atheon-scanner \
  --branch master
```

## Testing Workflow

### Unit Tests
```bash
# Run once
npm run test:unit

# Watch mode
npm run test:unit -- --watch

# Coverage
npm run test:unit -- --coverage
```

### E2E Tests (Playwright)
```bash
# Headless
npm run test:e2e

# Headed (browser visible)
npm run test:e2e:headed

# Specific suite
npm run test:e2e:smoke
npm run test:e2e:regression
npm run test:e2e:performance
```

### Test File Naming
- Unit tests: `src/utils/colors.test.js` (next to source)
- E2E tests: `tests/e2e/*.spec.js`

### Playwright Config
- Base URL: `http://localhost:4174` (preview server)
- Web server auto-started by Playwright
- 60s timeout
- Chromium only (desktop Chrome)

## Quality Gates

| Gate | Tool | Threshold |
|------|------|-----------|
| Unit tests | Jest | 80+ passing |
| Lint | ESLint v9 | 0 errors |
| Build | Vite | 0 errors |
| Bundle size | Vite | < 1MB per chunk |
| Complexity | pre-push hook | functions < 50 lines |
| Lighthouse Perf | CI | ≥ 85 |
| Lighthouse A11y | CI | ≥ 90 |
| Lighthouse SEO | CI | ≥ 90 |
