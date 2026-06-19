# Repository Analysis Report: pytorch/pytorch

**Generated:** 2026-06-19 09:04:35 CDT

**Quality Score:** 99/100 (Tier A)

## Executive Summary

- **Overall Quality:** A (99/100)
- **Total Findings:** 7502
- **Critical Issues:** 0
- **High Issues:** 0
- **Medium Issues:** 257
- **Low Issues:** 3711
- **Files Scanned:** 21408

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 3711 | Medium |
| maintenance | 3781 | Medium |
| security | 10 | Medium |

## Repository Overview

- **Owner:** pytorch
- **Name:** pytorch
- **Description:** Tensors and Dynamic neural networks in Python with strong GPU acceleration
- **Primary Language:** Python
- **Stars:** 100878
- **Forks:** 28054
- **Open Issues:** 18307
- **Size:** 1429270 KB
- **Created:** 2016-08-13
- **Last Updated:** 2026-06-19
- **Default Branch:** main

**Topics:** autograd, deep-learning, gpu, machine-learning, neural-network, numpy, python, tensor

## Security Analysis

⚠️ **Found 10 security-related findings.**

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 20.2% | Poor ❌ |
| Documentation | 0.6% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (3711)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .ci/libtorch/extract_libtorch_from_wheel.py | 116 | 🟢 LOW | Debug print statement found |
| .ci/libtorch/extract_libtorch_from_wheel.py | 159 | 🟢 LOW | Debug print statement found |
| .ci/libtorch/extract_libtorch_from_wheel.py | 212 | 🟢 LOW | Debug print statement found |
| .ci/libtorch/extract_libtorch_from_wheel.py | 232 | 🟢 LOW | Debug print statement found |
| .ci/libtorch/extract_libtorch_from_wheel.py | 233 | 🟢 LOW | Debug print statement found |
| .ci/libtorch/extract_libtorch_from_wheel.py | 290 | 🟢 LOW | Debug print statement found |
| .ci/libtorch/extract_libtorch_from_wheel.py | 291 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 215 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 255 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 263 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 266 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 273 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 303 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 308 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 313 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 315 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 319 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 321 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 349 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 371 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 400 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 415 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 429 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 433 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 439 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 447 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 450 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_install_deps.py | 67 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_wheel.py | 28 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_wheel.py | 52 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_wheel.py | 58 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/repair_wheel.py | 424 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/print_sccache_log.py | 18 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_binary_symbols.py | 98 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_binary_symbols.py | 200 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_binary_symbols.py | 237 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_binary_symbols.py | 298 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_binary_symbols.py | 361 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_binary_symbols.py | 458 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_binary_symbols.py | 463 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_binary_symbols.py | 464 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_gomp.py | 67 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 82 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 86 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 96 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 104 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 109 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 114 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 131 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 154 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 201 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 217 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 222 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 225 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 233 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 241 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 245 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 256 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/check_wheel_tags.py | 259 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/max_autotune.py | 48 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/max_autotune.py | 75 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/max_autotune.py | 196 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/max_autotune.py | 199 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 99 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 130 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 136 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 159 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 169 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 174 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 187 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 191 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 196 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 202 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 207 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 237 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 263 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 289 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 293 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 304 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 323 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 349 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 365 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 367 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 368 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 370 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 372 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 374 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 377 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 392 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 410 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 425 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 435 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 444 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 475 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 484 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 499 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 512 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 518 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 526 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 543 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 546 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 554 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 580 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 618 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/smoke_test/smoke_test.py | 619 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/test_example_code/cnn_smoke.py | 29 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/test_example_code/cnn_smoke_win_arm64.py | 29 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/test_example_code/cnn_smoke_win_arm64.py | 41 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/win-test-helpers/run_python_nn_smoketests.py | 41 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/win-test-helpers/run_python_nn_smoketests.py | 44 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/win-test-helpers/run_python_nn_smoketests.py | 55 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/win-test-helpers/run_python_nn_smoketests.py | 56 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/windows/_common.py | 93 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/windows/build_env_setup.py | 189 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/windows/build_env_setup.py | 303 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/windows/build_env_setup.py | 330 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/windows/build_env_setup.py | 417 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/windows/build_env_setup.py | 430 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/windows/build_env_setup.py | 460 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/windows/build_env_setup.py | 465 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/windows/build_install_deps.py | 123 | 🟢 LOW | Debug print statement found |
| .ci/pytorch/windows/build_install_deps.py | 124 | 🟢 LOW | Debug print statement found |
| .claude/skills/triaging-issues/scripts/add_bot_triaged.py | 33 | 🟢 LOW | Debug print statement found |
| .claude/skills/triaging-issues/scripts/validate_labels.py | 63 | 🟢 LOW | Debug print statement found |
| .claude/skills/triaging-issues/scripts/validate_labels.py | 180 | 🟢 LOW | Debug print statement found |
| .claude/skills/triaging-issues/scripts/validate_labels.py | 192 | 🟢 LOW | Debug print statement found |
| .claude/skills/triaging-issues/scripts/validate_labels.py | 200 | 🟢 LOW | Debug print statement found |
| .claude/skills/triaging-issues/scripts/validate_labels.py | 207 | 🟢 LOW | Debug print statement found |
| .claude/skills/triaging-issues/scripts/validate_labels.py | 223 | 🟢 LOW | Debug print statement found |
| .claude/skills/triaging-issues/scripts/validate_labels.py | 224 | 🟢 LOW | Debug print statement found |
| .claude/skills/triaging-issues/scripts/validate_labels.py | 231 | 🟢 LOW | Debug print statement found |
| .claude/skills/triaging-issues/scripts/validate_labels.py | 232 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 35 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 41 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 58 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 81 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 88 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 99 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 102 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 111 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 114 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 158 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 172 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 175 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 178 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 185 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 187 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 193 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 200 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 207 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 210 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 310 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 313 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 315 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 340 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 344 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 348 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 352 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 357 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 361 | 🟢 LOW | Debug print statement found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 374 | 🟢 LOW | Debug print statement found |
| .github/ci_configs/vllm/use_existing_torch.py | 62 | 🟢 LOW | Debug print statement found |
| .github/scripts/build_triton_wheel.py | 120 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 149 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 161 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 187 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 193 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 196 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 200 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 206 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 218 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 220 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 221 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 226 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 230 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 232 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 235 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 237 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 238 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 239 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 245 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_doc_redirects.py | 246 | 🟢 LOW | Debug print statement found |
| .github/scripts/close_nonexistent_disable_issues.py | 102 | 🟢 LOW | Debug print statement found |
| .github/scripts/close_nonexistent_disable_issues.py | 196 | 🟢 LOW | Debug print statement found |
| .github/scripts/close_nonexistent_disable_issues.py | 201 | 🟢 LOW | Debug print statement found |
| .github/scripts/close_nonexistent_disable_issues.py | 209 | 🟢 LOW | Debug print statement found |
| .github/scripts/collect_ciflow_labels.py | 59 | 🟢 LOW | Debug print statement found |
| .github/scripts/collect_ciflow_labels.py | 61 | 🟢 LOW | Debug print statement found |
| .github/scripts/collect_ciflow_labels.py | 66 | 🟢 LOW | Debug print statement found |
| .github/scripts/collect_ciflow_labels.py | 70 | 🟢 LOW | Debug print statement found |
| .github/scripts/collect_ciflow_labels.py | 72 | 🟢 LOW | Debug print statement found |
| .github/scripts/comment_on_pr.py | 33 | 🟢 LOW | Debug print statement found |
| .github/scripts/convert_lintrunner_annotations_to_github.py | 51 | 🟢 LOW | Debug print statement found |
| .github/scripts/convert_lintrunner_annotations_to_github.py | 71 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 108 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 249 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 251 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 255 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 265 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 267 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 270 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 273 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 276 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 278 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 290 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 301 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 317 | 🟢 LOW | Debug print statement found |
| .github/scripts/delete_old_branches.py | 320 | 🟢 LOW | Debug print statement found |
| .github/scripts/docathon-label-sync.py | 25 | 🟢 LOW | Debug print statement found |
| .github/scripts/docathon-label-sync.py | 36 | 🟢 LOW | Debug print statement found |
| .github/scripts/docathon-label-sync.py | 47 | 🟢 LOW | Debug print statement found |
| .github/scripts/docathon-label-sync.py | 50 | 🟢 LOW | Debug print statement found |
| .github/scripts/ensure_actions_will_cancel.py | 44 | 🟢 LOW | Debug print statement found |
| .github/scripts/ensure_actions_will_cancel.py | 50 | 🟢 LOW | Debug print statement found |
| .github/scripts/ensure_actions_will_cancel.py | 54 | 🟢 LOW | Debug print statement found |
| .github/scripts/ensure_actions_will_cancel.py | 63 | 🟢 LOW | Debug print statement found |
| .github/scripts/ensure_actions_will_cancel.py | 67 | 🟢 LOW | Debug print statement found |
| .github/scripts/ensure_actions_will_cancel.py | 74 | 🟢 LOW | Debug print statement found |
| .github/scripts/ensure_actions_will_cancel.py | 78 | 🟢 LOW | Debug print statement found |
| .github/scripts/export_pytorch_labels.py | 32 | 🟢 LOW | Debug print statement found |
| .github/scripts/file_io_utils.py | 20 | 🟢 LOW | Debug print statement found |
| .github/scripts/file_io_utils.py | 29 | 🟢 LOW | Debug print statement found |
| .github/scripts/file_io_utils.py | 30 | 🟢 LOW | Debug print statement found |
| .github/scripts/file_io_utils.py | 68 | 🟢 LOW | Debug print statement found |
| .github/scripts/file_io_utils.py | 69 | 🟢 LOW | Debug print statement found |
| .github/scripts/file_io_utils.py | 90 | 🟢 LOW | Debug print statement found |
| .github/scripts/file_io_utils.py | 91 | 🟢 LOW | Debug print statement found |
| .github/scripts/file_io_utils.py | 97 | 🟢 LOW | Debug print statement found |
| .github/scripts/filter_test_configs.py | 457 | 🟢 LOW | Debug print statement found |
| .github/scripts/filter_test_configs.py | 460 | 🟢 LOW | Debug print statement found |
| .github/scripts/filter_test_configs.py | 462 | 🟢 LOW | Debug print statement found |
| .github/scripts/filter_test_configs.py | 667 | 🟢 LOW | Debug print statement found |
| .github/scripts/generate_ci_workflows.py | 109 | 🟢 LOW | Debug print statement found |
| .github/scripts/generate_ci_workflows.py | 114 | 🟢 LOW | Debug print statement found |
| .github/scripts/generate_ci_workflows.py | 291 | 🟢 LOW | Debug print statement found |
| .github/scripts/generate_docker_release_matrix.py | 54 | 🟢 LOW | Debug print statement found |
| .github/scripts/generate_pytorch_version.py | 127 | 🟢 LOW | Debug print statement found |
| .github/scripts/generate_pytorch_version.py | 129 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_aws_session_tokens.py | 7 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_aws_session_tokens.py | 8 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_aws_session_tokens.py | 9 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_ci_variable.py | 24 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_ci_variable.py | 26 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_workflow_job_id.py | 145 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_workflow_job_id.py | 148 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_workflow_job_id.py | 150 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_workflow_job_id.py | 162 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_workflow_job_id.py | 163 | 🟢 LOW | Debug print statement found |
| .github/scripts/github_utils.py | 64 | 🟢 LOW | Debug print statement found |
| .github/scripts/github_utils.py | 73 | 🟢 LOW | Debug print statement found |
| .github/scripts/github_utils.py | 153 | 🟢 LOW | Debug print statement found |
| .github/scripts/github_utils.py | 181 | 🟢 LOW | Debug print statement found |
| .github/scripts/gitutils.py | 50 | 🟢 LOW | Debug print statement found |
| .github/scripts/gitutils.py | 51 | 🟢 LOW | Debug print statement found |
| .github/scripts/gitutils.py | 151 | 🟢 LOW | Debug print statement found |
| .github/scripts/gitutils.py | 298 | 🟢 LOW | Debug print statement found |
| .github/scripts/gitutils.py | 302 | 🟢 LOW | Debug print statement found |
| .github/scripts/gitutils.py | 314 | 🟢 LOW | Debug print statement found |
| .github/scripts/gitutils.py | 458 | 🟢 LOW | Debug print statement found |
| .github/scripts/label_utils.py | 83 | 🟢 LOW | Debug print statement found |
| .github/scripts/label_utils.py | 95 | 🟢 LOW | Debug print statement found |
| .github/scripts/lint_native_functions.py | 46 | 🟢 LOW | Debug print statement found |
| .github/scripts/map_ec2_to_arc.py | 57 | 🟢 LOW | Debug print statement found |
| .github/scripts/map_ec2_to_arc.py | 61 | 🟢 LOW | Debug print statement found |
| .github/scripts/map_ec2_to_arc.py | 89 | 🟢 LOW | Debug print statement found |
| .github/scripts/map_ec2_to_arc.py | 99 | 🟢 LOW | Debug print statement found |
| .github/scripts/parse_ref.py | 8 | 🟢 LOW | Debug print statement found |
| .github/scripts/parse_ref.py | 11 | 🟢 LOW | Debug print statement found |
| .github/scripts/parse_ref.py | 13 | 🟢 LOW | Debug print statement found |
| .github/scripts/pytest_cache.py | 73 | 🟢 LOW | Debug print statement found |
| .github/scripts/pytest_cache.py | 83 | 🟢 LOW | Debug print statement found |
| .github/scripts/pytest_cache.py | 87 | 🟢 LOW | Debug print statement found |
| .github/scripts/pytest_cache.py | 103 | 🟢 LOW | Debug print statement found |
| .github/scripts/pytest_caching_utils.py | 137 | 🟢 LOW | Debug print statement found |
| .github/scripts/runner_determinator.py | 186 | 🟢 LOW | Debug print statement found |
| .github/scripts/test_map_ec2_to_arc.py | 270 | 🟢 LOW | Debug print statement found |
| .github/scripts/test_map_ec2_to_arc.py | 272 | 🟢 LOW | Debug print statement found |
| .github/scripts/test_map_ec2_to_arc.py | 275 | 🟢 LOW | Debug print statement found |
| .github/scripts/test_map_ec2_to_arc.py | 277 | 🟢 LOW | Debug print statement found |
| .github/scripts/test_trymerge.py | 788 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 720 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 730 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 930 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 935 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 938 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 941 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 946 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 1326 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 1388 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 1459 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 1739 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 1936 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 1948 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 2198 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 2200 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 2344 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 2409 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 2480 | 🟢 LOW | Debug print statement found |
| .github/scripts/trymerge.py | 2635 | 🟢 LOW | Debug print statement found |
| .github/scripts/tryrebase.py | 123 | 🟢 LOW | Debug print statement found |
| .github/scripts/tryrebase.py | 128 | 🟢 LOW | Debug print statement found |
| .github/scripts/tryrebase.py | 130 | 🟢 LOW | Debug print statement found |
| .github/scripts/update_metamates_rule.py | 108 | 🟢 LOW | Debug print statement found |
| .github/scripts/update_metamates_rule.py | 123 | 🟢 LOW | Debug print statement found |
| .github/scripts/update_metamates_rule.py | 129 | 🟢 LOW | Debug print statement found |
| .github/scripts/update_metamates_rule.py | 131 | 🟢 LOW | Debug print statement found |
| .github/scripts/update_metamates_rule.py | 133 | 🟢 LOW | Debug print statement found |
| .github/scripts/update_metamates_rule.py | 135 | 🟢 LOW | Debug print statement found |
| .github/scripts/update_metamates_rule.py | 138 | 🟢 LOW | Debug print statement found |
| .github/scripts/update_metamates_rule.py | 152 | 🟢 LOW | Debug print statement found |
| .github/scripts/update_metamates_rule.py | 156 | 🟢 LOW | Debug print statement found |
| android/pytorch_android/generate_test_torchscripts.py | 9 | 🟢 LOW | Debug print statement found |
| android/pytorch_android/generate_test_torchscripts.py | 11 | 🟢 LOW | Debug print statement found |
| android/pytorch_android/generate_test_torchscripts.py | 15 | 🟢 LOW | Debug print statement found |
| android/pytorch_android/generate_test_torchscripts.py | 16 | 🟢 LOW | Debug print statement found |
| aten/src/ATen/native/quantized/cpu/qnnpack/generate-wrapper.py | 119 | 🟢 LOW | Debug print statement found |
| aten/src/ATen/native/quantized/cpu/qnnpack/generate-wrapper.py | 120 | 🟢 LOW | Debug print statement found |
| aten/src/ATen/native/quantized/cpu/qnnpack/generate-wrapper.py | 127 | 🟢 LOW | Debug print statement found |
| aten/src/ATen/native/quantized/cpu/qnnpack/generate-wrapper.py | 130 | 🟢 LOW | Debug print statement found |
| aten/src/ATen/native/quantized/cpu/qnnpack/generate-wrapper.py | 131 | 🟢 LOW | Debug print statement found |
| aten/src/ATen/native/quantized/cpu/qnnpack/generate-wrapper.py | 132 | 🟢 LOW | Debug print statement found |
| aten/src/ATen/native/transformers/hip/flash_attn/ck/fav_v3/codegen_compat.py | 110 | 🟢 LOW | Debug print statement found |
| aten/src/ATen/native/transformers/hip/flash_attn/ck/fav_v3/generate_aiter_embedded_hsa.py | 55 | 🟢 LOW | Debug print statement found |
| aten/src/ATen/native/transformers/hip/flash_attn/ck/fav_v3/generate_aiter_embedded_hsa.py | 139 | 🟢 LOW | Debug print statement found |
| aten/src/ATen/native/transformers/hip/flash_attn/ck/fav_v3/generate_aiter_embedded_hsa.py | 143 | 🟢 LOW | Debug print statement found |
| benchmarks/compare-fastrnn-results.py | 57 | 🟢 LOW | Debug print statement found |
| benchmarks/compare-fastrnn-results.py | 59 | 🟢 LOW | Debug print statement found |
| benchmarks/compare-fastrnn-results.py | 61 | 🟢 LOW | Debug print statement found |
| benchmarks/compare-fastrnn-results.py | 70 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 49 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 59 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 61 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 64 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 67 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 71 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 90 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 101 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 120 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 121 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 139 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 186 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 211 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 212 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 213 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 214 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 215 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 216 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 217 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 265 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 267 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 268 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 269 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 270 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 271 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 273 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 274 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 275 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 276 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 289 | 🟢 LOW | Debug print statement found |
| benchmarks/data/dataloader_benchmark.py | 301 | 🟢 LOW | Debug print statement found |
| benchmarks/data/samplers_benchmark.py | 82 | 🟢 LOW | Debug print statement found |
| benchmarks/data/samplers_benchmark.py | 123 | 🟢 LOW | Debug print statement found |
| benchmarks/data/samplers_benchmark.py | 137 | 🟢 LOW | Debug print statement found |
| benchmarks/data/samplers_benchmark.py | 138 | 🟢 LOW | Debug print statement found |
| benchmarks/diffusion/compile_benchmark.py | 39 | 🟢 LOW | Debug print statement found |
| benchmarks/diffusion/compile_benchmark.py | 53 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/bench_nvshmem_tile_reduce.py | 153 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/bench_nvshmem_tile_reduce.py | 156 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/bench_nvshmem_tile_reduce.py | 159 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/bench_nvshmem_tile_reduce.py | 160 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/bench_nvshmem_tile_reduce.py | 161 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/bench_nvshmem_tile_reduce.py | 165 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/bench_nvshmem_tile_reduce.py | 169 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/bench_nvshmem_tile_reduce.py | 170 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/bench_nvshmem_tile_reduce.py | 173 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/bench_nvshmem_tile_reduce.py | 176 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 111 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 228 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 232 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 233 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 234 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 235 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 236 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 237 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 238 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 239 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 240 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 241 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 242 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 243 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 244 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 245 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/benchmark.py | 274 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/diff.py | 29 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/diff.py | 30 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/diff.py | 34 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/diff.py | 35 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/diff.py | 48 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/diff.py | 51 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/diff.py | 52 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/diff.py | 54 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/diff.py | 55 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/diff.py | 69 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/diff.py | 75 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/diff.py | 79 | 🟢 LOW | Debug print statement found |
| benchmarks/distributed/ddp/diff.py | 80 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/benchmarks.py | 106 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_accuracy.py | 75 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_accuracy.py | 90 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_accuracy.py | 135 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_csv.py | 22 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_csv.py | 25 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_graph_breaks.py | 75 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_graph_breaks.py | 89 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_graph_breaks.py | 134 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_memory_compression_ratio.py | 22 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_memory_compression_ratio.py | 29 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_memory_compression_ratio.py | 39 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_perf_csv.py | 15 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_perf_csv.py | 19 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_perf_csv.py | 46 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_perf_csv.py | 49 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_perf_csv.py | 59 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/check_perf_csv.py | 64 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/ci_expected_accuracy/update_expected.py | 197 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/ci_expected_accuracy/update_expected.py | 221 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/ci_expected_accuracy/update_expected.py | 311 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/ci_expected_accuracy/update_expected.py | 318 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/ci_expected_accuracy/update_expected.py | 321 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/ci_expected_accuracy/update_expected.py | 324 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 426 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 621 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 633 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 640 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 642 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 644 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 646 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 649 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 652 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 807 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 1264 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 1272 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 1291 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 1570 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 1636 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 1667 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 2238 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 2425 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 2474 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 2480 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 2488 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 2496 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 2726 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 2897 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 2904 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 3088 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 3095 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 3199 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 3212 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 3219 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 3235 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 3252 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 3257 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 3935 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4014 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4018 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4035 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4036 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4037 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4038 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4042 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4048 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4053 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4057 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4067 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4071 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4106 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4112 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4120 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4123 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4135 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4148 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4150 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4161 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4173 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4179 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4390 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4399 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4672 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4800 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4801 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4942 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4964 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4965 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4966 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4976 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4979 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 4995 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 5001 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/common.py | 5004 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/distributed.py | 78 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/distributed.py | 92 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/distributed.py | 177 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 48 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 49 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 50 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 51 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 56 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 67 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 68 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 79 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 80 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 83 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 84 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 85 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 95 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 96 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 97 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 100 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 102 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 209 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 210 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/benchmark.py | 216 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/kernels.py | 90 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/kernels.py | 112 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/kernels.py | 116 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/kernels.py | 201 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/kernels.py | 276 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/kernels.py | 347 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/kernels.py | 441 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/kernels.py | 563 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/kernels.py | 640 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/kernels.py | 729 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/utils.py | 139 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/utils.py | 143 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/utils.py | 147 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/utils.py | 159 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/utils.py | 166 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/utils.py | 206 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/utils.py | 210 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/utils.py | 223 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/genai_layers/utils.py | 314 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/huggingface.py | 96 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/huggingface_llm_models.py | 19 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/join_results.py | 52 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/launch_compile_op_numerics.py | 213 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/launch_compile_op_numerics.py | 829 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 55 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 56 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 158 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 160 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 178 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 180 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 185 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 186 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 187 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 188 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 192 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 212 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 213 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 214 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/analyze_templates.py | 216 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/bench_mm_fusion.py | 125 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/cache_debug_microbenchmarks.py | 28 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/cache_hit_microbenchmarks.py | 54 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/dynamo_guard_build.py | 46 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/dynamo_guard_eval.py | 38 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/dynamo_microbenchmarks.py | 24 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/dynamo_microbenchmarks.py | 38 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/fx_microbenchmarks.py | 27 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_bmm.py | 24 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_bmm.py | 27 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_bmm.py | 45 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_cpu_atomic.py | 19 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_cpu_atomic.py | 23 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_cpu_atomic.py | 54 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_cpu_atomic.py | 68 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_mm.py | 36 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_mm.py | 39 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_mm.py | 59 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_mm.py | 65 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_mm.py | 68 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_mm.py | 84 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_mm.py | 105 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/inductor_mm.py | 108 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/matmul_relu.py | 52 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/microbench.py | 168 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/microbench.py | 170 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/nested_graph_breaks.py | 45 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/nested_graph_breaks.py | 48 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/nested_graph_breaks.py | 57 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/nested_graph_breaks.py | 66 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/operator_inp_utils.py | 96 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/operatorbench.py | 53 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/operatorbench.py | 54 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/operatorbench.py | 55 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/operatorbench.py | 123 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/operatorbench.py | 159 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/operatorbench.py | 164 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/operatorbench.py | 176 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/operatorbench.py | 349 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/operatorbench.py | 382 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/optree_tree_map.py | 67 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/optree_tree_map.py | 117 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/overheads.py | 22 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/overheads.py | 26 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/overheads.py | 29 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/overheads.py | 30 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/overheads.py | 33 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/overheads.py | 34 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/microbenchmarks/tensor_layout_mini_benchmark.py | 62 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/parse_logs.py | 199 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 114 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 371 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 393 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 395 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 480 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 481 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 538 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 542 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 544 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 559 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 566 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 599 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 612 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 631 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 637 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 638 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 639 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 645 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 665 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 673 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 686 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 712 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 713 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 714 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 762 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 822 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 829 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 846 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 861 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 892 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 920 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 923 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 976 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 977 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 980 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 981 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 984 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 987 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 989 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 991 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1006 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1008 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1013 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1015 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1122 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1123 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1134 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1153 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1156 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1158 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1188 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1189 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1229 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1232 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1237 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1238 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1242 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1282 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1298 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1317 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1332 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1337 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1341 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1351 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1431 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1444 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1463 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1465 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1491 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1492 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1493 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1494 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1495 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1496 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1497 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1498 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1499 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1500 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1503 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1507 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1508 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1511 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1512 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1516 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1519 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1520 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1521 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1522 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1523 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1524 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1525 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1526 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1527 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1529 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1530 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1532 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1533 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1535 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1536 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1537 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1538 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/perf_cli.py | 1555 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/benchmarks/benchmark_base.py | 134 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/benchmarks/benchmark_base.py | 141 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/benchmarks/benchmark_base.py | 149 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/benchmarks/benchmark_base.py | 165 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/benchmarks/benchmark_base.py | 225 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/benchmarks/benchmark_base.py | 227 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 112 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 147 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 152 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 161 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 166 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 173 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 183 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 201 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 215 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 216 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 217 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 218 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 219 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 220 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 222 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 223 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 224 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 225 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 226 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 227 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 230 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 234 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/pr_time_benchmarks/check_results.py | 243 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/runner.py | 597 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/runner.py | 1473 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/runner.py | 1521 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/runner.py | 1537 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/summarize_perf.py | 132 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/summarize_perf.py | 134 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/summarize_perf.py | 144 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/summarize_perf.py | 145 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/timm_models.py | 38 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/timm_models.py | 81 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/training_loss.py | 185 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/training_loss.py | 189 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/training_loss.py | 193 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/training_loss.py | 196 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/training_loss.py | 199 | 🟢 LOW | Debug print statement found |
| benchmarks/dynamo/training_loss.py | 200 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/bench.py | 104 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/bench.py | 164 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/bench.py | 175 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/bench.py | 186 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/profile.py | 89 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/profile.py | 167 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/test.py | 52 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/test.py | 60 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/test.py | 65 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/test.py | 85 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/test.py | 86 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/test.py | 96 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/test.py | 108 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/test.py | 116 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/test.py | 127 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/test.py | 151 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/test.py | 152 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/test.py | 172 | 🟢 LOW | Debug print statement found |
| benchmarks/fastrnns/test.py | 192 | 🟢 LOW | Debug print statement found |
| benchmarks/framework_overhead_benchmark/framework_overhead_benchmark.py | 32 | 🟢 LOW | Debug print statement found |
| benchmarks/framework_overhead_benchmark/framework_overhead_benchmark.py | 34 | 🟢 LOW | Debug print statement found |
| benchmarks/framework_overhead_benchmark/framework_overhead_benchmark.py | 35 | 🟢 LOW | Debug print statement found |
| benchmarks/framework_overhead_benchmark/framework_overhead_benchmark.py | 49 | 🟢 LOW | Debug print statement found |
| benchmarks/framework_overhead_benchmark/framework_overhead_benchmark.py | 88 | 🟢 LOW | Debug print statement found |
| benchmarks/framework_overhead_benchmark/pt_wrapper_module.py | 36 | 🟢 LOW | Debug print statement found |
| benchmarks/framework_overhead_benchmark/pt_wrapper_module.py | 37 | 🟢 LOW | Debug print statement found |
| benchmarks/framework_overhead_benchmark/pt_wrapper_module.py | 41 | 🟢 LOW | Debug print statement found |
| benchmarks/framework_overhead_benchmark/pt_wrapper_module.py | 42 | 🟢 LOW | Debug print statement found |
| benchmarks/framework_overhead_benchmark/utils.py | 25 | 🟢 LOW | Debug print statement found |
| benchmarks/framework_overhead_benchmark/utils.py | 36 | 🟢 LOW | Debug print statement found |
| benchmarks/functional_autograd_benchmark/compare.py | 68 | 🟢 LOW | Debug print statement found |
| benchmarks/functional_autograd_benchmark/functional_autograd_benchmark.py | 15 | 🟢 LOW | Debug print statement found |
| benchmarks/functional_autograd_benchmark/functional_autograd_benchmark.py | 320 | 🟢 LOW | Debug print statement found |
| benchmarks/functional_autograd_benchmark/functional_autograd_benchmark.py | 328 | 🟢 LOW | Debug print statement found |
| benchmarks/functional_autograd_benchmark/functional_autograd_benchmark.py | 337 | 🟢 LOW | Debug print statement found |
| benchmarks/functional_autograd_benchmark/torchaudio_models.py | 498 | 🟢 LOW | Debug print statement found |
| benchmarks/functional_autograd_benchmark/torchaudio_models.py | 581 | 🟢 LOW | Debug print statement found |
| benchmarks/functional_autograd_benchmark/torchvision_models.py | 325 | 🟢 LOW | Debug print statement found |
| benchmarks/fuser/run_benchmarks.py | 286 | 🟢 LOW | Debug print statement found |
| benchmarks/fuser/run_benchmarks.py | 297 | 🟢 LOW | Debug print statement found |
| benchmarks/fuser/run_benchmarks.py | 312 | 🟢 LOW | Debug print statement found |
| benchmarks/gpt_fast/benchmark.py | 284 | 🟢 LOW | Debug print statement found |
| benchmarks/gpt_fast/benchmark.py | 297 | 🟢 LOW | Debug print statement found |
| benchmarks/gpt_fast/generate.py | 45 | 🟢 LOW | Debug print statement found |
| benchmarks/gpt_fast/generate.py | 159 | 🟢 LOW | Debug print statement found |
| benchmarks/gpt_fast/generate.py | 212 | 🟢 LOW | Debug print statement found |
| benchmarks/gpt_fast/generate.py | 216 | 🟢 LOW | Debug print statement found |
| benchmarks/gpt_fast/generate.py | 249 | 🟢 LOW | Debug print statement found |
| benchmarks/gpt_fast/generate.py | 263 | 🟢 LOW | Debug print statement found |
| benchmarks/gpt_fast/generate.py | 264 | 🟢 LOW | Debug print statement found |
| benchmarks/gpt_fast/generate.py | 265 | 🟢 LOW | Debug print statement found |
| benchmarks/inductor_backends/cutlass.py | 465 | 🟢 LOW | Debug print statement found |
| benchmarks/inductor_backends/cutlass.py | 466 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/applications/ci.py | 53 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/applications/ci.py | 81 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 58 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 122 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 127 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 132 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 134 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 136 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 138 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 142 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 155 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 210 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 221 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 238 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 249 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 251 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/runner.py | 254 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/execution/work.py | 224 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/main.py | 29 | 🟢 LOW | Debug print statement found |
| benchmarks/instruction_counts/worker/main.py | 188 | 🟢 LOW | Debug print statement found |
| benchmarks/nested/nested_bmm_bench.py | 39 | 🟢 LOW | Debug print statement found |
| benchmarks/nested/nested_bmm_bench.py | 64 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 230 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 237 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 239 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 242 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 251 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 263 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 266 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 273 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 276 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 278 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 281 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 284 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 287 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 465 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 536 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 543 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_core.py | 736 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_pytorch.py | 209 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_utils.py | 52 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/benchmark_utils.py | 61 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/check_perf_csv.py | 39 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/check_perf_csv.py | 47 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/check_perf_csv.py | 55 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/check_perf_csv.py | 111 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/common/repeat_benchmark.py | 64 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/compare_with_baseline.py | 27 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/compare_with_baseline.py | 143 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/compare_with_baseline.py | 146 | 🟢 LOW | Debug print statement found |
| benchmarks/operator_benchmark/compare_with_baseline.py | 153 | 🟢 LOW | Debug print statement found |
| benchmarks/overrides_benchmark/bench.py | 60 | 🟢 LOW | Debug print statement found |
| benchmarks/profiler_benchmark/profiler_bench.py | 54 | 🟢 LOW | Debug print statement found |
| benchmarks/profiler_benchmark/profiler_bench.py | 57 | 🟢 LOW | Debug print statement found |
| benchmarks/profiler_benchmark/profiler_bench.py | 63 | 🟢 LOW | Debug print statement found |
| benchmarks/profiler_benchmark/profiler_bench.py | 117 | 🟢 LOW | Debug print statement found |
| benchmarks/profiler_benchmark/resnet_memory_profiler.py | 15 | 🟢 LOW | Debug print statement found |
| benchmarks/profiler_benchmark/resnet_memory_profiler.py | 17 | 🟢 LOW | Debug print statement found |
| benchmarks/profiler_benchmark/resnet_memory_profiler.py | 23 | 🟢 LOW | Debug print statement found |
| benchmarks/record_function_benchmark/record_function_bench.py | 46 | 🟢 LOW | Debug print statement found |
| benchmarks/record_function_benchmark/record_function_bench.py | 47 | 🟢 LOW | Debug print statement found |
| benchmarks/record_function_benchmark/record_function_bench.py | 51 | 🟢 LOW | Debug print statement found |
| benchmarks/record_function_benchmark/record_function_bench.py | 60 | 🟢 LOW | Debug print statement found |
| benchmarks/record_function_benchmark/record_function_bench.py | 78 | 🟢 LOW | Debug print statement found |
| benchmarks/record_function_benchmark/record_function_bench.py | 79 | 🟢 LOW | Debug print statement found |
| benchmarks/record_function_benchmark/record_function_bench.py | 86 | 🟢 LOW | Debug print statement found |
| benchmarks/serialization/export_save_linear_bench.py | 254 | 🟢 LOW | Debug print statement found |
| benchmarks/serialization/export_save_linear_bench.py | 255 | 🟢 LOW | Debug print statement found |
| benchmarks/serialization/export_save_linear_bench.py | 267 | 🟢 LOW | Debug print statement found |
| benchmarks/serialization/export_save_linear_bench.py | 268 | 🟢 LOW | Debug print statement found |
| benchmarks/serialization/export_save_linear_bench.py | 272 | 🟢 LOW | Debug print statement found |
| benchmarks/serialization/export_save_linear_bench.py | 273 | 🟢 LOW | Debug print statement found |
| benchmarks/serialization/export_save_linear_bench.py | 277 | 🟢 LOW | Debug print statement found |
| benchmarks/serialization/export_save_linear_bench.py | 278 | 🟢 LOW | Debug print statement found |
| benchmarks/serialization/export_save_linear_bench.py | 280 | 🟢 LOW | Debug print statement found |
| benchmarks/serialization/nested_annotation_str.py | 31 | 🟢 LOW | Debug print statement found |
| benchmarks/serialization/nested_annotation_str.py | 32 | 🟢 LOW | Debug print statement found |
| benchmarks/serialization/nested_annotation_str.py | 33 | 🟢 LOW | Debug print statement found |
| benchmarks/serialization/simple_measurement.py | 35 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/dlmc/matmul_bench.py | 164 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/dlmc/matmul_bench.py | 166 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/dlmc/matmul_bench.py | 170 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/dlmc/matmul_bench.py | 171 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/dlmc/utils.py | 85 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/dlmc/utils.py | 91 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/dlmc/utils.py | 98 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/dlmc/utils.py | 127 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/dlmc/utils.py | 133 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/dlmc/utils.py | 140 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/spmm.py | 109 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/spmm.py | 123 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/spmm.py | 138 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/spmv.py | 106 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/spmv.py | 118 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/spmv.py | 128 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/triton_ops.py | 297 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/triton_ops.py | 299 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/triton_ops.py | 389 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/triton_ops.py | 399 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/triton_ops.py | 426 | 🟢 LOW | Debug print statement found |
| benchmarks/sparse/triton_ops.py | 438 | 🟢 LOW | Debug print statement found |
| benchmarks/tensorexpr/__main__.py | 294 | 🟢 LOW | Debug print statement found |
| benchmarks/tensorexpr/benchmark.py | 169 | 🟢 LOW | Debug print statement found |
| benchmarks/tensorexpr/benchmark.py | 173 | 🟢 LOW | Debug print statement found |
| benchmarks/tensorexpr/benchmark.py | 203 | 🟢 LOW | Debug print statement found |
| benchmarks/tensorexpr/benchmark.py | 213 | 🟢 LOW | Debug print statement found |
| benchmarks/tensorexpr/microbenchmarks.py | 282 | 🟢 LOW | Debug print statement found |
| benchmarks/tensorexpr/microbenchmarks.py | 284 | 🟢 LOW | Debug print statement found |
| benchmarks/tensorexpr/microbenchmarks.py | 285 | 🟢 LOW | Debug print statement found |
| benchmarks/tensorexpr/microbenchmarks.py | 289 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/attention_bias_benchmarks.py | 234 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/better_transformer_vs_mha_functional.py | 165 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/better_transformer_vs_mha_functional.py | 207 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/better_transformer_vs_mha_functional.py | 215 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/config_utils.py | 145 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/config_utils.py | 149 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/config_utils.py | 151 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/config_utils.py | 153 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/config_utils.py | 155 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/config_utils.py | 157 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 63 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 70 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 75 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 79 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 83 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 357 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 692 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 697 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 698 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 699 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 701 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 704 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 705 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 706 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 708 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 721 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 947 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 952 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 1002 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/score_mod.py | 1484 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/sdp.py | 182 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/sdp.py | 354 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/sdpa.py | 233 | 🟢 LOW | Debug print statement found |
| benchmarks/transformer/sdpa.py | 272 | 🟢 LOW | Debug print statement found |
| benchmarks/upload_scribe.py | 69 | 🟢 LOW | Debug print statement found |
| caffe2/perfkernels/hp_emblookup_codegen.py | 570 | 🟢 LOW | Debug print statement found |
| caffe2/perfkernels/hp_emblookup_codegen.py | 574 | 🟢 LOW | Debug print statement found |
| caffe2/perfkernels/sve_emblookup_codegen.py | 256 | 🟢 LOW | Debug print statement found |
| docs/cpp/check_coverage.py | 369 | 🟢 LOW | Debug print statement found |
| docs/cpp/check_coverage.py | 742 | 🟢 LOW | Debug print statement found |
| docs/cpp/check_coverage.py | 745 | 🟢 LOW | Debug print statement found |
| docs/cpp/check_coverage.py | 748 | 🟢 LOW | Debug print statement found |
| docs/cpp/check_coverage.py | 750 | 🟢 LOW | Debug print statement found |
| docs/cpp/check_coverage.py | 756 | 🟢 LOW | Debug print statement found |
| docs/cpp/check_coverage.py | 759 | 🟢 LOW | Debug print statement found |
| docs/cpp/check_coverage.py | 763 | 🟢 LOW | Debug print statement found |
| docs/cpp/check_coverage.py | 767 | 🟢 LOW | Debug print statement found |
| docs/cpp/check_coverage.py | 772 | 🟢 LOW | Debug print statement found |
| docs/cpp/check_coverage.py | 773 | 🟢 LOW | Debug print statement found |
| docs/cpp/check_coverage.py | 775 | 🟢 LOW | Debug print statement found |
| docs/cpp/check_coverage.py | 776 | 🟢 LOW | Debug print statement found |
| docs/source/conf.py | 2333 | 🟢 LOW | Debug print statement found |
| docs/source/scripts/build_activation_images.py | 87 | 🟢 LOW | Debug print statement found |
| docs/source/scripts/build_lr_scheduler_images.py | 90 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/chrome_trace_parser.py | 56 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/chrome_trace_parser.py | 58 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/chrome_trace_parser.py | 68 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/chrome_trace_parser.py | 71 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/cse.py | 38 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/operator_authoring.py | 72 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/operator_authoring.py | 264 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/operator_authoring.py | 266 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/operator_authoring.py | 267 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/operator_authoring.py | 269 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/per_sample_grads.py | 78 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/per_sample_grads.py | 81 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/per_sample_grads.py | 85 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/per_sample_grads.py | 88 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/per_sample_grads.py | 91 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/per_sample_grads.py | 98 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/pointwise_scorecard.py | 241 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/pointwise_scorecard.py | 248 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/pointwise_scorecard.py | 255 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/pointwise_scorecard.py | 273 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/pointwise_scorecard.py | 285 | 🟢 LOW | Debug print statement found |
| functorch/benchmarks/pointwise_scorecard.py | 299 | 🟢 LOW | Debug print statement found |
| functorch/dim/__init__.py | 423 | 🟢 LOW | Debug print statement found |
| functorch/dim/__init__.py | 495 | 🟢 LOW | Debug print statement found |
| functorch/dim/magic_trace.py | 19 | 🟢 LOW | Debug print statement found |
| functorch/dim/magic_trace.py | 36 | 🟢 LOW | Debug print statement found |
| functorch/dim/magic_trace.py | 45 | 🟢 LOW | Debug print statement found |
| functorch/docs/source/tutorials/_src/plot_ensembling.py | 99 | 🟢 LOW | Debug print statement found |
| functorch/docs/source/tutorials/_src/plot_jacobians_and_hessians.py | 90 | 🟢 LOW | Debug print statement found |
| functorch/docs/source/tutorials/_src/plot_jacobians_and_hessians.py | 91 | 🟢 LOW | Debug print statement found |
| functorch/docs/source/tutorials/_src/plot_jacobians_and_hessians.py | 128 | 🟢 LOW | Debug print statement found |
| functorch/docs/source/tutorials/_src/plot_jacobians_and_hessians.py | 129 | 🟢 LOW | Debug print statement found |
| functorch/docs/source/tutorials/_src/plot_jacobians_and_hessians.py | 140 | 🟢 LOW | Debug print statement found |
| functorch/docs/source/tutorials/_src/plot_jacobians_and_hessians.py | 141 | 🟢 LOW | Debug print statement found |
| functorch/docs/source/tutorials/_src/plot_per_sample_gradients.py | 88 | 🟢 LOW | Debug print statement found |
| functorch/examples/compilation/eager_fusion.py | 33 | 🟢 LOW | Debug print statement found |
| functorch/examples/compilation/eager_fusion.py | 52 | 🟢 LOW | Debug print statement found |
| functorch/examples/compilation/fuse_module.py | 54 | 🟢 LOW | Debug print statement found |
| functorch/examples/compilation/fuse_module.py | 56 | 🟢 LOW | Debug print statement found |
| functorch/examples/compilation/linear_train.py | 24 | 🟢 LOW | Debug print statement found |
| functorch/examples/compilation/linear_train.py | 80 | 🟢 LOW | Debug print statement found |
| functorch/examples/compilation/linear_train.py | 81 | 🟢 LOW | Debug print statement found |
| functorch/examples/compilation/linear_train.py | 82 | 🟢 LOW | Debug print statement found |
| functorch/examples/compilation/linear_train.py | 88 | 🟢 LOW | Debug print statement found |
| functorch/examples/compilation/linear_train.py | 91 | 🟢 LOW | Debug print statement found |
| functorch/examples/compilation/linear_train.py | 94 | 🟢 LOW | Debug print statement found |
| functorch/examples/compilation/simple_function.py | 30 | 🟢 LOW | Debug print statement found |
| functorch/examples/dp_cifar10/cifar10_opacus.py | 84 | 🟢 LOW | Debug print statement found |
| functorch/examples/dp_cifar10/cifar10_opacus.py | 91 | 🟢 LOW | Debug print statement found |
| functorch/examples/dp_cifar10/cifar10_opacus.py | 122 | 🟢 LOW | Debug print statement found |
| functorch/examples/dp_cifar10/cifar10_transforms.py | 157 | 🟢 LOW | Debug print statement found |
| functorch/examples/dp_cifar10/cifar10_transforms.py | 188 | 🟢 LOW | Debug print statement found |
| functorch/examples/ensembling/parallel_train.py | 107 | 🟢 LOW | Debug print statement found |
| functorch/examples/ensembling/parallel_train.py | 133 | 🟢 LOW | Debug print statement found |
| functorch/examples/lennard_jones/lennard_jones.py | 76 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/maml-omniglot-higher.py | 167 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/maml-omniglot-higher.py | 180 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/maml-omniglot-higher.py | 238 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/maml-omniglot-higher.py | 266 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/maml-omniglot-ptonly.py | 177 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/maml-omniglot-ptonly.py | 228 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/maml-omniglot-ptonly.py | 256 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/maml-omniglot-transforms.py | 174 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/maml-omniglot-transforms.py | 228 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/maml-omniglot-transforms.py | 256 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/support/omniglot_loaders.py | 107 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/support/omniglot_loaders.py | 114 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/support/omniglot_loaders.py | 118 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/support/omniglot_loaders.py | 129 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/support/omniglot_loaders.py | 138 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/support/omniglot_loaders.py | 191 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/support/omniglot_loaders.py | 195 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/support/omniglot_loaders.py | 199 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/support/omniglot_loaders.py | 223 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/support/omniglot_loaders.py | 240 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/support/omniglot_loaders.py | 249 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_omniglot/support/omniglot_loaders.py | 262 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_regression/evjang.py | 100 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_regression/evjang_transforms.py | 104 | 🟢 LOW | Debug print statement found |
| functorch/examples/maml_regression/evjang_transforms_module.py | 100 | 🟢 LOW | Debug print statement found |
| mypy_plugins/check_mypy_version.py | 23 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/download_reports.py | 48 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/download_reports.py | 59 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/download_reports.py | 95 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/failures_histogram.py | 98 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/failures_histogram.py | 102 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/failures_histogram.py | 104 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/failures_histogram.py | 105 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/passrate.py | 48 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/passrate.py | 52 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/passrate.py | 67 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/update_failures.py | 104 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/update_failures.py | 109 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/update_failures.py | 117 | 🟢 LOW | Debug print statement found |
| scripts/compile_tests/update_failures.py | 178 | 🟢 LOW | Debug print statement found |
| scripts/export/update_schema.py | 89 | 🟢 LOW | Debug print statement found |
| scripts/export/update_schema.py | 90 | 🟢 LOW | Debug print statement found |
| scripts/jit/log_extract.py | 39 | 🟢 LOW | Debug print statement found |
| scripts/jit/log_extract.py | 48 | 🟢 LOW | Debug print statement found |
| scripts/jit/log_extract.py | 52 | 🟢 LOW | Debug print statement found |
| scripts/jit/log_extract.py | 56 | 🟢 LOW | Debug print statement found |
| scripts/jit/log_extract.py | 149 | 🟢 LOW | Debug print statement found |
| scripts/lintrunner.py | 100 | 🟢 LOW | Debug print statement found |
| scripts/lintrunner.py | 127 | 🟢 LOW | Debug print statement found |
| scripts/lintrunner.py | 134 | 🟢 LOW | Debug print statement found |
| scripts/lintrunner.py | 140 | 🟢 LOW | Debug print statement found |
| scripts/lintrunner.py | 152 | 🟢 LOW | Debug print statement found |
| scripts/lintrunner.py | 166 | 🟢 LOW | Debug print statement found |
| scripts/lintrunner.py | 174 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/categorize.py | 26 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/categorize.py | 152 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/categorize.py | 155 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/categorize.py | 163 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/categorize.py | 166 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/categorize.py | 167 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/categorize.py | 168 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/categorize.py | 177 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/categorize.py | 180 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/classifier.py | 176 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/classifier.py | 181 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/classifier.py | 189 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/classifier.py | 190 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/classifier.py | 207 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/classifier.py | 226 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/classifier.py | 351 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/classifier.py | 379 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/classifier.py | 381 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/classifier.py | 416 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/commitlist.py | 397 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/commitlist.py | 577 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/commitlist.py | 597 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/commitlist.py | 606 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/common.py | 181 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/common.py | 184 | 🟢 LOW | Debug print statement found |
| scripts/release_notes/common.py | 202 | 🟢 LOW | Debug print statement found |
| scripts/setup_hooks.py | 47 | 🟢 LOW | Debug print statement found |
| scripts/setup_hooks.py | 68 | 🟢 LOW | Debug print statement found |
| scripts/setup_hooks.py | 85 | 🟢 LOW | Debug print statement found |
| scripts/setup_hooks.py | 89 | 🟢 LOW | Debug print statement found |
| scripts/setup_hooks.py | 95 | 🟢 LOW | Debug print statement found |
| scripts/setup_hooks.py | 123 | 🟢 LOW | Debug print statement found |
| scripts/setup_hooks.py | 127 | 🟢 LOW | Debug print statement found |
| setup.py | 252 | 🟢 LOW | Debug print statement found |
| setup.py | 266 | 🟢 LOW | Debug print statement found |
| setup.py | 410 | 🟢 LOW | Debug print statement found |
| setup.py | 446 | 🟢 LOW | Debug print statement found |
| setup.py | 1124 | 🟢 LOW | Debug print statement found |
| setup.py | 1126 | 🟢 LOW | Debug print statement found |
| setup.py | 1127 | 🟢 LOW | Debug print statement found |
| setup.py | 1157 | 🟢 LOW | Debug print statement found |
| test/bench_mps_ops.py | 211 | 🟢 LOW | Debug print statement found |
| test/bench_mps_ops.py | 217 | 🟢 LOW | Debug print statement found |
| test/bench_mps_ops.py | 223 | 🟢 LOW | Debug print statement found |
| test/bench_mps_ops.py | 229 | 🟢 LOW | Debug print statement found |
| test/bench_mps_ops.py | 235 | 🟢 LOW | Debug print statement found |
| test/bench_mps_ops.py | 244 | 🟢 LOW | Debug print statement found |
| test/bench_mps_ops.py | 250 | 🟢 LOW | Debug print statement found |
| test/bench_mps_ops.py | 267 | 🟢 LOW | Debug print statement found |
| test/bench_mps_ops.py | 273 | 🟢 LOW | Debug print statement found |
| test/benchmark_utils/test_benchmark_utils.py | 41 | 🟢 LOW | Debug print statement found |
| test/benchmark_utils/test_benchmark_utils.py | 994 | 🟢 LOW | Debug print statement found |
| test/benchmark_utils/test_benchmark_utils.py | 996 | 🟢 LOW | Debug print statement found |
| test/benchmark_utils/test_benchmark_utils.py | 997 | 🟢 LOW | Debug print statement found |
| test/benchmark_utils/test_benchmark_utils.py | 1003 | 🟢 LOW | Debug print statement found |
| test/benchmark_utils/test_benchmark_utils.py | 1007 | 🟢 LOW | Debug print statement found |
| test/cpp/api/init_baseline.py | 30 | 🟢 LOW | Debug print statement found |
| test/cpp/api/init_baseline.py | 31 | 🟢 LOW | Debug print statement found |
| test/cpp/api/init_baseline.py | 33 | 🟢 LOW | Debug print statement found |
| test/cpp/api/init_baseline.py | 34 | 🟢 LOW | Debug print statement found |
| test/cpp/api/init_baseline.py | 36 | 🟢 LOW | Debug print statement found |
| test/cpp/api/init_baseline.py | 39 | 🟢 LOW | Debug print statement found |
| test/cpp/api/init_baseline.py | 40 | 🟢 LOW | Debug print statement found |
| test/cpp/api/init_baseline.py | 41 | 🟢 LOW | Debug print statement found |
| test/cpp/api/init_baseline.py | 42 | 🟢 LOW | Debug print statement found |
| test/cpp/api/init_baseline.py | 43 | 🟢 LOW | Debug print statement found |
| test/cpp/api/optim_baseline.py | 108 | 🟢 LOW | Debug print statement found |
| test/cpp/api/optim_baseline.py | 109 | 🟢 LOW | Debug print statement found |
| test/cpp/api/optim_baseline.py | 111 | 🟢 LOW | Debug print statement found |
| test/cpp/api/optim_baseline.py | 112 | 🟢 LOW | Debug print statement found |
| test/cpp/api/optim_baseline.py | 114 | 🟢 LOW | Debug print statement found |
| test/cpp/api/optim_baseline.py | 117 | 🟢 LOW | Debug print statement found |
| test/cpp/api/optim_baseline.py | 118 | 🟢 LOW | Debug print statement found |
| test/cpp/api/optim_baseline.py | 119 | 🟢 LOW | Debug print statement found |
| test/cpp/api/optim_baseline.py | 120 | 🟢 LOW | Debug print statement found |
| test/cpp/api/optim_baseline.py | 121 | 🟢 LOW | Debug print statement found |
| test/cpp_api_parity/functional_impl_check.py | 321 | 🟢 LOW | Debug print statement found |
| test/cpp_api_parity/module_impl_check.py | 387 | 🟢 LOW | Debug print statement found |
| test/cpp_extensions/libtorch_agn_2_10_extension/test_version_compatibility.py | 161 | 🟢 LOW | Debug print statement found |
| test/cpp_extensions/libtorch_agn_2_10_extension/test_version_compatibility.py | 163 | 🟢 LOW | Debug print statement found |
| test/cpp_extensions/libtorch_agn_2_10_extension/test_version_compatibility.py | 201 | 🟢 LOW | Debug print statement found |
| test/cpp_extensions/libtorch_agn_2_10_extension/test_version_compatibility.py | 205 | 🟢 LOW | Debug print statement found |
| test/cpp_extensions/libtorch_agn_2_10_extension/test_version_compatibility.py | 244 | 🟢 LOW | Debug print statement found |
| test/cpp_extensions/libtorch_agn_2_10_extension/test_version_compatibility.py | 246 | 🟢 LOW | Debug print statement found |
| test/cpp_extensions/open_registration_extension/torch_openreg/tests/test_ops.py | 99 | 🟢 LOW | Debug print statement found |
| test/cpp_extensions/test_libtorch_agnostic.py | 98 | 🟢 LOW | Debug print statement found |
| test/cpp_extensions/test_libtorch_agnostic.py | 108 | 🟢 LOW | Debug print statement found |
| test/cpp_extensions/test_libtorch_agnostic.py | 118 | 🟢 LOW | Debug print statement found |
| test/cpp_extensions/test_libtorch_agnostic.py | 128 | 🟢 LOW | Debug print statement found |
| test/cpp_extensions/test_libtorch_agnostic.py | 1407 | 🟢 LOW | Debug print statement found |
| test/cpp_extensions/test_libtorch_agnostic.py | 1583 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 366 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 368 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 374 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 375 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 378 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 837 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 859 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 2459 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 2461 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 2463 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 2532 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 2535 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 2596 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 2599 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_builtin.py | 2611 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_contextlib.py | 1231 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_contextlib.py | 1246 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_contextlib.py | 1248 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_contextlib.py | 1258 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_contextlib.py | 1260 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_deque.py | 983 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_deque.py | 1053 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_deque.py | 1072 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_descr.py | 4493 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_enum.py | 2555 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_enum.py | 3020 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_enum.py | 3028 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_enum.py | 3082 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_enum.py | 3090 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_enum.py | 5099 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_enum.py | 5100 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_enum.py | 5147 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_enum.py | 5163 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_enum.py | 5166 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_exceptions.py | 242 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_exceptions.py | 245 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_exceptions.py | 248 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_exceptions.py | 269 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_exceptions.py | 297 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_exceptions.py | 602 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_exceptions.py | 1518 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_exceptions.py | 1539 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_funcattrs.py | 158 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_funcattrs.py | 176 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_funcattrs.py | 203 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_funcattrs.py | 436 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_funcattrs.py | 443 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 898 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 951 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 978 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 984 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1034 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1044 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1094 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1143 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1164 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1218 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1220 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1257 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1321 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1322 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1328 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1450 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1487 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1558 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1727 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1729 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1731 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1733 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1958 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1962 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 1963 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2155 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2158 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2159 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2167 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2187 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2207 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2246 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2258 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2338 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2379 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2382 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2385 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2388 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2430 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2432 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2500 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2554 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2575 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2588 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_generators.py | 2590 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_itertools.py | 1201 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 72 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 81 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 82 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 83 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 84 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 85 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 92 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 93 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 94 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 95 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 96 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 118 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 139 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 158 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sort.py | 159 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 974 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 981 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 987 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 996 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 1005 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 1020 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 1041 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 1071 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 1240 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 1255 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 1256 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 1336 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 1345 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_sys.py | 1346 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_tuple.py | 217 | 🟢 LOW | Debug print statement found |
| test/cpython/v3_13/test_userdict.py | 138 | 🟢 LOW | Debug print statement found |
| test/distributed/_composable/fsdp/test_fully_shard_ignore_params.py | 26 | 🟢 LOW | Debug print statement found |
| test/distributed/_composable/fsdp/test_fully_shard_ignore_params.py | 30 | 🟢 LOW | Debug print statement found |
| test/distributed/_composable/test_composability/test_2d_composability.py | 517 | 🟢 LOW | Debug print statement found |
| test/distributed/_composable/test_composability/test_2d_composability.py | 635 | 🟢 LOW | Debug print statement found |
| test/distributed/_shard/sharded_tensor/ops/test_binary_cmp.py | 27 | 🟢 LOW | Debug print statement found |
| test/distributed/_shard/sharded_tensor/ops/test_embedding.py | 31 | 🟢 LOW | Debug print statement found |
| test/distributed/_shard/sharded_tensor/ops/test_embedding_bag.py | 31 | 🟢 LOW | Debug print statement found |
| test/distributed/_shard/sharded_tensor/ops/test_init.py | 25 | 🟢 LOW | Debug print statement found |
| test/distributed/_shard/sharded_tensor/test_sharded_tensor.py | 68 | 🟢 LOW | Debug print statement found |
| test/distributed/_shard/sharded_tensor/test_sharded_tensor_reshard.py | 21 | 🟢 LOW | Debug print statement found |
| test/distributed/_shard/sharding_plan/test_sharding_plan.py | 25 | 🟢 LOW | Debug print statement found |
| test/distributed/_shard/test_sharder.py | 26 | 🟢 LOW | Debug print statement found |
| test/distributed/_test_template.py | 9 | 🟢 LOW | Debug print statement found |
| test/distributed/_test_template.py | 12 | 🟢 LOW | Debug print statement found |
| test/distributed/_tools/test_fsdp2_mem_tracker.py | 120 | 🟢 LOW | Debug print statement found |
| test/distributed/_tools/test_fsdp2_mem_tracker.py | 170 | 🟢 LOW | Debug print statement found |
| test/distributed/_tools/test_fsdp2_mem_tracker.py | 309 | 🟢 LOW | Debug print statement found |
| test/distributed/_tools/test_runtime_estimator.py | 160 | 🟢 LOW | Debug print statement found |
| test/distributed/_tools/test_runtime_estimator.py | 188 | 🟢 LOW | Debug print statement found |
| test/distributed/algorithms/ddp_comm_hooks/test_ddp_hooks.py | 11 | 🟢 LOW | Debug print statement found |
| test/distributed/algorithms/ddp_comm_hooks/test_ddp_hooks.py | 28 | 🟢 LOW | Debug print statement found |
| test/distributed/algorithms/quantization/test_quantization.py | 29 | 🟢 LOW | Debug print statement found |
| test/distributed/algorithms/quantization/test_quantization.py | 43 | 🟢 LOW | Debug print statement found |
| test/distributed/algorithms/test_join.py | 13 | 🟢 LOW | Debug print statement found |
| test/distributed/algorithms/test_join.py | 25 | 🟢 LOW | Debug print statement found |
| test/distributed/bin/test_script.py | 12 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/e2e/test_e2e_save_and_load.py | 312 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/e2e/test_fine_tuning.py | 29 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/e2e/test_fine_tuning.py | 33 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/e2e/test_fine_tuning.py | 191 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_async_process_executor.py | 31 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_checkpoint.py | 51 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_consolidate_hf_safetensors.py | 79 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_consolidate_hf_safetensors.py | 122 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_consolidate_hf_safetensors.py | 238 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_consolidate_hf_safetensors.py | 286 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_dtensor_resharding.py | 342 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_file_system_checkpoint.py | 56 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_file_system_checkpoint_cpu.py | 48 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_fsspec.py | 51 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_hf_safetensor_e2e.py | 46 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_hf_safetensor_e2e.py | 73 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_hf_safetensor_e2e.py | 102 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_hf_safetensor_e2e.py | 127 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_hf_safetensor_e2e.py | 170 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_hf_safetensor_e2e.py | 283 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_hf_safetensor_e2e.py | 364 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_hf_safetensor_e2e.py | 422 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_hf_safetensor_e2e.py | 481 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_hf_safetensor_e2e.py | 532 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_hf_safetensor_e2e.py | 587 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_pg_transport.py | 173 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_pg_transport.py | 180 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_pg_transport.py | 181 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_pg_transport.py | 190 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_planner.py | 62 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_state_dict.py | 69 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_state_dict.py | 73 | 🟢 LOW | Debug print statement found |
| test/distributed/checkpoint/test_utils.py | 40 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/agent/server/test/local_elastic_agent_test.py | 254 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/agent/server/test/local_elastic_agent_test.py | 974 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/agent/server/test/local_elastic_agent_test.py | 1016 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/api_test.py | 119 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/api_test.py | 129 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/api_test.py | 133 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/api_test.py | 134 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/api_test.py | 195 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/bin/echo1.py | 23 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/bin/echo1.py | 27 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/bin/echo1.py | 28 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/bin/echo2.py | 24 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/bin/echo3.py | 27 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/bin/echo4.py | 24 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/bin/echo4.py | 28 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/bin/echo4.py | 29 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/bin/zombie_test.py | 15 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/errors/api_test.py | 40 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/errors/api_test.py | 171 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/redirects_test.py | 44 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/redirects_test.py | 49 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/redirects_test.py | 54 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/redirects_test.py | 69 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/redirects_test.py | 74 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/redirects_test.py | 78 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/redirects_test.py | 92 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/redirects_test.py | 95 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/redirects_test.py | 99 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/redirects_test.py | 100 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/redirects_test.py | 104 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/redirects_test.py | 133 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/multiprocessing/tail_log_test.py | 27 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/rendezvous/etcd_rendezvous_test.py | 19 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/rendezvous/etcd_server_test.py | 18 | 🟢 LOW | Debug print statement found |
| test/distributed/elastic/utils/distributed_test.py | 49 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_distributed_checkpoint.py | 26 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_distributed_checkpoint.py | 30 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_apply.py | 23 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_apply.py | 27 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_backward_prefetch.py | 66 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_backward_prefetch.py | 70 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_checkpoint.py | 39 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_checkpoint.py | 42 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_clip_grad_norm.py | 33 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_clip_grad_norm.py | 36 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_comm.py | 37 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_comm.py | 40 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_comm.py | 196 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_comm_hooks.py | 29 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_core.py | 48 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_core.py | 51 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_exec_order.py | 24 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_exec_order.py | 28 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_fine_tune.py | 31 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_fine_tune.py | 35 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_flatten_params.py | 25 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_flatten_params.py | 29 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_freezing_weights.py | 24 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_freezing_weights.py | 28 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_grad_acc.py | 32 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_grad_acc.py | 36 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_hybrid_shard.py | 43 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_hybrid_shard.py | 47 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_ignored_modules.py | 29 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_ignored_modules.py | 33 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_input.py | 21 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_input.py | 24 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_memory.py | 25 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_memory.py | 29 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_meta.py | 35 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_meta.py | 39 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_misc.py | 55 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_misc.py | 59 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_mixed_precision.py | 63 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_mixed_precision.py | 67 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_mixed_precision.py | 1347 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_multiple_forward.py | 23 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_multiple_forward.py | 26 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_multiple_wrapping.py | 18 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_multiple_wrapping.py | 21 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_optim_state.py | 51 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_optim_state.py | 55 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_overlap.py | 27 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_overlap.py | 31 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_overlap.py | 203 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_pure_fp16.py | 28 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_pure_fp16.py | 32 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_sharded_grad_scaler.py | 43 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_sharded_grad_scaler.py | 48 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_state_dict.py | 72 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_state_dict.py | 76 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_tp_integration.py | 41 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_tp_integration.py | 45 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_traversal.py | 19 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_traversal.py | 22 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_uneven.py | 17 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_uneven.py | 21 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_unshard_params.py | 43 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_unshard_params.py | 47 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_use_orig_params.py | 51 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_fsdp_use_orig_params.py | 55 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_utils.py | 29 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_utils.py | 33 | 🟢 LOW | Debug print statement found |
| test/distributed/fsdp/test_wrap.py | 541 | 🟢 LOW | Debug print statement found |
| test/distributed/launcher/bin/test_script.py | 56 | 🟢 LOW | Debug print statement found |
| test/distributed/launcher/bin/test_script.py | 59 | 🟢 LOW | Debug print statement found |
| test/distributed/launcher/bin/test_script.py | 66 | 🟢 LOW | Debug print statement found |
| test/distributed/launcher/bin/test_script_init_method.py | 75 | 🟢 LOW | Debug print statement found |
| test/distributed/launcher/bin/test_script_local_rank.py | 29 | 🟢 LOW | Debug print statement found |
| test/distributed/launcher/bin/test_script_local_rank.py | 38 | 🟢 LOW | Debug print statement found |
| test/distributed/launcher/script_deviceid.py | 30 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_01_basic_operations.py | 113 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_01_basic_operations.py | 115 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_01_basic_operations.py | 117 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_01_basic_operations.py | 119 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_01_basic_operations.py | 121 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_01_basic_operations.py | 123 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_01_basic_operations.py | 125 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_01_basic_operations.py | 127 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_01_basic_operations.py | 129 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_01_basic_operations.py | 131 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_02_collective_operations.py | 142 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_02_collective_operations.py | 144 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_02_collective_operations.py | 146 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_02_collective_operations.py | 148 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_02_collective_operations.py | 150 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_02_collective_operations.py | 153 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_02_collective_operations.py | 155 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_02_collective_operations.py | 158 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_03_dtensor_integration.py | 111 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_03_dtensor_integration.py | 113 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_03_dtensor_integration.py | 114 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_03_dtensor_integration.py | 116 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_03_dtensor_integration.py | 118 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_03_dtensor_integration.py | 120 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_03_dtensor_integration.py | 122 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_04_uneven_sharding.py | 104 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_04_uneven_sharding.py | 106 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_04_uneven_sharding.py | 108 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_04_uneven_sharding.py | 110 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_04_uneven_sharding.py | 112 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_04_uneven_sharding.py | 114 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_05_rank_specific.py | 154 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_05_rank_specific.py | 156 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_05_rank_specific.py | 158 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_05_rank_specific.py | 160 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_05_rank_specific.py | 162 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_05_rank_specific.py | 164 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_05_rank_specific.py | 166 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_05_rank_specific.py | 168 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_05_rank_specific.py | 170 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_05_rank_specific.py | 172 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_06_multidim_mesh.py | 111 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_06_multidim_mesh.py | 113 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_06_multidim_mesh.py | 117 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_06_multidim_mesh.py | 119 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_06_multidim_mesh.py | 121 | 🟢 LOW | Debug print statement found |
| test/distributed/local_tensor_tutorial_examples/example_06_multidim_mesh.py | 123 | 🟢 LOW | Debug print statement found |
| test/distributed/nn/jit/test_instantiator.py | 12 | 🟢 LOW | Debug print statement found |
| test/distributed/optim/test_zero_redundancy_optimizer.py | 20 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_backward.py | 62 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_backward.py | 159 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_backward.py | 210 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_microbatch.py | 85 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_microbatch.py | 331 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_pipe.py | 100 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_pipe.py | 121 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_schedule.py | 294 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_schedule.py | 508 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_schedule.py | 904 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_schedule.py | 1385 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_schedule.py | 1420 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_schedule.py | 1536 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_schedule.py | 1645 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_schedule_multiproc.py | 173 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_schedule_multiproc.py | 663 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_schedule_multiproc.py | 741 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_schedule_multiproc.py | 1222 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_schedule_multiproc.py | 1272 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_schedule_multiproc.py | 1334 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_stage.py | 238 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_transformer.py | 68 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_transformer.py | 74 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_unflatten.py | 68 | 🟢 LOW | Debug print statement found |
| test/distributed/pipelining/test_unflatten.py | 74 | 🟢 LOW | Debug print statement found |
| test/distributed/rpc/cuda/test_tensorpipe_agent.py | 10 | 🟢 LOW | Debug print statement found |
| test/distributed/rpc/test_faulty_agent.py | 11 | 🟢 LOW | Debug print statement found |
| test/distributed/rpc/test_share_memory.py | 14 | 🟢 LOW | Debug print statement found |
| test/distributed/rpc/test_tensorpipe_agent.py | 11 | 🟢 LOW | Debug print statement found |
| test/distributed/tensor/test_compile_on_one_rank.py | 21 | 🟢 LOW | Debug print statement found |
| test/distributed/tensor/test_dtensor_compile.py | 1231 | 🟢 LOW | Debug print statement found |
| test/distributed/tensor/test_dtensor_compile.py | 1252 | 🟢 LOW | Debug print statement found |
| test/distributed/tensor/test_dtensor_ops.py | 599 | 🟢 LOW | Debug print statement found |
| test/distributed/tensor/test_dtensor_ops.py | 622 | 🟢 LOW | Debug print statement found |
| test/distributed/tensor/test_dtensor_ops.py | 624 | 🟢 LOW | Debug print statement found |
| test/distributed/tensor/test_embedding_ops.py | 23 | 🟢 LOW | Debug print statement found |
| test/distributed/tensor/test_redistribute.py | 1740 | 🟢 LOW | Debug print statement found |
| test/distributed/tensor/test_single_dim_strategy.py | 439 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_common.py | 25 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_common.py | 54 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_functional_native.py | 59 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_gloo.py | 24 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_gloo.py | 2822 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_logger.py | 15 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_logger.py | 26 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_nccl.py | 30 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_nccl.py | 87 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_nccl.py | 2040 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_nccl.py | 3077 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_nccl.py | 3130 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_object_collectives.py | 11 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_object_collectives.py | 23 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_ops_nccl.py | 21 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_ops_nccl.py | 43 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_spawn.py | 27 | 🟢 LOW | Debug print statement found |
| test/distributed/test_c10d_ucc.py | 18 | 🟢 LOW | Debug print statement found |
| test/distributed/test_ce_colls.py | 16 | 🟢 LOW | Debug print statement found |
| test/distributed/test_data_parallel.py | 895 | 🟢 LOW | Debug print statement found |
| test/distributed/test_data_parallel.py | 936 | 🟢 LOW | Debug print statement found |
| test/distributed/test_distributed_spawn.py | 13 | 🟢 LOW | Debug print statement found |
| test/distributed/test_distributed_spawn.py | 24 | 🟢 LOW | Debug print statement found |
| test/distributed/test_distributed_spawn.py | 56 | 🟢 LOW | Debug print statement found |
| test/distributed/test_dynamo_distributed.py | 1159 | 🟢 LOW | Debug print statement found |
| test/distributed/test_dynamo_distributed.py | 1202 | 🟢 LOW | Debug print statement found |
| test/distributed/test_dynamo_distributed.py | 1346 | 🟢 LOW | Debug print statement found |
| test/distributed/test_dynamo_distributed.py | 1537 | 🟢 LOW | Debug print statement found |
| test/distributed/test_dynamo_distributed.py | 1581 | 🟢 LOW | Debug print statement found |
| test/distributed/test_dynamo_distributed.py | 1593 | 🟢 LOW | Debug print statement found |
| test/distributed/test_fake_pg.py | 37 | 🟢 LOW | Debug print statement found |
| test/distributed/test_functional_api.py | 20 | 🟢 LOW | Debug print statement found |
| test/distributed/test_functional_differentials.py | 23 | 🟢 LOW | Debug print statement found |
| test/distributed/test_inductor_collectives.py | 373 | 🟢 LOW | Debug print statement found |
| test/distributed/test_inductor_collectives.py | 374 | 🟢 LOW | Debug print statement found |
| test/distributed/test_inductor_compile_collectives.py | 22 | 🟢 LOW | Debug print statement found |
| test/distributed/test_launcher.py | 13 | 🟢 LOW | Debug print statement found |
| test/distributed/test_launcher.py | 28 | 🟢 LOW | Debug print statement found |
| test/distributed/test_local_tensor.py | 192 | 🟢 LOW | Debug print statement found |
| test/distributed/test_local_tensor.py | 613 | 🟢 LOW | Debug print statement found |
| test/distributed/test_multi_threaded_pg.py | 17 | 🟢 LOW | Debug print statement found |
| test/distributed/test_multi_threaded_pg.py | 194 | 🟢 LOW | Debug print statement found |
| test/distributed/test_nan_check.py | 11 | 🟢 LOW | Debug print statement found |
| test/distributed/test_nccl.py | 41 | 🟢 LOW | Debug print statement found |
| test/distributed/test_pg_wrapper.py | 15 | 🟢 LOW | Debug print statement found |
| test/distributed/test_shmem_triton.py | 23 | 🟢 LOW | Debug print statement found |
| test/distributed/test_store.py | 25 | 🟢 LOW | Debug print statement found |
| test/distributed/test_token_switch.py | 80 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_aot_autograd.py | 257 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_aot_autograd_cache.py | 3145 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_autograd_function.py | 152 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_backward_higher_order_ops.py | 289 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_bytecode_utils.py | 572 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_bytecode_utils.py | 573 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_compile.py | 86 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_compile.py | 90 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_compile.py | 123 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_compile.py | 129 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_comptime.py | 32 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_comptime.py | 219 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_comptime.py | 263 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_ctx_manager.py | 2089 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_ctx_manager.py | 2285 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_ctx_manager.py | 2642 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_ctx_manager.py | 2831 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_einops.py | 193 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_error_messages.py | 273 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_error_messages.py | 291 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_error_messages.py | 711 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_exceptions.py | 575 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_functions.py | 3278 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_functions.py | 3324 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_functions.py | 3374 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_functions.py | 3564 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_functions.py | 3579 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_functions.py | 3595 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_functions.py | 3983 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_functions.py | 4016 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_functions.py | 4076 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_functions.py | 4679 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_guard_manager.py | 520 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_higher_order_ops.py | 6232 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_higher_order_ops.py | 6249 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_higher_order_ops.py | 6253 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_higher_order_ops.py | 6274 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_hooks.py | 706 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_input_attr_tracking.py | 197 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_input_attr_tracking.py | 249 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_logging.py | 1105 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_logging.py | 1403 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_metrics_context.py | 113 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_misc.py | 3905 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_misc.py | 4089 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_misc.py | 4105 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_misc.py | 7507 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_misc.py | 7853 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_misc.py | 7865 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_misc.py | 9681 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_misc.py | 10415 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_misc.py | 11653 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_misc.py | 13434 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_modes.py | 1763 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_modes.py | 1764 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_modes.py | 1875 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_modes.py | 1876 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_modes.py | 2277 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_modes.py | 2278 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_modes.py | 2281 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_modes.py | 2282 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_modules.py | 1441 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_modules.py | 2493 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_modules.py | 2494 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_nested_graph_breaks.py | 1512 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_nested_graph_breaks.py | 1528 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_package.py | 660 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_profiler.py | 338 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_python_autograd.py | 84 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_python_autograd.py | 114 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_python_autograd.py | 115 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_python_autograd.py | 127 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_python_autograd.py | 155 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_python_autograd.py | 173 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_python_autograd.py | 189 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_recompile_ux.py | 112 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_recompile_ux.py | 412 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_reconstruct.py | 557 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_reconstruct.py | 570 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_reorder_logs.py | 165 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_reorder_logs.py | 184 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_reorder_logs.py | 186 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_reorder_logs.py | 188 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_reorder_logs.py | 228 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_reorder_logs.py | 232 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_reorder_logs.py | 273 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_reorder_logs.py | 276 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_reorder_logs.py | 311 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_repros.py | 2035 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_repros.py | 2088 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_repros.py | 2821 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_repros.py | 6363 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_repros.py | 7207 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_structured_trace.py | 1111 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_structured_trace.py | 1113 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_subgraphs.py | 237 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_subgraphs.py | 373 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_torchrec.py | 64 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_trace_rules.py | 102 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_unspec.py | 949 | 🟢 LOW | Debug print statement found |
| test/dynamo/test_utils.py | 453 | 🟢 LOW | Debug print statement found |
| test/error_messages/storage.py | 9 | 🟢 LOW | Debug print statement found |
| test/error_messages/storage.py | 10 | 🟢 LOW | Debug print statement found |
| test/error_messages/storage.py | 11 | 🟢 LOW | Debug print statement found |
| test/error_messages/storage.py | 12 | 🟢 LOW | Debug print statement found |
| test/error_messages/storage.py | 13 | 🟢 LOW | Debug print statement found |
| test/export/test_draft_export.py | 165 | 🟢 LOW | Debug print statement found |
| test/export/test_export.py | 2727 | 🟢 LOW | Debug print statement found |
| test/export/test_export.py | 2871 | 🟢 LOW | Debug print statement found |
| test/export/test_export.py | 5002 | 🟢 LOW | Debug print statement found |
| test/export/test_export.py | 6717 | 🟢 LOW | Debug print statement found |
| test/export/test_export.py | 7829 | 🟢 LOW | Debug print statement found |
| test/export/test_export.py | 11960 | 🟢 LOW | Debug print statement found |
| test/export/test_export.py | 18479 | 🟢 LOW | Debug print statement found |
| test/export/test_export.py | 18481 | 🟢 LOW | Debug print statement found |
| test/export/test_export.py | 18483 | 🟢 LOW | Debug print statement found |
| test/functorch/common_utils.py | 340 | 🟢 LOW | Debug print statement found |
| test/functorch/common_utils.py | 630 | 🟢 LOW | Debug print statement found |
| test/functorch/common_utils.py | 632 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 453 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 455 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 456 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 457 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 459 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 460 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 461 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 462 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 465 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 489 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 494 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 539 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 545 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 546 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 557 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 561 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 564 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 566 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 568 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 571 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 573 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 576 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 578 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 581 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 591 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 592 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 622 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 623 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 627 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 923 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 924 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 925 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 931 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 932 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 945 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 947 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 948 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 954 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 957 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 960 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 963 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 969 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 971 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 975 | 🟢 LOW | Debug print statement found |
| test/functorch/discover_coverage.py | 980 | 🟢 LOW | Debug print statement found |
| test/functorch/test_ac_knapsack.py | 327 | 🟢 LOW | Debug print statement found |
| test/functorch/test_control_flow.py | 10182 | 🟢 LOW | Debug print statement found |
| test/functorch/test_dims.py | 53 | 🟢 LOW | Debug print statement found |
| test/functorch/test_dims.py | 82 | 🟢 LOW | Debug print statement found |
| test/functorch/test_dims.py | 334 | 🟢 LOW | Debug print statement found |
| test/functorch/test_dims.py | 335 | 🟢 LOW | Debug print statement found |
| test/functorch/test_leaf_function.py | 1044 | 🟢 LOW | Debug print statement found |
| test/functorch/test_leaf_function.py | 2065 | 🟢 LOW | Debug print statement found |
| test/functorch/test_leaf_function.py | 2555 | 🟢 LOW | Debug print statement found |
| test/functorch/test_parsing.py | 252 | 🟢 LOW | Debug print statement found |
| test/functorch/xfail_suggester.py | 103 | 🟢 LOW | Debug print statement found |
| test/functorch/xfail_suggester.py | 141 | 🟢 LOW | Debug print statement found |
| test/functorch/xfail_suggester.py | 142 | 🟢 LOW | Debug print statement found |
| test/functorch/xfail_suggester.py | 143 | 🟢 LOW | Debug print statement found |
| test/functorch/xfail_suggester.py | 144 | 🟢 LOW | Debug print statement found |
| test/fx/test_dce_pass.py | 54 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 86 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 238 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1008 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1014 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1020 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1235 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1240 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1584 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1585 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1621 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1622 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1674 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1735 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1953 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1971 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 1987 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 2009 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 2041 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 2053 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 2305 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 2391 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 2585 | 🟢 LOW | Debug print statement found |
| test/fx/test_z3_gradual_types.py | 2786 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 37 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 39 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 55 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 56 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 57 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 88 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 89 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 106 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 107 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 110 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 111 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 123 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 124 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 126 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 128 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 146 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 148 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 180 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 184 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 219 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 226 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 233 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 241 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 248 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 255 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 265 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 267 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 302 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 305 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 330 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 332 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 361 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 387 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 400 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 402 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 404 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 454 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 499 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 527 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 530 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 590 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 592 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 613 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 615 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 656 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 658 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 705 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 725 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 752 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 755 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 777 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 795 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 797 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 820 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 840 | 🟢 LOW | Debug print statement found |
| test/higher_order_ops/test_print.py | 870 | 🟢 LOW | Debug print statement found |
| test/inductor/indirect_assert_helper.py | 113 | 🟢 LOW | Debug print statement found |
| test/inductor/indirect_assert_helper.py | 115 | 🟢 LOW | Debug print statement found |
| test/inductor/indirect_assert_helper.py | 117 | 🟢 LOW | Debug print statement found |
| test/inductor/opinfo_harness.py | 19 | 🟢 LOW | Debug print statement found |
| test/inductor/test_analysis.py | 314 | 🟢 LOW | Debug print statement found |
| test/inductor/test_analysis.py | 321 | 🟢 LOW | Debug print statement found |
| test/inductor/test_analysis.py | 329 | 🟢 LOW | Debug print statement found |
| test/inductor/test_aoti_cross_compile_windows.py | 471 | 🟢 LOW | Debug print statement found |
| test/inductor/test_aoti_cross_compile_windows.py | 481 | 🟢 LOW | Debug print statement found |
| test/inductor/test_aoti_cross_compile_windows.py | 501 | 🟢 LOW | Debug print statement found |
| test/inductor/test_auto_chunker.py | 85 | 🟢 LOW | Debug print statement found |
| test/inductor/test_auto_chunker.py | 155 | 🟢 LOW | Debug print statement found |
| test/inductor/test_auto_chunker.py | 164 | 🟢 LOW | Debug print statement found |
| test/inductor/test_auto_chunker.py | 173 | 🟢 LOW | Debug print statement found |
| test/inductor/test_auto_chunker.py | 239 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 197 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 198 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 200 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 201 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 203 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 210 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 212 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 218 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 252 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 253 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 255 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 256 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 258 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 265 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 267 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 273 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 307 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 308 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 310 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 311 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 313 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 320 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 322 | 🟢 LOW | Debug print statement found |
| test/inductor/test_b2b_gemm.py | 328 | 🟢 LOW | Debug print statement found |
| test/inductor/test_codecache.py | 410 | 🟢 LOW | Debug print statement found |
| test/inductor/test_codecache.py | 436 | 🟢 LOW | Debug print statement found |
| test/inductor/test_codecache.py | 452 | 🟢 LOW | Debug print statement found |
| test/inductor/test_codecache.py | 564 | 🟢 LOW | Debug print statement found |
| test/inductor/test_codecache.py | 565 | 🟢 LOW | Debug print statement found |
| test/inductor/test_codecache.py | 566 | 🟢 LOW | Debug print statement found |
| test/inductor/test_collective_autotuning.py | 10 | 🟢 LOW | Debug print statement found |
| test/inductor/test_comm_analysis.py | 11 | 🟢 LOW | Debug print statement found |
| test/inductor/test_comm_analysis.py | 20 | 🟢 LOW | Debug print statement found |
| test/inductor/test_compile_subprocess.py | 177 | 🟢 LOW | Debug print statement found |
| test/inductor/test_compile_subprocess.py | 258 | 🟢 LOW | Debug print statement found |
| test/inductor/test_compile_worker.py | 142 | 🟢 LOW | Debug print statement found |
| test/inductor/test_compiled_autograd.py | 1906 | 🟢 LOW | Debug print statement found |
| test/inductor/test_compiled_autograd.py | 2024 | 🟢 LOW | Debug print statement found |
| test/inductor/test_compiled_autograd.py | 2026 | 🟢 LOW | Debug print statement found |
| test/inductor/test_compiled_autograd.py | 2045 | 🟢 LOW | Debug print statement found |
| test/inductor/test_compiled_autograd.py | 2072 | 🟢 LOW | Debug print statement found |
| test/inductor/test_compiled_autograd.py | 2078 | 🟢 LOW | Debug print statement found |
| test/inductor/test_compiled_autograd.py | 3919 | 🟢 LOW | Debug print statement found |
| test/inductor/test_cpu_repro.py | 4341 | 🟢 LOW | Debug print statement found |
| test/inductor/test_cuda_repro.py | 521 | 🟢 LOW | Debug print statement found |
| test/inductor/test_custom_op_autotune.py | 558 | 🟢 LOW | Debug print statement found |
| test/inductor/test_custom_op_autotune.py | 560 | 🟢 LOW | Debug print statement found |
| test/inductor/test_custom_op_autotune.py | 580 | 🟢 LOW | Debug print statement found |
| test/inductor/test_custom_op_autotune.py | 582 | 🟢 LOW | Debug print statement found |
| test/inductor/test_deterministic.py | 199 | 🟢 LOW | Debug print statement found |
| test/inductor/test_deterministic.py | 215 | 🟢 LOW | Debug print statement found |
| test/inductor/test_exc_lowering_stack_trace.py | 60 | 🟢 LOW | Debug print statement found |
| test/inductor/test_flex_decoding.py | 362 | 🟢 LOW | Debug print statement found |
| test/inductor/test_fp8.py | 524 | 🟢 LOW | Debug print statement found |
| test/inductor/test_indexing.py | 430 | 🟢 LOW | Debug print statement found |
| test/inductor/test_inplace_padding.py | 255 | 🟢 LOW | Debug print statement found |
| test/inductor/test_kernel_benchmark.py | 67 | 🟢 LOW | Debug print statement found |
| test/inductor/test_kernel_benchmark.py | 68 | 🟢 LOW | Debug print statement found |
| test/inductor/test_kernel_benchmark.py | 82 | 🟢 LOW | Debug print statement found |
| test/inductor/test_kernel_benchmark.py | 83 | 🟢 LOW | Debug print statement found |
| test/inductor/test_kernel_benchmark.py | 106 | 🟢 LOW | Debug print statement found |
| test/inductor/test_kernel_benchmark.py | 110 | 🟢 LOW | Debug print statement found |
| test/inductor/test_kernel_benchmark.py | 126 | 🟢 LOW | Debug print statement found |
| test/inductor/test_kernel_benchmark.py | 127 | 🟢 LOW | Debug print statement found |
| test/inductor/test_kernel_benchmark.py | 128 | 🟢 LOW | Debug print statement found |
| test/inductor/test_kernel_benchmark.py | 141 | 🟢 LOW | Debug print statement found |
| test/inductor/test_kernel_benchmark.py | 142 | 🟢 LOW | Debug print statement found |
| test/inductor/test_layout_optim.py | 116 | 🟢 LOW | Debug print statement found |
| test/inductor/test_loop_ordering.py | 455 | 🟢 LOW | Debug print statement found |
| test/inductor/test_loop_ordering.py | 784 | 🟢 LOW | Debug print statement found |
| test/inductor/test_loop_ordering.py | 821 | 🟢 LOW | Debug print statement found |
| test/inductor/test_loop_ordering.py | 828 | 🟢 LOW | Debug print statement found |
| test/inductor/test_max_autotune.py | 1325 | 🟢 LOW | Debug print statement found |
| test/inductor/test_max_autotune.py | 3931 | 🟢 LOW | Debug print statement found |
| test/inductor/test_minifier_utils.py | 67 | 🟢 LOW | Debug print statement found |
| test/inductor/test_online_softmax.py | 54 | 🟢 LOW | Debug print statement found |
| test/inductor/test_online_softmax.py | 55 | 🟢 LOW | Debug print statement found |
| test/inductor/test_online_softmax.py | 355 | 🟢 LOW | Debug print statement found |
| test/inductor/test_online_softmax.py | 390 | 🟢 LOW | Debug print statement found |
| test/inductor/test_origami.py | 487 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 172 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 199 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 236 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 240 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 244 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 287 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 292 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 306 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 317 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 327 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 417 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 445 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 478 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 512 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 634 | 🟢 LOW | Debug print statement found |
| test/inductor/test_padding.py | 663 | 🟢 LOW | Debug print statement found |
| test/inductor/test_pattern_matcher.py | 2202 | 🟢 LOW | Debug print statement found |
| test/inductor/test_pattern_matcher.py | 2292 | 🟢 LOW | Debug print statement found |
| test/inductor/test_pattern_matcher.py | 2328 | 🟢 LOW | Debug print statement found |
| test/inductor/test_perf.py | 64 | 🟢 LOW | Debug print statement found |
| test/inductor/test_perf.py | 80 | 🟢 LOW | Debug print statement found |
| test/inductor/test_profiler.py | 257 | 🟢 LOW | Debug print statement found |
| test/inductor/test_profiler.py | 268 | 🟢 LOW | Debug print statement found |
| test/inductor/test_scatter_optimization.py | 225 | 🟢 LOW | Debug print statement found |
| test/inductor/test_snode_runtime.py | 37 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor.py | 592 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor.py | 594 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor.py | 7798 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor.py | 15504 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor.py | 15505 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor.py | 15508 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor.py | 17197 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor.py | 17612 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor.py | 17754 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor.py | 19697 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor.py | 19937 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor_dynamic_shapes.py | 1253 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor_opinfo.py | 179 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor_opinfo.py | 1292 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor_opinfo.py | 1294 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor_opinfo.py | 1299 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor_opinfo.py | 1300 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor_opinfo.py | 1445 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor_opinfo.py | 1446 | 🟢 LOW | Debug print statement found |
| test/inductor/test_torchinductor_opinfo.py | 1520 | 🟢 LOW | Debug print statement found |
| test/inductor/test_utils.py | 147 | 🟢 LOW | Debug print statement found |
| test/inductor/test_utils.py | 148 | 🟢 LOW | Debug print statement found |
| test/inductor/test_utils.py | 149 | 🟢 LOW | Debug print statement found |
| test/jit/test_class_type.py | 961 | 🟢 LOW | Debug print statement found |
| test/jit/test_complexity.py | 82 | 🟢 LOW | Debug print statement found |
| test/jit/test_complexity.py | 103 | 🟢 LOW | Debug print statement found |
| test/jit/test_cuda.py | 28 | 🟢 LOW | Debug print statement found |
| test/jit/test_exception.py | 74 | 🟢 LOW | Debug print statement found |
| test/jit/test_freezing.py | 1068 | 🟢 LOW | Debug print statement found |
| test/jit/test_freezing.py | 1243 | 🟢 LOW | Debug print statement found |
| test/jit/test_generator.py | 180 | 🟢 LOW | Debug print statement found |
| test/jit/test_generator.py | 186 | 🟢 LOW | Debug print statement found |
| test/jit/test_generator.py | 189 | 🟢 LOW | Debug print statement found |
| test/jit/test_misc.py | 32 | 🟢 LOW | Debug print statement found |
| test/jit/test_misc.py | 33 | 🟢 LOW | Debug print statement found |
| test/jit/test_misc.py | 35 | 🟢 LOW | Debug print statement found |
| test/jit/test_misc.py | 36 | 🟢 LOW | Debug print statement found |
| test/jit/test_misc.py | 541 | 🟢 LOW | Debug print statement found |
| test/jit/test_pdt.py | 18 | 🟢 LOW | Debug print statement found |
| test/jit/test_recursive_script.py | 254 | 🟢 LOW | Debug print statement found |
| test/jit/test_save_load.py | 630 | 🟢 LOW | Debug print statement found |
| test/jit/test_save_load.py | 632 | 🟢 LOW | Debug print statement found |
| test/jit/test_tracer.py | 1563 | 🟢 LOW | Debug print statement found |
| test/jit/test_typing.py | 31 | 🟢 LOW | Debug print statement found |
| test/jit/test_typing.py | 36 | 🟢 LOW | Debug print statement found |
| test/jit_hooks/model.py | 87 | 🟢 LOW | Debug print statement found |
| test/lazy/test_debug_util.py | 41 | 🟢 LOW | Debug print statement found |
| test/lazy/test_extract_compiled_graph.py | 156 | 🟢 LOW | Debug print statement found |
| test/lazy/test_extract_compiled_graph.py | 167 | 🟢 LOW | Debug print statement found |
| test/lazy/test_extract_compiled_graph.py | 174 | 🟢 LOW | Debug print statement found |
| test/linear.py | 12 | 🟢 LOW | Debug print statement found |
| test/load_torchscript_model.py | 10 | 🟢 LOW | Debug print statement found |
| test/mkl_verbose.py | 20 | 🟢 LOW | Debug print statement found |
| test/mkldnn_verbose.py | 30 | 🟢 LOW | Debug print statement found |
| test/mobile/model_test/gen_test_model.py | 132 | 🟢 LOW | Debug print statement found |
| test/mobile/model_test/gen_test_model.py | 133 | 🟢 LOW | Debug print statement found |
| test/mobile/model_test/gen_test_model.py | 134 | 🟢 LOW | Debug print statement found |
| test/mobile/model_test/gen_test_model.py | 137 | 🟢 LOW | Debug print statement found |
| test/mobile/model_test/gen_test_model.py | 140 | 🟢 LOW | Debug print statement found |
| test/mobile/model_test/gen_test_model.py | 160 | 🟢 LOW | Debug print statement found |
| test/mobile/model_test/gen_test_model.py | 173 | 🟢 LOW | Debug print statement found |
| test/mobile/model_test/gen_test_model.py | 203 | 🟢 LOW | Debug print statement found |
| test/mobile/model_test/gen_test_model.py | 216 | 🟢 LOW | Debug print statement found |
| test/mobile/model_test/gen_test_model.py | 221 | 🟢 LOW | Debug print statement found |
| test/mobile/test_upgraders.py | 62 | 🟢 LOW | Debug print statement found |
| test/mobile/test_upgraders.py | 63 | 🟢 LOW | Debug print statement found |
| test/mobile/test_upgraders.py | 64 | 🟢 LOW | Debug print statement found |
| test/onnx/exporter/test_small_models_e2e.py | 347 | 🟢 LOW | Debug print statement found |
| test/onnx/test_onnxscript_no_runtime.py | 154 | 🟢 LOW | Debug print statement found |
| test/onnx/test_pytorch_onnx_onnxruntime.py | 13845 | 🟢 LOW | Debug print statement found |
| test/onnx/torchlib/error_reproduction.py | 230 | 🟢 LOW | Debug print statement found |
| test/onnx/torchlib/error_reproduction.py | 293 | 🟢 LOW | Debug print statement found |
| test/optim/test_lrscheduler.py | 2325 | 🟢 LOW | Debug print statement found |
| test/optim/test_lrscheduler.py | 2349 | 🟢 LOW | Debug print statement found |
| test/optim/test_lrscheduler.py | 2357 | 🟢 LOW | Debug print statement found |
| test/optim/test_lrscheduler.py | 2365 | 🟢 LOW | Debug print statement found |
| test/optim/test_lrscheduler.py | 2792 | 🟢 LOW | Debug print statement found |
| test/optim/test_optim.py | 761 | 🟢 LOW | Debug print statement found |
| test/optim/test_swa_utils.py | 311 | 🟢 LOW | Debug print statement found |
| test/profiler/test_cpp_thread.py | 43 | 🟢 LOW | Debug print statement found |
| test/profiler/test_cpp_thread.py | 120 | 🟢 LOW | Debug print statement found |
| test/profiler/test_cpp_thread.py | 122 | 🟢 LOW | Debug print statement found |
| test/profiler/test_execution_trace.py | 176 | 🟢 LOW | Debug print statement found |
| test/profiler/test_execution_trace.py | 177 | 🟢 LOW | Debug print statement found |
| test/profiler/test_execution_trace.py | 258 | 🟢 LOW | Debug print statement found |
| test/profiler/test_execution_trace.py | 259 | 🟢 LOW | Debug print statement found |
| test/profiler/test_memory_viz.js | 85 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 101 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 118 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 164 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 184 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 210 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 233 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 257 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 281 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 288 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 296 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 304 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 314 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 320 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 326 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 336 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 342 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 349 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 358 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 365 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 375 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 408 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 431 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 459 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 483 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 507 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 546 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 578 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 598 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 620 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 643 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 714 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 738 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 767 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 791 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 894 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 966 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1045 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1106 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1146 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1171 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1198 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1230 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1256 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1319 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1366 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1405 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1477 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1486 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1493 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1506 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1521 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_memory_viz.js | 1590 | 🟢 LOW | Debug console.log statement found |
| test/profiler/test_profiler.py | 417 | 🟢 LOW | Debug print statement found |
| test/profiler/test_profiler.py | 420 | 🟢 LOW | Debug print statement found |
| test/profiler/test_profiler.py | 2787 | 🟢 LOW | Debug print statement found |
| test/profiler/test_profiler.py | 4005 | 🟢 LOW | Debug print statement found |
| test/profiler/test_profiler.py | 4272 | 🟢 LOW | Debug print statement found |
| test/profiler/test_profiler.py | 4446 | 🟢 LOW | Debug print statement found |
| test/profiler/test_profiler_tree.py | 274 | 🟢 LOW | Debug print statement found |
| test/profiler/test_xpu_profiler.py | 35 | 🟢 LOW | Debug print statement found |
| test/profiler/test_xpu_profiler.py | 64 | 🟢 LOW | Debug print statement found |
| test/profiler/test_xpu_profiler.py | 65 | 🟢 LOW | Debug print statement found |
| test/profiler/test_xpu_profiler.py | 96 | 🟢 LOW | Debug print statement found |
| test/python_native/test_native_dsl_ops.py | 162 | 🟢 LOW | Debug print statement found |
| test/python_native/test_native_dsl_ops.py | 191 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_ptq.py | 52 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_ptq.py | 72 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_ptq.py | 83 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_ptq.py | 93 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_ptq.py | 103 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_ptq.py | 114 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_ptq.py | 124 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_ptq.py | 131 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_qat.py | 43 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_qat.py | 53 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_qat.py | 63 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_qat.py | 73 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_qat.py | 84 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/apot_fx_graph_mode_qat.py | 94 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/quantization_util.py | 84 | 🟢 LOW | Debug print statement found |
| test/quantization/core/experimental/quantization_util.py | 100 | 🟢 LOW | Debug print statement found |
| test/quantization/core/test_quantized_op.py | 6231 | 🟢 LOW | Debug print statement found |
| test/quantization/core/test_quantized_op.py | 6269 | 🟢 LOW | Debug print statement found |
| test/quantization/core/test_quantized_op.py | 6270 | 🟢 LOW | Debug print statement found |
| test/quantization/core/test_quantized_op.py | 6284 | 🟢 LOW | Debug print statement found |
| test/quantization/core/test_quantized_op.py | 6285 | 🟢 LOW | Debug print statement found |
| test/quantization/core/test_quantized_op.py | 6301 | 🟢 LOW | Debug print statement found |
| test/quantization/core/test_quantized_op.py | 6302 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_numeric_suite_fx.py | 936 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_numeric_suite_fx.py | 938 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_numeric_suite_fx.py | 942 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_numeric_suite_fx.py | 2106 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_numeric_suite_fx.py | 2547 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_numeric_suite_fx.py | 2574 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_numeric_suite_fx.py | 2636 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_numeric_suite_fx.py | 2641 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_numeric_suite_fx.py | 2647 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_numeric_suite_fx.py | 2666 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_numeric_suite_fx.py | 2667 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 3489 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 3496 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 5818 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9420 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9458 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9461 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9462 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9465 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9475 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9505 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9510 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9643 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9645 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9647 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9649 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9650 | 🟢 LOW | Debug print statement found |
| test/quantization/fx/test_quantize_fx.py | 9652 | 🟢 LOW | Debug print statement found |
| test/run_test.py | 470 | 🟢 LOW | Debug print statement found |
| test/run_test.py | 761 | 🟢 LOW | Debug print statement found |
| test/scripts/run_cuda_memcheck.py | 177 | 🟢 LOW | Debug print statement found |
| test/scripts/run_cuda_memcheck.py | 183 | 🟢 LOW | Debug print statement found |
| test/scripts/run_cuda_memcheck.py | 189 | 🟢 LOW | Debug print statement found |
| test/scripts/run_cuda_memcheck.py | 190 | 🟢 LOW | Debug print statement found |
| test/scripts/run_cuda_memcheck.py | 191 | 🟢 LOW | Debug print statement found |
| test/scripts/run_cuda_memcheck.py | 195 | 🟢 LOW | Debug print statement found |
| test/test_accelerator.py | 22 | 🟢 LOW | Debug print statement found |
| test/test_autograd.py | 5508 | 🟢 LOW | Debug print statement found |
| test/test_autograd.py | 5701 | 🟢 LOW | Debug print statement found |
| test/test_autograd.py | 5708 | 🟢 LOW | Debug print statement found |
| test/test_autograd.py | 5723 | 🟢 LOW | Debug print statement found |
| test/test_autograd.py | 5736 | 🟢 LOW | Debug print statement found |
| test/test_autograd.py | 5737 | 🟢 LOW | Debug print statement found |
| test/test_autograd.py | 5742 | 🟢 LOW | Debug print statement found |
| test/test_autograd.py | 5751 | 🟢 LOW | Debug print statement found |
| test/test_autograd.py | 5760 | 🟢 LOW | Debug print statement found |
| test/test_autograd.py | 5761 | 🟢 LOW | Debug print statement found |
| test/test_autograd.py | 11130 | 🟢 LOW | Debug print statement found |
| test/test_autograd.py | 15704 | 🟢 LOW | Debug print statement found |
| test/test_bundled_inputs.py | 54 | 🟢 LOW | Debug print statement found |
| test/test_bundled_inputs.py | 55 | 🟢 LOW | Debug print statement found |
| test/test_cpp_extensions_jit.py | 1491 | 🟢 LOW | Debug print statement found |
| test/test_cpp_extensions_jit.py | 1561 | 🟢 LOW | Debug print statement found |
| test/test_cpp_extensions_mtia_backend.py | 77 | 🟢 LOW | Debug print statement found |
| test/test_cpp_extensions_mtia_backend.py | 78 | 🟢 LOW | Debug print statement found |
| test/test_cpp_extensions_mtia_backend.py | 99 | 🟢 LOW | Debug print statement found |
| test/test_cpp_extensions_mtia_backend.py | 100 | 🟢 LOW | Debug print statement found |
| test/test_cpp_extensions_mtia_backend.py | 117 | 🟢 LOW | Debug print statement found |
| test/test_cpp_extensions_mtia_backend.py | 118 | 🟢 LOW | Debug print statement found |
| test/test_cpp_extensions_stream_and_event.py | 91 | 🟢 LOW | Debug print statement found |
| test/test_cpp_extensions_stream_and_event.py | 95 | 🟢 LOW | Debug print statement found |
| test/test_cpp_extensions_stream_and_event.py | 102 | 🟢 LOW | Debug print statement found |
| test/test_cpp_extensions_stream_and_event.py | 110 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 292 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 484 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 859 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 1266 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 1271 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 1275 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 4689 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 4701 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 4711 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 4753 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 4819 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 5864 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 5889 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 6180 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 6716 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 8004 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 8005 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 8006 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 8007 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 8008 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 8009 | 🟢 LOW | Debug print statement found |
| test/test_cuda.py | 8010 | 🟢 LOW | Debug print statement found |
| test/test_cuda_graph_debug.py | 19 | 🟢 LOW | Debug print statement found |
| test/test_cuda_multigpu.py | 45 | 🟢 LOW | Debug print statement found |
| test/test_cuda_nvml_based_avail.py | 34 | 🟢 LOW | Debug print statement found |
| test/test_cuda_primary_ctx.py | 14 | 🟢 LOW | Debug print statement found |
| test/test_cuda_sanitizer.py | 15 | 🟢 LOW | Debug print statement found |
| test/test_cuda_trace.py | 16 | 🟢 LOW | Debug print statement found |
| test/test_custom_ops.py | 5750 | 🟢 LOW | Debug print statement found |
| test/test_datapipe.py | 746 | 🟢 LOW | Debug print statement found |
| test/test_datapipe.py | 1859 | 🟢 LOW | Debug print statement found |
| test/test_datapipe.py | 1865 | 🟢 LOW | Debug print statement found |
| test/test_datapipe.py | 2097 | 🟢 LOW | Debug print statement found |
| test/test_decomp.py | 463 | 🟢 LOW | Debug print statement found |
| test/test_decomp.py | 464 | 🟢 LOW | Debug print statement found |
| test/test_dynamic_shapes.py | 4929 | 🟢 LOW | Debug print statement found |
| test/test_futures.py | 326 | 🟢 LOW | Debug print statement found |
| test/test_fx.py | 215 | 🟢 LOW | Debug print statement found |
| test/test_fx.py | 754 | 🟢 LOW | Debug print statement found |
| test/test_fx.py | 877 | 🟢 LOW | Debug print statement found |
| test/test_fx.py | 2933 | 🟢 LOW | Debug print statement found |
| test/test_fx.py | 2966 | 🟢 LOW | Debug print statement found |
| test/test_fx.py | 2989 | 🟢 LOW | Debug print statement found |
| test/test_fx.py | 3380 | 🟢 LOW | Debug print statement found |
| test/test_fx.py | 4487 | 🟢 LOW | Debug print statement found |
| test/test_fx_reinplace_pass.py | 379 | 🟢 LOW | Debug print statement found |
| test/test_indexing.py | 1649 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2208 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2341 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2343 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2345 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2347 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2349 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2351 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2353 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2375 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2437 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2456 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2458 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2657 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 2672 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 3523 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 3525 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 3879 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 3881 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 4028 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 4029 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 4114 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 4763 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 4884 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 4893 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 5246 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 5248 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 5883 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 5918 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6197 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6203 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6211 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6217 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6234 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6251 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6260 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6268 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6276 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6518 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6519 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6718 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6728 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6729 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6730 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6731 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6752 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 6757 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 8437 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 8440 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 8456 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 8458 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 8471 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 8472 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 8613 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 8683 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 9049 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 9085 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 9393 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 9865 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 9866 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 9980 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 9987 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 9990 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 10112 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 10113 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 10124 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 10125 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 11513 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 12161 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 12636 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 12710 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 13596 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 13951 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 14310 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 14343 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 15086 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 15087 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 15178 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 15179 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 15520 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 15801 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 15857 | 🟢 LOW | Debug print statement found |
| test/test_jit.py | 15866 | 🟢 LOW | Debug print statement found |
| test/test_jit_disabled.py | 59 | 🟢 LOW | Debug print statement found |
| test/test_jit_disabled.py | 73 | 🟢 LOW | Debug print statement found |
| test/test_jit_disabled.py | 86 | 🟢 LOW | Debug print statement found |
| test/test_jit_fuser_te.py | 2616 | 🟢 LOW | Debug print statement found |
| test/test_jiterator.py | 14 | 🟢 LOW | Debug print statement found |
| test/test_linalg.py | 6033 | 🟢 LOW | Debug print statement found |
| test/test_linalg.py | 6059 | 🟢 LOW | Debug print statement found |
| test/test_linalg.py | 6077 | 🟢 LOW | Debug print statement found |
| test/test_linalg.py | 6081 | 🟢 LOW | Debug print statement found |
| test/test_meta.py | 499 | 🟢 LOW | Debug print statement found |
| test/test_meta.py | 698 | 🟢 LOW | Debug print statement found |
| test/test_meta.py | 2419 | 🟢 LOW | Debug print statement found |
| test/test_meta.py | 2421 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 83 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 2995 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 2996 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 4434 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 4435 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 4437 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 8894 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 9424 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 9427 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 9428 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 10663 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 12345 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 14499 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 14742 | 🟢 LOW | Debug print statement found |
| test/test_mps.py | 14750 | 🟢 LOW | Debug print statement found |
| test/test_multiprocessing.py | 689 | 🟢 LOW | Debug print statement found |
| test/test_native_functions.py | 38 | 🟢 LOW | Debug print statement found |
| test/test_nn.py | 2713 | 🟢 LOW | Debug print statement found |
| test/test_nn.py | 13193 | 🟢 LOW | Debug print statement found |
| test/test_nnapi.py | 38 | 🟢 LOW | Debug print statement found |
| test/test_opaque_obj_v2.py | 237 | 🟢 LOW | Debug print statement found |
| test/test_opaque_obj_v2.py | 3036 | 🟢 LOW | Debug print statement found |
| test/test_ops.py | 1746 | 🟢 LOW | Debug print statement found |
| test/test_overrides.py | 51 | 🟢 LOW | Debug print statement found |
| test/test_proxy_tensor.py | 88 | 🟢 LOW | Debug print statement found |
| test/test_proxy_tensor.py | 90 | 🟢 LOW | Debug print statement found |
| test/test_proxy_tensor.py | 91 | 🟢 LOW | Debug print statement found |
| test/test_python_dispatch.py | 982 | 🟢 LOW | Debug print statement found |
| test/test_reductions.py | 1092 | 🟢 LOW | Debug print statement found |
| test/test_scaled_matmul_cuda.py | 1813 | 🟢 LOW | Debug print statement found |
| test/test_scaled_matmul_cuda.py | 1814 | 🟢 LOW | Debug print statement found |
| test/test_scaled_matmul_cuda.py | 1815 | 🟢 LOW | Debug print statement found |
| test/test_scaled_matmul_cuda.py | 1816 | 🟢 LOW | Debug print statement found |
| test/test_scaled_matmul_cuda.py | 1817 | 🟢 LOW | Debug print statement found |
| test/test_scaled_matmul_cuda.py | 1818 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 1533 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 1545 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 1552 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 1883 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 1894 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 1901 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2086 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2097 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2104 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2285 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2296 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2303 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2484 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2495 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2502 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2707 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2718 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2725 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2914 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2925 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 2932 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3117 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3128 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3135 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3310 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3321 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3328 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3505 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3516 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3523 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3700 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3711 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3718 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3902 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3913 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 3920 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 4111 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 4122 | 🟢 LOW | Debug print statement found |
| test/test_serialization.py | 4129 | 🟢 LOW | Debug print statement found |
| test/test_sympy_utils.py | 711 | 🟢 LOW | Debug print statement found |
| test/test_tensorboard.py | 758 | 🟢 LOW | Debug print statement found |
| test/test_tensorboard.py | 790 | 🟢 LOW | Debug print statement found |
| test/test_tensorexpr.py | 924 | 🟢 LOW | Debug print statement found |
| test/test_tensorexpr.py | 927 | 🟢 LOW | Debug print statement found |
| test/test_tensorexpr.py | 1330 | 🟢 LOW | Debug print statement found |
| test/test_tensorexpr.py | 1415 | 🟢 LOW | Debug print statement found |
| test/test_testing.py | 511 | 🟢 LOW | Debug print statement found |
| test/test_testing.py | 2523 | 🟢 LOW | Debug print statement found |
| test/test_testing.py | 2531 | 🟢 LOW | Debug print statement found |
| test/test_testing.py | 2542 | 🟢 LOW | Debug print statement found |
| test/test_throughput_benchmark.py | 70 | 🟢 LOW | Debug print statement found |
| test/test_throughput_benchmark.py | 123 | 🟢 LOW | Debug print statement found |
| test/test_torchfuzz_repros.py | 69 | 🟢 LOW | Debug print statement found |
| test/test_torchfuzz_repros.py | 73 | 🟢 LOW | Debug print statement found |
| test/test_torchfuzz_repros.py | 105 | 🟢 LOW | Debug print statement found |
| test/test_torchfuzz_repros.py | 109 | 🟢 LOW | Debug print statement found |
| test/test_torchfuzz_repros.py | 155 | 🟢 LOW | Debug print statement found |
| test/test_torchfuzz_repros.py | 159 | 🟢 LOW | Debug print statement found |
| test/test_torchfuzz_repros.py | 193 | 🟢 LOW | Debug print statement found |
| test/test_torchfuzz_repros.py | 197 | 🟢 LOW | Debug print statement found |
| test/test_torchfuzz_repros.py | 236 | 🟢 LOW | Debug print statement found |
| test/test_torchfuzz_repros.py | 240 | 🟢 LOW | Debug print statement found |
| test/test_torchfuzz_repros.py | 270 | 🟢 LOW | Debug print statement found |
| test/test_torchfuzz_repros.py | 274 | 🟢 LOW | Debug print statement found |
| test/test_xpu.py | 263 | 🟢 LOW | Debug print statement found |
| test/test_xpu.py | 429 | 🟢 LOW | Debug print statement found |
| test/test_xpu.py | 462 | 🟢 LOW | Debug print statement found |
| test/test_xpu.py | 504 | 🟢 LOW | Debug print statement found |
| test/test_xpu.py | 574 | 🟢 LOW | Debug print statement found |
| test/test_xpu.py | 575 | 🟢 LOW | Debug print statement found |
| test/test_xpu.py | 1545 | 🟢 LOW | Debug print statement found |
| test/torch_np/check_tests_conform.py | 8 | 🟢 LOW | Debug print statement found |
| test/torch_np/check_tests_conform.py | 9 | 🟢 LOW | Debug print statement found |
| test/torch_np/check_tests_conform.py | 56 | 🟢 LOW | Debug print statement found |
| third_party/generate-cpuinfo-wrappers.py | 78 | 🟢 LOW | Debug print statement found |
| third_party/generate-cpuinfo-wrappers.py | 81 | 🟢 LOW | Debug print statement found |
| third_party/generate-cpuinfo-wrappers.py | 82 | 🟢 LOW | Debug print statement found |
| third_party/generate-cpuinfo-wrappers.py | 83 | 🟢 LOW | Debug print statement found |
| third_party/generate-cpuinfo-wrappers.py | 84 | 🟢 LOW | Debug print statement found |
| third_party/generate-cpuinfo-wrappers.py | 85 | 🟢 LOW | Debug print statement found |
| third_party/generate-cpuinfo-wrappers.py | 86 | 🟢 LOW | Debug print statement found |
| third_party/generate-cpuinfo-wrappers.py | 89 | 🟢 LOW | Debug print statement found |
| third_party/generate-cpuinfo-wrappers.py | 92 | 🟢 LOW | Debug print statement found |
| third_party/generate-cpuinfo-wrappers.py | 93 | 🟢 LOW | Debug print statement found |
| third_party/generate-cpuinfo-wrappers.py | 94 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 108 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 163 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 170 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 171 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 178 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 181 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 182 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 183 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 187 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 188 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 189 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 191 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 193 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 194 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 198 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 199 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 200 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 202 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 204 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 205 | 🟢 LOW | Debug print statement found |
| third_party/generate-xnnpack-wrappers.py | 209 | 🟢 LOW | Debug print statement found |
| tools/alerts/create_alerts.py | 250 | 🟢 LOW | Debug print statement found |
| tools/alerts/create_alerts.py | 251 | 🟢 LOW | Debug print statement found |
| tools/alerts/create_alerts.py | 253 | 🟢 LOW | Debug print statement found |
| tools/alerts/create_alerts.py | 255 | 🟢 LOW | Debug print statement found |
| tools/alerts/create_alerts.py | 257 | 🟢 LOW | Debug print statement found |
| tools/alerts/create_alerts.py | 323 | 🟢 LOW | Debug print statement found |
| tools/amd_build/build_amd.py | 198 | 🟢 LOW | Debug print statement found |
| tools/amd_build/build_amd.py | 203 | 🟢 LOW | Debug print statement found |
| tools/amd_build/build_amd.py | 279 | 🟢 LOW | Debug print statement found |
| tools/amd_build/build_amd.py | 284 | 🟢 LOW | Debug print statement found |
| tools/amd_build/build_amd.py | 315 | 🟢 LOW | Debug print statement found |
| tools/amd_build/build_amd.py | 321 | 🟢 LOW | Debug print statement found |
| tools/build_pytorch_libs.py | 38 | 🟢 LOW | Debug print statement found |
| tools/build_pytorch_libs.py | 42 | 🟢 LOW | Debug print statement found |
| tools/build_pytorch_libs.py | 99 | 🟢 LOW | Debug print statement found |
| tools/build_pytorch_libs.py | 100 | 🟢 LOW | Debug print statement found |
| tools/build_pytorch_libs.py | 102 | 🟢 LOW | Debug print statement found |
| tools/build_pytorch_libs.py | 103 | 🟢 LOW | Debug print statement found |
| tools/build_pytorch_libs.py | 104 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 84 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 152 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 156 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 159 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 168 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 176 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 184 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 195 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 196 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 197 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 198 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 202 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 204 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 207 | 🟢 LOW | Debug print statement found |
| tools/build_with_debinfo.py | 209 | 🟢 LOW | Debug print statement found |
| tools/code_analyzer/gen_op_registration_allowlist.py | 99 | 🟢 LOW | Debug print statement found |
| tools/code_analyzer/gen_oplist.py | 136 | 🟢 LOW | Debug print statement found |
| tools/code_analyzer/gen_oplist.py | 142 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/clang_coverage.py | 97 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/clang_coverage.py | 112 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/clang_coverage.py | 125 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/clang_coverage.py | 139 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/print_report.py | 44 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/print_report.py | 47 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/print_report.py | 48 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/print_report.py | 62 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/print_report.py | 67 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/print_report.py | 72 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/print_report.py | 100 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/print_report.py | 114 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/print_report.py | 119 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/print_report.py | 147 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/print_report.py | 155 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/summarize_jsons.py | 113 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/tool/summarize_jsons.py | 130 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/util/utils.py | 33 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/util/utils.py | 35 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/util/utils.py | 40 | 🟢 LOW | Debug print statement found |
| tools/code_coverage/package/util/utils.py | 45 | 🟢 LOW | Debug print statement found |
| tools/create_worktree.py | 121 | 🟢 LOW | Debug print statement found |
| tools/create_worktree.py | 126 | 🟢 LOW | Debug print statement found |
| tools/create_worktree.py | 181 | 🟢 LOW | Debug print statement found |
| tools/create_worktree.py | 193 | 🟢 LOW | Debug print statement found |
| tools/create_worktree.py | 200 | 🟢 LOW | Debug print statement found |
| tools/create_worktree.py | 207 | 🟢 LOW | Debug print statement found |
| tools/create_worktree.py | 212 | 🟢 LOW | Debug print statement found |
| tools/create_worktree.py | 214 | 🟢 LOW | Debug print statement found |
| tools/create_worktree.py | 222 | 🟢 LOW | Debug print statement found |
| tools/create_worktree.py | 228 | 🟢 LOW | Debug print statement found |
| tools/download_mnist.py | 35 | 🟢 LOW | Debug print statement found |
| tools/download_mnist.py | 39 | 🟢 LOW | Debug print statement found |
| tools/download_mnist.py | 44 | 🟢 LOW | Debug print statement found |
| tools/download_mnist.py | 49 | 🟢 LOW | Debug print statement found |
| tools/download_mnist.py | 59 | 🟢 LOW | Debug print statement found |
| tools/download_mnist.py | 65 | 🟢 LOW | Debug print statement found |
| tools/download_mnist.py | 89 | 🟢 LOW | Debug print statement found |
| tools/dynamo/gb_id_mapping.py | 193 | 🟢 LOW | Debug print statement found |
| tools/dynamo/verify_dynamo.py | 149 | 🟢 LOW | Debug print statement found |
| tools/dynamo/verify_dynamo.py | 159 | 🟢 LOW | Debug print statement found |
| tools/dynamo/verify_dynamo.py | 212 | 🟢 LOW | Debug print statement found |
| tools/dynamo/verify_dynamo.py | 222 | 🟢 LOW | Debug print statement found |
| tools/embed_libomp_macos.py | 65 | 🟢 LOW | Debug print statement found |
| tools/embed_libomp_macos.py | 71 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/cuda/_checks.py | 13 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/cuda/_checks.py | 16 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/cuda/_checks.py | 28 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/cuda/_checks.py | 32 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/cuda/_checks.py | 44 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/cuda/_checks.py | 48 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/cuda/_checks.py | 53 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/cuda/_checks.py | 55 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/cuda/_checks.py | 56 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/cuda/_checks.py | 57 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/cuda/_checks.py | 58 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/cuda/_checks.py | 59 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 91 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 203 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 205 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 233 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 240 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 341 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 365 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 376 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 384 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 387 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 392 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 401 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 414 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 422 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 423 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 424 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/fuzzer.py | 427 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/multi_process_fuzzer.py | 26 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/multi_process_fuzzer.py | 38 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/runner.py | 41 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/runner.py | 53 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/runner.py | 54 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/runner.py | 55 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/runner.py | 59 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/runner.py | 60 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/runner.py | 61 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/runner.py | 62 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/runner.py | 63 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/runner.py | 65 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/runner.py | 66 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/runner.py | 67 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 25 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 26 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 27 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 62 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 78 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 81 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 84 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 93 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 94 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 97 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 102 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 111 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 112 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 113 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 117 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 124 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 125 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 130 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/test_determinism.py | 133 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/visualize_graph.py | 36 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/visualize_graph.py | 168 | 🟢 LOW | Debug print statement found |
| tools/experimental/torchfuzz/visualize_graph.py | 227 | 🟢 LOW | Debug print statement found |
| tools/extract_scripts.py | 80 | 🟢 LOW | Debug print statement found |
| tools/gdb/pytorch-gdb.py | 48 | 🟢 LOW | Debug print statement found |
| tools/gdb/pytorch-gdb.py | 53 | 🟢 LOW | Debug print statement found |
| tools/gdb/pytorch-gdb.py | 54 | 🟢 LOW | Debug print statement found |
| tools/gdb/pytorch-gdb.py | 72 | 🟢 LOW | Debug print statement found |
| tools/gdb/pytorch-gdb.py | 78 | 🟢 LOW | Debug print statement found |
| tools/gdb/pytorch-gdb.py | 97 | 🟢 LOW | Debug print statement found |
| tools/gdb/pytorch-gdb.py | 103 | 🟢 LOW | Debug print statement found |
| tools/gen_vulkan_spv.py | 224 | 🟢 LOW | Debug print statement found |
| tools/gen_vulkan_spv.py | 231 | 🟢 LOW | Debug print statement found |
| tools/gen_vulkan_spv.py | 235 | 🟢 LOW | Debug print statement found |
| tools/gen_vulkan_spv.py | 241 | 🟢 LOW | Debug print statement found |
| tools/gen_vulkan_spv.py | 457 | 🟢 LOW | Debug print statement found |
| tools/github/github_utils.py | 38 | 🟢 LOW | Debug print statement found |
| tools/iwyu/fixup.py | 44 | 🟢 LOW | Debug print statement found |
| tools/iwyu/fixup.py | 54 | 🟢 LOW | Debug print statement found |
| tools/iwyu/fixup.py | 57 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/_linter/argument_parser.py | 49 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/_linter/file_linter.py | 93 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/_linter/file_linter.py | 99 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/actionlint_linter.py | 149 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/actionlint_linter.py | 167 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/clangformat_linter.py | 245 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/clangformat_linter.py | 259 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/clangtidy_linter.py | 304 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/clangtidy_linter.py | 334 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/cmake_linter.py | 143 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/cmake_minimum_required_linter.py | 245 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/codespell_linter.py | 215 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/docstring_linter.py | 66 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/docstring_linter.py | 93 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/docstring_linter.py | 170 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/exec_linter.py | 89 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/flake8_linter.py | 380 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/gb_registry_linter.py | 426 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/generated_shims_version_linter.py | 262 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/gha_linter.py | 74 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/gha_linter.py | 100 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/grep_linter.py | 89 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/header_only_linter.py | 140 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/import_linter.py | 139 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/lintrunner_version_linter.py | 82 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/mypy_linter.py | 259 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/nativefunctions_linter.py | 88 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/nativefunctions_linter.py | 114 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/newlines_linter.py | 197 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/no_merge_conflict_csv_linter.py | 96 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/no_workflows_on_fork.py | 241 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/pyfmt_linter.py | 192 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/pyproject_linter.py | 249 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/pyrefly_linter.py | 301 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/ruff_linter.py | 57 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/scoped_library_linter.py | 127 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/shellcheck_linter.py | 154 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/shellcheck_linter.py | 161 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/stable_shim_usage_linter.py | 257 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/stable_shim_version_linter.py | 302 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/test_device_bias_linter.py | 241 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/test_has_main_linter.py | 137 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/testowners_linter.py | 163 | 🟢 LOW | Debug print statement found |
| tools/linter/adapters/workflow_consistency_linter.py | 97 | 🟢 LOW | Debug print statement found |
| tools/linter/clang_tidy/generate_build_files.py | 9 | 🟢 LOW | Debug print statement found |
| tools/linter/clang_tidy/generate_build_files.py | 18 | 🟢 LOW | Debug print statement found |
| tools/linter/clang_tidy/generate_build_files.py | 19 | 🟢 LOW | Debug print statement found |
| tools/linter/clang_tidy/generate_build_files.py | 21 | 🟢 LOW | Debug print statement found |
| tools/lite_interpreter/gen_selected_mobile_ops_header.py | 169 | 🟢 LOW | Debug print statement found |
| tools/lite_interpreter/gen_selected_mobile_ops_header.py | 175 | 🟢 LOW | Debug print statement found |
| tools/lldb/pytorch_lldb.py | 9 | 🟢 LOW | Debug print statement found |
| tools/lldb/pytorch_lldb.py | 25 | 🟢 LOW | Debug print statement found |
| tools/lldb/pytorch_lldb.py | 31 | 🟢 LOW | Debug print statement found |
| tools/lldb/pytorch_lldb.py | 91 | 🟢 LOW | Debug print statement found |
| tools/lldb/pytorch_lldb.py | 95 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 287 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 353 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 378 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 380 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 383 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 388 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 421 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 488 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 546 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 548 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 577 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 579 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 594 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 607 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 609 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 719 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 724 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 732 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 787 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 798 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 911 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 917 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 991 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 1014 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 1182 | 🟢 LOW | Debug print statement found |
| tools/nightly.py | 1187 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 80 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 81 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 94 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 115 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 123 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 125 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 128 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 131 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 148 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 150 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 152 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 161 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 165 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 170 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 171 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 172 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 173 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 176 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 178 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 181 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 202 | 🟢 LOW | Debug print statement found |
| tools/nightly_hotpatch.py | 207 | 🟢 LOW | Debug print statement found |
| tools/optional_submodules.py | 49 | 🟢 LOW | Debug print statement found |
| tools/optional_submodules.py | 57 | 🟢 LOW | Debug print statement found |
| tools/render_junit.py | 26 | 🟢 LOW | Debug print statement found |
| tools/render_junit.py | 34 | 🟢 LOW | Debug print statement found |
| tools/render_junit.py | 80 | 🟢 LOW | Debug print statement found |
| tools/render_junit.py | 83 | 🟢 LOW | Debug print statement found |
| tools/render_junit.py | 84 | 🟢 LOW | Debug print statement found |
| tools/render_junit.py | 85 | 🟢 LOW | Debug print statement found |
| tools/render_junit.py | 86 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 54 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 104 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 107 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 109 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 132 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 155 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 166 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 167 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 183 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 199 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 211 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 217 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 225 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 243 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 258 | 🟢 LOW | Debug print statement found |
| tools/stale_issues.py | 260 | 🟢 LOW | Debug print statement found |
| tools/stats/check_disabled_tests.py | 115 | 🟢 LOW | Debug print statement found |
| tools/stats/check_disabled_tests.py | 211 | 🟢 LOW | Debug print statement found |
| tools/stats/check_disabled_tests.py | 214 | 🟢 LOW | Debug print statement found |
| tools/stats/check_disabled_tests.py | 216 | 🟢 LOW | Debug print statement found |
| tools/stats/check_disabled_tests.py | 222 | 🟢 LOW | Debug print statement found |
| tools/stats/export_test_times.py | 12 | 🟢 LOW | Debug print statement found |
| tools/stats/import_test_stats.py | 24 | 🟢 LOW | Debug print statement found |
| tools/stats/import_test_stats.py | 54 | 🟢 LOW | Debug print statement found |
| tools/stats/import_test_stats.py | 78 | 🟢 LOW | Debug print statement found |
| tools/stats/import_test_stats.py | 79 | 🟢 LOW | Debug print statement found |
| tools/stats/import_test_stats.py | 118 | 🟢 LOW | Debug print statement found |
| tools/stats/import_test_stats.py | 187 | 🟢 LOW | Debug print statement found |
| tools/stats/monitor.py | 171 | 🟢 LOW | Debug print statement found |
| tools/stats/monitor.py | 240 | 🟢 LOW | Debug print statement found |
| tools/stats/monitor.py | 246 | 🟢 LOW | Debug print statement found |
| tools/stats/monitor.py | 285 | 🟢 LOW | Debug print statement found |
| tools/stats/monitor.py | 392 | 🟢 LOW | Debug print statement found |
| tools/stats/test_dashboard.py | 38 | 🟢 LOW | Debug print statement found |
| tools/stats/test_dashboard.py | 47 | 🟢 LOW | Debug print statement found |
| tools/stats/test_dashboard.py | 56 | 🟢 LOW | Debug print statement found |
| tools/stats/test_dashboard.py | 64 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_artifacts.py | 21 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_dynamo_perf_stats.py | 38 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_dynamo_perf_stats.py | 50 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_dynamo_perf_stats.py | 64 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_external_contrib_stats.py | 45 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_external_contrib_stats.py | 46 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_external_contrib_stats.py | 50 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_external_contrib_stats.py | 158 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_metrics.py | 23 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_metrics.py | 159 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_sccache_stats.py | 20 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_stats_lib.py | 80 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_stats_lib.py | 85 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_stats_lib.py | 112 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_stats_lib.py | 118 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_stats_lib.py | 141 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_stats_lib.py | 158 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_stats_lib.py | 172 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_stats_lib.py | 179 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_stats_lib.py | 229 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_stats_lib.py | 249 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_test_stats.py | 45 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_test_stats.py | 49 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_test_stats.py | 137 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_test_stats.py | 176 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_test_stats.py | 211 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_test_stats.py | 215 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_test_stats.py | 217 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_test_stats.py | 311 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_test_stats_intermediate.py | 16 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_test_stats_running_jobs.py | 55 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_test_stats_running_jobs.py | 58 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_test_stats_running_jobs.py | 64 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 86 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 206 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 215 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 219 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 228 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 233 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 293 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 309 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 314 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 329 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 339 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 366 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 372 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 376 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 387 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 390 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 392 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 403 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 409 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 411 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 413 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 423 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 500 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 514 | 🟢 LOW | Debug print statement found |
| tools/stats/upload_utilization_stats/upload_utilization_stats.py | 515 | 🟢 LOW | Debug print statement found |
| tools/test/test_codegen.py | 470 | 🟢 LOW | Debug print statement found |
| tools/test/test_test_run.py | 12 | 🟢 LOW | Debug print statement found |
| tools/test/test_test_selections.py | 18 | 🟢 LOW | Debug print statement found |
| tools/testing/discover_tests.py | 147 | 🟢 LOW | Debug print statement found |
| tools/testing/do_target_determination_for_s3.py | 34 | 🟢 LOW | Debug print statement found |
| tools/testing/do_target_determination_for_s3.py | 61 | 🟢 LOW | Debug print statement found |
| tools/testing/do_target_determination_for_s3.py | 62 | 🟢 LOW | Debug print statement found |
| tools/testing/do_target_determination_for_s3.py | 65 | 🟢 LOW | Debug print statement found |
| tools/testing/modulefinder_determinator.py | 193 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/determinator.py | 17 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/determinator.py | 19 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/determinator.py | 28 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/determinator.py | 29 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/determinator.py | 31 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/filepath.py | 121 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/filepath.py | 148 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/filepath.py | 149 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/historical_class_failure_correlation.py | 44 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/interface.py | 142 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/llm.py | 43 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/mentioned_in_pr.py | 34 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/mentioned_in_pr.py | 43 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/previously_failed_in_pr.py | 40 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/previously_failed_in_pr.py | 81 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/previously_failed_in_pr.py | 85 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/utils.py | 137 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/utils.py | 145 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/utils.py | 150 | 🟢 LOW | Debug print statement found |
| tools/testing/target_determination/heuristics/utils.py | 234 | 🟢 LOW | Debug print statement found |
| tools/testing/update_slow_tests.py | 127 | 🟢 LOW | Debug print statement found |
| tools/testing/update_slow_tests.py | 174 | 🟢 LOW | Debug print statement found |
| tools/testing/upload_artifacts.py | 60 | 🟢 LOW | Debug print statement found |
| tools/testing/upload_artifacts.py | 100 | 🟢 LOW | Debug print statement found |
| tools/testing/upload_artifacts.py | 122 | 🟢 LOW | Debug print statement found |
| tools/testing/upload_artifacts.py | 123 | 🟢 LOW | Debug print statement found |
| tools/testing/upload_artifacts.py | 130 | 🟢 LOW | Debug print statement found |
| tools/testing/upload_artifacts.py | 145 | 🟢 LOW | Debug print statement found |
| tools/testing/upload_artifacts.py | 208 | 🟢 LOW | Debug print statement found |
| tools/testing/upload_artifacts.py | 220 | 🟢 LOW | Debug print statement found |
| tools/update_masked_docs.py | 17 | 🟢 LOW | Debug print statement found |
| tools/update_masked_docs.py | 50 | 🟢 LOW | Debug print statement found |
| tools/update_masked_docs.py | 56 | 🟢 LOW | Debug print statement found |
| torch/__init__.py | 262 | 🟢 LOW | Debug print statement found |
| torch/_appdirs.py | 646 | 🟢 LOW | Debug print statement found |
| torch/_appdirs.py | 648 | 🟢 LOW | Debug print statement found |
| torch/_appdirs.py | 651 | 🟢 LOW | Debug print statement found |
| torch/_appdirs.py | 653 | 🟢 LOW | Debug print statement found |
| torch/_appdirs.py | 656 | 🟢 LOW | Debug print statement found |
| torch/_appdirs.py | 658 | 🟢 LOW | Debug print statement found |
| torch/_appdirs.py | 661 | 🟢 LOW | Debug print statement found |
| torch/_appdirs.py | 663 | 🟢 LOW | Debug print statement found |
| torch/_appdirs.py | 666 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/backends/debugging.py | 706 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 298 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 299 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 303 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 304 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 334 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 336 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 338 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 345 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 346 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 350 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 353 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 356 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 357 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 361 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 369 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 370 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 374 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 375 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 378 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 379 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 383 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 384 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 385 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 386 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 387 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 388 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 391 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 392 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 393 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 394 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 395 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 396 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 397 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 398 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 399 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 400 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 401 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 402 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 403 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 404 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 405 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 406 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 407 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 408 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 409 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 410 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 445 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 469 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 482 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 508 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 513 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 516 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 525 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 531 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 534 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 543 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 550 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 580 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 588 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 606 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 608 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 612 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 613 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 635 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 641 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 643 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 645 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 647 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 653 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 656 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 664 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 670 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 672 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 674 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 685 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 687 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 689 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 695 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 711 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 728 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 730 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 799 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 802 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 810 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 842 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 844 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 846 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 855 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 919 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 920 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/bytecode_debugger.py | 1142 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/callback.py | 21 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/callback.py | 25 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/comptime.py | 20 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/comptime.py | 223 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/comptime.py | 237 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/comptime.py | 238 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/comptime.py | 247 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/comptime.py | 270 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/comptime.py | 280 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/comptime.py | 296 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/comptime.py | 310 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/comptime.py | 346 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/comptime.py | 347 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/convert_frame.py | 458 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/decorators.py | 555 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/decorators.py | 694 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/decorators.py | 696 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 244 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 245 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 248 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 259 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 263 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 264 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 267 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 347 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 351 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 383 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 387 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 391 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 394 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 398 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 417 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 422 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/dynamo_profiler.py | 423 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/eval_frame.py | 1275 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/graph_deduplication.py | 215 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/guards.py | 5492 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/guards.py | 5495 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/guards.py | 5496 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/guards.py | 5498 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/guards.py | 5505 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/repro/after_aot.py | 937 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/repro/after_aot.py | 959 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/repro/after_aot.py | 963 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/repro/after_aot.py | 967 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/repro/after_aot.py | 1013 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/repro/aoti.py | 273 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/test_minifier_common.py | 101 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/test_minifier_common.py | 198 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/test_minifier_common.py | 199 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/test_minifier_common.py | 229 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/test_minifier_common.py | 231 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/test_minifier_common.py | 251 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/test_minifier_common.py | 252 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/test_minifier_common.py | 307 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/test_minifier_common.py | 321 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/test_minifier_common.py | 328 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/utils.py | 335 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/utils.py | 1526 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/variables/base.py | 1975 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/variables/builder.py | 1306 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/variables/builtin.py | 633 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/variables/functions.py | 1416 | 🟢 LOW | Debug print statement found |
| torch/_dynamo/variables/misc.py | 2097 | 🟢 LOW | Debug print statement found |
| torch/_export/converter.py | 1514 | 🟢 LOW | Debug print statement found |
| torch/_export/db/gen_example.py | 22 | 🟢 LOW | Debug print statement found |
| torch/_export/pass_base.py | 138 | 🟢 LOW | Debug print statement found |
| torch/_export/utils.py | 1510 | 🟢 LOW | Debug print statement found |
| torch/_functorch/aot_autograd.py | 764 | 🟢 LOW | Debug print statement found |
| torch/_functorch/benchmark_utils.py | 226 | 🟢 LOW | Debug print statement found |
| torch/_functorch/compilers.py | 118 | 🟢 LOW | Debug print statement found |
| torch/_functorch/compilers.py | 270 | 🟢 LOW | Debug print statement found |
| torch/_functorch/compilers.py | 317 | 🟢 LOW | Debug print statement found |
| torch/_functorch/eager_transforms.py | 1662 | 🟢 LOW | Debug print statement found |
| torch/_functorch/eager_transforms.py | 1669 | 🟢 LOW | Debug print statement found |
| torch/_functorch/eager_transforms.py | 1679 | 🟢 LOW | Debug print statement found |
| torch/_functorch/eager_transforms.py | 1690 | 🟢 LOW | Debug print statement found |
| torch/_functorch/eager_transforms.py | 1713 | 🟢 LOW | Debug print statement found |
| torch/_functorch/functional_call.py | 40 | 🟢 LOW | Debug print statement found |
| torch/_functorch/functional_call.py | 42 | 🟢 LOW | Debug print statement found |
| torch/_functorch/functional_call.py | 43 | 🟢 LOW | Debug print statement found |
| torch/_functorch/functional_call.py | 53 | 🟢 LOW | Debug print statement found |
| torch/_functorch/functional_call.py | 69 | 🟢 LOW | Debug print statement found |
| torch/_functorch/functional_call.py | 70 | 🟢 LOW | Debug print statement found |
| torch/_functorch/functional_call.py | 72 | 🟢 LOW | Debug print statement found |
| torch/_functorch/functional_call.py | 74 | 🟢 LOW | Debug print statement found |
| torch/_functorch/functional_call.py | 220 | 🟢 LOW | Debug print statement found |
| torch/_functorch/fx_minifier.py | 166 | 🟢 LOW | Debug print statement found |
| torch/_functorch/fx_minifier.py | 250 | 🟢 LOW | Debug print statement found |
| torch/_functorch/fx_minifier.py | 258 | 🟢 LOW | Debug print statement found |
| torch/_functorch/fx_minifier.py | 259 | 🟢 LOW | Debug print statement found |
| torch/_functorch/fx_minifier.py | 277 | 🟢 LOW | Debug print statement found |
| torch/_functorch/fx_minifier.py | 283 | 🟢 LOW | Debug print statement found |
| torch/_functorch/fx_minifier.py | 289 | 🟢 LOW | Debug print statement found |
| torch/_functorch/fx_minifier.py | 298 | 🟢 LOW | Debug print statement found |
| torch/_functorch/fx_minifier.py | 305 | 🟢 LOW | Debug print statement found |
| torch/_functorch/fx_minifier.py | 496 | 🟢 LOW | Debug print statement found |
| torch/_functorch/fx_minifier.py | 553 | 🟢 LOW | Debug print statement found |
| torch/_functorch/fx_minifier.py | 561 | 🟢 LOW | Debug print statement found |
| torch/_higher_order_ops/print.py | 12 | 🟢 LOW | Debug print statement found |
| torch/_higher_order_ops/print.py | 15 | 🟢 LOW | Debug print statement found |
| torch/_higher_order_ops/print.py | 18 | 🟢 LOW | Debug print statement found |
| torch/_higher_order_ops/print.py | 22 | 🟢 LOW | Debug print statement found |
| torch/_higher_order_ops/print.py | 26 | 🟢 LOW | Debug print statement found |
| torch/_higher_order_ops/print.py | 36 | 🟢 LOW | Debug print statement found |
| torch/_higher_order_ops/print.py | 109 | 🟢 LOW | Debug print statement found |
| torch/_higher_order_ops/print.py | 138 | 🟢 LOW | Debug print statement found |
| torch/_inductor/analysis/profile_analysis.py | 821 | 🟢 LOW | Debug print statement found |
| torch/_inductor/analysis/profile_analysis.py | 823 | 🟢 LOW | Debug print statement found |
| torch/_inductor/analysis/profile_analysis.py | 831 | 🟢 LOW | Debug print statement found |
| torch/_inductor/analysis/profile_analysis.py | 833 | 🟢 LOW | Debug print statement found |
| torch/_inductor/analysis/profile_analysis.py | 843 | 🟢 LOW | Debug print statement found |
| torch/_inductor/analysis/profile_analysis.py | 855 | 🟢 LOW | Debug print statement found |
| torch/_inductor/async_compile.py | 125 | 🟢 LOW | Debug print statement found |
| torch/_inductor/autoheuristic/learned_heuristic_controller.py | 41 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codecache.py | 3332 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/custom_extern_kernel_codegen.py | 70 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/custom_extern_kernel_codegen.py | 71 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/custom_extern_kernel_codegen.py | 72 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/custom_extern_kernel_codegen.py | 89 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/custom_extern_kernel_codegen.py | 91 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/debug_utils.py | 29 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/debug_utils.py | 31 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/debug_utils.py | 36 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/debug_utils.py | 37 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/debug_utils.py | 38 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/debug_utils.py | 39 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/debug_utils.py | 43 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/debug_utils.py | 44 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/debug_utils.py | 45 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/debug_utils.py | 46 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/memory_planning.py | 553 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/memory_planning.py | 554 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/memory_planning.py | 555 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/triton.py | 6226 | 🟢 LOW | Debug print statement found |
| torch/_inductor/codegen/triton_combo_kernel.py | 1151 | 🟢 LOW | Debug print statement found |
| torch/_inductor/comms_debug.py | 103 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compile_fx_ext.py | 632 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compile_fx_ext.py | 712 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compile_fx_ext.py | 728 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 365 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 367 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 438 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 451 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 456 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 471 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 502 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 507 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 510 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 521 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 526 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 539 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 555 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 648 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 660 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 672 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 676 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 716 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 744 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 761 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 804 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 806 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 810 | 🟢 LOW | Debug print statement found |
| torch/_inductor/compiler_bisector.py | 811 | 🟢 LOW | Debug print statement found |
| torch/_inductor/cpp_builder.py | 223 | 🟢 LOW | Debug print statement found |
| torch/_inductor/debug.py | 126 | 🟢 LOW | Debug print statement found |
| torch/_inductor/debug.py | 1345 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fuzzer.py | 650 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fuzzer.py | 654 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fuzzer.py | 662 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fuzzer.py | 692 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fuzzer.py | 700 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fuzzer.py | 728 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fuzzer.py | 736 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fuzzer.py | 752 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fuzzer.py | 808 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fuzzer.py | 815 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fuzzer.py | 836 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fuzzer.py | 854 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fx_passes/auto_chunker/applier.py | 455 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fx_passes/auto_chunker/propagate_scale_by.py | 62 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fx_passes/auto_chunker/propagator.py | 207 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fx_passes/auto_chunker/utils.py | 79 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fx_passes/auto_chunker/utils.py | 82 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fx_passes/auto_chunker/utils.py | 87 | 🟢 LOW | Debug print statement found |
| torch/_inductor/fx_passes/spmd_check.py | 133 | 🟢 LOW | Debug print statement found |
| torch/_inductor/graph.py | 2761 | 🟢 LOW | Debug print statement found |
| torch/_inductor/graph.py | 2766 | 🟢 LOW | Debug print statement found |
| torch/_inductor/graph.py | 2998 | 🟢 LOW | Debug print statement found |
| torch/_inductor/mock_cache.py | 110 | 🟢 LOW | Debug print statement found |
| torch/_inductor/mock_cache.py | 112 | 🟢 LOW | Debug print statement found |
| torch/_inductor/mock_cache.py | 114 | 🟢 LOW | Debug print statement found |
| torch/_inductor/mock_cache.py | 117 | 🟢 LOW | Debug print statement found |
| torch/_inductor/mock_cache.py | 122 | 🟢 LOW | Debug print statement found |
| torch/_inductor/remote_cache.py | 486 | 🟢 LOW | Debug print statement found |
| torch/_inductor/remote_cache.py | 488 | 🟢 LOW | Debug print statement found |
| torch/_inductor/remote_cache.py | 490 | 🟢 LOW | Debug print statement found |
| torch/_inductor/runtime/coordinate_descent_tuner.py | 464 | 🟢 LOW | Debug print statement found |
| torch/_inductor/select_algorithm.py | 2853 | 🟢 LOW | Debug print statement found |
| torch/_inductor/select_algorithm.py | 5300 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 744 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3312 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3313 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3323 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3324 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3740 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3742 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3745 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3748 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3751 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3757 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3758 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3760 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3761 | 🟢 LOW | Debug print statement found |
| torch/_inductor/utils.py | 3763 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 139 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 141 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 153 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 165 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 243 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 251 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 285 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 289 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 291 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 305 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 326 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 327 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 329 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 395 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 396 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 399 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 414 | 🟢 LOW | Debug print statement found |
| torch/_inductor/wrapper_benchmark.py | 507 | 🟢 LOW | Debug print statement found |
| torch/_jit_internal.py | 298 | 🟢 LOW | Debug print statement found |
| torch/_lazy/extract_compiled_graph.py | 186 | 🟢 LOW | Debug print statement found |
| torch/_lazy/extract_compiled_graph.py | 187 | 🟢 LOW | Debug print statement found |
| torch/_lazy/extract_compiled_graph.py | 207 | 🟢 LOW | Debug print statement found |
| torch/_lazy/extract_compiled_graph.py | 208 | 🟢 LOW | Debug print statement found |
| torch/_lazy/extract_compiled_graph.py | 209 | 🟢 LOW | Debug print statement found |
| torch/_library/custom_ops.py | 343 | 🟢 LOW | Debug print statement found |
| torch/_library/custom_ops.py | 349 | 🟢 LOW | Debug print statement found |
| torch/_library/custom_ops.py | 353 | 🟢 LOW | Debug print statement found |
| torch/_library/triton.py | 581 | 🟢 LOW | Debug print statement found |
| torch/_native/registry.py | 237 | 🟢 LOW | Debug print statement found |
| torch/_native/registry.py | 245 | 🟢 LOW | Debug print statement found |
| torch/_python_dispatcher.py | 43 | 🟢 LOW | Debug print statement found |
| torch/_python_dispatcher.py | 45 | 🟢 LOW | Debug print statement found |
| torch/_python_dispatcher.py | 46 | 🟢 LOW | Debug print statement found |
| torch/_python_dispatcher.py | 47 | 🟢 LOW | Debug print statement found |
| torch/_python_dispatcher.py | 48 | 🟢 LOW | Debug print statement found |
| torch/_subclasses/schema_check_mode.py | 93 | 🟢 LOW | Debug print statement found |
| torch/_tensor.py | 1409 | 🟢 LOW | Debug print statement found |
| torch/_tensor.py | 1418 | 🟢 LOW | Debug print statement found |
| torch/_torch_docs.py | 13411 | 🟢 LOW | Debug print statement found |
| torch/_utils_internal.py | 286 | 🟢 LOW | Debug print statement found |
| torch/_vendor/packaging/version.py | 296 | 🟢 LOW | Debug print statement found |
| torch/_vendor/packaging/version.py | 311 | 🟢 LOW | Debug print statement found |
| torch/_vendor/packaging/version.py | 322 | 🟢 LOW | Debug print statement found |
| torch/_vendor/packaging/version.py | 333 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/autotuner.py | 400 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/autotuner.py | 499 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/autotuner.py | 545 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/autotuner.py | 575 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/autotuner.py | 694 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/autotuner.py | 719 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/autotuner.py | 724 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/autotuner.py | 747 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/bench/bench_utils.py | 29 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/bench/bench_utils.py | 30 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/cache/jit.py | 239 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/cache/jit.py | 246 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/trace.py | 645 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/trace.py | 738 | 🟢 LOW | Debug print statement found |
| torch/_vendor/quack/trace.py | 847 | 🟢 LOW | Debug print statement found |
| torch/accelerator/__init__.py | 182 | 🟢 LOW | Debug print statement found |
| torch/ao/nn/intrinsic/qat/modules/linear_relu.py | 39 | 🟢 LOW | Debug print statement found |
| torch/ao/nn/intrinsic/quantized/dynamic/modules/linear_relu.py | 29 | 🟢 LOW | Debug print statement found |
| torch/ao/nn/intrinsic/quantized/modules/linear_relu.py | 30 | 🟢 LOW | Debug print statement found |
| torch/ao/nn/intrinsic/quantized/modules/linear_relu.py | 71 | 🟢 LOW | Debug print statement found |
| torch/ao/nn/intrinsic/quantized/modules/linear_relu.py | 150 | 🟢 LOW | Debug print statement found |
| torch/ao/nn/quantizable/modules/rnn.py | 433 | 🟢 LOW | Debug print statement found |
| torch/ao/nn/quantizable/modules/rnn.py | 435 | 🟢 LOW | Debug print statement found |
| torch/ao/nn/quantized/dynamic/modules/linear.py | 35 | 🟢 LOW | Debug print statement found |
| torch/ao/nn/quantized/modules/__init__.py | 100 | 🟢 LOW | Debug print statement found |
| torch/ao/nn/quantized/modules/__init__.py | 155 | 🟢 LOW | Debug print statement found |
| torch/ao/nn/quantized/modules/embedding_ops.py | 114 | 🟢 LOW | Debug print statement found |
| torch/ao/nn/quantized/modules/embedding_ops.py | 286 | 🟢 LOW | Debug print statement found |
| torch/ao/nn/quantized/modules/linear.py | 142 | 🟢 LOW | Debug print statement found |
| torch/ao/ns/_numeric_suite.py | 69 | 🟢 LOW | Debug print statement found |
| torch/ao/ns/_numeric_suite.py | 430 | 🟢 LOW | Debug print statement found |
| torch/ao/ns/_numeric_suite.py | 539 | 🟢 LOW | Debug print statement found |
| torch/ao/ns/fx/graph_passes.py | 813 | 🟢 LOW | Debug print statement found |
| torch/ao/ns/fx/graph_passes.py | 842 | 🟢 LOW | Debug print statement found |
| torch/ao/ns/fx/graph_passes.py | 861 | 🟢 LOW | Debug print statement found |
| torch/ao/ns/fx/graph_passes.py | 875 | 🟢 LOW | Debug print statement found |
| torch/ao/ns/fx/n_shadows_utils.py | 668 | 🟢 LOW | Debug print statement found |
| torch/ao/ns/fx/n_shadows_utils.py | 695 | 🟢 LOW | Debug print statement found |
| torch/ao/ns/fx/n_shadows_utils.py | 1385 | 🟢 LOW | Debug print statement found |
| torch/ao/ns/fx/n_shadows_utils.py | 1412 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_scheduler/base_data_scheduler.py | 193 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_disk_savings.py | 110 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_disk_savings.py | 111 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_disk_savings.py | 112 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_disk_savings.py | 145 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_disk_savings.py | 168 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_forward_time.py | 74 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_forward_time.py | 99 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_forward_time.py | 103 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_forward_time.py | 107 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_forward_time.py | 109 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_forward_time.py | 113 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_model_metrics.py | 108 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_model_metrics.py | 119 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/_experimental/data_sparsifier/benchmarks/evaluate_model_metrics.py | 123 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/scheduler/base_scheduler.py | 104 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/scheduler/base_scheduler.py | 106 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/sparsifier/base_sparsifier.py | 264 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/sparsifier/base_sparsifier.py | 266 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/sparsifier/base_sparsifier.py | 271 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/sparsifier/base_sparsifier.py | 273 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/sparsifier/base_sparsifier.py | 282 | 🟢 LOW | Debug print statement found |
| torch/ao/pruning/sparsifier/base_sparsifier.py | 284 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/_learnable_fake_quantize.py | 142 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/_learnable_fake_quantize.py | 143 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/experimental/adaround_optimization.py | 79 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/experimental/adaround_optimization.py | 82 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/experimental/adaround_optimization.py | 162 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/experimental/adaround_optimization.py | 187 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/experimental/adaround_optimization.py | 240 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/experimental/adaround_optimization.py | 244 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/experimental/quantizer.py | 74 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/fx/_lower_to_native_backend.py | 1090 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/fx/_lower_to_native_backend.py | 1100 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/fx/_model_report/model_report_visualizer.py | 438 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/fx/_model_report/model_report_visualizer.py | 466 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/fx/_model_report/model_report_visualizer.py | 601 | 🟢 LOW | Debug print statement found |
| torch/ao/quantization/fx/_model_report/model_report_visualizer.py | 674 | 🟢 LOW | Debug print statement found |
| torch/autograd/graph.py | 68 | 🟢 LOW | Debug print statement found |
| torch/autograd/graph.py | 131 | 🟢 LOW | Debug print statement found |
| torch/autograd/graph.py | 136 | 🟢 LOW | Debug print statement found |
| torch/autograd/graph.py | 167 | 🟢 LOW | Debug print statement found |
| torch/autograd/graph.py | 172 | 🟢 LOW | Debug print statement found |
| torch/autograd/graph.py | 302 | 🟢 LOW | Debug print statement found |
| torch/autograd/graph.py | 306 | 🟢 LOW | Debug print statement found |
| torch/autograd/graph.py | 622 | 🟢 LOW | Debug print statement found |
| torch/autograd/profiler.py | 265 | 🟢 LOW | Debug print statement found |
| torch/autograd/profiler.py | 1322 | 🟢 LOW | Debug print statement found |
| torch/autograd/profiler_util.py | 75 | 🟢 LOW | Debug print statement found |
| torch/autograd/profiler_util.py | 86 | 🟢 LOW | Debug print statement found |
| torch/backends/_coreml/preprocess.py | 127 | 🟢 LOW | Debug print statement found |
| torch/backends/_coreml/preprocess.py | 130 | 🟢 LOW | Debug print statement found |
| torch/backends/python_native/__init__.py | 29 | 🟢 LOW | Debug print statement found |
| torch/backends/python_native/__init__.py | 30 | 🟢 LOW | Debug print statement found |
| torch/backends/python_native/__init__.py | 218 | 🟢 LOW | Debug print statement found |
| torch/compiler/__init__.py | 464 | 🟢 LOW | Debug print statement found |
| torch/cpu/__init__.py | 75 | 🟢 LOW | Debug print statement found |
| torch/cpu/__init__.py | 76 | 🟢 LOW | Debug print statement found |
| torch/csrc/jit/tensorexpr/codegen_external.py | 64 | 🟢 LOW | Debug print statement found |
| torch/csrc/jit/tensorexpr/scripts/bisect.py | 7 | 🟢 LOW | Debug print statement found |
| torch/csrc/jit/tensorexpr/scripts/bisect.py | 15 | 🟢 LOW | Debug print statement found |
| torch/csrc/jit/tensorexpr/scripts/bisect.py | 18 | 🟢 LOW | Debug print statement found |
| torch/csrc/jit/tensorexpr/scripts/bisect.py | 21 | 🟢 LOW | Debug print statement found |
| torch/csrc/jit/tensorexpr/scripts/bisect.py | 23 | 🟢 LOW | Debug print statement found |
| torch/csrc/jit/tensorexpr/scripts/bisect.py | 64 | 🟢 LOW | Debug print statement found |
| torch/csrc/lazy/test_mnist.py | 58 | 🟢 LOW | Debug print statement found |
| torch/cuda/__init__.py | 582 | 🟢 LOW | Debug print statement found |
| torch/cuda/__init__.py | 586 | 🟢 LOW | Debug print statement found |
| torch/cuda/__init__.py | 588 | 🟢 LOW | Debug print statement found |
| torch/cuda/_annotate_cuda_graph_trace.py | 106 | 🟢 LOW | Debug print statement found |
| torch/cuda/_annotate_cuda_graph_trace.py | 200 | 🟢 LOW | Debug print statement found |
| torch/cuda/_annotate_cuda_graph_trace.py | 316 | 🟢 LOW | Debug print statement found |
| torch/cuda/_annotate_cuda_graph_trace.py | 322 | 🟢 LOW | Debug print statement found |
| torch/cuda/_annotate_cuda_graph_trace.py | 326 | 🟢 LOW | Debug print statement found |
| torch/cuda/_annotate_cuda_graph_trace.py | 330 | 🟢 LOW | Debug print statement found |
| torch/cuda/_annotate_cuda_graph_trace.py | 333 | 🟢 LOW | Debug print statement found |
| torch/cuda/_annotate_cuda_graph_trace.py | 339 | 🟢 LOW | Debug print statement found |
| torch/cuda/_annotate_cuda_graph_trace.py | 343 | 🟢 LOW | Debug print statement found |
| torch/cuda/_annotate_cuda_graph_trace.py | 358 | 🟢 LOW | Debug print statement found |
| torch/cuda/_memory_viz.py | 99 | 🟢 LOW | Debug print statement found |
| torch/cuda/_memory_viz.py | 184 | 🟢 LOW | Debug print statement found |
| torch/cuda/_memory_viz.py | 185 | 🟢 LOW | Debug print statement found |
| torch/cuda/_memory_viz.py | 478 | 🟢 LOW | Debug print statement found |
| torch/cuda/_memory_viz.py | 781 | 🟢 LOW | Debug print statement found |
| torch/cuda/_memory_viz.py | 784 | 🟢 LOW | Debug print statement found |
| torch/cuda/_sanitizer.py | 620 | 🟢 LOW | Debug print statement found |
| torch/distributed/_shard/sharded_optim/__init__.py | 37 | 🟢 LOW | Debug print statement found |
| torch/distributed/_symmetric_memory/__init__.py | 2110 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/fsdp2_mem_tracker.py | 153 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/mem_tracker.py | 220 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/mem_tracker.py | 226 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/mem_tracker.py | 242 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/mem_tracker.py | 263 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/mem_tracker.py | 270 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/mem_tracker.py | 272 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/mem_tracker.py | 274 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/mem_tracker.py | 308 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/mem_tracker.py | 355 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/mem_tracker.py | 869 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/memory_tracker.py | 149 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/memory_tracker.py | 150 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/memory_tracker.py | 151 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/memory_tracker.py | 155 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/memory_tracker.py | 156 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/mod_tracker.py | 43 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/runtime_estimator.py | 300 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/runtime_estimator.py | 305 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/runtime_estimator.py | 306 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/runtime_estimator.py | 311 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/runtime_estimator.py | 316 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/runtime_estimator.py | 393 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/runtime_estimator.py | 398 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/sac_estimator.py | 49 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/sac_estimator.py | 704 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/sac_estimator.py | 742 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/sac_estimator.py | 862 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/sac_estimator.py | 915 | 🟢 LOW | Debug print statement found |
| torch/distributed/_tools/sac_estimator.py | 917 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 107 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 199 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 299 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 300 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 301 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 302 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 303 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 304 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 305 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 306 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 307 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 308 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 309 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 310 | 🟢 LOW | Debug print statement found |
| torch/distributed/benchmarks/benchmark_ddp_rpc.py | 311 | 🟢 LOW | Debug print statement found |
| torch/distributed/checkpoint/_consolidate_hf_safetensors.py | 356 | 🟢 LOW | Debug print statement found |
| torch/distributed/checkpoint/examples/async_checkpointing_example.py | 71 | 🟢 LOW | Debug print statement found |
| torch/distributed/checkpoint/examples/async_checkpointing_example.py | 138 | 🟢 LOW | Debug print statement found |
| torch/distributed/checkpoint/examples/fsdp_checkpoint_example.py | 41 | 🟢 LOW | Debug print statement found |
| torch/distributed/checkpoint/examples/fsdp_checkpoint_example.py | 49 | 🟢 LOW | Debug print statement found |
| torch/distributed/checkpoint/examples/fsdp_checkpoint_example.py | 123 | 🟢 LOW | Debug print statement found |
| torch/distributed/checkpoint/examples/stateful_example.py | 100 | 🟢 LOW | Debug print statement found |
| torch/distributed/checkpoint/format_utils.py | 275 | 🟢 LOW | Debug print statement found |
| torch/distributed/checkpoint/format_utils.py | 285 | 🟢 LOW | Debug print statement found |
| torch/distributed/checkpoint/format_utils.py | 290 | 🟢 LOW | Debug print statement found |
| torch/distributed/elastic/agent/server/local_elastic_agent.py | 183 | 🟢 LOW | Debug print statement found |
| torch/distributed/elastic/agent/server/local_elastic_agent.py | 185 | 🟢 LOW | Debug print statement found |
| torch/distributed/elastic/agent/server/local_elastic_agent.py | 203 | 🟢 LOW | Debug print statement found |
| torch/distributed/elastic/metrics/__init__.py | 129 | 🟢 LOW | Debug print statement found |
| torch/distributed/elastic/metrics/api.py | 53 | 🟢 LOW | Debug print statement found |
| torch/distributed/elastic/multiprocessing/redirects.py | 106 | 🟢 LOW | Debug print statement found |
| torch/distributed/elastic/multiprocessing/redirects.py | 199 | 🟢 LOW | Debug print statement found |
| torch/distributed/elastic/multiprocessing/redirects.py | 204 | 🟢 LOW | Debug print statement found |
| torch/distributed/elastic/rendezvous/etcd_server.py | 63 | 🟢 LOW | Debug print statement found |
| torch/distributed/flight_recorder/components/utils.py | 163 | 🟢 LOW | Debug print statement found |
| torch/distributed/fsdp/_common_utils.py | 618 | 🟢 LOW | Debug print statement found |
| torch/distributed/fsdp/_common_utils.py | 619 | 🟢 LOW | Debug print statement found |
| torch/distributed/fsdp/_fully_shard/_fsdp_common.py | 115 | 🟢 LOW | Debug print statement found |
| torch/distributed/fsdp/_fully_shard/_fsdp_common.py | 116 | 🟢 LOW | Debug print statement found |
| torch/distributed/fsdp/fully_sharded_data_parallel.py | 324 | 🟢 LOW | Debug print statement found |
| torch/distributed/fsdp/fully_sharded_data_parallel.py | 1028 | 🟢 LOW | Debug print statement found |
| torch/distributed/fsdp/fully_sharded_data_parallel.py | 1029 | 🟢 LOW | Debug print statement found |
| torch/distributed/nn/api/remote_module.py | 724 | 🟢 LOW | Debug print statement found |
| torch/distributed/pipelining/_schedule_visualizer.py | 311 | 🟢 LOW | Debug print statement found |
| torch/distributed/pipelining/_schedule_visualizer.py | 319 | 🟢 LOW | Debug print statement found |
| torch/distributed/pipelining/schedules.py | 3791 | 🟢 LOW | Debug print statement found |
| torch/distributed/pipelining/schedules.py | 3793 | 🟢 LOW | Debug print statement found |
| torch/distributed/rpc/functions.py | 66 | 🟢 LOW | Debug print statement found |
| torch/distributed/rpc/functions.py | 93 | 🟢 LOW | Debug print statement found |
| torch/distributed/rpc/functions.py | 133 | 🟢 LOW | Debug print statement found |
| torch/distributed/rpc/functions.py | 140 | 🟢 LOW | Debug print statement found |
| torch/distributed/rpc/functions.py | 152 | 🟢 LOW | Debug print statement found |
| torch/distributed/rpc/functions.py | 156 | 🟢 LOW | Debug print statement found |
| torch/distributed/rpc/functions.py | 160 | 🟢 LOW | Debug print statement found |
| torch/distributed/rpc/internal.py | 216 | 🟢 LOW | Debug print statement found |
| torch/distributed/rpc/options.py | 127 | 🟢 LOW | Debug print statement found |
| torch/distributed/rpc/options.py | 153 | 🟢 LOW | Debug print statement found |
| torch/distributed/rpc/options.py | 154 | 🟢 LOW | Debug print statement found |
| torch/distributed/rpc/server_process_global_profiler.py | 80 | 🟢 LOW | Debug print statement found |
| torch/distributed/rpc/server_process_global_profiler.py | 88 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1160 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1200 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1529 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1539 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1543 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1548 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1552 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1576 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1803 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1804 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1805 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1847 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1851 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1860 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 1868 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2040 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2041 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2042 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2044 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2045 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2046 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2047 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2048 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2050 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2051 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2062 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2064 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2155 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2168 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2170 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2174 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2175 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2183 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2204 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2214 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2221 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2226 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2229 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2233 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2234 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2235 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2258 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2259 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2285 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2293 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/_ops/strategy_validation.py | 2296 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/debug/_comm_mode.py | 216 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/debug/_comm_mode.py | 220 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/debug/_comm_mode.py | 239 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/debug/_op_coverage.py | 94 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/debug/_visualize_sharding.py | 152 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/debug/_visualize_sharding.py | 225 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/examples/comm_mode_features_example.py | 122 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/examples/comm_mode_features_example.py | 159 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/examples/comm_mode_features_example.py | 191 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/examples/comm_mode_features_example.py | 279 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/examples/comm_mode_features_example.py | 581 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/examples/comm_mode_features_example.py | 602 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/examples/comm_mode_features_example.py | 711 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/examples/convnext_example.py | 246 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/examples/convnext_example.py | 250 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/examples/convnext_example.py | 254 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/examples/torchrec_sharding_example.py | 400 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/examples/visualize_sharding_example.py | 27 | 🟢 LOW | Debug print statement found |
| torch/distributed/tensor/examples/visualize_sharding_example.py | 32 | 🟢 LOW | Debug print statement found |
| torch/distributed/utils.py | 161 | 🟢 LOW | Debug print statement found |
| torch/export/__init__.py | 379 | 🟢 LOW | Debug print statement found |
| torch/export/__init__.py | 380 | 🟢 LOW | Debug print statement found |
| torch/export/__init__.py | 562 | 🟢 LOW | Debug print statement found |
| torch/export/_draft_export.py | 105 | 🟢 LOW | Debug print statement found |
| torch/export/_draft_export.py | 214 | 🟢 LOW | Debug print statement found |
| torch/export/_draft_export.py | 520 | 🟢 LOW | Debug print statement found |
| torch/export/_trace.py | 1412 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 605 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 607 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 653 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 658 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 1319 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 1477 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 1483 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 1500 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 1503 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 1513 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 1514 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 1515 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 1559 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 1560 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 1570 | 🟢 LOW | Debug print statement found |
| torch/export/unflatten.py | 1705 | 🟢 LOW | Debug print statement found |
| torch/functional.py | 2198 | 🟢 LOW | Debug print statement found |
| torch/futures/__init__.py | 154 | 🟢 LOW | Debug print statement found |
| torch/futures/__init__.py | 160 | 🟢 LOW | Debug print statement found |
| torch/futures/__init__.py | 203 | 🟢 LOW | Debug print statement found |
| torch/futures/__init__.py | 204 | 🟢 LOW | Debug print statement found |
| torch/futures/__init__.py | 247 | 🟢 LOW | Debug print statement found |
| torch/futures/__init__.py | 306 | 🟢 LOW | Debug print statement found |
| torch/futures/__init__.py | 308 | 🟢 LOW | Debug print statement found |
| torch/fx/__init__.py | 31 | 🟢 LOW | Debug print statement found |
| torch/fx/__init__.py | 43 | 🟢 LOW | Debug print statement found |
| torch/fx/_graph_pickler.py | 264 | 🟢 LOW | Debug print statement found |
| torch/fx/_symbolic_trace.py | 108 | 🟢 LOW | Debug print statement found |
| torch/fx/experimental/accelerator_partitioner.py | 565 | 🟢 LOW | Debug print statement found |
| torch/fx/experimental/migrate_gradual_types/constraint_generator.py | 248 | 🟢 LOW | Debug print statement found |
| torch/fx/experimental/migrate_gradual_types/constraint_transformation.py | 177 | 🟢 LOW | Debug print statement found |
| torch/fx/experimental/migrate_gradual_types/transform_to_z3.py | 425 | 🟢 LOW | Debug print statement found |
| torch/fx/experimental/unification/more.py | 62 | 🟢 LOW | Debug print statement found |
| torch/fx/experimental/unification/more.py | 64 | 🟢 LOW | Debug print statement found |
| torch/fx/experimental/unification/multipledispatch/dispatcher.py | 343 | 🟢 LOW | Debug print statement found |
| torch/fx/experimental/unification/multipledispatch/dispatcher.py | 417 | 🟢 LOW | Debug print statement found |
| torch/fx/experimental/unification/multipledispatch/dispatcher.py | 427 | 🟢 LOW | Debug print statement found |
| torch/fx/experimental/unification/variable.py | 77 | 🟢 LOW | Debug print statement found |
| torch/fx/experimental/unification/variable.py | 79 | 🟢 LOW | Debug print statement found |
| torch/fx/experimental/unification/variable.py | 88 | 🟢 LOW | Debug print statement found |
| torch/fx/graph.py | 1409 | 🟢 LOW | Debug print statement found |
| torch/fx/graph.py | 2577 | 🟢 LOW | Debug print statement found |
| torch/fx/graph.py | 2585 | 🟢 LOW | Debug print statement found |
| torch/fx/graph_module.py | 413 | 🟢 LOW | Debug print statement found |
| torch/fx/graph_module.py | 503 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/dialect/common/cse_pass.py | 83 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/dialect/common/cse_pass.py | 85 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/graph_drawer.py | 339 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/net_min_base.py | 251 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/net_min_base.py | 765 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/net_min_base.py | 914 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/net_min_base.py | 919 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/net_min_base.py | 921 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/net_min_base.py | 956 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/net_min_base.py | 957 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/reinplace.py | 533 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/reinplace.py | 536 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/reinplace.py | 538 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/reinplace.py | 542 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/reinplace.py | 543 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/shape_prop.py | 119 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/split_module.py | 139 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/split_utils.py | 500 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/split_utils.py | 521 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/splitter_base.py | 804 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/splitter_base.py | 923 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/splitter_base.py | 1148 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/splitter_base.py | 1197 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/tests/_test_split_utils.py | 254 | 🟢 LOW | Debug print statement found |
| torch/fx/passes/tests/_test_split_utils.py | 255 | 🟢 LOW | Debug print statement found |
| torch/hub.py | 382 | 🟢 LOW | Debug print statement found |
| torch/hub.py | 557 | 🟢 LOW | Debug print statement found |
| torch/jit/__init__.py | 240 | 🟢 LOW | Debug print statement found |
| torch/jit/_freeze.py | 64 | 🟢 LOW | Debug print statement found |
| torch/jit/_script.py | 1328 | 🟢 LOW | Debug print statement found |
| torch/jit/_script.py | 1331 | 🟢 LOW | Debug print statement found |
| torch/jit/_script.py | 1356 | 🟢 LOW | Debug print statement found |
| torch/jit/_script.py | 1359 | 🟢 LOW | Debug print statement found |
| torch/jit/_script.py | 1456 | 🟢 LOW | Debug print statement found |
| torch/jit/_script.py | 1457 | 🟢 LOW | Debug print statement found |
| torch/jit/_script.py | 1479 | 🟢 LOW | Debug print statement found |
| torch/jit/_script.py | 1790 | 🟢 LOW | Debug print statement found |
| torch/jit/_serialization.py | 157 | 🟢 LOW | Debug print statement found |
| torch/jit/_state.py | 37 | 🟢 LOW | Debug print statement found |
| torch/jit/_state.py | 40 | 🟢 LOW | Debug print statement found |
| torch/jit/_trace.py | 199 | 🟢 LOW | Debug print statement found |
| torch/nn/functional.py | 4691 | 🟢 LOW | Debug print statement found |
| torch/nn/functional.py | 4715 | 🟢 LOW | Debug print statement found |
| torch/nn/functional.py | 4738 | 🟢 LOW | Debug print statement found |
| torch/nn/functional.py | 4749 | 🟢 LOW | Debug print statement found |
| torch/nn/functional.py | 4783 | 🟢 LOW | Debug print statement found |
| torch/nn/functional.py | 4794 | 🟢 LOW | Debug print statement found |
| torch/nn/functional.py | 5789 | 🟢 LOW | Debug print statement found |
| torch/nn/functional.py | 5793 | 🟢 LOW | Debug print statement found |
| torch/nn/functional.py | 5798 | 🟢 LOW | Debug print statement found |
| torch/nn/functional.py | 5896 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/linear.py | 38 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/linear.py | 87 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/linear.py | 196 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/module.py | 1054 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/module.py | 1057 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/module.py | 2682 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/module.py | 2711 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/module.py | 2737 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/module.py | 2765 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/module.py | 2796 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/module.py | 2824 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/module.py | 2862 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/pixelshuffle.py | 44 | 🟢 LOW | Debug print statement found |
| torch/nn/modules/pixelshuffle.py | 103 | 🟢 LOW | Debug print statement found |
| torch/nn/parallel/distributed.py | 359 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/parametrize.py | 553 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/parametrize.py | 558 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/parametrize.py | 576 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/prune.py | 864 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/prune.py | 984 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/prune.py | 1101 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/prune.py | 1189 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/prune.py | 1243 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/prune.py | 1246 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/rnn.py | 572 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/rnn.py | 575 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/rnn.py | 578 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/stateless.py | 196 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/stateless.py | 198 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/stateless.py | 199 | 🟢 LOW | Debug print statement found |
| torch/nn/utils/stateless.py | 209 | 🟢 LOW | Debug print statement found |
| torch/onnx/_internal/exporter/_analysis.py | 253 | 🟢 LOW | Debug print statement found |
| torch/onnx/_internal/exporter/_capture_strategies.py | 31 | 🟢 LOW | Debug print statement found |
| torch/onnx/_internal/exporter/_core.py | 1333 | 🟢 LOW | Debug print statement found |
| torch/onnx/_internal/exporter/_verification.py | 255 | 🟢 LOW | Debug print statement found |
| torch/onnx/_internal/fx/_pass.py | 105 | 🟢 LOW | Debug print statement found |
| torch/overrides.py | 2183 | 🟢 LOW | Debug print statement found |
| torch/overrides.py | 2215 | 🟢 LOW | Debug print statement found |
| torch/profiler/_memory_profiler.py | 1176 | 🟢 LOW | Debug print statement found |
| torch/profiler/_trace_validator.py | 12 | 🟢 LOW | Debug print statement found |
| torch/profiler/_utils.py | 369 | 🟢 LOW | Debug print statement found |
| torch/profiler/profiler.py | 485 | 🟢 LOW | Debug print statement found |
| torch/profiler/profiler.py | 864 | 🟢 LOW | Debug print statement found |
| torch/profiler/profiler.py | 874 | 🟢 LOW | Debug print statement found |
| torch/profiler/profiler.py | 1447 | 🟢 LOW | Debug print statement found |

### Maintenance Items (3781)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .ci/manywheel/repair_wheel.py | 326 | ⚪ INFO | TODO comment found |
| .github/actions/reuse-old-whl/reuse_old_whl.py | 363 | ⚪ INFO | TODO comment found |
| .github/scripts/generate_binary_build_matrix.py | 419 | ⚪ INFO | TODO comment found |
| .github/scripts/generate_binary_build_matrix.py | 429 | ⚪ INFO | TODO comment found |
| .github/scripts/gitutils.py | 106 | ⚪ INFO | TODO comment found |
| .github/scripts/label_utils.py | 12 | ⚪ INFO | TODO comment found |
| .github/scripts/test_trymerge.py | 82 | ⚪ INFO | TODO comment found |
| android/pytorch_android/src/main/cpp/pytorch_jni_lite.cpp | 33 | ⚪ INFO | TODO comment found |
| aten/src/ATen/ATen.h | 34 | ⚪ INFO | TODO comment found |
| aten/src/ATen/Context.cpp | 120 | ⚪ INFO | TODO comment found |
| aten/src/ATen/Context.cpp | 434 | ⚪ INFO | TODO comment found |
| aten/src/ATen/FunctionalInverses.cpp | 436 | ⚪ INFO | TODO comment found |
| aten/src/ATen/FunctionalTensorWrapper.cpp | 39 | ⚪ INFO | TODO comment found |
| aten/src/ATen/FunctionalTensorWrapper.cpp | 218 | ⚪ INFO | TODO comment found |
| aten/src/ATen/FunctionalTensorWrapper.h | 257 | ⚪ INFO | TODO comment found |
| aten/src/ATen/LegacyBatchedTensorImpl.cpp | 85 | ⚪ INFO | TODO comment found |
| aten/src/ATen/NestedTensorImpl.h | 48 | ⚪ INFO | TODO comment found |
| aten/src/ATen/NestedTensorImpl.h | 54 | ⚪ INFO | TODO comment found |
| aten/src/ATen/NestedTensorImpl.h | 114 | ⚪ INFO | TODO comment found |
| aten/src/ATen/NestedTensorImpl.h | 173 | ⚪ INFO | TODO comment found |
| aten/src/ATen/ParallelNative.cpp | 287 | ⚪ INFO | TODO comment found |
| aten/src/ATen/ParallelNative.cpp | 310 | ⚪ INFO | TODO comment found |
| aten/src/ATen/ScalarOps.h | 28 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/SparseCsrTensorImpl.cpp | 66 | ⚪ INFO | TODO comment found |
| aten/src/ATen/SparseCsrTensorImpl.cpp | 216 | ⚪ INFO | TODO comment found |
| aten/src/ATen/TensorIndexing.cpp | 52 | ⚪ INFO | TODO comment found |
| aten/src/ATen/TensorIndexing.h | 211 | ⚪ INFO | TODO comment found |
| aten/src/ATen/TensorIterator.cpp | 514 | ⚪ INFO | TODO comment found |
| aten/src/ATen/TensorIterator.cpp | 524 | ⚪ INFO | TODO comment found |
| aten/src/ATen/TensorIterator.cpp | 771 | ⚪ INFO | TODO comment found |
| aten/src/ATen/TensorIterator.cpp | 804 | ⚪ INFO | TODO comment found |
| aten/src/ATen/TensorIterator.cpp | 1080 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/TensorIterator.cpp | 1103 | ⚪ INFO | TODO comment found |
| aten/src/ATen/TensorIterator.cpp | 1148 | ⚪ INFO | TODO comment found |
| aten/src/ATen/TensorUtils.h | 58 | ⚪ INFO | TODO comment found |
| aten/src/ATen/TensorUtils.h | 143 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/TracerMode.h | 111 | ⚪ INFO | TODO comment found |
| aten/src/ATen/Utils.h | 92 | ⚪ INFO | TODO comment found |
| aten/src/ATen/Version.cpp | 174 | ⚪ INFO | TODO comment found |
| aten/src/ATen/Version.cpp | 179 | ⚪ INFO | TODO comment found |
| aten/src/ATen/Version.cpp | 209 | ⚪ INFO | TODO comment found |
| aten/src/ATen/Version.cpp | 210 | ⚪ INFO | TODO comment found |
| aten/src/ATen/Version.cpp | 211 | ⚪ INFO | TODO comment found |
| aten/src/ATen/ZeroTensorFallback.cpp | 100 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/CachingHostAllocator.h | 449 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/DeprecatedTypePropertiesRegistry.cpp | 27 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/LegacyTypeDispatch.h | 9 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/LegacyTypeDispatch.h | 70 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/PythonOpRegistrationTrampoline.h | 5 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/TensorBase.h | 579 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/TransformationHelper.h | 131 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/blob.h | 74 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/boxing/impl/make_boxed_from_unboxed_functor.h | 254 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/boxing/impl/test_helpers.h | 32 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/class_type.h | 404 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/class_type.h | 406 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/dispatch/DispatchKeyExtractor.cpp | 42 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/dispatch/DispatchKeyExtractor.h | 41 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/dispatch/Dispatcher.cpp | 283 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/dispatch/Dispatcher.h | 210 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/dispatch/OperatorEntry.cpp | 93 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/dispatch/OperatorEntry.cpp | 385 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/dispatch/backend_fallback_test.cpp | 40 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/dispatch/backend_fallback_test.cpp | 56 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/dispatch/backend_fallback_test.cpp | 75 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/interned_strings.cpp | 101 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/ivalue.h | 348 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/ivalue.h | 1130 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/ivalue.h | 1182 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/jit_type.h | 568 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/jit_type.h | 2093 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/jit_type.h | 2100 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/library.cpp | 9 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/library.cpp | 116 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/op_registration/adaption.h | 48 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/op_registration/op_allowlist.h | 3 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/op_registration/op_registration_test.cpp | 2194 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/operator_name.h | 15 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/operator_name.h | 22 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/symbol.h | 76 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/tensor_type.cpp | 98 | ⚪ INFO | TODO comment found |
| aten/src/ATen/core/tensor_type.cpp | 233 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpp_custom_type_hack.h | 93 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256.h | 209 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256.h | 261 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256_complex_double.h | 213 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256_complex_double.h | 247 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256_complex_double.h | 393 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256_complex_double.h | 431 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256_complex_double.h | 449 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256_complex_float.h | 297 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256_complex_float.h | 329 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256_complex_float.h | 476 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256_complex_float.h | 514 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256_complex_float.h | 532 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256_float.h | 725 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec256/vec256_mask.h | 104 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec512/vec512_complex_double.h | 204 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec512/vec512_complex_double.h | 321 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec512/vec512_complex_double.h | 356 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec512/vec512_complex_double.h | 510 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec512/vec512_complex_double.h | 549 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec512/vec512_complex_double.h | 567 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec512/vec512_complex_float.h | 692 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec512/vec512_complex_float.h | 871 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec512/vec512_complex_float.h | 902 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec512/vec512_complex_float.h | 1070 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec512/vec512_complex_float.h | 1111 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec512/vec512_complex_float.h | 1132 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cpu/vec/vec512/vec512_float.h | 782 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cuda/CUDABlas.cpp | 916 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cuda/CUDABlas.cpp | 929 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cuda/CUDABlas.cpp | 1461 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cuda/CUDABlas.cpp | 1474 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cuda/CUDABlas.cpp | 1837 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cuda/EmptyTensor.cpp | 72 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cuda/detail/CUDAHooks.cpp | 442 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cuda/detail/CUDAHooks.cpp | 480 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cuda/detail/CUDAHooks.h | 7 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cudnn/Descriptors.h | 29 | ⚪ INFO | TODO comment found |
| aten/src/ATen/cudnn/Descriptors.h | 99 | ⚪ INFO | TODO comment found |
| aten/src/ATen/detail/CUDAHooksInterface.h | 56 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/ADInterpreters.cpp | 120 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/BatchRulesConvolution.cpp | 381 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/BatchRulesScatterOps.cpp | 120 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/BatchRulesViews.cpp | 87 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/BatchRulesViews.cpp | 182 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/BatchedFallback.cpp | 244 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/BatchedFallback.cpp | 499 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/BatchedTensorImpl.cpp | 91 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/BatchedTensorImpl.cpp | 101 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/BatchedTensorImpl.cpp | 127 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/BatchedTensorImpl.h | 155 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/DynamicLayer.cpp | 82 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/DynamicLayer.cpp | 315 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/DynamicLayer.h | 39 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/Interpreter.cpp | 32 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/LegacyBatchingRegistrations.cpp | 761 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/PlumbingHelper.h | 59 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/PyTorchOperatorHacks.cpp | 24 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/PyTorchOperatorHacks.cpp | 28 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/PyTorchOperatorHacks.cpp | 39 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/PyTorchOperatorHacks.cpp | 129 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/TensorWrapper.cpp | 123 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/TensorWrapper.cpp | 134 | ⚪ INFO | TODO comment found |
| aten/src/ATen/functorch/TensorWrapper.cpp | 158 | ⚪ INFO | TODO comment found |
| aten/src/ATen/mps/MPSAllocator.h | 19 | ⚪ INFO | TODO comment found |
| aten/src/ATen/mps/MPSAllocator.h | 123 | ⚪ INFO | TODO comment found |
| aten/src/ATen/mps/MPSGuardImpl.h | 30 | ⚪ INFO | TODO comment found |
| aten/src/ATen/mps/MPSGuardImpl.h | 67 | ⚪ INFO | TODO comment found |
| aten/src/ATen/mps/MPSGuardImpl.h | 101 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/BatchLinearAlgebra.cpp | 2566 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/BatchLinearAlgebra.cpp | 3249 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/BinaryOps.cpp | 990 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/BinaryOps.cpp | 1173 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/BlasKernel.cpp | 464 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/CPUFallback.h | 18 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/CPUFallback.h | 26 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/CPUFallback.h | 34 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ChanelShuffle.cpp | 85 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ConvUtils.h | 232 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ConvUtils.h | 233 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ConvUtils.h | 384 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Convolution.cpp | 472 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Convolution.cpp | 1818 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Convolution.cpp | 1956 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Convolution.cpp | 1968 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ConvolutionMM3d.cpp | 616 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ConvolutionMM3d.cpp | 756 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Copy.cpp | 141 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Copy.cpp | 295 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Copy.cpp | 370 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/DispatchStub.h | 37 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/DispatchStub.h | 372 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/DispatchStub.h | 485 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Distance.cpp | 97 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/DistributionTemplates.h | 349 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/DistributionTemplates.h | 382 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Dropout.cpp | 133 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Embedding.cpp | 43 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Embedding.cpp | 60 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Embedding.cpp | 82 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/EmbeddingBag.cpp | 1542 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/EmbeddingBag.cpp | 1704 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/GatedLinearUnit.cpp | 131 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/GatedLinearUnit.cpp | 132 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Integration.cpp | 30 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Linear.cpp | 867 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/LinearAlgebra.cpp | 506 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/LinearAlgebra.cpp | 521 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/LinearAlgebra.cpp | 528 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/LinearAlgebra.cpp | 571 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/LinearAlgebra.cpp | 3369 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/LinearAlgebra.cpp | 3418 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Loss.cpp | 79 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/LossNLL.cpp | 608 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/NaiveConvolutionTranspose3d.cpp | 97 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/NaiveDilatedConvolution.cpp | 426 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Normalization.cpp | 523 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Normalization.cpp | 560 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Normalization.cpp | 685 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Normalization.cpp | 694 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Normalization.cpp | 705 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/RNN.cpp | 748 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ReduceOps.cpp | 1402 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ReduceOps.cpp | 2323 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ReflectionPad.cpp | 376 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ReflectionPad.cpp | 390 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ReplicationPadding.cpp | 296 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ReplicationPadding.cpp | 328 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Resize.cpp | 62 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Resize.h | 16 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Resize.h | 147 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/SegmentReduce.cpp | 206 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/SegmentReduce.cpp | 420 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/SegmentReduce.cpp | 465 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/SparseTensorUtils.cpp | 95 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/SparseTensorUtils.h | 55 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/SparseTensorUtils.h | 67 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/SpectralOps.cpp | 214 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/SpectralOps.cpp | 249 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/SpectralOps.cpp | 441 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/SpectralOps.cpp | 451 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/SpectralOps.cpp | 710 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/SpectralOps.cpp | 733 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorAdvancedIndexing.cpp | 438 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorAdvancedIndexing.cpp | 1278 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorAdvancedIndexing.cpp | 1291 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorAdvancedIndexing.cpp | 1440 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorAdvancedIndexing.cpp | 1451 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorAdvancedIndexing.cpp | 1688 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorAdvancedIndexing.cpp | 1739 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorAdvancedIndexing.cpp | 1792 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorAdvancedIndexing.cpp | 2580 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorCompare.cpp | 346 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorCompare.cpp | 347 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorCompare.cpp | 791 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorConversions.cpp | 258 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorConversions.cpp | 380 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorConversions.cpp | 615 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorConversions.cpp | 623 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorConversions.cpp | 628 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorConversions.cpp | 633 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorConversions.cpp | 641 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorConversions.cpp | 647 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorFactories.cpp | 389 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorFactories.cpp | 495 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorFactories.cpp | 1775 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorShape.cpp | 415 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorShape.cpp | 422 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorShape.cpp | 445 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorShape.cpp | 701 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorShape.cpp | 1344 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorShape.cpp | 1435 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorShape.cpp | 1851 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorShape.cpp | 2642 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorShape.cpp | 3019 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorShape.cpp | 3059 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorShape.cpp | 3325 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorShape.cpp | 3929 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/TensorShape.cpp | 4538 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/Unique.cpp | 157 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/UpSample.h | 266 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/UpSample.h | 309 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ao_sparse/quantized/cpu/qlinear.cpp | 37 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ao_sparse/quantized/cpu/qlinear.cpp | 130 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/ao_sparse/quantized/cpu/qnnpack_utils.h | 7 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/AdaptiveMaxPoolKernel.cpp | 421 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/AdaptiveMaxPoolKernel.cpp | 918 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/BinaryOpsKernel.cpp | 208 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/CopyKernel.cpp | 221 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/CopyKernel.cpp | 224 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/DepthwiseConvKernel.cpp | 186 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/DepthwiseConvKernel.cpp | 401 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/IndexKernel.cpp | 137 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/IndexKernel.cpp | 184 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/LogSoftmaxKernelImpl.h | 100 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/MaxPoolKernel.cpp | 33 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/MaxPoolKernel.cpp | 581 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/ScatterGatherKernel.cpp | 1011 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/UnaryOpsKernel.cpp | 725 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/UpSampleKernelAVXAntialias.h | 19 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/UpSampleKernelAVXAntialias.h | 178 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/UpSampleKernelAVXAntialias.h | 254 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/UpSampleKernelAVXAntialias.h | 1197 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/batch_norm_kernel.cpp | 861 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/batch_norm_kernel.cpp | 883 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cpu/batch_norm_kernel.cpp | 1063 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/Blas.cpp | 168 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/Blas.cpp | 196 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/Blas.cpp | 197 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/Blas.cpp | 289 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/Blas.cpp | 407 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/GroupedBlas.cpp | 375 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/ScaledBlas.cpp | 151 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/ScaledBlas.cpp | 160 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/Sort.cpp | 128 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/SpectralOps.cpp | 431 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/cuBlasCommonArgs.h | 12 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/jit_utils.cpp | 24 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/jit_utils.cpp | 201 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/jit_utils.cpp | 662 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/jit_utils.cpp | 758 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/jit_utils.cpp | 872 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/jit_utils.cpp | 937 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/jit_utils.cpp | 938 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/jit_utils.cpp | 1579 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/jit_utils.cpp | 1583 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/jit_utils.cpp | 1676 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/jit_utils.cpp | 1699 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebra.cpp | 622 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebra.cpp | 652 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebra.cpp | 653 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebra.cpp | 679 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebra.cpp | 973 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebra.cpp | 1129 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebra.cpp | 1163 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebra.cpp | 1406 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebra.cpp | 1415 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebra.cpp | 1491 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebraLib.cpp | 388 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebraLib.cpp | 464 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebraLib.cpp | 688 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/BatchNorm.cpp | 113 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/BatchNorm.cpp | 179 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/BatchNorm.cpp | 181 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/BatchNorm.cpp | 336 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/BatchNorm.cpp | 357 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/BatchNorm.cpp | 359 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/ConvShared.cpp | 99 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/ConvShared.h | 41 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/Conv_v7.cpp | 107 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/Conv_v7.cpp | 138 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/Conv_v7.cpp | 250 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/Conv_v7.cpp | 744 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/Conv_v8.cpp | 46 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/Conv_v8.cpp | 158 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/Conv_v8.cpp | 186 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/Conv_v8.cpp | 1040 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/GridSampler.cpp | 53 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/GridSampler.cpp | 77 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 459 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 465 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 528 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 1144 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 1148 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 1514 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 1520 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 1796 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 1823 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 1908 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 1974 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 2056 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 2260 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/cudnn/RNN.cpp | 2577 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/hip/ck_gemm_template.h | 74 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/metal/MetalTensorImpl.h | 28 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/miopen/BatchNorm_miopen.cpp | 15 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/miopen/BatchNorm_miopen.cpp | 194 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/miopen/BatchNorm_miopen.cpp | 196 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/miopen/Conv_miopen.cpp | 24 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/miopen/Conv_miopen.cpp | 748 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/miopen/Conv_miopen.cpp | 770 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/miopen/LossCTC_miopen.cpp | 18 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/miopen/RNN_miopen.cpp | 146 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkl/SparseBlasImpl.cpp | 375 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkl/SparseBlasImpl.cpp | 427 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkl/SparseBlasImpl.cpp | 433 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkl/SparseBlasImpl.cpp | 443 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkl/SparseBlasImpl.cpp | 451 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/Conv.cpp | 423 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/ConvPrepack.cpp | 60 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/MKLDNNCommon.cpp | 99 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/Normalization.cpp | 159 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/Normalization.cpp | 194 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/RNN.cpp | 448 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/TensorFactories.cpp | 20 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/xpu/ScaledBlas.cpp | 213 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/xpu/ScaledBlas.cpp | 350 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/xpu/ScaledBlas.cpp | 396 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/xpu/detail/Attention.cpp | 463 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/xpu/detail/Attention.cpp | 634 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/xpu/detail/Attention.cpp | 646 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/xpu/detail/Attention.cpp | 668 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/xpu/detail/Attention.cpp | 691 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/xpu/detail/DnnlExt.h | 247 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/xpu/detail/DnnlExt.h | 268 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mkldnn/xpu/detail/QMatmul.cpp | 545 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mps/OperationUtils.h | 349 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mps/OperationUtils.h | 758 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mps/OperationUtils.h | 797 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/mps/kernels/SortMerge.h | 516 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorBinaryOps.cpp | 109 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorFactories.cpp | 143 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorMath.cpp | 34 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorMath.cpp | 250 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorMath.cpp | 255 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorMath.cpp | 269 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorMath.cpp | 527 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorMath.cpp | 949 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorMath.cpp | 967 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorMatmul.cpp | 57 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorMatmul.cpp | 214 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorMatmul.cpp | 310 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorMatmul.cpp | 314 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorTransformerFunctions.cpp | 27 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorTransformerFunctions.cpp | 226 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorTransformerFunctions.cpp | 234 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorTransformerFunctions.cpp | 255 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorTransformerFunctions.cpp | 308 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorUtils.h | 50 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/NestedTensorUtils.h | 332 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/cuda/NestedTensorTransformerFunctions.cpp | 190 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/nested/cuda/NestedTensorTransformerUtils.cpp | 143 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/QTensor.cpp | 200 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/TensorCompare.cpp | 46 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/ACLUtils.cpp | 86 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/AdaptiveAveragePooling.cpp | 122 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/Pooling.cpp | 120 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/TensorShape.cpp | 166 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/fbgemm_utils.h | 314 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/kernels/QuantizedOpKernels.cpp | 1017 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/kernels/QuantizedOpKernels.cpp | 1324 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/kernels/QuantizedOpKernels.cpp | 1364 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/kernels/QuantizedOpKernels.cpp | 1367 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/kernels/QuantizedOpKernels.cpp | 1847 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/kernels/QuantizedOpKernels.cpp | 1855 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/kernels/QuantizedOpKernels.cpp | 2047 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/kernels/QuantizedOpKernels.cpp | 3869 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/kernels/QuantizedOpKernels.cpp | 3878 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qconv_dynamic.cpp | 61 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qconv_dynamic.cpp | 118 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qconv_dynamic.cpp | 168 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qconv_prepack.cpp | 112 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qconv_unpack_impl.cpp | 35 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qembeddingbag_prepack.cpp | 419 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qlinear.cpp | 66 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qlinear.cpp | 159 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qlinear.cpp | 462 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qlinear_dynamic.cpp | 49 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qlinear_dynamic.cpp | 109 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qlinear_dynamic.cpp | 152 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qlinear_dynamic.cpp | 276 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qlinear_prepack.cpp | 77 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qmul.cpp | 443 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qnnpack/src/convolution.c | 369 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cpu/qnormalization.cpp | 133 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/BinaryOps.cpp | 62 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/quantized/cudnn/BinaryOps.cpp | 67 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/BinaryOps.cpp | 92 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Conv.cpp | 26 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Conv.cpp | 41 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/quantized/cudnn/Conv.cpp | 54 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Conv.cpp | 297 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Conv.cpp | 299 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Conv.cpp | 377 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/ConvPrepack.cpp | 30 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/ConvPrepack.cpp | 71 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/ConvPrepack.cpp | 78 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/ConvPrepack.cpp | 80 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/ConvPrepack.cpp | 94 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Linear.cpp | 27 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Linear.cpp | 35 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/quantized/cudnn/Linear.cpp | 80 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Linear.cpp | 200 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Linear.cpp | 212 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Linear.cpp | 350 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Pooling.cpp | 26 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Pooling.cpp | 57 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Pooling.cpp | 60 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/Pooling.cpp | 82 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/utils.h | 169 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/utils.h | 196 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/utils.h | 266 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/utils.h | 275 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/cudnn/utils.h | 284 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/library.cpp | 28 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/quantized/library.cpp | 210 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseBlas.cpp | 40 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseCsrTensor.cpp | 355 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseCsrTensor.cpp | 584 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseCsrTensor.cpp | 689 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseCsrTensorMath.cpp | 209 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseCsrTensorMath.cpp | 374 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseCsrTensorMath.cpp | 378 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseCsrTensorMath.cpp | 598 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseCsrTensorMath.cpp | 770 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseCsrTensorMath.cpp | 777 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseCsrTensorMath.cpp | 1247 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseCsrTensorMath.cpp | 1453 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseCsrTensorMath.h | 12 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseMatMul.cpp | 176 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseMatMul.cpp | 244 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensor.cpp | 222 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensor.cpp | 244 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensor.cpp | 591 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensor.cpp | 655 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensorMath.cpp | 165 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensorMath.cpp | 408 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensorMath.cpp | 520 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensorMath.cpp | 545 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensorMath.cpp | 560 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensorMath.cpp | 752 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensorMath.cpp | 775 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensorMath.cpp | 1242 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensorMath.cpp | 1407 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/SparseTensorMath.cpp | 1711 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/cuda/SparseBlas.cpp | 101 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/cuda/SparseBlasImpl.cpp | 562 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/cuda/SparseBlasImpl.cpp | 812 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/cuda/SparseBlasImpl.cpp | 845 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/cuda/SparseBlasImpl.cpp | 854 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/cuda/SparseBlasImpl.cpp | 860 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/cuda/SparseBlasImpl.cpp | 866 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/cuda/SparseBlasImpl.cpp | 914 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/cuda/SparseBlasImpl.cpp | 1200 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/sparse/cuda/SparseCUDABlas.cpp | 134 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/attention.cpp | 209 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/attention.cpp | 210 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/attention.cpp | 228 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/attention.cpp | 394 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/attention.cpp | 419 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/attention.cpp | 699 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/cuda/flash_attn/flash_api.cpp | 967 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/cuda/flash_attn/flash_api.cpp | 1184 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/cuda/mem_eff_attention/gemm/mma_from_smem.h | 1550 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/cuda/mem_eff_attention/gemm/mma_from_smem.h | 1773 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/cuda/mem_eff_attention/gemm/mma_from_smem.h | 1912 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/cuda/mem_eff_attention/gemm_kernel_utils.h | 101 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/cuda/mem_eff_attention/kernel_backward.h | 265 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/cuda/mem_eff_attention/kernel_backward.h | 267 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/cuda/mem_eff_attention/kernel_backward.h | 1910 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/cuda/mem_eff_attention/kernel_backward.h | 1945 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/cuda/sdp_utils.cpp | 188 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/transformers/cuda/sdp_utils.cpp | 420 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/transformers/cuda/sdp_utils.cpp | 480 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/utils/Factory.h | 11 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/vulkan/VulkanOpaqueTensorImpl.h | 47 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/vulkan/api/Context.h | 64 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/vulkan/api/Pipeline.cpp | 103 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/vulkan/api/QueryPool.cpp | 22 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/vulkan/api/Resource.h | 502 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/vulkan/api/Runtime.cpp | 240 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/vulkan/ops/Mm.cpp | 769 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/xnnpack/Convolution.cpp | 25 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/xnnpack/Convolution.cpp | 72 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/xnnpack/Linear.cpp | 14 | ⚪ INFO | TODO comment found |
| aten/src/ATen/native/xnnpack/Linear.cpp | 39 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/codegen.py | 225 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_bind.cpp | 105 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_bind.cpp | 123 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_bind.cpp | 137 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_bind.cpp | 148 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_bind.cpp | 156 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_bind.cpp | 200 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_model_loader.cpp | 255 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 29 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 39 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 49 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 59 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 69 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 79 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 89 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 99 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 109 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 123 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 137 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 147 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 157 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 167 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 177 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 187 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 197 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 207 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 221 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 231 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 241 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 255 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 265 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 275 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 285 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 295 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 305 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 319 | ⚪ INFO | TODO comment found |
| aten/src/ATen/nnapi/nnapi_wrapper.cpp | 329 | ⚪ INFO | TODO comment found |
| aten/src/ATen/quantized/QTensorImpl.h | 33 | ⚪ INFO | TODO comment found |
| aten/src/ATen/quantized/Quantizer.cpp | 120 | ⚪ INFO | TODO comment found |
| aten/src/ATen/templates/CompositeViewCopyKernels.cpp | 19 | ⚪ INFO | TODO comment found |
| aten/src/ATen/templates/CompositeViewCopyKernels.cpp | 50 | ⚪ INFO | TODO comment found |
| aten/src/ATen/templates/FunctionalInverses.h | 16 | ⚪ INFO | TODO comment found |
| aten/src/ATen/templates/Functions.cpp | 10 | ⚪ INFO | TODO comment found |
| aten/src/ATen/templates/TensorBody.h | 198 | ⚪ INFO | TODO comment found |
| aten/src/ATen/templates/TensorBody.h | 239 | ⚪ INFO | TODO comment found |
| aten/src/ATen/templates/TensorBody.h | 341 | ⚪ INFO | TODO comment found |
| aten/src/ATen/templates/TensorBody.h | 543 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/basic.cpp | 80 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/memory_format_test.cpp | 22 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/memory_format_test.cpp | 109 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/memory_format_test.cpp | 189 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/stride_properties_test.cpp | 7 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/vulkan_api_test.cpp | 12 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/vulkan_api_test.cpp | 1602 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/vulkan_api_test.cpp | 2039 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/vulkan_quantized_api_test.cpp | 422 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/vulkan_quantized_api_test.cpp | 502 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/vulkan_quantized_api_test.cpp | 529 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/vulkan_quantized_api_test.cpp | 556 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/vulkan_quantized_api_test.cpp | 700 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/vulkan_quantized_api_test.cpp | 777 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/vulkan_quantized_api_test.cpp | 808 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/vulkan_quantized_api_test.cpp | 839 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/vulkan_quantized_api_test.cpp | 1460 | ⚪ INFO | TODO comment found |
| aten/src/ATen/test/xpu_caching_host_allocator_test.cpp | 21 | ⚪ INFO | TODO comment found |
| benchmarks/distributed/bench_nvshmem_tile_reduce.py | 42 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/common.py | 430 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/common.py | 521 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/common.py | 859 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/common.py | 960 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/common.py | 1753 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/common.py | 2715 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/common.py | 4285 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/genai_layers/kernels.py | 459 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/huggingface.py | 200 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/huggingface.py | 593 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/huggingface.py | 607 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/huggingface.py | 611 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/huggingface.py | 615 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/launch_compile_op_numerics.py | 691 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/parse_logs.py | 77 | ⚪ INFO | TODO comment found |
| benchmarks/dynamo/parse_logs.py | 153 | ⚪ INFO | TODO comment found |
| benchmarks/fastrnns/bench.py | 321 | ⚪ INFO | TODO comment found |
| benchmarks/instruction_counts/applications/ci.py | 57 | ⚪ INFO | TODO comment found |
| benchmarks/instruction_counts/definitions/standard.py | 235 | ⚪ INFO | TODO comment found |
| benchmarks/operator_benchmark/benchmark_core.py | 200 | ⚪ INFO | TODO comment found |
| benchmarks/operator_benchmark/benchmark_core.py | 430 | ⚪ INFO | TODO comment found |
| benchmarks/operator_benchmark/benchmark_core.py | 500 | ⚪ INFO | TODO comment found |
| benchmarks/operator_benchmark/benchmark_pytorch.py | 249 | ⚪ INFO | TODO comment found |
| benchmarks/operator_benchmark/benchmark_utils.py | 44 | ⚪ INFO | TODO comment found |
| benchmarks/operator_benchmark/pt/bmm_test.py | 146 | ⚪ INFO | TODO comment found |
| benchmarks/operator_benchmark/pt/qarithmetic_test.py | 37 | ⚪ INFO | TODO comment found |
| benchmarks/operator_benchmark/pt/qcomparators_test.py | 30 | ⚪ INFO | TODO comment found |
| benchmarks/operator_benchmark/pt/qinterpolate_test.py | 21 | ⚪ INFO | TODO comment found |
| benchmarks/operator_benchmark/pt/qunary_test.py | 45 | ⚪ INFO | TODO comment found |
| benchmarks/tensorexpr/__main__.py | 315 | ⚪ INFO | TODO comment found |
| benchmarks/tensorexpr/__main__.py | 324 | ⚪ INFO | TODO comment found |
| benchmarks/tensorexpr/broadcast.py | 160 | ⚪ INFO | TODO comment found |
| benchmarks/transformer/score_mod.py | 386 | ⚪ INFO | TODO comment found |
| c10/core/CPUAllocator.cpp | 10 | ⚪ INFO | TODO comment found |
| c10/core/CPUAllocator.cpp | 82 | ⚪ INFO | TODO comment found |
| c10/core/CPUAllocator.h | 12 | ⚪ INFO | TODO comment found |
| c10/core/DeviceGuard.h | 51 | ⚪ INFO | TODO comment found |
| c10/core/DispatchKey.h | 180 | ⚪ INFO | TODO comment found |
| c10/core/DispatchKey.h | 184 | ⚪ INFO | TODO comment found |
| c10/core/DispatchKey.h | 185 | ⚪ INFO | TODO comment found |
| c10/core/DispatchKey.h | 201 | ⚪ INFO | TODO comment found |
| c10/core/DispatchKey.h | 331 | ⚪ INFO | TODO comment found |
| c10/core/Scalar.h | 142 | ⚪ INFO | TODO comment found |
| c10/core/ScalarType.h | 215 | ⚪ INFO | TODO comment found |
| c10/core/Storage.h | 108 | ⚪ INFO | TODO comment found |
| c10/core/StorageImpl.h | 125 | ⚪ INFO | TODO comment found |
| c10/core/SymBool.h | 94 | ⚪ INFO | TODO comment found |
| c10/core/SymFloat.h | 112 | ⚪ INFO | TODO comment found |
| c10/core/SymIntArrayRef.h | 18 | ⚪ INFO | TODO comment found |
| c10/core/SymbolicShapeMeta.h | 176 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.cpp | 145 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.cpp | 161 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.cpp | 182 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.cpp | 462 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.cpp | 470 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.cpp | 554 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.cpp | 680 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.cpp | 744 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.cpp | 772 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.cpp | 841 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.cpp | 981 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.cpp | 1021 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.h | 391 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.h | 545 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.h | 750 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.h | 939 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.h | 1011 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.h | 1012 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.h | 1019 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.h | 1020 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.h | 1265 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.h | 1332 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.h | 1873 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.h | 1974 | ⚪ INFO | TODO comment found |
| c10/core/TensorImpl.h | 2186 | ⚪ INFO | TODO comment found |
| c10/core/TensorOptions.h | 204 | ⚪ INFO | TODO comment found |
| c10/core/TensorOptions.h | 393 | ⚪ INFO | TODO comment found |
| c10/core/TensorOptions.h | 535 | ⚪ INFO | TODO comment found |
| c10/core/UndefinedTensorImpl.cpp | 10 | ⚪ INFO | TODO comment found |
| c10/core/impl/InlineDeviceGuard.h | 253 | ⚪ INFO | TODO comment found |
| c10/core/impl/InlineStreamGuard.h | 72 | ⚪ INFO | TODO comment found |
| c10/core/impl/SizesAndStrides.h | 25 | ⚪ INFO | TODO comment found |
| c10/core/impl/alloc_cpu.cpp | 21 | ⚪ INFO | TODO comment found |
| c10/cuda/CUDACachingAllocator.cpp | 1166 | ⚪ INFO | TODO comment found |
| c10/cuda/CUDACachingAllocator.h | 36 | ⚪ INFO | TODO comment found |
| c10/cuda/CUDADeviceAssertionHost.cpp | 232 | ⚪ INFO | TODO comment found |
| c10/cuda/CUDAMallocAsyncAllocator.cpp | 351 | ⚪ INFO | TODO comment found |
| c10/metal/random.h | 87 | ⚪ INFO | TODO comment found |
| c10/metal/special_math.h | 297 | ⚪ INFO | TODO comment found |
| c10/metal/special_math.h | 2045 | ⚪ INFO | TODO comment found |
| c10/metal/utils.h | 176 | ⚪ INFO | TODO comment found |
| c10/test/util/small_vector_test.cpp | 622 | 🟡 MEDIUM | FIXME comment indicating known issue |
| c10/test/util/small_vector_test.cpp | 695 | 🟡 MEDIUM | FIXME comment indicating known issue |
| c10/test/util/typeid_test.cpp | 121 | ⚪ INFO | TODO comment found |
| c10/util/ApproximateClock.h | 89 | ⚪ INFO | TODO comment found |
| c10/util/Backtrace.cpp | 352 | ⚪ INFO | TODO comment found |
| c10/util/Exception.cpp | 105 | ⚪ INFO | TODO comment found |
| c10/util/Exception.h | 670 | ⚪ INFO | TODO comment found |
| c10/util/MathConstants.h | 13 | ⚪ INFO | TODO comment found |
| c10/util/SmallVector.h | 150 | 🟡 MEDIUM | FIXME comment indicating known issue |
| c10/util/SmallVector.h | 765 | 🟡 MEDIUM | FIXME comment indicating known issue |
| c10/util/SmallVector.h | 1095 | 🟡 MEDIUM | FIXME comment indicating known issue |
| c10/util/SmallVector.h | 1158 | 🟡 MEDIUM | FIXME comment indicating known issue |
| c10/util/complex_utils.h | 20 | ⚪ INFO | TODO comment found |
| c10/util/flags_use_no_gflags.cpp | 109 | ⚪ INFO | TODO comment found |
| c10/util/hash.h | 58 | ⚪ INFO | TODO comment found |
| c10/util/int128.h | 143 | ⚪ INFO | TODO comment found |
| c10/util/llvmMathExtras.h | 621 | ⚪ INFO | TODO comment found |
| c10/util/signal_handler.cpp | 41 | ⚪ INFO | TODO comment found |
| c10/util/signal_handler.cpp | 403 | ⚪ INFO | TODO comment found |
| c10/util/typeid.h | 36 | ⚪ INFO | TODO comment found |
| c10/xpu/XPUCachingAllocator.cpp | 1389 | ⚪ INFO | TODO comment found |
| docs/cpp/source/conf.py | 132 | ⚪ INFO | TODO comment found |
| docs/cpp/source/conf.py | 135 | ⚪ INFO | TODO comment found |
| docs/source/conf.py | 127 | ⚪ INFO | TODO comment found |
| docs/source/conf.py | 224 | ⚪ INFO | TODO comment found |
| docs/source/conf.py | 1763 | ⚪ INFO | TODO comment found |
| functorch/benchmarks/per_sample_grads.py | 93 | ⚪ INFO | TODO comment found |
| functorch/dim/__init__.py | 543 | ⚪ INFO | TODO comment found |
| functorch/docs/source/conf.py | 103 | ⚪ INFO | TODO comment found |
| functorch/docs/source/conf.py | 106 | ⚪ INFO | TODO comment found |
| functorch/docs/source/conf.py | 111 | ⚪ INFO | TODO comment found |
| functorch/docs/source/tutorials/_src/plot_jacobians_and_hessians.py | 156 | ⚪ INFO | TODO comment found |
| functorch/examples/maml_omniglot/maml-omniglot-higher.py | 132 | ⚪ INFO | TODO comment found |
| functorch/examples/maml_omniglot/maml-omniglot-higher.py | 212 | ⚪ INFO | TODO comment found |
| functorch/examples/maml_omniglot/maml-omniglot-ptonly.py | 135 | ⚪ INFO | TODO comment found |
| functorch/examples/maml_omniglot/maml-omniglot-ptonly.py | 208 | ⚪ INFO | TODO comment found |
| functorch/examples/maml_omniglot/maml-omniglot-transforms.py | 206 | ⚪ INFO | TODO comment found |
| functorch/examples/maml_omniglot/support/omniglot_loaders.py | 202 | ⚪ INFO | TODO comment found |
| functorch/examples/maml_regression/evjang_transforms.py | 43 | ⚪ INFO | TODO comment found |
| functorch/examples/maml_regression/evjang_transforms_module.py | 38 | ⚪ INFO | TODO comment found |
| mypy_plugins/sympy_mypy_plugin.py | 8 | ⚪ INFO | TODO comment found |
| test/ao/sparsity/test_kernels.py | 29 | ⚪ INFO | TODO comment found |
| test/ao/sparsity/test_parametrization.py | 146 | ⚪ INFO | TODO comment found |
| test/autograd/test_functional.py | 25 | ⚪ INFO | TODO comment found |
| test/conftest.py | 202 | ⚪ INFO | TODO comment found |
| test/cpp/api/autograd.cpp | 1390 | ⚪ INFO | TODO comment found |
| test/cpp/api/grad_mode.cpp | 60 | ⚪ INFO | TODO comment found |
| test/cpp/api/inference_mode.cpp | 348 | ⚪ INFO | TODO comment found |
| test/cpp/api/jit.cpp | 117 | ⚪ INFO | TODO comment found |
| test/cpp/api/modulelist.cpp | 44 | ⚪ INFO | TODO comment found |
| test/cpp/api/rnn.cpp | 564 | ⚪ INFO | TODO comment found |
| test/cpp/api/rnn.cpp | 628 | ⚪ INFO | TODO comment found |
| test/cpp/api/rnn.cpp | 691 | ⚪ INFO | TODO comment found |
| test/cpp/api/sequential.cpp | 60 | ⚪ INFO | TODO comment found |
| test/cpp/api/support.h | 116 | ⚪ INFO | TODO comment found |
| test/cpp/api/tensor_options_cuda.cpp | 12 | ⚪ INFO | TODO comment found |
| test/cpp/c10d/ProcessGroupNCCLErrorsTest.cpp | 376 | ⚪ INFO | TODO comment found |
| test/cpp/jit/test_argument_spec.cpp | 108 | ⚪ INFO | TODO comment found |
| test/cpp/jit/test_autodiff.cpp | 131 | ⚪ INFO | TODO comment found |
| test/cpp/jit/test_interpreter.cpp | 97 | ⚪ INFO | TODO comment found |
| test/cpp/jit/test_interpreter.cpp | 113 | ⚪ INFO | TODO comment found |
| test/cpp/jit/test_misc.cpp | 113 | ⚪ INFO | TODO comment found |
| test/cpp/jit/test_misc.cpp | 447 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/cpp/jit/test_misc.cpp | 3086 | ⚪ INFO | TODO comment found |
| test/cpp/jit/test_save_load.cpp | 52 | ⚪ INFO | TODO comment found |
| test/cpp/jit/torch_python_test.cpp | 37 | ⚪ INFO | TODO comment found |
| test/cpp/jit/torch_python_test.cpp | 81 | ⚪ INFO | TODO comment found |
| test/cpp/lazy/test_lazy_ops.cpp | 24 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/cpp_extensions/libtorch_agn_2_10_extension/test_version_compatibility.py | 34 | ⚪ INFO | TODO comment found |
| test/cpp_extensions/maia_extension.cpp | 79 | ⚪ INFO | TODO comment found |
| test/cpp_extensions/open_registration_extension/torch_openreg/csrc/runtime/OpenRegDeviceAllocator.cpp | 262 | ⚪ INFO | TODO comment found |
| test/cpp_extensions/open_registration_extension/torch_openreg/csrc/runtime/OpenRegDeviceAllocator.cpp | 269 | ⚪ INFO | TODO comment found |
| test/cpp_extensions/test_libtorch_agnostic.py | 251 | ⚪ INFO | TODO comment found |
| test/cpython/v3_13/mapping_tests.py | 248 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/cpython/v3_13/test_sys.py | 245 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/cpython/v3_13/test_sys.py | 1889 | ⚪ INFO | TODO comment found |
| test/cpython/v3_13/test_sys.py | 1890 | ⚪ INFO | TODO comment found |
| test/cpython/v3_13/test_sys.py | 1951 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/cpython/v3_13/test_with.py | 275 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/custom_operator/test_out_variant.py | 240 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/fsdp/test_fully_shard_init.py | 1374 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/fsdp/test_fully_shard_state_dict.py | 48 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_composability/test_2d_composability.py | 335 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_composability/test_2d_composability.py | 509 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_composability/test_2d_composability.py | 560 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_composability/test_2d_composability.py | 563 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_composability/test_2d_composability.py | 639 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_composability/test_2d_composability.py | 643 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_composability/test_2d_composability.py | 668 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_composability/test_2d_composability.py | 673 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_composability/test_2d_composability.py | 817 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_composability/test_2d_composability.py | 818 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_contract.py | 100 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/distributed/_composable/test_replicate_with_compiler.py | 245 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_replicate_with_compiler.py | 315 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_replicate_with_compiler.py | 359 | ⚪ INFO | TODO comment found |
| test/distributed/_composable/test_replicate_with_compiler.py | 444 | ⚪ INFO | TODO comment found |
| test/distributed/_shard/sharded_tensor/test_sharded_tensor.py | 2310 | ⚪ INFO | TODO comment found |
| test/distributed/_tools/test_sac_ilp.py | 87 | ⚪ INFO | TODO comment found |
| test/distributed/checkpoint/e2e/test_e2e_save_and_load.py | 199 | ⚪ INFO | TODO comment found |
| test/distributed/checkpoint/e2e/test_e2e_save_and_load.py | 219 | ⚪ INFO | TODO comment found |
| test/distributed/checkpoint/e2e/test_fine_tuning.py | 119 | ⚪ INFO | TODO comment found |
| test/distributed/checkpoint/e2e/test_fsdp_ep.py | 75 | ⚪ INFO | TODO comment found |
| test/distributed/checkpoint/test_dtensor_resharding.py | 602 | ⚪ INFO | TODO comment found |
| test/distributed/checkpoint/test_fsdp_tp_checkpoint_conversion.py | 25 | ⚪ INFO | TODO comment found |
| test/distributed/checkpoint/test_state_dict.py | 161 | ⚪ INFO | TODO comment found |
| test/distributed/checkpoint/test_state_dict.py | 188 | ⚪ INFO | TODO comment found |
| test/distributed/checkpoint/test_state_dict.py | 1078 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_distributed_checkpoint.py | 110 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_checkpoint.py | 132 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_checkpoint.py | 316 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_clip_grad_norm.py | 133 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_clip_grad_norm.py | 218 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_clip_grad_norm.py | 223 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_hybrid_shard.py | 287 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_meta.py | 403 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_misc.py | 689 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_misc.py | 771 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_misc.py | 889 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_mixed_precision.py | 585 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_state_dict.py | 806 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_state_dict.py | 986 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_unshard_params.py | 677 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_fsdp_use_orig_params.py | 988 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_hsdp_dtensor_state_dict.py | 50 | ⚪ INFO | TODO comment found |
| test/distributed/fsdp/test_wrap.py | 180 | ⚪ INFO | TODO comment found |
| test/distributed/optim/test_zero_redundancy_optimizer.py | 1008 | ⚪ INFO | TODO comment found |
| test/distributed/pipelining/model_registry.py | 168 | ⚪ INFO | TODO comment found |
| test/distributed/pipelining/model_registry.py | 230 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/debug/test_debug_mode.py | 1374 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/parallel/test_tp_examples.py | 189 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_attention.py | 746 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_attention.py | 779 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_convolution_ops.py | 119 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_dtensor.py | 690 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_dtensor_compile.py | 1944 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_dtensor_compile.py | 1952 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_dtensor_compile.py | 2848 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_dtensor_compile.py | 2896 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_dtensor_dispatch_overhead.py | 76 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_dtensor_ops.py | 177 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_dtensor_ops.py | 209 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_dtensor_ops.py | 414 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_dtensor_ops.py | 548 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_math_ops.py | 161 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_math_ops.py | 188 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_math_ops.py | 383 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_math_ops.py | 1057 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_matrix_ops.py | 698 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_matrix_ops.py | 755 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_matrix_ops.py | 910 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_matrix_ops.py | 967 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_matrix_ops.py | 1043 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_optimizers.py | 607 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_pointwise_ops.py | 127 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_random_ops.py | 501 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_redistribute.py | 747 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_utils.py | 1270 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_utils.py | 1550 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_utils.py | 1625 | ⚪ INFO | TODO comment found |
| test/distributed/tensor/test_view_ops.py | 598 | ⚪ INFO | TODO comment found |
| test/distributed/test_aten_comm_compute_reordering.py | 105 | ⚪ INFO | TODO comment found |
| test/distributed/test_aten_comm_compute_reordering.py | 343 | ⚪ INFO | TODO comment found |
| test/distributed/test_aten_comm_compute_reordering.py | 683 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_common.py | 348 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_common.py | 2243 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_common.py | 2264 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_common.py | 2295 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_gloo.py | 557 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_gloo.py | 1623 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/distributed/test_c10d_gloo.py | 3281 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_nccl.py | 483 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_nccl.py | 2358 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_nccl.py | 2723 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 172 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 192 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 205 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 221 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 237 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 242 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 281 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 321 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 403 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 490 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 497 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 504 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 511 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 797 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 803 | ⚪ INFO | TODO comment found |
| test/distributed/test_c10d_ucc.py | 958 | ⚪ INFO | TODO comment found |
| test/distributed/test_composability.py | 211 | ⚪ INFO | TODO comment found |
| test/distributed/test_compute_comm_reordering.py | 116 | ⚪ INFO | TODO comment found |
| test/distributed/test_compute_comm_reordering.py | 158 | ⚪ INFO | TODO comment found |
| test/distributed/test_compute_comm_reordering.py | 210 | ⚪ INFO | TODO comment found |
| test/distributed/test_compute_comm_reordering.py | 266 | ⚪ INFO | TODO comment found |
| test/distributed/test_compute_comm_reordering.py | 326 | ⚪ INFO | TODO comment found |
| test/distributed/test_compute_comm_reordering.py | 389 | ⚪ INFO | TODO comment found |
| test/distributed/test_device_mesh.py | 196 | ⚪ INFO | TODO comment found |
| test/distributed/test_dynamo_distributed.py | 1285 | ⚪ INFO | TODO comment found |
| test/distributed/test_nccl.py | 549 | ⚪ INFO | TODO comment found |
| test/distributed/test_nccl.py | 556 | ⚪ INFO | TODO comment found |
| test/distributed/test_nvshmem.py | 67 | ⚪ INFO | TODO comment found |
| test/distributed/test_nvshmem.py | 283 | ⚪ INFO | TODO comment found |
| test/distributed/test_nvshmem.py | 290 | ⚪ INFO | TODO comment found |
| test/distributed/test_nvshmem.py | 299 | ⚪ INFO | TODO comment found |
| test/distributed/test_nvshmem.py | 700 | ⚪ INFO | TODO comment found |
| test/distributed/test_nvshmem.py | 724 | ⚪ INFO | TODO comment found |
| test/distributed/test_nvshmem.py | 755 | ⚪ INFO | TODO comment found |
| test/distributed/test_shmem_triton.py | 286 | ⚪ INFO | TODO comment found |
| test/distributed/test_symmetric_memory.py | 1242 | ⚪ INFO | TODO comment found |
| test/distributed/test_symmetric_memory.py | 1275 | ⚪ INFO | TODO comment found |
| test/distributed/test_symmetric_memory.py | 1327 | ⚪ INFO | TODO comment found |
| test/distributions/test_distributions.py | 169 | ⚪ INFO | TODO comment found |
| test/distributions/test_distributions.py | 2566 | ⚪ INFO | TODO comment found |
| test/distributions/test_distributions.py | 2584 | ⚪ INFO | TODO comment found |
| test/distributions/test_distributions.py | 4075 | ⚪ INFO | TODO comment found |
| test/distributions/test_distributions.py | 4662 | ⚪ INFO | TODO comment found |
| test/distributions/test_distributions.py | 4779 | ⚪ INFO | TODO comment found |
| test/distributions/test_distributions.py | 6561 | ⚪ INFO | TODO comment found |
| test/dynamo/test_after_aot.py | 160 | ⚪ INFO | TODO comment found |
| test/dynamo/test_after_aot.py | 222 | ⚪ INFO | TODO comment found |
| test/dynamo/test_aot_autograd_cache.py | 886 | ⚪ INFO | TODO comment found |
| test/dynamo/test_aot_autograd_cache.py | 3668 | ⚪ INFO | TODO comment found |
| test/dynamo/test_base_hop.py | 33 | ⚪ INFO | TODO comment found |
| test/dynamo/test_dicts.py | 762 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/dynamo/test_exc.py | 313 | ⚪ INFO | TODO comment found |
| test/dynamo/test_export.py | 2230 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/dynamo/test_export.py | 2236 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/dynamo/test_export.py | 2265 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/dynamo/test_export.py | 2271 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/dynamo/test_export.py | 3483 | ⚪ INFO | TODO comment found |
| test/dynamo/test_export.py | 3620 | ⚪ INFO | TODO comment found |
| test/dynamo/test_getitem.py | 797 | ⚪ INFO | TODO comment found |
| test/dynamo/test_id.py | 264 | ⚪ INFO | TODO comment found |
| test/dynamo/test_list.py | 3 | ⚪ INFO | TODO comment found |
| test/dynamo/test_misc.py | 1280 | ⚪ INFO | TODO comment found |
| test/dynamo/test_misc.py | 1303 | ⚪ INFO | TODO comment found |
| test/dynamo/test_misc.py | 2928 | ⚪ INFO | TODO comment found |
| test/dynamo/test_pgo.py | 319 | ⚪ INFO | TODO comment found |
| test/dynamo/test_repros.py | 2155 | ⚪ INFO | TODO comment found |
| test/dynamo/test_repros.py | 3322 | ⚪ INFO | TODO comment found |
| test/dynamo/test_repros.py | 9544 | ⚪ INFO | TODO comment found |
| test/dynamo/test_sets.py | 3 | ⚪ INFO | TODO comment found |
| test/dynamo/test_structured_trace.py | 151 | ⚪ INFO | TODO comment found |
| test/dynamo/test_structured_trace.py | 686 | ⚪ INFO | TODO comment found |
| test/dynamo/test_structured_trace.py | 831 | ⚪ INFO | TODO comment found |
| test/dynamo/test_subclasses.py | 1955 | ⚪ INFO | TODO comment found |
| test/dynamo/test_subclasses.py | 3893 | ⚪ INFO | TODO comment found |
| test/dynamo/test_subclasses.py | 4294 | ⚪ INFO | TODO comment found |
| test/dynamo/test_subclasses.py | 4300 | ⚪ INFO | TODO comment found |
| test/dynamo/test_subgraphs.py | 454 | ⚪ INFO | TODO comment found |
| test/dynamo/test_torchrec.py | 88 | ⚪ INFO | TODO comment found |
| test/error_messages/storage.py | 79 | ⚪ INFO | TODO comment found |
| test/export/test_converter.py | 894 | ⚪ INFO | TODO comment found |
| test/export/test_converter.py | 1031 | ⚪ INFO | TODO comment found |
| test/export/test_converter.py | 1073 | ⚪ INFO | TODO comment found |
| test/export/test_converter.py | 1091 | ⚪ INFO | TODO comment found |
| test/export/test_converter.py | 1401 | ⚪ INFO | TODO comment found |
| test/export/test_converter.py | 1405 | ⚪ INFO | TODO comment found |
| test/export/test_export.py | 2559 | ⚪ INFO | TODO comment found |
| test/export/test_export.py | 6361 | ⚪ INFO | TODO comment found |
| test/export/test_export.py | 7312 | ⚪ INFO | TODO comment found |
| test/export/test_export.py | 8021 | ⚪ INFO | TODO comment found |
| test/export/test_export.py | 14582 | ⚪ INFO | TODO comment found |
| test/export/test_export.py | 17587 | ⚪ INFO | TODO comment found |
| test/export/test_export.py | 17588 | ⚪ INFO | TODO comment found |
| test/export/test_export.py | 18966 | ⚪ INFO | TODO comment found |
| test/export/test_export.py | 19055 | ⚪ INFO | TODO comment found |
| test/export/test_passes.py | 673 | ⚪ INFO | TODO comment found |
| test/export/test_serialize.py | 1201 | ⚪ INFO | TODO comment found |
| test/forward_backward_compatibility/check_forward_backward_compatibility.py | 132 | ⚪ INFO | TODO comment found |
| test/forward_backward_compatibility/check_forward_backward_compatibility.py | 144 | ⚪ INFO | TODO comment found |
| test/functorch/functorch_additional_op_db.py | 22 | ⚪ INFO | TODO comment found |
| test/functorch/functorch_additional_op_db.py | 192 | ⚪ INFO | TODO comment found |
| test/functorch/functorch_additional_op_db.py | 315 | ⚪ INFO | TODO comment found |
| test/functorch/functorch_additional_op_db.py | 375 | ⚪ INFO | TODO comment found |
| test/functorch/functorch_additional_op_db.py | 386 | ⚪ INFO | TODO comment found |
| test/functorch/functorch_additional_op_db.py | 394 | ⚪ INFO | TODO comment found |
| test/functorch/test_aotdispatch.py | 498 | ⚪ INFO | TODO comment found |
| test/functorch/test_aotdispatch.py | 2379 | ⚪ INFO | TODO comment found |
| test/functorch/test_aotdispatch.py | 2417 | ⚪ INFO | TODO comment found |
| test/functorch/test_aotdispatch.py | 2465 | ⚪ INFO | TODO comment found |
| test/functorch/test_aotdispatch.py | 4226 | ⚪ INFO | TODO comment found |
| test/functorch/test_aotdispatch.py | 12209 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 130 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 1662 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 1773 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 2091 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 2132 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 2171 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 3290 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 3330 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 4531 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 4532 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 4631 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 4632 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 4707 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 4708 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 5013 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 8290 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 8311 | ⚪ INFO | TODO comment found |
| test/functorch/test_control_flow.py | 8335 | ⚪ INFO | TODO comment found |
| test/functorch/test_eager_transforms.py | 747 | ⚪ INFO | TODO comment found |
| test/functorch/test_eager_transforms.py | 1453 | ⚪ INFO | TODO comment found |
| test/functorch/test_eager_transforms.py | 1811 | ⚪ INFO | TODO comment found |
| test/functorch/test_eager_transforms.py | 1853 | ⚪ INFO | TODO comment found |
| test/functorch/test_eager_transforms.py | 3635 | ⚪ INFO | TODO comment found |
| test/functorch/test_eager_transforms.py | 3702 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/functorch/test_eager_transforms.py | 4334 | ⚪ INFO | TODO comment found |
| test/functorch/test_eager_transforms.py | 4413 | ⚪ INFO | TODO comment found |
| test/functorch/test_eager_transforms.py | 4416 | ⚪ INFO | TODO comment found |
| test/functorch/test_eager_transforms.py | 5020 | ⚪ INFO | TODO comment found |
| test/functorch/test_memory_efficient_fusion.py | 50 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 159 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 601 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 1026 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 1066 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 1140 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 1221 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 1299 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 1335 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 1401 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 1510 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 1526 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 1621 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 1641 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 1795 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 2003 | ⚪ INFO | TODO comment found |
| test/functorch/test_ops.py | 2043 | ⚪ INFO | TODO comment found |
| test/functorch/test_vmap.py | 270 | ⚪ INFO | TODO comment found |
| test/functorch/test_vmap.py | 817 | ⚪ INFO | TODO comment found |
| test/functorch/test_vmap.py | 4107 | ⚪ INFO | TODO comment found |
| test/functorch/test_vmap.py | 4427 | ⚪ INFO | TODO comment found |
| test/functorch/test_vmap.py | 4497 | ⚪ INFO | TODO comment found |
| test/functorch/test_vmap.py | 6518 | ⚪ INFO | TODO comment found |
| test/fx/test_source_matcher_utils.py | 262 | ⚪ INFO | TODO comment found |
| test/fx/test_source_matcher_utils.py | 324 | ⚪ INFO | TODO comment found |
| test/fx/test_source_matcher_utils.py | 409 | ⚪ INFO | TODO comment found |
| test/fx/test_source_matcher_utils.py | 441 | ⚪ INFO | TODO comment found |
| test/higher_order_ops/test_local_map.py | 371 | ⚪ INFO | TODO comment found |
| test/higher_order_ops/test_local_map.py | 420 | ⚪ INFO | TODO comment found |
| test/higher_order_ops/test_local_map.py | 437 | ⚪ INFO | TODO comment found |
| test/higher_order_ops/test_local_map.py | 443 | ⚪ INFO | TODO comment found |
| test/higher_order_ops/test_local_map.py | 467 | ⚪ INFO | TODO comment found |
| test/higher_order_ops/test_local_map.py | 939 | ⚪ INFO | TODO comment found |
| test/inductor/extension_backends/triton/device_interface.py | 11 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor.py | 2695 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor.py | 3303 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor.py | 6727 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor.py | 9120 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor_arrayref.py | 193 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor_arrayref.py | 202 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/inductor/test_aot_inductor_arrayref.py | 206 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor_arrayref.py | 208 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor_arrayref.py | 219 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/inductor/test_aot_inductor_arrayref.py | 224 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor_arrayref.py | 240 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/inductor/test_aot_inductor_arrayref.py | 248 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/inductor/test_aot_inductor_arrayref.py | 278 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor_arrayref.py | 280 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor_arrayref.py | 284 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor_arrayref.py | 286 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor_arrayref.py | 288 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor_custom_ops.py | 599 | ⚪ INFO | TODO comment found |
| test/inductor/test_aot_inductor_package.py | 83 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/inductor/test_aot_inductor_utils.py | 113 | ⚪ INFO | TODO comment found |
| test/inductor/test_codecache.py | 2315 | ⚪ INFO | TODO comment found |
| test/inductor/test_codecache.py | 2953 | ⚪ INFO | TODO comment found |
| test/inductor/test_compiled_autograd.py | 283 | ⚪ INFO | TODO comment found |
| test/inductor/test_control_flow.py | 532 | ⚪ INFO | TODO comment found |
| test/inductor/test_control_flow.py | 2154 | ⚪ INFO | TODO comment found |
| test/inductor/test_cpu_repro.py | 1359 | ⚪ INFO | TODO comment found |
| test/inductor/test_cpu_select_algorithm.py | 685 | ⚪ INFO | TODO comment found |
| test/inductor/test_cpu_select_algorithm.py | 2768 | ⚪ INFO | TODO comment found |
| test/inductor/test_cuda_repro.py | 652 | ⚪ INFO | TODO comment found |
| test/inductor/test_cuda_repro.py | 732 | ⚪ INFO | TODO comment found |
| test/inductor/test_cutlass_backend.py | 1271 | ⚪ INFO | TODO comment found |
| test/inductor/test_cutlass_backend.py | 1420 | ⚪ INFO | TODO comment found |
| test/inductor/test_flex_attention.py | 345 | ⚪ INFO | TODO comment found |
| test/inductor/test_flex_attention.py | 1874 | ⚪ INFO | TODO comment found |
| test/inductor/test_flex_attention.py | 1882 | ⚪ INFO | TODO comment found |
| test/inductor/test_flex_attention.py | 3402 | ⚪ INFO | TODO comment found |
| test/inductor/test_flex_decoding.py | 102 | ⚪ INFO | TODO comment found |
| test/inductor/test_foreach.py | 1080 | ⚪ INFO | TODO comment found |
| test/inductor/test_fused_attention.py | 84 | ⚪ INFO | TODO comment found |
| test/inductor/test_gpu_cpp_wrapper.py | 949 | ⚪ INFO | TODO comment found |
| test/inductor/test_inductor_freezing.py | 695 | ⚪ INFO | TODO comment found |
| test/inductor/test_kernel_benchmark.py | 172 | ⚪ INFO | TODO comment found |
| test/inductor/test_max_autotune_blackwell.py | 107 | ⚪ INFO | TODO comment found |
| test/inductor/test_mix_order_reduction.py | 167 | ⚪ INFO | TODO comment found |
| test/inductor/test_mps_basic.py | 36 | ⚪ INFO | TODO comment found |
| test/inductor/test_multi_kernel.py | 112 | ⚪ INFO | TODO comment found |
| test/inductor/test_multi_kernel.py | 142 | ⚪ INFO | TODO comment found |
| test/inductor/test_pad_mm.py | 144 | ⚪ INFO | TODO comment found |
| test/inductor/test_perf.py | 481 | ⚪ INFO | TODO comment found |
| test/inductor/test_perf.py | 598 | ⚪ INFO | TODO comment found |
| test/inductor/test_perf.py | 1348 | ⚪ INFO | TODO comment found |
| test/inductor/test_perf.py | 1356 | ⚪ INFO | TODO comment found |
| test/inductor/test_perf.py | 1369 | ⚪ INFO | TODO comment found |
| test/inductor/test_select_algorithm.py | 342 | ⚪ INFO | TODO comment found |
| test/inductor/test_split_cat_fx_passes.py | 592 | ⚪ INFO | TODO comment found |
| test/inductor/test_static_triton_launcher.py | 130 | ⚪ INFO | TODO comment found |
| test/inductor/test_static_triton_launcher.py | 880 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchbind.py | 352 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 518 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 815 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 2286 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/inductor/test_torchinductor.py | 2294 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/inductor/test_torchinductor.py | 2563 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 2592 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 2627 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 2654 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 4980 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 5030 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 5669 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 5956 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 6553 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 13472 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 13869 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 19575 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor.py | 20753 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor_opinfo.py | 985 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor_opinfo.py | 1269 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor_opinfo.py | 1347 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor_strided_blocks.py | 396 | ⚪ INFO | TODO comment found |
| test/inductor/test_torchinductor_strided_blocks.py | 1086 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/inductor/test_torchinductor_strided_blocks.py | 1270 | ⚪ INFO | TODO comment found |
| test/inductor/test_xpu_basic.py | 19 | ⚪ INFO | TODO comment found |
| test/jit/test_autodiff_subgraph_slicing.py | 38 | ⚪ INFO | TODO comment found |
| test/jit/test_dataclasses.py | 117 | ⚪ INFO | TODO comment found |
| test/jit/test_enum.py | 52 | ⚪ INFO | TODO comment found |
| test/jit/test_enum.py | 105 | ⚪ INFO | TODO comment found |
| test/jit/test_freezing.py | 317 | ⚪ INFO | TODO comment found |
| test/jit/test_freezing.py | 361 | ⚪ INFO | TODO comment found |
| test/jit/test_freezing.py | 518 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/jit/test_freezing.py | 778 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/jit/test_freezing.py | 979 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/jit/test_freezing.py | 1269 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/jit/test_freezing.py | 2826 | ⚪ INFO | TODO comment found |
| test/jit/test_hooks.py | 218 | ⚪ INFO | TODO comment found |
| test/jit/test_isinstance.py | 105 | ⚪ INFO | TODO comment found |
| test/jit/test_list_dict.py | 2737 | ⚪ INFO | TODO comment found |
| test/jit/test_misc.py | 40 | ⚪ INFO | TODO comment found |
| test/jit/test_models.py | 502 | ⚪ INFO | TODO comment found |
| test/jit/test_models.py | 513 | ⚪ INFO | TODO comment found |
| test/jit/test_models.py | 538 | ⚪ INFO | TODO comment found |
| test/jit/test_op_decompositions.py | 14 | ⚪ INFO | TODO comment found |
| test/jit/test_parametrization.py | 42 | ⚪ INFO | TODO comment found |
| test/jit/test_recursive_script.py | 644 | ⚪ INFO | TODO comment found |
| test/jit/test_recursive_script.py | 671 | ⚪ INFO | TODO comment found |
| test/jit/test_symbolic_shape_analysis.py | 385 | ⚪ INFO | TODO comment found |
| test/jit/test_symbolic_shape_analysis.py | 441 | ⚪ INFO | TODO comment found |
| test/jit/test_tracer.py | 642 | ⚪ INFO | TODO comment found |
| test/jit/test_union.py | 388 | ⚪ INFO | TODO comment found |
| test/jit/test_union.py | 506 | ⚪ INFO | TODO comment found |
| test/jit/test_union.py | 758 | ⚪ INFO | TODO comment found |
| test/jit/test_union.py | 901 | ⚪ INFO | TODO comment found |
| test/jit/test_union_pep604.py | 397 | ⚪ INFO | TODO comment found |
| test/jit/test_union_pep604.py | 515 | ⚪ INFO | TODO comment found |
| test/jit/test_union_pep604.py | 763 | ⚪ INFO | TODO comment found |
| test/jit/test_union_pep604.py | 904 | ⚪ INFO | TODO comment found |
| test/lazy/test_ts_opinfo.py | 333 | ⚪ INFO | TODO comment found |
| test/lazy/test_ts_opinfo.py | 360 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/attention/test_fa4.py | 63 | ⚪ INFO | TODO comment found |
| test/nn/test_convolution.py | 1573 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/test_convolution.py | 2414 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/test_convolution.py | 2429 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/test_convolution.py | 2639 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/test_convolution.py | 3063 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/test_convolution.py | 3065 | ⚪ INFO | TODO comment found |
| test/nn/test_dropout.py | 271 | ⚪ INFO | TODO comment found |
| test/nn/test_embedding.py | 1851 | ⚪ INFO | TODO comment found |
| test/nn/test_parametrization.py | 34 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/test_parametrization.py | 380 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/test_parametrization.py | 433 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/test_parametrization.py | 751 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/test_parametrization.py | 853 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/test_parametrization.py | 881 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/test_parametrization.py | 1151 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/test_parametrization.py | 1401 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/nn/test_pooling.py | 1059 | ⚪ INFO | TODO comment found |
| test/nn/test_pooling.py | 1326 | ⚪ INFO | TODO comment found |
| test/nn/test_pooling.py | 1401 | ⚪ INFO | TODO comment found |
| test/nn/test_pruning.py | 99 | ⚪ INFO | TODO comment found |
| test/nn/test_pruning.py | 126 | ⚪ INFO | TODO comment found |
| test/nn/test_pruning.py | 143 | ⚪ INFO | TODO comment found |
| test/onnx/test_models_onnxruntime.py | 395 | ⚪ INFO | TODO comment found |
| test/onnx/test_models_quantized_onnxruntime.py | 46 | ⚪ INFO | TODO comment found |
| test/onnx/test_op_consistency.py | 53 | ⚪ INFO | TODO comment found |
| test/onnx/test_op_consistency.py | 55 | ⚪ INFO | TODO comment found |
| test/onnx/test_pytorch_onnx_onnxruntime.py | 1495 | ⚪ INFO | TODO comment found |
| test/onnx/test_pytorch_onnx_onnxruntime.py | 1596 | ⚪ INFO | TODO comment found |
| test/onnx/test_pytorch_onnx_onnxruntime.py | 1617 | ⚪ INFO | TODO comment found |
| test/onnx/test_pytorch_onnx_onnxruntime.py | 3034 | ⚪ INFO | TODO comment found |
| test/onnx/test_pytorch_onnx_onnxruntime.py | 6834 | ⚪ INFO | TODO comment found |
| test/onnx/test_pytorch_onnx_onnxruntime.py | 8316 | ⚪ INFO | TODO comment found |
| test/onnx/test_pytorch_onnx_onnxruntime.py | 11162 | ⚪ INFO | TODO comment found |
| test/onnx/torchlib/ops_test_common.py | 557 | ⚪ INFO | TODO comment found |
| test/onnx/torchlib/test_ops.py | 231 | ⚪ INFO | TODO comment found |
| test/onnx/verify.py | 108 | ⚪ INFO | TODO comment found |
| test/onnx/verify.py | 144 | ⚪ INFO | TODO comment found |
| test/onnx/verify.py | 363 | ⚪ INFO | TODO comment found |
| test/onnx/verify.py | 494 | ⚪ INFO | TODO comment found |
| test/profiler/test_profiler_tree.py | 53 | ⚪ INFO | TODO comment found |
| test/profiler/test_profiler_tree.py | 278 | ⚪ INFO | TODO comment found |
| test/profiler/test_profiler_tree.py | 336 | ⚪ INFO | TODO comment found |
| test/profiler/test_profiler_tree.py | 389 | ⚪ INFO | TODO comment found |
| test/profiler/test_trace_validator.py | 217 | ⚪ INFO | TODO comment found |
| test/profiler/test_trace_validator.py | 226 | ⚪ INFO | TODO comment found |
| test/profiler/test_trace_validator.py | 235 | ⚪ INFO | TODO comment found |
| test/profiler/test_trace_validator.py | 244 | ⚪ INFO | TODO comment found |
| test/profiler/test_trace_validator.py | 253 | ⚪ INFO | TODO comment found |
| test/profiler/test_trace_validator.py | 262 | ⚪ INFO | TODO comment found |
| test/quantization/bc/test_backward_compatibility.py | 476 | ⚪ INFO | TODO comment found |
| test/quantization/bc/test_backward_compatibility.py | 493 | ⚪ INFO | TODO comment found |
| test/quantization/bc/test_backward_compatibility.py | 510 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_module.py | 1896 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_module.py | 2070 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 546 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 1615 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 2247 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 4145 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 4492 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 6055 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 6074 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 6083 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 6157 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 6166 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 6876 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 6889 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 6901 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 6963 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_quantized_op.py | 6975 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_workflow_module.py | 318 | ⚪ INFO | TODO comment found |
| test/quantization/core/test_workflow_module.py | 643 | ⚪ INFO | TODO comment found |
| test/quantization/eager/test_numeric_suite_eager.py | 255 | ⚪ INFO | TODO comment found |
| test/quantization/eager/test_quantize_eager_qat.py | 169 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_numeric_suite_fx.py | 304 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 310 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 2423 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 3783 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 4011 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 4043 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 4406 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 4917 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 5963 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 6849 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 7429 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 7632 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 7994 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 8175 | ⚪ INFO | TODO comment found |
| test/quantization/fx/test_quantize_fx.py | 8991 | ⚪ INFO | TODO comment found |
| test/quantization/jit/test_quantize_jit.py | 789 | ⚪ INFO | TODO comment found |
| test/quantization/jit/test_quantize_jit.py | 1279 | ⚪ INFO | TODO comment found |
| test/quantization/jit/test_quantize_jit.py | 2024 | ⚪ INFO | TODO comment found |
| test/quantization/jit/test_quantize_jit.py | 2074 | ⚪ INFO | TODO comment found |
| test/quantization/jit/test_quantize_jit.py | 2256 | ⚪ INFO | TODO comment found |
| test/quantization/jit/test_quantize_jit.py | 2443 | ⚪ INFO | TODO comment found |
| test/quantization/jit/test_quantize_jit.py | 2493 | ⚪ INFO | TODO comment found |
| test/run_test.py | 384 | ⚪ INFO | TODO comment found |
| test/run_test.py | 478 | ⚪ INFO | TODO comment found |
| test/run_test.py | 1106 | ⚪ INFO | TODO comment found |
| test/run_test.py | 1191 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 3977 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 4499 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 4977 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 5034 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 5195 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 5224 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 5243 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 8761 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 8778 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 8838 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 9925 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 11964 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 13076 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_autograd.py | 13321 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 14586 | ⚪ INFO | TODO comment found |
| test/test_autograd.py | 16178 | ⚪ INFO | TODO comment found |
| test/test_binary_ufuncs.py | 88 | ⚪ INFO | TODO comment found |
| test/test_binary_ufuncs.py | 233 | ⚪ INFO | TODO comment found |
| test/test_binary_ufuncs.py | 237 | ⚪ INFO | TODO comment found |
| test/test_binary_ufuncs.py | 961 | ⚪ INFO | TODO comment found |
| test/test_binary_ufuncs.py | 1338 | ⚪ INFO | TODO comment found |
| test/test_binary_ufuncs.py | 1591 | ⚪ INFO | TODO comment found |
| test/test_binary_ufuncs.py | 2520 | ⚪ INFO | TODO comment found |
| test/test_binary_ufuncs.py | 2546 | ⚪ INFO | TODO comment found |
| test/test_binary_ufuncs.py | 2564 | ⚪ INFO | TODO comment found |
| test/test_binary_ufuncs.py | 3149 | ⚪ INFO | TODO comment found |
| test/test_binary_ufuncs.py | 4595 | ⚪ INFO | TODO comment found |
| test/test_binary_ufuncs.py | 4687 | ⚪ INFO | TODO comment found |
| test/test_cpp_extensions_aot.py | 29 | ⚪ INFO | TODO comment found |
| test/test_cuda.py | 3236 | ⚪ INFO | TODO comment found |
| test/test_cuda.py | 3239 | ⚪ INFO | TODO comment found |
| test/test_cuda.py | 6428 | ⚪ INFO | TODO comment found |
| test/test_dataloader.py | 1005 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_dataloader.py | 2660 | ⚪ INFO | TODO comment found |
| test/test_dataloader.py | 2688 | ⚪ INFO | TODO comment found |
| test/test_dataloader.py | 2699 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_dataloader.py | 3045 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_decomp.py | 54 | ⚪ INFO | TODO comment found |
| test/test_decomp.py | 363 | ⚪ INFO | TODO comment found |
| test/test_decomp.py | 997 | ⚪ INFO | TODO comment found |
| test/test_dispatch.py | 14 | ⚪ INFO | TODO comment found |
| test/test_dlpack.py | 381 | ⚪ INFO | TODO comment found |
| test/test_dynamic_shapes.py | 148 | ⚪ INFO | TODO comment found |
| test/test_dynamic_shapes.py | 245 | ⚪ INFO | TODO comment found |
| test/test_dynamic_shapes.py | 1855 | ⚪ INFO | TODO comment found |
| test/test_dynamic_shapes.py | 1893 | ⚪ INFO | TODO comment found |
| test/test_dynamic_shapes.py | 1977 | ⚪ INFO | TODO comment found |
| test/test_expanded_weights.py | 956 | ⚪ INFO | TODO comment found |
| test/test_expanded_weights.py | 1017 | ⚪ INFO | TODO comment found |
| test/test_fake_tensor.py | 785 | ⚪ INFO | TODO comment found |
| test/test_fake_tensor.py | 1588 | ⚪ INFO | TODO comment found |
| test/test_foreach.py | 568 | ⚪ INFO | TODO comment found |
| test/test_fx.py | 1024 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_fx_passes.py | 905 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_indexing.py | 110 | ⚪ INFO | TODO comment found |
| test/test_indexing.py | 204 | ⚪ INFO | TODO comment found |
| test/test_indexing.py | 2205 | ⚪ INFO | TODO comment found |
| test/test_jit.py | 167 | ⚪ INFO | TODO comment found |
| test/test_jit.py | 218 | ⚪ INFO | TODO comment found |
| test/test_jit.py | 1262 | ⚪ INFO | TODO comment found |
| test/test_jit.py | 1724 | ⚪ INFO | TODO comment found |
| test/test_jit.py | 1738 | ⚪ INFO | TODO comment found |
| test/test_jit.py | 2594 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_jit.py | 5658 | ⚪ INFO | TODO comment found |
| test/test_jit.py | 7231 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_jit.py | 7594 | ⚪ INFO | TODO comment found |
| test/test_jit.py | 8964 | ⚪ INFO | TODO comment found |
| test/test_jit.py | 13034 | ⚪ INFO | TODO comment found |
| test/test_jit.py | 13390 | ⚪ INFO | TODO comment found |
| test/test_jit.py | 14495 | ⚪ INFO | TODO comment found |
| test/test_jit.py | 14523 | ⚪ INFO | TODO comment found |
| test/test_jit.py | 15303 | ⚪ INFO | TODO comment found |
| test/test_jit_autocast.py | 333 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser.py | 110 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser.py | 443 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser.py | 535 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_jit_fuser.py | 781 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 326 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 795 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 819 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 955 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 983 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_jit_fuser_te.py | 1049 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 1056 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 1074 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 1251 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 1400 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 1422 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 1472 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 1497 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 1567 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 1571 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 1579 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 1741 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 1779 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_jit_fuser_te.py | 1860 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_jit_fuser_te.py | 2150 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 2324 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 2367 | ⚪ INFO | TODO comment found |
| test/test_jit_fuser_te.py | 3000 | ⚪ INFO | TODO comment found |
| test/test_jit_llga_fuser.py | 226 | ⚪ INFO | TODO comment found |
| test/test_jit_llga_fuser.py | 251 | ⚪ INFO | TODO comment found |
| test/test_jit_llga_fuser.py | 348 | ⚪ INFO | TODO comment found |
| test/test_linalg.py | 1944 | ⚪ INFO | TODO comment found |
| test/test_linalg.py | 3326 | ⚪ INFO | TODO comment found |
| test/test_linalg.py | 3348 | ⚪ INFO | TODO comment found |
| test/test_linalg.py | 6670 | ⚪ INFO | TODO comment found |
| test/test_linalg.py | 7960 | ⚪ INFO | TODO comment found |
| test/test_linalg.py | 8536 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_meta.py | 421 | ⚪ INFO | TODO comment found |
| test/test_meta.py | 559 | ⚪ INFO | TODO comment found |
| test/test_meta.py | 744 | ⚪ INFO | TODO comment found |
| test/test_meta.py | 761 | ⚪ INFO | TODO comment found |
| test/test_meta.py | 887 | ⚪ INFO | TODO comment found |
| test/test_meta.py | 916 | ⚪ INFO | TODO comment found |
| test/test_mkldnn.py | 270 | ⚪ INFO | TODO comment found |
| test/test_mkldnn.py | 321 | ⚪ INFO | TODO comment found |
| test/test_mkldnn.py | 1004 | ⚪ INFO | TODO comment found |
| test/test_mkldnn.py | 1006 | ⚪ INFO | TODO comment found |
| test/test_mkldnn.py | 1046 | ⚪ INFO | TODO comment found |
| test/test_mobile_optimizer.py | 450 | ⚪ INFO | TODO comment found |
| test/test_modules.py | 77 | ⚪ INFO | TODO comment found |
| test/test_modules.py | 546 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 1397 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 4193 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 5441 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 5462 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 8659 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 9197 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 9430 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 11291 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 12854 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 13033 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 13059 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 13810 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_mps.py | 14087 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 14707 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 14781 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 14872 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 15009 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 15012 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 15064 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 15342 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 15741 | ⚪ INFO | TODO comment found |
| test/test_mps.py | 16121 | ⚪ INFO | TODO comment found |
| test/test_multiprocessing.py | 310 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 431 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 471 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 1417 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 2075 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 2632 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 3958 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 4290 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 6427 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 7493 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 7904 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 7936 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 7969 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 9000 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 9034 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 9035 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 9115 | ⚪ INFO | TODO comment found |
| test/test_nestedtensor.py | 9116 | ⚪ INFO | TODO comment found |
| test/test_nn.py | 2054 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_nn.py | 5442 | ⚪ INFO | TODO comment found |
| test/test_nn.py | 6978 | ⚪ INFO | TODO comment found |
| test/test_nn.py | 7158 | ⚪ INFO | TODO comment found |
| test/test_nn.py | 8179 | ⚪ INFO | TODO comment found |
| test/test_nn.py | 10579 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_nn.py | 12675 | ⚪ INFO | TODO comment found |
| test/test_nn.py | 14169 | ⚪ INFO | TODO comment found |
| test/test_numpy_interop.py | 256 | ⚪ INFO | TODO comment found |
| test/test_numpy_interop.py | 613 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 327 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 403 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 539 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 710 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 1249 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 1390 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 1417 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 1418 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 1420 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 1611 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 2199 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 2266 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 2267 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 2269 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 2383 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 2395 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 2432 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 2439 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 2473 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 2693 | ⚪ INFO | TODO comment found |
| test/test_ops.py | 2979 | ⚪ INFO | TODO comment found |
| test/test_ops_fwd_gradients.py | 24 | ⚪ INFO | TODO comment found |
| test/test_ops_fwd_gradients.py | 55 | ⚪ INFO | TODO comment found |
| test/test_ops_jit.py | 75 | ⚪ INFO | TODO comment found |
| test/test_ops_jit.py | 86 | ⚪ INFO | TODO comment found |
| test/test_ops_jit.py | 169 | ⚪ INFO | TODO comment found |
| test/test_ops_jit.py | 192 | ⚪ INFO | TODO comment found |
| test/test_ops_jit.py | 202 | ⚪ INFO | TODO comment found |
| test/test_ops_jit.py | 208 | ⚪ INFO | TODO comment found |
| test/test_overrides.py | 961 | ⚪ INFO | TODO comment found |
| test/test_proxy_tensor.py | 133 | ⚪ INFO | TODO comment found |
| test/test_proxy_tensor.py | 1028 | ⚪ INFO | TODO comment found |
| test/test_python_dispatch.py | 876 | ⚪ INFO | TODO comment found |
| test/test_python_dispatch.py | 898 | ⚪ INFO | TODO comment found |
| test/test_python_dispatch.py | 1050 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_python_dispatch.py | 1167 | ⚪ INFO | TODO comment found |
| test/test_python_dispatch.py | 1171 | ⚪ INFO | TODO comment found |
| test/test_python_dispatch.py | 2581 | ⚪ INFO | TODO comment found |
| test/test_quantization.py | 14 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 39 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 69 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 462 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 695 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 773 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 825 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 833 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 936 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 1139 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 1167 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 1310 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 1407 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 1616 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 1801 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 1831 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 1866 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 2118 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 2132 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 2148 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 2157 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 2167 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 2187 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 2304 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 3423 | ⚪ INFO | TODO comment found |
| test/test_reductions.py | 3821 | ⚪ INFO | TODO comment found |
| test/test_scatter_gather_ops.py | 290 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_scatter_gather_ops.py | 390 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_schema_check.py | 68 | ⚪ INFO | TODO comment found |
| test/test_segment_reductions.py | 496 | ⚪ INFO | TODO comment found |
| test/test_shape_ops.py | 40 | ⚪ INFO | TODO comment found |
| test/test_shape_ops.py | 74 | ⚪ INFO | TODO comment found |
| test/test_shape_ops.py | 87 | ⚪ INFO | TODO comment found |
| test/test_shape_ops.py | 680 | ⚪ INFO | TODO comment found |
| test/test_sort_and_select.py | 282 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_sparse.py | 167 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 294 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 2169 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 2351 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 3918 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 3996 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 4138 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 4155 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 4163 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 4565 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_sparse.py | 4609 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 5094 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 5148 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 5165 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 5208 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 5638 | ⚪ INFO | TODO comment found |
| test/test_sparse.py | 5642 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_sparse.py | 5648 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_sparse_csr.py | 537 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_sparse_csr.py | 1280 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 1476 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 1519 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 1614 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 1735 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 1779 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 1783 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 1794 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 1811 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 1853 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 2211 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 2222 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 2251 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 2271 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 2891 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 2922 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 3091 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 4095 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 4099 | ⚪ INFO | TODO comment found |
| test/test_sparse_csr.py | 4167 | ⚪ INFO | TODO comment found |
| test/test_spectral_ops.py | 325 | ⚪ INFO | TODO comment found |
| test/test_subclass.py | 174 | ⚪ INFO | TODO comment found |
| test/test_sympy_utils.py | 370 | ⚪ INFO | TODO comment found |
| test/test_sympy_utils.py | 387 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 51 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 82 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 511 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_tensor_creation_ops.py | 762 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 763 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 786 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 1222 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_tensor_creation_ops.py | 1932 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 1945 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 1997 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2007 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2041 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2061 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2077 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2127 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2171 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2175 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2235 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2263 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2293 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2345 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2404 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2434 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2440 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 2574 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 3325 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 3552 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 3584 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 3662 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 3779 | ⚪ INFO | TODO comment found |
| test/test_tensor_creation_ops.py | 3791 | ⚪ INFO | TODO comment found |
| test/test_tensorexpr.py | 918 | ⚪ INFO | TODO comment found |
| test/test_tensorexpr.py | 1109 | ⚪ INFO | TODO comment found |
| test/test_testing.py | 490 | ⚪ INFO | TODO comment found |
| test/test_testing.py | 855 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 94 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 709 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 898 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 978 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 1001 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 1298 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 1954 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 1981 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 1986 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 1991 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 2019 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 2440 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3196 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 3223 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3262 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3303 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3344 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3406 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3422 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3456 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3527 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3551 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3559 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3569 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3626 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3627 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 3674 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3685 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3696 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3705 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3714 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3761 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3774 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3785 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3827 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3846 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 3884 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4109 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4126 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4193 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4234 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4271 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4288 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4301 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4311 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4326 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4348 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4370 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4387 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4399 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4414 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4423 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4434 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4439 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 4554 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4576 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4671 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 4836 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 5129 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 5222 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 5244 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 5449 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 5489 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 5496 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 5501 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 6110 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 6270 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 6279 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 6287 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 6475 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 6490 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 6503 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 6519 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 6554 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 6620 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 6632 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 6867 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 6896 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 7006 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 7181 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 7235 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 7249 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 8419 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 8996 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 9012 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 9023 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 9035 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 9069 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 9245 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 9317 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 9409 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 9436 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 9441 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 9494 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 9532 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 9563 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 9627 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 9694 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 9717 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 9742 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 9998 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 10000 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 10025 | ⚪ INFO | TODO comment found |
| test/test_torch.py | 10028 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 10598 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 10712 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 11002 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_torch.py | 11109 | ⚪ INFO | TODO comment found |
| test/test_transformers.py | 816 | ⚪ INFO | TODO comment found |
| test/test_transformers.py | 1162 | ⚪ INFO | TODO comment found |
| test/test_transformers.py | 1227 | ⚪ INFO | TODO comment found |
| test/test_type_hints.py | 149 | ⚪ INFO | TODO comment found |
| test/test_unary_ufuncs.py | 81 | ⚪ INFO | TODO comment found |
| test/test_unary_ufuncs.py | 82 | ⚪ INFO | TODO comment found |
| test/test_unary_ufuncs.py | 136 | ⚪ INFO | TODO comment found |
| test/test_unary_ufuncs.py | 858 | ⚪ INFO | TODO comment found |
| test/test_unary_ufuncs.py | 970 | ⚪ INFO | TODO comment found |
| test/test_unary_ufuncs.py | 1533 | ⚪ INFO | TODO comment found |
| test/test_unary_ufuncs.py | 1540 | ⚪ INFO | TODO comment found |
| test/test_unary_ufuncs.py | 1552 | ⚪ INFO | TODO comment found |
| test/test_unary_ufuncs.py | 1807 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 42 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 77 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 236 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 602 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 623 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 1197 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 1245 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 1250 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 1276 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 1352 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 1367 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 1379 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 1475 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 1548 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 1665 | ⚪ INFO | TODO comment found |
| test/test_view_ops.py | 1672 | ⚪ INFO | TODO comment found |
| test/test_weak.py | 428 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_weak.py | 762 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/test_xpu.py | 3371 | ⚪ INFO | TODO comment found |
| test/torch_np/numpy_tests/core/test_multiarray.py | 760 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/torch_np/numpy_tests/core/test_multiarray.py | 4377 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/torch_np/numpy_tests/core/test_multiarray.py | 4639 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/torch_np/numpy_tests/core/test_multiarray.py | 5898 | ⚪ INFO | TODO comment found |
| test/torch_np/numpy_tests/core/test_multiarray.py | 6094 | ⚪ INFO | TODO comment found |
| test/torch_np/numpy_tests/core/test_numeric.py | 1406 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/torch_np/numpy_tests/core/test_numeric.py | 2238 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/torch_np/numpy_tests/core/test_scalarmath.py | 351 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/torch_np/numpy_tests/core/test_scalarmath.py | 747 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/torch_np/numpy_tests/lib/test_function_base.py | 40 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/torch_np/numpy_tests/lib/test_function_base.py | 43 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/torch_np/numpy_tests/linalg/test_linalg.py | 1076 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/torch_np/numpy_tests/linalg/test_linalg.py | 1355 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/torch_np/numpy_tests/linalg/test_linalg.py | 1870 | ⚪ INFO | TODO comment found |
| test/torch_np/test_ndarray_methods.py | 708 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/torch_np/test_reductions.py | 364 | ⚪ INFO | TODO comment found |
| test/torch_np/test_reductions.py | 443 | ⚪ INFO | TODO comment found |
| test/torch_np/test_reductions.py | 477 | ⚪ INFO | TODO comment found |
| test/torch_np/test_reductions.py | 524 | ⚪ INFO | TODO comment found |
| test/torch_np/test_ufuncs_basic.py | 99 | ⚪ INFO | TODO comment found |
| test/torch_np/test_ufuncs_basic.py | 148 | ⚪ INFO | TODO comment found |
| test/torch_np/test_ufuncs_basic.py | 222 | ⚪ INFO | TODO comment found |
| test/typing/fail/arithmetic_ops.py | 15 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/typing/reveal/namedtuple.py | 15 | ⚪ INFO | TODO comment found |
| test/xpu/test_gemm.py | 107 | ⚪ INFO | TODO comment found |
| third_party/miniz-3.0.2/miniz.c | 4172 | ⚪ INFO | TODO comment found |
| third_party/miniz-3.0.2/miniz.c | 4324 | 🟡 MEDIUM | FIXME comment indicating known issue |
| third_party/miniz-3.0.2/miniz.c | 5586 | ⚪ INFO | TODO comment found |
| third_party/miniz-3.0.2/miniz.c | 6160 | ⚪ INFO | TODO comment found |
| third_party/miniz-3.0.2/miniz.c | 6166 | ⚪ INFO | TODO comment found |
| third_party/miniz-3.0.2/miniz.c | 6179 | ⚪ INFO | TODO comment found |
| third_party/miniz-3.0.2/miniz.c | 7152 | ⚪ INFO | TODO comment found |
| third_party/miniz-3.0.2/miniz.c | 7203 | ⚪ INFO | TODO comment found |
| third_party/miniz-3.0.2/miniz.c | 7216 | ⚪ INFO | TODO comment found |
| third_party/miniz-3.0.2/miniz.c | 7511 | ⚪ INFO | TODO comment found |
| third_party/miniz-3.0.2/miniz.c | 7575 | ⚪ INFO | TODO comment found |
| third_party/miniz-3.0.2/miniz.h | 164 | ⚪ INFO | TODO comment found |
| third_party/miniz-3.0.2/miniz.h | 1408 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_autograd_functions.py | 516 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_inplace_or_view_type.py | 98 | 🟡 MEDIUM | FIXME comment indicating known issue |
| tools/autograd/gen_inplace_or_view_type.py | 252 | 🟡 MEDIUM | FIXME comment indicating known issue |
| tools/autograd/gen_inplace_or_view_type.py | 256 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_inplace_or_view_type.py | 261 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_inplace_or_view_type.py | 339 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_inplace_or_view_type.py | 356 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_python_functions.py | 1266 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_python_functions.py | 1352 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_trace_type.py | 74 | 🟡 MEDIUM | FIXME comment indicating known issue |
| tools/autograd/gen_trace_type.py | 116 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_trace_type.py | 307 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_variable_factories.py | 23 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_variable_type.py | 976 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_variable_type.py | 1127 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_variable_type.py | 1273 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_variable_type.py | 1400 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_variable_type.py | 1676 | ⚪ INFO | TODO comment found |
| tools/autograd/gen_variable_type.py | 1805 | ⚪ INFO | TODO comment found |
| tools/autograd/load_derivatives.py | 185 | ⚪ INFO | TODO comment found |
| tools/autograd/load_derivatives.py | 616 | ⚪ INFO | TODO comment found |
| tools/autograd/load_derivatives.py | 677 | ⚪ INFO | TODO comment found |
| tools/autograd/templates/python_variable_methods.cpp | 144 | ⚪ INFO | TODO comment found |
| tools/autograd/templates/python_variable_methods.cpp | 367 | ⚪ INFO | TODO comment found |
| tools/autograd/templates/python_variable_methods.cpp | 412 | ⚪ INFO | TODO comment found |
| tools/autograd/templates/python_variable_methods.cpp | 418 | ⚪ INFO | TODO comment found |
| tools/autograd/templates/variable_factories.h | 73 | ⚪ INFO | TODO comment found |
| tools/autograd/templates/variable_factories.h | 91 | ⚪ INFO | TODO comment found |
| tools/autograd/templates/variable_factories.h | 110 | ⚪ INFO | TODO comment found |
| tools/autograd/templates/variable_factories.h | 126 | ⚪ INFO | TODO comment found |
| tools/code_analyzer/gen_op_registration_allowlist.py | 63 | ⚪ INFO | TODO comment found |
| tools/code_analyzer/gen_operators_yaml.py | 112 | ⚪ INFO | TODO comment found |
| tools/code_coverage/package/oss/utils.py | 13 | ⚪ INFO | TODO comment found |
| tools/coverage_plugins_package/src/coverage_plugins/jit_plugin.py | 62 | ⚪ INFO | TODO comment found |
| tools/linter/adapters/gha_linter.py | 80 | ⚪ INFO | TODO comment found |
| tools/pyi/gen_pyi.py | 85 | ⚪ INFO | TODO comment found |
| tools/pyi/gen_pyi.py | 1893 | ⚪ INFO | TODO comment found |
| tools/pyi/gen_pyi.py | 1934 | ⚪ INFO | TODO comment found |
| tools/stats/monitor.py | 452 | ⚪ INFO | TODO comment found |
| torch/__config__.py | 12 | ⚪ INFO | TODO comment found |
| torch/__init__.py | 891 | ⚪ INFO | TODO comment found |
| torch/__init__.py | 902 | ⚪ INFO | TODO comment found |
| torch/__init__.py | 1215 | ⚪ INFO | TODO comment found |
| torch/__init__.py | 1411 | ⚪ INFO | TODO comment found |
| torch/__init__.py | 1546 | ⚪ INFO | TODO comment found |
| torch/__init__.py | 2562 | ⚪ INFO | TODO comment found |
| torch/__init__.py | 2794 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_decomp/__init__.py | 36 | ⚪ INFO | TODO comment found |
| torch/_decomp/decompositions.py | 78 | ⚪ INFO | TODO comment found |
| torch/_decomp/decompositions.py | 390 | ⚪ INFO | TODO comment found |
| torch/_decomp/decompositions.py | 1628 | ⚪ INFO | TODO comment found |
| torch/_decomp/decompositions.py | 1832 | ⚪ INFO | TODO comment found |
| torch/_decomp/decompositions.py | 2180 | ⚪ INFO | TODO comment found |
| torch/_decomp/decompositions.py | 5265 | ⚪ INFO | TODO comment found |
| torch/_decomp/decompositions_for_jvp.py | 30 | ⚪ INFO | TODO comment found |
| torch/_decomp/decompositions_for_jvp.py | 100 | ⚪ INFO | TODO comment found |
| torch/_decomp/decompositions_for_rng.py | 176 | ⚪ INFO | TODO comment found |
| torch/_dispatch/python.py | 93 | ⚪ INFO | TODO comment found |
| torch/_dispatch/python.py | 148 | ⚪ INFO | TODO comment found |
| torch/_dispatch/python.py | 158 | ⚪ INFO | TODO comment found |
| torch/_dynamo/__init__.py | 148 | ⚪ INFO | TODO comment found |
| torch/_dynamo/__init__.py | 193 | ⚪ INFO | TODO comment found |
| torch/_dynamo/aot_compile.py | 401 | ⚪ INFO | TODO comment found |
| torch/_dynamo/backends/cudagraphs.py | 87 | ⚪ INFO | TODO comment found |
| torch/_dynamo/backends/cudagraphs.py | 93 | ⚪ INFO | TODO comment found |
| torch/_dynamo/backends/distributed.py | 161 | ⚪ INFO | TODO comment found |
| torch/_dynamo/backends/onnxrt.py | 17 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_dynamo/bytecode_transformation.py | 1574 | ⚪ INFO | TODO comment found |
| torch/_dynamo/comptime.py | 146 | ⚪ INFO | TODO comment found |
| torch/_dynamo/comptime.py | 165 | ⚪ INFO | TODO comment found |
| torch/_dynamo/comptime.py | 308 | ⚪ INFO | TODO comment found |
| torch/_dynamo/config.py | 345 | ⚪ INFO | TODO comment found |
| torch/_dynamo/convert_frame.py | 2252 | ⚪ INFO | TODO comment found |
| torch/_dynamo/convert_frame.py | 2550 | ⚪ INFO | TODO comment found |
| torch/_dynamo/debug_utils.py | 806 | ⚪ INFO | TODO comment found |
| torch/_dynamo/debug_utils.py | 842 | ⚪ INFO | TODO comment found |
| torch/_dynamo/debug_utils.py | 927 | ⚪ INFO | TODO comment found |
| torch/_dynamo/debug_utils.py | 967 | ⚪ INFO | TODO comment found |
| torch/_dynamo/debug_utils.py | 1046 | ⚪ INFO | TODO comment found |
| torch/_dynamo/decorators.py | 1286 | ⚪ INFO | TODO comment found |
| torch/_dynamo/decorators.py | 1336 | ⚪ INFO | TODO comment found |
| torch/_dynamo/decorators.py | 1394 | ⚪ INFO | TODO comment found |
| torch/_dynamo/decorators.py | 1612 | ⚪ INFO | TODO comment found |
| torch/_dynamo/eval_frame.py | 789 | ⚪ INFO | TODO comment found |
| torch/_dynamo/eval_frame.py | 1435 | ⚪ INFO | TODO comment found |
| torch/_dynamo/eval_frame.py | 2058 | ⚪ INFO | TODO comment found |
| torch/_dynamo/exc.py | 274 | ⚪ INFO | TODO comment found |
| torch/_dynamo/exc.py | 389 | ⚪ INFO | TODO comment found |
| torch/_dynamo/functional_export.py | 942 | ⚪ INFO | TODO comment found |
| torch/_dynamo/guards.py | 304 | ⚪ INFO | TODO comment found |
| torch/_dynamo/guards.py | 4602 | ⚪ INFO | TODO comment found |
| torch/_dynamo/guards.py | 4817 | ⚪ INFO | TODO comment found |
| torch/_dynamo/guards.py | 4981 | ⚪ INFO | TODO comment found |
| torch/_dynamo/output_graph.py | 390 | ⚪ INFO | TODO comment found |
| torch/_dynamo/output_graph.py | 796 | ⚪ INFO | TODO comment found |
| torch/_dynamo/output_graph.py | 3124 | ⚪ INFO | TODO comment found |
| torch/_dynamo/output_graph.py | 3178 | ⚪ INFO | TODO comment found |
| torch/_dynamo/output_graph.py | 3323 | ⚪ INFO | TODO comment found |
| torch/_dynamo/output_graph.py | 3344 | ⚪ INFO | TODO comment found |
| torch/_dynamo/output_graph.py | 3347 | ⚪ INFO | TODO comment found |
| torch/_dynamo/package.py | 587 | ⚪ INFO | TODO comment found |
| torch/_dynamo/pgo.py | 561 | ⚪ INFO | TODO comment found |
| torch/_dynamo/pgo.py | 603 | ⚪ INFO | TODO comment found |
| torch/_dynamo/pgo.py | 1008 | ⚪ INFO | TODO comment found |
| torch/_dynamo/pgo.py | 1080 | ⚪ INFO | TODO comment found |
| torch/_dynamo/polyfills/__init__.py | 391 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_dynamo/polyfills/itertools.py | 228 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_aot.py | 307 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_aot.py | 319 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_aot.py | 699 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_aot.py | 715 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_aot.py | 900 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_aot.py | 1177 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_aot.py | 1287 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_aot.py | 1385 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_aot.py | 1470 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_aot.py | 1621 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_dynamo.py | 199 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_dynamo.py | 205 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_dynamo.py | 299 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_dynamo.py | 328 | ⚪ INFO | TODO comment found |
| torch/_dynamo/repro/after_dynamo.py | 508 | ⚪ INFO | TODO comment found |
| torch/_dynamo/side_effects.py | 640 | ⚪ INFO | TODO comment found |
| torch/_dynamo/source.py | 1350 | ⚪ INFO | TODO comment found |
| torch/_dynamo/symbolic_convert.py | 5908 | ⚪ INFO | TODO comment found |
| torch/_dynamo/symbolic_convert.py | 6213 | ⚪ INFO | TODO comment found |
| torch/_dynamo/test_minifier_common.py | 176 | ⚪ INFO | TODO comment found |
| torch/_dynamo/testing.py | 218 | ⚪ INFO | TODO comment found |
| torch/_dynamo/utils.py | 484 | ⚪ INFO | TODO comment found |
| torch/_dynamo/utils.py | 843 | ⚪ INFO | TODO comment found |
| torch/_dynamo/utils.py | 1726 | ⚪ INFO | TODO comment found |
| torch/_dynamo/utils.py | 2131 | ⚪ INFO | TODO comment found |
| torch/_dynamo/utils.py | 2551 | ⚪ INFO | TODO comment found |
| torch/_dynamo/utils.py | 2970 | ⚪ INFO | TODO comment found |
| torch/_dynamo/utils.py | 4519 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/base.py | 668 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 647 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 1578 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 1673 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 3226 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 3257 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 3287 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 3381 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 3398 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 3520 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 4040 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 4151 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 4509 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 4588 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 4589 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 4695 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 4852 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builder.py | 4857 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/builtin.py | 628 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/higher_order_ops.py | 2140 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/higher_order_ops.py | 2507 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/higher_order_ops.py | 3356 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/higher_order_ops.py | 6111 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/lazy.py | 267 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/misc.py | 819 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/misc.py | 1409 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/nn_module.py | 535 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/nn_module.py | 590 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/tensor.py | 2588 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/torch.py | 1976 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/torch.py | 1977 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/torch.py | 1994 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/torch.py | 1995 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/torch.py | 2010 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/torch.py | 2011 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/torch.py | 2185 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/user_defined.py | 1623 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/user_defined.py | 2410 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/user_defined.py | 4603 | ⚪ INFO | TODO comment found |
| torch/_dynamo/variables/user_defined.py | 4779 | ⚪ INFO | TODO comment found |
| torch/_export/converter.py | 816 | ⚪ INFO | TODO comment found |
| torch/_export/converter.py | 889 | ⚪ INFO | TODO comment found |
| torch/_export/converter.py | 948 | ⚪ INFO | TODO comment found |
| torch/_export/converter.py | 1029 | ⚪ INFO | TODO comment found |
| torch/_export/converter.py | 1194 | ⚪ INFO | TODO comment found |
| torch/_export/converter.py | 1271 | ⚪ INFO | TODO comment found |
| torch/_export/converter.py | 1529 | ⚪ INFO | TODO comment found |
| torch/_export/pass_base.py | 136 | ⚪ INFO | TODO comment found |
| torch/_export/pass_base.py | 175 | ⚪ INFO | TODO comment found |
| torch/_export/passes/replace_autocast_with_hop_pass.py | 65 | ⚪ INFO | TODO comment found |
| torch/_export/serde/serialize.py | 420 | ⚪ INFO | TODO comment found |
| torch/_export/serde/serialize.py | 462 | ⚪ INFO | TODO comment found |
| torch/_export/serde/serialize.py | 819 | ⚪ INFO | TODO comment found |
| torch/_export/serde/serialize.py | 2240 | ⚪ INFO | TODO comment found |
| torch/_export/utils.py | 922 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/aot_autograd_result.py | 708 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/aot_autograd_result.py | 738 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/autograd_cache.py | 871 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/autograd_cache.py | 1054 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/autograd_cache.py | 1092 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/collect_metadata_analysis.py | 177 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/collect_metadata_analysis.py | 796 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/descriptors.py | 320 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/descriptors.py | 631 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/frontend_utils.py | 159 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/functional_utils.py | 273 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_capture.py | 185 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_capture.py | 304 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_capture.py | 454 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_capture.py | 504 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_capture.py | 576 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_capture_wrappers.py | 332 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_capture_wrappers.py | 472 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_capture_wrappers.py | 1266 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_capture_wrappers.py | 1326 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_compile.py | 180 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_compile.py | 200 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_compile.py | 1007 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_compile.py | 2105 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/graph_compile.py | 2636 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/logging_utils.py | 19 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/logging_utils.py | 53 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/runtime_wrappers.py | 675 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/runtime_wrappers.py | 1166 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/runtime_wrappers.py | 1547 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/runtime_wrappers.py | 1662 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/runtime_wrappers.py | 1779 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/runtime_wrappers.py | 1804 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/runtime_wrappers.py | 1943 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/schemas.py | 724 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/schemas.py | 1208 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/schemas.py | 1211 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/schemas.py | 1274 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/schemas.py | 1465 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/utils.py | 147 | ⚪ INFO | TODO comment found |
| torch/_functorch/_aot_autograd/utils.py | 643 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 508 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 804 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 953 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 975 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 986 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 1105 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 1141 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 1266 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 1416 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 1470 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 1533 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 1688 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 1841 | ⚪ INFO | TODO comment found |
| torch/_functorch/aot_autograd.py | 1938 | ⚪ INFO | TODO comment found |
| torch/_functorch/apis.py | 354 | ⚪ INFO | TODO comment found |
| torch/_functorch/apis.py | 467 | ⚪ INFO | TODO comment found |
| torch/_functorch/autograd_function.py | 216 | ⚪ INFO | TODO comment found |
| torch/_functorch/autograd_function.py | 331 | ⚪ INFO | TODO comment found |
| torch/_functorch/autograd_function.py | 346 | ⚪ INFO | TODO comment found |
| torch/_functorch/compilers.py | 199 | ⚪ INFO | TODO comment found |
| torch/_functorch/config.py | 371 | ⚪ INFO | TODO comment found |
| torch/_functorch/config.py | 376 | ⚪ INFO | TODO comment found |
| torch/_functorch/eager_transforms.py | 107 | ⚪ INFO | TODO comment found |
| torch/_functorch/eager_transforms.py | 140 | ⚪ INFO | TODO comment found |
| torch/_functorch/make_functional.py | 302 | ⚪ INFO | TODO comment found |
| torch/_functorch/make_functional.py | 357 | ⚪ INFO | TODO comment found |
| torch/_functorch/partitioners.py | 2509 | ⚪ INFO | TODO comment found |
| torch/_functorch/partitioners.py | 3523 | ⚪ INFO | TODO comment found |
| torch/_functorch/pyfunctorch.py | 129 | ⚪ INFO | TODO comment found |
| torch/_functorch/pytree_hacks.py | 9 | ⚪ INFO | TODO comment found |
| torch/_functorch/vmap.py | 164 | ⚪ INFO | TODO comment found |
| torch/_guards.py | 85 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/associative_scan.py | 63 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/associative_scan.py | 195 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/associative_scan.py | 196 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/associative_scan.py | 730 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/associative_scan.py | 824 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/associative_scan.py | 831 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/base_hop.py | 194 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/base_hop.py | 238 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/cond.py | 348 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/executorch_call_delegate.py | 97 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/flex_attention.py | 577 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/flex_attention.py | 914 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/invoke_leaf_function.py | 774 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/invoke_subgraph.py | 1335 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/invoke_subgraph.py | 1336 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/local_map.py | 543 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/local_map.py | 632 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/map.py | 267 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/scan.py | 202 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/scan.py | 203 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/scan.py | 903 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/torchbind.py | 60 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/triton_kernel_wrap.py | 1390 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/utils.py | 391 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/utils.py | 399 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/utils.py | 671 | ⚪ INFO | TODO comment found |
| torch/_higher_order_ops/utils.py | 1031 | ⚪ INFO | TODO comment found |
| torch/_inductor/async_compile.py | 888 | ⚪ INFO | TODO comment found |
| torch/_inductor/autoheuristic/autoheuristic.py | 251 | ⚪ INFO | TODO comment found |
| torch/_inductor/bounds.py | 260 | ⚪ INFO | TODO comment found |
| torch/_inductor/choices.py | 266 | ⚪ INFO | TODO comment found |
| torch/_inductor/choices.py | 290 | ⚪ INFO | TODO comment found |
| torch/_inductor/choices.py | 504 | ⚪ INFO | TODO comment found |
| torch/_inductor/codecache.py | 731 | ⚪ INFO | TODO comment found |
| torch/_inductor/codecache.py | 803 | ⚪ INFO | TODO comment found |
| torch/_inductor/codecache.py | 1074 | ⚪ INFO | TODO comment found |
| torch/_inductor/codecache.py | 1572 | ⚪ INFO | TODO comment found |
| torch/_inductor/codecache.py | 3442 | ⚪ INFO | TODO comment found |
| torch/_inductor/codecache.py | 5169 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/common.py | 907 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/common.py | 1095 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/common.py | 1096 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/common.py | 2727 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp.py | 1665 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp.py | 2941 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp.py | 2947 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp.py | 3894 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp.py | 5274 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp.py | 5282 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp.py | 6091 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_flex_attention_template.py | 24 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_flex_attention_template.py | 520 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_flex_attention_template.py | 833 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_flex_attention_template.py | 1454 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_flex_attention_template.py | 1460 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_gemm_template.py | 824 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_gemm_template.py | 857 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_gemm_template.py | 1399 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_micro_gemm.py | 1641 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_template.py | 130 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_utils.py | 203 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_utils.py | 783 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu.py | 242 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu.py | 631 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu.py | 1895 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu.py | 1975 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu.py | 1995 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu.py | 2140 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu.py | 2233 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu.py | 2631 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu.py | 3076 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu.py | 3369 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu.py | 4025 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu.py | 4050 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_inductor/codegen/cpp_wrapper_cpu_array_ref.py | 600 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu_array_ref.py | 775 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu_array_ref.py | 784 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu_array_ref.py | 1093 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_cpu_array_ref.py | 1123 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cpp_wrapper_gpu.py | 1166 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cutedsl/cutedsl_kernel.py | 481 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cutedsl/cutedsl_kernel.py | 637 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cutlass/gemm_template.py | 990 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cutlass/gemm_template.py | 1251 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cutlass/gemm_template.py | 1602 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/cutlass/utils.py | 263 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/debug_utils.py | 164 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/halide.py | 777 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/mps.py | 145 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/mps.py | 240 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/mps.py | 241 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/mps.py | 382 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/pallas.py | 984 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/pallas.py | 1893 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/rocm/rocm_template.py | 24 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_inductor/codegen/simd.py | 1316 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_inductor/codegen/simd.py | 2329 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/simd.py | 4282 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/simd.py | 4311 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/simd.py | 4474 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/simd.py | 4534 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/triton.py | 980 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/triton.py | 1668 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/triton.py | 2706 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/triton.py | 3075 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/triton.py | 3810 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/triton_combo_kernel.py | 965 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/wrapper.py | 211 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/wrapper.py | 2408 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/wrapper.py | 2844 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/wrapper.py | 3609 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/wrapper.py | 4138 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/wrapper.py | 4675 | ⚪ INFO | TODO comment found |
| torch/_inductor/codegen/wrapper.py | 4684 | ⚪ INFO | TODO comment found |
| torch/_inductor/comm_analysis.py | 853 | ⚪ INFO | TODO comment found |
| torch/_inductor/comms.py | 2169 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx.py | 968 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx.py | 983 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx.py | 1176 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx.py | 1277 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx.py | 1308 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx.py | 1371 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx.py | 1591 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx.py | 1784 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx.py | 2222 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx.py | 2506 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx_async.py | 130 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx_ext.py | 387 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx_ext.py | 461 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx_ext.py | 534 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx_ext.py | 567 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx_ext.py | 683 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx_subproc.py | 36 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx_subproc.py | 40 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx_subproc.py | 53 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx_subproc.py | 69 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx_subproc.py | 78 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx_subproc.py | 82 | ⚪ INFO | TODO comment found |
| torch/_inductor/compile_fx_subproc.py | 89 | ⚪ INFO | TODO comment found |
| torch/_inductor/config.py | 608 | ⚪ INFO | TODO comment found |
| torch/_inductor/config.py | 1380 | ⚪ INFO | TODO comment found |
| torch/_inductor/config.py | 1561 | ⚪ INFO | TODO comment found |
| torch/_inductor/config.py | 2251 | ⚪ INFO | TODO comment found |
| torch/_inductor/config.py | 2255 | ⚪ INFO | TODO comment found |
| torch/_inductor/config.py | 2277 | ⚪ INFO | TODO comment found |
| torch/_inductor/cpp_builder.py | 1570 | ⚪ INFO | TODO comment found |
| torch/_inductor/cpp_builder.py | 2780 | ⚪ INFO | TODO comment found |
| torch/_inductor/cpu_vec_isa.py | 88 | ⚪ INFO | TODO comment found |
| torch/_inductor/cpu_vec_isa.py | 300 | ⚪ INFO | TODO comment found |
| torch/_inductor/cpu_vec_isa.py | 472 | ⚪ INFO | TODO comment found |
| torch/_inductor/cudagraph_trees.py | 1092 | ⚪ INFO | TODO comment found |
| torch/_inductor/cudagraph_trees.py | 1855 | ⚪ INFO | TODO comment found |
| torch/_inductor/cudagraph_trees.py | 2161 | ⚪ INFO | TODO comment found |
| torch/_inductor/cudagraph_trees.py | 2810 | ⚪ INFO | TODO comment found |
| torch/_inductor/decomposition.py | 199 | ⚪ INFO | TODO comment found |
| torch/_inductor/decomposition.py | 367 | ⚪ INFO | TODO comment found |
| torch/_inductor/decomposition.py | 434 | ⚪ INFO | TODO comment found |
| torch/_inductor/decomposition.py | 436 | ⚪ INFO | TODO comment found |
| torch/_inductor/dependencies.py | 636 | ⚪ INFO | TODO comment found |
| torch/_inductor/distributed_autotune.py | 248 | ⚪ INFO | TODO comment found |
| torch/_inductor/distributed_autotune.py | 273 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/auto_chunker/__init__.py | 32 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/bucketing.py | 890 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/bucketing.py | 1021 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/decomp_comms.py | 32 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/decompose_mem_bound_mm.py | 20 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/freezing_patterns.py | 60 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/joint_graph.py | 406 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/joint_graph.py | 1171 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/micro_pipeline_tp.py | 641 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/misc_patterns.py | 212 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/mkldnn_fusion.py | 1262 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/mkldnn_fusion.py | 1607 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/node_runtime_estimation.py | 95 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/overlap_scheduling.py | 1108 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/overlap_scheduling.py | 1412 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/overlap_scheduling.py | 1668 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/pad_mm.py | 427 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/post_grad.py | 1848 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/pre_grad.py | 413 | ⚪ INFO | TODO comment found |
| torch/_inductor/fx_passes/pre_grad.py | 612 | ⚪ INFO | TODO comment found |
| torch/_inductor/graph.py | 625 | ⚪ INFO | TODO comment found |
| torch/_inductor/graph.py | 627 | ⚪ INFO | TODO comment found |
| torch/_inductor/graph.py | 1431 | ⚪ INFO | TODO comment found |
| torch/_inductor/ir.py | 1874 | ⚪ INFO | TODO comment found |
| torch/_inductor/ir.py | 2656 | ⚪ INFO | TODO comment found |
| torch/_inductor/ir.py | 2839 | ⚪ INFO | TODO comment found |
| torch/_inductor/ir.py | 3015 | ⚪ INFO | TODO comment found |
| torch/_inductor/ir.py | 3792 | ⚪ INFO | TODO comment found |
| torch/_inductor/ir.py | 3923 | ⚪ INFO | TODO comment found |
| torch/_inductor/ir.py | 5661 | ⚪ INFO | TODO comment found |
| torch/_inductor/ir.py | 6889 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_inductor/ir.py | 6983 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_inductor/ir.py | 7545 | ⚪ INFO | TODO comment found |
| torch/_inductor/ir.py | 7639 | ⚪ INFO | TODO comment found |
| torch/_inductor/ir.py | 7868 | ⚪ INFO | TODO comment found |
| torch/_inductor/ir.py | 7972 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_inductor/ir.py | 9093 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/conv.py | 535 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/conv.py | 571 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/conv.py | 582 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/conv.py | 1136 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/conv.py | 1164 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/conv.py | 1192 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/conv.py | 1238 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/conv.py | 1272 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/custom_op.py | 395 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/flex/flex_attention.py | 694 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/flex/flex_attention.py | 884 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/flex/flex_decoding.py | 167 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/flex/flex_decoding.py | 284 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/flex/flex_decoding.py | 348 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/flex_gemm/runtime.py | 300 | ⚪ INFO | TODO comment found |
| torch/_inductor/kernel/mm.py | 91 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_inductor/kernel/mm.py | 1373 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 1377 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 2185 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 2306 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 2665 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 2721 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 2959 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 3339 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 4525 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_inductor/lowering.py | 4904 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 5071 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 5729 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 6168 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 6566 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 8797 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 8811 | ⚪ INFO | TODO comment found |
| torch/_inductor/lowering.py | 9366 | ⚪ INFO | TODO comment found |
| torch/_inductor/memory.py | 1059 | ⚪ INFO | TODO comment found |
| torch/_inductor/memory.py | 1091 | ⚪ INFO | TODO comment found |
| torch/_inductor/ops_handler.py | 258 | ⚪ INFO | TODO comment found |
| torch/_inductor/ops_handler.py | 280 | ⚪ INFO | TODO comment found |
| torch/_inductor/ops_handler.py | 299 | ⚪ INFO | TODO comment found |
| torch/_inductor/output_code.py | 83 | ⚪ INFO | TODO comment found |
| torch/_inductor/output_code.py | 108 | ⚪ INFO | TODO comment found |
| torch/_inductor/output_code.py | 298 | ⚪ INFO | TODO comment found |
| torch/_inductor/output_code.py | 965 | ⚪ INFO | TODO comment found |
| torch/_inductor/pattern_matcher.py | 1850 | ⚪ INFO | TODO comment found |
| torch/_inductor/pattern_matcher.py | 2802 | ⚪ INFO | TODO comment found |
| torch/_inductor/runtime/autotune_cache.py | 387 | ⚪ INFO | TODO comment found |
| torch/_inductor/runtime/autotune_cache.py | 572 | ⚪ INFO | TODO comment found |
| torch/_inductor/runtime/autotune_cache.py | 631 | ⚪ INFO | TODO comment found |
| torch/_inductor/runtime/benchmarking.py | 864 | ⚪ INFO | TODO comment found |
| torch/_inductor/runtime/halide_helpers.py | 37 | ⚪ INFO | TODO comment found |
| torch/_inductor/runtime/static_triton_launcher.py | 267 | ⚪ INFO | TODO comment found |
| torch/_inductor/runtime/static_triton_launcher.py | 312 | ⚪ INFO | TODO comment found |
| torch/_inductor/runtime/triton_heuristics.py | 1908 | ⚪ INFO | TODO comment found |
| torch/_inductor/runtime/triton_heuristics.py | 4505 | ⚪ INFO | TODO comment found |
| torch/_inductor/scheduler.py | 351 | ⚪ INFO | TODO comment found |
| torch/_inductor/scheduler.py | 809 | ⚪ INFO | TODO comment found |
| torch/_inductor/scheduler.py | 849 | ⚪ INFO | TODO comment found |
| torch/_inductor/scheduler.py | 886 | ⚪ INFO | TODO comment found |
| torch/_inductor/scheduler.py | 1735 | ⚪ INFO | TODO comment found |
| torch/_inductor/scheduler.py | 1826 | ⚪ INFO | TODO comment found |
| torch/_inductor/scheduler.py | 5581 | ⚪ INFO | TODO comment found |
| torch/_inductor/scheduler.py | 5684 | ⚪ INFO | TODO comment found |
| torch/_inductor/scheduler.py | 7529 | ⚪ INFO | TODO comment found |
| torch/_inductor/scheduler.py | 9751 | ⚪ INFO | TODO comment found |
| torch/_inductor/select_algorithm.py | 1305 | ⚪ INFO | TODO comment found |
| torch/_inductor/select_algorithm.py | 1992 | ⚪ INFO | TODO comment found |
| torch/_inductor/shape_propagation.py | 78 | ⚪ INFO | TODO comment found |
| torch/_inductor/sizevars.py | 952 | ⚪ INFO | TODO comment found |
| torch/_inductor/template_heuristics/__init__.py | 2 | ⚪ INFO | TODO comment found |
| torch/_inductor/template_heuristics/triton.py | 686 | ⚪ INFO | TODO comment found |
| torch/_inductor/template_heuristics/triton.py | 1086 | ⚪ INFO | TODO comment found |
| torch/_inductor/tiling_utils.py | 693 | ⚪ INFO | TODO comment found |
| torch/_inductor/utils.py | 552 | ⚪ INFO | TODO comment found |
| torch/_inductor/utils.py | 578 | ⚪ INFO | TODO comment found |
| torch/_inductor/utils.py | 1585 | ⚪ INFO | TODO comment found |
| torch/_inductor/utils.py | 2591 | ⚪ INFO | TODO comment found |
| torch/_inductor/utils.py | 3376 | ⚪ INFO | TODO comment found |
| torch/_inductor/utils.py | 3681 | ⚪ INFO | TODO comment found |
| torch/_inductor/utils.py | 4052 | ⚪ INFO | TODO comment found |
| torch/_inductor/utils.py | 4273 | ⚪ INFO | TODO comment found |
| torch/_inductor/utils.py | 4578 | ⚪ INFO | TODO comment found |
| torch/_inductor/virtualized.py | 152 | ⚪ INFO | TODO comment found |
| torch/_inductor/virtualized.py | 198 | ⚪ INFO | TODO comment found |
| torch/_jit_internal.py | 1145 | ⚪ INFO | TODO comment found |
| torch/_lazy/extract_compiled_graph.py | 132 | ⚪ INFO | TODO comment found |
| torch/_lazy/extract_compiled_graph.py | 189 | ⚪ INFO | TODO comment found |
| torch/_library/custom_ops.py | 1039 | ⚪ INFO | TODO comment found |
| torch/_library/fake_class_registry.py | 205 | ⚪ INFO | TODO comment found |
| torch/_library/infer_schema.py | 72 | ⚪ INFO | TODO comment found |
| torch/_library/triton.py | 442 | ⚪ INFO | TODO comment found |
| torch/_library/utils.py | 350 | ⚪ INFO | TODO comment found |
| torch/_library/utils.py | 360 | ⚪ INFO | TODO comment found |
| torch/_logging/_internal.py | 43 | ⚪ INFO | TODO comment found |
| torch/_logging/_internal.py | 1414 | ⚪ INFO | TODO comment found |
| torch/_logging/_internal.py | 1499 | ⚪ INFO | TODO comment found |
| torch/_meta_registrations.py | 676 | ⚪ INFO | TODO comment found |
| torch/_meta_registrations.py | 4883 | ⚪ INFO | TODO comment found |
| torch/_meta_registrations.py | 5926 | ⚪ INFO | TODO comment found |
| torch/_meta_registrations.py | 7495 | ⚪ INFO | TODO comment found |
| torch/_meta_registrations.py | 8413 | ⚪ INFO | TODO comment found |
| torch/_numpy/random.py | 162 | ⚪ INFO | TODO comment found |
| torch/_ops.py | 78 | ⚪ INFO | TODO comment found |
| torch/_ops.py | 951 | ⚪ INFO | TODO comment found |
| torch/_ops.py | 1015 | ⚪ INFO | TODO comment found |
| torch/_ops.py | 1049 | ⚪ INFO | TODO comment found |
| torch/_ops.py | 1058 | ⚪ INFO | TODO comment found |
| torch/_ops.py | 1238 | ⚪ INFO | TODO comment found |
| torch/_ops.py | 1282 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 245 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 396 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 478 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 1013 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 1585 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 1646 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 1856 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2015 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2094 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2095 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_prims/__init__.py | 2126 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2127 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_prims/__init__.py | 2158 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2159 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/_prims/__init__.py | 2181 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2203 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2268 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2428 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2429 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2476 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2477 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2519 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2574 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2618 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2705 | ⚪ INFO | TODO comment found |
| torch/_prims/__init__.py | 2874 | ⚪ INFO | TODO comment found |
| torch/_prims/context.py | 61 | ⚪ INFO | TODO comment found |
| torch/_prims/executor.py | 61 | ⚪ INFO | TODO comment found |
| torch/_prims/rng_prims.py | 266 | ⚪ INFO | TODO comment found |
| torch/_prims_common/__init__.py | 54 | ⚪ INFO | TODO comment found |
| torch/_prims_common/__init__.py | 56 | ⚪ INFO | TODO comment found |
| torch/_prims_common/__init__.py | 141 | ⚪ INFO | TODO comment found |
| torch/_prims_common/__init__.py | 178 | ⚪ INFO | TODO comment found |
| torch/_prims_common/__init__.py | 232 | ⚪ INFO | TODO comment found |
| torch/_prims_common/__init__.py | 581 | ⚪ INFO | TODO comment found |
| torch/_prims_common/__init__.py | 1245 | ⚪ INFO | TODO comment found |
| torch/_prims_common/__init__.py | 1265 | ⚪ INFO | TODO comment found |
| torch/_prims_common/__init__.py | 1413 | ⚪ INFO | TODO comment found |
| torch/_prims_common/__init__.py | 1570 | ⚪ INFO | TODO comment found |
| torch/_prims_common/__init__.py | 1596 | ⚪ INFO | TODO comment found |
| torch/_prims_common/__init__.py | 1864 | ⚪ INFO | TODO comment found |
| torch/_prims_common/__init__.py | 2184 | ⚪ INFO | TODO comment found |
| torch/_prims_common/wrappers.py | 55 | ⚪ INFO | TODO comment found |
| torch/_prims_common/wrappers.py | 186 | ⚪ INFO | TODO comment found |
| torch/_prims_common/wrappers.py | 463 | ⚪ INFO | TODO comment found |
| torch/_prims_common/wrappers.py | 480 | ⚪ INFO | TODO comment found |
| torch/_prims_common/wrappers.py | 482 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 120 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 210 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 543 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 854 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 1097 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 1762 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 1843 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 2261 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 2286 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 2985 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 3124 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 3248 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 3519 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 4850 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 4978 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 5836 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 5866 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 6495 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 6530 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 6812 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 6834 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 6877 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 6888 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 6966 | ⚪ INFO | TODO comment found |
| torch/_refs/__init__.py | 7016 | ⚪ INFO | TODO comment found |
| torch/_refs/nn/functional/__init__.py | 616 | ⚪ INFO | TODO comment found |
| torch/_refs/nn/functional/__init__.py | 641 | ⚪ INFO | TODO comment found |
| torch/_refs/nn/functional/__init__.py | 705 | ⚪ INFO | TODO comment found |
| torch/_refs/nn/functional/__init__.py | 753 | ⚪ INFO | TODO comment found |
| torch/_refs/nn/functional/__init__.py | 754 | ⚪ INFO | TODO comment found |
| torch/_refs/nn/functional/__init__.py | 833 | ⚪ INFO | TODO comment found |
| torch/_refs/nn/functional/__init__.py | 889 | ⚪ INFO | TODO comment found |
| torch/_refs/nn/functional/__init__.py | 891 | ⚪ INFO | TODO comment found |
| torch/_refs/nn/functional/__init__.py | 975 | ⚪ INFO | TODO comment found |
| torch/_refs/nn/functional/__init__.py | 1158 | ⚪ INFO | TODO comment found |
| torch/_refs/special/__init__.py | 235 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_impls.py | 157 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_impls.py | 237 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_impls.py | 322 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_impls.py | 358 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_impls.py | 1234 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_impls.py | 1566 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_impls.py | 1814 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_impls.py | 2026 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_impls.py | 2072 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_impls.py | 2095 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_tensor.py | 67 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_tensor.py | 509 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_tensor.py | 805 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_tensor.py | 1487 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_tensor.py | 2024 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_tensor.py | 2954 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_tensor.py | 2981 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_tensor.py | 3483 | ⚪ INFO | TODO comment found |
| torch/_subclasses/fake_utils.py | 272 | ⚪ INFO | TODO comment found |
| torch/_subclasses/functional_tensor.py | 199 | ⚪ INFO | TODO comment found |
| torch/_subclasses/functional_tensor.py | 730 | ⚪ INFO | TODO comment found |
| torch/_subclasses/functional_tensor.py | 756 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 151 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 173 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 174 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 175 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 310 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 358 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 403 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 451 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 959 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 1066 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 1388 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 1656 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 1675 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 1725 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 1797 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 1805 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 2244 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 2248 | ⚪ INFO | TODO comment found |
| torch/_subclasses/meta_utils.py | 2328 | ⚪ INFO | TODO comment found |
| torch/_subclasses/schema_check_mode.py | 104 | ⚪ INFO | TODO comment found |
| torch/_tensor.py | 148 | ⚪ INFO | TODO comment found |
| torch/_tensor.py | 201 | ⚪ INFO | TODO comment found |
| torch/_tensor.py | 274 | ⚪ INFO | TODO comment found |
| torch/_tensor.py | 387 | ⚪ INFO | TODO comment found |
| torch/_tensor.py | 502 | ⚪ INFO | TODO comment found |
| torch/_tensor.py | 511 | ⚪ INFO | TODO comment found |
| torch/_tensor.py | 641 | ⚪ INFO | TODO comment found |
| torch/_tensor_str.py | 345 | ⚪ INFO | TODO comment found |
| torch/_tensor_str.py | 452 | ⚪ INFO | TODO comment found |
| torch/_tensor_str.py | 608 | ⚪ INFO | TODO comment found |
| torch/_torch_docs.py | 5210 | ⚪ INFO | TODO comment found |
| torch/_utils.py | 193 | ⚪ INFO | TODO comment found |
| torch/_utils.py | 324 | ⚪ INFO | TODO comment found |
| torch/_utils.py | 446 | ⚪ INFO | TODO comment found |
| torch/_utils_internal.py | 261 | ⚪ INFO | TODO comment found |
| torch/_vendor/quack/gemm_base.py | 139 | ⚪ INFO | TODO comment found |
| torch/_vendor/quack/gemm_base.py | 164 | ⚪ INFO | TODO comment found |
| torch/_vendor/quack/gemm_config.py | 81 | ⚪ INFO | TODO comment found |
| torch/_vendor/quack/gemm_sm90.py | 822 | ⚪ INFO | TODO comment found |
| torch/_vendor/quack/layout_utils.py | 213 | ⚪ INFO | TODO comment found |
| torch/amp/grad_scaler.py | 287 | ⚪ INFO | TODO comment found |
| torch/ao/nn/intrinsic/quantized/modules/bn_relu.py | 53 | ⚪ INFO | TODO comment found |
| torch/ao/nn/intrinsic/quantized/modules/bn_relu.py | 105 | ⚪ INFO | TODO comment found |
| torch/ao/nn/intrinsic/quantized/modules/conv_relu.py | 20 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantizable/modules/activation.py | 379 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantizable/modules/rnn.py | 140 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/dynamic/modules/rnn.py | 318 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/dynamic/modules/rnn.py | 1155 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/dynamic/modules/rnn.py | 1170 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/dynamic/modules/rnn.py | 1266 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/modules/activation.py | 255 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/modules/conv.py | 157 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/reference/modules/rnn.py | 99 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/reference/modules/rnn.py | 186 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/reference/modules/rnn.py | 223 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/reference/modules/rnn.py | 748 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/reference/modules/utils.py | 209 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/reference/modules/utils.py | 235 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/reference/modules/utils.py | 265 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/reference/modules/utils.py | 271 | ⚪ INFO | TODO comment found |
| torch/ao/nn/quantized/reference/modules/utils.py | 295 | ⚪ INFO | TODO comment found |
| torch/ao/nn/sparse/quantized/dynamic/linear.py | 154 | ⚪ INFO | TODO comment found |
| torch/ao/nn/sparse/quantized/dynamic/linear.py | 155 | ⚪ INFO | TODO comment found |
| torch/ao/nn/sparse/quantized/linear.py | 256 | ⚪ INFO | TODO comment found |
| torch/ao/nn/sparse/quantized/linear.py | 257 | ⚪ INFO | TODO comment found |
| torch/ao/ns/fx/graph_passes.py | 991 | ⚪ INFO | TODO comment found |
| torch/ao/ns/fx/pattern_utils.py | 76 | ⚪ INFO | TODO comment found |
| torch/ao/pruning/sparsifier/base_sparsifier.py | 166 | ⚪ INFO | TODO comment found |
| torch/ao/pruning/sparsifier/base_sparsifier.py | 173 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/_common_operator_config_utils.py | 32 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/_common_operator_config_utils.py | 139 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/_common_operator_config_utils.py | 410 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/_qnnpack_pt2e.py | 26 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/_qnnpack_pt2e.py | 94 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/_qnnpack_pt2e.py | 144 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/_qnnpack_pt2e.py | 158 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/backend_config.py | 53 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/backend_config.py | 292 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/executorch.py | 1 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/executorch.py | 261 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/executorch.py | 305 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/fbgemm.py | 27 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/native.py | 173 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/backend_config/qnnpack.py | 82 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/experimental/observer.py | 14 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fake_quantize.py | 198 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fake_quantize.py | 339 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fake_quantize.py | 484 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_decomposed.py | 172 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_decomposed.py | 286 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_decomposed.py | 386 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_decomposed.py | 1032 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_decomposed.py | 1042 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_decomposed.py | 1066 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_lower_to_native_backend.py | 268 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_lower_to_native_backend.py | 274 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_lower_to_native_backend.py | 303 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_lower_to_native_backend.py | 399 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_lower_to_native_backend.py | 877 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_lower_to_native_backend.py | 901 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_lower_to_native_backend.py | 904 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_lower_to_native_backend.py | 1238 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_lower_to_native_backend.py | 1243 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_lower_to_native_backend.py | 1253 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/_lower_to_native_backend.py | 1288 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 163 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 210 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 222 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 318 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 425 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 455 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 459 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 483 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 508 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 525 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 663 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 714 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 749 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 810 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 825 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 989 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 1310 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/convert.py | 1316 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/custom_config.py | 24 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/custom_config.py | 183 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/custom_config.py | 418 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/custom_config.py | 497 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/fuse.py | 27 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/fuse.py | 78 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/fuse.py | 119 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/fuse.py | 153 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/fuse_handler.py | 109 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/fuse_handler.py | 127 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/lstm_utils.py | 22 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/lstm_utils.py | 109 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/match_utils.py | 142 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 168 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 198 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 222 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 237 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 258 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 260 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 272 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 475 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 765 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 778 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 853 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 1141 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 1216 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 1476 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 1581 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 1618 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 1626 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 1659 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 1763 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/prepare.py | 2072 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/qconfig_mapping_utils.py | 75 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/qconfig_mapping_utils.py | 77 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/quantize_handler.py | 164 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/quantize_handler.py | 174 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/quantize_handler.py | 179 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/quantize_handler.py | 184 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/quantize_handler.py | 189 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/quantize_handler.py | 194 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/quantize_handler.py | 199 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/quantize_handler.py | 204 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/quantize_handler.py | 209 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/quantize_handler.py | 214 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/quantize_handler.py | 219 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/quantize_handler.py | 224 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/utils.py | 43 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/utils.py | 249 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/utils.py | 885 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/utils.py | 894 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/fx/utils.py | 940 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/observer.py | 415 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/observer.py | 418 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/observer.py | 524 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/observer.py | 1317 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/observer.py | 2146 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/qconfig.py | 52 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/qconfig.py | 285 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/qconfig.py | 448 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/qconfig_mapping.py | 40 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/qconfig_mapping.py | 47 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/qconfig_mapping.py | 139 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/qconfig_mapping.py | 323 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/qconfig_mapping.py | 350 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/quant_type.py | 26 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/quantization_mappings.py | 180 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/quantization_mappings.py | 345 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/quantize.py | 277 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/quantize.py | 387 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/quantize.py | 412 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/quantize.py | 436 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/quantize_fx.py | 354 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/quantize_fx.py | 493 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/quantize_fx.py | 619 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/quantize_fx.py | 670 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/quantize_fx.py | 722 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/utils.py | 34 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/utils.py | 46 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/utils.py | 129 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/utils.py | 131 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/utils.py | 706 | ⚪ INFO | TODO comment found |
| torch/ao/quantization/utils.py | 709 | ⚪ INFO | TODO comment found |
| torch/autograd/__init__.py | 132 | ⚪ INFO | TODO comment found |
| torch/autograd/_functions/tensor.py | 34 | ⚪ INFO | TODO comment found |
| torch/autograd/forward_ad.py | 106 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/autograd/gradcheck.py | 710 | ⚪ INFO | TODO comment found |
| torch/autograd/gradcheck.py | 955 | ⚪ INFO | TODO comment found |
| torch/autograd/gradcheck.py | 1953 | ⚪ INFO | TODO comment found |
| torch/autograd/gradcheck.py | 2252 | ⚪ INFO | TODO comment found |
| torch/autograd/graph.py | 730 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/autograd/graph.py | 745 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/autograd/profiler.py | 1343 | ⚪ INFO | TODO comment found |
| torch/autograd/profiler.py | 1381 | ⚪ INFO | TODO comment found |
| torch/autograd/profiler.py | 1419 | ⚪ INFO | TODO comment found |
| torch/autograd/profiler.py | 1685 | ⚪ INFO | TODO comment found |
| torch/autograd/profiler_legacy.py | 31 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/prepare.py | 81 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/prepare.py | 96 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/prepare.py | 151 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 14 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 15 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 151 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 207 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 242 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 273 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 511 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 1316 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 1318 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 1703 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 1741 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 2101 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 2150 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 2215 | ⚪ INFO | TODO comment found |
| torch/backends/_nnapi/serializer.py | 2474 | ⚪ INFO | TODO comment found |
| torch/compiler/__init__.py | 552 | ⚪ INFO | TODO comment found |
| torch/contrib/_tensorboard_vis.py | 147 | ⚪ INFO | TODO comment found |
| torch/cpu/amp/autocast_mode.py | 23 | ⚪ INFO | TODO comment found |
| torch/cpu/amp/autocast_mode.py | 62 | ⚪ INFO | TODO comment found |
| torch/csrc/CudaIPCTypes.cpp | 169 | ⚪ INFO | TODO comment found |
| torch/csrc/CudaIPCTypes.h | 71 | ⚪ INFO | TODO comment found |
| torch/csrc/DataLoader.cpp | 10 | ⚪ INFO | TODO comment found |
| torch/csrc/Device.cpp | 195 | ⚪ INFO | TODO comment found |
| torch/csrc/Device.cpp | 252 | ⚪ INFO | TODO comment found |
| torch/csrc/Event.cpp | 50 | ⚪ INFO | TODO comment found |
| torch/csrc/Event.cpp | 154 | ⚪ INFO | TODO comment found |
| torch/csrc/PyInterpreter.cpp | 52 | ⚪ INFO | TODO comment found |
| torch/csrc/PyInterpreter.cpp | 206 | ⚪ INFO | TODO comment found |
| torch/csrc/PyInterpreter.cpp | 207 | ⚪ INFO | TODO comment found |
| torch/csrc/PyInterpreter.cpp | 354 | ⚪ INFO | TODO comment found |
| torch/csrc/PyInterpreter.cpp | 355 | ⚪ INFO | TODO comment found |
| torch/csrc/PyInterpreter.cpp | 972 | ⚪ INFO | TODO comment found |
| torch/csrc/PyInterpreter.h | 11 | ⚪ INFO | TODO comment found |
| torch/csrc/Storage.cpp | 221 | ⚪ INFO | TODO comment found |
| torch/csrc/Storage.cpp | 352 | ⚪ INFO | TODO comment found |
| torch/csrc/Storage.cpp | 353 | ⚪ INFO | TODO comment found |
| torch/csrc/Storage.cpp | 368 | ⚪ INFO | TODO comment found |
| torch/csrc/StorageSharing.cpp | 106 | ⚪ INFO | TODO comment found |
| torch/csrc/StorageSharing.cpp | 107 | ⚪ INFO | TODO comment found |
| torch/csrc/StorageSharing.cpp | 514 | ⚪ INFO | TODO comment found |
| torch/csrc/StorageSharing.cpp | 518 | ⚪ INFO | TODO comment found |
| torch/csrc/api/include/torch/nn/parallel/data_parallel.h | 88 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/FunctionsManual.cpp | 1480 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/FunctionsManual.cpp | 2465 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/FunctionsManual.cpp | 3315 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/FunctionsManual.cpp | 3324 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/FunctionsManual.cpp | 3340 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/FunctionsManual.cpp | 4858 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/FunctionsManual.cpp | 5517 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/FunctionsManual.cpp | 6343 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/FunctionsManual.cpp | 7215 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/autograd/FunctionsManual.cpp | 7315 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/autograd/VariableTypeManual.cpp | 197 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/VariableTypeUtils.h | 134 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/autograd.cpp | 25 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/autograd_not_implemented_fallback.cpp | 444 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/autograd_not_implemented_fallback.cpp | 456 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/autograd_not_implemented_fallback.cpp | 606 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/engine.cpp | 935 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/autograd/engine.cpp | 964 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/functions/basic_ops.cpp | 38 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/autograd/functions/tensor.cpp | 204 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/input_buffer.cpp | 69 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/input_metadata.cpp | 3 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/node.h | 579 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/profiler_kineto.cpp | 40 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/profiler_legacy.cpp | 251 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/profiler_legacy.cpp | 254 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/profiler_python.cpp | 493 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/python_engine.cpp | 84 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/python_engine.cpp | 400 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/python_function.cpp | 81 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/python_function.cpp | 855 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/python_torch_functions_manual.cpp | 655 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/python_variable.cpp | 696 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/python_variable.cpp | 751 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/python_variable.cpp | 786 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/python_variable.cpp | 1965 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/python_variable_indexing.cpp | 54 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/python_variable_indexing.cpp | 151 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/python_variable_indexing.cpp | 511 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/utils/grad_layout_contract.h | 20 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/utils/grad_layout_contract.h | 42 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/variable.cpp | 692 | ⚪ INFO | TODO comment found |
| torch/csrc/autograd/variable.h | 903 | ⚪ INFO | TODO comment found |
| torch/csrc/cuda/CUDAPluggableAllocator.cpp | 380 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/autograd/autograd.cpp | 19 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/distributed/autograd/context/context.cpp | 95 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/autograd/engine/dist_engine.h | 115 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/Functional.cpp | 22 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/Functional.cpp | 902 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/NCCLUtils.cpp | 159 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/NCCLUtils.cpp | 250 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/Ops.cpp | 703 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroup.cpp | 250 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupGloo.cpp | 210 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/distributed/c10d/ProcessGroupGloo.cpp | 662 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupGloo.cpp | 667 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupGloo.cpp | 716 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupGloo.cpp | 720 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupGloo.cpp | 759 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupGloo.cpp | 791 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupGloo.cpp | 795 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupNCCL.cpp | 226 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupNCCL.cpp | 1000 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupNCCL.cpp | 1342 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupNCCL.cpp | 1640 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupNCCL.cpp | 2356 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupNCCL.cpp | 2481 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupNCCL.cpp | 2880 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupNCCL.cpp | 3399 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupNCCL.cpp | 3869 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupNCCL.cpp | 4487 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupNCCL.cpp | 5057 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupNCCL.cpp | 5174 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupNCCL.cpp | 5234 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupUCC.cpp | 209 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupUCC.cpp | 558 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ProcessGroupWrapper.cpp | 706 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/TCPStore.cpp | 385 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/gloo/ProcessGroupGlooCuda.cpp | 67 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/init.cpp | 105 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/init.cpp | 3152 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/init.cpp | 3619 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/logger.cpp | 235 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/quantization/quantization.cpp | 7 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/reducer.cpp | 1208 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/socket.cpp | 390 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/socket.cpp | 952 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/store/TCPStoreBackend.cpp | 353 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/store/TCPStoreLibUvBackend.cpp | 1439 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/symm_mem/CUDASymmetricMemoryUtils.cpp | 82 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/symm_mem/NVSHMEMSymmetricMemory.cpp | 128 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/symm_mem/NVSHMEMSymmetricMemory.cpp | 451 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/symm_mem/SymmetricMemory.cpp | 320 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ucc/UCCTracing.cpp | 69 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ucc/UCCTracing.cpp | 103 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/c10d/ucc/UCCUtils.cpp | 129 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/distributed/rpc/python_functions.cpp | 38 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/python_functions.cpp | 151 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/distributed/rpc/request_callback_no_python.cpp | 337 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/request_callback_no_python.cpp | 452 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/request_callback_no_python.cpp | 501 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/rref_context.cpp | 447 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/rref_context.h | 199 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/rref_impl.cpp | 182 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/rref_impl.h | 78 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/rref_impl.h | 91 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/rref_impl.h | 189 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/rref_impl.h | 190 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/rref_proto.h | 12 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/script_call.cpp | 60 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/script_call.cpp | 144 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/tensorpipe_agent.cpp | 1081 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/tensorpipe_agent.cpp | 1242 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/tensorpipe_agent.cpp | 1255 | ⚪ INFO | TODO comment found |
| torch/csrc/distributed/rpc/tensorpipe_agent.h | 314 | ⚪ INFO | TODO comment found |
| torch/csrc/dynamo/init.cpp | 124 | ⚪ INFO | TODO comment found |
| torch/csrc/export/pybind.cpp | 23 | ⚪ INFO | TODO comment found |
| torch/csrc/functorch/init.cpp | 393 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/aoti_eager/kernel_holder.cpp | 533 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/aoti_runtime/device_utils.h | 10 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/inductor/aoti_runtime/interface.h | 84 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/aoti_runtime/model_base.h | 311 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/aoti_runtime/model_base.h | 1148 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/aoti_runtime/model_container.h | 179 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/aoti_torch/oss_proxy_executor.cpp | 410 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/aoti_torch/shim_common.cpp | 468 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/aoti_torch/shim_common.cpp | 867 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/aoti_torch/shim_common.cpp | 938 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/aoti_torch/shim_common.cpp | 956 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/aoti_torch/shim_common.cpp | 979 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/cpp_prefix.h | 1321 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/static_launcher/cuda.cpp | 165 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/static_launcher/xpu.cpp | 9 | ⚪ INFO | TODO comment found |
| torch/csrc/inductor/static_launcher/xpu.cpp | 108 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/api/compilation_unit.h | 173 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/api/function_impl.cpp | 147 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/api/function_impl.h | 140 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/backends/backend_detail.cpp | 44 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/backends/backend_detail.cpp | 102 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/backends/nnapi/nnapi_backend_lib.cpp | 69 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/backends/nnapi/nnapi_backend_lib.cpp | 89 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/backends/xnnpack/xnnpack_graph_builder.cpp | 172 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/fuser/codegen.cpp | 221 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/fuser/codegen.cpp | 354 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/fuser/compiler.cpp | 205 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/fuser/compiler.cpp | 212 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/fuser/executor.cpp | 24 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/fuser/kernel_cache.cpp | 43 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/fuser/kernel_spec.h | 51 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/fuser/kernel_spec.h | 52 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/onednn/decompose_silu.cpp | 14 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/onednn/graph_helper.cpp | 244 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/onednn/graph_helper.cpp | 264 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/onednn/graph_helper.cpp | 406 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/onednn/graph_helper.cpp | 562 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/onednn/guard_shape.cpp | 26 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/onednn/interface.cpp | 30 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/onednn/kernel.cpp | 17 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/codegen/onednn/kernel.cpp | 255 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/frontend/ir_emitter.cpp | 2921 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/frontend/ir_emitter.cpp | 4257 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/frontend/ir_emitter.cpp | 4282 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/frontend/schema_matching.cpp | 53 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/frontend/source_range.h | 514 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/frontend/tracer.cpp | 1003 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/frontend/tree_views.h | 583 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/frontend/tree_views.h | 597 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/frontend/tree_views.h | 607 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/frontend/tree_views.h | 624 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/alias_analysis.cpp | 90 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/alias_analysis.cpp | 670 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/alias_analysis.cpp | 740 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/alias_analysis.cpp | 772 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/ir.cpp | 170 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/ir.cpp | 275 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/ir.cpp | 495 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/ir.cpp | 496 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/ir.cpp | 503 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/ir.cpp | 509 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/ir.cpp | 629 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/ir.cpp | 2099 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/ir.cpp | 2105 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/ir.h | 238 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/ir.h | 1754 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/ir.h | 1829 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/irparser.cpp | 664 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/scope.cpp | 84 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/ir/subgraph_matcher.cpp | 66 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/mobile/import.cpp | 698 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/mobile/module.cpp | 141 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/mobile/nnc/aot_compiler.cpp | 36 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/mobile/nnc/aot_compiler.cpp | 152 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/mobile/nnc/aot_compiler.cpp | 162 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/mobile/nnc/aot_compiler.cpp | 312 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/mobile/nnc/aot_compiler.cpp | 354 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/mobile/nnc/context.cpp | 162 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/mobile/nnc/context.cpp | 291 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/mobile/nnc/context.h | 14 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/mobile/nnc/context.h | 32 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/mobile/observer.h | 39 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/mobile/promoted_prim_ops.cpp | 253 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/autocast.cpp | 77 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/autocast.cpp | 132 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/autocast.cpp | 153 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/autocast.cpp | 204 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/autocast.cpp | 265 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/autocast.cpp | 280 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/autocast.cpp | 298 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/autocast.cpp | 330 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/batch_mm.cpp | 129 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/check_strict_fusion.cpp | 127 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/check_strict_fusion.cpp | 128 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/concat_opt.cpp | 268 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/concat_opt.cpp | 287 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/concat_opt.cpp | 318 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/concat_opt.cpp | 375 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/create_functional_graphs.cpp | 20 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/create_functional_graphs.cpp | 129 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/freeze_module.cpp | 406 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/jit/passes/freeze_module.cpp | 830 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/freeze_module.cpp | 840 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/frozen_ops_to_mkldnn.cpp | 314 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/frozen_ops_to_mkldnn.cpp | 335 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/frozen_ops_to_mkldnn.cpp | 600 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/frozen_ops_to_mkldnn.cpp | 1138 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/graph_fuser.cpp | 415 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/graph_fuser.cpp | 785 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/graph_fuser.cpp | 1126 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/graph_rewrite_helper.cpp | 55 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx/function_extraction.cpp | 426 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx/list_model_parameters.cpp | 119 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx/peephole.cpp | 428 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/jit/passes/onnx/peephole.cpp | 584 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx/peephole.cpp | 687 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx/peephole.cpp | 1037 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx/peephole.cpp | 1038 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx/remove_inplace_ops_for_onnx.cpp | 676 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx/scalar_type_analysis.cpp | 328 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx/shape_type_inference.cpp | 1291 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx/shape_type_inference.cpp | 2102 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx/shape_type_inference.cpp | 2134 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx/shape_type_inference.cpp | 2493 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx/unpack_quantized_weights.cpp | 12 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx.cpp | 392 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx.cpp | 493 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/onnx.cpp | 580 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/peephole.cpp | 41 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/peephole.cpp | 54 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/peephole.cpp | 59 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/peephole.cpp | 165 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/peephole_non_tensor.cpp | 124 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/quantization/helper.cpp | 122 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/quantization/helper.cpp | 423 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/quantization/helper.h | 137 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/quantization/helper.h | 141 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/quantization/helper.h | 147 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/quantization/helper.h | 185 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/quantization/insert_observers.cpp | 293 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/quantization/insert_quant_dequant.cpp | 1053 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/quantization/insert_quant_dequant.cpp | 1417 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/quantization/insert_quant_dequant.cpp | 1490 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/quantization/insert_quant_dequant.cpp | 1546 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/quantization/quantization_patterns.h | 553 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/remove_mutation.cpp | 48 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/remove_mutation.cpp | 219 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/remove_mutation.cpp | 243 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/remove_mutation.cpp | 305 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/restore_mutation.cpp | 46 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/specialize_autogradzero.cpp | 245 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/subgraph_rewrite.cpp | 38 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/subgraph_rewrite.cpp | 216 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_analysis.cpp | 217 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_analysis.cpp | 427 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_analysis.cpp | 566 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_analysis.cpp | 641 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_analysis.cpp | 783 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_analysis.cpp | 790 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_analysis.cpp | 819 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_analysis.cpp | 826 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_analysis.cpp | 852 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_analysis.cpp | 977 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_analysis.cpp | 1094 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_cache.cpp | 50 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_cache.cpp | 104 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_cache.cpp | 116 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_cache.h | 9 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_runtime_fusion.cpp | 146 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_runtime_fusion.cpp | 158 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_runtime_fusion.cpp | 164 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_runtime_fusion.cpp | 337 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_runtime_fusion.cpp | 462 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_runtime_fusion.cpp | 594 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_runtime_fusion.cpp | 614 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_runtime_fusion.cpp | 653 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/symbolic_shape_runtime_fusion.cpp | 728 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/tensorexpr_fuser.cpp | 829 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/value_refinement_utils.cpp | 157 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/passes/value_refinement_utils.h | 17 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/python/pybind.h | 140 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/python/pybind_utils.cpp | 148 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/python/pybind_utils.cpp | 332 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/python/pybind_utils.cpp | 632 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/python/pybind_utils.h | 665 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/python/pybind_utils.h | 1112 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/python/pybind_utils.h | 1251 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/python/python_ir.cpp | 283 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/python/python_list.cpp | 37 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/python/python_list.h | 39 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/python/python_sugared_value.cpp | 1260 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/python/script_init.cpp | 1487 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/python/script_init.cpp | 1764 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/argument_spec.cpp | 263 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/jit/runtime/autodiff.cpp | 40 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/autodiff.cpp | 46 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/autodiff.cpp | 188 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/autodiff.cpp | 312 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/jit/runtime/autodiff.cpp | 660 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/autodiff.cpp | 669 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/decomposition_registry.cpp | 184 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/graph_executor.cpp | 404 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/instruction.cpp | 46 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/instruction.h | 89 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/logging.cpp | 12 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/operator.h | 144 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/profiling_graph_executor_impl.cpp | 548 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/profiling_graph_executor_impl.cpp | 625 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/profiling_record.cpp | 228 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/register_ops_utils.h | 357 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/register_prim_ops.cpp | 2805 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/register_prim_ops.cpp | 2944 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/register_prim_ops.cpp | 3083 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/register_prim_ops_fulljit.cpp | 210 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/register_prim_ops_fulljit.cpp | 341 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/register_prim_ops_fulljit.cpp | 359 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/register_special_ops.cpp | 334 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/register_special_ops.cpp | 392 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/register_special_ops.cpp | 406 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/register_special_ops.cpp | 420 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/register_special_ops.cpp | 431 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/static/impl.cpp | 1768 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/static/memory_planner.cpp | 323 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/static/memory_planner.h | 207 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/static/native_ops.cpp | 141 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/static/ops.cpp | 1996 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/static/passes.cpp | 41 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/static/passes.cpp | 95 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/static/passes.cpp | 175 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/static/passes.cpp | 193 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/static/passes.cpp | 323 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/symbolic_script.cpp | 85 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/jit/runtime/symbolic_script.cpp | 93 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/jit/runtime/symbolic_script.cpp | 125 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/jit/runtime/symbolic_script.cpp | 221 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/jit/runtime/symbolic_script.cpp | 285 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/jit/runtime/symbolic_script.cpp | 290 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/symbolic_script.cpp | 307 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/jit/runtime/symbolic_script.cpp | 1080 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/symbolic_shape_registry.cpp | 51 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/symbolic_shape_registry.cpp | 444 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/symbolic_shape_registry_util.cpp | 37 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/symbolic_shape_registry_util.cpp | 40 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/symbolic_shape_registry_util.cpp | 44 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/symbolic_shape_registry_util.cpp | 108 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/symbolic_shape_registry_util.cpp | 116 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/runtime/vararg_functions.cpp | 20 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/export.cpp | 772 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/export.cpp | 951 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/export_module.cpp | 427 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/export_module.cpp | 694 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/flatbuffer_serializer.cpp | 52 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/import.cpp | 53 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/import.cpp | 89 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/import_source.cpp | 408 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/pickle.h | 38 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/pickler.cpp | 321 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/pickler.h | 147 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/python_print.cpp | 107 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/unpickler.cpp | 93 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/serialization/unpickler.cpp | 750 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/block_codegen.cpp | 87 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/codegen.cpp | 158 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/codegen.cpp | 168 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/codegen.cpp | 293 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/codegen.h | 74 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cpp_codegen.cpp | 392 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cpp_codegen.cpp | 398 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 30 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 103 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 187 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 202 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 282 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 284 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 306 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 307 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 381 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 617 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 866 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 867 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 868 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 869 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 930 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 1116 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 1130 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/cuda_codegen.cpp | 1194 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/eval.cpp | 198 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/eval.cpp | 225 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/eval.cpp | 251 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/eval.cpp | 291 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/expr.cpp | 148 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/expr.h | 169 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/expr.h | 213 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/external_functions.cpp | 108 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/external_functions.cpp | 126 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/external_functions.cpp | 201 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/external_functions.cpp | 219 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/external_functions.cpp | 370 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/external_functions.cpp | 1314 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/external_functions.cpp | 1440 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/external_functions_core.cpp | 15 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/graph_opt.cpp | 300 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/graph_opt.cpp | 486 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/graph_opt.h | 102 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir.cpp | 115 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir.cpp | 120 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir.cpp | 127 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir.h | 258 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir.h | 282 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_cloner.cpp | 156 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_printer.cpp | 56 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_printer.cpp | 296 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_printer.cpp | 424 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_printer.cpp | 693 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_simplifier.cpp | 1899 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_simplifier.cpp | 1948 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_simplifier.cpp | 2053 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_simplifier.cpp | 2089 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_simplifier.cpp | 2647 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_simplifier.cpp | 2660 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_simplifier.cpp | 2743 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/jit/tensorexpr/ir_simplifier.cpp | 2768 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_simplifier.cpp | 2781 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_simplifier.cpp | 2865 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/csrc/jit/tensorexpr/ir_simplifier.cpp | 3064 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/ir_verifier.cpp | 124 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/kernel.cpp | 115 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/kernel.cpp | 197 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/kernel.cpp | 881 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/kernel.cpp | 1397 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/kernel.cpp | 1507 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/kernel.cpp | 1964 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/kernel.cpp | 2062 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/kernel.cpp | 2118 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 140 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 161 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 709 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 710 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 711 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 783 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 793 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 811 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 829 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 847 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 1534 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 1574 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 1658 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 1925 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/llvm_codegen.cpp | 2169 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/loopnest.cpp | 502 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/loopnest.cpp | 1008 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/loopnest.cpp | 1321 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/loopnest.cpp | 1649 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/loopnest.cpp | 2509 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/loopnest.cpp | 3118 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/loopnest.cpp | 3124 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/loopnest.cpp | 3131 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/loopnest.h | 143 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/loopnest.h | 476 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/loopnest.h | 597 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/loopnest_randomization.cpp | 732 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/lowerings.cpp | 34 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/lowerings.cpp | 39 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/lowerings.cpp | 1681 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/lowerings.cpp | 1698 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/lowerings.cpp | 1820 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/mem_dependency_checker.cpp | 1139 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/mem_dependency_checker.h | 242 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/operators/matmul.cpp | 74 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/operators/misc.cpp | 205 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/operators/quantization.cpp | 605 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/operators/quantization.cpp | 682 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/registerizer.cpp | 301 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/stmt.h | 384 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/stmt.h | 834 | ⚪ INFO | TODO comment found |
| torch/csrc/jit/tensorexpr/stmt.h | 835 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/core/config.cpp | 48 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/core/helpers.h | 16 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/core/ir.h | 209 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/core/ir_builder.h | 139 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/core/lazy_graph_executor.cpp | 443 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/core/lazy_graph_executor.h | 108 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/core/shape.cpp | 95 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/core/tensor.cpp | 315 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/core/tensor.cpp | 387 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/core/tensor_impl.cpp | 212 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/core/trie.h | 45 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/python/init.cpp | 124 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/ts_backend/ir_builder.h | 20 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/ts_backend/ir_builder.h | 54 | ⚪ INFO | TODO comment found |
| torch/csrc/lazy/ts_backend/ts_native_functions.cpp | 280 | ⚪ INFO | TODO comment found |
| torch/csrc/profiler/collection.cpp | 115 | ⚪ INFO | TODO comment found |
| torch/csrc/profiler/collection.cpp | 357 | ⚪ INFO | TODO comment found |
| torch/csrc/profiler/collection.h | 506 | ⚪ INFO | TODO comment found |
| torch/csrc/profiler/containers.h | 179 | ⚪ INFO | TODO comment found |
| torch/csrc/profiler/kineto_shim.cpp | 345 | ⚪ INFO | TODO comment found |
| torch/csrc/profiler/kineto_shim.cpp | 437 | ⚪ INFO | TODO comment found |
| torch/csrc/profiler/util.cpp | 53 | ⚪ INFO | TODO comment found |
| torch/csrc/profiler/util.cpp | 78 | ⚪ INFO | TODO comment found |
| torch/csrc/profiler/util.h | 19 | ⚪ INFO | TODO comment found |
| torch/csrc/serialization.cpp | 41 | ⚪ INFO | TODO comment found |
| torch/csrc/serialization.cpp | 81 | ⚪ INFO | TODO comment found |
| torch/csrc/tensor/python_tensor.cpp | 90 | ⚪ INFO | TODO comment found |
| torch/csrc/tensor/python_tensor.cpp | 106 | ⚪ INFO | TODO comment found |
| torch/csrc/tensor/python_tensor.h | 27 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/disable_torch_function.cpp | 340 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/pybind.cpp | 85 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/pybind.cpp | 117 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/python_arg_parser.cpp | 70 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/python_arg_parser.cpp | 80 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/python_arg_parser.cpp | 1398 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/python_arg_parser.h | 395 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/python_dispatch.cpp | 250 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/python_dispatch.cpp | 325 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/python_dispatch.cpp | 373 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/python_dispatch.cpp | 418 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/python_dispatch.cpp | 1041 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/tensor_new.cpp | 66 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/tensor_new.cpp | 281 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/tensor_new.cpp | 475 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/tensor_new.cpp | 527 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/tensor_new.cpp | 572 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/tensor_new.cpp | 701 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/tensor_new.cpp | 1489 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/tensor_numpy.cpp | 196 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/throughput_benchmark-inl.h | 56 | ⚪ INFO | TODO comment found |
| torch/csrc/utils/throughput_benchmark.cpp | 70 | ⚪ INFO | TODO comment found |
| torch/csrc/utils.cpp | 420 | ⚪ INFO | TODO comment found |
| torch/csrc/utils.cpp | 458 | ⚪ INFO | TODO comment found |
| torch/csrc/xpu/Module.cpp | 354 | ⚪ INFO | TODO comment found |
| torch/cuda/amp/autocast_mode.py | 24 | ⚪ INFO | TODO comment found |
| torch/cuda/amp/autocast_mode.py | 63 | ⚪ INFO | TODO comment found |
| torch/custom_class.h | 425 | ⚪ INFO | TODO comment found |
| torch/distributed/_composable/contract.py | 27 | ⚪ INFO | TODO comment found |
| torch/distributed/_composable/contract.py | 226 | ⚪ INFO | TODO comment found |
| torch/distributed/_composable/fsdp/fully_shard.py | 1 | ⚪ INFO | TODO comment found |
| torch/distributed/_composable/replicate.py | 226 | ⚪ INFO | TODO comment found |
| torch/distributed/_local_tensor/__init__.py | 1537 | ⚪ INFO | TODO comment found |
| torch/distributed/_local_tensor/__init__.py | 1551 | ⚪ INFO | TODO comment found |
| torch/distributed/_local_tensor/_c10d.py | 106 | ⚪ INFO | TODO comment found |
| torch/distributed/_pycute/int_tuple.py | 150 | ⚪ INFO | TODO comment found |
| torch/distributed/_shard/sharded_optim/api.py | 82 | ⚪ INFO | TODO comment found |
| torch/distributed/_shard/sharded_optim/api.py | 92 | ⚪ INFO | TODO comment found |
| torch/distributed/_shard/sharded_optim/api.py | 99 | ⚪ INFO | TODO comment found |
| torch/distributed/_shard/sharded_tensor/_ops/tensor_ops.py | 31 | ⚪ INFO | TODO comment found |
| torch/distributed/_shard/sharded_tensor/api.py | 525 | ⚪ INFO | TODO comment found |
| torch/distributed/_shard/sharded_tensor/api.py | 927 | ⚪ INFO | TODO comment found |
| torch/distributed/_shard/sharding_spec/_internals.py | 181 | ⚪ INFO | TODO comment found |
| torch/distributed/_shard/sharding_spec/api.py | 183 | ⚪ INFO | TODO comment found |
| torch/distributed/_shard/sharding_spec/chunk_sharding_spec.py | 65 | ⚪ INFO | TODO comment found |
| torch/distributed/_shard/sharding_spec/chunk_sharding_spec_ops/embedding.py | 288 | ⚪ INFO | TODO comment found |
| torch/distributed/_shard/sharding_spec/chunk_sharding_spec_ops/embedding_bag.py | 408 | ⚪ INFO | TODO comment found |
| torch/distributed/_state_dict_utils.py | 109 | ⚪ INFO | TODO comment found |
| torch/distributed/_state_dict_utils.py | 624 | ⚪ INFO | TODO comment found |
| torch/distributed/_state_dict_utils.py | 732 | ⚪ INFO | TODO comment found |
| torch/distributed/_symmetric_memory/__init__.py | 1981 | ⚪ INFO | TODO comment found |
| torch/distributed/_symmetric_memory/__init__.py | 2185 | ⚪ INFO | TODO comment found |
| torch/distributed/_symmetric_memory/__init__.py | 2205 | ⚪ INFO | TODO comment found |
| torch/distributed/_tensor/__init__.py | 15 | ⚪ INFO | TODO comment found |
| torch/distributed/_tools/runtime_estimator.py | 161 | ⚪ INFO | TODO comment found |
| torch/distributed/_tools/runtime_estimator.py | 321 | ⚪ INFO | TODO comment found |
| torch/distributed/_tools/runtime_estimator.py | 322 | ⚪ INFO | TODO comment found |
| torch/distributed/_tools/sac_estimator.py | 613 | ⚪ INFO | TODO comment found |
| torch/distributed/algorithms/_checkpoint/checkpoint_wrapper.py | 278 | ⚪ INFO | TODO comment found |
| torch/distributed/algorithms/_optimizer_overlap/optimizer_overlap.py | 76 | ⚪ INFO | TODO comment found |
| torch/distributed/algorithms/ddp_comm_hooks/powerSGD_hook.py | 601 | ⚪ INFO | TODO comment found |
| torch/distributed/algorithms/ddp_comm_hooks/powerSGD_hook.py | 827 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/_fsspec_filesystem.py | 95 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/_nested_dict.py | 26 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/_sharded_tensor_utils.py | 19 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/_traverse.py | 28 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/_traverse.py | 186 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/default_planner.py | 69 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/filesystem.py | 394 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/format_utils.py | 85 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/optimizer.py | 50 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/optimizer.py | 200 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/optimizer.py | 201 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/planner_helpers.py | 533 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/state_dict.py | 537 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/state_dict.py | 1076 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/state_dict.py | 1545 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/state_dict.py | 1546 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/state_dict.py | 1600 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/state_dict.py | 1601 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/state_dict_loader.py | 47 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/state_dict_saver.py | 75 | ⚪ INFO | TODO comment found |
| torch/distributed/checkpoint/utils.py | 439 | ⚪ INFO | TODO comment found |
| torch/distributed/device_mesh.py | 105 | ⚪ INFO | TODO comment found |
| torch/distributed/device_mesh.py | 130 | ⚪ INFO | TODO comment found |
| torch/distributed/device_mesh.py | 511 | ⚪ INFO | TODO comment found |
| torch/distributed/device_mesh.py | 771 | ⚪ INFO | TODO comment found |
| torch/distributed/device_mesh.py | 1007 | ⚪ INFO | TODO comment found |
| torch/distributed/device_mesh.py | 1018 | ⚪ INFO | TODO comment found |
| torch/distributed/device_mesh.py | 1027 | ⚪ INFO | TODO comment found |
| torch/distributed/device_mesh.py | 1348 | ⚪ INFO | TODO comment found |
| torch/distributed/distributed_c10d.py | 1195 | ⚪ INFO | TODO comment found |
| torch/distributed/distributed_c10d.py | 2212 | ⚪ INFO | TODO comment found |
| torch/distributed/distributed_c10d.py | 2263 | ⚪ INFO | TODO comment found |
| torch/distributed/distributed_c10d.py | 2314 | ⚪ INFO | TODO comment found |
| torch/distributed/distributed_c10d.py | 2380 | ⚪ INFO | TODO comment found |
| torch/distributed/distributed_c10d.py | 3080 | ⚪ INFO | TODO comment found |
| torch/distributed/distributed_c10d.py | 5600 | ⚪ INFO | TODO comment found |
| torch/distributed/distributed_c10d.py | 5761 | ⚪ INFO | TODO comment found |
| torch/distributed/distributed_c10d.py | 6304 | ⚪ INFO | TODO comment found |
| torch/distributed/elastic/agent/server/api.py | 534 | ⚪ INFO | TODO comment found |
| torch/distributed/elastic/rendezvous/etcd_rendezvous.py | 166 | ⚪ INFO | TODO comment found |
| torch/distributed/elastic/rendezvous/etcd_rendezvous.py | 215 | ⚪ INFO | TODO comment found |
| torch/distributed/elastic/rendezvous/etcd_rendezvous.py | 273 | ⚪ INFO | TODO comment found |
| torch/distributed/elastic/rendezvous/etcd_rendezvous.py | 333 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/distributed/elastic/rendezvous/etcd_rendezvous.py | 949 | ⚪ INFO | TODO comment found |
| torch/distributed/flight_recorder/components/builder.py | 293 | ⚪ INFO | TODO comment found |
| torch/distributed/flight_recorder/components/types.py | 182 | ⚪ INFO | TODO comment found |
| torch/distributed/flight_recorder/components/types.py | 540 | ⚪ INFO | TODO comment found |
| torch/distributed/flight_recorder/components/types.py | 546 | ⚪ INFO | TODO comment found |
| torch/distributed/flight_recorder/components/utils.py | 370 | ⚪ INFO | TODO comment found |
| torch/distributed/flight_recorder/components/utils.py | 464 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_common_utils.py | 269 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_common_utils.py | 350 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_common_utils.py | 394 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_common_utils.py | 494 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_common_utils.py | 586 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_common_utils.py | 660 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_flat_param.py | 103 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_flat_param.py | 1860 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_flat_param.py | 2379 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_fully_shard/_fsdp_collectives.py | 93 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_fully_shard/_fsdp_param.py | 219 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_fully_shard/_fsdp_param.py | 264 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_fully_shard/_fsdp_param.py | 266 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_fully_shard/_fsdp_param.py | 793 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_fully_shard/_fsdp_param.py | 1021 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_fully_shard/_fully_shard.py | 893 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_init_utils.py | 312 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_init_utils.py | 516 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_init_utils.py | 700 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_init_utils.py | 887 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_init_utils.py | 1109 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_optim_utils.py | 1456 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_optim_utils.py | 1762 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_runtime_utils.py | 597 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_runtime_utils.py | 801 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_runtime_utils.py | 978 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_runtime_utils.py | 1144 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_state_dict_utils.py | 142 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_state_dict_utils.py | 438 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_state_dict_utils.py | 500 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_state_dict_utils.py | 620 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_traversal_utils.py | 38 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_unshard_param_utils.py | 85 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_unshard_param_utils.py | 100 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_unshard_param_utils.py | 146 | ⚪ INFO | TODO comment found |
| torch/distributed/fsdp/_wrap_utils.py | 44 | ⚪ INFO | TODO comment found |
| torch/distributed/nn/api/remote_module.py | 254 | ⚪ INFO | TODO comment found |
| torch/distributed/nn/jit/templates/remote_module_template.py | 61 | ⚪ INFO | TODO comment found |
| torch/distributed/optim/apply_optimizer_in_backward.py | 74 | ⚪ INFO | TODO comment found |
| torch/distributed/optim/functional_adagrad.py | 64 | ⚪ INFO | TODO comment found |
| torch/distributed/optim/functional_sgd.py | 62 | ⚪ INFO | TODO comment found |
| torch/distributed/optim/optimizer.py | 113 | ⚪ INFO | TODO comment found |
| torch/distributed/optim/zero_redundancy_optimizer.py | 1580 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/_IR.py | 34 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/_IR.py | 569 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/_IR.py | 700 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/_IR.py | 769 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/_IR.py | 793 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/_IR.py | 877 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/_IR.py | 1224 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/_backward.py | 480 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/_schedule_visualizer.py | 117 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/microbatch.py | 432 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/schedules.py | 387 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/schedules.py | 2052 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/schedules.py | 2153 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/schedules.py | 2188 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/schedules.py | 2847 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/schedules.py | 3049 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/schedules.py | 3246 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/schedules.py | 3432 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/stage.py | 402 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/stage.py | 1087 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/stage.py | 1117 | ⚪ INFO | TODO comment found |
| torch/distributed/pipelining/stage.py | 1181 | ⚪ INFO | TODO comment found |
| torch/distributed/rpc/backend_registry.py | 302 | ⚪ INFO | TODO comment found |
| torch/distributed/rpc/backend_registry.py | 379 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_api.py | 258 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_api.py | 262 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_api.py | 337 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_api.py | 341 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_api.py | 411 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_collective_utils.py | 101 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_collective_utils.py | 140 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_collective_utils.py | 201 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_collective_utils.py | 345 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_collective_utils.py | 427 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_collective_utils.py | 523 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_dtensor_spec.py | 419 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_op_schema.py | 411 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/_common_rules.py | 93 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/_common_rules.py | 160 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/_conv_ops.py | 147 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/_math_ops.py | 963 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/_pointwise_ops.py | 113 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/_pointwise_ops.py | 395 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/_pointwise_ops.py | 589 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/_tensor_ops.py | 555 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/_tensor_ops.py | 578 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/_tensor_ops.py | 1486 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/_view_ops.py | 956 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/_view_ops.py | 1405 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/_view_ops.py | 1407 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/distributed/tensor/_ops/single_dim_strategy.py | 1058 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/strategy_validation.py | 627 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_ops/utils.py | 575 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_random.py | 47 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_random.py | 84 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_redistribute.py | 1408 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_redistribute.py | 1548 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_sharding_prop.py | 316 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/_tp_conv.py | 18 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/examples/flex_attention_cp.py | 134 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/examples/torchrec_sharding_example.py | 93 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/experimental/_context_parallel/_attention.py | 682 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/experimental/_context_parallel/_attention.py | 717 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/experimental/_context_parallel/_attention.py | 755 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/experimental/_context_parallel/_attention.py | 793 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/experimental/_context_parallel/_attention.py | 836 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/experimental/_context_parallel/_attention.py | 880 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/experimental/_context_parallel/_attention.py | 917 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/experimental/_context_parallel/_attention.py | 1029 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/experimental/_context_parallel/_attention.py | 1117 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/experimental/_context_parallel/_attention.py | 1466 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/experimental/_func_map.py | 184 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/experimental/_register_sharding.py | 96 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/parallel/ddp.py | 43 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/parallel/ddp.py | 103 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/parallel/fsdp.py | 359 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/parallel/style.py | 102 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/parallel/style.py | 531 | ⚪ INFO | TODO comment found |
| torch/distributed/tensor/parallel/style.py | 682 | ⚪ INFO | TODO comment found |
| torch/distributions/kl.py | 553 | ⚪ INFO | TODO comment found |
| torch/distributions/kl.py | 592 | ⚪ INFO | TODO comment found |
| torch/distributions/kl.py | 651 | ⚪ INFO | TODO comment found |
| torch/distributions/kl.py | 696 | ⚪ INFO | TODO comment found |
| torch/distributions/kl.py | 728 | ⚪ INFO | TODO comment found |
| torch/distributions/kl.py | 825 | ⚪ INFO | TODO comment found |
| torch/distributions/kl.py | 922 | ⚪ INFO | TODO comment found |
| torch/distributions/laplace.py | 83 | ⚪ INFO | TODO comment found |
| torch/distributions/utils.py | 25 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/export/__init__.py | 404 | ⚪ INFO | TODO comment found |
| torch/export/_swap.py | 282 | ⚪ INFO | TODO comment found |
| torch/export/_trace.py | 1716 | ⚪ INFO | TODO comment found |
| torch/export/_unlift.py | 758 | ⚪ INFO | TODO comment found |
| torch/export/dynamic_shapes.py | 444 | ⚪ INFO | TODO comment found |
| torch/export/experimental/__init__.py | 416 | ⚪ INFO | TODO comment found |
| torch/export/experimental/__init__.py | 417 | ⚪ INFO | TODO comment found |
| torch/export/experimental/_utils.py | 86 | ⚪ INFO | TODO comment found |
| torch/export/exported_program.py | 1696 | ⚪ INFO | TODO comment found |
| torch/export/pt2_archive/_package.py | 700 | ⚪ INFO | TODO comment found |
| torch/export/pt2_archive/_package.py | 1120 | ⚪ INFO | TODO comment found |
| torch/export/unflatten.py | 977 | ⚪ INFO | TODO comment found |
| torch/functional.py | 1683 | ⚪ INFO | TODO comment found |
| torch/functional.py | 1905 | ⚪ INFO | TODO comment found |
| torch/fx/_graph_pickler.py | 44 | ⚪ INFO | TODO comment found |
| torch/fx/_graph_pickler.py | 547 | ⚪ INFO | TODO comment found |
| torch/fx/_graph_pickler.py | 745 | ⚪ INFO | TODO comment found |
| torch/fx/_graph_pickler.py | 918 | ⚪ INFO | TODO comment found |
| torch/fx/_symbolic_trace.py | 464 | ⚪ INFO | TODO comment found |
| torch/fx/_symbolic_trace.py | 731 | ⚪ INFO | TODO comment found |
| torch/fx/_symbolic_trace.py | 747 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/_config.py | 36 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/accelerator_partitioner.py | 356 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/graph_gradual_typechecker.py | 62 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/graph_gradual_typechecker.py | 408 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/merge_matmul.py | 117 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/migrate_gradual_types/constraint_generator.py | 630 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/migrate_gradual_types/constraint_generator.py | 654 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/migrate_gradual_types/constraint_generator.py | 808 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/optimization.py | 178 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/proxy_tensor.py | 732 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/proxy_tensor.py | 1147 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/proxy_tensor.py | 1183 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/proxy_tensor.py | 1643 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/proxy_tensor.py | 1801 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/proxy_tensor.py | 2160 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/proxy_tensor.py | 3012 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/proxy_tensor.py | 3024 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/proxy_tensor.py | 3075 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/proxy_tensor.py | 3094 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/proxy_tensor.py | 3225 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/proxy_tensor.py | 3262 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/schema_type_annotation.py | 63 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 86 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 557 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 567 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 577 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 600 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 624 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 720 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 1357 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 1384 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 1551 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 1610 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 1730 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 1800 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 1826 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 1914 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/sym_node.py | 1930 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 329 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 557 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 1066 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 1311 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 1384 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 1786 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 1913 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 2062 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 2286 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 2609 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 2636 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 4452 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 4484 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 4502 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 4504 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 4519 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 5170 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 5175 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 5666 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 6155 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 6435 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 6750 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 7109 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 7325 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 7344 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 7469 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 7569 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 7628 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 7691 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 7765 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 8001 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 8449 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 8501 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 8592 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 8602 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 8678 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 8786 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 8801 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/symbolic_shapes.py | 8844 | ⚪ INFO | TODO comment found |
| torch/fx/experimental/validator.py | 404 | ⚪ INFO | TODO comment found |
| torch/fx/graph.py | 296 | ⚪ INFO | TODO comment found |
| torch/fx/graph.py | 1362 | ⚪ INFO | TODO comment found |
| torch/fx/graph.py | 1478 | ⚪ INFO | TODO comment found |
| torch/fx/graph.py | 1611 | ⚪ INFO | TODO comment found |
| torch/fx/graph.py | 2142 | ⚪ INFO | TODO comment found |
| torch/fx/graph.py | 2403 | ⚪ INFO | TODO comment found |
| torch/fx/graph_module.py | 144 | ⚪ INFO | TODO comment found |
| torch/fx/node.py | 89 | ⚪ INFO | TODO comment found |
| torch/fx/node.py | 295 | ⚪ INFO | TODO comment found |
| torch/fx/node.py | 587 | ⚪ INFO | TODO comment found |
| torch/fx/operator_schemas.py | 107 | ⚪ INFO | TODO comment found |
| torch/fx/passes/_tensorify_python_scalars.py | 24 | ⚪ INFO | TODO comment found |
| torch/fx/passes/_tensorify_python_scalars.py | 79 | ⚪ INFO | TODO comment found |
| torch/fx/passes/backends/cudagraphs.py | 17 | ⚪ INFO | TODO comment found |
| torch/fx/passes/backends/cudagraphs.py | 62 | ⚪ INFO | TODO comment found |
| torch/fx/passes/fake_tensor_prop.py | 86 | ⚪ INFO | TODO comment found |
| torch/fx/passes/regional_inductor_invoke_subgraph.py | 103 | ⚪ INFO | TODO comment found |
| torch/fx/passes/regional_inductor_invoke_subgraph.py | 179 | ⚪ INFO | TODO comment found |
| torch/fx/passes/reinplace.py | 159 | ⚪ INFO | TODO comment found |
| torch/fx/passes/reinplace.py | 162 | ⚪ INFO | TODO comment found |
| torch/fx/passes/reinplace.py | 619 | ⚪ INFO | TODO comment found |
| torch/fx/passes/runtime_assert.py | 112 | ⚪ INFO | TODO comment found |
| torch/fx/passes/runtime_assert.py | 378 | ⚪ INFO | TODO comment found |
| torch/fx/passes/runtime_assert.py | 399 | ⚪ INFO | TODO comment found |
| torch/fx/passes/runtime_assert.py | 599 | ⚪ INFO | TODO comment found |
| torch/fx/passes/utils/fuser_utils.py | 161 | ⚪ INFO | TODO comment found |
| torch/fx/passes/utils/matcher_utils.py | 103 | ⚪ INFO | TODO comment found |
| torch/fx/passes/utils/matcher_utils.py | 237 | ⚪ INFO | TODO comment found |
| torch/fx/passes/utils/source_matcher_utils.py | 86 | ⚪ INFO | TODO comment found |
| torch/fx/traceback.py | 77 | ⚪ INFO | TODO comment found |
| torch/headeronly/core/ScalarType.h | 60 | ⚪ INFO | TODO comment found |
| torch/headeronly/macros/Macros.h | 450 | ⚪ INFO | TODO comment found |
| torch/headeronly/util/Exception.h | 19 | ⚪ INFO | TODO comment found |
| torch/jit/_builtins.py | 137 | ⚪ INFO | TODO comment found |
| torch/jit/_decompositions.py | 101 | ⚪ INFO | TODO comment found |
| torch/jit/_monkeytype_config.py | 132 | ⚪ INFO | TODO comment found |
| torch/jit/_recursive.py | 30 | ⚪ INFO | TODO comment found |
| torch/jit/_recursive.py | 305 | ⚪ INFO | TODO comment found |
| torch/jit/_recursive.py | 325 | ⚪ INFO | TODO comment found |
| torch/jit/_recursive.py | 406 | ⚪ INFO | TODO comment found |
| torch/jit/_recursive.py | 683 | ⚪ INFO | TODO comment found |
| torch/jit/_recursive.py | 689 | ⚪ INFO | TODO comment found |
| torch/jit/_script.py | 879 | ⚪ INFO | TODO comment found |
| torch/jit/_script.py | 887 | ⚪ INFO | TODO comment found |
| torch/jit/_serialization.py | 210 | ⚪ INFO | TODO comment found |
| torch/jit/_shape_functions.py | 42 | ⚪ INFO | TODO comment found |
| torch/jit/_shape_functions.py | 102 | ⚪ INFO | TODO comment found |
| torch/jit/_shape_functions.py | 466 | ⚪ INFO | TODO comment found |
| torch/jit/_shape_functions.py | 690 | ⚪ INFO | TODO comment found |
| torch/jit/_shape_functions.py | 695 | ⚪ INFO | TODO comment found |
| torch/jit/_shape_functions.py | 702 | ⚪ INFO | TODO comment found |
| torch/jit/_shape_functions.py | 762 | ⚪ INFO | TODO comment found |
| torch/jit/_shape_functions.py | 782 | ⚪ INFO | TODO comment found |
| torch/jit/_shape_functions.py | 1165 | ⚪ INFO | TODO comment found |
| torch/jit/_shape_functions.py | 1173 | ⚪ INFO | TODO comment found |
| torch/jit/_shape_functions.py | 1613 | ⚪ INFO | TODO comment found |
| torch/jit/_trace.py | 161 | ⚪ INFO | TODO comment found |
| torch/jit/_trace.py | 231 | ⚪ INFO | TODO comment found |
| torch/jit/_trace.py | 235 | ⚪ INFO | TODO comment found |
| torch/jit/_trace.py | 274 | ⚪ INFO | TODO comment found |
| torch/jit/annotations.py | 448 | ⚪ INFO | TODO comment found |
| torch/jit/annotations.py | 454 | ⚪ INFO | TODO comment found |
| torch/jit/annotations.py | 551 | ⚪ INFO | TODO comment found |
| torch/jit/frontend.py | 258 | ⚪ INFO | TODO comment found |
| torch/jit/frontend.py | 390 | ⚪ INFO | TODO comment found |
| torch/jit/frontend.py | 528 | ⚪ INFO | TODO comment found |
| torch/jit/frontend.py | 784 | ⚪ INFO | TODO comment found |
| torch/lib/libshm/core.cpp | 92 | ⚪ INFO | TODO comment found |
| torch/lib/libshm/manager.cpp | 38 | ⚪ INFO | TODO comment found |
| torch/library.h | 108 | ⚪ INFO | TODO comment found |
| torch/library.h | 167 | ⚪ INFO | TODO comment found |
| torch/library.h | 184 | ⚪ INFO | TODO comment found |
| torch/library.h | 201 | ⚪ INFO | TODO comment found |
| torch/library.h | 689 | ⚪ INFO | TODO comment found |
| torch/library.h | 710 | ⚪ INFO | TODO comment found |
| torch/library.py | 421 | ⚪ INFO | TODO comment found |
| torch/library.py | 475 | ⚪ INFO | TODO comment found |
| torch/masked/_ops.py | 547 | ⚪ INFO | TODO comment found |
| torch/masked/_ops.py | 685 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/masked/_ops.py | 732 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/masked/_ops.py | 763 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/masked/_ops.py | 846 | ⚪ INFO | TODO comment found |
| torch/masked/_ops.py | 1421 | ⚪ INFO | TODO comment found |
| torch/masked/_ops.py | 1642 | ⚪ INFO | TODO comment found |
| torch/masked/_ops.py | 1656 | ⚪ INFO | TODO comment found |
| torch/masked/_ops.py | 1829 | ⚪ INFO | TODO comment found |
| torch/masked/_ops.py | 1833 | ⚪ INFO | TODO comment found |
| torch/masked/_ops.py | 1835 | ⚪ INFO | TODO comment found |
| torch/masked/maskedtensor/reductions.py | 129 | ⚪ INFO | TODO comment found |
| torch/multiprocessing/reductions.py | 323 | ⚪ INFO | TODO comment found |
| torch/multiprocessing/reductions.py | 637 | ⚪ INFO | TODO comment found |
| torch/multiprocessing/spawn.py | 241 | ⚪ INFO | TODO comment found |
| torch/nativert/executor/ExecutionPlanner.cpp | 27 | ⚪ INFO | TODO comment found |
| torch/nativert/executor/Executor.cpp | 275 | ⚪ INFO | TODO comment found |
| torch/nativert/executor/GraphExecutorBase.cpp | 38 | ⚪ INFO | TODO comment found |
| torch/nativert/executor/OpKernel.cpp | 147 | ⚪ INFO | TODO comment found |
| torch/nativert/executor/Weights.cpp | 102 | ⚪ INFO | TODO comment found |
| torch/nativert/graph/Graph.cpp | 469 | ⚪ INFO | TODO comment found |
| torch/nativert/graph/Graph.cpp | 475 | ⚪ INFO | TODO comment found |
| torch/nativert/graph/Graph.cpp | 821 | ⚪ INFO | TODO comment found |
| torch/nativert/graph/Graph.cpp | 1387 | ⚪ INFO | TODO comment found |
| torch/nativert/graph/GraphSignature.cpp | 273 | ⚪ INFO | TODO comment found |
| torch/nativert/graph/GraphUtils.cpp | 41 | ⚪ INFO | TODO comment found |
| torch/nativert/graph/TensorMeta.cpp | 111 | ⚪ INFO | TODO comment found |
| torch/nativert/graph/TensorMeta.cpp | 123 | ⚪ INFO | TODO comment found |
| torch/nativert/graph/TensorMeta.cpp | 138 | ⚪ INFO | TODO comment found |
| torch/nativert/graph/passes/SubgraphRewriter.cpp | 356 | ⚪ INFO | TODO comment found |
| torch/nativert/kernels/AutoFunctionalizeKernel.cpp | 34 | ⚪ INFO | TODO comment found |
| torch/nativert/kernels/C10Kernel.cpp | 50 | ⚪ INFO | TODO comment found |
| torch/nativert/kernels/KernelRegistry.cpp | 651 | ⚪ INFO | TODO comment found |
| torch/nativert/kernels/TritonKernel.cpp | 427 | ⚪ INFO | TODO comment found |
| torch/nested/__init__.py | 97 | ⚪ INFO | TODO comment found |
| torch/nested/__init__.py | 338 | ⚪ INFO | TODO comment found |
| torch/nested/__init__.py | 450 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/nested_tensor.py | 205 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/nested_tensor.py | 293 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/nested_tensor.py | 464 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/nested_tensor.py | 584 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/ops.py | 600 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/ops.py | 603 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/ops.py | 730 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/ops.py | 1306 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/ops.py | 1773 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/ops.py | 1908 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/ops.py | 2359 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/ops.py | 2391 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/sdpa.py | 67 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/sdpa.py | 381 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/sdpa.py | 386 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/sdpa.py | 391 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/sdpa.py | 436 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/sdpa.py | 670 | ⚪ INFO | TODO comment found |
| torch/nested/_internal/sdpa.py | 672 | ⚪ INFO | TODO comment found |
| torch/nn/_reduction.py | 22 | ⚪ INFO | TODO comment found |
| torch/nn/attention/__init__.py | 31 | ⚪ INFO | TODO comment found |
| torch/nn/attention/bias.py | 253 | ⚪ INFO | TODO comment found |
| torch/nn/attention/flex_attention.py | 1992 | ⚪ INFO | TODO comment found |
| torch/nn/attention/flex_attention.py | 2044 | ⚪ INFO | TODO comment found |
| torch/nn/attention/flex_attention.py | 2061 | ⚪ INFO | TODO comment found |
| torch/nn/functional.py | 1606 | ⚪ INFO | TODO comment found |
| torch/nn/functional.py | 2765 | ⚪ INFO | TODO comment found |
| torch/nn/functional.py | 2845 | ⚪ INFO | TODO comment found |
| torch/nn/functional.py | 5826 | ⚪ INFO | TODO comment found |
| torch/nn/modules/_functions.py | 93 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/nn/modules/activation.py | 88 | ⚪ INFO | TODO comment found |
| torch/nn/modules/batchnorm.py | 188 | ⚪ INFO | TODO comment found |
| torch/nn/modules/conv.py | 1394 | ⚪ INFO | TODO comment found |
| torch/nn/modules/conv.py | 1419 | ⚪ INFO | TODO comment found |
| torch/nn/modules/conv.py | 1420 | ⚪ INFO | TODO comment found |
| torch/nn/modules/conv.py | 1421 | ⚪ INFO | TODO comment found |
| torch/nn/modules/linear.py | 146 | ⚪ INFO | TODO comment found |
| torch/nn/modules/linear.py | 338 | ⚪ INFO | TODO comment found |
| torch/nn/modules/loss.py | 2332 | ⚪ INFO | TODO comment found |
| torch/nn/modules/loss.py | 2333 | ⚪ INFO | TODO comment found |
| torch/nn/modules/loss.py | 2334 | ⚪ INFO | TODO comment found |
| torch/nn/modules/module.py | 2192 | ⚪ INFO | TODO comment found |
| torch/nn/modules/module.py | 2238 | ⚪ INFO | TODO comment found |
| torch/nn/modules/normalization.py | 439 | ⚪ INFO | TODO comment found |
| torch/nn/modules/normalization.py | 440 | ⚪ INFO | TODO comment found |
| torch/nn/modules/normalization.py | 441 | ⚪ INFO | TODO comment found |
| torch/nn/modules/padding.py | 12 | ⚪ INFO | TODO comment found |
| torch/nn/modules/rnn.py | 826 | ⚪ INFO | TODO comment found |
| torch/nn/modules/rnn.py | 1652 | ⚪ INFO | TODO comment found |
| torch/nn/modules/transformer.py | 1196 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/nn/parallel/comm.py | 141 | ⚪ INFO | TODO comment found |
| torch/nn/parallel/data_parallel.py | 134 | ⚪ INFO | TODO comment found |
| torch/nn/parallel/distributed.py | 287 | ⚪ INFO | TODO comment found |
| torch/nn/parallel/distributed.py | 435 | ⚪ INFO | TODO comment found |
| torch/nn/parallel/distributed.py | 875 | ⚪ INFO | TODO comment found |
| torch/nn/parallel/distributed.py | 1029 | ⚪ INFO | TODO comment found |
| torch/nn/parallel/distributed.py | 1322 | ⚪ INFO | TODO comment found |
| torch/nn/parallel/distributed.py | 1843 | ⚪ INFO | TODO comment found |
| torch/nn/utils/memory_format.py | 78 | ⚪ INFO | TODO comment found |
| torch/nn/utils/memory_format.py | 158 | ⚪ INFO | TODO comment found |
| torch/nn/utils/parametrize.py | 757 | ⚪ INFO | TODO comment found |
| torch/nn/utils/prune.py | 1300 | ⚪ INFO | TODO comment found |
| torch/nn/utils/rnn.py | 210 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/exporter/_analysis.py | 199 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/onnx/_internal/exporter/_capture_strategies.py | 46 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/exporter/_core.py | 595 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/exporter/_core.py | 624 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/exporter/_core.py | 1320 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/exporter/_schemas.py | 231 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/exporter/_schemas.py | 241 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/exporter/_schemas.py | 282 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/exporter/_tensors.py | 42 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/fx/_pass.py | 41 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/torchscript_exporter/symbolic_helper.py | 2302 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/torchscript_exporter/symbolic_opset13.py | 525 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/torchscript_exporter/symbolic_opset9.py | 1324 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/torchscript_exporter/symbolic_opset9.py | 2235 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/torchscript_exporter/symbolic_opset9.py | 4927 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/torchscript_exporter/symbolic_opset9.py | 5338 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/torchscript_exporter/symbolic_opset9.py | 5741 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/torchscript_exporter/symbolic_opset9.py | 6290 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/torchscript_exporter/symbolic_opset9.py | 6292 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/torchscript_exporter/utils.py | 1101 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/torchscript_exporter/verification.py | 227 | ⚪ INFO | TODO comment found |
| torch/onnx/_internal/torchscript_exporter/verification.py | 407 | ⚪ INFO | TODO comment found |
| torch/onnx/ops/__init__.py | 155 | ⚪ INFO | TODO comment found |
| torch/optim/_functional.py | 21 | ⚪ INFO | TODO comment found |
| torch/package/importer.py | 80 | ⚪ INFO | TODO comment found |
| torch/package/package_exporter.py | 930 | ⚪ INFO | TODO comment found |
| torch/package/package_importer.py | 272 | ⚪ INFO | TODO comment found |
| torch/profiler/_memory_profiler.py | 1090 | ⚪ INFO | TODO comment found |
| torch/profiler/profiler.py | 378 | 🟡 MEDIUM | FIXME comment indicating known issue |
| torch/quantization/__init__.py | 44 | ⚪ INFO | TODO comment found |
| torch/quantization/fuse_modules.py | 10 | ⚪ INFO | TODO comment found |

## Detailed Findings

### CODE_QUALITY

**Total:** 3711 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .ci/libtorch/extract_libtorch_from_wheel.py | 116 | 🟢 LOW | Debug print statement found |
| .ci/libtorch/extract_libtorch_from_wheel.py | 159 | 🟢 LOW | Debug print statement found |
| .ci/libtorch/extract_libtorch_from_wheel.py | 212 | 🟢 LOW | Debug print statement found |
| .ci/libtorch/extract_libtorch_from_wheel.py | 232 | 🟢 LOW | Debug print statement found |
| .ci/libtorch/extract_libtorch_from_wheel.py | 233 | 🟢 LOW | Debug print statement found |
| .ci/libtorch/extract_libtorch_from_wheel.py | 290 | 🟢 LOW | Debug print statement found |
| .ci/libtorch/extract_libtorch_from_wheel.py | 291 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 215 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 255 | 🟢 LOW | Debug print statement found |
| .ci/manywheel/build_env_setup.py | 263 | 🟢 LOW | Debug print statement found |

*... and 3701 more*

### MAINTENANCE

**Total:** 3781 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| aten/src/ATen/ScalarOps.h | 28 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/TensorIterator.cpp | 1080 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/TensorUtils.h | 143 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/Copy.cpp | 370 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/LinearAlgebra.cpp | 506 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/Resize.h | 147 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/SpectralOps.cpp | 214 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/SpectralOps.cpp | 249 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/UpSample.h | 266 | 🟡 MEDIUM | FIXME comment indicating known issue |
| aten/src/ATen/native/cuda/linalg/BatchLinearAlgebra.cpp | 973 | 🟡 MEDIUM | FIXME comment indicating known issue |

*... and 3771 more*

### SECURITY

**Total:** 10 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/scripts/pytest_caching_utils.py | 36 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| aten/src/ATen/cpu/Utils.cpp | 154 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| benchmarks/instruction_counts/applications/ci.py | 46 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| c10/util/hash.h | 62 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tools/experimental/torchfuzz/codegen.py | 563 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tools/experimental/torchfuzz/operators/constant.py | 54 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tools/stats/upload_dynamo_perf_stats.py | 98 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| torch/_logging/_internal.py | 1548 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| torch/distributed/distributed_c10d.py | 5574 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| torch/fx/passes/graph_drawer.py | 174 | 🟡 MEDIUM | Weak cryptographic algorithm detected |

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 99/100 (Tier A)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -0 | Good ✅ |
| Code Quality | -4996 | Needs improvement ⚠️ |
| Test Coverage | +2 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 20.2%. Aim for at least 70% coverage.

2. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

