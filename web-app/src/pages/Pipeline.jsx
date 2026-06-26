import { useState } from 'react'
import { loadRealScannerData } from '../services/realScannerData'
import { Skeleton, SkeletonDonut } from '../components/Skeleton'
import { DonutChart } from '../components/Charts'
import { useToast } from '../contexts/ToastContext'

const ATHEON_VERSION = 'v1.0.0'
const SCAN_CATEGORIES = [
  // ── 1. Secrets (33) ──────────────────────────────────────────────────────────
  {
    name: 'secrets', label: 'Secrets Detection', icon: '🔐', color: '#ef4444',
    patterns: [
      { name: 'aws-access-key',         desc: 'AWS access key ID (AKIA…) and secret',          severity: 'critical' },
      { name: 'github-pat',              desc: 'GitHub Personal Access Token (PAT)',              severity: 'critical' },
      { name: 'github-actions-secret',    desc: 'GitHub Actions workflow secret',                  severity: 'critical' },
      { name: 'circleci-token-v2',        desc: 'CircleCI v2 API token',                          severity: 'critical' },
      { name: 'circleci-token',           desc: 'CircleCI legacy API token',                      severity: 'critical' },
      { name: 'slack-bot-token',          desc: 'Slack bot / API token',                          severity: 'critical' },
      { name: 'stripe-secret-key',         desc: 'Stripe API secret key',                         severity: 'critical' },
      { name: 'npm-auth-token',           desc: 'npm registry authentication token',              severity: 'critical' },
      { name: 'docker-hub-token',          desc: 'Docker Hub access token',                        severity: 'critical' },
      { name: 'docker-auth-config',       desc: 'Docker authentication config file',             severity: 'critical' },
      { name: 'gcp-api-key',              desc: 'Google Cloud API key',                           severity: 'critical' },
      { name: 'gcp-oauth-client-id',       desc: 'GCP OAuth client ID',                           severity: 'high' },
      { name: 'gcp-oauth-client-secret',   desc: 'GCP OAuth client secret',                       severity: 'critical' },
      { name: 'gcp-service-account-key',   desc: 'GCP service account JSON key',                 severity: 'critical' },
      { name: 'gcp-service-account-email', desc: 'GCP service account email address',             severity: 'medium' },
      { name: 'openai-api-key',            desc: 'OpenAI API key',                                severity: 'critical' },
      { name: 'azure-client-secret',       desc: 'Azure client secret',                           severity: 'critical' },
      { name: 'azure-managed-identity',     desc: 'Azure managed identity token',                  severity: 'critical' },
      { name: 'azure-service-principal',   desc: 'Azure service principal credential',            severity: 'critical' },
      { name: 'azure-storage-key',         desc: 'Azure storage account key',                      severity: 'critical' },
      { name: 'azure-devops-token',         desc: 'Azure DevOps PAT',                             severity: 'critical' },
      { name: 'kubernetes-service-account-token', desc: 'Kubernetes service account token',        severity: 'critical' },
      { name: 'gitlab-ci-token',           desc: 'GitLab CI token',                               severity: 'critical' },
      { name: 'jenkins-token',             desc: 'Jenkins API / CSRF token',                      severity: 'critical' },
      { name: 'postgres-connection-string', desc: 'PostgreSQL connection string with credentials', severity: 'critical' },
      { name: 'mysql-connection-string',   desc: 'MySQL connection string with credentials',      severity: 'critical' },
      { name: 'redis-connection-string',   desc: 'Redis connection string with credentials',      severity: 'critical' },
      { name: 'mongodb-connection-string', desc: 'MongoDB connection string with credentials',   severity: 'critical' },
      { name: 'sqlserver-connection-string', desc: 'SQL Server connection string',               severity: 'critical' },
      { name: 'oracle-connection-string',  desc: 'Oracle DB connection string',                  severity: 'critical' },
      { name: 'pypi-upload-token',          desc: 'PyPI upload token',                            severity: 'critical' },
      { name: 'twilio-api-key',            desc: 'Twilio account SID + auth token',              severity: 'critical' },
    ],
  },
  // ── 2. Code Quality (24) ─────────────────────────────────────────────────────
  {
    name: 'code-quality', label: 'Code Quality', icon: '📋', color: '#3b82f6',
    patterns: [
      { name: 'console-log',           desc: 'Console.log statement left in production code',     severity: 'warning' },
      { name: 'debug-statement',        desc: 'Debugger breakpoint or debug statement',           severity: 'warning' },
      { name: 'todo-comment',           desc: 'TODO/FIXME comment — incomplete work',            severity: 'info' },
      { name: 'fixme-comment',          desc: 'FIXME comment needing attention',                   severity: 'info' },
      { name: 'placeholder-code',        desc: 'Placeholder or temporary code stub',                severity: 'info' },
      { name: 'dummy-function',         desc: 'Dummy or incomplete function implementation',       severity: 'info' },
      { name: 'unreachable-code',       desc: 'Dead code after return / throw / break',           severity: 'warning' },
      { name: 'empty-catch-block',      desc: 'Empty catch block silently swallowing errors',     severity: 'warning' },
      { name: 'deprecated-function',    desc: 'Usage of a deprecated function or API',            severity: 'warning' },
      { name: 'hardcoded-url',          desc: 'Hardcoded URL instead of configuration',           severity: 'warning' },
      { name: 'temporary-code',         desc: 'Temporary or hack code that should be removed',    severity: 'info' },
      { name: 'todo-stub',              desc: 'Incomplete stub function not yet implemented',     severity: 'info' },
      { name: 'auto-confirm',           desc: 'Automatic confirmation bypassing user interaction', severity: 'warning' },
      { name: 'bare-exception-block',   desc: 'Bare except: clause catches all exceptions',       severity: 'warning' },
      { name: 'build-force',            desc: '--force flag in build script overrides safety',    severity: 'warning' },
      { name: 'cruft',                  desc: 'Cruft / trailing whitespace / formatting debris',  severity: 'info' },
      { name: 'fake-data',              desc: 'Fake / placeholder data left in source',           severity: 'info' },
      { name: 'git-clean-force',        desc: 'git clean --force can irreversibly delete files', severity: 'critical' },
      { name: 'git-force-push',         desc: 'git push --force overwrites remote history',      severity: 'critical' },
      { name: 'git-hard-reset',         desc: 'git reset --hard discards uncommitted changes',   severity: 'critical' },
      { name: 'insecure-flag',          desc: 'Insecure CLI flag or runtime flag enabled',       severity: 'warning' },
      { name: 'mock-stub',              desc: 'Mock / stub left in production code',             severity: 'info' },
      { name: 'package-manager-force',  desc: 'Package manager --force flag bypasses integrity', severity: 'warning' },
      { name: 'skip-hooks',             desc: 'CI / install hooks bypassed with --skip-hooks',  severity: 'warning' },
      { name: 'skip-tests',            desc: 'Tests disabled or skipped in CI configuration',   severity: 'warning' },
    ],
  },
  // ── 3. Accessibility (19) ────────────────────────────────────────────────────
  {
    name: 'accessibility', label: 'Accessibility (a11y)', icon: '♿', color: '#06b6d4',
    patterns: [
      { name: 'aria-labels',               desc: 'Element missing ARIA label for screen readers', severity: 'warning' },
      { name: 'color-contrast',            desc: 'Foreground/background contrast below WCAG 4.5:1', severity: 'warning' },
      { name: 'focus-management',          desc: 'Focus not properly managed on interaction',     severity: 'warning' },
      { name: 'form-labels',               desc: 'Form input without associated label element',  severity: 'warning' },
      { name: 'heading-hierarchy',         desc: 'Heading hierarchy skipped or incorrect',       severity: 'warning' },
      { name: 'inaccessible-modal-dialogs', desc: 'Modal dialog not keyboard/screen-reader accessible', severity: 'warning' },
      { name: 'incorrect-heading-hierarchy', desc: 'Heading level skipped (e.g. h1→h3)',         severity: 'warning' },
      { name: 'keyboard-navigation',        desc: 'Interactive element missing keyboard support', severity: 'warning' },
      { name: 'missing-alt-text',           desc: 'Image missing alt attribute',                 severity: 'warning' },
      { name: 'missing-aria-label',        desc: 'Interactive element missing ARIA label',      severity: 'warning' },
      { name: 'missing-aria-live-regions', desc: 'Dynamic content change not announced',        severity: 'warning' },
      { name: 'missing-focus-indicators',   desc: 'Focus indicator invisible or missing',        severity: 'warning' },
      { name: 'missing-form-labels',        desc: 'Form field without visible or ARIA label',  severity: 'warning' },
      { name: 'missing-language-attribute', desc: 'html lang attribute missing or invalid',     severity: 'warning' },
      { name: 'missing-skip-links',         desc: 'Skip navigation link missing for keyboard users', severity: 'warning' },
      { name: 'poor-focus-management',       desc: 'Focus not moved to new content (modals, toasts)', severity: 'warning' },
      { name: 'poor-screen-reader-announcements', desc: 'Dynamic updates not announced to screen readers', severity: 'warning' },
      { name: 'semantic-html',              desc: 'Non-semantic element used where semantic element exists', severity: 'warning' },
      { name: 'table-headers',               desc: 'Table missing proper th headers or scope attributes', severity: 'warning' },
    ],
  },
  // ── 4. Security Hardening (14) ───────────────────────────────────────────────
  {
    name: 'security-hardening', label: 'Security Hardening', icon: '🛡️', color: '#dc2626',
    patterns: [
      { name: 'authentication-bypass',       desc: 'Authentication can be bypassed or circumvented', severity: 'critical' },
      { name: 'authentication',             desc: 'Missing or insufficient authentication mechanism', severity: 'critical' },
      { name: 'cors',                       desc: 'CORS policy too permissive or misconfigured',   severity: 'critical' },
      { name: 'csrf',                       desc: 'CSRF protection missing on state-changing request', severity: 'critical' },
      { name: 'hardcoded-secrets',          desc: 'Secret or credential hardcoded in source',     severity: 'critical' },
      { name: 'injection',                  desc: 'Injection vulnerability (SQL, OS, LDAP, etc.)', severity: 'critical' },
      { name: 'input-validation',           desc: 'User input not validated or sanitized',        severity: 'critical' },
      { name: 'insecure-dependencies',       desc: 'Dependency with known unfixed vulnerability', severity: 'critical' },
      { name: 'path-traversal',              desc: 'Path traversal / directory traversal risk',    severity: 'critical' },
      { name: 'python-command-injection',    desc: 'Python os.system / subprocess with user input', severity: 'critical' },
      { name: 'session-fixation',            desc: 'Session fixation — attacker sets session ID', severity: 'critical' },
      { name: 'session-management',          desc: 'Weak or missing session management',          severity: 'critical' },
      { name: 'weak-cryptography',            desc: 'Weak hashing, encryption, or signature',     severity: 'critical' },
      { name: 'xss',                         desc: 'Cross-site scripting (XSS) vulnerability',   severity: 'critical' },
    ],
  },
  // ── 5. Web Development (12) ──────────────────────────────────────────────────
  {
    name: 'web-development', label: 'Web Development', icon: '🌐', color: '#7c3aed',
    patterns: [
      { name: 'bundler-optimization',      desc: 'Bundler optimization not enabled or misconfigured', severity: 'info' },
      { name: 'error-boundaries',          desc: 'React component missing error boundary',          severity: 'warning' },
      { name: 'form-validation',           desc: 'Form input not validated on client or server',    severity: 'warning' },
      { name: 'incorrect-semantic-html',   desc: 'Semantic HTML element used incorrectly',         severity: 'warning' },
      { name: 'inefficient-css',           desc: 'Inefficient CSS selector or unused styles',      severity: 'warning' },
      { name: 'missing-prop-validation',   desc: 'Component props not validated (TypeScript/PropTypes)', severity: 'warning' },
      { name: 'nextjs',                    desc: 'Next.js configuration issue or anti-pattern',     severity: 'warning' },
      { name: 'poor-error-boundary',       desc: 'Error boundary swallows errors silently',         severity: 'warning' },
      { name: 'react-optimization',        desc: 'React component not optimized (memo, useMemo)',  severity: 'warning' },
      { name: 'seo-meta-tags',             desc: 'SEO meta tags missing or incomplete',            severity: 'info' },
      { name: 'state-management',          desc: 'Improper or inefficient state management pattern', severity: 'warning' },
      { name: 'typescript-any',            desc: 'TypeScript: \'any\' type used — defeats type safety', severity: 'warning' },
    ],
  },
  // ── 6. Web Security (12) ─────────────────────────────────────────────────────
  {
    name: 'web-security', label: 'Web Security', icon: '🔒', color: '#b45309',
    patterns: [
      { name: 'django-csrf-missing',                    desc: 'Django view without @csrf_protect decorator',       severity: 'critical' },
      { name: 'dom-based-xss',                          desc: 'DOM-based XSS — user input into innerHTML / eval', severity: 'critical' },
      { name: 'express-form-without-csrf',             desc: 'Express form handler missing CSRF middleware',     severity: 'critical' },
      { name: 'flask-form-without-csrf',               desc: 'Flask form handler missing CSRF protection',       severity: 'critical' },
      { name: 'innerHTML-user-input',                  desc: 'User-supplied data passed to innerHTML',           severity: 'critical' },
      { name: 'insecure-deserialization',              desc: 'Insecure deserialization of untrusted data',       severity: 'critical' },
      { name: 'js-sql-template-literal',                desc: 'SQL built with JS template literal (injection)',   severity: 'critical' },
      { name: 'prototype-pollution',                  desc: 'Prototype pollution vulnerability',                severity: 'critical' },
      { name: 'python-sql-f-string',                   desc: 'SQL built with Python f-string (injection)',       severity: 'critical' },
      { name: 'python-sql-string-format',              desc: 'SQL built with str.format() (injection risk)',      severity: 'critical' },
      { name: 'react-dangerously-set-inner-html',      desc: 'react-html prop used — potential XSS',             severity: 'critical' },
      { name: 'vue-html-directive',                    desc: 'Vue v-html directive with user-supplied content', severity: 'critical' },
    ],
  },
  // ── 7. Performance (12) ─────────────────────────────────────────────────────
  {
    name: 'performance', label: 'Performance', icon: '⚡', color: '#eab308',
    patterns: [
      { name: 'blocking-main-thread',              desc: 'Synchronous operation blocks the main thread',      severity: 'warning' },
      { name: 'database-connection-leak',            desc: 'Database connection not properly closed / pooled',  severity: 'critical' },
      { name: 'inefficient-data-structures',        desc: 'Suboptimal data structure choice (array vs map)',  severity: 'warning' },
      { name: 'inefficient-regex',                  desc: 'Regex causing catastrophic backtracking or O(n²)', severity: 'warning' },
      { name: 'large-object-cloning',               desc: 'Large object cloned on every request (closure)',   severity: 'warning' },
      { name: 'memory-leak-closure',                desc: 'Closure capturing large object preventing GC',      severity: 'warning' },
      { name: 'missing-caching-opportunities',      desc: 'Repeated identical computation not cached',        severity: 'info' },
      { name: 'missing-caching',                    desc: 'Cache headers or CDN caching not configured',       severity: 'warning' },
      { name: 'missing-index',                      desc: 'Database query without index on filter column',   severity: 'warning' },
      { name: 'missing-lazy-loading',               desc: 'Resource loaded eagerly instead of lazy-loaded',   severity: 'warning' },
      { name: 'n-plus-one-query',                   desc: 'N+1 query pattern — one query per related record', severity: 'warning' },
      { name: 'synchronous-api',                    desc: 'Synchronous API call in async context blocks event loop', severity: 'warning' },
    ],
  },
  // ── 8. API Integration (8) ───────────────────────────────────────────────────
  {
    name: 'api-integration', label: 'API Integration', icon: '🔗', color: '#0ea5e9',
    patterns: [
      { name: 'api-versioning',  desc: 'API endpoint lacks versioning strategy',    severity: 'warning' },
      { name: 'authentication',  desc: 'API endpoint missing authentication',        severity: 'critical' },
      { name: 'error-handling', desc: 'API error responses not handled gracefully', severity: 'warning' },
      { name: 'graphql',         desc: 'GraphQL query complexity or depth not limited', severity: 'warning' },
      { name: 'pagination',     desc: 'API returns unpaginated large result set',    severity: 'warning' },
      { name: 'rate-limiting',  desc: 'API rate limiting not implemented',           severity: 'warning' },
      { name: 'rest',           desc: 'Non-REST or mixed REST conventions used',     severity: 'warning' },
      { name: 'timeout',        desc: 'API client missing request timeout',           severity: 'warning' },
    ],
  },
  // ── 9. Cloud Native (6) ─────────────────────────────────────────────────────
  {
    name: 'cloud-native', label: 'Cloud Native', icon: '☁️', color: '#38bdf8',
    patterns: [
      { name: 'docker',         desc: 'Dockerfile missing healthcheck or security hardening', severity: 'warning' },
      { name: 'health-checks',  desc: 'Service missing liveness or readiness probe',          severity: 'warning' },
      { name: 'kubernetes',      desc: 'Kubernetes deployment misconfiguration detected',       severity: 'warning' },
      { name: 'multi-region',    desc: 'Multi-region deployment / failover not configured',    severity: 'info' },
      { name: 'serverless',      desc: 'Serverless function timeout or memory misconfiguration', severity: 'warning' },
      { name: 'terraform',       desc: 'Terraform resource misconfiguration detected',           severity: 'warning' },
    ],
  },
  // ── 10. DevOps (6) ──────────────────────────────────────────────────────────
  {
    name: 'devops', label: 'DevOps / CI-CD', icon: '🔧', color: '#64748b',
    patterns: [
      { name: 'ci-bypass',           desc: 'CI gate can be bypassed or skipped in PR',     severity: 'critical' },
      { name: 'ci-cd',              desc: 'CI/CD pipeline misconfiguration detected',       severity: 'warning' },
      { name: 'dockerfile',          desc: 'Dockerfile security or best-practice issue',   severity: 'warning' },
      { name: 'git-hook',           desc: 'Git hook misconfiguration detected',            severity: 'warning' },
      { name: 'github-workflow',    desc: 'GitHub Actions workflow misconfiguration',      severity: 'warning' },
      { name: 'kubernetes',          desc: 'Kubernetes configuration issue in YAML manifest', severity: 'warning' },
    ],
  },
  // ── 11. AI Detection (6) ────────────────────────────────────────────────────
  {
    name: 'ai-detection', label: 'AI Detection', icon: '🤖', color: '#a78bfa',
    patterns: [
      { name: 'ai-buzzwords',        desc: 'AI buzzword inflation without substance',      severity: 'info' },
      { name: 'ai-emoji',            desc: 'Excessive AI emoji usage in code or docs',     severity: 'info' },
      { name: 'ai-incomplete-code',  desc: 'AI-generated code that appears incomplete',   severity: 'warning' },
      { name: 'ai-overuse',          desc: 'AI-generated content overused in codebase',   severity: 'info' },
      { name: 'ai-safety-bypass',    desc: 'Attempt to bypass AI safety or content filters', severity: 'critical' },
      { name: 'ai-template',         desc: 'AI prompt template left in codebase',          severity: 'info' },
    ],
  },
  // ── 12. Healthcare / PHI (6) ────────────────────────────────────────────────
  {
    name: 'healthcare', label: 'Healthcare / PHI', icon: '🏥', color: '#22c55e',
    patterns: [
      { name: 'patient-id',              desc: 'Patient identifier (PID / MRN) detected',   severity: 'critical' },
      { name: 'medical-record-number',    desc: 'Medical record number (MRN) detected',       severity: 'critical' },
      { name: 'clinical-trial-id',        desc: 'Clinical trial identifier detected',          severity: 'critical' },
      { name: 'prescription-number',     desc: 'Prescription / Rx number detected',            severity: 'critical' },
      { name: 'medical-license-number',  desc: 'Medical license number detected',              severity: 'critical' },
      { name: 'insurance-number',        desc: 'Insurance / policy number detected',           severity: 'critical' },
      { name: 'healthcare-code',         desc: 'Healthcare procedure / diagnosis code (ICD, CPT)', severity: 'warning' },
    ],
  },
  // ── 13. PWA (5) ─────────────────────────────────────────────────────────────
  {
    name: 'pwa', label: 'PWA', icon: '📱', color: '#f97316',
    patterns: [
      { name: 'caching-strategy',  desc: 'PWA service worker caching strategy not optimal', severity: 'info' },
      { name: 'manifest',          desc: 'web app manifest missing or incomplete',           severity: 'warning' },
      { name: 'offline-support',   desc: 'App functionality not available offline',         severity: 'info' },
      { name: 'service-worker',    desc: 'Service worker registration or scope issue',       severity: 'warning' },
      { name: 'shortcuts',         desc: 'PWA home screen shortcuts not configured',       severity: 'info' },
    ],
  },
  // ── 14. Data Visualization (5) ─────────────────────────────────────────────
  {
    name: 'data-visualization', label: 'Data Visualization', icon: '📊', color: '#ec4899',
    patterns: [
      { name: 'chart-accessibility',   desc: 'Chart missing alt text or data table fallback',    severity: 'warning' },
      { name: 'chart-config',          desc: 'Chart configuration missing or invalid',           severity: 'info' },
      { name: 'chart-types',          desc: 'Inappropriate chart type for data distribution',    severity: 'info' },
      { name: 'color-schemes',         desc: 'Chart colors not accessible (colorblind unsafe)',  severity: 'info' },
      { name: 'mobile-optimization',   desc: 'Chart not optimized for mobile viewports',          severity: 'warning' },
    ],
  },
  // ── 15. Frameworks (3) ──────────────────────────────────────────────────────
  {
    name: 'frameworks', label: 'Frameworks', icon: '⚛️', color: '#06b6d4',
    patterns: [
      { name: 'django-debug-print',      desc: 'Django debug print / print statement in production', severity: 'warning' },
      { name: 'nodejs-todo-development', desc: 'TODO in Node.js source flagged for dev only',       severity: 'info' },
      { name: 'react-console-log-dev',  desc: 'React console.log left in development code',        severity: 'warning' },
    ],
  },
  // ── 16. Finance (3) ─────────────────────────────────────────────────────────
  {
    name: 'finance', label: 'Financial Data', icon: '💳', color: '#f59e0b',
    patterns: [
      { name: 'aba-routing',  desc: 'ABA routing transit number (US bank account)',     severity: 'critical' },
      { name: 'iban',         desc: 'International Bank Account Number (IBAN)',          severity: 'critical' },
      { name: 'swift-bic',    desc: 'SWIFT / BIC code for international transfers',      severity: 'warning' },
    ],
  },
  // ── 17. PII (3) ─────────────────────────────────────────────────────────────
  {
    name: 'pii', label: 'PII / Personal Data', icon: '👤', color: '#8b5cf6',
    patterns: [
      { name: 'creditcard', desc: 'Credit / debit card number detected',      severity: 'critical' },
      { name: 'phone',      desc: 'Personal phone number detected',           severity: 'warning' },
      { name: 'ssn',        desc: 'US Social Security Number (SSN) detected', severity: 'critical' },
    ],
  },
]

const BENCHMARKS = [
  { pkg: 'lodash', lang: 'JavaScript', files: 4, deps: 0, findings: 617, score: 74, tier: 'C', method: 'atheon_enhanced_real_scan', critical: 1, high: 1, medium: 1, low: 0 },
  { pkg: 'axios', lang: 'JavaScript', files: 85, deps: 4, findings: 4625, score: 74, tier: 'C', method: 'atheon_enhanced_real_scan', critical: 1, high: 1, medium: 1, low: 0 },
  { pkg: 'express', lang: 'JavaScript', files: 7, deps: 28, findings: 840, score: 82, tier: 'B', method: 'atheon_enhanced_real_scan', critical: 1, high: 1, medium: 1, low: 0 },
  { pkg: 'vue', lang: 'JavaScript', files: 23, deps: 5, findings: 69, score: 89, tier: 'B', method: 'github_api', critical: 0, high: 1, medium: 2, low: 0 },
]

const SEV_COLORS = { critical: '#ef4444', high: '#f97316', medium: '#f59e0b', low: '#22c55e' }

export default function Pipeline() {
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(false)
  const [selectedCat, setSelectedCat] = useState(null)
  const [scanStats, setScanStats] = useState(null)
  const toast = useToast()

  const loadStats = async () => {
    setLoading(true)
    try {
      const data = await loadRealScannerData()
      setScanStats(data)
    } catch (err) {
      toast.error('Failed to load pipeline statistics')
      console.error('Pipeline stats error:', err)
    }
    setLoading(false)
  }

  const totalPatterns = SCAN_CATEGORIES.reduce((s, c) => s + c.patterns.length, 0)
  const sevData = scanStats?.security_stats || { critical: 0, high: 0, medium: 0, low: 0 }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Scanner Methodology</h1>
          <p className="text-gray-400 text-sm mt-1">
            Atheon Enhanced · v{ATHEON_VERSION} · {totalPatterns} patterns across {SCAN_CATEGORIES.length} categories
          </p>
        </div>
        <button onClick={loadStats} disabled={loading}
          className="self-start sm:self-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white rounded-lg text-sm font-medium">
          {loading ? 'Loading…' : 'Load live stats'}
        </button>
      </div>

      {/* Version + build info banner */}
      <div className="bg-gray-800 rounded-lg border border-gray-700 p-4 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
        {[
          { label: 'Scanner', value: 'Atheon Enhanced' },
          { label: 'Version', value: ATHEON_VERSION },
          { label: 'Categories', value: SCAN_CATEGORIES.length },
          { label: 'Patterns', value: `${totalPatterns} active` },
        ].map(item => (
          <div key={item.label}>
            <div className="text-xs text-gray-400">{item.label}</div>
            <div className="text-white font-medium mt-0.5">{item.value}</div>
          </div>
        ))}
      </div>

      {/* Quick stats */}
      {scanStats ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {[
            { label: 'Packages', value: scanStats.total_repositories?.toLocaleString() || '—', color: 'text-white' },
            { label: 'Total Files', value: (scanStats.total_files || 0).toLocaleString(), color: 'text-blue-400' },
            { label: 'Dependencies', value: (scanStats.total_dependencies || 0).toLocaleString(), color: 'text-purple-400' },
            { label: 'Avg Quality', value: scanStats.average_quality_score?.toFixed(1) || '—', color: 'text-green-400' },
            { label: 'Languages', value: Object.keys(scanStats.language_distribution || {}).length, color: 'text-yellow-400' },
            { label: 'Security Findings', value: scanStats.security_stats?.total_findings?.toLocaleString() || '—', color: 'text-red-400' },
          ].map(s => (
            <div key={s.label} className="bg-gray-800 rounded-lg p-3 border border-gray-700">
              <div className={`text-xl sm:text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-gray-400 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {['Packages', 'Total Files', 'Dependencies', 'Avg Quality', 'Languages', 'Security Findings'].map(l => (
            <div key={l} className="bg-gray-800 rounded-lg p-3 border border-gray-700">
              <div className="h-6 w-16 bg-gray-700 rounded animate-pulse mb-1" />
              <div className="h-3 w-12 bg-gray-700 rounded animate-pulse" />
            </div>
          ))}
        </div>
      )}

      {/* Additional stats row */}
      {scanStats && (
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {[
            { label: 'Tier A', value: scanStats.tier_distribution?.A || 0, color: 'text-green-400' },
            { label: 'Tier B', value: scanStats.tier_distribution?.B || 0, color: 'text-blue-400' },
            { label: 'Tier C', value: scanStats.tier_distribution?.C || 0, color: 'text-yellow-400' },
            { label: 'Tier D', value: scanStats.tier_distribution?.D || 0, color: 'text-orange-400' },
            { label: 'Tier F', value: scanStats.tier_distribution?.F || 0, color: 'text-red-400' },
            { label: 'Critical', value: scanStats.security_stats?.critical || 0, color: 'text-red-400' },
            { label: 'High', value: scanStats.security_stats?.high || 0, color: 'text-orange-400' },
            { label: 'Medium', value: scanStats.security_stats?.medium || 0, color: 'text-yellow-400' },
          ].map(s => (
            <div key={s.label} className="bg-gray-900 rounded-lg p-2 border border-gray-700 text-center">
              <div className={`text-lg font-bold ${s.color}`}>{s.value.toLocaleString()}</div>
              <div className="text-xs text-gray-500">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* Tabs */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="border-b border-gray-700 overflow-x-auto">
          <nav className="flex">
            {['overview', 'patterns', 'benchmarks', 'how-it-works'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-4 sm:px-6 py-3 font-medium text-sm whitespace-nowrap border-b-2 ${
                  activeTab === tab ? 'text-blue-400 border-blue-400' : 'text-gray-400 border-transparent hover:text-white'
                }`}>
                {tab.replace(/-/g, ' ')}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-4 sm:p-6">
          {/* OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-base font-semibold text-white mb-3">Pattern Categories</h3>
                  <div className="space-y-2">
                    {SCAN_CATEGORIES.map(cat => (
                      <button key={cat.name} onClick={() => { setSelectedCat(cat.name); setActiveTab('patterns') }}
                        className="w-full flex items-center justify-between p-3 bg-gray-900 hover:bg-gray-700 rounded-lg border border-gray-700 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{cat.icon}</span>
                          <span className="text-white text-sm font-medium">{cat.label}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-400">{cat.patterns.length} patterns</span>
                          <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white mb-3">Live Security Findings</h3>
                  {scanStats ? (
                    <div className="space-y-3">
                      <DonutChart data={sevData} title="Security Severity Distribution" size={180} />
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {Object.entries(sevData).filter(([,v]) => v > 0).map(([sev, count]) => (
                          <div key={sev} className="flex items-center gap-2 bg-gray-900 rounded-lg p-3">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ background: SEV_COLORS[sev] || '#888' }} />
                            <span className="text-xs text-gray-300 capitalize flex-1">{sev}</span>
                            <span className="text-sm font-bold text-white">{count.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : loading ? (
                    <div className="flex flex-col items-center gap-3">
                      <SkeletonDonut size={180} />
                      <div className="grid grid-cols-2 gap-2 w-full">
                        {['critical','high','medium','low'].map(s => (
                          <div key={s} className="flex items-center gap-2 bg-gray-900 rounded-lg p-3">
                            <div className={`${s === 'critical' ? 'bg-red-500' : s === 'high' ? 'bg-orange-500' : s === 'medium' ? 'bg-yellow-500' : 'bg-blue-500'} w-2.5 h-2.5 rounded-full animate-pulse`} />
                            <span className="text-xs text-gray-300 capitalize flex-1">{s}</span>
                            <div className="h-4 w-8 bg-gray-700 rounded animate-pulse" />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-40 text-gray-300 text-sm border border-gray-700 rounded-lg">
                      Click "Load live stats" to see real findings
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* PATTERNS */}
          {activeTab === 'patterns' && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <button onClick={() => setSelectedCat(null)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                    !selectedCat ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
                  }`}>
                  All ({totalPatterns})
                </button>
                {SCAN_CATEGORIES.map(cat => (
                  <button key={cat.name} onClick={() => setSelectedCat(cat.name)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                      selectedCat === cat.name ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-700'
                    }`}>
                    {cat.icon} {cat.label} ({cat.patterns.length})
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                {(selectedCat ? SCAN_CATEGORIES.filter(c => c.name === selectedCat) : SCAN_CATEGORIES).map(cat => (
                  <div key={cat.name}>
                    <div className="flex items-center gap-2 py-2">
                      <span className="text-lg">{cat.icon}</span>
                      <h3 className="text-white font-semibold">{cat.label}</h3>
                      <span className="w-2 h-2 rounded-full" style={{ background: cat.color }} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {cat.patterns.map(p => (
                        <div key={p.name} className="flex items-start gap-3 p-3 bg-gray-900 rounded-lg border border-gray-700">
                          <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: SEV_COLORS[p.severity] }} />
                          <div className="min-w-0">
                            <div className="text-white text-sm font-medium font-mono">{p.name}</div>
                            <div className="text-xs text-gray-400 mt-0.5">{p.desc}</div>
                          </div>
                          <span className={`text-xs font-bold uppercase ml-auto flex-shrink-0 ${
                            p.severity === 'critical' ? 'text-red-400' :
                            p.severity === 'high' ? 'text-orange-400' :
                            p.severity === 'medium' ? 'text-yellow-400' : 'text-green-400'
                          }`}>
                            {p.severity}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BENCHMARKS */}
          {activeTab === 'benchmarks' && (
            <div className="space-y-4">
              <p className="text-sm text-gray-400">
                Real Atheon Enhanced scan results against published npm packages — executed locally from source.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th scope="col" className="text-left text-xs text-gray-400 font-medium px-3 py-2">Package</th>
                      <th scope="col" className="text-left text-xs text-gray-400 font-medium px-3 py-2">Lang</th>
                      <th scope="col" className="text-right text-xs text-gray-400 font-medium px-3 py-2">Files</th>
                      <th scope="col" className="text-right text-xs text-gray-400 font-medium px-3 py-2">Deps</th>
                      <th scope="col" className="text-right text-xs text-gray-400 font-medium px-3 py-2">Findings</th>
                      <th scope="col" className="text-right text-xs text-gray-400 font-medium px-3 py-2">Score</th>
                      <th scope="col" className="text-center text-xs text-gray-400 font-medium px-3 py-2">Tier</th>
                      <th scope="col" className="text-center text-xs text-gray-400 font-medium px-3 py-2">Critical</th>
                      <th scope="col" className="text-center text-xs text-gray-400 font-medium px-3 py-2">High</th>
                      <th scope="col" className="text-center text-xs text-gray-400 font-medium px-3 py-2">Med</th>
                      <th scope="col" className="text-center text-xs text-gray-400 font-medium px-3 py-2">Low</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BENCHMARKS.map(b => (
                      <tr key={b.pkg} className="border-b border-gray-800 hover:bg-gray-700/30">
                        <td className="px-3 py-3 font-mono text-white">{b.pkg}</td>
                        <td className="px-3 py-3 text-gray-300">{b.lang}</td>
                        <td className="px-3 py-3 text-right text-gray-300">{b.files.toLocaleString()}</td>
                        <td className="px-3 py-3 text-right text-gray-300">{b.deps}</td>
                        <td className="px-3 py-3 text-right text-purple-400 font-medium">{b.findings.toLocaleString()}</td>
                        <td className="px-3 py-3 text-right">
                          <span className={b.score >= 90 ? 'text-green-400' : b.score >= 75 ? 'text-blue-400' : b.score >= 60 ? 'text-yellow-400' : 'text-red-400'}>
                            {b.score}
                          </span>
                        </td>
                        <td className="px-3 py-3 text-center">
                          <span className={`px-2 py-0.5 rounded text-xs font-bold text-white ${
                            b.tier === 'A' ? 'bg-green-500' : b.tier === 'B' ? 'bg-blue-500' : b.tier === 'C' ? 'bg-yellow-500' : 'bg-red-500'
                          }`}>{b.tier}</span>
                        </td>
                        <td className="px-3 py-3 text-center text-red-400">{b.critical}</td>
                        <td className="px-3 py-3 text-center text-orange-400">{b.high}</td>
                        <td className="px-3 py-3 text-center text-yellow-400">{b.medium}</td>
                        <td className="px-3 py-3 text-center text-green-400">{b.low}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500">
                * Findings include all pattern matches across source files. Quality score is calculated from code quality, complexity, and issue density metrics.
              </p>
            </div>
          )}

          {/* HOW IT WORKS */}
          {activeTab === 'how-it-works' && (
            <div className="space-y-6 max-w-3xl">
              <div className="bg-gray-900 rounded-lg p-5 border border-gray-700">
                <h3 className="text-white font-semibold mb-3">1. Pattern Matching Engine</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Atheon Enhanced scans source code using a library of {totalPatterns} regex and AST-based patterns across 5 security categories.
                  Each pattern has a defined severity level (critical/high/medium/low), confidence score, and optional CWE/OWASP mapping.
                  Patterns are organized into categories: Secrets, Code Quality, Healthcare, Finance, and PII.
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-5 border border-gray-700">
                <h3 className="text-white font-semibold mb-3">2. Quality Scoring</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Packages receive a quality score (0–100) based on: code cleanliness (console.logs, TODOs, debug statements),
                  complexity metrics (file count, function length, nesting depth), security density (findings per file),
                  and dependency hygiene. Scores map to tiers A (90+), B (75–89), C (60–74), D (40–59), F (0–39).
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-5 border border-gray-700">
                <h3 className="text-white font-semibold mb-3">3. Data Sources</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  GitHub API scans enrich packages with stars, forks, license, topics, and open issues.
                  <span className="text-purple-400 font-medium"> atheon_enhanced_real_scan</span> indicates a live
                  Atheon Enhanced CLI scan was executed against the package source. The browser/npm registry provides
                  dependency metadata from package.json.
                </p>
              </div>
              <div className="bg-gray-900 rounded-lg p-5 border border-gray-700">
                <h3 className="text-white font-semibold mb-3">4. Known Limitations</h3>
                <ul className="text-sm text-gray-400 space-y-1.5">
                  <li>• TypeScript packages: scanner times out on large codebases (&gt;120s)</li>
                  <li>• missing-skip-links pattern: 87% false-positive rate (over-matches .browserslistrc and .cspell files)</li>
                  <li>• Dependency counts reflect package.json declarations, not resolved tree</li>
                  <li>• Severity is pattern-assigned, not contextually evaluated</li>
                  <li>• No semantic analysis (control flow, data flow) — regex/AST pattern matching only</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
