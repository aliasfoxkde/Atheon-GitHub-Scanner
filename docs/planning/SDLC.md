# SDLC — Software Development Lifecycle

## Overview

Atheon GitHub Scanner uses a lightweight SDLC based on trunk-based development with short-lived feature branches.

```
main (production-ready)
  └── master (deployment branch)
        └── feature/* (short-lived, < 5 commits)
        └── fix/*    (bug fixes)
        └── docs/*   (documentation)
        └── chore/*  (tooling, deps)
```

## Branch Strategy

| Branch | Purpose | Lifetime |
|--------|---------|---------|
| `master` | Deployment target, all PRs merge here | Permanent |
| `feature/*` | New features | < 1 week |
| `fix/*` | Bug fixes | < 3 days |
| `docs/*` | Documentation | < 1 day |
| `chore/*` | Dependencies, tooling | < 1 day |

**Rules:**
1. All work happens on feature branches, never directly on `master`
2. Branch from `master`, PR back to `master`
3. Delete branch after merge
4. `master` must always be deployable

## Commit Convention

Format: `<type>(<scope>): <description>`

**Types:**
| Type | Use For |
|------|---------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Formatting, no code change |
| `refactor` | Code restructuring without behavior change |
| `perf` | Performance improvement |
| `test` | Adding/updating tests |
| `chore` | Build, tooling, deps |
| `ci` | CI/CD changes |

**Examples:**
```
feat(reports): add CSV export for filtered results
fix(dashboard): prevent setState after unmount on auto-refresh
docs(readme): add Lighthouse CI budget section
chore(deps): upgrade recharts to 2.10.4
```

## Pull Request Workflow

### 1. Create Branch
```bash
git checkout master && git pull
git checkout -b feature/my-feature
```

### 2. Make Changes
- Commit early and often with descriptive messages
- Keep commits atomic (one logical change per commit)
- Run tests locally before pushing

### 3. Push and Open PR
```bash
git push -u origin feature/my-feature
# Open PR via GitHub UI or:
gh pr create --title "feat: add feature" --body "Description"
```

### 4. PR Requirements
- Title follows commit convention
- Description explains what/why
- CI passes (build + unit tests)
- No merge conflicts

### 5. Merge
- Squash and merge preferred for feature branches
- Merge commit allowed for multi-commit PRs
- Delete branch after merge

## CI/CD Pipeline

### GitHub Actions (`.github/workflows/web-app-ci.yml`)

```
push to master
  │
  ├─► unit-tests (Jest) ─────────────────────────────────┐
  │                                                          │
  └─► build (Vite) ──► lighthouse (master only) ──► done  │
                                                               
PR to master
  │
  └─► unit-tests ──► build ──► done
```

### Pre-Push Hooks (local)

`.claude/hooks/` (project-level):
- `path-boundary-hook.py` — prevents writes outside project root
- `protect-canonical-config-hook.py` — protects CLAUDE.md, .claude configs
- `ai-coordination-hook.py` — coordination for multi-agent sessions

`~/.claude/hooks/` (global):
- `outcome-analyzer.py` — analyzes session outcomes, runs on Stop
- `scaffolding-enforcement-hook.py` — TaskWizer scaffolding rules
- `smart_enforcement.py` — antipattern detection

## Deployment

### Environments

| Environment | Trigger | URL |
|-------------|---------|-----|
| Preview (PR) | PR merge | `https://<hash>.atheon-scanner.pages.dev` |
| Production | push to `master` | `https://atheon-scanner.pages.dev` |

### Deploy Process

```bash
# 1. Build
npm run build

# 2. Deploy to Cloudflare Pages
npx wrangler pages deploy dist --project-name atheon-scanner

# Or via GitHub Actions (automatic on push to master)
```

### Versioning

- No semantic versioning (the app is a single deployed artifact)
- Date-based versioning in embedded data (`last_updated`)
- Git commit SHA for traceability

## Issue Tracking

Issues filed at: https://github.com/aliasfoxkde/Atheon-Scanner/issues

**Labels:**
- `bug` — something doesn't work
- `enhancement` — improvement to existing feature
- `security` — security vulnerability
- `docs` — documentation
- `good first issue` — newcomer-friendly

## Release Process

1. All features for a release are in `master`
2. Deployment happens automatically on push to `master`
3. No formal release notes (use git log for changelog)
4. For significant releases, add a git tag:
   ```bash
   git tag -a v1.1.0 -m "Add compare modal and keyboard shortcuts"
   git push origin v1.1.0
   ```

## Rollback

If a broken build is deployed:

```bash
# Find the last working commit
git log --oneline -10

# Force-push the good commit
git push --force origin master
```

Cloudflare Pages keeps deployment history — can also revert via dashboard.
