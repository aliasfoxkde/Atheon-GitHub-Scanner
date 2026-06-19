# Repository Analysis Report: react/react

**Generated:** 2026-06-19 08:35:58 CDT

**Quality Score:** 0/100 (Tier F)

## Executive Summary

- **Overall Quality:** F (0/100)
- **Total Findings:** 2383
- **Critical Issues:** 0
- **High Issues:** 4
- **Medium Issues:** 2
- **Low Issues:** 1366
- **Files Scanned:** 7272

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| security | 4 | High |
| maintenance | 1013 | Medium |
| code_quality | 1366 | Medium |

## Repository Overview

- **Owner:** react
- **Name:** react
- **Description:** The library for web and native user interfaces.
- **Primary Language:** JavaScript
- **Stars:** 245995
- **Forks:** 51073
- **Open Issues:** 1277
- **Size:** 996717 KB
- **Created:** 2013-05-24
- **Last Updated:** 2026-06-19
- **Default Branch:** main

**Topics:** declarative, frontend, javascript, library, react, ui

## Security Analysis

⚠️ **Found 4 security-related findings.**

### ⚠️ High Severity Issues (4)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| compiler/packages/react-mcp-server/src/utils/algolia.ts | 14 | 🟠 HIGH | Potential API key detected |
| packages/react-dom/src/__tests__/ReactMultiChildReconcile-test.js | 833 | 🟠 HIGH | Hardcoded username/password detected |
| packages/react-dom/src/__tests__/ReactMultiChildReconcile-test.js | 852 | 🟠 HIGH | Hardcoded username/password detected |
| packages/react-dom/src/__tests__/ReactMultiChildReconcile-test.js | 853 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 11.7% | Poor ❌ |
| Documentation | 4.5% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (1366)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| compiler/packages/babel-plugin-react-compiler/scripts/eslint-plugin-react-hooks-test-cases.js | 795 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/scripts/eslint-plugin-react-hooks-test-cases.js | 797 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/scripts/eslint-plugin-react-hooks-test-cases.js | 810 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/scripts/eslint-plugin-react-hooks-test-cases.js | 812 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/scripts/jest/makeTransform.ts | 38 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Flood/TypeUtils.ts | 49 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Flood/Types.ts | 725 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/CollectHoistablePropertyLoads.ts | 182 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/CollectHoistablePropertyLoads.ts | 184 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Inference/InferMutationAliasingEffects.ts | 648 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Inference/InferMutationAliasingEffects.ts | 655 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Inference/InferMutationAliasingEffects.ts | 658 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Inference/InferMutationAliasingEffects.ts | 682 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Inference/InferMutationAliasingEffects.ts | 1037 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Inference/InferMutationAliasingEffects.ts | 1201 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Inference/InferMutationAliasingEffects.ts | 1202 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/ReactiveScopes/MergeReactiveScopesThatInvalidateTogether.ts | 97 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/SSA/EnterSSA.ts | 157 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/SSA/EnterSSA.ts | 250 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Validation/ValidateExhaustiveDependencies.ts | 166 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Validation/ValidateExhaustiveDependencies.ts | 167 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Validation/ValidateExhaustiveDependencies.ts | 293 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Validation/ValidateExhaustiveDependencies.ts | 294 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Validation/ValidateExhaustiveDependencies.ts | 299 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Validation/ValidateExhaustiveDependencies.ts | 300 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Validation/ValidateExhaustiveDependencies.ts | 593 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/block-scoping-switch-dead-code.js | 7 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/block-scoping-switch-variable-scoping.js | 9 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/bug-ref-prefix-postfix-operator.js | 33 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/bug-ref-prefix-postfix-operator.js | 34 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/capturing-arrow-function-1.js | 4 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/capturing-function-1.js | 4 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/capturing-function-within-block.js | 6 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/capturing-member-expr.js | 4 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/capturing-nested-member-expr-in-nested-func.js | 5 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/capturing-nested-member-expr.js | 4 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/capturing-variable-in-nested-block.js | 5 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/capturing-variable-in-nested-function.js | 5 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/computed-call-evaluation-order.js | 4 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/computed-call-evaluation-order.js | 7 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/computed-call-evaluation-order.js | 10 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/computed-call-evaluation-order.js | 11 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/console-readonly.js | 6 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/console-readonly.js | 12 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/const-propagation-into-function-expression-primitive.js | 4 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/constant-propagation.js | 11 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/context-variable-reassigned-outside-of-lambda.js | 6 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/destructure-direct-reassignment.js | 5 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/destructuring-mixed-scope-and-local-variables-with-default.js | 33 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/destructuring-mixed-scope-declarations-and-locals.js | 25 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/dont-memoize-primitive-function-call-non-escaping-useMemo.js | 10 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/dont-memoize-primitive-function-call-non-escaping-useMemo.js | 15 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/dont-memoize-primitive-function-call-non-escaping.js | 7 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/dont-memoize-primitive-function-call-non-escaping.js | 12 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/dont-merge-overlapping-scopes-store-const-used-later.js | 7 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/drop-methodcall-usecallback.js | 5 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/early-return-no-declarations-reassignments-dependencies.js | 24 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/effect-derived-computations/effect-contains-local-function-call.js | 8 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/error.invalid-nested-function-reassign-local-variable-in-effect.js | 20 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/error.invalid-reassign-local-variable-in-effect.js | 19 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/error.invalid-reassign-local-variable-in-hook-argument.js | 20 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/error.invalid-reassign-local-variable-in-jsx-callback.js | 17 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/error.todo-invalid-jsx-in-catch-in-outer-try-with-finally.js | 14 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/error.todo-invalid-jsx-in-try-with-finally.js | 7 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/error.todo-kitchensink.js | 8 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/error.todo-missing-source-locations.js | 26 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/error.todo-missing-source-locations.js | 27 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/error.todo-missing-source-locations.js | 28 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/error.todo-missing-source-locations.js | 40 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/exhaustive-deps/compile-files-with-exhaustive-deps-violation-in-effects.js | 9 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/exhaustive-deps/error.invalid-exhaustive-deps.js | 19 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/exhaustive-deps/exhaustive-deps.js | 22 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/for-loop-let-undefined-decl.js | 14 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/hoisted-function-declaration.js | 15 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/hoisting-invalid-tdz-let.js | 3 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/hook-noAlias.js | 6 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/hook-property-load-local.js | 5 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/invalid-set-state-in-effect-verbose-derived-event.js | 9 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/invalid-useMemo-no-return-value.js | 4 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/invalid-useMemo-no-return-value.js | 7 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/lambda-return-expression.ts | 6 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/member-inc.js | 7 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/member-inc.js | 8 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/member-inc.js | 10 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/member-inc.js | 12 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/member-inc.js | 13 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/member-inc.js | 15 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/memoize-primitive-function-calls.js | 13 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/method-call-scope-merge-mutable-range-sync.js | 49 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/method-call-scope-merge-mutable-range-sync.js | 57 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/name-anonymous-functions-outline.js | 6 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/name-anonymous-functions.js | 25 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/name-anonymous-functions.js | 28 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/new-mutability/error.invalid-reassign-local-variable-in-jsx-callback.js | 18 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/new-mutability/potential-mutation-in-function-expression.js | 7 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/panresponder-ref-in-callback.js | 8 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/prop-capturing-function-1.js | 4 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/property-call-evaluation-order.js | 5 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/property-call-evaluation-order.js | 8 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/property-call-evaluation-order.js | 11 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/ref-current-aliased-no-added-to-dep.js | 6 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/ref-current-field-not-added-to-dep.js | 5 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/ref-current-not-added-to-dep.js | 4 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/ref-in-effect.js | 8 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/repro-dispatch-spread-event-marks-event-frozen.js | 23 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/repro-dont-memoize-array-with-capturing-map-after-hook.js | 8 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/repro-dont-memoize-array-with-mutable-map-after-hook.js | 8 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/repro-false-positive-ref-validation-in-use-effect.js | 16 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/repro-memoize-array-with-immutable-map-after-hook.js | 7 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/repro-retain-source-when-bailout.js | 11 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/repro-returned-inner-fn-reassigns-context.js | 21 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/repro-returned-inner-fn-reassigns-context.js | 24 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/repro-stale-closure-forward-reference.js | 21 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/rules-of-hooks/error.invalid-rules-of-hooks-9718e30b856c.js | 8 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/rules-of-hooks/error.invalid-rules-of-hooks-9718e30b856c.js | 10 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/rules-of-hooks/error.invalid-rules-of-hooks-f3d6c5e9c83d.js | 7 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/rules-of-hooks/error.invalid-rules-of-hooks-f3d6c5e9c83d.js | 9 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/type-alias-used-as-annotation.ts | 6 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/type-alias-used-as-annotation_.flow.js | 6 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/type-alias-used-as-variable-annotation.ts | 7 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/type-alias-used-as-variable-annotation_.flow.js | 7 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/useContext-read-context-in-callback.js | 9 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 508 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 522 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 541 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 542 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 543 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 544 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 545 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 546 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 549 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 551 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 552 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 555 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 560 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/__tests__/RustBackendComparison-test.ts | 562 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/eslint-plugin-react-compiler/src/shared/RunReactCompiler.ts | 286 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/react-compiler-healthcheck/src/checks/libraryCompat.ts | 31 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/react-compiler-healthcheck/src/checks/libraryCompat.ts | 33 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/react-compiler-healthcheck/src/checks/libraryCompat.ts | 36 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/react-compiler-healthcheck/src/checks/reactCompiler.ts | 147 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/react-compiler-healthcheck/src/checks/strictMode.ts | 31 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/react-compiler-healthcheck/src/checks/strictMode.ts | 33 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/react-forgive/server/src/index.ts | 64 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/react-forgive/server/src/index.ts | 91 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/react-forgive/server/src/index.ts | 125 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/react-mcp-server/src/tools/runtimePerf.ts | 143 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/main.ts | 24 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/minimize.ts | 2137 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/minimize.ts | 2292 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 127 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 133 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 138 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 148 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 167 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 172 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 176 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 219 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 225 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 234 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 237 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 239 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 253 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 258 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 263 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/reporter.ts | 269 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner-watch.ts | 170 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner-watch.ts | 177 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner-watch.ts | 234 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner-watch.ts | 257 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner-watch.ts | 324 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner-watch.ts | 327 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner-watch.ts | 328 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner-watch.ts | 351 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner-watch.ts | 355 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner-watch.ts | 360 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner-watch.ts | 361 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner-worker.ts | 128 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner-worker.ts | 130 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 144 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 209 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 219 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 224 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 231 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 232 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 235 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 241 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 270 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 277 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 284 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 290 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 291 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 294 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 300 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 362 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 364 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 415 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 619 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 654 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/runner.ts | 660 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/sprout/shared-runtime.ts | 167 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/sprout/shared-runtime.ts | 189 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/snap/src/sprout/shared-runtime.ts | 397 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/anonymize.js | 249 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/build-eslint-docs.js | 34 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/copyright.js | 50 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 57 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 102 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 116 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 211 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 220 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 232 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 243 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 248 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 270 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 280 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 283 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 288 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 305 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 309 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 332 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 333 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 334 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 335 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/enable-feature-flag.js | 336 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 57 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 456 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 461 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 470 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 558 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 560 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 561 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 562 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 565 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 571 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 574 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 577 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 585 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 593 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 597 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 600 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 607 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/profile-rust-port.ts | 636 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/release/publish.js | 114 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/release/publish.js | 179 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/release/publish.js | 201 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/release/publish.js | 233 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 102 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 447 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 451 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 455 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 462 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 480 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 481 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 485 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 494 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 496 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 508 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 509 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 512 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 513 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 514 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 518 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 523 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 524 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 541 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-e2e.ts | 551 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 118 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 205 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 473 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 496 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 633 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 639 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 643 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 646 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 647 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 649 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 652 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 660 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 675 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 679 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 684 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 687 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 694 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 699 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 704 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 711 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 712 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 713 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 714 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 717 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 718 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-internal-files.ts | 720 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 96 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 118 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 543 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 546 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 776 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 779 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 788 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 789 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 791 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 793 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 797 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 798 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 799 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 804 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 805 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 807 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 808 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 809 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 814 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 816 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 821 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 825 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/test-rust-port.ts | 826 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/update-commit-message.js | 132 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/update-commit-message.js | 136 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/update-commit-message.js | 139 | 🟢 LOW | Debug console.log statement found |
| compiler/scripts/update-commit-message.js | 144 | 🟢 LOW | Debug console.log statement found |
| fixtures/concurrent/time-slicing/src/Clock.js | 68 | 🟢 LOW | Debug console.log statement found |
| fixtures/devtools/scheduling-profiler/run.js | 33 | 🟢 LOW | Debug console.log statement found |
| fixtures/devtools/scheduling-profiler/run.js | 73 | 🟢 LOW | Debug console.log statement found |
| fixtures/dom/public/renderer.js | 120 | 🟢 LOW | Debug console.log statement found |
| fixtures/dom/src/react-loader.js | 89 | 🟢 LOW | Debug console.log statement found |
| fixtures/dom/src/react-loader.js | 154 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 30 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 36 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 43 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 50 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 51 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 58 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 59 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 66 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 70 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 75 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 79 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 83 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 88 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 92 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 174 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v10/index.js | 179 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 30 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 36 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 43 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 50 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 51 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 58 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 59 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 66 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 70 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 74 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 78 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 82 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 86 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v6/index.js | 90 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 30 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 36 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 43 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 50 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 51 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 58 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 59 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 66 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 70 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 74 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 78 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 82 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 86 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v7/index.js | 90 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 30 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 36 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 43 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 50 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 51 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 58 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 59 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 66 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 70 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 74 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 78 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 82 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 86 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v8/index.js | 90 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 30 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 36 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 43 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 50 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 51 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 58 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 59 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 66 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 70 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 75 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 79 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 83 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 88 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 92 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 174 | 🟢 LOW | Debug console.log statement found |
| fixtures/eslint-v9/index.js | 179 | 🟢 LOW | Debug console.log statement found |
| fixtures/fizz/scripts/build.js | 46 | 🟢 LOW | Debug console.log statement found |
| fixtures/fizz/scripts/build.js | 50 | 🟢 LOW | Debug console.log statement found |
| fixtures/fizz/server/server.js | 64 | 🟢 LOW | Debug console.log statement found |
| fixtures/fizz/server/server.js | 102 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/scripts/build.js | 72 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/scripts/build.js | 73 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/scripts/build.js | 74 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/scripts/build.js | 79 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/scripts/build.js | 85 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/scripts/build.js | 88 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/scripts/build.js | 96 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/scripts/build.js | 113 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/scripts/build.js | 120 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/scripts/build.js | 128 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/scripts/build.js | 135 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/scripts/build.js | 183 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/server/global.js | 277 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/server/region.js | 358 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/src/App.js | 189 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/src/Navigate.js | 10 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight/src/Navigate.js | 27 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-esm/server/global.js | 174 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-esm/server/region.js | 204 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench-server.js | 38 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench-server.js | 54 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench-server.js | 205 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench-server.js | 206 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench-server.js | 208 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench-server.js | 236 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench-server.js | 261 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench-server.js | 262 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench-server.js | 294 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench-server.js | 301 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench-server.js | 322 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 36 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 153 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 154 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 155 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 156 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 157 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 158 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 159 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 160 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 228 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 229 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 230 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 231 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 232 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 299 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 302 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 331 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 333 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 346 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 366 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 369 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 376 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 382 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 389 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 395 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 398 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 405 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 415 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 422 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 494 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 507 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 589 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 603 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 621 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 694 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/bench.js | 708 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/print-helpers.js | 30 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/print-helpers.js | 31 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/print-helpers.js | 36 | 🟢 LOW | Debug console.log statement found |
| fixtures/flight-ssr-bench/print-helpers.js | 50 | 🟢 LOW | Debug console.log statement found |
| fixtures/legacy-jsx-runtimes/lint-runtimes.js | 32 | 🟢 LOW | Debug console.log statement found |
| fixtures/legacy-jsx-runtimes/lint-runtimes.js | 45 | 🟢 LOW | Debug console.log statement found |
| fixtures/legacy-jsx-runtimes/lint-runtimes.js | 48 | 🟢 LOW | Debug console.log statement found |
| fixtures/legacy-jsx-runtimes/lint-runtimes.js | 53 | 🟢 LOW | Debug console.log statement found |
| fixtures/nesting/src/legacy/Greeting.js | 12 | 🟢 LOW | Debug console.log statement found |
| fixtures/packaging/build-all.js | 42 | 🟢 LOW | Debug console.log statement found |
| fixtures/packaging/build-all.js | 43 | 🟢 LOW | Debug console.log statement found |
| fixtures/packaging/build-all.js | 44 | 🟢 LOW | Debug console.log statement found |
| fixtures/packaging/build-all.js | 45 | 🟢 LOW | Debug console.log statement found |
| fixtures/packaging/build-all.js | 46 | 🟢 LOW | Debug console.log statement found |
| fixtures/packaging/build-all.js | 47 | 🟢 LOW | Debug console.log statement found |
| fixtures/packaging/build-all.js | 48 | 🟢 LOW | Debug console.log statement found |
| fixtures/packaging/systemjs-builder/dev/build.js | 7 | 🟢 LOW | Debug console.log statement found |
| fixtures/packaging/systemjs-builder/dev/build.js | 10 | 🟢 LOW | Debug console.log statement found |
| fixtures/packaging/systemjs-builder/dev/build.js | 11 | 🟢 LOW | Debug console.log statement found |
| fixtures/packaging/systemjs-builder/prod/build.js | 7 | 🟢 LOW | Debug console.log statement found |
| fixtures/packaging/systemjs-builder/prod/build.js | 10 | 🟢 LOW | Debug console.log statement found |
| fixtures/packaging/systemjs-builder/prod/build.js | 11 | 🟢 LOW | Debug console.log statement found |
| fixtures/ssr/server/index.js | 48 | 🟢 LOW | Debug console.log statement found |
| fixtures/ssr2/scripts/build.js | 46 | 🟢 LOW | Debug console.log statement found |
| fixtures/ssr2/scripts/build.js | 50 | 🟢 LOW | Debug console.log statement found |
| fixtures/ssr2/server/server.js | 51 | 🟢 LOW | Debug console.log statement found |
| fixtures/ssr2/server/server.js | 89 | 🟢 LOW | Debug console.log statement found |
| fixtures/stacks/Example.js | 20 | 🟢 LOW | Debug console.log statement found |
| fixtures/view-transition/server/index.js | 51 | 🟢 LOW | Debug console.log statement found |
| flow-typed/environments/node.js | 1626 | 🟢 LOW | Debug console.log statement found |
| flow-typed/environments/node.js | 1649 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 46 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 56 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 66 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 80 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 92 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 93 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 106 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 107 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 120 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 121 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 132 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 133 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 142 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 152 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 162 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 172 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 173 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 202 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 211 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 212 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 221 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 222 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 232 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 233 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 234 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 247 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 248 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 253 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 254 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 264 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 273 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 282 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 291 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 300 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 301 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 310 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 311 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 320 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 321 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 330 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 339 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 348 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 357 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 366 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 375 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 384 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 404 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 415 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 426 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 436 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 450 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 463 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 487 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 513 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 524 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 539 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 549 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 559 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 568 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 578 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 589 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 590 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 600 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 610 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 638 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 639 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 640 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 641 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 654 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 655 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 656 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 657 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 658 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 659 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 660 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 661 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 704 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 705 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 706 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 707 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 714 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 715 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 716 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 717 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 718 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 719 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 798 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 816 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 833 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 893 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 926 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 927 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 928 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 941 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 942 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 943 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 974 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 977 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 980 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 983 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 994 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 997 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1000 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1003 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1014 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1017 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1020 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1040 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1065 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1069 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1072 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1483 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1493 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1508 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1523 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1539 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1542 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1573 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1592 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1605 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1620 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1640 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1641 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1663 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1664 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1678 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1693 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1706 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1721 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1734 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1749 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1763 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1779 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1838 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1854 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1869 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1885 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 1984 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2002 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2019 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2037 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2054 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2073 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2091 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2092 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2111 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2112 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2128 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2129 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2146 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2147 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2162 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2179 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2195 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2196 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2217 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2218 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2233 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2234 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2250 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2251 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2265 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2266 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2282 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2283 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2461 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2476 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2501 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2516 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2563 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2588 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2603 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2620 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2642 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2661 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2679 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2698 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2713 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2732 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2750 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2765 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2784 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2808 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2809 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2825 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2826 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2841 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2842 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2858 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2859 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2875 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2891 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2907 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2923 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2939 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2955 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2968 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2983 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2997 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2998 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3014 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3015 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3033 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3048 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3061 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3062 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3077 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3078 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3097 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3112 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3125 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3126 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3141 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3142 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3156 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3172 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3187 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3204 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3243 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3258 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3271 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3272 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3287 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3288 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3302 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3319 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3333 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3350 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3364 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3381 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3395 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3396 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3397 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3413 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3414 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3415 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3429 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3430 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3431 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3447 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3448 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3449 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3462 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3465 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3468 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3471 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3474 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3477 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3480 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3495 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3498 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3501 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3504 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3507 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3510 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3513 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3530 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3533 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3536 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3539 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3542 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3545 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3548 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3565 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3568 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3571 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3574 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3577 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3580 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3583 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3600 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3603 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3606 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3609 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3612 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3615 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3618 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3635 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3638 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3641 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3644 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3647 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3650 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3653 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3670 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3673 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3676 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3679 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3682 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3685 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3688 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3701 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3704 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3707 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3710 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3726 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3729 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3732 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3735 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3752 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3755 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3758 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3761 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3778 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3781 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3784 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3787 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3801 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3821 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3835 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3852 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3872 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3889 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4016 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4036 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4054 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4076 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4094 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4116 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4132 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4150 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4236 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4254 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4632 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4633 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4693 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4694 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4909 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4910 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4911 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4912 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4931 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4932 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4933 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4934 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4979 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 4998 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5017 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5042 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5200 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5204 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5207 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5238 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5242 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5245 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5278 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5282 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5285 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5318 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5322 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5325 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5358 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5362 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5365 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5399 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5403 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5406 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5442 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5446 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5449 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5485 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5489 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5492 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5525 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5529 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5532 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5566 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5570 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5573 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5609 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5613 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5616 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5652 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5656 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5659 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5790 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5793 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5796 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5837 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5840 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5843 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5889 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5892 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5895 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5943 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5946 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5949 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5992 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5995 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 5998 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6034 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6037 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6066 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6069 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6095 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6098 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6133 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6137 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6161 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6165 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6187 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6674 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6696 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6713 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6732 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6747 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6766 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7051 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7068 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7083 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7100 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7115 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7132 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7150 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7170 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7185 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7202 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7217 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7234 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7262 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7280 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7289 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7305 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7557 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7576 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7595 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7616 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7637 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7655 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7657 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7675 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7693 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7711 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7729 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7747 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7765 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7784 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7802 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7805 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7941 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7956 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7970 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 7995 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8037 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8046 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8055 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8064 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8074 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8087 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8103 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8119 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8137 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8429 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8447 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8461 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8491 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8517 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8532 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRulesOfHooks-test.js | 578 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRulesOfHooks-test.js | 747 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRulesOfHooks-test.js | 766 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRulesOfHooks-test.js | 1364 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRulesOfHooks-test.js | 1366 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRulesOfHooks-test.js | 1379 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRulesOfHooks-test.js | 1381 | 🟢 LOW | Debug console.log statement found |
| packages/eslint-plugin-react-hooks/src/rules/ExhaustiveDeps.ts | 170 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 206 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 215 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 225 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 233 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 344 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 351 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 352 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 353 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 360 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 399 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 400 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 420 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 421 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 441 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 442 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 462 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 463 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 464 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 484 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 485 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 486 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 506 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 507 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 508 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 528 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 529 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 530 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 551 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 552 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 553 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 574 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 588 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 589 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 606 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 620 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 621 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 638 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 639 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 668 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 710 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 745 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 779 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 798 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 924 | 🟢 LOW | Debug console.log statement found |
| packages/internal-test-utils/__tests__/ReactInternalTestUtils-test.js | 1667 | 🟢 LOW | Debug console.log statement found |
| packages/react/src/__tests__/ReactStrictMode-test.js | 1078 | 🟢 LOW | Debug console.log statement found |
| packages/react/src/__tests__/ReactStrictMode-test.js | 1106 | 🟢 LOW | Debug console.log statement found |
| packages/react/src/__tests__/ReactStrictMode-test.js | 1136 | 🟢 LOW | Debug console.log statement found |
| packages/react/src/__tests__/ReactStrictMode-test.js | 1167 | 🟢 LOW | Debug console.log statement found |
| packages/react/src/__tests__/ReactStrictMode-test.js | 1223 | 🟢 LOW | Debug console.log statement found |
| packages/react/src/__tests__/ReactStrictMode-test.js | 1240 | 🟢 LOW | Debug console.log statement found |
| packages/react/src/__tests__/ReactStrictMode-test.js | 1267 | 🟢 LOW | Debug console.log statement found |
| packages/react/src/__tests__/ReactStrictMode-test.js | 1270 | 🟢 LOW | Debug console.log statement found |
| packages/react-client/src/__tests__/ReactFlight-test.js | 3631 | 🟢 LOW | Debug console.log statement found |
| packages/react-client/src/__tests__/ReactFlight-test.js | 3751 | 🟢 LOW | Debug console.log statement found |
| packages/react-client/src/__tests__/ReactFlight-test.js | 3804 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-core/src/backend.js | 56 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-core/src/backend.js | 317 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-core/src/backend.js | 318 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-core/src/standalone.js | 80 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-core/src/standalone.js | 88 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/build.js | 150 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/chrome/build.js | 50 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/chrome/build.js | 51 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/chrome/build.js | 52 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/chrome/build.js | 53 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/deploy.js | 48 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/edge/build.js | 26 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/edge/build.js | 28 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/edge/build.js | 29 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/edge/build.js | 30 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/edge/build.js | 31 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/edge/build.js | 32 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/edge/build.js | 34 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/edge/build.js | 35 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/edge/build.js | 36 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/firefox/build.js | 11 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/firefox/build.js | 12 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/firefox/build.js | 13 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/firefox/build.js | 14 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/firefox/build.js | 15 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/firefox/build.js | 18 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/firefox/build.js | 23 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/firefox/build.js | 28 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/firefox/build.js | 29 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/firefox/build.js | 30 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/src/background/index.js | 171 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/src/background/index.js | 183 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/src/background/messageHandlers.js | 90 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-extensions/src/main/fetchFileWithCaching.js | 10 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 51 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 92 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 129 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 134 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 195 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 200 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 263 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 317 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 372 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 413 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 441 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 446 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 488 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 493 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 524 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 567 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 599 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 644 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 737 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/console-test.js | 771 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/__tests__/inspectedElement-test.js | 546 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/agent.js | 51 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 778 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 791 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 2060 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 2124 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 2152 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 2173 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 3910 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 6687 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 6688 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 6982 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 6985 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 6988 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 6992 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 6995 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/legacy/renderer.js | 395 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/legacy/renderer.js | 729 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/legacy/renderer.js | 730 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/legacy/renderer.js | 1034 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/legacy/renderer.js | 1037 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/legacy/renderer.js | 1040 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/legacy/renderer.js | 1044 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/backend/legacy/renderer.js | 1047 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/devtools/store.js | 101 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/devtools/store.js | 2256 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/devtools/views/Profiler/CommitTreeBuilder.js | 42 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/devtools/views/Profiler/CommitTreeBuilder.js | 541 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/devtools/views/hooks.js | 165 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/devtools/views/hooks.js | 201 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/dynamicImportCache.js | 57 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/dynamicImportCache.js | 109 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/dynamicImportCache.js | 127 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/dynamicImportCache.js | 136 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/dynamicImportCache.js | 150 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hookNamesCache.js | 86 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hookNamesCache.js | 157 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hookNamesCache.js | 187 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hookNamesCache.js | 207 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/loadSourceAndMetadata.js | 133 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/loadSourceAndMetadata.js | 160 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/loadSourceAndMetadata.js | 198 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/loadSourceAndMetadata.js | 282 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/loadSourceAndMetadata.js | 331 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/loadSourceAndMetadata.js | 341 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/loadSourceAndMetadata.js | 350 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/loadSourceAndMetadata.js | 386 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/loadSourceAndMetadata.js | 403 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/loadSourceAndMetadata.js | 503 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/parseSourceAndMetadata.js | 87 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/parseSourceAndMetadata.js | 189 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/parseSourceAndMetadata.js | 308 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/parseSourceAndMetadata.js | 316 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/parseSourceAndMetadata.js | 328 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/parseSourceAndMetadata.js | 342 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/parseSourceAndMetadata.js | 370 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/hooks/parseHookNames/parseSourceAndMetadata.js | 413 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shared/src/utils.js | 456 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shell/src/multi/devtools.js | 42 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shell/src/multi/devtools.js | 49 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shell/src/perf-regression/apps/LargeSubtree.js | 26 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shell/webpack-server.js | 242 | 🟢 LOW | Debug console.log statement found |
| packages/react-devtools-shell/webpack-server.js | 245 | 🟢 LOW | Debug console.log statement found |
| packages/react-dom/src/__tests__/ReactDOMServerPartialHydration-test.internal.js | 4164 | 🟢 LOW | Debug console.log statement found |
| packages/react-dom/src/__tests__/ReactDOMServerPartialHydration-test.internal.js | 4206 | 🟢 LOW | Debug console.log statement found |
| packages/react-dom/src/__tests__/ReactDOMServerPartialHydration-test.internal.js | 4247 | 🟢 LOW | Debug console.log statement found |
| packages/react-dom/src/__tests__/ReactDOMServerPartialHydration-test.internal.js | 4288 | 🟢 LOW | Debug console.log statement found |
| packages/react-dom/src/__tests__/ReactServerRendering-test.js | 1069 | 🟢 LOW | Debug console.log statement found |
| packages/react-dom/src/__tests__/utils/ReactDOMServerIntegrationTestUtils.js | 107 | 🟢 LOW | Debug console.log statement found |
| packages/react-dom/src/__tests__/utils/ReactDOMServerIntegrationTestUtils.js | 111 | 🟢 LOW | Debug console.log statement found |
| packages/react-dom/src/__tests__/utils/ReactDOMServerIntegrationTestUtils.js | 113 | 🟢 LOW | Debug console.log statement found |
| packages/react-noop-renderer/src/createReactNoop.js | 1540 | 🟢 LOW | Debug console.log statement found |
| packages/react-noop-renderer/src/createReactNoop.js | 1663 | 🟢 LOW | Debug console.log statement found |
| packages/react-reconciler/src/__tests__/ReactSuspenseFuzz-test.internal.js | 333 | 🟢 LOW | Debug console.log statement found |
| scripts/bench/runner.js | 46 | 🟢 LOW | Debug console.log statement found |
| scripts/bench/runner.js | 50 | 🟢 LOW | Debug console.log statement found |
| scripts/bench/runner.js | 66 | 🟢 LOW | Debug console.log statement found |
| scripts/bench/runner.js | 71 | 🟢 LOW | Debug console.log statement found |
| scripts/bench/runner.js | 84 | 🟢 LOW | Debug console.log statement found |
| scripts/bench/runner.js | 92 | 🟢 LOW | Debug console.log statement found |
| scripts/bench/runner.js | 105 | 🟢 LOW | Debug console.log statement found |
| scripts/bench/runner.js | 118 | 🟢 LOW | Debug console.log statement found |
| scripts/bench/stats.js | 109 | 🟢 LOW | Debug console.log statement found |
| scripts/ci/download_devtools_regression_build.js | 31 | 🟢 LOW | Debug console.log statement found |
| scripts/ci/download_devtools_regression_build.js | 35 | 🟢 LOW | Debug console.log statement found |
| scripts/ci/download_devtools_regression_build.js | 63 | 🟢 LOW | Debug console.log statement found |
| scripts/ci/download_devtools_regression_build.js | 80 | 🟢 LOW | Debug console.log statement found |
| scripts/ci/download_devtools_regression_build.js | 102 | 🟢 LOW | Debug console.log statement found |
| scripts/ci/download_devtools_regression_build.js | 107 | 🟢 LOW | Debug console.log statement found |
| scripts/ci/download_devtools_regression_build.js | 119 | 🟢 LOW | Debug console.log statement found |
| scripts/ci/download_devtools_regression_build.js | 124 | 🟢 LOW | Debug console.log statement found |
| scripts/ci/download_devtools_regression_build.js | 138 | 🟢 LOW | Debug console.log statement found |
| scripts/ci/download_devtools_regression_build.js | 146 | 🟢 LOW | Debug console.log statement found |
| scripts/ci/run_devtools_e2e_tests.js | 33 | 🟢 LOW | Debug console.log statement found |
| scripts/ci/run_devtools_e2e_tests.js | 39 | 🟢 LOW | Debug console.log statement found |
| scripts/ci/run_devtools_e2e_tests.js | 150 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 27 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 28 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 32 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 40 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 41 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 48 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 49 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 68 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 69 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 96 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 97 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 98 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 99 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 100 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 101 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 102 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 103 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 104 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 105 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 106 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 107 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 108 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 109 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 138 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 139 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 142 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 143 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 144 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 145 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 148 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 174 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 175 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 176 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 177 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 178 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 179 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 198 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 213 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 234 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 235 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/build-and-test.js | 236 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 37 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 38 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 42 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 61 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 62 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 67 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 75 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 76 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 77 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 78 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 91 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 92 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 93 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 199 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 200 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 201 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 205 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 206 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 209 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 210 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 211 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 212 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 213 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 214 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 215 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 218 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 219 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 239 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 256 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/prepare-release.js | 278 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 28 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 29 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 42 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 43 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 46 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 51 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 52 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 53 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 54 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 55 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 56 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 57 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 69 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 92 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 93 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 104 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/publish-release.js | 105 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/utils.js | 40 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/utils.js | 66 | 🟢 LOW | Debug console.log statement found |
| scripts/devtools/utils.js | 74 | 🟢 LOW | Debug console.log statement found |
| scripts/error-codes/extract-errors.js | 24 | 🟢 LOW | Debug console.log statement found |
| scripts/error-codes/extract-errors.js | 57 | 🟢 LOW | Debug console.log statement found |
| scripts/eslint/index.js | 90 | 🟢 LOW | Debug console.log statement found |
| scripts/eslint-rules/__tests__/no-production-logging-test.internal.js | 272 | 🟢 LOW | Debug console.log statement found |
| scripts/flags/flags.js | 484 | 🟢 LOW | Debug console.log statement found |
| scripts/flags/flags.js | 486 | 🟢 LOW | Debug console.log statement found |
| scripts/flags/flags.js | 553 | 🟢 LOW | Debug console.log statement found |
| scripts/flags/flags.js | 560 | 🟢 LOW | Debug console.log statement found |
| scripts/flags/flags.js | 567 | 🟢 LOW | Debug console.log statement found |
| scripts/flags/flags.js | 574 | 🟢 LOW | Debug console.log statement found |
| scripts/flags/flags.js | 581 | 🟢 LOW | Debug console.log statement found |
| scripts/flags/flags.js | 592 | 🟢 LOW | Debug console.log statement found |
| scripts/flow/createFlowConfigs.js | 137 | 🟢 LOW | Debug console.log statement found |
| scripts/flow/runFlow.js | 63 | 🟢 LOW | Debug console.log statement found |
| scripts/flow/runFlow.js | 75 | 🟢 LOW | Debug console.log statement found |
| scripts/flow/runFlow.js | 78 | 🟢 LOW | Debug console.log statement found |
| scripts/jest/jest-cli.js | 283 | 🟢 LOW | Debug console.log statement found |
| scripts/jest/jest-cli.js | 388 | 🟢 LOW | Debug console.log statement found |
| scripts/jest/jest-cli.js | 391 | 🟢 LOW | Debug console.log statement found |
| scripts/jest/jest-cli.js | 401 | 🟢 LOW | Debug console.log statement found |
| scripts/jest/jest-cli.js | 402 | 🟢 LOW | Debug console.log statement found |
| scripts/jest/spec-equivalence-reporter/equivalenceReporter.js | 12 | 🟢 LOW | Debug console.log statement found |
| scripts/prettier/index.js | 91 | 🟢 LOW | Debug console.log statement found |
| scripts/prettier/index.js | 105 | 🟢 LOW | Debug console.log statement found |
| scripts/prettier/index.js | 110 | 🟢 LOW | Debug console.log statement found |
| scripts/prettier/index.js | 111 | 🟢 LOW | Debug console.log statement found |
| scripts/release/build-release-locally-commands/confirm-automated-testing.js | 12 | 🟢 LOW | Debug console.log statement found |
| scripts/release/download-experimental-build-commands/print-summary.js | 24 | 🟢 LOW | Debug console.log statement found |
| scripts/release/download-experimental-build.js | 53 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/confirm-version-and-tags.js | 10 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/confirm-version-and-tags.js | 23 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/confirm-version-and-tags.js | 26 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/confirm-version-and-tags.js | 27 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/publish-to-npm.js | 22 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/publish-to-npm.js | 28 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/publish-to-npm.js | 38 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/publish-to-npm.js | 39 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/publish-to-npm.js | 45 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/validate-skip-packages.js | 38 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/validate-tags.js | 25 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/validate-tags.js | 31 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/validate-tags.js | 37 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish-commands/validate-tags.js | 45 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish.js | 42 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish.js | 68 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish.js | 69 | 🟢 LOW | Debug console.log statement found |
| scripts/release/publish.js | 75 | 🟢 LOW | Debug console.log statement found |
| scripts/release/shared-commands/download-build-artifacts.js | 11 | 🟢 LOW | Debug console.log statement found |
| scripts/release/shared-commands/download-build-artifacts.js | 58 | 🟢 LOW | Debug console.log statement found |
| scripts/release/shared-commands/download-build-artifacts.js | 78 | 🟢 LOW | Debug console.log statement found |
| scripts/release/shared-commands/download-build-artifacts.js | 100 | 🟢 LOW | Debug console.log statement found |
| scripts/release/shared-commands/download-build-artifacts.js | 172 | 🟢 LOW | Debug console.log statement found |
| scripts/release/shared-commands/download-build-artifacts.js | 185 | 🟢 LOW | Debug console.log statement found |
| scripts/release/shared-commands/download-build-artifacts.js | 193 | 🟢 LOW | Debug console.log statement found |
| scripts/release/shared-commands/download-build-artifacts.js | 201 | 🟢 LOW | Debug console.log statement found |
| scripts/release/shared-commands/download-build-artifacts.js | 207 | 🟢 LOW | Debug console.log statement found |
| scripts/release/shared-commands/print-prerelease-summary.js | 40 | 🟢 LOW | Debug console.log statement found |
| scripts/release/snapshot-test.js | 81 | 🟢 LOW | Debug console.log statement found |
| scripts/release/snapshot-test.js | 88 | 🟢 LOW | Debug console.log statement found |
| scripts/release/snapshot-test.js | 90 | 🟢 LOW | Debug console.log statement found |
| scripts/release/snapshot-test.js | 91 | 🟢 LOW | Debug console.log statement found |
| scripts/release/snapshot-test.js | 94 | 🟢 LOW | Debug console.log statement found |
| scripts/release/snapshot-test.js | 97 | 🟢 LOW | Debug console.log statement found |
| scripts/release/utils.js | 39 | 🟢 LOW | Debug console.log statement found |
| scripts/release/utils.js | 154 | 🟢 LOW | Debug console.log statement found |
| scripts/release/utils.js | 184 | 🟢 LOW | Debug console.log statement found |
| scripts/rollup/build.js | 729 | 🟢 LOW | Debug console.log statement found |
| scripts/rollup/build.js | 732 | 🟢 LOW | Debug console.log statement found |
| scripts/rollup/build.js | 736 | 🟢 LOW | Debug console.log statement found |
| scripts/rollup/build.js | 742 | 🟢 LOW | Debug console.log statement found |
| scripts/rollup/build.js | 747 | 🟢 LOW | Debug console.log statement found |
| scripts/rollup/build.js | 751 | 🟢 LOW | Debug console.log statement found |
| scripts/rollup/build.js | 826 | 🟢 LOW | Debug console.log statement found |
| scripts/rollup/build.js | 892 | 🟢 LOW | Debug console.log statement found |
| scripts/rollup/sync.js | 13 | 🟢 LOW | Debug console.log statement found |
| scripts/rollup/sync.js | 16 | 🟢 LOW | Debug console.log statement found |
| scripts/rollup/validate/index.js | 74 | 🟢 LOW | Debug console.log statement found |
| scripts/rollup/validate/index.js | 77 | 🟢 LOW | Debug console.log statement found |
| scripts/rollup/validate/index.js | 82 | 🟢 LOW | Debug console.log statement found |
| scripts/shared/listChangedFiles.js | 12 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/danger.js | 35 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/eslint.js | 14 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/eslint.js | 16 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/eslint.js | 22 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/eslint.js | 24 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/flow.js | 25 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/flow.js | 30 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/flow.js | 33 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/flow.js | 36 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/flow.js | 37 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/flow.js | 40 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/flow.js | 43 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/flow.js | 44 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/flow.js | 45 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/flow.js | 50 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/generate-changelog/index.js | 21 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/generate-changelog/index.js | 82 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/generate-changelog/index.js | 148 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/linc.js | 14 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/linc.js | 19 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/linc.js | 21 | 🟢 LOW | Debug console.log statement found |
| scripts/tasks/version-check.js | 31 | 🟢 LOW | Debug console.log statement found |

### Maintenance Items (1013)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .eslintrc.js | 269 | ⚪ INFO | TODO comment found |
| compiler/apps/playground/colors.js | 51 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Flood/TypeUtils.ts | 21 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Flood/TypeUtils.ts | 27 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Flood/Types.ts | 82 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Flood/Types.ts | 706 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/BuildHIR.ts | 252 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/BuildHIR.ts | 4188 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/BuildHIR.ts | 4453 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/Globals.ts | 272 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/Globals.ts | 291 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/Globals.ts | 373 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/Globals.ts | 623 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/HIR.ts | 606 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/ObjectShape.ts | 681 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Inference/DropManualMemoization.ts | 75 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Inference/InferMutationAliasingEffects.ts | 110 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Inference/InferMutationAliasingEffects.ts | 2078 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Inference/InferMutationAliasingEffects.ts | 2085 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Inference/InferMutationAliasingRanges.ts | 314 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Optimization/ConstantPropagation.ts | 611 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Optimization/OutlineFunctions.ts | 28 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Validation/ValidateExhaustiveDependencies.ts | 75 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/error.todo-for-loop-with-context-variable-iterator.js | 13 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/fast-refresh-refresh-on-const-changes-dev.js | 24 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/new-mutability/ssa-renaming-ternary-destruction.js | 5 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/preserve-memo-validation/todo-ensure-constant-prop-decls-get-removed.ts | 5 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/rules-of-hooks/error.invalid-call-phi-possibly-hook.js | 7 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/__tests__/fixtures/compiler/ssa-nested-partial-phi.js | 7 | ⚪ INFO | TODO comment found |
| compiler/packages/eslint-plugin-react-compiler/src/shared/RunReactCompiler.ts | 65 | ⚪ INFO | TODO comment found |
| compiler/packages/snap/src/SproutTodoFilter.ts | 38 | ⚪ INFO | TODO comment found |
| compiler/packages/snap/src/SproutTodoFilter.ts | 40 | ⚪ INFO | TODO comment found |
| compiler/packages/snap/src/SproutTodoFilter.ts | 42 | ⚪ INFO | TODO comment found |
| compiler/packages/snap/src/SproutTodoFilter.ts | 44 | ⚪ INFO | TODO comment found |
| compiler/packages/snap/src/SproutTodoFilter.ts | 381 | ⚪ INFO | TODO comment found |
| compiler/packages/snap/src/SproutTodoFilter.ts | 386 | ⚪ INFO | TODO comment found |
| fixtures/attribute-behavior/src/attributes.js | 372 | ⚪ INFO | TODO comment found |
| fixtures/attribute-behavior/src/attributes.js | 759 | ⚪ INFO | TODO comment found |
| fixtures/attribute-behavior/src/attributes.js | 898 | ⚪ INFO | TODO comment found |
| fixtures/attribute-behavior/src/attributes.js | 994 | ⚪ INFO | TODO comment found |
| fixtures/attribute-behavior/src/attributes.js | 1125 | ⚪ INFO | TODO comment found |
| fixtures/attribute-behavior/src/attributes.js | 1234 | ⚪ INFO | TODO comment found |
| fixtures/attribute-behavior/src/attributes.js | 1283 | ⚪ INFO | TODO comment found |
| fixtures/attribute-behavior/src/attributes.js | 1284 | ⚪ INFO | TODO comment found |
| fixtures/attribute-behavior/src/attributes.js | 1285 | ⚪ INFO | TODO comment found |
| fixtures/attribute-behavior/src/attributes.js | 1286 | ⚪ INFO | TODO comment found |
| fixtures/attribute-behavior/src/attributes.js | 1287 | ⚪ INFO | TODO comment found |
| fixtures/attribute-behavior/src/attributes.js | 1288 | ⚪ INFO | TODO comment found |
| fixtures/attribute-behavior/src/attributes.js | 1577 | ⚪ INFO | TODO comment found |
| fixtures/concurrent/time-slicing/src/index.js | 105 | ⚪ INFO | TODO comment found |
| fixtures/eslint-v10/index.js | 180 | ⚪ INFO | TODO comment found |
| fixtures/eslint-v9/index.js | 180 | ⚪ INFO | TODO comment found |
| fixtures/flight/config/webpack.config.js | 351 | ⚪ INFO | TODO comment found |
| fixtures/flight/server/region.js | 9 | ⚪ INFO | TODO comment found |
| fixtures/flight/src/App.js | 244 | ⚪ INFO | TODO comment found |
| fixtures/flight/src/index.js | 5 | ⚪ INFO | TODO comment found |
| fixtures/flight/src/index.js | 149 | ⚪ INFO | TODO comment found |
| fixtures/flight-parcel/types.d.ts | 1 | ⚪ INFO | TODO comment found |
| fixtures/legacy-jsx-runtimes/react-14/cjs/react-jsx-dev-runtime.development.js | 814 | ⚪ INFO | TODO comment found |
| fixtures/legacy-jsx-runtimes/react-14/cjs/react-jsx-runtime.development.js | 818 | ⚪ INFO | TODO comment found |
| fixtures/legacy-jsx-runtimes/react-15/cjs/react-jsx-dev-runtime.development.js | 819 | ⚪ INFO | TODO comment found |
| fixtures/legacy-jsx-runtimes/react-15/cjs/react-jsx-runtime.development.js | 823 | ⚪ INFO | TODO comment found |
| fixtures/legacy-jsx-runtimes/react-16/cjs/react-jsx-dev-runtime.development.js | 842 | ⚪ INFO | TODO comment found |
| fixtures/legacy-jsx-runtimes/react-16/cjs/react-jsx-runtime.development.js | 846 | ⚪ INFO | TODO comment found |
| fixtures/legacy-jsx-runtimes/react-17/cjs/react-jsx-dev-runtime.development.js | 1156 | ⚪ INFO | TODO comment found |
| fixtures/legacy-jsx-runtimes/react-17/cjs/react-jsx-runtime.development.js | 1156 | ⚪ INFO | TODO comment found |
| flow-typed/environments/dom.js | 586 | ⚪ INFO | TODO comment found |
| flow-typed/environments/dom.js | 588 | ⚪ INFO | TODO comment found |
| flow-typed/environments/dom.js | 592 | ⚪ INFO | TODO comment found |
| flow-typed/environments/dom.js | 1015 | ⚪ INFO | TODO comment found |
| flow-typed/environments/dom.js | 1025 | ⚪ INFO | TODO comment found |
| flow-typed/environments/dom.js | 1149 | ⚪ INFO | TODO comment found |
| flow-typed/environments/dom.js | 2098 | ⚪ INFO | TODO comment found |
| flow-typed/environments/dom.js | 3357 | ⚪ INFO | TODO comment found |
| flow-typed/environments/dom.js | 3468 | ⚪ INFO | TODO comment found |
| flow-typed/environments/dom.js | 3495 | ⚪ INFO | TODO comment found |
| flow-typed/environments/dom.js | 3508 | ⚪ INFO | TODO comment found |
| flow-typed/environments/dom.js | 3530 | ⚪ INFO | TODO comment found |
| flow-typed/environments/dom.js | 3544 | ⚪ INFO | TODO comment found |
| flow-typed/environments/html.js | 147 | ⚪ INFO | TODO comment found |
| flow-typed/environments/node.js | 650 | ⚪ INFO | TODO comment found |
| flow-typed/environments/node.js | 985 | ⚪ INFO | TODO comment found |
| flow-typed/npm/minimist_v1.x.x.js | 11 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2452 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2573 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2632 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2670 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2741 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 2793 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3029 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3844 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 3881 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6053 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6153 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6535 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 6587 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRuleExhaustiveDeps-test.js | 8511 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRulesOfHooks-test.js | 547 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRulesOfHooks-test.js | 558 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/__tests__/ESLintRulesOfHooks-test.js | 569 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/npm/index.js | 10 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/src/rules/ExhaustiveDeps.ts | 706 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/src/rules/ExhaustiveDeps.ts | 963 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/src/rules/ExhaustiveDeps.ts | 965 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/src/rules/ExhaustiveDeps.ts | 975 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/src/rules/ExhaustiveDeps.ts | 978 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/src/rules/ExhaustiveDeps.ts | 1315 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/src/rules/ExhaustiveDeps.ts | 1385 | ⚪ INFO | TODO comment found |
| packages/eslint-plugin-react-hooks/src/shared/RunReactCompiler.ts | 140 | ⚪ INFO | TODO comment found |
| packages/internal-test-utils/ReactInternalTestUtils.js | 254 | ⚪ INFO | TODO comment found |
| packages/react/src/BadMapPolyfill.js | 20 | ⚪ INFO | TODO comment found |
| packages/react/src/ReactAct.js | 223 | ⚪ INFO | TODO comment found |
| packages/react/src/ReactChildren.js | 116 | ⚪ INFO | TODO comment found |
| packages/react/src/ReactContext.js | 15 | ⚪ INFO | TODO comment found |
| packages/react/src/ReactLazy.js | 242 | ⚪ INFO | TODO comment found |
| packages/react/src/ReactStartTransition.js | 68 | ⚪ INFO | TODO comment found |
| packages/react/src/ReactStartTransition.js | 151 | ⚪ INFO | TODO comment found |
| packages/react/src/__tests__/ReactChildren-test.js | 523 | ⚪ INFO | TODO comment found |
| packages/react/src/__tests__/ReactContextValidator-test.js | 34 | ⚪ INFO | TODO comment found |
| packages/react/src/__tests__/ReactElementValidator-test.internal.js | 14 | ⚪ INFO | TODO comment found |
| packages/react/src/__tests__/ReactJSXElementValidator-test.js | 12 | ⚪ INFO | TODO comment found |
| packages/react/src/__tests__/ReactJSXTransformIntegration-test.js | 17 | ⚪ INFO | TODO comment found |
| packages/react/src/__tests__/ReactProfiler-test.internal.js | 1019 | ⚪ INFO | TODO comment found |
| packages/react/src/__tests__/ReactStrictMode-test.internal.js | 163 | ⚪ INFO | TODO comment found |
| packages/react/src/__tests__/ReactTypeScriptClass-test.ts | 49 | ⚪ INFO | TODO comment found |
| packages/react/src/__tests__/ReactVersion-test.js | 17 | ⚪ INFO | TODO comment found |
| packages/react/src/__tests__/createReactClassIntegration-test.js | 191 | ⚪ INFO | TODO comment found |
| packages/react-art/src/ReactART.js | 129 | ⚪ INFO | TODO comment found |
| packages/react-art/src/ReactFiberConfigART.js | 201 | ⚪ INFO | TODO comment found |
| packages/react-cache/src/LRU.js | 140 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 114 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 258 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 579 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 774 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 1069 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 1331 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 1581 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 2125 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 2222 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 2324 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 2649 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 2682 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 2748 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 2763 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 2773 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 2912 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 2968 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 3122 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 3346 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 3348 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 3482 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 3606 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 3808 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 3889 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 4419 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightClient.js | 5380 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightReplyClient.js | 421 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightReplyClient.js | 572 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightReplyClient.js | 590 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightReplyClient.js | 687 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightReplyClient.js | 717 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightReplyClient.js | 789 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightReplyClient.js | 836 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightReplyClient.js | 855 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightReplyClient.js | 942 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightReplyClient.js | 1155 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightReplyClient.js | 1260 | ⚪ INFO | TODO comment found |
| packages/react-client/src/ReactFlightReplyClient.js | 1329 | ⚪ INFO | TODO comment found |
| packages/react-client/src/__tests__/ReactFlight-test.js | 1728 | ⚪ INFO | TODO comment found |
| packages/react-client/src/__tests__/ReactFlight-test.js | 4466 | ⚪ INFO | TODO comment found |
| packages/react-client/src/__tests__/ReactFlight-test.js | 4477 | ⚪ INFO | TODO comment found |
| packages/react-debug-tools/src/ReactDebugHooks.js | 652 | ⚪ INFO | TODO comment found |
| packages/react-debug-tools/src/ReactDebugHooks.js | 722 | ⚪ INFO | TODO comment found |
| packages/react-debug-tools/src/ReactDebugHooks.js | 800 | ⚪ INFO | TODO comment found |
| packages/react-debug-tools/src/ReactDebugHooks.js | 1189 | ⚪ INFO | TODO comment found |
| packages/react-debug-tools/src/__tests__/ReactHooksInspectionIntegration-test.js | 913 | ⚪ INFO | TODO comment found |
| packages/react-devtools-extensions/build.js | 24 | ⚪ INFO | TODO comment found |
| packages/react-devtools-extensions/src/background/index.js | 24 | ⚪ INFO | TODO comment found |
| packages/react-devtools-inline/webpack.config.js | 75 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/__tests__/inspectedElement-test.js | 3031 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/__tests__/preprocessData-test.js | 1961 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/__tests__/preprocessData-test.js | 1963 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/__tests__/store-test.js | 3097 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/__tests__/store-test.js | 3962 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/__tests__/storeStressTestConcurrent-test.js | 31 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/agent.js | 179 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/agent.js | 616 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/agent.js | 686 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/agent.js | 726 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/agent.js | 1131 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/DevToolsFiberComponentStack.js | 56 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 1103 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 1280 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 1581 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 1608 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 2128 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 2156 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 2160 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 3007 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 3069 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 3537 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 4125 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 4167 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 4961 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 5201 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 5397 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 5841 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 6034 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 6241 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 6295 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 6311 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 6628 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 6885 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 7016 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 7087 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 7171 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 7703 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/renderer.js | 8074 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/fiber/shared/DevToolsFiberChangeDetection.js | 134 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/flight/DevToolsComponentInfoStack.js | 44 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/legacy/renderer.js | 422 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/legacy/renderer.js | 939 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/legacy/renderer.js | 948 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/shared/DevToolsComponentStackFrame.js | 174 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/utils/index.js | 20 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/views/Highlighter/Overlay.js | 193 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/backend/views/Highlighter/index.js | 452 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/store.js | 972 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/store.js | 1067 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/store.js | 1079 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/store.js | 1103 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/store.js | 1186 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/Components/InspectedElementSuspendedBy.js | 153 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/Components/StackTraceView.js | 63 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/Components/StackTraceView.js | 114 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/Components/TreeContext.js | 155 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/Profiler/SidebarEventInfo.js | 36 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/Settings/ComponentsSettings.js | 176 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/Settings/ComponentsSettings.js | 413 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/ActivityList.js | 216 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/ActivityList.js | 238 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/SuspenseRects.js | 158 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/SuspenseRects.js | 179 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/SuspenseRects.js | 465 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/SuspenseRects.js | 558 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/SuspenseRects.js | 583 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/SuspenseScrubber.js | 76 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/SuspenseTab.js | 77 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/SuspenseTab.js | 176 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/SuspenseTab.js | 219 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/SuspenseTab.js | 240 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/SuspenseTab.js | 294 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/SuspenseTimeline.js | 103 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/SuspenseTab/SuspenseTreeContext.js | 185 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/devtools/views/utils.js | 48 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/frontend/types.js | 219 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/frontend/types.js | 351 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/hook.js | 174 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/hook.js | 208 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/hook.js | 630 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/hooks/generateHookMap.js | 31 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/hooks/generateHookMap.js | 77 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/hydration.js | 215 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/symbolicateSource.js | 100 | ⚪ INFO | TODO comment found |
| packages/react-devtools-shared/src/utils.js | 1266 | ⚪ INFO | TODO comment found |
| packages/react-devtools-timeline/src/import-worker/preprocessData.js | 794 | ⚪ INFO | TODO comment found |
| packages/react-devtools-timeline/src/import-worker/preprocessData.js | 796 | ⚪ INFO | TODO comment found |
| packages/react-devtools-timeline/src/import-worker/preprocessData.js | 970 | ⚪ INFO | TODO comment found |
| packages/react-devtools-timeline/src/import-worker/preprocessData.js | 1063 | ⚪ INFO | TODO comment found |
| packages/react-devtools-timeline/src/import-worker/preprocessData.js | 1140 | 🟡 MEDIUM | FIXME comment indicating known issue |
| packages/react-dom/src/__tests__/ReactDOMFiber-test.js | 1156 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFiber-test.js | 1178 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzForm-test.js | 48 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzServer-test.js | 6237 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzServer-test.js | 6318 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzServer-test.js | 6392 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzServer-test.js | 6581 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzServer-test.js | 6609 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzServerBrowser-test.js | 414 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzServerBrowser-test.js | 431 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzServerBrowser-test.js | 557 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzSuppressHydrationWarning-test.js | 316 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzSuspenseList-test.js | 169 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzSuspenseList-test.js | 621 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzSuspenseList-test.js | 692 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzSuspenseList-test.js | 763 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzSuspenseList-test.js | 907 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFizzSuspenseList-test.js | 960 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFloat-test.js | 3094 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMFragmentRefs-test.js | 1465 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMHydrationDiff-test.js | 1221 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMInput-test.js | 2613 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMInput-test.js | 2940 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMInput-test.js | 2958 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMInput-test.js | 3014 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMInput-test.js | 3033 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMServerIntegrationAttributes-test.js | 45 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMServerIntegrationAttributes-test.js | 481 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMServerIntegrationAttributes-test.js | 483 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMServerIntegrationCheckbox-test.js | 37 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMServerIntegrationElements-test.js | 54 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMServerIntegrationInput-test.js | 37 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMServerIntegrationLegacyContext-test.js | 49 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMServerIntegrationUntrustedURL-test.js | 206 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMServerSelectiveHydration-test.internal.js | 103 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMServerSelectiveHydrationActivity-test.internal.js | 103 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMTextarea-test.js | 886 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMTextarea-test.js | 903 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMTextarea-test.js | 974 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMTextarea-test.js | 991 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactDOMUseId-test.js | 667 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactLegacyErrorBoundaries-test.internal.js | 18 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactLegacyUpdates-test.js | 1644 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactServerRendering-test.js | 53 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactUpdates-test.js | 1885 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/ReactWrongReturnPointer-test.js | 44 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/refs-test.js | 157 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/refs-test.js | 164 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/__tests__/utils/ReactDOMServerIntegrationTestUtils.js | 87 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/client/ReactDOMClientFB.js | 84 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/client/ReactDOMClientFB.js | 134 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/client/__tests__/getNodeForCharacterOffset-test.js | 12 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/events/__tests__/SyntheticKeyboardEvent-test.js | 177 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/server/ReactDOMFizzServerBrowser.js | 70 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/server/ReactDOMFizzServerBrowser.js | 103 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/server/ReactDOMFizzServerBrowser.js | 195 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/server/ReactDOMFizzServerBun.js | 59 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/server/ReactDOMFizzServerBun.js | 93 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/server/ReactDOMFizzServerEdge.js | 70 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/server/ReactDOMFizzServerEdge.js | 103 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/server/ReactDOMFizzServerEdge.js | 195 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/server/ReactDOMFizzServerNode.js | 197 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/server/ReactDOMFizzServerNode.js | 240 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/server/ReactDOMFizzServerNode.js | 399 | ⚪ INFO | TODO comment found |
| packages/react-dom/src/shared/ReactDOM.js | 65 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 260 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 380 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 426 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 539 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 609 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 679 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 937 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1056 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1102 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1143 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1225 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1271 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1319 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1331 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1349 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1430 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1679 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1718 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1756 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1790 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1795 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1829 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1852 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 1905 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 2004 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 2031 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 2032 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 2079 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 2622 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 3124 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 3170 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 3177 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 3210 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 3232 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 3233 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 3269 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponent.js | 3290 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMComponentTree.js | 84 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMInput.js | 10 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMInput.js | 186 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMInput.js | 300 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMInput.js | 363 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMOption.js | 55 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactDOMSelect.js | 10 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 190 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 483 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 536 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 673 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 870 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 928 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 987 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 1123 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 1286 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 1386 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 1400 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 1801 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2022 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2154 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2500 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2504 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2542 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2556 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2576 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2648 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2658 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2703 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2793 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2887 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2909 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 2931 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 4271 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 4286 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 4390 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 5655 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 5756 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 6230 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/ReactFiberConfigDOM.js | 6466 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/client/validateDOMNesting.js | 186 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/DOMPluginEventSystem.js | 92 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/DOMPluginEventSystem.js | 111 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/DOMPluginEventSystem.js | 522 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/DOMPluginEventSystem.js | 884 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/ReactDOMEventListener.js | 68 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/ReactDOMEventListener.js | 251 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/ReactDOMEventListener.js | 269 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/ReactDOMEventListener.js | 275 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/ReactDOMEventListener.js | 282 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/ReactDOMEventListener.js | 288 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/ReactDOMEventListener.js | 405 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/ReactDOMEventReplaying.js | 61 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/ReactDOMEventReplaying.js | 315 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/ReactDOMUpdateBatching.js | 37 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/ReactDOMUpdateBatching.js | 61 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/plugins/EnterLeaveEventPlugin.js | 87 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/plugins/EnterLeaveEventPlugin.js | 92 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/plugins/FormActionEventPlugin.js | 123 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/plugins/SimpleEventPlugin.js | 77 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/plugins/SimpleEventPlugin.js | 102 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/plugins/SimpleEventPlugin.js | 113 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/plugins/SimpleEventPlugin.js | 185 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/events/plugins/SimpleEventPlugin.js | 209 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 1168 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 1230 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 1315 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 1393 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 1540 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 1600 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 1885 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 1965 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 2033 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 2082 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 2160 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 2422 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 2661 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 2751 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 3972 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 4044 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 4098 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 4385 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/ReactFizzConfigDOM.js | 4777 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/fizz-instruction-set/ReactDOMFizzInlineFormReplaying.js | 3 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/fizz-instruction-set/ReactDOMFizzInstructionSetShared.js | 26 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/fizz-instruction-set/ReactDOMFizzInstructionSetShared.js | 50 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/fizz-instruction-set/ReactDOMFizzInstructionSetShared.js | 128 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/fizz-instruction-set/ReactDOMFizzInstructionSetShared.js | 182 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/fizz-instruction-set/ReactDOMFizzInstructionSetShared.js | 184 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/fizz-instruction-set/ReactDOMFizzInstructionSetShared.js | 257 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/fizz-instruction-set/ReactDOMFizzInstructionSetShared.js | 279 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/fizz-instruction-set/ReactDOMFizzInstructionSetShared.js | 305 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/server/fizz-instruction-set/ReactDOMFizzInstructionSetShared.js | 331 | ⚪ INFO | TODO comment found |
| packages/react-dom-bindings/src/shared/isUnitlessNumber.js | 59 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/ReactFabric.js | 122 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/ReactFabric.js | 184 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/ReactFiberConfigFabric.js | 78 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/ReactFiberConfigFabric.js | 157 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/ReactFiberConfigFabric.js | 288 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/ReactFiberConfigFabric.js | 496 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/ReactFiberConfigFabricWithViewTransition.js | 51 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/ReactFiberConfigFabricWithViewTransition.js | 123 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/ReactNativeBridgeEventPlugin.js | 59 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/ReactNativeFiberInspector.js | 128 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/__mocks__/react-native/Libraries/ReactPrivate/deepFreezeAndThrowOnMutationInDev.js | 10 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/__tests__/ResponderEventPlugin-test.internal.js | 345 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/__tests__/ResponderEventPlugin-test.internal.js | 1491 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/legacy-events/EventPluginUtils.js | 80 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/legacy-events/ResponderEventPlugin.js | 160 | ⚪ INFO | TODO comment found |
| packages/react-native-renderer/src/legacy-events/ResponderEventPlugin.js | 550 | ⚪ INFO | TODO comment found |
| packages/react-noop-renderer/src/ReactNoop.js | 54 | ⚪ INFO | TODO comment found |
| packages/react-noop-renderer/src/ReactNoopPersistent.js | 55 | ⚪ INFO | TODO comment found |
| packages/react-noop-renderer/src/createReactNoop.js | 1251 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 292 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 296 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 457 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 1223 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 1251 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 1254 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 1292 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 1525 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 1553 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 1556 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 1594 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 1710 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 1815 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactChildFiber.js | 2225 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactCurrentFiber.js | 39 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiber.js | 133 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiber.js | 499 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiber.js | 560 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberAct.js | 53 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 181 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 227 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 316 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 442 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 522 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 545 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 627 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 629 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 665 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 674 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 689 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 695 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 702 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 817 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 947 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 956 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 984 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 991 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 1058 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 1061 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 1146 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 1200 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberApplyGesture.js | 1309 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 413 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 547 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 589 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 693 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 743 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 1003 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 1295 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 1386 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 1732 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 1778 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 2314 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 2323 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 2355 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 2502 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 3019 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 3077 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 3502 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 3534 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 3569 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 3667 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 3809 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 4088 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 4148 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberBeginWork.js | 4277 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCallUserSpace.js | 19 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberClassComponent.js | 1122 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberClassUpdateQueue.js | 473 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberClassUpdateQueue.js | 479 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberClassUpdateQueue.js | 529 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberClassUpdateQueue.js | 550 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitEffects.js | 348 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitEffects.js | 418 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitEffects.js | 498 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitEffects.js | 519 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitEffects.js | 555 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitEffects.js | 593 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitEffects.js | 641 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitEffects.js | 807 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitHostEffects.js | 332 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitViewTransitions.js | 149 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitViewTransitions.js | 317 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitViewTransitions.js | 350 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitViewTransitions.js | 354 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitViewTransitions.js | 475 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitViewTransitions.js | 573 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitViewTransitions.js | 707 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitViewTransitions.js | 717 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 367 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 377 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 406 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 485 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 486 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 552 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 699 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 967 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 1359 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 1365 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 1394 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 1466 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 1479 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 1681 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 1738 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 1829 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 1864 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 1900 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 1919 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 1983 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 2090 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 2235 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 2464 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 2617 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 2687 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 2775 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 2954 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 3163 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 3183 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 3210 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 3228 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 3233 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 3276 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 3289 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 3307 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 3428 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 3483 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 3559 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 3699 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 3981 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 4118 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 4323 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 4345 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 4418 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 4434 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 4505 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 4583 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 4599 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 4692 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 4713 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 4848 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 4875 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 4945 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 5014 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 5045 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 5063 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 5122 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 5126 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCommitWork.js | 5184 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCompleteWork.js | 227 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCompleteWork.js | 554 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCompleteWork.js | 645 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCompleteWork.js | 658 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCompleteWork.js | 1403 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCompleteWork.js | 1409 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCompleteWork.js | 1431 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCompleteWork.js | 1660 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCompleteWork.js | 1888 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCompleteWork.js | 1898 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberCompleteWork.js | 1914 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberComponentStack.js | 44 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberComponentStack.js | 198 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberConcurrentUpdates.js | 107 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberConcurrentUpdates.js | 253 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberConcurrentUpdates.js | 266 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberDevToolsHook.js | 15 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberFlags.js | 102 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberFlags.js | 127 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberGestureScheduler.js | 159 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberGestureScheduler.js | 161 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberGestureScheduler.js | 176 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHiddenContext.js | 22 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHiddenContext.js | 26 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHiddenContext.js | 31 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 277 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 910 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 1112 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 1238 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 1426 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 1506 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 1547 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 1553 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 1624 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 2382 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 2844 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 2879 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 3269 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 3362 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 3387 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 3457 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 3511 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 3512 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 3529 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 3556 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 3680 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHooks.js | 3842 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHotReloading.js | 175 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHydrationContext.js | 546 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberHydrationContext.js | 640 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 14 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 304 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 330 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 451 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 516 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 545 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 557 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 561 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 626 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 836 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 857 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 1009 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 1101 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberLane.js | 1108 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberNewContext.js | 202 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberOffscreenComponent.js | 25 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberOffscreenComponent.js | 38 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberPerformanceTrack.js | 396 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberPerformanceTrack.js | 602 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberPerformanceTrack.js | 977 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberPerformanceTrack.js | 1367 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberPerformanceTrack.js | 1368 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberPerformanceTrack.js | 1406 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberPerformanceTrack.js | 1407 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberReconciler.js | 240 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberReconciler.js | 284 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberReconciler.js | 290 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberReconciler.js | 331 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberRoot.js | 142 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberRoot.js | 164 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberRootScheduler.js | 191 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberRootScheduler.js | 534 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberRootScheduler.js | 561 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberRootScheduler.js | 586 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberRootScheduler.js | 663 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberRootScheduler.js | 701 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberSuspenseContext.js | 44 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberSuspenseContext.js | 85 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberSuspenseContext.js | 116 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberSuspenseContext.js | 130 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberSuspenseContext.js | 164 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberThenable.js | 75 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberThenable.js | 144 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberThenable.js | 245 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberThenable.js | 310 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberThenable.js | 378 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberThrow.js | 172 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberThrow.js | 358 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberThrow.js | 408 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberThrow.js | 423 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberThrow.js | 463 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberThrow.js | 531 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberTracingMarkerComponent.js | 40 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberTracingMarkerComponent.js | 84 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberTransitionTypes.js | 21 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberTreeContext.js | 74 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberTreeReflection.js | 57 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberTreeReflection.js | 99 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberUnwindWork.js | 123 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 519 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 900 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 1067 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 1161 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 1183 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 1205 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 1264 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 1335 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 1408 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 1514 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 1577 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 1582 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 1810 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 2314 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 2429 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 2450 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 2539 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 2563 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 2567 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 2601 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 2652 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 2664 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 2836 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 3141 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 3162 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 3345 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 3457 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 3463 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 3516 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 3755 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 3834 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 3926 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 4208 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 4302 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 4676 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 4719 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 4847 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 5024 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 5026 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 5043 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 5098 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 5124 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 5128 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactFiberWorkLoop.js | 5391 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactInternalTypes.js | 230 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactInternalTypes.js | 262 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactInternalTypes.js | 292 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactPortal.js | 22 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactProfilerTimer.js | 91 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactTypeOfMode.js | 13 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/ReactTypeOfMode.js | 20 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/Activity-test.js | 1207 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactActWarnings-test.js | 255 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactConcurrentErrorRecovery-test.js | 36 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactContextPropagation-test.js | 43 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactDeferredValue-test.js | 622 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactFlushSync-test.js | 13 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactFlushSyncNoAggregateError-test.js | 11 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactHooksWithNoopRenderer-test.js | 772 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactIncremental-test.js | 139 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactIncremental-test.js | 1543 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactIncremental-test.js | 2171 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactIncrementalErrorHandling-test.internal.js | 875 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactIncrementalErrorHandling-test.internal.js | 1538 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactIncrementalSideEffects-test.js | 1081 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactIncrementalSideEffects-test.js | 1137 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactIncrementalSideEffects-test.js | 1335 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactLazy-test.internal.js | 376 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactNoopRendererAct-test.js | 18 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactOwnerStacks-test.js | 180 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactOwnerStacks-test.js | 211 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSubtreeFlagsWarning-test.js | 36 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspense-test.internal.js | 325 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseEffectsSemantics-test.js | 23 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseEffectsSemantics-test.js | 64 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseFallback-test.js | 37 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseFuzz-test.internal.js | 179 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspensePlaceholder-test.internal.js | 575 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseWithNoopRenderer-test.js | 45 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseWithNoopRenderer-test.js | 684 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseWithNoopRenderer-test.js | 1835 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseWithNoopRenderer-test.js | 1959 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseWithNoopRenderer-test.js | 1977 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseWithNoopRenderer-test.js | 1983 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseWithNoopRenderer-test.js | 2004 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseWithNoopRenderer-test.js | 2050 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseWithNoopRenderer-test.js | 2073 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseWithNoopRenderer-test.js | 3192 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseyCommitPhase-test.js | 378 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseyCommitPhase-test.js | 421 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactSuspenseyCommitPhase-test.js | 508 | 🟡 MEDIUM | FIXME comment indicating known issue |
| packages/react-reconciler/src/__tests__/ReactTransition-test.js | 58 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactTransition-test.js | 1075 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactUse-test.js | 662 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactUse-test.js | 1350 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactUse-test.js | 1383 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactUse-test.js | 1604 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/__tests__/ReactUse-test.js | 2314 | ⚪ INFO | TODO comment found |
| packages/react-reconciler/src/clz32.js | 10 | ⚪ INFO | TODO comment found |
| packages/react-refresh/src/ReactFreshBabelPlugin.js | 340 | ⚪ INFO | TODO comment found |
| packages/react-refresh/src/ReactFreshBabelPlugin.js | 424 | ⚪ INFO | TODO comment found |
| packages/react-refresh/src/ReactFreshRuntime.js | 222 | ⚪ INFO | TODO comment found |
| packages/react-refresh/src/ReactFreshRuntime.js | 570 | ⚪ INFO | TODO comment found |
| packages/react-refresh/src/__tests__/ReactFresh-test.js | 2132 | ⚪ INFO | TODO comment found |
| packages/react-refresh/src/__tests__/ReactFreshBabelPlugin-test.js | 102 | ⚪ INFO | TODO comment found |
| packages/react-refresh/src/__tests__/ReactFreshBabelPlugin-test.js | 160 | ⚪ INFO | TODO comment found |
| packages/react-refresh/src/__tests__/ReactFreshBabelPlugin-test.js | 161 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzCallUserSpace.js | 13 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzComponentStack.js | 84 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzComponentStack.js | 172 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzHooks.js | 641 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 1583 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 1714 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 1864 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 1919 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 2030 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 2178 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 2193 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 2220 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 2232 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 2341 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 3002 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 3388 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 3428 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 3536 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 3562 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 3574 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 3903 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 4145 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 4335 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 5952 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 6041 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 6124 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzServer.js | 6167 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzThenable.js | 229 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzTreeContext.js | 154 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFizzViewTransitionComponent.js | 34 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightCallUserSpace.js | 19 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightReplyServer.js | 128 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightReplyServer.js | 713 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightReplyServer.js | 1459 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightReplyServer.js | 1461 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightReplyServer.js | 1576 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 368 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 1269 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 1403 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 1577 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 2219 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3112 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3114 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3337 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3365 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3367 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3385 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3413 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3614 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3647 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3679 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3839 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3878 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3936 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3943 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 3952 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 4032 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 4785 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 4930 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 5123 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 5138 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 5196 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 5537 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightServer.js | 6332 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactFlightThenable.js | 13 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactServerStreamConfigBun.js | 87 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactServerStreamConfigFB.js | 22 | ⚪ INFO | TODO comment found |
| packages/react-server/src/ReactServerStreamConfigFB.js | 28 | ⚪ INFO | TODO comment found |
| packages/react-server/src/__tests__/ReactFlightAsyncDebugInfo-test.js | 3152 | ⚪ INFO | TODO comment found |
| packages/react-server/src/__tests__/ReactFlightServer-test.js | 124 | ⚪ INFO | TODO comment found |
| packages/react-server/src/flight/ReactFlightAsyncDispatcher.js | 29 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-esm/src/ReactFlightESMNodeLoader.js | 225 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-esm/src/ReactFlightESMNodeLoader.js | 620 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-esm/src/ReactFlightESMNodeLoader.js | 634 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-esm/src/client/ReactFlightDOMClientNode.js | 107 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-parcel/src/client/ReactFlightDOMClientNode.js | 100 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-turbopack/src/client/ReactFlightClientConfigBundlerTurbopack.js | 121 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-turbopack/src/client/ReactFlightDOMClientNode.js | 109 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-turbopack/src/server/ReactFlightServerConfigTurbopackBundler.js | 58 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-unbundled/src/ReactFlightUnbundledNodeLoader.js | 225 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-unbundled/src/ReactFlightUnbundledNodeLoader.js | 620 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-unbundled/src/ReactFlightUnbundledNodeLoader.js | 634 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-unbundled/src/client/ReactFlightDOMClientNode.js | 109 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-unbundled/src/server/ReactFlightServerConfigUnbundledBundler.js | 58 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/ReactFlightWebpackNodeLoader.js | 225 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/ReactFlightWebpackNodeLoader.js | 620 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/ReactFlightWebpackNodeLoader.js | 634 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/ReactFlightWebpackPlugin.js | 295 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/ReactFlightWebpackPlugin.js | 319 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/__tests__/ReactFlightDOMBrowser-test.js | 131 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/__tests__/ReactFlightDOMBrowser-test.js | 1747 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/__tests__/ReactFlightDOMEdge-test.js | 127 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/__tests__/ReactFlightDOMEdge-test.js | 570 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/__tests__/ReactFlightDOMEdge-test.js | 1081 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/__tests__/ReactFlightDOMEdge-test.js | 1105 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/__tests__/ReactFlightDOMForm-test.js | 38 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/__tests__/ReactFlightDOMForm-test.js | 79 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/__tests__/ReactFlightDOMForm-test.js | 480 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/__tests__/ReactFlightDOMNode-test.js | 1881 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/__tests__/ReactFlightDOMNode-test.js | 2029 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/__tests__/ReactFlightDOMReply-test.js | 743 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/client/ReactFlightClientConfigBundlerWebpack.js | 128 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/client/ReactFlightDOMClientNode.js | 109 | ⚪ INFO | TODO comment found |
| packages/react-server-dom-webpack/src/server/ReactFlightServerConfigWebpackBundler.js | 58 | ⚪ INFO | TODO comment found |
| packages/react-suspense-test-utils/src/ReactSuspenseTestUtils.js | 20 | ⚪ INFO | TODO comment found |
| packages/react-test-renderer/src/ReactFiberConfigTestHost.js | 22 | ⚪ INFO | TODO comment found |
| packages/react-test-renderer/src/ReactTestRenderer.js | 73 | ⚪ INFO | TODO comment found |
| packages/react-test-renderer/src/ReactTestRenderer.js | 227 | ⚪ INFO | TODO comment found |
| packages/scheduler/src/SchedulerPriorities.js | 12 | ⚪ INFO | TODO comment found |
| packages/scheduler/src/__tests__/SchedulerMock-test.js | 445 | ⚪ INFO | TODO comment found |
| packages/scheduler/src/forks/Scheduler.js | 26 | ⚪ INFO | TODO comment found |
| packages/scheduler/src/forks/SchedulerMock.js | 18 | ⚪ INFO | TODO comment found |
| packages/shared/ReactComponentInfoStack.js | 42 | ⚪ INFO | TODO comment found |
| packages/shared/ReactComponentStackFrame.js | 197 | ⚪ INFO | TODO comment found |
| packages/shared/ReactFeatureFlags.js | 167 | ⚪ INFO | TODO comment found |
| packages/shared/ReactTypes.js | 78 | ⚪ INFO | TODO comment found |
| packages/shared/ReactTypes.js | 368 | ⚪ INFO | TODO comment found |
| packages/shared/ReactVersion.js | 8 | ⚪ INFO | TODO comment found |
| packages/shared/ReactVersion.js | 12 | ⚪ INFO | TODO comment found |
| packages/shared/forks/ReactFeatureFlags.native-fb-dynamic.js | 16 | ⚪ INFO | TODO comment found |
| packages/shared/forks/ReactFeatureFlags.native-oss.js | 13 | ⚪ INFO | TODO comment found |
| packages/shared/forks/ReactFeatureFlags.test-renderer.js | 81 | ⚪ INFO | TODO comment found |
| packages/shared/forks/ReactFeatureFlags.www-dynamic.js | 44 | ⚪ INFO | TODO comment found |
| packages/shared/forks/ReactFeatureFlags.www.js | 77 | ⚪ INFO | TODO comment found |
| packages/shared/getComponentNameFromType.js | 64 | ⚪ INFO | TODO comment found |
| packages/use-sync-external-store/src/useSyncExternalStoreShimClient.js | 117 | ⚪ INFO | TODO comment found |
| scripts/error-codes/__tests__/transform-error-messages.js | 59 | ⚪ INFO | TODO comment found |
| scripts/error-codes/transform-error-messages.js | 87 | ⚪ INFO | TODO comment found |
| scripts/flow/environment.js | 356 | ⚪ INFO | TODO comment found |
| scripts/flow/environment.js | 380 | ⚪ INFO | TODO comment found |
| scripts/flow/react-devtools.js | 45 | ⚪ INFO | TODO comment found |
| scripts/flow/react-devtools.js | 51 | ⚪ INFO | TODO comment found |
| scripts/flow/react-devtools.js | 57 | ⚪ INFO | TODO comment found |
| scripts/flow/runFlow.js | 14 | ⚪ INFO | TODO comment found |
| scripts/jest/TestFlags.js | 39 | ⚪ INFO | TODO comment found |
| scripts/jest/TestFlags.js | 86 | ⚪ INFO | TODO comment found |
| scripts/jest/TestFlags.js | 107 | ⚪ INFO | TODO comment found |
| scripts/jest/config.build-devtools.js | 23 | ⚪ INFO | TODO comment found |
| scripts/jest/config.build.js | 18 | ⚪ INFO | TODO comment found |
| scripts/jest/jest-cli.js | 15 | ⚪ INFO | TODO comment found |
| scripts/jest/jest-cli.js | 268 | ⚪ INFO | TODO comment found |
| scripts/jest/matchers/reactTestMatchers.js | 5 | ⚪ INFO | TODO comment found |
| scripts/jest/setupTests.js | 74 | ⚪ INFO | TODO comment found |
| scripts/jest/spec-equivalence-reporter/setupTests.js | 49 | ⚪ INFO | TODO comment found |
| scripts/release/shared-commands/download-build-artifacts.js | 121 | ⚪ INFO | TODO comment found |
| scripts/release/shared-commands/download-build-artifacts.js | 129 | ⚪ INFO | TODO comment found |
| scripts/rollup/build-all-release-channels.js | 49 | ⚪ INFO | TODO comment found |
| scripts/rollup/build-all-release-channels.js | 318 | ⚪ INFO | TODO comment found |
| scripts/rollup/build-all-release-channels.js | 411 | ⚪ INFO | TODO comment found |
| scripts/rollup/build-all-release-channels.js | 442 | ⚪ INFO | TODO comment found |
| scripts/rollup/build.js | 116 | ⚪ INFO | TODO comment found |
| scripts/rollup/build.js | 122 | ⚪ INFO | TODO comment found |
| scripts/rollup/build.js | 124 | ⚪ INFO | TODO comment found |
| scripts/rollup/build.js | 127 | ⚪ INFO | TODO comment found |
| scripts/rollup/bundles.js | 109 | ⚪ INFO | TODO comment found |
| scripts/rollup/bundles.js | 1256 | ⚪ INFO | TODO comment found |
| scripts/rollup/validate/eslintrc.cjs.js | 96 | ⚪ INFO | TODO comment found |
| scripts/rollup/validate/eslintrc.cjs2015.js | 90 | ⚪ INFO | TODO comment found |
| scripts/rollup/validate/eslintrc.esm.js | 93 | ⚪ INFO | TODO comment found |
| scripts/rollup/validate/eslintrc.fb.js | 80 | ⚪ INFO | TODO comment found |
| scripts/rollup/validate/eslintrc.rn.js | 83 | ⚪ INFO | TODO comment found |
| scripts/rollup/validate/index.js | 17 | ⚪ INFO | TODO comment found |
| scripts/rollup/validate/index.js | 31 | ⚪ INFO | TODO comment found |
| scripts/shared/inlinedHostConfigs.js | 715 | ⚪ INFO | TODO comment found |

## Detailed Findings

### MAINTENANCE

**Total:** 1013 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| packages/react-devtools-timeline/src/import-worker/preprocessData.js | 1140 | 🟡 MEDIUM | FIXME comment indicating known issue |
| packages/react-reconciler/src/__tests__/ReactSuspenseyCommitPhase-test.js | 508 | 🟡 MEDIUM | FIXME comment indicating known issue |
| compiler/packages/babel-plugin-react-compiler/src/Flood/TypeUtils.ts | 21 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Flood/TypeUtils.ts | 27 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Flood/Types.ts | 82 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/Flood/Types.ts | 706 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/BuildHIR.ts | 252 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/BuildHIR.ts | 4188 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/BuildHIR.ts | 4453 | ⚪ INFO | TODO comment found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/Globals.ts | 272 | ⚪ INFO | TODO comment found |

*... and 1003 more*

### CODE_QUALITY

**Total:** 1366 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| compiler/packages/babel-plugin-react-compiler/scripts/eslint-plugin-react-hooks-test-cases.js | 795 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/scripts/eslint-plugin-react-hooks-test-cases.js | 797 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/scripts/eslint-plugin-react-hooks-test-cases.js | 810 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/scripts/eslint-plugin-react-hooks-test-cases.js | 812 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/scripts/jest/makeTransform.ts | 38 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Flood/TypeUtils.ts | 49 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Flood/Types.ts | 725 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/CollectHoistablePropertyLoads.ts | 182 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/HIR/CollectHoistablePropertyLoads.ts | 184 | 🟢 LOW | Debug console.log statement found |
| compiler/packages/babel-plugin-react-compiler/src/Inference/InferMutationAliasingEffects.ts | 648 | 🟢 LOW | Debug console.log statement found |

*... and 1356 more*

### SECURITY

**Total:** 4 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| compiler/packages/react-mcp-server/src/utils/algolia.ts | 14 | 🟠 HIGH | Potential API key detected |
| packages/react-dom/src/__tests__/ReactMultiChildReconcile-test.js | 833 | 🟠 HIGH | Hardcoded username/password detected |
| packages/react-dom/src/__tests__/ReactMultiChildReconcile-test.js | 852 | 🟠 HIGH | Hardcoded username/password detected |
| packages/react-dom/src/__tests__/ReactMultiChildReconcile-test.js | 853 | 🟠 HIGH | Hardcoded username/password detected |

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 0/100 (Tier F)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -60 | Fair ⚠️ |
| Code Quality | -1376 | Good ✅ |
| Test Coverage | +1 | Good |
| Documentation | +2 | Needs improvement ❌ |

## Recommendations

1. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 11.7%. Aim for at least 70% coverage.

2. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

