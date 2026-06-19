# Repository Analysis Report: huggingface/transformers

**Generated:** 2026-06-19 09:05:28 CDT

**Quality Score:** 100/100 (Tier A)

## Executive Summary

- **Overall Quality:** A (100/100)
- **Total Findings:** 2862
- **Critical Issues:** 0
- **High Issues:** 0
- **Medium Issues:** 27
- **Low Issues:** 2267
- **Files Scanned:** 6133

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| maintenance | 588 | Medium |
| code_quality | 2267 | Medium |
| security | 7 | Medium |

## Repository Overview

- **Owner:** huggingface
- **Name:** transformers
- **Description:** 🤗 Transformers: the model-definition framework for state-of-the-art machine learning models in text, vision, audio, and multimodal models, for both inference and training. 
- **Primary Language:** Python
- **Stars:** 161723
- **Forks:** 33544
- **Open Issues:** 2437
- **Size:** 515669 KB
- **Created:** 2018-10-29
- **Last Updated:** 2026-06-19
- **Default Branch:** main

**Topics:** audio, deep-learning, deepseek, gemma, glm, hacktoberfest, llm, machine-learning, model-hub, natural-language-processing, nlp, pretrained-models, python, pytorch, pytorch-transformers, qwen, speech-recognition, transformer, vlm

## Security Analysis

⚠️ **Found 7 security-related findings.**

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 22.7% | Poor ❌ |
| Documentation | 3.1% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (2267)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .circleci/create_circleci_config.py | 117 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 123 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 136 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 141 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 144 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 410 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 446 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 451 | 🟢 LOW | Debug print statement found |
| .circleci/parse_test_outputs.py | 16 | 🟢 LOW | Debug print statement found |
| .circleci/parse_test_outputs.py | 17 | 🟢 LOW | Debug print statement found |
| .circleci/parse_test_outputs.py | 30 | 🟢 LOW | Debug print statement found |
| .circleci/parse_test_outputs.py | 31 | 🟢 LOW | Debug print statement found |
| .circleci/parse_test_outputs.py | 36 | 🟢 LOW | Debug print statement found |
| .circleci/parse_test_outputs.py | 47 | 🟢 LOW | Debug print statement found |
| .circleci/parse_test_outputs.py | 48 | 🟢 LOW | Debug print statement found |
| .github/scripts/assign_reviewers.py | 89 | 🟢 LOW | Debug print statement found |
| .github/scripts/assign_reviewers.py | 94 | 🟢 LOW | Debug print statement found |
| .github/scripts/assign_reviewers.py | 100 | 🟢 LOW | Debug print statement found |
| .github/scripts/assign_reviewers.py | 112 | 🟢 LOW | Debug print statement found |
| .github/scripts/assign_reviewers.py | 117 | 🟢 LOW | Debug print statement found |
| benchmark/benchmark.py | 123 | 🟢 LOW | Debug print statement found |
| benchmark/benchmark.py | 124 | 🟢 LOW | Debug print statement found |
| benchmark/benchmark.py | 125 | 🟢 LOW | Debug print statement found |
| benchmark/benchmark.py | 127 | 🟢 LOW | Debug print statement found |
| benchmark/benchmark.py | 129 | 🟢 LOW | Debug print statement found |
| benchmark/benchmark.py | 132 | 🟢 LOW | Debug print statement found |
| benchmark/benchmark.py | 133 | 🟢 LOW | Debug print statement found |
| benchmark/benchmark.py | 193 | 🟢 LOW | Debug print statement found |
| benchmark/benchmark.py | 288 | 🟢 LOW | Debug print statement found |
| benchmark_v2/benchmark_scripts/continuous_batching_overall.py | 236 | 🟢 LOW | Debug print statement found |
| benchmark_v2/benchmark_scripts/continuous_batching_overall.py | 262 | 🟢 LOW | Debug print statement found |
| benchmark_v2/benchmark_scripts/continuous_batching_overall.py | 265 | 🟢 LOW | Debug print statement found |
| benchmark_v2/benchmark_scripts/continuous_batching_overall.py | 289 | 🟢 LOW | Debug print statement found |
| benchmark_v2/benchmark_scripts/continuous_batching_overall.py | 304 | 🟢 LOW | Debug print statement found |
| benchmark_v2/benchmark_scripts/continuous_batching_overall.py | 323 | 🟢 LOW | Debug print statement found |
| benchmark_v2/benchmark_scripts/continuous_batching_overall.py | 343 | 🟢 LOW | Debug print statement found |
| benchmark_v2/benchmark_scripts/continuous_batching_overall.py | 344 | 🟢 LOW | Debug print statement found |
| benchmark_v2/framework/benchmark_runner.py | 392 | 🟢 LOW | Debug print statement found |
| benchmark_v2/framework/benchmark_runner.py | 393 | 🟢 LOW | Debug print statement found |
| benchmark_v2/framework/benchmark_runner.py | 394 | 🟢 LOW | Debug print statement found |
| benchmark_v2/framework/benchmark_runner.py | 395 | 🟢 LOW | Debug print statement found |
| benchmark_v2/framework/benchmark_runner.py | 396 | 🟢 LOW | Debug print statement found |
| benchmark_v2/framework/benchmark_runner.py | 402 | 🟢 LOW | Debug print statement found |
| benchmark_v2/framework/benchmark_runner.py | 403 | 🟢 LOW | Debug print statement found |
| benchmark_v2/framework/benchmark_runner.py | 409 | 🟢 LOW | Debug print statement found |
| benchmark_v2/framework/data_classes.py | 54 | 🟢 LOW | Debug print statement found |
| conftest.py | 120 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 668 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 669 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 670 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 671 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 675 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 678 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 679 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 680 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 681 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 682 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 686 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 687 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 688 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 689 | 🟢 LOW | Debug print statement found |
| examples/pytorch/3d_parallel_checks.py | 690 | 🟢 LOW | Debug print statement found |
| examples/pytorch/context_parallel.py | 86 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching.py | 74 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching.py | 91 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching.py | 97 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching.py | 106 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching.py | 112 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching.py | 113 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching.py | 114 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching.py | 200 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching_simple.py | 77 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching_simple.py | 84 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching_simple.py | 95 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching_simple.py | 100 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching_simple.py | 101 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching_simple.py | 103 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching_simple.py | 105 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching_simple.py | 110 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching_simple.py | 111 | 🟢 LOW | Debug print statement found |
| examples/pytorch/continuous_batching_simple.py | 112 | 🟢 LOW | Debug print statement found |
| examples/pytorch/image-classification/run_image_classification_no_trainer.py | 513 | 🟢 LOW | Debug print statement found |
| examples/pytorch/image-pretraining/run_mim_no_trainer.py | 687 | 🟢 LOW | Debug print statement found |
| examples/pytorch/instance-segmentation/run_instance_segmentation_no_trainer.py | 602 | 🟢 LOW | Debug print statement found |
| examples/pytorch/language-modeling/run_clm_no_trainer.py | 607 | 🟢 LOW | Debug print statement found |
| examples/pytorch/language-modeling/run_fim_no_trainer.py | 797 | 🟢 LOW | Debug print statement found |
| examples/pytorch/language-modeling/run_mlm_no_trainer.py | 636 | 🟢 LOW | Debug print statement found |
| examples/pytorch/multiple-choice/run_swag_no_trainer.py | 534 | 🟢 LOW | Debug print statement found |
| examples/pytorch/multiple-choice/run_swag_no_trainer.py | 601 | 🟢 LOW | Debug print statement found |
| examples/pytorch/object-detection/run_object_detection_no_trainer.py | 646 | 🟢 LOW | Debug print statement found |
| examples/pytorch/question-answering/run_qa_beam_search_no_trainer.py | 838 | 🟢 LOW | Debug print statement found |
| examples/pytorch/question-answering/run_qa_no_trainer.py | 855 | 🟢 LOW | Debug print statement found |
| examples/pytorch/semantic-segmentation/run_semantic_segmentation_no_trainer.py | 461 | 🟢 LOW | Debug print statement found |
| examples/pytorch/summarization/run_summarization_no_trainer.py | 663 | 🟢 LOW | Debug print statement found |
| examples/pytorch/text-classification/run_glue_no_trainer.py | 544 | 🟢 LOW | Debug print statement found |
| examples/pytorch/text-generation/run_generation.py | 427 | 🟢 LOW | Debug print statement found |
| examples/pytorch/text-generation/run_generation.py | 442 | 🟢 LOW | Debug print statement found |
| examples/pytorch/token-classification/run_ner_no_trainer.py | 696 | 🟢 LOW | Debug print statement found |
| examples/pytorch/token-classification/run_ner_no_trainer.py | 774 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 32 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 33 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 34 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 44 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 47 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 48 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 49 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 174 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 175 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 177 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 178 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 179 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 180 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 181 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 182 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 183 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 184 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 185 | 🟢 LOW | Debug print statement found |
| examples/pytorch/transformers_serve_cb_eval_job.py | 186 | 🟢 LOW | Debug print statement found |
| examples/pytorch/translation/run_translation_no_trainer.py | 640 | 🟢 LOW | Debug print statement found |
| examples/quantization/custom_quantization.py | 78 | 🟢 LOW | Debug print statement found |
| examples/quantization/custom_quantization_int8_example.py | 243 | 🟢 LOW | Debug print statement found |
| examples/training/distributed_training.py | 28 | 🟢 LOW | Debug print statement found |
| examples/training/distributed_training.py | 31 | 🟢 LOW | Debug print statement found |
| examples/training/distributed_training.py | 111 | 🟢 LOW | Debug print statement found |
| scripts/check_tokenizers.py | 108 | 🟢 LOW | Debug print statement found |
| scripts/check_tokenizers.py | 110 | 🟢 LOW | Debug print statement found |
| scripts/check_tokenizers.py | 112 | 🟢 LOW | Debug print statement found |
| scripts/check_tokenizers.py | 117 | 🟢 LOW | Debug print statement found |
| scripts/check_tokenizers.py | 118 | 🟢 LOW | Debug print statement found |
| scripts/check_tokenizers.py | 144 | 🟢 LOW | Debug print statement found |
| scripts/check_tokenizers.py | 175 | 🟢 LOW | Debug print statement found |
| scripts/check_tokenizers.py | 179 | 🟢 LOW | Debug print statement found |
| scripts/distributed/torch-distributed-gpu-test.py | 58 | 🟢 LOW | Debug print statement found |
| scripts/stale.py | 42 | 🟢 LOW | Debug print statement found |
| scripts/stale.py | 52 | 🟢 LOW | Debug print statement found |
| scripts/stale.py | 56 | 🟢 LOW | Debug print statement found |
| scripts/stale.py | 62 | 🟢 LOW | Debug print statement found |
| scripts/stale.py | 72 | 🟢 LOW | Debug print statement found |
| setup.py | 58 | 🟢 LOW | Debug print statement found |
| setup.py | 296 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/add_new_model_like.py | 669 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/add_new_model_like.py | 702 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/add_new_model_like.py | 707 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 116 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 168 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 169 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 170 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 177 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 186 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 187 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 191 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 192 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 198 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 208 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 209 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 288 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 290 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 291 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 295 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 296 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/chat.py | 297 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/system.py | 127 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/system.py | 128 | 🟢 LOW | Debug print statement found |
| src/transformers/cli/system.py | 135 | 🟢 LOW | Debug print statement found |
| src/transformers/data/metrics/squad_metrics.py | 98 | 🟢 LOW | Debug print statement found |
| src/transformers/debug_utils.py | 174 | 🟢 LOW | Debug print statement found |
| src/transformers/debug_utils.py | 181 | 🟢 LOW | Debug print statement found |
| src/transformers/debug_utils.py | 182 | 🟢 LOW | Debug print statement found |
| src/transformers/debug_utils.py | 183 | 🟢 LOW | Debug print statement found |
| src/transformers/debug_utils.py | 184 | 🟢 LOW | Debug print statement found |
| src/transformers/debug_utils.py | 185 | 🟢 LOW | Debug print statement found |
| src/transformers/debug_utils.py | 320 | 🟢 LOW | Debug print statement found |
| src/transformers/debug_utils.py | 323 | 🟢 LOW | Debug print statement found |
| src/transformers/debug_utils.py | 329 | 🟢 LOW | Debug print statement found |
| src/transformers/debug_utils.py | 332 | 🟢 LOW | Debug print statement found |
| src/transformers/debug_utils.py | 335 | 🟢 LOW | Debug print statement found |
| src/transformers/debug_utils.py | 338 | 🟢 LOW | Debug print statement found |
| src/transformers/debug_utils.py | 341 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/continuous_batching/continuous_api.py | 1261 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 124 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 129 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 135 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 190 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 196 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 273 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 280 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 336 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 341 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 351 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 442 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 448 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 500 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 508 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 568 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 574 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 629 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 738 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 746 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 808 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 815 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 823 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 828 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 894 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 903 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 975 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 984 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1120 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1125 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1173 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1179 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1249 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1260 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1267 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1276 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1430 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1450 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1513 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1531 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1582 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1588 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1630 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1635 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1713 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1731 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1745 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1805 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1810 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1842 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1844 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1851 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1893 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1898 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1958 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/logits_process.py | 1967 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/stopping_criteria.py | 225 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/stopping_criteria.py | 234 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/streamers.py | 130 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/streamers.py | 267 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/streamers.py | 373 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/streamers.py | 391 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/streamers.py | 393 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/utils.py | 1437 | 🟢 LOW | Debug print statement found |
| src/transformers/generation/utils.py | 1463 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/accelerate.py | 682 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/accelerate.py | 706 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/accelerate.py | 714 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/accelerate.py | 742 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/accelerate.py | 773 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/accelerate.py | 785 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/accelerate.py | 816 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/accelerate.py | 823 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/accelerate.py | 828 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/bitnet.py | 80 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/integration_utils.py | 41 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/integration_utils.py | 666 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/integration_utils.py | 670 | 🟢 LOW | Debug print statement found |
| src/transformers/integrations/tensor_parallel.py | 1566 | 🟢 LOW | Debug print statement found |
| src/transformers/model_debugging_utils.py | 173 | 🟢 LOW | Debug print statement found |
| src/transformers/models/aimv2/convert_aimv2_original_pytorch_to_hf.py | 175 | 🟢 LOW | Debug print statement found |
| src/transformers/models/aimv2/convert_aimv2_original_pytorch_to_hf.py | 195 | 🟢 LOW | Debug print statement found |
| src/transformers/models/aimv2/convert_aimv2_original_pytorch_to_hf.py | 198 | 🟢 LOW | Debug print statement found |
| src/transformers/models/aimv2/convert_aimv2_original_pytorch_to_hf.py | 200 | 🟢 LOW | Debug print statement found |
| src/transformers/models/aimv2/convert_aimv2_original_pytorch_to_hf.py | 205 | 🟢 LOW | Debug print statement found |
| src/transformers/models/aimv2/convert_aimv2_original_pytorch_to_hf.py | 207 | 🟢 LOW | Debug print statement found |
| src/transformers/models/aimv2/convert_aimv2_original_pytorch_to_hf.py | 255 | 🟢 LOW | Debug print statement found |
| src/transformers/models/albert/convert_albert_original_tf_checkpoint_to_pytorch.py | 30 | 🟢 LOW | Debug print statement found |
| src/transformers/models/albert/convert_albert_original_tf_checkpoint_to_pytorch.py | 37 | 🟢 LOW | Debug print statement found |
| src/transformers/models/align/convert_align_tf_to_hf.py | 311 | 🟢 LOW | Debug print statement found |
| src/transformers/models/align/convert_align_tf_to_hf.py | 352 | 🟢 LOW | Debug print statement found |
| src/transformers/models/align/convert_align_tf_to_hf.py | 364 | 🟢 LOW | Debug print statement found |
| src/transformers/models/aria/convert_aria_weights_to_hf.py | 124 | 🟢 LOW | Debug print statement found |
| src/transformers/models/aria/modeling_aria.py | 1122 | 🟢 LOW | Debug print statement found |
| src/transformers/models/aria/modeling_aria.py | 1125 | 🟢 LOW | Debug print statement found |
| src/transformers/models/aria/modular_aria.py | 1030 | 🟢 LOW | Debug print statement found |
| src/transformers/models/aria/modular_aria.py | 1033 | 🟢 LOW | Debug print statement found |
| src/transformers/models/audio_spectrogram_transformer/convert_audio_spectrogram_transformer_original_to_pytorch.py | 246 | 🟢 LOW | Debug print statement found |
| src/transformers/models/audio_spectrogram_transformer/convert_audio_spectrogram_transformer_original_to_pytorch.py | 250 | 🟢 LOW | Debug print statement found |
| src/transformers/models/audio_spectrogram_transformer/convert_audio_spectrogram_transformer_original_to_pytorch.py | 252 | 🟢 LOW | Debug print statement found |
| src/transformers/models/audio_spectrogram_transformer/convert_audio_spectrogram_transformer_original_to_pytorch.py | 256 | 🟢 LOW | Debug print statement found |
| src/transformers/models/beit/convert_beit_unilm_to_pytorch.py | 348 | 🟢 LOW | Debug print statement found |
| src/transformers/models/beit/convert_beit_unilm_to_pytorch.py | 356 | 🟢 LOW | Debug print statement found |
| src/transformers/models/beit/convert_beit_unilm_to_pytorch.py | 358 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bert/convert_bert_original_tf_checkpoint_to_pytorch.py | 30 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bert/convert_bert_original_tf_checkpoint_to_pytorch.py | 37 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bert/convert_bert_token_dropping_original_tf2_checkpoint_to_pytorch.py | 80 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bert/convert_bert_token_dropping_original_tf2_checkpoint_to_pytorch.py | 165 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bert/convert_bert_token_dropping_original_tf2_checkpoint_to_pytorch.py | 167 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bertweet/tokenization_bertweet.py | 567 | 🟢 LOW | Debug print statement found |
| src/transformers/models/big_bird/convert_bigbird_original_tf_checkpoint_to_pytorch.py | 178 | 🟢 LOW | Debug print statement found |
| src/transformers/models/big_bird/convert_bigbird_original_tf_checkpoint_to_pytorch.py | 211 | 🟢 LOW | Debug print statement found |
| src/transformers/models/big_bird/convert_bigbird_original_tf_checkpoint_to_pytorch.py | 222 | 🟢 LOW | Debug print statement found |
| src/transformers/models/biogpt/convert_biogpt_original_pytorch_checkpoint_to_pytorch.py | 163 | 🟢 LOW | Debug print statement found |
| src/transformers/models/biogpt/convert_biogpt_original_pytorch_checkpoint_to_pytorch.py | 182 | 🟢 LOW | Debug print statement found |
| src/transformers/models/biogpt/convert_biogpt_original_pytorch_checkpoint_to_pytorch.py | 222 | 🟢 LOW | Debug print statement found |
| src/transformers/models/biogpt/convert_biogpt_original_pytorch_checkpoint_to_pytorch.py | 239 | 🟢 LOW | Debug print statement found |
| src/transformers/models/biogpt/convert_biogpt_original_pytorch_checkpoint_to_pytorch.py | 268 | 🟢 LOW | Debug print statement found |
| src/transformers/models/biogpt/convert_biogpt_original_pytorch_checkpoint_to_pytorch.py | 271 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bit/convert_bit_to_pytorch.py | 140 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bit/convert_bit_to_pytorch.py | 141 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bit/convert_bit_to_pytorch.py | 145 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bit/convert_bit_to_pytorch.py | 149 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bit/convert_bit_to_pytorch.py | 154 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blenderbot/modeling_blenderbot.py | 840 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blenderbot/modeling_blenderbot.py | 845 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blenderbot/modeling_blenderbot.py | 849 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blenderbot/modeling_blenderbot.py | 859 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blenderbot_small/modeling_blenderbot_small.py | 804 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blenderbot_small/modeling_blenderbot_small.py | 809 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blenderbot_small/modeling_blenderbot_small.py | 813 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blenderbot_small/modeling_blenderbot_small.py | 823 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip/convert_blip_original_pytorch_to_hf.py | 145 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip/modeling_blip.py | 897 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip/modeling_blip.py | 1016 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip/modeling_blip.py | 1114 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 185 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 190 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 260 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 261 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 271 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 285 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 286 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 292 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 309 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 310 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 314 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 316 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 339 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/convert_blip_2_original_to_pytorch.py | 340 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/modeling_blip_2.py | 1338 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/modeling_blip_2.py | 1423 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/modeling_blip_2.py | 1655 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/modeling_blip_2.py | 1667 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/modeling_blip_2.py | 1683 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/modeling_blip_2.py | 1924 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/modeling_blip_2.py | 1927 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/modeling_blip_2.py | 1937 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blip_2/modeling_blip_2.py | 1940 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bloom/convert_bloom_original_checkpoint_to_pytorch.py | 100 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bloom/convert_bloom_original_checkpoint_to_pytorch.py | 204 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bloom/convert_bloom_original_checkpoint_to_pytorch.py | 208 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blt/modeling_blt.py | 1426 | 🟢 LOW | Debug print statement found |
| src/transformers/models/blt/modular_blt.py | 1153 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bridgetower/modeling_bridgetower.py | 1488 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bridgetower/modeling_bridgetower.py | 1693 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bridgetower/modeling_bridgetower.py | 1696 | 🟢 LOW | Debug print statement found |
| src/transformers/models/bros/convert_bros_to_pytorch.py | 110 | 🟢 LOW | Debug print statement found |
| src/transformers/models/byt5/convert_byt5_original_tf_checkpoint_to_pytorch.py | 137 | 🟢 LOW | Debug print statement found |
| src/transformers/models/byt5/convert_byt5_original_tf_checkpoint_to_pytorch.py | 144 | 🟢 LOW | Debug print statement found |
| src/transformers/models/canine/convert_canine_original_tf_checkpoint_to_pytorch.py | 132 | 🟢 LOW | Debug print statement found |
| src/transformers/models/canine/convert_canine_original_tf_checkpoint_to_pytorch.py | 138 | 🟢 LOW | Debug print statement found |
| src/transformers/models/canine/convert_canine_original_tf_checkpoint_to_pytorch.py | 143 | 🟢 LOW | Debug print statement found |
| src/transformers/models/chameleon/convert_chameleon_weights_to_hf.py | 124 | 🟢 LOW | Debug print statement found |
| src/transformers/models/chameleon/convert_chameleon_weights_to_hf.py | 400 | 🟢 LOW | Debug print statement found |
| src/transformers/models/chameleon/convert_chameleon_weights_to_hf.py | 401 | 🟢 LOW | Debug print statement found |
| src/transformers/models/chameleon/convert_chameleon_weights_to_hf.py | 417 | 🟢 LOW | Debug print statement found |
| src/transformers/models/chameleon/convert_chameleon_weights_to_hf.py | 418 | 🟢 LOW | Debug print statement found |
| src/transformers/models/chameleon/convert_chameleon_weights_to_hf.py | 434 | 🟢 LOW | Debug print statement found |
| src/transformers/models/chinese_clip/convert_chinese_clip_original_pytorch_to_hf.py | 133 | 🟢 LOW | Debug print statement found |
| src/transformers/models/chmv2/convert_chmv2_to_hf.py | 238 | 🟢 LOW | Debug print statement found |
| src/transformers/models/chmv2/convert_chmv2_to_hf.py | 254 | 🟢 LOW | Debug print statement found |
| src/transformers/models/chmv2/convert_chmv2_to_hf.py | 255 | 🟢 LOW | Debug print statement found |
| src/transformers/models/clipseg/convert_clipseg_original_pytorch_to_hf.py | 222 | 🟢 LOW | Debug print statement found |
| src/transformers/models/clipseg/convert_clipseg_original_pytorch_to_hf.py | 225 | 🟢 LOW | Debug print statement found |
| src/transformers/models/clipseg/convert_clipseg_original_pytorch_to_hf.py | 230 | 🟢 LOW | Debug print statement found |
| src/transformers/models/clipseg/modeling_clipseg.py | 1052 | 🟢 LOW | Debug print statement found |
| src/transformers/models/clipseg/modular_clipseg.py | 602 | 🟢 LOW | Debug print statement found |
| src/transformers/models/clvp/convert_clvp_to_hf.py | 199 | 🟢 LOW | Debug print statement found |
| src/transformers/models/clvp/convert_clvp_to_hf.py | 216 | 🟢 LOW | Debug print statement found |
| src/transformers/models/cohere/tokenization_cohere.py | 276 | 🟢 LOW | Debug print statement found |
| src/transformers/models/cohere/tokenization_cohere.py | 279 | 🟢 LOW | Debug print statement found |
| src/transformers/models/cohere/tokenization_cohere.py | 369 | 🟢 LOW | Debug print statement found |
| src/transformers/models/cohere/tokenization_cohere.py | 372 | 🟢 LOW | Debug print statement found |
| src/transformers/models/colpali/convert_colpali_weights_to_hf.py | 128 | 🟢 LOW | Debug print statement found |
| src/transformers/models/colpali/convert_colpali_weights_to_hf.py | 138 | 🟢 LOW | Debug print statement found |
| src/transformers/models/colpali/convert_colpali_weights_to_hf.py | 142 | 🟢 LOW | Debug print statement found |
| src/transformers/models/colpali/convert_colpali_weights_to_hf.py | 166 | 🟢 LOW | Debug print statement found |
| src/transformers/models/colpali/convert_colpali_weights_to_hf.py | 170 | 🟢 LOW | Debug print statement found |
| src/transformers/models/colqwen2/convert_colqwen2_weights_to_hf.py | 129 | 🟢 LOW | Debug print statement found |
| src/transformers/models/colqwen2/convert_colqwen2_weights_to_hf.py | 142 | 🟢 LOW | Debug print statement found |
| src/transformers/models/colqwen2/convert_colqwen2_weights_to_hf.py | 152 | 🟢 LOW | Debug print statement found |
| src/transformers/models/colqwen2/convert_colqwen2_weights_to_hf.py | 156 | 🟢 LOW | Debug print statement found |
| src/transformers/models/colqwen2/convert_colqwen2_weights_to_hf.py | 168 | 🟢 LOW | Debug print statement found |
| src/transformers/models/colqwen2/convert_colqwen2_weights_to_hf.py | 172 | 🟢 LOW | Debug print statement found |
| src/transformers/models/conditional_detr/modeling_conditional_detr.py | 1576 | 🟢 LOW | Debug print statement found |
| src/transformers/models/conditional_detr/modular_conditional_detr.py | 1086 | 🟢 LOW | Debug print statement found |
| src/transformers/models/convnext/convert_convnext_to_pytorch.py | 192 | 🟢 LOW | Debug print statement found |
| src/transformers/models/convnext/convert_convnext_to_pytorch.py | 194 | 🟢 LOW | Debug print statement found |
| src/transformers/models/convnext/convert_convnext_to_pytorch.py | 197 | 🟢 LOW | Debug print statement found |
| src/transformers/models/convnextv2/convert_convnextv2_to_pytorch.py | 149 | 🟢 LOW | Debug print statement found |
| src/transformers/models/convnextv2/convert_convnextv2_to_pytorch.py | 155 | 🟢 LOW | Debug print statement found |
| src/transformers/models/convnextv2/convert_convnextv2_to_pytorch.py | 219 | 🟢 LOW | Debug print statement found |
| src/transformers/models/convnextv2/convert_convnextv2_to_pytorch.py | 222 | 🟢 LOW | Debug print statement found |
| src/transformers/models/convnextv2/convert_convnextv2_to_pytorch.py | 261 | 🟢 LOW | Debug print statement found |
| src/transformers/models/cosmos3_omni/modeling_cosmos3_omni.py | 630 | 🟢 LOW | Debug print statement found |
| src/transformers/models/cpmant/modeling_cpmant.py | 736 | 🟢 LOW | Debug print statement found |
| src/transformers/models/csm/convert_csm.py | 84 | 🟢 LOW | Debug print statement found |
| src/transformers/models/csm/convert_csm.py | 157 | 🟢 LOW | Debug print statement found |
| src/transformers/models/csm/convert_csm.py | 160 | 🟢 LOW | Debug print statement found |
| src/transformers/models/csm/convert_csm.py | 205 | 🟢 LOW | Debug print statement found |
| src/transformers/models/csm/convert_csm.py | 209 | 🟢 LOW | Debug print statement found |
| src/transformers/models/csm/convert_csm.py | 222 | 🟢 LOW | Debug print statement found |
| src/transformers/models/csm/convert_csm.py | 228 | 🟢 LOW | Debug print statement found |
| src/transformers/models/csm/convert_csm.py | 230 | 🟢 LOW | Debug print statement found |
| src/transformers/models/csm/convert_csm.py | 264 | 🟢 LOW | Debug print statement found |
| src/transformers/models/csm/convert_csm.py | 267 | 🟢 LOW | Debug print statement found |
| src/transformers/models/csm/convert_csm.py | 291 | 🟢 LOW | Debug print statement found |
| src/transformers/models/cvt/convert_cvt_original_pytorch_checkpoint_to_pytorch.py | 323 | 🟢 LOW | Debug print statement found |
| src/transformers/models/d_fine/convert_d_fine_original_pytorch_checkpoint_to_hf.py | 649 | 🟢 LOW | Debug print statement found |
| src/transformers/models/d_fine/convert_d_fine_original_pytorch_checkpoint_to_hf.py | 651 | 🟢 LOW | Debug print statement found |
| src/transformers/models/d_fine/modeling_d_fine.py | 2033 | 🟢 LOW | Debug print statement found |
| src/transformers/models/d_fine/modular_d_fine.py | 998 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dab_detr/modeling_dab_detr.py | 1511 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dac/convert_dac_checkpoint.py | 184 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dac/convert_dac_checkpoint.py | 258 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_audio_original_pytorch_checkpoint_to_pytorch.py | 249 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_audio_original_pytorch_checkpoint_to_pytorch.py | 256 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_audio_original_pytorch_checkpoint_to_pytorch.py | 258 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_audio_original_pytorch_checkpoint_to_pytorch.py | 260 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_text_original_pytorch_checkpoint_to_pytorch.py | 79 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_text_original_pytorch_checkpoint_to_pytorch.py | 178 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_text_original_pytorch_checkpoint_to_pytorch.py | 180 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_text_original_pytorch_checkpoint_to_pytorch.py | 182 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_text_original_pytorch_checkpoint_to_pytorch.py | 187 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_vision_original_pytorch_checkpoint_to_pytorch.py | 188 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_vision_original_pytorch_checkpoint_to_pytorch.py | 190 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_vision_original_pytorch_checkpoint_to_pytorch.py | 192 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_vision_original_pytorch_checkpoint_to_pytorch.py | 196 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_vision_original_pytorch_checkpoint_to_pytorch.py | 223 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_vision_original_pytorch_checkpoint_to_pytorch.py | 228 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_vision_original_pytorch_checkpoint_to_pytorch.py | 330 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_vision_original_pytorch_checkpoint_to_pytorch.py | 331 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_vision_original_pytorch_checkpoint_to_pytorch.py | 342 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_vision_original_pytorch_checkpoint_to_pytorch.py | 344 | 🟢 LOW | Debug print statement found |
| src/transformers/models/data2vec/convert_data2vec_vision_original_pytorch_checkpoint_to_pytorch.py | 349 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 140 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 143 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 146 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 150 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 153 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 155 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 159 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 162 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 168 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 178 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 179 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 180 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 191 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 196 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 210 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 211 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_ocr2/convert_deepseek_ocr2_weights_to_hf.py | 212 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_v2/configuration_deepseek_v2.py | 47 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_v2/modular_deepseek_v2.py | 65 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 182 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 190 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 199 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 248 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 274 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 277 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 284 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 289 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 294 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 300 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 305 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 308 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 316 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl/convert_deepseek_vl_weights_to_hf.py | 318 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 209 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 217 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 226 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 283 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 312 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 315 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 322 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 327 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 332 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 338 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 343 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 346 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 354 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deepseek_vl_hybrid/convert_deepseek_vl_hybrid_weights_to_hf.py | 356 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deformable_detr/convert_deformable_detr_to_pytorch.py | 181 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deformable_detr/convert_deformable_detr_to_pytorch.py | 186 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deformable_detr/convert_deformable_detr_to_pytorch.py | 201 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deformable_detr/modeling_deformable_detr.py | 1628 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deformable_detr/modular_deformable_detr.py | 1455 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deimv2/modeling_deimv2.py | 2151 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deimv2/modular_deimv2.py | 945 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deit/convert_deit_timm_to_pytorch.py | 199 | 🟢 LOW | Debug print statement found |
| src/transformers/models/deit/convert_deit_timm_to_pytorch.py | 201 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_anything/convert_depth_anything_to_hf.py | 268 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_anything/convert_depth_anything_to_hf.py | 269 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_anything/convert_depth_anything_to_hf.py | 327 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_anything/convert_depth_anything_to_hf.py | 331 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_anything/convert_depth_anything_to_hf.py | 336 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_anything/convert_distill_any_depth_to_hf.py | 183 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_anything/convert_distill_any_depth_to_hf.py | 184 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_anything/convert_distill_any_depth_to_hf.py | 187 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_anything/convert_distill_any_depth_to_hf.py | 207 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_anything/convert_distill_any_depth_to_hf.py | 211 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_anything/convert_distill_any_depth_to_hf.py | 216 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_pro/convert_depth_pro_weights_to_hf.py | 161 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_pro/convert_depth_pro_weights_to_hf.py | 171 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_pro/convert_depth_pro_weights_to_hf.py | 186 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_pro/convert_depth_pro_weights_to_hf.py | 189 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_pro/convert_depth_pro_weights_to_hf.py | 191 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_pro/convert_depth_pro_weights_to_hf.py | 197 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_pro/convert_depth_pro_weights_to_hf.py | 199 | 🟢 LOW | Debug print statement found |
| src/transformers/models/depth_pro/convert_depth_pro_weights_to_hf.py | 243 | 🟢 LOW | Debug print statement found |
| src/transformers/models/detr/convert_detr_to_pytorch.py | 355 | 🟢 LOW | Debug print statement found |
| src/transformers/models/detr/modeling_detr.py | 1384 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dia/convert_dia_to_hf.py | 88 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dia/convert_dia_to_hf.py | 138 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dia/convert_dia_to_hf.py | 140 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dia/convert_dia_to_hf.py | 188 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dia/convert_dia_to_hf.py | 198 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov2/convert_dinov2_to_hf.py | 227 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov2/convert_dinov2_to_hf.py | 229 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov2/convert_dinov2_to_hf.py | 233 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov2/convert_dinov2_to_hf.py | 237 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov2/convert_dinov2_to_hf.py | 239 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov2_with_registers/convert_dinov2_with_registers_to_hf.py | 233 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov2_with_registers/convert_dinov2_with_registers_to_hf.py | 235 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov2_with_registers/convert_dinov2_with_registers_to_hf.py | 239 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov2_with_registers/convert_dinov2_with_registers_to_hf.py | 243 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov2_with_registers/convert_dinov2_with_registers_to_hf.py | 245 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov3_convnext/convert_dinov3_convnext_to_hf.py | 154 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov3_convnext/convert_dinov3_convnext_to_hf.py | 184 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov3_convnext/convert_dinov3_convnext_to_hf.py | 196 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov3_convnext/convert_dinov3_convnext_to_hf.py | 197 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov3_convnext/convert_dinov3_convnext_to_hf.py | 205 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov3_convnext/convert_dinov3_convnext_to_hf.py | 206 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov3_convnext/convert_dinov3_convnext_to_hf.py | 214 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov3_convnext/convert_dinov3_convnext_to_hf.py | 220 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov3_vit/convert_dinov3_vit_to_hf.py | 299 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov3_vit/convert_dinov3_vit_to_hf.py | 311 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov3_vit/convert_dinov3_vit_to_hf.py | 312 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov3_vit/convert_dinov3_vit_to_hf.py | 326 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dinov3_vit/convert_dinov3_vit_to_hf.py | 332 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dit/convert_dit_unilm_to_pytorch.py | 190 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dit/convert_dit_unilm_to_pytorch.py | 192 | 🟢 LOW | Debug print statement found |
| src/transformers/models/donut/convert_donut_to_pytorch.py | 197 | 🟢 LOW | Debug print statement found |
| src/transformers/models/donut/convert_donut_to_pytorch.py | 200 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpr/convert_dpr_original_checkpoint_to_pytorch.py | 31 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpr/convert_dpr_original_checkpoint_to_pytorch.py | 60 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpr/convert_dpr_original_checkpoint_to_pytorch.py | 78 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpr/convert_dpr_original_checkpoint_to_pytorch.py | 96 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpr/tokenization_dpr.py | 234 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpr/tokenization_dpr_fast.py | 226 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dinov2_depth_to_hf.py | 254 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dinov2_depth_to_hf.py | 297 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dinov2_depth_to_hf.py | 298 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dinov2_depth_to_hf.py | 328 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dinov2_depth_to_hf.py | 329 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dinov2_depth_to_hf.py | 341 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dinov2_depth_to_hf.py | 345 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dinov2_depth_to_hf.py | 350 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_beit_to_hf.py | 203 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_beit_to_hf.py | 204 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_beit_to_hf.py | 218 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_beit_to_hf.py | 219 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_beit_to_hf.py | 220 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_beit_to_hf.py | 243 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_beit_to_hf.py | 244 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_beit_to_hf.py | 269 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_beit_to_hf.py | 273 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_beit_to_hf.py | 278 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_hybrid_to_pytorch.py | 272 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_hybrid_to_pytorch.py | 274 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_swinv2_to_hf.py | 217 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_swinv2_to_hf.py | 218 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_swinv2_to_hf.py | 247 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_swinv2_to_hf.py | 248 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_swinv2_to_hf.py | 280 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_swinv2_to_hf.py | 284 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_swinv2_to_hf.py | 289 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_to_pytorch.py | 232 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_to_pytorch.py | 236 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_to_pytorch.py | 238 | 🟢 LOW | Debug print statement found |
| src/transformers/models/dpt/convert_dpt_to_pytorch.py | 242 | 🟢 LOW | Debug print statement found |
| src/transformers/models/edgetam/convert_edgetam_to_hf.py | 210 | 🟢 LOW | Debug print statement found |
| src/transformers/models/edgetam/convert_edgetam_to_hf.py | 211 | 🟢 LOW | Debug print statement found |
| src/transformers/models/edgetam_video/convert_edgetam_video_to_hf.py | 251 | 🟢 LOW | Debug print statement found |
| src/transformers/models/edgetam_video/convert_edgetam_video_to_hf.py | 252 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientloftr/convert_efficientloftr_to_hf.py | 143 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientloftr/convert_efficientloftr_to_hf.py | 149 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientloftr/convert_efficientloftr_to_hf.py | 153 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientloftr/convert_efficientloftr_to_hf.py | 165 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientloftr/convert_efficientloftr_to_hf.py | 171 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientloftr/convert_efficientloftr_to_hf.py | 174 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientloftr/convert_efficientloftr_to_hf.py | 180 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientloftr/convert_efficientloftr_to_hf.py | 182 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientloftr/convert_efficientloftr_to_hf.py | 186 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientloftr/convert_efficientloftr_to_hf.py | 188 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientloftr/convert_efficientloftr_to_hf.py | 191 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientloftr/convert_efficientloftr_to_hf.py | 206 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientnet/convert_efficientnet_to_pytorch.py | 279 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientnet/convert_efficientnet_to_pytorch.py | 303 | 🟢 LOW | Debug print statement found |
| src/transformers/models/efficientnet/convert_efficientnet_to_pytorch.py | 315 | 🟢 LOW | Debug print statement found |
| src/transformers/models/electra/convert_electra_original_tf_checkpoint_to_pytorch.py | 68 | 🟢 LOW | Debug print statement found |
| src/transformers/models/electra/convert_electra_original_tf_checkpoint_to_pytorch.py | 103 | 🟢 LOW | Debug print statement found |
| src/transformers/models/electra/convert_electra_original_tf_checkpoint_to_pytorch.py | 106 | 🟢 LOW | Debug print statement found |
| src/transformers/models/electra/convert_electra_original_tf_checkpoint_to_pytorch.py | 114 | 🟢 LOW | Debug print statement found |
| src/transformers/models/electra/convert_electra_original_tf_checkpoint_to_pytorch.py | 129 | 🟢 LOW | Debug print statement found |
| src/transformers/models/emu3/convert_emu3_weights_to_hf.py | 313 | 🟢 LOW | Debug print statement found |
| src/transformers/models/emu3/convert_emu3_weights_to_hf.py | 314 | 🟢 LOW | Debug print statement found |
| src/transformers/models/emu3/convert_emu3_weights_to_hf.py | 344 | 🟢 LOW | Debug print statement found |
| src/transformers/models/emu3/convert_emu3_weights_to_hf.py | 345 | 🟢 LOW | Debug print statement found |
| src/transformers/models/encodec/convert_encodec_checkpoint_to_pytorch.py | 335 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 131 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 135 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 140 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 145 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 149 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 151 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 164 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 172 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 181 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 205 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 254 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 259 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 264 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 269 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 272 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 280 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt/convert_eomt_to_hf.py | 282 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt_dinov3/convert_eomt_dinov3_to_hf.py | 132 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt_dinov3/convert_eomt_dinov3_to_hf.py | 134 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt_dinov3/convert_eomt_dinov3_to_hf.py | 614 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt_dinov3/convert_eomt_dinov3_to_hf.py | 618 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eomt_dinov3/convert_eomt_dinov3_to_hf.py | 630 | 🟢 LOW | Debug print statement found |
| src/transformers/models/ernie4_5_vl_moe/convert_ernie4_5_vl_moe_to_hf.py | 253 | 🟢 LOW | Debug print statement found |
| src/transformers/models/ernie4_5_vl_moe/convert_ernie4_5_vl_moe_to_hf.py | 308 | 🟢 LOW | Debug print statement found |
| src/transformers/models/ernie4_5_vl_moe/convert_ernie4_5_vl_moe_to_hf.py | 324 | 🟢 LOW | Debug print statement found |
| src/transformers/models/ernie4_5_vl_moe/convert_ernie4_5_vl_moe_to_hf.py | 349 | 🟢 LOW | Debug print statement found |
| src/transformers/models/esm/convert_esm.py | 180 | 🟢 LOW | Debug print statement found |
| src/transformers/models/esm/convert_esm.py | 318 | 🟢 LOW | Debug print statement found |
| src/transformers/models/esm/convert_esm.py | 349 | 🟢 LOW | Debug print statement found |
| src/transformers/models/esm/convert_esm.py | 350 | 🟢 LOW | Debug print statement found |
| src/transformers/models/esm/convert_esm.py | 362 | 🟢 LOW | Debug print statement found |
| src/transformers/models/esm/convert_esm.py | 363 | 🟢 LOW | Debug print statement found |
| src/transformers/models/esm/convert_esm.py | 364 | 🟢 LOW | Debug print statement found |
| src/transformers/models/esm/convert_esm.py | 370 | 🟢 LOW | Debug print statement found |
| src/transformers/models/esm/convert_esm.py | 375 | 🟢 LOW | Debug print statement found |
| src/transformers/models/esm/openfold_utils/tensor_utils.py | 136 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eurobert/modeling_eurobert.py | 450 | 🟢 LOW | Debug print statement found |
| src/transformers/models/eurobert/modular_eurobert.py | 183 | 🟢 LOW | Debug print statement found |
| src/transformers/models/evolla/modeling_evolla.py | 1486 | 🟢 LOW | Debug print statement found |
| src/transformers/models/evolla/modular_evolla.py | 862 | 🟢 LOW | Debug print statement found |
| src/transformers/models/falcon/convert_custom_code_checkpoint.py | 74 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fast_vlm/convert_fastvlm_weights_to_hf.py | 216 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fast_vlm/modeling_fast_vlm.py | 345 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fast_vlm/modular_fast_vlm.py | 301 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fastspeech2_conformer/convert_fastspeech2_conformer_original_pytorch_checkpoint_to_pytorch.py | 185 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fastspeech2_conformer/convert_hifigan.py | 112 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fastspeech2_conformer/convert_model_with_hifigan.py | 73 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fastspeech2_conformer/modeling_fastspeech2_conformer.py | 1160 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fastspeech2_conformer/modeling_fastspeech2_conformer.py | 1554 | 🟢 LOW | Debug print statement found |
| src/transformers/models/flava/modeling_flava.py | 1404 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fnet/convert_fnet_original_flax_checkpoint_to_pytorch.py | 31 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fnet/convert_fnet_original_flax_checkpoint_to_pytorch.py | 133 | 🟢 LOW | Debug print statement found |
| src/transformers/models/focalnet/convert_focalnet_to_hf_format.py | 140 | 🟢 LOW | Debug print statement found |
| src/transformers/models/focalnet/convert_focalnet_to_hf_format.py | 190 | 🟢 LOW | Debug print statement found |
| src/transformers/models/focalnet/convert_focalnet_to_hf_format.py | 192 | 🟢 LOW | Debug print statement found |
| src/transformers/models/focalnet/convert_focalnet_to_hf_format.py | 207 | 🟢 LOW | Debug print statement found |
| src/transformers/models/focalnet/convert_focalnet_to_hf_format.py | 210 | 🟢 LOW | Debug print statement found |
| src/transformers/models/focalnet/convert_focalnet_to_hf_format.py | 215 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fsmt/convert_fsmt_original_pytorch_checkpoint_to_pytorch.py | 93 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fsmt/convert_fsmt_original_pytorch_checkpoint_to_pytorch.py | 108 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fsmt/convert_fsmt_original_pytorch_checkpoint_to_pytorch.py | 129 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fsmt/convert_fsmt_original_pytorch_checkpoint_to_pytorch.py | 145 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fsmt/convert_fsmt_original_pytorch_checkpoint_to_pytorch.py | 158 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fsmt/convert_fsmt_original_pytorch_checkpoint_to_pytorch.py | 208 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fsmt/convert_fsmt_original_pytorch_checkpoint_to_pytorch.py | 221 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fsmt/convert_fsmt_original_pytorch_checkpoint_to_pytorch.py | 253 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fsmt/convert_fsmt_original_pytorch_checkpoint_to_pytorch.py | 256 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fsmt/convert_fsmt_original_pytorch_checkpoint_to_pytorch.py | 257 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fsmt/convert_fsmt_original_pytorch_checkpoint_to_pytorch.py | 258 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fsmt/convert_fsmt_original_pytorch_checkpoint_to_pytorch.py | 259 | 🟢 LOW | Debug print statement found |
| src/transformers/models/funnel/convert_funnel_original_tf_checkpoint_to_pytorch.py | 107 | 🟢 LOW | Debug print statement found |
| src/transformers/models/funnel/convert_funnel_original_tf_checkpoint_to_pytorch.py | 123 | 🟢 LOW | Debug print statement found |
| src/transformers/models/funnel/convert_funnel_original_tf_checkpoint_to_pytorch.py | 130 | 🟢 LOW | Debug print statement found |
| src/transformers/models/fuyu/modeling_fuyu.py | 266 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma/convert_gemma_weights_to_hf.py | 64 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma/convert_gemma_weights_to_hf.py | 102 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma/convert_gemma_weights_to_hf.py | 109 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma/convert_gemma_weights_to_hf.py | 112 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma/convert_gemma_weights_to_hf.py | 120 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma2/convert_gemma2_weights_to_hf.py | 80 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma2/convert_gemma2_weights_to_hf.py | 83 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma2/convert_gemma2_weights_to_hf.py | 89 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma2/convert_gemma2_weights_to_hf.py | 93 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma2/convert_gemma2_weights_to_hf.py | 135 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma2/convert_gemma2_weights_to_hf.py | 142 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma2/convert_gemma2_weights_to_hf.py | 145 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma2/convert_gemma2_weights_to_hf.py | 153 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma4/convert_gemma4_weights.py | 1789 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma4/convert_gemma4_weights.py | 1791 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma4/convert_gemma4_weights.py | 1831 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma4/convert_gemma4_weights.py | 1858 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gemma4/convert_gemma4_weights.py | 1891 | 🟢 LOW | Debug print statement found |
| src/transformers/models/git/convert_git_to_pytorch.py | 319 | 🟢 LOW | Debug print statement found |
| src/transformers/models/git/convert_git_to_pytorch.py | 320 | 🟢 LOW | Debug print statement found |
| src/transformers/models/git/convert_git_to_pytorch.py | 361 | 🟢 LOW | Debug print statement found |
| src/transformers/models/git/convert_git_to_pytorch.py | 399 | 🟢 LOW | Debug print statement found |
| src/transformers/models/git/convert_git_to_pytorch.py | 411 | 🟢 LOW | Debug print statement found |
| src/transformers/models/git/convert_git_to_pytorch.py | 413 | 🟢 LOW | Debug print statement found |
| src/transformers/models/git/convert_git_to_pytorch.py | 417 | 🟢 LOW | Debug print statement found |
| src/transformers/models/git/convert_git_to_pytorch.py | 422 | 🟢 LOW | Debug print statement found |
| src/transformers/models/git/modeling_git.py | 964 | 🟢 LOW | Debug print statement found |
| src/transformers/models/git/modeling_git.py | 990 | 🟢 LOW | Debug print statement found |
| src/transformers/models/git/modeling_git.py | 1066 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v/convert_glm4v_mgt_weights_to_hf.py | 271 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v/convert_glm4v_mgt_weights_to_hf.py | 272 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v/convert_glm4v_mgt_weights_to_hf.py | 273 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v/convert_glm4v_mgt_weights_to_hf.py | 350 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v/convert_glm4v_mgt_weights_to_hf.py | 356 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v/convert_glm4v_mgt_weights_to_hf.py | 359 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v/convert_glm4v_mgt_weights_to_hf.py | 478 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v/convert_glm4v_mgt_weights_to_hf.py | 480 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v/convert_glm4v_mgt_weights_to_hf.py | 482 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v/convert_glm4v_mgt_weights_to_hf.py | 496 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v/convert_glm4v_mgt_weights_to_hf.py | 501 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v/convert_glm4v_mgt_weights_to_hf.py | 665 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v/convert_glm4v_mgt_weights_to_hf.py | 738 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 224 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 225 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 226 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 303 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 309 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 312 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 314 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 434 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 436 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 438 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 441 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 453 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 458 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 659 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 661 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glm4v_moe/convert_glm4v_moe_mgt_weights_to_hf.py | 742 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glmasr/modeling_glmasr.py | 577 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glmasr/modular_glmasr.py | 430 | 🟢 LOW | Debug print statement found |
| src/transformers/models/glpn/convert_glpn_to_pytorch.py | 177 | 🟢 LOW | Debug print statement found |
| src/transformers/models/got_ocr2/convert_got_ocr2_weights_to_hf.py | 107 | 🟢 LOW | Debug print statement found |
| src/transformers/models/got_ocr2/convert_got_ocr2_weights_to_hf.py | 113 | 🟢 LOW | Debug print statement found |
| src/transformers/models/got_ocr2/convert_got_ocr2_weights_to_hf.py | 115 | 🟢 LOW | Debug print statement found |
| src/transformers/models/got_ocr2/convert_got_ocr2_weights_to_hf.py | 126 | 🟢 LOW | Debug print statement found |
| src/transformers/models/got_ocr2/convert_got_ocr2_weights_to_hf.py | 130 | 🟢 LOW | Debug print statement found |
| src/transformers/models/got_ocr2/convert_got_ocr2_weights_to_hf.py | 131 | 🟢 LOW | Debug print statement found |
| src/transformers/models/got_ocr2/convert_got_ocr2_weights_to_hf.py | 132 | 🟢 LOW | Debug print statement found |
| src/transformers/models/got_ocr2/convert_got_ocr2_weights_to_hf.py | 134 | 🟢 LOW | Debug print statement found |
| src/transformers/models/got_ocr2/convert_got_ocr2_weights_to_hf.py | 142 | 🟢 LOW | Debug print statement found |
| src/transformers/models/got_ocr2/convert_got_ocr2_weights_to_hf.py | 153 | 🟢 LOW | Debug print statement found |
| src/transformers/models/got_ocr2/convert_got_ocr2_weights_to_hf.py | 155 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt2/convert_gpt2_original_tf_checkpoint_to_pytorch.py | 99 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt2/convert_gpt2_original_tf_checkpoint_to_pytorch.py | 101 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_neo/convert_gpt_neo_mesh_tf_to_pytorch.py | 100 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_neo/convert_gpt_neo_mesh_tf_to_pytorch.py | 124 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_neo/convert_gpt_neo_mesh_tf_to_pytorch.py | 131 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_oss/convert_gpt_oss_weights_to_hf.py | 188 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_oss/convert_gpt_oss_weights_to_hf.py | 194 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_oss/convert_gpt_oss_weights_to_hf.py | 204 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_oss/convert_gpt_oss_weights_to_hf.py | 251 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_oss/convert_gpt_oss_weights_to_hf.py | 255 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_oss/convert_gpt_oss_weights_to_hf.py | 258 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_oss/convert_gpt_oss_weights_to_hf.py | 263 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_oss/convert_gpt_oss_weights_to_hf.py | 280 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_oss/convert_gpt_oss_weights_to_hf.py | 282 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_oss/convert_gpt_oss_weights_to_hf.py | 285 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_oss/convert_gpt_oss_weights_to_hf.py | 777 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_sw3/convert_megatron_to_pytorch.py | 36 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_sw3/convert_megatron_to_pytorch.py | 40 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_sw3/convert_megatron_to_pytorch.py | 42 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_sw3/convert_megatron_to_pytorch.py | 148 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_sw3/convert_megatron_to_pytorch.py | 167 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_sw3/convert_megatron_to_pytorch.py | 177 | 🟢 LOW | Debug print statement found |
| src/transformers/models/gpt_sw3/convert_megatron_to_pytorch.py | 182 | 🟢 LOW | Debug print statement found |
| src/transformers/models/grounding_dino/convert_grounding_dino_to_hf.py | 415 | 🟢 LOW | Debug print statement found |
| src/transformers/models/grounding_dino/convert_grounding_dino_to_hf.py | 431 | 🟢 LOW | Debug print statement found |
| src/transformers/models/grounding_dino/convert_grounding_dino_to_hf.py | 432 | 🟢 LOW | Debug print statement found |
| src/transformers/models/grounding_dino/convert_grounding_dino_to_hf.py | 453 | 🟢 LOW | Debug print statement found |
| src/transformers/models/grounding_dino/convert_grounding_dino_to_hf.py | 460 | 🟢 LOW | Debug print statement found |
| src/transformers/models/grounding_dino/modeling_grounding_dino.py | 2499 | 🟢 LOW | Debug print statement found |
| src/transformers/models/groupvit/convert_groupvit_nvlab_to_hf.py | 191 | 🟢 LOW | Debug print statement found |
| src/transformers/models/groupvit/convert_groupvit_nvlab_to_hf.py | 194 | 🟢 LOW | Debug print statement found |
| src/transformers/models/hiera/convert_hiera_to_hf.py | 253 | 🟢 LOW | Debug print statement found |
| src/transformers/models/hiera/convert_hiera_to_hf.py | 254 | 🟢 LOW | Debug print statement found |
| src/transformers/models/hiera/convert_hiera_to_hf.py | 279 | 🟢 LOW | Debug print statement found |
| src/transformers/models/hiera/convert_hiera_to_hf.py | 280 | 🟢 LOW | Debug print statement found |
| src/transformers/models/hiera/convert_hiera_to_hf.py | 298 | 🟢 LOW | Debug print statement found |
| src/transformers/models/hiera/convert_hiera_to_hf.py | 299 | 🟢 LOW | Debug print statement found |
| src/transformers/models/hiera/convert_hiera_to_hf.py | 305 | 🟢 LOW | Debug print statement found |
| src/transformers/models/hiera/convert_hiera_to_hf.py | 309 | 🟢 LOW | Debug print statement found |
| src/transformers/models/hiera/convert_hiera_to_hf.py | 310 | 🟢 LOW | Debug print statement found |
| src/transformers/models/hiera/convert_hiera_to_hf.py | 313 | 🟢 LOW | Debug print statement found |
| src/transformers/models/hiera/convert_hiera_to_hf.py | 326 | 🟢 LOW | Debug print statement found |
| src/transformers/models/hiera/modeling_hiera.py | 1136 | 🟢 LOW | Debug print statement found |
| src/transformers/models/higgs_audio_v2/convert_higgs_audio_v2_to_hf.py | 129 | 🟢 LOW | Debug print statement found |
| src/transformers/models/higgs_audio_v2/convert_higgs_audio_v2_to_hf.py | 162 | 🟢 LOW | Debug print statement found |
| src/transformers/models/higgs_audio_v2/convert_higgs_audio_v2_to_hf.py | 191 | 🟢 LOW | Debug print statement found |
| src/transformers/models/higgs_audio_v2/convert_higgs_audio_v2_to_hf.py | 196 | 🟢 LOW | Debug print statement found |
| src/transformers/models/higgs_audio_v2_tokenizer/convert_higgs_audio_v2_tokenizer_to_hf.py | 87 | 🟢 LOW | Debug print statement found |
| src/transformers/models/higgs_audio_v2_tokenizer/convert_higgs_audio_v2_tokenizer_to_hf.py | 100 | 🟢 LOW | Debug print statement found |
| src/transformers/models/higgs_audio_v2_tokenizer/convert_higgs_audio_v2_tokenizer_to_hf.py | 103 | 🟢 LOW | Debug print statement found |
| src/transformers/models/higgs_audio_v2_tokenizer/convert_higgs_audio_v2_tokenizer_to_hf.py | 146 | 🟢 LOW | Debug print statement found |
| src/transformers/models/higgs_audio_v2_tokenizer/convert_higgs_audio_v2_tokenizer_to_hf.py | 150 | 🟢 LOW | Debug print statement found |
| src/transformers/models/higgs_audio_v2_tokenizer/convert_higgs_audio_v2_tokenizer_to_hf.py | 185 | 🟢 LOW | Debug print statement found |
| src/transformers/models/higgs_audio_v2_tokenizer/convert_higgs_audio_v2_tokenizer_to_hf.py | 190 | 🟢 LOW | Debug print statement found |
| src/transformers/models/idefics2/modeling_idefics2.py | 1062 | 🟢 LOW | Debug print statement found |
| src/transformers/models/idefics3/convert_idefics3_weights_to_hf.py | 95 | 🟢 LOW | Debug print statement found |
| src/transformers/models/idefics3/convert_idefics3_weights_to_hf.py | 175 | 🟢 LOW | Debug print statement found |
| src/transformers/models/idefics3/modeling_idefics3.py | 821 | 🟢 LOW | Debug print statement found |
| src/transformers/models/idefics3/modeling_idefics3.py | 824 | 🟢 LOW | Debug print statement found |
| src/transformers/models/ijepa/convert_ijepa_to_hf.py | 213 | 🟢 LOW | Debug print statement found |
| src/transformers/models/ijepa/convert_ijepa_to_hf.py | 224 | 🟢 LOW | Debug print statement found |
| src/transformers/models/ijepa/convert_ijepa_to_hf.py | 226 | 🟢 LOW | Debug print statement found |
| src/transformers/models/imagegpt/convert_imagegpt_original_tf2_to_pytorch.py | 153 | 🟢 LOW | Debug print statement found |
| src/transformers/models/imagegpt/convert_imagegpt_original_tf2_to_pytorch.py | 155 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblip/convert_instructblip_original_to_pytorch.py | 166 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblip/convert_instructblip_original_to_pytorch.py | 173 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblip/convert_instructblip_original_to_pytorch.py | 237 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblip/convert_instructblip_original_to_pytorch.py | 238 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblip/convert_instructblip_original_to_pytorch.py | 244 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblip/convert_instructblip_original_to_pytorch.py | 246 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblip/convert_instructblip_original_to_pytorch.py | 250 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblip/convert_instructblip_original_to_pytorch.py | 266 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblip/convert_instructblip_original_to_pytorch.py | 269 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblip/modeling_instructblip.py | 1249 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblipvideo/convert_instructblipvideo_original_to_pytorch.py | 168 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblipvideo/convert_instructblipvideo_original_to_pytorch.py | 175 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblipvideo/convert_instructblipvideo_original_to_pytorch.py | 239 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblipvideo/convert_instructblipvideo_original_to_pytorch.py | 240 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblipvideo/convert_instructblipvideo_original_to_pytorch.py | 246 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblipvideo/convert_instructblipvideo_original_to_pytorch.py | 248 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblipvideo/convert_instructblipvideo_original_to_pytorch.py | 252 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblipvideo/convert_instructblipvideo_original_to_pytorch.py | 268 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblipvideo/convert_instructblipvideo_original_to_pytorch.py | 271 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblipvideo/modeling_instructblipvideo.py | 1198 | 🟢 LOW | Debug print statement found |
| src/transformers/models/instructblipvideo/modular_instructblipvideo.py | 409 | 🟢 LOW | Debug print statement found |
| src/transformers/models/internvl/convert_internvl_weights_to_hf.py | 248 | 🟢 LOW | Debug print statement found |
| src/transformers/models/internvl/convert_internvl_weights_to_hf.py | 254 | 🟢 LOW | Debug print statement found |
| src/transformers/models/internvl/convert_internvl_weights_to_hf.py | 256 | 🟢 LOW | Debug print statement found |
| src/transformers/models/internvl/convert_internvl_weights_to_hf.py | 297 | 🟢 LOW | Debug print statement found |
| src/transformers/models/internvl/convert_internvl_weights_to_hf.py | 301 | 🟢 LOW | Debug print statement found |
| src/transformers/models/internvl/convert_internvl_weights_to_hf.py | 302 | 🟢 LOW | Debug print statement found |
| src/transformers/models/internvl/convert_internvl_weights_to_hf.py | 303 | 🟢 LOW | Debug print statement found |
| src/transformers/models/internvl/convert_internvl_weights_to_hf.py | 305 | 🟢 LOW | Debug print statement found |
| src/transformers/models/internvl/convert_internvl_weights_to_hf.py | 326 | 🟢 LOW | Debug print statement found |
| src/transformers/models/internvl/convert_internvl_weights_to_hf.py | 340 | 🟢 LOW | Debug print statement found |
| src/transformers/models/internvl/convert_internvl_weights_to_hf.py | 342 | 🟢 LOW | Debug print statement found |
| src/transformers/models/internvl/modeling_internvl.py | 809 | 🟢 LOW | Debug print statement found |
| src/transformers/models/internvl/modular_internvl.py | 627 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 182 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 186 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 191 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 196 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 200 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 202 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 215 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 223 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 232 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 257 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 332 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 335 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 402 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 415 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 420 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 424 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 429 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 432 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 440 | 🟢 LOW | Debug print statement found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 443 | 🟢 LOW | Debug print statement found |
| src/transformers/models/kyutai_speech_to_text/convert_kyutai_speech_to_text_to_hf.py | 188 | 🟢 LOW | Debug print statement found |
| src/transformers/models/kyutai_speech_to_text/convert_kyutai_speech_to_text_to_hf.py | 212 | 🟢 LOW | Debug print statement found |
| src/transformers/models/kyutai_speech_to_text/convert_kyutai_speech_to_text_to_hf.py | 215 | 🟢 LOW | Debug print statement found |
| src/transformers/models/kyutai_speech_to_text/convert_kyutai_speech_to_text_to_hf.py | 218 | 🟢 LOW | Debug print statement found |
| src/transformers/models/kyutai_speech_to_text/convert_kyutai_speech_to_text_to_hf.py | 228 | 🟢 LOW | Debug print statement found |
| src/transformers/models/kyutai_speech_to_text/convert_kyutai_speech_to_text_to_hf.py | 240 | 🟢 LOW | Debug print statement found |
| src/transformers/models/kyutai_speech_to_text/convert_kyutai_speech_to_text_to_hf.py | 253 | 🟢 LOW | Debug print statement found |
| src/transformers/models/kyutai_speech_to_text/convert_kyutai_speech_to_text_to_hf.py | 259 | 🟢 LOW | Debug print statement found |
| src/transformers/models/kyutai_speech_to_text/convert_kyutai_speech_to_text_to_hf.py | 261 | 🟢 LOW | Debug print statement found |
| src/transformers/models/kyutai_speech_to_text/convert_kyutai_speech_to_text_to_hf.py | 298 | 🟢 LOW | Debug print statement found |
| src/transformers/models/kyutai_speech_to_text/modeling_kyutai_speech_to_text.py | 941 | 🟢 LOW | Debug print statement found |
| src/transformers/models/kyutai_speech_to_text/modular_kyutai_speech_to_text.py | 304 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lasr/modeling_lasr.py | 540 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lasr/modeling_lasr.py | 657 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lasr/modeling_lasr.py | 728 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lasr/modular_lasr.py | 524 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lasr/modular_lasr.py | 592 | 🟢 LOW | Debug print statement found |
| src/transformers/models/layoutlm/modeling_layoutlm.py | 958 | 🟢 LOW | Debug print statement found |
| src/transformers/models/led/modeling_led.py | 1998 | 🟢 LOW | Debug print statement found |
| src/transformers/models/led/modeling_led.py | 2013 | 🟢 LOW | Debug print statement found |
| src/transformers/models/levit/convert_levit_timm_to_pytorch.py | 37 | 🟢 LOW | Debug print statement found |
| src/transformers/models/levit/convert_levit_timm_to_pytorch.py | 59 | 🟢 LOW | Debug print statement found |
| src/transformers/models/levit/convert_levit_timm_to_pytorch.py | 71 | 🟢 LOW | Debug print statement found |
| src/transformers/models/levit/convert_levit_timm_to_pytorch.py | 78 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lightglue/convert_lightglue_to_hf.py | 168 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lightglue/convert_lightglue_to_hf.py | 174 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lightglue/convert_lightglue_to_hf.py | 177 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lightglue/convert_lightglue_to_hf.py | 191 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lightglue/convert_lightglue_to_hf.py | 196 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lightglue/convert_lightglue_to_hf.py | 199 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lightglue/convert_lightglue_to_hf.py | 205 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lightglue/convert_lightglue_to_hf.py | 207 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lightglue/convert_lightglue_to_hf.py | 213 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lightglue/convert_lightglue_to_hf.py | 215 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lightglue/convert_lightglue_to_hf.py | 218 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lightglue/convert_lightglue_to_hf.py | 236 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama/convert_llama_weights_to_hf.py | 194 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama/convert_llama_weights_to_hf.py | 224 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama/convert_llama_weights_to_hf.py | 235 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama/convert_llama_weights_to_hf.py | 419 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama/convert_llama_weights_to_hf.py | 426 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama/convert_llama_weights_to_hf.py | 428 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama/convert_llama_weights_to_hf.py | 432 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama/convert_llama_weights_to_hf.py | 495 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama/convert_llama_weights_to_hf.py | 513 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama/convert_llama_weights_to_hf.py | 517 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 330 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 337 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 361 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 362 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 366 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 373 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 377 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 478 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 514 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 517 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 518 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 524 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 533 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 540 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/convert_llama4_weights_to_hf.py | 543 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llama4/modeling_llama4.py | 1098 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 102 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 188 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 244 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 248 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 249 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 299 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 310 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 330 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 333 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 346 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 348 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 354 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 362 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next/convert_llava_next_weights_to_hf.py | 366 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next_video/convert_llava_next_video_weights_to_hf.py | 157 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next_video/convert_llava_next_video_weights_to_hf.py | 238 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_next_video/convert_llava_next_video_weights_to_hf.py | 245 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 105 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 188 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 221 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 225 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 226 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 288 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 299 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 321 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 324 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 337 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 339 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 345 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 353 | 🟢 LOW | Debug print statement found |
| src/transformers/models/llava_onevision/convert_llava_onevision_weights_to_hf.py | 357 | 🟢 LOW | Debug print statement found |
| src/transformers/models/longformer/convert_longformer_original_pytorch_lightning_to_pytorch.py | 58 | 🟢 LOW | Debug print statement found |
| src/transformers/models/longt5/modeling_longt5.py | 1653 | 🟢 LOW | Debug print statement found |
| src/transformers/models/luke/convert_luke_original_pytorch_checkpoint_to_pytorch.py | 47 | 🟢 LOW | Debug print statement found |
| src/transformers/models/luke/convert_luke_original_pytorch_checkpoint_to_pytorch.py | 129 | 🟢 LOW | Debug print statement found |
| src/transformers/models/luke/modeling_luke.py | 1244 | 🟢 LOW | Debug print statement found |
| src/transformers/models/luke/modeling_luke.py | 1376 | 🟢 LOW | Debug print statement found |
| src/transformers/models/luke/modeling_luke.py | 1523 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/convert_lw_detr_to_hf.py | 385 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/convert_lw_detr_to_hf.py | 402 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/convert_lw_detr_to_hf.py | 423 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/convert_lw_detr_to_hf.py | 434 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/convert_lw_detr_to_hf.py | 437 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/convert_lw_detr_to_hf.py | 441 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/convert_lw_detr_to_hf.py | 472 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/convert_lw_detr_to_hf.py | 474 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/convert_lw_detr_to_hf.py | 477 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/convert_lw_detr_to_hf.py | 481 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/convert_lw_detr_to_hf.py | 488 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/convert_lw_detr_to_hf.py | 494 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/convert_lw_detr_to_hf.py | 496 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/modeling_lw_detr.py | 1592 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lw_detr/modular_lw_detr.py | 1319 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lxmert/convert_lxmert_original_tf_checkpoint_to_pytorch.py | 111 | 🟢 LOW | Debug print statement found |
| src/transformers/models/lxmert/convert_lxmert_original_tf_checkpoint_to_pytorch.py | 118 | 🟢 LOW | Debug print statement found |
| src/transformers/models/m2m_100/modeling_m2m_100.py | 880 | 🟢 LOW | Debug print statement found |
| src/transformers/models/marian/convert_marian_tatoeba_to_pytorch.py | 81 | 🟢 LOW | Debug print statement found |
| src/transformers/models/marian/convert_marian_tatoeba_to_pytorch.py | 106 | 🟢 LOW | Debug print statement found |
| src/transformers/models/marian/convert_marian_tatoeba_to_pytorch.py | 262 | 🟢 LOW | Debug print statement found |
| src/transformers/models/marian/convert_marian_tatoeba_to_pytorch.py | 263 | 🟢 LOW | Debug print statement found |
| src/transformers/models/marian/convert_marian_tatoeba_to_pytorch.py | 264 | 🟢 LOW | Debug print statement found |
| src/transformers/models/marian/convert_marian_tatoeba_to_pytorch.py | 265 | 🟢 LOW | Debug print statement found |
| src/transformers/models/marian/convert_marian_to_pytorch.py | 256 | 🟢 LOW | Debug print statement found |
| src/transformers/models/marian/convert_marian_to_pytorch.py | 411 | 🟢 LOW | Debug print statement found |
| src/transformers/models/marian/convert_marian_to_pytorch.py | 631 | 🟢 LOW | Debug print statement found |
| src/transformers/models/markuplm/feature_extraction_markuplm.py | 128 | 🟢 LOW | Debug print statement found |
| src/transformers/models/markuplm/feature_extraction_markuplm.py | 141 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mask2former/modeling_mask2former.py | 2383 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mask2former/modeling_mask2former.py | 2418 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mask2former/modeling_mask2former.py | 2454 | 🟢 LOW | Debug print statement found |
| src/transformers/models/maskformer/convert_maskformer_resnet_to_pytorch.py | 350 | 🟢 LOW | Debug print statement found |
| src/transformers/models/maskformer/convert_maskformer_resnet_to_pytorch.py | 353 | 🟢 LOW | Debug print statement found |
| src/transformers/models/maskformer/convert_maskformer_resnet_to_pytorch.py | 359 | 🟢 LOW | Debug print statement found |
| src/transformers/models/maskformer/convert_maskformer_swin_to_pytorch.py | 255 | 🟢 LOW | Debug print statement found |
| src/transformers/models/maskformer/convert_maskformer_swin_to_pytorch.py | 273 | 🟢 LOW | Debug print statement found |
| src/transformers/models/maskformer/convert_maskformer_swin_to_pytorch.py | 297 | 🟢 LOW | Debug print statement found |
| src/transformers/models/maskformer/convert_maskformer_swin_to_pytorch.py | 304 | 🟢 LOW | Debug print statement found |
| src/transformers/models/maskformer/convert_maskformer_swin_to_pytorch.py | 307 | 🟢 LOW | Debug print statement found |
| src/transformers/models/maskformer/convert_maskformer_swin_to_pytorch.py | 313 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_bert/convert_megatron_bert_checkpoint.py | 59 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_bert/convert_megatron_bert_checkpoint.py | 63 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_bert/convert_megatron_bert_checkpoint.py | 65 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_bert/convert_megatron_bert_checkpoint.py | 293 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_bert/convert_megatron_bert_checkpoint.py | 312 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_bert/convert_megatron_bert_checkpoint.py | 320 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_bert/convert_megatron_bert_checkpoint.py | 325 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 191 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 195 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 197 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 343 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 372 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 409 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 412 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 435 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 445 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 540 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 546 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 550 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 569 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 574 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 594 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 601 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 634 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 729 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 735 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 766 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/checkpoint_reshaping_and_interoperability.py | 904 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/convert_megatron_gpt2_checkpoint.py | 59 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/convert_megatron_gpt2_checkpoint.py | 63 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/convert_megatron_gpt2_checkpoint.py | 65 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/convert_megatron_gpt2_checkpoint.py | 283 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/convert_megatron_gpt2_checkpoint.py | 300 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/convert_megatron_gpt2_checkpoint.py | 334 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/convert_megatron_gpt2_checkpoint.py | 387 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/convert_megatron_gpt2_checkpoint.py | 412 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/convert_megatron_gpt2_checkpoint.py | 416 | 🟢 LOW | Debug print statement found |
| src/transformers/models/megatron_gpt2/convert_megatron_gpt2_checkpoint.py | 421 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 40 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 46 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 59 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 171 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 298 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 310 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 311 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 319 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 320 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 332 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 333 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 340 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 341 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 342 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 345 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 346 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 347 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 351 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 354 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 356 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 362 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 367 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 369 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 404 | 🟢 LOW | Debug print statement found |
| src/transformers/models/metaclip_2/convert_metaclip_2_to_hf.py | 411 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mimi/convert_mimi_checkpoint_to_pytorch.py | 175 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mistral4/convert_mistral4_weight_to_hf.py | 505 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mistral4/convert_mistral4_weight_to_hf.py | 522 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mixtral/convert_mixtral_weights_to_hf.py | 94 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mixtral/convert_mixtral_weights_to_hf.py | 204 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mixtral/convert_mixtral_weights_to_hf.py | 210 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/convert_mlcd_weights_to_hf.py | 249 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/convert_mlcd_weights_to_hf.py | 253 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/convert_mlcd_weights_to_hf.py | 262 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/convert_mlcd_weights_to_hf.py | 272 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/convert_mlcd_weights_to_hf.py | 277 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/convert_mlcd_weights_to_hf.py | 282 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/convert_mlcd_weights_to_hf.py | 294 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/convert_mlcd_weights_to_hf.py | 296 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/convert_mlcd_weights_to_hf.py | 300 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/modeling_mlcd.py | 503 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/modeling_mlcd.py | 504 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/modeling_mlcd.py | 505 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/modular_mlcd.py | 372 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/modular_mlcd.py | 373 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mlcd/modular_mlcd.py | 374 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/convert_mllama_weights_to_hf.py | 331 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/convert_mllama_weights_to_hf.py | 337 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/convert_mllama_weights_to_hf.py | 355 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/convert_mllama_weights_to_hf.py | 441 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/convert_mllama_weights_to_hf.py | 445 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/convert_mllama_weights_to_hf.py | 448 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/convert_mllama_weights_to_hf.py | 454 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/convert_mllama_weights_to_hf.py | 456 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/convert_mllama_weights_to_hf.py | 460 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/convert_mllama_weights_to_hf.py | 560 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/modeling_mllama.py | 944 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/modeling_mllama.py | 1125 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/modeling_mllama.py | 1265 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mllama/modeling_mllama.py | 1519 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mluke/convert_mluke_original_pytorch_checkpoint_to_pytorch.py | 51 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mluke/convert_mluke_original_pytorch_checkpoint_to_pytorch.py | 181 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mm_grounding_dino/convert_mm_grounding_dino_to_hf.py | 439 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mm_grounding_dino/convert_mm_grounding_dino_to_hf.py | 444 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mm_grounding_dino/convert_mm_grounding_dino_to_hf.py | 453 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mm_grounding_dino/convert_mm_grounding_dino_to_hf.py | 464 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mm_grounding_dino/convert_mm_grounding_dino_to_hf.py | 468 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mm_grounding_dino/convert_mm_grounding_dino_to_hf.py | 472 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mm_grounding_dino/convert_mm_grounding_dino_to_hf.py | 476 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mm_grounding_dino/modeling_mm_grounding_dino.py | 2470 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilebert/convert_mobilebert_original_tf_checkpoint_to_pytorch.py | 109 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilebert/convert_mobilebert_original_tf_checkpoint_to_pytorch.py | 114 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilenet_v1/convert_original_tf_checkpoint_to_pytorch.py | 210 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilenet_v1/convert_original_tf_checkpoint_to_pytorch.py | 212 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilenet_v1/convert_original_tf_checkpoint_to_pytorch.py | 216 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilenet_v2/convert_original_tf_checkpoint_to_pytorch.py | 312 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilenet_v2/convert_original_tf_checkpoint_to_pytorch.py | 314 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilenet_v2/convert_original_tf_checkpoint_to_pytorch.py | 318 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilevit/convert_mlcvnets_to_pytorch.py | 266 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilevit/convert_mlcvnets_to_pytorch.py | 268 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilevit/convert_mlcvnets_to_pytorch.py | 281 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilevitv2/convert_mlcvnets_to_pytorch.py | 42 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilevitv2/convert_mlcvnets_to_pytorch.py | 272 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilevitv2/convert_mlcvnets_to_pytorch.py | 279 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mobilevitv2/convert_mlcvnets_to_pytorch.py | 281 | 🟢 LOW | Debug print statement found |
| src/transformers/models/moshi/convert_moshi_transformers.py | 254 | 🟢 LOW | Debug print statement found |
| src/transformers/models/moshi/convert_moshi_transformers.py | 293 | 🟢 LOW | Debug print statement found |
| src/transformers/models/moshi/convert_moshi_transformers.py | 301 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mra/convert_mra_pytorch_to_pytorch.py | 85 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mra/convert_mra_pytorch_to_pytorch.py | 89 | 🟢 LOW | Debug print statement found |
| src/transformers/models/mt5/modeling_mt5.py | 1097 | 🟢 LOW | Debug print statement found |
| src/transformers/models/myt5/convert_myt5_original_tf_checkpoint_to_pytorch.py | 138 | 🟢 LOW | Debug print statement found |
| src/transformers/models/myt5/convert_myt5_original_tf_checkpoint_to_pytorch.py | 145 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 35 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 57 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 81 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 119 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 132 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 139 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 148 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 160 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 163 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 194 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 204 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 208 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 213 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 219 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 221 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 239 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 241 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 254 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 259 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nanochat/convert_nanochat_checkpoints.py | 269 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nemotron/convert_nemotron_nemo_to_hf.py | 194 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nemotron/convert_nemotron_nemo_to_hf.py | 277 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nllb_moe/convert_nllb_moe_sharded_original_checkpoint_to_pytorch.py | 160 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nougat/convert_nougat_to_hf.py | 241 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nougat/convert_nougat_to_hf.py | 244 | 🟢 LOW | Debug print statement found |
| src/transformers/models/nystromformer/convert_nystromformer_original_pytorch_checkpoint_to_pytorch.py | 90 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo/convert_olmo_weights_to_hf.py | 90 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo/convert_olmo_weights_to_hf.py | 177 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo/convert_olmo_weights_to_hf.py | 181 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo/convert_olmo_weights_to_hf.py | 189 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo/convert_olmo_weights_to_hf.py | 198 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo2/convert_olmo2_weights_to_hf.py | 105 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo2/convert_olmo2_weights_to_hf.py | 178 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo2/convert_olmo2_weights_to_hf.py | 206 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo2/convert_olmo2_weights_to_hf.py | 210 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo2/convert_olmo2_weights_to_hf.py | 224 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo3/convert_olmo3_weights_to_hf.py | 319 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo3/convert_olmo3_weights_to_hf.py | 324 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo3/convert_olmo3_weights_to_hf.py | 402 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo3/convert_olmo3_weights_to_hf.py | 404 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo3/convert_olmo3_weights_to_hf.py | 408 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo3/convert_olmo3_weights_to_hf.py | 420 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo_hybrid/convert_olmo_hybrid_weights_to_hf.py | 463 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo_hybrid/convert_olmo_hybrid_weights_to_hf.py | 476 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo_hybrid/convert_olmo_hybrid_weights_to_hf.py | 479 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo_hybrid/convert_olmo_hybrid_weights_to_hf.py | 494 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo_hybrid/convert_olmo_hybrid_weights_to_hf.py | 508 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo_hybrid/convert_olmo_hybrid_weights_to_hf.py | 548 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo_hybrid/convert_olmo_hybrid_weights_to_hf.py | 571 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmo_hybrid/convert_olmo_hybrid_weights_to_hf.py | 581 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmoe/convert_olmoe_weights_to_hf.py | 32 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmoe/convert_olmoe_weights_to_hf.py | 55 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmoe/convert_olmoe_weights_to_hf.py | 119 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmoe/convert_olmoe_weights_to_hf.py | 209 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmoe/convert_olmoe_weights_to_hf.py | 213 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmoe/convert_olmoe_weights_to_hf.py | 221 | 🟢 LOW | Debug print statement found |
| src/transformers/models/olmoe/convert_olmoe_weights_to_hf.py | 230 | 🟢 LOW | Debug print statement found |
| src/transformers/models/omdet_turbo/convert_omdet_turbo_to_hf.py | 252 | 🟢 LOW | Debug print statement found |
| src/transformers/models/omdet_turbo/convert_omdet_turbo_to_hf.py | 256 | 🟢 LOW | Debug print statement found |
| src/transformers/models/omdet_turbo/convert_omdet_turbo_to_hf.py | 304 | 🟢 LOW | Debug print statement found |
| src/transformers/models/omdet_turbo/convert_omdet_turbo_to_hf.py | 305 | 🟢 LOW | Debug print statement found |
| src/transformers/models/omdet_turbo/modeling_omdet_turbo.py | 1575 | 🟢 LOW | Debug print statement found |
| src/transformers/models/openai/convert_openai_original_tf_checkpoint_to_pytorch.py | 122 | 🟢 LOW | Debug print statement found |
| src/transformers/models/openai/convert_openai_original_tf_checkpoint_to_pytorch.py | 124 | 🟢 LOW | Debug print statement found |
| src/transformers/models/ovis2/convert_ovis2_weights_to_hf.py | 302 | 🟢 LOW | Debug print statement found |
| src/transformers/models/ovis2/convert_ovis2_weights_to_hf.py | 304 | 🟢 LOW | Debug print statement found |
| src/transformers/models/ovis2/convert_ovis2_weights_to_hf.py | 334 | 🟢 LOW | Debug print statement found |
| src/transformers/models/ovis2/convert_ovis2_weights_to_hf.py | 388 | 🟢 LOW | Debug print statement found |
| src/transformers/models/ovis2/convert_ovis2_weights_to_hf.py | 402 | 🟢 LOW | Debug print statement found |
| src/transformers/models/owlv2/convert_owlv2_to_hf.py | 224 | 🟢 LOW | Debug print statement found |
| src/transformers/models/owlv2/convert_owlv2_to_hf.py | 352 | 🟢 LOW | Debug print statement found |
| src/transformers/models/owlv2/convert_owlv2_to_hf.py | 353 | 🟢 LOW | Debug print statement found |
| src/transformers/models/owlv2/convert_owlv2_to_hf.py | 354 | 🟢 LOW | Debug print statement found |
| src/transformers/models/owlv2/convert_owlv2_to_hf.py | 359 | 🟢 LOW | Debug print statement found |
| src/transformers/models/owlv2/convert_owlv2_to_hf.py | 361 | 🟢 LOW | Debug print statement found |
| src/transformers/models/owlv2/convert_owlv2_to_hf.py | 364 | 🟢 LOW | Debug print statement found |
| src/transformers/models/owlv2/convert_owlv2_to_hf.py | 373 | 🟢 LOW | Debug print statement found |
| src/transformers/models/owlv2/modeling_owlv2.py | 1387 | 🟢 LOW | Debug print statement found |
| src/transformers/models/owlv2/modeling_owlv2.py | 1487 | 🟢 LOW | Debug print statement found |
| src/transformers/models/owlvit/modeling_owlvit.py | 1340 | 🟢 LOW | Debug print statement found |
| src/transformers/models/owlvit/modeling_owlvit.py | 1429 | 🟢 LOW | Debug print statement found |
| src/transformers/models/paddleocr_vl/modeling_paddleocr_vl.py | 1409 | 🟢 LOW | Debug print statement found |
| src/transformers/models/paddleocr_vl/modular_paddleocr_vl.py | 1107 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 72 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 83 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 103 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 112 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 124 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 126 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 128 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 159 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 169 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 175 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 179 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 293 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 305 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 309 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 312 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 321 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 323 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 338 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 366 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 378 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 382 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 389 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 391 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 394 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 403 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 412 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 414 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 427 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 451 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 455 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 462 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 464 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 467 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 473 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 482 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 484 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/convert_nemo_to_hf.py | 490 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/modeling_parakeet.py | 611 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/modeling_parakeet.py | 735 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/modeling_parakeet.py | 809 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/modular_parakeet.py | 460 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/modular_parakeet.py | 584 | 🟢 LOW | Debug print statement found |
| src/transformers/models/parakeet/modular_parakeet.py | 658 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pe_audio_video/convert_pe_audio_video_to_hf.py | 116 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pe_audio_video/convert_pe_audio_video_to_hf.py | 122 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pe_audio_video/convert_pe_audio_video_to_hf.py | 124 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perceiver/convert_perceiver_haiku_to_pytorch.py | 422 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perceiver/convert_perceiver_haiku_to_pytorch.py | 425 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perceiver/convert_perceiver_haiku_to_pytorch.py | 435 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perceiver/convert_perceiver_haiku_to_pytorch.py | 436 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perceiver/convert_perceiver_haiku_to_pytorch.py | 437 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perceiver/convert_perceiver_haiku_to_pytorch.py | 438 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perceiver/convert_perceiver_haiku_to_pytorch.py | 439 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perceiver/convert_perceiver_haiku_to_pytorch.py | 442 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perceiver/convert_perceiver_haiku_to_pytorch.py | 446 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perceiver/modeling_perceiver.py | 1156 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perceiver/modeling_perceiver.py | 1281 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perceiver/modeling_perceiver.py | 1405 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 190 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 203 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 229 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 242 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 292 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 310 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 347 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 410 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 423 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 426 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 429 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 494 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 539 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/convert_perception_lm_weights_to_hf.py | 543 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/modeling_perception_lm.py | 371 | 🟢 LOW | Debug print statement found |
| src/transformers/models/perception_lm/modular_perception_lm.py | 367 | 🟢 LOW | Debug print statement found |
| src/transformers/models/phi/convert_phi_weights_to_hf.py | 117 | 🟢 LOW | Debug print statement found |
| src/transformers/models/phi/convert_phi_weights_to_hf.py | 147 | 🟢 LOW | Debug print statement found |
| src/transformers/models/phi/convert_phi_weights_to_hf.py | 154 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pix2struct/convert_pix2struct_original_pytorch_to_hf.py | 141 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pix2struct/modeling_pix2struct.py | 1228 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pix2struct/modeling_pix2struct.py | 1237 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pix2struct/modeling_pix2struct.py | 1263 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pixio/convert_pixio_to_pytorch.py | 173 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pixio/convert_pixio_to_pytorch.py | 174 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pixio/convert_pixio_to_pytorch.py | 175 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pixio/convert_pixio_to_pytorch.py | 176 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pixio/convert_pixio_to_pytorch.py | 177 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pixio/convert_pixio_to_pytorch.py | 178 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pixio/convert_pixio_to_pytorch.py | 179 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pixio/convert_pixio_to_pytorch.py | 180 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pixio/convert_pixio_to_pytorch.py | 184 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pixio/convert_pixio_to_pytorch.py | 186 | 🟢 LOW | Debug print statement found |
| src/transformers/models/poolformer/convert_poolformer_original_to_pytorch.py | 194 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pp_doclayout_v2/modeling_pp_doclayout_v2.py | 2443 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pp_doclayout_v2/modular_pp_doclayout_v2.py | 904 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pp_doclayout_v3/modeling_pp_doclayout_v3.py | 2088 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pp_doclayout_v3/modular_pp_doclayout_v3.py | 1383 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pp_formulanet/modeling_pp_formulanet.py | 1082 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pp_formulanet/modular_pp_formulanet.py | 467 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pp_lcnet/modeling_pp_lcnet.py | 354 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pp_lcnet/modular_pp_lcnet.py | 521 | 🟢 LOW | Debug print statement found |
| src/transformers/models/prompt_depth_anything/convert_prompt_depth_anything_to_hf.py | 222 | 🟢 LOW | Debug print statement found |
| src/transformers/models/prompt_depth_anything/convert_prompt_depth_anything_to_hf.py | 223 | 🟢 LOW | Debug print statement found |
| src/transformers/models/prompt_depth_anything/convert_prompt_depth_anything_to_hf.py | 244 | 🟢 LOW | Debug print statement found |
| src/transformers/models/prompt_depth_anything/convert_prompt_depth_anything_to_hf.py | 248 | 🟢 LOW | Debug print statement found |
| src/transformers/models/prompt_depth_anything/convert_prompt_depth_anything_to_hf.py | 253 | 🟢 LOW | Debug print statement found |
| src/transformers/models/prophetnet/convert_prophetnet_original_pytorch_checkpoint_to_pytorch.py | 142 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pvt/convert_pvt_to_pytorch.py | 201 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pvt/convert_pvt_to_pytorch.py | 203 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pvt_v2/convert_pvt_v2_to_pytorch.py | 225 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pvt_v2/convert_pvt_v2_to_pytorch.py | 255 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pvt_v2/convert_pvt_v2_to_pytorch.py | 258 | 🟢 LOW | Debug print statement found |
| src/transformers/models/pvt_v2/convert_pvt_v2_to_pytorch.py | 260 | 🟢 LOW | Debug print statement found |
| src/transformers/models/qianfan_ocr/modeling_qianfan_ocr.py | 794 | 🟢 LOW | Debug print statement found |
| src/transformers/models/qianfan_ocr/modular_qianfan_ocr.py | 289 | 🟢 LOW | Debug print statement found |
| src/transformers/models/qwen2_5_vl/modeling_qwen2_5_vl.py | 1406 | 🟢 LOW | Debug print statement found |
| src/transformers/models/qwen2_5_vl/modular_qwen2_5_vl.py | 628 | 🟢 LOW | Debug print statement found |
| src/transformers/models/qwen2_vl/modeling_qwen2_vl.py | 1348 | 🟢 LOW | Debug print statement found |
| src/transformers/models/qwen3_5/modeling_qwen3_5.py | 1811 | 🟢 LOW | Debug print statement found |
| src/transformers/models/qwen3_omni_moe/configuration_qwen3_omni_moe.py | 464 | 🟢 LOW | Debug print statement found |
| src/transformers/models/qwen3_omni_moe/configuration_qwen3_omni_moe.py | 465 | 🟢 LOW | Debug print statement found |
| src/transformers/models/qwen3_omni_moe/modular_qwen3_omni_moe.py | 463 | 🟢 LOW | Debug print statement found |
| src/transformers/models/qwen3_omni_moe/modular_qwen3_omni_moe.py | 464 | 🟢 LOW | Debug print statement found |
| src/transformers/models/qwen3_vl/modeling_qwen3_vl.py | 1381 | 🟢 LOW | Debug print statement found |
| src/transformers/models/qwen3_vl/modular_qwen3_vl.py | 912 | 🟢 LOW | Debug print statement found |
| src/transformers/models/recurrent_gemma/convert_recurrent_gemma_to_hf.py | 72 | 🟢 LOW | Debug print statement found |
| src/transformers/models/recurrent_gemma/convert_recurrent_gemma_to_hf.py | 128 | 🟢 LOW | Debug print statement found |
| src/transformers/models/recurrent_gemma/convert_recurrent_gemma_to_hf.py | 135 | 🟢 LOW | Debug print statement found |
| src/transformers/models/recurrent_gemma/convert_recurrent_gemma_to_hf.py | 138 | 🟢 LOW | Debug print statement found |
| src/transformers/models/recurrent_gemma/convert_recurrent_gemma_to_hf.py | 146 | 🟢 LOW | Debug print statement found |
| src/transformers/models/reformer/convert_reformer_trax_checkpoint_to_pytorch.py | 190 | 🟢 LOW | Debug print statement found |
| src/transformers/models/reformer/convert_reformer_trax_checkpoint_to_pytorch.py | 206 | 🟢 LOW | Debug print statement found |
| src/transformers/models/reformer/modeling_reformer.py | 2271 | 🟢 LOW | Debug print statement found |
| src/transformers/models/regnet/convert_regnet_to_pytorch.py | 92 | 🟢 LOW | Debug print statement found |
| src/transformers/models/regnet/convert_regnet_to_pytorch.py | 159 | 🟢 LOW | Debug print statement found |
| src/transformers/models/regnet/convert_regnet_to_pytorch.py | 171 | 🟢 LOW | Debug print statement found |
| src/transformers/models/regnet/convert_regnet_to_pytorch.py | 209 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rembert/convert_rembert_tf_checkpoint_to_pytorch.py | 115 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rembert/convert_rembert_tf_checkpoint_to_pytorch.py | 122 | 🟢 LOW | Debug print statement found |
| src/transformers/models/resnet/convert_resnet_to_pytorch.py | 88 | 🟢 LOW | Debug print statement found |
| src/transformers/models/resnet/convert_resnet_to_pytorch.py | 92 | 🟢 LOW | Debug print statement found |
| src/transformers/models/resnet/convert_resnet_to_pytorch.py | 103 | 🟢 LOW | Debug print statement found |
| src/transformers/models/resnet/convert_resnet_to_pytorch.py | 112 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 140 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 142 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 180 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 188 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 193 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 208 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 214 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 215 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 216 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 217 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 218 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 219 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 225 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 231 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 240 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/convert_rf_detr_weights_to_hf.py | 242 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/modeling_rf_detr.py | 1798 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rf_detr/modular_rf_detr.py | 1213 | 🟢 LOW | Debug print statement found |
| src/transformers/models/roberta/convert_roberta_original_pytorch_checkpoint_to_pytorch.py | 67 | 🟢 LOW | Debug print statement found |
| src/transformers/models/roberta/convert_roberta_original_pytorch_checkpoint_to_pytorch.py | 148 | 🟢 LOW | Debug print statement found |
| src/transformers/models/roberta/convert_roberta_original_pytorch_checkpoint_to_pytorch.py | 150 | 🟢 LOW | Debug print statement found |
| src/transformers/models/roberta/convert_roberta_original_pytorch_checkpoint_to_pytorch.py | 152 | 🟢 LOW | Debug print statement found |
| src/transformers/models/roberta/convert_roberta_original_pytorch_checkpoint_to_pytorch.py | 157 | 🟢 LOW | Debug print statement found |
| src/transformers/models/roformer/convert_roformer_original_tf_checkpoint_to_pytorch.py | 105 | 🟢 LOW | Debug print statement found |
| src/transformers/models/roformer/convert_roformer_original_tf_checkpoint_to_pytorch.py | 112 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rt_detr/convert_rt_detr_original_pytorch_checkpoint_to_hf.py | 741 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rt_detr/convert_rt_detr_original_pytorch_checkpoint_to_hf.py | 743 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rt_detr/modeling_rt_detr.py | 1831 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rt_detr/modular_rt_detr.py | 2070 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rt_detr_v2/convert_rt_detr_v2_weights_to_hf.py | 325 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rt_detr_v2/convert_rt_detr_v2_weights_to_hf.py | 327 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rt_detr_v2/modeling_rt_detr_v2.py | 1857 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rwkv/convert_rwkv_checkpoint_to_hf.py | 84 | 🟢 LOW | Debug print statement found |
| src/transformers/models/rwkv/convert_rwkv_checkpoint_to_hf.py | 139 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam2/convert_sam2_to_hf.py | 236 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam2/convert_sam2_to_hf.py | 237 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam2_video/convert_sam2_video_to_hf.py | 243 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam2_video/convert_sam2_video_to_hf.py | 244 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 251 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 263 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 322 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 325 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 328 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 349 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 354 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 358 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 379 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 385 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 395 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 399 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 400 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 407 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 411 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 415 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 417 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 418 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 419 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 420 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 421 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 422 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 423 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3/convert_sam3_to_hf.py | 424 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 235 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 243 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 311 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 314 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 340 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 348 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 364 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 379 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 383 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 396 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 400 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 406 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 410 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 414 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 416 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 417 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 418 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 419 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 420 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 421 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 422 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 423 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_lite_text/convert_sam3_lite_text_to_hf.py | 484 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 523 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 535 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 594 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 597 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 600 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 628 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 633 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 639 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 660 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 666 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 681 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 685 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 686 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 693 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 697 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 701 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 703 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 707 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 711 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 713 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 717 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 721 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 724 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 728 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 732 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 734 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 735 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 736 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 737 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 738 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 739 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 740 | 🟢 LOW | Debug print statement found |
| src/transformers/models/sam3_video/convert_sam3_video_to_hf.py | 741 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seamless_m4t/convert_fairseq2_to_hf.py | 352 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seamless_m4t/convert_fairseq2_to_hf.py | 357 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seamless_m4t/convert_fairseq2_to_hf.py | 358 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seamless_m4t_v2/convert_fairseq2_to_hf.py | 360 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seamless_m4t_v2/convert_fairseq2_to_hf.py | 365 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seamless_m4t_v2/convert_fairseq2_to_hf.py | 366 | 🟢 LOW | Debug print statement found |
| src/transformers/models/segformer/convert_segformer_original_to_pytorch.py | 357 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seggpt/convert_seggpt_to_hf.py | 138 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seggpt/convert_seggpt_to_hf.py | 139 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seggpt/convert_seggpt_to_hf.py | 175 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seggpt/convert_seggpt_to_hf.py | 186 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seggpt/convert_seggpt_to_hf.py | 188 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seggpt/convert_seggpt_to_hf.py | 191 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seggpt/convert_seggpt_to_hf.py | 196 | 🟢 LOW | Debug print statement found |
| src/transformers/models/seggpt/modeling_seggpt.py | 894 | 🟢 LOW | Debug print statement found |
| src/transformers/models/shieldgemma2/convert_shieldgemma2_weights_orbax_to_hf.py | 220 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip/convert_siglip_to_hf.py | 453 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip/convert_siglip_to_hf.py | 454 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip/convert_siglip_to_hf.py | 459 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip/convert_siglip_to_hf.py | 462 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip/convert_siglip_to_hf.py | 463 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip/convert_siglip_to_hf.py | 497 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip/convert_siglip_to_hf.py | 502 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip/convert_siglip_to_hf.py | 504 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip/modeling_siglip.py | 782 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip/modeling_siglip.py | 902 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip2/convert_siglip2_to_hf.py | 349 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip2/convert_siglip2_to_hf.py | 356 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip2/convert_siglip2_to_hf.py | 382 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip2/convert_siglip2_to_hf.py | 387 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip2/convert_siglip2_to_hf.py | 395 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip2/convert_siglip2_to_hf.py | 404 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip2/convert_siglip2_to_hf.py | 406 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip2/convert_siglip2_to_hf.py | 410 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip2/modeling_siglip2.py | 860 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip2/modeling_siglip2.py | 987 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip2/modular_siglip2.py | 450 | 🟢 LOW | Debug print statement found |
| src/transformers/models/siglip2/modular_siglip2.py | 549 | 🟢 LOW | Debug print statement found |
| src/transformers/models/smolvlm/modeling_smolvlm.py | 790 | 🟢 LOW | Debug print statement found |
| src/transformers/models/smolvlm/modular_smolvlm.py | 340 | 🟢 LOW | Debug print statement found |
| src/transformers/models/speecht5/convert_hifigan.py | 84 | 🟢 LOW | Debug print statement found |
| src/transformers/models/speecht5/convert_speecht5_original_pytorch_checkpoint_to_pytorch.py | 369 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superglue/convert_superglue_to_hf.py | 243 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superglue/convert_superglue_to_hf.py | 249 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superglue/convert_superglue_to_hf.py | 252 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superglue/convert_superglue_to_hf.py | 263 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superglue/convert_superglue_to_hf.py | 268 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superglue/convert_superglue_to_hf.py | 271 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superglue/convert_superglue_to_hf.py | 277 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superglue/convert_superglue_to_hf.py | 279 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superglue/convert_superglue_to_hf.py | 287 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superglue/convert_superglue_to_hf.py | 289 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superglue/convert_superglue_to_hf.py | 293 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superglue/convert_superglue_to_hf.py | 307 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superpoint/convert_superpoint_to_pytorch.py | 98 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superpoint/convert_superpoint_to_pytorch.py | 104 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superpoint/convert_superpoint_to_pytorch.py | 115 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superpoint/convert_superpoint_to_pytorch.py | 139 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superpoint/convert_superpoint_to_pytorch.py | 142 | 🟢 LOW | Debug print statement found |
| src/transformers/models/superpoint/convert_superpoint_to_pytorch.py | 152 | 🟢 LOW | Debug print statement found |
| src/transformers/models/swiftformer/convert_swiftformer_original_to_hf.py | 153 | 🟢 LOW | Debug print statement found |
| src/transformers/models/swin/convert_swin_simmim_to_pytorch.py | 144 | 🟢 LOW | Debug print statement found |
| src/transformers/models/swin/convert_swin_simmim_to_pytorch.py | 145 | 🟢 LOW | Debug print statement found |
| src/transformers/models/swin/convert_swin_simmim_to_pytorch.py | 148 | 🟢 LOW | Debug print statement found |
| src/transformers/models/swin/convert_swin_simmim_to_pytorch.py | 151 | 🟢 LOW | Debug print statement found |
| src/transformers/models/swin/convert_swin_simmim_to_pytorch.py | 155 | 🟢 LOW | Debug print statement found |
| src/transformers/models/swin/convert_swin_timm_to_pytorch.py | 154 | 🟢 LOW | Debug print statement found |
| src/transformers/models/swin/convert_swin_timm_to_pytorch.py | 157 | 🟢 LOW | Debug print statement found |
| src/transformers/models/swin2sr/convert_swin2sr_original_to_pytorch.py | 231 | 🟢 LOW | Debug print statement found |
| src/transformers/models/swin2sr/convert_swin2sr_original_to_pytorch.py | 253 | 🟢 LOW | Debug print statement found |
| src/transformers/models/swin2sr/convert_swin2sr_original_to_pytorch.py | 255 | 🟢 LOW | Debug print statement found |
| src/transformers/models/swinv2/convert_swinv2_timm_to_pytorch.py | 192 | 🟢 LOW | Debug print statement found |
| src/transformers/models/swinv2/convert_swinv2_timm_to_pytorch.py | 195 | 🟢 LOW | Debug print statement found |
| src/transformers/models/switch_transformers/convert_big_switch.py | 194 | 🟢 LOW | Debug print statement found |
| src/transformers/models/switch_transformers/convert_switch_transformers_original_flax_checkpoint_to_pytorch.py | 223 | 🟢 LOW | Debug print statement found |
| src/transformers/models/switch_transformers/convert_switch_transformers_original_flax_checkpoint_to_pytorch.py | 242 | 🟢 LOW | Debug print statement found |
| src/transformers/models/switch_transformers/convert_switch_transformers_original_flax_checkpoint_to_pytorch.py | 289 | 🟢 LOW | Debug print statement found |
| src/transformers/models/switch_transformers/convert_switch_transformers_original_flax_checkpoint_to_pytorch.py | 307 | 🟢 LOW | Debug print statement found |
| src/transformers/models/t5/convert_t5_original_tf_checkpoint_to_pytorch.py | 137 | 🟢 LOW | Debug print statement found |
| src/transformers/models/t5/convert_t5_original_tf_checkpoint_to_pytorch.py | 144 | 🟢 LOW | Debug print statement found |
| src/transformers/models/t5/convert_t5x_checkpoint_to_pytorch.py | 78 | 🟢 LOW | Debug print statement found |
| src/transformers/models/t5/convert_t5x_checkpoint_to_pytorch.py | 170 | 🟢 LOW | Debug print statement found |
| src/transformers/models/t5/convert_t5x_checkpoint_to_pytorch.py | 195 | 🟢 LOW | Debug print statement found |
| src/transformers/models/t5/convert_t5x_checkpoint_to_pytorch.py | 207 | 🟢 LOW | Debug print statement found |
| src/transformers/models/t5/convert_t5x_checkpoint_to_pytorch.py | 212 | 🟢 LOW | Debug print statement found |
| src/transformers/models/t5/modeling_t5.py | 1048 | 🟢 LOW | Debug print statement found |
| src/transformers/models/table_transformer/convert_table_transformer_to_hf.py | 275 | 🟢 LOW | Debug print statement found |
| src/transformers/models/table_transformer/convert_table_transformer_to_hf_no_timm.py | 392 | 🟢 LOW | Debug print statement found |
| src/transformers/models/table_transformer/modeling_table_transformer.py | 1219 | 🟢 LOW | Debug print statement found |
| src/transformers/models/tapas/convert_tapas_original_tf_checkpoint_to_pytorch.py | 222 | 🟢 LOW | Debug print statement found |
| src/transformers/models/tapas/convert_tapas_original_tf_checkpoint_to_pytorch.py | 227 | 🟢 LOW | Debug print statement found |
| src/transformers/models/tapas/convert_tapas_original_tf_checkpoint_to_pytorch.py | 231 | 🟢 LOW | Debug print statement found |
| src/transformers/models/tapas/convert_tapas_original_tf_checkpoint_to_pytorch.py | 235 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 111 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 144 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 152 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 217 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 218 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 219 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 220 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 221 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 234 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 237 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 238 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 239 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 240 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 241 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm/convert_timesfm_orignal_to_hf.py | 261 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 151 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 152 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 153 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 154 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 162 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 166 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 168 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 170 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 195 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 198 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 202 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 220 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 223 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 227 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 232 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 295 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 296 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 297 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 298 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 299 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 312 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 315 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 316 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 317 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 318 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 319 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 346 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 357 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 358 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesfm2_5/convert_timesfm2_5_original_to_hf.py | 359 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesformer/convert_timesformer_to_pytorch.py | 214 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesformer/convert_timesformer_to_pytorch.py | 217 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesformer/convert_timesformer_to_pytorch.py | 222 | 🟢 LOW | Debug print statement found |
| src/transformers/models/timesformer/modeling_timesformer.py | 700 | 🟢 LOW | Debug print statement found |
| src/transformers/models/trocr/convert_trocr_unilm_to_pytorch.py | 219 | 🟢 LOW | Debug print statement found |
| src/transformers/models/trocr/convert_trocr_unilm_to_pytorch.py | 221 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 85 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 102 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 115 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 116 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 150 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 154 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 158 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 159 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 165 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 167 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 170 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 174 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 177 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 186 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 187 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/convert_udop_to_hf.py | 192 | 🟢 LOW | Debug print statement found |
| src/transformers/models/udop/modeling_udop.py | 1548 | 🟢 LOW | Debug print statement found |
| src/transformers/models/umt5/convert_umt5_checkpoint_to_pytorch.py | 90 | 🟢 LOW | Debug print statement found |
| src/transformers/models/umt5/convert_umt5_checkpoint_to_pytorch.py | 195 | 🟢 LOW | Debug print statement found |
| src/transformers/models/umt5/convert_umt5_checkpoint_to_pytorch.py | 221 | 🟢 LOW | Debug print statement found |
| src/transformers/models/umt5/convert_umt5_checkpoint_to_pytorch.py | 233 | 🟢 LOW | Debug print statement found |
| src/transformers/models/umt5/convert_umt5_checkpoint_to_pytorch.py | 238 | 🟢 LOW | Debug print statement found |
| src/transformers/models/univnet/convert_univnet.py | 131 | 🟢 LOW | Debug print statement found |
| src/transformers/models/upernet/convert_convnext_upernet_to_pytorch.py | 181 | 🟢 LOW | Debug print statement found |
| src/transformers/models/upernet/convert_convnext_upernet_to_pytorch.py | 183 | 🟢 LOW | Debug print statement found |
| src/transformers/models/upernet/convert_convnext_upernet_to_pytorch.py | 186 | 🟢 LOW | Debug print statement found |
| src/transformers/models/upernet/convert_convnext_upernet_to_pytorch.py | 188 | 🟢 LOW | Debug print statement found |
| src/transformers/models/upernet/convert_convnext_upernet_to_pytorch.py | 192 | 🟢 LOW | Debug print statement found |
| src/transformers/models/upernet/convert_swin_upernet_to_pytorch.py | 204 | 🟢 LOW | Debug print statement found |
| src/transformers/models/upernet/convert_swin_upernet_to_pytorch.py | 245 | 🟢 LOW | Debug print statement found |
| src/transformers/models/upernet/convert_swin_upernet_to_pytorch.py | 246 | 🟢 LOW | Debug print statement found |
| src/transformers/models/upernet/convert_swin_upernet_to_pytorch.py | 264 | 🟢 LOW | Debug print statement found |
| src/transformers/models/upernet/convert_swin_upernet_to_pytorch.py | 266 | 🟢 LOW | Debug print statement found |
| src/transformers/models/upernet/convert_swin_upernet_to_pytorch.py | 269 | 🟢 LOW | Debug print statement found |
| src/transformers/models/upernet/convert_swin_upernet_to_pytorch.py | 271 | 🟢 LOW | Debug print statement found |
| src/transformers/models/upernet/convert_swin_upernet_to_pytorch.py | 275 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomae/convert_videomae_to_pytorch.py | 279 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomae/convert_videomae_to_pytorch.py | 281 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomae/convert_videomae_to_pytorch.py | 287 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomae/convert_videomae_to_pytorch.py | 290 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomae/convert_videomae_to_pytorch.py | 295 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomae/modeling_videomae.py | 731 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 413 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 414 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 415 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 416 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 417 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 420 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 422 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 425 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 427 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 430 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 432 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 434 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 438 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 443 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 453 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 464 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 556 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 557 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 560 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 615 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 616 | 🟢 LOW | Debug print statement found |
| src/transformers/models/videomt/convert_videomt_to_hf.py | 617 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vilt/convert_vilt_original_to_pytorch.py | 284 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vilt/modeling_vilt.py | 768 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vilt/modeling_vilt.py | 914 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vilt/modeling_vilt.py | 1130 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vit/convert_dino_to_pytorch.py | 193 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vit/convert_dino_to_pytorch.py | 195 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vit/convert_vit_timm_to_pytorch.py | 195 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vit/convert_vit_timm_to_pytorch.py | 235 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vit/convert_vit_timm_to_pytorch.py | 237 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vit_mae/convert_vit_mae_to_pytorch.py | 158 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vit_mae/convert_vit_mae_to_pytorch.py | 161 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vit_msn/convert_msn_to_pytorch.py | 225 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vit_msn/convert_msn_to_pytorch.py | 228 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vit_msn/modeling_vit_msn.py | 432 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vit_msn/modular_vit_msn.py | 192 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitmatte/convert_vitmatte_to_hf.py | 136 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitmatte/convert_vitmatte_to_hf.py | 139 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitmatte/convert_vitmatte_to_hf.py | 144 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitmatte/modeling_vitmatte.py | 270 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitpose/convert_vitpose_to_hf.py | 204 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitpose/convert_vitpose_to_hf.py | 210 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitpose/convert_vitpose_to_hf.py | 253 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitpose/convert_vitpose_to_hf.py | 257 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitpose/convert_vitpose_to_hf.py | 275 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitpose/convert_vitpose_to_hf.py | 276 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitpose/convert_vitpose_to_hf.py | 282 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitpose/convert_vitpose_to_hf.py | 283 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitpose/convert_vitpose_to_hf.py | 384 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vitpose/convert_vitpose_to_hf.py | 392 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vits/convert_original_checkpoint.py | 357 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vivit/modeling_vivit.py | 548 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vivit/modular_vivit.py | 377 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vjepa2/convert_vjepa2_classifier_to_hf.py | 196 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vjepa2/convert_vjepa2_to_hf.py | 208 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vjepa2/convert_vjepa2_to_hf.py | 220 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vjepa2/convert_vjepa2_to_hf.py | 255 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vjepa2/convert_vjepa2_to_hf.py | 301 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vjepa2/convert_vjepa2_to_hf.py | 305 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vjepa2/convert_vjepa2_to_hf.py | 307 | 🟢 LOW | Debug print statement found |
| src/transformers/models/vjepa2/modeling_vjepa2.py | 1027 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral/convert_voxtral_weights_to_hf.py | 179 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral/convert_voxtral_weights_to_hf.py | 198 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral/convert_voxtral_weights_to_hf.py | 200 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral/convert_voxtral_weights_to_hf.py | 214 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral/convert_voxtral_weights_to_hf.py | 218 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral/convert_voxtral_weights_to_hf.py | 224 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral/convert_voxtral_weights_to_hf.py | 230 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral/convert_voxtral_weights_to_hf.py | 232 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral/convert_voxtral_weights_to_hf.py | 239 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral/convert_voxtral_weights_to_hf.py | 246 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral_realtime/convert_voxtral_realtime_weights_to_hf.py | 234 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral_realtime/convert_voxtral_realtime_weights_to_hf.py | 252 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral_realtime/convert_voxtral_realtime_weights_to_hf.py | 254 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral_realtime/convert_voxtral_realtime_weights_to_hf.py | 265 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral_realtime/convert_voxtral_realtime_weights_to_hf.py | 270 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral_realtime/convert_voxtral_realtime_weights_to_hf.py | 276 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral_realtime/convert_voxtral_realtime_weights_to_hf.py | 282 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral_realtime/convert_voxtral_realtime_weights_to_hf.py | 284 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral_realtime/convert_voxtral_realtime_weights_to_hf.py | 291 | 🟢 LOW | Debug print statement found |
| src/transformers/models/voxtral_realtime/convert_voxtral_realtime_weights_to_hf.py | 298 | 🟢 LOW | Debug print statement found |
| src/transformers/models/whisper/convert_openai_to_hf.py | 134 | 🟢 LOW | Debug print statement found |
| src/transformers/models/whisper/convert_openai_to_hf.py | 353 | 🟢 LOW | Debug print statement found |
| src/transformers/models/x_clip/convert_x_clip_original_pytorch_to_hf.py | 303 | 🟢 LOW | Debug print statement found |
| src/transformers/models/x_clip/convert_x_clip_original_pytorch_to_hf.py | 311 | 🟢 LOW | Debug print statement found |
| src/transformers/models/x_clip/convert_x_clip_original_pytorch_to_hf.py | 355 | 🟢 LOW | Debug print statement found |
| src/transformers/models/x_clip/convert_x_clip_original_pytorch_to_hf.py | 358 | 🟢 LOW | Debug print statement found |
| src/transformers/models/x_clip/convert_x_clip_original_pytorch_to_hf.py | 362 | 🟢 LOW | Debug print statement found |
| src/transformers/models/x_clip/modeling_x_clip.py | 1083 | 🟢 LOW | Debug print statement found |
| src/transformers/models/x_clip/modular_x_clip.py | 743 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xcodec/convert_xcodec_weights_to_hf.py | 258 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xglm/convert_xglm_original_ckpt_to_trfms.py | 55 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xlm/convert_xlm_original_pytorch_checkpoint_to_pytorch.py | 54 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xlm/convert_xlm_original_pytorch_checkpoint_to_pytorch.py | 57 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xlm/convert_xlm_original_pytorch_checkpoint_to_pytorch.py | 61 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xlm_roberta_xl/convert_xlm_roberta_xl_original_pytorch_checkpoint_to_pytorch.py | 68 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xlm_roberta_xl/convert_xlm_roberta_xl_original_pytorch_checkpoint_to_pytorch.py | 154 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xlm_roberta_xl/convert_xlm_roberta_xl_original_pytorch_checkpoint_to_pytorch.py | 156 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xlm_roberta_xl/convert_xlm_roberta_xl_original_pytorch_checkpoint_to_pytorch.py | 158 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xlm_roberta_xl/convert_xlm_roberta_xl_original_pytorch_checkpoint_to_pytorch.py | 163 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xlnet/convert_xlnet_original_tf_checkpoint_to_pytorch.py | 205 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xlnet/convert_xlnet_original_tf_checkpoint_to_pytorch.py | 221 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xlnet/convert_xlnet_original_tf_checkpoint_to_pytorch.py | 223 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xlnet/convert_xlnet_original_tf_checkpoint_to_pytorch.py | 258 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xmod/convert_xmod_original_pytorch_checkpoint_to_pytorch.py | 56 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xmod/convert_xmod_original_pytorch_checkpoint_to_pytorch.py | 78 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xmod/convert_xmod_original_pytorch_checkpoint_to_pytorch.py | 183 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xmod/convert_xmod_original_pytorch_checkpoint_to_pytorch.py | 185 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xmod/convert_xmod_original_pytorch_checkpoint_to_pytorch.py | 187 | 🟢 LOW | Debug print statement found |
| src/transformers/models/xmod/convert_xmod_original_pytorch_checkpoint_to_pytorch.py | 192 | 🟢 LOW | Debug print statement found |
| src/transformers/models/yolos/convert_yolos_to_pytorch.py | 225 | 🟢 LOW | Debug print statement found |
| src/transformers/models/yolos/convert_yolos_to_pytorch.py | 227 | 🟢 LOW | Debug print statement found |
| src/transformers/models/yolos/convert_yolos_to_pytorch.py | 239 | 🟢 LOW | Debug print statement found |
| src/transformers/models/yolos/modeling_yolos.py | 610 | 🟢 LOW | Debug print statement found |
| src/transformers/models/yoso/convert_yoso_pytorch_to_pytorch.py | 83 | 🟢 LOW | Debug print statement found |
| src/transformers/models/yoso/convert_yoso_pytorch_to_pytorch.py | 87 | 🟢 LOW | Debug print statement found |
| src/transformers/models/zoedepth/convert_zoedepth_to_hf.py | 320 | 🟢 LOW | Debug print statement found |
| src/transformers/models/zoedepth/convert_zoedepth_to_hf.py | 322 | 🟢 LOW | Debug print statement found |
| src/transformers/models/zoedepth/convert_zoedepth_to_hf.py | 375 | 🟢 LOW | Debug print statement found |
| src/transformers/models/zoedepth/convert_zoedepth_to_hf.py | 376 | 🟢 LOW | Debug print statement found |
| src/transformers/models/zoedepth/convert_zoedepth_to_hf.py | 380 | 🟢 LOW | Debug print statement found |
| src/transformers/models/zoedepth/convert_zoedepth_to_hf.py | 383 | 🟢 LOW | Debug print statement found |
| src/transformers/models/zoedepth/convert_zoedepth_to_hf.py | 395 | 🟢 LOW | Debug print statement found |
| src/transformers/optimization.py | 816 | 🟢 LOW | Debug print statement found |
| src/transformers/optimization.py | 834 | 🟢 LOW | Debug print statement found |
| src/transformers/optimization.py | 853 | 🟢 LOW | Debug print statement found |
| src/transformers/pipelines/audio_utils.py | 290 | 🟢 LOW | Debug print statement found |
| src/transformers/pipelines/audio_utils.py | 293 | 🟢 LOW | Debug print statement found |
| src/transformers/pipelines/base.py | 620 | 🟢 LOW | Debug print statement found |
| src/transformers/testing_utils.py | 1673 | 🟢 LOW | Debug print statement found |
| src/transformers/testing_utils.py | 1754 | 🟢 LOW | Debug print statement found |
| src/transformers/testing_utils.py | 1761 | 🟢 LOW | Debug print statement found |
| src/transformers/testing_utils.py | 1766 | 🟢 LOW | Debug print statement found |
| src/transformers/testing_utils.py | 1767 | 🟢 LOW | Debug print statement found |
| src/transformers/testing_utils.py | 1773 | 🟢 LOW | Debug print statement found |
| src/transformers/testing_utils.py | 1779 | 🟢 LOW | Debug print statement found |
| src/transformers/testing_utils.py | 2481 | 🟢 LOW | Debug print statement found |
| src/transformers/testing_utils.py | 2507 | 🟢 LOW | Debug print statement found |
| src/transformers/testing_utils.py | 3605 | 🟢 LOW | Debug print statement found |
| src/transformers/tokenization_python.py | 542 | 🟢 LOW | Debug print statement found |
| src/transformers/tokenization_utils_base.py | 1164 | 🟢 LOW | Debug print statement found |
| src/transformers/tokenization_utils_base.py | 1247 | 🟢 LOW | Debug print statement found |
| src/transformers/tokenization_utils_sentencepiece.py | 136 | 🟢 LOW | Debug print statement found |
| src/transformers/trainer_callback.py | 343 | 🟢 LOW | Debug print statement found |
| src/transformers/trainer_callback.py | 708 | 🟢 LOW | Debug print statement found |
| src/transformers/trainer_pt_utils.py | 912 | 🟢 LOW | Debug print statement found |
| src/transformers/trainer_pt_utils.py | 917 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/attention_visualizer.py | 236 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/attention_visualizer.py | 237 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/attention_visualizer.py | 245 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/attention_visualizer.py | 254 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/attention_visualizer.py | 255 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/auto_docstring.py | 2956 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/auto_docstring.py | 3322 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/auto_docstring.py | 3669 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/auto_docstring.py | 3710 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/auto_docstring.py | 3852 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/auto_docstring.py | 4075 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/auto_docstring.py | 4351 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/auto_docstring.py | 4369 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/chat_template_utils.py | 276 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/chat_template_utils.py | 336 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/deprecation.py | 86 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/deprecation.py | 96 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/doc.py | 564 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/doc.py | 616 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/generic.py | 737 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/pytest_helpers.py | 83 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/pytest_helpers.py | 87 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/pytest_helpers.py | 89 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/pytest_helpers.py | 91 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/pytest_helpers.py | 94 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/pytest_helpers.py | 96 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/pytest_helpers.py | 100 | 🟢 LOW | Debug print statement found |
| src/transformers/utils/pytest_helpers.py | 102 | 🟢 LOW | Debug print statement found |
| tests/generation/test_flash_attention_parity.py | 162 | 🟢 LOW | Debug print statement found |
| tests/generation/test_flash_attention_parity.py | 163 | 🟢 LOW | Debug print statement found |
| tests/generation/test_flash_attention_parity.py | 164 | 🟢 LOW | Debug print statement found |
| tests/generation/test_flash_attention_parity.py | 166 | 🟢 LOW | Debug print statement found |
| tests/generation/test_flash_attention_parity.py | 167 | 🟢 LOW | Debug print statement found |
| tests/generation/test_flash_attention_parity.py | 169 | 🟢 LOW | Debug print statement found |
| tests/generation/test_flash_attention_parity.py | 170 | 🟢 LOW | Debug print statement found |
| tests/generation/test_flash_attention_parity.py | 172 | 🟢 LOW | Debug print statement found |
| tests/generation/test_flash_attention_parity.py | 173 | 🟢 LOW | Debug print statement found |
| tests/generation/test_flash_attention_parity.py | 175 | 🟢 LOW | Debug print statement found |
| tests/generation/test_flash_attention_parity.py | 176 | 🟢 LOW | Debug print statement found |
| tests/generation/test_paged_attention.py | 144 | 🟢 LOW | Debug print statement found |
| tests/kernels/test_kernels.py | 80 | 🟢 LOW | Debug print statement found |
| tests/kernels/test_kernels.py | 90 | 🟢 LOW | Debug print statement found |
| tests/kernels/test_kernels.py | 547 | 🟢 LOW | Debug print statement found |
| tests/kernels/test_kernels.py | 551 | 🟢 LOW | Debug print statement found |
| tests/kernels/test_kernels.py | 566 | 🟢 LOW | Debug print statement found |
| tests/kernels/test_kernels.py | 570 | 🟢 LOW | Debug print statement found |
| tests/kernels/test_kernels.py | 587 | 🟢 LOW | Debug print statement found |
| tests/models/aimv2/test_modeling_aimv2.py | 402 | 🟢 LOW | Debug print statement found |
| tests/models/altclip/test_modeling_altclip.py | 529 | 🟢 LOW | Debug print statement found |
| tests/models/altclip/test_modeling_altclip.py | 530 | 🟢 LOW | Debug print statement found |
| tests/models/altclip/test_modeling_altclip.py | 531 | 🟢 LOW | Debug print statement found |
| tests/models/aria/test_processing_aria.py | 207 | 🟢 LOW | Debug print statement found |
| tests/models/bit/test_modeling_bit.py | 133 | 🟢 LOW | Debug print statement found |
| tests/models/canine/test_modeling_canine.py | 407 | 🟢 LOW | Debug print statement found |
| tests/models/chameleon/test_processing_chameleon.py | 37 | 🟢 LOW | Debug print statement found |
| tests/models/chmv2/test_modeling_chmv2.py | 197 | 🟢 LOW | Debug print statement found |
| tests/models/chmv2/test_modeling_chmv2.py | 198 | 🟢 LOW | Debug print statement found |
| tests/models/clipseg/test_modeling_clipseg.py | 512 | 🟢 LOW | Debug print statement found |
| tests/models/clipseg/test_modeling_clipseg.py | 519 | 🟢 LOW | Debug print statement found |
| tests/models/codegen/test_modeling_codegen.py | 405 | 🟢 LOW | Debug print statement found |
| tests/models/codegen/test_modeling_codegen.py | 406 | 🟢 LOW | Debug print statement found |
| tests/models/codegen/test_modeling_codegen.py | 442 | 🟢 LOW | Debug print statement found |
| tests/models/codegen/test_modeling_codegen.py | 472 | 🟢 LOW | Debug print statement found |
| tests/models/codegen/test_modeling_codegen.py | 474 | 🟢 LOW | Debug print statement found |
| tests/models/csm/test_modeling_csm.py | 399 | 🟢 LOW | Debug print statement found |
| tests/models/csm/test_processing_csm.py | 150 | 🟢 LOW | Debug print statement found |
| tests/models/csm/test_processing_csm.py | 151 | 🟢 LOW | Debug print statement found |
| tests/models/cwm/test_modeling_cwm.py | 155 | 🟢 LOW | Debug print statement found |
| tests/models/dab_detr/test_modeling_dab_detr.py | 302 | 🟢 LOW | Debug print statement found |
| tests/models/deepseek_v4/test_modeling_deepseek_v4.py | 483 | 🟢 LOW | Debug print statement found |
| tests/models/deepseek_v4/test_modeling_deepseek_v4.py | 493 | 🟢 LOW | Debug print statement found |
| tests/models/deepseek_v4/test_modeling_deepseek_v4.py | 567 | 🟢 LOW | Debug print statement found |
| tests/models/deepseek_v4/test_modeling_deepseek_v4.py | 572 | 🟢 LOW | Debug print statement found |
| tests/models/diffusion_gemma/test_modeling_diffusion_gemma.py | 845 | 🟢 LOW | Debug print statement found |
| tests/models/diffusion_gemma/test_modeling_diffusion_gemma.py | 898 | 🟢 LOW | Debug print statement found |
| tests/models/diffusion_gemma/test_modeling_diffusion_gemma.py | 963 | 🟢 LOW | Debug print statement found |
| tests/models/diffusion_gemma/test_modeling_diffusion_gemma.py | 1046 | 🟢 LOW | Debug print statement found |
| tests/models/diffusion_gemma/test_modeling_diffusion_gemma.py | 1151 | 🟢 LOW | Debug print statement found |
| tests/models/diffusion_gemma/test_modeling_diffusion_gemma.py | 1260 | 🟢 LOW | Debug print statement found |
| tests/models/diffusion_gemma/test_modeling_diffusion_gemma.py | 1313 | 🟢 LOW | Debug print statement found |
| tests/models/diffusion_gemma/test_modeling_diffusion_gemma.py | 1378 | 🟢 LOW | Debug print statement found |
| tests/models/diffusion_gemma/test_modeling_diffusion_gemma.py | 1451 | 🟢 LOW | Debug print statement found |
| tests/models/diffusion_gemma/test_modeling_diffusion_gemma.py | 1538 | 🟢 LOW | Debug print statement found |
| tests/models/edgetam_video/test_modeling_edgetam_video.py | 161 | 🟢 LOW | Debug print statement found |
| tests/models/edgetam_video/test_modeling_edgetam_video.py | 496 | 🟢 LOW | Debug print statement found |
| tests/models/evolla/test_modeling_evolla.py | 268 | 🟢 LOW | Debug print statement found |
| tests/models/evolla/test_modeling_evolla.py | 284 | 🟢 LOW | Debug print statement found |
| tests/models/evolla/test_modeling_evolla.py | 299 | 🟢 LOW | Debug print statement found |
| tests/models/flaubert/test_tokenization_flaubert.py | 70 | 🟢 LOW | Debug print statement found |
| tests/models/flaubert/test_tokenization_flaubert.py | 71 | 🟢 LOW | Debug print statement found |
| tests/models/fsmt/test_modeling_fsmt.py | 494 | 🟢 LOW | Debug print statement found |
| tests/models/fsmt/test_tokenization_fsmt.py | 146 | 🟢 LOW | Debug print statement found |
| tests/models/gpt_bigcode/test_modeling_gpt_bigcode.py | 501 | 🟢 LOW | Debug print statement found |
| tests/models/gpt_bigcode/test_modeling_gpt_bigcode.py | 518 | 🟢 LOW | Debug print statement found |
| tests/models/gpt_bigcode/test_modeling_gpt_bigcode.py | 519 | 🟢 LOW | Debug print statement found |
| tests/models/gpt_oss/test_modeling_gpt_oss.py | 236 | 🟢 LOW | Debug print statement found |
| tests/models/gpt_oss/test_modeling_gpt_oss.py | 238 | 🟢 LOW | Debug print statement found |
| tests/models/gpt_oss/test_modeling_gpt_oss.py | 240 | 🟢 LOW | Debug print statement found |
| tests/models/gpt_oss/test_modeling_gpt_oss.py | 439 | 🟢 LOW | Debug print statement found |
| tests/models/gpt_oss/test_modeling_gpt_oss.py | 562 | 🟢 LOW | Debug print statement found |
| tests/models/gpt_oss/test_modeling_gpt_oss.py | 628 | 🟢 LOW | Debug print statement found |
| tests/models/gpt_sw3/test_tokenization_gpt_sw3.py | 119 | 🟢 LOW | Debug print statement found |
| tests/models/idefics/test_modeling_idefics.py | 968 | 🟢 LOW | Debug print statement found |
| tests/models/idefics/test_processing_idefics.py | 58 | 🟢 LOW | Debug print statement found |
| tests/models/llama4/test_modeling_llama4.py | 102 | 🟢 LOW | Debug print statement found |
| tests/models/markuplm/test_modeling_markuplm.py | 172 | 🟢 LOW | Debug print statement found |
| tests/models/minimax_m3_vl/test_modeling_minimax_m3_vl.py | 475 | 🟢 LOW | Debug print statement found |
| tests/models/minimax_m3_vl/test_modeling_minimax_m3_vl.py | 492 | 🟢 LOW | Debug print statement found |
| tests/models/minimax_m3_vl/test_modeling_minimax_m3_vl.py | 522 | 🟢 LOW | Debug print statement found |
| tests/models/minimax_m3_vl/test_modeling_minimax_m3_vl.py | 582 | 🟢 LOW | Debug print statement found |
| tests/models/minimax_m3_vl/test_modeling_minimax_m3_vl.py | 608 | 🟢 LOW | Debug print statement found |
| tests/models/minimax_m3_vl/test_modeling_minimax_m3_vl.py | 649 | 🟢 LOW | Debug print statement found |
| tests/models/moshi/test_modeling_moshi.py | 713 | 🟢 LOW | Debug print statement found |
| tests/models/nemotron_h/test_modeling_nemotron_h.py | 489 | 🟢 LOW | Debug print statement found |
| tests/models/nemotron_h/test_modeling_nemotron_h.py | 672 | 🟢 LOW | Debug print statement found |
| tests/models/nemotron_h/test_modeling_nemotron_h.py | 687 | 🟢 LOW | Debug print statement found |
| tests/models/nemotron_h/test_modeling_nemotron_h.py | 695 | 🟢 LOW | Debug print statement found |
| tests/models/nemotron_h/test_modeling_nemotron_h.py | 696 | 🟢 LOW | Debug print statement found |
| tests/models/patchtsmixer/test_modeling_patchtsmixer.py | 359 | 🟢 LOW | Debug print statement found |
| tests/models/patchtsmixer/test_modeling_patchtsmixer.py | 505 | 🟢 LOW | Debug print statement found |
| tests/models/patchtsmixer/test_modeling_patchtsmixer.py | 717 | 🟢 LOW | Debug print statement found |
| tests/models/pe_audio_video/test_modeling_pe_audio_video.py | 304 | 🟢 LOW | Debug print statement found |
| tests/models/phi4_multimodal/test_feature_extraction_phi4_multimodal.py | 287 | 🟢 LOW | Debug print statement found |
| tests/models/phobert/test_tokenization_phobert.py | 62 | 🟢 LOW | Debug print statement found |
| tests/models/pix2struct/test_processing_pix2struct.py | 69 | 🟢 LOW | Debug print statement found |
| tests/models/sam2_video/test_modeling_sam2_video.py | 419 | 🟢 LOW | Debug print statement found |
| tests/models/sam2_video/test_modeling_sam2_video.py | 423 | 🟢 LOW | Debug print statement found |
| tests/models/sam2_video/test_modeling_sam2_video.py | 424 | 🟢 LOW | Debug print statement found |
| tests/models/vilt/test_modeling_vilt.py | 287 | 🟢 LOW | Debug print statement found |
| tests/models/vilt/test_modeling_vilt.py | 468 | 🟢 LOW | Debug print statement found |
| tests/models/vit_msn/test_modeling_vit_msn.py | 129 | 🟢 LOW | Debug print statement found |
| tests/models/vit_msn/test_modeling_vit_msn.py | 130 | 🟢 LOW | Debug print statement found |
| tests/models/vitmatte/test_modeling_vitmatte.py | 225 | 🟢 LOW | Debug print statement found |
| tests/models/x_clip/test_modeling_x_clip.py | 253 | 🟢 LOW | Debug print statement found |
| tests/models/x_clip/test_modeling_x_clip.py | 334 | 🟢 LOW | Debug print statement found |
| tests/models/x_clip/test_modeling_x_clip.py | 336 | 🟢 LOW | Debug print statement found |
| tests/quantization/autoawq/test_awq.py | 322 | 🟢 LOW | Debug print statement found |
| tests/quantization/ggml/test_ggml.py | 782 | 🟢 LOW | Debug print statement found |
| tests/repo_utils/test_checkers.py | 171 | 🟢 LOW | Debug print statement found |
| tests/test_modeling_common.py | 1725 | 🟢 LOW | Debug print statement found |
| tests/test_modeling_common.py | 2323 | 🟢 LOW | Debug print statement found |
| tests/test_modeling_common.py | 2436 | 🟢 LOW | Debug print statement found |
| tests/test_modeling_common.py | 4254 | 🟢 LOW | Debug print statement found |
| tests/test_tensor_parallel_mixin.py | 144 | 🟢 LOW | Debug print statement found |
| tests/test_tensor_parallel_mixin.py | 327 | 🟢 LOW | Debug print statement found |
| tests/test_tensor_parallel_mixin.py | 328 | 🟢 LOW | Debug print statement found |
| tests/test_tensor_parallel_mixin.py | 329 | 🟢 LOW | Debug print statement found |
| tests/test_tokenization_common.py | 888 | 🟢 LOW | Debug print statement found |
| tests/test_tokenization_common.py | 2788 | 🟢 LOW | Debug print statement found |
| tests/test_tokenization_common.py | 2895 | 🟢 LOW | Debug print statement found |
| tests/test_tokenizers_backend_mixin.py | 64 | 🟢 LOW | Debug print statement found |
| tests/test_tokenizers_backend_mixin.py | 487 | 🟢 LOW | Debug print statement found |
| tests/trainer/test_trainer_evaluation.py | 365 | 🟢 LOW | Debug print statement found |
| tests/trainer/test_trainer_evaluation.py | 366 | 🟢 LOW | Debug print statement found |
| tests/trainer/test_trainer_evaluation.py | 385 | 🟢 LOW | Debug print statement found |
| tests/trainer/test_trainer_evaluation.py | 386 | 🟢 LOW | Debug print statement found |
| tests/trainer/test_trainer_evaluation.py | 430 | 🟢 LOW | Debug print statement found |
| tests/trainer/test_trainer_evaluation.py | 431 | 🟢 LOW | Debug print statement found |
| tests/trainer/test_trainer_evaluation.py | 450 | 🟢 LOW | Debug print statement found |
| tests/trainer/test_trainer_evaluation.py | 451 | 🟢 LOW | Debug print statement found |
| tests/utils/test_auto_docstring.py | 756 | 🟢 LOW | Debug print statement found |
| tests/utils/test_doc_samples.py | 68 | 🟢 LOW | Debug print statement found |
| tests/utils/test_file_utils.py | 51 | 🟢 LOW | Debug print statement found |
| tests/utils/test_file_utils.py | 53 | 🟢 LOW | Debug print statement found |
| tests/utils/test_file_utils.py | 58 | 🟢 LOW | Debug print statement found |
| tests/utils/test_file_utils.py | 60 | 🟢 LOW | Debug print statement found |
| tests/utils/test_file_utils.py | 74 | 🟢 LOW | Debug print statement found |
| tests/utils/test_file_utils.py | 81 | 🟢 LOW | Debug print statement found |
| tests/utils/test_file_utils.py | 88 | 🟢 LOW | Debug print statement found |
| tests/utils/test_offline.py | 44 | 🟢 LOW | Debug print statement found |
| tests/utils/test_offline.py | 79 | 🟢 LOW | Debug print statement found |
| tests/utils/test_offline.py | 117 | 🟢 LOW | Debug print statement found |
| tests/utils/test_offline.py | 169 | 🟢 LOW | Debug print statement found |
| tests/utils/test_offline.py | 186 | 🟢 LOW | Debug print statement found |
| utils/add_dates.py | 425 | 🟢 LOW | Debug print statement found |
| utils/add_pipeline_model_mapping_to_test.py | 305 | 🟢 LOW | Debug print statement found |
| utils/aggregate_failure_reports.py | 50 | 🟢 LOW | Debug print statement found |
| utils/aggregate_failure_reports.py | 56 | 🟢 LOW | Debug print statement found |
| utils/check_bad_commit.py | 54 | 🟢 LOW | Debug print statement found |
| utils/check_bad_commit.py | 57 | 🟢 LOW | Debug print statement found |
| utils/check_bad_commit.py | 61 | 🟢 LOW | Debug print statement found |
| utils/check_bad_commit.py | 67 | 🟢 LOW | Debug print statement found |
| utils/check_bad_commit.py | 70 | 🟢 LOW | Debug print statement found |
| utils/check_bad_commit.py | 73 | 🟢 LOW | Debug print statement found |
| utils/check_bad_commit.py | 240 | 🟢 LOW | Debug print statement found |
| utils/check_bad_commit.py | 245 | 🟢 LOW | Debug print statement found |
| utils/check_bad_commit.py | 258 | 🟢 LOW | Debug print statement found |
| utils/check_bad_commit.py | 259 | 🟢 LOW | Debug print statement found |
| utils/check_bad_commit.py | 348 | 🟢 LOW | Debug print statement found |
| utils/check_bad_commit.py | 349 | 🟢 LOW | Debug print statement found |
| utils/check_copies.py | 836 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 829 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2038 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2042 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2044 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2048 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2052 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2054 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2057 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2059 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2063 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2066 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2068 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2072 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2075 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2077 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2080 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2082 | 🟢 LOW | Debug print statement found |
| utils/check_docstrings.py | 2155 | 🟢 LOW | Debug print statement found |
| utils/check_dummies.py | 226 | 🟢 LOW | Debug print statement found |
| utils/check_dummies.py | 245 | 🟢 LOW | Debug print statement found |
| utils/check_import_complexity.py | 228 | 🟢 LOW | Debug print statement found |
| utils/check_import_complexity.py | 232 | 🟢 LOW | Debug print statement found |
| utils/check_import_complexity.py | 233 | 🟢 LOW | Debug print statement found |
| utils/check_import_complexity.py | 234 | 🟢 LOW | Debug print statement found |
| utils/check_import_complexity.py | 238 | 🟢 LOW | Debug print statement found |
| utils/check_import_complexity.py | 248 | 🟢 LOW | Debug print statement found |
| utils/check_modeling_rules_doc.py | 102 | 🟢 LOW | Debug print statement found |
| utils/check_modular_conversion.py | 63 | 🟢 LOW | Debug print statement found |
| utils/check_modular_conversion.py | 65 | 🟢 LOW | Debug print statement found |
| utils/check_modular_conversion.py | 68 | 🟢 LOW | Debug print statement found |
| utils/check_modular_conversion.py | 203 | 🟢 LOW | Debug print statement found |
| utils/check_modular_conversion.py | 210 | 🟢 LOW | Debug print statement found |
| utils/check_modular_conversion.py | 260 | 🟢 LOW | Debug print statement found |
| utils/check_modular_conversion.py | 261 | 🟢 LOW | Debug print statement found |
| utils/check_modular_conversion.py | 269 | 🟢 LOW | Debug print statement found |
| utils/check_pipeline_typing.py | 72 | 🟢 LOW | Debug print statement found |
| utils/check_repo.py | 1491 | 🟢 LOW | Debug print statement found |
| utils/check_repo.py | 1492 | 🟢 LOW | Debug print statement found |
| utils/check_repo.py | 1494 | 🟢 LOW | Debug print statement found |
| utils/check_repo.py | 1496 | 🟢 LOW | Debug print statement found |
| utils/check_repo.py | 1499 | 🟢 LOW | Debug print statement found |
| utils/check_repo.py | 1501 | 🟢 LOW | Debug print statement found |
| utils/check_repo.py | 1503 | 🟢 LOW | Debug print statement found |
| utils/check_repo.py | 1505 | 🟢 LOW | Debug print statement found |
| utils/check_repo.py | 1507 | 🟢 LOW | Debug print statement found |
| utils/check_repo.py | 1509 | 🟢 LOW | Debug print statement found |
| utils/check_repo.py | 1511 | 🟢 LOW | Debug print statement found |
| utils/check_types.py | 56 | 🟢 LOW | Debug print statement found |
| utils/check_types.py | 60 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 324 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 344 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 348 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 370 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 372 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 376 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 385 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 540 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 552 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 553 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 563 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 597 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 599 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 614 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 616 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 628 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 630 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 636 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 650 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 655 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 656 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 673 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 679 | 🟢 LOW | Debug print statement found |
| utils/checkers.py | 681 | 🟢 LOW | Debug print statement found |
| utils/collated_reports.py | 64 | 🟢 LOW | Debug print statement found |
| utils/collated_reports.py | 79 | 🟢 LOW | Debug print statement found |
| utils/compare_test_runs.py | 91 | 🟢 LOW | Debug print statement found |
| utils/create_dummy_models.py | 612 | 🟢 LOW | Debug print statement found |
| utils/create_dummy_models.py | 1506 | 🟢 LOW | Debug print statement found |
| utils/create_dummy_models.py | 1565 | 🟢 LOW | Debug print statement found |
| utils/create_dummy_models.py | 1566 | 🟢 LOW | Debug print statement found |
| utils/create_dummy_models.py | 1567 | 🟢 LOW | Debug print statement found |
| utils/create_dummy_models.py | 1728 | 🟢 LOW | Debug print statement found |
| utils/create_dummy_models.py | 1731 | 🟢 LOW | Debug print statement found |
| utils/create_dummy_models.py | 1740 | 🟢 LOW | Debug print statement found |
| utils/custom_init_isort.py | 311 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 98 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 104 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 321 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 327 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 328 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 331 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 337 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 339 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 343 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 347 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 351 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 355 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 359 | 🟢 LOW | Debug print statement found |
| utils/deprecate_models.py | 369 | 🟢 LOW | Debug print statement found |
| utils/download_glue_data.py | 48 | 🟢 LOW | Debug print statement found |
| utils/download_glue_data.py | 54 | 🟢 LOW | Debug print statement found |
| utils/download_glue_data.py | 58 | 🟢 LOW | Debug print statement found |
| utils/download_glue_data.py | 66 | 🟢 LOW | Debug print statement found |
| utils/download_glue_data.py | 106 | 🟢 LOW | Debug print statement found |
| utils/download_glue_data.py | 110 | 🟢 LOW | Debug print statement found |
| utils/download_glue_data.py | 115 | 🟢 LOW | Debug print statement found |
| utils/extract_metadata.py | 42 | 🟢 LOW | Debug print statement found |
| utils/extract_metadata.py | 52 | 🟢 LOW | Debug print statement found |
| utils/extract_metadata.py | 57 | 🟢 LOW | Debug print statement found |
| utils/extract_metadata.py | 67 | 🟢 LOW | Debug print statement found |
| utils/extract_metadata.py | 68 | 🟢 LOW | Debug print statement found |
| utils/extract_pr_number_from_circleci.py | 30 | 🟢 LOW | Debug print statement found |
| utils/extract_warnings.py | 123 | 🟢 LOW | Debug print statement found |
| utils/extract_warnings.py | 124 | 🟢 LOW | Debug print statement found |
| utils/extract_warnings.py | 125 | 🟢 LOW | Debug print statement found |
| utils/fetch_hub_objects_for_ci.py | 172 | 🟢 LOW | Debug print statement found |
| utils/fetch_hub_objects_for_ci.py | 180 | 🟢 LOW | Debug print statement found |
| utils/fetch_hub_objects_for_ci.py | 187 | 🟢 LOW | Debug print statement found |
| utils/fetch_hub_objects_for_ci.py | 189 | 🟢 LOW | Debug print statement found |
| utils/fetch_hub_objects_for_ci.py | 196 | 🟢 LOW | Debug print statement found |
| utils/fetch_hub_objects_for_ci.py | 203 | 🟢 LOW | Debug print statement found |
| utils/fetch_hub_objects_for_ci.py | 208 | 🟢 LOW | Debug print statement found |
| utils/format_extras_slack_message.py | 75 | 🟢 LOW | Debug print statement found |
| utils/format_extras_slack_message.py | 110 | 🟢 LOW | Debug print statement found |
| utils/get_ci_error_statistics.py | 39 | 🟢 LOW | Debug print statement found |
| utils/get_ci_error_statistics.py | 66 | 🟢 LOW | Debug print statement found |
| utils/get_ci_error_statistics.py | 93 | 🟢 LOW | Debug print statement found |
| utils/get_ci_error_statistics.py | 296 | 🟢 LOW | Debug print statement found |
| utils/get_github_job_time.py | 52 | 🟢 LOW | Debug print statement found |
| utils/get_github_job_time.py | 73 | 🟢 LOW | Debug print statement found |
| utils/get_modified_files.py | 35 | 🟢 LOW | Debug print statement found |
| utils/get_pr_run_slow_jobs.py | 119 | 🟢 LOW | Debug print statement found |
| utils/get_pr_run_slow_jobs.py | 133 | 🟢 LOW | Debug print statement found |
| utils/get_test_reports.py | 61 | 🟢 LOW | Debug print statement found |
| utils/get_test_reports.py | 73 | 🟢 LOW | Debug print statement found |
| utils/get_test_reports.py | 75 | 🟢 LOW | Debug print statement found |
| utils/get_test_reports.py | 111 | 🟢 LOW | Debug print statement found |
| utils/get_test_reports.py | 220 | 🟢 LOW | Debug print statement found |
| utils/get_test_reports.py | 222 | 🟢 LOW | Debug print statement found |
| utils/get_test_reports.py | 235 | 🟢 LOW | Debug print statement found |
| utils/models_to_deprecate.py | 148 | 🟢 LOW | Debug print statement found |
| utils/models_to_deprecate.py | 199 | 🟢 LOW | Debug print statement found |
| utils/models_to_deprecate.py | 257 | 🟢 LOW | Debug print statement found |
| utils/models_to_deprecate.py | 260 | 🟢 LOW | Debug print statement found |
| utils/models_to_deprecate.py | 280 | 🟢 LOW | Debug print statement found |
| utils/models_to_deprecate.py | 288 | 🟢 LOW | Debug print statement found |
| utils/models_to_deprecate.py | 289 | 🟢 LOW | Debug print statement found |
| utils/models_to_deprecate.py | 290 | 🟢 LOW | Debug print statement found |
| utils/models_to_deprecate.py | 295 | 🟢 LOW | Debug print statement found |
| utils/models_to_deprecate.py | 296 | 🟢 LOW | Debug print statement found |
| utils/models_to_deprecate.py | 297 | 🟢 LOW | Debug print statement found |
| utils/modular_model_converter.py | 2033 | 🟢 LOW | Debug print statement found |
| utils/modular_model_converter.py | 2062 | 🟢 LOW | Debug print statement found |
| utils/modular_model_converter.py | 2081 | 🟢 LOW | Debug print statement found |
| utils/notification_service.py | 723 | 🟢 LOW | Debug print statement found |
| utils/notification_service.py | 724 | 🟢 LOW | Debug print statement found |
| utils/notification_service.py | 734 | 🟢 LOW | Debug print statement found |
| utils/notification_service.py | 735 | 🟢 LOW | Debug print statement found |
| utils/notification_service.py | 897 | 🟢 LOW | Debug print statement found |
| utils/notification_service.py | 898 | 🟢 LOW | Debug print statement found |
| utils/notification_service.py | 920 | 🟢 LOW | Debug print statement found |
| utils/notification_service.py | 921 | 🟢 LOW | Debug print statement found |
| utils/notification_service_doc_tests.py | 200 | 🟢 LOW | Debug print statement found |
| utils/notification_service_doc_tests.py | 201 | 🟢 LOW | Debug print statement found |
| utils/notification_service_doc_tests.py | 210 | 🟢 LOW | Debug print statement found |
| utils/notification_service_doc_tests.py | 211 | 🟢 LOW | Debug print statement found |
| utils/notification_service_doc_tests.py | 263 | 🟢 LOW | Debug print statement found |
| utils/notification_service_doc_tests.py | 264 | 🟢 LOW | Debug print statement found |
| utils/patch_helper.py | 66 | 🟢 LOW | Debug print statement found |
| utils/patch_helper.py | 68 | 🟢 LOW | Debug print statement found |
| utils/patch_helper.py | 110 | 🟢 LOW | Debug print statement found |
| utils/patch_helper.py | 112 | 🟢 LOW | Debug print statement found |
| utils/patch_helper.py | 136 | 🟢 LOW | Debug print statement found |
| utils/patch_helper.py | 137 | 🟢 LOW | Debug print statement found |
| utils/patch_helper.py | 138 | 🟢 LOW | Debug print statement found |
| utils/patch_helper.py | 139 | 🟢 LOW | Debug print statement found |
| utils/patch_helper.py | 148 | 🟢 LOW | Debug print statement found |
| utils/patch_helper.py | 150 | 🟢 LOW | Debug print statement found |
| utils/pr_slow_ci_models.py | 84 | 🟢 LOW | Debug print statement found |
| utils/pr_slow_ci_models.py | 85 | 🟢 LOW | Debug print statement found |
| utils/pr_slow_ci_models.py | 89 | 🟢 LOW | Debug print statement found |
| utils/pr_slow_ci_models.py | 91 | 🟢 LOW | Debug print statement found |
| utils/pr_slow_ci_models.py | 94 | 🟢 LOW | Debug print statement found |
| utils/pr_slow_ci_models.py | 175 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 26 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 27 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 32 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 41 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 44 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 45 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 46 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 47 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 49 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 50 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 52 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 53 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 55 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 60 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 62 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 69 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 71 | 🟢 LOW | Debug print statement found |
| utils/print_env.py | 73 | 🟢 LOW | Debug print statement found |
| utils/process_bad_commit_report.py | 151 | 🟢 LOW | Debug print statement found |
| utils/release.py | 189 | 🟢 LOW | Debug print statement found |
| utils/release.py | 191 | 🟢 LOW | Debug print statement found |
| utils/release.py | 213 | 🟢 LOW | Debug print statement found |
| utils/release.py | 225 | 🟢 LOW | Debug print statement found |
| utils/scan_skipped_tests.py | 111 | 🟢 LOW | Debug print statement found |
| utils/scan_skipped_tests.py | 112 | 🟢 LOW | Debug print statement found |
| utils/scan_skipped_tests.py | 113 | 🟢 LOW | Debug print statement found |
| utils/scan_skipped_tests.py | 115 | 🟢 LOW | Debug print statement found |
| utils/scan_skipped_tests.py | 117 | 🟢 LOW | Debug print statement found |
| utils/scan_skipped_tests.py | 137 | 🟢 LOW | Debug print statement found |
| utils/scan_skipped_tests.py | 139 | 🟢 LOW | Debug print statement found |
| utils/scan_skipped_tests.py | 157 | 🟢 LOW | Debug print statement found |
| utils/scan_skipped_tests.py | 184 | 🟢 LOW | Debug print statement found |
| utils/scan_skipped_tests.py | 194 | 🟢 LOW | Debug print statement found |
| utils/set_cuda_devices_for_ci.py | 26 | 🟢 LOW | Debug print statement found |
| utils/split_doctest_jobs.py | 96 | 🟢 LOW | Debug print statement found |
| utils/split_doctest_jobs.py | 98 | 🟢 LOW | Debug print statement found |
| utils/split_model_tests.py | 88 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 261 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 262 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 266 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 268 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 271 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 342 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 378 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 379 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 383 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 386 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 389 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 409 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 429 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 509 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 510 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 514 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 517 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 520 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 800 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 974 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 975 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 985 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 998 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 1021 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 1029 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 1045 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 1051 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 1115 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 1168 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 1171 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 1176 | 🟢 LOW | Debug print statement found |
| utils/tests_fetcher.py | 1181 | 🟢 LOW | Debug print statement found |
| utils/update_metadata.py | 310 | 🟢 LOW | Debug print statement found |

### Maintenance Items (588)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .circleci/create_circleci_config.py | 54 | ⚪ INFO | TODO comment found |
| .circleci/create_circleci_config.py | 324 | ⚪ INFO | TODO comment found |
| .circleci/create_circleci_config.py | 383 | ⚪ INFO | TODO comment found |
| benchmark/benchmark.py | 106 | ⚪ INFO | TODO comment found |
| benchmark/benchmark.py | 271 | ⚪ INFO | TODO comment found |
| benchmark_v2/framework/benchmark_config.py | 109 | 🟡 MEDIUM | FIXME comment indicating known issue |
| benchmark_v2/framework/benchmark_config.py | 120 | 🟡 MEDIUM | FIXME comment indicating known issue |
| conftest.py | 156 | ⚪ INFO | TODO comment found |
| conftest.py | 164 | ⚪ INFO | TODO comment found |
| examples/3D_parallel.py | 270 | ⚪ INFO | TODO comment found |
| examples/3D_parallel.py | 301 | ⚪ INFO | TODO comment found |
| examples/modular-transformers/modeling_test_detr.py | 897 | ⚪ INFO | TODO comment found |
| examples/pytorch/3d_parallel_checks.py | 190 | ⚪ INFO | TODO comment found |
| examples/pytorch/3d_parallel_checks.py | 338 | ⚪ INFO | TODO comment found |
| examples/pytorch/3d_parallel_checks.py | 348 | ⚪ INFO | TODO comment found |
| examples/pytorch/3d_parallel_checks.py | 366 | ⚪ INFO | TODO comment found |
| examples/pytorch/continuous_batching.py | 30 | ⚪ INFO | TODO comment found |
| examples/pytorch/continuous_batching.py | 102 | ⚪ INFO | TODO comment found |
| examples/pytorch/instance-segmentation/run_instance_segmentation.py | 402 | ⚪ INFO | TODO comment found |
| examples/pytorch/instance-segmentation/run_instance_segmentation_no_trainer.py | 475 | ⚪ INFO | TODO comment found |
| src/transformers/audio_utils.py | 53 | ⚪ INFO | TODO comment found |
| src/transformers/cli/chat.py | 304 | ⚪ INFO | TODO comment found |
| src/transformers/cli/serving/chat_completion.py | 154 | ⚪ INFO | TODO comment found |
| src/transformers/cli/serving/response.py | 420 | ⚪ INFO | TODO comment found |
| src/transformers/cli/serving/utils.py | 1180 | ⚪ INFO | TODO comment found |
| src/transformers/cli/system.py | 50 | ⚪ INFO | TODO comment found |
| src/transformers/core_model_loading.py | 760 | ⚪ INFO | TODO comment found |
| src/transformers/core_model_loading.py | 888 | ⚪ INFO | TODO comment found |
| src/transformers/core_model_loading.py | 1413 | ⚪ INFO | TODO comment found |
| src/transformers/distributed/configuration_utils.py | 29 | ⚪ INFO | TODO comment found |
| src/transformers/fusion_mapping.py | 229 | ⚪ INFO | TODO comment found |
| src/transformers/generation/configuration_utils.py | 1613 | ⚪ INFO | TODO comment found |
| src/transformers/generation/configuration_utils.py | 1759 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/cache.py | 168 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/cache.py | 191 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/cache.py | 513 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/generation/continuous_batching/cache.py | 556 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/cache.py | 641 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/cache_manager.py | 37 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/cache_manager.py | 283 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/cache_manager.py | 388 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/cache_manager.py | 452 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/cache_manager.py | 544 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/cb_logits_processors.py | 198 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/cb_logits_processors.py | 322 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/cb_logits_processors.py | 323 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/continuous_api.py | 493 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/generation/continuous_batching/continuous_api.py | 833 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/continuous_api.py | 1167 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/initialization.py | 168 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/initialization.py | 296 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/input_outputs.py | 152 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/input_outputs.py | 493 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/input_outputs.py | 757 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/offloading_manager.py | 254 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/requests.py | 29 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/requests.py | 148 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/requests.py | 176 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/requests.py | 235 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/requests.py | 239 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/scheduler.py | 330 | ⚪ INFO | TODO comment found |
| src/transformers/generation/continuous_batching/scheduler.py | 378 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/generation/continuous_batching/scheduler.py | 379 | ⚪ INFO | TODO comment found |
| src/transformers/generation/utils.py | 1585 | ⚪ INFO | TODO comment found |
| src/transformers/generation/utils.py | 1950 | ⚪ INFO | TODO comment found |
| src/transformers/generation/utils.py | 2346 | ⚪ INFO | TODO comment found |
| src/transformers/generation/utils.py | 2361 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/generation/utils.py | 3794 | ⚪ INFO | TODO comment found |
| src/transformers/image_processing_base.py | 43 | ⚪ INFO | TODO comment found |
| src/transformers/image_processing_base.py | 60 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/executorch.py | 799 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/fbgemm_fp8.py | 299 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/flex_attention.py | 135 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/mxfp4.py | 255 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/mxfp4.py | 401 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 71 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 89 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 169 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 200 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 229 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 270 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 283 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 310 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 322 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 354 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 371 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 379 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 572 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 776 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 1083 | ⚪ INFO | TODO comment found |
| src/transformers/integrations/peft.py | 1146 | ⚪ INFO | TODO comment found |
| src/transformers/masking_utils.py | 968 | ⚪ INFO | TODO comment found |
| src/transformers/masking_utils.py | 1197 | ⚪ INFO | TODO comment found |
| src/transformers/masking_utils.py | 1412 | ⚪ INFO | TODO comment found |
| src/transformers/modeling_attn_mask_utils.py | 291 | ⚪ INFO | TODO comment found |
| src/transformers/modeling_attn_mask_utils.py | 319 | ⚪ INFO | TODO comment found |
| src/transformers/modeling_attn_mask_utils.py | 397 | ⚪ INFO | TODO comment found |
| src/transformers/modeling_gguf_pytorch_utils.py | 614 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/modeling_utils.py | 3575 | ⚪ INFO | TODO comment found |
| src/transformers/models/audio_spectrogram_transformer/convert_audio_spectrogram_transformer_original_to_pytorch.py | 207 | ⚪ INFO | TODO comment found |
| src/transformers/models/audioflamingo3/modeling_audioflamingo3.py | 124 | ⚪ INFO | TODO comment found |
| src/transformers/models/auto/auto_factory.py | 243 | ⚪ INFO | TODO comment found |
| src/transformers/models/auto/auto_factory.py | 401 | ⚪ INFO | TODO comment found |
| src/transformers/models/auto/configuration_auto.py | 46 | ⚪ INFO | TODO comment found |
| src/transformers/models/bamba/convert_mamba_ssm_checkpoint.py | 219 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/models/bark/modeling_bark.py | 186 | ⚪ INFO | TODO comment found |
| src/transformers/models/bark/modeling_bark.py | 1415 | ⚪ INFO | TODO comment found |
| src/transformers/models/bart/modeling_bart.py | 191 | ⚪ INFO | TODO comment found |
| src/transformers/models/bertweet/tokenization_bertweet.py | 400 | ⚪ INFO | TODO comment found |
| src/transformers/models/bigbird_pegasus/modeling_bigbird_pegasus.py | 1225 | ⚪ INFO | TODO comment found |
| src/transformers/models/biogpt/modeling_biogpt.py | 168 | ⚪ INFO | TODO comment found |
| src/transformers/models/blenderbot/modeling_blenderbot.py | 177 | ⚪ INFO | TODO comment found |
| src/transformers/models/blenderbot_small/modeling_blenderbot_small.py | 164 | ⚪ INFO | TODO comment found |
| src/transformers/models/bridgetower/configuration_bridgetower.py | 148 | ⚪ INFO | TODO comment found |
| src/transformers/models/cohere_asr/feature_extraction_cohere_asr.py | 103 | ⚪ INFO | TODO comment found |
| src/transformers/models/csm/generation_csm.py | 468 | ⚪ INFO | TODO comment found |
| src/transformers/models/csm/modeling_csm.py | 851 | ⚪ INFO | TODO comment found |
| src/transformers/models/csm/modular_csm.py | 513 | ⚪ INFO | TODO comment found |
| src/transformers/models/csm/processing_csm.py | 137 | ⚪ INFO | TODO comment found |
| src/transformers/models/d_fine/configuration_d_fine.py | 28 | ⚪ INFO | TODO comment found |
| src/transformers/models/d_fine/modular_d_fine.py | 52 | ⚪ INFO | TODO comment found |
| src/transformers/models/dab_detr/modeling_dab_detr.py | 265 | ⚪ INFO | TODO comment found |
| src/transformers/models/dab_detr/modeling_dab_detr.py | 1392 | ⚪ INFO | TODO comment found |
| src/transformers/models/data2vec/convert_data2vec_audio_original_pytorch_checkpoint_to_pytorch.py | 131 | ⚪ INFO | TODO comment found |
| src/transformers/models/data2vec/modeling_data2vec_audio.py | 243 | ⚪ INFO | TODO comment found |
| src/transformers/models/deformable_detr/modeling_deformable_detr.py | 981 | ⚪ INFO | TODO comment found |
| src/transformers/models/deformable_detr/modular_deformable_detr.py | 830 | ⚪ INFO | TODO comment found |
| src/transformers/models/deimv2/configuration_deimv2.py | 29 | ⚪ INFO | TODO comment found |
| src/transformers/models/deimv2/modeling_deimv2.py | 1843 | ⚪ INFO | TODO comment found |
| src/transformers/models/deimv2/modular_deimv2.py | 728 | ⚪ INFO | TODO comment found |
| src/transformers/models/dia/configuration_dia.py | 135 | ⚪ INFO | TODO comment found |
| src/transformers/models/dia/processing_dia.py | 175 | ⚪ INFO | TODO comment found |
| src/transformers/models/dia/processing_dia.py | 327 | ⚪ INFO | TODO comment found |
| src/transformers/models/dia/processing_dia.py | 381 | ⚪ INFO | TODO comment found |
| src/transformers/models/diffllama/modeling_diffllama.py | 291 | ⚪ INFO | TODO comment found |
| src/transformers/models/diffllama/modeling_diffllama.py | 330 | ⚪ INFO | TODO comment found |
| src/transformers/models/diffllama/modular_diffllama.py | 166 | ⚪ INFO | TODO comment found |
| src/transformers/models/diffllama/modular_diffllama.py | 205 | ⚪ INFO | TODO comment found |
| src/transformers/models/dinat/modeling_dinat.py | 160 | ⚪ INFO | TODO comment found |
| src/transformers/models/edgetam/modeling_edgetam.py | 442 | ⚪ INFO | TODO comment found |
| src/transformers/models/edgetam/modular_edgetam.py | 196 | ⚪ INFO | TODO comment found |
| src/transformers/models/ernie4_5_vl_moe/video_processing_ernie4_5_vl_moe.py | 367 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/models/esm/openfold_utils/residue_constants.py | 364 | ⚪ INFO | TODO comment found |
| src/transformers/models/esm/openfold_utils/residue_constants.py | 416 | ⚪ INFO | TODO comment found |
| src/transformers/models/falcon/modeling_falcon.py | 440 | ⚪ INFO | TODO comment found |
| src/transformers/models/falcon/modeling_falcon.py | 475 | ⚪ INFO | TODO comment found |
| src/transformers/models/flava/modeling_flava.py | 565 | ⚪ INFO | TODO comment found |
| src/transformers/models/fsmt/modeling_fsmt.py | 98 | ⚪ INFO | TODO comment found |
| src/transformers/models/gemma3/convert_gemma3_weights.py | 698 | ⚪ INFO | TODO comment found |
| src/transformers/models/gemma3n/convert_gemma3n_weights.py | 489 | ⚪ INFO | TODO comment found |
| src/transformers/models/gemma3n/feature_extraction_gemma3n.py | 264 | ⚪ INFO | TODO comment found |
| src/transformers/models/gemma4/modeling_gemma4.py | 446 | ⚪ INFO | TODO comment found |
| src/transformers/models/gemma4/modeling_gemma4.py | 469 | ⚪ INFO | TODO comment found |
| src/transformers/models/gemma4/modular_gemma4.py | 420 | ⚪ INFO | TODO comment found |
| src/transformers/models/gemma4/modular_gemma4.py | 443 | ⚪ INFO | TODO comment found |
| src/transformers/models/gemma4/processing_gemma4.py | 83 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/models/gemma4/processing_gemma4.py | 193 | ⚪ INFO | TODO comment found |
| src/transformers/models/gemma4_unified/processing_gemma4_unified.py | 109 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/models/glmasr/modeling_glmasr.py | 294 | ⚪ INFO | TODO comment found |
| src/transformers/models/glmasr/modular_glmasr.py | 291 | ⚪ INFO | TODO comment found |
| src/transformers/models/gpt_bigcode/modeling_gpt_bigcode.py | 52 | ⚪ INFO | TODO comment found |
| src/transformers/models/gpt_neo/modeling_gpt_neo.py | 171 | ⚪ INFO | TODO comment found |
| src/transformers/models/gpt_neo/modeling_gpt_neo.py | 361 | ⚪ INFO | TODO comment found |
| src/transformers/models/gpt_sw3/tokenization_gpt_sw3.py | 177 | ⚪ INFO | TODO comment found |
| src/transformers/models/gptj/modeling_gptj.py | 238 | ⚪ INFO | TODO comment found |
| src/transformers/models/grounding_dino/modeling_grounding_dino.py | 434 | ⚪ INFO | TODO comment found |
| src/transformers/models/grounding_dino/modeling_grounding_dino.py | 1447 | ⚪ INFO | TODO comment found |
| src/transformers/models/grounding_dino/processing_grounding_dino.py | 227 | ⚪ INFO | TODO comment found |
| src/transformers/models/hgnet_v2/configuration_hgnet_v2.py | 31 | ⚪ INFO | TODO comment found |
| src/transformers/models/hgnet_v2/modular_hgnet_v2.py | 39 | ⚪ INFO | TODO comment found |
| src/transformers/models/higgs_audio_v2/processing_higgs_audio_v2.py | 172 | ⚪ INFO | TODO comment found |
| src/transformers/models/higgs_audio_v2/processing_higgs_audio_v2.py | 175 | ⚪ INFO | TODO comment found |
| src/transformers/models/higgs_audio_v2/processing_higgs_audio_v2.py | 272 | ⚪ INFO | TODO comment found |
| src/transformers/models/higgs_audio_v2/processing_higgs_audio_v2.py | 329 | ⚪ INFO | TODO comment found |
| src/transformers/models/higgs_audio_v2/processing_higgs_audio_v2.py | 361 | ⚪ INFO | TODO comment found |
| src/transformers/models/higgs_audio_v2_tokenizer/modeling_higgs_audio_v2_tokenizer.py | 496 | ⚪ INFO | TODO comment found |
| src/transformers/models/higgs_audio_v2_tokenizer/modular_higgs_audio_v2_tokenizer.py | 123 | ⚪ INFO | TODO comment found |
| src/transformers/models/hubert/modeling_hubert.py | 302 | ⚪ INFO | TODO comment found |
| src/transformers/models/informer/modeling_informer.py | 336 | ⚪ INFO | TODO comment found |
| src/transformers/models/janus/convert_janus_weights_to_hf.py | 441 | ⚪ INFO | TODO comment found |
| src/transformers/models/kosmos2_5/modeling_kosmos2_5.py | 414 | ⚪ INFO | TODO comment found |
| src/transformers/models/kyutai_speech_to_text/modeling_kyutai_speech_to_text.py | 526 | ⚪ INFO | TODO comment found |
| src/transformers/models/kyutai_speech_to_text/modeling_kyutai_speech_to_text.py | 570 | ⚪ INFO | TODO comment found |
| src/transformers/models/kyutai_speech_to_text/modeling_kyutai_speech_to_text.py | 1115 | ⚪ INFO | TODO comment found |
| src/transformers/models/kyutai_speech_to_text/modeling_kyutai_speech_to_text.py | 1143 | ⚪ INFO | TODO comment found |
| src/transformers/models/kyutai_speech_to_text/modeling_kyutai_speech_to_text.py | 1160 | ⚪ INFO | TODO comment found |
| src/transformers/models/kyutai_speech_to_text/modular_kyutai_speech_to_text.py | 454 | ⚪ INFO | TODO comment found |
| src/transformers/models/kyutai_speech_to_text/modular_kyutai_speech_to_text.py | 482 | ⚪ INFO | TODO comment found |
| src/transformers/models/kyutai_speech_to_text/modular_kyutai_speech_to_text.py | 499 | ⚪ INFO | TODO comment found |
| src/transformers/models/lasr/feature_extraction_lasr.py | 28 | ⚪ INFO | TODO comment found |
| src/transformers/models/lasr/feature_extraction_lasr.py | 125 | ⚪ INFO | TODO comment found |
| src/transformers/models/lasr/modeling_lasr.py | 426 | ⚪ INFO | TODO comment found |
| src/transformers/models/led/modeling_led.py | 254 | ⚪ INFO | TODO comment found |
| src/transformers/models/longformer/modeling_longformer.py | 610 | ⚪ INFO | TODO comment found |
| src/transformers/models/longt5/modeling_longt5.py | 50 | ⚪ INFO | TODO comment found |
| src/transformers/models/longt5/modeling_longt5.py | 1125 | ⚪ INFO | TODO comment found |
| src/transformers/models/m2m_100/modeling_m2m_100.py | 260 | ⚪ INFO | TODO comment found |
| src/transformers/models/marian/modeling_marian.py | 184 | ⚪ INFO | TODO comment found |
| src/transformers/models/mbart/modeling_mbart.py | 204 | ⚪ INFO | TODO comment found |
| src/transformers/models/mimi/modeling_mimi.py | 751 | ⚪ INFO | TODO comment found |
| src/transformers/models/mimi/modeling_mimi.py | 793 | ⚪ INFO | TODO comment found |
| src/transformers/models/mimi/modeling_mimi.py | 1469 | ⚪ INFO | TODO comment found |
| src/transformers/models/mimi/modeling_mimi.py | 1472 | ⚪ INFO | TODO comment found |
| src/transformers/models/mm_grounding_dino/modeling_mm_grounding_dino.py | 670 | ⚪ INFO | TODO comment found |
| src/transformers/models/mm_grounding_dino/modeling_mm_grounding_dino.py | 1119 | ⚪ INFO | TODO comment found |
| src/transformers/models/moshi/modeling_moshi.py | 524 | ⚪ INFO | TODO comment found |
| src/transformers/models/moshi/modeling_moshi.py | 568 | ⚪ INFO | TODO comment found |
| src/transformers/models/musicgen/modeling_musicgen.py | 222 | ⚪ INFO | TODO comment found |
| src/transformers/models/musicgen_melody/modeling_musicgen_melody.py | 230 | ⚪ INFO | TODO comment found |
| src/transformers/models/nemotron/modeling_nemotron.py | 312 | ⚪ INFO | TODO comment found |
| src/transformers/models/nemotron/modeling_nemotron.py | 353 | ⚪ INFO | TODO comment found |
| src/transformers/models/nemotron/modeling_nemotron.py | 638 | ⚪ INFO | TODO comment found |
| src/transformers/models/nllb_moe/modeling_nllb_moe.py | 651 | ⚪ INFO | TODO comment found |
| src/transformers/models/olmo/convert_olmo_weights_to_hf.py | 101 | ⚪ INFO | TODO comment found |
| src/transformers/models/olmo/convert_olmo_weights_to_hf.py | 102 | ⚪ INFO | TODO comment found |
| src/transformers/models/olmo/convert_olmo_weights_to_hf.py | 130 | ⚪ INFO | TODO comment found |
| src/transformers/models/olmo2/convert_olmo2_weights_to_hf.py | 116 | ⚪ INFO | TODO comment found |
| src/transformers/models/olmo2/convert_olmo2_weights_to_hf.py | 117 | ⚪ INFO | TODO comment found |
| src/transformers/models/olmo2/convert_olmo2_weights_to_hf.py | 153 | ⚪ INFO | TODO comment found |
| src/transformers/models/olmo3/convert_olmo3_weights_to_hf.py | 360 | ⚪ INFO | TODO comment found |
| src/transformers/models/paligemma/processing_paligemma.py | 237 | ⚪ INFO | TODO comment found |
| src/transformers/models/parakeet/feature_extraction_parakeet.py | 83 | ⚪ INFO | TODO comment found |
| src/transformers/models/parakeet/modeling_parakeet.py | 501 | ⚪ INFO | TODO comment found |
| src/transformers/models/parakeet/modular_parakeet.py | 350 | ⚪ INFO | TODO comment found |
| src/transformers/models/patchtsmixer/modeling_patchtsmixer.py | 310 | ⚪ INFO | TODO comment found |
| src/transformers/models/patchtst/modeling_patchtst.py | 108 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_audio/modeling_pe_audio.py | 283 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_audio/modeling_pe_audio.py | 685 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_audio/modeling_pe_audio.py | 717 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_audio/modeling_pe_audio.py | 778 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_audio/modular_pe_audio.py | 115 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_audio/modular_pe_audio.py | 165 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_audio/modular_pe_audio.py | 197 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_audio/modular_pe_audio.py | 258 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_audio_video/modeling_pe_audio_video.py | 129 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_audio_video/modeling_pe_audio_video.py | 711 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_audio_video/modular_pe_audio_video.py | 119 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_audio_video/modular_pe_audio_video.py | 505 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_video/modeling_pe_video.py | 45 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_video/modeling_pe_video.py | 161 | ⚪ INFO | TODO comment found |
| src/transformers/models/pe_video/modular_pe_video.py | 37 | ⚪ INFO | TODO comment found |
| src/transformers/models/pegasus/modeling_pegasus.py | 186 | ⚪ INFO | TODO comment found |
| src/transformers/models/pegasus_x/modeling_pegasus_x.py | 202 | ⚪ INFO | TODO comment found |
| src/transformers/models/plbart/modeling_plbart.py | 193 | ⚪ INFO | TODO comment found |
| src/transformers/models/pp_formulanet/modeling_pp_formulanet.py | 608 | ⚪ INFO | TODO comment found |
| src/transformers/models/qwen2_5_omni/modeling_qwen2_5_omni.py | 3758 | ⚪ INFO | TODO comment found |
| src/transformers/models/qwen2_5_omni/modular_qwen2_5_omni.py | 3635 | ⚪ INFO | TODO comment found |
| src/transformers/models/qwen3_omni_moe/modeling_qwen3_omni_moe.py | 3158 | ⚪ INFO | TODO comment found |
| src/transformers/models/qwen3_omni_moe/modular_qwen3_omni_moe.py | 1835 | ⚪ INFO | TODO comment found |
| src/transformers/models/recurrent_gemma/modeling_recurrent_gemma.py | 716 | ⚪ INFO | TODO comment found |
| src/transformers/models/rt_detr_v2/convert_rt_detr_v2_weights_to_hf.py | 61 | ⚪ INFO | TODO comment found |
| src/transformers/models/rwkv/modeling_rwkv.py | 247 | ⚪ INFO | TODO comment found |
| src/transformers/models/sam2/image_processing_sam2.py | 635 | ⚪ INFO | TODO comment found |
| src/transformers/models/sam2/modular_sam2.py | 243 | ⚪ INFO | TODO comment found |
| src/transformers/models/sam2_video/modeling_sam2_video.py | 788 | ⚪ INFO | TODO comment found |
| src/transformers/models/sam2_video/modular_sam2_video.py | 1008 | ⚪ INFO | TODO comment found |
| src/transformers/models/sam3/image_processing_sam3.py | 666 | ⚪ INFO | TODO comment found |
| src/transformers/models/sam3/modeling_sam3.py | 1457 | ⚪ INFO | TODO comment found |
| src/transformers/models/sam3_lite_text/modeling_sam3_lite_text.py | 1212 | ⚪ INFO | TODO comment found |
| src/transformers/models/sam3_tracker_video/modeling_sam3_tracker_video.py | 793 | ⚪ INFO | TODO comment found |
| src/transformers/models/sew/modeling_sew.py | 300 | ⚪ INFO | TODO comment found |
| src/transformers/models/sew_d/modeling_sew_d.py | 554 | ⚪ INFO | TODO comment found |
| src/transformers/models/siglip2/convert_siglip2_to_hf.py | 388 | ⚪ INFO | TODO comment found |
| src/transformers/models/speech_to_text/modeling_speech_to_text.py | 245 | ⚪ INFO | TODO comment found |
| src/transformers/models/speech_to_text/modeling_speech_to_text.py | 372 | ⚪ INFO | TODO comment found |
| src/transformers/models/speech_to_text/modeling_speech_to_text.py | 474 | ⚪ INFO | TODO comment found |
| src/transformers/models/swin/modeling_swin.py | 867 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/models/swin/modular_swin.py | 826 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/models/t5gemma/modeling_t5gemma.py | 579 | ⚪ INFO | TODO comment found |
| src/transformers/models/t5gemma/modular_t5gemma.py | 418 | ⚪ INFO | TODO comment found |
| src/transformers/models/table_transformer/modeling_table_transformer.py | 187 | ⚪ INFO | TODO comment found |
| src/transformers/models/table_transformer/modeling_table_transformer.py | 240 | ⚪ INFO | TODO comment found |
| src/transformers/models/table_transformer/modeling_table_transformer.py | 262 | ⚪ INFO | TODO comment found |
| src/transformers/models/table_transformer/modeling_table_transformer.py | 300 | ⚪ INFO | TODO comment found |
| src/transformers/models/table_transformer/modeling_table_transformer.py | 324 | ⚪ INFO | TODO comment found |
| src/transformers/models/table_transformer/modeling_table_transformer.py | 338 | ⚪ INFO | TODO comment found |
| src/transformers/models/table_transformer/modeling_table_transformer.py | 473 | ⚪ INFO | TODO comment found |
| src/transformers/models/table_transformer/modeling_table_transformer.py | 546 | ⚪ INFO | TODO comment found |
| src/transformers/models/table_transformer/modeling_table_transformer.py | 802 | ⚪ INFO | TODO comment found |
| src/transformers/models/table_transformer/modeling_table_transformer.py | 977 | ⚪ INFO | TODO comment found |
| src/transformers/models/table_transformer/modeling_table_transformer.py | 1146 | ⚪ INFO | TODO comment found |
| src/transformers/models/table_transformer/modeling_table_transformer.py | 1280 | ⚪ INFO | TODO comment found |
| src/transformers/models/time_series_transformer/modeling_time_series_transformer.py | 351 | ⚪ INFO | TODO comment found |
| src/transformers/models/time_series_transformer/modeling_time_series_transformer.py | 562 | ⚪ INFO | TODO comment found |
| src/transformers/models/unispeech/convert_unispeech_original_pytorch_checkpoint_to_pytorch.py | 136 | ⚪ INFO | TODO comment found |
| src/transformers/models/unispeech/modeling_unispeech.py | 334 | ⚪ INFO | TODO comment found |
| src/transformers/models/unispeech/modeling_unispeech.py | 1119 | ⚪ INFO | TODO comment found |
| src/transformers/models/unispeech/modular_unispeech.py | 364 | ⚪ INFO | TODO comment found |
| src/transformers/models/unispeech_sat/convert_unispeech_sat_original_pytorch_checkpoint_to_pytorch.py | 126 | ⚪ INFO | TODO comment found |
| src/transformers/models/unispeech_sat/modeling_unispeech_sat.py | 340 | ⚪ INFO | TODO comment found |
| src/transformers/models/unispeech_sat/modeling_unispeech_sat.py | 1132 | ⚪ INFO | TODO comment found |
| src/transformers/models/unispeech_sat/modular_unispeech_sat.py | 383 | ⚪ INFO | TODO comment found |
| src/transformers/models/vibevoice_acoustic_tokenizer/modeling_vibevoice_acoustic_tokenizer.py | 180 | ⚪ INFO | TODO comment found |
| src/transformers/models/vibevoice_acoustic_tokenizer/modular_vibevoice_acoustic_tokenizer.py | 102 | ⚪ INFO | TODO comment found |
| src/transformers/models/vibevoice_asr/modeling_vibevoice_asr.py | 160 | ⚪ INFO | TODO comment found |
| src/transformers/models/videomae/modeling_videomae.py | 83 | ⚪ INFO | TODO comment found |
| src/transformers/models/videomae/modeling_videomae.py | 231 | ⚪ INFO | TODO comment found |
| src/transformers/models/vision_text_dual_encoder/modeling_vision_text_dual_encoder.py | 377 | ⚪ INFO | TODO comment found |
| src/transformers/models/voxtral/configuration_voxtral.py | 66 | ⚪ INFO | TODO comment found |
| src/transformers/models/voxtral/convert_voxtral_weights_to_hf.py | 205 | ⚪ INFO | TODO comment found |
| src/transformers/models/voxtral/modular_voxtral.py | 59 | ⚪ INFO | TODO comment found |
| src/transformers/models/voxtral/processing_voxtral.py | 243 | ⚪ INFO | TODO comment found |
| src/transformers/models/voxtral_realtime/modeling_voxtral_realtime.py | 498 | ⚪ INFO | TODO comment found |
| src/transformers/models/voxtral_realtime/modular_voxtral_realtime.py | 272 | ⚪ INFO | TODO comment found |
| src/transformers/models/wav2vec2/convert_wav2vec2_original_pytorch_checkpoint_to_pytorch.py | 191 | ⚪ INFO | TODO comment found |
| src/transformers/models/wav2vec2/modeling_wav2vec2.py | 506 | ⚪ INFO | TODO comment found |
| src/transformers/models/wav2vec2_conformer/convert_wav2vec2_conformer_original_pytorch_checkpoint_to_pytorch.py | 153 | ⚪ INFO | TODO comment found |
| src/transformers/models/wavlm/convert_wavlm_original_pytorch_checkpoint_to_pytorch.py | 125 | ⚪ INFO | TODO comment found |
| src/transformers/models/whisper/modeling_whisper.py | 291 | ⚪ INFO | TODO comment found |
| src/transformers/models/x_clip/modular_x_clip.py | 279 | ⚪ INFO | TODO comment found |
| src/transformers/models/xlm/tokenization_xlm.py | 413 | ⚪ INFO | TODO comment found |
| src/transformers/models/xlnet/modeling_xlnet.py | 1279 | ⚪ INFO | TODO comment found |
| src/transformers/pipelines/automatic_speech_recognition.py | 339 | ⚪ INFO | TODO comment found |
| src/transformers/pipelines/document_question_answering.py | 207 | ⚪ INFO | TODO comment found |
| src/transformers/pipelines/document_question_answering.py | 513 | ⚪ INFO | TODO comment found |
| src/transformers/pipelines/document_question_answering.py | 514 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/pipelines/document_question_answering.py | 595 | ⚪ INFO | TODO comment found |
| src/transformers/pipelines/mask_generation.py | 217 | ⚪ INFO | TODO comment found |
| src/transformers/processing_utils.py | 131 | ⚪ INFO | TODO comment found |
| src/transformers/quantizers/quantizer_compressed_tensors.py | 78 | ⚪ INFO | TODO comment found |
| src/transformers/quantizers/quantizer_higgs.py | 81 | ⚪ INFO | TODO comment found |
| src/transformers/quantizers/quantizer_hqq.py | 84 | ⚪ INFO | TODO comment found |
| src/transformers/quantizers/quantizer_hqq.py | 152 | ⚪ INFO | TODO comment found |
| src/transformers/testing_utils.py | 3306 | ⚪ INFO | TODO comment found |
| src/transformers/testing_utils.py | 3452 | ⚪ INFO | TODO comment found |
| src/transformers/testing_utils.py | 3462 | ⚪ INFO | TODO comment found |
| src/transformers/testing_utils.py | 3463 | ⚪ INFO | TODO comment found |
| src/transformers/testing_utils.py | 3465 | ⚪ INFO | TODO comment found |
| src/transformers/testing_utils.py | 3487 | ⚪ INFO | TODO comment found |
| src/transformers/testing_utils.py | 3680 | ⚪ INFO | TODO comment found |
| src/transformers/tokenization_utils_base.py | 3429 | ⚪ INFO | TODO comment found |
| src/transformers/tokenization_utils_base.py | 3459 | ⚪ INFO | TODO comment found |
| src/transformers/trainer.py | 1595 | ⚪ INFO | TODO comment found |
| src/transformers/trainer.py | 1620 | ⚪ INFO | TODO comment found |
| src/transformers/trainer.py | 1624 | ⚪ INFO | TODO comment found |
| src/transformers/trainer_seq2seq.py | 332 | ⚪ INFO | TODO comment found |
| src/transformers/trainer_utils.py | 1100 | ⚪ INFO | TODO comment found |
| src/transformers/training_args.py | 1570 | ⚪ INFO | TODO comment found |
| src/transformers/utils/auto_docstring.py | 3321 | ⚪ INFO | TODO comment found |
| src/transformers/utils/quantization_config.py | 1721 | ⚪ INFO | TODO comment found |
| tests/alm_tester.py | 44 | ⚪ INFO | TODO comment found |
| tests/alm_tester.py | 49 | ⚪ INFO | TODO comment found |
| tests/cli/test_download.py | 24 | ⚪ INFO | TODO comment found |
| tests/cli/test_download.py | 44 | ⚪ INFO | TODO comment found |
| tests/generation/test_continuous_batching.py | 774 | 🟡 MEDIUM | FIXME comment indicating known issue |
| tests/generation/test_continuous_batching.py | 775 | ⚪ INFO | TODO comment found |
| tests/generation/test_paged_attention.py | 21 | 🟡 MEDIUM | FIXME comment indicating known issue |
| tests/generation/test_paged_attention.py | 27 | ⚪ INFO | TODO comment found |
| tests/generation/test_utils.py | 1216 | ⚪ INFO | TODO comment found |
| tests/generation/test_utils.py | 1444 | ⚪ INFO | TODO comment found |
| tests/generation/test_utils.py | 1668 | ⚪ INFO | TODO comment found |
| tests/generation/test_utils.py | 3953 | ⚪ INFO | TODO comment found |
| tests/models/altclip/test_modeling_altclip.py | 409 | ⚪ INFO | TODO comment found |
| tests/models/audio_spectrogram_transformer/test_modeling_audio_spectrogram_transformer.py | 166 | ⚪ INFO | TODO comment found |
| tests/models/audioflamingo3/test_modeling_audioflamingo3.py | 79 | ⚪ INFO | TODO comment found |
| tests/models/auto/test_tokenization_auto.py | 849 | ⚪ INFO | TODO comment found |
| tests/models/auto/test_tokenization_auto.py | 872 | ⚪ INFO | TODO comment found |
| tests/models/autoformer/test_modeling_autoformer.py | 219 | ⚪ INFO | TODO comment found |
| tests/models/aya_vision/test_modeling_aya_vision.py | 204 | ⚪ INFO | TODO comment found |
| tests/models/bamba/test_modeling_bamba.py | 385 | ⚪ INFO | TODO comment found |
| tests/models/bamba/test_modeling_bamba.py | 534 | ⚪ INFO | TODO comment found |
| tests/models/bamba/test_modeling_bamba.py | 589 | ⚪ INFO | TODO comment found |
| tests/models/bigbird_pegasus/test_modeling_bigbird_pegasus.py | 265 | ⚪ INFO | TODO comment found |
| tests/models/blenderbot_small/test_modeling_blenderbot_small.py | 218 | ⚪ INFO | TODO comment found |
| tests/models/blip_2/test_modeling_blip_2.py | 830 | ⚪ INFO | TODO comment found |
| tests/models/clvp/test_tokenization_clvp.py | 243 | ⚪ INFO | TODO comment found |
| tests/models/cohere_asr/test_modeling_cohere_asr.py | 291 | ⚪ INFO | TODO comment found |
| tests/models/conditional_detr/test_modeling_conditional_detr.py | 237 | ⚪ INFO | TODO comment found |
| tests/models/csm/test_modeling_csm.py | 324 | ⚪ INFO | TODO comment found |
| tests/models/ctrl/test_modeling_ctrl.py | 194 | ⚪ INFO | TODO comment found |
| tests/models/dab_detr/test_modeling_dab_detr.py | 268 | ⚪ INFO | TODO comment found |
| tests/models/data2vec/test_modeling_data2vec_vision.py | 278 | ⚪ INFO | TODO comment found |
| tests/models/deimv2/test_modeling_deimv2.py | 57 | ⚪ INFO | TODO comment found |
| tests/models/detr/test_modeling_detr.py | 244 | ⚪ INFO | TODO comment found |
| tests/models/dia/test_modeling_dia.py | 219 | ⚪ INFO | TODO comment found |
| tests/models/distilbert/test_tokenization_distilbert.py | 23 | ⚪ INFO | TODO comment found |
| tests/models/ernie4_5_vl_moe/test_modeling_ernie4_5_vl_moe.py | 310 | ⚪ INFO | TODO comment found |
| tests/models/falcon_h1/test_modeling_falcon_h1.py | 362 | ⚪ INFO | TODO comment found |
| tests/models/flaubert/test_modeling_flaubert.py | 391 | ⚪ INFO | TODO comment found |
| tests/models/flaubert/test_modeling_flaubert.py | 409 | ⚪ INFO | TODO comment found |
| tests/models/fnet/test_modeling_fnet.py | 259 | ⚪ INFO | TODO comment found |
| tests/models/fuyu/test_modeling_fuyu.py | 210 | ⚪ INFO | TODO comment found |
| tests/models/fuyu/test_modeling_fuyu.py | 215 | ⚪ INFO | TODO comment found |
| tests/models/fuyu/test_modeling_fuyu.py | 220 | ⚪ INFO | TODO comment found |
| tests/models/gemma2/test_modeling_gemma2.py | 141 | ⚪ INFO | TODO comment found |
| tests/models/gemma3/test_modeling_gemma3.py | 301 | ⚪ INFO | TODO comment found |
| tests/models/gemma3/test_modeling_gemma3.py | 730 | ⚪ INFO | TODO comment found |
| tests/models/gemma3n/test_modeling_gemma3n.py | 444 | ⚪ INFO | TODO comment found |
| tests/models/gemma3n/test_modeling_gemma3n.py | 503 | ⚪ INFO | TODO comment found |
| tests/models/gemma3n/test_modeling_gemma3n.py | 796 | ⚪ INFO | TODO comment found |
| tests/models/gemma3n/test_modeling_gemma3n.py | 1223 | 🟡 MEDIUM | FIXME comment indicating known issue |
| tests/models/gemma3n/test_processing_gemma3n.py | 29 | ⚪ INFO | TODO comment found |
| tests/models/glpn/test_modeling_glpn.py | 295 | ⚪ INFO | TODO comment found |
| tests/models/gpt2/test_tokenization_gpt2.py | 46 | ⚪ INFO | TODO comment found |
| tests/models/gpt_bigcode/test_modeling_gpt_bigcode.py | 378 | ⚪ INFO | TODO comment found |
| tests/models/gptj/test_modeling_gptj.py | 344 | ⚪ INFO | TODO comment found |
| tests/models/gptj/test_modeling_gptj.py | 362 | ⚪ INFO | TODO comment found |
| tests/models/granitemoehybrid/test_modeling_granitemoehybrid.py | 200 | ⚪ INFO | TODO comment found |
| tests/models/higgs_audio_v2/test_modeling_higgs_audio_v2.py | 159 | ⚪ INFO | TODO comment found |
| tests/models/higgs_audio_v2_tokenizer/test_modeling_higgs_audio_v2_tokenizer.py | 429 | ⚪ INFO | TODO comment found |
| tests/models/hubert/test_modeling_hubert.py | 675 | ⚪ INFO | TODO comment found |
| tests/models/hubert/test_modeling_hubert.py | 703 | ⚪ INFO | TODO comment found |
| tests/models/hubert/test_modeling_hubert.py | 725 | ⚪ INFO | TODO comment found |
| tests/models/hubert/test_modeling_hubert.py | 732 | ⚪ INFO | TODO comment found |
| tests/models/kosmos2/test_modeling_kosmos2.py | 276 | ⚪ INFO | TODO comment found |
| tests/models/kosmos2_5/test_image_processing_kosmos2_5.py | 105 | ⚪ INFO | TODO comment found |
| tests/models/kosmos2_5/test_image_processing_kosmos2_5.py | 129 | ⚪ INFO | TODO comment found |
| tests/models/kosmos2_5/test_image_processing_kosmos2_5.py | 158 | ⚪ INFO | TODO comment found |
| tests/models/kosmos2_5/test_image_processing_kosmos2_5.py | 346 | ⚪ INFO | TODO comment found |
| tests/models/kosmos2_5/test_modeling_kosmos2_5.py | 466 | ⚪ INFO | TODO comment found |
| tests/models/kosmos2_5/test_modeling_kosmos2_5.py | 473 | ⚪ INFO | TODO comment found |
| tests/models/kosmos2_5/test_modeling_kosmos2_5.py | 478 | ⚪ INFO | TODO comment found |
| tests/models/kyutai_speech_to_text/test_modeling_kyutai_speech_to_text.py | 338 | ⚪ INFO | TODO comment found |
| tests/models/lasr/test_modeling_lasr.py | 399 | ⚪ INFO | TODO comment found |
| tests/models/layoutlmv3/test_modeling_layoutlmv3.py | 291 | ⚪ INFO | TODO comment found |
| tests/models/led/test_modeling_led.py | 280 | ⚪ INFO | TODO comment found |
| tests/models/lightglue/test_modeling_lightglue.py | 149 | ⚪ INFO | TODO comment found |
| tests/models/lilt/test_modeling_lilt.py | 243 | ⚪ INFO | TODO comment found |
| tests/models/llava_onevision/test_modeling_llava_onevision.py | 210 | ⚪ INFO | TODO comment found |
| tests/models/longcat_flash/test_modeling_longcat_flash.py | 284 | ⚪ INFO | TODO comment found |
| tests/models/longformer/test_modeling_longformer.py | 335 | ⚪ INFO | TODO comment found |
| tests/models/longformer/test_modeling_longformer.py | 353 | ⚪ INFO | TODO comment found |
| tests/models/luke/test_modeling_luke.py | 620 | ⚪ INFO | TODO comment found |
| tests/models/markuplm/test_modeling_markuplm.py | 300 | ⚪ INFO | TODO comment found |
| tests/models/mbart/test_modeling_mbart.py | 233 | ⚪ INFO | TODO comment found |
| tests/models/ministral/test_modeling_ministral.py | 156 | ⚪ INFO | TODO comment found |
| tests/models/mistral3/test_modeling_mistral3.py | 188 | ⚪ INFO | TODO comment found |
| tests/models/mixtral/test_modeling_mixtral.py | 123 | ⚪ INFO | TODO comment found |
| tests/models/mixtral/test_modeling_mixtral.py | 158 | ⚪ INFO | TODO comment found |
| tests/models/mluke/test_tokenization_mluke.py | 29 | ⚪ INFO | TODO comment found |
| tests/models/moshi/test_tokenization_moshi.py | 299 | ⚪ INFO | TODO comment found |
| tests/models/moshi/test_tokenization_moshi.py | 303 | ⚪ INFO | TODO comment found |
| tests/models/moshi/test_tokenization_moshi.py | 373 | ⚪ INFO | TODO comment found |
| tests/models/mpt/test_modeling_mpt.py | 551 | ⚪ INFO | TODO comment found |
| tests/models/mvp/test_modeling_mvp.py | 393 | ⚪ INFO | TODO comment found |
| tests/models/mvp/test_modeling_mvp.py | 411 | ⚪ INFO | TODO comment found |
| tests/models/nanochat/test_modeling_nanochat.py | 149 | ⚪ INFO | TODO comment found |
| tests/models/nanochat/test_modeling_nanochat.py | 187 | ⚪ INFO | TODO comment found |
| tests/models/nllb_moe/test_modeling_nllb_moe.py | 245 | ⚪ INFO | TODO comment found |
| tests/models/nomic_bert/test_modeling_nomic_bert.py | 286 | ⚪ INFO | TODO comment found |
| tests/models/nomic_bert/test_modeling_nomic_bert.py | 325 | ⚪ INFO | TODO comment found |
| tests/models/oneformer/test_modeling_oneformer.py | 241 | ⚪ INFO | TODO comment found |
| tests/models/openai/test_modeling_openai.py | 201 | ⚪ INFO | TODO comment found |
| tests/models/opt/test_modeling_opt.py | 220 | ⚪ INFO | TODO comment found |
| tests/models/opt/test_modeling_opt.py | 238 | ⚪ INFO | TODO comment found |
| tests/models/patchtsmixer/test_modeling_patchtsmixer.py | 448 | ⚪ INFO | TODO comment found |
| tests/models/pe_audio/test_modeling_pe_audio.py | 194 | ⚪ INFO | TODO comment found |
| tests/models/pe_audio/test_modeling_pe_audio.py | 264 | ⚪ INFO | TODO comment found |
| tests/models/pe_audio/test_modeling_pe_audio.py | 282 | ⚪ INFO | TODO comment found |
| tests/models/pe_audio/test_modeling_pe_audio.py | 380 | ⚪ INFO | TODO comment found |
| tests/models/pe_video/test_modeling_pe_video.py | 292 | ⚪ INFO | TODO comment found |
| tests/models/pe_video/test_modeling_pe_video.py | 310 | ⚪ INFO | TODO comment found |
| tests/models/pe_video/test_modeling_pe_video.py | 377 | ⚪ INFO | TODO comment found |
| tests/models/prophetnet/test_modeling_prophetnet.py | 820 | ⚪ INFO | TODO comment found |
| tests/models/qwen2_5_vl/test_modeling_qwen2_5_vl.py | 713 | 🟡 MEDIUM | FIXME comment indicating known issue |
| tests/models/qwen3_vl/test_modeling_qwen3_vl.py | 385 | ⚪ INFO | TODO comment found |
| tests/models/qwen3_vl_moe/test_modeling_qwen3_vl_moe.py | 330 | ⚪ INFO | TODO comment found |
| tests/models/reformer/test_modeling_reformer.py | 753 | ⚪ INFO | TODO comment found |
| tests/models/reformer/test_modeling_reformer.py | 773 | ⚪ INFO | TODO comment found |
| tests/models/roc_bert/test_modeling_roc_bert.py | 560 | ⚪ INFO | TODO comment found |
| tests/models/rt_detr/test_modeling_rt_detr.py | 56 | ⚪ INFO | TODO comment found |
| tests/models/sam/test_modeling_sam.py | 497 | ⚪ INFO | TODO comment found |
| tests/models/sam_hq/test_modeling_sam_hq.py | 534 | ⚪ INFO | TODO comment found |
| tests/models/seamless_m4t/test_tokenization_seamless_m4t.py | 148 | ⚪ INFO | TODO comment found |
| tests/models/seamless_m4t_v2/test_modeling_seamless_m4t_v2.py | 543 | ⚪ INFO | TODO comment found |
| tests/models/siglip/test_modeling_siglip.py | 180 | ⚪ INFO | TODO comment found |
| tests/models/siglip/test_modeling_siglip.py | 451 | ⚪ INFO | TODO comment found |
| tests/models/siglip/test_modeling_siglip.py | 562 | ⚪ INFO | TODO comment found |
| tests/models/siglip2/test_modeling_siglip2.py | 274 | ⚪ INFO | TODO comment found |
| tests/models/siglip2/test_modeling_siglip2.py | 531 | ⚪ INFO | TODO comment found |
| tests/models/siglip2/test_modeling_siglip2.py | 647 | ⚪ INFO | TODO comment found |
| tests/models/splinter/test_modeling_splinter.py | 221 | ⚪ INFO | TODO comment found |
| tests/models/swin/test_modeling_swin.py | 279 | ⚪ INFO | TODO comment found |
| tests/models/swin2sr/test_modeling_swin2sr.py | 188 | ⚪ INFO | TODO comment found |
| tests/models/swinv2/test_modeling_swinv2.py | 248 | ⚪ INFO | TODO comment found |
| tests/models/t5gemma/test_modeling_t5gemma.py | 1227 | ⚪ INFO | TODO comment found |
| tests/models/t5gemma/test_modeling_t5gemma.py | 1543 | ⚪ INFO | TODO comment found |
| tests/models/tapas/test_modeling_tapas.py | 488 | ⚪ INFO | TODO comment found |
| tests/models/tvp/test_modeling_tvp.py | 179 | ⚪ INFO | TODO comment found |
| tests/models/video_llama_3/test_modeling_video_llama_3.py | 151 | ⚪ INFO | TODO comment found |
| tests/models/video_llama_3/test_modeling_video_llama_3.py | 164 | ⚪ INFO | TODO comment found |
| tests/models/video_llama_3/test_modeling_video_llama_3.py | 213 | ⚪ INFO | TODO comment found |
| tests/models/video_llama_3/test_modeling_video_llama_3.py | 229 | ⚪ INFO | TODO comment found |
| tests/models/vitdet/test_modeling_vitdet.py | 173 | ⚪ INFO | TODO comment found |
| tests/models/vitdet/test_modeling_vitdet.py | 178 | ⚪ INFO | TODO comment found |
| tests/models/vitdet/test_modeling_vitdet.py | 187 | ⚪ INFO | TODO comment found |
| tests/models/vits/test_modeling_vits.py | 175 | ⚪ INFO | TODO comment found |
| tests/models/wav2vec2/test_processing_wav2vec2.py | 60 | ⚪ INFO | TODO comment found |
| tests/models/whisper/test_modeling_whisper.py | 369 | ⚪ INFO | TODO comment found |
| tests/models/xlm/test_modeling_xlm.py | 405 | ⚪ INFO | TODO comment found |
| tests/models/xlm/test_modeling_xlm.py | 423 | ⚪ INFO | TODO comment found |
| tests/models/xlm_roberta_xl/test_modeling_xlm_roberta_xl.py | 387 | ⚪ INFO | TODO comment found |
| tests/models/xlnet/test_modeling_xlnet.py | 534 | ⚪ INFO | TODO comment found |
| tests/models/xmod/test_modeling_xmod.py | 384 | ⚪ INFO | TODO comment found |
| tests/peft_integration/test_peft_integration.py | 65 | ⚪ INFO | TODO comment found |
| tests/pipelines/test_pipelines_document_question_answering.py | 193 | ⚪ INFO | TODO comment found |
| tests/pipelines/test_pipelines_video_classification.py | 70 | ⚪ INFO | TODO comment found |
| tests/sagemaker/scripts/pytorch/run_glue_model_parallelism.py | 393 | ⚪ INFO | TODO comment found |
| tests/test_configuration_common.py | 189 | ⚪ INFO | TODO comment found |
| tests/test_modeling_common.py | 256 | ⚪ INFO | TODO comment found |
| tests/test_modeling_common.py | 272 | ⚪ INFO | TODO comment found |
| tests/test_modeling_common.py | 293 | ⚪ INFO | TODO comment found |
| tests/test_modeling_common.py | 384 | ⚪ INFO | TODO comment found |
| tests/test_modeling_common.py | 423 | ⚪ INFO | TODO comment found |
| tests/test_modeling_common.py | 458 | ⚪ INFO | TODO comment found |
| tests/test_modeling_common.py | 809 | ⚪ INFO | TODO comment found |
| tests/test_modeling_common.py | 1238 | ⚪ INFO | TODO comment found |
| tests/test_modeling_common.py | 3918 | ⚪ INFO | TODO comment found |
| tests/test_modeling_common.py | 4016 | ⚪ INFO | TODO comment found |
| tests/test_modeling_common.py | 4027 | ⚪ INFO | TODO comment found |
| tests/test_pipeline_mixin.py | 373 | ⚪ INFO | TODO comment found |
| tests/test_pipeline_mixin.py | 412 | ⚪ INFO | TODO comment found |
| tests/test_pipeline_mixin.py | 783 | ⚪ INFO | TODO comment found |
| tests/test_pipeline_mixin.py | 789 | ⚪ INFO | TODO comment found |
| tests/test_processing_common.py | 1489 | ⚪ INFO | TODO comment found |
| tests/test_tokenization_common.py | 612 | ⚪ INFO | TODO comment found |
| tests/test_tokenization_mistral_common.py | 85 | ⚪ INFO | TODO comment found |
| tests/trainer/distributed/test_trainer_distributed_deepspeed.py | 767 | ⚪ INFO | TODO comment found |
| tests/trainer/test_trainer_checkpointing.py | 2123 | ⚪ INFO | TODO comment found |
| tests/trainer/trainer_test_utils.py | 499 | ⚪ INFO | TODO comment found |
| tests/utils/test_cache_utils.py | 61 | 🟡 MEDIUM | FIXME comment indicating known issue |
| tests/utils/test_hub_utils.py | 102 | ⚪ INFO | TODO comment found |
| tests/utils/test_model_output.py | 158 | ⚪ INFO | TODO comment found |
| tests/utils/test_modeling_utils.py | 339 | ⚪ INFO | TODO comment found |
| tests/utils/test_modeling_utils.py | 356 | ⚪ INFO | TODO comment found |
| tests/utils/test_modeling_utils.py | 983 | ⚪ INFO | TODO comment found |
| tests/utils/test_modeling_utils.py | 997 | ⚪ INFO | TODO comment found |
| tests/utils/test_modeling_utils.py | 1013 | ⚪ INFO | TODO comment found |
| tests/utils/test_modeling_utils.py | 1026 | ⚪ INFO | TODO comment found |
| tests/utils/test_modeling_utils.py | 1039 | ⚪ INFO | TODO comment found |
| tests/utils/test_modeling_utils.py | 1301 | ⚪ INFO | TODO comment found |
| tests/utils/test_modeling_utils.py | 1316 | ⚪ INFO | TODO comment found |
| tests/utils/test_video_utils.py | 276 | 🟡 MEDIUM | FIXME comment indicating known issue |
| utils/check_bad_commit.py | 192 | ⚪ INFO | TODO comment found |
| utils/check_bad_commit.py | 380 | ⚪ INFO | TODO comment found |
| utils/check_model_tester.py | 32 | ⚪ INFO | TODO comment found |
| utils/check_repo.py | 253 | ⚪ INFO | TODO comment found |
| utils/check_repo.py | 254 | ⚪ INFO | TODO comment found |
| utils/check_repo.py | 255 | ⚪ INFO | TODO comment found |
| utils/check_repo.py | 256 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 204 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 263 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 403 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 440 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 495 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 513 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 517 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 524 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 529 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 539 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 590 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 608 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 630 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 633 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 634 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 635 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 663 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 664 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 665 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 676 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 677 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 679 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 680 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 709 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 711 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 770 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 862 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 863 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 882 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 1071 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 1320 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 1397 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 1401 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 1437 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 1497 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 1503 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 1504 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 1514 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 1556 | ⚪ INFO | TODO comment found |
| utils/create_dummy_models.py | 1709 | ⚪ INFO | TODO comment found |
| utils/fetch_hub_objects_for_ci.py | 44 | ⚪ INFO | TODO comment found |
| utils/fetch_hub_objects_for_ci.py | 372 | ⚪ INFO | TODO comment found |
| utils/get_pr_run_slow_jobs.py | 40 | ⚪ INFO | TODO comment found |
| utils/notification_service.py | 642 | ⚪ INFO | TODO comment found |
| utils/notification_service.py | 769 | ⚪ INFO | TODO comment found |
| utils/notification_service.py | 1270 | ⚪ INFO | TODO comment found |
| utils/notification_service.py | 1551 | ⚪ INFO | TODO comment found |
| utils/process_bad_commit_report.py | 79 | ⚪ INFO | TODO comment found |

## Detailed Findings

### MAINTENANCE

**Total:** 588 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| benchmark_v2/framework/benchmark_config.py | 109 | 🟡 MEDIUM | FIXME comment indicating known issue |
| benchmark_v2/framework/benchmark_config.py | 120 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/generation/continuous_batching/cache.py | 513 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/generation/continuous_batching/continuous_api.py | 493 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/generation/continuous_batching/scheduler.py | 378 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/generation/utils.py | 2361 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/modeling_gguf_pytorch_utils.py | 614 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/models/bamba/convert_mamba_ssm_checkpoint.py | 219 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/models/ernie4_5_vl_moe/video_processing_ernie4_5_vl_moe.py | 367 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/transformers/models/gemma4/processing_gemma4.py | 83 | 🟡 MEDIUM | FIXME comment indicating known issue |

*... and 578 more*

### CODE_QUALITY

**Total:** 2267 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .circleci/create_circleci_config.py | 117 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 123 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 136 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 141 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 144 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 410 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 446 | 🟢 LOW | Debug print statement found |
| .circleci/create_circleci_config.py | 451 | 🟢 LOW | Debug print statement found |
| .circleci/parse_test_outputs.py | 16 | 🟢 LOW | Debug print statement found |
| .circleci/parse_test_outputs.py | 17 | 🟢 LOW | Debug print statement found |

*... and 2257 more*

### SECURITY

**Total:** 7 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| tests/pipelines/test_pipelines_depth_estimation.py | 50 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tests/pipelines/test_pipelines_image_segmentation.py | 62 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tests/pipelines/test_pipelines_mask_generation.py | 54 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| utils/checkers.py | 291 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| utils/checkers.py | 292 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| utils/checkers.py | 415 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| utils/checkers.py | 419 | 🟡 MEDIUM | Weak cryptographic algorithm detected |

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 100/100 (Tier A)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -0 | Good ✅ |
| Code Quality | -2402 | Needs improvement ⚠️ |
| Test Coverage | +2 | Good |
| Documentation | +1 | Needs improvement ❌ |

## Recommendations

1. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 22.7%. Aim for at least 70% coverage.

2. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

