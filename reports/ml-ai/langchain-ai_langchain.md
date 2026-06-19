# Repository Analysis Report: langchain-ai/langchain

**Generated:** 2026-06-19 09:05:40 CDT

**Quality Score:** 69/100 (Tier C)

## Executive Summary

- **Overall Quality:** C (69/100)
- **Total Findings:** 577
- **Critical Issues:** 0
- **High Issues:** 9
- **Medium Issues:** 7
- **Low Issues:** 481
- **Files Scanned:** 3045

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| maintenance | 80 | Medium |
| code_quality | 481 | Medium |
| security | 16 | High |

## Repository Overview

- **Owner:** langchain-ai
- **Name:** langchain
- **Description:** The agent engineering platform.
- **Primary Language:** Python
- **Stars:** 139695
- **Forks:** 23161
- **Open Issues:** 414
- **Size:** 575456 KB
- **Created:** 2022-10-17
- **Last Updated:** 2026-06-19
- **Default Branch:** master

**Topics:** agents, ai, ai-agents, anthropic, chatgpt, deepagents, enterprise, framework, gemini, generative-ai, langchain, langgraph, llm, multiagent, open-source, openai, pydantic, python, rag, typescript

## Security Analysis

⚠️ **Found 16 security-related findings.**

### ⚠️ High Severity Issues (9)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| libs/langchain/langchain_classic/chains/moderation.py | 49 | 🟠 HIGH | Potential API key detected |
| libs/langchain/langchain_classic/retrievers/document_compressors/cohere_rerank.py | 53 | 🟠 HIGH | Potential API key detected |
| libs/langchain_v1/tests/unit_tests/agents/test_create_agent_tool_validation.py | 395 | 🟠 HIGH | Hardcoded username/password detected |
| libs/partners/chroma/langchain_chroma/vectorstores.py | 404 | 🟠 HIGH | Potential API key detected |
| libs/partners/chroma/langchain_chroma/vectorstores.py | 1337 | 🟠 HIGH | Potential API key detected |
| libs/partners/chroma/langchain_chroma/vectorstores.py | 1442 | 🟠 HIGH | Potential API key detected |
| libs/partners/huggingface/langchain_huggingface/llms/huggingface_endpoint.py | 270 | 🟠 HIGH | Potential API key detected |
| libs/partners/openai/tests/integration_tests/chat_models/test_base.py | 109 | 🟠 HIGH | Potential API key detected |
| libs/partners/openai/tests/integration_tests/embeddings/test_base.py | 120 | 🟠 HIGH | Potential API key detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 23.1% | Poor ❌ |
| Documentation | 0.1% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (481)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/scripts/check_diff.py | 398 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_extras_sync.py | 81 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_extras_sync.py | 95 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_extras_sync.py | 104 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_extras_sync.py | 105 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_extras_sync.py | 106 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_extras_sync.py | 112 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_min_versions.py | 185 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_min_versions.py | 206 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_min_versions.py | 215 | 🟢 LOW | Debug print statement found |
| .github/scripts/pr-labeler.js | 162 | 🟢 LOW | Debug console.log statement found |
| .github/scripts/pr-labeler.js | 172 | 🟢 LOW | Debug console.log statement found |
| .github/scripts/pr-labeler.js | 180 | 🟢 LOW | Debug console.log statement found |
| .github/scripts/pr-labeler.js | 247 | 🟢 LOW | Debug console.log statement found |
| .github/scripts/pr-labeler.js | 249 | 🟢 LOW | Debug console.log statement found |
| libs/core/langchain_core/callbacks/base.py | 1073 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/base.py | 1079 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/manager.py | 1796 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/manager.py | 1799 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/manager.py | 1805 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/manager.py | 2326 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/manager.py | 2329 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/manager.py | 2335 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/manager.py | 2652 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/manager.py | 2684 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/manager.py | 2700 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/manager.py | 2775 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/stdout.py | 44 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/stdout.py | 54 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/callbacks/usage.py | 106 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/documents/base.py | 75 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/documents/base.py | 78 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/documents/base.py | 82 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/documents/base.py | 105 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/documents/base.py | 108 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/documents/base.py | 112 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/embeddings/fake.py | 35 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/embeddings/fake.py | 45 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/embeddings/fake.py | 47 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/embeddings/fake.py | 90 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/embeddings/fake.py | 100 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/embeddings/fake.py | 102 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/language_models/chat_model_stream.py | 1071 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/messages/ai.py | 377 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/messages/base.py | 327 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/messages/base.py | 363 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/messages/block_translators/groq.py | 38 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/messages/human.py | 25 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/messages/system.py | 25 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/output_parsers/string.py | 28 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/output_parsers/string.py | 33 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/prompts/chat.py | 781 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/prompts/few_shot.py | 369 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/prompts/message.py | 82 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/prompts/string.py | 390 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/rate_limiters.py | 116 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 224 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 236 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 237 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 238 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 442 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 521 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 849 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 852 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 1533 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 1941 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 1945 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 2009 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 2011 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 2015 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 2017 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 2021 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 2023 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 2171 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 2223 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 2872 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 2877 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 2938 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 2941 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 3142 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 3143 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 3932 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/base.py | 5749 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/graph.py | 525 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/graph_ascii.py | 272 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/history.py | 117 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/history.py | 150 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/history.py | 158 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/history.py | 160 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/history.py | 167 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/passthrough.py | 707 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/runnables/passthrough.py | 712 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 79 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 80 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 81 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 82 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 83 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 84 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 87 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 88 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 89 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 110 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 113 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 114 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 115 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 117 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 122 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 123 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 124 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/sys_info.py | 133 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/utils/input.py | 80 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/vectorstores/in_memory.py | 77 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/vectorstores/in_memory.py | 91 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/vectorstores/in_memory.py | 108 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/vectorstores/in_memory.py | 119 | 🟢 LOW | Debug print statement found |
| libs/core/langchain_core/vectorstores/in_memory.py | 140 | 🟢 LOW | Debug print statement found |
| libs/core/scripts/check_imports.py | 20 | 🟢 LOW | Debug print statement found |
| libs/core/scripts/check_imports.py | 22 | 🟢 LOW | Debug print statement found |
| libs/core/scripts/check_version.py | 63 | 🟢 LOW | Debug print statement found |
| libs/core/scripts/check_version.py | 67 | 🟢 LOW | Debug print statement found |
| libs/core/scripts/check_version.py | 74 | 🟢 LOW | Debug print statement found |
| libs/core/scripts/check_version.py | 78 | 🟢 LOW | Debug print statement found |
| libs/core/scripts/check_version.py | 82 | 🟢 LOW | Debug print statement found |
| libs/core/scripts/check_version.py | 83 | 🟢 LOW | Debug print statement found |
| libs/core/scripts/check_version.py | 84 | 🟢 LOW | Debug print statement found |
| libs/core/scripts/check_version.py | 91 | 🟢 LOW | Debug print statement found |
| libs/core/scripts/check_version.py | 92 | 🟢 LOW | Debug print statement found |
| libs/core/scripts/check_version.py | 95 | 🟢 LOW | Debug print statement found |
| libs/core/scripts/check_version.py | 98 | 🟢 LOW | Debug print statement found |
| libs/core/tests/unit_tests/messages/block_translators/test_groq.py | 95 | 🟢 LOW | Debug print statement found |
| libs/core/tests/unit_tests/messages/block_translators/test_groq.py | 131 | 🟢 LOW | Debug print statement found |
| libs/core/tests/unit_tests/messages/block_translators/test_groq.py | 132 | 🟢 LOW | Debug print statement found |
| libs/core/tests/unit_tests/messages/block_translators/test_groq.py | 135 | 🟢 LOW | Debug print statement found |
| libs/core/tests/unit_tests/messages/block_translators/test_groq.py | 136 | 🟢 LOW | Debug print statement found |
| libs/core/tests/unit_tests/output_parsers/test_json.py | 79 | 🟢 LOW | Debug print statement found |
| libs/core/tests/unit_tests/output_parsers/test_json.py | 206 | 🟢 LOW | Debug print statement found |
| libs/core/tests/unit_tests/output_parsers/test_openai_functions.py | 69 | 🟢 LOW | Debug print statement found |
| libs/core/tests/unit_tests/output_parsers/test_openai_functions.py | 70 | 🟢 LOW | Debug print statement found |
| libs/core/tests/unit_tests/output_parsers/test_openai_functions.py | 83 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/chains/constitutional_ai/base.py | 164 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/chains/natbot/crawler.py | 134 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/chains/natbot/crawler.py | 478 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/chains/router/multi_prompt.py | 148 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/chains/router/multi_prompt.py | 149 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/evaluation/agents/trajectory_eval_chain.py | 137 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/evaluation/comparison/__init__.py | 21 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/evaluation/comparison/eval_chain.py | 180 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/evaluation/embedding_distance/base.py | 355 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/evaluation/embedding_distance/base.py | 515 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/evaluation/scoring/__init__.py | 17 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/evaluation/scoring/eval_chain.py | 166 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/model_laboratory.py | 93 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/output_parsers/structured.py | 85 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/smith/evaluation/progress.py | 49 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/smith/evaluation/runner_utils.py | 1076 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/smith/evaluation/runner_utils.py | 1317 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/smith/evaluation/runner_utils.py | 1318 | 🟢 LOW | Debug print statement found |
| libs/langchain/langchain_classic/storage/file_system.py | 35 | 🟢 LOW | Debug print statement found |
| libs/langchain/scripts/check_imports.py | 29 | 🟢 LOW | Debug print statement found |
| libs/langchain/scripts/check_imports.py | 31 | 🟢 LOW | Debug print statement found |
| libs/langchain/tests/integration_tests/examples/hello_world.js | 3 | 🟢 LOW | Debug console.log statement found |
| libs/langchain/tests/integration_tests/examples/hello_world.py | 7 | 🟢 LOW | Debug print statement found |
| libs/langchain/tests/unit_tests/agents/output_parsers/test_convo_output_parser.py | 24 | 🟢 LOW | Debug print statement found |
| libs/langchain/tests/unit_tests/agents/output_parsers/test_convo_output_parser.py | 31 | 🟢 LOW | Debug print statement found |
| libs/langchain/tests/unit_tests/agents/test_agent.py | 62 | 🟢 LOW | Debug print statement found |
| libs/langchain/tests/unit_tests/agents/test_agent.py | 63 | 🟢 LOW | Debug print statement found |
| libs/langchain/tests/unit_tests/agents/test_agent_async.py | 33 | 🟢 LOW | Debug print statement found |
| libs/langchain/tests/unit_tests/agents/test_agent_async.py | 34 | 🟢 LOW | Debug print statement found |
| libs/langchain/tests/unit_tests/agents/test_agent_iterator.py | 143 | 🟢 LOW | Debug print statement found |
| libs/langchain/tests/unit_tests/chains/test_sequential.py | 125 | 🟢 LOW | Debug print statement found |
| libs/langchain/tests/unit_tests/output_parsers/test_regex_dict.py | 38 | 🟢 LOW | Debug print statement found |
| libs/langchain/tests/unit_tests/output_parsers/test_yaml_parser.py | 77 | 🟢 LOW | Debug print statement found |
| libs/langchain/tests/unit_tests/retrievers/test_parent_document.py | 28 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/langchain/agents/factory.py | 938 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/langchain/agents/middleware/todo.py | 197 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/langchain/agents/middleware/tool_call_limit.py | 194 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/langchain/agents/middleware/types.py | 985 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/langchain/agents/middleware/types.py | 1171 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/langchain/agents/middleware/types.py | 1345 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/langchain/agents/middleware/types.py | 1405 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/langchain/agents/middleware/types.py | 1556 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/scripts/check_imports.py | 29 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/scripts/check_imports.py | 31 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/tests/unit_tests/agents/middleware/implementations/test_file_search.py | 24 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/tests/unit_tests/agents/middleware/implementations/test_file_search.py | 38 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/tests/unit_tests/agents/middleware/implementations/test_shell_tool.py | 317 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/tests/unit_tests/agents/test_response_format_integration.py | 35 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/tests/unit_tests/agents/test_response_format_integration.py | 38 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/tests/unit_tests/agents/test_response_format_integration.py | 39 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/tests/unit_tests/agents/test_response_format_integration.py | 41 | 🟢 LOW | Debug print statement found |
| libs/langchain_v1/tests/unit_tests/agents/test_response_format_integration.py | 42 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 42 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 51 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 52 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 53 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 54 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 57 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 83 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 87 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 91 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 196 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 204 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 211 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 215 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 233 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 239 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 274 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 275 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 276 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 279 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 285 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 289 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 293 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 300 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 306 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 311 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 316 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 321 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 324 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 338 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 349 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 353 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 358 | 🟢 LOW | Debug print statement found |
| libs/model-profiles/langchain_model_profiles/cli.py | 372 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/langchain_anthropic/chat_models.py | 2022 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/scripts/check_imports.py | 15 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/scripts/check_imports.py | 17 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/tests/unit_tests/middleware/test_file_search.py | 35 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/tests/unit_tests/middleware/test_file_search.py | 280 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/tests/unit_tests/middleware/test_file_search.py | 411 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/tests/unit_tests/test_chat_models.py | 1499 | 🟢 LOW | Debug print statement found |
| libs/partners/anthropic/tests/unit_tests/test_chat_models.py | 1513 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/langchain_chroma/vectorstores.py | 237 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/langchain_chroma/vectorstores.py | 249 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/langchain_chroma/vectorstores.py | 259 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/langchain_chroma/vectorstores.py | 279 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/scripts/check_imports.py | 15 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/scripts/check_imports.py | 17 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/chroma/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/deepseek/langchain_deepseek/chat_models.py | 104 | 🟢 LOW | Debug print statement found |
| libs/partners/deepseek/scripts/check_imports.py | 15 | 🟢 LOW | Debug print statement found |
| libs/partners/deepseek/scripts/check_imports.py | 17 | 🟢 LOW | Debug print statement found |
| libs/partners/deepseek/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/deepseek/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/deepseek/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/deepseek/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/deepseek/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/deepseek/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/deepseek/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/deepseek/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/scripts/check_imports.py | 15 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/scripts/check_imports.py | 17 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/tests/integration_tests/test_find_similar_tool.py | 17 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/tests/integration_tests/test_retriever.py | 14 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/tests/integration_tests/test_retriever.py | 24 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/tests/integration_tests/test_retriever.py | 41 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/tests/integration_tests/test_search_tool.py | 12 | 🟢 LOW | Debug print statement found |
| libs/partners/exa/tests/integration_tests/test_search_tool.py | 28 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/langchain_fireworks/embeddings.py | 48 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/langchain_fireworks/embeddings.py | 49 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/langchain_fireworks/embeddings.py | 61 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/scripts/check_imports.py | 13 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/scripts/check_imports.py | 15 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/tests/unit_tests/test_llms.py | 41 | 🟢 LOW | Debug print statement found |
| libs/partners/fireworks/tests/unit_tests/test_llms.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/groq/langchain_groq/chat_models.py | 198 | 🟢 LOW | Debug print statement found |
| libs/partners/groq/langchain_groq/chat_models.py | 210 | 🟢 LOW | Debug print statement found |
| libs/partners/groq/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/groq/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/groq/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/groq/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/groq/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/groq/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/groq/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/groq/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/langchain_huggingface/chat_models/huggingface.py | 410 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/langchain_huggingface/llms/huggingface_endpoint.py | 65 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/langchain_huggingface/llms/huggingface_endpoint.py | 83 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/langchain_huggingface/llms/huggingface_endpoint.py | 93 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/scripts/check_imports.py | 13 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/scripts/check_imports.py | 15 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/huggingface/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/langchain_mistralai/embeddings.py | 109 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/langchain_mistralai/embeddings.py | 120 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/langchain_mistralai/embeddings.py | 122 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/langchain_mistralai/embeddings.py | 133 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/scripts/check_imports.py | 13 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/scripts/check_imports.py | 15 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/mistralai/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/nomic/scripts/check_imports.py | 15 | 🟢 LOW | Debug print statement found |
| libs/partners/nomic/scripts/check_imports.py | 17 | 🟢 LOW | Debug print statement found |
| libs/partners/nomic/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/nomic/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/nomic/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/nomic/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/nomic/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/nomic/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/nomic/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/nomic/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/langchain_ollama/chat_models.py | 327 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/langchain_ollama/chat_models.py | 392 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/langchain_ollama/embeddings.py | 95 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/langchain_ollama/embeddings.py | 106 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/langchain_ollama/embeddings.py | 108 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/langchain_ollama/embeddings.py | 119 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/langchain_ollama/llms.py | 87 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/langchain_ollama/llms.py | 97 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/langchain_ollama/llms.py | 110 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/scripts/check_imports.py | 15 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/scripts/check_imports.py | 17 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/ollama/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/chat_models/azure.py | 179 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/chat_models/base.py | 2696 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/chat_models/base.py | 2981 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/chat_models/base.py | 2987 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/chatgpt_oauth.py | 910 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/embeddings/azure.py | 66 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/embeddings/azure.py | 76 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/embeddings/azure.py | 78 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/embeddings/azure.py | 88 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/embeddings/base.py | 134 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/embeddings/base.py | 144 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/embeddings/base.py | 145 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/embeddings/base.py | 155 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/llms/base.py | 136 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/llms/base.py | 147 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/llms/base.py | 160 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/llms/base.py | 854 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/langchain_openai/llms/base.py | 873 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/scripts/check_imports.py | 15 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/scripts/check_imports.py | 17 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/tests/unit_tests/chat_models/test_base.py | 2389 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/tests/unit_tests/chat_models/test_base.py | 2451 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/tests/unit_tests/chat_models/test_base.py | 2498 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/tests/unit_tests/chat_models/test_base.py | 2560 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/tests/unit_tests/test_secrets.py | 99 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/tests/unit_tests/test_secrets.py | 104 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/tests/unit_tests/test_secrets.py | 123 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/tests/unit_tests/test_secrets.py | 128 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/tests/unit_tests/test_secrets.py | 165 | 🟢 LOW | Debug print statement found |
| libs/partners/openai/tests/unit_tests/test_secrets.py | 177 | 🟢 LOW | Debug print statement found |
| libs/partners/openrouter/scripts/check_imports.py | 15 | 🟢 LOW | Debug print statement found |
| libs/partners/openrouter/scripts/check_imports.py | 17 | 🟢 LOW | Debug print statement found |
| libs/partners/openrouter/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/openrouter/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/openrouter/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/openrouter/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/openrouter/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/openrouter/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/openrouter/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/openrouter/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/perplexity/langchain_perplexity/chat_models.py | 661 | 🟢 LOW | Debug print statement found |
| libs/partners/perplexity/scripts/check_imports.py | 13 | 🟢 LOW | Debug print statement found |
| libs/partners/perplexity/scripts/check_imports.py | 15 | 🟢 LOW | Debug print statement found |
| libs/partners/perplexity/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/perplexity/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/perplexity/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/perplexity/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/perplexity/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/perplexity/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/perplexity/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/perplexity/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/qdrant/langchain_qdrant/qdrant.py | 107 | 🟢 LOW | Debug print statement found |
| libs/partners/qdrant/langchain_qdrant/qdrant.py | 137 | 🟢 LOW | Debug print statement found |
| libs/partners/qdrant/langchain_qdrant/qdrant.py | 154 | 🟢 LOW | Debug print statement found |
| libs/partners/qdrant/langchain_qdrant/qdrant.py | 175 | 🟢 LOW | Debug print statement found |
| libs/partners/qdrant/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/qdrant/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/qdrant/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/qdrant/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/qdrant/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/qdrant/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/qdrant/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/qdrant/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/partners/xai/langchain_xai/chat_models.py | 132 | 🟢 LOW | Debug print statement found |
| libs/partners/xai/scripts/check_version.py | 36 | 🟢 LOW | Debug print statement found |
| libs/partners/xai/scripts/check_version.py | 40 | 🟢 LOW | Debug print statement found |
| libs/partners/xai/scripts/check_version.py | 47 | 🟢 LOW | Debug print statement found |
| libs/partners/xai/scripts/check_version.py | 51 | 🟢 LOW | Debug print statement found |
| libs/partners/xai/scripts/check_version.py | 55 | 🟢 LOW | Debug print statement found |
| libs/partners/xai/scripts/check_version.py | 56 | 🟢 LOW | Debug print statement found |
| libs/partners/xai/scripts/check_version.py | 57 | 🟢 LOW | Debug print statement found |
| libs/partners/xai/scripts/check_version.py | 60 | 🟢 LOW | Debug print statement found |
| libs/standard-tests/langchain_tests/base.py | 30 | 🟢 LOW | Debug print statement found |
| libs/standard-tests/langchain_tests/integration_tests/sandboxes.py | 260 | 🟢 LOW | Debug print statement found |
| libs/standard-tests/scripts/check_imports.py | 20 | 🟢 LOW | Debug print statement found |
| libs/standard-tests/scripts/check_imports.py | 22 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/langchain_text_splitters/markdown.py | 326 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/scripts/check_imports.py | 15 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/scripts/check_imports.py | 17 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 665 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 674 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 1135 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 1144 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 1176 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 1188 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 1734 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 1773 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 1822 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 1874 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 1942 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 1982 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 1997 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 2034 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 2067 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 2132 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 2187 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 2248 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 2284 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 2334 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 2361 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 2427 | 🟢 LOW | Debug print statement found |
| libs/text-splitters/tests/unit_tests/test_text_splitters.py | 2450 | 🟢 LOW | Debug print statement found |

### Maintenance Items (80)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/scripts/check_diff.py | 335 | ⚪ INFO | TODO comment found |
| .github/scripts/check_diff.py | 381 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/chat_models.py | 399 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/llms.py | 830 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/llms.py | 1541 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/model_profile.py | 59 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/model_profile.py | 68 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/model_profile.py | 73 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/model_profile.py | 78 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/messages/ai.py | 306 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/messages/base.py | 339 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/messages/block_translators/bedrock.py | 90 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/messages/block_translators/langchain_v0.py | 281 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/messages/block_translators/openai.py | 606 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/messages/content.py | 276 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/messages/content.py | 310 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/messages/content.py | 321 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/messages/content.py | 343 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/messages/content.py | 354 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/messages/utils.py | 1130 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/output_parsers/base.py | 314 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/output_parsers/openai_tools.py | 311 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/prompts/chat.py | 348 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/prompts/chat.py | 660 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/prompts/chat.py | 1337 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/prompts/string.py | 378 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/tools/base.py | 450 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/tools/simple.py | 157 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/tools/structured.py | 58 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/tracers/core.py | 233 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/utils/_merge.py | 46 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/utils/_merge.py | 131 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/utils/mustache.py | 634 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/vectorstores/in_memory.py | 167 | ⚪ INFO | TODO comment found |
| libs/core/tests/unit_tests/messages/test_utils.py | 1736 | ⚪ INFO | TODO comment found |
| libs/core/tests/unit_tests/runnables/test_runnable.py | 2927 | ⚪ INFO | TODO comment found |
| libs/core/tests/unit_tests/runnables/test_runnable.py | 3252 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/agents/agent.py | 1523 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/agents/initialize.py | 103 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/agents/openai_assistant/base.py | 592 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/agents/openai_assistant/base.py | 749 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/agents/xml/prompt.py | 1 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/callbacks/streaming_aiter.py | 11 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/callbacks/streaming_aiter.py | 57 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/chains/natbot/crawler.py | 307 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/chains/openai_functions/openapi.py | 151 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/chains/question_answering/chain.py | 91 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/chains/question_answering/chain.py | 139 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/chat_models/base.py | 477 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/retrievers/time_weighted_retriever.py | 33 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/retrievers/time_weighted_retriever.py | 128 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/smith/evaluation/runner_utils.py | 466 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/smith/evaluation/string_run_evaluator.py | 323 | ⚪ INFO | TODO comment found |
| libs/langchain/langchain_classic/smith/evaluation/string_run_evaluator.py | 381 | ⚪ INFO | TODO comment found |
| libs/langchain/tests/unit_tests/agents/test_structured_chat.py | 98 | ⚪ INFO | TODO comment found |
| libs/langchain/tests/unit_tests/agents/test_structured_chat.py | 120 | ⚪ INFO | TODO comment found |
| libs/langchain/tests/unit_tests/output_parsers/test_fix.py | 63 | ⚪ INFO | TODO comment found |
| libs/langchain/tests/unit_tests/output_parsers/test_fix.py | 104 | ⚪ INFO | TODO comment found |
| libs/langchain_v1/langchain/chat_models/base.py | 34 | ⚪ INFO | TODO comment found |
| libs/langchain_v1/tests/unit_tests/agents/middleware_typing/test_middleware_type_errors.py | 180 | ⚪ INFO | TODO comment found |
| libs/partners/anthropic/langchain_anthropic/chat_models.py | 1729 | ⚪ INFO | TODO comment found |
| libs/partners/anthropic/tests/integration_tests/test_chat_models.py | 2151 | ⚪ INFO | TODO comment found |
| libs/partners/chroma/langchain_chroma/vectorstores.py | 41 | ⚪ INFO | TODO comment found |
| libs/partners/chroma/tests/integration_tests/test_vectorstores.py | 536 | ⚪ INFO | TODO comment found |
| libs/partners/exa/langchain_exa/tools.py | 122 | ⚪ INFO | TODO comment found |
| libs/partners/huggingface/langchain_huggingface/llms/huggingface_pipeline.py | 173 | ⚪ INFO | TODO comment found |
| libs/partners/mistralai/langchain_mistralai/chat_models.py | 679 | ⚪ INFO | TODO comment found |
| libs/partners/mistralai/langchain_mistralai/chat_models.py | 697 | ⚪ INFO | TODO comment found |
| libs/partners/mistralai/langchain_mistralai/chat_models.py | 1155 | ⚪ INFO | TODO comment found |
| libs/partners/mistralai/langchain_mistralai/embeddings.py | 181 | ⚪ INFO | TODO comment found |
| libs/partners/mistralai/langchain_mistralai/embeddings.py | 192 | ⚪ INFO | TODO comment found |
| libs/partners/ollama/langchain_ollama/_compat.py | 46 | ⚪ INFO | TODO comment found |
| libs/partners/ollama/langchain_ollama/_compat.py | 48 | ⚪ INFO | TODO comment found |
| libs/partners/ollama/tests/integration_tests/chat_models/test_chat_models_standard.py | 27 | ⚪ INFO | TODO comment found |
| libs/partners/openai/langchain_openai/chat_models/azure.py | 487 | ⚪ INFO | TODO comment found |
| libs/partners/openai/langchain_openai/chat_models/base.py | 2079 | ⚪ INFO | TODO comment found |
| libs/partners/openai/langchain_openai/embeddings/azure.py | 117 | ⚪ INFO | TODO comment found |
| libs/partners/openai/langchain_openai/embeddings/base.py | 198 | ⚪ INFO | TODO comment found |
| libs/partners/openai/langchain_openai/llms/azure.py | 62 | ⚪ INFO | TODO comment found |
| libs/partners/openai/langchain_openai/llms/base.py | 469 | ⚪ INFO | TODO comment found |

## Detailed Findings

### MAINTENANCE

**Total:** 80 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/scripts/check_diff.py | 335 | ⚪ INFO | TODO comment found |
| .github/scripts/check_diff.py | 381 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/chat_models.py | 399 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/llms.py | 830 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/llms.py | 1541 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/model_profile.py | 59 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/model_profile.py | 68 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/model_profile.py | 73 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/language_models/model_profile.py | 78 | ⚪ INFO | TODO comment found |
| libs/core/langchain_core/messages/ai.py | 306 | ⚪ INFO | TODO comment found |

*... and 70 more*

### CODE_QUALITY

**Total:** 481 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/scripts/check_diff.py | 398 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_extras_sync.py | 81 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_extras_sync.py | 95 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_extras_sync.py | 104 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_extras_sync.py | 105 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_extras_sync.py | 106 | 🟢 LOW | Debug print statement found |
| .github/scripts/check_extras_sync.py | 112 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_min_versions.py | 185 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_min_versions.py | 206 | 🟢 LOW | Debug print statement found |
| .github/scripts/get_min_versions.py | 215 | 🟢 LOW | Debug print statement found |

*... and 471 more*

### SECURITY

**Total:** 16 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| libs/langchain/langchain_classic/chains/moderation.py | 49 | 🟠 HIGH | Potential API key detected |
| libs/langchain/langchain_classic/retrievers/document_compressors/cohere_rerank.py | 53 | 🟠 HIGH | Potential API key detected |
| libs/langchain_v1/tests/unit_tests/agents/test_create_agent_tool_validation.py | 395 | 🟠 HIGH | Hardcoded username/password detected |
| libs/partners/chroma/langchain_chroma/vectorstores.py | 404 | 🟠 HIGH | Potential API key detected |
| libs/partners/chroma/langchain_chroma/vectorstores.py | 1337 | 🟠 HIGH | Potential API key detected |
| libs/partners/chroma/langchain_chroma/vectorstores.py | 1442 | 🟠 HIGH | Potential API key detected |
| libs/partners/huggingface/langchain_huggingface/llms/huggingface_endpoint.py | 270 | 🟠 HIGH | Potential API key detected |
| libs/partners/openai/tests/integration_tests/chat_models/test_base.py | 109 | 🟠 HIGH | Potential API key detected |
| libs/partners/openai/tests/integration_tests/embeddings/test_base.py | 120 | 🟠 HIGH | Potential API key detected |
| libs/core/langchain_core/indexing/api.py | 78 | 🟡 MEDIUM | Weak cryptographic algorithm detected |

*... and 6 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 69/100 (Tier C)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -135 | Fair ⚠️ |
| Code Quality | -516 | Good ✅ |
| Test Coverage | +2 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 9 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 23.1%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

