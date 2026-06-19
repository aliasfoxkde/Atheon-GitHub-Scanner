# Repository Analysis Report: vercel/next.js

**Generated:** 2026-06-19 08:58:07 CDT

**Quality Score:** 68/100 (Tier C)

## Executive Summary

- **Overall Quality:** C (68/100)
- **Total Findings:** 1849
- **Critical Issues:** 0
- **High Issues:** 8
- **Medium Issues:** 37
- **Low Issues:** 1339
- **Files Scanned:** 29383

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 1339 | Medium |
| maintenance | 500 | Medium |
| security | 10 | High |

## Repository Overview

- **Owner:** vercel
- **Name:** next.js
- **Description:** The React Framework
- **Primary Language:** JavaScript
- **Stars:** 140117
- **Forks:** 31233
- **Open Issues:** 4101
- **Size:** 2492763 KB
- **Created:** 2016-10-05
- **Last Updated:** 2026-06-19
- **Default Branch:** canary

**Topics:** blog, browser, compiler, components, hybrid, nextjs, node, react, server-rendering, ssg, static, static-site-generator, universal, vercel

## Security Analysis

⚠️ **Found 10 security-related findings.**

### ⚠️ High Severity Issues (8)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| examples/api-routes-apollo-server/pages/api/graphql.ts | 18 | 🟠 HIGH | Hardcoded username/password detected |
| examples/api-routes-apollo-server/pages/api/graphql.ts | 19 | 🟠 HIGH | Hardcoded username/password detected |
| examples/with-firebase/pages/index.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| examples/with-i18n-rosetta/pages/[lng]/index.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| examples/with-i18n-rosetta/pages/dashboard.js | 25 | 🟠 HIGH | Hardcoded username/password detected |
| packages/next-routing/src/__tests__/conditions.test.ts | 691 | 🟠 HIGH | Hardcoded username/password detected |
| packages/next-routing/src/__tests__/dynamic-after-rewrites.test.ts | 143 | 🟠 HIGH | Hardcoded username/password detected |
| packages/next-routing/src/__tests__/normalize-next-data.test.ts | 337 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 14.0% | Poor ❌ |
| Documentation | 0.3% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (1339)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/actions/next-integration-stat/src/index.ts | 24 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 37 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 48 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 86 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 96 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 107 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 119 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 140 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 154 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 169 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 179 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 187 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 202 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 217 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 305 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 323 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 367 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 432 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 433 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 458 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 470 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 562 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 625 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-stats-action/src/add-comment.js | 1159 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-stats-action/src/index.js | 34 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-stats-action/src/index.js | 43 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-stats-action/src/run/index.js | 140 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-stats-action/src/run/index.js | 157 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-stats-action/src/util/logger.js | 2 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-stats-action/test-local.js | 111 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-stats-action/test-local.js | 116 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 151 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 152 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 154 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 155 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 157 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 158 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 163 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 170 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 177 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 180 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 203 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 217 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 223 | 🟢 LOW | Debug console.log statement found |
| .github/actions/upload-turboyet-data/src/main.js | 230 | 🟢 LOW | Debug console.log statement found |
| .github/actions/validate-docs-links/src/index.ts | 64 | 🟢 LOW | Debug console.log statement found |
| .github/actions/validate-docs-links/src/index.ts | 386 | 🟢 LOW | Debug console.log statement found |
| .github/actions/validate-docs-links/src/index.ts | 474 | 🟢 LOW | Debug console.log statement found |
| bench/heavy-npm-deps/components/lodash.js | 4 | 🟢 LOW | Debug console.log statement found |
| bench/heavy-npm-deps/components/mantine.js | 4 | 🟢 LOW | Debug console.log statement found |
| bench/heavy-npm-deps/components/mermaid.js | 4 | 🟢 LOW | Debug console.log statement found |
| bench/heavy-npm-deps/components/mermaid.js | 5 | 🟢 LOW | Debug console.log statement found |
| bench/module-cost/components/client.js | 15 | 🟢 LOW | Debug console.log statement found |
| bench/next-minimal-server/bin/minimal-server.js | 37 | 🟢 LOW | Debug console.log statement found |
| bench/recursive-copy/run.js | 44 | 🟢 LOW | Debug console.log statement found |
| bench/recursive-copy/run.js | 50 | 🟢 LOW | Debug console.log statement found |
| bench/recursive-copy/run.js | 53 | 🟢 LOW | Debug console.log statement found |
| bench/recursive-delete/nodejs-rm.js | 24 | 🟢 LOW | Debug console.log statement found |
| bench/recursive-delete/recursive-delete.js | 12 | 🟢 LOW | Debug console.log statement found |
| bench/recursive-delete/rimraf.js | 18 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 48 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 282 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 283 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 285 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 289 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 292 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 294 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 300 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 302 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 309 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 311 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 322 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 323 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 329 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 337 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 338 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 341 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/analyze-profiles.ts | 349 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 122 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 363 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 366 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 371 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 377 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 380 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 458 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 469 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 487 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 498 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 517 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 558 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 608 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 628 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 678 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 727 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 747 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 785 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 786 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 790 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 793 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 794 | 🟢 LOW | Debug console.log statement found |
| bench/render-pipeline/benchmark.ts | 825 | 🟢 LOW | Debug console.log statement found |
| bench/vercel/bench.js | 30 | 🟢 LOW | Debug console.log statement found |
| bench/vercel/bench.js | 34 | 🟢 LOW | Debug console.log statement found |
| bench/vercel/bench.js | 38 | 🟢 LOW | Debug console.log statement found |
| bench/vercel/bench.js | 54 | 🟢 LOW | Debug console.log statement found |
| bench/vercel/bench.js | 55 | 🟢 LOW | Debug console.log statement found |
| bench/vercel/bench.js | 56 | 🟢 LOW | Debug console.log statement found |
| bench/vercel/bench.js | 62 | 🟢 LOW | Debug console.log statement found |
| bench/vercel/bench.js | 70 | 🟢 LOW | Debug console.log statement found |
| bench/vercel/bench.js | 79 | 🟢 LOW | Debug console.log statement found |
| bench/vercel/chart.js | 60 | 🟢 LOW | Debug console.log statement found |
| bench/vercel/chart.js | 98 | 🟢 LOW | Debug console.log statement found |
| bench/vercel/project-utils.js | 180 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/19/input.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/19/output.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/22/input.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/22/input.js | 12 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/22/input.js | 19 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/22/input.js | 25 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/22/input.js | 33 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/22/input.js | 47 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/22/output.js | 5 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/22/output.js | 10 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/22/output.js | 16 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/22/output.js | 21 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/22/output.js | 27 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/22/output.js | 38 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/23/input.js | 8 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/23/input.js | 15 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/23/input.js | 27 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/23/output.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/23/output.js | 11 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/23/output.js | 22 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/24/input.js | 8 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/24/input.js | 14 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/24/input.js | 21 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/24/input.js | 27 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/24/input.js | 35 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/24/output.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/24/output.js | 11 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/24/output.js | 17 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/24/output.js | 22 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/24/output.js | 28 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/25/input.js | 10 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/25/output.js | 8 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/26/input.js | 19 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/errors/server-actions/server-graph/26/output.js | 16 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/1/input.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/1/input.js | 5 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/1/output.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/1/output.js | 5 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/not-processed/input.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/not-processed/input.js | 5 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/not-processed/input.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/not-processed/output.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/not-processed/output.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/not-processed/output.js | 5 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/not-processed-2/input.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/not-processed-2/output.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/not-processed-3/input.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/not-processed-3/output.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/not-processed-4/input.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/cjs-optimize/not-processed-4/output.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/edge-assert/guarded-nodejs/input.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/edge-assert/guarded-nodejs/output.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/edge-assert/guarded-process/input.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/edge-assert/guarded-process/output.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/edge-assert/mixed-process-api/input.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/edge-assert/mixed-process-api/input.js | 7 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/edge-assert/mixed-process-api/output.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/edge-assert/mixed-process-api/output.js | 5 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/edge-assert/process-api/input.js | 1 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/edge-assert/process-api/output.js | 1 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/edge-assert/process-env/input.js | 1 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/edge-assert/process-env/output.js | 1 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/next-font-loaders/font-options/input.js | 11 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/next-font-loaders/font-options/output.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/optimize_server_react/1/input.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/optimize_server_react/1/input.js | 23 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/optimize_server_react/1/output.js | 5 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/optimize_server_react/1/output.js | 28 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/optimize_server_react/4/input.js | 7 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/optimize_server_react/4/input.js | 20 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/optimize_server_react/4/output.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/optimize_server_react/4/output.js | 20 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/optimize_server_react/7/input.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/optimize_server_react/7/input.js | 23 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/optimize_server_react/7/output.js | 5 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/optimize_server_react/7/output.js | 28 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/pure/no-name-clash/input.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/pure/no-name-clash/output.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/pure/simple/input.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/pure/simple/output.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/client-graph/1/input.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/client-graph/2/input.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/client-graph/2/input.js | 9 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/client-graph/5/input.js | 10 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/client-graph/5/input.js | 11 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/client-graph/5/input.js | 15 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/client-graph/5/input.js | 23 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/client-graph/turbopack/1/input.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/client-graph/turbopack/1/input.js | 8 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/1/input.js | 20 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/1/input.js | 21 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/1/output.js | 17 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/1/output.js | 18 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/15/input.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/15/output.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/2/input.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/2/output.js | 5 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/23/input.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/23/input.js | 10 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/23/output.js | 5 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/23/output.js | 10 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/24/input.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/24/output.js | 5 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/26/input.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/26/output.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/27/input.js | 7 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/27/input.js | 14 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/27/input.js | 19 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/27/input.js | 24 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/27/input.js | 29 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/27/output.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/27/output.js | 12 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/27/output.js | 17 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/27/output.js | 22 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/27/output.js | 27 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/28/input.js | 8 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/28/input.js | 9 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/28/input.js | 15 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/28/input.js | 23 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/28/output.js | 8 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/28/output.js | 14 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/28/output.js | 21 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/28/output.js | 24 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/3/input.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/3/output.js | 4 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/30/input.js | 10 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/30/input.js | 11 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/30/input.js | 17 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/30/input.js | 25 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/30/output.js | 8 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/30/output.js | 14 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/30/output.js | 21 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/30/output.js | 24 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/31/input.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/31/input.js | 14 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/31/output.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/31/output.js | 14 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/32/input.js | 9 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/32/input.js | 10 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/32/output.js | 5 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/32/output.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/39/input.js | 8 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/39/output.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/41/input.js | 8 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/41/output.js | 7 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/42/input.js | 8 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/42/output.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/43/input.js | 15 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/43/output.js | 9 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/45/input.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/45/output.js | 7 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/54/input.js | 11 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/54/output.js | 17 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/57/input.js | 10 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/57/output.js | 15 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/58/input.js | 19 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/58/output.js | 23 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/6/input.js | 52 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/6/output.js | 24 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/61/input.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/61/input.js | 19 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/61/output.js | 5 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/61/output.js | 15 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/65/input.js | 13 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/65/output.js | 9 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/8/input.js | 7 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/8/output.js | 6 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/shake-exports/keep-default/input.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/shake-exports/keep-default/input.js | 8 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/shake-exports/keep-default/output.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/shake-exports/most-usecases/input.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/shake-exports/most-usecases/input.js | 8 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/shake-exports/most-usecases/input.js | 19 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/shake-exports/most-usecases/input.js | 36 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/shake-exports/most-usecases/output.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/source-maps/client-graph/development/server-actions/1/input.js | 9 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/source-maps/client-graph/development/server-actions/1/input.js | 27 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/source-maps/client-graph/development/server-actions/1/input.js | 36 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/source-maps/client-graph/production/server-actions/1/input.js | 9 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/source-maps/client-graph/production/server-actions/1/input.js | 27 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/source-maps/client-graph/production/server-actions/1/input.js | 36 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/source-maps/turbopack/client-graph/development/server-actions/1/input.js | 9 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/source-maps/turbopack/client-graph/development/server-actions/1/input.js | 27 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/source-maps/turbopack/client-graph/development/server-actions/1/input.js | 36 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/source-maps/turbopack/client-graph/production/server-actions/1/input.js | 9 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/source-maps/turbopack/client-graph/production/server-actions/1/input.js | 27 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/source-maps/turbopack/client-graph/production/server-actions/1/input.js | 36 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/ssg/getStaticProps/issue-30091/input.js | 10 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/strip-page-exports/getStaticProps/issue-30091/input.js | 10 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/fixture/strip-page-exports/getStaticProps/issue-30091/output-data.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/loader/auto-cjs/1/input.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/loader/auto-cjs/1/output.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/loader/auto-cjs/3/input.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/loader/auto-cjs/3/output.js | 2 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/loader/issue-30766/input.js | 3 | 🟢 LOW | Debug console.log statement found |
| crates/next-custom-transforms/tests/loader/issue-30766/output.js | 8 | 🟢 LOW | Debug console.log statement found |
| examples/blog-with-comment/hooks/useComment.ts | 41 | 🟢 LOW | Debug console.log statement found |
| examples/blog-with-comment/hooks/useComment.ts | 59 | 🟢 LOW | Debug console.log statement found |
| examples/cms-agilitycms/lib/api.ts | 81 | 🟢 LOW | Debug console.log statement found |
| examples/cms-agilitycms/lib/api.ts | 112 | 🟢 LOW | Debug console.log statement found |
| examples/cms-agilitycms/lib/api.ts | 168 | 🟢 LOW | Debug console.log statement found |
| examples/cms-agilitycms/lib/preview.ts | 52 | 🟢 LOW | Debug console.log statement found |
| examples/cms-buttercms/components/landing-page-sections/missing-section.js | 2 | 🟢 LOW | Debug console.log statement found |
| examples/cms-buttercms/lib/api.js | 13 | 🟢 LOW | Debug console.log statement found |
| examples/cms-buttercms/pages/blog.js | 57 | 🟢 LOW | Debug console.log statement found |
| examples/cms-contentful/lib/setup.js | 21 | 🟢 LOW | Debug console.log statement found |
| examples/cms-graphcms/lib/graphcms.js | 20 | 🟢 LOW | Debug console.log statement found |
| examples/cms-payload/utilities/timestamp.ts | 5 | 🟢 LOW | Debug console.log statement found |
| examples/cms-sitecore-xmcloud/scripts/fetch-graphql-introspection-data.ts | 21 | 🟢 LOW | Debug console.log statement found |
| examples/cms-sitecore-xmcloud/scripts/fetch-graphql-introspection-data.ts | 41 | 🟢 LOW | Debug console.log statement found |
| examples/cms-sitecore-xmcloud/scripts/generate-component-factory.ts | 78 | 🟢 LOW | Debug console.log statement found |
| examples/cms-sitecore-xmcloud/scripts/generate-component-factory.ts | 90 | 🟢 LOW | Debug console.log statement found |
| examples/cms-sitecore-xmcloud/scripts/generate-config.ts | 41 | 🟢 LOW | Debug console.log statement found |
| examples/cms-sitecore-xmcloud/scripts/generate-plugins.ts | 122 | 🟢 LOW | Debug console.log statement found |
| examples/cms-sitecore-xmcloud/scripts/scaffold-component.ts | 69 | 🟢 LOW | Debug console.log statement found |
| examples/cms-sitecore-xmcloud/scripts/scaffold-component.ts | 75 | 🟢 LOW | Debug console.log statement found |
| examples/cms-sitecore-xmcloud/scripts/scaffold-component.ts | 85 | 🟢 LOW | Debug console.log statement found |
| examples/cms-sitecore-xmcloud/scripts/scaffold-component.ts | 92 | 🟢 LOW | Debug console.log statement found |
| examples/cms-wordpress/add-ts-nocheck.js | 17 | 🟢 LOW | Debug console.log statement found |
| examples/cms-wordpress/src/app/api/revalidate/route.ts | 20 | 🟢 LOW | Debug console.log statement found |
| examples/cms-wordpress/src/app/api/revalidate/route.ts | 26 | 🟢 LOW | Debug console.log statement found |
| examples/custom-server/server.ts | 16 | 🟢 LOW | Debug console.log statement found |
| examples/prisma-postgres/prisma/seed.ts | 142 | 🟢 LOW | Debug console.log statement found |
| examples/with-azure-cosmos/lib/cosmosdb.ts | 54 | 🟢 LOW | Debug console.log statement found |
| examples/with-cookies-next/pages/api/get-api-cookie.ts | 12 | 🟢 LOW | Debug console.log statement found |
| examples/with-cookies-next/pages/api/get-api-cookie.ts | 13 | 🟢 LOW | Debug console.log statement found |
| examples/with-edgedb/seed.ts | 33 | 🟢 LOW | Debug console.log statement found |
| examples/with-edgedb/seed.ts | 43 | 🟢 LOW | Debug console.log statement found |
| examples/with-edgedb/seed.ts | 45 | 🟢 LOW | Debug console.log statement found |
| examples/with-electron-typescript/electron-src/index.ts | 40 | 🟢 LOW | Debug console.log statement found |
| examples/with-firebase/pages/index.js | 16 | 🟢 LOW | Debug console.log statement found |
| examples/with-firebase-cloud-messaging/utils/webPush.js | 28 | 🟢 LOW | Debug console.log statement found |
| examples/with-http2/server.js | 29 | 🟢 LOW | Debug console.log statement found |
| examples/with-mongodb/app/actions.ts | 11 | 🟢 LOW | Debug console.log statement found |
| examples/with-mysql/prisma/seed.ts | 14 | 🟢 LOW | Debug console.log statement found |
| examples/with-mysql/prisma/seed.ts | 17 | 🟢 LOW | Debug console.log statement found |
| examples/with-mysql/prisma/seed.ts | 20 | 🟢 LOW | Debug console.log statement found |
| examples/with-mysql/prisma/seed.ts | 23 | 🟢 LOW | Debug console.log statement found |
| examples/with-mysql/prisma/seed.ts | 26 | 🟢 LOW | Debug console.log statement found |
| examples/with-mysql/prisma/seed.ts | 31 | 🟢 LOW | Debug console.log statement found |
| examples/with-mysql/prisma/seed.ts | 36 | 🟢 LOW | Debug console.log statement found |
| examples/with-mysql/prisma/seed.ts | 38 | 🟢 LOW | Debug console.log statement found |
| examples/with-nhost-auth-realtime-graphql/pages/index.js | 83 | 🟢 LOW | Debug console.log statement found |
| examples/with-react-ga4/utils/analytics.js | 4 | 🟢 LOW | Debug console.log statement found |
| examples/with-react-ga4/utils/analytics.js | 9 | 🟢 LOW | Debug console.log statement found |
| examples/with-rematch/shared/models/github.js | 31 | 🟢 LOW | Debug console.log statement found |
| examples/with-service-worker/public/sw.js | 2 | 🟢 LOW | Debug console.log statement found |
| examples/with-slate/app/api/editor-state/route.ts | 3 | 🟢 LOW | Debug console.log statement found |
| examples/with-stripe-typescript/app/api/webhooks/route.ts | 19 | 🟢 LOW | Debug console.log statement found |
| examples/with-stripe-typescript/app/api/webhooks/route.ts | 20 | 🟢 LOW | Debug console.log statement found |
| examples/with-stripe-typescript/app/api/webhooks/route.ts | 28 | 🟢 LOW | Debug console.log statement found |
| examples/with-stripe-typescript/app/api/webhooks/route.ts | 43 | 🟢 LOW | Debug console.log statement found |
| examples/with-stripe-typescript/app/api/webhooks/route.ts | 47 | 🟢 LOW | Debug console.log statement found |
| examples/with-stripe-typescript/app/api/webhooks/route.ts | 51 | 🟢 LOW | Debug console.log statement found |
| examples/with-stripe-typescript/app/api/webhooks/route.ts | 57 | 🟢 LOW | Debug console.log statement found |
| examples/with-temporal/temporal/src/activities.ts | 16 | 🟢 LOW | Debug console.log statement found |
| examples/with-temporal/temporal/src/activities.ts | 38 | 🟢 LOW | Debug console.log statement found |
| examples/with-temporal/temporal/src/activities.ts | 52 | 🟢 LOW | Debug console.log statement found |
| examples/with-userbase/components/todo-form/index.js | 42 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 157 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 158 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 172 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 177 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 182 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 187 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 224 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 225 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 228 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 230 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 232 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 266 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 267 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 269 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 270 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 280 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 283 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 284 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 285 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 286 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 287 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 288 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 289 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 290 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 291 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 292 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 293 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 294 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 295 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 296 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 297 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/create-app.ts | 299 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/helpers/install.ts | 19 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/helpers/is-folder-empty.ts | 42 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/helpers/is-folder-empty.ts | 45 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/helpers/is-folder-empty.ts | 50 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/helpers/is-folder-empty.ts | 52 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/helpers/is-folder-empty.ts | 55 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/helpers/is-folder-empty.ts | 58 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/helpers/is-folder-empty.ts | 59 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/helpers/is-folder-empty.ts | 62 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/index.ts | 153 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/index.ts | 184 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/index.ts | 699 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/index.ts | 795 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/index.ts | 810 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/index.ts | 811 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/index.ts | 813 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/index.ts | 815 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/index.ts | 820 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/templates/index.ts | 64 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/templates/index.ts | 69 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/templates/index.ts | 411 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/templates/index.ts | 413 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/templates/index.ts | 416 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/templates/index.ts | 418 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/templates/index.ts | 421 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/templates/index.ts | 425 | 🟢 LOW | Debug console.log statement found |
| packages/create-next-app/templates/index.ts | 427 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/bundles/webpack/packages/lazy-compilation-node.js | 30 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/bundles/webpack/packages/lazy-compilation-web.js | 66 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/static-routes-info.ts | 1088 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/static-routes-info.ts | 1089 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/static-routes-info.ts | 1100 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/static-routes-info.ts | 1101 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/static-routes-info.ts | 1109 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/static-routes-info.ts | 1110 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/static-routes-info.ts | 1114 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/turbo-trace-server.ts | 143 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/turbo-trace-server.ts | 290 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/turbo-trace-server.ts | 293 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/upload-trace.ts | 112 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/upload-trace.ts | 113 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/upload-trace.ts | 198 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/upload-trace.ts | 207 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/internal/upload-trace.ts | 209 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-info.ts | 147 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-info.ts | 263 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-info.ts | 539 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-info.ts | 568 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-info.ts | 570 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-info.ts | 579 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-info.ts | 581 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-info.ts | 583 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-info.ts | 586 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-info.ts | 590 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-post-build.ts | 28 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-post-build.ts | 36 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-post-build.ts | 45 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-telemetry.ts | 19 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-telemetry.ts | 24 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-telemetry.ts | 28 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-telemetry.ts | 33 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-telemetry.ts | 36 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-telemetry.ts | 41 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-telemetry.ts | 45 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-telemetry.ts | 50 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-typegen.ts | 60 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/cli/next-typegen.ts | 121 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/client/components/router-reducer/set-cache-busting-search-param.ts | 86 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/client/dev/hot-reloader/app/web-socket.ts | 60 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/client/dev/hot-reloader/pages/hot-reloader-pages.ts | 289 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/client/dev/hot-reloader/pages/websocket.ts | 37 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/client/dev/hot-reloader/turbopack-hot-reloader-common.ts | 43 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/client/dev/report-hmr-latency.ts | 26 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/client/page-bootstrap.ts | 51 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/client/page-bootstrap.ts | 87 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/client/page-loader.ts | 81 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/client/page-loader.ts | 145 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@modelcontextprotocol/sdk/server/mcp.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@mswjs/interceptors/ClientRequest/index.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/nft/index.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7366 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7372 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7391 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7398 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7410 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7411 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7428 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7442 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7471 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7517 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7519 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7529 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7531 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7588 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7594 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7600 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7611 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7631 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7649 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7658 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7666 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7675 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7683 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7701 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7720 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7726 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7732 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7738 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7758 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7778 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7798 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7818 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7823 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7829 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7836 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7842 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7849 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7856 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7863 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7869 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7875 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7884 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7892 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7901 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7909 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7922 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7931 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7938 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7946 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7960 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7973 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 7990 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8023 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8042 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8060 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8091 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8117 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8142 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8162 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8175 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8188 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8219 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8232 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8252 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8261 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8271 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8279 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8288 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8300 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8306 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8312 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8321 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8330 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8339 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8348 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8357 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8366 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8374 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8382 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8389 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8394 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8400 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8408 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8417 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8425 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8439 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8453 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8463 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8471 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8480 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8489 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8498 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8507 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8515 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8523 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8531 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8539 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8547 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8556 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8567 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8582 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8590 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8634 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8677 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8683 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8689 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8696 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8706 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8724 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8740 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8751 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8760 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8767 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8774 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8792 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8804 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 8847 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 11504 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.edge.js | 11661 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7366 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7372 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7391 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7398 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7410 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7411 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7428 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7442 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7471 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7517 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7519 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7529 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7531 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7588 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7594 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7600 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7611 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7631 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7649 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7658 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7666 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7675 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7683 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7701 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7720 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7726 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7732 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7738 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7758 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7778 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7798 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7818 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7823 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7829 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7836 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7842 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7849 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7856 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7863 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7869 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7875 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7884 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7892 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7901 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7909 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7922 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7931 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7938 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7946 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7960 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7973 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 7990 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8023 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8042 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8060 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8091 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8117 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8142 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8162 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8175 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8188 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8219 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8232 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8252 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8261 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8271 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8279 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8288 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8300 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8306 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8312 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8321 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8330 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8339 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8348 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8357 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8366 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8374 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8382 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8389 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8394 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8400 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8408 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8417 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8425 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8439 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8453 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8463 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8471 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8480 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8489 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8498 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8507 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8515 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8523 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8531 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8539 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8547 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8556 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8567 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8582 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8590 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8634 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8677 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8683 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8689 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8696 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8706 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8724 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8740 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8751 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8760 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8767 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8774 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8792 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8804 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 8847 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 11504 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/@vercel/og/index.node.js | 11661 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/assert/assert.js | 7 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/async-retry/index.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/babel/bundle.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/babel/bundle.js | 227 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/babel-packages/packages-bundle.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/babel-packages/packages-bundle.js | 325 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/babel-packages/packages-bundle.js | 335 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/conf/index.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/debug/index.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/mini-css-extract-plugin/hmr/hotModuleReplacement.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/mini-css-extract-plugin/loader.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/schema-utils2/index.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/schema-utils3/index.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/source-map08/source-map.js | 555 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/terser/bundle.min.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/util/util.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/webpack/bundle5.js | 1 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/webpack/bundle5.js | 29 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/webpack/lazy-compilation-node.js | 30 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/compiled/webpack/lazy-compilation-web.js | 66 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/lib/helpers/install.ts | 51 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/lib/helpers/install.ts | 53 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/lib/helpers/install.ts | 57 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/lib/install-dependencies.ts | 22 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/lib/install-dependencies.ts | 23 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/lib/install-dependencies.ts | 29 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/lib/install-dependencies.ts | 31 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/lib/install-dependencies.ts | 38 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/lib/require-instrumentation-client.ts | 23 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/lib/verify-typescript-setup.ts | 154 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/dev-overlay/components/errors/error-overlay-toolbar/use-restart-server.ts | 24 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/dev-overlay/components/errors/error-overlay-toolbar/use-restart-server.ts | 32 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/dev-overlay/components/errors/error-overlay-toolbar/use-restart-server.ts | 44 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/dev-overlay/components/errors/error-overlay-toolbar/use-restart-server.ts | 73 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/dev-overlay/components/errors/error-overlay-toolbar/use-restart-server.ts | 78 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/server/launch-editor.ts | 290 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/server/launch-editor.ts | 291 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/server/launch-editor.ts | 298 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/server/launch-editor.ts | 300 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/server/launch-editor.ts | 301 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/server/launch-editor.ts | 309 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/server/launch-editor.ts | 374 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/server/launch-editor.ts | 375 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/server/launch-editor.ts | 378 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/server/launch-editor.ts | 379 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/next-devtools/server/launch-editor.ts | 385 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/app-render/app-render-scheduling.ts | 33 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/app-render/app-render-scheduling.ts | 35 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/app-render/app-render-scheduling.ts | 41 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/app-render/app-render-scheduling.ts | 43 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/app-render/app-render-scheduling.ts | 44 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/cpu-profile.ts | 64 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/cpu-profile.ts | 65 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/file-system-cache.ts | 53 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/file-system-cache.ts | 58 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/file-system-cache.ts | 61 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/file-system-cache.ts | 74 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/file-system-cache.ts | 113 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/file-system-cache.ts | 115 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/file-system-cache.ts | 175 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/file-system-cache.ts | 315 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/file-system-cache.ts | 331 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/file-system-cache.ts | 339 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/file-system-cache.ts | 360 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/index.ts | 147 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/index.ts | 152 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/index.ts | 158 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/index.ts | 253 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/index.ts | 268 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/index.ts | 458 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/index.ts | 463 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/index.ts | 469 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/index.ts | 473 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/index.ts | 518 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/index.ts | 537 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/incremental-cache/index.ts | 688 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/patch-fetch.ts | 118 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/lib/utils.ts | 6 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-dim.external.test.ts | 147 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-dim.external.test.ts | 150 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-dim.external.test.ts | 192 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-dim.external.test.ts | 195 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-dim.external.test.ts | 275 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-dim.external.test.ts | 282 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-dim.external.test.ts | 284 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-dim.external.test.ts | 342 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-dim.external.test.ts | 344 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-dim.external.test.ts | 347 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-exit.test.ts | 138 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-exit.test.ts | 142 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-exit.test.ts | 176 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-exit.test.ts | 180 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-exit.test.ts | 253 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/console-exit.test.ts | 255 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/fast-set-immediate.external.ts | 103 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/fast-set-immediate.external.ts | 105 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/node-environment-extensions/fast-set-immediate.external.ts | 109 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/route-matcher-providers/dev/dev-app-route-route-matcher-provider.test.ts | 64 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/route-modules/app-route/module.ts | 445 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/server/use-cache/handlers.ts | 10 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/telemetry/storage.ts | 98 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/telemetry/storage.ts | 103 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/telemetry/storage.ts | 106 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/telemetry/storage.ts | 109 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/telemetry/storage.ts | 110 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/trace/report/to-json.ts | 138 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/trace/trace-uploader.ts | 228 | 🟢 LOW | Debug console.log statement found |
| packages/next/src/trace/trace-uploader.ts | 241 | 🟢 LOW | Debug console.log statement found |
| packages/next/taskfile-webpack.js | 15 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/agents-md.ts | 105 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/agents-md.ts | 109 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/agents-md.ts | 147 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/agents-md.ts | 149 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/agents-md.ts | 153 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/agents-md.ts | 163 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/agents-md.ts | 168 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/agents-md.ts | 198 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/agents-md.ts | 218 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/transform.ts | 95 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/transform.ts | 105 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/transform.ts | 152 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/transform.ts | 227 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/transform.ts | 234 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 67 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 69 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 76 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 130 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 154 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 183 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 190 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 199 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 200 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 201 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 375 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 419 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 421 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 500 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 510 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 511 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 514 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 542 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 818 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 825 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/bin/upgrade.ts | 830 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/lib/install.ts | 73 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/lib/install.ts | 75 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/lib/install.ts | 76 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/lib/install.ts | 79 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/lib/utils.ts | 18 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/lib/utils.ts | 20 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/lib/utils.ts | 21 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/lib/utils.ts | 26 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/__testfixtures__/new-link/move-props.input.js | 6 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/__testfixtures__/new-link/move-props.output.js | 7 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/cra-to-next.ts | 86 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/cra-to-next.ts | 159 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/cra-to-next.ts | 166 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/cra-to-next.ts | 172 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/cra-to-next.ts | 178 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/cra-to-next.ts | 615 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/lib/async-request-api/next-async-dynamic-prop.ts | 379 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 123 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 223 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 263 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 549 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 572 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 786 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 809 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 821 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 961 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 967 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 970 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1071 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1086 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1097 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1101 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1130 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1140 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1141 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1153 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1178 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1179 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1180 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1182 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1185 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1193 | 🟢 LOW | Debug console.log statement found |
| packages/next-codemod/transforms/next-lint-to-eslint-cli.ts | 1207 | 🟢 LOW | Debug console.log statement found |
| rspack/change-npm-name.js | 14 | 🟢 LOW | Debug console.log statement found |
| rspack/change-npm-name.js | 15 | 🟢 LOW | Debug console.log statement found |
| rspack/change-npm-name.js | 16 | 🟢 LOW | Debug console.log statement found |
| rspack/change-npm-name.js | 33 | 🟢 LOW | Debug console.log statement found |
| rspack/change-npm-name.js | 37 | 🟢 LOW | Debug console.log statement found |
| rspack/change-npm-name.js | 44 | 🟢 LOW | Debug console.log statement found |
| rspack/change-npm-name.js | 71 | 🟢 LOW | Debug console.log statement found |
| rspack/change-npm-name.js | 99 | 🟢 LOW | Debug console.log statement found |
| run-evals.js | 150 | 🟢 LOW | Debug console.log statement found |
| run-evals.js | 152 | 🟢 LOW | Debug console.log statement found |
| run-evals.js | 155 | 🟢 LOW | Debug console.log statement found |
| run-evals.js | 173 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 114 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 116 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 119 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 121 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 122 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 142 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 221 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 306 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 337 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 391 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 455 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 460 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 480 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 482 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 495 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 497 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 555 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 572 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 589 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 592 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 595 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 610 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 628 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 835 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 839 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 850 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 862 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 869 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 879 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 886 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 900 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 956 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 957 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 962 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 965 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 1000 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 1031 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 1046 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 1054 | 🟢 LOW | Debug console.log statement found |
| run-tests.js | 1057 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 42 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 43 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 46 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 69 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 70 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 71 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 72 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 73 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 74 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 78 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 86 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 87 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 88 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 93 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 105 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 106 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 107 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 116 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 117 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 122 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 132 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 136 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 137 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 138 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 139 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 140 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 141 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-dev-server-bundle.js | 142 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-profile.js | 45 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-profile.js | 46 | 🟢 LOW | Debug console.log statement found |
| scripts/analyze-profile.js | 48 | 🟢 LOW | Debug console.log statement found |
| scripts/automated-update-workflow.js | 24 | 🟢 LOW | Debug console.log statement found |
| scripts/automated-update-workflow.js | 28 | 🟢 LOW | Debug console.log statement found |
| scripts/automated-update-workflow.js | 32 | 🟢 LOW | Debug console.log statement found |
| scripts/automated-update-workflow.js | 36 | 🟢 LOW | Debug console.log statement found |
| scripts/automated-update-workflow.js | 40 | 🟢 LOW | Debug console.log statement found |
| scripts/automated-update-workflow.js | 67 | 🟢 LOW | Debug console.log statement found |
| scripts/automated-update-workflow.js | 120 | 🟢 LOW | Debug console.log statement found |
| scripts/automated-update-workflow.js | 128 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 40 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 41 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 42 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 43 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 44 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 51 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 52 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 53 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 54 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 123 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 136 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 140 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 147 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 165 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 166 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 167 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 170 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 171 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 174 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 204 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 225 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 231 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 234 | 🟢 LOW | Debug console.log statement found |
| scripts/benchmark-next-dev-boot.js | 242 | 🟢 LOW | Debug console.log statement found |
| scripts/check-backport-canary-release.js | 120 | 🟢 LOW | Debug console.log statement found |
| scripts/check-backport-canary-release.js | 122 | 🟢 LOW | Debug console.log statement found |
| scripts/check-is-release.js | 18 | 🟢 LOW | Debug console.log statement found |
| scripts/check-is-release.js | 21 | 🟢 LOW | Debug console.log statement found |
| scripts/check-manifests.js | 39 | 🟢 LOW | Debug console.log statement found |
| scripts/check-manifests.js | 41 | 🟢 LOW | Debug console.log statement found |
| scripts/check-manifests.js | 51 | 🟢 LOW | Debug console.log statement found |
| scripts/check-manifests.js | 62 | 🟢 LOW | Debug console.log statement found |
| scripts/code-freeze.js | 90 | 🟢 LOW | Debug console.log statement found |
| scripts/code-freeze.js | 94 | 🟢 LOW | Debug console.log statement found |
| scripts/code-freeze.js | 99 | 🟢 LOW | Debug console.log statement found |
| scripts/code-freeze.js | 102 | 🟢 LOW | Debug console.log statement found |
| scripts/code-freeze.js | 110 | 🟢 LOW | Debug console.log statement found |
| scripts/create-release-branch.js | 28 | 🟢 LOW | Debug console.log statement found |
| scripts/create-release-branch.js | 106 | 🟢 LOW | Debug console.log statement found |
| scripts/create-release-branch.js | 129 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 65 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 89 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 122 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 126 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 138 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 139 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 140 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 141 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 142 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 178 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 183 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 184 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 185 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 190 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 197 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 202 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 223 | 🟢 LOW | Debug console.log statement found |
| scripts/docker-native-build.js | 227 | 🟢 LOW | Debug console.log statement found |
| scripts/minimal-server.js | 108 | 🟢 LOW | Debug console.log statement found |
| scripts/minimal-server.js | 114 | 🟢 LOW | Debug console.log statement found |
| scripts/minimal-server.js | 128 | 🟢 LOW | Debug console.log statement found |
| scripts/minimal-server.js | 164 | 🟢 LOW | Debug console.log statement found |
| scripts/minimal-server.js | 178 | 🟢 LOW | Debug console.log statement found |
| scripts/minimal-server.js | 182 | 🟢 LOW | Debug console.log statement found |
| scripts/minimal-server.js | 184 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 165 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 167 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 170 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 171 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 172 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 173 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 176 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 179 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 182 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 185 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 186 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 187 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 188 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 191 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 192 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 195 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 196 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-next.ts | 197 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-util.ts | 128 | 🟢 LOW | Debug console.log statement found |
| scripts/pack-util.ts | 130 | 🟢 LOW | Debug console.log statement found |
| scripts/patch-next.ts | 82 | 🟢 LOW | Debug console.log statement found |
| scripts/patch-next.ts | 169 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-logs.js | 105 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-logs.js | 293 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-logs.js | 295 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-logs.js | 297 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-logs.js | 310 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-logs.js | 331 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-logs.js | 350 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-logs.js | 357 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-logs.js | 419 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-logs.js | 420 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 491 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 527 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 529 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1271 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1283 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1288 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1301 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1306 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1332 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1387 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1403 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1409 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1411 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1416 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1420 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1426 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1431 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1442 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1445 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1450 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1452 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1467 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1472 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1484 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1538 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1548 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1607 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1647 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1665 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1730 | 🟢 LOW | Debug console.log statement found |
| scripts/pr-status.js | 1739 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 62 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 64 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 65 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 66 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 68 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 69 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 101 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 102 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 103 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 137 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 138 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 144 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 186 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 187 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 190 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 192 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 193 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 194 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 195 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 196 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 197 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 198 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 203 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 204 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 207 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 208 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 211 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 232 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 233 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 265 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 266 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 267 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 268 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 269 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 270 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 271 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 272 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 273 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 279 | 🟢 LOW | Debug console.log statement found |
| scripts/profile-next-dev-boot.js | 280 | 🟢 LOW | Debug console.log statement found |
| scripts/publish-release.js | 21 | 🟢 LOW | Debug console.log statement found |
| scripts/publish-release.js | 34 | 🟢 LOW | Debug console.log statement found |
| scripts/publish-release.js | 58 | 🟢 LOW | Debug console.log statement found |
| scripts/publish-release.js | 62 | 🟢 LOW | Debug console.log statement found |
| scripts/publish-release.js | 97 | 🟢 LOW | Debug console.log statement found |
| scripts/publish-release.js | 247 | 🟢 LOW | Debug console.log statement found |
| scripts/publish-release.js | 283 | 🟢 LOW | Debug console.log statement found |
| scripts/publish-release.js | 286 | 🟢 LOW | Debug console.log statement found |
| scripts/publish-release.js | 292 | 🟢 LOW | Debug console.log statement found |
| scripts/publish-release.js | 306 | 🟢 LOW | Debug console.log statement found |
| scripts/publish-release.js | 308 | 🟢 LOW | Debug console.log statement found |
| scripts/release-github-api.js | 92 | 🟢 LOW | Debug console.log statement found |
| scripts/release-github-api.js | 140 | 🟢 LOW | Debug console.log statement found |
| scripts/release-github-auth.js | 64 | 🟢 LOW | Debug console.log statement found |
| scripts/rust-fingerprint.js | 14 | 🟢 LOW | Debug console.log statement found |
| scripts/rust-fingerprint.js | 20 | 🟢 LOW | Debug console.log statement found |
| scripts/start-release.js | 30 | 🟢 LOW | Debug console.log statement found |
| scripts/start-release.js | 36 | 🟢 LOW | Debug console.log statement found |
| scripts/start-release.js | 47 | 🟢 LOW | Debug console.log statement found |
| scripts/start-release.js | 52 | 🟢 LOW | Debug console.log statement found |
| scripts/start-release.js | 73 | 🟢 LOW | Debug console.log statement found |
| scripts/start-release.js | 110 | 🟢 LOW | Debug console.log statement found |
| scripts/start-release.js | 129 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 120 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 122 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 127 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 399 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 442 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 446 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 578 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 580 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 602 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 621 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 649 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 714 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 740 | 🟢 LOW | Debug console.log statement found |
| scripts/sync-react.js | 741 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 29 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 30 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 31 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 32 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 80 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 81 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 106 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 110 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 111 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 112 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 113 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 114 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 123 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 126 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 127 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-cli-startup.js | 128 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-next-server.js | 39 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-next-server.js | 40 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-next-server.js | 109 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-next-server.js | 113 | 🟢 LOW | Debug console.log statement found |
| scripts/trace-next-server.js | 145 | 🟢 LOW | Debug console.log statement found |
| scripts/validate-externals-doc.js | 50 | 🟢 LOW | Debug console.log statement found |
| scripts/validate-externals-doc.js | 74 | 🟢 LOW | Debug console.log statement found |
| test/.stats-app/pages/script.js | 6 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance/ReactRefreshModule.test.ts | 28 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/ReactRefreshModule.test.ts | 31 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/next-cache-in-client/cachelife/page.js | 4 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/next-cache-in-client/cachetag/page.js | 4 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/next-cache-in-client/revalidatepath/page.js | 4 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/next-cache-in-client/revalidatetag/page.js | 4 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/next-cache-in-client/unstable_cache/page.js | 4 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/next-cache-in-client/unstable_nostore/page.js | 4 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/next-root-params/in-client/page.js | 4 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/next-root-params/in-client-await-import/page.js | 6 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/component/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/createcontext/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/createfactory/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/purecomponent/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/useactionstate/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/usedeferredvalue/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/useeffect/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/useeffectevent/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/useimperativehandle/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/useinsertioneffect/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/uselayouteffect/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/useoptimistic/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/usereducer/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/useref/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/usestate/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/usesyncexternalstore/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-apis/usetransition/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-dom-apis/flushsync/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-dom-apis/unstable_batchedupdates/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-dom-apis/useformstate/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/acceptance-app/fixtures/rsc-build-errors/app/server-with-errors/react-dom-apis/useformstatus/page.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/app-dir/async-request-warnings/async-request-warnings.test.ts | 121 | 🟢 LOW | Debug console.log statement found |
| test/development/app-dir/cache-components-dev-warmup/cache-components.dev-warmup.test.ts | 105 | 🟢 LOW | Debug console.log statement found |
| test/development/app-dir/cache-components-dev-warmup/cache-components.dev-warmup.test.ts | 174 | 🟢 LOW | Debug console.log statement found |
| test/development/app-dir/cache-components-tasks/cache-components-tasks.test.ts | 91 | 🟢 LOW | Debug console.log statement found |
| test/development/app-dir/cache-components-tasks/cache-components-tasks.test.ts | 131 | 🟢 LOW | Debug console.log statement found |
| test/development/app-dir/next-after-app-invalid-usage/basic/utils/log.js | 2 | 🟢 LOW | Debug console.log statement found |
| test/development/app-dir/strict-mode-enabled-by-default/app/page.js | 8 | 🟢 LOW | Debug console.log statement found |
| test/development/app-dir/watch-config-file/index.test.ts | 17 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/hmr/run-error-recovery-hmr-test.util.ts | 116 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/next-rs-api.test.ts | 215 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/next-rs-api.test.ts | 224 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/next-rs-api.test.ts | 226 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/next-rs-api.test.ts | 237 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/next-rs-api.test.ts | 240 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/next-rs-api.test.ts | 246 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/next-rs-api.test.ts | 585 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/next-rs-api.test.ts | 640 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/next-rs-api.test.ts | 727 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 60 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 63 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 66 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 69 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 73 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 76 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 79 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 82 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 85 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 88 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 91 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 94 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 97 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 100 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 103 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 106 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/node-builtins/middleware.js | 109 | 🟢 LOW | Debug console.log statement found |
| test/development/basic/styled-components/pages/index.js | 24 | 🟢 LOW | Debug console.log statement found |
| test/development/browser-logs/browser-logs.test.ts | 243 | 🟢 LOW | Debug console.log statement found |
| test/development/browser-logs/fixtures/app/client-log/page.js | 9 | 🟢 LOW | Debug console.log statement found |
| test/development/browser-logs/fixtures/app/server-log/page.js | 2 | 🟢 LOW | Debug console.log statement found |
| test/development/browser-logs/fixtures/pages/basic-logs.js | 7 | 🟢 LOW | Debug console.log statement found |
| test/development/browser-logs/fixtures/pages/circular-refs.js | 9 | 🟢 LOW | Debug console.log statement found |
| test/development/browser-logs/fixtures/pages/deep-objects.js | 22 | 🟢 LOW | Debug console.log statement found |
| test/development/browser-logs/fixtures/pages/pages-client-log.js | 7 | 🟢 LOW | Debug console.log statement found |
| test/development/config-output-export/config-output-export.test.ts | 211 | 🟢 LOW | Debug console.log statement found |
| test/development/dynamic-require/pages/index.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/gssp-notfound/index.test.ts | 12 | 🟢 LOW | Debug console.log statement found |
| test/development/internal-traces/pages/traces.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/load-config-freq/next.config.js | 6 | 🟢 LOW | Debug console.log statement found |
| test/development/middleware-overrides-node.js-api/middleware.js | 3 | 🟢 LOW | Debug console.log statement found |
| test/development/next-image-new/middleware/middleware.js | 5 | 🟢 LOW | Debug console.log statement found |
| test/development/next-image-new/middleware/middleware.js | 8 | 🟢 LOW | Debug console.log statement found |
| test/development/ondemand/server.js | 29 | 🟢 LOW | Debug console.log statement found |
| test/development/pages-dir/client-navigation/rendering-head.test.ts | 96 | 🟢 LOW | Debug console.log statement found |
| test/development/pages-dir/client-navigation/url-hash.test.ts | 22 | 🟢 LOW | Debug console.log statement found |
| test/development/typescript-plugin/test-utils.ts | 22 | 🟢 LOW | Debug console.log statement found |
| test/development/watch-config-file/index.test.ts | 16 | 🟢 LOW | Debug console.log statement found |
| test/e2e/500-page/500-page-build.test.ts | 22 | 🟢 LOW | Debug console.log statement found |
| test/e2e/500-page/500-page-build.test.ts | 142 | 🟢 LOW | Debug console.log statement found |
| test/e2e/500-page/pages/500.js | 2 | 🟢 LOW | Debug console.log statement found |
| test/e2e/api-body-parser/server.js | 29 | 🟢 LOW | Debug console.log statement found |
| test/e2e/api-resolver-query-writeable/server.js | 27 | 🟢 LOW | Debug console.log statement found |
| test/e2e/api-resolver-query-writeable/server.js | 28 | 🟢 LOW | Debug console.log statement found |
| test/e2e/api-support/pages/api/test-no-end.js | 2 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/client/actions-lib.js | 8 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/client/actions.js | 9 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/client/actions.js | 27 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/client/actions.js | 36 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/client/layout.js | 5 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/client-static/actions.js | 6 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/delayed-action/actions.ts | 6 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/encryption/page.js | 15 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/encryption/page.js | 35 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/error-handling/actions.js | 5 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/file/page.js | 5 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/form/page.js | 6 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/identity/page.js | 10 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/server/actions-2.js | 5 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/server/form.js | 26 | 🟢 LOW | Debug console.log statement found |
| test/e2e/app-dir/actions/app/too-many-args/actions.js | 4 | 🟢 LOW | Debug console.log statement found |

### Maintenance Items (500)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/actions/next-integration-stat/src/index.ts | 239 | ⚪ INFO | TODO comment found |
| .github/actions/next-stats-action/src/index.js | 110 | ⚪ INFO | TODO comment found |
| .github/actions/validate-docs-links/src/index.ts | 149 | ⚪ INFO | TODO comment found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/2/input.js | 13 | ⚪ INFO | TODO comment found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/2/output.js | 14 | ⚪ INFO | TODO comment found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/21/input.js | 10 | ⚪ INFO | TODO comment found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/21/output.js | 13 | ⚪ INFO | TODO comment found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/25/input.js | 30 | 🟡 MEDIUM | FIXME comment indicating known issue |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/25/output.js | 19 | 🟡 MEDIUM | FIXME comment indicating known issue |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/26/input.js | 3 | ⚪ INFO | TODO comment found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/26/output.js | 7 | ⚪ INFO | TODO comment found |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/28/input.js | 11 | 🟡 MEDIUM | FIXME comment indicating known issue |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/28/output.js | 4 | 🟡 MEDIUM | FIXME comment indicating known issue |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/30/input.js | 13 | 🟡 MEDIUM | FIXME comment indicating known issue |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/30/output.js | 4 | 🟡 MEDIUM | FIXME comment indicating known issue |
| examples/cms-agilitycms/lib/api.ts | 39 | ⚪ INFO | TODO comment found |
| examples/image-secure-compute/app/image-api/[...path]/route.ts | 1 | ⚪ INFO | TODO comment found |
| examples/image-secure-compute/app/image-api/[...path]/route.ts | 6 | ⚪ INFO | TODO comment found |
| packages/create-next-app/templates/index.ts | 149 | ⚪ INFO | TODO comment found |
| packages/eslint-config-next/src/index.ts | 34 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-next/src/utils/url.ts | 17 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-next/src/utils/url.ts | 45 | ⚪ INFO | TODO comment found |
| packages/next/next-devtools.webpack-config.js | 52 | ⚪ INFO | TODO comment found |
| packages/next/next-devtools.webpack-config.js | 60 | ⚪ INFO | TODO comment found |
| packages/next/next-devtools.webpack-config.js | 90 | ⚪ INFO | TODO comment found |
| packages/next/src/bin/next.ts | 290 | ⚪ INFO | TODO comment found |
| packages/next/src/cli/next-start.ts | 63 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/app-router-headers.ts | 3 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/app-router-headers.ts | 9 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/app-router-headers.ts | 44 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/app-router-instance.ts | 267 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/app-router-instance.ts | 316 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/app-router-instance.ts | 342 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/app-router-utils.ts | 25 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/bfcache-state-manager.ts | 46 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/forbidden.ts | 6 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/links.ts | 153 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/links.ts | 218 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/links.ts | 263 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/create-initial-router-state.ts | 121 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/fetch-server-response.ts | 3 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/fetch-server-response.ts | 193 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/fetch-server-response.ts | 243 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/fetch-server-response.ts | 256 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/fetch-server-response.ts | 293 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/fetch-server-response.ts | 559 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/fetch-server-response.ts | 628 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/fetch-server-response.ts | 664 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 289 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 330 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 444 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 749 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 982 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 1158 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 1201 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 1271 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 1417 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 1431 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 1436 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 1449 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 1513 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 1666 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 1736 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/ppr-navigations.ts | 2024 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/reducers/refresh-reducer.ts | 67 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/reducers/refresh-reducer.ts | 71 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/reducers/restore-reducer.ts | 50 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/reducers/server-action-reducer.ts | 20 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/reducers/server-action-reducer.ts | 90 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/reducers/server-action-reducer.ts | 356 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/reducers/server-action-reducer.ts | 357 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/reducers/server-action-reducer.ts | 426 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/reducers/server-action-reducer.ts | 462 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/router-reducer/reducers/server-action-reducer.ts | 472 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/bfcache.ts | 88 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/bfcache.ts | 96 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache-key.ts | 16 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 147 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 611 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 639 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 845 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 901 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 1324 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 1420 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 1541 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 1576 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 1606 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 1727 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 1742 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 1762 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 1798 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 1843 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 1863 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 1901 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 2148 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 2174 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 2227 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 2320 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 2543 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 2684 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/cache.ts | 2926 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/lru.ts | 11 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/navigation.ts | 160 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/navigation.ts | 193 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/navigation.ts | 305 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/navigation.ts | 530 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/navigation.ts | 641 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/navigation.ts | 672 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/navigation.ts | 818 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/navigation.ts | 826 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/navigation.ts | 857 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/navigation.ts | 893 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/optimistic-routes.ts | 114 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/optimistic-routes.ts | 637 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/optimistic-routes.ts | 915 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/scheduler.ts | 448 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/scheduler.ts | 453 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/scheduler.ts | 642 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/scheduler.ts | 690 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/scheduler.ts | 706 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/scheduler.ts | 815 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/scheduler.ts | 862 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/scheduler.ts | 892 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/scheduler.ts | 947 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/scheduler.ts | 999 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/scheduler.ts | 1108 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/scheduler.ts | 1360 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/scheduler.ts | 1937 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/segment-cache/vary-path.ts | 277 | ⚪ INFO | TODO comment found |
| packages/next/src/client/components/unauthorized.ts | 6 | ⚪ INFO | TODO comment found |
| packages/next/src/client/dev/hot-reloader/pages/hot-reloader-pages.ts | 1 | ⚪ INFO | TODO comment found |
| packages/next/src/client/flight-data-helpers.ts | 39 | ⚪ INFO | TODO comment found |
| packages/next/src/client/flight-data-helpers.ts | 55 | ⚪ INFO | TODO comment found |
| packages/next/src/client/flight-data-helpers.ts | 86 | ⚪ INFO | TODO comment found |
| packages/next/src/client/lib/console.ts | 84 | ⚪ INFO | TODO comment found |
| packages/next/src/client/next-dev-turbopack.ts | 1 | ⚪ INFO | TODO comment found |
| packages/next/src/client/next-dev.ts | 1 | ⚪ INFO | TODO comment found |
| packages/next/src/client/next-turbopack.ts | 7 | ⚪ INFO | TODO comment found |
| packages/next/src/client/page-bootstrap.ts | 81 | ⚪ INFO | TODO comment found |
| packages/next/src/client/page-loader.ts | 133 | ⚪ INFO | TODO comment found |
| packages/next/src/client/react-client-callbacks/error-boundary-callbacks.ts | 105 | ⚪ INFO | TODO comment found |
| packages/next/src/client/react-client-callbacks/report-global-error.ts | 7 | ⚪ INFO | TODO comment found |
| packages/next/src/client/route-loader.ts | 92 | ⚪ INFO | TODO comment found |
| packages/next/src/client/route-loader.ts | 177 | ⚪ INFO | TODO comment found |
| packages/next/src/client/route-params.ts | 153 | ⚪ INFO | TODO comment found |
| packages/next/src/client/route-params.ts | 162 | ⚪ INFO | TODO comment found |
| packages/next/src/client/route-params.ts | 184 | ⚪ INFO | TODO comment found |
| packages/next/src/client/route-params.ts | 226 | ⚪ INFO | TODO comment found |
| packages/next/src/compiled/@edge-runtime/primitives/fetch.js | 11321 | ⚪ INFO | TODO comment found |
| packages/next/src/compiled/@edge-runtime/primitives/load.js | 11321 | ⚪ INFO | TODO comment found |
| packages/next/src/export/index.ts | 783 | ⚪ INFO | TODO comment found |
| packages/next/src/export/index.ts | 884 | ⚪ INFO | TODO comment found |
| packages/next/src/export/index.ts | 940 | ⚪ INFO | TODO comment found |
| packages/next/src/export/routes/app-route.ts | 82 | ⚪ INFO | TODO comment found |
| packages/next/src/export/worker.ts | 373 | ⚪ INFO | TODO comment found |
| packages/next/src/export/worker.ts | 592 | ⚪ INFO | TODO comment found |
| packages/next/src/lib/metadata/resolvers/resolve-basics.ts | 269 | ⚪ INFO | TODO comment found |
| packages/next/src/lib/metadata/resolvers/resolve-opengraph.ts | 180 | ⚪ INFO | TODO comment found |
| packages/next/src/lib/typescript/getTypeScriptConfiguration.ts | 53 | ⚪ INFO | TODO comment found |
| packages/next/src/lib/typescript/writeConfigurationDefaults.ts | 85 | ⚪ INFO | TODO comment found |
| packages/next/src/lib/worker.ts | 252 | ⚪ INFO | TODO comment found |
| packages/next/src/next-devtools/dev-overlay/components/errors/dev-tools-indicator/utils.ts | 85 | ⚪ INFO | TODO comment found |
| packages/next/src/next-devtools/dev-overlay/segment-explorer-trie.ts | 55 | ⚪ INFO | TODO comment found |
| packages/next/src/next-devtools/dev-overlay/shared.ts | 366 | ⚪ INFO | TODO comment found |
| packages/next/src/next-devtools/dev-overlay/shared.ts | 403 | ⚪ INFO | TODO comment found |
| packages/next/src/next-devtools/dev-overlay.shim.ts | 13 | ⚪ INFO | TODO comment found |
| packages/next/src/next-devtools/server/restart-dev-server-middleware.ts | 61 | ⚪ INFO | TODO comment found |
| packages/next/src/next-devtools/shared/react-18-hydration-error.ts | 39 | ⚪ INFO | TODO comment found |
| packages/next/src/next-devtools/shared/stack-frame.ts | 56 | ⚪ INFO | TODO comment found |
| packages/next/src/next-devtools/userspace/app/forward-logs.ts | 393 | ⚪ INFO | TODO comment found |
| packages/next/src/next-devtools/userspace/pages/hydration-error-state.ts | 56 | ⚪ INFO | TODO comment found |
| packages/next/src/server/ReactDOMServerPages.js | 4 | ⚪ INFO | TODO comment found |
| packages/next/src/server/api-utils/node/api-resolver.ts | 167 | ⚪ INFO | TODO comment found |
| packages/next/src/server/api-utils/node/try-get-preview-data.ts | 33 | ⚪ INFO | TODO comment found |
| packages/next/src/server/api-utils/node/try-get-preview-data.ts | 95 | ⚪ INFO | TODO comment found |
| packages/next/src/server/api-utils/node/try-get-preview-data.ts | 108 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/action-handler.ts | 160 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/action-handler.ts | 759 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/action-handler.ts | 792 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/action-handler.ts | 998 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/action-handler.ts | 1005 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/action-handler.ts | 1110 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/action-handler.ts | 1185 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/action-handler.ts | 1258 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/create-flight-router-state-from-loader-tree.ts | 54 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/entry-base.ts | 41 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/manifests-singleton.ts | 74 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/prospective-render-utils.ts | 21 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/react-large-shell-error.ts | 1 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/types.ts | 49 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/vary-params.ts | 265 | ⚪ INFO | TODO comment found |
| packages/next/src/server/app-render/work-async-storage.external.ts | 56 | ⚪ INFO | TODO comment found |
| packages/next/src/server/async-storage/request-store.ts | 134 | ⚪ INFO | TODO comment found |
| packages/next/src/server/async-storage/request-store.ts | 322 | ⚪ INFO | TODO comment found |
| packages/next/src/server/async-storage/work-store.ts | 52 | ⚪ INFO | TODO comment found |
| packages/next/src/server/async-storage/work-store.ts | 158 | ⚪ INFO | TODO comment found |
| packages/next/src/server/base-server.ts | 463 | ⚪ INFO | TODO comment found |
| packages/next/src/server/base-server.ts | 1067 | ⚪ INFO | TODO comment found |
| packages/next/src/server/base-server.ts | 1493 | ⚪ INFO | TODO comment found |
| packages/next/src/server/base-server.ts | 2153 | ⚪ INFO | TODO comment found |
| packages/next/src/server/base-server.ts | 2356 | ⚪ INFO | TODO comment found |
| packages/next/src/server/config-shared.ts | 1150 | ⚪ INFO | TODO comment found |
| packages/next/src/server/config.ts | 1585 | ⚪ INFO | TODO comment found |
| packages/next/src/server/config.ts | 1950 | ⚪ INFO | TODO comment found |
| packages/next/src/server/config.ts | 2095 | ⚪ INFO | TODO comment found |
| packages/next/src/server/config.ts | 2207 | ⚪ INFO | TODO comment found |
| packages/next/src/server/config.ts | 2217 | ⚪ INFO | TODO comment found |
| packages/next/src/server/config.ts | 2244 | ⚪ INFO | TODO comment found |
| packages/next/src/server/config.ts | 2267 | ⚪ INFO | TODO comment found |
| packages/next/src/server/config.ts | 2279 | ⚪ INFO | TODO comment found |
| packages/next/src/server/config.ts | 2298 | ⚪ INFO | TODO comment found |
| packages/next/src/server/config.ts | 2342 | ⚪ INFO | TODO comment found |
| packages/next/src/server/create-deduped-by-callsite-server-error-logger.ts | 57 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/browser-logs/source-map.ts | 31 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/browser-logs/source-map.ts | 80 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/browser-logs/source-map.ts | 219 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/debug-channel.ts | 118 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/hot-reloader-rspack.ts | 183 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/hot-reloader-turbopack.ts | 368 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/hot-reloader-turbopack.ts | 402 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/hot-reloader-turbopack.ts | 812 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/hot-reloader-turbopack.ts | 1246 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/hot-reloader-turbopack.ts | 1767 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/hot-reloader-webpack.ts | 437 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/middleware-turbopack.ts | 247 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/middleware-turbopack.ts | 271 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/middleware-turbopack.ts | 553 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/middleware-webpack.ts | 570 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/middleware-webpack.ts | 656 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/next-dev-server.ts | 292 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/next-dev-server.ts | 603 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/on-demand-entry-handler.ts | 121 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/on-demand-entry-handler.ts | 765 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/serialized-errors.ts | 46 | ⚪ INFO | TODO comment found |
| packages/next/src/server/dev/use-cache-probe-pool.ts | 106 | ⚪ INFO | TODO comment found |
| packages/next/src/server/instrumentation/types.ts | 10 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/cache-handlers/default.ts | 161 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/cache-handlers/default.ts | 193 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/chrome-devtools-workspace.ts | 64 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/dev-bundler-service.ts | 48 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/dev-bundler-service.ts | 58 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/incremental-cache/file-system-cache.ts | 171 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/incremental-cache/file-system-cache.ts | 205 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/patch-fetch.ts | 369 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/patch-fetch.ts | 661 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/patch-fetch.ts | 1020 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/patch-set-header.ts | 51 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/render-server.ts | 142 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/render-server.ts | 153 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/render-server.ts | 161 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-server.ts | 290 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-server.ts | 293 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-server.ts | 458 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-server.ts | 825 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-server.ts | 829 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-server.ts | 907 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-utils/block-cross-site-dev.ts | 100 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-utils/decode-path-params.ts | 12 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-utils/filesystem.ts | 286 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-utils/resolve-routes.ts | 166 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-utils/resolve-routes.ts | 316 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-utils/setup-dev-bundler.ts | 828 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-utils/setup-dev-bundler.ts | 968 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-utils/setup-dev-bundler.ts | 1065 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/router-utils/setup-dev-bundler.ts | 1140 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/source-maps.ts | 36 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/source-maps.ts | 40 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/source-maps.ts | 126 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/source-maps.ts | 131 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/source-maps.ts | 146 | ⚪ INFO | TODO comment found |
| packages/next/src/server/lib/source-maps.ts | 189 | ⚪ INFO | TODO comment found |
| packages/next/src/server/load-default-error-components.ts | 31 | ⚪ INFO | TODO comment found |
| packages/next/src/server/mcp/tools/get-page-metadata.ts | 75 | ⚪ INFO | TODO comment found |
| packages/next/src/server/next-server.ts | 241 | ⚪ INFO | TODO comment found |
| packages/next/src/server/next-server.ts | 652 | ⚪ INFO | TODO comment found |
| packages/next/src/server/next-server.ts | 1166 | ⚪ INFO | TODO comment found |
| packages/next/src/server/next-server.ts | 2092 | ⚪ INFO | TODO comment found |
| packages/next/src/server/next-server.ts | 2097 | ⚪ INFO | TODO comment found |
| packages/next/src/server/node-environment-extensions/fast-set-immediate.external.test.ts | 979 | 🟡 MEDIUM | FIXME comment indicating known issue |
| packages/next/src/server/node-environment-extensions/fast-set-immediate.external.test.ts | 1045 | 🟡 MEDIUM | FIXME comment indicating known issue |
| packages/next/src/server/node-environment-extensions/fast-set-immediate.external.test.ts | 1214 | 🟡 MEDIUM | FIXME comment indicating known issue |
| packages/next/src/server/node-environment-extensions/fast-set-immediate.external.test.ts | 1220 | 🟡 MEDIUM | FIXME comment indicating known issue |
| packages/next/src/server/node-environment-extensions/process-error-handlers.ts | 65 | ⚪ INFO | TODO comment found |
| packages/next/src/server/node-environment-extensions/process-error-handlers.ts | 75 | ⚪ INFO | TODO comment found |
| packages/next/src/server/normalizers/built/app/app-page-normalizer.ts | 24 | ⚪ INFO | TODO comment found |
| packages/next/src/server/patch-error-inspect.ts | 23 | ⚪ INFO | TODO comment found |
| packages/next/src/server/patch-error-inspect.ts | 97 | ⚪ INFO | TODO comment found |
| packages/next/src/server/patch-error-inspect.ts | 299 | ⚪ INFO | TODO comment found |
| packages/next/src/server/patch-error-inspect.ts | 304 | ⚪ INFO | TODO comment found |
| packages/next/src/server/patch-error-inspect.ts | 322 | ⚪ INFO | TODO comment found |
| packages/next/src/server/patch-error-inspect.ts | 411 | ⚪ INFO | TODO comment found |
| packages/next/src/server/patch-error-inspect.ts | 485 | ⚪ INFO | TODO comment found |
| packages/next/src/server/request/root-params.ts | 214 | ⚪ INFO | TODO comment found |
| packages/next/src/server/request-meta.ts | 18 | 🟡 MEDIUM | FIXME comment indicating known issue |
| packages/next/src/server/request-meta.ts | 439 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-matcher-managers/default-route-matcher-manager.test.ts | 173 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-matcher-managers/default-route-matcher-manager.ts | 94 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-matcher-managers/dev-route-matcher-manager.ts | 43 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-matcher-providers/dev/dev-app-page-route-matcher-provider.ts | 54 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-matcher-providers/dev/dev-app-route-route-matcher-provider.ts | 57 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-matcher-providers/dev/dev-pages-api-route-matcher-provider.ts | 39 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-matcher-providers/dev/dev-pages-route-matcher-provider.ts | 39 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-modules/app-route/helpers/auto-implement-methods.ts | 51 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-modules/app-route/module.ts | 493 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-modules/app-route/module.ts | 960 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-modules/app-route/module.ts | 971 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-modules/app-route/module.ts | 1327 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-modules/app-route/module.ts | 1373 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-modules/app-route/shared-modules.ts | 2 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-modules/pages/module.ts | 120 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-modules/pages/pages-handler.ts | 92 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-modules/pages/pages-handler.ts | 117 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-modules/pages/pages-handler.ts | 791 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-modules/route-module.ts | 828 | ⚪ INFO | TODO comment found |
| packages/next/src/server/route-modules/route-module.ts | 856 | ⚪ INFO | TODO comment found |
| packages/next/src/server/send-response.ts | 30 | ⚪ INFO | TODO comment found |
| packages/next/src/server/send-response.ts | 52 | ⚪ INFO | TODO comment found |
| packages/next/src/server/serve-static.ts | 4 | ⚪ INFO | TODO comment found |
| packages/next/src/server/typescript/rules/config.ts | 153 | ⚪ INFO | TODO comment found |
| packages/next/src/server/use-cache/cache-life.ts | 118 | ⚪ INFO | TODO comment found |
| packages/next/src/server/use-cache/use-cache-wrapper.ts | 119 | ⚪ INFO | TODO comment found |
| packages/next/src/server/use-cache/use-cache-wrapper.ts | 403 | ⚪ INFO | TODO comment found |
| packages/next/src/server/use-cache/use-cache-wrapper.ts | 1073 | ⚪ INFO | TODO comment found |
| packages/next/src/server/use-cache/use-cache-wrapper.ts | 1354 | ⚪ INFO | TODO comment found |
| packages/next/src/server/use-cache/use-cache-wrapper.ts | 1748 | ⚪ INFO | TODO comment found |
| packages/next/src/server/use-cache/use-cache-wrapper.ts | 1756 | ⚪ INFO | TODO comment found |
| packages/next/src/server/use-cache/use-cache-wrapper.ts | 1776 | ⚪ INFO | TODO comment found |
| packages/next/src/server/use-cache/use-cache-wrapper.ts | 1825 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/adapter.ts | 315 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/edge-route-module-wrapper.ts | 48 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/edge-route-module-wrapper.ts | 129 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/edge-route-module-wrapper.ts | 145 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/edge-route-module-wrapper.ts | 146 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/sandbox/resource-managers.ts | 29 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/sandbox/resource-managers.ts | 43 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/sandbox/sandbox.ts | 59 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/sandbox/sandbox.ts | 64 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/spec-extension/adapters/request-cookies.ts | 144 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/spec-extension/adapters/request-cookies.ts | 224 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/spec-extension/fetch-event.ts | 25 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/spec-extension/fetch-event.ts | 32 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/spec-extension/revalidate.ts | 52 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/spec-extension/revalidate.ts | 194 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/spec-extension/revalidate.ts | 244 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/spec-extension/unstable-cache.ts | 43 | ⚪ INFO | TODO comment found |
| packages/next/src/server/web/spec-extension/unstable-cache.ts | 398 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/app-router-types.ts | 115 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/app-router-types.ts | 329 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/constants.ts | 114 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/format-webpack-messages.ts | 45 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/format-webpack-messages.ts | 62 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/format-webpack-messages.ts | 105 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/magic-identifier.ts | 126 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/router/router.ts | 806 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/router/router.ts | 1035 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/router/router.ts | 1384 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/router/utils/get-dynamic-param.ts | 157 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/router/utils/interpolate-as.ts | 19 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/router/utils/interpolate-as.ts | 31 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/router/utils/sorted-routes.ts | 129 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/segment-cache/segment-value-encoding.ts | 26 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/segment-cache/segment-value-encoding.ts | 31 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/turbopack/manifest-loader.ts | 104 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/turbopack/utils.ts | 36 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/turbopack/utils.ts | 125 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/turbopack/utils.ts | 126 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/turbopack/utils.ts | 129 | ⚪ INFO | TODO comment found |
| packages/next/src/shared/lib/turbopack/utils.ts | 167 | ⚪ INFO | TODO comment found |
| packages/next/src/trace/trace.ts | 74 | ⚪ INFO | TODO comment found |
| packages/next/taskfile.js | 92 | ⚪ INFO | TODO comment found |
| packages/next/taskfile.js | 1758 | ⚪ INFO | TODO comment found |
| packages/next/types/$$compiled.internal.d.ts | 503 | ⚪ INFO | TODO comment found |
| packages/next/types/compiled.d.ts | 5 | ⚪ INFO | TODO comment found |
| packages/next/types/global.d.ts | 22 | ⚪ INFO | TODO comment found |
| packages/next-codemod/bin/upgrade.ts | 768 | ⚪ INFO | TODO comment found |
| packages/next-codemod/lib/cra-to-next/index-to-component.ts | 69 | ⚪ INFO | TODO comment found |
| packages/next-codemod/lib/cra-to-next/index-to-component.ts | 92 | ⚪ INFO | TODO comment found |
| packages/next-codemod/transforms/__tests__/next-image-experimental-loader.test.js | 28 | ⚪ INFO | TODO comment found |
| packages/next-codemod/transforms/cra-to-next.ts | 372 | ⚪ INFO | TODO comment found |
| packages/next-codemod/transforms/cra-to-next.ts | 407 | ⚪ INFO | TODO comment found |
| packages/next-codemod/transforms/cra-to-next.ts | 454 | ⚪ INFO | TODO comment found |
| packages/next-codemod/transforms/next-image-experimental.ts | 137 | ⚪ INFO | TODO comment found |
| packages/next-codemod/transforms/next-image-experimental.ts | 326 | ⚪ INFO | TODO comment found |
| packages/next-mdx/mdx-rs-loader.js | 85 | ⚪ INFO | TODO comment found |
| packages/react-refresh-utils/internal/helpers.ts | 57 | ⚪ INFO | TODO comment found |
| run-tests.js | 972 | ⚪ INFO | TODO comment found |
| scripts/sync-react.js | 57 | ⚪ INFO | TODO comment found |
| scripts/sync-react.js | 156 | ⚪ INFO | TODO comment found |
| scripts/sync-react.js | 395 | ⚪ INFO | TODO comment found |
| test/.stats-app/stats-config.js | 159 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshLogBox-scss.test.ts | 6 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshLogBox.test.ts | 390 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshLogBox.test.ts | 1397 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 63 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 107 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/acceptance/ReactRefreshRequire.test.ts | 122 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/acceptance/ReactRefreshRequire.test.ts | 144 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/acceptance/ReactRefreshRequire.test.ts | 167 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 306 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 313 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 318 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 323 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 328 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 333 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 338 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 343 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 348 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 353 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 358 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 363 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 416 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 447 | ⚪ INFO | TODO comment found |
| test/development/acceptance/ReactRefreshRequire.test.ts | 492 | ⚪ INFO | TODO comment found |
| test/development/acceptance/error-recovery.test.ts | 755 | ⚪ INFO | TODO comment found |
| test/development/acceptance/error-recovery.test.ts | 818 | ⚪ INFO | TODO comment found |
| test/development/acceptance/error-recovery.test.ts | 884 | ⚪ INFO | TODO comment found |
| test/development/acceptance/hydration-error.test.ts | 44 | ⚪ INFO | TODO comment found |
| test/development/acceptance/hydration-error.test.ts | 495 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/acceptance/hydration-error.test.ts | 1176 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/acceptance-app/ReactRefreshLogBox-scss.test.ts | 7 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshLogBox.test.ts | 229 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshLogBox.test.ts | 1359 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/acceptance-app/ReactRefreshLogBox.test.ts | 1403 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/acceptance-app/ReactRefreshLogBox.test.ts | 1545 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshLogBox.test.ts | 1729 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/acceptance-app/ReactRefreshLogBox.test.ts | 1766 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 64 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 108 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 123 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 145 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 168 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 307 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 314 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 319 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 324 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 329 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 334 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 339 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 344 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 349 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 354 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 359 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 364 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 418 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 449 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/ReactRefreshRequire.test.ts | 494 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/app-hmr-changes.test.ts | 25 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/error-recovery.test.ts | 455 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/acceptance-app/error-recovery.test.ts | 587 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/hydration-error.test.ts | 26 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/rsc-build-errors.test.ts | 95 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/rsc-build-errors.test.ts | 175 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/rsc-build-errors.test.ts | 477 | ⚪ INFO | TODO comment found |
| test/development/acceptance-app/rsc-build-errors.test.ts | 512 | ⚪ INFO | TODO comment found |
| test/development/app-dir/build-error-logs/build-error-logs.test.ts | 24 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/app-dir/cache-components-dev-errors/cache-components-dev-errors.test.ts | 51 | ⚪ INFO | TODO comment found |
| test/development/app-dir/cache-components-dev-warmup/cache-components.dev-warmup.test.ts | 97 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/app-dir/cache-components-dev-warmup/cache-components.dev-warmup.test.ts | 166 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/app-dir/cache-components-dev-warmup/cache-components.dev-warmup.test.ts | 355 | ⚪ INFO | TODO comment found |
| test/development/app-dir/cache-components-dev-warmup/cache-components.dev-warmup.test.ts | 371 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/app-dir/cache-components-tasks/cache-components-tasks.test.ts | 83 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/app-dir/cache-components-tasks/cache-components-tasks.test.ts | 123 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/app-dir/externalize-node-binary-browser-error/externalize-node-binary-browser-error.test.ts | 8 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/app-dir/instant-navs-devtools/instant-navs-devtools.test.ts | 12 | ⚪ INFO | TODO comment found |
| test/development/app-dir/owner-stack/owner-stack.test.ts | 41 | ⚪ INFO | TODO comment found |
| test/development/app-dir/segment-explorer/segment-explorer.test.ts | 94 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/app-dir/serialize-circular-error/serialize-circular-error.test.ts | 30 | ⚪ INFO | TODO comment found |
| test/development/app-dir/server-components-hmr-cache/server-components-hmr-cache.test.ts | 41 | ⚪ INFO | TODO comment found |
| test/development/app-dir/server-components-hmr-cache/server-components-hmr-cache.test.ts | 58 | ⚪ INFO | TODO comment found |
| test/development/app-dir/server-components-hmr-cache/server-components-hmr-cache.test.ts | 75 | ⚪ INFO | TODO comment found |
| test/development/app-dir/server-components-hmr-cache/server-components-hmr-cache.test.ts | 94 | ⚪ INFO | TODO comment found |
| test/development/app-dir/server-components-hmr-cache/server-components-hmr-cache.test.ts | 186 | ⚪ INFO | TODO comment found |
| test/development/app-dir/server-components-hmr-cache/server-components-hmr-cache.test.ts | 214 | ⚪ INFO | TODO comment found |
| test/development/app-dir/server-navigation-error/server-navigation-error.test.ts | 51 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/app-dir/ssr-in-rsc/ssr-in-rsc.test.ts | 28 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/app-dir/ssr-in-rsc/ssr-in-rsc.test.ts | 225 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/development/app-dir/typed-env/typed-env-prod.test.ts | 43 | ⚪ INFO | TODO comment found |
| test/development/app-dir/typed-env/typed-env.test.ts | 82 | ⚪ INFO | TODO comment found |
| test/development/app-dir/use-cache-errors/use-cache-errors.test.ts | 23 | ⚪ INFO | TODO comment found |
| test/development/app-document-add-hmr/app-document-add-hmr.test.ts | 9 | ⚪ INFO | TODO comment found |
| test/development/app-document-add-hmr/app-document-add-hmr.test.ts | 46 | ⚪ INFO | TODO comment found |
| test/development/app-hmr/hmr.test.ts | 101 | ⚪ INFO | TODO comment found |
| test/development/app-hmr/hmr.test.ts | 113 | ⚪ INFO | TODO comment found |
| test/development/basic/hmr/run-error-recovery-hmr-test.util.ts | 367 | ⚪ INFO | TODO comment found |
| test/development/basic/next-dynamic/next-dynamic.test.ts | 270 | ⚪ INFO | TODO comment found |
| test/development/basic/node-builtins/middleware.js | 11 | ⚪ INFO | TODO comment found |
| test/development/basic/node-builtins/middleware.js | 58 | ⚪ INFO | TODO comment found |
| test/development/basic/node-builtins/middleware.js | 113 | ⚪ INFO | TODO comment found |
| test/development/basic/project-directory-rename.test.ts | 6 | ⚪ INFO | TODO comment found |
| test/development/basic/styled-components-disabled.test.ts | 5 | ⚪ INFO | TODO comment found |
| test/development/basic/styled-components-disabled.test.ts | 6 | ⚪ INFO | TODO comment found |
| test/development/middleware-dev-update/pages/index.js | 9 | ⚪ INFO | TODO comment found |
| test/development/middleware-errors/index.test.ts | 322 | ⚪ INFO | TODO comment found |
| test/development/middleware-errors/index.test.ts | 324 | ⚪ INFO | TODO comment found |
| test/development/next-font/build-errors.test.ts | 9 | ⚪ INFO | TODO comment found |
| test/development/next-font/font-loader-in-document-error.test.ts | 16 | ⚪ INFO | TODO comment found |
| test/development/typescript-plugin/client-boundary/client-boundary.test.ts | 89 | ⚪ INFO | TODO comment found |
| test/e2e/404-page-router/index.test.ts | 25 | ⚪ INFO | TODO comment found |
| test/e2e/404-page-router/index.test.ts | 53 | ⚪ INFO | TODO comment found |
| test/e2e/api-support/api-support.test.ts | 211 | ⚪ INFO | TODO comment found |

## Detailed Findings

### CODE_QUALITY

**Total:** 1339 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/actions/next-integration-stat/src/index.ts | 24 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 37 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 48 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 86 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 96 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 107 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 119 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 140 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 154 | 🟢 LOW | Debug console.log statement found |
| .github/actions/next-integration-stat/src/index.ts | 169 | 🟢 LOW | Debug console.log statement found |

*... and 1329 more*

### MAINTENANCE

**Total:** 500 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/25/input.js | 30 | 🟡 MEDIUM | FIXME comment indicating known issue |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/25/output.js | 19 | 🟡 MEDIUM | FIXME comment indicating known issue |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/28/input.js | 11 | 🟡 MEDIUM | FIXME comment indicating known issue |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/28/output.js | 4 | 🟡 MEDIUM | FIXME comment indicating known issue |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/30/input.js | 13 | 🟡 MEDIUM | FIXME comment indicating known issue |
| crates/next-custom-transforms/tests/fixture/server-actions/server-graph/30/output.js | 4 | 🟡 MEDIUM | FIXME comment indicating known issue |
| packages/next/src/server/node-environment-extensions/fast-set-immediate.external.test.ts | 979 | 🟡 MEDIUM | FIXME comment indicating known issue |
| packages/next/src/server/node-environment-extensions/fast-set-immediate.external.test.ts | 1045 | 🟡 MEDIUM | FIXME comment indicating known issue |
| packages/next/src/server/node-environment-extensions/fast-set-immediate.external.test.ts | 1214 | 🟡 MEDIUM | FIXME comment indicating known issue |
| packages/next/src/server/node-environment-extensions/fast-set-immediate.external.test.ts | 1220 | 🟡 MEDIUM | FIXME comment indicating known issue |

*... and 490 more*

### SECURITY

**Total:** 10 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| examples/api-routes-apollo-server/pages/api/graphql.ts | 18 | 🟠 HIGH | Hardcoded username/password detected |
| examples/api-routes-apollo-server/pages/api/graphql.ts | 19 | 🟠 HIGH | Hardcoded username/password detected |
| examples/with-firebase/pages/index.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| examples/with-i18n-rosetta/pages/[lng]/index.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| examples/with-i18n-rosetta/pages/dashboard.js | 25 | 🟠 HIGH | Hardcoded username/password detected |
| packages/next-routing/src/__tests__/conditions.test.ts | 691 | 🟠 HIGH | Hardcoded username/password detected |
| packages/next-routing/src/__tests__/dynamic-after-rewrites.test.ts | 143 | 🟠 HIGH | Hardcoded username/password detected |
| packages/next-routing/src/__tests__/normalize-next-data.test.ts | 337 | 🟠 HIGH | Hardcoded username/password detected |
| packages/next/src/compiled/crypto-browserify/index.js | 3 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| packages/next/src/compiled/crypto-browserify/index.js | 1 | 🟡 MEDIUM | Weak cryptographic algorithm detected |

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 68/100 (Tier C)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -120 | Fair ⚠️ |
| Code Quality | -1524 | Needs improvement ⚠️ |
| Test Coverage | +1 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 8 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 14.0%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

