# Repository Analysis Report: mongodb/mongo

**Generated:** 2026-06-19 09:07:16 CDT

**Quality Score:** 68/100 (Tier C)

## Executive Summary

- **Overall Quality:** C (68/100)
- **Total Findings:** 2409
- **Critical Issues:** 0
- **High Issues:** 823
- **Medium Issues:** 37
- **Low Issues:** 1383
- **Files Scanned:** 53921

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 1383 | Medium |
| security | 851 | High |
| maintenance | 175 | Medium |

## Repository Overview

- **Owner:** mongodb
- **Name:** mongo
- **Description:** The MongoDB Database
- **Primary Language:** C++
- **Stars:** 28377
- **Forks:** 5782
- **Open Issues:** 26
- **Size:** 1380094 KB
- **Created:** 2009-01-15
- **Last Updated:** 2026-06-19
- **Default Branch:** master

**Topics:** c-plus-plus, database, mongodb, nosql

## Security Analysis

⚠️ **Found 851 security-related findings.**

### ⚠️ High Severity Issues (823)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 49 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 68 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 71 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 72 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 101 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 104 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 110 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 129 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 130 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 131 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 136 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 157 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 158 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 159 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 164 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/access_control_with_unreachable_configs.js | 29 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/applyOps_privilege.js | 32 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/applyOps_privilege.js | 42 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/applyOps_privilege.js | 50 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 19 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 110 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 123 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 132 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 135 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 136 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 139 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 140 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 141 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 142 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 145 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 146 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 147 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 148 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 151 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-counters.js | 152 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth-metrics.js | 334 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth1.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth1.js | 33 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth1.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth1.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth1.js | 90 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth2.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth3.js | 6 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth3.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth_client_metrics.js | 26 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth_helpers.js | 7 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth_log.js | 83 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth_mechanism_discovery.js | 9 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth_mechanism_discovery.js | 13 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth_pass_prompt.js | 7 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth_system_logs.js | 6 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/auth_system_logs.js | 44 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions.js | 25 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions.js | 49 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions.js | 54 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions.js | 69 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions.js | 83 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions.js | 145 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions.js | 153 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions.js | 161 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions.js | 171 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions.js | 182 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions.js | 191 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions.js | 275 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions.js | 295 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions_role.js | 25 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions_role.js | 189 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions_role.js | 196 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions_role.js | 203 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions_role.js | 238 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions_role.js | 259 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions_role.js | 293 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions_role.js | 297 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions_role.js | 313 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authentication_restrictions_role.js | 320 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authz_cache_on_system_modification.js | 13 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authz_cache_on_system_modification.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authz_modifications_access_control.js | 13 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authz_modifications_access_control.js | 25 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authz_modifications_access_control.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authz_modifications_access_control.js | 44 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authz_modifications_access_control.js | 51 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authz_modifications_access_control.js | 53 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authz_modifications_access_control.js | 152 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authz_modifications_access_control.js | 171 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authz_tenant_access_control.js | 158 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authz_tenant_access_control.js | 214 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/authz_tenant_access_control.js | 231 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/autocomplete_auth.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/autocomplete_auth.js | 31 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 19 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 25 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 26 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 29 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 32 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 33 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 34 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 37 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/basic_role_auth.js | 178 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/benchrun_scram.js | 8 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/buildinfo_auth_cmd.js | 57 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/buildinfo_auth_cmd.js | 59 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/builtin_roles_searchCoordinator_write_privileges.js | 5 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/builtin_roles_system_colls.js | 12 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/builtin_roles_system_colls.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/builtin_roles_system_colls.js | 47 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/bypass_default_max_time_ms.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/bypass_default_max_time_ms.js | 44 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/bypass_default_max_time_ms.js | 55 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/change_stream_pre_image_coll_role_auth.js | 14 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/clac_system_colls.js | 10 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/clac_system_colls.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/clac_system_colls.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/client_source_authentication_restriction_mode.js | 30 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/client_source_authentication_restriction_mode.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/cluster_ip_allowlist.js | 65 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/cluster_ip_allowlist_replset.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/cluster_monitor_role_find_system_sessions.js | 9 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/cluster_monitor_role_find_system_sessions.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/collmod_remove_timeseries_legacy_bucketing_parameters_flag.js | 6 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/commands_user_defined_roles.js | 269 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/commands_user_defined_roles.js | 277 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/curop_auth_info.js | 8 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/curop_auth_info.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/db_multiple_login.js | 7 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/db_multiple_login.js | 9 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/dbcheck.js | 15 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/dbcheck.js | 19 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/dbcheck.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/dbcheck.js | 49 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/default_max_time_ms_aggregate.js | 33 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/default_max_time_ms_aggregate.js | 63 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/default_max_time_ms_metrics.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/default_max_time_ms_metrics.js | 48 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/default_max_time_ms_metrics.js | 54 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/default_max_time_ms_sharded.js | 38 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/default_max_time_ms_sharded.js | 88 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/default_max_time_ms_with_tenant.js | 41 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/default_max_time_ms_with_tenant.js | 42 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/default_max_time_ms_with_tenant.js | 70 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/delete_client_cursor.js | 58 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/delete_client_cursor.js | 60 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/deleted_recreated_user_base.js | 19 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/deleted_recreated_user_base.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/deleted_recreated_user_base.js | 33 | 🟠 HIGH | Database connection string detected |
| jstests/auth/deleted_recreated_user_base.js | 38 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/disable_localhost_bypass.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/disable_localhost_bypass.js | 25 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/disable_localhost_bypass.js | 29 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/disable_localhost_bypass.js | 30 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/drop-user-transaction.js | 9 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/drop-user-transaction.js | 17 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/explain_auth.js | 6 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/explain_auth.js | 7 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/explain_auth.js | 82 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/explain_auth.js | 83 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/explain_auth.js | 84 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/explain_auth.js | 102 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/getMore.js | 12 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/getMore.js | 29 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/getMore.js | 32 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/getMore.js | 108 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/getMore.js | 156 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/getMore.js | 190 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/getMore.js | 283 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/getMore.js | 299 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/impersonation-deny.js | 9 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/indexSystemUsers.js | 7 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/indexSystemUsers.js | 9 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/indexSystemUsers.js | 10 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/indexSystemUsers.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/init_replicated_fast_count.js | 15 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/init_replicated_fast_count.js | 34 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/init_replicated_fast_count.js | 41 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/init_replicated_fast_count.js | 48 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/init_replicated_fast_count.js | 55 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/internal_command_auth_validation.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/internal_command_auth_validation.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/internal_command_auth_validation.js | 998 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/internal_command_auth_validation.js | 1132 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/internal_command_auth_validation.js | 1180 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/internal_command_auth_validation.js | 1209 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/internal_command_auth_validation.js | 1211 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/internal_command_auth_validation.js | 1244 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/internal_generic_arguments_require_internal_role.js | 7 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/internal_generic_arguments_require_internal_role.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/iteration_count_control.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/iteration_count_defaults.js | 7 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/iteration_count_defaults.js | 8 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/js_scope_leak.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/js_scope_leak.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/keyfile_auth_ensure_correct_username_change.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/keyfile_auth_ensure_correct_username_change.js | 38 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/keyfile_auth_ensure_correct_username_change.js | 50 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/keyfile_auth_ensure_correct_username_change.js | 63 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/keyfile_auth_ensure_correct_username_change.js | 64 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/keyfile_rollover.js | 33 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/kill_cursors.js | 78 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/kill_cursors.js | 81 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/kill_cursors.js | 82 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/kill_cursors.js | 83 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/kill_cursors.js | 84 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/kill_cursors.js | 85 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/kill_sessions_logging.js | 13 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/kill_sessions_logging.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/killop_error_code.js | 15 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/killop_error_code.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/killop_error_code.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/killop_own_ops.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/killop_own_ops.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/killop_own_ops.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/killop_own_ops.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lib/bulk_write_base.js | 5 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lib/bulk_write_base.js | 68 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lib/bulk_write_base.js | 81 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lib/bulk_write_base.js | 90 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lib/commands_builtin_roles.js | 185 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lib/commands_builtin_roles.js | 191 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lib/commands_lib.js | 4189 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lib/commands_lib.js | 8165 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lib/truncate_range_base.js | 14 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lib/truncate_range_base.js | 44 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lib/truncate_range_base.js | 51 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lib/truncate_range_base.js | 58 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lib/truncate_range_base.js | 65 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_all_local_sessions.js | 25 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_all_local_sessions.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_all_sessions.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_all_sessions.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_cluster_catalog_auth.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_cluster_catalog_auth.js | 110 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_cluster_catalog_auth.js | 132 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_cluster_catalog_auth.js | 155 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_cluster_catalog_auth.js | 178 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_cluster_catalog_auth.js | 203 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_cluster_catalog_auth.js | 231 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_cluster_catalog_auth.js | 256 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_cluster_catalog_auth.js | 284 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_collections_filter_views.js | 15 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_collections_filter_views.js | 34 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_collections_own_collections.js | 55 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_collections_own_collections.js | 97 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_databases_base.js | 4 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_databases_base.js | 43 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_databases_base.js | 44 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_databases_base.js | 45 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_databases_base.js | 51 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_databases_base.js | 52 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_databases_base.js | 53 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_databases_base.js | 54 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_local_sessions_base.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_local_sessions_base.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_local_sessions_base.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_sessions.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_sessions.js | 26 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/list_sessions.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/listcommands_preauth_base.js | 12 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/live_privilege_updates.js | 10 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/live_privilege_updates.js | 12 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/live_privilege_updates.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/localhostAuthBypass.js | 9 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/localhostAuthBypass.js | 10 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/localhost_authbypass_state.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/log_userid_off.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/logout_deprecated.js | 17 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/logout_deprecated.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/logout_reconnect.js | 12 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/logout_reconnect.js | 14 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/logs_include_client_info.js | 13 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lsid_auth_checks.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lsid_auth_checks.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lsid_auth_checks.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lsid_auth_checks.js | 32 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lsid_auth_checks.js | 110 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lsid_auth_checks.js | 111 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lsid_auth_checks.js | 114 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/lsid_auth_checks.js | 119 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mergeAuthCollsCommand.js | 32 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mergeAuthCollsCommand.js | 33 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mergeAuthCollsCommand.js | 50 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mergeAuthCollsCommand.js | 51 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mergeAuthCollsCommand.js | 52 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mergeAuthCollsCommand.js | 80 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mergeAuthCollsCommand.js | 81 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mergeAuthCollsCommand.js | 110 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mergeAuthCollsCommand.js | 111 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mongoURIAuth.js | 13 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mongoURIAuth.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mongoURIAuth.js | 29 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mongoURIAuth.js | 38 | 🟠 HIGH | Database connection string detected |
| jstests/auth/mongoURIAuth.js | 43 | 🟠 HIGH | Database connection string detected |
| jstests/auth/mongos_cache_invalidation.js | 26 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mongos_cache_invalidation.js | 40 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mongos_cache_invalidation.js | 56 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mongos_cache_invalidation.js | 311 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mr_auth.js | 33 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mr_auth.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/mr_auth.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/multitenancy_test_authzn.js | 8 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/multitenancy_test_authzn.js | 154 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/pre_auth_commands_with_sessions.js | 5 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/pre_auth_commands_with_sessions.js | 7 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/pre_auth_commands_with_sessions.js | 54 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/prepared_transaction.js | 17 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/prepared_transaction.js | 29 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/prepared_transaction.js | 31 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/profile.js | 6 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/profile.js | 7 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/profile_access.js | 9 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/profile_access.js | 14 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/profile_access.js | 15 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/profile_access.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/profile_access.js | 42 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/pseudo_commands.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/pseudo_commands.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/readIndex.js | 8 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/readIndex.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/readIndex.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/read_command_max_time_ms_repl_set.js | 26 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/read_command_max_time_ms_repl_set.js | 39 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/refresh_logical_session_cache_with_long_usernames.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/refresh_logical_session_cache_with_long_usernames.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/refresh_logical_session_cache_with_long_usernames.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/release_memory_base.js | 66 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/release_memory_base.js | 104 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/release_memory_base.js | 105 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/release_memory_base.js | 106 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/rename.js | 13 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/rename.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/rename.js | 17 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/renameRestrictedCollections.js | 17 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/renameRestrictedCollections.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/renameRestrictedCollections.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/renameRestrictedCollections.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/renameRestrictedCollections.js | 30 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/renameRestrictedCollections.js | 31 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/renameRestrictedCollections.js | 120 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/rename_encrypted_collection.js | 99 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/rename_encrypted_collection.js | 106 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/rename_system_buckets_collection.js | 65 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/rename_system_buckets_collection.js | 98 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/rename_system_buckets_collection.js | 105 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/rename_system_buckets_collection.js | 110 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/rename_system_buckets_collection.js | 111 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/rename_system_buckets_collection.js | 114 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/rename_system_buckets_collection.js | 119 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/repl.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/repl_auth.js | 19 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/repl_auth.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/repl_auth.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/repl_auth_shell_mechanism.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/repl_auth_shell_mechanism.js | 66 | 🟠 HIGH | Database connection string detected |
| jstests/auth/repl_set_test_keyfile_auth_await_replication.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/resource_pattern_matching.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/resource_pattern_matching.js | 32 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/restore-role-can-drop-system-views-non-admin-db.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/restore-role-can-drop-system-views-non-admin-db.js | 13 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/restore-role-can-drop-system-views-non-admin-db.js | 25 | 🟠 HIGH | Database connection string detected |
| jstests/auth/restore_role_create_collection_via_apply_ops.js | 34 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/restore_role_create_collection_via_apply_ops.js | 38 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/role_management_commands_edge_cases.js | 12 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/role_management_commands_lib.js | 15 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/role_management_commands_lib.js | 19 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/sasl-unknown-mech.js | 8 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/sasl_mechanism_discovery.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/sasl_mechanism_discovery.js | 51 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/sasl_mechanism_discovery.js | 68 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/sasl_mechanism_discovery.js | 75 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/sasl_mechanism_discovery.js | 80 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/sasl_mechanism_discovery.js | 82 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/scram-credentials-invalid.js | 8 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/scram-credentials-invalid.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/scram-credentials-invalid.js | 34 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/scram_disabled_mech_unknown_user.js | 25 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/secondary_invalidation.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/secondary_invalidation.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/security_token.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/security_token.js | 39 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/security_token.js | 47 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/security_token.js | 160 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/shell.js | 7 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/shell.js | 10 | 🟠 HIGH | Database connection string detected |
| jstests/auth/show_log_auth.js | 8 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/speculative-auth-replset.js | 81 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/speculative-auth-sharding.js | 15 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/speculative-auth-sharding.js | 62 | 🟠 HIGH | Database connection string detected |
| jstests/auth/speculative-sasl-start.js | 9 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/speculative-sasl-start.js | 68 | 🟠 HIGH | Database connection string detected |
| jstests/auth/speculative-sasl-start.js | 85 | 🟠 HIGH | Database connection string detected |
| jstests/auth/speculative-sasl-start.js | 188 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/speculative-sasl-start.js | 189 | 🟠 HIGH | Database connection string detected |
| jstests/auth/speculative-sasl-start.js | 231 | 🟠 HIGH | Database connection string detected |
| jstests/auth/system_buckets_invalid_nss.js | 5 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/system_user_exception.js | 12 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/system_user_exception.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/system_user_exception.js | 17 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/system_user_privileges.js | 37 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/system_user_privileges.js | 45 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/system_user_privileges.js | 46 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/system_user_privileges.js | 48 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/system_user_privileges.js | 99 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/timeseries_upgrade_downgrade_apply_ops.js | 29 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/token_privileges.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/transactions.js | 12 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/transactions.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/transactions.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/upgrade_noauth_to_keyfile.js | 42 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user-cache-invalidation.js | 112 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user-cache-invalidation.js | 118 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_cache_access_stats.js | 82 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_cache_access_stats.js | 111 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_cache_doc_source.js | 5 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_cache_doc_source.js | 7 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_cache_doc_source.js | 14 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_cache_doc_source.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_cache_doc_source.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_cache_doc_source.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_cache_doc_source.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_defined_roles.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_defined_roles.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_defined_roles.js | 34 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 12 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 33 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 45 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 48 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 51 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 54 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 57 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 60 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 63 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 66 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_edge_cases.js | 69 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_lib.js | 13 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_lib.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_lib.js | 62 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_lib.js | 68 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_lib.js | 96 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 81 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 107 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 110 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 113 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 118 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 124 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 130 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 139 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 148 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 158 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 165 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 174 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 207 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 211 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 215 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 226 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_management_commands_mechanisms.js | 247 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_roles_disable_parameter.js | 14 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_roles_disable_parameter.js | 29 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_roles_empty.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_roles_empty.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_roles_find_agg.js | 97 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_roles_find_agg.js | 114 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_roles_update_findAndModify.js | 126 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_roles_update_findAndModify.js | 142 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_roles_view.js | 14 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_roles_view.js | 38 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_roles_view.js | 50 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_special_chars.js | 6 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_special_chars.js | 13 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_special_chars.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_special_chars.js | 29 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/user_special_chars.js | 32 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/usersInfo_base.js | 9 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/usersInfo_base.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/usersinfo_authenticated_mechanism_internal_only.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/usersinfo_authenticated_mechanism_internal_only.js | 15 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/usersinfo_authenticated_mechanism_internal_only.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/views_authz.js | 14 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/auth/views_authz.js | 39 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/concurrency/fsm_workloads/auth/auth_create_user.js | 41 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/concurrency/fsm_workloads/auth/auth_drop_user.js | 42 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/concurrency/fsm_workloads/auth/auth_privilege_consistency.js | 17 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/administrative/auth1.js | 60 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/administrative/profile/profile1.js | 34 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/administrative/profile/profile1.js | 40 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/administrative/profile/profile3.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/administrative/profile/profile3.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/catalog/views/views_all_commands.js | 372 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 96 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 99 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 102 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 104 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 107 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 110 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 113 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 117 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 125 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 131 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 137 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/shell/user_management_helpers.js | 142 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/stable_api/version_api_v1_command_coverage.js | 47 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/write/validate_user_documents.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/write/validate_user_documents.js | 44 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/write/validate_user_documents.js | 50 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/core/write/validate_user_documents.js | 58 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/command_line/test_parsed_options.js | 87 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/ingress_handshake_metrics_helpers.js | 8 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/ingress_handshake_metrics_helpers.js | 9 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/kill_sessions.js | 783 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/kill_sessions.js | 801 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/kill_sessions.js | 802 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/kill_sessions.js | 803 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/kill_sessions.js | 806 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 1008 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 1044 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 1076 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 1079 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 1277 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 1454 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 1676 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 1778 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 1857 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 1909 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 1940 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 2476 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 2574 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 2657 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 2704 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 3334 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 3409 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 3440 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 3488 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/libs/write_concern_all_commands.js | 3520 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/multiVersion/genericBinVersion/authz_schema_version.js | 37 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/multiVersion/genericBinVersion/authz_schema_version.js | 92 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/multiVersion/genericBinVersion/load_keys_on_upgrade.js | 29 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/multiVersion/genericBinVersion/server-security/dollar_audit_mixed_version_mongods.js | 76 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/admission/execution_control/auth_deprioritization.js | 15 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/admission/priority_port_exempt_ingress_request_rate_limiter.js | 51 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/admission/priority_port_exempt_ingress_request_rate_limiter.js | 64 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/backup_export/backup_fast_export_procedure.js | 108 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/extensions/extensions_auth.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/extensions/extensions_auth.js | 17 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/extensions/extensions_auth.js | 43 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/extensions/extensions_auth.js | 44 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/libs/user_write_blocking.js | 17 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/move_collection_not_tracked.js | 39 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/network/libs/conn_establishment_rate_limiter_helpers.js | 115 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/network/message_size_check.js | 58 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/query/cbr/cbr_histogram_internal_query.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/query/change_streams/change_stream_options.js | 191 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/query/change_streams/change_stream_options.js | 214 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/query/change_streams/change_streams_required_privileges.js | 13 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/query/out_merge/aggWrite/out_merge_on_secondary_metadata.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/cross_user_getmore_has_no_side_effects.js | 17 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/cross_user_getmore_has_no_side_effects.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/cross_user_getmore_has_no_side_effects.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/cross_user_getmore_has_no_side_effects.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/cross_user_getmore_has_no_side_effects.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/cross_user_getmore_has_no_side_effects.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/metadata_size_estimate.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/metadata_size_estimate.js | 45 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/set_user_write_block_mode.js | 510 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/start_session_command.js | 32 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/start_session_command.js | 63 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/start_session_command.js | 65 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/system_indexes.js | 17 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/security/system_indexes.js | 60 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/sharded_cluster_topology/standbyClusters/mongos_standby_all_commands.js | 133 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/sharded_cluster_topology/standbyClusters/mongos_standby_with_auth.js | 14 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/shell/shell_grpc_uri.js | 52 | 🟠 HIGH | Database connection string detected |
| jstests/noPassthrough/traffic_recording/traffic_reading.js | 33 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_reading.js | 59 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_recording.js | 74 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_recording.js | 79 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_recording.js | 87 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_recording.js | 92 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_recording.js | 134 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_recording.js | 208 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_recording.js | 254 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_recording.js | 283 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_recording.js | 385 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_recording.js | 405 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_recording.js | 425 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_replaying.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_replaying_lib.js | 43 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/traffic_recording/traffic_replaying_lib.js | 50 | 🟠 HIGH | Database connection string detected |
| jstests/noPassthrough/traffic_recording/traffic_replaying_with_mongor.js | 37 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/txns_retryable_writes_sessions/auth_reject_mismatching_logical_times.js | 45 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/txns_retryable_writes_sessions/currentop_two_phase_coordinator_metrics.js | 164 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/txns_retryable_writes_sessions/logical_session_cursor_checks.js | 13 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/txns_retryable_writes_sessions/logical_session_cursor_checks.js | 15 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/txns_retryable_writes_sessions/logical_session_cursor_checks.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/txns_retryable_writes_sessions/refresh_sessions_command.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/txns_retryable_writes_sessions/refresh_sessions_command.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthrough/txns_retryable_writes_sessions/refresh_sessions_command.js | 45 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/noPassthroughWithMongod/network/ingress_handshake_and_auth_metrics.js | 15 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/advance_cluster_time.js | 19 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/advance_cluster_time.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/advance_cluster_time.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/all_commands_downgrading_to_upgraded.js | 686 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/all_commands_downgrading_to_upgraded.js | 756 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/all_commands_downgrading_to_upgraded.js | 800 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/all_commands_downgrading_to_upgraded.js | 989 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/all_commands_downgrading_to_upgraded.js | 1556 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/all_commands_downgrading_to_upgraded.js | 1839 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/all_commands_downgrading_to_upgraded.js | 1842 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/all_commands_downgrading_to_upgraded.js | 1873 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/auth1.js | 57 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/auth1.js | 58 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/auth2.js | 57 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/auth_coordinateCommitTransaction.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/auth_coordinateCommitTransaction.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/auth_coordinateCommitTransaction.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/auth_coordinateCommitTransaction.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/auth_no_pri.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/auth_no_pri.js | 32 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/disable_cluster_time_gossiping_in_unreadable_state.js | 9 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/disable_cluster_time_gossiping_in_unreadable_state.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/index_builds/buildindexes_false_with_system_indexes.js | 34 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/localhostAuthBypass.js | 8 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/localhostAuthBypass.js | 9 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/replsetinitiate_works_with_keyfile_profile_verbose_options.js | 25 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/replsetinitiate_works_with_keyfile_profile_verbose_options.js | 26 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/rollback_auth.js | 71 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/rollback_auth.js | 75 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/rollback_auth.js | 107 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/session_collection_reauthenticate.js | 37 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/user_management_wc.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/user_management_wc.js | 46 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/user_management_wc.js | 48 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/user_management_wc.js | 60 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/user_management_wc.js | 80 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/replsets/user_management_wc.js | 94 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/serverless/list_databases_for_all_tenants.js | 31 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/advance_cluster_time_action_type.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/advance_cluster_time_action_type.js | 38 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/advance_cluster_time_action_type.js | 43 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_collection_stats_auth.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_collection_stats_auth.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_collection_stats_auth.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_collection_stats_auth.js | 88 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_commands_direct_shard_connection_auth.js | 501 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_commands_direct_shard_connection_auth.js | 585 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_commands_direct_shard_connection_auth.js | 635 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_commands_direct_shard_connection_auth.js | 831 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_commands_direct_shard_connection_auth.js | 1181 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_commands_direct_shard_connection_auth.js | 1319 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_commands_direct_shard_connection_auth.js | 1322 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_commands_direct_shard_connection_auth.js | 1334 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_commands_direct_shard_connection_auth.js | 1503 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_commands_direct_shard_connection_auth.js | 1507 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/all_commands_direct_shard_connection_auth.js | 1531 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/analyze_shard_key_agg_stage_auth.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/analyze_shard_key_agg_stage_auth.js | 32 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/analyze_shard_key_agg_stage_auth.js | 70 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/analyze_shard_key_agg_stage_auth.js | 92 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/analyze_shard_key_agg_stage_auth.js | 111 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/analyze_shard_key_agg_stage_auth.js | 133 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/analyze_shard_key_auth.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/analyze_shard_key_auth.js | 43 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/analyze_shard_key_auth.js | 72 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/analyze_shard_key_auth.js | 92 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/analyze_shard_key_auth.js | 109 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/analyze_shard_key_basic.js | 135 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/configure_query_analyzer_auth.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/configure_query_analyzer_auth.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/configure_query_analyzer_auth.js | 67 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/configure_query_analyzer_auth.js | 89 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/configure_query_analyzer_auth.js | 110 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/configure_query_analyzer_basic.js | 138 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/list_sampled_queries.js | 370 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/list_sampled_queries_auth.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/list_sampled_queries_auth.js | 34 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/list_sampled_queries_auth.js | 57 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/analyze_shard_key/list_sampled_queries_auth.js | 74 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth.js | 26 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth2.js | 12 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/authCommands.js | 44 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/authCommands.js | 70 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/authCommands.js | 78 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/authConnectionHook.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_add_shard.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_catalog_shard_localhost_exception.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_catalog_shard_localhost_exception.js | 25 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_catalog_shard_localhost_exception.js | 42 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_catalog_shard_localhost_exception.js | 46 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_no_config_primary.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_repl.js | 30 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_repl.js | 37 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_repl.js | 129 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_secondaryok_routing.js | 64 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_secondaryok_routing.js | 71 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_secondaryok_routing.js | 100 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_sharding_cmd_metadata.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_sharding_cmd_metadata.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/auth_sharding_cmd_metadata.js | 44 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/cleanup_orphaned_auth.js | 32 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/cleanup_orphaned_auth.js | 44 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/cleanup_orphaned_auth.js | 63 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/cluster_time_across_add_shard.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/commands_that_write_accept_wc_configRS.js | 91 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/commands_that_write_accept_wc_configRS.js | 104 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/commands_that_write_accept_wc_configRS.js | 106 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/commands_that_write_accept_wc_configRS.js | 122 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/convert_to_and_from_config_shard.js | 130 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/direct_connection_auth_transition.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/direct_connection_auth_transition.js | 25 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/direct_connection_auth_transition.js | 33 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/direct_shard_connection_auth.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/direct_shard_connection_auth.js | 65 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/direct_shard_connection_auth.js | 126 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/direct_shard_connection_auth.js | 158 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/direct_shard_connection_auth_cursors_and_sessions.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/direct_shard_connection_auth_cursors_and_sessions.js | 25 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/direct_shard_connection_auth_rs_commands.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/direct_shard_connection_auth_rs_commands.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/direct_shard_connection_ddls_during_promotion_to_dedicated.js | 96 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/direct_shard_connection_ddls_during_promotion_to_embedded.js | 155 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/internal_txns/internal_client_restrictions.js | 105 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/internal_txns/internal_client_restrictions.js | 119 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/libs/mongos_api_params_util.js | 749 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/libs/mongos_api_params_util.js | 850 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/libs/mongos_api_params_util.js | 908 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/libs/mongos_api_params_util.js | 1140 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/libs/mongos_api_params_util.js | 1697 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/libs/mongos_api_params_util.js | 1957 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/localhostAuthBypass.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/localhostAuthBypass.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/mongod_returns_no_cluster_time_without_keys.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/mongod_returns_no_cluster_time_without_keys.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/mongod_returns_no_cluster_time_without_keys.js | 26 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/mongod_returns_no_cluster_time_without_keys.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/mongos_rs_auth_shard_failure_tolerance.js | 50 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/query/agg/agg_currentop.js | 84 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/query/agg/agg_currentop.js | 98 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/query/agg/agg_currentop.js | 105 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/query/agg/agg_currentop.js | 636 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/query/agg/agg_currentop.js | 637 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/query/agg/agg_currentop.js | 704 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/query/authwhere.js | 12 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/query/authwhere.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/query/map_reduce/authmr.js | 12 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/query/map_reduce/authmr.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/query/map_reduce/mrShardedOutputAuth.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/query/map_reduce/mrShardedOutputAuth.js | 77 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/read_write_concern_defaults_application.js | 457 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/read_write_concern_defaults_application.js | 524 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/read_write_concern_defaults_application.js | 573 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/read_write_concern_defaults_application.js | 685 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/read_write_concern_defaults_application.js | 861 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/read_write_concern_defaults_application.js | 962 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/read_write_concern_defaults_application.js | 965 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/replica_set_promotion_demotion.js | 130 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/replica_set_promotion_demotion.js | 135 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/set_user_write_block_mode.js | 395 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/sharded_data_distribution_auth.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/sharded_data_distribution_auth.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/sharded_data_distribution_auth.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sharding/sharded_data_distribution_auth.js | 76 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/auth-counters.js | 14 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/cluster_member.js | 67 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/libs/ssl_helpers.js | 162 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/macos_encrypted_pem.js | 11 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/set_parameter_ssl.js | 37 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/shell_option_parsing.js | 24 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/shell_option_parsing.js | 152 | 🟠 HIGH | Database connection string detected |
| jstests/ssl/shell_option_parsing.js | 153 | 🟠 HIGH | Database connection string detected |
| jstests/ssl/shell_option_parsing.js | 156 | 🟠 HIGH | Database connection string detected |
| jstests/ssl/speculative-authenticate.js | 15 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/ssl_options.js | 13 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/ssl_options.js | 14 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/ssl_x509_roles.js | 83 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/tlsCATrusts.js | 55 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/tlsCATrusts.js | 56 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/use_internal_authz_for_x509_runtime.js | 36 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/user_cache_entry_lifetime.js | 73 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/x509_client.js | 114 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/x509_custom.js | 31 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/x509_enforce_user_cluster_separation.js | 47 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/x509_invalid.js | 33 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl/x509_multivalue.js | 34 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sslSpecial/cluster_auth_x509_rolling_configuration.js | 85 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sslSpecial/cluster_auth_x509_subject_attributes.js | 161 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sslSpecial/set_parameter_nossl.js | 10 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sslSpecial/shardsvr_ssl_restart.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sslSpecial/upgrade_to_x509_ssl_nossl.js | 46 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/sslSpecial/x509_cluster_auth_rollover.js | 34 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl_x509/cluster_x509_restart.js | 30 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl_x509/initial_sync1_x509.js | 28 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl_x509/sharding_with_x509.js | 33 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl_x509/speculative-auth-replset.js | 35 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl_x509/speculative-auth-sharding.js | 32 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl_x509/ssl_get_more.js | 19 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl_x509/upgrade_noauth_to_x509_ssl.js | 40 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/ssl_x509/upgrade_to_x509_ssl.js | 44 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/with_mongot/e2e/views/search/lookup_as_a_view.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/with_mongot/e2e/views/search/lookup_as_a_view.js | 23 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/with_mongot/e2e/views/search/lookup_as_a_view.js | 80 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/with_mongot/e2e/views/search/lookup_as_a_view.js | 96 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/with_mongot/e2e/views/search/lookup_as_a_view.js | 136 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/with_mongot/e2e/views/search/lookup_as_a_view.js | 155 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 12.6% | Poor ❌ |
| Documentation | 0.2% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (1383)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .devcontainer/evergreen_cli.py | 27 | 🟢 LOW | Debug print statement found |
| .devcontainer/evergreen_cli.py | 31 | 🟢 LOW | Debug print statement found |
| .devcontainer/evergreen_cli.py | 40 | 🟢 LOW | Debug print statement found |
| .devcontainer/evergreen_cli.py | 55 | 🟢 LOW | Debug print statement found |
| .devcontainer/evergreen_cli.py | 85 | 🟢 LOW | Debug print statement found |
| .devcontainer/evergreen_cli.py | 86 | 🟢 LOW | Debug print statement found |
| .devcontainer/evergreen_cli.py | 88 | 🟢 LOW | Debug print statement found |
| .devcontainer/s3_artifact_utils.py | 32 | 🟢 LOW | Debug print statement found |
| .devcontainer/s3_artifact_utils.py | 58 | 🟢 LOW | Debug print statement found |
| .devcontainer/s3_artifact_utils.py | 64 | 🟢 LOW | Debug print statement found |
| .devcontainer/s3_artifact_utils.py | 67 | 🟢 LOW | Debug print statement found |
| .devcontainer/s3_artifact_utils.py | 69 | 🟢 LOW | Debug print statement found |
| .devcontainer/toolchain.py | 24 | 🟢 LOW | Debug print statement found |
| .devcontainer/toolchain.py | 42 | 🟢 LOW | Debug print statement found |
| .devcontainer/toolchain.py | 50 | 🟢 LOW | Debug print statement found |
| .devcontainer/toolchain.py | 51 | 🟢 LOW | Debug print statement found |
| .devcontainer/toolchain.py | 60 | 🟢 LOW | Debug print statement found |
| .devcontainer/toolchain.py | 108 | 🟢 LOW | Debug print statement found |
| .devcontainer/toolchain.py | 109 | 🟢 LOW | Debug print statement found |
| .devcontainer/toolchain.py | 111 | 🟢 LOW | Debug print statement found |
| bazel/bazelisk.py | 197 | 🟢 LOW | Debug print statement found |
| bazel/bazelisk.py | 380 | 🟢 LOW | Debug print statement found |
| bazel/bazelisk.py | 537 | 🟢 LOW | Debug print statement found |
| bazel/config/generate_config_header.py | 62 | 🟢 LOW | Debug print statement found |
| bazel/coverity/generate_coverity_targets.py | 29 | 🟢 LOW | Debug print statement found |
| bazel/coverity/generate_coverity_targets.py | 37 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 25 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 26 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 27 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 82 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 85 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 125 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 133 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 143 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 154 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 156 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 157 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 158 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 159 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 162 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 165 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 169 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 177 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 178 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 179 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 238 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 241 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 242 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 257 | 🟢 LOW | Debug print statement found |
| bazel/format/rules_lint_format_wrapper.py | 285 | 🟢 LOW | Debug print statement found |
| bazel/gpg_signer.py | 28 | 🟢 LOW | Debug print statement found |
| bazel/gpg_signer.py | 58 | 🟢 LOW | Debug print statement found |
| bazel/gpg_signer.py | 103 | 🟢 LOW | Debug print statement found |
| bazel/install_rules/install_rules.py | 73 | 🟢 LOW | Debug print statement found |
| bazel/install_rules/install_rules.py | 92 | 🟢 LOW | Debug print statement found |
| bazel/install_rules/pretty_printer_test_creator.py | 19 | 🟢 LOW | Debug print statement found |
| bazel/install_rules/pretty_printer_test_creator.py | 39 | 🟢 LOW | Debug print statement found |
| bazel/install_rules/pretty_printer_test_creator.py | 40 | 🟢 LOW | Debug print statement found |
| bazel/install_rules/pretty_printer_test_creator.py | 42 | 🟢 LOW | Debug print statement found |
| bazel/mongot_extension_signing_key/gpg_export_armored_key.py | 24 | 🟢 LOW | Debug print statement found |
| bazel/mongot_extension_signing_key/gpg_export_armored_key.py | 54 | 🟢 LOW | Debug print statement found |
| bazel/mongot_extension_signing_key/gpg_export_armored_key.py | 100 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 16 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 55 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 67 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 68 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 69 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 101 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 102 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 105 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 106 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 113 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 118 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 120 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 121 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 122 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 125 | 🟢 LOW | Debug print statement found |
| bazel/platforms/remote_execution_containers_generator.py | 126 | 🟢 LOW | Debug print statement found |
| bazel/resmoke/derive_suite_selectors.py | 309 | 🟢 LOW | Debug print statement found |
| bazel/resmoke/derive_suite_selectors.py | 313 | 🟢 LOW | Debug print statement found |
| bazel/resmoke/resmoke_shim.py | 211 | 🟢 LOW | Debug print statement found |
| bazel/resmoke/resmoke_shim.py | 223 | 🟢 LOW | Debug print statement found |
| bazel/symbol_checker/symbol_extractor.py | 22 | 🟢 LOW | Debug print statement found |
| bazel/symbol_checker/symbol_extractor.py | 45 | 🟢 LOW | Debug print statement found |
| bazel/toolchains/cc/mongo_linux/mongo_toolchain_version_generator.py | 64 | 🟢 LOW | Debug print statement found |
| bazel/toolchains/cc/mongo_linux/mongo_toolchain_version_generator.py | 68 | 🟢 LOW | Debug print statement found |
| bazel/toolchains/cc/mongo_linux/mongo_toolchain_version_generator.py | 147 | 🟢 LOW | Debug print statement found |
| bazel/toolchains/cc/mongo_linux/mongo_toolchain_version_generator.py | 162 | 🟢 LOW | Debug print statement found |
| bazel/toolchains/cc/mongo_linux/mongo_toolchain_version_generator.py | 163 | 🟢 LOW | Debug print statement found |
| bazel/toolchains/cc/mongo_linux/mongo_toolchain_version_generator.py | 167 | 🟢 LOW | Debug print statement found |
| bazel/toolchains/cc/mongo_linux/mongo_toolchain_version_generator.py | 168 | 🟢 LOW | Debug print statement found |
| bazel/toolchains/cc/mongo_linux/mongo_toolchain_version_generator.py | 170 | 🟢 LOW | Debug print statement found |
| bazel/toolchains/cc/mongo_linux/mongo_toolchain_version_generator.py | 172 | 🟢 LOW | Debug print statement found |
| bazel/toolchains/cc/mongo_linux/mongo_toolchain_version_generator.py | 173 | 🟢 LOW | Debug print statement found |
| bazel/toolchains/cc/mongo_linux/mongo_toolchain_version_generator.py | 174 | 🟢 LOW | Debug print statement found |
| bazel/toolchains/cc/mongo_linux/mongo_toolchain_version_generator.py | 177 | 🟢 LOW | Debug print statement found |
| bazel/toolchains/cc/mongo_linux/mongo_toolchain_version_generator.py | 178 | 🟢 LOW | Debug print statement found |
| bazel/workspace_status.py | 22 | 🟢 LOW | Debug print statement found |
| bazel/workspace_status.py | 27 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/autogenerated_targets.py | 75 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/autogenerated_targets.py | 87 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/autogenerated_targets.py | 88 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/check_resources.py | 18 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/check_resources.py | 22 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/compiledb.py | 120 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/compiledb.py | 973 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/compiledb.py | 975 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/flag_sync.py | 28 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/flag_sync.py | 50 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/flag_sync.py | 64 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/generate_common_bes_bazelrc.py | 37 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/git_age_check.py | 44 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/install_modules.py | 183 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 59 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 226 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 279 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 305 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 307 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 308 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 309 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 312 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 313 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 318 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 331 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 334 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 338 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 351 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 372 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 374 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 383 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 385 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 389 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 394 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 398 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 399 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 400 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 410 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 417 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 433 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 434 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 491 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 496 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 504 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 505 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 506 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 627 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 629 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 728 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 767 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 770 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 819 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 827 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 867 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 870 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 974 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 975 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 976 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 985 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 1001 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 1002 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/lint.py | 1003 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 57 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 58 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 59 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 60 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 74 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 75 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 76 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 77 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 171 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 172 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 175 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 182 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 296 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/plus_interface.py | 455 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/wrapper_debug.py | 10 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/wrapper_hook.py | 100 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/wrapper_hook.py | 105 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/wrapper_hook.py | 117 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/wrapper_hook.py | 133 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/wrapper_util.py | 37 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/wrapper_util.py | 44 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/wrapper_util.py | 56 | 🟢 LOW | Debug print statement found |
| bazel/wrapper_hook/wrapper_util.py | 63 | 🟢 LOW | Debug print statement found |
| buildscripts/aggregate_tracefiles.py | 23 | 🟢 LOW | Debug print statement found |
| buildscripts/apply_clang_tidy_fixes.py | 59 | 🟢 LOW | Debug print statement found |
| buildscripts/apply_clang_tidy_fixes.py | 91 | 🟢 LOW | Debug print statement found |
| buildscripts/archive_artifacts.py | 22 | 🟢 LOW | Debug print statement found |
| buildscripts/archive_artifacts.py | 28 | 🟢 LOW | Debug print statement found |
| buildscripts/archive_artifacts.py | 48 | 🟢 LOW | Debug print statement found |
| buildscripts/archive_artifacts.py | 51 | 🟢 LOW | Debug print statement found |
| buildscripts/archive_artifacts.py | 60 | 🟢 LOW | Debug print statement found |
| buildscripts/archive_artifacts.py | 77 | 🟢 LOW | Debug print statement found |
| buildscripts/archive_artifacts.py | 81 | 🟢 LOW | Debug print statement found |
| buildscripts/archive_artifacts.py | 84 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_burn_in.py | 318 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_burn_in.py | 319 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_burn_in.py | 320 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_burn_in.py | 380 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_burn_in.py | 383 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 85 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 168 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 183 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 225 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 226 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 227 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 253 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 254 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 255 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 267 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 278 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 290 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 343 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 344 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 345 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 367 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 368 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 369 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 378 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 420 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 421 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 422 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 530 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 534 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 590 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 591 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 592 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_custom_formatter.py | 704 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/check_github_codeowner_errors.py | 278 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/check_github_codeowner_errors.py | 280 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/check_github_codeowner_errors.py | 281 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/check_github_codeowner_errors.py | 283 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/check_github_codeowner_errors.py | 284 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/check_github_codeowner_errors.py | 285 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/check_github_codeowner_errors.py | 286 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/check_github_codeowner_errors.py | 287 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 63 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 85 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 86 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 95 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 96 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 97 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 106 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 110 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 112 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 115 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 134 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 160 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 162 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 178 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 180 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 181 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 188 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 190 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 191 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 197 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 231 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 235 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 237 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 240 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 242 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 280 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 296 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 315 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 317 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 319 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 363 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 364 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 469 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 476 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 477 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 478 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 509 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/codeowners_generate.py | 522 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/validate_codeowners.py | 29 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/validate_codeowners.py | 37 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/validate_codeowners.py | 41 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/validate_codeowners.py | 43 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/codeowners/validate_codeowners.py | 46 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 71 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 74 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 78 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 79 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 82 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 92 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 101 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 126 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 130 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 162 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 166 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 170 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 173 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 180 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 205 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/engflow_auth/engflow_auth.py | 206 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/utils/evergreen_git.py | 57 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/utils/evergreen_git.py | 62 | 🟢 LOW | Debug print statement found |
| buildscripts/bazel_rules_mongo/utils/evergreen_git.py | 129 | 🟢 LOW | Debug print statement found |
| buildscripts/burn_in_tests.py | 578 | 🟢 LOW | Debug print statement found |
| buildscripts/burn_in_tests.py | 580 | 🟢 LOW | Debug print statement found |
| buildscripts/burn_in_tests.py | 582 | 🟢 LOW | Debug print statement found |
| buildscripts/burn_in_tests.py | 660 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 121 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 125 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 126 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 127 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 131 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 157 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 226 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 231 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 239 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 245 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 249 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 254 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 336 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy.py | 424 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy_vscode.py | 74 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy_vscode.py | 103 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy_vscode.py | 124 | 🟢 LOW | Debug print statement found |
| buildscripts/clang_tidy_vscode.py | 129 | 🟢 LOW | Debug print statement found |
| buildscripts/collect_resource_info.py | 51 | 🟢 LOW | Debug print statement found |
| buildscripts/collect_resource_info.py | 64 | 🟢 LOW | Debug print statement found |
| buildscripts/collect_resource_info.py | 95 | 🟢 LOW | Debug print statement found |
| buildscripts/collect_resource_info.py | 103 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 166 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 182 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 187 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 190 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 199 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 201 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 240 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 245 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 252 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 280 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 285 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 290 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 387 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 388 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 389 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 390 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 391 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 392 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 407 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 442 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 443 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 456 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 457 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 483 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 488 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 489 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 490 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 501 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 502 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 503 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 504 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 517 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 518 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 522 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 526 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 527 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 533 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 534 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 535 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 543 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 547 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 548 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 549 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 557 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 600 | 🟢 LOW | Debug print statement found |
| buildscripts/compare_evergreen_versions.py | 728 | 🟢 LOW | Debug print statement found |
| buildscripts/config_diff.py | 175 | 🟢 LOW | Debug print statement found |
| buildscripts/config_diff.py | 177 | 🟢 LOW | Debug print statement found |
| buildscripts/config_diff.py | 181 | 🟢 LOW | Debug print statement found |
| buildscripts/config_diff.py | 183 | 🟢 LOW | Debug print statement found |
| buildscripts/config_diff.py | 187 | 🟢 LOW | Debug print statement found |
| buildscripts/config_diff.py | 189 | 🟢 LOW | Debug print statement found |
| buildscripts/config_diff.py | 190 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/ce_generate_data.py | 96 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/ce_generate_data.py | 135 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/ce_generate_data.py | 171 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/ce_generate_data.py | 236 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/cost_estimator.py | 90 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/cost_estimator.py | 91 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/cost_estimator.py | 92 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/data_generator.py | 109 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/data_generator.py | 134 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/data_generator.py | 174 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/data_generator.py | 188 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/execution_tree_classic.py | 56 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/execution_tree_classic.py | 58 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/execution_tree_classic.py | 62 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/execution_tree_classic.py | 91 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/execution_tree_sbe.py | 56 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/execution_tree_sbe.py | 58 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/execution_tree_sbe.py | 62 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/execution_tree_sbe.py | 97 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/experiment.py | 129 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/experiment.py | 130 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/experiment.py | 131 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/experiment.py | 132 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/experiment.py | 140 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/experiment.py | 154 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/experiment.py | 155 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/experiment.py | 178 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/experiment.py | 181 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/experiment.py | 184 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_plotting.py | 50 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_plotting.py | 80 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_plotting.py | 82 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_plotting.py | 105 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 77 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 82 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 89 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 94 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 95 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 125 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 153 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 162 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 167 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 168 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 169 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 192 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 200 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 211 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 212 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 213 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 214 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 234 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 245 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 258 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 265 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 266 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 307 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 333 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 334 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 473 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 509 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 540 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 567 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 591 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 592 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 593 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 597 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 602 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/join_start.py | 626 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/parameters_extractor_classic.py | 62 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/parameters_extractor_classic.py | 73 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/parameters_extractor_classic.py | 74 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/parameters_extractor_classic.py | 90 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/qsn_calibrator.py | 89 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/qsn_costing_parameters.py | 760 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/qsn_costing_parameters.py | 761 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/qsn_costing_parameters.py | 767 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/query_solution_tree.py | 45 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/query_solution_tree.py | 47 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/query_solution_tree.py | 49 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/query_solution_tree.py | 176 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/random_generator.py | 578 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/random_generator.py | 588 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/random_generator.py | 590 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/random_generator.py | 593 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/start.py | 686 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/start.py | 693 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/workload_execution.py | 92 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/workload_execution.py | 113 | 🟢 LOW | Debug print statement found |
| buildscripts/cost_model/workload_execution.py | 115 | 🟢 LOW | Debug print statement found |
| buildscripts/coverity_linter.py | 39 | 🟢 LOW | Debug print statement found |
| buildscripts/coverity_linter.py | 42 | 🟢 LOW | Debug print statement found |
| buildscripts/create_bazel_test_report.py | 33 | 🟢 LOW | Debug print statement found |
| buildscripts/create_bazel_test_report.py | 76 | 🟢 LOW | Debug print statement found |
| buildscripts/create_rbe_sysroot.py | 18 | 🟢 LOW | Debug print statement found |
| buildscripts/create_rbe_sysroot.py | 21 | 🟢 LOW | Debug print statement found |
| buildscripts/create_rbe_sysroot.py | 25 | 🟢 LOW | Debug print statement found |
| buildscripts/deflakinator.py | 31 | 🟢 LOW | Debug print statement found |
| buildscripts/deflakinator.py | 32 | 🟢 LOW | Debug print statement found |
| buildscripts/deflakinator.py | 38 | 🟢 LOW | Debug print statement found |
| buildscripts/deflakinator.py | 62 | 🟢 LOW | Debug print statement found |
| buildscripts/deflakinator.py | 66 | 🟢 LOW | Debug print statement found |
| buildscripts/deflakinator.py | 95 | 🟢 LOW | Debug print statement found |
| buildscripts/deflakinator.py | 96 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 23 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 95 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 212 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 213 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 217 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 218 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 221 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 224 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 228 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 229 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 233 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 234 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 254 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 260 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 265 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 276 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 291 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 347 | 🟢 LOW | Debug print statement found |
| buildscripts/errorcodes.py | 359 | 🟢 LOW | Debug print statement found |
| buildscripts/eslint.py | 3 | 🟢 LOW | Debug print statement found |
| buildscripts/evergreen_expansions2bash.py | 8 | 🟢 LOW | Debug print statement found |
| buildscripts/evergreen_expansions2bash.py | 103 | 🟢 LOW | Debug print statement found |
| buildscripts/evergreen_resmoke_job_count.py | 410 | 🟢 LOW | Debug print statement found |
| buildscripts/evergreen_task_tags.py | 78 | 🟢 LOW | Debug print statement found |
| buildscripts/evergreen_task_tags.py | 102 | 🟢 LOW | Debug print statement found |
| buildscripts/evergreen_task_tags.py | 114 | 🟢 LOW | Debug print statement found |
| buildscripts/evergreen_task_tags.py | 155 | 🟢 LOW | Debug print statement found |
| buildscripts/fast_archive.py | 14 | 🟢 LOW | Debug print statement found |
| buildscripts/fast_archive.py | 20 | 🟢 LOW | Debug print statement found |
| buildscripts/fast_archive.py | 49 | 🟢 LOW | Debug print statement found |
| buildscripts/fast_archive.py | 54 | 🟢 LOW | Debug print statement found |
| buildscripts/fast_archive.py | 59 | 🟢 LOW | Debug print statement found |
| buildscripts/feature_flag_tags_check.py | 71 | 🟢 LOW | Debug print statement found |
| buildscripts/feature_flag_tags_check.py | 82 | 🟢 LOW | Debug print statement found |
| buildscripts/fix_headers.py | 77 | 🟢 LOW | Debug print statement found |
| buildscripts/fix_headers.py | 78 | 🟢 LOW | Debug print statement found |
| buildscripts/fix_headers.py | 80 | 🟢 LOW | Debug print statement found |
| buildscripts/fix_headers.py | 82 | 🟢 LOW | Debug print statement found |
| buildscripts/fix_headers.py | 190 | 🟢 LOW | Debug print statement found |
| buildscripts/fix_headers.py | 205 | 🟢 LOW | Debug print statement found |
| buildscripts/fix_headers.py | 207 | 🟢 LOW | Debug print statement found |
| buildscripts/fix_headers.py | 208 | 🟢 LOW | Debug print statement found |
| buildscripts/fix_headers.py | 269 | 🟢 LOW | Debug print statement found |
| buildscripts/fix_headers.py | 273 | 🟢 LOW | Debug print statement found |
| buildscripts/gather_failed_tests.py | 35 | 🟢 LOW | Debug print statement found |
| buildscripts/gather_failed_tests.py | 45 | 🟢 LOW | Debug print statement found |
| buildscripts/gather_failed_tests.py | 54 | 🟢 LOW | Debug print statement found |
| buildscripts/gather_failed_tests.py | 91 | 🟢 LOW | Debug print statement found |
| buildscripts/gather_failed_tests.py | 110 | 🟢 LOW | Debug print statement found |
| buildscripts/gather_failed_tests.py | 114 | 🟢 LOW | Debug print statement found |
| buildscripts/gather_failed_tests.py | 117 | 🟢 LOW | Debug print statement found |
| buildscripts/gather_failed_tests.py | 120 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 52 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 54 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 56 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 75 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 108 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 112 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 143 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 144 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 233 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 309 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 311 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 345 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 350 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 354 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 370 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 373 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 396 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 401 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 403 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 404 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 410 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 415 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 417 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 432 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 436 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 438 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 448 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 449 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 451 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 452 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 468 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 474 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 485 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 501 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 510 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 549 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 551 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 597 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 598 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 600 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 616 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 622 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 637 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 659 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 725 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 735 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 748 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 749 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 750 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 774 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 780 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 827 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 831 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 840 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 861 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 880 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 887 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 914 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 922 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 924 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 926 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 928 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 948 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 956 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 958 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo.py | 979 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 172 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 175 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 177 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 288 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 310 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 323 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 362 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 383 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 400 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 404 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 427 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 454 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 461 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 464 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 466 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 469 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_lock.py | 474 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_printers.py | 38 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_printers.py | 39 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_printers.py | 471 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_printers.py | 484 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_printers.py | 721 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_printers.py | 1437 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_utils.py | 91 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/mongo_utils.py | 93 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 33 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 49 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 61 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 62 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 74 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 76 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 78 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 79 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 83 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 86 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 87 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 124 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 137 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 149 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 150 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 170 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 172 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 180 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 182 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 187 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 189 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 199 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 211 | 🟢 LOW | Debug print statement found |
| buildscripts/gdb/wt_dump_table.py | 215 | 🟢 LOW | Debug print statement found |
| buildscripts/generate_result_tasks.py | 241 | 🟢 LOW | Debug print statement found |
| buildscripts/generate_result_tasks.py | 280 | 🟢 LOW | Debug print statement found |
| buildscripts/generate_result_tasks.py | 309 | 🟢 LOW | Debug print statement found |
| buildscripts/generate_result_tasks.py | 310 | 🟢 LOW | Debug print statement found |
| buildscripts/generate_result_tasks.py | 311 | 🟢 LOW | Debug print statement found |
| buildscripts/generate_result_tasks.py | 417 | 🟢 LOW | Debug print statement found |
| buildscripts/generate_result_tasks.py | 458 | 🟢 LOW | Debug print statement found |
| buildscripts/generate_result_tasks.py | 597 | 🟢 LOW | Debug print statement found |
| buildscripts/generate_version_expansions.py | 30 | 🟢 LOW | Debug print statement found |
| buildscripts/get_agg_stages_no_authz.py | 27 | 🟢 LOW | Debug print statement found |
| buildscripts/get_agg_stages_no_authz.py | 58 | 🟢 LOW | Debug print statement found |
| buildscripts/get_agg_stages_no_authz.py | 73 | 🟢 LOW | Debug print statement found |
| buildscripts/get_agg_stages_no_authz.py | 76 | 🟢 LOW | Debug print statement found |
| buildscripts/get_agg_stages_no_authz.py | 106 | 🟢 LOW | Debug print statement found |
| buildscripts/get_agg_stages_no_authz.py | 108 | 🟢 LOW | Debug print statement found |
| buildscripts/get_agg_stages_no_authz.py | 110 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 62 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 63 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 64 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 65 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 66 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 67 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 68 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 76 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 79 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 112 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 118 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 124 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 128 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 135 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 138 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 199 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 230 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 244 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 247 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 250 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 257 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 289 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 321 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 480 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 490 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 495 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 646 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 648 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 657 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 667 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 712 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 719 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 728 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 733 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 739 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 769 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 774 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 776 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 803 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 806 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 807 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 808 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 809 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 810 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 811 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 812 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 819 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 820 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 821 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 836 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 840 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 848 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 853 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 854 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 856 | 🟢 LOW | Debug print statement found |
| buildscripts/github_merge_queue_metrics.py | 863 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 136 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 143 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 237 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 247 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 258 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 262 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 270 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 280 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 284 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 294 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 347 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 374 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 383 | 🟢 LOW | Debug print statement found |
| buildscripts/golden_test.py | 539 | 🟢 LOW | Debug print statement found |
| buildscripts/hang_analyzer.py | 5 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/gen_all_feature_flag_list.py | 103 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/gen_all_feature_flag_list.py | 133 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/gen_all_feature_flag_list.py | 140 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/gen_all_feature_flag_list.py | 147 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/gen_all_server_params_list.py | 72 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/gen_dts.py | 254 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/gen_dts.py | 277 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/gen_dts.py | 278 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/gen_dts.py | 280 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/gen_dts.py | 283 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/gen_dts.py | 291 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/idl/compiler.py | 135 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/idl/errors.py | 222 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/idl/errors.py | 224 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/idl/errors.py | 225 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/idl_compatibility_errors.py | 253 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/idl_compatibility_errors.py | 255 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/idl_compatibility_errors.py | 257 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/idl_compatibility_errors.py | 258 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/idlc.py | 101 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/tests/test_yaml_schema.py | 91 | 🟢 LOW | Debug print statement found |
| buildscripts/idl/tests/test_yaml_schema.py | 94 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 48 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 52 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 76 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 81 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 84 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 113 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 117 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 138 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 143 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 151 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 152 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 155 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 157 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 159 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 160 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 162 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 163 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 165 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 166 | 🟢 LOW | Debug print statement found |
| buildscripts/install_bazel.py | 168 | 🟢 LOW | Debug print statement found |
| buildscripts/jstoh.py | 99 | 🟢 LOW | Debug print statement found |
| buildscripts/legacy_commands_check.py | 31 | 🟢 LOW | Debug print statement found |
| buildscripts/legacy_commands_check.py | 64 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 667 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 674 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 694 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 707 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 778 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 794 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 811 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 842 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 865 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 872 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 883 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 925 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 929 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 956 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 984 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 988 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 992 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 1008 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 1017 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 1020 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 1028 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 1031 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 1034 | 🟢 LOW | Debug print statement found |
| buildscripts/lint_markdown_links.py | 1038 | 🟢 LOW | Debug print statement found |
| buildscripts/linter/mongolint.py | 252 | 🟢 LOW | Debug print statement found |
| buildscripts/linter/mongolint.py | 282 | 🟢 LOW | Debug print statement found |
| buildscripts/linter/mongolint.py | 286 | 🟢 LOW | Debug print statement found |
| buildscripts/linter/runner.py | 186 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_commands.py | 64 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_commands.py | 79 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_commands.py | 87 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_commands.py | 94 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_commands.py | 118 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 24 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 25 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 342 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 398 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 399 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 400 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 401 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 402 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 403 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 404 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 405 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 406 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 407 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 408 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 409 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 410 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 411 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 412 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 413 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 414 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 415 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 416 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 421 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 427 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 432 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 434 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 437 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 441 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 460 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 461 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 462 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 463 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 464 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 465 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 466 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 467 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 468 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 469 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 470 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 471 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 472 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 473 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 474 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 475 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 476 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 477 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 478 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 479 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 480 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 481 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 482 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 483 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 484 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 485 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 486 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 487 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 488 | 🟢 LOW | Debug print statement found |
| buildscripts/lldb/lldb_printers.py | 489 | 🟢 LOW | Debug print statement found |
| buildscripts/local_rbe_container_url.py | 45 | 🟢 LOW | Debug print statement found |
| buildscripts/local_rbe_container_url.py | 52 | 🟢 LOW | Debug print statement found |
| buildscripts/local_rbe_container_url.py | 83 | 🟢 LOW | Debug print statement found |
| buildscripts/local_rbe_container_url.py | 86 | 🟢 LOW | Debug print statement found |
| buildscripts/make_vcxproj.py | 308 | 🟢 LOW | Debug print statement found |
| buildscripts/mongo_toolchain.py | 95 | 🟢 LOW | Debug print statement found |
| buildscripts/mongo_toolchain.py | 223 | 🟢 LOW | Debug print statement found |
| buildscripts/mongo_toolchain.py | 225 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 354 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 357 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 391 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 422 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 454 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 513 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 560 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 714 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 732 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 741 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 742 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 744 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 746 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 766 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb.py | 776 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb_multithread.py | 59 | 🟢 LOW | Debug print statement found |
| buildscripts/mongosymb_multithread.py | 68 | 🟢 LOW | Debug print statement found |
| buildscripts/monitor_mongo_fork_10gen.py | 30 | 🟢 LOW | Debug print statement found |
| buildscripts/monitor_mongo_fork_10gen.py | 71 | 🟢 LOW | Debug print statement found |
| buildscripts/monitor_mongo_fork_10gen.py | 109 | 🟢 LOW | Debug print statement found |
| buildscripts/monitor_mongo_fork_10gen.py | 114 | 🟢 LOW | Debug print statement found |
| buildscripts/monitor_mongo_fork_10gen.py | 138 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 44 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 64 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 66 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 68 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 70 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 72 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 82 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 85 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 88 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 94 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 101 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 103 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 105 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 113 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 115 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 118 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 121 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 122 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 125 | 🟢 LOW | Debug print statement found |
| buildscripts/msi_validation.py | 131 | 🟢 LOW | Debug print statement found |
| buildscripts/msitrim.py | 37 | 🟢 LOW | Debug print statement found |
| buildscripts/package_test_internal.py | 591 | 🟢 LOW | Debug print statement found |
| buildscripts/packager.py | 506 | 🟢 LOW | Debug print statement found |
| buildscripts/packager.py | 544 | 🟢 LOW | Debug print statement found |
| buildscripts/packager.py | 552 | 🟢 LOW | Debug print statement found |
| buildscripts/packager.py | 594 | 🟢 LOW | Debug print statement found |
| buildscripts/packager.py | 616 | 🟢 LOW | Debug print statement found |
| buildscripts/packager.py | 849 | 🟢 LOW | Debug print statement found |
| buildscripts/packager.py | 860 | 🟢 LOW | Debug print statement found |
| buildscripts/packager.py | 866 | 🟢 LOW | Debug print statement found |
| buildscripts/packager_enterprise.py | 258 | 🟢 LOW | Debug print statement found |
| buildscripts/packager_enterprise.py | 345 | 🟢 LOW | Debug print statement found |
| buildscripts/packager_enterprise.py | 351 | 🟢 LOW | Debug print statement found |
| buildscripts/packager_enterprise.py | 363 | 🟢 LOW | Debug print statement found |
| buildscripts/packager_enterprise.py | 374 | 🟢 LOW | Debug print statement found |
| buildscripts/parse_test_xml.py | 23 | 🟢 LOW | Debug print statement found |
| buildscripts/parse_test_xml.py | 24 | 🟢 LOW | Debug print statement found |
| buildscripts/pip_requirements.py | 31 | 🟢 LOW | Debug print statement found |
| buildscripts/pip_requirements.py | 60 | 🟢 LOW | Debug print statement found |
| buildscripts/pip_requirements.py | 61 | 🟢 LOW | Debug print statement found |
| buildscripts/pip_requirements.py | 62 | 🟢 LOW | Debug print statement found |
| buildscripts/print_local_rbe_container_url.py | 14 | 🟢 LOW | Debug print statement found |
| buildscripts/profile_data_pr.py | 95 | 🟢 LOW | Debug print statement found |
| buildscripts/profile_data_pr.py | 170 | 🟢 LOW | Debug print statement found |
| buildscripts/profile_data_pr.py | 187 | 🟢 LOW | Debug print statement found |
| buildscripts/profile_data_pr.py | 194 | 🟢 LOW | Debug print statement found |
| buildscripts/profile_data_pr.py | 220 | 🟢 LOW | Debug print statement found |
| buildscripts/profile_data_pr.py | 238 | 🟢 LOW | Debug print statement found |
| buildscripts/profile_data_pr.py | 262 | 🟢 LOW | Debug print statement found |
| buildscripts/profile_data_pr.py | 264 | 🟢 LOW | Debug print statement found |
| buildscripts/profile_data_pr.py | 283 | 🟢 LOW | Debug print statement found |
| buildscripts/profile_data_pr.py | 299 | 🟢 LOW | Debug print statement found |
| buildscripts/profile_data_pr.py | 305 | 🟢 LOW | Debug print statement found |
| buildscripts/profile_data_pr.py | 337 | 🟢 LOW | Debug print statement found |
| buildscripts/publish_new_bazel_version.py | 51 | 🟢 LOW | Debug print statement found |
| buildscripts/publish_new_bazel_version.py | 54 | 🟢 LOW | Debug print statement found |
| buildscripts/publish_new_bazel_version.py | 68 | 🟢 LOW | Debug print statement found |
| buildscripts/publish_new_bazel_version.py | 84 | 🟢 LOW | Debug print statement found |
| buildscripts/pyrightlint.py | 53 | 🟢 LOW | Debug print statement found |
| buildscripts/pyrightlint.py | 59 | 🟢 LOW | Debug print statement found |
| buildscripts/pyrightlint.py | 69 | 🟢 LOW | Debug print statement found |
| buildscripts/pyrightlint.py | 134 | 🟢 LOW | Debug print statement found |
| buildscripts/quickmongolint.py | 42 | 🟢 LOW | Debug print statement found |
| buildscripts/resmoke.py | 33 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/configure_resmoke.py | 163 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/configure_resmoke.py | 175 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/configure_resmoke.py | 185 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/configure_resmoke.py | 414 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/configure_resmoke.py | 434 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/configure_resmoke.py | 503 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/configure_resmoke.py | 520 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/configure_resmoke.py | 547 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/configure_resmoke.py | 556 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/configure_resmoke.py | 1012 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/configure_resmoke.py | 1022 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/discovery/__init__.py | 48 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/discovery/__init__.py | 87 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/generate_fuzz_config/plugin.py | 95 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/attach_core_analyzer_task.py | 67 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/dumper.py | 954 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/extractor.py | 557 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/extractor.py | 558 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/extractor.py | 1032 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/gen_hang_analyzer_tasks.py | 83 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/gen_hang_analyzer_tasks.py | 87 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/gen_hang_analyzer_tasks.py | 91 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/gen_hang_analyzer_tasks.py | 99 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/gen_hang_analyzer_tasks.py | 122 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/gen_hang_analyzer_tasks.py | 127 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/gen_hang_analyzer_tasks.py | 138 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/gen_hang_analyzer_tasks.py | 141 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/gen_hang_analyzer_tasks.py | 142 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/gen_hang_analyzer_tasks.py | 145 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/gen_hang_analyzer_tasks.py | 192 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/gen_hang_analyzer_tasks.py | 226 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/hang_analyzer/gen_hang_analyzer_tasks.py | 249 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/multiversion/__init__.py | 53 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/multiversion/previous_release_tag_cli.py | 63 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/powercycle/lib/remote_operations.py | 78 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/powercycle/lib/remote_operations.py | 88 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/powercycle/lib/remote_operations.py | 89 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/powercycle/lib/remote_operations.py | 101 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/powercycle/lib/remote_operations.py | 103 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/powercycle/lib/remote_operations.py | 153 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/powercycle/lib/remote_operations.py | 217 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/powercycle/lib/remote_operations.py | 225 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/run/__init__.py | 169 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/run/__init__.py | 177 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/run/__init__.py | 824 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/run/__init__.py | 839 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/run/__init__.py | 847 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/suitesconfig.py | 233 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/suitesconfig.py | 234 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/suitesconfig.py | 237 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/suitesconfig.py | 239 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/suitesconfig.py | 241 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/suitesconfig.py | 772 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/suitesconfig.py | 777 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/suitesconfig.py | 808 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 34 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 171 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 175 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 179 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 188 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 200 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 212 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 216 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 260 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 270 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 280 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 285 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 286 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 292 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 305 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 318 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 320 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 329 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 340 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 344 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 358 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 377 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 397 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 444 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 447 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 452 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 469 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 474 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 477 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 482 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 488 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 500 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 502 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 504 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 516 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 518 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 525 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 535 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 537 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 553 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 558 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 562 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 565 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 569 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 581 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 589 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 594 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 602 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 604 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 614 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 624 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/docker_cluster_image_builder.py | 627 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/fixtures/shardedcluster.py | 920 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/fixtures/shardedcluster.py | 923 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/hooks/antithesis_logging.py | 21 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/hooks/antithesis_logging.py | 26 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/hooks/hello_failures.py | 27 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/hooks/hello_failures.py | 36 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/testing/tags.py | 76 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/__init__.py | 30 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/check_has_tag.py | 11 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/check_has_tag.py | 14 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/check_has_tag.py | 15 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/check_has_tag.py | 16 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/check_has_tag.py | 17 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/check_has_tag.py | 18 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/check_has_tag.py | 19 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/check_has_tag.py | 20 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/check_has_tag.py | 21 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/check_has_tag.py | 25 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/check_has_tag.py | 30 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/check_has_tag.py | 33 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/check_has_tag.py | 37 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/registry.py | 83 | 🟢 LOW | Debug print statement found |
| buildscripts/resmokelib/utils/registry.py | 84 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 55 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 58 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 65 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 67 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 104 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 131 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 140 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 144 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 146 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 158 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 187 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 195 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 199 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 215 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 219 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 235 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/download.py | 238 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/sha256sum.py | 21 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/sha256sum.py | 26 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/sha256sum.py | 31 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/upload.py | 27 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/upload.py | 34 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/upload.py | 50 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_binary/upload.py | 64 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_lock.py | 73 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_lock.py | 76 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_lock.py | 80 | 🟢 LOW | Debug print statement found |
| buildscripts/s3_lock.py | 83 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/endorctl_utils.py | 408 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/generate_sbom.py | 176 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/generate_sbom.py | 177 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/generate_sbom.py | 178 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/generate_sbom.py | 545 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/generate_sbom.py | 1326 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/generate_sbom.py | 1338 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 40 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 42 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 45 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 56 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 61 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 64 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 76 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 79 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 174 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 185 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 197 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 201 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 205 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 216 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 223 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 277 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 285 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 294 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 297 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 298 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 299 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 300 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 301 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 308 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 341 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 344 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom/sbom_files_pr.py | 346 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom_linter.py | 74 | 🟢 LOW | Debug print statement found |
| buildscripts/sbom_linter.py | 76 | 🟢 LOW | Debug print statement found |
| buildscripts/setup_clang_tidy.py | 89 | 🟢 LOW | Debug print statement found |
| buildscripts/setup_clang_tidy.py | 101 | 🟢 LOW | Debug print statement found |
| buildscripts/setup_clang_tidy.py | 107 | 🟢 LOW | Debug print statement found |
| buildscripts/setup_clang_tidy.py | 116 | 🟢 LOW | Debug print statement found |
| buildscripts/setup_clang_tidy.py | 128 | 🟢 LOW | Debug print statement found |
| buildscripts/setup_clang_tidy.py | 129 | 🟢 LOW | Debug print statement found |
| buildscripts/setup_clang_tidy.py | 131 | 🟢 LOW | Debug print statement found |
| buildscripts/setup_multiversion_mongodb.py | 5 | 🟢 LOW | Debug print statement found |
| buildscripts/sign_macos_binaries_for_testing.py | 23 | 🟢 LOW | Debug print statement found |
| buildscripts/sign_macos_binaries_for_testing.py | 50 | 🟢 LOW | Debug print statement found |
| buildscripts/sign_macos_binaries_for_testing.py | 54 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 137 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 148 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 151 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 161 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 177 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 188 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 189 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 191 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 192 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 194 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 215 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 295 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 337 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 382 | 🟢 LOW | Debug print statement found |
| buildscripts/smoke_tests/smoke_tests.py | 384 | 🟢 LOW | Debug print statement found |
| buildscripts/sort_backport_multiversion.py | 69 | 🟢 LOW | Debug print statement found |
| buildscripts/streams_suite_coverage_linter.py | 146 | 🟢 LOW | Debug print statement found |
| buildscripts/streams_suite_coverage_linter.py | 148 | 🟢 LOW | Debug print statement found |
| buildscripts/streams_suite_coverage_linter.py | 149 | 🟢 LOW | Debug print statement found |
| buildscripts/streams_suite_coverage_linter.py | 150 | 🟢 LOW | Debug print statement found |
| buildscripts/streams_suite_coverage_linter.py | 154 | 🟢 LOW | Debug print statement found |
| buildscripts/streams_suite_coverage_linter.py | 159 | 🟢 LOW | Debug print statement found |
| buildscripts/streams_suite_coverage_linter.py | 160 | 🟢 LOW | Debug print statement found |
| buildscripts/streams_suite_coverage_linter.py | 172 | 🟢 LOW | Debug print statement found |
| buildscripts/testmatrix/getdisplaytaskname.py | 19 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/burn_in/test_bazel_burn_in_end2end.py | 59 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/burn_in/test_bazel_burn_in_end2end.py | 84 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/burn_in/test_bazel_burn_in_end2end.py | 94 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/burn_in/test_bazel_burn_in_end2end.py | 121 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/burn_in/test_bazel_burn_in_end2end.py | 225 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/resmokelib/core/test_redirect.py | 54 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/resmokelib/core/test_redirect.py | 56 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/resmokelib/testing/testcases/test_testcase.py | 53 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/resmokelib/testing/testcases/test_testcase.py | 190 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/sbom_linter/test_sbom.py | 141 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/test_errorcodes.py | 58 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/test_generate_sbom.py | 77 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/test_generate_sbom.py | 129 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/test_generate_sbom.py | 162 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/test_generate_sbom.py | 183 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/test_generate_sbom.py | 210 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/test_simple_report.py | 32 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/test_simple_report.py | 41 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/test_sync_repo_with_copybara.py | 639 | 🟢 LOW | Debug print statement found |
| buildscripts/tests/test_sync_repo_with_copybara.py | 2115 | 🟢 LOW | Debug print statement found |
| buildscripts/todo_check.py | 123 | 🟢 LOW | Debug print statement found |
| buildscripts/todo_check.py | 124 | 🟢 LOW | Debug print statement found |
| buildscripts/todo_check.py | 137 | 🟢 LOW | Debug print statement found |
| buildscripts/todo_check.py | 165 | 🟢 LOW | Debug print statement found |
| buildscripts/todo_check.py | 166 | 🟢 LOW | Debug print statement found |
| buildscripts/todo_check.py | 168 | 🟢 LOW | Debug print statement found |
| buildscripts/todo_check.py | 180 | 🟢 LOW | Debug print statement found |
| buildscripts/todo_check.py | 181 | 🟢 LOW | Debug print statement found |
| buildscripts/todo_check.py | 302 | 🟢 LOW | Debug print statement found |
| buildscripts/todo_check.py | 307 | 🟢 LOW | Debug print statement found |
| buildscripts/todo_linter.py | 64 | 🟢 LOW | Debug print statement found |
| buildscripts/todo_linter.py | 109 | 🟢 LOW | Debug print statement found |
| buildscripts/todo_linter.py | 114 | 🟢 LOW | Debug print statement found |
| buildscripts/tracing_profiler/profile_format.py | 15 | 🟢 LOW | Debug print statement found |
| buildscripts/tracing_profiler/profile_format.py | 29 | 🟢 LOW | Debug print statement found |
| buildscripts/tracing_profiler/profile_mongod.py | 18 | 🟢 LOW | Debug print statement found |
| buildscripts/tracing_profiler/profile_mongod.py | 110 | 🟢 LOW | Debug print statement found |
| buildscripts/tracing_profiler/profile_mongod.py | 112 | 🟢 LOW | Debug print statement found |
| buildscripts/tracing_profiler/profile_mongod.py | 114 | 🟢 LOW | Debug print statement found |
| buildscripts/tracing_profiler/profile_mongod.py | 120 | 🟢 LOW | Debug print statement found |
| buildscripts/util/buildozer_utils.py | 11 | 🟢 LOW | Debug print statement found |
| buildscripts/util/buildozer_utils.py | 22 | 🟢 LOW | Debug print statement found |
| buildscripts/util/generate_co_jira_map.py | 8 | 🟢 LOW | Debug print statement found |
| buildscripts/util/oauth.py | 255 | 🟢 LOW | Debug print statement found |
| buildscripts/util/oauth.py | 256 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_mongocryptd.py | 102 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_mongocryptd.py | 110 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_mongocryptd.py | 114 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_mongocryptd.py | 118 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_task_gen.py | 31 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_task_gen.py | 37 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_task_gen.py | 52 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_task_gen.py | 57 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_task_gen.py | 60 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_task_gen.py | 111 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_task_gen.py | 114 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_task_gen.py | 117 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_task_gen.py | 120 | 🟢 LOW | Debug print statement found |
| buildscripts/validate_task_gen.py | 130 | 🟢 LOW | Debug print statement found |
| buildscripts/yaml_key_value.py | 31 | 🟢 LOW | Debug print statement found |
| buildscripts/yamllinters.py | 95 | 🟢 LOW | Debug print statement found |
| evergreen/download_db_contrib_tool.py | 62 | 🟢 LOW | Debug print statement found |
| evergreen/functions/binaries_extract.py | 84 | 🟢 LOW | Debug print statement found |
| evergreen/functions/binaries_extract.py | 93 | 🟢 LOW | Debug print statement found |
| evergreen/functions/binaries_extract.py | 96 | 🟢 LOW | Debug print statement found |
| evergreen/functions/binaries_extract.py | 104 | 🟢 LOW | Debug print statement found |
| evergreen/functions/binaries_extract.py | 109 | 🟢 LOW | Debug print statement found |
| evergreen/functions/binaries_extract.py | 115 | 🟢 LOW | Debug print statement found |
| evergreen/functions/binaries_extract.py | 119 | 🟢 LOW | Debug print statement found |
| evergreen/functions/binaries_extract.py | 121 | 🟢 LOW | Debug print statement found |
| evergreen/functions/code_coverage_data_process.py | 19 | 🟢 LOW | Debug print statement found |
| evergreen/functions/code_coverage_data_process.py | 25 | 🟢 LOW | Debug print statement found |
| evergreen/functions/code_coverage_data_process.py | 28 | 🟢 LOW | Debug print statement found |
| evergreen/functions/code_coverage_data_process.py | 46 | 🟢 LOW | Debug print statement found |
| evergreen/functions/code_coverage_data_process.py | 51 | 🟢 LOW | Debug print statement found |
| evergreen/functions/code_coverage_data_process.py | 58 | 🟢 LOW | Debug print statement found |
| evergreen/functions/code_coverage_data_process.py | 77 | 🟢 LOW | Debug print statement found |
| evergreen/functions/code_coverage_data_process.py | 102 | 🟢 LOW | Debug print statement found |
| evergreen/functions/code_coverage_data_process.py | 178 | 🟢 LOW | Debug print statement found |
| evergreen/functions/code_coverage_data_process.py | 182 | 🟢 LOW | Debug print statement found |
| evergreen/functions/get_network_diagnostics.py | 11 | 🟢 LOW | Debug print statement found |
| evergreen/functions/get_network_diagnostics.py | 19 | 🟢 LOW | Debug print statement found |
| evergreen/functions/security_reporting_scripts/upload_to_google_drive.py | 67 | 🟢 LOW | Debug print statement found |
| evergreen/functions/security_reporting_scripts/upload_to_google_drive.py | 80 | 🟢 LOW | Debug print statement found |
| evergreen/functions/security_reporting_scripts/upload_to_google_drive.py | 82 | 🟢 LOW | Debug print statement found |
| evergreen/functions/security_reporting_scripts/upload_to_google_drive.py | 97 | 🟢 LOW | Debug print statement found |
| evergreen/functions/security_reporting_scripts/upload_to_google_drive.py | 98 | 🟢 LOW | Debug print statement found |
| evergreen/functions/security_reporting_scripts/upload_to_google_drive.py | 109 | 🟢 LOW | Debug print statement found |
| evergreen/functions/security_reporting_scripts/upload_to_google_drive.py | 110 | 🟢 LOW | Debug print statement found |
| evergreen/functions/security_reporting_scripts/upload_to_google_drive.py | 111 | 🟢 LOW | Debug print statement found |
| evergreen/functions/security_reporting_scripts/upload_to_google_drive.py | 114 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 37 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 81 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 92 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 94 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 99 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 104 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 108 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 110 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 112 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 115 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 120 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 196 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 204 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 212 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 215 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 217 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 222 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 227 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 229 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 243 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 244 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 250 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 251 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 252 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 253 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 254 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 255 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 256 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 258 | 🟢 LOW | Debug print statement found |
| evergreen/functions/upload_sbom_via_silkbomb.py | 263 | 🟢 LOW | Debug print statement found |
| evergreen/generate_override_timeout.py | 26 | 🟢 LOW | Debug print statement found |
| evergreen/generate_override_timeout.py | 31 | 🟢 LOW | Debug print statement found |
| evergreen/lint_fuzzer_sanity_patch.py | 30 | 🟢 LOW | Debug print statement found |
| evergreen/lint_fuzzer_sanity_patch.py | 76 | 🟢 LOW | Debug print statement found |
| evergreen/lint_fuzzer_sanity_patch.py | 88 | 🟢 LOW | Debug print statement found |
| evergreen/lint_fuzzer_sanity_patch.py | 90 | 🟢 LOW | Debug print statement found |
| evergreen/lint_fuzzer_sanity_patch.py | 91 | 🟢 LOW | Debug print statement found |
| evergreen/lint_fuzzer_sanity_patch.py | 118 | 🟢 LOW | Debug print statement found |
| evergreen/lint_fuzzer_sanity_patch.py | 121 | 🟢 LOW | Debug print statement found |
| evergreen/macos_notary.py | 11 | 🟢 LOW | Debug print statement found |
| evergreen/macos_notary.py | 15 | 🟢 LOW | Debug print statement found |
| evergreen/macos_notary.py | 22 | 🟢 LOW | Debug print statement found |
| evergreen/macos_notary.py | 35 | 🟢 LOW | Debug print statement found |
| evergreen/macos_notary.py | 78 | 🟢 LOW | Debug print statement found |
| evergreen/macos_notary.py | 83 | 🟢 LOW | Debug print statement found |
| evergreen/macos_notary.py | 85 | 🟢 LOW | Debug print statement found |
| evergreen/spawnhost/download_archive_dist_test_debug.py | 69 | 🟢 LOW | Debug print statement found |
| evergreen/spawnhost/extract_artifacts.py | 14 | 🟢 LOW | Debug print statement found |
| evergreen/validate_compile_commands.py | 190 | 🟢 LOW | Debug print statement found |
| evergreen/validate_compile_commands.py | 767 | 🟢 LOW | Debug print statement found |
| evergreen/validate_compile_commands.py | 809 | 🟢 LOW | Debug print statement found |
| evergreen/validate_compile_commands.py | 813 | 🟢 LOW | Debug print statement found |
| evergreen/validate_compile_commands.py | 860 | 🟢 LOW | Debug print statement found |
| evergreen/validate_compile_commands.py | 878 | 🟢 LOW | Debug print statement found |
| evergreen/validate_compile_commands.py | 895 | 🟢 LOW | Debug print statement found |
| jstests/auth/lib/automated_idp_authn_simulator_azure.py | 114 | 🟢 LOW | Debug print statement found |
| jstests/auth/lib/automated_idp_authn_simulator_azure.py | 115 | 🟢 LOW | Debug print statement found |
| jstests/auth/lib/automated_idp_authn_simulator_azure.py | 116 | 🟢 LOW | Debug print statement found |
| jstests/auth/lib/automated_idp_authn_simulator_azure.py | 119 | 🟢 LOW | Debug print statement found |
| jstests/auth/lib/automated_idp_authn_simulator_azure.py | 159 | 🟢 LOW | Debug print statement found |
| jstests/auth/lib/automated_idp_authn_simulator_azure.py | 161 | 🟢 LOW | Debug print statement found |
| jstests/auth/lib/automated_idp_authn_simulator_azure.py | 164 | 🟢 LOW | Debug print statement found |
| jstests/auth/lib/automated_idp_authn_simulator_azure.py | 166 | 🟢 LOW | Debug print statement found |
| jstests/auth/lib/automated_idp_authn_simulator_okta.py | 99 | 🟢 LOW | Debug print statement found |
| jstests/auth/lib/automated_idp_authn_simulator_okta.py | 100 | 🟢 LOW | Debug print statement found |
| jstests/auth/lib/automated_idp_authn_simulator_okta.py | 101 | 🟢 LOW | Debug print statement found |
| jstests/auth/lib/automated_idp_authn_simulator_okta.py | 103 | 🟢 LOW | Debug print statement found |
| jstests/noPassthrough/libs/configExpand/rest_server.py | 84 | 🟢 LOW | Debug print statement found |
| jstests/noPassthrough/observability/libs/otel_metrics_http_server.py | 39 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 144 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 233 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 276 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 318 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 332 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 362 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 368 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 370 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 376 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 378 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 382 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 387 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 408 | 🟢 LOW | Debug print statement found |
| jstests/sharding/libs/proxy_protocol_server.py | 460 | 🟢 LOW | Debug print statement found |
| jstests/ssl/libs/tls13_keyupdate_client.py | 35 | 🟢 LOW | Debug print statement found |
| jstests/ssl/libs/tls13_keyupdate_client.py | 37 | 🟢 LOW | Debug print statement found |
| jstests/ssl/libs/tls13_keyupdate_client.py | 60 | 🟢 LOW | Debug print statement found |
| jstests/ssl/libs/tls13_keyupdate_client.py | 75 | 🟢 LOW | Debug print statement found |
| jstests/ssl/libs/tls13_keyupdate_client.py | 102 | 🟢 LOW | Debug print statement found |
| jstests/ssl/tls_enumerator.py | 89 | 🟢 LOW | Debug print statement found |
| jstests/ssl/tls_enumerator.py | 91 | 🟢 LOW | Debug print statement found |
| jstests/ssl/tls_enumerator.py | 93 | 🟢 LOW | Debug print statement found |
| jstests/ssl/x509/mkcert.py | 909 | 🟢 LOW | Debug print statement found |
| jstests/ssl_linear/windows_castore_cleanup.py | 15 | 🟢 LOW | Debug print statement found |
| jstests/ssl_linear/windows_castore_cleanup.py | 31 | 🟢 LOW | Debug print statement found |
| jstests/ssl_linear/windows_castore_cleanup.py | 36 | 🟢 LOW | Debug print statement found |
| jstests/ssl_linear/windows_castore_cleanup.py | 44 | 🟢 LOW | Debug print statement found |
| jstests/third_party/fast_check/fc-3.1.0.js | 1815 | 🟢 LOW | Debug console.log statement found |
| jstests/third_party/fast_check/fc-4.6.0.js | 1421 | 🟢 LOW | Debug console.log statement found |

### Maintenance Items (175)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| bazel/bazelisk.py | 520 | ⚪ INFO | TODO comment found |
| buildscripts/clang_tidy_vscode.py | 25 | ⚪ INFO | TODO comment found |
| buildscripts/cost_model/ce_generate_data.py | 198 | ⚪ INFO | TODO comment found |
| buildscripts/cost_model/random_generator.py | 121 | ⚪ INFO | TODO comment found |
| buildscripts/gdb/mongo.py | 394 | ⚪ INFO | TODO comment found |
| buildscripts/idl/idl/generator.py | 2020 | ⚪ INFO | TODO comment found |
| buildscripts/idl/idl/struct_types.py | 574 | ⚪ INFO | TODO comment found |
| buildscripts/idl/idl/struct_types.py | 668 | ⚪ INFO | TODO comment found |
| buildscripts/idl/idl/writer.py | 75 | ⚪ INFO | TODO comment found |
| buildscripts/mongosymb.py | 76 | ⚪ INFO | TODO comment found |
| buildscripts/monitor_mongo_fork_10gen.py | 116 | ⚪ INFO | TODO comment found |
| buildscripts/monitor_mongo_fork_10gen.py | 117 | ⚪ INFO | TODO comment found |
| buildscripts/package_test.py | 595 | ⚪ INFO | TODO comment found |
| buildscripts/package_test.py | 613 | ⚪ INFO | TODO comment found |
| buildscripts/package_test.py | 647 | ⚪ INFO | TODO comment found |
| buildscripts/packager.py | 120 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/packager.py | 617 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/packager.py | 721 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/packager.py | 859 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/packager.py | 978 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/packager_enterprise.py | 361 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/packager_enterprise.py | 362 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/resmokelib/hang_analyzer/dumper.py | 539 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/logging/loggers.py | 283 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/powercycle/powercycle.py | 1210 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/symbolizer/__init__.py | 146 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/symbolizer/__init__.py | 155 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/symbolizer/__init__.py | 219 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/testing/executor.py | 344 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/testing/fixtures/interface.py | 28 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/testing/fixtures/replicaset.py | 554 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/testing/fixtures/replicaset.py | 750 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/testing/hook_test_archival.py | 16 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/testing/job.py | 29 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/testing/testcases/benchmark_test.py | 58 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/utils/jscomment.py | 9 | ⚪ INFO | TODO comment found |
| buildscripts/resmokelib/utils/jscomment.py | 37 | ⚪ INFO | TODO comment found |
| buildscripts/todo_check.py | 255 | ⚪ INFO | TODO comment found |
| buildscripts/todo_check.py | 256 | ⚪ INFO | TODO comment found |
| buildscripts/todo_check.py | 259 | ⚪ INFO | TODO comment found |
| buildscripts/todo_check.py | 268 | ⚪ INFO | TODO comment found |
| buildscripts/todo_linter.py | 8 | ⚪ INFO | TODO comment found |
| jstests/aggregation/expressions/set.js | 334 | ⚪ INFO | TODO comment found |
| jstests/aggregation/sources/lookup/lookup_collation.js | 20 | ⚪ INFO | TODO comment found |
| jstests/aggregation/sources/merge/merge_with_dollar_fields.js | 51 | ⚪ INFO | TODO comment found |
| jstests/aggregation/sources/setWindowFields/explain.js | 74 | ⚪ INFO | TODO comment found |
| jstests/auth/client_source_authentication_restriction_mode.js | 9 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_libs/cluster.js | 473 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_libs/runner.js | 264 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_libs/worker_thread.js | 307 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/crud/indexed_insert/indexed_insert_text.js | 23 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/ddl/create_collection/create_capped_collection.js | 99 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/ddl/create_collection/create_capped_collection_maxdocs.js | 33 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/ddl/create_collection/create_collection.js | 22 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/ddl/create_collection/create_collection.js | 24 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/ddl/drop_collection/drop_collection.js | 23 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/ddl/drop_database/drop_database.js | 16 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/ddl/random_ddl/random_ddl_check_metadata_consistency_killop.js | 10 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/query/agg/agg_lookup.js | 6 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/query/invalidated_cursors.js | 14 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/query/long_secondary_reads.js | 17 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/query/map_reduce/map_reduce_inline.js | 72 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/query/update/update_ordered_bulk_inc.js | 33 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/random_update_delete/random_update_delete_with_move_collection.js | 16 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/random_update_delete/random_update_delete_with_resharding.js | 16 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/refine_collection_shard_key/refine_collection_shard_key_nested_crud_ops.js | 7 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/refine_collection_shard_key/refine_collection_shard_key_nested_zone_ops.js | 8 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/refine_collection_shard_key/refine_collection_shard_key_zone_ops.js | 20 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/server_status/server_status_with_time_out_cursors.js | 12 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/txns/snapshot_read/snapshot_read_catalog_operations.js | 11 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/txns/snapshot_read/snapshot_read_kill_op_only.js | 13 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/txns/snapshot_read/snapshot_read_kill_operations.js | 11 | ⚪ INFO | TODO comment found |
| jstests/concurrency/fsm_workloads/updateOne_without_shard_key/write_without_shard_key_base.js | 431 | ⚪ INFO | TODO comment found |
| jstests/core/catalog/list_catalog.js | 19 | ⚪ INFO | TODO comment found |
| jstests/core/catalog/list_catalog_config_debug_dump.js | 10 | ⚪ INFO | TODO comment found |
| jstests/core/catalog/list_catalog_stage_consistency.js | 23 | ⚪ INFO | TODO comment found |
| jstests/core/ddl/clone_collection_as_capped.js | 14 | ⚪ INFO | TODO comment found |
| jstests/core/ddl/rename_collection_capped.js | 22 | ⚪ INFO | TODO comment found |
| jstests/core/index/fts/fts_projection.js | 70 | ⚪ INFO | TODO comment found |
| jstests/core/index/geo/geo_center_sphere2.js | 43 | ⚪ INFO | TODO comment found |
| jstests/core/index/geo/geo_center_sphere2.js | 54 | ⚪ INFO | TODO comment found |
| jstests/core/index/geo/geo_circle3.js | 18 | 🟡 MEDIUM | FIXME comment indicating known issue |
| jstests/core/index/geo/geo_circle4.js | 25 | 🟡 MEDIUM | FIXME comment indicating known issue |
| jstests/core/index/index_sparse_create_sparse_option_non_boolean.js | 15 | ⚪ INFO | TODO comment found |
| jstests/core/query/idhack.js | 171 | ⚪ INFO | TODO comment found |
| jstests/core/query/query_settings/query_settings_index_application_aggregate.js | 398 | ⚪ INFO | TODO comment found |
| jstests/core/query/query_settings/query_settings_index_application_distinct.js | 141 | ⚪ INFO | TODO comment found |
| jstests/core/query/query_settings/query_settings_index_application_distinct.js | 150 | ⚪ INFO | TODO comment found |
| jstests/core/query/query_settings/query_settings_lost_update.js | 18 | ⚪ INFO | TODO comment found |
| jstests/core/query/rename/rename_operator.js | 131 | ⚪ INFO | TODO comment found |
| jstests/core/timeseries/ddl/timeseries_index.js | 495 | ⚪ INFO | TODO comment found |
| jstests/core/timeseries/query/agg_stage_coverage.js | 22 | ⚪ INFO | TODO comment found |
| jstests/core/timeseries/query/bucket_unpacking_with_limit.js | 175 | ⚪ INFO | TODO comment found |
| jstests/core_sharding/ddl/version_context_propagation.js | 16 | ⚪ INFO | TODO comment found |
| jstests/libs/bulk_write_utils.js | 312 | ⚪ INFO | TODO comment found |
| jstests/libs/shardingtest.js | 1666 | ⚪ INFO | TODO comment found |
| jstests/libs/test_background_ops.js | 100 | ⚪ INFO | TODO comment found |
| jstests/multiVersion/genericChangeStreams/change_streams_timeseries_fcv_upgrade_downgrade.js | 36 | ⚪ INFO | TODO comment found |
| jstests/multiVersion/genericChangeStreams/change_streams_timeseries_fcv_upgrade_downgrade.js | 404 | ⚪ INFO | TODO comment found |
| jstests/multiVersion/genericChangeStreams/change_streams_timeseries_fcv_upgrade_downgrade.js | 803 | ⚪ INFO | TODO comment found |
| jstests/multiVersion/libs/data_generators.js | 496 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/admission/ingress_request_rate_limiter.js | 234 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/delinquent_ops.js | 409 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/delinquent_ops.js | 411 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/delinquent_ops.js | 414 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/query/geo/geo_full.js | 146 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/query/geo/geo_full.js | 318 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/query/lookup/lookup_sharded_view.js | 311 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/query/notablescan.js | 37 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/query/notablescan.js | 50 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/query/sharded_find_with_collation.js | 86 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/timeseries/validate/validate_timeseries_extended_range.js | 182 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/timeseries/validate/validate_timeseries_extended_range.js | 189 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/timeseries/validate/validate_timeseries_extended_range.js | 211 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/traffic_recording/traffic_replaying.js | 102 | ⚪ INFO | TODO comment found |
| jstests/noPassthrough/wt_integration/wt_index_option_defaults.js | 21 | ⚪ INFO | TODO comment found |
| jstests/noPassthroughWithMongod/query/cbr/cbr_limit_propagation.js | 162 | ⚪ INFO | TODO comment found |
| jstests/noPassthroughWithMongod/query/plan_ranking/cbr_plan_cache.js | 20 | ⚪ INFO | TODO comment found |
| jstests/query_golden/join_opt/basic_joins_md.js | 304 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/analyze_shard_key_agg_validation.js | 144 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/analyze_shard_key_auth.js | 131 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/analyze_shard_key_basic.js | 91 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/analyze_shard_key_cmd_validation.js | 241 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/avg_doc_size.js | 93 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/cardinality_and_frequency_basic.js | 38 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/cardinality_and_frequency_index_selection.js | 174 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/cardinality_and_frequency_stress.js | 223 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/configure_query_analyzer_auth.js | 173 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/configure_query_analyzer_basic.js | 96 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/configure_query_analyzer_cmd_validation.js | 17 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/configure_query_analyzer_persistence.js | 51 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/ddl.js | 211 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/invalid_config_docs.js | 57 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/list_sampled_queries.js | 341 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/monotonicity_hashed_sharding_compound.js | 83 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/monotonicity_hashed_sharding_non_compound.js | 75 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/monotonicity_range_sharding_non_compound.js | 75 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/most_common_values.js | 310 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/num_orphan_docs.js | 202 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/query_sampling_after_ddl.js | 214 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/read_and_write_distribution.js | 742 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/refresh_sample_rates.js | 388 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/sample_rates_bulk_write_multi_namespaces.js | 124 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/sample_rates_rs.js | 27 | ⚪ INFO | TODO comment found |
| jstests/sharding/analyze_shard_key/sampling_current_op_and_server_status_rs.js | 18 | ⚪ INFO | TODO comment found |
| jstests/sharding/cleanup_orphaned_basic.js | 13 | ⚪ INFO | TODO comment found |
| jstests/sharding/configsvr_metadata_commands_require_majority_write_concern.js | 28 | ⚪ INFO | TODO comment found |
| jstests/sharding/conversion_of_replica_set_to_sharded_cluster.js | 21 | ⚪ INFO | TODO comment found |
| jstests/sharding/convert_to_and_from_config_shard.js | 16 | ⚪ INFO | TODO comment found |
| jstests/sharding/convert_to_and_from_config_shard.js | 20 | ⚪ INFO | TODO comment found |
| jstests/sharding/convert_to_and_from_sharded.js | 20 | ⚪ INFO | TODO comment found |
| jstests/sharding/health_monitor/server_status_health.js | 64 | ⚪ INFO | TODO comment found |
| jstests/sharding/internal_txns/retry_on_transient_error_validation.js | 15 | ⚪ INFO | TODO comment found |
| jstests/sharding/invalid_shard_identity_doc.js | 30 | ⚪ INFO | TODO comment found |
| jstests/sharding/logical_time_api.js | 92 | ⚪ INFO | TODO comment found |
| jstests/sharding/mongos_does_not_gossip_logical_time_without_keys.js | 14 | ⚪ INFO | TODO comment found |
| jstests/sharding/operation_time_api.js | 55 | ⚪ INFO | TODO comment found |
| jstests/sharding/prepare_transaction_then_migrate.js | 158 | ⚪ INFO | TODO comment found |
| jstests/sharding/query/agg/agg_currentop.js | 1032 | ⚪ INFO | TODO comment found |
| jstests/sharding/query/now_variable_replset.js | 8 | ⚪ INFO | TODO comment found |
| jstests/sharding/query/out_merge/merge_let_params_size_estimation.js | 154 | ⚪ INFO | TODO comment found |
| jstests/sharding/query/update/update_compound_shard_key.js | 181 | ⚪ INFO | TODO comment found |
| jstests/sharding/read_write_concern_defaults_application.js | 1336 | ⚪ INFO | TODO comment found |
| jstests/sharding/read_write_concern_defaults_commands_api.js | 397 | ⚪ INFO | TODO comment found |
| jstests/sharding/server_status_crud_metrics.js | 82 | ⚪ INFO | TODO comment found |
| jstests/sharding/set_fcv_logging.js | 116 | ⚪ INFO | TODO comment found |
| jstests/sharding/set_fcv_to_downgrading_fast.js | 179 | ⚪ INFO | TODO comment found |
| jstests/sharding/sharding_options.js | 27 | ⚪ INFO | TODO comment found |
| jstests/sharding/transactions_multi_writes.js | 142 | ⚪ INFO | TODO comment found |
| jstests/sharding/transactions_multi_writes.js | 147 | ⚪ INFO | TODO comment found |
| jstests/sharding/transactions_multi_writes.js | 154 | ⚪ INFO | TODO comment found |
| jstests/sharding/transactions_multi_writes.js | 159 | ⚪ INFO | TODO comment found |
| jstests/ssl/shell_option_parsing.js | 198 | ⚪ INFO | TODO comment found |
| jstests/ssl/x509/mkcert.py | 152 | ⚪ INFO | TODO comment found |
| jstests/ssl/x509/mkcert.py | 161 | ⚪ INFO | TODO comment found |

## Detailed Findings

### CODE_QUALITY

**Total:** 1383 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .devcontainer/evergreen_cli.py | 27 | 🟢 LOW | Debug print statement found |
| .devcontainer/evergreen_cli.py | 31 | 🟢 LOW | Debug print statement found |
| .devcontainer/evergreen_cli.py | 40 | 🟢 LOW | Debug print statement found |
| .devcontainer/evergreen_cli.py | 55 | 🟢 LOW | Debug print statement found |
| .devcontainer/evergreen_cli.py | 85 | 🟢 LOW | Debug print statement found |
| .devcontainer/evergreen_cli.py | 86 | 🟢 LOW | Debug print statement found |
| .devcontainer/evergreen_cli.py | 88 | 🟢 LOW | Debug print statement found |
| .devcontainer/s3_artifact_utils.py | 32 | 🟢 LOW | Debug print statement found |
| .devcontainer/s3_artifact_utils.py | 58 | 🟢 LOW | Debug print statement found |
| .devcontainer/s3_artifact_utils.py | 64 | 🟢 LOW | Debug print statement found |

*... and 1373 more*

### SECURITY

**Total:** 851 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 22 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 27 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 49 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 68 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 71 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 72 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 101 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 104 | 🟠 HIGH | Hardcoded username/password detected |
| jstests/aggregation/sources/graphLookup/collation_graphlookup.js | 110 | 🟠 HIGH | Hardcoded username/password detected |

*... and 841 more*

### MAINTENANCE

**Total:** 175 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| buildscripts/packager.py | 120 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/packager.py | 617 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/packager.py | 721 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/packager.py | 859 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/packager.py | 978 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/packager_enterprise.py | 361 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/packager_enterprise.py | 362 | 🟡 MEDIUM | FIXME comment indicating known issue |
| jstests/core/index/geo/geo_circle3.js | 18 | 🟡 MEDIUM | FIXME comment indicating known issue |
| jstests/core/index/geo/geo_circle4.js | 25 | 🟡 MEDIUM | FIXME comment indicating known issue |
| buildscripts/mongosymb.py | 76 | ⚪ INFO | TODO comment found |

*... and 165 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 68/100 (Tier C)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -12345 | Fair ⚠️ |
| Code Quality | -1568 | Needs improvement ⚠️ |
| Test Coverage | +1 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 823 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 12.6%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

