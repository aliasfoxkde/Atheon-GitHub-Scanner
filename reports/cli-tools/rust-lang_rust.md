# Repository Analysis Report: rust-lang/rust

**Generated:** 2026-06-19 08:58:36 CDT

**Quality Score:** 97/100 (Tier A)

## Executive Summary

- **Overall Quality:** A (97/100)
- **Total Findings:** 139
- **Critical Issues:** 0
- **High Issues:** 0
- **Medium Issues:** 13
- **Low Issues:** 126
- **Files Scanned:** 60441

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 126 | Medium |
| maintenance | 12 | Medium |
| security | 1 | Medium |

## Repository Overview

- **Owner:** rust-lang
- **Name:** rust
- **Description:** Empowering everyone to build reliable and efficient software.
- **Primary Language:** Rust
- **Stars:** 113990
- **Forks:** 14996
- **Open Issues:** 12458
- **Size:** 922996 KB
- **Created:** 2010-06-16
- **Last Updated:** 2026-06-19
- **Default Branch:** main

**Topics:** compiler, language, rust

## Security Analysis

⚠️ **Found 1 security-related findings.**

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 2.0% | Poor ❌ |
| Documentation | 0.4% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (126)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| compiler/rustc_codegen_gcc/tools/check_intrinsics_duplicates.py | 24 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/check_intrinsics_duplicates.py | 26 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/check_intrinsics_duplicates.py | 41 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/check_intrinsics_duplicates.py | 45 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/check_intrinsics_duplicates.py | 53 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/check_intrinsics_duplicates.py | 62 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/generate_intrinsics.py | 11 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/generate_intrinsics.py | 20 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/generate_intrinsics.py | 23 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/generate_intrinsics.py | 27 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/generate_intrinsics.py | 28 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/generate_intrinsics.py | 49 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/generate_intrinsics.py | 86 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/generate_intrinsics.py | 125 | 🟢 LOW | Debug print statement found |
| library/compiler-builtins/ci/ci-util.py | 71 | 🟢 LOW | Debug print statement found |
| library/compiler-builtins/ci/ci-util.py | 329 | 🟢 LOW | Debug print statement found |
| library/compiler-builtins/ci/ci-util.py | 330 | 🟢 LOW | Debug print statement found |
| library/compiler-builtins/ci/ci-util.py | 472 | 🟢 LOW | Debug print statement found |
| library/compiler-builtins/ci/ci-util.py | 474 | 🟢 LOW | Debug print statement found |
| library/compiler-builtins/ci/ci-util.py | 508 | 🟢 LOW | Debug print statement found |
| library/compiler-builtins/etc/update-api-list.py | 34 | 🟢 LOW | Debug print statement found |
| library/compiler-builtins/etc/update-api-list.py | 230 | 🟢 LOW | Debug print statement found |
| library/compiler-builtins/etc/update-api-list.py | 238 | 🟢 LOW | Debug print statement found |
| library/compiler-builtins/etc/update-api-list.py | 292 | 🟢 LOW | Debug print statement found |
| src/bootstrap/bootstrap.py | 49 | 🟢 LOW | Debug print statement found |
| src/bootstrap/bootstrap.py | 630 | 🟢 LOW | Debug print statement found |
| src/bootstrap/bootstrap.py | 703 | 🟢 LOW | Debug print statement found |
| src/bootstrap/bootstrap.py | 1056 | 🟢 LOW | Debug print statement found |
| src/bootstrap/bootstrap.py | 1065 | 🟢 LOW | Debug print statement found |
| src/bootstrap/bootstrap.py | 1436 | 🟢 LOW | Debug print statement found |
| src/bootstrap/bootstrap_test.py | 40 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 356 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 360 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 372 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 373 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 374 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 380 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 382 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 383 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 384 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 385 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 386 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 387 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 388 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 389 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 390 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 391 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 392 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 393 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 718 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 804 | 🟢 LOW | Debug print statement found |
| src/bootstrap/configure.py | 828 | 🟢 LOW | Debug print statement found |
| src/ci/cpu-usage-over-time.py | 165 | 🟢 LOW | Debug print statement found |
| src/ci/cpu-usage-over-time.py | 169 | 🟢 LOW | Debug print statement found |
| src/ci/cpu-usage-over-time.py | 175 | 🟢 LOW | Debug print statement found |
| src/ci/docker/scripts/android-sdk-manager.py | 219 | 🟢 LOW | Debug print statement found |
| src/ci/docker/scripts/fuchsia-test-runner.py | 524 | 🟢 LOW | Debug print statement found |
| src/ci/docker/scripts/fuchsia-test-runner.py | 1083 | 🟢 LOW | Debug print statement found |
| src/ci/docker/scripts/fuchsia-test-runner.py | 1086 | 🟢 LOW | Debug print statement found |
| src/ci/docker/scripts/fuchsia-test-runner.py | 1089 | 🟢 LOW | Debug print statement found |
| src/ci/docker/scripts/fuchsia-test-runner.py | 1091 | 🟢 LOW | Debug print statement found |
| src/doc/rustc-dev-guide/mermaid.min.js | 3 | 🟢 LOW | Debug console.log statement found |
| src/etc/dec2flt_table.py | 44 | 🟢 LOW | Debug print statement found |
| src/etc/dec2flt_table.py | 45 | 🟢 LOW | Debug print statement found |
| src/etc/dec2flt_table.py | 46 | 🟢 LOW | Debug print statement found |
| src/etc/dec2flt_table.py | 47 | 🟢 LOW | Debug print statement found |
| src/etc/dec2flt_table.py | 48 | 🟢 LOW | Debug print statement found |
| src/etc/dec2flt_table.py | 49 | 🟢 LOW | Debug print statement found |
| src/etc/dec2flt_table.py | 50 | 🟢 LOW | Debug print statement found |
| src/etc/dec2flt_table.py | 97 | 🟢 LOW | Debug print statement found |
| src/etc/dec2flt_table.py | 98 | 🟢 LOW | Debug print statement found |
| src/etc/dec2flt_table.py | 100 | 🟢 LOW | Debug print statement found |
| src/etc/dec2flt_table.py | 106 | 🟢 LOW | Debug print statement found |
| src/etc/dec2flt_table.py | 107 | 🟢 LOW | Debug print statement found |
| src/etc/htmldocck.py | 336 | 🟢 LOW | Debug print statement found |
| src/etc/htmldocck.py | 380 | 🟢 LOW | Debug print statement found |
| src/etc/htmldocck.py | 381 | 🟢 LOW | Debug print statement found |
| src/etc/htmldocck.py | 382 | 🟢 LOW | Debug print statement found |
| src/etc/htmldocck.py | 383 | 🟢 LOW | Debug print statement found |
| src/etc/htmldocck.py | 384 | 🟢 LOW | Debug print statement found |
| src/etc/htmldocck.py | 445 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 38 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 51 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 52 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 77 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 82 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 111 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 118 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 169 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 181 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 195 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 196 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 197 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 198 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 199 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 212 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 217 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 249 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 250 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_batchmode/runner.py | 251 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_lookup.py | 343 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_lookup.py | 365 | 🟢 LOW | Debug print statement found |
| src/etc/lldb_providers.py | 345 | 🟢 LOW | Debug print statement found |
| src/tools/clippy/util/versions.py | 48 | 🟢 LOW | Debug print statement found |
| src/tools/miri/ci/scrape-targets.py | 15 | 🟢 LOW | Debug print statement found |
| src/tools/miri/test-cargo-miri/run-test.py | 22 | 🟢 LOW | Debug print statement found |
| src/tools/miri/test-cargo-miri/run-test.py | 51 | 🟢 LOW | Debug print statement found |
| src/tools/miri/test-cargo-miri/run-test.py | 52 | 🟢 LOW | Debug print statement found |
| src/tools/miri/test-cargo-miri/run-test.py | 54 | 🟢 LOW | Debug print statement found |
| src/tools/miri/test-cargo-miri/run-test.py | 55 | 🟢 LOW | Debug print statement found |
| src/tools/miri/test-cargo-miri/run-test.py | 61 | 🟢 LOW | Debug print statement found |
| src/tools/miri/test-cargo-miri/run-test.py | 87 | 🟢 LOW | Debug print statement found |
| src/tools/miri/test-cargo-miri/run-test.py | 103 | 🟢 LOW | Debug print statement found |
| src/tools/miri/test-cargo-miri/run-test.py | 104 | 🟢 LOW | Debug print statement found |
| src/tools/miri/test-cargo-miri/run-test.py | 105 | 🟢 LOW | Debug print statement found |
| src/tools/miri/test-cargo-miri/run-test.py | 208 | 🟢 LOW | Debug print statement found |
| src/tools/miri/test-cargo-miri/run-test.py | 220 | 🟢 LOW | Debug print statement found |
| src/tools/publish_toolstate.py | 72 | 🟢 LOW | Debug print statement found |
| src/tools/publish_toolstate.py | 137 | 🟢 LOW | Debug print statement found |
| src/tools/publish_toolstate.py | 222 | 🟢 LOW | Debug print statement found |
| src/tools/publish_toolstate.py | 228 | 🟢 LOW | Debug print statement found |
| src/tools/publish_toolstate.py | 234 | 🟢 LOW | Debug print statement found |
| src/tools/publish_toolstate.py | 298 | 🟢 LOW | Debug print statement found |
| src/tools/publish_toolstate.py | 301 | 🟢 LOW | Debug print statement found |
| src/tools/publish_toolstate.py | 304 | 🟢 LOW | Debug print statement found |
| src/tools/publish_toolstate.py | 324 | 🟢 LOW | Debug print statement found |

### Maintenance Items (12)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| compiler/rustc_llvm/llvm-wrapper/PassWrapper.cpp | 887 | 🟡 MEDIUM | FIXME comment indicating known issue |
| compiler/rustc_llvm/llvm-wrapper/RustWrapper.cpp | 1219 | 🟡 MEDIUM | FIXME comment indicating known issue |
| compiler/rustc_llvm/llvm-wrapper/RustWrapper.cpp | 1662 | 🟡 MEDIUM | FIXME comment indicating known issue |
| compiler/rustc_llvm/llvm-wrapper/SymbolWrapper.cpp | 27 | 🟡 MEDIUM | FIXME comment indicating known issue |
| library/compiler-builtins/etc/update-api-list.py | 9 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/bootstrap/bootstrap.py | 710 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/ci/docker/scripts/fuchsia-test-runner.py | 545 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/ci/docker/scripts/fuchsia-test-runner.py | 618 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/etc/lldb_lookup.py | 135 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/etc/lldb_lookup.py | 446 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/etc/lldb_providers.py | 1529 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/librustdoc/html/static/js/search.js | 2748 | 🟡 MEDIUM | FIXME comment indicating known issue |

## Detailed Findings

### CODE_QUALITY

**Total:** 126 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| compiler/rustc_codegen_gcc/tools/check_intrinsics_duplicates.py | 24 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/check_intrinsics_duplicates.py | 26 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/check_intrinsics_duplicates.py | 41 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/check_intrinsics_duplicates.py | 45 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/check_intrinsics_duplicates.py | 53 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/check_intrinsics_duplicates.py | 62 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/generate_intrinsics.py | 11 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/generate_intrinsics.py | 20 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/generate_intrinsics.py | 23 | 🟢 LOW | Debug print statement found |
| compiler/rustc_codegen_gcc/tools/generate_intrinsics.py | 27 | 🟢 LOW | Debug print statement found |

*... and 116 more*

### MAINTENANCE

**Total:** 12 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| compiler/rustc_llvm/llvm-wrapper/PassWrapper.cpp | 887 | 🟡 MEDIUM | FIXME comment indicating known issue |
| compiler/rustc_llvm/llvm-wrapper/RustWrapper.cpp | 1219 | 🟡 MEDIUM | FIXME comment indicating known issue |
| compiler/rustc_llvm/llvm-wrapper/RustWrapper.cpp | 1662 | 🟡 MEDIUM | FIXME comment indicating known issue |
| compiler/rustc_llvm/llvm-wrapper/SymbolWrapper.cpp | 27 | 🟡 MEDIUM | FIXME comment indicating known issue |
| library/compiler-builtins/etc/update-api-list.py | 9 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/bootstrap/bootstrap.py | 710 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/ci/docker/scripts/fuchsia-test-runner.py | 545 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/ci/docker/scripts/fuchsia-test-runner.py | 618 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/etc/lldb_lookup.py | 135 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/etc/lldb_lookup.py | 446 | 🟡 MEDIUM | FIXME comment indicating known issue |

*... and 2 more*

### SECURITY

**Total:** 1 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| src/ci/docker/scripts/android-sdk-manager.py | 54 | 🟡 MEDIUM | Weak cryptographic algorithm detected |

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 97/100 (Tier A)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -0 | Good ✅ |
| Code Quality | -191 | Needs improvement ⚠️ |
| Test Coverage | +0 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 2.0%. Aim for at least 70% coverage.

2. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

