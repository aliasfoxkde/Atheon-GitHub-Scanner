# Repository Analysis Report: tensorflow/tensorflow

**Generated:** 2026-06-19 09:03:31 CDT

**Quality Score:** 98/100 (Tier A)

## Executive Summary

- **Overall Quality:** A (98/100)
- **Total Findings:** 1403
- **Critical Issues:** 0
- **High Issues:** 0
- **Medium Issues:** 15
- **Low Issues:** 1313
- **Files Scanned:** 36470

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 1313 | Medium |
| maintenance | 77 | Medium |
| security | 13 | Medium |

## Repository Overview

- **Owner:** tensorflow
- **Name:** tensorflow
- **Description:** An Open Source Machine Learning Framework for Everyone
- **Primary Language:** C++
- **Stars:** 195775
- **Forks:** 75196
- **Open Issues:** 3467
- **Size:** 1336055 KB
- **Created:** 2015-11-07
- **Last Updated:** 2026-06-19
- **Default Branch:** master

**Topics:** deep-learning, deep-neural-networks, distributed, machine-learning, ml, neural-network, python, tensorflow

## Security Analysis

⚠️ **Found 13 security-related findings.**

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 19.8% | Poor ❌ |
| Documentation | 1.3% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (1313)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/workflows/create_issue.js | 30 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/create_issue.js | 36 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/create_issue.js | 44 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/create_issue.js | 45 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/create_issue.js | 53 | 🟢 LOW | Debug console.log statement found |
| ci/official/utilities/convert_msys_paths_to_win_paths.py | 62 | 🟢 LOW | Debug print statement found |
| ci/official/utilities/extract_resultstore_links.py | 123 | 🟢 LOW | Debug print statement found |
| ci/official/utilities/extract_resultstore_links.py | 183 | 🟢 LOW | Debug print statement found |
| ci/official/utilities/extract_resultstore_links.py | 251 | 🟢 LOW | Debug print statement found |
| ci/official/utilities/extract_resultstore_links.py | 256 | 🟢 LOW | Debug print statement found |
| ci/official/utilities/extract_resultstore_links.py | 258 | 🟢 LOW | Debug print statement found |
| ci/official/utilities/extract_resultstore_links.py | 260 | 🟢 LOW | Debug print statement found |
| ci/official/utilities/extract_resultstore_links.py | 276 | 🟢 LOW | Debug print statement found |
| configure.py | 155 | 🟢 LOW | Debug print statement found |
| configure.py | 163 | 🟢 LOW | Debug print statement found |
| configure.py | 180 | 🟢 LOW | Debug print statement found |
| configure.py | 198 | 🟢 LOW | Debug print statement found |
| configure.py | 200 | 🟢 LOW | Debug print statement found |
| configure.py | 215 | 🟢 LOW | Debug print statement found |
| configure.py | 340 | 🟢 LOW | Debug print statement found |
| configure.py | 343 | 🟢 LOW | Debug print statement found |
| configure.py | 347 | 🟢 LOW | Debug print statement found |
| configure.py | 350 | 🟢 LOW | Debug print statement found |
| configure.py | 353 | 🟢 LOW | Debug print statement found |
| configure.py | 427 | 🟢 LOW | Debug print statement found |
| configure.py | 441 | 🟢 LOW | Debug print statement found |
| configure.py | 444 | 🟢 LOW | Debug print statement found |
| configure.py | 536 | 🟢 LOW | Debug print statement found |
| configure.py | 595 | 🟢 LOW | Debug print statement found |
| configure.py | 745 | 🟢 LOW | Debug print statement found |
| configure.py | 920 | 🟢 LOW | Debug print statement found |
| configure.py | 926 | 🟢 LOW | Debug print statement found |
| configure.py | 929 | 🟢 LOW | Debug print statement found |
| configure.py | 1011 | 🟢 LOW | Debug print statement found |
| configure.py | 1016 | 🟢 LOW | Debug print statement found |
| configure.py | 1022 | 🟢 LOW | Debug print statement found |
| configure.py | 1027 | 🟢 LOW | Debug print statement found |
| configure.py | 1032 | 🟢 LOW | Debug print statement found |
| configure.py | 1161 | 🟢 LOW | Debug print statement found |
| configure.py | 1212 | 🟢 LOW | Debug print statement found |
| configure.py | 1275 | 🟢 LOW | Debug print statement found |
| configure.py | 1350 | 🟢 LOW | Debug print statement found |
| configure.py | 1364 | 🟢 LOW | Debug print statement found |
| tensorflow/cc/saved_model/testdata/generate_saved_models.py | 121 | 🟢 LOW | Debug print statement found |
| tensorflow/cc/saved_model/testdata/generate_saved_models.py | 122 | 🟢 LOW | Debug print statement found |
| tensorflow/cc/saved_model/testdata/generate_saved_models.py | 128 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/mlir/quantization/stablehlo/python/quantization.py | 75 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/mlir/quantization/stablehlo/python/quantization.py | 76 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/mlir/quantization/stablehlo/python/quantization.py | 83 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/mlir/quantization/stablehlo/python/quantization.py | 84 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/mlir/tensorflow/tests/tf_saved_model/common.py | 92 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/mlir/tensorflow/tests/tf_saved_model/common_v1.py | 140 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/mlir/tfr/python/tfr_gen.py | 370 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/mlir/tfr/python/tfr_gen.py | 376 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/mlir/tfr/python/tfr_gen.py | 681 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/mlir/tfr/python/tfr_gen.py | 691 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/mlir/tfr/python/tfr_gen.py | 774 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/mlir/tfr/python/tfr_gen.py | 790 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/conv3d_test.py | 690 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/conv3d_test.py | 854 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/depthwise_conv_op_test.py | 214 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/depthwise_conv_op_test.py | 224 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/depthwise_conv_op_test.py | 237 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/depthwise_conv_op_test.py | 284 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/depthwise_conv_op_test.py | 422 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/depthwise_conv_op_test.py | 430 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/depthwise_conv_op_test.py | 442 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/depthwise_conv_op_test.py | 486 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/depthwise_conv_op_test.py | 544 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/depthwise_conv_op_test.py | 555 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/depthwise_conv_op_test.py | 616 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/depthwise_conv_op_test.py | 690 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/fft_test.py | 68 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/jit_test.py | 121 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/jit_test.py | 127 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/lrn_ops_test.py | 85 | 🟢 LOW | Debug print statement found |
| tensorflow/compiler/tests/while_test.py | 154 | 🟢 LOW | Debug print statement found |
| tensorflow/dtensor/python/tests/multi_client_test_util.py | 53 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/adding_an_op/fact_test.py | 26 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/custom_ops_doc/multiplex_4/multiplex_2_save.py | 37 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/custom_ops_doc/multiplex_4/multiplex_4_load_use.py | 33 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/custom_ops_doc/sleep/sleep_bin.py | 41 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/custom_ops_doc/sleep/sleep_bin.py | 42 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/custom_ops_doc/sleep/sleep_bin.py | 43 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/custom_ops_doc/sleep/sleep_bin.py | 45 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/custom_ops_doc/sleep/sleep_bin.py | 52 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/custom_ops_doc/sleep/sleep_bin.py | 60 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/label_image/label_image.py | 131 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/speech_commands/input_data.py | 235 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/speech_commands/label_wav.py | 68 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/speech_commands/label_wav_dir.py | 71 | 🟢 LOW | Debug print statement found |
| tensorflow/examples/speech_commands/label_wav_dir.py | 76 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/examples/python/label_image.py | 82 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/examples/python/label_image.py | 124 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/examples/python/label_image.py | 126 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/examples/python/label_image.py | 128 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/analyzer.py | 90 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/analyzer.py | 94 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/analyzer.py | 99 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/analyzer.py | 105 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/authoring/authoring.py | 246 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/interpreter.py | 193 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/interpreter.py | 194 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/interpreter.py | 836 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/interpreter.py | 863 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/interpreter.py | 889 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/interpreter.py | 962 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/lite.py | 3223 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/tflite_convert.py | 237 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/python/tflite_convert.py | 244 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/testdata/src/intermediate_tensor_output.py | 44 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/testing/zip_test_utils.py | 684 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/testing/zip_test_utils.py | 688 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/tools/convert_image_to_csv.py | 86 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/tools/optimize/python/modify_model_interface.py | 48 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/tools/visualize.py | 574 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/tutorials/dataset.py | 73 | 🟢 LOW | Debug print statement found |
| tensorflow/lite/tutorials/mnist_tflite.py | 79 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/converters/lists.py | 73 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/converters/lists.py | 78 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/converters/lists.py | 85 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/converters/lists.py | 86 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/core/converter.py | 92 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/operators/py_builtins.py | 307 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/common_transformers/anf_test.py | 157 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/common_transformers/anf_test.py | 165 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/parser_test.py | 221 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/parser_test.py | 238 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/static_analysis/activity_test.py | 185 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/static_analysis/liveness.py | 109 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/static_analysis/reaching_definitions_py3_test.py | 82 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/static_analysis/reaching_definitions_test.py | 516 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/static_analysis/type_inference.py | 200 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/testing/basic_definitions.py | 33 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/testing/basic_definitions.py | 45 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/testing/codegen.py | 210 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/transformer.py | 269 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/pyct/transformer.py | 275 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/tests/call_to_print_function_test.py | 29 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/tests/call_to_print_function_test.py | 33 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/tests/call_to_print_function_test.py | 37 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/tests/call_to_print_function_test.py | 38 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/tests/call_to_print_function_test.py | 42 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/tests/call_to_print_function_test.py | 47 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/tests/call_to_print_function_test.py | 51 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/tests/datasets_test.py | 24 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/tests/datasets_test.py | 29 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/tests/early_return_test.py | 27 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/tests/loop_distributed_test.py | 27 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/tests/reference_test_base.py | 65 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/utils/ag_logging.py | 107 | 🟢 LOW | Debug print statement found |
| tensorflow/python/autograph/utils/ag_logging.py | 122 | 🟢 LOW | Debug print statement found |
| tensorflow/python/checkpoint/checkpoint_view.py | 54 | 🟢 LOW | Debug print statement found |
| tensorflow/python/checkpoint/checkpoint_view.py | 170 | 🟢 LOW | Debug print statement found |
| tensorflow/python/checkpoint/checkpoint_view.py | 253 | 🟢 LOW | Debug print statement found |
| tensorflow/python/checkpoint/checkpoint_view.py | 263 | 🟢 LOW | Debug print statement found |
| tensorflow/python/checkpoint/checkpoint_view.py | 267 | 🟢 LOW | Debug print statement found |
| tensorflow/python/checkpoint/testdata/generate_checkpoint.py | 60 | 🟢 LOW | Debug print statement found |
| tensorflow/python/checkpoint/testdata/generate_checkpoint.py | 61 | 🟢 LOW | Debug print statement found |
| tensorflow/python/checkpoint/testdata/generate_checkpoint.py | 67 | 🟢 LOW | Debug print statement found |
| tensorflow/python/checkpoint/trackable_view.py | 46 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/notebook.py | 69 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/notebook.py | 77 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/session.py | 732 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/session.py | 826 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/session.py | 839 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/session.py | 842 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/session.py | 1565 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/session.py | 1747 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/session.py | 1761 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/session_benchmark.py | 60 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/session_benchmark.py | 88 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/session_benchmark.py | 117 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/session_benchmark.py | 143 | 🟢 LOW | Debug print statement found |
| tensorflow/python/client/session_benchmark.py | 170 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 187 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 189 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 191 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 196 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 197 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 218 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 227 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 230 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 233 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 234 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 235 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 236 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 239 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 243 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 246 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 249 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 251 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 253 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 254 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 255 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 256 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 257 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 258 | 🟢 LOW | Debug print statement found |
| tensorflow/python/compiler/tensorrt/utils.py | 259 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/benchmarks/autotune_benchmark.py | 53 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/benchmarks/autotune_benchmark.py | 73 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/benchmarks/autotune_benchmark.py | 91 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/benchmarks/autotune_benchmark.py | 111 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/benchmarks/autotune_benchmark.py | 132 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/benchmarks/autotune_benchmark.py | 176 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/benchmarks/parameter_value_benchmark.py | 77 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/benchmarks/parameter_value_benchmark.py | 118 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/benchmarks/parameter_value_benchmark.py | 158 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/batching.py | 69 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/cardinality.py | 44 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/cardinality.py | 48 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/cardinality.py | 52 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/cardinality.py | 75 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/cardinality.py | 78 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/data_service_ops.py | 696 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/distribute.py | 107 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/distribute.py | 247 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/distribute.py | 255 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/distribute.py | 263 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/distribute.py | 271 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/distributed_save_op.py | 70 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/grouping.py | 147 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/grouping.py | 176 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/grouping.py | 207 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/index_flat_map_op.py | 61 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/interleave_ops.py | 118 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/io.py | 44 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/io.py | 122 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/prefetching_ops.py | 44 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/readers.py | 379 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/readers.py | 390 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/readers.py | 701 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/readers.py | 872 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/ops/readers.py | 1169 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/experimental/service/__init__.py | 41 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/kernel_tests/group_by_window_test.py | 279 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/kernel_tests/iterator_test.py | 617 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/kernel_tests/iterator_test.py | 622 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 161 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 580 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 590 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 795 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 1053 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 1389 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 1399 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 1710 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 1793 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 1958 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 1966 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 1974 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 1995 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 2087 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 2610 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 2618 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 2634 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 2649 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 2683 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 2699 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 2718 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 3024 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 3028 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 3032 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 3071 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 3141 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 3270 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 3276 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 3283 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/dataset_ops.py | 3610 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/debug_mode.py | 45 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/iterator_ops.py | 574 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/iterator_ops.py | 582 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/iterator_ops.py | 584 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/iterator_ops.py | 594 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/iterator_ops.py | 597 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/iterator_ops.py | 625 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/iterator_ops.py | 646 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/iterator_ops.py | 648 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/iterator_ops.py | 651 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/iterator_ops.py | 943 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/optional_ops.py | 50 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/optional_ops.py | 52 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/optional_ops.py | 59 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/optional_ops.py | 68 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/optional_ops.py | 88 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/optional_ops.py | 104 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/optional_ops.py | 122 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/optional_ops.py | 139 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/optional_ops.py | 141 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/optional_ops.py | 221 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/options.py | 599 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/readers.py | 202 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/readers.py | 428 | 🟢 LOW | Debug print statement found |
| tensorflow/python/data/ops/readers.py | 599 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/cli/debugger_cli_common.py | 1033 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/cli/offline_analyzer.py | 27 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/cli/offline_analyzer.py | 30 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/cli/readline_ui.py | 54 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/cli/readline_ui.py | 75 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/cli/readline_ui.py | 97 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/cli/readline_ui.py | 115 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/cli/readline_ui.py | 117 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/cli/readline_ui.py | 121 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/examples/v1/debug_errors.py | 51 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/examples/v1/debug_errors.py | 53 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/examples/v1/debug_errors.py | 55 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/examples/v1/debug_fibonacci.py | 60 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/examples/v1/debug_mnist_v1.py | 227 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/examples/v2/debug_fibonacci_v2.py | 51 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/examples/v2/debug_mnist_v2.py | 235 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/lib/debug_events_writer_test.py | 73 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/lib/debug_events_writer_test.py | 90 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/lib/grpc_debug_test_server.py | 453 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/lib/grpc_debug_test_server.py | 471 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/lib/grpc_debug_test_server.py | 474 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/lib/grpc_debug_test_server.py | 478 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/lib/grpc_debug_test_server.py | 481 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/lib/source_utils_test.py | 266 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/lib/source_utils_test.py | 278 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/lib/source_utils_test.py | 280 | 🟢 LOW | Debug print statement found |
| tensorflow/python/debug/wrappers/local_cli_wrapper.py | 271 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/central_storage_strategy.py | 90 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/combinations.py | 520 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/distribute_lib.py | 423 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/distribute_lib.py | 430 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/distribute_lib.py | 483 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/distribute_lib.py | 1377 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/distribute_lib.py | 3248 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/failure_handling/failure_handler_test.py | 506 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/failure_handling/failure_handling.py | 858 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/mirrored_strategy.py | 239 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/multi_process_runner.py | 264 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/multi_process_runner.py | 844 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/multi_process_runner_test.py | 137 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/multi_process_runner_test.py | 156 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/multi_process_runner_test.py | 182 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/multi_process_runner_test.py | 212 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/multi_worker_test_base.py | 805 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/one_device_strategy.py | 58 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/one_device_strategy.py | 66 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/one_device_strategy.py | 99 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/sharded_variable.py | 68 | 🟢 LOW | Debug print statement found |
| tensorflow/python/distribute/test_util.py | 222 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/backprop.py | 203 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/backprop.py | 724 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/backprop.py | 737 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/backprop.py | 739 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/backprop.py | 754 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/backprop.py | 757 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/backprop.py | 773 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/backprop.py | 777 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/backprop.py | 901 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/context.py | 2590 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/context.py | 2598 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/context.py | 2599 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/context.py | 2610 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/context.py | 2611 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/context.py | 2620 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/context.py | 2656 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/context.py | 2664 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/context.py | 2665 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/context.py | 2677 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/context.py | 2678 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/context.py | 2687 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/lift_to_graph_test.py | 82 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/polymorphic_function/concrete_function.py | 1443 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/polymorphic_function/concrete_function.py | 1454 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/polymorphic_function/eager_function_run.py | 43 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/polymorphic_function/polymorphic_function.py | 1559 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/wrap_function.py | 540 | 🟢 LOW | Debug print statement found |
| tensorflow/python/eager/wrap_function.py | 541 | 🟢 LOW | Debug print statement found |
| tensorflow/python/feature_column/feature_column_v2.py | 853 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/config.py | 71 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/config.py | 74 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/config.py | 445 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/dtypes_test.py | 359 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/function_test.py | 172 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/graph_util_impl.py | 95 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/ops.py | 3499 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/ops.py | 4910 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/ops.py | 5098 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/ops.py | 5185 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 129 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 131 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 132 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 133 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 134 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 136 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 138 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 139 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 140 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 141 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 153 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 155 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 156 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 157 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 158 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 160 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 162 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 163 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 164 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 165 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 178 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 180 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 181 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 182 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 183 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 185 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 187 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 188 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 189 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 190 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 240 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 241 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 247 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 248 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 257 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 258 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 265 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 266 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 291 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 292 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 299 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 300 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 306 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 307 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 320 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 321 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 323 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 324 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 336 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 337 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 344 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/random_seed.py | 345 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/sparse_tensor.py | 260 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/sparse_tensor.py | 266 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 164 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 175 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 200 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 365 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 377 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 398 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 427 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 471 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 477 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 491 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 493 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 512 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 514 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 528 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 530 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 533 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 548 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor.py | 934 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor_conversion.py | 117 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor_conversion.py | 122 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor_conversion.py | 127 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor_shape.py | 61 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor_shape.py | 65 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor_shape.py | 783 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor_shape.py | 784 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor_util.py | 1034 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor_util.py | 1037 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor_util.py | 1042 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/tensor_util.py | 1059 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/test_util.py | 4281 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/test_util_test.py | 163 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/test_util_test.py | 165 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/test_util_test.py | 171 | 🟢 LOW | Debug print statement found |
| tensorflow/python/framework/test_util_test.py | 173 | 🟢 LOW | Debug print statement found |
| tensorflow/python/grappler/auto_mixed_precision_test.py | 432 | 🟢 LOW | Debug print statement found |
| tensorflow/python/grappler/cost_analyzer_test.py | 60 | 🟢 LOW | Debug print statement found |
| tensorflow/python/grappler/cost_analyzer_test.py | 80 | 🟢 LOW | Debug print statement found |
| tensorflow/python/grappler/cost_analyzer_test.py | 106 | 🟢 LOW | Debug print statement found |
| tensorflow/python/grappler/cost_analyzer_test.py | 156 | 🟢 LOW | Debug print statement found |
| tensorflow/python/grappler/cost_analyzer_tool.py | 87 | 🟢 LOW | Debug print statement found |
| tensorflow/python/grappler/cost_analyzer_tool.py | 90 | 🟢 LOW | Debug print statement found |
| tensorflow/python/grappler/model_analyzer_test.py | 48 | 🟢 LOW | Debug print statement found |
| tensorflow/python/grappler/model_analyzer_test.py | 67 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 287 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 290 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 294 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 953 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 956 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 981 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 984 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 1043 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 1805 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 1809 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 3570 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 3575 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 3584 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 3588 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 4729 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 4735 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 4741 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/backend.py | 4744 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/callbacks.py | 964 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/callbacks.py | 1044 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/callbacks.py | 1147 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/callbacks.py | 1150 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/callbacks.py | 1429 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/callbacks.py | 1440 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/callbacks.py | 1444 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/callbacks.py | 1824 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/callbacks.py | 1829 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/callbacks.py | 1963 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/callbacks.py | 2705 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/callbacks.py | 2823 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/engine/base_layer.py | 255 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/engine/base_layer.py | 258 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/engine/base_layer_utils.py | 738 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/engine/base_layer_utils.py | 741 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/engine/training_arrays_v1.py | 471 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 409 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 419 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 549 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 557 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 565 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 573 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 708 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 717 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 2488 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 2494 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 2545 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 2551 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 2649 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 2725 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 2731 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 2793 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 2797 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 2915 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 3041 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 3049 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 3102 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/convolutional.py | 3226 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/core.py | 155 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/core.py | 162 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/embeddings.py | 48 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/merge.py | 230 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/merge.py | 422 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/merge.py | 428 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/merge.py | 452 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/merge.py | 458 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/merge.py | 577 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/merge.py | 584 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/merge.py | 605 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/merge.py | 612 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/merge.py | 745 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/merge.py | 903 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/merge.py | 909 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/pooling.py | 917 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/pooling.py | 1081 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/layers/pooling.py | 1133 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/metrics.py | 88 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/utils/data_utils.py | 229 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/utils/data_utils.py | 238 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/utils/io_utils.py | 58 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/utils/np_utils.py | 40 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/utils/np_utils.py | 53 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/utils/np_utils.py | 57 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/utils/object_identity.py | 94 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/utils/object_identity.py | 97 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/utils/object_identity.py | 112 | 🟢 LOW | Debug print statement found |
| tensorflow/python/keras/utils/vis_utils.py | 109 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/array_ops/shape_ops_test.py | 669 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/array_ops/where_op_test.py | 290 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/array_ops/where_op_test.py | 316 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/check_ops_test.py | 89 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/check_ops_test.py | 93 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/data_structures/fifo_queue_test.py | 1776 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/data_structures/list_ops_test.py | 1108 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/image_ops/extract_volume_patches_grad_test.py | 78 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/math_ops/cwise_ops_binary_test.py | 94 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/math_ops/cwise_ops_binary_test.py | 95 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/math_ops/matmul_op_test.py | 109 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/math_ops/topk_op_test.py | 276 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/atrous_conv2d_test.py | 157 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/conv1d_transpose_test.py | 145 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/conv2d_backprop_filter_grad_test.py | 71 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/conv2d_backprop_filter_grad_test.py | 116 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/conv2d_transpose_test.py | 180 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/conv3d_backprop_filter_v2_grad_test.py | 58 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/conv3d_transpose_test.py | 218 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/conv_ops_3d_test.py | 795 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/conv_ops_3d_test.py | 1077 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/conv_ops_3d_test.py | 1078 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/embedding_ops_test.py | 262 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/embedding_ops_test.py | 305 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/embedding_ops_test.py | 328 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/embedding_ops_test.py | 335 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 153 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 154 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 168 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 169 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 170 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 171 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 173 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 183 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 184 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 185 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 187 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 188 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 189 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_avg_pool_op_test.py | 190 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 153 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 154 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 170 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 171 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 172 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 173 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 175 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 185 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 186 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 187 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 189 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 190 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 191 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/fractional_max_pool_op_test.py | 192 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/lrn_op_test.py | 86 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/lrn_op_test.py | 179 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/morphological_ops_test.py | 246 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/morphological_ops_test.py | 565 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 432 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 484 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 549 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 617 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 676 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 714 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 722 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 723 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 736 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 738 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 758 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 759 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 777 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 779 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 801 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 803 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 830 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/rnn_test.py | 831 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/softplus_op_test.py | 98 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/softplus_op_test.py | 116 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/softplus_op_test.py | 135 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/softsign_op_test.py | 74 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/xent_op_test.py | 100 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/nn_ops/xent_op_test.py | 127 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/multinomial_op_test.py | 248 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/multinomial_op_test.py | 250 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/multinomial_op_test.py | 258 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/parameterized_truncated_normal_op_test.py | 499 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/parameterized_truncated_normal_op_test.py | 501 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/parameterized_truncated_normal_op_test.py | 506 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/parameterized_truncated_normal_op_test.py | 527 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/random_ops_test.py | 94 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/random_ops_test.py | 95 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/random_ops_test.py | 96 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/random_ops_test.py | 196 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/random_ops_test.py | 197 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/random_ops_test.py | 198 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/random_ops_test.py | 238 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/random_ops_test.py | 323 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/random_ops_test.py | 324 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/random/random_ops_test.py | 325 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_add_op_test.py | 275 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_add_op_test.py | 276 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_add_op_test.py | 282 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_tensor_dense_matmul_grad_test.py | 83 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_tensor_dense_matmul_op_test.py | 387 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_tensor_dense_matmul_op_test.py | 393 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_tensor_dense_matmul_op_test.py | 394 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_tensor_dense_matmul_op_test.py | 395 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_tensor_dense_matmul_op_test.py | 396 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_tensor_dense_matmul_op_test.py | 397 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_tensor_dense_matmul_op_test.py | 398 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_xent_op_test.py | 110 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_xent_op_test.py | 116 | 🟢 LOW | Debug print statement found |
| tensorflow/python/kernel_tests/sparse_ops/sparse_xent_op_test.py | 117 | 🟢 LOW | Debug print statement found |
| tensorflow/python/lib/io/tf_record.py | 267 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/accumulate_n_benchmark.py | 113 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/accumulate_n_benchmark.py | 137 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/accumulate_n_benchmark.py | 139 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 74 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 139 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 149 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 162 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 278 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 280 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 2991 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 2994 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 3099 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 3104 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 3107 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 3113 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 4200 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 4207 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 4277 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 4280 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 4282 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 4552 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 4563 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 5503 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops.py | 5516 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/array_ops_stack.py | 162 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/autograph_ops.py | 112 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/batch_norm_benchmark.py | 116 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/batch_norm_benchmark.py | 150 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/batch_norm_benchmark.py | 174 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/batch_norm_benchmark.py | 188 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/batch_norm_benchmark.py | 200 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/batch_norm_benchmark.py | 214 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/batch_norm_benchmark.py | 226 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/batch_norm_benchmark.py | 236 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/bitwise_ops_test.py | 62 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/check_ops.py | 2265 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/check_ops.py | 2267 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/check_ops.py | 2301 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/check_ops.py | 2303 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/check_ops.py | 2319 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/check_ops.py | 2323 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/check_ops.py | 2339 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/check_ops.py | 2342 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/check_ops.py | 2348 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/concat_benchmark.py | 107 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/concat_benchmark.py | 129 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/cond.py | 260 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/cond.py | 269 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/cond.py | 288 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/cond.py | 339 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/control_flow_ops.py | 2062 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/control_flow_ops.py | 2081 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/conv2d_benchmark.py | 146 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/conv2d_benchmark.py | 171 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/custom_gradient.py | 305 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/custom_gradient.py | 619 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/custom_gradient.py | 662 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/embedding_ops.py | 361 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/embedding_ops.py | 362 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_impl.py | 672 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_impl.py | 677 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_impl.py | 682 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_impl.py | 2465 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_impl.py | 2472 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_impl.py | 2487 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_impl.py | 2581 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_impl.py | 2617 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_impl.py | 4659 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_impl.py | 4666 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_impl.py | 4673 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_test.py | 595 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_test.py | 625 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_test.py | 655 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_test.py | 717 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_test.py | 761 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_test.py | 803 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_test.py | 852 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_test.py | 908 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_test.py | 2598 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_test.py | 4858 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/image_ops_test.py | 5335 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/init_ops.py | 261 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/init_ops.py | 268 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/io_ops.py | 122 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/io_ops.py | 124 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/linalg/linalg_impl.py | 389 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/linalg/linalg_impl.py | 392 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/linalg/linalg_impl.py | 416 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/logging_ops.py | 115 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/logging_ops.py | 163 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/logging_ops.py | 172 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/logging_ops.py | 182 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/logging_ops.py | 193 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/logging_ops.py | 216 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/lookup_ops.py | 433 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/lookup_ops.py | 452 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/lookup_ops.py | 465 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/lookup_ops.py | 662 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/lookup_ops.py | 1009 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/matmul_benchmark.py | 98 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/metrics_impl.py | 602 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/nn_batchnorm_test.py | 143 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/nn_batchnorm_test.py | 150 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/nn_batchnorm_test.py | 580 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/nn_ops.py | 154 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/nn_ops.py | 6592 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/nn_xent_test.py | 91 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/nn_xent_test.py | 169 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/__init__.py | 34 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/__init__.py | 53 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/__init__.py | 102 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/integration_test/benchmarks/micro_benchmarks.py | 117 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/integration_test/benchmarks/micro_benchmarks.py | 118 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/integration_test/benchmarks/micro_benchmarks.py | 120 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/integration_test/benchmarks/micro_benchmarks.py | 122 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/extensions.py | 1431 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1014 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1015 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1016 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1017 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1018 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1019 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1020 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1021 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1062 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1063 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1064 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1065 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1066 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1067 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1068 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/numpy_ops/tests/np_test.py | 1069 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/parsing_config.py | 139 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/parsing_config.py | 146 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/parsing_ops.py | 1166 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_array_ops.py | 426 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_array_ops.py | 430 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_array_ops.py | 434 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_array_ops.py | 438 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_getitem.py | 176 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_string_ops.py | 125 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_string_ops.py | 549 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_string_ops.py | 554 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_string_ops.py | 606 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_string_ops.py | 611 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 134 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 192 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 194 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 213 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 216 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 228 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 231 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 233 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 241 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 400 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 451 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 495 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 535 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 575 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 608 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 611 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 613 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 621 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 990 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1024 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1035 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1040 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1042 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1076 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1104 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1135 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1137 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1167 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1197 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1223 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1225 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1248 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1250 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1278 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1280 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1482 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1484 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1486 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1807 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1810 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_tensor.py | 1945 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_util.py | 87 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_where_op.py | 149 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_where_op.py | 156 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/ragged_where_op.py | 163 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/row_partition.py | 240 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/segment_id_ops.py | 39 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ragged/segment_id_ops.py | 84 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ref_variable.py | 597 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/ref_variable.py | 600 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/script_ops.py | 501 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/script_ops.py | 512 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/script_ops.py | 520 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/script_ops.py | 527 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/script_ops.py | 531 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/script_ops.py | 830 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/script_ops.py | 859 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/sparse_ops.py | 2842 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/sparse_ops.py | 2850 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/sparse_ops.py | 2864 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/sparse_ops.py | 2881 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/special_math_ops.py | 662 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/special_math_ops.py | 668 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/special_math_ops.py | 677 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/special_math_ops.py | 685 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/special_math_ops.py | 692 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/special_math_ops.py | 699 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/special_math_ops.py | 707 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/special_math_ops.py | 716 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/special_math_ops.py | 733 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/special_math_ops.py | 741 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/split_benchmark.py | 121 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/state_ops.py | 187 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/state_ops.py | 259 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/state_ops.py | 342 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/stateless_random_ops.py | 60 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/stateless_random_ops.py | 108 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/stateless_random_ops.py | 159 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/stateless_random_ops.py | 162 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/stateless_random_ops.py | 188 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/stateless_random_ops.py | 243 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/tensor_getitem_override.py | 80 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/tensor_getitem_override.py | 84 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/tensor_getitem_override.py | 87 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/tensor_getitem_override.py | 91 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/tensor_getitem_override.py | 92 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/tensor_getitem_override.py | 93 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/tensor_getitem_override.py | 98 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/tensor_getitem_override.py | 99 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/tensor_getitem_override.py | 100 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/tensor_getitem_override.py | 104 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/tensor_getitem_override.py | 286 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/tensor_getitem_override.py | 289 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/transpose_benchmark.py | 88 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/transpose_benchmark.py | 107 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/variable_scope.py | 1484 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/variables.py | 459 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/variables.py | 462 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/variables.py | 762 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/variables.py | 808 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/variables.py | 854 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/variables.py | 948 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/variables.py | 952 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/while_loop.py | 68 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/while_loop.py | 77 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/while_loop.py | 172 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/while_loop.py | 203 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/while_loop.py | 206 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/while_loop.py | 237 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/while_loop.py | 394 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/while_loop.py | 397 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/while_loop.py | 416 | 🟢 LOW | Debug print statement found |
| tensorflow/python/ops/while_loop.py | 424 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/app_test.py | 27 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/app_test.py | 31 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/app_test.py | 35 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/benchmark.py | 127 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/gfile.py | 92 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/sysconfig.py | 67 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/sysconfig.py | 102 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/windows_lib_diagnostics.py | 121 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/windows_lib_diagnostics.py | 159 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/windows_lib_diagnostics.py | 161 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/windows_lib_diagnostics.py | 166 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/windows_lib_diagnostics.py | 168 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/windows_lib_diagnostics.py | 172 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/windows_lib_diagnostics.py | 174 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/windows_lib_diagnostics.py | 177 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/windows_lib_diagnostics.py | 181 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/windows_lib_diagnostics.py | 186 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/windows_lib_diagnostics.py | 208 | 🟢 LOW | Debug print statement found |
| tensorflow/python/platform/windows_lib_diagnostics.py | 210 | 🟢 LOW | Debug print statement found |
| tensorflow/python/profiler/pprof_profiler.py | 283 | 🟢 LOW | Debug print statement found |
| tensorflow/python/profiler/pprof_profiler.py | 430 | 🟢 LOW | Debug print statement found |
| tensorflow/python/profiler/pprof_profiler.py | 431 | 🟢 LOW | Debug print statement found |
| tensorflow/python/profiler/pprof_profiler.py | 438 | 🟢 LOW | Debug print statement found |
| tensorflow/python/profiler/profiler_client.py | 163 | 🟢 LOW | Debug print statement found |
| tensorflow/python/pywrap_tensorflow.py | 30 | 🟢 LOW | Debug print statement found |
| tensorflow/python/pywrap_tensorflow.py | 31 | 🟢 LOW | Debug print statement found |
| tensorflow/python/saved_model/load.py | 829 | 🟢 LOW | Debug print statement found |
| tensorflow/python/summary/summary_iterator.py | 51 | 🟢 LOW | Debug print statement found |
| tensorflow/python/summary/summary_iterator.py | 64 | 🟢 LOW | Debug print statement found |
| tensorflow/python/summary/summary_iterator.py | 74 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/freeze_graph.py | 284 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/grpc_tpu_worker_service.py | 64 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/grpc_tpu_worker_service.py | 71 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/grpc_tpu_worker_service.py | 76 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/grpc_tpu_worker_service.py | 88 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/grpc_tpu_worker_service.py | 96 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/import_pb_to_tensorboard.py | 60 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/inspect_checkpoint.py | 47 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/inspect_checkpoint.py | 77 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/inspect_checkpoint.py | 80 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/inspect_checkpoint.py | 82 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/inspect_checkpoint.py | 84 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/inspect_checkpoint.py | 87 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/inspect_checkpoint.py | 92 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/inspect_checkpoint.py | 95 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/inspect_checkpoint.py | 98 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/inspect_checkpoint.py | 101 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/inspect_checkpoint.py | 103 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/inspect_checkpoint.py | 112 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/inspect_checkpoint.py | 150 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/optimize_for_inference.py | 76 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/print_selective_registration_header.py | 52 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/print_selective_registration_header_test.py | 296 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 351 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 353 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 373 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 411 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 416 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 486 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 539 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 551 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 572 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 583 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 584 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 605 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 613 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 620 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 621 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 626 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 627 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 643 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 677 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 686 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 757 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 763 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 857 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 871 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 888 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli.py | 1177 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/saved_model_cli_test.py | 584 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/selective_registration_header_lib.py | 245 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/strip_unused_lib.py | 95 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/strip_unused_lib.py | 99 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tools/strip_unused_lib.py | 121 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tpu/profiler/capture_tpu_profile.py | 129 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tpu/profiler/capture_tpu_profile.py | 139 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tpu/profiler/capture_tpu_profile.py | 140 | 🟢 LOW | Debug print statement found |
| tensorflow/python/tpu/profiler/capture_tpu_profile.py | 178 | 🟢 LOW | Debug print statement found |
| tensorflow/python/trackable/asset.py | 62 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/basic_session_run_hooks.py | 474 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/basic_session_run_hooks.py | 478 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/basic_session_run_hooks.py | 481 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/basic_session_run_hooks.py | 486 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/checkpoint_utils.py | 62 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/checkpoint_utils.py | 100 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/localhost_cluster_performance_test.py | 68 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/localhost_cluster_performance_test.py | 89 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/localhost_cluster_performance_test.py | 105 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/optimizer.py | 387 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/optimizer.py | 397 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/saver.py | 1549 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/saver.py | 1561 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/session_run_hook.py | 42 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/session_run_hook.py | 48 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/session_run_hook.py | 51 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/session_run_hook.py | 55 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/session_run_hook.py | 61 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 51 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 120 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 123 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 129 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 135 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 141 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 211 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 214 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 220 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 226 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 302 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 305 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 311 | 🟢 LOW | Debug print statement found |
| tensorflow/python/training/training_util.py | 317 | 🟢 LOW | Debug print statement found |
| tensorflow/python/types/distribute.py | 293 | 🟢 LOW | Debug print statement found |
| tensorflow/python/types/distribute.py | 358 | 🟢 LOW | Debug print statement found |
| tensorflow/python/types/distribute.py | 441 | 🟢 LOW | Debug print statement found |
| tensorflow/python/types/distribute.py | 467 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/decorator_utils.py | 166 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/deprecation_test.py | 67 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/deprecation_test.py | 68 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/deprecation_test.py | 69 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/dispatch.py | 354 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/dispatch.py | 837 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/dispatch.py | 847 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/dispatch.py | 905 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/nest.py | 504 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/nest.py | 1057 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/nest_util.py | 812 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/object_identity.py | 94 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/object_identity.py | 97 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/object_identity.py | 112 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/tf_decorator.py | 33 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/tf_export.py | 101 | 🟢 LOW | Debug print statement found |
| tensorflow/python/util/tf_export.py | 104 | 🟢 LOW | Debug print statement found |
| tensorflow/security/fuzzing/tf2migration_fuzz.py | 44 | 🟢 LOW | Debug print statement found |
| tensorflow/security/fuzzing/tf2migration_fuzz.py | 45 | 🟢 LOW | Debug print statement found |
| tensorflow/security/fuzzing/tf2migration_fuzz.py | 46 | 🟢 LOW | Debug print statement found |
| tensorflow/security/fuzzing/tf2migration_fuzz.py | 47 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/benchmark/parse_onednn_benchmarks.py | 93 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/benchmark/parse_onednn_benchmarks.py | 94 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/benchmark/parse_onednn_benchmarks.py | 104 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/builds/check_system_libs.py | 98 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/builds/check_system_libs.py | 106 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/builds/check_system_libs.py | 111 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/calculate_full_version.py | 43 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/copy_binary.py | 57 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/linux/mkl/set-build-env.py | 50 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/linux/mkl/set-build-env.py | 57 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/linux/mkl/set-build-env.py | 62 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/linux/mkl/set-build-env.py | 249 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/linux/mkl/set-build-env.py | 260 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/linux/mkl/set-build-env.py | 265 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/linux/mkl/set-build-env.py | 332 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/linux/mkl/set-build-env.py | 369 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/linux/mkl/set-build-env.py | 378 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 435 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 436 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 618 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 2250 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 2251 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 2252 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 2683 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 2692 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 3585 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 3698 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 3864 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 5516 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 5517 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 5639 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 5646 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 5906 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 5911 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 5912 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 5914 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 5919 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 5920 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 5948 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 5984 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 6051 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 6052 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 6053 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 6055 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 6125 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 6132 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/update_version.py | 308 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/update_version.py | 313 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/update_version.py | 315 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/update_version.py | 374 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/update_version.py | 375 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/ci_build/update_version.py | 376 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/ast_edits.py | 363 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/ast_edits.py | 378 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/ast_edits.py | 1093 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/ast_edits.py | 1101 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/ipynb.py | 35 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade.py | 245 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade.py | 246 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade.py | 247 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade.py | 248 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade.py | 249 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade.py | 250 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade.py | 251 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade_v2_main.py | 198 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade_v2_main.py | 199 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade_v2_main.py | 200 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade_v2_main.py | 202 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade_v2_main.py | 203 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade_v2_test.py | 1256 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade_v2_test.py | 1258 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/compatibility/tf_upgrade_v2_test.py | 1259 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/docs/fenced_doctest_lib.py | 96 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/docs/fenced_doctest_lib.py | 163 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/docs/tf_doctest.py | 169 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/docs/tf_doctest.py | 171 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/docs/tf_doctest.py | 172 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 56 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 59 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 64 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 71 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 74 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 79 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 86 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 89 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 92 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 94 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 105 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 108 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 114 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 120 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 128 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 141 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 144 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 149 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 153 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 154 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 159 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 163 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 164 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 174 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 178 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 184 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 193 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 200 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 203 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 209 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 217 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 220 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 226 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 239 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 246 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/gcs_test/python/gcs_smoke.py | 250 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/git/gen_git_source.py | 134 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/git/gen_git_source.py | 135 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/git/gen_git_source.py | 136 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/pip_package/check_load_py_test.py | 84 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/pip_package/pip_smoke_test.py | 127 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/pip_package/pip_smoke_test.py | 141 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/pip_package/pip_smoke_test.py | 167 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/pip_package/pip_smoke_test.py | 168 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/pip_package/pip_smoke_test.py | 170 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/pip_package/pip_smoke_test.py | 172 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/pip_package/pip_smoke_test.py | 173 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/pip_package/pip_smoke_test.py | 179 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/pip_package/pip_smoke_test.py | 187 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/compat_checker/compat_checker.py | 743 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/compat_checker/compat_checker.py | 744 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/compat_checker/compat_checker.py | 745 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/compat_checker/compat_checker.py | 746 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/compat_checker/compat_checker.py | 756 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/compat_checker/compat_checker.py | 758 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/compat_checker/compat_checker.py | 759 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 163 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 165 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 184 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 199 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 214 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 229 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 254 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 283 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 316 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 349 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 354 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 378 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 383 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 407 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 413 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 430 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 445 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 460 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 478 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 597 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 599 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 600 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 603 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 605 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 608 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 610 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 613 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 615 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 626 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/config_detector.py | 632 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/data/cuda_compute_capability.py | 184 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/data/cuda_compute_capability.py | 214 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/data/cuda_compute_capability.py | 215 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/data/cuda_compute_capability.py | 217 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tensorflow_builder/config_detector/data/cuda_compute_capability.py | 227 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/test/run_and_gather_logs.py | 104 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/test/system_info.py | 23 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/test/upload_test_benchmarks.py | 209 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tf_sig_build_dockerfiles/devel.usertools/squash_testlogs.py | 42 | 🟢 LOW | Debug print statement found |
| tensorflow/tools/tf_sig_build_dockerfiles/devel.usertools/squash_testlogs.py | 55 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 29 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 34 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 45 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 50 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 60 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 67 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 75 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 127 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 285 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 286 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 287 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 288 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 291 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 297 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 306 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 307 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 313 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 314 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 323 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 326 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/benchmarks/compare_with_baseline.py | 332 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/pr_size_check.py | 42 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/pr_size_check.py | 49 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/pr_size_check.py | 70 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/pr_size_check.py | 76 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/pr_size_check.py | 78 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/pr_size_check.py | 81 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/rollback_notification.py | 32 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/rollback_notification.py | 35 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/rollback_notification.py | 58 | 🟢 LOW | Debug print statement found |
| third_party/xla/.github/workflows/rollback_notification.py | 60 | 🟢 LOW | Debug print statement found |
| third_party/xla/third_party/gpus/check_cuda_libs.py | 77 | 🟢 LOW | Debug print statement found |
| third_party/xla/third_party/gpus/find_cuda_config.py | 642 | 🟢 LOW | Debug print statement found |
| third_party/xla/third_party/gpus/find_rocm_config.py | 358 | 🟢 LOW | Debug print statement found |
| third_party/xla/third_party/gpus/find_sycl_config.py | 205 | 🟢 LOW | Debug print statement found |
| third_party/xla/third_party/implib_so/get_symbols.py | 34 | 🟢 LOW | Debug print statement found |
| third_party/xla/third_party/transformer_engine/codegen.py | 37 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/gemma2/flax_2b/benchmark.py | 60 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/gemma2/flax_2b/benchmark.py | 70 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/gemma2/flax_2b/benchmark.py | 79 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/gemma2/pytorch_2b/benchmark.py | 72 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/gemma2/pytorch_2b/benchmark.py | 82 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/gemma2/pytorch_2b/benchmark.py | 91 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/keras/benchmark.py | 74 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/keras/benchmark.py | 84 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/keras/benchmark.py | 87 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/keras/benchmark.py | 88 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/keras/benchmark.py | 89 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/keras/benchmark.py | 100 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/keras/benchmark.py | 101 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/keras/benchmark.py | 105 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/keras/benchmark.py | 134 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/keras/benchmark.py | 171 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/keras/benchmark.py | 179 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/keras/benchmark.py | 181 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/cpu/benchmarks/e2e/keras/benchmark.py | 182 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/gpu/codegen/tools/ncu_rep.py | 102 | 🟢 LOW | Debug print statement found |
| third_party/xla/xla/backends/gpu/codegen/tools/ncu_rep.py | 117 | 🟢 LOW | Debug print statement found |

### Maintenance Items (77)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| tensorflow/c/c_api_experimental.h | 43 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/lite/quantization/common/quantization_lib/quantization_config.h | 147 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/lite/quantization/common/quantization_lib/quantization_utils.h | 140 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/lite/quantization/common/quantization_lib/quantization_utils.h | 242 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/lite/quantization/common/quantization_lib/quantization_utils.h | 271 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/lite/stablehlo/transforms/legalize_hlo_conversions/op_util_common.h | 50 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/common/quantization_lib/quantization_config.h | 142 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/common/quantization_lib/quantization_utils.h | 139 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/common/quantization_lib/quantization_utils.h | 243 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/common/quantization_lib/quantization_utils.h | 271 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/stablehlo/cc/calibration/component.h | 46 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/stablehlo/cc/saved_model_export.h | 66 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/stablehlo/cc/saved_model_export.h | 136 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/stablehlo/cc/saved_model_import.h | 53 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/stablehlo/cc/saved_model_import.h | 78 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/stablehlo/cc/static_range_ptq.h | 41 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/stablehlo/python/integration_test/quantize_model_test.py | 265 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/stablehlo/python/integration_test/quantize_model_test.py | 396 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/stablehlo/python/integration_test/quantize_model_test.py | 400 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/stablehlo/python/quantization.py | 56 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/tensorflow/python/integration_test/quantize_model_test.py | 2090 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/tensorflow/python/integration_test/quantize_model_test.py | 5564 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/tensorflow/python/integration_test/quantize_model_test.py | 5663 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/tensorflow/python/integration_test/quantize_model_test.py | 5987 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/tensorflow/python/integration_test/quantize_model_test.py | 6165 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/tensorflow/python/py_function_lib.py | 678 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/tensorflow/python/quantize_model.py | 754 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/tensorflow/python/type_casters.h | 115 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/tensorflow/utils/error_util.h | 34 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/tests/adam_test.py | 52 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/tests/adam_test.py | 95 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/tests/adam_test.py | 138 | ⚪ INFO | TODO comment found |
| tensorflow/core/common_runtime/next_pluggable_device/c/tf_rendezvous_c_api.h | 63 | ⚪ INFO | TODO comment found |
| tensorflow/core/framework/tensor.h | 763 | ⚪ INFO | TODO comment found |
| tensorflow/core/kernels/batching_util/batch_scheduler.h | 124 | ⚪ INFO | TODO comment found |
| tensorflow/core/kernels/batching_util/batch_scheduler.h | 615 | ⚪ INFO | TODO comment found |
| tensorflow/core/kernels/batching_util/batch_stats.h | 92 | ⚪ INFO | TODO comment found |
| tensorflow/core/kernels/depthwise_conv_op.h | 223 | ⚪ INFO | TODO comment found |
| tensorflow/core/kernels/depthwise_conv_op_gpu.h | 1029 | ⚪ INFO | TODO comment found |
| tensorflow/core/kernels/matmul_op_impl.h | 988 | ⚪ INFO | TODO comment found |
| tensorflow/core/kernels/reduction_ops.h | 61 | ⚪ INFO | TODO comment found |
| tensorflow/core/kernels/scatter_functor.h | 179 | ⚪ INFO | TODO comment found |
| tensorflow/core/kernels/segment_reduction_ops_impl.h | 221 | ⚪ INFO | TODO comment found |
| tensorflow/core/util/cuda_sparse.h | 82 | ⚪ INFO | TODO comment found |
| tensorflow/go/graph.go | 71 | ⚪ INFO | TODO comment found |
| tensorflow/lite/core/experimental/acceleration/mini_benchmark/c/c_api.h | 74 | ⚪ INFO | TODO comment found |
| tensorflow/lite/kernels/internal/reference/integer_ops/add.h | 40 | ⚪ INFO | TODO comment found |
| tensorflow/lite/kernels/internal/reference/integer_ops/add.h | 63 | ⚪ INFO | TODO comment found |
| tensorflow/lite/kernels/internal/reference/integer_ops/add.h | 127 | ⚪ INFO | TODO comment found |
| tensorflow/lite/kernels/internal/reference/sub.h | 192 | ⚪ INFO | TODO comment found |
| tensorflow/lite/python/convert.py | 678 | ⚪ INFO | TODO comment found |
| tensorflow/lite/python/lite.py | 938 | ⚪ INFO | TODO comment found |
| tensorflow/lite/testing/matchers.h | 47 | ⚪ INFO | TODO comment found |
| tensorflow/lite/testing/matchers.h | 48 | ⚪ INFO | TODO comment found |
| tensorflow/python/eager/memory_tests/memory_test_util.py | 50 | 🟡 MEDIUM | FIXME comment indicating known issue |
| tensorflow/python/eager/polymorphic_function/polymorphic_function.py | 765 | ⚪ INFO | TODO comment found |
| tensorflow/python/eager/pywrap_tensor_conversion.h | 77 | ⚪ INFO | TODO comment found |
| tensorflow/python/eager/pywrap_tensor_conversion.h | 98 | ⚪ INFO | TODO comment found |
| tensorflow/python/framework/tensor_util.py | 57 | ⚪ INFO | TODO comment found |
| tensorflow/python/kernel_tests/linalg/linear_operator_inversion_test.py | 36 | ⚪ INFO | TODO comment found |
| tensorflow/python/ops/math_ops.py | 1111 | ⚪ INFO | TODO comment found |
| tensorflow/python/saved_model/function_deserialization.py | 622 | ⚪ INFO | TODO comment found |
| tensorflow/python/saved_model/load.py | 605 | ⚪ INFO | TODO comment found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 882 | ⚪ INFO | TODO comment found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 2011 | ⚪ INFO | TODO comment found |
| tensorflow/tools/ci_build/osx/arm64/tensorflow_metal_plugin_test.py | 4290 | ⚪ INFO | TODO comment found |
| tensorflow/tools/proto_splitter/constants.py | 20 | ⚪ INFO | TODO comment found |
| third_party/xla/build_tools/configure/configure.py | 278 | ⚪ INFO | TODO comment found |
| third_party/xla/xla/backends/cpu/transforms/ynn_matcher.h | 89 | ⚪ INFO | TODO comment found |
| third_party/xla/xla/backends/gpu/autotuner/triton/dot_search_space.h | 96 | ⚪ INFO | TODO comment found |
| third_party/xla/xla/backends/profiler/gpu/rocm_collector.h | 120 | 🟡 MEDIUM | FIXME comment indicating known issue |
| third_party/xla/xla/codegen/intrinsic/vec_name_mangler.h | 105 | ⚪ INFO | TODO comment found |
| third_party/xla/xla/codegen/tiling/experimental/tiled_hlo.h | 94 | ⚪ INFO | TODO comment found |
| third_party/xla/xla/codegen/tiling/experimental/tiled_hlo.h | 205 | ⚪ INFO | TODO comment found |
| third_party/xla/xla/hlo/analysis/symbolic_expr.h | 50 | ⚪ INFO | TODO comment found |
| third_party/xla/xla/hlo/analysis/symbolic_expr.h | 84 | ⚪ INFO | TODO comment found |
| third_party/xla/xla/hlo/analysis/symbolic_expr.h | 195 | ⚪ INFO | TODO comment found |

## Detailed Findings

### MAINTENANCE

**Total:** 77 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| tensorflow/python/eager/memory_tests/memory_test_util.py | 50 | 🟡 MEDIUM | FIXME comment indicating known issue |
| third_party/xla/xla/backends/profiler/gpu/rocm_collector.h | 120 | 🟡 MEDIUM | FIXME comment indicating known issue |
| tensorflow/compiler/mlir/lite/quantization/common/quantization_lib/quantization_utils.h | 140 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/lite/quantization/common/quantization_lib/quantization_utils.h | 242 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/lite/quantization/common/quantization_lib/quantization_utils.h | 271 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/lite/stablehlo/transforms/legalize_hlo_conversions/op_util_common.h | 50 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/common/quantization_lib/quantization_config.h | 142 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/common/quantization_lib/quantization_utils.h | 139 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/common/quantization_lib/quantization_utils.h | 243 | ⚪ INFO | TODO comment found |
| tensorflow/compiler/mlir/quantization/common/quantization_lib/quantization_utils.h | 271 | ⚪ INFO | TODO comment found |

*... and 67 more*

### SECURITY

**Total:** 13 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| tensorflow/examples/speech_commands/input_data.py | 100 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tensorflow/lite/ios/extract_object_files.py | 73 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tensorflow/lite/python/convert.py | 1051 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tensorflow/python/data/experimental/benchmarks/map_and_batch_benchmark.py | 103 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tensorflow/python/debug/lib/grpc_debug_test_server.py | 181 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tensorflow/python/framework/function.py | 547 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tensorflow/python/framework/load_library.py | 64 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tensorflow/python/keras/layers/legacy_rnn/rnn_cell_wrapper_impl.py | 180 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tensorflow/python/keras/utils/data_utils.py | 291 | 🟡 MEDIUM | Weak cryptographic algorithm detected |
| tensorflow/python/ops/data_flow_ops.py | 758 | 🟡 MEDIUM | Weak cryptographic algorithm detected |

*... and 3 more*

### CODE_QUALITY

**Total:** 1313 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/workflows/create_issue.js | 30 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/create_issue.js | 36 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/create_issue.js | 44 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/create_issue.js | 45 | 🟢 LOW | Debug console.log statement found |
| .github/workflows/create_issue.js | 53 | 🟢 LOW | Debug console.log statement found |
| ci/official/utilities/convert_msys_paths_to_win_paths.py | 62 | 🟢 LOW | Debug print statement found |
| ci/official/utilities/extract_resultstore_links.py | 123 | 🟢 LOW | Debug print statement found |
| ci/official/utilities/extract_resultstore_links.py | 183 | 🟢 LOW | Debug print statement found |
| ci/official/utilities/extract_resultstore_links.py | 251 | 🟢 LOW | Debug print statement found |
| ci/official/utilities/extract_resultstore_links.py | 256 | 🟢 LOW | Debug print statement found |

*... and 1303 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 98/100 (Tier A)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -0 | Good ✅ |
| Code Quality | -1388 | Needs improvement ⚠️ |
| Test Coverage | +1 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 19.8%. Aim for at least 70% coverage.

2. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

