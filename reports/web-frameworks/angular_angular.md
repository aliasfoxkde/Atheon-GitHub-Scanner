# Repository Analysis Report: angular/angular

**Generated:** 2026-06-19 08:57:18 CDT

**Quality Score:** 68/100 (Tier C)

## Executive Summary

- **Overall Quality:** C (68/100)
- **Total Findings:** 1044
- **Critical Issues:** 0
- **High Issues:** 24
- **Medium Issues:** 28
- **Low Issues:** 335
- **Files Scanned:** 10625

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| maintenance | 657 | Medium |
| code_quality | 335 | Medium |
| security | 52 | High |

## Repository Overview

- **Owner:** angular
- **Name:** angular
- **Description:** Deliver web apps with confidence 🚀
- **Primary Language:** TypeScript
- **Stars:** 100393
- **Forks:** 27192
- **Open Issues:** 1182
- **Size:** 643135 KB
- **Created:** 2014-09-18
- **Last Updated:** 2026-06-19
- **Default Branch:** main

**Topics:** angular, javascript, pwa, typescript, web, web-framework, web-performance

## Security Analysis

⚠️ **Found 52 security-related findings.**

### ⚠️ High Severity Issues (24)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| adev/src/app/environment.ts | 25 | 🟠 HIGH | Potential API key detected |
| adev/src/content/tutorials/learn-angular/steps/11-optimizing-images/answer/src/app/user.ts | 25 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/11-optimizing-images/src/app/user.ts | 24 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/12-enable-routing/answer/src/app/user/user.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/12-enable-routing/src/app/user/user.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/13-define-a-route/answer/src/app/user/user.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/13-define-a-route/src/app/user/user.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/14-routerLink/answer/src/app/user/user.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/14-routerLink/src/app/user/user.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/15-forms/answer/src/app/user.ts | 18 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/15-forms/src/app/user.ts | 13 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/16-form-control-values/answer/src/app/user.ts | 19 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/16-form-control-values/src/app/user.ts | 19 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/22-pipes/answer/src/app/app.ts | 10 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/22-pipes/src/app/app.ts | 9 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/3-composing-components/answer/src/app/app.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/3-composing-components/src/app/app.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| packages/compiler-cli/test/compliance/test_cases/r3_view_compiler_styling/style_bindings/GOLDEN_PARTIAL.js | 73 | 🟠 HIGH | Hardcoded username/password detected |
| packages/compiler-cli/test/compliance/test_cases/r3_view_compiler_styling/style_bindings/binding_slots.ts | 23 | 🟠 HIGH | Hardcoded username/password detected |
| packages/forms/signals/src/api/structure.ts | 403 | 🟠 HIGH | Hardcoded username/password detected |
| packages/forms/test/reactive_integration_spec.ts | 286 | 🟠 HIGH | Hardcoded username/password detected |
| packages/forms/test/reactive_integration_spec.ts | 288 | 🟠 HIGH | Hardcoded username/password detected |
| packages/forms/test/reactive_integration_spec.ts | 484 | 🟠 HIGH | Hardcoded username/password detected |
| packages/forms/test/reactive_integration_spec.ts | 486 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 18.0% | Poor ❌ |
| Documentation | 1.0% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (335)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/actions/deploy-docs-site/main.js | 31713 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 31716 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 31729 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 31732 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 36749 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 50918 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 55604 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 63957 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64002 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64003 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64006 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64007 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64008 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64009 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64010 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64011 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64013 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64015 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64017 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64018 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64020 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64022 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64023 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/aria/menu/src/menu-context/app/app.ts | 29 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/form-validation/e2e/src/app.e2e-spec.ts | 87 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/forms/src/app/actor-form/actor-form.component.ts | 41 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/service-worker-getting-started/src/app/check-for-update.service.ts | 21 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/service-worker-getting-started/src/app/log-update.service.ts | 12 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/service-worker-getting-started/src/app/log-update.service.ts | 15 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/service-worker-getting-started/src/app/log-update.service.ts | 16 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/service-worker-getting-started/src/app/log-update.service.ts | 19 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/service-worker-getting-started/src/app/log-update.service.ts | 22 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/signal-forms/src/comparison/app/reactive-forms.ts | 56 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/signal-forms/src/comparison/app/signal-forms.ts | 54 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/signal-forms/src/comparison/app/template-driven-forms.ts | 70 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/signal-forms/src/compat-form-control-integration/app/app.ts | 46 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/signal-forms/src/compat-form-control-integration/app/app.ts | 47 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/signal-forms/src/compat-form-group-integration/app/app.ts | 37 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/signal-forms/src/compat-form-group-integration/app/app.ts | 38 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/signal-forms/src/login-validation/app/app.ts | 32 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/examples/signal-forms/src/login-validation-complete/app/app.ts | 43 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/tutorials/first-app/steps/13-search/src/app/housing.service.ts | 119 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/tutorials/first-app/steps/14-http/src/app/housing.service.ts | 120 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/tutorials/first-app/steps/14-http/src-final/app/housing.service.ts | 21 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/tutorials/playground/4-signal-forms/src/main.ts | 67 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/tutorials/signal-forms/steps/5-add-submission/answer/src/app/app.ts | 33 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/tutorials/signals/steps/10-reacting-to-signal-changes-with-effect/answer/src/app/app.ts | 64 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/tutorials/signals/steps/10-reacting-to-signal-changes-with-effect/answer/src/app/app.ts | 71 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/tutorials/signals/steps/10-reacting-to-signal-changes-with-effect/answer/src/app/app.ts | 77 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/tutorials/signals/steps/10-reacting-to-signal-changes-with-effect/answer/src/app/app.ts | 83 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/tutorials/signals/steps/9-query-child-elements-with-signal-queries/src/app/app.ts | 63 | 🟢 LOW | Debug console.log statement found |
| adev/src/content/tutorials/signals/steps/9-query-child-elements-with-signal-queries/src/app/app.ts | 68 | 🟢 LOW | Debug console.log statement found |
| devtools/projects/ng-devtools-backend/src/lib/client-event-subscribers.ts | 561 | 🟢 LOW | Debug console.log statement found |
| devtools/projects/ng-devtools-backend/src/lib/client-event-subscribers.ts | 567 | 🟢 LOW | Debug console.log statement found |
| devtools/projects/ng-devtools-backend/src/lib/client-event-subscribers.ts | 569 | 🟢 LOW | Debug console.log statement found |
| devtools/projects/ng-devtools-backend/src/lib/client-event-subscribers.ts | 574 | 🟢 LOW | Debug console.log statement found |
| devtools/projects/ng-devtools-backend/src/lib/client-event-subscribers.ts | 576 | 🟢 LOW | Debug console.log statement found |
| devtools/projects/ng-devtools-backend/src/lib/component-tree/component-tree.ts | 635 | 🟢 LOW | Debug console.log statement found |
| devtools/projects/ng-devtools-backend/src/lib/component-tree/component-tree.ts | 638 | 🟢 LOW | Debug console.log statement found |
| devtools/projects/ng-devtools-backend/src/lib/component-tree/component-tree.ts | 804 | 🟢 LOW | Debug console.log statement found |
| devtools/projects/shell-browser/set-version.js | 20 | 🟢 LOW | Debug console.log statement found |
| devtools/projects/shell-browser/set-version.js | 23 | 🟢 LOW | Debug console.log statement found |
| devtools/projects/shell-browser/src/app/chrome-message-bus.ts | 28 | 🟢 LOW | Debug console.log statement found |
| devtools/projects/shell-browser/src/app/content-script.ts | 43 | 🟢 LOW | Debug console.log statement found |
| devtools/projects/shell-browser/src/app/tab_manager.ts | 187 | 🟢 LOW | Debug console.log statement found |
| devtools/src/app/demo-app/todo/app-todo.component.ts | 72 | 🟢 LOW | Debug console.log statement found |
| devtools/src/app/demo-app/todo/home/sample.pipe.ts | 22 | 🟢 LOW | Debug console.log statement found |
| devtools/src/app/demo-app/todo/home/todos.component.ts | 149 | 🟢 LOW | Debug console.log statement found |
| goldens/public-api/manage.js | 62 | 🟢 LOW | Debug console.log statement found |
| integration/cli-hello-world-lazy/check-output-for-ngdevmode.js | 17 | 🟢 LOW | Debug console.log statement found |
| integration/platform-server/e2e/src/util.ts | 16 | 🟢 LOW | Debug console.log statement found |
| integration/platform-server/projects/ngmodule/server.ts | 54 | 🟢 LOW | Debug console.log statement found |
| integration/platform-server/projects/standalone/server.ts | 54 | 🟢 LOW | Debug console.log statement found |
| integration/platform-server-hydration/e2e/src/util.ts | 16 | 🟢 LOW | Debug console.log statement found |
| integration/platform-server-zoneless/e2e/src/util.ts | 16 | 🟢 LOW | Debug console.log statement found |
| integration/platform-server-zoneless/projects/standalone/server.ts | 54 | 🟢 LOW | Debug console.log statement found |
| modules/benchmarks/src/util.ts | 66 | 🟢 LOW | Debug console.log statement found |
| modules/playground/src/template_driven_forms/main.ts | 177 | 🟢 LOW | Debug console.log statement found |
| modules/playground/src/template_driven_forms/main.ts | 178 | 🟢 LOW | Debug console.log statement found |
| modules/ssr-benchmarks/run-benchmark.ts | 35 | 🟢 LOW | Debug console.log statement found |
| modules/ssr-benchmarks/run-benchmark.ts | 36 | 🟢 LOW | Debug console.log statement found |
| modules/ssr-benchmarks/run-benchmark.ts | 87 | 🟢 LOW | Debug console.log statement found |
| modules/ssr-benchmarks/run-benchmark.ts | 89 | 🟢 LOW | Debug console.log statement found |
| modules/utilities/e2e_util.ts | 48 | 🟢 LOW | Debug console.log statement found |
| packages/benchpress/src/reporter/console_reporter.ts | 30 | 🟢 LOW | Debug console.log statement found |
| packages/common/locales/generate-locales-tool/object-stringify.ts | 21 | 🟢 LOW | Debug console.log statement found |
| packages/compiler/test/i18n/digest_spec.ts | 65 | 🟢 LOW | Debug console.log statement found |
| packages/compiler/test/schema/dom_element_schema_registry_spec.ts | 250 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/src/ngtsc/hmr/src/extract_dependencies.ts | 266 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/src/ngtsc/imports/src/default.ts | 48 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/src/ngtsc/imports/src/default.ts | 56 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/src/ngtsc/partial_evaluator/test/diagnostics_spec.ts | 209 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/src/ngtsc/partial_evaluator/test/diagnostics_spec.ts | 224 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/src/ngtsc/translator/test/import_manager_spec.ts | 455 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/src/ngtsc/translator/test/import_manager_spec.ts | 472 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/src/ngtsc/typecheck/test/diagnostics_spec.ts | 617 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/src/ngtsc/typecheck/test/diagnostics_spec.ts | 652 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/compliance/test_cases/list_golden_update_rules.ts | 16 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/compliance/test_cases/r3_view_compiler/nullish_coalescing/GOLDEN_PARTIAL.js | 123 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/compliance/test_cases/r3_view_compiler/nullish_coalescing/nullish_coalescing_host.ts | 18 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/compliance/test_cases/r3_view_compiler_bindings/host_bindings/GOLDEN_PARTIAL.js | 1124 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/compliance/test_cases/r3_view_compiler_bindings/host_bindings/host_with_ts_expression_node.ts | 4 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/compliance/test_cases/r3_view_compiler_let/GOLDEN_PARTIAL.js | 134 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/compliance/test_cases/r3_view_compiler_let/GOLDEN_PARTIAL.js | 253 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/compliance/test_cases/r3_view_compiler_let/GOLDEN_PARTIAL.js | 591 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/compliance/test_cases/r3_view_compiler_let/let_in_child_view_listener.ts | 27 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/compliance/test_cases/r3_view_compiler_let/let_in_listener.ts | 15 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/compliance/test_cases/r3_view_compiler_let/let_optimization_listener.ts | 18 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/compliance/update_all_goldens.js | 47 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/ngtsc/defer_spec.ts | 241 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/ngtsc/defer_spec.ts | 299 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/ngtsc/defer_spec.ts | 1518 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/ngtsc/ngtsc_spec.ts | 4791 | 🟢 LOW | Debug console.log statement found |
| packages/compiler-cli/test/ngtsc/template_mapping_spec.ts | 845 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/flow_cases.ts | 11 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/getters.ts | 18 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/index.ts | 29 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/index.ts | 49 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/index.ts | 65 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/index.ts | 66 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/index.ts | 71 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/index.ts | 79 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/index.ts | 80 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/index.ts | 95 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/temporary_variables.ts | 28 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/temporary_variables.ts | 29 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/with_getters.ts | 10 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/with_getters_reference.ts | 10 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 584 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 600 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 616 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 633 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 649 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 666 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 682 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 701 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 716 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 732 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 748 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 765 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 786 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 805 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 824 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 828 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 846 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 850 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 872 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 896 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 916 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 937 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 958 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 978 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1027 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1053 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1105 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1130 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1148 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1170 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1277 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1299 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1316 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1337 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1735 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1754 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1919 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 1938 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 2666 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 2690 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 2966 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 2986 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 3006 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/inject_migration_spec.ts | 3029 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/standalone_migration_spec.ts | 2368 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/standalone_migration_spec.ts | 2589 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/standalone_migration_spec.ts | 2657 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/standalone_migration_spec.ts | 3024 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/standalone_migration_spec.ts | 3027 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/standalone_migration_spec.ts | 3065 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/standalone_migration_spec.ts | 3068 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/standalone_migration_spec.ts | 4199 | 🟢 LOW | Debug console.log statement found |
| packages/core/schematics/test/standalone_migration_spec.ts | 4233 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/application/application_ref.ts | 183 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/application/application_ref.ts | 184 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/application/application_ref.ts | 198 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/application/application_ref.ts | 200 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/application/application_ref.ts | 514 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/console.ts | 15 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/defer/instructions.ts | 93 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/di/provider_collection.ts | 72 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/hydration/api.ts | 139 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/metadata/directives.ts | 1031 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/render3/after_render/hooks.ts | 125 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/render3/after_render/hooks.ts | 189 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/render3/dynamic_bindings.ts | 175 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/render3/i18n/i18n_icu_container_visitor.ts | 83 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/zone/ng_zone.ts | 73 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/zone/ng_zone.ts | 84 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/zone/ng_zone.ts | 91 | 🟢 LOW | Debug console.log statement found |
| packages/core/src/zone/ng_zone.ts | 362 | 🟢 LOW | Debug console.log statement found |
| packages/core/test/bundling/image-directive/e2e/browser-logs-util.ts | 23 | 🟢 LOW | Debug console.log statement found |
| packages/core/test/render3/i18n/i18n_parse_spec.ts | 304 | 🟢 LOW | Debug console.log statement found |
| packages/examples/core/ts/metadata/directives.ts | 56 | 🟢 LOW | Debug console.log statement found |
| packages/examples/core/ts/metadata/directives.ts | 59 | 🟢 LOW | Debug console.log statement found |
| packages/examples/forms/ts/nestedFormArray/nested_form_array_example.ts | 45 | 🟢 LOW | Debug console.log statement found |
| packages/examples/forms/ts/nestedFormArray/nested_form_array_example.ts | 46 | 🟢 LOW | Debug console.log statement found |
| packages/examples/forms/ts/nestedFormGroup/nested_form_group_example.ts | 51 | 🟢 LOW | Debug console.log statement found |
| packages/examples/forms/ts/nestedFormGroup/nested_form_group_example.ts | 52 | 🟢 LOW | Debug console.log statement found |
| packages/examples/forms/ts/nestedFormGroup/nested_form_group_example.ts | 53 | 🟢 LOW | Debug console.log statement found |
| packages/examples/forms/ts/nestedFormGroup/nested_form_group_example.ts | 54 | 🟢 LOW | Debug console.log statement found |
| packages/examples/forms/ts/ngModelGroup/ng_model_group_example.ts | 39 | 🟢 LOW | Debug console.log statement found |
| packages/examples/forms/ts/ngModelGroup/ng_model_group_example.ts | 40 | 🟢 LOW | Debug console.log statement found |
| packages/examples/forms/ts/simpleForm/simple_form_example.ts | 32 | 🟢 LOW | Debug console.log statement found |
| packages/examples/forms/ts/simpleForm/simple_form_example.ts | 33 | 🟢 LOW | Debug console.log statement found |
| packages/examples/forms/ts/simpleFormGroup/simple_form_group_example.ts | 41 | 🟢 LOW | Debug console.log statement found |
| packages/examples/test-utils/index.ts | 22 | 🟢 LOW | Debug console.log statement found |
| packages/forms/signals/src/api/rules/validation/validation_errors.ts | 568 | 🟢 LOW | Debug console.log statement found |
| packages/forms/signals/src/api/rules/validation/validation_errors.ts | 571 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/form_builder.ts | 156 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/form_builder.ts | 168 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/form_builder.ts | 179 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_array.ts | 76 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_array.ts | 77 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_array.ts | 299 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_array.ts | 302 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_array.ts | 350 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_array.ts | 353 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_array.ts | 406 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_array.ts | 417 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_array.ts | 418 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_array.ts | 479 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_array.ts | 482 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_control.ts | 87 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_control.ts | 95 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_control.ts | 96 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_control.ts | 103 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_control.ts | 104 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_control.ts | 158 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_control.ts | 162 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_control.ts | 173 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_control.ts | 177 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_control.ts | 185 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_control.ts | 186 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_control.ts | 190 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_control.ts | 191 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_group.ts | 103 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_group.ts | 104 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_group.ts | 407 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_group.ts | 410 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_group.ts | 464 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_group.ts | 467 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_group.ts | 539 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_group.ts | 543 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_group.ts | 559 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/model/form_group.ts | 560 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/validators.ts | 176 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/validators.ts | 200 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/validators.ts | 224 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/validators.ts | 249 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/validators.ts | 289 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/validators.ts | 320 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/validators.ts | 352 | 🟢 LOW | Debug console.log statement found |
| packages/forms/src/validators.ts | 381 | 🟢 LOW | Debug console.log statement found |
| packages/language-service/test/references_and_rename_spec.ts | 1242 | 🟢 LOW | Debug console.log statement found |
| packages/localize/tools/test/translate/source_files/es5_translate_plugin_spec.ts | 138 | 🟢 LOW | Debug console.log statement found |
| packages/localize/tools/test/translate/source_files/es5_translate_plugin_spec.ts | 143 | 🟢 LOW | Debug console.log statement found |
| packages/platform-browser/src/browser/tools/common_tools.ts | 64 | 🟢 LOW | Debug console.log statement found |
| packages/platform-browser/src/browser/tools/common_tools.ts | 65 | 🟢 LOW | Debug console.log statement found |
| packages/router/src/provide_router.ts | 526 | 🟢 LOW | Debug console.log statement found |
| packages/router/src/provide_router.ts | 527 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/safety-worker.js | 20 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2504 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2511 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2518 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2527 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2528 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2529 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2535 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2578 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2580 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2584 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2591 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2596 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2606 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2611 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2623 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2642 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2647 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2657 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2658 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2670 | 🟢 LOW | Debug console.log statement found |
| packages/service-worker/worker/test/happy_spec.ts | 2671 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/example/benchmarks/event_emitter.js | 19 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/example/benchmarks/event_emitter.js | 43 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/example/benchmarks/event_emitter.js | 44 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/browser/define-property.ts | 148 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/common/events.ts | 144 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 33 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 61 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 87 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 113 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 141 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 168 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 196 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 227 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 259 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 299 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 360 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 397 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 426 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 453 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/lib/zone.configurations.api.ts | 590 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/test/browser/browser.spec.ts | 647 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/test/browser/browser.spec.ts | 3870 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/test/closure/zone.closure.ts | 213 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/test/closure/zone.closure.ts | 218 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/test/common/Error.spec.ts | 338 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/test/extra/bluebird.spec.ts | 13 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/test/extra/electron.js | 39 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/test/node/console.spec.ts | 29 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/test/test-util.ts | 63 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/test/webdriver/test.js | 34 | 🟢 LOW | Debug console.log statement found |
| packages/zone.js/test/zone-spec/long-stack-trace-zone.spec.ts | 50 | 🟢 LOW | Debug console.log statement found |
| scripts/compare-main-to-patch.js | 175 | 🟢 LOW | Debug console.log statement found |
| tools/symbol-extractor/symbol_extractor_spec/two_symbols_per_var.js | 12 | 🟢 LOW | Debug console.log statement found |
| tools/tslint/validateImportForEsmCjsInteropRule.ts | 52 | 🟢 LOW | Debug console.log statement found |
| vscode-ng-language-service/integration/e2e/jasmine.ts | 18 | 🟢 LOW | Debug console.log statement found |
| vscode-ng-language-service/integration/e2e/jasmine.ts | 21 | 🟢 LOW | Debug console.log statement found |
| vscode-ng-language-service/integration/lsp/test_utils.ts | 173 | 🟢 LOW | Debug console.log statement found |
| vscode-ng-language-service/integration/lsp/test_utils.ts | 175 | 🟢 LOW | Debug console.log statement found |
| vscode-ng-language-service/integration/lsp/test_utils.ts | 179 | 🟢 LOW | Debug console.log statement found |
| vscode-ng-language-service/integration/project/app/highlight.directive.ts | 20 | 🟢 LOW | Debug console.log statement found |
| vscode-ng-language-service/integration/project/app/highlight.directive.ts | 25 | 🟢 LOW | Debug console.log statement found |
| vscode-ng-language-service/server/src/logger.ts | 27 | 🟢 LOW | Debug console.log statement found |
| vscode-ng-language-service/server/src/logger.ts | 29 | 🟢 LOW | Debug console.log statement found |
| vscode-ng-language-service/server/src/logger.ts | 30 | 🟢 LOW | Debug console.log statement found |

### Maintenance Items (657)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/actions/deploy-docs-site/main.js | 11300 | ⚪ INFO | TODO comment found |
| .github/actions/deploy-docs-site/main.js | 29112 | ⚪ INFO | TODO comment found |
| .github/actions/deploy-docs-site/main.js | 48872 | ⚪ INFO | TODO comment found |
| .github/actions/deploy-docs-site/main.js | 48873 | ⚪ INFO | TODO comment found |
| .github/actions/deploy-docs-site/main.js | 48874 | ⚪ INFO | TODO comment found |
| .github/actions/deploy-docs-site/main.js | 57519 | ⚪ INFO | TODO comment found |
| adev/shared-docs/components/viewers/docs-viewer/docs-viewer.component.ts | 225 | ⚪ INFO | TODO comment found |
| adev/shared-docs/components/viewers/example-viewer/example-viewer.component.ts | 204 | ⚪ INFO | TODO comment found |
| adev/src/app/editor/code-editor/code-editor.component.spec.ts | 59 | ⚪ INFO | TODO comment found |
| adev/src/app/editor/code-editor/code-mirror-editor.service.ts | 69 | ⚪ INFO | TODO comment found |
| adev/src/app/editor/code-editor/constants/code-editor-extensions.ts | 70 | ⚪ INFO | TODO comment found |
| adev/src/app/editor/code-editor/services/diagnostics-state.service.ts | 22 | ⚪ INFO | TODO comment found |
| adev/src/app/features/home/home.component.spec.ts | 14 | ⚪ INFO | TODO comment found |
| adev/src/app/features/tutorial/tutorial.component.spec.ts | 35 | ⚪ INFO | TODO comment found |
| adev/src/app/features/tutorial/tutorial.component.spec.ts | 126 | ⚪ INFO | TODO comment found |
| adev/src/app/routing/navigation-entries/index.ts | 1073 | ⚪ INFO | TODO comment found |
| adev/src/app/routing/router_providers.ts | 44 | ⚪ INFO | TODO comment found |
| adev/src/content/examples/dynamic-form/src/app/question.service.ts | 11 | ⚪ INFO | TODO comment found |
| adev/src/content/examples/reactive-forms/src/app/profile-editor/profile-editor.component.ts | 55 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/1-set-up-form-model/src/app/app.ts | 1 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/1-set-up-form-model/src/app/app.ts | 3 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/1-set-up-form-model/src/app/app.ts | 5 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/1-set-up-form-model/src/app/app.ts | 13 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/1-set-up-form-model/src/app/app.ts | 14 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/2-connect-form-template/src/app/app.ts | 2 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/2-connect-form-template/src/app/app.ts | 15 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/3-add-validation/src/app/app.ts | 2 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/3-add-validation/src/app/app.ts | 24 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/3-add-validation/src/app/app.ts | 25 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/3-add-validation/src/app/app.ts | 26 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/5-add-submission/src/app/app.ts | 2 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/5-add-submission/src/app/app.ts | 30 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/5-add-submission/src/app/app.ts | 31 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/5-add-submission/src/app/app.ts | 32 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signal-forms/steps/5-add-submission/src/app/app.ts | 33 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/1-creating-your-first-signal/src/app/app.ts | 1 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/1-creating-your-first-signal/src/app/app.ts | 26 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/1-creating-your-first-signal/src/app/app.ts | 27 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/1-creating-your-first-signal/src/app/app.ts | 28 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/1-creating-your-first-signal/src/app/app.ts | 29 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/10-reacting-to-signal-changes-with-effect/src/app/app.ts | 1 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/10-reacting-to-signal-changes-with-effect/src/app/app.ts | 62 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/10-reacting-to-signal-changes-with-effect/src/app/app.ts | 64 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/10-reacting-to-signal-changes-with-effect/src/app/app.ts | 66 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/2-deriving-state-with-computed-signals/src/app/app.ts | 1 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/2-deriving-state-with-computed-signals/src/app/app.ts | 45 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/2-deriving-state-with-computed-signals/src/app/app.ts | 47 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/2-deriving-state-with-computed-signals/src/app/app.ts | 49 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/3-deriving-state-with-linked-signals/src/app/app.ts | 3 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/3-deriving-state-with-linked-signals/src/app/app.ts | 52 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/3-deriving-state-with-linked-signals/src/app/app.ts | 76 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/4-managing-async-data-with-signals/src/app/app.ts | 1 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/4-managing-async-data-with-signals/src/app/app.ts | 32 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/4-managing-async-data-with-signals/src/app/app.ts | 33 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/4-managing-async-data-with-signals/src/app/app.ts | 34 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/4-managing-async-data-with-signals/src/app/app.ts | 35 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/4-managing-async-data-with-signals/src/app/app.ts | 36 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/5-component-communication-with-signals/src/app/app.ts | 1 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/5-component-communication-with-signals/src/app/app.ts | 29 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/5-component-communication-with-signals/src/app/app.ts | 33 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/5-component-communication-with-signals/src/app/product-card.ts | 1 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/5-component-communication-with-signals/src/app/product-card.ts | 16 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/6-two-way-binding-with-model-signals/src/app/app.ts | 1 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/6-two-way-binding-with-model-signals/src/app/app.ts | 47 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/6-two-way-binding-with-model-signals/src/app/app.ts | 50 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/6-two-way-binding-with-model-signals/src/app/custom-checkbox.ts | 1 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/6-two-way-binding-with-model-signals/src/app/custom-checkbox.ts | 15 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/6-two-way-binding-with-model-signals/src/app/custom-checkbox.ts | 17 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/6-two-way-binding-with-model-signals/src/app/custom-checkbox.ts | 19 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/7-using-signals-with-services/src/app/app.ts | 1 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/7-using-signals-with-services/src/app/app.ts | 3 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/7-using-signals-with-services/src/app/app.ts | 4 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/7-using-signals-with-services/src/app/app.ts | 8 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/7-using-signals-with-services/src/app/app.ts | 24 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/7-using-signals-with-services/src/app/cart-display.ts | 65 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/7-using-signals-with-services/src/app/cart-display.ts | 70 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/7-using-signals-with-services/src/app/cart-store.ts | 1 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/7-using-signals-with-services/src/app/cart-store.ts | 9 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/7-using-signals-with-services/src/app/cart-store.ts | 12 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/7-using-signals-with-services/src/app/cart-store.ts | 15 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/8-using-signals-with-directives/src/app/highlight-directive.ts | 1 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/8-using-signals-with-directives/src/app/highlight-directive.ts | 8 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/8-using-signals-with-directives/src/app/highlight-directive.ts | 9 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/8-using-signals-with-directives/src/app/highlight-directive.ts | 10 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/8-using-signals-with-directives/src/app/highlight-directive.ts | 11 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/9-query-child-elements-with-signal-queries/src/app/app.ts | 1 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/9-query-child-elements-with-signal-queries/src/app/app.ts | 46 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/9-query-child-elements-with-signal-queries/src/app/app.ts | 62 | ⚪ INFO | TODO comment found |
| adev/src/content/tutorials/signals/steps/9-query-child-elements-with-signal-queries/src/app/app.ts | 67 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools/src/lib/devtools-tabs/router-tree/router-tree.component.spec.ts | 36 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/client-event-subscribers.ts | 315 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 71 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 76 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 81 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 86 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 91 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 96 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 101 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 106 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 111 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 116 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 121 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 126 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 131 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 136 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 141 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 146 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 151 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 156 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 161 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/hooks/profiler/native.ts | 166 | ⚪ INFO | TODO comment found |
| devtools/projects/ng-devtools-backend/src/lib/state-serializer/prop-type.spec.ts | 45 | ⚪ INFO | TODO comment found |
| devtools/projects/protocol/src/lib/messages.ts | 445 | ⚪ INFO | TODO comment found |
| integration/nodenext_resolution/include-all.ts | 37 | ⚪ INFO | TODO comment found |
| integration/nodenext_resolution/include-all.ts | 42 | ⚪ INFO | TODO comment found |
| modules/utilities/perf_util.ts | 55 | ⚪ INFO | TODO comment found |
| packages/animations/browser/src/create_engine.ts | 16 | ⚪ INFO | TODO comment found |
| packages/benchpress/src/runner.ts | 95 | ⚪ INFO | TODO comment found |
| packages/common/http/src/fetch.ts | 94 | ⚪ INFO | TODO comment found |
| packages/common/http/src/response.ts | 429 | ⚪ INFO | TODO comment found |
| packages/common/http/src/transfer_cache.ts | 399 | ⚪ INFO | TODO comment found |
| packages/common/src/dom_adapter.ts | 52 | ⚪ INFO | TODO comment found |
| packages/common/src/location/location.ts | 100 | ⚪ INFO | TODO comment found |
| packages/common/src/location/location.ts | 155 | ⚪ INFO | TODO comment found |
| packages/compiler/src/constant_pool.ts | 168 | ⚪ INFO | TODO comment found |
| packages/compiler/src/output/abstract_emitter.ts | 561 | ⚪ INFO | TODO comment found |
| packages/compiler/src/output/output_ast.ts | 1065 | ⚪ INFO | TODO comment found |
| packages/compiler/src/output/output_ast.ts | 1115 | ⚪ INFO | TODO comment found |
| packages/compiler/src/output/output_ast.ts | 1183 | ⚪ INFO | TODO comment found |
| packages/compiler/src/render3/view/compiler.ts | 587 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/ir/src/expression.ts | 108 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/ir/src/expression.ts | 579 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/ir/src/expression.ts | 1433 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/ir/src/ops/create.ts | 611 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 117 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 149 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 179 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 793 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 990 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 1204 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 1219 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 1227 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 1243 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 1255 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 1258 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 1351 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 1679 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/ingest.ts | 1802 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/apply_i18n_expressions.ts | 29 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/attribute_extraction.ts | 75 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/const_collection.ts | 42 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/const_collection.ts | 65 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/const_collection.ts | 168 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/const_collection.ts | 179 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/expand_safe_reads.ts | 53 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/expand_safe_reads.ts | 76 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/expand_safe_reads.ts | 87 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/expand_safe_reads.ts | 108 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/expand_safe_reads.ts | 195 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/extract_i18n_messages.ts | 59 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/generate_projection_def.ts | 21 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/i18n_const_collection.ts | 169 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/naming.ts | 188 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/naming.ts | 195 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/parse_extracted_styles.ts | 78 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/parse_extracted_styles.ts | 146 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/pipe_creation.ts | 40 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/pure_function_extraction.ts | 44 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/resolve_sanitizers.ts | 43 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/resolve_sanitizers.ts | 92 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/slot_allocation.ts | 72 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/temporary_variables.ts | 66 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/track_fn_optimization.ts | 41 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/track_variables.ts | 36 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/var_counting.ts | 108 | ⚪ INFO | TODO comment found |
| packages/compiler/src/template/pipeline/src/phases/var_counting.ts | 169 | ⚪ INFO | TODO comment found |
| packages/compiler/src/typecheck/ops/inputs.ts | 295 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/index.ts | 23 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/annotations/ng_module/src/handler.ts | 578 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/annotations/ng_module/src/handler.ts | 600 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/core/src/compiler.ts | 955 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/core/src/compiler.ts | 964 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/docs/src/function_extractor.ts | 32 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/docs/src/properties_extractor.ts | 122 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/docs/src/type_alias_extractor.ts | 16 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/file_system/src/node_js_file_system.ts | 97 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/file_system/src/util.ts | 17 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/file_system/test/node_js_file_system_spec.ts | 105 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/file_system/test/node_js_file_system_spec.ts | 127 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/indexer/src/api.ts | 27 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/partial_evaluator/src/interpreter.ts | 355 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/preprocessor.ts | 85 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/testing/src/mock_file_loading.ts | 63 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/translator/src/import_manager/reuse_source_file_imports.ts | 63 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/translator/src/import_manager/reuse_source_file_imports.ts | 96 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/typecheck/src/context.ts | 500 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/typecheck/src/environment.ts | 88 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/typecheck/src/template_symbol_builder.ts | 512 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/typecheck/testing/index.ts | 813 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/src/ngtsc/util/src/path.ts | 18 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/linked/linked_compile_spec.ts | 21 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/external_templates/external_template_partial.js | 11 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/i18n_message_container_tag_partial.js | 13 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/i18n_message_element_whitespace_partial.js | 20 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/i18n_message_interpolation_whitespace_partial_template.js | 11 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/input_binding_complex_partial.js | 3 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/input_binding_longhand_partial.js | 3 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/input_binding_simple_partial.js | 3 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/interpolation_basic_partial.js | 3 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/interpolation_complex_partial.js | 3 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/interpolation_with_pipe_partial.js | 3 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/ng_for_simple_partial.js | 5 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/ng_for_simple_partial.js | 14 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/ng_for_templated_partial.js | 4 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/ng_if_simple_partial.js | 5 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/ng_if_templated.js | 6 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/ng_if_templated.js | 7 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/ng_if_templated_partial.js | 4 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/ng_if_templated_partial.js | 7 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/ng_if_templated_partial.js | 8 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/output_binding_complex_partial.js | 7 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/output_binding_complex_partial.js | 12 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/output_binding_longhand_partial.js | 8 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/output_binding_simple_partial.js | 9 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/simple_element_partial.js | 5 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/two_way_binding_longhand.js | 3 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/two_way_binding_longhand_partial.js | 3 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/two_way_binding_longhand_partial.js | 6 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/two_way_binding_simple.js | 4 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/two_way_binding_simple_partial.js | 4 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/update_mode_partial.js | 12 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_cases/source_mapping/inline_templates/void_element_partial.js | 1 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_helpers/compile_test.ts | 67 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/compliance/test_helpers/sourcemap_helpers.ts | 48 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/ngtsc/env.ts | 232 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/ngtsc/template_mapping_spec.ts | 269 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/ngtsc/template_mapping_spec.ts | 290 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/ngtsc/template_mapping_spec.ts | 312 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/ngtsc/template_mapping_spec.ts | 346 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/ngtsc/template_mapping_spec.ts | 377 | ⚪ INFO | TODO comment found |
| packages/compiler-cli/test/ngtsc/template_mapping_spec.ts | 499 | ⚪ INFO | TODO comment found |
| packages/core/index.ts | 11 | ⚪ INFO | TODO comment found |
| packages/core/primitives/dom-navigation/src/navigation_types.ts | 9 | ⚪ INFO | TODO comment found |
| packages/core/primitives/signals/src/weak_ref.ts | 10 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/output-migration/output-migration.spec.ts | 252 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/output-migration/output-migration.ts | 271 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/output-migration/output-migration.ts | 284 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/output-migration/output-migration.ts | 486 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/output-migration/output-replacements.ts | 180 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/output-migration/output_helpers.ts | 154 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-migration/src/convert-input/convert_to_signal.ts | 20 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-migration/src/convert-input/convert_to_signal.ts | 185 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-migration/src/convert-input/convert_to_signal.ts | 222 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-migration/src/flow_analysis/flow_node_traversal.ts | 99 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-migration/src/input_detection/input_decorator.ts | 221 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-migration/src/passes/problematic_patterns/incompatibility_todos.ts | 50 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-migration/src/passes/reference_migration/helpers/standard_reference.ts | 29 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-migration/src/passes/reference_resolution/identify_template_references.ts | 79 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-migration/src/passes/reference_resolution/identify_ts_references.ts | 41 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-migration/src/passes/reference_resolution/template_reference_visitor.ts | 142 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-migration/src/phase_analysis.ts | 124 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-migration/test/golden-test/constructor_initializations.ts | 10 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-migration/test/migration_spec.ts | 56 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-queries-migration/migration.spec.ts | 1505 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-queries-migration/migration.spec.ts | 1546 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-queries-migration/migration.spec.ts | 1621 | ⚪ INFO | TODO comment found |
| packages/core/schematics/migrations/signal-queries-migration/migration.ts | 299 | ⚪ INFO | TODO comment found |
| packages/core/schematics/test/standalone_migration_spec.ts | 3740 | ⚪ INFO | TODO comment found |
| packages/core/schematics/test/standalone_routes_spec.ts | 906 | ⚪ INFO | TODO comment found |
| packages/core/schematics/utils/tsurge/helpers/create_program.ts | 83 | ⚪ INFO | TODO comment found |
| packages/core/schematics/utils/tsurge/helpers/google3/unified_module_resolution.ts | 11 | ⚪ INFO | TODO comment found |
| packages/core/schematics/utils/tsurge/test/output_migration.spec.ts | 37 | ⚪ INFO | TODO comment found |
| packages/core/schematics/utils/tsurge/test/output_migration.ts | 115 | ⚪ INFO | TODO comment found |
| packages/core/src/authoring/model/model_signal.ts | 79 | ⚪ INFO | TODO comment found |
| packages/core/src/change_detection/differs/default_iterable_differ.ts | 41 | ⚪ INFO | TODO comment found |
| packages/core/src/debug/debug_node.ts | 200 | ⚪ INFO | TODO comment found |
| packages/core/src/debug/debug_node.ts | 257 | ⚪ INFO | TODO comment found |
| packages/core/src/di/injector_compatibility.ts | 108 | ⚪ INFO | TODO comment found |
| packages/core/src/render3/definition.ts | 372 | ⚪ INFO | TODO comment found |
| packages/core/src/render3/i18n/i18n_apply.ts | 169 | ⚪ INFO | TODO comment found |
| packages/core/src/render3/instructions/control.ts | 346 | ⚪ INFO | TODO comment found |
| packages/core/src/render3/jit/module.ts | 593 | ⚪ INFO | TODO comment found |
| packages/core/src/render3/pipe.ts | 96 | ⚪ INFO | TODO comment found |
| packages/core/src/render3/queries/query_reactive.ts | 138 | ⚪ INFO | TODO comment found |
| packages/core/src/render3/reactivity/root_effect_scheduler.ts | 132 | ⚪ INFO | TODO comment found |
| packages/core/src/render3/tnode_manipulation.ts | 292 | ⚪ INFO | TODO comment found |
| packages/core/src/zone/ng_zone.ts | 355 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/component_spec.ts | 188 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/di_spec.ts | 5763 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/hmr_spec.ts | 2388 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/hmr_spec.ts | 2391 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 509 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 510 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 844 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 845 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 846 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 958 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 960 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 961 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1004 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1005 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1041 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1042 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1078 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1079 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1126 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1127 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1128 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1129 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1130 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1131 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1132 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1133 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1134 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1135 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1136 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1137 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1138 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1139 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1140 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1141 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1142 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1143 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1144 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1145 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1146 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1150 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1151 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1489 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1490 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1491 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1547 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1549 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1550 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1597 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1598 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1638 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1639 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1727 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1728 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1729 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1730 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1731 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1732 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1733 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1734 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1735 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1736 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1737 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1738 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1739 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1740 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1741 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1742 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1743 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1744 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1745 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1746 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1747 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1751 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 1752 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2091 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2092 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2093 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2152 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2154 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2155 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2214 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2215 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2257 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2258 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2372 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2373 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2374 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2375 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2376 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2377 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2378 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2379 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2380 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2381 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2382 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2383 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2384 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2385 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2386 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2387 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2388 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2389 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2390 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2391 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2392 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2396 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2397 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2735 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2736 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2737 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2791 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2793 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2794 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2839 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2840 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2878 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2879 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2966 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2967 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2968 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2969 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2970 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2971 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2972 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2973 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2974 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2975 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2976 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2977 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2978 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2979 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2980 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2981 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2982 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2983 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2984 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2985 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2986 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2990 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 2991 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3335 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3336 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3337 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3395 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3397 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3398 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3447 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3448 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3490 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3491 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3638 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3639 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3640 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3641 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3642 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3643 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3644 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3645 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3646 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3647 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3648 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3649 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3650 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3651 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3652 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3653 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3654 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3655 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3656 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3657 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3658 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3662 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 3663 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4007 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4008 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4009 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4069 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4071 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4072 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4123 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4124 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4168 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4169 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4330 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4331 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4332 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4333 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4334 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4335 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4336 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4337 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4338 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4339 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4340 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4341 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4342 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4343 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4344 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4345 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4346 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4347 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4348 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4349 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4350 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4354 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4355 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4702 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4703 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4704 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4765 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4767 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4768 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4923 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4924 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4969 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 4970 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5211 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5212 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5213 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5214 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5215 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5216 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5217 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5218 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5219 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5220 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5221 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5222 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5223 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5224 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5225 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5226 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5227 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5228 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5229 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5230 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5231 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5235 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5236 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5585 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5586 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5587 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5650 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5652 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5653 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5790 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5791 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5838 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 5839 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6006 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6007 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6008 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6009 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6010 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6011 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6012 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6013 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6014 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6015 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6016 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6017 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6018 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6019 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6020 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6021 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6022 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6023 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6024 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6025 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/inherit_definition_feature_spec.ts | 6026 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/property_binding_spec.ts | 844 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/property_binding_spec.ts | 927 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/renderer_factory_spec.ts | 663 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/selectorless/selectorless.spec.ts | 13 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/styling_spec.ts | 533 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/styling_spec.ts | 576 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/styling_spec.ts | 618 | ⚪ INFO | TODO comment found |
| packages/core/test/acceptance/styling_spec.ts | 3999 | ⚪ INFO | TODO comment found |
| packages/core/test/event_emitter_spec.ts | 227 | ⚪ INFO | TODO comment found |
| packages/core/test/linker/change_detection_integration_spec.ts | 691 | ⚪ INFO | TODO comment found |
| packages/core/test/render3/instructions/mock_renderer_factory.ts | 90 | ⚪ INFO | TODO comment found |
| packages/core/test/render3/list_reconciliation_spec.ts | 125 | ⚪ INFO | TODO comment found |
| packages/core/test/render3/list_reconciliation_spec.ts | 443 | ⚪ INFO | TODO comment found |
| packages/core/test/render3/node_selector_matcher_spec.ts | 69 | ⚪ INFO | TODO comment found |
| packages/core/test/render3/node_selector_matcher_spec.ts | 93 | ⚪ INFO | TODO comment found |
| packages/elements/src/create-custom-element.ts | 197 | ⚪ INFO | TODO comment found |
| packages/elements/test/utils_spec.ts | 26 | ⚪ INFO | TODO comment found |
| packages/examples/service-worker/push/service_worker_component.ts | 33 | ⚪ INFO | TODO comment found |
| packages/examples/service-worker/push/service_worker_component.ts | 43 | ⚪ INFO | TODO comment found |
| packages/forms/signals/src/api/control.ts | 160 | ⚪ INFO | TODO comment found |
| packages/forms/signals/src/api/control.ts | 182 | ⚪ INFO | TODO comment found |
| packages/forms/signals/src/api/control.ts | 190 | ⚪ INFO | TODO comment found |
| packages/forms/signals/src/controls/interop_ng_control.ts | 23 | ⚪ INFO | TODO comment found |
| packages/forms/signals/src/directive/control_native.ts | 45 | ⚪ INFO | TODO comment found |
| packages/forms/signals/src/directive/control_native.ts | 67 | ⚪ INFO | TODO comment found |
| packages/forms/signals/src/field/node.ts | 492 | ⚪ INFO | TODO comment found |
| packages/forms/signals/src/field/structure.ts | 85 | ⚪ INFO | TODO comment found |
| packages/forms/signals/src/field/structure.ts | 402 | ⚪ INFO | TODO comment found |
| packages/forms/signals/src/field/structure.ts | 636 | ⚪ INFO | TODO comment found |
| packages/forms/signals/src/field/validation.ts | 232 | ⚪ INFO | TODO comment found |
| packages/forms/signals/src/field/validation.ts | 234 | ⚪ INFO | TODO comment found |
| packages/forms/signals/src/schema/logic_node.ts | 365 | ⚪ INFO | TODO comment found |
| packages/forms/signals/test/node/api/debounce.spec.ts | 528 | ⚪ INFO | TODO comment found |
| packages/forms/signals/test/node/logic_node.spec.ts | 417 | ⚪ INFO | TODO comment found |
| packages/forms/signals/test/web/form_field.spec.ts | 4781 | ⚪ INFO | TODO comment found |
| packages/forms/signals/test/web/form_field.spec.ts | 6499 | ⚪ INFO | TODO comment found |
| packages/forms/signals/test/web/interop.spec.ts | 1466 | ⚪ INFO | TODO comment found |
| packages/forms/src/directives/default_value_accessor.ts | 89 | ⚪ INFO | TODO comment found |
| packages/forms/src/directives/ng_control.ts | 233 | ⚪ INFO | TODO comment found |
| packages/forms/src/directives/shared.ts | 400 | ⚪ INFO | TODO comment found |
| packages/forms/src/model/abstract_model.ts | 1689 | ⚪ INFO | TODO comment found |
| packages/forms/src/model/form_group.ts | 683 | ⚪ INFO | TODO comment found |
| packages/forms/test/reactive_integration_spec.ts | 360 | ⚪ INFO | TODO comment found |
| packages/language-service/src/completions.ts | 240 | ⚪ INFO | TODO comment found |
| packages/language-service/src/language_service.ts | 922 | ⚪ INFO | TODO comment found |
| packages/language-service/src/refactorings/convert_to_signal_queries/apply_query_refactoring.ts | 75 | ⚪ INFO | TODO comment found |
| packages/language-service/src/utils/ts_utils.ts | 421 | ⚪ INFO | TODO comment found |
| packages/language-service/test/legacy/template_target_spec.ts | 149 | ⚪ INFO | TODO comment found |
| packages/language-service/test/legacy/template_target_spec.ts | 309 | ⚪ INFO | TODO comment found |
| packages/language-service/test/legacy/template_target_spec.ts | 351 | ⚪ INFO | TODO comment found |
| packages/language-service/test/legacy/template_target_spec.ts | 362 | ⚪ INFO | TODO comment found |
| packages/language-service/test/legacy/template_target_spec.ts | 424 | ⚪ INFO | TODO comment found |
| packages/language-service/test/legacy/template_target_spec.ts | 617 | ⚪ INFO | TODO comment found |
| packages/language-service/test/legacy/template_target_spec.ts | 905 | ⚪ INFO | TODO comment found |
| packages/language-service/test/legacy/template_target_spec.ts | 916 | ⚪ INFO | TODO comment found |
| packages/language-service/test/legacy/template_target_spec.ts | 1252 | ⚪ INFO | TODO comment found |
| packages/localize/tools/esbuild.config.js | 14 | ⚪ INFO | TODO comment found |
| packages/platform-browser/src/dom/dom_renderer.ts | 282 | ⚪ INFO | TODO comment found |
| packages/platform-browser/src/dom/dom_renderer.ts | 540 | ⚪ INFO | TODO comment found |
| packages/platform-browser/src/dom/events/event_manager_plugin.ts | 23 | ⚪ INFO | TODO comment found |
| packages/platform-server/test/incremental_hydration_spec.ts | 2266 | ⚪ INFO | TODO comment found |
| packages/platform-server/test/integration_spec.ts | 645 | ⚪ INFO | TODO comment found |
| packages/router/src/directives/router_link.ts | 508 | ⚪ INFO | TODO comment found |
| packages/router/src/navigation_transition.ts | 427 | ⚪ INFO | TODO comment found |
| packages/router/src/operators/setup_activated_route_injectors.ts | 53 | ⚪ INFO | TODO comment found |
| packages/router/src/router.ts | 149 | ⚪ INFO | TODO comment found |
| packages/router/src/router.ts | 259 | ⚪ INFO | TODO comment found |
| packages/router/src/router.ts | 310 | ⚪ INFO | TODO comment found |
| packages/router/src/url_tree.ts | 146 | ⚪ INFO | TODO comment found |
| packages/service-worker/cli/esbuild.config.js | 10 | ⚪ INFO | TODO comment found |
| packages/service-worker/cli/esbuild.config.js | 15 | ⚪ INFO | TODO comment found |
| packages/service-worker/worker/src/assets.ts | 432 | ⚪ INFO | TODO comment found |
| packages/service-worker/worker/src/data.ts | 492 | ⚪ INFO | TODO comment found |
| packages/service-worker/worker/src/data.ts | 524 | ⚪ INFO | TODO comment found |
| packages/service-worker/worker/src/data.ts | 558 | ⚪ INFO | TODO comment found |
| packages/service-worker/worker/src/driver.ts | 852 | ⚪ INFO | TODO comment found |
| packages/service-worker/worker/src/driver.ts | 993 | ⚪ INFO | TODO comment found |
| packages/upgrade/src/common/src/upgrade_helper.ts | 126 | ⚪ INFO | TODO comment found |
| packages/upgrade/src/common/src/util.ts | 29 | ⚪ INFO | TODO comment found |
| packages/upgrade/static/test/integration/upgrade_component_spec.ts | 1896 | ⚪ INFO | TODO comment found |
| packages/zone.js/lib/browser/define-property.ts | 139 | ⚪ INFO | TODO comment found |
| packages/zone.js/lib/common/utils.ts | 469 | ⚪ INFO | TODO comment found |
| packages/zone.js/lib/extra/bluebird.ts | 13 | ⚪ INFO | TODO comment found |
| packages/zone.js/lib/zone-impl.ts | 1009 | ⚪ INFO | TODO comment found |
| packages/zone.js/lib/zone-impl.ts | 1421 | ⚪ INFO | TODO comment found |
| packages/zone.js/test/browser/XMLHttpRequest.spec.ts | 149 | ⚪ INFO | TODO comment found |
| packages/zone.js/test/browser/browser.spec.ts | 800 | ⚪ INFO | TODO comment found |
| packages/zone.js/test/browser/browser.spec.ts | 906 | ⚪ INFO | TODO comment found |
| packages/zone.js/test/browser/browser.spec.ts | 3621 | ⚪ INFO | TODO comment found |
| packages/zone.js/test/common_tests.ts | 26 | ⚪ INFO | TODO comment found |
| packages/zone.js/test/rxjs/rxjs.Observable.multicast.spec.ts | 11 | ⚪ INFO | TODO comment found |
| packages/zone.js/test/rxjs/rxjs.spec.ts | 49 | ⚪ INFO | TODO comment found |
| packages/zone.js/test/webdriver/test.js | 9 | ⚪ INFO | TODO comment found |
| vscode-ng-language-service/integration/e2e/index.ts | 29 | ⚪ INFO | TODO comment found |
| vscode-ng-language-service/server/src/handlers/completions.ts | 23 | ⚪ INFO | TODO comment found |
| vscode-ng-language-service/server/src/handlers/completions.ts | 163 | ⚪ INFO | TODO comment found |
| vscode-ng-language-service/server/src/logger.ts | 61 | ⚪ INFO | TODO comment found |
| vscode-ng-language-service/server/src/session.ts | 181 | ⚪ INFO | TODO comment found |
| vscode-ng-language-service/server/src/session.ts | 534 | ⚪ INFO | TODO comment found |
| vscode-ng-language-service/server/src/text_render.ts | 58 | ⚪ INFO | TODO comment found |

## Detailed Findings

### MAINTENANCE

**Total:** 657 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/actions/deploy-docs-site/main.js | 11300 | ⚪ INFO | TODO comment found |
| .github/actions/deploy-docs-site/main.js | 29112 | ⚪ INFO | TODO comment found |
| .github/actions/deploy-docs-site/main.js | 48872 | ⚪ INFO | TODO comment found |
| .github/actions/deploy-docs-site/main.js | 48873 | ⚪ INFO | TODO comment found |
| .github/actions/deploy-docs-site/main.js | 48874 | ⚪ INFO | TODO comment found |
| .github/actions/deploy-docs-site/main.js | 57519 | ⚪ INFO | TODO comment found |
| adev/shared-docs/components/viewers/docs-viewer/docs-viewer.component.ts | 225 | ⚪ INFO | TODO comment found |
| adev/shared-docs/components/viewers/example-viewer/example-viewer.component.ts | 204 | ⚪ INFO | TODO comment found |
| adev/src/app/editor/code-editor/code-editor.component.spec.ts | 59 | ⚪ INFO | TODO comment found |
| adev/src/app/editor/code-editor/code-mirror-editor.service.ts | 69 | ⚪ INFO | TODO comment found |

*... and 647 more*

### CODE_QUALITY

**Total:** 335 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/actions/deploy-docs-site/main.js | 31713 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 31716 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 31729 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 31732 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 36749 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 50918 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 55604 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 63957 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64002 | 🟢 LOW | Debug console.log statement found |
| .github/actions/deploy-docs-site/main.js | 64003 | 🟢 LOW | Debug console.log statement found |

*... and 325 more*

### SECURITY

**Total:** 52 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| adev/src/app/environment.ts | 25 | 🟠 HIGH | Potential API key detected |
| adev/src/content/tutorials/learn-angular/steps/11-optimizing-images/answer/src/app/user.ts | 25 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/11-optimizing-images/src/app/user.ts | 24 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/12-enable-routing/answer/src/app/user/user.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/12-enable-routing/src/app/user/user.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/13-define-a-route/answer/src/app/user/user.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/13-define-a-route/src/app/user/user.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/14-routerLink/answer/src/app/user/user.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/14-routerLink/src/app/user/user.ts | 8 | 🟠 HIGH | Hardcoded username/password detected |
| adev/src/content/tutorials/learn-angular/steps/15-forms/answer/src/app/user.ts | 18 | 🟠 HIGH | Hardcoded username/password detected |

*... and 42 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 68/100 (Tier C)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -360 | Fair ⚠️ |
| Code Quality | -475 | Needs improvement ⚠️ |
| Test Coverage | +1 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 24 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 18.0%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

