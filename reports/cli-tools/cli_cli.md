# Repository Analysis Report: cli/cli

**Generated:** 2026-06-19 08:58:18 CDT

**Quality Score:** 86/100 (Tier B)

## Executive Summary

- **Overall Quality:** B (86/100)
- **Total Findings:** 81
- **Critical Issues:** 0
- **High Issues:** 14
- **Medium Issues:** 5
- **Low Issues:** 0
- **Files Scanned:** 1319

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| maintenance | 63 | Medium |
| security | 18 | High |

## Repository Overview

- **Owner:** cli
- **Name:** cli
- **Description:** GitHub’s official command line tool
- **Primary Language:** Go
- **Stars:** 44905
- **Forks:** 8576
- **Open Issues:** 1011
- **Size:** 77126 KB
- **Created:** 2019-10-03
- **Last Updated:** 2026-06-19
- **Default Branch:** trunk

**Topics:** cli, git, github-api-v4, golang

## Security Analysis

⚠️ **Found 18 security-related findings.**

### ⚠️ High Severity Issues (14)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| pkg/cmd/auth/logout/logout_test.go | 72 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 80 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 237 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 298 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 382 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 397 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 416 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 431 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 477 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 493 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/switch/switch_test.go | 43 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/codespace/delete_test.go | 161 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/codespace/delete_test.go | 186 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/codespace/list_test.go | 142 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 40.9% | Fair ⚠️ |
| Documentation | 0.4% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Maintenance Items (63)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| api/queries_pr.go | 558 | ⚪ INFO | TODO comment found |
| api/queries_repo.go | 871 | ⚪ INFO | TODO comment found |
| api/queries_repo.go | 1020 | ⚪ INFO | TODO comment found |
| context/context.go | 1 | ⚪ INFO | TODO comment found |
| git/client_test.go | 1169 | ⚪ INFO | TODO comment found |
| internal/config/config.go | 281 | ⚪ INFO | TODO comment found |
| internal/featuredetection/feature_detection.go | 202 | ⚪ INFO | TODO comment found |
| internal/featuredetection/feature_detection.go | 461 | ⚪ INFO | TODO comment found |
| internal/update/update_test.go | 412 | ⚪ INFO | TODO comment found |
| internal/update/update_test.go | 469 | ⚪ INFO | TODO comment found |
| pkg/cmd/agent-task/capi/job.go | 112 | ⚪ INFO | TODO comment found |
| pkg/cmd/agent-task/capi/sessions.go | 430 | ⚪ INFO | TODO comment found |
| pkg/cmd/agent-task/capi/sessions.go | 506 | ⚪ INFO | TODO comment found |
| pkg/cmd/agent-task/shared/log.go | 165 | ⚪ INFO | TODO comment found |
| pkg/cmd/agent-task/shared/log.go | 222 | ⚪ INFO | TODO comment found |
| pkg/cmd/api/api.go | 497 | ⚪ INFO | TODO comment found |
| pkg/cmd/attestation/artifact/artifact.go | 70 | ⚪ INFO | TODO comment found |
| pkg/cmd/auth/shared/gitcredentials/helper_config.go | 97 | ⚪ INFO | TODO comment found |
| pkg/cmd/codespace/delete.go | 61 | ⚪ INFO | TODO comment found |
| pkg/cmd/codespace/edit.go | 50 | ⚪ INFO | TODO comment found |
| pkg/cmd/codespace/ports.go | 255 | ⚪ INFO | TODO comment found |
| pkg/cmd/gist/shared/shared.go | 238 | ⚪ INFO | TODO comment found |
| pkg/cmd/issue/argparsetest/argparsetest.go | 82 | ⚪ INFO | TODO comment found |
| pkg/cmd/issue/view/view.go | 430 | ⚪ INFO | TODO comment found |
| pkg/cmd/pr/checkout/checkout.go | 194 | ⚪ INFO | TODO comment found |
| pkg/cmd/pr/checkout/checkout.go | 229 | ⚪ INFO | TODO comment found |
| pkg/cmd/pr/checkout/checkout.go | 233 | ⚪ INFO | TODO comment found |
| pkg/cmd/pr/create/create.go | 732 | ⚪ INFO | TODO comment found |
| pkg/cmd/pr/create/create.go | 1024 | ⚪ INFO | TODO comment found |
| pkg/cmd/pr/merge/http.go | 42 | ⚪ INFO | TODO comment found |
| pkg/cmd/pr/merge/merge.go | 274 | ⚪ INFO | TODO comment found |
| pkg/cmd/pr/merge/merge.go | 471 | ⚪ INFO | TODO comment found |
| pkg/cmd/pr/shared/finder.go | 201 | ⚪ INFO | TODO comment found |
| pkg/cmd/pr/update-branch/update_branch.go | 126 | ⚪ INFO | TODO comment found |
| pkg/cmd/project/item-edit/item_edit.go | 350 | ⚪ INFO | TODO comment found |
| pkg/cmd/project/list/list.go | 113 | ⚪ INFO | TODO comment found |
| pkg/cmd/project/shared/queries/queries.go | 100 | ⚪ INFO | TODO comment found |
| pkg/cmd/project/shared/queries/queries.go | 1678 | ⚪ INFO | TODO comment found |
| pkg/cmd/release/create/create.go | 340 | ⚪ INFO | TODO comment found |
| pkg/cmd/release/create/create.go | 654 | ⚪ INFO | TODO comment found |
| pkg/cmd/release/list/http.go | 42 | ⚪ INFO | TODO comment found |
| pkg/cmd/release/list/http.go | 121 | ⚪ INFO | TODO comment found |
| pkg/cmd/release/list/list.go | 78 | ⚪ INFO | TODO comment found |
| pkg/cmd/release/list/list_test.go | 184 | ⚪ INFO | TODO comment found |
| pkg/cmd/release/list/list_test.go | 252 | ⚪ INFO | TODO comment found |
| pkg/cmd/release/list/list_test.go | 288 | ⚪ INFO | TODO comment found |
| pkg/cmd/release/list/list_test.go | 322 | ⚪ INFO | TODO comment found |
| pkg/cmd/release/verify/verify.go | 147 | ⚪ INFO | TODO comment found |
| pkg/cmd/release/verify-asset/verify_asset.go | 158 | ⚪ INFO | TODO comment found |
| pkg/cmd/repo/edit/edit.go | 56 | ⚪ INFO | TODO comment found |
| pkg/cmd/repo/edit/edit.go | 257 | ⚪ INFO | TODO comment found |
| pkg/cmd/repo/edit/edit.go | 368 | ⚪ INFO | TODO comment found |
| pkg/cmd/repo/garden/garden.go | 213 | ⚪ INFO | TODO comment found |
| pkg/cmd/repo/garden/garden.go | 299 | ⚪ INFO | TODO comment found |
| pkg/cmd/root/help_reference.go | 60 | ⚪ INFO | TODO comment found |
| pkg/cmd/run/shared/shared.go | 157 | ⚪ INFO | TODO comment found |
| pkg/cmd/search/code/code.go | 121 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/cmd/skills/list/list.go | 341 | ⚪ INFO | TODO comment found |
| pkg/cmdutil/legacy.go | 10 | ⚪ INFO | TODO comment found |
| pkg/cmdutil/legacy.go | 11 | ⚪ INFO | TODO comment found |
| pkg/httpmock/legacy.go | 7 | ⚪ INFO | TODO comment found |
| pkg/httpmock/registry.go | 91 | ⚪ INFO | TODO comment found |
| pkg/httpmock/registry.go | 97 | ⚪ INFO | TODO comment found |

## Detailed Findings

### MAINTENANCE

**Total:** 63 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| pkg/cmd/search/code/code.go | 121 | 🟡 MEDIUM | FIXME comment indicating known issue |
| api/queries_repo.go | 871 | ⚪ INFO | TODO comment found |
| api/queries_repo.go | 1020 | ⚪ INFO | TODO comment found |
| context/context.go | 1 | ⚪ INFO | TODO comment found |
| git/client_test.go | 1169 | ⚪ INFO | TODO comment found |
| internal/config/config.go | 281 | ⚪ INFO | TODO comment found |
| internal/featuredetection/feature_detection.go | 202 | ⚪ INFO | TODO comment found |
| internal/featuredetection/feature_detection.go | 461 | ⚪ INFO | TODO comment found |
| internal/update/update_test.go | 412 | ⚪ INFO | TODO comment found |
| internal/update/update_test.go | 469 | ⚪ INFO | TODO comment found |

*... and 53 more*

### SECURITY

**Total:** 18 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| pkg/cmd/auth/logout/logout_test.go | 72 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 80 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 237 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 298 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 382 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 397 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 416 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 431 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 477 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/auth/logout/logout_test.go | 493 | 🟠 HIGH | Hardcoded username/password detected |

*... and 8 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 86/100 (Tier B)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -210 | Fair ⚠️ |
| Code Quality | -25 | Good ✅ |
| Test Coverage | +4 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 14 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 40.9%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

