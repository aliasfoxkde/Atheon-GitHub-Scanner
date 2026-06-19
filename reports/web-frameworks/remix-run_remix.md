# Repository Analysis Report: remix-run/remix

**Generated:** 2026-06-19 08:57:26 CDT

**Quality Score:** 89/100 (Tier B)

## Executive Summary

- **Overall Quality:** B (89/100)
- **Total Findings:** 521
- **Critical Issues:** 0
- **High Issues:** 37
- **Medium Issues:** 0
- **Low Issues:** 476
- **Files Scanned:** 1997

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 476 | Medium |
| security | 37 | High |
| maintenance | 8 | Medium |

## Repository Overview

- **Owner:** remix-run
- **Name:** remix
- **Description:** Build Better Websites. Create modern, resilient user experiences with web fundamentals.
- **Primary Language:** TypeScript
- **Stars:** 33088
- **Forks:** 2775
- **Open Issues:** 56
- **Size:** 85991 KB
- **Created:** 2020-10-26
- **Last Updated:** 2026-06-19
- **Default Branch:** main

## Security Analysis

⚠️ **Found 37 security-related findings.**

### ⚠️ High Severity Issues (37)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| demos/bookstore/app/actions/auth/controller.test.ts | 14 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 31 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 56 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 71 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 115 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 149 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 169 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 215 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 216 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 242 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 243 | 🟠 HIGH | Hardcoded username/password detected |
| demos/social-auth/app/router.test.ts | 39 | 🟠 HIGH | Hardcoded username/password detected |
| demos/social-auth/app/router.test.ts | 181 | 🟠 HIGH | Hardcoded username/password detected |
| demos/social-auth/app/router.test.ts | 219 | 🟠 HIGH | Hardcoded username/password detected |
| demos/social-auth/app/router.test.ts | 220 | 🟠 HIGH | Hardcoded username/password detected |
| demos/social-auth/app/router.test.ts | 231 | 🟠 HIGH | Hardcoded username/password detected |
| demos/social-auth/app/router.test.ts | 242 | 🟠 HIGH | Hardcoded username/password detected |
| demos/timeboxer/app/controllers/auth/controller.test.ts | 22 | 🟠 HIGH | Hardcoded username/password detected |
| demos/timeboxer/app/controllers/auth/controller.test.ts | 23 | 🟠 HIGH | Hardcoded username/password detected |
| demos/timeboxer/app/controllers/auth/controller.test.ts | 34 | 🟠 HIGH | Hardcoded username/password detected |
| demos/timeboxer/app/controllers/auth/controller.test.ts | 52 | 🟠 HIGH | Hardcoded username/password detected |
| demos/timeboxer/app/controllers/auth/controller.test.ts | 99 | 🟠 HIGH | Hardcoded username/password detected |
| demos/timeboxer/app/controllers/auth/controller.test.ts | 165 | 🟠 HIGH | Hardcoded username/password detected |
| demos/timeboxer/app/controllers/security.test.ts | 22 | 🟠 HIGH | Hardcoded username/password detected |
| demos/timeboxer/app/controllers/security.test.ts | 35 | 🟠 HIGH | Hardcoded username/password detected |
| demos/timeboxer/app/controllers/security.test.ts | 47 | 🟠 HIGH | Hardcoded username/password detected |
| demos/timeboxer/app/controllers/security.test.ts | 60 | 🟠 HIGH | Hardcoded username/password detected |
| demos/timeboxer/app/controllers/security.test.ts | 164 | 🟠 HIGH | Hardcoded username/password detected |
| demos/timeboxer/app/controllers/security.test.ts | 208 | 🟠 HIGH | Hardcoded username/password detected |
| packages/auth/src/lib/providers/x.test.ts | 100 | 🟠 HIGH | Hardcoded username/password detected |
| packages/auth/src/lib/providers/x.test.ts | 147 | 🟠 HIGH | Hardcoded username/password detected |
| packages/auth/src/lib/providers/x.test.ts | 179 | 🟠 HIGH | Hardcoded username/password detected |
| packages/auth/src/lib/providers/x.test.ts | 325 | 🟠 HIGH | Hardcoded username/password detected |
| packages/auth/src/lib/verify-credentials.test.ts | 56 | 🟠 HIGH | Hardcoded username/password detected |
| packages/auth/src/lib/verify-credentials.test.ts | 97 | 🟠 HIGH | Hardcoded username/password detected |
| packages/data-schema/src/lib/form-data.test.ts | 32 | 🟠 HIGH | Hardcoded username/password detected |
| packages/data-schema/src/lib/form-data.test.ts | 84 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 23.7% | Poor ❌ |
| Documentation | 1.8% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (476)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| demos/assets/server.ts | 23 | 🟢 LOW | Debug console.log statement found |
| demos/assets/server.ts | 24 | 🟢 LOW | Debug console.log statement found |
| demos/bookstore/server.ts | 27 | 🟢 LOW | Debug console.log statement found |
| demos/bookstore/server.ts | 28 | 🟢 LOW | Debug console.log statement found |
| demos/bookstore/server.ts | 29 | 🟢 LOW | Debug console.log statement found |
| demos/bookstore/server.ts | 30 | 🟢 LOW | Debug console.log statement found |
| demos/bookstore/server.ts | 31 | 🟢 LOW | Debug console.log statement found |
| demos/bookstore/server.ts | 32 | 🟢 LOW | Debug console.log statement found |
| demos/frame-navigation/server.ts | 22 | 🟢 LOW | Debug console.log statement found |
| demos/frames/server.ts | 22 | 🟢 LOW | Debug console.log statement found |
| demos/social-auth/server.ts | 35 | 🟢 LOW | Debug console.log statement found |
| demos/social-auth/server.ts | 36 | 🟢 LOW | Debug console.log statement found |
| demos/social-auth/server.ts | 37 | 🟢 LOW | Debug console.log statement found |
| demos/social-auth/server.ts | 38 | 🟢 LOW | Debug console.log statement found |
| demos/social-auth/server.ts | 39 | 🟢 LOW | Debug console.log statement found |
| demos/social-auth/server.ts | 40 | 🟢 LOW | Debug console.log statement found |
| demos/social-auth/server.ts | 41 | 🟢 LOW | Debug console.log statement found |
| demos/social-auth/server.ts | 44 | 🟢 LOW | Debug console.log statement found |
| demos/sse/server.ts | 22 | 🟢 LOW | Debug console.log statement found |
| demos/timeboxer/server.ts | 21 | 🟢 LOW | Debug console.log statement found |
| demos/unpkg/server.ts | 22 | 🟢 LOW | Debug console.log statement found |
| docs/src/generate/build-demos.ts | 84 | 🟢 LOW | Debug console.log statement found |
| docs/src/generate/utils.ts | 20 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/bench/src/crawl-concurrency.ts | 62 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/bench/src/crawl-concurrency.ts | 63 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/bench/src/crawl-concurrency.ts | 76 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/bench/src/crawl-throughput.ts | 87 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/bench/src/crawl-throughput.ts | 88 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/bench/src/crawl-throughput.ts | 89 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/bench/src/crawl-throughput.ts | 90 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/bench/src/crawl-throughput.ts | 91 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/bench/src/crawl-throughput.ts | 92 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/bench/src/crawl-throughput.ts | 93 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/bench/src/crawl-throughput.ts | 94 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/bench/src/crawl-throughput.ts | 99 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/bench/src/html-parser.bench.ts | 58 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/crawl.test.ts | 54 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/crawl.test.ts | 444 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/index.ts | 36 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/index.ts | 37 | 🟢 LOW | Debug console.log statement found |
| docs/src/prerender/index.ts | 85 | 🟢 LOW | Debug console.log statement found |
| docs/src/server/index.ts | 23 | 🟢 LOW | Debug console.log statement found |
| packages/assets/bench/runner.ts | 364 | 🟢 LOW | Debug console.log statement found |
| packages/assets/bench/runner.ts | 365 | 🟢 LOW | Debug console.log statement found |
| packages/assets/bench/runner.ts | 366 | 🟢 LOW | Debug console.log statement found |
| packages/assets/bench/runner.ts | 367 | 🟢 LOW | Debug console.log statement found |
| packages/assets/bench/runner.ts | 368 | 🟢 LOW | Debug console.log statement found |
| packages/assets/bench/runner.ts | 369 | 🟢 LOW | Debug console.log statement found |
| packages/assets/bench/runner.ts | 389 | 🟢 LOW | Debug console.log statement found |
| packages/assets/bench/runner.ts | 390 | 🟢 LOW | Debug console.log statement found |
| packages/assets/src/lib/asset-server.test.ts | 2290 | 🟢 LOW | Debug console.log statement found |
| packages/fetch-router/demos/bun/index.ts | 17 | 🟢 LOW | Debug console.log statement found |
| packages/fetch-router/demos/cf-workers/worker-configuration.d.ts | 170 | 🟢 LOW | Debug console.log statement found |
| packages/fetch-router/demos/node/server.ts | 20 | 🟢 LOW | Debug console.log statement found |
| packages/file-storage/src/lib/file-storage.ts | 39 | 🟢 LOW | Debug console.log statement found |
| packages/file-storage/src/lib/file-storage.ts | 52 | 🟢 LOW | Debug console.log statement found |
| packages/file-storage/src/lib/file-storage.ts | 72 | 🟢 LOW | Debug console.log statement found |
| packages/form-data-parser/demos/node/server.js | 106 | 🟢 LOW | Debug console.log statement found |
| packages/mime/scripts/codegen.ts | 124 | 🟢 LOW | Debug console.log statement found |
| packages/mime/scripts/codegen.ts | 131 | 🟢 LOW | Debug console.log statement found |
| packages/multipart-parser/bench/runner.ts | 257 | 🟢 LOW | Debug console.log statement found |
| packages/multipart-parser/bench/runner.ts | 258 | 🟢 LOW | Debug console.log statement found |
| packages/multipart-parser/bench/runner.ts | 259 | 🟢 LOW | Debug console.log statement found |
| packages/multipart-parser/bench/runner.ts | 262 | 🟢 LOW | Debug console.log statement found |
| packages/multipart-parser/bench/runner.ts | 264 | 🟢 LOW | Debug console.log statement found |
| packages/multipart-parser/bench/runner.ts | 266 | 🟢 LOW | Debug console.log statement found |
| packages/multipart-parser/bench/runner.ts | 293 | 🟢 LOW | Debug console.log statement found |
| packages/multipart-parser/demos/bun/server.ts | 70 | 🟢 LOW | Debug console.log statement found |
| packages/multipart-parser/demos/deno/main.ts | 76 | 🟢 LOW | Debug console.log statement found |
| packages/multipart-parser/demos/node/server.js | 76 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/large-body/servers/express.ts | 9 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/large-body/servers/express.ts | 14 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/large-body/servers/express.ts | 17 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/large-body/servers/express.ts | 25 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/large-body/servers/node-fetch-server.ts | 8 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/large-body/servers/node-fetch-server.ts | 11 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/large-body/servers/node-fetch-server.ts | 14 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/large-body/servers/node-http.ts | 7 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/large-body/servers/node-http.ts | 12 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/large-body/servers/node-http.ts | 15 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/large-body/servers/node-http.ts | 23 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/small-body/servers/express.ts | 9 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/small-body/servers/express.ts | 14 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/small-body/servers/express.ts | 17 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/small-body/servers/express.ts | 25 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/small-body/servers/node-fetch-server.ts | 8 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/small-body/servers/node-fetch-server.ts | 11 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/small-body/servers/node-fetch-server.ts | 14 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/small-body/servers/node-http.ts | 7 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/small-body/servers/node-http.ts | 12 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/small-body/servers/node-http.ts | 15 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/small-body/servers/node-http.ts | 23 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/update-readme.ts | 127 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/update-readme.ts | 130 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/bench/update-readme.ts | 140 | 🟢 LOW | Debug console.log statement found |
| packages/node-fetch-server/demos/http2/server.js | 39 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 23 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 51 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 72 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 93 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 113 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 132 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 154 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 215 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 240 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 265 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 284 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 340 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 399 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 453 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 509 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 578 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 638 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 672 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 694 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 715 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 736 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 775 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 811 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 887 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 914 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 917 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 918 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 1045 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 1094 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 1164 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 1214 | 🟢 LOW | Debug console.log statement found |
| packages/node-tsx/src/index.test.ts | 1276 | 🟢 LOW | Debug console.log statement found |
| packages/static-middleware/demos/list-files/server.js | 27 | 🟢 LOW | Debug console.log statement found |
| packages/static-middleware/demos/list-files/server.js | 28 | 🟢 LOW | Debug console.log statement found |
| packages/static-middleware/src/lib/static.test.ts | 401 | 🟢 LOW | Debug console.log statement found |
| packages/static-middleware/src/lib/static.test.ts | 423 | 🟢 LOW | Debug console.log statement found |
| packages/tar-parser/bench/runner.ts | 64 | 🟢 LOW | Debug console.log statement found |
| packages/tar-parser/bench/runner.ts | 65 | 🟢 LOW | Debug console.log statement found |
| packages/tar-parser/bench/runner.ts | 66 | 🟢 LOW | Debug console.log statement found |
| packages/tar-parser/bench/runner.ts | 67 | 🟢 LOW | Debug console.log statement found |
| packages/tar-parser/src/lib/tar.ts | 235 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/app/server.ts | 13 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/cli.ts | 89 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/cli.ts | 143 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/cli.ts | 307 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/cli.ts | 352 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/cli.ts | 412 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/cli.ts | 427 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/cli.ts | 431 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/coverage.ts | 149 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/coverage.ts | 152 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/coverage.ts | 313 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/mock.ts | 72 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 51 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 55 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 57 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 64 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 72 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 77 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 78 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 79 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 80 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 81 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 82 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 83 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 84 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 85 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/dot.ts | 86 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 28 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 35 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 37 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 43 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 57 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 63 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 64 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 68 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 70 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 77 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 85 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 86 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 87 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 88 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 89 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 90 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 91 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 92 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 93 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/files.ts | 94 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 12 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 80 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 103 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 115 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 119 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 123 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 129 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 137 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 144 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 156 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 157 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 161 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 163 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 170 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 178 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 179 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 180 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 181 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 182 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 183 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 184 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 185 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 186 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/spec.ts | 187 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 15 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 33 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 35 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 37 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 39 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 40 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 41 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 48 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 50 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 57 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 58 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 59 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 60 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 61 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 62 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 63 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 64 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/reporters/tap.ts | 65 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/runner-browser.ts | 72 | 🟢 LOW | Debug console.log statement found |
| packages/test/src/lib/worker-e2e-file.ts | 45 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/frameworks/solid/build.js | 19 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/frameworks/solid/build.js | 22 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 72 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 636 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 637 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 638 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 639 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 640 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 643 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 647 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 653 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 654 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 655 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 656 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 659 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 663 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 667 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 775 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 812 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 816 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 886 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 888 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 889 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 908 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 911 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 943 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 947 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 948 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 949 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 950 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 965 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 1000 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/runner.ts | 1002 | 🟢 LOW | Debug console.log statement found |
| packages/ui/bench/server.ts | 87 | 🟢 LOW | Debug console.log statement found |
| packages/ui/demo/scripts/build-browser.ts | 37 | 🟢 LOW | Debug console.log statement found |
| packages/ui/demo/scripts/build-browser.ts | 47 | 🟢 LOW | Debug console.log statement found |
| packages/ui/demo/scripts/prerender.ts | 45 | 🟢 LOW | Debug console.log statement found |
| packages/ui/demo/scripts/prerender.ts | 77 | 🟢 LOW | Debug console.log statement found |
| packages/ui/demo/server.ts | 20 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 25 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 29 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 30 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 31 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 34 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 38 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 40 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 43 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 44 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 47 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 48 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 49 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 52 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 53 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 54 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 55 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 57 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 58 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 59 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-preview.ts | 60 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-validate.ts | 28 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-validate.ts | 41 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-validate.ts | 50 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 31 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 57 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 66 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 82 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 91 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 105 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 109 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 110 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 111 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 112 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 113 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 117 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 132 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 137 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 138 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 139 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 140 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 141 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 142 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 143 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 145 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 146 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 147 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 148 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 149 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 152 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 154 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 158 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 160 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 164 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 165 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 166 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 167 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 168 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 169 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 170 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 171 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 172 | 🟢 LOW | Debug console.log statement found |
| scripts/changes-version.ts | 173 | 🟢 LOW | Debug console.log statement found |
| scripts/detect-changed-packages.ts | 24 | 🟢 LOW | Debug console.log statement found |
| scripts/detect-changed-packages.ts | 29 | 🟢 LOW | Debug console.log statement found |
| scripts/detect-changed-packages.ts | 35 | 🟢 LOW | Debug console.log statement found |
| scripts/detect-changed-packages.ts | 39 | 🟢 LOW | Debug console.log statement found |
| scripts/detect-changed-packages.ts | 41 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 103 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 138 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 194 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 236 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 298 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 716 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 717 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 722 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 738 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 739 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 745 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 752 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 753 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 756 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 762 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 763 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 768 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 775 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 776 | 🟢 LOW | Debug console.log statement found |
| scripts/generate-remix.ts | 777 | 🟢 LOW | Debug console.log statement found |
| scripts/postinstall.ts | 23 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-preview.ts | 79 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-preview.ts | 82 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-preview.ts | 89 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-preview.ts | 95 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-preview.ts | 102 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 301 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 306 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 392 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 393 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 394 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 406 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 407 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 408 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 409 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 410 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 412 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 414 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 415 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 416 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 433 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 446 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 448 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 450 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 451 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 457 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 483 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 485 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 487 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 500 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 501 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 502 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 513 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 518 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 519 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 523 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 527 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 529 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 534 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 535 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 536 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 537 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 538 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 540 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 542 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 543 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 544 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 545 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 548 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 555 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 557 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 560 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 570 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 576 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 580 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 586 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 591 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 599 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 604 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 610 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 619 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 630 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 634 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 640 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 642 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 644 | 🟢 LOW | Debug console.log statement found |
| scripts/publish.ts | 659 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 23 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 26 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 40 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 46 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 51 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 58 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 60 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 62 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 69 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 70 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 71 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 72 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 73 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 74 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 75 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 76 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 77 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 88 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 93 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 100 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 103 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 107 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 111 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 113 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 115 | 🟢 LOW | Debug console.log statement found |
| scripts/release-pr.ts | 117 | 🟢 LOW | Debug console.log statement found |
| scripts/run-changed-workspaces.ts | 22 | 🟢 LOW | Debug console.log statement found |
| scripts/run-changed-workspaces.ts | 29 | 🟢 LOW | Debug console.log statement found |
| scripts/run-changed-workspaces.ts | 31 | 🟢 LOW | Debug console.log statement found |
| scripts/run-changed-workspaces.ts | 33 | 🟢 LOW | Debug console.log statement found |
| scripts/run-changed-workspaces.ts | 47 | 🟢 LOW | Debug console.log statement found |
| scripts/run-changed-workspaces.ts | 53 | 🟢 LOW | Debug console.log statement found |
| scripts/run-changed-workspaces.ts | 57 | 🟢 LOW | Debug console.log statement found |
| scripts/run-changed-workspaces.ts | 59 | 🟢 LOW | Debug console.log statement found |
| scripts/setup-installable-branch.ts | 49 | 🟢 LOW | Debug console.log statement found |
| scripts/setup-installable-branch.ts | 64 | 🟢 LOW | Debug console.log statement found |
| scripts/setup-installable-branch.ts | 85 | 🟢 LOW | Debug console.log statement found |
| scripts/setup-installable-branch.ts | 102 | 🟢 LOW | Debug console.log statement found |
| scripts/setup-installable-branch.ts | 108 | 🟢 LOW | Debug console.log statement found |
| scripts/setup-installable-branch.ts | 142 | 🟢 LOW | Debug console.log statement found |
| scripts/setup-installable-branch.ts | 145 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-remix-readmes.ts | 7 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-remix-readmes.ts | 10 | 🟢 LOW | Debug console.log statement found |
| scripts/utils/github.ts | 197 | 🟢 LOW | Debug console.log statement found |
| scripts/utils/github.ts | 198 | 🟢 LOW | Debug console.log statement found |
| scripts/utils/github.ts | 199 | 🟢 LOW | Debug console.log statement found |
| scripts/utils/github.ts | 200 | 🟢 LOW | Debug console.log statement found |
| scripts/utils/github.ts | 201 | 🟢 LOW | Debug console.log statement found |
| scripts/utils/github.ts | 203 | 🟢 LOW | Debug console.log statement found |
| scripts/utils/github.ts | 205 | 🟢 LOW | Debug console.log statement found |
| scripts/utils/process.ts | 19 | 🟢 LOW | Debug console.log statement found |
| scripts/validate-package-meta.ts | 71 | 🟢 LOW | Debug console.log statement found |
| scripts/validate-package-meta.ts | 85 | 🟢 LOW | Debug console.log statement found |
| scripts/validate-remix-package-readmes.ts | 46 | 🟢 LOW | Debug console.log statement found |
| template/server.ts | 22 | 🟢 LOW | Debug console.log statement found |

### Maintenance Items (8)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| docs/src/generate/documented-api.ts | 347 | ⚪ INFO | TODO comment found |
| docs/src/generate/documented-api.ts | 709 | ⚪ INFO | TODO comment found |
| packages/cli/src/lib/commands/doctor.test.ts | 582 | ⚪ INFO | TODO comment found |
| packages/test/src/lib/reporters/files.ts | 56 | ⚪ INFO | TODO comment found |
| packages/test/src/test/reporters.test.ts | 13 | ⚪ INFO | TODO comment found |
| packages/test/src/test/reporters.test.ts | 20 | ⚪ INFO | TODO comment found |
| packages/ui/src/server/stream.ts | 863 | ⚪ INFO | TODO comment found |
| packages/ui/src/style/stylesheet.ts | 205 | ⚪ INFO | TODO comment found |

## Detailed Findings

### MAINTENANCE

**Total:** 8 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| docs/src/generate/documented-api.ts | 347 | ⚪ INFO | TODO comment found |
| docs/src/generate/documented-api.ts | 709 | ⚪ INFO | TODO comment found |
| packages/cli/src/lib/commands/doctor.test.ts | 582 | ⚪ INFO | TODO comment found |
| packages/test/src/lib/reporters/files.ts | 56 | ⚪ INFO | TODO comment found |
| packages/test/src/test/reporters.test.ts | 13 | ⚪ INFO | TODO comment found |
| packages/test/src/test/reporters.test.ts | 20 | ⚪ INFO | TODO comment found |
| packages/ui/src/server/stream.ts | 863 | ⚪ INFO | TODO comment found |
| packages/ui/src/style/stylesheet.ts | 205 | ⚪ INFO | TODO comment found |

### CODE_QUALITY

**Total:** 476 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| demos/assets/server.ts | 23 | 🟢 LOW | Debug console.log statement found |
| demos/assets/server.ts | 24 | 🟢 LOW | Debug console.log statement found |
| demos/bookstore/server.ts | 27 | 🟢 LOW | Debug console.log statement found |
| demos/bookstore/server.ts | 28 | 🟢 LOW | Debug console.log statement found |
| demos/bookstore/server.ts | 29 | 🟢 LOW | Debug console.log statement found |
| demos/bookstore/server.ts | 30 | 🟢 LOW | Debug console.log statement found |
| demos/bookstore/server.ts | 31 | 🟢 LOW | Debug console.log statement found |
| demos/bookstore/server.ts | 32 | 🟢 LOW | Debug console.log statement found |
| demos/frame-navigation/server.ts | 22 | 🟢 LOW | Debug console.log statement found |
| demos/frames/server.ts | 22 | 🟢 LOW | Debug console.log statement found |

*... and 466 more*

### SECURITY

**Total:** 37 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| demos/bookstore/app/actions/auth/controller.test.ts | 14 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 31 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 56 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 71 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 115 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 149 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 169 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 215 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 216 | 🟠 HIGH | Hardcoded username/password detected |
| demos/bookstore/app/actions/auth/controller.test.ts | 242 | 🟠 HIGH | Hardcoded username/password detected |

*... and 27 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 89/100 (Tier B)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -555 | Fair ⚠️ |
| Code Quality | -476 | Good ✅ |
| Test Coverage | +2 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 37 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 23.7%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

