# Repository Analysis Report: elastic/elasticsearch

**Generated:** 2026-06-19 09:08:04 CDT

**Quality Score:** 74/100 (Tier C)

## Executive Summary

- **Overall Quality:** C (74/100)
- **Total Findings:** 310
- **Critical Issues:** 0
- **High Issues:** 49
- **Medium Issues:** 40
- **Low Issues:** 62
- **Files Scanned:** 43745

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| security | 89 | High |
| code_quality | 62 | Medium |
| maintenance | 159 | Medium |

## Repository Overview

- **Owner:** elastic
- **Name:** elasticsearch
- **Description:** Free and Open Source, Distributed, RESTful Search Engine
- **Primary Language:** Java
- **Stars:** 77077
- **Forks:** 25838
- **Open Issues:** 5847
- **Size:** 1666474 KB
- **Created:** 2010-02-08
- **Last Updated:** 2026-06-19
- **Default Branch:** main

**Topics:** elasticsearch, java, search-engine

## Security Analysis

⚠️ **Found 89 security-related findings.**

### ⚠️ High Severity Issues (49)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 84 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 96 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 107 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 120 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 132 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 143 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 152 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 161 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 170 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 179 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 189 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 221 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 39 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 80 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 89 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 98 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 108 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 117 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 126 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 135 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 144 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 157 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 166 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 175 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 184 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 193 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 202 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 215 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddStringKeyStoreCommandTests.java | 230 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/ListKeyStoreCommandTests.java | 69 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/RemoveSettingKeyStoreCommandTests.java | 38 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/RemoveSettingKeyStoreCommandTests.java | 46 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/RemoveSettingKeyStoreCommandTests.java | 55 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/RemoveSettingKeyStoreCommandTests.java | 64 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/RemoveSettingKeyStoreCommandTests.java | 72 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/RemoveSettingKeyStoreCommandTests.java | 84 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/ShowKeyStoreCommandTests.java | 101 | 🟠 HIGH | Hardcoded username/password detected |
| libs/ssl-config/src/test/java/org/elasticsearch/common/ssl/PemUtilsTests.java | 38 | 🟠 HIGH | Hardcoded username/password detected |
| libs/web-utils/src/main/java/org/elasticsearch/web/UriParts.java | 34 | 🟠 HIGH | Hardcoded username/password detected |
| libs/web-utils/src/main/java/org/elasticsearch/web/UriParts.java | 35 | 🟠 HIGH | Hardcoded username/password detected |
| modules/reindex/src/test/java/org/elasticsearch/reindex/ReindexFromRemoteWithAuthTests.java | 177 | 🟠 HIGH | Hardcoded username/password detected |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/DockerTests.java | 111 | 🟠 HIGH | Hardcoded username/password detected |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/DockerTests.java | 597 | 🟠 HIGH | Hardcoded username/password detected |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/DockerTests.java | 640 | 🟠 HIGH | Hardcoded username/password detected |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/DockerTests.java | 676 | 🟠 HIGH | Hardcoded username/password detected |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/DockerTests.java | 716 | 🟠 HIGH | Hardcoded username/password detected |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/DockerTests.java | 801 | 🟠 HIGH | Hardcoded username/password detected |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/KeystoreManagementTests.java | 59 | 🟠 HIGH | Hardcoded username/password detected |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/PasswordToolsTests.java | 35 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 34.6% | Poor ❌ |
| Documentation | 1.0% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (62)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .buildkite/scripts/flakiness-detection/entrypoints/analyze.ts | 12 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/local.ts | 63 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 30 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 43 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 55 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 58 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 66 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 78 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 84 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 91 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 93 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 96 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 99 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 101 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 103 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 105 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 107 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 112 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 115 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 130 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/runners/buildkite.ts | 189 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/runners/buildkite.ts | 190 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/runners/buildkite.ts | 193 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/runners/local.ts | 20 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/runners/local.ts | 21 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/pull-request/pipeline.generate.ts | 11 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/pull-request/pipeline.generate.ts | 12 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/pull-request/pipeline.generate.ts | 17 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/pull-request/pipeline.generate.ts | 18 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/pull-request/pipeline.ts | 167 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/pull-request/pipeline.ts | 175 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/pull-request/pipeline.ts | 184 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/pull-request/pipeline.ts | 185 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/main.ts | 60 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/main.ts | 82 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/main.ts | 84 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/main.ts | 85 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/main.ts | 87 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/main.ts | 88 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 139 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 140 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 142 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 143 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 144 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 154 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 156 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 168 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 169 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 172 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 174 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 179 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 180 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 183 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 185 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/summarize-task-status.ts | 203 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/transform-task-status.ts | 27 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/transform-task-status.ts | 28 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/smart-retry/transform-task-status.ts | 30 | 🟢 LOW | Debug console.log statement found |
| dev-tools/prepare_release_update_documentation.py | 91 | 🟢 LOW | Debug print statement found |
| dev-tools/prepare_release_update_documentation.py | 117 | 🟢 LOW | Debug print statement found |
| dev-tools/prepare_release_update_documentation.py | 127 | 🟢 LOW | Debug print statement found |
| dev-tools/prepare_release_update_documentation.py | 129 | 🟢 LOW | Debug print statement found |

### Maintenance Items (159)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| benchmarks/src/main/java/org/elasticsearch/benchmark/vector/scorer/VectorScorerBQBenchmark.java | 89 | ⚪ INFO | TODO comment found |
| build-tools/src/main/java/org/elasticsearch/gradle/plugin/BasePluginBuildPlugin.java | 85 | ⚪ INFO | TODO comment found |
| build-tools/src/main/java/org/elasticsearch/gradle/plugin/BasePluginBuildPlugin.java | 203 | ⚪ INFO | TODO comment found |
| build-tools/src/main/java/org/elasticsearch/gradle/testclusters/ElasticsearchNode.java | 622 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/BwcSetupExtension.java | 121 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/ElasticsearchJavaBasePlugin.java | 119 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/ElasticsearchTestBasePlugin.java | 127 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/ElasticsearchTestBasePlugin.java | 204 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/ElasticsearchTestBasePlugin.java | 207 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/ElasticsearchTestBasePlugin.java | 210 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/ElasticsearchTestBasePlugin.java | 213 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/dependencies/rules/ComponentMetadataRulesPlugin.java | 209 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/dependencies/rules/ComponentMetadataRulesPlugin.java | 229 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/doc/DocsTestPlugin.java | 90 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/precommit/DependencyLicensesTask.java | 109 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/precommit/DependencyLicensesTask.java | 222 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/precommit/ForbiddenPatternsTask.java | 200 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/precommit/SplitPackagesAuditTask.java | 293 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/test/DistroTestPlugin.java | 83 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/test/InternalClusterTestPlugin.java | 42 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/test/rest/RestTestUtil.java | 84 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/test/rest/compat/compat/AbstractYamlRestCompatTestPlugin.java | 296 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/test/rest/compat/compat/RestCompatTestTransformTask.java | 484 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/transport/TransportVersionResourcesService.java | 311 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/transport/ValidateTransportVersionResourcesTask.java | 284 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/test/java/org/elasticsearch/gradle/internal/release/PruneChangelogsTaskTests.java | 48 | ⚪ INFO | TODO comment found |
| docs/src/yamlRestTest/java/org/elasticsearch/smoketest/DocsClientYamlTestSuiteIT.java | 102 | ⚪ INFO | TODO comment found |
| docs/src/yamlRestTest/java/org/elasticsearch/smoketest/DocsClientYamlTestSuiteIT.java | 291 | ⚪ INFO | TODO comment found |
| libs/cli-terminal/src/main/java/org/elasticsearch/cli/terminal/Terminal.java | 363 | ⚪ INFO | TODO comment found |
| libs/core/src/main/java/org/elasticsearch/core/IOUtils.java | 210 | ⚪ INFO | TODO comment found |
| libs/core/src/main/java/org/elasticsearch/core/IOUtils.java | 258 | ⚪ INFO | TODO comment found |
| libs/core/src/main/java/org/elasticsearch/core/PathUtils.java | 26 | ⚪ INFO | TODO comment found |
| libs/entitlement/qa/entitlement-test-plugin/src/main/java/org/elasticsearch/entitlement/qa/test/JvmActions.java | 44 | ⚪ INFO | TODO comment found |
| libs/entitlement/src/main/java/module-info.java | 31 | ⚪ INFO | TODO comment found |
| libs/entitlement/src/main/java/org/elasticsearch/entitlement/runtime/policy/FileAccessTree.java | 261 | ⚪ INFO | TODO comment found |
| libs/entitlement/src/main/java/org/elasticsearch/entitlement/runtime/policy/FileAccessTree.java | 270 | ⚪ INFO | TODO comment found |
| libs/entitlement/src/main/java/org/elasticsearch/entitlement/runtime/policy/FileAccessTree.java | 274 | ⚪ INFO | TODO comment found |
| libs/entitlement/src/main/java/org/elasticsearch/entitlement/runtime/policy/PolicyUtils.java | 131 | ⚪ INFO | TODO comment found |
| libs/entitlement/src/test/java/org/elasticsearch/entitlement/runtime/policy/PolicyCheckerImplTests.java | 126 | ⚪ INFO | TODO comment found |
| libs/geo/src/main/java/org/elasticsearch/geometry/simplify/GeometrySimplifier.java | 356 | ⚪ INFO | TODO comment found |
| libs/geo/src/main/java/org/elasticsearch/geometry/utils/SpatialEnvelopeVisitor.java | 246 | ⚪ INFO | TODO comment found |
| libs/geo/src/main/java/org/elasticsearch/geometry/utils/SpatialEnvelopeVisitor.java | 320 | ⚪ INFO | TODO comment found |
| libs/geo/src/main/java/org/elasticsearch/geometry/utils/WellKnownText.java | 649 | ⚪ INFO | TODO comment found |
| libs/geo/src/test/java/org/elasticsearch/geometry/simplify/Vector3DTests.java | 223 | ⚪ INFO | TODO comment found |
| libs/geo/src/test/java/org/elasticsearch/geometry/simplify/Vector3DTests.java | 228 | ⚪ INFO | TODO comment found |
| libs/gpu-codec/src/main/java/org/elasticsearch/gpu/GPUSupport.java | 37 | ⚪ INFO | TODO comment found |
| libs/gpu-codec/src/main/java/org/elasticsearch/gpu/codec/ES92GpuHnswVectorsWriter.java | 81 | ⚪ INFO | TODO comment found |
| libs/gpu-codec/src/main/java/org/elasticsearch/gpu/codec/ES92GpuHnswVectorsWriter.java | 424 | ⚪ INFO | TODO comment found |
| libs/gpu-codec/src/main/java/org/elasticsearch/gpu/codec/ES92GpuHnswVectorsWriter.java | 690 | ⚪ INFO | TODO comment found |
| libs/gpu-codec/src/main/java/org/elasticsearch/gpu/codec/ES92GpuHnswVectorsWriter.java | 725 | ⚪ INFO | TODO comment found |
| libs/gpu-codec/src/main/java/org/elasticsearch/gpu/codec/ES92GpuHnswVectorsWriter.java | 753 | ⚪ INFO | TODO comment found |
| libs/gpu-codec/src/main/java/org/elasticsearch/gpu/codec/ES92GpuHnswVectorsWriter.java | 814 | ⚪ INFO | TODO comment found |
| libs/gpu-codec/src/main/java/org/elasticsearch/gpu/codec/ES92GpuHnswVectorsWriter.java | 840 | ⚪ INFO | TODO comment found |
| libs/gpu-codec/src/main/java/org/elasticsearch/gpu/codec/ES92GpuHnswVectorsWriter.java | 861 | ⚪ INFO | TODO comment found |
| libs/gpu-codec/src/main/java/org/elasticsearch/gpu/codec/MergedQuantizedVectorValues.java | 160 | ⚪ INFO | TODO comment found |
| libs/gpu-codec/src/test/java/org/elasticsearch/gpu/codec/DatasetUtilsTests.java | 31 | ⚪ INFO | TODO comment found |
| libs/gpu-codec/src/test/java/org/elasticsearch/gpu/codec/DatasetUtilsTests.java | 70 | ⚪ INFO | TODO comment found |
| libs/native/src/main/java/org/elasticsearch/nativeaccess/MacNativeAccess.java | 62 | ⚪ INFO | TODO comment found |
| libs/simdvec/native/src/vec/headers/score_common.h | 86 | ⚪ INFO | TODO comment found |
| libs/simdvec/native/src/vec/headers/score_common.h | 130 | ⚪ INFO | TODO comment found |
| libs/simdvec/src/main/java/org/elasticsearch/simdvec/internal/vectorization/PanamaESVectorUtilSupport.java | 2138 | ⚪ INFO | TODO comment found |
| libs/simdvec/src/test/java/org/elasticsearch/simdvec/internal/vectorization/ES940OSQVectorsScorerTests.java | 641 | ⚪ INFO | TODO comment found |
| libs/simdvec/src/test/java/org/elasticsearch/simdvec/internal/vectorization/ES940OSQVectorsScorerTests.java | 757 | ⚪ INFO | TODO comment found |
| libs/tdigest/src/main/java/org/elasticsearch/tdigest/IntAVLTree.java | 316 | ⚪ INFO | TODO comment found |
| libs/x-content/impl/src/main/java/org/elasticsearch/xcontent/provider/json/JsonXContentGenerator.java | 374 | ⚪ INFO | TODO comment found |
| libs/x-content/src/main/java/org/elasticsearch/xcontent/Text.java | 165 | ⚪ INFO | TODO comment found |
| libs/x-content/src/main/java/org/elasticsearch/xcontent/XContentParserConfiguration.java | 59 | ⚪ INFO | TODO comment found |
| modules/aggregations/src/internalClusterTest/java/org/elasticsearch/aggregations/bucket/TimeSeriesAggregationsIT.java | 402 | ⚪ INFO | TODO comment found |
| modules/aggregations/src/internalClusterTest/java/org/elasticsearch/aggregations/pipeline/DateDerivativeIT.java | 88 | ⚪ INFO | TODO comment found |
| modules/aggregations/src/main/java/org/elasticsearch/aggregations/bucket/histogram/AutoDateHistogramAggregator.java | 102 | ⚪ INFO | TODO comment found |
| modules/aggregations/src/main/java/org/elasticsearch/aggregations/bucket/timeseries/InternalTimeSeries.java | 40 | ⚪ INFO | TODO comment found |
| modules/aggregations/src/main/java/org/elasticsearch/aggregations/bucket/timeseries/InternalTimeSeries.java | 199 | ⚪ INFO | TODO comment found |
| modules/aggregations/src/main/java/org/elasticsearch/aggregations/metric/MatrixStatsAggregator.java | 100 | ⚪ INFO | TODO comment found |
| modules/aggregations/src/main/java/org/elasticsearch/aggregations/metric/MatrixStatsAggregatorFactory.java | 59 | ⚪ INFO | TODO comment found |
| modules/aggregations/src/main/java/org/elasticsearch/aggregations/pipeline/BucketSelectorPipelineAggregator.java | 67 | ⚪ INFO | TODO comment found |
| modules/aggregations/src/test/java/org/elasticsearch/aggregations/bucket/histogram/AutoDateHistogramAggregatorTests.java | 112 | ⚪ INFO | TODO comment found |
| modules/analysis-common/src/main/java/org/elasticsearch/analysis/common/ESSynonymMapBuilder.java | 105 | ⚪ INFO | TODO comment found |
| modules/analysis-common/src/test/java/org/elasticsearch/analysis/common/CommonAnalysisFactoryTests.java | 153 | ⚪ INFO | TODO comment found |
| modules/data-streams/src/internalClusterTest/java/org/elasticsearch/datastreams/DataStreamIT.java | 336 | ⚪ INFO | TODO comment found |
| modules/data-streams/src/test/java/org/elasticsearch/datastreams/lifecycle/DataStreamLifecycleServiceTests.java | 881 | ⚪ INFO | TODO comment found |
| modules/ingest-attachment/src/main/java/org/elasticsearch/ingest/attachment/AttachmentProcessor.java | 241 | ⚪ INFO | TODO comment found |
| modules/ip-location/src/main/java/org/elasticsearch/ingest/geoip/DatabaseNodeService.java | 614 | ⚪ INFO | TODO comment found |
| modules/ip-location/src/main/java/org/elasticsearch/ingest/geoip/IpLocationDownloadConsumers.java | 154 | ⚪ INFO | TODO comment found |
| modules/ip-location/src/test/java/org/elasticsearch/ingest/geoip/EnterpriseGeoIpDownloaderTests.java | 84 | ⚪ INFO | TODO comment found |
| modules/lang-expression/src/internalClusterTest/java/org/elasticsearch/script/expression/MoreExpressionIT.java | 55 | ⚪ INFO | TODO comment found |
| modules/lang-expression/src/internalClusterTest/java/org/elasticsearch/script/expression/StoredExpressionIT.java | 27 | ⚪ INFO | TODO comment found |
| modules/lang-expression/src/main/java/org/elasticsearch/script/expression/ExpressionScriptEngine.java | 291 | ⚪ INFO | TODO comment found |
| modules/lang-expression/src/main/java/org/elasticsearch/script/expression/ExpressionScriptEngine.java | 362 | ⚪ INFO | TODO comment found |
| modules/lang-expression/src/main/java/org/elasticsearch/script/expression/ExpressionScriptEngine.java | 487 | ⚪ INFO | TODO comment found |
| modules/lang-mustache/src/main/java/module-info.java | 17 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/main/java/org/elasticsearch/painless/AnalyzerCaster.java | 563 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/main/java/org/elasticsearch/painless/AnalyzerCaster.java | 564 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/main/java/org/elasticsearch/painless/AnalyzerCaster.java | 565 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/main/java/org/elasticsearch/painless/MethodWriter.java | 112 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/main/java/org/elasticsearch/painless/MethodWriter.java | 113 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/main/java/org/elasticsearch/painless/MethodWriter.java | 124 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/main/java/org/elasticsearch/painless/PainlessScript.java | 72 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/main/java/org/elasticsearch/painless/SimpleChecksAdapter.java | 25 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/main/java/org/elasticsearch/painless/action/PainlessExecuteAction.java | 551 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/main/java/org/elasticsearch/painless/phase/DefaultSemanticAnalysisPhase.java | 3078 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/test/java/org/elasticsearch/painless/AdditionTests.java | 13 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/test/java/org/elasticsearch/painless/DivisionTests.java | 13 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/test/java/org/elasticsearch/painless/DivisionTests.java | 16 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/test/java/org/elasticsearch/painless/MultiplicationTests.java | 13 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/test/java/org/elasticsearch/painless/MultiplicationTests.java | 16 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/test/java/org/elasticsearch/painless/NeedsScoreTests.java | 31 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/test/java/org/elasticsearch/painless/RemainderTests.java | 13 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/test/java/org/elasticsearch/painless/RemainderTests.java | 16 | ⚪ INFO | TODO comment found |
| modules/lang-painless/src/test/java/org/elasticsearch/painless/SubtractionTests.java | 13 | ⚪ INFO | TODO comment found |
| modules/legacy-geo/src/main/java/org/elasticsearch/legacygeo/builders/PolygonBuilder.java | 608 | ⚪ INFO | TODO comment found |
| modules/legacy-geo/src/test/java/org/elasticsearch/legacygeo/test/ElasticsearchGeoAssertions.java | 141 | ⚪ INFO | TODO comment found |
| modules/legacy-geo/src/test/java/org/elasticsearch/legacygeo/test/ElasticsearchGeoAssertions.java | 151 | ⚪ INFO | TODO comment found |
| modules/mapper-extras/src/test/java/org/elasticsearch/index/mapper/extras/ScaledFloatFieldMapperTests.java | 516 | ⚪ INFO | TODO comment found |
| modules/mapper-extras/src/test/java/org/elasticsearch/index/mapper/extras/ScaledFloatFieldMapperTests.java | 519 | ⚪ INFO | TODO comment found |
| modules/mapper-extras/src/test/java/org/elasticsearch/index/mapper/extras/ScaledFloatFieldMapperTests.java | 522 | ⚪ INFO | TODO comment found |
| modules/mapper-extras/src/test/java/org/elasticsearch/index/mapper/extras/ScaledFloatFieldMapperTests.java | 525 | ⚪ INFO | TODO comment found |
| modules/mapper-extras/src/test/java/org/elasticsearch/index/mapper/extras/TokenCountFieldMapperTests.java | 140 | ⚪ INFO | TODO comment found |
| modules/parent-join/src/internalClusterTest/java/org/elasticsearch/join/aggregations/AbstractParentChildTestCase.java | 57 | ⚪ INFO | TODO comment found |
| modules/parent-join/src/main/java/org/elasticsearch/join/query/HasChildQueryBuilder.java | 372 | ⚪ INFO | TODO comment found |
| modules/reindex/src/main/java/org/elasticsearch/reindex/Reindexer.java | 245 | ⚪ INFO | TODO comment found |
| modules/reindex/src/main/java/org/elasticsearch/reindex/Reindexer.java | 829 | ⚪ INFO | TODO comment found |
| modules/reindex/src/main/java/org/elasticsearch/reindex/RestUpdateAndDeleteByQueryRethrottleAction.java | 56 | ⚪ INFO | TODO comment found |
| modules/reindex/src/main/java/org/elasticsearch/reindex/TransportDeleteByQueryAction.java | 70 | ⚪ INFO | TODO comment found |
| modules/reindex/src/main/java/org/elasticsearch/reindex/TransportUpdateByQueryAction.java | 80 | ⚪ INFO | TODO comment found |
| modules/repository-azure/src/main/java/org/elasticsearch/repositories/azure/AzureStorageService.java | 282 | ⚪ INFO | TODO comment found |
| modules/repository-azure/src/main/java/org/elasticsearch/repositories/azure/AzureStorageService.java | 295 | ⚪ INFO | TODO comment found |
| modules/repository-gcs/src/main/java/org/elasticsearch/repositories/gcs/GoogleCloudStorageService.java | 364 | ⚪ INFO | TODO comment found |
| modules/repository-gcs/src/main/java/org/elasticsearch/repositories/gcs/GoogleCloudStorageService.java | 379 | ⚪ INFO | TODO comment found |
| modules/repository-s3/src/internalClusterTest/java/org/elasticsearch/repositories/s3/S3BlobStoreRepositoryTimeoutTests.java | 145 | ⚪ INFO | TODO comment found |
| modules/repository-s3/src/main/java/org/elasticsearch/repositories/s3/S3ClientsManager.java | 105 | ⚪ INFO | TODO comment found |
| modules/repository-s3/src/main/java/org/elasticsearch/repositories/s3/S3ClientsManager.java | 125 | ⚪ INFO | TODO comment found |
| modules/repository-s3/src/main/java/org/elasticsearch/repositories/s3/S3Service.java | 164 | ⚪ INFO | TODO comment found |
| modules/transport-netty4/src/internalClusterTest/java/org/elasticsearch/http/netty4/Netty4HttpRequestSizeLimitIT.java | 56 | ⚪ INFO | TODO comment found |
| modules/transport-netty4/src/main/java/org/elasticsearch/transport/netty4/Netty4TcpChannel.java | 84 | ⚪ INFO | TODO comment found |
| modules/transport-netty4/src/yamlRestTest/java/org/elasticsearch/http/netty4/Netty4ClientYamlTestSuiteIT.java | 24 | ⚪ INFO | TODO comment found |
| plugins/analysis-smartcn/src/main/java/org/elasticsearch/plugin/analysis/smartcn/AnalysisSmartChinesePlugin.java | 30 | ⚪ INFO | TODO comment found |
| plugins/analysis-smartcn/src/main/java/org/elasticsearch/plugin/analysis/smartcn/AnalysisSmartChinesePlugin.java | 39 | ⚪ INFO | TODO comment found |
| plugins/analysis-stempel/src/test/java/org/elasticsearch/index/analysis/AnalysisPolishFactoryTests.java | 44 | ⚪ INFO | TODO comment found |
| plugins/analysis-stempel/src/test/java/org/elasticsearch/index/analysis/AnalysisPolishFactoryTests.java | 54 | ⚪ INFO | TODO comment found |
| plugins/discovery-gce/src/main/java/org/elasticsearch/cloud/gce/GceInstancesServiceImpl.java | 69 | ⚪ INFO | TODO comment found |
| plugins/discovery-gce/src/main/java/org/elasticsearch/cloud/gce/GceInstancesServiceImpl.java | 210 | ⚪ INFO | TODO comment found |
| plugins/discovery-gce/src/main/java/org/elasticsearch/cloud/gce/GceMetadataService.java | 67 | ⚪ INFO | TODO comment found |
| plugins/discovery-gce/src/main/java/org/elasticsearch/discovery/gce/RetryHttpInitializerWrapper.java | 61 | ⚪ INFO | TODO comment found |
| plugins/mapper-size/src/main/java/org/elasticsearch/index/mapper/size/SizeFieldMapper.java | 109 | ⚪ INFO | TODO comment found |
| plugins/repository-hdfs/src/main/java/org/elasticsearch/repositories/hdfs/HdfsBlobContainer.java | 72 | ⚪ INFO | TODO comment found |
| qa/multi-cluster-search/src/javaRestTest/java/org/elasticsearch/search/CCSDuelIT.java | 869 | ⚪ INFO | TODO comment found |
| qa/multi-cluster-search/src/javaRestTest/java/org/elasticsearch/search/CCSDuelIT.java | 870 | ⚪ INFO | TODO comment found |
| qa/multi-cluster-search/src/javaRestTest/java/org/elasticsearch/search/MultiClusterSearchYamlTestSuiteIT.java | 73 | ⚪ INFO | TODO comment found |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/DockerTests.java | 939 | ⚪ INFO | TODO comment found |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/DockerTests.java | 973 | ⚪ INFO | TODO comment found |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/KeystoreManagementTests.java | 71 | ⚪ INFO | TODO comment found |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/MemoryLockingTests.java | 41 | ⚪ INFO | TODO comment found |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/PackageUpgradeTests.java | 43 | ⚪ INFO | TODO comment found |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/RpmMetadataTests.java | 32 | ⚪ INFO | TODO comment found |
| qa/packaging/src/test/java/org/elasticsearch/packaging/test/WindowsServiceTests.java | 266 | ⚪ INFO | TODO comment found |
| qa/packaging/src/test/java/org/elasticsearch/packaging/util/FileUtils.java | 308 | ⚪ INFO | TODO comment found |
| qa/rolling-upgrade/src/javaRestTest/java/org/elasticsearch/upgrades/VectorSearchIT.java | 43 | ⚪ INFO | TODO comment found |
| qa/smoke-test-http/src/internalClusterTest/java/org/elasticsearch/http/snapshots/RestGetSnapshotsIT.java | 53 | ⚪ INFO | TODO comment found |
| qa/vector/src/main/java/org/elasticsearch/test/knn/KnnSearcher.java | 720 | ⚪ INFO | TODO comment found |

## Detailed Findings

### CODE_QUALITY

**Total:** 62 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .buildkite/scripts/flakiness-detection/entrypoints/analyze.ts | 12 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/local.ts | 63 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 30 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 43 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 55 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 58 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 66 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 78 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 84 | 🟢 LOW | Debug console.log statement found |
| .buildkite/scripts/flakiness-detection/entrypoints/pr.ts | 91 | 🟢 LOW | Debug console.log statement found |

*... and 52 more*

### MAINTENANCE

**Total:** 159 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| benchmarks/src/main/java/org/elasticsearch/benchmark/vector/scorer/VectorScorerBQBenchmark.java | 89 | ⚪ INFO | TODO comment found |
| build-tools/src/main/java/org/elasticsearch/gradle/plugin/BasePluginBuildPlugin.java | 85 | ⚪ INFO | TODO comment found |
| build-tools/src/main/java/org/elasticsearch/gradle/plugin/BasePluginBuildPlugin.java | 203 | ⚪ INFO | TODO comment found |
| build-tools/src/main/java/org/elasticsearch/gradle/testclusters/ElasticsearchNode.java | 622 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/BwcSetupExtension.java | 121 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/ElasticsearchJavaBasePlugin.java | 119 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/ElasticsearchTestBasePlugin.java | 127 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/ElasticsearchTestBasePlugin.java | 204 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/ElasticsearchTestBasePlugin.java | 207 | ⚪ INFO | TODO comment found |
| build-tools-internal/src/main/java/org/elasticsearch/gradle/internal/ElasticsearchTestBasePlugin.java | 210 | ⚪ INFO | TODO comment found |

*... and 149 more*

### SECURITY

**Total:** 89 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 84 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 96 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 107 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 120 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 132 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 143 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 152 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 161 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 170 | 🟠 HIGH | Hardcoded username/password detected |
| distribution/tools/keystore-cli/src/test/java/org/elasticsearch/cli/keystore/AddFileKeyStoreCommandTests.java | 179 | 🟠 HIGH | Hardcoded username/password detected |

*... and 79 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 74/100 (Tier C)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -735 | Fair ⚠️ |
| Code Quality | -262 | Needs improvement ⚠️ |
| Test Coverage | +3 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 49 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 34.6%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

