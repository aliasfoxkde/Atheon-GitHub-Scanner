# Repository Analysis Report: apache/cassandra

**Generated:** 2026-06-19 09:09:39 CDT

**Quality Score:** 68/100 (Tier C)

## Executive Summary

- **Overall Quality:** C (68/100)
- **Total Findings:** 672
- **Critical Issues:** 0
- **High Issues:** 109
- **Medium Issues:** 12
- **Low Issues:** 147
- **Files Scanned:** 8526

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 147 | Medium |
| maintenance | 408 | Medium |
| security | 117 | High |

## Repository Overview

- **Owner:** apache
- **Name:** cassandra
- **Description:** Open source transactional distributed database. Linear scalability and proven fault-tolerance on commodity hardware or cloud infrastructure without compromising performance.
- **Primary Language:** Java
- **Stars:** 9783
- **Forks:** 3887
- **Open Issues:** 448
- **Size:** 463368 KB
- **Created:** 2009-05-21
- **Last Updated:** 2026-06-19
- **Default Branch:** trunk

**Topics:** cassandra, database, java

## Security Analysis

⚠️ **Found 117 security-related findings.**

### ⚠️ High Severity Issues (109)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| pylib/cqlshlib/test/test_authproviderhandling.py | 40 | 🟠 HIGH | Hardcoded username/password detected |
| src/java/org/apache/cassandra/auth/AuthenticatedUser.java | 41 | 🟠 HIGH | Hardcoded username/password detected |
| src/java/org/apache/cassandra/auth/AuthenticatedUser.java | 44 | 🟠 HIGH | Hardcoded username/password detected |
| src/java/org/apache/cassandra/auth/CassandraRoleManager.java | 110 | 🟠 HIGH | Hardcoded username/password detected |
| src/java/org/apache/cassandra/db/virtual/ClientsTable.java | 42 | 🟠 HIGH | Hardcoded username/password detected |
| test/distributed/org/apache/cassandra/distributed/test/AuthTest.java | 176 | 🟠 HIGH | Hardcoded username/password detected |
| test/distributed/org/apache/cassandra/distributed/test/ColumnMaskTest.java | 55 | 🟠 HIGH | Hardcoded username/password detected |
| test/distributed/org/apache/cassandra/distributed/test/ColumnMaskTest.java | 56 | 🟠 HIGH | Hardcoded username/password detected |
| test/distributed/org/apache/cassandra/distributed/test/ReadRepairQueryTester.java | 265 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/distributed/org/apache/cassandra/distributed/test/UpdateSystemAuthAfterDCExpansionTest.java | 76 | 🟠 HIGH | Hardcoded username/password detected |
| test/distributed/org/apache/cassandra/distributed/test/auth/RoleRevocationTest.java | 53 | 🟠 HIGH | Hardcoded username/password detected |
| test/distributed/org/apache/cassandra/distributed/test/auth/RoleRevocationTest.java | 54 | 🟠 HIGH | Hardcoded username/password detected |
| test/microbench/org/apache/cassandra/test/microbench/CIDRAuthorizerBench.java | 92 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/audit/AuditLoggerAuthTest.java | 171 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/AllowAllCIDRAuthorizerTest.java | 91 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/AllowAllCIDRAuthorizerTest.java | 100 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/AllowAllCIDRAuthorizerTest.java | 109 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/AllowAllCIDRAuthorizerTest.java | 150 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/AuthTestUtils.java | 366 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/CassandraAuthorizerTest.java | 34 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/CassandraCIDRAuthorizerEnforceModeTest.java | 185 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/CassandraCIDRAuthorizerEnforceModeTest.java | 194 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/CassandraCIDRAuthorizerEnforceModeTest.java | 203 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/CassandraCIDRAuthorizerEnforceModeTest.java | 241 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/CassandraCIDRAuthorizerEnforceModeTest.java | 259 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/CassandraNetworkAuthorizerTest.java | 114 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/CassandraNetworkAuthorizerTest.java | 127 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/CassandraNetworkAuthorizerTest.java | 151 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/CassandraNetworkAuthorizerTest.java | 173 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/CassandraNetworkAuthorizerTest.java | 184 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/CreateAndAlterRoleTest.java | 58 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/CreateAndAlterRoleTest.java | 104 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/auth/TxnAuthTest.java | 128 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/auth/TxnAuthTest.java | 129 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/auth/TxnAuthTest.java | 157 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/PasswordObfuscatorTest.java | 40 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/PasswordObfuscatorTest.java | 64 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/PasswordObfuscatorTest.java | 80 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/PasswordObfuscatorTest.java | 103 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/PasswordObfuscatorTest.java | 104 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/PasswordObfuscatorTest.java | 125 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/PasswordObfuscatorTest.java | 141 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/PasswordObfuscatorTest.java | 157 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/PasswordObfuscatorTest.java | 306 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/PasswordObfuscatorTest.java | 340 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/PasswordObfuscatorTest.java | 341 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/functions/masking/ColumnMaskTester.java | 57 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/functions/masking/ColumnMaskTester.java | 58 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/functions/masking/SelectMaskedPermissionTest.java | 40 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/functions/masking/UnmaskPermissionTest.java | 60 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/statements/AlterRoleStatementTest.java | 53 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/statements/AlterRoleStatementTest.java | 85 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/statements/ListSuperUsersStatementTest.java | 61 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/statements/ListSuperUsersStatementTest.java | 62 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/statements/ListSuperUsersStatementTest.java | 63 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/statements/ListSuperUsersStatementTest.java | 108 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 36 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 37 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 38 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 39 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 40 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 42 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 43 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 44 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 45 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 46 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 96 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 97 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 98 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 99 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 100 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/RoleSyntaxTest.java | 107 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/SSTablesIteratedTest.java | 1828 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/SSTablesIteratedTest.java | 1829 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/SSTablesIteratedTest.java | 1830 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/SSTablesIteratedTest.java | 1831 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/SSTablesIteratedTest.java | 1832 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/SSTablesIteratedTest.java | 1833 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/SSTablesIteratedTest.java | 1834 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/SSTablesIteratedTest.java | 1835 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/SSTablesIteratedTest.java | 1836 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/SSTablesIteratedTest.java | 1837 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/cql3/validation/miscellaneous/SSTablesIteratedTest.java | 1838 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/cql3/validation/operations/BatchTest.java | 38 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/cql3/validation/operations/DeleteTest.java | 150 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/db/compaction/CompactionsCQLTest.java | 702 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/db/compaction/CompactionsCQLTest.java | 707 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/db/compaction/CompactionsCQLTest.java | 725 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/db/filter/IndexHintsTest.java | 365 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/db/filter/IndexHintsTest.java | 373 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/db/filter/IndexHintsTest.java | 381 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/db/filter/IndexHintsTest.java | 389 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/db/filter/IndexHintsTest.java | 396 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/db/guardrails/GuardrailPasswordPolicyTest.java | 130 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/db/guardrails/GuardrailTester.java | 93 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/db/guardrails/GuardrailTester.java | 94 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/db/virtual/SlowQueriesTableTest.java | 83 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/repair/autorepair/RepairTokenRangeSplitterTest.java | 607 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/security/FileBasedStoreContextTest.java | 55 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/tools/HashPasswordTest.java | 45 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/tools/StandaloneSplitterWithCQLTesterTest.java | 136 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/unit/org/apache/cassandra/transport/CQLUserAuditTest.java | 85 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/transport/CQLUserAuditTest.java | 86 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/transport/TlsTestUtils.java | 61 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/transport/TlsTestUtils.java | 65 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/transport/TlsTestUtils.java | 68 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/transport/TlsTestUtils.java | 73 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/transport/TlsTestUtils.java | 84 | 🟠 HIGH | Hardcoded username/password detected |
| test/unit/org/apache/cassandra/transport/TlsTestUtils.java | 88 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 36.8% | Poor ❌ |
| Documentation | 0.5% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (147)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .build/ci/ci_parser.py | 39 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run-ci-test.py | 49 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 61 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 62 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 152 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 161 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 238 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 258 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 276 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 291 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 318 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 325 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 326 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 340 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 348 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 367 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 397 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 637 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 666 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 669 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 670 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 672 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 673 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 680 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 683 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 687 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 690 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 702 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 704 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 707 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 738 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 740 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 741 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 742 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 753 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 777 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 784 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 858 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 859 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 860 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 861 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 862 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 868 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 109 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 112 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 118 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 121 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 123 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 125 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 134 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 135 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 137 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 139 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 140 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 142 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 148 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 149 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 151 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 153 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 154 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 156 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 161 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 162 | 🟢 LOW | Debug print statement found |
| .build/sh/ant-log-summary.py | 164 | 🟢 LOW | Debug print statement found |
| .claude/skills/heatmap/heatmap.py | 582 | 🟢 LOW | Debug print statement found |
| .claude/skills/heatmap/heatmap.py | 587 | 🟢 LOW | Debug print statement found |
| .claude/skills/heatmap/heatmap.py | 594 | 🟢 LOW | Debug print statement found |
| .claude/skills/heatmap/heatmap.py | 597 | 🟢 LOW | Debug print statement found |
| .claude/skills/write-reproducer/scripts/shrink_text.py | 84 | 🟢 LOW | Debug print statement found |
| .claude/skills/write-reproducer/scripts/shrink_text.py | 103 | 🟢 LOW | Debug print statement found |
| .claude/skills/write-reproducer/scripts/shrink_text.py | 112 | 🟢 LOW | Debug print statement found |
| .claude/skills/write-reproducer/scripts/shrink_text.py | 120 | 🟢 LOW | Debug print statement found |
| .claude/skills/write-reproducer/scripts/shrink_text.py | 121 | 🟢 LOW | Debug print statement found |
| doc/scripts/cqlprotodoc.py | 279 | 🟢 LOW | Debug print statement found |
| doc/scripts/cqlprotodoc.py | 343 | 🟢 LOW | Debug print statement found |
| doc/scripts/extract-html-content.py | 69 | 🟢 LOW | Debug print statement found |
| doc/scripts/extract-html-content.py | 70 | 🟢 LOW | Debug print statement found |
| doc/scripts/extract-html-content.py | 76 | 🟢 LOW | Debug print statement found |
| doc/scripts/extract-html-content.py | 82 | 🟢 LOW | Debug print statement found |
| doc/scripts/extract-html-content.py | 84 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/authproviderhandling.py | 36 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/authproviderhandling.py | 40 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/copyutil.py | 1208 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/copyutil.py | 2483 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlhandling.py | 281 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlhandling.py | 293 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlhandling.py | 298 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlhandling.py | 309 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlhandling.py | 316 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlhandling.py | 320 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlhandling.py | 331 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlhandling.py | 334 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 122 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 127 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 371 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 372 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 373 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 374 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 375 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 376 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 379 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 405 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 453 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 460 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 470 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 757 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 796 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1122 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1220 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1258 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1260 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1280 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1283 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1285 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1286 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1294 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1296 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1306 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1307 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1308 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1310 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1312 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1313 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1554 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1556 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1585 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1666 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1670 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1692 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1696 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1829 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1871 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1938 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1943 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1946 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 1961 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 2013 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 2015 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 2074 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 2100 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 2251 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/cqlshmain.py | 2262 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/pylexotron.py | 146 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/pylexotron.py | 155 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/pylexotron.py | 288 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/sslhandling.py | 53 | 🟢 LOW | Debug print statement found |
| pylib/cqlshlib/util.py | 141 | 🟢 LOW | Debug print statement found |

### Maintenance Items (408)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .build/ci/ci_parser.py | 50 | ⚪ INFO | TODO comment found |
| .build/ci/ci_parser.py | 130 | ⚪ INFO | TODO comment found |
| .build/run-ci.d/run_ci.py | 82 | ⚪ INFO | TODO comment found |
| pylib/cqlshlib/copyutil.py | 64 | ⚪ INFO | TODO comment found |
| pylib/cqlshlib/copyutil.py | 769 | ⚪ INFO | TODO comment found |
| pylib/cqlshlib/copyutil.py | 2642 | ⚪ INFO | TODO comment found |
| pylib/cqlshlib/copyutil.py | 2665 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/audit/AuditLogManager.java | 383 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/batchlog/BatchlogManager.java | 609 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/batchlog/BatchlogManager.java | 669 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cache/ChunkCache.java | 213 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/concurrent/ExecutionFailure.java | 59 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/concurrent/SEPExecutor.java | 69 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/concurrent/ScheduledThreadPoolExecutorPlus.java | 61 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/concurrent/SharedExecutorPool.java | 81 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/config/CassandraRelevantProperties.java | 607 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/config/Config.java | 273 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/config/YamlConfigurationLoader.java | 509 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/Operation.java | 277 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/QueryProcessor.java | 1161 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/QueryProcessor.java | 1171 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/ListPermissionsStatement.java | 99 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/ModificationStatement.java | 1292 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/ModificationStatement.java | 1390 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/SelectStatement.java | 1893 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/TransactionStatement.java | 345 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/TransactionStatement.java | 512 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/TransactionStatement.java | 671 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/TransactionStatement.java | 801 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/TransactionStatement.java | 829 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/UpdateStatement.java | 371 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/schema/AlterSchemaStatement.java | 64 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/schema/AlterSchemaStatement.java | 110 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/schema/AlterTableStatement.java | 463 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/schema/CreateFunctionStatement.java | 94 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/schema/CreateFunctionStatement.java | 163 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/schema/CreateIndexStatement.java | 261 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/statements/schema/DropTypeStatement.java | 63 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/terms/Constants.java | 229 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/terms/Lists.java | 485 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/transactions/ConditionStatement.java | 45 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/transactions/ConditionStatement.java | 146 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/transactions/ReferenceOperation.java | 98 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/transactions/ReferenceOperation.java | 173 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/transactions/RowDataReference.java | 195 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/transactions/RowDataReference.java | 239 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/cql3/transactions/RowDataReference.java | 285 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/ColumnFamilyStore.java | 2466 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/ReadCommandVerbHandler.java | 213 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/ReadCommandVerbHandler.java | 228 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/ReadResponse.java | 288 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/ReusableLivenessInfo.java | 21 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/SerializationHeader.java | 369 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/SinglePartitionReadCommand.java | 582 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/Slices.java | 587 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/compaction/CompactionIterator.java | 386 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/compaction/CompactionManager.java | 2217 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/compaction/CompactionManager.java | 2294 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/compaction/CompactionTask.java | 507 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/compaction/CursorCompactor.java | 125 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/compaction/CursorCompactor.java | 147 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/compaction/CursorCompactor.java | 535 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/compaction/CursorCompactor.java | 537 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/compaction/CursorCompactor.java | 636 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/compaction/StatefulCursor.java | 194 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/compression/ZstdDictionaryTrainer.java | 58 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/filter/DataLimits.java | 469 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/filter/RowFilter.java | 779 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/filter/RowFilter.java | 915 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/filter/TombstoneOverwhelmingException.java | 45 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/lifecycle/Tracker.java | 452 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/marshal/AbstractCompositeType.java | 289 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/repair/CassandraValidationIterator.java | 250 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/repair/PendingAntiCompaction.java | 153 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/rows/BTreeRow.java | 815 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/rows/ComplexColumnData.java | 155 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/rows/RowIterators.java | 39 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/rows/UnfilteredRowIterators.java | 201 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/transform/BaseIterator.java | 53 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/transform/BaseIterator.java | 153 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/view/TableViews.java | 427 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/view/TableViews.java | 440 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/view/TableViews.java | 494 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/view/View.java | 247 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/view/ViewBuilder.java | 241 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/db/view/ViewUtils.java | 75 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/dht/AbstractBounds.java | 53 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/dht/RangeStreamer.java | 702 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/dht/tokenallocator/NoReplicationTokenAllocator.java | 172 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/gms/Gossiper.java | 2032 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/gms/Gossiper.java | 2097 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/gms/NewGossiper.java | 121 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/index/SecondaryIndexManager.java | 969 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/index/internal/composites/CompositesSearcher.java | 143 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/index/sai/disk/v1/bbtree/BlockBalancedTreeWriter.java | 225 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/index/sai/disk/v1/bbtree/BlockBalancedTreeWriter.java | 440 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/index/sai/utils/MergePrimaryKeyWithScoreIterator.java | 32 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/index/sasi/utils/trie/PatriciaTrie.java | 138 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/index/sasi/utils/trie/PatriciaTrie.java | 211 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/index/sasi/utils/trie/PatriciaTrie.java | 299 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/index/sasi/utils/trie/PatriciaTrie.java | 334 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/SSTableCursorReader.java | 151 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/SSTableCursorReader.java | 385 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/SSTableCursorReader.java | 467 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/SSTableCursorReader.java | 750 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/SSTableCursorWriter.java | 412 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/SSTableCursorWriter.java | 531 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/SSTableLoader.java | 180 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/SSTableSimpleUnsortedWriter.java | 95 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/SSTableSimpleUnsortedWriter.java | 96 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/UnfilteredDescriptor.java | 148 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/format/SSTableReader.java | 177 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/format/SortedTableVerifier.java | 157 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/format/big/BigTableReader.java | 607 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/sstable/format/big/SSTableReversedIterator.java | 124 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/java/org/apache/cassandra/io/sstable/metadata/MetadataCollector.java | 115 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/util/ChannelProxy.java | 173 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/java/org/apache/cassandra/io/util/PathUtils.java | 507 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/io/util/SequentialWriter.java | 111 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/journal/InMemoryIndex.java | 44 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/journal/RecordPointer.java | 24 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/locator/AbstractReplicationStrategy.java | 58 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/locator/CMSPlacementStrategy.java | 61 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/locator/DynamicEndpointSnitch.java | 177 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/locator/EndpointsByRange.java | 52 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/locator/EndpointsByReplica.java | 61 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/locator/ReplicaLayout.java | 222 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/locator/ReplicaPlan.java | 310 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/locator/ReplicaPlan.java | 360 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/locator/ReplicaPlans.java | 760 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/locator/ReplicaPlans.java | 767 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/locator/ReplicaPlans.java | 865 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/metrics/TCMMetrics.java | 63 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/net/AbstractMessageHandler.java | 712 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/net/AsyncStreamingInputPlus.java | 229 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/net/FrameDecoderLZ4.java | 161 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/net/InboundSink.java | 168 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/net/ResponseVerbHandler.java | 128 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/repair/asymmetric/RangeMap.java | 83 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/repair/messages/RepairMessage.java | 256 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/schema/DistributedSchema.java | 369 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/schema/IndexMetadata.java | 135 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/schema/Keyspaces.java | 142 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/schema/Keyspaces.java | 180 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/schema/Schema.java | 333 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/schema/SchemaDiagnostics.java | 26 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/schema/SchemaEvent.java | 110 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/schema/SchemaProvider.java | 248 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/schema/SystemDistributedKeyspace.java | 95 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/schema/TableId.java | 88 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/schema/TableParams.java | 384 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/security/ThreadAwareSecurityManager.java | 218 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/serializers/DurationSerializer.java | 66 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/serializers/DurationSerializer.java | 85 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/java/org/apache/cassandra/service/ActiveRepairService.java | 1235 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/StorageProxy.java | 763 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/StorageProxy.java | 1685 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/StorageProxy.java | 1707 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/StorageService.java | 4686 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/StorageService.java | 4692 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/accord/topology/AccordFastPathCoordinator.java | 165 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/accord/txn/TxnCondition.java | 336 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/accord/txn/TxnDataKeyValue.java | 78 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/accord/txn/TxnDataRangeValue.java | 163 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/accord/txn/TxnReference.java | 424 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/disk/usage/DiskUsageBroadcaster.java | 64 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/paxos/Paxos.java | 842 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/paxos/Paxos.java | 954 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/paxos/Paxos.java | 1141 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/paxos/PaxosPrepare.java | 432 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/paxos/PaxosPrepare.java | 516 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/paxos/PaxosPrepare.java | 767 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/paxos/PaxosRepair.java | 436 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/paxos/PaxosState.java | 667 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/paxos/PaxosState.java | 715 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/paxos/cleanup/PaxosCleanupRequest.java | 55 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/reads/AbstractReadExecutor.java | 100 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/reads/DigestResolver.java | 116 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/service/reads/ReplicaFilteringProtection.java | 570 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/streaming/StreamRequest.java | 100 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/tcm/AbstractLocalProcessor.java | 115 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/tcm/ClusterMetadata.java | 197 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/tcm/ClusterMetadataService.java | 216 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/tcm/RemoteProcessor.java | 121 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/tcm/RemoteProcessor.java | 302 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/tcm/membership/NodeState.java | 45 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/tcm/ownership/PlacementProvider.java | 45 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/tcm/ownership/TokenMap.java | 60 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/tcm/sequences/UnbootstrapStreams.java | 231 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/tcm/transformations/PrepareLeave.java | 161 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/tcm/transformations/Register.java | 185 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/tcm/transformations/cms/BaseMembershipTransformation.java | 44 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/transport/Server.java | 305 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/DynamicList.java | 38 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/SystemInfo.java | 47 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/SystemInfo.java | 48 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/SystemInfo.java | 49 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/binlog/BinLog.java | 303 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/btree/BTree.java | 2275 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/btree/BTreeBiMap.java | 100 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/btree/BTreeSet.java | 235 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/btree/NodeCursor.java | 45 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/btree/TreeCursor.java | 41 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/concurrent/AbstractFuture.java | 109 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/concurrent/ListenerList.java | 165 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/concurrent/ListenerList.java | 197 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/concurrent/Ref.java | 205 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/concurrent/WaitQueue.java | 241 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/utils/concurrent/WaitQueue.java | 268 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/concurrent/LongOpOrderTest.java | 42 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/concurrent/LongOpOrderTest.java | 43 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/net/Connection.java | 185 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/net/Connection.java | 205 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/net/ConnectionBurnTest.java | 348 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/net/Verifier.java | 379 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/net/Verifier.java | 671 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/net/Verifier.java | 707 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/net/Verifier.java | 741 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/net/Verifier.java | 752 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/net/Verifier.java | 817 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/net/Verifier.java | 883 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/net/Verifier.java | 884 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/net/Verifier.java | 1139 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/net/Verifier.java | 1548 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/transport/DriverBurnTest.java | 454 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/transport/SimpleClientBurnTest.java | 160 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/transport/SimpleClientPerfTest.java | 210 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/utils/LongBTreeTest.java | 77 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/utils/LongBTreeTest.java | 79 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/utils/LongBTreeTest.java | 80 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/utils/LongBTreeTest.java | 81 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/utils/LongBTreeTest.java | 82 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/utils/LongBTreeTest.java | 442 | ⚪ INFO | TODO comment found |
| test/burn/org/apache/cassandra/utils/LongBTreeTest.java | 455 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/impl/DelegatingInvokableInstance.java | 124 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/impl/DirectStreamingConnectionFactory.java | 52 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/impl/Instance.java | 412 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/impl/Instance.java | 416 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/impl/Instance.java | 676 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/impl/Instance.java | 760 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/impl/Instance.java | 770 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/impl/Instance.java | 802 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/impl/InstanceConfig.java | 135 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/CASTest.java | 108 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/CASTest.java | 119 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/CASTest.java | 370 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/CASTest.java | 576 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/CASTest.java | 732 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/CASTest.java | 733 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/CASTest.java | 734 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/CasWriteTest.java | 79 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/GossipSettlesTest.java | 45 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/GossipTest.java | 143 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/IntegrationTestBase.java | 65 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/LargeColumnTest.java | 32 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/NativeProtocolTest.java | 54 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/NetworkTopologyTest.java | 40 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/PaxosRepairTest.java | 251 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/PaxosRepairTest.java | 300 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/PaxosRepairTest.java | 339 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/PaxosRepairTest.java | 410 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/PaxosRepairTest.java | 482 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/PaxosRepairTest.java | 573 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/ReadRepairTest.java | 215 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/ReadRepairTest.java | 216 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/accord/AccordBootstrapTest.java | 81 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/accord/AccordBootstrapTestBase.java | 73 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/accord/AccordCQLTestBase.java | 2938 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/accord/AccordCQLTestBase.java | 2976 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/accord/AccordCQLTestBase.java | 3151 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/accord/AccordCQLTestBase.java | 3241 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/accord/AccordCQLTestBase.java | 3259 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/accord/AccordTestBase.java | 448 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/log/CoordinatorPathTestBase.java | 429 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/log/CoordinatorPathTestBase.java | 499 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/log/CoordinatorPathTestBase.java | 1115 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/log/DistributedLogTest.java | 181 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/log/DistributedLogTest.java | 198 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/log/DistributedLogTest.java | 199 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/log/NTSSimulationTest.java | 56 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/distributed/test/log/SystemKeyspaceStorageTest.java | 165 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/fuzz/harry/util/BitSetTest.java | 29 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/fuzz/ring/ConsistentMoveTest.java | 132 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/fuzz/sai/SingleNodeSAITestBase.java | 60 | ⚪ INFO | TODO comment found |
| test/distributed/org/apache/cassandra/service/accord/AccordJournalCompactionTest.java | 131 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/ColumnSpec.java | 63 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/ColumnSpec.java | 64 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/ColumnSpec.java | 65 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/ColumnSpec.java | 66 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/ColumnSpec.java | 416 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/ColumnSpec.java | 534 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/ColumnSpec.java | 541 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/ColumnSpec.java | 545 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/ColumnSpec.java | 547 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/MagicConstants.java | 53 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/Relations.java | 45 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/SchemaSpec.java | 97 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/SchemaSpec.java | 165 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/checker/ModelChecker.java | 69 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/dsl/HistoryBuilder.java | 49 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/dsl/HistoryBuilder.java | 57 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/dsl/HistoryBuilder.java | 360 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/dsl/HistoryBuilderHelper.java | 146 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/dsl/SingleOperationBuilder.java | 45 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/dsl/SingleOperationVisitBuilder.java | 50 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/dsl/SingleOperationVisitBuilder.java | 143 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/execution/CQLTesterVisitExecutor.java | 61 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/execution/CQLTesterVisitExecutor.java | 75 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/execution/CQLVisitExecutor.java | 169 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/execution/CompiledStatement.java | 137 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/execution/DataTracker.java | 117 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/execution/InJvmDTestVisitExecutor.java | 177 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/execution/QueryBuildingVisitExecutor.java | 39 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/execution/QueryBuildingVisitExecutor.java | 62 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/gen/Bijections.java | 54 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/gen/Bijections.java | 116 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/gen/Generator.java | 53 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/gen/IndexGenerators.java | 49 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/gen/IndexGenerators.java | 124 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/gen/InvertibleGenerator.java | 257 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/gen/OperationsGenerators.java | 41 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/gen/OperationsGenerators.java | 44 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/gen/OperationsGenerators.java | 62 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/gen/OperationsGenerators.java | 83 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/gen/OperationsGenerators.java | 88 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/gen/rng/RngUtils.java | 79 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/model/PartitionState.java | 91 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/model/PartitionState.java | 130 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/model/PartitionState.java | 136 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/model/PartitionState.java | 149 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/model/PartitionState.java | 167 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/model/PartitionState.java | 178 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/model/PartitionState.java | 285 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/model/PartitionState.java | 286 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/model/PartitionState.java | 340 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/model/QuiescentChecker.java | 96 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/model/QuiescentChecker.java | 108 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/model/QuiescentChecker.java | 143 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/model/Reconciler.java | 31 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/op/Operations.java | 455 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/op/Operations.java | 482 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/test/HistoryBuilderTest.java | 52 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/test/HistoryBuilderTest.java | 53 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/harry/util/BitSet.java | 101 | ⚪ INFO | TODO comment found |
| test/harry/main/org/apache/cassandra/io/sstable/HarrySSTableWriter.java | 121 | ⚪ INFO | TODO comment found |
| test/microbench/org/apache/cassandra/test/microbench/btree/BTreeTransformBench.java | 52 | ⚪ INFO | TODO comment found |
| test/microbench/org/apache/cassandra/test/microbench/btree/BTreeUpdateBench.java | 54 | ⚪ INFO | TODO comment found |
| test/microbench/org/apache/cassandra/test/microbench/sstable/SSTableAbstractBench.java | 61 | ⚪ INFO | TODO comment found |
| test/microbench/org/apache/cassandra/test/microbench/sstable/SSTableRawVisitorBench.java | 111 | ⚪ INFO | TODO comment found |
| test/microbench/org/apache/cassandra/test/microbench/sstable/SSTableRawVisitorBench.java | 184 | ⚪ INFO | TODO comment found |
| test/microbench/org/apache/cassandra/test/microbench/sstable/SSTableRawVisitorBench.java | 201 | ⚪ INFO | TODO comment found |
| test/microbench/org/apache/cassandra/test/microbench/sstable/SSTableRawVisitorBench.java | 231 | ⚪ INFO | TODO comment found |
| test/microbench/org/apache/cassandra/test/microbench/sstable/SSTableRawVisitorBench.java | 259 | ⚪ INFO | TODO comment found |
| test/microbench/org/apache/cassandra/test/microbench/sstable/SSTableRawVisitorBench.java | 291 | ⚪ INFO | TODO comment found |
| test/microbench/org/apache/cassandra/test/microbench/sstable/SSTableRawVisitorBench.java | 308 | ⚪ INFO | TODO comment found |
| test/simulator/asm/org/apache/cassandra/simulator/asm/ClassTransformer.java | 307 | ⚪ INFO | TODO comment found |
| test/simulator/main/org/apache/cassandra/simulator/ClusterSimulation.java | 906 | ⚪ INFO | TODO comment found |
| test/simulator/main/org/apache/cassandra/simulator/cluster/OnClusterChangeRf.java | 63 | ⚪ INFO | TODO comment found |
| test/simulator/main/org/apache/cassandra/simulator/debug/Record.java | 233 | ⚪ INFO | TODO comment found |
| test/simulator/main/org/apache/cassandra/simulator/paxos/PairOfSequencesAccordSimulation.java | 65 | ⚪ INFO | TODO comment found |
| test/simulator/main/org/apache/cassandra/simulator/systems/InterceptingMonitors.java | 368 | ⚪ INFO | TODO comment found |
| test/simulator/main/org/apache/cassandra/simulator/systems/InterceptingMonitors.java | 376 | ⚪ INFO | TODO comment found |
| test/simulator/main/org/apache/cassandra/simulator/systems/InterceptingMonitors.java | 618 | ⚪ INFO | TODO comment found |
| test/simulator/main/org/apache/cassandra/simulator/systems/InterceptorOfGlobalMethods.java | 325 | ⚪ INFO | TODO comment found |
| test/simulator/main/org/apache/cassandra/simulator/utils/KindOfSequence.java | 385 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/cql3/SecondaryIndexSSTableExportTest.java | 158 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/cql3/SecondaryIndexSSTableExportTest.java | 165 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/cql3/functions/masking/ColumnMaskQueryWithDefaultTest.java | 46 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/cql3/functions/masking/ColumnMaskQueryWithReplaceTest.java | 49 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/cql3/validation/entities/UserTypesTest.java | 551 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/cql3/validation/operations/InsertUpdateIfConditionTest.java | 504 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/db/ColumnFamilyStoreTest.java | 537 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/db/ColumnFamilyStoreTest.java | 571 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/db/ColumnFamilyStoreTest.java | 575 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/db/CorruptPrimaryIndexTest.java | 73 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/db/SchemaCQLHelperTest.java | 505 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/db/SecondaryIndexTest.java | 385 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/db/guardrails/GuardrailTester.java | 403 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/db/marshal/TypeValidationTest.java | 256 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/dht/PartitionerTestCase.java | 192 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/index/sai/cql/InetAddressTypeEquivalencyTest.java | 37 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/index/sai/cql/types/InetTest.java | 29 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/index/sai/disk/NodeStartupTest.java | 185 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/io/sstable/LegacySSTableTest.java | 728 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/io/util/FileTest.java | 138 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/io/util/RandomAccessReaderTest.java | 136 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/unit/org/apache/cassandra/journal/DescriptorTest.java | 163 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/locator/PendingRangesTest.java | 463 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/locator/ReplicaCollectionTest.java | 105 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/net/ConnectionTest.java | 747 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/net/FramingTest.java | 54 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/net/FramingTest.java | 55 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/net/FramingTest.java | 56 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/net/HandshakeTest.java | 68 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/net/OutboundMessageQueueTest.java | 39 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/service/BootstrapTransientTest.java | 157 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/service/paxos/PaxosStateTest.java | 251 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/tcm/sequences/ProgressBarrierTest.java | 379 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/tcm/transformations/EventsMetadataTest.java | 48 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/utils/MergeIteratorComparisonTest.java | 661 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/utils/btree/BTreeMapTest.java | 71 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/utils/btree/BTreeSetGuavaTest.java | 50 | ⚪ INFO | TODO comment found |
| test/unit/org/apache/cassandra/utils/concurrent/AbstractTestAsyncPromise.java | 449 | ⚪ INFO | TODO comment found |
| tools/stress/src/org/apache/cassandra/stress/generate/PartitionIterator.java | 48 | ⚪ INFO | TODO comment found |
| tools/stress/src/org/apache/cassandra/stress/generate/values/Dates.java | 36 | ⚪ INFO | TODO comment found |
| tools/stress/src/org/apache/cassandra/stress/operations/userdefined/SchemaStatement.java | 45 | ⚪ INFO | TODO comment found |
| tools/stress/src/org/apache/cassandra/stress/util/JmxCollector.java | 79 | ⚪ INFO | TODO comment found |
| tools/stress/src/org/apache/cassandra/stress/util/Uncertainty.java | 27 | ⚪ INFO | TODO comment found |

## Detailed Findings

### SECURITY

**Total:** 117 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| pylib/cqlshlib/test/test_authproviderhandling.py | 40 | 🟠 HIGH | Hardcoded username/password detected |
| src/java/org/apache/cassandra/auth/AuthenticatedUser.java | 41 | 🟠 HIGH | Hardcoded username/password detected |
| src/java/org/apache/cassandra/auth/AuthenticatedUser.java | 44 | 🟠 HIGH | Hardcoded username/password detected |
| src/java/org/apache/cassandra/auth/CassandraRoleManager.java | 110 | 🟠 HIGH | Hardcoded username/password detected |
| src/java/org/apache/cassandra/db/virtual/ClientsTable.java | 42 | 🟠 HIGH | Hardcoded username/password detected |
| test/distributed/org/apache/cassandra/distributed/test/AuthTest.java | 176 | 🟠 HIGH | Hardcoded username/password detected |
| test/distributed/org/apache/cassandra/distributed/test/ColumnMaskTest.java | 55 | 🟠 HIGH | Hardcoded username/password detected |
| test/distributed/org/apache/cassandra/distributed/test/ColumnMaskTest.java | 56 | 🟠 HIGH | Hardcoded username/password detected |
| test/distributed/org/apache/cassandra/distributed/test/ReadRepairQueryTester.java | 265 | 🟠 HIGH | Potential SQL injection vulnerability |
| test/distributed/org/apache/cassandra/distributed/test/UpdateSystemAuthAfterDCExpansionTest.java | 76 | 🟠 HIGH | Hardcoded username/password detected |

*... and 107 more*

### CODE_QUALITY

**Total:** 147 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .build/ci/ci_parser.py | 39 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run-ci-test.py | 49 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 61 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 62 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 152 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 161 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 238 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 258 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 276 | 🟢 LOW | Debug print statement found |
| .build/run-ci.d/run_ci.py | 291 | 🟢 LOW | Debug print statement found |

*... and 137 more*

### MAINTENANCE

**Total:** 408 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| src/java/org/apache/cassandra/io/sstable/format/big/SSTableReversedIterator.java | 124 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/java/org/apache/cassandra/io/util/ChannelProxy.java | 173 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/java/org/apache/cassandra/serializers/DurationSerializer.java | 85 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/unit/org/apache/cassandra/io/util/RandomAccessReaderTest.java | 136 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pylib/cqlshlib/copyutil.py | 769 | ⚪ INFO | TODO comment found |
| pylib/cqlshlib/copyutil.py | 2642 | ⚪ INFO | TODO comment found |
| pylib/cqlshlib/copyutil.py | 2665 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/audit/AuditLogManager.java | 383 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/batchlog/BatchlogManager.java | 609 | ⚪ INFO | TODO comment found |
| src/java/org/apache/cassandra/batchlog/BatchlogManager.java | 669 | ⚪ INFO | TODO comment found |

*... and 398 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 68/100 (Tier C)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -1635 | Fair ⚠️ |
| Code Quality | -207 | Needs improvement ⚠️ |
| Test Coverage | +3 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 109 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 36.8%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

