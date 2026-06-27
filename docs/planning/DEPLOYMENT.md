# Deployment Guide

## Environments

| Environment | URL | Trigger | Access |
|------------|-----|---------|--------|
| Production | https://atheon-scanner.pages.dev | push to `master` | Public |
| Preview | https://`<hash>`.atheon-scanner.pages.dev | PR merge | PR author |

## Prerequisites

```bash
# Install Wrangler CLI
npm install -g wrangler

# Or use npx (no install)
npx wrangler pages deploy dist --project-name atheon-scanner
```

**Required:**
- Cloudflare account
- `CLOUDFLARE_API_TOKEN` (for CI, not for local deploy)

## Local Deployment

### Build
```bash
cd web-app
npm run build
```

### Deploy to Production
```bash
npx wrangler pages deploy dist --project-name atheon-scanner
```

### Deploy with Custom Branch
```bash
npx wrangler pages deploy dist \
  --project-name atheon-scanner \
  --branch production
```

### Verify Deployment
```bash
# Check deployed URL
curl -sI https://atheon-scanner.pages.dev | grep -i location
```

## Cloudflare Pages Setup

### Initial Project Creation
```bash
# Create project (one-time)
npx wrangler pages project create atheon-scanner

# Configure build command and output directory
# Build command: npm run build
# Output directory: dist
# Root directory: web-app
```

### Environment Variables

Create `.dev.vars` for local dev:
```bash
# web-app/.dev.vars
VITE_API_URL=https://atheon-scanner-api.workers.dev
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_OFFLINE_SUPPORT=true
```

For Cloudflare Pages, set in dashboard:
- **Settings → Environment Variables**

### Custom Domain (Optional)

```bash
# Add custom domain
npx wrangler pages domain add atheon-scanner.com --project-name atheon-scanner

# DNS must point to Cloudflare Pages
# CNAME: atheon-scanner.com → atheon-scanner.pages.dev
```

## CI/CD Deployment

### GitHub Actions (Automatic)

Push to `master` triggers `web-app-ci.yml`:

```yaml
# .github/workflows/web-app-ci.yml (simplified)
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm run build

  lighthouse:
    needs: [build]
    if: github.ref == 'refs/heads/master'
    steps:
      - run: npx serve web-app/dist -l 4173 &
      - run: npx lighthouse http://localhost:4173 ...
```

### Preview Deployments (PRs)

Via `cloudflare/pages-action`:

```yaml
- uses: cloudflare/pages-action@v1
  with:
    apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
    accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
    projectName: atheon-scanner
    directory: web-app/dist
    gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

**Requires secrets:**
- `CLOUDFLARE_API_TOKEN` — Cloudflare API token
- `CLOUDFLARE_ACCOUNT_ID` — Cloudflare account ID

### Generating Cloudflare Tokens

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Create Custom Token
3. Permissions: `Account: Cloudflare Pages: Edit`
4. Account: select your account
5. Generate token

## Wrangler Configuration

### wrangler.toml (optional, not currently used)

```toml
name = "atheon-scanner"
compatibility_date = "2024-01-01"

[pages]
project_name = "atheon-scanner"
# command = "npm run build"
# output_dir = "dist"
```

### CLI Flags Reference

| Flag | Description |
|------|-------------|
| `--project-name` | Cloudflare Pages project name |
| `--branch` | Branch to deploy to |
| `--commit-dirty` | Deploy even with uncommitted changes |
| `--workers-compatible` | Deploy as Workers (not Pages) |

## Rollback

### Via GitHub Actions

1. Go to Actions tab
2. Find the last good deployment
3. Click "Redeploy"

### Via Wrangler

```bash
# List deployments
wrangler pages deployment list --project-name atheon-scanner

# Rollback to specific deployment
wrangler pages rollback <deployment-id> --project-name atheon-scanner
```

### Via Git (re-deploy previous commit)

```bash
# Find good commit
git log --oneline -10

# Force push old commit
git push --force origin master
```

## Cache Invalidation

Cloudflare Pages caches:
- **Static assets** — cached at edge, immutable (hash in filename)
- **HTML** — cached, invalidated on new deploy
- **embedded-data.json** — fetched at runtime, cached by SW

**Manual purge:**
```bash
# Via Cloudflare dashboard
# Cache → Purge Everything

# Or via API
curl -X POST "https://api.cloudflare.com/client/v4/zones/<zone>/purge_cache" \
  -H "Authorization: Bearer <token>" \
  -H "Content-Type: application/json" \
  -d '{"files": ["https://atheon-scanner.pages.dev/embedded-data.json"]}'
```

## Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| Largest Contentful Paint | < 2.5s | — |
| First Contentful Paint | < 1.8s | — |
| Cumulative Layout Shift | < 0.1 | — |
| Total Blocking Time | < 200ms | — |
| Lighthouse Performance | ≥ 80 | — |
| Lighthouse Accessibility | ≥ 90 | — |

## Monitoring

### Cloudflare Analytics

Dashboard: https://dash.cloudflare.com/pages/sites/atheon-scanner

Metrics:
- Requests
- Bandwidth
- Cache hit ratio
- Error rates

### Uptime

Consider adding external monitoring:
- UptimeRobot (free tier: 50 monitors)
- Better Uptime
- Grafana + synthetic checks

### Logs

Cloudflare Pages doesn't provide traditional logs. For debugging:
- `curl -v https://atheon-scanner.pages.dev/endpoint`
- Browser DevTools Network tab
- Cloudflare Trace: `https://atheon-scanner.pages.dev/__vcache?url=...`

## Troubleshooting

### Build Fails in CI but Works Locally

```bash
# Check Node version
node --version  # Should match .nvmrc or engines in package.json

# Clear npm cache
npm cache clean --force
npm ci  # Use ci, not install
```

### Deployment URL Mismatch

Cloudflare Pages assigns random subdomain on first deploy. Subsequent deploys use the same URL. If URL changes:
- Check if `--branch` flag changed
- Check project name consistency

### Service Worker Not Updating

1. Clear browser cache (DevTools → Application → Storage → Clear site data)
2. Check `registerSW.js` is loaded
3. Verify `vite-plugin-pwa` version compatibility

### embedded-data.json Not Loading

- Check network tab for 404
- Verify `_redirects` has `/* /index.html 200`
- Check SW runtime cache logs in DevTools
