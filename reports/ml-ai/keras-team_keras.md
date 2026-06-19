# Repository Analysis Report: keras-team/keras

**Generated:** 2026-06-19 09:04:52 CDT

**Quality Score:** 100/100 (Tier A)

## Executive Summary

- **Overall Quality:** A (100/100)
- **Total Findings:** 438
- **Critical Issues:** 0
- **High Issues:** 0
- **Medium Issues:** 8
- **Low Issues:** 322
- **Files Scanned:** 1045

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 322 | Medium |
| maintenance | 108 | Medium |
| security | 8 | Medium |

## Repository Overview

- **Owner:** keras-team
- **Name:** keras
- **Description:** Deep Learning for humans
- **Primary Language:** Python
- **Stars:** 64094
- **Forks:** 19737
- **Open Issues:** 192
- **Size:** 53932 KB
- **Created:** 2015-03-28
- **Last Updated:** 2026-06-19
- **Default Branch:** master

**Topics:** data-science, deep-learning, jax, machine-learning, neural-networks, python, pytorch, tensorflow

## Security Analysis

⚠️ **Found 8 security-related findings.**

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 30.9% | Poor ❌ |
| Documentation | 0.1% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (322)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/workflows/scripts/auto-assignment.js | 39 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/scripts/auto-assignment.js | 40 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/scripts/auto-assignment.js | 42 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/scripts/auto-assignment.js | 49 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/scripts/labeler.js | 32 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/scripts/labeler.js | 36 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/scripts/labeler.js | 41 | 🟢 LOW | Debug console.log statement found |
| benchmarks/layer_benchmark/base_benchmark.py | 214 | 🟢 LOW | Debug print statement found |
| benchmarks/layer_benchmark/base_benchmark.py | 218 | 🟢 LOW | Debug print statement found |
| benchmarks/layer_benchmark/base_benchmark.py | 273 | 🟢 LOW | Debug print statement found |
| benchmarks/layer_benchmark/base_benchmark.py | 277 | 🟢 LOW | Debug print statement found |
| benchmarks/torch_ctl_benchmark/benchmark_utils.py | 36 | 🟢 LOW | Debug print statement found |
| examples/demo_custom_jax_workflow.py | 112 | 🟢 LOW | Debug print statement found |
| examples/demo_custom_layer_backend_agnostic.py | 86 | 🟢 LOW | Debug print statement found |
| examples/demo_custom_layer_backend_agnostic.py | 87 | 🟢 LOW | Debug print statement found |
| examples/demo_custom_tf_workflow.py | 84 | 🟢 LOW | Debug print statement found |
| examples/demo_custom_torch_workflow.py | 30 | 🟢 LOW | Debug print statement found |
| examples/demo_custom_torch_workflow.py | 31 | 🟢 LOW | Debug print statement found |
| examples/demo_custom_torch_workflow.py | 32 | 🟢 LOW | Debug print statement found |
| examples/demo_custom_torch_workflow.py | 76 | 🟢 LOW | Debug print statement found |
| examples/demo_functional.py | 46 | 🟢 LOW | Debug print statement found |
| examples/demo_functional.py | 50 | 🟢 LOW | Debug print statement found |
| examples/demo_functional.py | 51 | 🟢 LOW | Debug print statement found |
| examples/demo_functional.py | 53 | 🟢 LOW | Debug print statement found |
| examples/demo_functional.py | 55 | 🟢 LOW | Debug print statement found |
| examples/demo_functional.py | 57 | 🟢 LOW | Debug print statement found |
| examples/demo_functional.py | 59 | 🟢 LOW | Debug print statement found |
| examples/demo_jax_distributed.py | 112 | 🟢 LOW | Debug print statement found |
| examples/demo_jax_distributed.py | 146 | 🟢 LOW | Debug print statement found |
| examples/demo_jax_distributed.py | 208 | 🟢 LOW | Debug print statement found |
| examples/demo_jax_distributed.py | 219 | 🟢 LOW | Debug print statement found |
| examples/demo_jax_distributed.py | 239 | 🟢 LOW | Debug print statement found |
| examples/demo_jax_distributed.py | 287 | 🟢 LOW | Debug print statement found |
| examples/demo_jax_distributed.py | 297 | 🟢 LOW | Debug print statement found |
| examples/demo_jax_distributed.py | 316 | 🟢 LOW | Debug print statement found |
| examples/demo_jax_distributed.py | 340 | 🟢 LOW | Debug print statement found |
| examples/demo_jax_distributed.py | 342 | 🟢 LOW | Debug print statement found |
| examples/demo_mnist_convnet.py | 19 | 🟢 LOW | Debug print statement found |
| examples/demo_mnist_convnet.py | 20 | 🟢 LOW | Debug print statement found |
| examples/demo_mnist_convnet.py | 21 | 🟢 LOW | Debug print statement found |
| examples/demo_mnist_convnet.py | 55 | 🟢 LOW | Debug print statement found |
| examples/demo_mnist_convnet.py | 56 | 🟢 LOW | Debug print statement found |
| examples/demo_subclass.py | 39 | 🟢 LOW | Debug print statement found |
| examples/demo_subclass.py | 40 | 🟢 LOW | Debug print statement found |
| examples/demo_torch_multi_gpu.py | 38 | 🟢 LOW | Debug print statement found |
| examples/demo_torch_multi_gpu.py | 39 | 🟢 LOW | Debug print statement found |
| examples/demo_torch_multi_gpu.py | 40 | 🟢 LOW | Debug print statement found |
| examples/demo_torch_multi_gpu.py | 106 | 🟢 LOW | Debug print statement found |
| examples/demo_torch_multi_gpu.py | 206 | 🟢 LOW | Debug print statement found |
| guides/distributed_training_with_jax.py | 102 | 🟢 LOW | Debug print statement found |
| guides/distributed_training_with_jax.py | 103 | 🟢 LOW | Debug print statement found |
| guides/distributed_training_with_jax.py | 104 | 🟢 LOW | Debug print statement found |
| guides/distributed_training_with_jax.py | 232 | 🟢 LOW | Debug print statement found |
| guides/distributed_training_with_jax.py | 247 | 🟢 LOW | Debug print statement found |
| guides/distributed_training_with_jax.py | 260 | 🟢 LOW | Debug print statement found |
| guides/distributed_training_with_tensorflow.py | 96 | 🟢 LOW | Debug print statement found |
| guides/distributed_training_with_tensorflow.py | 160 | 🟢 LOW | Debug print statement found |
| guides/distributed_training_with_tensorflow.py | 202 | 🟢 LOW | Debug print statement found |
| guides/distributed_training_with_tensorflow.py | 204 | 🟢 LOW | Debug print statement found |
| guides/distributed_training_with_torch.py | 97 | 🟢 LOW | Debug print statement found |
| guides/distributed_training_with_torch.py | 133 | 🟢 LOW | Debug print statement found |
| guides/distributed_training_with_torch.py | 190 | 🟢 LOW | Debug print statement found |
| guides/functional_api.py | 165 | 🟢 LOW | Debug print statement found |
| guides/functional_api.py | 166 | 🟢 LOW | Debug print statement found |
| guides/functional_api.py | 815 | 🟢 LOW | Debug print statement found |
| guides/making_new_layers_and_models_via_subclassing.py | 73 | 🟢 LOW | Debug print statement found |
| guides/making_new_layers_and_models_via_subclassing.py | 108 | 🟢 LOW | Debug print statement found |
| guides/making_new_layers_and_models_via_subclassing.py | 110 | 🟢 LOW | Debug print statement found |
| guides/making_new_layers_and_models_via_subclassing.py | 116 | 🟢 LOW | Debug print statement found |
| guides/making_new_layers_and_models_via_subclassing.py | 117 | 🟢 LOW | Debug print statement found |
| guides/making_new_layers_and_models_via_subclassing.py | 120 | 🟢 LOW | Debug print statement found |
| guides/making_new_layers_and_models_via_subclassing.py | 221 | 🟢 LOW | Debug print statement found |
| guides/making_new_layers_and_models_via_subclassing.py | 222 | 🟢 LOW | Debug print statement found |
| guides/making_new_layers_and_models_via_subclassing.py | 352 | 🟢 LOW | Debug print statement found |
| guides/making_new_layers_and_models_via_subclassing.py | 409 | 🟢 LOW | Debug print statement found |
| guides/making_new_layers_and_models_via_subclassing.py | 446 | 🟢 LOW | Debug print statement found |
| guides/sequential_model.py | 99 | 🟢 LOW | Debug print statement found |
| guides/sequential_model.py | 158 | 🟢 LOW | Debug print statement found |
| guides/training_with_built_in_methods.py | 116 | 🟢 LOW | Debug print statement found |
| guides/training_with_built_in_methods.py | 140 | 🟢 LOW | Debug print statement found |
| guides/training_with_built_in_methods.py | 142 | 🟢 LOW | Debug print statement found |
| guides/training_with_built_in_methods.py | 146 | 🟢 LOW | Debug print statement found |
| guides/training_with_built_in_methods.py | 148 | 🟢 LOW | Debug print statement found |
| guides/training_with_built_in_methods.py | 502 | 🟢 LOW | Debug print statement found |
| guides/training_with_built_in_methods.py | 769 | 🟢 LOW | Debug print statement found |
| guides/training_with_built_in_methods.py | 797 | 🟢 LOW | Debug print statement found |
| guides/training_with_built_in_methods.py | 1141 | 🟢 LOW | Debug print statement found |
| guides/training_with_built_in_methods.py | 1143 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 76 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 77 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 78 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 94 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 95 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 96 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 112 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 113 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 114 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 358 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 359 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 360 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 517 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 548 | 🟢 LOW | Debug print statement found |
| guides/transfer_learning.py | 556 | 🟢 LOW | Debug print statement found |
| guides/understanding_masking_and_padding.py | 80 | 🟢 LOW | Debug print statement found |
| guides/understanding_masking_and_padding.py | 108 | 🟢 LOW | Debug print statement found |
| guides/understanding_masking_and_padding.py | 119 | 🟢 LOW | Debug print statement found |
| guides/understanding_masking_and_padding.py | 234 | 🟢 LOW | Debug print statement found |
| guides/understanding_masking_and_padding.py | 235 | 🟢 LOW | Debug print statement found |
| guides/understanding_masking_and_padding.py | 274 | 🟢 LOW | Debug print statement found |
| guides/understanding_masking_and_padding.py | 319 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_jax.py | 293 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_jax.py | 294 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_jax.py | 436 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_jax.py | 442 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_jax.py | 443 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_jax.py | 460 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_jax.py | 466 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_jax.py | 467 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 110 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 138 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 141 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 179 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 195 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 198 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 202 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 214 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 215 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 262 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 271 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 274 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 278 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 289 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 290 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 506 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 515 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_tensorflow.py | 516 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 151 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 154 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 179 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 200 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 203 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 240 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 264 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 267 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 271 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 283 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 337 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 363 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 366 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 370 | 🟢 LOW | Debug print statement found |
| guides/writing_a_custom_training_loop_in_torch.py | 382 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 130 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 134 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 138 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 144 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 148 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 152 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 156 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 160 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 164 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 172 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 178 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 186 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 194 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 202 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 240 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 247 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 254 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 350 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 355 | 🟢 LOW | Debug print statement found |
| guides/writing_your_own_callbacks.py | 400 | 🟢 LOW | Debug print statement found |
| integration_tests/import_test.py | 28 | 🟢 LOW | Debug print statement found |
| integration_tests/import_test.py | 34 | 🟢 LOW | Debug print statement found |
| integration_tests/import_test.py | 35 | 🟢 LOW | Debug print statement found |
| integration_tests/import_test.py | 106 | 🟢 LOW | Debug print statement found |
| integration_tests/import_test.py | 112 | 🟢 LOW | Debug print statement found |
| integration_tests/jax_custom_fit_test.py | 99 | 🟢 LOW | Debug print statement found |
| integration_tests/jax_custom_fit_test.py | 100 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 79 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 85 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 86 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 87 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 114 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 118 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 119 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 121 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 124 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 125 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 127 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 131 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 132 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 134 | 🟢 LOW | Debug print statement found |
| integration_tests/numerical_test.py | 138 | 🟢 LOW | Debug print statement found |
| integration_tests/tf_custom_fit_test.py | 45 | 🟢 LOW | Debug print statement found |
| integration_tests/tf_custom_fit_test.py | 46 | 🟢 LOW | Debug print statement found |
| integration_tests/tf_distribute_training_test.py | 62 | 🟢 LOW | Debug print statement found |
| integration_tests/tf_distribute_training_test.py | 63 | 🟢 LOW | Debug print statement found |
| integration_tests/tf_distribute_training_test.py | 71 | 🟢 LOW | Debug print statement found |
| integration_tests/tf_distribute_training_test.py | 72 | 🟢 LOW | Debug print statement found |
| integration_tests/torch_custom_fit_test.py | 47 | 🟢 LOW | Debug print statement found |
| integration_tests/torch_custom_fit_test.py | 48 | 🟢 LOW | Debug print statement found |
| keras/src/backend/common/global_state.py | 66 | 🟢 LOW | Debug print statement found |
| keras/src/backend/common/global_state.py | 70 | 🟢 LOW | Debug print statement found |
| keras/src/backend/common/stateless_scope.py | 31 | 🟢 LOW | Debug print statement found |
| keras/src/backend/tensorflow/nn.py | 1318 | 🟢 LOW | Debug print statement found |
| keras/src/backend/tensorflow/nn.py | 1325 | 🟢 LOW | Debug print statement found |
| keras/src/backend/tensorflow/nn.py | 1331 | 🟢 LOW | Debug print statement found |
| keras/src/backend/tensorflow/nn.py | 1334 | 🟢 LOW | Debug print statement found |
| keras/src/callbacks/history.py | 19 | 🟢 LOW | Debug print statement found |
| keras/src/callbacks/history.py | 22 | 🟢 LOW | Debug print statement found |
| keras/src/callbacks/lambda_callback.py | 39 | 🟢 LOW | Debug print statement found |
| keras/src/distribution/distribution_lib.py | 699 | 🟢 LOW | Debug print statement found |
| keras/src/dtype_policies/dtype_policy_map.py | 83 | 🟢 LOW | Debug print statement found |
| keras/src/dtype_policies/dtype_policy_map.py | 185 | 🟢 LOW | Debug print statement found |
| keras/src/layers/convolutional/conv1d.py | 91 | 🟢 LOW | Debug print statement found |
| keras/src/layers/convolutional/conv1d_transpose.py | 97 | 🟢 LOW | Debug print statement found |
| keras/src/layers/convolutional/conv2d.py | 94 | 🟢 LOW | Debug print statement found |
| keras/src/layers/convolutional/conv2d_transpose.py | 105 | 🟢 LOW | Debug print statement found |
| keras/src/layers/convolutional/conv3d.py | 91 | 🟢 LOW | Debug print statement found |
| keras/src/layers/convolutional/conv3d_transpose.py | 109 | 🟢 LOW | Debug print statement found |
| keras/src/layers/convolutional/depthwise_conv1d.py | 96 | 🟢 LOW | Debug print statement found |
| keras/src/layers/convolutional/depthwise_conv2d.py | 97 | 🟢 LOW | Debug print statement found |
| keras/src/layers/convolutional/separable_conv1d.py | 94 | 🟢 LOW | Debug print statement found |
| keras/src/layers/convolutional/separable_conv2d.py | 95 | 🟢 LOW | Debug print statement found |
| keras/src/layers/core/embedding.py | 40 | 🟢 LOW | Debug print statement found |
| keras/src/layers/merging/base_merge.py | 194 | 🟢 LOW | Debug print statement found |
| keras/src/layers/normalization/layer_normalization.py | 60 | 🟢 LOW | Debug print statement found |
| keras/src/layers/normalization/layer_normalization.py | 62 | 🟢 LOW | Debug print statement found |
| keras/src/layers/normalization/rms_normalization.py | 33 | 🟢 LOW | Debug print statement found |
| keras/src/layers/preprocessing/data_layer.py | 71 | 🟢 LOW | Debug print statement found |
| keras/src/layers/preprocessing/data_layer.py | 81 | 🟢 LOW | Debug print statement found |
| keras/src/layers/preprocessing/data_layer.py | 91 | 🟢 LOW | Debug print statement found |
| keras/src/layers/preprocessing/image_preprocessing/bounding_boxes/converters.py | 208 | 🟢 LOW | Debug print statement found |
| keras/src/layers/preprocessing/image_preprocessing/random_elastic_transform_test.py | 85 | 🟢 LOW | Debug print statement found |
| keras/src/layers/preprocessing/image_preprocessing/random_elastic_transform_test.py | 87 | 🟢 LOW | Debug print statement found |
| keras/src/layers/preprocessing/image_preprocessing/random_erasing_test.py | 75 | 🟢 LOW | Debug print statement found |
| keras/src/layers/preprocessing/image_preprocessing/resizing.py | 77 | 🟢 LOW | Debug print statement found |
| keras/src/layers/preprocessing/image_preprocessing/solarization.py | 47 | 🟢 LOW | Debug print statement found |
| keras/src/layers/preprocessing/image_preprocessing/solarization.py | 52 | 🟢 LOW | Debug print statement found |
| keras/src/layers/reshaping/up_sampling2d.py | 21 | 🟢 LOW | Debug print statement found |
| keras/src/layers/reshaping/up_sampling2d.py | 27 | 🟢 LOW | Debug print statement found |
| keras/src/metrics/metric.py | 29 | 🟢 LOW | Debug print statement found |
| keras/src/ops/core.py | 920 | 🟢 LOW | Debug print statement found |
| keras/src/ops/core.py | 928 | 🟢 LOW | Debug print statement found |
| keras/src/ops/core.py | 937 | 🟢 LOW | Debug print statement found |
| keras/src/ops/linalg.py | 464 | 🟢 LOW | Debug print statement found |
| keras/src/ops/math.py | 270 | 🟢 LOW | Debug print statement found |
| keras/src/ops/math.py | 272 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 254 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 292 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 374 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 452 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 492 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 577 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 613 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 656 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 696 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 745 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 781 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 817 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 858 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 900 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 947 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 1027 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 1088 | 🟢 LOW | Debug print statement found |
| keras/src/ops/nn.py | 2700 | 🟢 LOW | Debug print statement found |
| keras/src/optimizers/multi_optimizer.py | 200 | 🟢 LOW | Debug print statement found |
| keras/src/optimizers/multi_optimizer.py | 201 | 🟢 LOW | Debug print statement found |
| keras/src/optimizers/multi_optimizer.py | 202 | 🟢 LOW | Debug print statement found |
| keras/src/optimizers/multi_optimizer_test.py | 444 | 🟢 LOW | Debug print statement found |
| keras/src/optimizers/multi_optimizer_test.py | 445 | 🟢 LOW | Debug print statement found |
| keras/src/quantizers/quantizers.py | 663 | 🟢 LOW | Debug print statement found |
| keras/src/quantizers/quantizers.py | 670 | 🟢 LOW | Debug print statement found |
| keras/src/quantizers/quantizers.py | 685 | 🟢 LOW | Debug print statement found |
| keras/src/quantizers/quantizers.py | 692 | 🟢 LOW | Debug print statement found |
| keras/src/quantizers/quantizers.py | 793 | 🟢 LOW | Debug print statement found |
| keras/src/quantizers/quantizers.py | 800 | 🟢 LOW | Debug print statement found |
| keras/src/quantizers/quantizers.py | 815 | 🟢 LOW | Debug print statement found |
| keras/src/quantizers/quantizers.py | 822 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 107 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 110 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 132 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 156 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 161 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 166 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 188 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 222 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 225 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 233 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 242 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 626 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 642 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 647 | 🟢 LOW | Debug print statement found |
| keras/src/saving/file_editor.py | 650 | 🟢 LOW | Debug print statement found |
| keras/src/trainers/trainer.py | 368 | 🟢 LOW | Debug print statement found |
| keras/src/utils/code_stats.py | 30 | 🟢 LOW | Debug print statement found |
| keras/src/utils/code_stats_test.py | 28 | 🟢 LOW | Debug print statement found |
| keras/src/utils/code_stats_test.py | 55 | 🟢 LOW | Debug print statement found |
| keras/src/utils/code_stats_test.py | 61 | 🟢 LOW | Debug print statement found |
| keras/src/utils/code_stats_test.py | 62 | 🟢 LOW | Debug print statement found |
| keras/src/utils/code_stats_test.py | 70 | 🟢 LOW | Debug print statement found |
| keras/src/utils/code_stats_test.py | 77 | 🟢 LOW | Debug print statement found |
| keras/src/utils/code_stats_test.py | 85 | 🟢 LOW | Debug print statement found |
| keras/src/utils/code_stats_test.py | 96 | 🟢 LOW | Debug print statement found |
| keras/src/utils/code_stats_test.py | 108 | 🟢 LOW | Debug print statement found |
| keras/src/utils/code_stats_test.py | 111 | 🟢 LOW | Debug print statement found |
| keras/src/utils/config.py | 47 | 🟢 LOW | Debug print statement found |
| keras/src/utils/config.py | 49 | 🟢 LOW | Debug print statement found |
| keras/src/utils/config.py | 50 | 🟢 LOW | Debug print statement found |
| keras/src/utils/numerical_utils.py | 57 | 🟢 LOW | Debug print statement found |
| keras/src/utils/numerical_utils.py | 68 | 🟢 LOW | Debug print statement found |
| keras/src/utils/numerical_utils.py | 72 | 🟢 LOW | Debug print statement found |
| keras/src/utils/summary_utils.py | 361 | 🟢 LOW | Debug print statement found |
| keras/src/utils/summary_utils.py | 362 | 🟢 LOW | Debug print statement found |
| keras/src/utils/summary_utils.py | 363 | 🟢 LOW | Debug print statement found |
| keras/src/utils/summary_utils.py | 368 | 🟢 LOW | Debug print statement found |
| keras/src/utils/summary_utils.py | 373 | 🟢 LOW | Debug print statement found |
| keras/src/utils/summary_utils.py | 379 | 🟢 LOW | Debug print statement found |
| keras/src/utils/torch_utils.py | 76 | 🟢 LOW | Debug print statement found |
| pip_build.py | 117 | 🟢 LOW | Debug print statement found |
| pip_build.py | 119 | 🟢 LOW | Debug print statement found |
| pip_build.py | 124 | 🟢 LOW | Debug print statement found |

### Maintenance Items (108)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| keras/src/backend/jax/numpy.py | 1050 | ⚪ INFO | TODO comment found |
| keras/src/backend/jax/numpy.py | 1236 | ⚪ INFO | TODO comment found |
| keras/src/backend/jax/trainer.py | 387 | ⚪ INFO | TODO comment found |
| keras/src/backend/jax/trainer.py | 563 | ⚪ INFO | TODO comment found |
| keras/src/backend/numpy/numpy.py | 53 | ⚪ INFO | TODO comment found |
| keras/src/backend/numpy/trainer.py | 238 | ⚪ INFO | TODO comment found |
| keras/src/backend/openvino/math.py | 931 | ⚪ INFO | TODO comment found |
| keras/src/backend/openvino/numpy.py | 1257 | ⚪ INFO | TODO comment found |
| keras/src/backend/openvino/numpy.py | 3997 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/numpy.py | 456 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/numpy.py | 458 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/numpy.py | 467 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/numpy.py | 508 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/numpy.py | 509 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/numpy.py | 515 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/numpy.py | 1477 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/numpy.py | 2838 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/numpy.py | 2893 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/numpy.py | 2965 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/numpy.py | 3496 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/random.py | 111 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/random.py | 129 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/random.py | 163 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/core.py | 47 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/core.py | 48 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/nn.py | 125 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/nn.py | 160 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/nn.py | 180 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 81 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 92 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 128 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 129 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 144 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 147 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 150 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 372 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 388 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 398 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 408 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 590 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 593 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 610 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 671 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 674 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 690 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 707 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 774 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 961 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 1169 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 1235 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 1631 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 1644 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 1670 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 1674 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 1878 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 1996 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 1998 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 2017 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 2074 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 2077 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 2242 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/numpy.py | 2255 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/trainer.py | 201 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/trainer.py | 206 | ⚪ INFO | TODO comment found |
| keras/src/backend/torch/trainer.py | 340 | ⚪ INFO | TODO comment found |
| keras/src/callbacks/swap_ema_weights_test.py | 163 | ⚪ INFO | TODO comment found |
| keras/src/callbacks/tensorboard.py | 180 | ⚪ INFO | TODO comment found |
| keras/src/callbacks/tensorboard_test.py | 467 | ⚪ INFO | TODO comment found |
| keras/src/callbacks/tensorboard_test.py | 498 | ⚪ INFO | TODO comment found |
| keras/src/callbacks/tensorboard_test.py | 696 | ⚪ INFO | TODO comment found |
| keras/src/callbacks/tensorboard_test.py | 709 | ⚪ INFO | TODO comment found |
| keras/src/callbacks/tensorboard_test.py | 723 | ⚪ INFO | TODO comment found |
| keras/src/export/onnx.py | 103 | ⚪ INFO | TODO comment found |
| keras/src/export/saved_model_test.py | 400 | ⚪ INFO | TODO comment found |
| keras/src/layers/layer.py | 923 | ⚪ INFO | TODO comment found |
| keras/src/layers/layer.py | 1035 | ⚪ INFO | TODO comment found |
| keras/src/layers/layer.py | 1676 | ⚪ INFO | TODO comment found |
| keras/src/layers/preprocessing/feature_space.py | 524 | ⚪ INFO | TODO comment found |
| keras/src/layers/preprocessing/feature_space.py | 531 | ⚪ INFO | TODO comment found |
| keras/src/layers/preprocessing/hashing_test.py | 450 | ⚪ INFO | TODO comment found |
| keras/src/layers/preprocessing/hashing_test.py | 470 | ⚪ INFO | TODO comment found |
| keras/src/layers/preprocessing/hashing_test.py | 493 | ⚪ INFO | TODO comment found |
| keras/src/layers/preprocessing/hashing_test.py | 507 | ⚪ INFO | TODO comment found |
| keras/src/layers/preprocessing/hashing_test.py | 536 | ⚪ INFO | TODO comment found |
| keras/src/layers/preprocessing/index_lookup.py | 927 | ⚪ INFO | TODO comment found |
| keras/src/layers/preprocessing/index_lookup.py | 937 | ⚪ INFO | TODO comment found |
| keras/src/layers/preprocessing/string_lookup_test.py | 18 | ⚪ INFO | TODO comment found |
| keras/src/layers/preprocessing/text_vectorization_test.py | 19 | ⚪ INFO | TODO comment found |
| keras/src/legacy/saving/legacy_h5_format_test.py | 15 | ⚪ INFO | TODO comment found |
| keras/src/metrics/__init__.py | 116 | ⚪ INFO | TODO comment found |
| keras/src/models/sequential.py | 198 | ⚪ INFO | TODO comment found |
| keras/src/ops/image_test.py | 1560 | ⚪ INFO | TODO comment found |
| keras/src/ops/image_test.py | 1747 | ⚪ INFO | TODO comment found |
| keras/src/ops/image_test.py | 1748 | ⚪ INFO | TODO comment found |
| keras/src/ops/nn_test.py | 3331 | ⚪ INFO | TODO comment found |
| keras/src/ops/numpy.py | 6936 | ⚪ INFO | TODO comment found |
| keras/src/ops/numpy.py | 9222 | ⚪ INFO | TODO comment found |
| keras/src/ops/numpy_test.py | 9135 | ⚪ INFO | TODO comment found |
| keras/src/ops/numpy_test.py | 11466 | ⚪ INFO | TODO comment found |
| keras/src/ops/numpy_test.py | 11938 | ⚪ INFO | TODO comment found |
| keras/src/ops/numpy_test.py | 12175 | ⚪ INFO | TODO comment found |
| keras/src/ops/numpy_test.py | 12536 | ⚪ INFO | TODO comment found |
| keras/src/optimizers/lion_test.py | 100 | ⚪ INFO | TODO comment found |
| keras/src/trainers/data_adapters/py_dataset_adapter_test.py | 222 | ⚪ INFO | TODO comment found |
| keras/src/trainers/data_adapters/py_dataset_adapter_test.py | 223 | ⚪ INFO | TODO comment found |
| keras/src/trainers/data_adapters/py_dataset_adapter_test.py | 280 | ⚪ INFO | TODO comment found |
| keras/src/trainers/trainer_test.py | 533 | ⚪ INFO | TODO comment found |
| keras/src/utils/image_dataset_utils_test.py | 592 | ⚪ INFO | TODO comment found |

## Detailed Findings

### CODE_QUALITY

**Total:** 322 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/workflows/scripts/auto-assignment.js | 39 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/scripts/auto-assignment.js | 40 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/scripts/auto-assignment.js | 42 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/scripts/auto-assignment.js | 49 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/scripts/labeler.js | 32 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/scripts/labeler.js | 36 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/scripts/labeler.js | 41 | 🟢 LOW | Debug console.log statement found |
| benchmarks/layer_benchmark/base_benchmark.py | 214 | 🟢 LOW | Debug print statement found |
| benchmarks/layer_benchmark/base_benchmark.py | 218 | 🟢 LOW | Debug print statement found |
| benchmarks/layer_benchmark/base_benchmark.py | 273 | 🟢 LOW | Debug print statement found |

*... and 312 more*

### MAINTENANCE

**Total:** 108 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| keras/src/backend/jax/numpy.py | 1050 | ⚪ INFO | TODO comment found |
| keras/src/backend/jax/numpy.py | 1236 | ⚪ INFO | TODO comment found |
| keras/src/backend/jax/trainer.py | 387 | ⚪ INFO | TODO comment found |
| keras/src/backend/jax/trainer.py | 563 | ⚪ INFO | TODO comment found |
| keras/src/backend/numpy/numpy.py | 53 | ⚪ INFO | TODO comment found |
| keras/src/backend/numpy/trainer.py | 238 | ⚪ INFO | TODO comment found |
| keras/src/backend/openvino/math.py | 931 | ⚪ INFO | TODO comment found |
| keras/src/backend/openvino/numpy.py | 1257 | ⚪ INFO | TODO comment found |
| keras/src/backend/openvino/numpy.py | 3997 | ⚪ INFO | TODO comment found |
| keras/src/backend/tensorflow/numpy.py | 456 | ⚪ INFO | TODO comment found |

*... and 98 more*

### SECURITY

**Total:** 8 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| keras/src/legacy/preprocessing/text.py | 69 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| keras/src/utils/file_utils.py | 442 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| keras/src/utils/file_utils_test.py | 644 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| keras/src/utils/file_utils_test.py | 669 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| keras/src/utils/file_utils_test.py | 681 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| keras/src/utils/file_utils_test.py | 706 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| keras/src/utils/file_utils_test.py | 709 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| keras/src/utils/file_utils_test.py | 714 | 🟡 MEDIUM | Weak cryptographic algorithm detected |

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 100/100 (Tier A)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -0 | Good ✅ |
| Code Quality | -362 | Good ✅ |
| Test Coverage | +3 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 30.9%. Aim for at least 70% coverage.

2. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

