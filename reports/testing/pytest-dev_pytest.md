# Repository Analysis Report: pytest-dev/pytest

**Generated:** 2026-06-19 09:11:06 CDT

**Quality Score:** 100/100 (Tier A)

## Executive Summary

- **Overall Quality:** A (100/100)
- **Total Findings:** 351
- **Critical Issues:** 0
- **High Issues:** 1
- **Medium Issues:** 2
- **Low Issues:** 313
- **Files Scanned:** 658

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 313 | Medium |
| security | 2 | High |
| maintenance | 36 | Medium |

## Repository Overview

- **Owner:** pytest-dev
- **Name:** pytest
- **Description:** The pytest framework makes it easy to write small tests, yet scales to support complex functional testing
- **Primary Language:** Python
- **Stars:** 14224
- **Forks:** 3197
- **Open Issues:** 962
- **Size:** 41030 KB
- **Created:** 2015-06-15
- **Last Updated:** 2026-06-19
- **Default Branch:** main

**Topics:** hacktoberfest, python, test, testing, unit-testing

## Security Analysis

⚠️ **Found 2 security-related findings.**

### ⚠️ High Severity Issues (1)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| src/_pytest/_py/path.py | 1421 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 56.3% | Fair ⚠️ |
| Documentation | 10.3% | Well documented ✅ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (313)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| bench/bench.py | 17 | 🟢 LOW | Debug print statement found |
| bench/bench_argcomplete.py | 21 | 🟢 LOW | Debug print statement found |
| bench/bench_argcomplete.py | 22 | 🟢 LOW | Debug print statement found |
| doc/en/example/assertion/failure_demo.py | 181 | 🟢 LOW | Debug print statement found |
| doc/en/example/assertion/global_testmodule_config/conftest.py | 17 | 🟢 LOW | Debug print statement found |
| doc/en/example/multipython.py | 63 | 🟢 LOW | Debug print statement found |
| extra/get_issues.py | 22 | 🟢 LOW | Debug print statement found |
| extra/get_issues.py | 67 | 🟢 LOW | Debug print statement found |
| extra/get_issues.py | 68 | 🟢 LOW | Debug print statement found |
| extra/get_issues.py | 69 | 🟢 LOW | Debug print statement found |
| extra/get_issues.py | 70 | 🟢 LOW | Debug print statement found |
| extra/get_issues.py | 72 | 🟢 LOW | Debug print statement found |
| extra/get_issues.py | 74 | 🟢 LOW | Debug print statement found |
| extra/get_issues.py | 75 | 🟢 LOW | Debug print statement found |
| scripts/generate-gh-release-notes.py | 54 | 🟢 LOW | Debug print statement found |
| scripts/generate-gh-release-notes.py | 58 | 🟢 LOW | Debug print statement found |
| scripts/generate-gh-release-notes.py | 62 | 🟢 LOW | Debug print statement found |
| scripts/generate-gh-release-notes.py | 63 | 🟢 LOW | Debug print statement found |
| scripts/generate-gh-release-notes.py | 64 | 🟢 LOW | Debug print statement found |
| scripts/prepare-release-pr.py | 56 | 🟢 LOW | Debug print statement found |
| scripts/prepare-release-pr.py | 57 | 🟢 LOW | Debug print statement found |
| scripts/prepare-release-pr.py | 72 | 🟢 LOW | Debug print statement found |
| scripts/prepare-release-pr.py | 75 | 🟢 LOW | Debug print statement found |
| scripts/prepare-release-pr.py | 93 | 🟢 LOW | Debug print statement found |
| scripts/prepare-release-pr.py | 116 | 🟢 LOW | Debug print statement found |
| scripts/prepare-release-pr.py | 126 | 🟢 LOW | Debug print statement found |
| scripts/release.py | 55 | 🟢 LOW | Debug print statement found |
| scripts/release.py | 67 | 🟢 LOW | Debug print statement found |
| scripts/release.py | 71 | 🟢 LOW | Debug print statement found |
| scripts/release.py | 81 | 🟢 LOW | Debug print statement found |
| scripts/release.py | 90 | 🟢 LOW | Debug print statement found |
| scripts/release.py | 98 | 🟢 LOW | Debug print statement found |
| scripts/release.py | 116 | 🟢 LOW | Debug print statement found |
| scripts/release.py | 117 | 🟢 LOW | Debug print statement found |
| scripts/release.py | 118 | 🟢 LOW | Debug print statement found |
| scripts/release.py | 119 | 🟢 LOW | Debug print statement found |
| src/_pytest/cacheprovider.py | 636 | 🟢 LOW | Debug print statement found |
| src/_pytest/capture.py | 1021 | 🟢 LOW | Debug print statement found |
| src/_pytest/capture.py | 1054 | 🟢 LOW | Debug print statement found |
| src/_pytest/capture.py | 1084 | 🟢 LOW | Debug print statement found |
| src/_pytest/config/__init__.py | 2001 | 🟢 LOW | Debug print statement found |
| src/_pytest/config/__init__.py | 2002 | 🟢 LOW | Debug print statement found |
| src/_pytest/pytester.py | 295 | 🟢 LOW | Debug print statement found |
| src/_pytest/pytester.py | 297 | 🟢 LOW | Debug print statement found |
| src/_pytest/pytester.py | 299 | 🟢 LOW | Debug print statement found |
| src/_pytest/pytester.py | 303 | 🟢 LOW | Debug print statement found |
| src/_pytest/pytester.py | 1429 | 🟢 LOW | Debug print statement found |
| src/_pytest/pytester.py | 1430 | 🟢 LOW | Debug print statement found |
| src/_pytest/pytester.py | 1476 | 🟢 LOW | Debug print statement found |
| src/_pytest/pytester.py | 1478 | 🟢 LOW | Debug print statement found |
| testing/_py/test_local.py | 1250 | 🟢 LOW | Debug print statement found |
| testing/_py/test_local.py | 1251 | 🟢 LOW | Debug print statement found |
| testing/acceptance_test.py | 85 | 🟢 LOW | Debug print statement found |
| testing/acceptance_test.py | 87 | 🟢 LOW | Debug print statement found |
| testing/acceptance_test.py | 256 | 🟢 LOW | Debug print statement found |
| testing/acceptance_test.py | 268 | 🟢 LOW | Debug print statement found |
| testing/acceptance_test.py | 329 | 🟢 LOW | Debug print statement found |
| testing/acceptance_test.py | 445 | 🟢 LOW | Debug print statement found |
| testing/acceptance_test.py | 673 | 🟢 LOW | Debug print statement found |
| testing/acceptance_test.py | 676 | 🟢 LOW | Debug print statement found |
| testing/code/test_excinfo.py | 229 | 🟢 LOW | Debug print statement found |
| testing/code/test_excinfo.py | 230 | 🟢 LOW | Debug print statement found |
| testing/code/test_excinfo.py | 290 | 🟢 LOW | Debug print statement found |
| testing/code/test_excinfo.py | 408 | 🟢 LOW | Debug print statement found |
| testing/code/test_excinfo.py | 655 | 🟢 LOW | Debug print statement found |
| testing/code/test_excinfo.py | 1378 | 🟢 LOW | Debug print statement found |
| testing/code/test_excinfo.py | 1428 | 🟢 LOW | Debug print statement found |
| testing/code/test_excinfo.py | 1523 | 🟢 LOW | Debug print statement found |
| testing/example_scripts/conftest_usageerror/conftest.py | 12 | 🟢 LOW | Debug print statement found |
| testing/io/test_saferepr.py | 124 | 🟢 LOW | Debug print statement found |
| testing/logging/test_fixture.py | 488 | 🟢 LOW | Debug print statement found |
| testing/logging/test_reporting.py | 511 | 🟢 LOW | Debug print statement found |
| testing/logging/test_reporting.py | 567 | 🟢 LOW | Debug print statement found |
| testing/logging/test_reporting.py | 645 | 🟢 LOW | Debug print statement found |
| testing/logging/test_reporting.py | 678 | 🟢 LOW | Debug print statement found |
| testing/logging/test_reporting.py | 745 | 🟢 LOW | Debug print statement found |
| testing/logging/test_reporting.py | 796 | 🟢 LOW | Debug print statement found |
| testing/logging/test_reporting.py | 834 | 🟢 LOW | Debug print statement found |
| testing/logging/test_reporting.py | 874 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 1041 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 1908 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 3482 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4104 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4106 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4108 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4110 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4132 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4134 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4136 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4138 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4219 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4382 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4384 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4391 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4393 | 🟢 LOW | Debug print statement found |
| testing/python/fixtures.py | 4403 | 🟢 LOW | Debug print statement found |
| testing/python/integration.py | 246 | 🟢 LOW | Debug print statement found |
| testing/python/metafunc.py | 1961 | 🟢 LOW | Debug print statement found |
| testing/python/raises.py | 87 | 🟢 LOW | Debug print statement found |
| testing/python/raises.py | 88 | 🟢 LOW | Debug print statement found |
| testing/python/raises.py | 104 | 🟢 LOW | Debug print statement found |
| testing/test_cacheprovider.py | 794 | 🟢 LOW | Debug print statement found |
| testing/test_cacheprovider.py | 1186 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 77 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 85 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 114 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 115 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 127 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 139 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 160 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 162 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 164 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 167 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 188 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 190 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 192 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 195 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 214 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 216 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 229 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 231 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 234 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 254 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 275 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 278 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 330 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 356 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 442 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 455 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 456 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 489 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 564 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 586 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 619 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 625 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 626 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 683 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 685 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 686 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 690 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 711 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 713 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 715 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 716 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 717 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 742 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 743 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 748 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 749 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 778 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 786 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 814 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 849 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1070 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1164 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1172 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1191 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1197 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1212 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1222 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1224 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1254 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1255 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1256 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1269 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1271 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1407 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1474 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1481 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1557 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1609 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1613 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1616 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1618 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1655 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1662 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1755 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1757 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1763 | 🟢 LOW | Debug print statement found |
| testing/test_capture.py | 1769 | 🟢 LOW | Debug print statement found |
| testing/test_collection.py | 779 | 🟢 LOW | Debug print statement found |
| testing/test_collection.py | 1906 | 🟢 LOW | Debug print statement found |
| testing/test_collection.py | 1912 | 🟢 LOW | Debug print statement found |
| testing/test_config.py | 2181 | 🟢 LOW | Debug print statement found |
| testing/test_config.py | 2209 | 🟢 LOW | Debug print statement found |
| testing/test_config.py | 2211 | 🟢 LOW | Debug print statement found |
| testing/test_config.py | 2242 | 🟢 LOW | Debug print statement found |
| testing/test_conftest.py | 340 | 🟢 LOW | Debug print statement found |
| testing/test_conftest.py | 344 | 🟢 LOW | Debug print statement found |
| testing/test_conftest.py | 371 | 🟢 LOW | Debug print statement found |
| testing/test_conftest.py | 375 | 🟢 LOW | Debug print statement found |
| testing/test_conftest.py | 621 | 🟢 LOW | Debug print statement found |
| testing/test_conftest.py | 623 | 🟢 LOW | Debug print statement found |
| testing/test_conftest.py | 659 | 🟢 LOW | Debug print statement found |
| testing/test_conftest.py | 660 | 🟢 LOW | Debug print statement found |
| testing/test_conftest.py | 661 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 85 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 241 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 404 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 428 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 468 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 505 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 573 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 576 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 636 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 640 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 643 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 726 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 731 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 732 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 736 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 739 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 742 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 747 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 846 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 854 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 934 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 938 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 1233 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 1234 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 1286 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 1291 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 1329 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 1336 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 1339 | 🟢 LOW | Debug print statement found |
| testing/test_debugging.py | 1420 | 🟢 LOW | Debug print statement found |
| testing/test_doctest.py | 694 | 🟢 LOW | Debug print statement found |
| testing/test_doctest.py | 715 | 🟢 LOW | Debug print statement found |
| testing/test_doctest.py | 734 | 🟢 LOW | Debug print statement found |
| testing/test_doctest.py | 751 | 🟢 LOW | Debug print statement found |
| testing/test_doctest.py | 815 | 🟢 LOW | Debug print statement found |
| testing/test_doctest.py | 837 | 🟢 LOW | Debug print statement found |
| testing/test_doctest.py | 855 | 🟢 LOW | Debug print statement found |
| testing/test_doctest.py | 1056 | 🟢 LOW | Debug print statement found |
| testing/test_doctest.py | 1061 | 🟢 LOW | Debug print statement found |
| testing/test_doctest.py | 1518 | 🟢 LOW | Debug print statement found |
| testing/test_doctest.py | 1545 | 🟢 LOW | Debug print statement found |
| testing/test_doctest.py | 1566 | 🟢 LOW | Debug print statement found |
| testing/test_helpconfig.py | 22 | 🟢 LOW | Debug print statement found |
| testing/test_junitxml.py | 509 | 🟢 LOW | Debug print statement found |
| testing/test_junitxml.py | 583 | 🟢 LOW | Debug print statement found |
| testing/test_junitxml.py | 663 | 🟢 LOW | Debug print statement found |
| testing/test_junitxml.py | 838 | 🟢 LOW | Debug print statement found |
| testing/test_junitxml.py | 863 | 🟢 LOW | Debug print statement found |
| testing/test_junitxml.py | 872 | 🟢 LOW | Debug print statement found |
| testing/test_junitxml.py | 922 | 🟢 LOW | Debug print statement found |
| testing/test_legacypath.py | 163 | 🟢 LOW | Debug print statement found |
| testing/test_legacypath.py | 165 | 🟢 LOW | Debug print statement found |
| testing/test_legacypath.py | 182 | 🟢 LOW | Debug print statement found |
| testing/test_mark.py | 79 | 🟢 LOW | Debug print statement found |
| testing/test_mark.py | 558 | 🟢 LOW | Debug print statement found |
| testing/test_mark.py | 604 | 🟢 LOW | Debug print statement found |
| testing/test_mark.py | 887 | 🟢 LOW | Debug print statement found |
| testing/test_mark.py | 1159 | 🟢 LOW | Debug print statement found |
| testing/test_mark.py | 1163 | 🟢 LOW | Debug print statement found |
| testing/test_mark.py | 1177 | 🟢 LOW | Debug print statement found |
| testing/test_pathlib.py | 1543 | 🟢 LOW | Debug print statement found |
| testing/test_pluginmanager.py | 55 | 🟢 LOW | Debug print statement found |
| testing/test_pytester.py | 621 | 🟢 LOW | Debug print statement found |
| testing/test_pytester.py | 630 | 🟢 LOW | Debug print statement found |
| testing/test_pytester.py | 638 | 🟢 LOW | Debug print statement found |
| testing/test_pytester.py | 648 | 🟢 LOW | Debug print statement found |
| testing/test_pytester.py | 662 | 🟢 LOW | Debug print statement found |
| testing/test_pytester.py | 687 | 🟢 LOW | Debug print statement found |
| testing/test_pytester.py | 688 | 🟢 LOW | Debug print statement found |
| testing/test_python_path.py | 70 | 🟢 LOW | Debug print statement found |
| testing/test_python_path.py | 73 | 🟢 LOW | Debug print statement found |
| testing/test_runner.py | 240 | 🟢 LOW | Debug print statement found |
| testing/test_runner.py | 278 | 🟢 LOW | Debug print statement found |
| testing/test_runner.py | 367 | 🟢 LOW | Debug print statement found |
| testing/test_runner.py | 396 | 🟢 LOW | Debug print statement found |
| testing/test_runner.py | 440 | 🟢 LOW | Debug print statement found |
| testing/test_subtests.py | 689 | 🟢 LOW | Debug print statement found |
| testing/test_subtests.py | 690 | 🟢 LOW | Debug print statement found |
| testing/test_subtests.py | 693 | 🟢 LOW | Debug print statement found |
| testing/test_subtests.py | 694 | 🟢 LOW | Debug print statement found |
| testing/test_subtests.py | 698 | 🟢 LOW | Debug print statement found |
| testing/test_subtests.py | 699 | 🟢 LOW | Debug print statement found |
| testing/test_subtests.py | 702 | 🟢 LOW | Debug print statement found |
| testing/test_subtests.py | 755 | 🟢 LOW | Debug print statement found |
| testing/test_subtests.py | 758 | 🟢 LOW | Debug print statement found |
| testing/test_subtests.py | 759 | 🟢 LOW | Debug print statement found |
| testing/test_subtests.py | 784 | 🟢 LOW | Debug print statement found |
| testing/test_subtests.py | 789 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 434 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 660 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 684 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 707 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 731 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 737 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 1278 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 1281 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 1284 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 1569 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 1574 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 1578 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 1580 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 1595 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 1609 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 2035 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 2036 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 2038 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 2812 | 🟢 LOW | Debug print statement found |
| testing/test_terminal.py | 3361 | 🟢 LOW | Debug print statement found |
| testing/test_tmpdir.py | 494 | 🟢 LOW | Debug print statement found |
| testing/test_unittest.py | 301 | 🟢 LOW | Debug print statement found |
| testing/test_unittest.py | 706 | 🟢 LOW | Debug print statement found |
| testing/test_unittest.py | 709 | 🟢 LOW | Debug print statement found |
| testing/test_unittest.py | 713 | 🟢 LOW | Debug print statement found |
| testing/test_unittest.py | 735 | 🟢 LOW | Debug print statement found |
| testing/test_unittest.py | 739 | 🟢 LOW | Debug print statement found |
| testing/test_unittest.py | 1078 | 🟢 LOW | Debug print statement found |
| testing/test_unittest.py | 1080 | 🟢 LOW | Debug print statement found |

### Maintenance Items (36)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| src/_pytest/assertion/rewrite.py | 858 | ⚪ INFO | TODO comment found |
| src/_pytest/cacheprovider.py | 580 | ⚪ INFO | TODO comment found |
| src/_pytest/capture.py | 708 | ⚪ INFO | TODO comment found |
| src/_pytest/doctest.py | 316 | ⚪ INFO | TODO comment found |
| src/_pytest/doctest.py | 346 | ⚪ INFO | TODO comment found |
| src/_pytest/fixtures.py | 188 | ⚪ INFO | TODO comment found |
| src/_pytest/fixtures.py | 1385 | ⚪ INFO | TODO comment found |
| src/_pytest/fixtures.py | 1719 | ⚪ INFO | TODO comment found |
| src/_pytest/fixtures.py | 1937 | ⚪ INFO | TODO comment found |
| src/_pytest/fixtures.py | 2259 | ⚪ INFO | TODO comment found |
| src/_pytest/junitxml.py | 510 | ⚪ INFO | TODO comment found |
| src/_pytest/legacypath.py | 389 | ⚪ INFO | TODO comment found |
| src/_pytest/main.py | 1005 | ⚪ INFO | TODO comment found |
| src/_pytest/mark/structures.py | 158 | ⚪ INFO | TODO comment found |
| src/_pytest/nodes.py | 506 | ⚪ INFO | TODO comment found |
| src/_pytest/python.py | 306 | ⚪ INFO | TODO comment found |
| src/_pytest/python.py | 1570 | ⚪ INFO | TODO comment found |
| src/_pytest/python.py | 1642 | ⚪ INFO | TODO comment found |
| src/_pytest/python.py | 1659 | ⚪ INFO | TODO comment found |
| src/_pytest/python.py | 1743 | ⚪ INFO | TODO comment found |
| src/_pytest/raises.py | 477 | ⚪ INFO | TODO comment found |
| src/_pytest/raises.py | 687 | ⚪ INFO | TODO comment found |
| src/_pytest/reports.py | 523 | ⚪ INFO | TODO comment found |
| src/_pytest/reports.py | 575 | ⚪ INFO | TODO comment found |
| src/_pytest/terminal.py | 1593 | ⚪ INFO | TODO comment found |
| testing/code/test_excinfo.py | 391 | ⚪ INFO | TODO comment found |
| testing/python/raises_group.py | 634 | ⚪ INFO | TODO comment found |
| testing/python/raises_group.py | 696 | ⚪ INFO | TODO comment found |
| testing/test_mark.py | 1125 | ⚪ INFO | TODO comment found |
| testing/test_threadexception.py | 216 | ⚪ INFO | TODO comment found |
| testing/test_threadexception.py | 244 | ⚪ INFO | TODO comment found |
| testing/test_unraisableexception.py | 285 | ⚪ INFO | TODO comment found |
| testing/test_unraisableexception.py | 318 | ⚪ INFO | TODO comment found |
| testing/test_unraisableexception.py | 358 | ⚪ INFO | TODO comment found |
| testing/test_unraisableexception.py | 518 | ⚪ INFO | TODO comment found |
| testing/typing_raises_group.py | 18 | 🟡 MEDIUM | FIXME comment indicating known issue |

## Detailed Findings

### MAINTENANCE

**Total:** 36 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| testing/typing_raises_group.py | 18 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/_pytest/cacheprovider.py | 580 | ⚪ INFO | TODO comment found |
| src/_pytest/capture.py | 708 | ⚪ INFO | TODO comment found |
| src/_pytest/doctest.py | 316 | ⚪ INFO | TODO comment found |
| src/_pytest/doctest.py | 346 | ⚪ INFO | TODO comment found |
| src/_pytest/fixtures.py | 188 | ⚪ INFO | TODO comment found |
| src/_pytest/fixtures.py | 1385 | ⚪ INFO | TODO comment found |
| src/_pytest/fixtures.py | 1719 | ⚪ INFO | TODO comment found |
| src/_pytest/fixtures.py | 1937 | ⚪ INFO | TODO comment found |
| src/_pytest/fixtures.py | 2259 | ⚪ INFO | TODO comment found |

*... and 26 more*

### CODE_QUALITY

**Total:** 313 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| bench/bench.py | 17 | 🟢 LOW | Debug print statement found |
| bench/bench_argcomplete.py | 21 | 🟢 LOW | Debug print statement found |
| bench/bench_argcomplete.py | 22 | 🟢 LOW | Debug print statement found |
| doc/en/example/assertion/failure_demo.py | 181 | 🟢 LOW | Debug print statement found |
| doc/en/example/assertion/global_testmodule_config/conftest.py | 17 | 🟢 LOW | Debug print statement found |
| doc/en/example/multipython.py | 63 | 🟢 LOW | Debug print statement found |
| extra/get_issues.py | 22 | 🟢 LOW | Debug print statement found |
| extra/get_issues.py | 67 | 🟢 LOW | Debug print statement found |
| extra/get_issues.py | 68 | 🟢 LOW | Debug print statement found |
| extra/get_issues.py | 69 | 🟢 LOW | Debug print statement found |

*... and 303 more*

### SECURITY

**Total:** 2 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| src/_pytest/_py/path.py | 1421 | 🟠 HIGH | Hardcoded username/password detected |
| testing/_py/test_local.py | 581 | 🟡 MEDIUM | Weak cryptographic algorithm detected |

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 100/100 (Tier A)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -15 | Good ✅ |
| Code Quality | -323 | Good ✅ |
| Test Coverage | +5 | Good |
| Documentation | +5 | Well documented ✅ |

## Recommendations

✅ **No critical recommendations at this time.**

