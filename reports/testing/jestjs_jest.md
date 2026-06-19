# Repository Analysis Report: jestjs/jest

**Generated:** 2026-06-19 09:11:01 CDT

**Quality Score:** 92/100 (Tier A)

## Executive Summary

- **Overall Quality:** A (92/100)
- **Total Findings:** 250
- **Critical Issues:** 0
- **High Issues:** 1
- **Medium Issues:** 16
- **Low Issues:** 205
- **Files Scanned:** 3342

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 205 | Medium |
| security | 17 | High |
| maintenance | 28 | Medium |

## Repository Overview

- **Owner:** jestjs
- **Name:** jest
- **Description:** Delightful JavaScript Testing.
- **Primary Language:** TypeScript
- **Stars:** 45459
- **Forks:** 6664
- **Open Issues:** 241
- **Size:** 320246 KB
- **Created:** 2013-12-10
- **Last Updated:** 2026-06-19
- **Default Branch:** main

**Topics:** easy, expectation, facebook, immersive, javascript, painless, painless-javascript-testing, snapshot, testing

## Security Analysis

⚠️ **Found 17 security-related findings.**

### ⚠️ High Severity Issues (1)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| website/docusaurus.config.js | 308 | 🟠 HIGH | Potential API key detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 51.1% | Fair ⚠️ |
| Documentation | 1.2% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (205)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| e2e/__tests__/consoleLogOutputWhenRunInBand.test.ts | 20 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/executeTestsOnceInMpr.ts | 36 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/executeTestsOnceInMpr.ts | 39 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/executeTestsOnceInMpr.ts | 42 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/forceExit.test.ts | 23 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/isolateModules.test.ts | 33 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/jest.config.js.test.ts | 36 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/jest.config.ts.test.ts | 76 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/jestEnvironmentJsdom.test.ts | 20 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/jestEnvironmentJsdom.test.ts | 21 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/multipleConfigs.ts | 47 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/multipleConfigs.ts | 48 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/resolveConditions.test.ts | 22 | 🟢 LOW | Debug console.log statement found |
| e2e/before-all-filtered/__tests__/beforeAllFiltered.test.js | 10 | 🟢 LOW | Debug console.log statement found |
| e2e/before-all-filtered/__tests__/beforeAllFiltered.test.js | 13 | 🟢 LOW | Debug console.log statement found |
| e2e/before-all-filtered/__tests__/beforeAllFiltered.test.js | 16 | 🟢 LOW | Debug console.log statement found |
| e2e/before-all-filtered/__tests__/beforeAllFiltered.test.js | 19 | 🟢 LOW | Debug console.log statement found |
| e2e/before-all-filtered/__tests__/beforeAllFiltered.test.js | 22 | 🟢 LOW | Debug console.log statement found |
| e2e/before-all-filtered/__tests__/beforeAllFiltered.test.js | 28 | 🟢 LOW | Debug console.log statement found |
| e2e/before-all-filtered/__tests__/beforeAllFiltered.test.js | 31 | 🟢 LOW | Debug console.log statement found |
| e2e/before-all-filtered/__tests__/beforeAllFiltered.test.js | 34 | 🟢 LOW | Debug console.log statement found |
| e2e/before-all-filtered/__tests__/beforeAllFiltered.test.js | 37 | 🟢 LOW | Debug console.log statement found |
| e2e/before-all-filtered/__tests__/beforeAllFiltered.test.js | 40 | 🟢 LOW | Debug console.log statement found |
| e2e/before-each-queue/__tests__/beforeEachQueue.test.js | 10 | 🟢 LOW | Debug console.log statement found |
| e2e/before-each-queue/__tests__/beforeEachQueue.test.js | 14 | 🟢 LOW | Debug console.log statement found |
| e2e/before-each-queue/__tests__/beforeEachQueue.test.js | 17 | 🟢 LOW | Debug console.log statement found |
| e2e/before-each-queue/__tests__/beforeEachQueue.test.js | 22 | 🟢 LOW | Debug console.log statement found |
| e2e/before-each-queue/__tests__/beforeEachQueue.test.js | 25 | 🟢 LOW | Debug console.log statement found |
| e2e/circus-concurrent/__tests__/concurrent-mixed.test.js | 15 | 🟢 LOW | Debug console.log statement found |
| e2e/circus-concurrent/__tests__/concurrent-only.test.js | 15 | 🟢 LOW | Debug console.log statement found |
| e2e/circus-concurrent/__tests__/concurrent-skip.test.js | 15 | 🟢 LOW | Debug console.log statement found |
| e2e/circus-concurrent/__tests__/concurrent.test.js | 15 | 🟢 LOW | Debug console.log statement found |
| e2e/console/__tests__/console.test.js | 10 | 🟢 LOW | Debug console.log statement found |
| e2e/console-after-teardown/__tests__/console.test.js | 12 | 🟢 LOW | Debug console.log statement found |
| e2e/console-debugging/__tests__/console-debugging.test.js | 17 | 🟢 LOW | Debug console.log statement found |
| e2e/coverage-provider-v8/cjs-native-without-sourcemap/module.js | 11 | 🟢 LOW | Debug console.log statement found |
| e2e/coverage-provider-v8/cjs-native-without-sourcemap/module.js | 15 | 🟢 LOW | Debug console.log statement found |
| e2e/coverage-provider-v8/cjs-with-babel-transformer/module.ts | 13 | 🟢 LOW | Debug console.log statement found |
| e2e/coverage-provider-v8/cjs-with-babel-transformer/module.ts | 17 | 🟢 LOW | Debug console.log statement found |
| e2e/coverage-provider-v8/esm-native-without-sourcemap/module.js | 11 | 🟢 LOW | Debug console.log statement found |
| e2e/coverage-provider-v8/esm-native-without-sourcemap/module.js | 15 | 🟢 LOW | Debug console.log statement found |
| e2e/coverage-provider-v8/esm-with-custom-transformer/module.ts | 13 | 🟢 LOW | Debug console.log statement found |
| e2e/coverage-provider-v8/esm-with-custom-transformer/module.ts | 17 | 🟢 LOW | Debug console.log statement found |
| e2e/coverage-provider-v8/no-sourcemap/__tests__/Thing.test.js | 10 | 🟢 LOW | Debug console.log statement found |
| e2e/coverage-provider-v8/with-resetModules/module.js | 11 | 🟢 LOW | Debug console.log statement found |
| e2e/coverage-provider-v8/with-resetModules/module.js | 15 | 🟢 LOW | Debug console.log statement found |
| e2e/custom-jsdom-version/v27/__tests__/env.test.js | 9 | 🟢 LOW | Debug console.log statement found |
| e2e/custom-reporters/reporters/AssertionCountsReporter.js | 13 | 🟢 LOW | Debug console.log statement found |
| e2e/custom-reporters/reporters/AssertionCountsReporter.js | 23 | 🟢 LOW | Debug console.log statement found |
| e2e/custom-reporters/reporters/DefaultExportReporter.js | 18 | 🟢 LOW | Debug console.log statement found |
| e2e/custom-reporters/reporters/DefaultExportReporter.js | 22 | 🟢 LOW | Debug console.log statement found |
| e2e/custom-reporters/reporters/DefaultExportReporter.js | 26 | 🟢 LOW | Debug console.log statement found |
| e2e/custom-reporters/reporters/DefaultExportReporter.js | 30 | 🟢 LOW | Debug console.log statement found |
| e2e/custom-reporters/reporters/IncompleteReporter.js | 19 | 🟢 LOW | Debug console.log statement found |
| e2e/custom-reporters/reporters/IncompleteReporter.js | 20 | 🟢 LOW | Debug console.log statement found |
| e2e/custom-reporters/reporters/IncompleteReporter.js | 21 | 🟢 LOW | Debug console.log statement found |
| e2e/custom-reporters/reporters/IncompleteReporter.js | 22 | 🟢 LOW | Debug console.log statement found |
| e2e/custom-reporters/reporters/TestCaseStartReporter.js | 18 | 🟢 LOW | Debug console.log statement found |
| e2e/detect-open-handles/interval-code.js | 9 | 🟢 LOW | Debug console.log statement found |
| e2e/env-test/__tests__/env.test.js | 9 | 🟢 LOW | Debug console.log statement found |
| e2e/failureDetails-property/myreporter.js | 12 | 🟢 LOW | Debug console.log statement found |
| e2e/global-setup/invalidSetup.js | 8 | 🟢 LOW | Debug console.log statement found |
| e2e/global-setup/invalidSetupWithNamedExport.js | 9 | 🟢 LOW | Debug console.log statement found |
| e2e/global-setup/setupWithConfig.js | 9 | 🟢 LOW | Debug console.log statement found |
| e2e/global-setup/setupWithConfig.js | 10 | 🟢 LOW | Debug console.log statement found |
| e2e/global-setup/setupWithDefaultExport.js | 9 | 🟢 LOW | Debug console.log statement found |
| e2e/global-setup/setupWithDefaultExport.js | 10 | 🟢 LOW | Debug console.log statement found |
| e2e/global-teardown/invalidTeardown.js | 8 | 🟢 LOW | Debug console.log statement found |
| e2e/global-teardown/invalidTeardownWithNamedExport.js | 9 | 🟢 LOW | Debug console.log statement found |
| e2e/global-teardown/teardownWithConfig.js | 9 | 🟢 LOW | Debug console.log statement found |
| e2e/global-teardown/teardownWithConfig.js | 10 | 🟢 LOW | Debug console.log statement found |
| e2e/global-teardown/teardownWithDefaultExport.js | 9 | 🟢 LOW | Debug console.log statement found |
| e2e/global-teardown/teardownWithDefaultExport.js | 10 | 🟢 LOW | Debug console.log statement found |
| e2e/jasmine-async/__tests__/concurrent.test.js | 10 | 🟢 LOW | Debug console.log statement found |
| e2e/jasmine-async/__tests__/concurrentWithinDescribe.test.js | 12 | 🟢 LOW | Debug console.log statement found |
| e2e/jasmine-async/__tests__/concurrentWithinDescribe.test.js | 16 | 🟢 LOW | Debug console.log statement found |
| e2e/jasmine-async/__tests__/promiseAfterAll.test.js | 18 | 🟢 LOW | Debug console.log statement found |
| e2e/node-url-manual-mocks/__mocks__/fs.js | 8 | 🟢 LOW | Debug console.log statement found |
| e2e/override-globals/__tests__/index.js | 14 | 🟢 LOW | Debug console.log statement found |
| e2e/read-initial-options/readOptions.js | 17 | 🟢 LOW | Debug console.log statement found |
| e2e/run-programmatically-multiple-projects/run-jest.js | 18 | 🟢 LOW | Debug console.log statement found |
| e2e/runJest.ts | 207 | 🟢 LOW | Debug console.log statement found |
| e2e/runJest.ts | 208 | 🟢 LOW | Debug console.log statement found |
| e2e/test-environment-circus/CircusHandleTestEventEnvironment.js | 14 | 🟢 LOW | Debug console.log statement found |
| e2e/test-environment-circus-async/CircusAsyncHandleTestEventEnvironment.js | 19 | 🟢 LOW | Debug console.log statement found |
| e2e/test-environment-circus-async/CircusAsyncHandleTestEventEnvironment.js | 21 | 🟢 LOW | Debug console.log statement found |
| e2e/test-environment-circus-async/CircusAsyncHandleTestEventEnvironment.js | 23 | 🟢 LOW | Debug console.log statement found |
| e2e/test-environment-circus-async/CircusAsyncHandleTestEventEnvironment.js | 29 | 🟢 LOW | Debug console.log statement found |
| e2e/test-retries/__tests__/retryImmediately.test.js | 14 | 🟢 LOW | Debug console.log statement found |
| e2e/test-retries/__tests__/retryImmediately.test.js | 21 | 🟢 LOW | Debug console.log statement found |
| e2e/test-retries/__tests__/retryImmediatelyConcurrent.test.js | 14 | 🟢 LOW | Debug console.log statement found |
| e2e/test-retries/__tests__/retryImmediatelyConcurrent.test.js | 25 | 🟢 LOW | Debug console.log statement found |
| e2e/test-retries/__tests__/retryImmediatelyConcurrent.test.js | 32 | 🟢 LOW | Debug console.log statement found |
| e2e/transform/cache/transformer.js | 11 | 🟢 LOW | Debug console.log statement found |
| e2e/verbose-per-project/default-project/__tests__/index.test.js | 12 | 🟢 LOW | Debug console.log statement found |
| e2e/verbose-per-project/silent-project/__tests__/index.test.js | 11 | 🟢 LOW | Debug console.log statement found |
| e2e/watch-plugins/js/my-watch-plugin.js | 13 | 🟢 LOW | Debug console.log statement found |
| e2e/watch-plugins/js-type-module/my-watch-plugin.js | 13 | 🟢 LOW | Debug console.log statement found |
| e2e/wrong-env/__tests__/beforeTest.js | 15 | 🟢 LOW | Debug console.log statement found |
| e2e/wrong-env/__tests__/node.js | 18 | 🟢 LOW | Debug console.log statement found |
| e2e/wrong-env/__tests__/node.js | 27 | 🟢 LOW | Debug console.log statement found |
| e2e/wrong-env/__tests__/node.js | 35 | 🟢 LOW | Debug console.log statement found |
| examples/manual-mocks/__tests__/file_summarizer.test.js | 9 | 🟢 LOW | Debug console.log statement found |
| examples/timer/infiniteTimerGame.js | 4 | 🟢 LOW | Debug console.log statement found |
| examples/timer/infiniteTimerGame.js | 7 | 🟢 LOW | Debug console.log statement found |
| examples/timer/timerGame.js | 4 | 🟢 LOW | Debug console.log statement found |
| examples/timer/timerGame.js | 6 | 🟢 LOW | Debug console.log statement found |
| packages/create-jest/src/runCreate.ts | 89 | 🟢 LOW | Debug console.log statement found |
| packages/create-jest/src/runCreate.ts | 90 | 🟢 LOW | Debug console.log statement found |
| packages/create-jest/src/runCreate.ts | 101 | 🟢 LOW | Debug console.log statement found |
| packages/create-jest/src/runCreate.ts | 102 | 🟢 LOW | Debug console.log statement found |
| packages/create-jest/src/runCreate.ts | 117 | 🟢 LOW | Debug console.log statement found |
| packages/create-jest/src/runCreate.ts | 118 | 🟢 LOW | Debug console.log statement found |
| packages/create-jest/src/runCreate.ts | 145 | 🟢 LOW | Debug console.log statement found |
| packages/create-jest/src/runCreate.ts | 146 | 🟢 LOW | Debug console.log statement found |
| packages/create-jest/src/runCreate.ts | 157 | 🟢 LOW | Debug console.log statement found |
| packages/create-jest/src/runCreate.ts | 158 | 🟢 LOW | Debug console.log statement found |
| packages/diff-sequences/__benchmarks__/test.js | 76 | 🟢 LOW | Debug console.log statement found |
| packages/diff-sequences/__benchmarks__/test.js | 77 | 🟢 LOW | Debug console.log statement found |
| packages/diff-sequences/__benchmarks__/test.js | 81 | 🟢 LOW | Debug console.log statement found |
| packages/diff-sequences/__benchmarks__/test.js | 82 | 🟢 LOW | Debug console.log statement found |
| packages/diff-sequences/__benchmarks__/test.js | 83 | 🟢 LOW | Debug console.log statement found |
| packages/diff-sequences/__benchmarks__/test.js | 91 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__mocks__/testEventHandler.ts | 14 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__mocks__/testEventHandler.ts | 19 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__mocks__/testEventHandler.ts | 26 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__mocks__/testEventHandler.ts | 31 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__mocks__/testEventHandler.ts | 38 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__mocks__/testEventHandler.ts | 43 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__mocks__/testEventHandler.ts | 50 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__mocks__/testEventHandler.ts | 55 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__mocks__/testEventHandler.ts | 59 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__mocks__/testEventHandler.ts | 60 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/afterAll.test.ts | 52 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/afterAll.test.ts | 53 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/afterAll.test.ts | 54 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/afterAll.test.ts | 55 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/afterAll.test.ts | 57 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/afterAll.test.ts | 67 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/afterAll.test.ts | 68 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/afterAll.test.ts | 69 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/afterAll.test.ts | 78 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/afterAll.test.ts | 79 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/afterAll.test.ts | 89 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/afterAll.test.ts | 90 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/afterAll.test.ts | 91 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/baseTest.test.ts | 52 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/baseTest.test.ts | 56 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/baseTest.test.ts | 59 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/baseTest.test.ts | 78 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/baseTest.test.ts | 93 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/baseTest.test.ts | 97 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/baseTest.test.ts | 100 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/baseTest.test.ts | 121 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/baseTest.test.ts | 137 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/baseTest.test.ts | 141 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/baseTest.test.ts | 144 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/concurrent.test.ts | 17 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/hooks.test.ts | 13 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/hooks.test.ts | 17 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/hooks.test.ts | 29 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/hooks.test.ts | 43 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/hooks.test.ts | 46 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/hooks.test.ts | 61 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/hooks.test.ts | 62 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/hooks.test.ts | 65 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/hooks.test.ts | 66 | 🟢 LOW | Debug console.log statement found |
| packages/jest-circus/src/__tests__/hooks.test.ts | 67 | 🟢 LOW | Debug console.log statement found |
| packages/jest-config/src/normalize.ts | 464 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/CustomConsole.test.ts | 41 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/CustomConsole.test.ts | 132 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/CustomConsole.test.ts | 134 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/CustomConsole.test.ts | 141 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/CustomConsole.test.ts | 143 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/CustomConsole.test.ts | 154 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/CustomConsole.test.ts | 156 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/CustomConsole.test.ts | 165 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/CustomConsole.test.ts | 167 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/bufferedConsole.test.ts | 94 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/bufferedConsole.test.ts | 96 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/bufferedConsole.test.ts | 103 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/bufferedConsole.test.ts | 105 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/bufferedConsole.test.ts | 115 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/bufferedConsole.test.ts | 117 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/bufferedConsole.test.ts | 126 | 🟢 LOW | Debug console.log statement found |
| packages/jest-console/src/__tests__/bufferedConsole.test.ts | 128 | 🟢 LOW | Debug console.log statement found |
| packages/jest-core/src/runJest.ts | 264 | 🟢 LOW | Debug console.log statement found |
| packages/jest-core/src/runJest.ts | 276 | 🟢 LOW | Debug console.log statement found |
| packages/jest-runtime/src/internals/__tests__/TransformCache.test.ts | 37 | 🟢 LOW | Debug console.log statement found |
| packages/jest-runtime/src/internals/__tests__/TransformCache.test.ts | 38 | 🟢 LOW | Debug console.log statement found |
| packages/jest-runtime/src/internals/__tests__/TransformCache.test.ts | 108 | 🟢 LOW | Debug console.log statement found |
| packages/jest-worker/__benchmarks__/test.js | 141 | 🟢 LOW | Debug console.log statement found |
| packages/jest-worker/__benchmarks__/test.js | 158 | 🟢 LOW | Debug console.log statement found |
| packages/jest-worker/__benchmarks__/test.js | 159 | 🟢 LOW | Debug console.log statement found |
| packages/jest-worker/__benchmarks__/test.js | 175 | 🟢 LOW | Debug console.log statement found |
| packages/jest-worker/__benchmarks__/test.js | 176 | 🟢 LOW | Debug console.log statement found |
| packages/jest-worker/__benchmarks__/test.js | 177 | 🟢 LOW | Debug console.log statement found |
| packages/jest-worker/__benchmarks__/test.js | 179 | 🟢 LOW | Debug console.log statement found |
| packages/jest-worker/__benchmarks__/test.js | 180 | 🟢 LOW | Debug console.log statement found |
| packages/jest-worker/__benchmarks__/test.js | 185 | 🟢 LOW | Debug console.log statement found |
| packages/jest-worker/src/workers/__tests__/__fixtures__/EdgeCasesWorker.js | 14 | 🟢 LOW | Debug console.log statement found |
| packages/pretty-format/__benchmarks__/test.js | 123 | 🟢 LOW | Debug console.log statement found |
| packages/pretty-format/__benchmarks__/test.js | 126 | 🟢 LOW | Debug console.log statement found |
| packages/pretty-format/__benchmarks__/test.js | 128 | 🟢 LOW | Debug console.log statement found |
| website/fetchSupporters.js | 69 | 🟢 LOW | Debug console.log statement found |

### Maintenance Items (28)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| e2e/custom-reporters/reporters/DefaultExportReporter.js | 8 | ⚪ INFO | TODO comment found |
| packages/jest-config/src/normalize.ts | 612 | ⚪ INFO | TODO comment found |
| packages/jest-docblock/src/__tests__/index.test.ts | 13 | ⚪ INFO | TODO comment found |
| packages/jest-docblock/src/__tests__/index.test.ts | 15 | ⚪ INFO | TODO comment found |
| packages/jest-docblock/src/__tests__/index.test.ts | 104 | ⚪ INFO | TODO comment found |
| packages/jest-docblock/src/__tests__/index.test.ts | 106 | ⚪ INFO | TODO comment found |
| packages/jest-environment/src/index.ts | 60 | ⚪ INFO | TODO comment found |
| packages/jest-environment-jsdom-abstract/src/index.ts | 101 | ⚪ INFO | TODO comment found |
| packages/jest-environment-jsdom-abstract/src/index.ts | 109 | ⚪ INFO | TODO comment found |
| packages/jest-fake-timers/src/legacyFakeTimers.ts | 510 | ⚪ INFO | TODO comment found |
| packages/jest-fake-timers/src/modernFakeTimers.ts | 105 | ⚪ INFO | TODO comment found |
| packages/jest-fake-timers/src/modernFakeTimers.ts | 118 | ⚪ INFO | TODO comment found |
| packages/jest-haste-map/src/crawlers/node.ts | 204 | ⚪ INFO | TODO comment found |
| packages/jest-jasmine2/src/index.ts | 128 | ⚪ INFO | TODO comment found |
| packages/jest-message-util/src/index.ts | 361 | ⚪ INFO | TODO comment found |
| packages/jest-reporters/src/generateEmptyCoverage.ts | 83 | ⚪ INFO | TODO comment found |
| packages/jest-resolve/src/__mocks__/userResolverAsync.d.ts | 10 | ⚪ INFO | TODO comment found |
| packages/jest-runner/src/index.ts | 157 | ⚪ INFO | TODO comment found |
| packages/jest-runtime/src/internals/EsmLoader.ts | 932 | ⚪ INFO | TODO comment found |
| packages/jest-runtime/src/internals/V8CoverageCollector.ts | 80 | ⚪ INFO | TODO comment found |
| packages/jest-schemas/src/raw-types.ts | 61 | ⚪ INFO | TODO comment found |
| packages/jest-schemas/src/raw-types.ts | 88 | ⚪ INFO | TODO comment found |
| packages/jest-schemas/src/raw-types.ts | 297 | ⚪ INFO | TODO comment found |
| packages/jest-types/__typetests__/jest.test.ts | 595 | ⚪ INFO | TODO comment found |
| packages/jest-types/src/Config.ts | 333 | ⚪ INFO | TODO comment found |
| packages/jest-worker/src/workers/ChildProcessWorker.ts | 263 | ⚪ INFO | TODO comment found |
| packages/jest-worker/src/workers/ChildProcessWorker.ts | 330 | ⚪ INFO | TODO comment found |
| packages/jest-worker/src/workers/NodeThreadsWorker.ts | 339 | ⚪ INFO | TODO comment found |

## Detailed Findings

### CODE_QUALITY

**Total:** 205 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| e2e/__tests__/consoleLogOutputWhenRunInBand.test.ts | 20 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/executeTestsOnceInMpr.ts | 36 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/executeTestsOnceInMpr.ts | 39 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/executeTestsOnceInMpr.ts | 42 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/forceExit.test.ts | 23 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/isolateModules.test.ts | 33 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/jest.config.js.test.ts | 36 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/jest.config.ts.test.ts | 76 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/jestEnvironmentJsdom.test.ts | 20 | 🟢 LOW | Debug console.log statement found |
| e2e/__tests__/jestEnvironmentJsdom.test.ts | 21 | 🟢 LOW | Debug console.log statement found |

*... and 195 more*

### SECURITY

**Total:** 17 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| website/docusaurus.config.js | 308 | 🟠 HIGH | Potential API key detected |
| e2e/__tests__/hasteMapSha1.test.ts | 51 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| e2e/__tests__/hasteMapSha1.test.ts | 55 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| e2e/__tests__/hasteMapSha1.test.ts | 59 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| e2e/__tests__/hasteMapSha1.test.ts | 63 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| e2e/__tests__/hasteMapSha1.test.ts | 70 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| e2e/__tests__/hasteMapSha1.test.ts | 74 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| e2e/custom-haste-map/hasteMap.js | 42 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| packages/jest-haste-map/src/HasteFS.ts | 44 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| packages/jest-haste-map/src/__tests__/worker.test.js | 151 | 🟡 MEDIUM | Weak cryptographic algorithm detected |

*... and 7 more*

### MAINTENANCE

**Total:** 28 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| e2e/custom-reporters/reporters/DefaultExportReporter.js | 8 | ⚪ INFO | TODO comment found |
| packages/jest-config/src/normalize.ts | 612 | ⚪ INFO | TODO comment found |
| packages/jest-docblock/src/__tests__/index.test.ts | 13 | ⚪ INFO | TODO comment found |
| packages/jest-docblock/src/__tests__/index.test.ts | 15 | ⚪ INFO | TODO comment found |
| packages/jest-docblock/src/__tests__/index.test.ts | 104 | ⚪ INFO | TODO comment found |
| packages/jest-docblock/src/__tests__/index.test.ts | 106 | ⚪ INFO | TODO comment found |
| packages/jest-environment/src/index.ts | 60 | ⚪ INFO | TODO comment found |
| packages/jest-environment-jsdom-abstract/src/index.ts | 101 | ⚪ INFO | TODO comment found |
| packages/jest-environment-jsdom-abstract/src/index.ts | 109 | ⚪ INFO | TODO comment found |
| packages/jest-fake-timers/src/legacyFakeTimers.ts | 510 | ⚪ INFO | TODO comment found |

*... and 18 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 92/100 (Tier A)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -15 | Good ✅ |
| Code Quality | -285 | Needs improvement ⚠️ |
| Test Coverage | +5 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

