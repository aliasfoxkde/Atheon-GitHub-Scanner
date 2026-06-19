# Repository Analysis Report: cockroachdb/cockroach

**Generated:** 2026-06-19 09:09:07 CDT

**Quality Score:** 73/100 (Tier C)

## Executive Summary

- **Overall Quality:** C (73/100)
- **Total Findings:** 428
- **Critical Issues:** 0
- **High Issues:** 189
- **Medium Issues:** 30
- **Low Issues:** 77
- **Files Scanned:** 20539

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 77 | Medium |
| security | 218 | High |
| maintenance | 133 | Medium |

## Repository Overview

- **Owner:** cockroachdb
- **Name:** cockroach
- **Description:** CockroachDB — the cloud native, distributed SQL database designed for high availability, effortless scale, and control over data placement.
- **Primary Language:** Go
- **Stars:** 32213
- **Forks:** 4056
- **Open Issues:** 8039
- **Size:** 2663919 KB
- **Created:** 2014-02-06
- **Last Updated:** 2026-06-19
- **Default Branch:** master

**Topics:** cockroachdb, database, distributed-database, go, hacktoberfest, sql

## Security Analysis

⚠️ **Found 218 security-related findings.**

### ⚠️ High Severity Issues (189)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| pkg/acceptance/compose/gss/psql/gss_test.go | 185 | 🟠 HIGH | Database connection string detected |
| pkg/acceptance/testdata/node/base-test.js | 23 | 🟠 HIGH | Potential SQL injection vulnerability |
| pkg/bench/rttanalysis/system_bench_test.go | 27 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/bench/rttanalysis/system_bench_test.go | 33 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/bench/rttanalysis/system_bench_test.go | 41 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/multiregionccl/cold_start_latency_test.go | 258 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 112 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 113 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 120 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 121 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 130 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 140 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 151 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 152 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 161 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 162 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 172 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 173 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 182 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 192 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 193 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 202 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 203 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 212 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 222 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 242 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 243 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 252 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 253 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 263 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 264 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 273 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 274 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 283 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 284 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 293 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 294 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 303 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 304 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 313 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 314 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 323 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 324 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 333 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 334 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 343 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 344 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 353 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 354 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cli/cert.go | 306 | 🟠 HIGH | Database connection string detected |
| pkg/cli/cliflags/flags.go | 1313 | 🟠 HIGH | Database connection string detected |
| pkg/cli/cliflags/flags.go | 1314 | 🟠 HIGH | Database connection string detected |
| pkg/cli/clisqlshell/sql.go | 1810 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cli/convert_url_test.go | 50 | 🟠 HIGH | Database connection string detected |
| pkg/cli/convert_url_test.go | 117 | 🟠 HIGH | Database connection string detected |
| pkg/cli/convert_url_test.go | 122 | 🟠 HIGH | Database connection string detected |
| pkg/cli/convert_url_test.go | 123 | 🟠 HIGH | Database connection string detected |
| pkg/cli/convert_url_test.go | 216 | 🟠 HIGH | Database connection string detected |
| pkg/cli/convert_url_test.go | 222 | 🟠 HIGH | Database connection string detected |
| pkg/cli/democluster/demo_cluster.go | 117 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cli/democluster/demo_cluster.go | 432 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/release/main.go | 23 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/release/release_notes_api.go | 29 | 🟠 HIGH | Potential API key detected |
| pkg/cmd/roachprod-centralized/config/config_test.go | 461 | 🟠 HIGH | Database connection string detected |
| pkg/cmd/roachtest/tests/awsdms.go | 692 | 🟠 HIGH | Database connection string detected |
| pkg/cmd/roachtest/tests/cdc.go | 3578 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/roachtest/tests/cdc.go | 3790 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/roachtest/tests/cdc.go | 3796 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/roachtest/tests/connection_latency.go | 34 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/roachtest/tests/connection_latency.go | 35 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/roachtest/tests/connection_latency.go | 36 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/roachtest/tests/connection_latency.go | 54 | 🟠 HIGH | Database connection string detected |
| pkg/cmd/roachtest/tests/connection_latency.go | 223 | 🟠 HIGH | Database connection string detected |
| pkg/cmd/roachtest/tests/kerberos_connection_stress.go | 29 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/roachtest/tests/kerberos_connection_stress.go | 30 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/cmd/roachtest/tests/kerberos_connection_stress.go | 81 | 🟠 HIGH | Database connection string detected |
| pkg/cmd/roachtest/tests/ldap_connection_scale.go | 260 | 🟠 HIGH | Database connection string detected |
| pkg/cmd/roachtest/tests/pgx.go | 127 | 🟠 HIGH | Database connection string detected |
| pkg/internal/workloadreplay/workloadreplay.go | 31 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/roachprod/install/cockroach.go | 778 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/roachprod/vm/aws/aws.go | 323 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/roachprod/vm/ibm/provider.go | 58 | 🟠 HIGH | Potential API key detected |
| pkg/security/jwtauth/authentication_jwt_test.go | 50 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authentication_ldap_test.go | 156 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authentication_ldap_test.go | 158 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authentication_ldap_test.go | 162 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authentication_ldap_test.go | 166 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authorization_ldap_external_test.go | 81 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authorization_ldap_external_test.go | 82 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authorization_ldap_external_test.go | 96 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authorization_ldap_external_test.go | 97 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authorization_ldap_external_test.go | 103 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authorization_ldap_external_test.go | 104 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authorization_ldap_external_test.go | 152 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authorization_ldap_external_test.go | 225 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authorization_ldap_external_test.go | 242 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authorization_ldap_external_test.go | 263 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authorization_ldap_external_test.go | 268 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authorization_ldap_external_test.go | 275 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/security/ldapauth/authorization_ldap_external_test.go | 304 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/server/api_v2_sql_schema_test.go | 54 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/server/api_v2_sql_schema_test.go | 55 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/server/application_api/config_test.go | 57 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/server/application_api/config_test.go | 60 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/server/application_api/config_test.go | 63 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/server/application_api/config_test.go | 66 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/server/application_api/config_test.go | 67 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/server/application_api/security_test.go | 43 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/server/application_api/security_test.go | 44 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/server/application_api/security_test.go | 45 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/server/application_api/security_test.go | 46 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/server/authserver/authentication_test.go | 520 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/server/authserver/authentication_test.go | 521 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sql/as_of_test.go | 183 | 🟠 HIGH | Potential SQL injection vulnerability |
| pkg/sql/err_count_test.go | 34 | 🟠 HIGH | Potential SQL injection vulnerability |
| pkg/sql/export/exportcsv_test.go | 533 | 🟠 HIGH | Potential SQL injection vulnerability |
| pkg/sql/mvcc_backfiller_test.go | 575 | 🟠 HIGH | Potential SQL injection vulnerability |
| pkg/sql/rowexec/processors_test.go | 415 | 🟠 HIGH | Potential SQL injection vulnerability |
| pkg/sql/schemachanger/scbackup/job_test.go | 117 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sql/schemachanger/scrun/make_state_test.go | 46 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sql/schemachanger/scrun/make_state_test.go | 65 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sql/schemachanger/scrun/make_state_test.go | 99 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sql/schemachanger/scrun/make_state_test.go | 110 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sql/show_external_connection_test.go | 31 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sql/stmtdiagnostics/txn_diagnostics_test.go | 232 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sql/stmtdiagnostics/txn_diagnostics_test.go | 318 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sql/stmtdiagnostics/txn_diagnostics_test.go | 346 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sql/stmtdiagnostics/txn_diagnostics_test.go | 356 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sqlproxy/authentication_test.go | 71 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sqlproxy/authentication_test.go | 75 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sqlproxy/authentication_test.go | 109 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sqlproxy/authentication_test.go | 119 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sqlproxy/authentication_test.go | 171 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sqlproxy/authentication_test.go | 183 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/sqlproxy/proxy_handler_test.go | 230 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 248 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 398 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 448 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 460 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 534 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 577 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 582 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 609 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 648 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 676 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 732 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 785 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 802 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 811 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 818 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 825 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 833 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 888 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 912 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 940 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 984 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 1057 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 1090 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 1093 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 1130 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 1163 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 1190 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 1217 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 1322 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 1404 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 1407 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 1522 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 1634 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 1910 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 2008 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 2398 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 2399 | 🟠 HIGH | Database connection string detected |
| pkg/sqlproxy/proxy_handler_test.go | 2489 | 🟠 HIGH | Database connection string detected |
| pkg/testutils/docker/single_node_docker_test.go | 99 | 🟠 HIGH | Database connection string detected |
| pkg/ui/workspaces/cluster-ui/src/activeExecutions/activeStatementUtils.spec.ts | 190 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/activeExecutions/activeStatementUtils.spec.ts | 199 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/activeExecutions/activeStatementUtils.spec.ts | 208 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/activeExecutions/activeStatementUtils.spec.ts | 250 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/activeExecutions/activeStatementUtils.spec.ts | 266 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/activeExecutions/activeStatementUtils.spec.ts | 282 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/activeExecutions/activeStatementUtils.spec.ts | 299 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/api/liveWorkloadApi.spec.ts | 30 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/insights/utils.spec.ts | 55 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/insights/utils.spec.ts | 100 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/insights/workloadInsightDetails/insightDetails.fixture.ts | 48 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/sessions/sessionsPage.fixture.ts | 26 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/sessions/sessionsPage.fixture.ts | 51 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/sessions/sessionsPage.fixture.ts | 94 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ui/workspaces/cluster-ui/src/sessions/sessionsPage.fixture.ts | 152 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 35.0% | Poor ❌ |
| Documentation | 0.4% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (77)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .claude/skills/drt-analyze/scripts/parse_events.py | 153 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 154 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 156 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 159 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 163 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 164 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 169 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 172 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 173 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 177 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 184 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 185 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 191 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 194 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 195 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 199 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 203 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 204 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 209 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 218 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 222 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 227 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 238 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 77 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 78 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 86 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 90 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 100 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 104 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 150 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 152 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 167 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 183 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 292 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 333 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 353 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 377 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 383 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 385 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 388 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 400 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 407 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 408 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 409 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 410 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 425 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 431 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 432 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 441 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 445 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 447 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 453 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 458 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 472 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 478 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 496 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 498 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 509 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 513 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 520 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 529 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 530 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 531 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 532 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 538 | 🟢 LOW | Debug print statement found |
| .claude/skills/engflow-artifacts/engflow_artifacts.py | 544 | 🟢 LOW | Debug print statement found |
| cloud/kubernetes/multiregion/setup.py | 121 | 🟢 LOW | Debug print statement found |
| cloud/kubernetes/multiregion/setup.py | 123 | 🟢 LOW | Debug print statement found |
| cloud/kubernetes/multiregion/setup.py | 177 | 🟢 LOW | Debug print statement found |
| pkg/cmd/roachtest/tests/knexfile.js | 11 | 🟢 LOW | Debug console.log statement found |
| pkg/kv/kvserver/asim/tests/cmd/asimdiff.py | 116 | 🟢 LOW | Debug print statement found |
| pkg/kv/kvserver/asim/tests/cmd/asimdiff.py | 117 | 🟢 LOW | Debug print statement found |
| pkg/kv/kvserver/asim/tests/cmd/asimdiff.py | 133 | 🟢 LOW | Debug print statement found |
| pkg/kv/kvserver/asim/tests/cmd/asimdiff.py | 134 | 🟢 LOW | Debug print statement found |
| pkg/kv/kvserver/asim/tests/cmd/asimdiff.py | 135 | 🟢 LOW | Debug print statement found |
| pkg/kv/kvserver/asim/tests/cmd/asimdiff.py | 136 | 🟢 LOW | Debug print statement found |
| pkg/kv/kvserver/asim/tests/cmd/asimdiff.py | 160 | 🟢 LOW | Debug print statement found |

### Maintenance Items (133)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| pkg/backup/key_rewriter_test.go | 218 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/alter_changefeed_test.go | 401 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/alter_changefeed_test.go | 465 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/alter_changefeed_test.go | 683 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/cdcevent/version_cache.go | 16 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeed.go | 73 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeed_stmt.go | 866 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeed_stmt.go | 996 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeed_stmt.go | 2421 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeed_test.go | 1761 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeed_test.go | 3457 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeed_test.go | 6965 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeed_test.go | 7457 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeedbase/options.go | 1357 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/encoder_avro.go | 72 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/encoder_avro.go | 100 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/encoder_avro.go | 106 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/encoder_test.go | 1138 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/parquet_sink_cloudstorage.go | 132 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/parquet_sink_cloudstorage.go | 151 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/show_changefeed_jobs_test.go | 220 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/sink_cloudstorage.go | 638 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/sink_kafka.go | 884 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/sink_pubsub_v2.go | 364 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/tableset/watcher.go | 120 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/tableset/watcher.go | 197 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/tableset/watcher.go | 234 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/tableset/watcher.go | 326 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/tableset/watcher.go | 377 | ⚪ INFO | TODO comment found |
| pkg/cli/debug.go | 1600 | ⚪ INFO | TODO comment found |
| pkg/cli/zip_upload.go | 61 | ⚪ INFO | TODO comment found |
| pkg/cloud/gcp/gcs_retry.go | 39 | ⚪ INFO | TODO comment found |
| pkg/cmd/dev/bench.go | 94 | ⚪ INFO | TODO comment found |
| pkg/cmd/dev/doctor.go | 490 | ⚪ INFO | TODO comment found |
| pkg/cmd/dev/ui.go | 190 | ⚪ INFO | TODO comment found |
| pkg/cmd/docgen/diagrams.go | 789 | ⚪ INFO | TODO comment found |
| pkg/cmd/generate-staticcheck/main.go | 104 | ⚪ INFO | TODO comment found |
| pkg/cmd/mirror/go/mirror.go | 462 | ⚪ INFO | TODO comment found |
| pkg/cmd/release/git.go | 56 | ⚪ INFO | TODO comment found |
| pkg/cmd/release/update_versions.go | 652 | ⚪ INFO | TODO comment found |
| pkg/cmd/roachtest/registry/test_spec.go | 249 | ⚪ INFO | TODO comment found |
| pkg/cmd/roachtest/roachtestutil/mixedversion/mixedversion.go | 878 | ⚪ INFO | TODO comment found |
| pkg/cmd/roachtest/roachtestutil/mixedversion/mutators.go | 592 | ⚪ INFO | TODO comment found |
| pkg/cmd/roachtest/run.go | 86 | ⚪ INFO | TODO comment found |
| pkg/cmd/roachtest/spec/machine_type.go | 240 | ⚪ INFO | TODO comment found |
| pkg/cmd/roachtest/tests/jasyncsql.go | 67 | ⚪ INFO | TODO comment found |
| pkg/cmd/roachtest/tests/loss_of_quorum_recovery.go | 47 | ⚪ INFO | TODO comment found |
| pkg/cmd/roachtest/tests/mixed_version_c2c.go | 98 | ⚪ INFO | TODO comment found |
| pkg/cmd/roachtest/tests/tpcc.go | 1079 | ⚪ INFO | TODO comment found |
| pkg/cmd/tef/cli/commands.go | 6 | ⚪ INFO | TODO comment found |
| pkg/cmd/tef/cli/commands.go | 28 | ⚪ INFO | TODO comment found |
| pkg/cmd/tef/cli/commands.go | 33 | ⚪ INFO | TODO comment found |
| pkg/cmd/tef/plans/registry.go | 9 | ⚪ INFO | TODO comment found |
| pkg/cmd/tef/plans/registry.go | 24 | ⚪ INFO | TODO comment found |
| pkg/cmd/tef/plans/registry.go | 26 | ⚪ INFO | TODO comment found |
| pkg/crosscluster/logical/create_logical_replication_stmt.go | 255 | ⚪ INFO | TODO comment found |
| pkg/crosscluster/logical/create_logical_replication_stmt.go | 262 | ⚪ INFO | TODO comment found |
| pkg/crosscluster/logical/create_logical_replication_stmt.go | 457 | ⚪ INFO | TODO comment found |
| pkg/crosscluster/logical/logical_replication_dist.go | 48 | ⚪ INFO | TODO comment found |
| pkg/crosscluster/logical/logical_replication_dist.go | 108 | ⚪ INFO | TODO comment found |
| pkg/crosscluster/logical/logical_replication_writer_processor.go | 1008 | ⚪ INFO | TODO comment found |
| pkg/crosscluster/physical/stream_ingestion_dist.go | 840 | ⚪ INFO | TODO comment found |
| pkg/crosscluster/physical/stream_ingestion_processor.go | 125 | ⚪ INFO | TODO comment found |
| pkg/crosscluster/physical/stream_ingestion_processor.go | 775 | ⚪ INFO | TODO comment found |
| pkg/crosscluster/physical/stream_ingestion_processor.go | 906 | ⚪ INFO | TODO comment found |
| pkg/crosscluster/physical/stream_ingestion_processor_test.go | 542 | ⚪ INFO | TODO comment found |
| pkg/crosscluster/streamclient/client.go | 385 | ⚪ INFO | TODO comment found |
| pkg/kv/kvnemesis/validator.go | 1038 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/allocator/mmaprototype/cluster_state.go | 817 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/allocator/mmaprototype/cluster_state.go | 2201 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/allocator/mmaprototype/constraint_test.go | 25 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/allocator/mmaprototype/load.go | 503 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/asim/asim.go | 202 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/asim/asim.go | 250 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/asim/mmaintegration/mma_store_rebalancer.go | 52 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/asim/mmaintegration/mma_store_rebalancer.go | 213 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/closedts/sidetransport/sender_test.go | 320 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/closedts/sidetransport/sender_test.go | 498 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/mma_replica_store.go | 131 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/mvcc_gc_queue_test.go | 836 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/raftstorebench/batch.go | 91 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/rangefeed/registry.go | 422 | ⚪ INFO | TODO comment found |
| pkg/kv/kvserver/replica_raft.go | 417 | ⚪ INFO | TODO comment found |
| pkg/raft/rafttest/network.go | 89 | ⚪ INFO | TODO comment found |
| pkg/release/build.go | 211 | ⚪ INFO | TODO comment found |
| pkg/roachprod/failureinjection/failures/network_partition.go | 57 | ⚪ INFO | TODO comment found |
| pkg/roachprod/roachprod.go | 2603 | ⚪ INFO | TODO comment found |
| pkg/roachprod/vm/azure/azure.go | 1307 | ⚪ INFO | TODO comment found |
| pkg/server/application_api/events_test.go | 39 | ⚪ INFO | TODO comment found |
| pkg/server/authserver/authentication.go | 702 | ⚪ INFO | TODO comment found |
| pkg/server/pgurl/pgurl.go | 279 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/server/span_stats_server.go | 213 | ⚪ INFO | TODO comment found |
| pkg/server/status/runtime.go | 1209 | ⚪ INFO | TODO comment found |
| pkg/server/status.go | 893 | ⚪ INFO | TODO comment found |
| pkg/server/status.go | 1406 | ⚪ INFO | TODO comment found |
| pkg/server/status.go | 2049 | ⚪ INFO | TODO comment found |
| pkg/server/status.go | 2095 | ⚪ INFO | TODO comment found |
| pkg/server/status.go | 2301 | ⚪ INFO | TODO comment found |
| pkg/server/status.go | 2671 | ⚪ INFO | TODO comment found |
| pkg/sql/catalog/externalcatalog/external_catalog.go | 203 | ⚪ INFO | TODO comment found |
| pkg/sql/catalog/externalcatalog/external_catalog.go | 300 | ⚪ INFO | TODO comment found |
| pkg/sql/catalog/resolver/resolver.go | 100 | ⚪ INFO | TODO comment found |
| pkg/sql/catalog/resolver/resolver.go | 131 | ⚪ INFO | TODO comment found |
| pkg/sql/catalog/resolver/resolver_test.go | 462 | ⚪ INFO | TODO comment found |
| pkg/sql/catalog/resolver/resolver_test.go | 467 | ⚪ INFO | TODO comment found |
| pkg/sql/catalog/schemaexpr/expr.go | 698 | ⚪ INFO | TODO comment found |
| pkg/sql/colexec/colexechash/hash.go | 143 | ⚪ INFO | TODO comment found |
| pkg/sql/distsql_physical_planner.go | 4007 | ⚪ INFO | TODO comment found |
| pkg/sql/exec_util.go | 2702 | ⚪ INFO | TODO comment found |
| pkg/sql/export/exportcsv.go | 94 | ⚪ INFO | TODO comment found |
| pkg/sql/export/exportparquet.go | 98 | ⚪ INFO | TODO comment found |
| pkg/sql/fingerprint/fingerprint_job.go | 88 | ⚪ INFO | TODO comment found |
| pkg/sql/importer/import_planning.go | 424 | ⚪ INFO | TODO comment found |
| pkg/sql/internal_session.go | 158 | ⚪ INFO | TODO comment found |
| pkg/sql/opt/exec/explain/plan_gist_factory.go | 328 | ⚪ INFO | TODO comment found |
| pkg/sql/opt/exec/explain/plan_gist_factory.go | 397 | ⚪ INFO | TODO comment found |
| pkg/sql/opt/exec/explain/result_columns.go | 151 | ⚪ INFO | TODO comment found |
| pkg/sql/opt/memo/cost.go | 16 | ⚪ INFO | TODO comment found |
| pkg/sql/opt/workloadindexrec/index_trie.go | 16 | ⚪ INFO | TODO comment found |
| pkg/sql/opt/workloadindexrec/index_trie.go | 124 | ⚪ INFO | TODO comment found |
| pkg/sql/pgwire/identmap/ident_map_test.go | 338 | ⚪ INFO | TODO comment found |
| pkg/sql/physicalplan/replicaoracle/oracle.go | 358 | ⚪ INFO | TODO comment found |
| pkg/sql/plan_ordering.go | 48 | ⚪ INFO | TODO comment found |
| pkg/sql/randgen/mutator.go | 199 | ⚪ INFO | TODO comment found |
| pkg/sql/rowenc/index_encoding.go | 964 | ⚪ INFO | TODO comment found |
| pkg/sql/rowenc/keyside/decode.go | 277 | ⚪ INFO | TODO comment found |
| pkg/sql/rowenc/valueside/decode.go | 250 | ⚪ INFO | TODO comment found |
| pkg/sql/sqlinstance/instancestorage/instancestorage.go | 216 | ⚪ INFO | TODO comment found |
| pkg/storage/enginepb/mvcc3_test.go | 66 | ⚪ INFO | TODO comment found |
| pkg/storage/mvcc.go | 8572 | ⚪ INFO | TODO comment found |
| pkg/testutils/lint/lint_test.go | 1239 | ⚪ INFO | TODO comment found |
| pkg/testutils/lint/lint_test.go | 1972 | ⚪ INFO | TODO comment found |
| pkg/testutils/testcluster/testcluster.go | 1807 | ⚪ INFO | TODO comment found |

## Detailed Findings

### CODE_QUALITY

**Total:** 77 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .claude/skills/drt-analyze/scripts/parse_events.py | 153 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 154 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 156 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 159 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 163 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 164 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 169 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 172 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 173 | 🟢 LOW | Debug print statement found |
| .claude/skills/drt-analyze/scripts/parse_events.py | 177 | 🟢 LOW | Debug print statement found |

*... and 67 more*

### SECURITY

**Total:** 218 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| pkg/acceptance/compose/gss/psql/gss_test.go | 185 | 🟠 HIGH | Database connection string detected |
| pkg/acceptance/testdata/node/base-test.js | 23 | 🟠 HIGH | Potential SQL injection vulnerability |
| pkg/bench/rttanalysis/system_bench_test.go | 27 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/bench/rttanalysis/system_bench_test.go | 33 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/bench/rttanalysis/system_bench_test.go | 41 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/multiregionccl/cold_start_latency_test.go | 258 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 112 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 113 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 120 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/ccl/serverccl/role_authentication_test.go | 121 | 🟠 HIGH | Hardcoded username/password detected |

*... and 208 more*

### MAINTENANCE

**Total:** 133 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| pkg/server/pgurl/pgurl.go | 279 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/ccl/changefeedccl/alter_changefeed_test.go | 401 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/alter_changefeed_test.go | 465 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/alter_changefeed_test.go | 683 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/cdcevent/version_cache.go | 16 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeed.go | 73 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeed_stmt.go | 866 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeed_stmt.go | 996 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeed_stmt.go | 2421 | ⚪ INFO | TODO comment found |
| pkg/ccl/changefeedccl/changefeed_test.go | 1761 | ⚪ INFO | TODO comment found |

*... and 123 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 73/100 (Tier C)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -2835 | Fair ⚠️ |
| Code Quality | -227 | Needs improvement ⚠️ |
| Test Coverage | +3 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 189 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 35.0%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

