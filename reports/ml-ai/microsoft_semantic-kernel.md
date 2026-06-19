# Repository Analysis Report: microsoft/semantic-kernel

**Generated:** 2026-06-19 09:05:53 CDT

**Quality Score:** 86/100 (Tier B)

## Executive Summary

- **Overall Quality:** B (86/100)
- **Total Findings:** 1538
- **Critical Issues:** 0
- **High Issues:** 30
- **Medium Issues:** 1
- **Low Issues:** 1367
- **Files Scanned:** 5518

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| maintenance | 140 | Medium |
| code_quality | 1367 | Medium |
| security | 31 | High |

## Repository Overview

- **Owner:** microsoft
- **Name:** semantic-kernel
- **Description:** Integrate cutting-edge LLM technology quickly and easily into your apps
- **Primary Language:** C#
- **Stars:** 28163
- **Forks:** 4655
- **Open Issues:** 267
- **Size:** 105081 KB
- **Created:** 2023-02-27
- **Last Updated:** 2026-06-19
- **Default Branch:** main

**Topics:** ai, artificial-intelligence, llm, openai, sdk

## Security Analysis

⚠️ **Found 31 security-related findings.**

### ⚠️ High Severity Issues (30)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| dotnet/src/Experimental/Orchestration.Flow.IntegrationTests/FlowOrchestratorTests.cs | 108 | 🟠 HIGH | Potential API key detected |
| dotnet/test/VectorData/AzureAISearch.ConformanceTests/Support/AzureAISearchTestEnvironment.cs | 31 | 🟠 HIGH | Potential API key detected |
| dotnet/test/VectorData/Pinecone.ConformanceTests/Support/PineconeTestStore.cs | 75 | 🟠 HIGH | Potential API key detected |
| python/samples/concepts/mcp/agent_with_http_mcp_plugin.py | 93 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/agents/open_ai/azure_assistant_agent.py | 132 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/agents/open_ai/azure_assistant_agent.py | 225 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/agents/open_ai/azure_responses_agent.py | 139 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/agents/open_ai/azure_responses_agent.py | 232 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/connectors/ai/open_ai/services/azure_audio_to_text.py | 87 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/connectors/ai/open_ai/services/azure_chat_completion.py | 110 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/connectors/ai/open_ai/services/azure_realtime.py | 128 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/connectors/ai/open_ai/services/azure_realtime.py | 288 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/connectors/ai/open_ai/services/azure_text_completion.py | 97 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/connectors/ai/open_ai/services/azure_text_embedding.py | 87 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/connectors/ai/open_ai/services/azure_text_to_audio.py | 87 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/connectors/ai/open_ai/services/azure_text_to_image.py | 87 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/connectors/memory_stores/azure_cognitive_search/utils.py | 39 | 🟠 HIGH | Potential API key detected |
| python/tests/unit/connectors/ai/azure_ai_inference/conftest.py | 103 | 🟠 HIGH | Potential API key detected |
| python/tests/unit/connectors/ai/azure_ai_inference/conftest.py | 123 | 🟠 HIGH | Potential API key detected |
| python/tests/unit/connectors/ai/azure_ai_inference/services/test_azure_ai_inference_chat_completion.py | 45 | 🟠 HIGH | Potential API key detected |
| python/tests/unit/connectors/ai/azure_ai_inference/services/test_azure_ai_inference_text_embedding.py | 31 | 🟠 HIGH | Potential API key detected |
| python/tests/unit/connectors/ai/google/google_ai/services/test_google_ai_chat_completion.py | 31 | 🟠 HIGH | Potential API key detected |
| python/tests/unit/connectors/ai/google/google_ai/services/test_google_ai_chat_completion.py | 144 | 🟠 HIGH | Potential API key detected |
| python/tests/unit/connectors/ai/google/google_ai/services/test_google_ai_chat_completion.py | 302 | 🟠 HIGH | Potential API key detected |
| python/tests/unit/connectors/ai/google/google_ai/services/test_google_ai_text_completion.py | 23 | 🟠 HIGH | Potential API key detected |
| python/tests/unit/connectors/ai/google/google_ai/services/test_google_ai_text_completion.py | 129 | 🟠 HIGH | Potential API key detected |
| python/tests/unit/connectors/ai/google/google_ai/services/test_google_ai_text_completion.py | 192 | 🟠 HIGH | Potential API key detected |
| python/tests/unit/connectors/ai/google/google_ai/services/test_google_ai_text_embedding.py | 23 | 🟠 HIGH | Potential API key detected |
| python/tests/unit/connectors/ai/google/google_ai/services/test_google_ai_text_embedding.py | 216 | 🟠 HIGH | Potential API key detected |
| python/tests/unit/connectors/ai/mistral_ai/services/test_mistralai_chat_completion.py | 316 | 🟠 HIGH | Potential API key detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 28.8% | Poor ❌ |
| Documentation | 0.5% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (1367)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| dotnet/samples/Demos/ProcessFrameworkWithSignalR/src/ProcessFramework.Aspire.SignalR.ReactFrontend/src/services/signalr/documentGeneration.client.ts | 19 | 🟢 LOW | Debug console.log statement found |
| dotnet/samples/Demos/ProcessFrameworkWithSignalR/src/ProcessFramework.Aspire.SignalR.ReactFrontend/src/services/signalr/documentGeneration.client.ts | 24 | 🟢 LOW | Debug console.log statement found |
| dotnet/samples/Demos/ProcessFrameworkWithSignalR/src/ProcessFramework.Aspire.SignalR.ReactFrontend/src/services/signalr/documentGeneration.client.ts | 29 | 🟢 LOW | Debug console.log statement found |
| python/samples/concepts/agents/autogen_conversable_agent/autogen_conversable_agent_code_executor.py | 57 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/autogen_conversable_agent/autogen_conversable_agent_code_executor.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/autogen_conversable_agent/autogen_conversable_agent_convo_with_tools.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/autogen_conversable_agent/autogen_conversable_agent_convo_with_tools.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/autogen_conversable_agent/autogen_conversable_agent_convo_with_tools.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/autogen_conversable_agent/autogen_conversable_agent_simple_convo.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_as_kernel_function.py | 32 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_as_kernel_function.py | 34 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_as_kernel_function.py | 45 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_as_kernel_function.py | 49 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_as_kernel_function.py | 58 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_as_kernel_function.py | 125 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter.py | 84 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter.py | 125 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter.py | 131 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter.py | 139 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter.py | 144 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter.py | 148 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter.py | 150 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter_streaming.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter_streaming.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter_streaming.py | 84 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter_streaming.py | 125 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter_streaming.py | 133 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter_streaming.py | 135 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter_streaming.py | 137 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter_streaming.py | 144 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter_streaming.py | 149 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter_streaming.py | 153 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_auto_func_invocation_filter_streaming.py | 155 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_azure_ai_search.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_azure_ai_search.py | 83 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding.py | 31 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding.py | 33 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding.py | 35 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding.py | 82 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding_streaming_with_message_callback.py | 36 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding_streaming_with_message_callback.py | 38 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding_streaming_with_message_callback.py | 40 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding_streaming_with_message_callback.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding_streaming_with_message_callback.py | 82 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding_streaming_with_message_callback.py | 84 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding_streaming_with_message_callback.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_bing_grounding_streaming_with_message_callback.py | 92 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_code_interpreter_streaming_with_message_callback.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_code_interpreter_streaming_with_message_callback.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_code_interpreter_streaming_with_message_callback.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_code_interpreter_streaming_with_message_callback.py | 69 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_code_interpreter_streaming_with_message_callback.py | 73 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_code_interpreter_streaming_with_message_callback.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_code_interpreter_streaming_with_message_callback.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_code_interpreter_streaming_with_message_callback.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_code_interpreter_streaming_with_message_callback.py | 85 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_code_interpreter_streaming_with_message_callback.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_code_interpreter_streaming_with_message_callback.py | 94 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_azure_ai_search.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_azure_ai_search.py | 81 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_azure_ai_search.py | 83 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_azure_ai_search.py | 87 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_bing_grounding.py | 60 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_bing_grounding.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_code_interpreter.py | 72 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_code_interpreter.py | 84 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_code_interpreter.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_code_interpreter.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_code_interpreter.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_code_interpreter.py | 95 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_code_interpreter.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_code_interpreter.py | 98 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_code_interpreter.py | 139 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_code_interpreter.py | 140 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_code_interpreter.py | 141 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_file_search.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_file_search.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_function_calling_from_file.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_function_calling_from_file.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_openapi.py | 174 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_openapi.py | 180 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_templating.py | 57 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_with_existing_agent_id.py | 41 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_declarative_with_existing_agent_id.py | 47 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_deep_research_streaming.py | 37 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_deep_research_streaming.py | 39 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_deep_research_streaming.py | 42 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_deep_research_streaming.py | 44 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_deep_research_streaming.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_deep_research_streaming.py | 84 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_deep_research_streaming.py | 87 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_deep_research_streaming.py | 92 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_deep_research_streaming.py | 94 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_file_manipulation.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_file_manipulation.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_file_manipulation.py | 73 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_file_manipulation.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_mcp_streaming.py | 22 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_mcp_streaming.py | 24 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_mcp_streaming.py | 26 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_mcp_streaming.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_mcp_streaming.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_message_callback.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_message_callback.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_message_callback.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_message_callback.py | 96 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_message_callback.py | 102 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_message_callback_streaming.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_message_callback_streaming.py | 57 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_message_callback_streaming.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_message_callback_streaming.py | 94 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_message_callback_streaming.py | 102 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_message_callback_streaming.py | 104 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_message_callback_streaming.py | 106 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_prompt_templating.py | 35 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_prompt_templating.py | 44 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_prompt_templating.py | 46 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_prompt_templating.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_prompt_templating.py | 92 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_prompt_templating.py | 100 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_retrieve_messages_from_thread.py | 72 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_retrieve_messages_from_thread.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_retrieve_messages_from_thread.py | 85 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_retrieve_messages_from_thread.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_retrieve_messages_from_thread.py | 88 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_retrieve_messages_from_thread.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_streaming.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_streaming.py | 85 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_streaming.py | 90 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_streaming.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_streaming.py | 95 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_structured_outputs.py | 72 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_structured_outputs.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_truncation_strategy.py | 54 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_truncation_strategy.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_retrieval.py | 33 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_retrieval.py | 42 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_retrieval.py | 45 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_retrieval.py | 48 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_simple_chat.py | 30 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_simple_chat.py | 39 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_simple_chat.py | 42 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_simple_chat.py | 45 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_simple_chat_streaming.py | 26 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_simple_chat_streaming.py | 31 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_simple_chat_streaming.py | 33 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_simple_chat_streaming.py | 35 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_simple_chat_streaming.py | 37 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_simple_chat_streaming.py | 40 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_with_code_interpreter.py | 47 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_with_code_interpreter.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_with_code_interpreter_streaming.py | 43 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_with_code_interpreter_streaming.py | 48 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_with_code_interpreter_streaming.py | 52 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_with_code_interpreter_streaming.py | 72 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_with_kernel_function.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_with_kernel_function_simple.py | 50 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_with_kernel_function_streaming.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_agent_with_kernel_function_streaming.py | 60 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_mixed_chat_agents.py | 90 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_mixed_chat_agents.py | 94 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_mixed_chat_agents.py | 95 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_mixed_chat_agents_streaming.py | 90 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_mixed_chat_agents_streaming.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_mixed_chat_agents_streaming.py | 98 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_mixed_chat_agents_streaming.py | 99 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/bedrock_agent/bedrock_mixed_chat_agents_streaming.py | 100 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_as_kernel_function.py | 27 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_as_kernel_function.py | 29 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_as_kernel_function.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_as_kernel_function.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_as_kernel_function.py | 102 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_as_kernel_function.py | 144 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_function_termination.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_function_termination.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_function_termination.py | 99 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_function_termination.py | 100 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_function_termination.py | 101 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_message_callback.py | 52 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_message_callback.py | 54 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_message_callback.py | 56 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_message_callback.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_message_callback.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_message_callback_streaming.py | 49 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_message_callback_streaming.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_message_callback_streaming.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_message_callback_streaming.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_message_callback_streaming.py | 84 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_message_callback_streaming.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_prompt_templating.py | 36 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_prompt_templating.py | 45 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_prompt_templating.py | 47 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_prompt_templating.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_prompt_templating.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_prompt_templating.py | 88 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_streaming_token_usage.py | 62 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_streaming_token_usage.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_streaming_token_usage.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_streaming_token_usage.py | 73 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_streaming_token_usage.py | 76 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_summary_history_reducer_agent_chat.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_summary_history_reducer_agent_chat.py | 69 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_summary_history_reducer_agent_chat.py | 73 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_summary_history_reducer_agent_chat.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_summary_history_reducer_agent_chat.py | 85 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_summary_history_reducer_single_agent.py | 49 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_summary_history_reducer_single_agent.py | 54 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_summary_history_reducer_single_agent.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_summary_history_reducer_single_agent.py | 61 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_summary_history_reducer_single_agent.py | 67 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_token_usage.py | 62 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_token_usage.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_token_usage.py | 72 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_token_usage.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_truncate_history_reducer_agent_chat.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_truncate_history_reducer_agent_chat.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_truncate_history_reducer_agent_chat.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_truncate_history_reducer_agent_chat.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_truncate_history_reducer_single_agent.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_truncate_history_reducer_single_agent.py | 56 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_truncate_history_reducer_single_agent.py | 61 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/chat_completion_agent/chat_completion_agent_truncate_history_reducer_single_agent.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_agents.py | 85 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_agents.py | 87 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_agents.py | 90 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_agents_plugins.py | 122 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_agents_plugins.py | 125 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_agents_plugins.py | 127 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_files.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_files.py | 100 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_files.py | 108 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_files.py | 110 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_images.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_images.py | 100 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_images.py | 108 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_images.py | 110 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_reset.py | 95 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_reset.py | 101 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_reset.py | 104 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_reset.py | 109 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_streaming.py | 95 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_streaming.py | 101 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_streaming.py | 103 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_streaming.py | 105 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/mixed_chat/mixed_chat_streaming.py | 106 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_code_interpreter.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_code_interpreter.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_code_interpreter.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_code_interpreter.py | 83 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_code_interpreter.py | 87 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_code_interpreter.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_code_interpreter.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_code_interpreter.py | 92 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_code_interpreter.py | 133 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_code_interpreter.py | 134 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_code_interpreter.py | 135 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_file_search.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_file_search.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_function_calling_from_file.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_function_calling_from_file.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_templating.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_with_existing_agent_id.py | 38 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/azure_openai_assistant_declarative_with_existing_agent_id.py | 44 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter.py | 85 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter.py | 123 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter.py | 129 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter.py | 137 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter.py | 142 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter.py | 146 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter.py | 148 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter_streaming.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter_streaming.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter_streaming.py | 85 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter_streaming.py | 123 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter_streaming.py | 131 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter_streaming.py | 133 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter_streaming.py | 135 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter_streaming.py | 142 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter_streaming.py | 147 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter_streaming.py | 151 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_auto_func_invocation_filter_streaming.py | 153 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_chart_maker.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_chart_maker_streaming.py | 62 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_chart_maker_streaming.py | 73 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_chart_maker_streaming.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_chart_maker_streaming.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_chart_maker_streaming.py | 82 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_chart_maker_streaming.py | 84 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_chart_maker_streaming.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_code_interpreter.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_code_interpreter.py | 76 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_code_interpreter.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_code_interpreter.py | 81 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_code_interpreter.py | 85 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_code_interpreter.py | 87 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_code_interpreter.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_code_interpreter.py | 90 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_code_interpreter.py | 131 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_code_interpreter.py | 132 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_code_interpreter.py | 133 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_file_search.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_file_search.py | 76 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_function_calling_from_file.py | 69 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_function_calling_from_file.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_templating.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_with_existing_agent_id.py | 37 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_declarative_with_existing_agent_id.py | 43 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_file_manipulation.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_file_manipulation.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_file_manipulation.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_file_manipulation.py | 72 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_file_manipulation.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_file_manipulation_streaming.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_file_manipulation_streaming.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_file_manipulation_streaming.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_file_manipulation_streaming.py | 82 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_file_manipulation_streaming.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_file_manipulation_streaming.py | 88 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_file_manipulation_streaming.py | 90 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_file_manipulation_streaming.py | 92 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_message_callback.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_message_callback.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_message_callback.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_message_callback.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_message_callback.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_message_callback_streaming.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_message_callback_streaming.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_message_callback_streaming.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_message_callback_streaming.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_message_callback_streaming.py | 101 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_message_callback_streaming.py | 103 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_message_callback_streaming.py | 104 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_retrieval.py | 50 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_retrieval.py | 52 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_sample_utils.py | 31 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_sample_utils.py | 33 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_streaming.py | 69 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_streaming.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_streaming.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_streaming.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_structured_outputs.py | 82 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_structured_outputs.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_templating_streaming.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_templating_streaming.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_templating_streaming.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_templating_streaming.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_templating_streaming.py | 98 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_templating_streaming.py | 106 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_vision_streaming.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_vision_streaming.py | 84 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_vision_streaming.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_assistant/openai_assistant_vision_streaming.py | 88 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/azure_openai_responses_agent_declarative_file_search.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/azure_openai_responses_agent_declarative_file_search.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/azure_openai_responses_agent_declarative_function_calling_from_file.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/azure_openai_responses_agent_declarative_function_calling_from_file.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/azure_openai_responses_agent_declarative_templating.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/azure_openai_responses_agent_declarative_templating.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/openai_responses_agent_declarative_file_search.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/openai_responses_agent_declarative_file_search.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/openai_responses_agent_declarative_function_calling_from_file.py | 69 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/openai_responses_agent_declarative_function_calling_from_file.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/openai_responses_agent_declarative_templating.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/openai_responses_agent_declarative_templating.py | 60 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/openai_responses_agent_declarative_web_search.py | 52 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/openai_responses_agent_declarative_web_search.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 94 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 98 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 102 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 109 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 145 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 150 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 152 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 153 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 157 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 164 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 166 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 167 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 174 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 175 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 176 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 177 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 178 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 179 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 180 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 181 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 182 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 183 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_binary_content_upload.py | 184 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_file_search_streaming.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_file_search_streaming.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_file_search_streaming.py | 73 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_file_search_streaming.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_message_callback.py | 50 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_message_callback.py | 52 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_message_callback.py | 54 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_message_callback.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_message_callback.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_message_callback_streaming.py | 50 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_message_callback_streaming.py | 52 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_message_callback_streaming.py | 54 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_message_callback_streaming.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_message_callback_streaming.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_message_callback_streaming.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_message_callback_streaming.py | 92 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_plugins_streaming.py | 72 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_plugins_streaming.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_plugins_streaming.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_plugins_streaming.py | 81 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 103 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 115 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 118 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 119 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 120 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 123 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 125 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 126 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 133 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 134 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 137 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 138 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 139 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 142 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 144 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 145 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning.py | 147 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 104 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 109 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 110 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 116 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 117 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 118 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 122 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 128 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 130 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 131 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 133 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 134 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 141 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 145 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 146 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 153 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 155 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 156 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 158 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 159 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reasoning_streaming.py | 161 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reuse_existing_thread_id.py | 45 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reuse_existing_thread_id.py | 48 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reuse_existing_thread_id.py | 56 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_reuse_existing_thread_id.py | 58 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_web_search_streaming.py | 47 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_web_search_streaming.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_web_search_streaming.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/openai_responses/responses_agent_web_search_streaming.py | 56 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/01-chat_with_audio_input.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/01-chat_with_audio_input.py | 57 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/01-chat_with_audio_input.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/01-chat_with_audio_input.py | 62 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/01-chat_with_audio_input.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/01-chat_with_audio_input.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/01-chat_with_audio_input.py | 83 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/01-chat_with_audio_input.py | 85 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/01-chat_with_audio_input.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/02-chat_with_audio_output.py | 54 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/02-chat_with_audio_output.py | 57 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/02-chat_with_audio_output.py | 61 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/02-chat_with_audio_output.py | 83 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/03-chat_with_audio_input_output.py | 61 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/03-chat_with_audio_input_output.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/03-chat_with_audio_input_output.py | 67 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/03-chat_with_audio_input_output.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/03-chat_with_audio_input_output.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/03-chat_with_audio_input_output.py | 94 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/03-chat_with_audio_input_output.py | 103 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/audio_player.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/audio_player.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/audio/audio_player.py | 60 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/azure_python_code_interpreter_function_calling.py | 49 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/azure_python_code_interpreter_function_calling.py | 52 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/azure_python_code_interpreter_function_calling.py | 56 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/azure_python_code_interpreter_function_calling.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/azure_python_code_interpreter_function_calling.py | 72 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_auto_function_calling.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_auto_function_calling.py | 95 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_auto_function_calling.py | 106 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_auto_function_calling.py | 114 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_auto_function_calling_streaming.py | 82 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_auto_function_calling_streaming.py | 92 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_auto_function_calling_streaming.py | 96 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_auto_function_calling_streaming.py | 103 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_auto_function_calling_streaming.py | 119 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_auto_function_calling_streaming.py | 121 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling.py | 107 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling.py | 109 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling.py | 120 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling.py | 124 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling.py | 145 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling.py | 156 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling_streaming.py | 96 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling_streaming.py | 98 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling_streaming.py | 102 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling_streaming.py | 113 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling_streaming.py | 117 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling_streaming.py | 124 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling_streaming.py | 148 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling_streaming.py | 150 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling_streaming.py | 166 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling_streaming.py | 168 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/chat_completion_with_manual_function_calling_streaming.py | 171 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/function_calling_with_required_type.py | 118 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/function_calling_with_required_type.py | 120 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/function_calling_with_required_type.py | 134 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/function_calling_with_required_type.py | 149 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/function_calling_with_required_type.py | 154 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/function_calling_with_required_type.py | 155 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/function_calling_with_required_type.py | 158 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/function_calling_with_required_type.py | 168 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/function_calling_with_required_type.py | 171 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/function_calling_with_required_type.py | 175 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/function_calling_with_required_type.py | 193 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/function_calling_with_required_type.py | 202 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_json_prompt.py | 118 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_json_prompt.py | 119 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_json_prompt.py | 141 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_json_prompt.py | 155 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_json_prompt.py | 167 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_json_prompt.py | 172 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_json_prompt.py | 173 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_json_prompt.py | 176 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_json_prompt.py | 186 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_json_prompt.py | 189 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_json_prompt.py | 193 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_json_prompt.py | 212 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_json_prompt.py | 221 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_yaml_prompt.py | 115 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_yaml_prompt.py | 116 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_yaml_prompt.py | 138 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_yaml_prompt.py | 152 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_yaml_prompt.py | 164 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_yaml_prompt.py | 169 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_yaml_prompt.py | 170 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_yaml_prompt.py | 173 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_yaml_prompt.py | 183 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_yaml_prompt.py | 186 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_yaml_prompt.py | 190 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_yaml_prompt.py | 209 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/functions_defined_in_yaml_prompt.py | 218 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/nexus_raven.py | 44 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/nexus_raven.py | 45 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/nexus_raven.py | 46 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/nexus_raven.py | 48 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/nexus_raven.py | 382 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/nexus_raven.py | 383 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/nexus_raven.py | 387 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/nexus_raven.py | 388 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/nexus_raven.py | 400 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/nexus_raven.py | 401 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/parallel_function_calling.py | 90 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/parallel_function_calling.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/parallel_function_calling.py | 94 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/auto_function_calling/parallel_function_calling.py | 96 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/caching/semantic_caching.py | 83 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/caching/semantic_caching.py | 87 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/caching/semantic_caching.py | 105 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/caching/semantic_caching.py | 107 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/caching/semantic_caching.py | 109 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/caching/semantic_caching.py | 111 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot.py | 47 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot.py | 50 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot.py | 54 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_kernel_function.py | 82 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_kernel_function.py | 85 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_kernel_function.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_kernel_function.py | 104 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_logit_bias.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_logit_bias.py | 73 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_logit_bias.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_logit_bias.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_store_metadata.py | 44 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_store_metadata.py | 47 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_store_metadata.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_store_metadata.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_streaming.py | 49 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_streaming.py | 52 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_streaming.py | 56 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_streaming.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_streaming.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_streaming.py | 76 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_image.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_image.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_image.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_image.py | 90 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer.py | 121 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer.py | 125 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer.py | 129 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer.py | 139 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer.py | 146 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer.py | 147 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer.py | 148 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer.py | 150 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_autoreduce.py | 126 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_autoreduce.py | 130 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_autoreduce.py | 141 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_autoreduce.py | 148 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_autoreduce.py | 151 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_autoreduce.py | 152 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_autoreduce.py | 153 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_autoreduce.py | 155 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_keep_func_content.py | 135 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_keep_func_content.py | 139 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_keep_func_content.py | 143 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_keep_func_content.py | 153 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_keep_func_content.py | 190 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_keep_func_content.py | 191 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_keep_func_content.py | 192 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_summary_history_reducer_keep_func_content.py | 194 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_truncation_history_reducer.py | 112 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_truncation_history_reducer.py | 115 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_truncation_history_reducer.py | 119 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_truncation_history_reducer.py | 137 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_truncation_history_reducer_autoreduce.py | 117 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_truncation_history_reducer_autoreduce.py | 120 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_truncation_history_reducer_autoreduce.py | 124 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_truncation_history_reducer_autoreduce.py | 142 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_completion/simple_chatbot_with_truncation_history_reducer_autoreduce.py | 150 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/serialize_chat_history.py | 44 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/serialize_chat_history.py | 47 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/serialize_chat_history.py | 57 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/serialize_chat_history.py | 61 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/serialize_chat_history.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/serialize_chat_history.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/serialize_chat_history.py | 99 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/serialize_chat_history.py | 109 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/store_chat_history_in_cosmosdb.py | 130 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/store_chat_history_in_cosmosdb.py | 142 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/store_chat_history_in_cosmosdb.py | 146 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/store_chat_history_in_cosmosdb.py | 155 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/store_chat_history_in_cosmosdb.py | 159 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/store_chat_history_in_cosmosdb.py | 177 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/chat_history/store_chat_history_in_cosmosdb.py | 186 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/embedding/text_embedding_generation.py | 42 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/embedding/text_embedding_generation.py | 48 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/auto_function_invoke_filters.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/auto_function_invoke_filters.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/auto_function_invoke_filters.py | 81 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/auto_function_invoke_filters.py | 82 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/auto_function_invoke_filters.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/auto_function_invoke_filters.py | 96 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/auto_function_invoke_filters.py | 120 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/auto_function_invoke_filters.py | 127 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/auto_function_invoke_filters.py | 130 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/auto_function_invoke_filters.py | 134 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/auto_function_invoke_filters.py | 147 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/auto_function_invoke_filters.py | 158 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/auto_function_invoke_filters.py | 166 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/function_invocation_filters.py | 46 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/function_invocation_filters_stream.py | 61 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/function_invocation_filters_stream.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/function_invocation_filters_stream.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/function_invocation_filters_stream.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/function_invocation_filters_stream.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/function_invocation_filters_stream.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/prompt_filters.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/prompt_filters.py | 69 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/prompt_filters.py | 73 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/prompt_filters.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/retry_with_different_model.py | 42 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/retry_with_different_model.py | 85 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/retry_with_filters.py | 44 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/filtering/retry_with_filters.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/functions/agent_framework_tools.py | 50 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/functions/agent_framework_tools.py | 54 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/functions/agent_framework_tools.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/functions/agent_framework_tools.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/functions/kernel_arguments.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 116 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 117 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 118 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 130 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 132 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 134 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 135 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 136 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 153 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 154 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 158 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 159 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 160 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 164 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 165 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 166 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 170 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 171 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/grounding/grounded.py | 172 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/images/image_generation.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/foundry_local_chatbot.py | 58 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/foundry_local_chatbot.py | 61 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/foundry_local_chatbot.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/foundry_local_chatbot.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/lm_studio_chat_completion.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/lm_studio_chat_completion.py | 62 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/lm_studio_chat_completion.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/lm_studio_chat_completion.py | 72 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/lm_studio_text_embedding.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/lm_studio_text_embedding.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/ollama_chat_completion.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/ollama_chat_completion.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/ollama_chat_completion.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/ollama_chat_completion.py | 76 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_chat_completion.py | 38 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_chat_completion.py | 41 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_chat_completion.py | 45 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_chat_completion.py | 49 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_chat_completion.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_chat_completion.py | 58 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_chat_completion.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_phi3_vision_completion.py | 44 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_phi3_vision_completion.py | 47 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_phi3_vision_completion.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_phi3_vision_completion.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_phi3_vision_completion.py | 60 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_phi3_vision_completion.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_phi3_vision_completion.py | 69 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_text_completion.py | 48 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_text_completion.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_text_completion.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_text_completion.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_text_completion.py | 61 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_text_completion.py | 62 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/local_models/onnx_text_completion.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/logging/setup_logging.py | 29 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/agent_with_http_mcp_plugin.py | 49 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/agent_with_http_mcp_plugin.py | 52 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/agent_with_http_mcp_plugin.py | 125 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/agent_with_mcp_agent.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/agent_with_mcp_plugin.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/agent_with_mcp_plugin.py | 58 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/agent_with_mcp_sampling.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/agent_with_mcp_sampling.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/azure_ai_agent_with_local_server.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/azure_ai_agent_with_local_server.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/azure_ai_agent_with_local_server.py | 99 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/azure_ai_agent_with_local_server.py | 101 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/azure_ai_agent_with_mcp_plugin.py | 52 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/azure_ai_agent_with_mcp_plugin.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/azure_ai_agent_with_mcp_plugin.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/azure_ai_agent_with_mcp_plugin.py | 60 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/local_agent_with_local_server.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/local_agent_with_local_server.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/local_agent_with_local_server.py | 101 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/local_agent_with_local_server.py | 103 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/local_agent_with_local_server.py | 105 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/mcp_as_plugin.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/mcp_as_plugin.py | 82 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/mcp_as_plugin.py | 88 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/mcp/mcp_as_plugin.py | 115 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/1_interact_with_the_collection.py | 35 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/1_interact_with_the_collection.py | 38 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/1_interact_with_the_collection.py | 42 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/1_interact_with_the_collection.py | 43 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/1_interact_with_the_collection.py | 50 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/1_interact_with_the_collection.py | 54 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/1_interact_with_the_collection.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/1_interact_with_the_collection.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/2_use_as_a_plugin.py | 172 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/2_use_as_a_plugin.py | 176 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/2_use_as_a_plugin.py | 192 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/2_use_as_a_plugin.py | 195 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/2_use_as_a_plugin.py | 199 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/2_use_as_a_plugin.py | 203 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/2_use_as_a_plugin.py | 209 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/2_use_as_a_plugin.py | 211 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/azure_ai_search_hotel_samples/2_use_as_a_plugin.py | 215 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/complex_memory.py | 134 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/complex_memory.py | 137 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/complex_memory.py | 145 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/complex_memory.py | 182 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/complex_memory.py | 188 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/complex_memory.py | 195 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/complex_memory.py | 199 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/complex_memory.py | 211 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/complex_memory.py | 218 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/complex_memory.py | 221 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/complex_memory.py | 229 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/complex_memory.py | 236 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/complex_memory.py | 239 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/data_models.py | 111 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/data_models.py | 112 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/data_models.py | 113 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/data_models.py | 114 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/data_models.py | 116 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/data_models.py | 117 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/data_models.py | 118 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/data_models.py | 119 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/data_models.py | 120 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/data_models.py | 127 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/data_models.py | 129 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/memory_with_pandas.py | 56 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/memory_with_pandas.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/memory_with_pandas.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/memory_with_pandas.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/simple_memory.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/simple_memory.py | 87 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/simple_memory.py | 88 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/simple_memory.py | 96 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/simple_memory.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/simple_memory.py | 119 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/memory/simple_memory.py | 122 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/model_as_a_service/mmlu_model_eval.py | 73 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/model_as_a_service/mmlu_model_eval.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/model_as_a_service/mmlu_model_eval.py | 157 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/model_as_a_service/mmlu_model_eval.py | 175 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/model_as_a_service/mmlu_model_eval.py | 180 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/model_as_a_service/mmlu_model_eval.py | 183 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/model_as_a_service/mmlu_model_eval.py | 185 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api.py | 72 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api.py | 87 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api.py | 101 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api_function_calling.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api_function_calling.py | 94 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api_function_calling.py | 98 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api_function_calling.py | 107 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api_function_calling.py | 114 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api_vector_search.py | 84 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api_vector_search.py | 87 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api_vector_search.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api_vector_search.py | 96 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api_vector_search.py | 100 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api_vector_search.py | 102 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/on_your_data/azure_chat_gpt_with_data_api_vector_search.py | 105 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/azure_python_code_interpreter.py | 27 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/crew_ai/crew_ai_plugin.py | 31 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/crew_ai/crew_ai_plugin.py | 35 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/crew_ai/crew_ai_plugin.py | 36 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/crew_ai/crew_ai_plugin.py | 94 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/openai_function_calling_with_custom_plugin.py | 62 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/openai_function_calling_with_custom_plugin.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/openai_function_calling_with_custom_plugin.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/openai_function_calling_with_custom_plugin.py | 92 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/openai_function_calling_with_custom_plugin.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/openai_function_calling_with_custom_plugin.py | 96 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/openai_function_calling_with_custom_plugin.py | 116 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/openapi/openapi_client.py | 32 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/plugins/plugins_from_dir.py | 29 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/cycles_with_fan_in.py | 84 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/cycles_with_fan_in.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/cycles_with_fan_in.py | 134 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/nested_process.py | 41 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/nested_process.py | 58 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/plan_and_execute.py | 111 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/plan_and_execute.py | 147 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/plan_and_execute.py | 260 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/plan_and_execute.py | 303 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/plan_and_execute.py | 307 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/plan_and_execute.py | 354 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/plan_and_execute.py | 376 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/plan_and_execute.py | 377 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/processes/plan_and_execute.py | 379 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_handlebars.py | 60 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_handlebars.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_handlebars.py | 67 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_handlebars.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_handlebars.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_handlebars.py | 81 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_handlebars.py | 87 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_jinja2.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_jinja2.py | 62 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_jinja2.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_jinja2.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_jinja2.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_jinja2.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/azure_chat_gpt_api_jinja2.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/configuring_prompts.py | 29 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/configuring_prompts.py | 61 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/configuring_prompts.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/configuring_prompts.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/configuring_prompts.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/handlebars_prompts.py | 21 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/handlebars_prompts.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/handlebars_prompts.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/load_yaml_prompt.py | 27 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/template_language.py | 30 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/template_language.py | 34 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/template_language.py | 44 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/prompt_templates/template_language.py | 46 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/rag_with_vector_collection.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/rag_with_vector_collection.py | 76 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/rag_with_vector_collection.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/rag_with_vector_collection.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/rag_with_vector_collection.py | 90 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 56 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 60 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 96 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 98 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 107 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 108 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 115 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 117 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 118 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 120 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 121 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 128 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 130 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 131 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 133 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 134 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 141 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 143 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/rag/self_critique_rag.py | 144 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/realtime_agent_with_function_calling_webrtc.py | 130 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/realtime_agent_with_function_calling_webrtc.py | 136 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/realtime_agent_with_function_calling_webrtc.py | 142 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/realtime_agent_with_function_calling_websocket.py | 127 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/realtime_agent_with_function_calling_websocket.py | 133 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/realtime_agent_with_function_calling_websocket.py | 135 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/realtime_agent_with_function_calling_websocket.py | 140 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/simple_realtime_chat_webrtc.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/simple_realtime_chat_webrtc.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/simple_realtime_chat_webrtc.py | 85 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/simple_realtime_chat_webrtc.py | 87 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/simple_realtime_chat_webrtc.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/simple_realtime_chat_websocket.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/simple_realtime_chat_websocket.py | 82 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/simple_realtime_chat_websocket.py | 84 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/realtime/simple_realtime_chat_websocket.py | 88 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning.py | 84 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning.py | 87 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning.py | 102 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning_azure_ai_inference.py | 48 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning_azure_ai_inference.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning_azure_ai_inference.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning_azure_ai_inference.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning_function_calling.py | 99 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning_function_calling.py | 100 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning_function_calling.py | 107 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning_function_calling.py | 110 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning_function_calling.py | 114 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/reasoning/simple_reasoning_function_calling.py | 126 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/resources/utils.py | 8 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/brave_text_search_as_plugin.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/brave_text_search_as_plugin.py | 88 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/brave_text_search_as_plugin.py | 90 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/brave_text_search_as_plugin.py | 92 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/brave_text_search_as_plugin.py | 94 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/brave_text_search_as_plugin.py | 103 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/brave_text_search_as_plugin.py | 106 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/brave_text_search_as_plugin.py | 110 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/brave_text_search_as_plugin.py | 115 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/brave_text_search_as_plugin.py | 123 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/google_text_search_as_plugin.py | 96 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/google_text_search_as_plugin.py | 98 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/google_text_search_as_plugin.py | 100 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/google_text_search_as_plugin.py | 102 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/google_text_search_as_plugin.py | 111 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/google_text_search_as_plugin.py | 114 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/google_text_search_as_plugin.py | 118 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/google_text_search_as_plugin.py | 124 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/search/google_text_search_as_plugin.py | 131 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/service_selector/custom_service_selector.py | 72 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/setup/openai_env_setup.py | 24 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/setup/openai_env_setup.py | 34 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/setup/openai_env_setup.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/structured_outputs/json_structured_outputs.py | 106 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/structured_outputs/json_structured_outputs.py | 110 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/structured_outputs/json_structured_outputs.py | 119 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/structured_outputs/json_structured_outputs_function_calling.py | 127 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/structured_outputs/json_structured_outputs_function_calling.py | 131 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/structured_outputs/json_structured_outputs_function_calling.py | 133 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/structured_outputs/json_structured_outputs_function_calling.py | 137 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/structured_outputs/json_structured_outputs_function_calling.py | 138 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/structured_outputs/json_structured_outputs_function_calling.py | 146 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/text_completion/text_completion.py | 30 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/text_completion/text_completion_streaming.py | 32 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/text_completion/text_completion_streaming.py | 33 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/token_usage/simple_chat_token_usage.py | 52 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/token_usage/simple_chat_token_usage.py | 62 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/token_usage/simple_chat_token_usage.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/token_usage/simple_chat_token_usage.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/token_usage/simple_chat_token_usage_streaming.py | 54 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/token_usage/simple_chat_token_usage_streaming.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/token_usage/simple_chat_token_usage_streaming.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/token_usage/simple_chat_token_usage_streaming.py | 73 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/token_usage/simple_chat_token_usage_streaming.py | 81 | 🟢 LOW | Debug print statement found |
| python/samples/demos/assistants_group_chat/group_chat.py | 30 | 🟢 LOW | Debug print statement found |
| python/samples/demos/assistants_group_chat/group_chat.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/demos/assistants_group_chat/group_chat.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/demos/assistants_group_chat/group_chat.py | 99 | 🟢 LOW | Debug print statement found |
| python/samples/demos/assistants_group_chat/group_chat.py | 138 | 🟢 LOW | Debug print statement found |
| python/samples/demos/assistants_group_chat/group_chat.py | 142 | 🟢 LOW | Debug print statement found |
| python/samples/demos/assistants_group_chat/group_chat.py | 152 | 🟢 LOW | Debug print statement found |
| python/samples/demos/booking_restaurant/bookings_plugin/bookings_plugin.py | 61 | 🟢 LOW | Debug print statement found |
| python/samples/demos/booking_restaurant/bookings_plugin/bookings_plugin.py | 62 | 🟢 LOW | Debug print statement found |
| python/samples/demos/booking_restaurant/bookings_plugin/bookings_plugin.py | 133 | 🟢 LOW | Debug print statement found |
| python/samples/demos/booking_restaurant/restaurant_booking.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/demos/booking_restaurant/restaurant_booking.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/demos/booking_restaurant/restaurant_booking.py | 81 | 🟢 LOW | Debug print statement found |
| python/samples/demos/booking_restaurant/restaurant_booking.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/demos/booking_restaurant/restaurant_booking.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/demos/copilot_studio_skill/src/api/adapter.py | 30 | 🟢 LOW | Debug print statement found |
| python/samples/demos/copilot_studio_skill/src/api/adapter.py | 54 | 🟢 LOW | Debug print statement found |
| python/samples/demos/copilot_studio_skill/src/api/adapter.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/demos/document_generator/main.py | 124 | 🟢 LOW | Debug print statement found |
| python/samples/demos/document_generator/main.py | 125 | 🟢 LOW | Debug print statement found |
| python/samples/demos/document_generator/main.py | 133 | 🟢 LOW | Debug print statement found |
| python/samples/demos/document_generator/main.py | 134 | 🟢 LOW | Debug print statement found |
| python/samples/demos/document_generator/plugins/repo_file_plugin.py | 36 | 🟢 LOW | Debug print statement found |
| python/samples/demos/guided_conversations/interactive_guided_conversation.py | 103 | 🟢 LOW | Debug print statement found |
| python/samples/demos/guided_conversations/interactive_guided_conversation.py | 110 | 🟢 LOW | Debug print statement found |
| python/samples/demos/guided_conversations/interactive_guided_conversation.py | 113 | 🟢 LOW | Debug print statement found |
| python/samples/demos/guided_conversations/interactive_guided_conversation.py | 116 | 🟢 LOW | Debug print statement found |
| python/samples/demos/guided_conversations/interactive_guided_conversation.py | 121 | 🟢 LOW | Debug print statement found |
| python/samples/demos/mcp_with_oauth/agent/main.py | 136 | 🟢 LOW | Debug print statement found |
| python/samples/demos/mcp_with_oauth/agent/main.py | 169 | 🟢 LOW | Debug print statement found |
| python/samples/demos/mcp_with_oauth/agent/main.py | 186 | 🟢 LOW | Debug print statement found |
| python/samples/demos/mcp_with_oauth/agent/main.py | 218 | 🟢 LOW | Debug print statement found |
| python/samples/demos/mcp_with_oauth/agent/main.py | 221 | 🟢 LOW | Debug print statement found |
| python/samples/demos/process_with_dapr/fastapi_app.py | 44 | 🟢 LOW | Debug print statement found |
| python/samples/demos/process_with_dapr/fastapi_app.py | 72 | 🟢 LOW | Debug print statement found |
| python/samples/demos/process_with_dapr/fastapi_app.py | 78 | 🟢 LOW | Debug print statement found |
| python/samples/demos/process_with_dapr/flask_app.py | 28 | 🟢 LOW | Debug print statement found |
| python/samples/demos/process_with_dapr/process/steps.py | 43 | 🟢 LOW | Debug print statement found |
| python/samples/demos/process_with_dapr/process/steps.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/demos/process_with_dapr/process/steps.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/demos/process_with_dapr/process/steps.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/demos/process_with_dapr/process/steps.py | 109 | 🟢 LOW | Debug print statement found |
| python/samples/demos/process_with_dapr/process/steps.py | 115 | 🟢 LOW | Debug print statement found |
| python/samples/demos/process_with_dapr/process/steps.py | 118 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/main.py | 141 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 76 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 81 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 82 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 88 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 94 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 99 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 119 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 130 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 132 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 139 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 140 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 143 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 163 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 177 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 189 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 190 | 🟢 LOW | Debug print statement found |
| python/samples/demos/telemetry/scenarios.py | 193 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step01_azure_ai_agent.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step01_azure_ai_agent.py | 58 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step02_azure_ai_agent_plugin.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step02_azure_ai_agent_plugin.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step03_azure_ai_agent_group_chat.py | 98 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step03_azure_ai_agent_group_chat.py | 101 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step04_azure_ai_agent_code_interpreter.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step04_azure_ai_agent_code_interpreter.py | 57 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step05_azure_ai_agent_file_search.py | 62 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step05_azure_ai_agent_file_search.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step06_azure_ai_agent_openapi.py | 29 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step06_azure_ai_agent_openapi.py | 31 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step06_azure_ai_agent_openapi.py | 33 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step06_azure_ai_agent_openapi.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step06_azure_ai_agent_openapi.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step07_azure_ai_agent_retrieval.py | 27 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step07_azure_ai_agent_retrieval.py | 29 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step07_azure_ai_agent_retrieval.py | 31 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step07_azure_ai_agent_retrieval.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step07_azure_ai_agent_retrieval.py | 67 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step08_azure_ai_agent_declarative.py | 87 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step08_azure_ai_agent_declarative.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step09_azure_ai_agent_mcp.py | 22 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step09_azure_ai_agent_mcp.py | 24 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step09_azure_ai_agent_mcp.py | 26 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step09_azure_ai_agent_mcp.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step09_azure_ai_agent_mcp.py | 69 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step10_azure_ai_agent_deep_research.py | 33 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step10_azure_ai_agent_deep_research.py | 35 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step10_azure_ai_agent_deep_research.py | 37 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step10_azure_ai_agent_deep_research.py | 38 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step10_azure_ai_agent_deep_research.py | 69 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step10_azure_ai_agent_deep_research.py | 82 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/azure_ai_agent/step10_azure_ai_agent_deep_research.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step01_chat_completion_agent_simple.py | 37 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step01_chat_completion_agent_simple.py | 43 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step02_chat_completion_agent_thread_management.py | 47 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step02_chat_completion_agent_thread_management.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step03_chat_completion_agent_with_kernel.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step03_chat_completion_agent_with_kernel.py | 57 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step04_chat_completion_agent_plugin_simple.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step04_chat_completion_agent_plugin_simple.py | 66 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step05_chat_completion_agent_plugin_with_kernel.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step05_chat_completion_agent_plugin_with_kernel.py | 82 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step06_chat_completion_agent_group_chat.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step06_chat_completion_agent_group_chat.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step07_kernel_function_strategies.py | 128 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step07_kernel_function_strategies.py | 132 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step08_chat_completion_agent_json_result.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step08_chat_completion_agent_json_result.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step09_chat_completion_agent_logging.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step09_chat_completion_agent_logging.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step10_chat_completion_agent_structured_outputs.py | 58 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step10_chat_completion_agent_structured_outputs.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step11_chat_completion_agent_declarative.py | 102 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step11_chat_completion_agent_declarative.py | 105 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step12_chat_completion_agent_code_interpreter.py | 22 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step12_chat_completion_agent_code_interpreter.py | 24 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step12_chat_completion_agent_code_interpreter.py | 26 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step12_chat_completion_agent_code_interpreter.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/chat_completion/step12_chat_completion_agent_code_interpreter.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/copilot_studio/step1_copilot_studio_agent_simple.py | 28 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/copilot_studio/step1_copilot_studio_agent_simple.py | 30 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/copilot_studio/step2_copilot_studio_agent_thread_management.py | 44 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/copilot_studio/step2_copilot_studio_agent_thread_management.py | 46 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/copilot_studio/step3_copilot_studio_agent_prompt_template.py | 33 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/copilot_studio/step3_copilot_studio_agent_prompt_template.py | 37 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/copilot_studio/step4_copilot_studio_agent_web_search.py | 31 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/copilot_studio/step4_copilot_studio_agent_web_search.py | 33 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/observability.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step1_concurrent.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step1a_concurrent_structured_outputs.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step1a_concurrent_structured_outputs.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step2_sequential.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step2_sequential.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step2a_sequential_cancellation_token.py | 89 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step2b_sequential_streaming_agent_response_callback.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step2b_sequential_streaming_agent_response_callback.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step2b_sequential_streaming_agent_response_callback.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step2b_sequential_streaming_agent_response_callback.py | 106 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step3_group_chat.py | 60 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step3_group_chat.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step3a_group_chat_human_in_the_loop.py | 95 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step3a_group_chat_human_in_the_loop.py | 130 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step3b_group_chat_with_chat_completion_manager.py | 215 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step3b_group_chat_with_chat_completion_manager.py | 216 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step3b_group_chat_with_chat_completion_manager.py | 217 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step3b_group_chat_with_chat_completion_manager.py | 256 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step3b_group_chat_with_chat_completion_manager.py | 257 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step3b_group_chat_with_chat_completion_manager.py | 260 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step3b_group_chat_with_chat_completion_manager.py | 307 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step3b_group_chat_with_chat_completion_manager.py | 337 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4_handoff.py | 44 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4_handoff.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4_handoff.py | 133 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4_handoff.py | 136 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4_handoff.py | 138 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4_handoff.py | 170 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4a_handoff_structured_inputs.py | 64 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4a_handoff_structured_inputs.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4a_handoff_structured_inputs.py | 178 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4b_handoff_streaming_agent_response_callback.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4b_handoff_streaming_agent_response_callback.py | 62 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4b_handoff_streaming_agent_response_callback.py | 155 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4b_handoff_streaming_agent_response_callback.py | 157 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4b_handoff_streaming_agent_response_callback.py | 161 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4b_handoff_streaming_agent_response_callback.py | 163 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4b_handoff_streaming_agent_response_callback.py | 166 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4b_handoff_streaming_agent_response_callback.py | 199 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4c_handoff_mix_agent_types.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4c_handoff_mix_agent_types.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4c_handoff_mix_agent_types.py | 174 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4c_handoff_mix_agent_types.py | 177 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4c_handoff_mix_agent_types.py | 179 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step4c_handoff_mix_agent_types.py | 216 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step5_magentic.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/multi_agent_orchestration/step5_magentic.py | 108 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_assistant/step1_assistant.py | 53 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_assistant/step1_assistant.py | 56 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_assistant/step2_assistant_plugins.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_assistant/step2_assistant_plugins.py | 77 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_assistant/step3_assistant_vision.py | 76 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_assistant/step3_assistant_vision.py | 79 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_assistant/step4_assistant_tool_code_interpreter.py | 46 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_assistant/step4_assistant_tool_code_interpreter.py | 50 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_assistant/step5_assistant_tool_file_search.py | 67 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_assistant/step5_assistant_tool_file_search.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_assistant/step6_assistant_declarative.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_assistant/step6_assistant_declarative.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step1_responses_agent.py | 45 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step1_responses_agent.py | 49 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step2_responses_agent_thread_management.py | 46 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step2_responses_agent_thread_management.py | 49 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step3_responses_agent_plugins.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step3_responses_agent_plugins.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step4_responses_agent_web_search.py | 48 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step4_responses_agent_web_search.py | 50 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step5_responses_agent_file_search.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step5_responses_agent_file_search.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step6_responses_agent_vision.py | 72 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step6_responses_agent_vision.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step7_responses_agent_structured_outputs.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step7_responses_agent_structured_outputs.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step8_responses_agent_declarative.py | 74 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_agents/openai_responses/step8_responses_agent_declarative.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step01/step01_processes.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step01/step01_processes.py | 95 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step01/step01_processes.py | 110 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step01/step01_processes.py | 151 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/processes/fish_and_chips_process.py | 31 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/processes/fish_sandwich_process.py | 26 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/processes/fish_sandwich_process.py | 40 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/processes/single_food_item_process.py | 25 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/processes/single_food_item_process.py | 47 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 45 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 52 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 62 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 90 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 100 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 107 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 152 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 156 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 169 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 173 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 182 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 186 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 214 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 220 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 231 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 237 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 251 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 258 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 272 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 279 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 293 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 300 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 314 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 321 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 335 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03a_food_preparation.py | 342 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03b_food_ordering.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/step03b_food_ordering.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/steps/cut_food_step.py | 30 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/steps/cut_food_step.py | 37 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/steps/cut_food_with_sharpening_step.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/steps/cut_food_with_sharpening_step.py | 61 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/steps/cut_food_with_sharpening_step.py | 70 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/steps/cut_food_with_sharpening_step.py | 80 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/steps/cut_food_with_sharpening_step.py | 88 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/steps/fry_food_step.py | 36 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/steps/fry_food_step.py | 41 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/steps/gather_ingredients_step.py | 35 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/steps/gather_ingredients_step.py | 69 | 🟢 LOW | Debug print statement found |
| python/samples/getting_started_with_processes/step03/steps/gather_ingredients_step.py | 81 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/agent_collaboration.py | 136 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/agent_collaboration.py | 143 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/agent_collaboration.py | 154 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/agent_collaboration.py | 164 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/agent_collaboration.py | 169 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/agent_collaboration.py | 179 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/agent_collaboration.py | 180 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/agent_collaboration.py | 182 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_code.py | 57 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_code.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_code.py | 126 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_code.py | 128 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_code.py | 131 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_code.py | 135 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_code.py | 137 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_code.py | 143 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_code.py | 144 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_code.py | 150 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_search.py | 96 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_search.py | 100 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_search.py | 104 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/assistant_search.py | 110 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/agent_docs/chat_agent.py | 83 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/ai_services.py | 28 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/configuring_prompts.py | 92 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/configuring_prompts.py | 94 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/creating_functions.py | 29 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/creating_functions.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/creating_functions.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/evaluate_with_prompt_flow.py | 43 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/functions_within_prompts.py | 85 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/functions_within_prompts.py | 86 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/improved_evaluate_with_prompt_flow.py | 11 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/plugin.py | 35 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/plugin.py | 49 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/plugin.py | 51 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/plugin.py | 55 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/plugins/GithubPlugin/github.py | 115 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/serializing_prompts.py | 68 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/serializing_prompts.py | 71 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/serializing_prompts.py | 75 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/serializing_prompts.py | 88 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/templates.py | 146 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/templates.py | 150 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/templates.py | 151 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/templates.py | 156 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/using_the_kernel.py | 30 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/using_the_kernel.py | 40 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 21 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 31 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 32 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 36 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 38 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 45 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 46 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 50 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 52 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 60 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 61 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 65 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 67 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 94 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 95 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 99 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 101 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 116 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 117 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 121 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 123 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 139 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 140 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 144 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 146 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 167 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 168 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 173 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 175 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 201 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 202 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 213 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 215 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 242 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 243 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 254 | 🟢 LOW | Debug print statement found |
| python/samples/learn_resources/your_first_prompt.py | 255 | 🟢 LOW | Debug print statement found |
| python/samples/sk_service_configurator.py | 41 | 🟢 LOW | Debug print statement found |
| python/semantic_kernel/agents/azure_ai/azure_ai_agent.py | 558 | 🟢 LOW | Debug print statement found |
| python/semantic_kernel/agents/open_ai/openai_assistant_agent.py | 530 | 🟢 LOW | Debug print statement found |
| python/semantic_kernel/connectors/mcp.py | 1168 | 🟢 LOW | Debug print statement found |
| python/semantic_kernel/connectors/memory_stores/azure_cognitive_search/utils.py | 53 | 🟢 LOW | Debug print statement found |
| python/tests/integration/completions/test_azure_oai_chat_service_extensions.py | 144 | 🟢 LOW | Debug print statement found |
| python/tests/integration/completions/test_azure_oai_chat_service_extensions.py | 146 | 🟢 LOW | Debug print statement found |
| python/tests/integration/completions/test_azure_oai_chat_service_extensions.py | 149 | 🟢 LOW | Debug print statement found |
| python/tests/integration/completions/test_azure_oai_chat_service_extensions.py | 153 | 🟢 LOW | Debug print statement found |
| python/tests/integration/completions/test_conversation_summary_plugin.py | 74 | 🟢 LOW | Debug print statement found |
| python/tests/integration/completions/test_text_completion.py | 305 | 🟢 LOW | Debug print statement found |
| python/tests/unit/agents/openai_assistant/test_assistant_thread_actions.py | 206 | 🟢 LOW | Debug print statement found |
| python/tests/unit/connectors/memory/test_in_memory.py | 147 | 🟢 LOW | Debug print statement found |
| python/tests/unit/core_plugins/test_sessions_python_plugin.py | 151 | 🟢 LOW | Debug print statement found |
| python/tests/unit/core_plugins/test_sessions_python_plugin.py | 175 | 🟢 LOW | Debug print statement found |
| python/tests/unit/core_plugins/test_sessions_python_plugin.py | 366 | 🟢 LOW | Debug print statement found |
| python/tests/unit/core_plugins/test_sessions_python_plugin.py | 615 | 🟢 LOW | Debug print statement found |
| python/tests/unit/core_plugins/test_sessions_python_plugin.py | 616 | 🟢 LOW | Debug print statement found |
| python/tests/unit/core_plugins/test_sessions_python_plugin.py | 617 | 🟢 LOW | Debug print statement found |
| python/tests/unit/core_plugins/test_sessions_python_plugin.py | 619 | 🟢 LOW | Debug print statement found |
| python/tests/unit/core_plugins/test_sessions_python_plugin.py | 620 | 🟢 LOW | Debug print statement found |
| python/tests/unit/core_plugins/test_sessions_python_plugin.py | 621 | 🟢 LOW | Debug print statement found |
| python/tests/unit/core_plugins/test_sessions_python_plugin.py | 622 | 🟢 LOW | Debug print statement found |
| python/tests/unit/core_plugins/test_sessions_python_plugin.py | 624 | 🟢 LOW | Debug print statement found |
| python/tests/unit/core_plugins/test_sessions_python_plugin.py | 625 | 🟢 LOW | Debug print statement found |
| python/tests/unit/core_plugins/test_sessions_python_plugin.py | 627 | 🟢 LOW | Debug print statement found |
| python/tests/unit/prompt_template/test_jinja2_prompt_template_e2e.py | 25 | 🟢 LOW | Debug print statement found |
| python/tests/unit/text/test_function_extension.py | 34 | 🟢 LOW | Debug print statement found |

### Maintenance Items (140)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| dotnet/samples/Concepts/Agents/DeclarativeAgents.cs | 71 | ⚪ INFO | TODO comment found |
| dotnet/samples/Demos/CopilotAgentPlugins/CopilotAgentPluginsDemoSample/DemoCommand.cs | 512 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/Abstractions/AggregatorAgent.cs | 54 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/Abstractions/AggregatorAgent.cs | 65 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/AzureAI/Extensions/AgentDefinitionExtensions.cs | 103 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/OpenAI/Extensions/AgentDefinitionExtensions.cs | 48 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/OpenAI/Extensions/AgentDefinitionExtensions.cs | 87 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/OpenAI/Extensions/AgentDefinitionExtensions.cs | 102 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/OpenAI/Extensions/AgentDefinitionExtensions.cs | 114 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/Runtime/Abstractions/IAgent.cs | 35 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/Runtime/Abstractions/TopicId.cs | 123 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/Runtime/Core/AgentsAppBuilder.cs | 80 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/Runtime/InProcess/InProcessRuntime.cs | 96 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/Runtime/InProcess/InProcessRuntime.cs | 453 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/Runtime/InProcess/InProcessRuntime.cs | 461 | ⚪ INFO | TODO comment found |
| dotnet/src/Connectors/Connectors.Google/Core/Gemini/Clients/GeminiChatCompletionClient.cs | 808 | ⚪ INFO | TODO comment found |
| dotnet/src/Connectors/Connectors.Google/Core/GoogleAI/GoogleAIEmbeddingRequest.cs | 73 | ⚪ INFO | TODO comment found |
| dotnet/src/Connectors/Connectors.Google/Core/VertexAI/VertexAIEmbeddingRequest.cs | 42 | ⚪ INFO | TODO comment found |
| dotnet/src/Connectors/Connectors.Google/Extensions/GoogleAIKernelBuilderExtensions.cs | 34 | ⚪ INFO | TODO comment found |
| dotnet/src/Connectors/Connectors.Google/Extensions/GoogleAIKernelBuilderExtensions.cs | 68 | ⚪ INFO | TODO comment found |
| dotnet/src/Connectors/Connectors.Google/Extensions/GoogleAIKernelBuilderExtensions.cs | 103 | ⚪ INFO | TODO comment found |
| dotnet/src/Connectors/Connectors.Google/Extensions/GoogleAIServiceCollectionExtensions.DependencyInjection.cs | 35 | ⚪ INFO | TODO comment found |
| dotnet/src/Connectors/Connectors.Google/Extensions/GoogleAIServiceCollectionExtensions.cs | 31 | ⚪ INFO | TODO comment found |
| dotnet/src/Connectors/Connectors.Google/Extensions/GoogleAIServiceCollectionExtensions.cs | 63 | ⚪ INFO | TODO comment found |
| dotnet/src/Connectors/Connectors.Google/Services/GoogleAIEmbeddingGenerator.cs | 33 | ⚪ INFO | TODO comment found |
| dotnet/src/Connectors/Connectors.Google/Services/GoogleAIGeminiChatCompletionService.cs | 34 | ⚪ INFO | TODO comment found |
| dotnet/src/Connectors/Connectors.Google/Services/GoogleAITextEmbeddingGenerationService.cs | 38 | ⚪ INFO | TODO comment found |
| dotnet/src/Connectors/Connectors.OpenAI/Core/OpenAIStreamingChatMessageContent.cs | 67 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.Core/Internal/KernelProcessStateMetadataExtension.cs | 67 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.Core/Internal/KernelProcessStateMetadataExtension.cs | 84 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.Core/ListenForTargetBuilder.cs | 56 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.Core/ProcessBuilder.cs | 255 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.Core/ProcessBuilder.cs | 325 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.Core/ProcessStepBuilder.cs | 202 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.Core/Workflow/WorkflowBuilder.cs | 49 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.Core/Workflow/WorkflowBuilder.cs | 50 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.Core/Workflow/WorkflowBuilder.cs | 256 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalAgentStep.cs | 78 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalAgentStep.cs | 105 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalAgentStep.cs | 125 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalAgentStep.cs | 134 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalAgentStep.cs | 167 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalEdgeGroupProcessor.cs | 39 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalProcess.cs | 210 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalProcess.cs | 459 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalProcess.cs | 479 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalProcess.cs | 538 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalProcess.cs | 555 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalProcess.cs | 582 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalStep.cs | 240 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.LocalRuntime/LocalStep.cs | 250 | ⚪ INFO | TODO comment found |
| dotnet/src/Experimental/Process.Runtime.Dapr/Actors/StepActor.cs | 220 | ⚪ INFO | TODO comment found |
| dotnet/src/Functions/Functions.Grpc/Extensions/GrpcKernelExtensions.cs | 24 | ⚪ INFO | TODO comment found |
| dotnet/src/Functions/Functions.OpenApi.Extensions/Extensions/CopilotAgentPluginKernelExtensions.cs | 184 | ⚪ INFO | TODO comment found |
| dotnet/src/IntegrationTests/Connectors/Onnx/BertOnnxTextEmbeddingGenerationServiceTests.cs | 174 | ⚪ INFO | TODO comment found |
| dotnet/src/InternalUtilities/process/Runtime/KernelProcessAgentExecutor_Internal.cs | 59 | ⚪ INFO | TODO comment found |
| dotnet/src/InternalUtilities/process/Runtime/KernelProcessAgentExecutor_Internal.cs | 60 | ⚪ INFO | TODO comment found |
| dotnet/src/InternalUtilities/process/Runtime/KernelProcessAgentExecutor_Internal.cs | 73 | ⚪ INFO | TODO comment found |
| dotnet/src/InternalUtilities/process/Runtime/KernelProcessAgentExecutor_Internal.cs | 120 | ⚪ INFO | TODO comment found |
| dotnet/src/InternalUtilities/src/Schema/KernelJsonSchemaBuilder.cs | 16 | ⚪ INFO | TODO comment found |
| dotnet/src/Plugins/Plugins.Core/TimePlugin.cs | 13 | ⚪ INFO | TODO comment found |
| dotnet/src/Plugins/Plugins.UnitTests/Core/TimePluginTests.cs | 14 | ⚪ INFO | TODO comment found |
| dotnet/src/SemanticKernel.Abstractions/Filters/AutoFunctionInvocation/AutoFunctionInvocationContext.cs | 204 | ⚪ INFO | TODO comment found |
| dotnet/src/SemanticKernel.UnitTests/Functions/KernelJsonSchemaTests.cs | 94 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/AzureAISearch/AzureAISearchCollection.cs | 731 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/CosmosMongoDB/CosmosMongoCollection.cs | 333 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/CosmosNoSql/CosmosNoSqlCollection.cs | 57 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/CosmosNoSql/CosmosNoSqlCollection.cs | 343 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/CosmosNoSql/CosmosNoSqlCollection.cs | 436 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/CosmosNoSql/CosmosNoSqlCollection.cs | 511 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/CosmosNoSql/CosmosNoSqlCollection.cs | 781 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/InMemory/InMemoryCollection.cs | 207 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Milvus/MilvusMemoryStore.cs | 458 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Milvus/MilvusMemoryStore.cs | 495 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/MongoDB/MongoCollection.cs | 352 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/PgVector/PostgresCollection.cs | 210 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/PgVector/PostgresCollection.cs | 580 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/PgVector/PostgresMapper.cs | 92 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Pinecone/PineconeMapper.cs | 44 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Qdrant/QdrantCollection.cs | 207 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Qdrant/QdrantCollection.cs | 216 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Qdrant/QdrantCollection.cs | 492 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Qdrant/QdrantMapper.cs | 106 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Redis/RedisFieldMapping.cs | 78 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Redis/RedisHashSetCollection.cs | 70 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Redis/RedisHashSetDynamicCollection.cs | 23 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Redis/RedisJsonCollection.cs | 74 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Redis/RedisJsonDynamicCollection.cs | 23 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Redis/RedisJsonDynamicModelBuilder.cs | 35 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Redis/RedisJsonModelBuilder.cs | 36 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Redis/RedisVectorStore.cs | 65 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Redis/RedisVectorStore.cs | 94 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/SqlServer/SqlServerCollection.cs | 392 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/SqlServer/SqlServerCollection.cs | 468 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/SqlServer/SqlServerDynamicCollection.cs | 22 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/SqlServer/SqlServerVectorStore.cs | 82 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/SqliteVec/SqliteCollection.cs | 564 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/SqliteVec/SqliteFilterTranslator.cs | 50 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/SqliteVec/SqliteFilterTranslator.cs | 54 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/SqliteVec/SqlitePropertyMapping.cs | 88 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/VectorData.Abstractions/ProviderServices/CollectionModel.cs | 92 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/VectorData.Abstractions/ProviderServices/CollectionModel.cs | 117 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/VectorData.Abstractions/ProviderServices/CollectionModelBuilder.cs | 100 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/VectorData.Abstractions/ProviderServices/CollectionModelBuilder.cs | 101 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/VectorData.Abstractions/ProviderServices/CollectionModelBuilder.cs | 102 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/VectorData.Abstractions/ProviderServices/CollectionModelBuilder.cs | 351 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/VectorData.Abstractions/ProviderServices/Filter/FilterTranslatorBase.cs | 331 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/VectorData.Abstractions/ProviderServices/PropertyModel.cs | 91 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/VectorData.Abstractions/ProviderServices/PropertyModel.cs | 92 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/VectorData.Abstractions/ProviderServices/PropertyModel.cs | 152 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/VectorData.Abstractions/ProviderServices/PropertyModel.cs | 159 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Weaviate/WeaviateCollection.cs | 293 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Weaviate/WeaviateDynamicCollection.cs | 27 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Weaviate/WeaviateMapper.cs | 56 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Weaviate/WeaviateMapper.cs | 147 | ⚪ INFO | TODO comment found |
| dotnet/src/VectorData/Weaviate/WeaviateVectorStore.cs | 101 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/AzureAISearch.ConformanceTests/Support/AzureAISearchTestStore.cs | 65 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/CosmosMongoDB.ConformanceTests/TypeTests/CosmosMongoDataTypeTests.cs | 16 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/PgVector.ConformanceTests/TypeTests/PostgresEmbeddingTypeTests.cs | 61 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/Pinecone.ConformanceTests/TypeTests/PineconeDataTypeTests.cs | 28 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/Redis.UnitTests/RedisJsonCollectionTests.cs | 323 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/Redis.UnitTests/RedisJsonCollectionTests.cs | 349 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/SqliteVec.UnitTests/SqliteCollectionTests.cs | 3 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/SqliteVec.UnitTests/SqliteVectorStoreTests.cs | 3 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/VectorData.ConformanceTests/FilterTests.cs | 128 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/VectorData.ConformanceTests/ModelTests/DynamicModelTests.cs | 291 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/VectorData.ConformanceTests/Support/DynamicVectorStoreCollectionFixture.cs | 12 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/VectorData.ConformanceTests/Support/DynamicVectorStoreCollectionFixture.cs | 21 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/VectorData.ConformanceTests/Support/VectorStoreCollectionFixture.cs | 11 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/VectorData.ConformanceTests/Support/VectorStoreCollectionFixtureBase.cs | 25 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/VectorData.UnitTests/CollectionModelBuilderTests.cs | 191 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/Weaviate.ConformanceTests/TypeTests/WeaviateDataTypeTests.cs | 18 | ⚪ INFO | TODO comment found |
| dotnet/test/VectorData/Weaviate.ConformanceTests/TypeTests/WeaviateDataTypeTests.cs | 24 | ⚪ INFO | TODO comment found |
| python/samples/demos/guided_conversations/guided_conversation/utils/resources.py | 157 | ⚪ INFO | TODO comment found |
| python/tests/integration/completions/test_azure_oai_chat_service_extensions.py | 136 | ⚪ INFO | TODO comment found |
| python/tests/integration/fakes/fun_plugin_fake.py | 6 | ⚪ INFO | TODO comment found |
| python/tests/integration/fakes/summarize_plugin_fake.py | 5 | ⚪ INFO | TODO comment found |
| python/tests/integration/fakes/writer_plugin_fake.py | 7 | ⚪ INFO | TODO comment found |
| python/tests/unit/contents/test_chat_message_content.py | 205 | ⚪ INFO | TODO comment found |
| python/tests/unit/contents/test_streaming_chat_message_content.py | 181 | ⚪ INFO | TODO comment found |

## Detailed Findings

### MAINTENANCE

**Total:** 140 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| dotnet/samples/Concepts/Agents/DeclarativeAgents.cs | 71 | ⚪ INFO | TODO comment found |
| dotnet/samples/Demos/CopilotAgentPlugins/CopilotAgentPluginsDemoSample/DemoCommand.cs | 512 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/Abstractions/AggregatorAgent.cs | 54 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/Abstractions/AggregatorAgent.cs | 65 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/AzureAI/Extensions/AgentDefinitionExtensions.cs | 103 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/OpenAI/Extensions/AgentDefinitionExtensions.cs | 48 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/OpenAI/Extensions/AgentDefinitionExtensions.cs | 87 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/OpenAI/Extensions/AgentDefinitionExtensions.cs | 102 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/OpenAI/Extensions/AgentDefinitionExtensions.cs | 114 | ⚪ INFO | TODO comment found |
| dotnet/src/Agents/Runtime/Abstractions/IAgent.cs | 35 | ⚪ INFO | TODO comment found |

*... and 130 more*

### CODE_QUALITY

**Total:** 1367 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| dotnet/samples/Demos/ProcessFrameworkWithSignalR/src/ProcessFramework.Aspire.SignalR.ReactFrontend/src/services/signalr/documentGeneration.client.ts | 19 | 🟢 LOW | Debug console.log statement found |
| dotnet/samples/Demos/ProcessFrameworkWithSignalR/src/ProcessFramework.Aspire.SignalR.ReactFrontend/src/services/signalr/documentGeneration.client.ts | 24 | 🟢 LOW | Debug console.log statement found |
| dotnet/samples/Demos/ProcessFrameworkWithSignalR/src/ProcessFramework.Aspire.SignalR.ReactFrontend/src/services/signalr/documentGeneration.client.ts | 29 | 🟢 LOW | Debug console.log statement found |
| python/samples/concepts/agents/autogen_conversable_agent/autogen_conversable_agent_code_executor.py | 57 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/autogen_conversable_agent/autogen_conversable_agent_code_executor.py | 63 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/autogen_conversable_agent/autogen_conversable_agent_convo_with_tools.py | 91 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/autogen_conversable_agent/autogen_conversable_agent_convo_with_tools.py | 93 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/autogen_conversable_agent/autogen_conversable_agent_convo_with_tools.py | 97 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/autogen_conversable_agent/autogen_conversable_agent_simple_convo.py | 59 | 🟢 LOW | Debug print statement found |
| python/samples/concepts/agents/azure_ai_agent/azure_ai_agent_as_kernel_function.py | 32 | 🟢 LOW | Debug print statement found |

*... and 1357 more*

### SECURITY

**Total:** 31 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| dotnet/src/Experimental/Orchestration.Flow.IntegrationTests/FlowOrchestratorTests.cs | 108 | 🟠 HIGH | Potential API key detected |
| dotnet/test/VectorData/AzureAISearch.ConformanceTests/Support/AzureAISearchTestEnvironment.cs | 31 | 🟠 HIGH | Potential API key detected |
| dotnet/test/VectorData/Pinecone.ConformanceTests/Support/PineconeTestStore.cs | 75 | 🟠 HIGH | Potential API key detected |
| python/samples/concepts/mcp/agent_with_http_mcp_plugin.py | 93 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/agents/open_ai/azure_assistant_agent.py | 132 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/agents/open_ai/azure_assistant_agent.py | 225 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/agents/open_ai/azure_responses_agent.py | 139 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/agents/open_ai/azure_responses_agent.py | 232 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/connectors/ai/open_ai/services/azure_audio_to_text.py | 87 | 🟠 HIGH | Potential API key detected |
| python/semantic_kernel/connectors/ai/open_ai/services/azure_chat_completion.py | 110 | 🟠 HIGH | Potential API key detected |

*... and 21 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 86/100 (Tier B)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -450 | Fair ⚠️ |
| Code Quality | -1372 | Good ✅ |
| Test Coverage | +2 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 30 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 28.8%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

