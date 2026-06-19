# Repository Analysis Report: git/git

**Generated:** 2026-06-19 09:02:17 CDT

**Quality Score:** 100/100 (Tier A)

## Executive Summary

- **Overall Quality:** A (100/100)
- **Total Findings:** 199
- **Critical Issues:** 0
- **High Issues:** 0
- **Medium Issues:** 27
- **Low Issues:** 139
- **Files Scanned:** 4792

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 139 | Medium |
| maintenance | 45 | Medium |
| security | 15 | Medium |

## Repository Overview

- **Owner:** git
- **Name:** git
- **Description:** Git Source Code Mirror - This is a publish-only repository but pull requests can be turned into patches to the mailing list via GitGitGadget (https://gitgitgadget.github.io/). Please follow Documentation/SubmittingPatches procedure for any of your improvements.
- **Primary Language:** C
- **Stars:** 61568
- **Forks:** 28028
- **Open Issues:** 378
- **Size:** 309849 KB
- **Created:** 2008-07-23
- **Last Updated:** 2026-06-19
- **Default Branch:** master

**Topics:** c, hacktoberfest, shell

## Security Analysis

⚠️ **Found 15 security-related findings.**

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 9.3% | Poor ❌ |
| Documentation | 9.8% | Adequate ⚠️ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (139)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| git-p4.py | 269 | 🟢 LOW | Debug print statement found |
| git-p4.py | 270 | 🟢 LOW | Debug print statement found |
| git-p4.py | 275 | 🟢 LOW | Debug print statement found |
| git-p4.py | 276 | 🟢 LOW | Debug print statement found |
| git-p4.py | 314 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1218 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1239 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1248 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1254 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1340 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1921 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1924 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1946 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1992 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2152 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2244 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2249 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2266 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2272 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2281 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2284 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2359 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2360 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2361 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2362 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2363 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2364 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2365 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2367 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2370 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2374 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2375 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2377 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2379 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2380 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2381 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2383 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2385 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2386 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2393 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2409 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2439 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2441 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2467 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2477 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2512 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2514 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2524 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2568 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2571 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2592 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2603 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2605 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2679 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2684 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2693 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2698 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2707 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2714 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2725 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2727 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2737 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2753 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2755 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2761 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2763 | 🟢 LOW | Debug print statement found |
| git-p4.py | 2987 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3124 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3161 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3201 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3362 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3382 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3397 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3406 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3454 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3469 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3499 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3512 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3530 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3535 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3547 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3554 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3566 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3575 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3588 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3610 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3620 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3626 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3629 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3671 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3672 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3735 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3742 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3747 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3753 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3757 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3802 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3831 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3844 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3849 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3852 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3858 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3868 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3877 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3886 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3894 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3898 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3947 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3948 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3949 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3984 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3993 | 🟢 LOW | Debug print statement found |
| git-p4.py | 3996 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4011 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4094 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4101 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4136 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4142 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4145 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4212 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4213 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4299 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4354 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4376 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4418 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4460 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4503 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4530 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4546 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4547 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4548 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4549 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4550 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4551 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4575 | 🟢 LOW | Debug print statement found |
| git-p4.py | 4576 | 🟢 LOW | Debug print statement found |
| t/unit-tests/clar/generate.py | 316 | 🟢 LOW | Debug print statement found |
| t/unit-tests/clar/generate.py | 321 | 🟢 LOW | Debug print statement found |
| t/unit-tests/clar/generate.py | 329 | 🟢 LOW | Debug print statement found |

### Maintenance Items (45)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| builtin/am.c | 2017 | 🟡 MEDIUM | FIXME comment indicating known issue |
| builtin/commit.c | 272 | ⚪ INFO | TODO comment found |
| builtin/commit.c | 1041 | ⚪ INFO | TODO comment found |
| builtin/difftool.c | 609 | ⚪ INFO | TODO comment found |
| builtin/fsck.c | 532 | ⚪ INFO | TODO comment found |
| builtin/fsck.c | 539 | ⚪ INFO | TODO comment found |
| builtin/fsck.c | 884 | ⚪ INFO | TODO comment found |
| builtin/merge-index.c | 68 | ⚪ INFO | TODO comment found |
| builtin/merge-index.c | 100 | ⚪ INFO | TODO comment found |
| builtin/merge.c | 759 | 🟡 MEDIUM | FIXME comment indicating known issue |
| builtin/reset.c | 83 | 🟡 MEDIUM | FIXME comment indicating known issue |
| builtin/stash.c | 363 | 🟡 MEDIUM | FIXME comment indicating known issue |
| builtin/stash.c | 1705 | ⚪ INFO | TODO comment found |
| builtin/submodule--helper.c | 3604 | ⚪ INFO | TODO comment found |
| bundle.c | 260 | ⚪ INFO | TODO comment found |
| compat/regex/regexec.c | 2434 | ⚪ INFO | TODO comment found |
| compat/regex/regexec.c | 3267 | ⚪ INFO | TODO comment found |
| compat/regex/regexec.c | 3804 | 🟡 MEDIUM | FIXME comment indicating known issue |
| dir.c | 4075 | ⚪ INFO | TODO comment found |
| entry.c | 455 | ⚪ INFO | TODO comment found |
| ewah/ewah_bitmap.c | 259 | ⚪ INFO | TODO comment found |
| git-p4.py | 1006 | 🟡 MEDIUM | FIXME comment indicating known issue |
| git-p4.py | 4071 | ⚪ INFO | TODO comment found |
| git-p4.py | 4324 | ⚪ INFO | TODO comment found |
| khash.h | 184 | ⚪ INFO | TODO comment found |
| merge-ort.c | 1787 | 🟡 MEDIUM | FIXME comment indicating known issue |
| merge-ort.c | 4622 | 🟡 MEDIUM | FIXME comment indicating known issue |
| merge-ort.c | 4625 | 🟡 MEDIUM | FIXME comment indicating known issue |
| midx.c | 1007 | ⚪ INFO | TODO comment found |
| notes-merge.c | 631 | ⚪ INFO | TODO comment found |
| object.h | 14 | ⚪ INFO | TODO comment found |
| odb/source-loose.c | 651 | ⚪ INFO | TODO comment found |
| oidmap.h | 101 | ⚪ INFO | TODO comment found |
| oidmap.h | 109 | ⚪ INFO | TODO comment found |
| read-cache.c | 2260 | ⚪ INFO | TODO comment found |
| read-cache.c | 2532 | ⚪ INFO | TODO comment found |
| read-cache.c | 3814 | ⚪ INFO | TODO comment found |
| replay.c | 90 | 🟡 MEDIUM | FIXME comment indicating known issue |
| reset.c | 139 | 🟡 MEDIUM | FIXME comment indicating known issue |
| resolve-undo.c | 163 | ⚪ INFO | TODO comment found |
| revision.c | 1803 | ⚪ INFO | TODO comment found |
| sequencer.c | 4061 | 🟡 MEDIUM | FIXME comment indicating known issue |
| submodule.c | 684 | ⚪ INFO | TODO comment found |
| submodule.c | 2110 | ⚪ INFO | TODO comment found |
| t/unit-tests/test-lib.c | 106 | ⚪ INFO | TODO comment found |

## Detailed Findings

### MAINTENANCE

**Total:** 45 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| builtin/am.c | 2017 | 🟡 MEDIUM | FIXME comment indicating known issue |
| builtin/merge.c | 759 | 🟡 MEDIUM | FIXME comment indicating known issue |
| builtin/reset.c | 83 | 🟡 MEDIUM | FIXME comment indicating known issue |
| builtin/stash.c | 363 | 🟡 MEDIUM | FIXME comment indicating known issue |
| compat/regex/regexec.c | 3804 | 🟡 MEDIUM | FIXME comment indicating known issue |
| git-p4.py | 1006 | 🟡 MEDIUM | FIXME comment indicating known issue |
| merge-ort.c | 1787 | 🟡 MEDIUM | FIXME comment indicating known issue |
| merge-ort.c | 4622 | 🟡 MEDIUM | FIXME comment indicating known issue |
| merge-ort.c | 4625 | 🟡 MEDIUM | FIXME comment indicating known issue |
| replay.c | 90 | 🟡 MEDIUM | FIXME comment indicating known issue |

*... and 35 more*

### SECURITY

**Total:** 15 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| builtin/blame.c | 964 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| builtin/receive-pack.c | 793 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| builtin/receive-pack.c | 965 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| cache-tree.c | 513 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| compat/apple-common-crypto.h | 6 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| imap-send.c | 928 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| imap-send.c | 1027 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| line-log.c | 504 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| line-log.c | 595 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| notes.c | 39 | 🟡 MEDIUM | Weak cryptographic algorithm detected |

*... and 5 more*

### CODE_QUALITY

**Total:** 139 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| git-p4.py | 269 | 🟢 LOW | Debug print statement found |
| git-p4.py | 270 | 🟢 LOW | Debug print statement found |
| git-p4.py | 275 | 🟢 LOW | Debug print statement found |
| git-p4.py | 276 | 🟢 LOW | Debug print statement found |
| git-p4.py | 314 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1218 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1239 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1248 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1254 | 🟢 LOW | Debug print statement found |
| git-p4.py | 1340 | 🟢 LOW | Debug print statement found |

*... and 129 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 100/100 (Tier A)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -0 | Good ✅ |
| Code Quality | -274 | Needs improvement ⚠️ |
| Test Coverage | +0 | Good |
| Documentation | +4 | Adequate ⚠️ |

## Recommendations

1. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 9.3%. Aim for at least 70% coverage.

