# Repository Analysis Report: nodejs/node

**Generated:** 2026-06-19 09:01:14 CDT

**Quality Score:** 68/100 (Tier C)

## Executive Summary

- **Overall Quality:** C (68/100)
- **Total Findings:** 970
- **Critical Issues:** 0
- **High Issues:** 77
- **Medium Issues:** 161
- **Low Issues:** 109
- **Files Scanned:** 49158

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 109 | Medium |
| security | 207 | High |
| maintenance | 654 | Medium |

## Repository Overview

- **Owner:** nodejs
- **Name:** node
- **Description:** Node.js JavaScript runtime ✨🐢🚀✨
- **Primary Language:** JavaScript
- **Stars:** 117868
- **Forks:** 35727
- **Open Issues:** 2494
- **Size:** 1500263 KB
- **Created:** 2014-11-26
- **Last Updated:** 2026-06-19
- **Default Branch:** main

**Topics:** javascript, js, linux, macos, mit, node, nodejs, runtime, windows

## Security Analysis

⚠️ **Found 207 security-related findings.**

### ⚠️ High Severity Issues (77)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 19 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 38 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 40 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 41 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 42 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 43 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 59 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 60 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 75 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 76 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 92 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 94 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 95 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 96 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 97 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 114 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 116 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 117 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 118 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 119 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 135 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 137 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 138 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 139 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 140 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 156 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 158 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 159 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 160 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 161 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 183 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 185 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 186 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 187 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 188 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 215 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 217 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 218 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 219 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 220 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 239 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 241 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 244 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 245 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 246 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 256 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 257 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 264 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 265 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/access.js | 145 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/org.js | 438 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/owner.js | 166 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/owner.js | 199 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/owner.js | 252 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/owner.js | 266 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/owner.js | 288 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/owner.js | 371 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/owner.js | 533 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/owner.js | 564 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/profile.js | 578 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/profile.js | 716 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/profile.js | 992 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/profile.js | 1078 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/search.js | 122 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/search.js | 124 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/search.js | 135 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/search.js | 145 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/search.js | 147 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/search.js | 172 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/search.js | 182 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/search.js | 184 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/lib/commands/whoami.js | 6 | 🟠 HIGH | Hardcoded username/password detected |
| deps/openssl/openssl/ssl/ssl_txt.c | 102 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 18.2% | Poor ❌ |
| Documentation | 0.2% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (109)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| android_configure.py | 7 | 🟢 LOW | Debug print statement found |
| android_configure.py | 8 | 🟢 LOW | Debug print statement found |
| android_configure.py | 11 | 🟢 LOW | Debug print statement found |
| android_configure.py | 14 | 🟢 LOW | Debug print statement found |
| android_configure.py | 22 | 🟢 LOW | Debug print statement found |
| android_configure.py | 26 | 🟢 LOW | Debug print statement found |
| android_configure.py | 30 | 🟢 LOW | Debug print statement found |
| android_configure.py | 52 | 🟢 LOW | Debug print statement found |
| android_configure.py | 55 | 🟢 LOW | Debug print statement found |
| benchmark/_test-double-benchmarker.js | 31 | 🟢 LOW | Debug console.log statement found |
| benchmark/buffers/buffer-transcode.js | 10 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 15 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 129 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 149 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 179 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 182 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 185 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 201 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 208 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 211 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 214 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 233 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 235 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 248 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 249 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 251 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 265 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 266 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 267 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 272 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 274 | 🟢 LOW | Debug console.log statement found |
| benchmark/calibrate-n.js | 281 | 🟢 LOW | Debug console.log statement found |
| benchmark/compare.js | 65 | 🟢 LOW | Debug console.log statement found |
| benchmark/compare.js | 105 | 🟢 LOW | Debug console.log statement found |
| benchmark/crypto/argon2.js | 13 | 🟢 LOW | Debug console.log statement found |
| benchmark/crypto/kem.js | 43 | 🟢 LOW | Debug console.log statement found |
| benchmark/fs/bench-chownSync.js | 9 | 🟢 LOW | Debug console.log statement found |
| benchmark/fs/bench-readlinkSync.js | 9 | 🟢 LOW | Debug console.log statement found |
| benchmark/fs/bench-symlinkSync.js | 9 | 🟢 LOW | Debug console.log statement found |
| benchmark/http/_chunky_http_client.js | 88 | 🟢 LOW | Debug console.log statement found |
| benchmark/mime/mimetype-instantiation.js | 34 | 🟢 LOW | Debug console.log statement found |
| benchmark/mime/mimetype-to-string.js | 36 | 🟢 LOW | Debug console.log statement found |
| benchmark/misc/startup-cli-version.js | 32 | 🟢 LOW | Debug console.log statement found |
| benchmark/misc/startup-cli-version.js | 33 | 🟢 LOW | Debug console.log statement found |
| benchmark/misc/startup-cli-version.js | 34 | 🟢 LOW | Debug console.log statement found |
| benchmark/misc/startup-cli-version.js | 35 | 🟢 LOW | Debug console.log statement found |
| benchmark/misc/startup-core.js | 25 | 🟢 LOW | Debug console.log statement found |
| benchmark/misc/startup-core.js | 26 | 🟢 LOW | Debug console.log statement found |
| benchmark/misc/startup-core.js | 27 | 🟢 LOW | Debug console.log statement found |
| benchmark/misc/startup-core.js | 28 | 🟢 LOW | Debug console.log statement found |
| benchmark/os/uptime.js | 15 | 🟢 LOW | Debug console.log statement found |
| benchmark/permission/permission-startup.js | 30 | 🟢 LOW | Debug console.log statement found |
| benchmark/permission/permission-startup.js | 31 | 🟢 LOW | Debug console.log statement found |
| benchmark/permission/permission-startup.js | 32 | 🟢 LOW | Debug console.log statement found |
| benchmark/permission/permission-startup.js | 33 | 🟢 LOW | Debug console.log statement found |
| benchmark/run.js | 49 | 🟢 LOW | Debug console.log statement found |
| benchmark/run.js | 84 | 🟢 LOW | Debug console.log statement found |
| benchmark/run.js | 89 | 🟢 LOW | Debug console.log statement found |
| benchmark/run.js | 107 | 🟢 LOW | Debug console.log statement found |
| benchmark/run.js | 108 | 🟢 LOW | Debug console.log statement found |
| benchmark/run.js | 116 | 🟢 LOW | Debug console.log statement found |
| benchmark/scatter.js | 50 | 🟢 LOW | Debug console.log statement found |
| benchmark/scatter.js | 59 | 🟢 LOW | Debug console.log statement found |
| configure.py | 1270 | 🟢 LOW | Debug print statement found |
| configure.py | 1276 | 🟢 LOW | Debug print statement found |
| configure.py | 1283 | 🟢 LOW | Debug print statement found |
| configure.py | 1289 | 🟢 LOW | Debug print statement found |
| configure.py | 2108 | 🟢 LOW | Debug print statement found |
| configure.py | 2444 | 🟢 LOW | Debug print statement found |
| configure.py | 2446 | 🟢 LOW | Debug print statement found |
| configure.py | 2448 | 🟢 LOW | Debug print statement found |
| configure.py | 2568 | 🟢 LOW | Debug print statement found |
| configure.py | 2573 | 🟢 LOW | Debug print statement found |
| configure.py | 2686 | 🟢 LOW | Debug print statement found |
| deps/crates/cargo_build.py | 22 | 🟢 LOW | Debug print statement found |
| deps/crates/cargo_build.py | 43 | 🟢 LOW | Debug print statement found |
| deps/inspector_protocol/check_protocol_compatibility.py | 455 | 🟢 LOW | Debug print statement found |
| deps/inspector_protocol/check_protocol_compatibility.py | 457 | 🟢 LOW | Debug print statement found |
| deps/inspector_protocol/pdl.py | 188 | 🟢 LOW | Debug print statement found |
| deps/libffi/generate-configure-headers.py | 37 | 🟢 LOW | Debug print statement found |
| deps/libffi/generate-configure-headers.py | 38 | 🟢 LOW | Debug print statement found |
| deps/libffi/generate-configure-headers.py | 66 | 🟢 LOW | Debug print statement found |
| deps/libffi/generate-configure-headers.py | 82 | 🟢 LOW | Debug print statement found |
| deps/libffi/generate-configure-headers.py | 84 | 🟢 LOW | Debug print statement found |
| deps/libffi/generate-configure-headers.py | 103 | 🟢 LOW | Debug print statement found |
| deps/libffi/generate-configure-headers.py | 106 | 🟢 LOW | Debug print statement found |
| deps/libffi/generate-headers.py | 271 | 🟢 LOW | Debug print statement found |
| deps/npm/bin/npm-prefix.js | 23 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/bin/windows-shims.js | 98 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/bin/windows-shims.js | 106 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/fixtures/tnock.js | 6 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/lib/commands/init.js | 450 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/lib/commands/install.js | 167 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/lib/commands/install.js | 190 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/lib/commands/install.js | 223 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/lib/commands/install.js | 760 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/lib/commands/install.js | 782 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/lib/commands/install.js | 808 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/lib/commands/install.js | 839 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/lib/commands/install.js | 859 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/lib/commands/install.js | 885 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/lib/commands/publish.js | 265 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/lib/commands/run.js | 83 | 🟢 LOW | Debug console.log statement found |
| deps/npm/test/lib/commands/run.js | 150 | 🟢 LOW | Debug console.log statement found |
| deps/openssl/openssl/fuzz/helper.py | 48 | 🟢 LOW | Debug print statement found |
| deps/undici/src/scripts/clean-coverage.js | 13 | 🟢 LOW | Debug console.log statement found |
| deps/undici/src/scripts/release.js | 78 | 🟢 LOW | Debug console.log statement found |
| deps/undici/src/scripts/release.js | 79 | 🟢 LOW | Debug console.log statement found |
| deps/uv/tools/make_dist_html.py | 122 | 🟢 LOW | Debug print statement found |

### Maintenance Items (654)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| android_configure.py | 5 | ⚪ INFO | TODO comment found |
| deps/LIEF/src/ELF/Builder.cpp | 135 | ⚪ INFO | TODO comment found |
| deps/LIEF/src/MachO/Binary.cpp | 772 | ⚪ INFO | TODO comment found |
| deps/LIEF/src/MachO/SegmentCommand.cpp | 68 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/frozen/include/frozen/bits/constexpr_assert.h | 30 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/LIEF/third-party/frozen/include/frozen/bits/pmh.h | 54 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/aesce.c | 19 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/aesce.c | 62 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/aesce.c | 70 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/mps_error.h | 16 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/psa_crypto.c | 2023 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/sha256.c | 24 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/sha256.c | 95 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/LIEF/third-party/mbedtls/library/sha512.c | 15 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/ssl_tls.c | 3208 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/ssl_tls.c | 10150 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/ssl_tls13_keys.c | 1199 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/ssl_tls13_keys.c | 1404 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/ssl_tls13_keys.c | 1413 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/ssl_tls13_keys.c | 1664 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/ssl_tls13_keys.c | 1673 | ⚪ INFO | TODO comment found |
| deps/LIEF/third-party/mbedtls/library/ssl_tls13_server.c | 3108 | ⚪ INFO | TODO comment found |
| deps/ada/ada.cpp | 13436 | ⚪ INFO | TODO comment found |
| deps/ada/ada.cpp | 13438 | ⚪ INFO | TODO comment found |
| deps/ada/ada.cpp | 14618 | ⚪ INFO | TODO comment found |
| deps/ada/ada.cpp | 15186 | ⚪ INFO | TODO comment found |
| deps/ada/ada.cpp | 15197 | ⚪ INFO | TODO comment found |
| deps/ada/ada.cpp | 15200 | ⚪ INFO | TODO comment found |
| deps/ada/ada.cpp | 15424 | ⚪ INFO | TODO comment found |
| deps/ada/ada.cpp | 15425 | ⚪ INFO | TODO comment found |
| deps/ada/ada.cpp | 15890 | ⚪ INFO | TODO comment found |
| deps/ada/ada.cpp | 16015 | ⚪ INFO | TODO comment found |
| deps/ada/ada.cpp | 16529 | ⚪ INFO | TODO comment found |
| deps/ada/ada.cpp | 16911 | ⚪ INFO | TODO comment found |
| deps/ada/ada.h | 6257 | ⚪ INFO | TODO comment found |
| deps/ada/ada.h | 6311 | ⚪ INFO | TODO comment found |
| deps/ada/ada.h | 6367 | ⚪ INFO | TODO comment found |
| deps/ada/ada.h | 8293 | ⚪ INFO | TODO comment found |
| deps/ada/ada.h | 10251 | ⚪ INFO | TODO comment found |
| deps/ada/ada.h | 10337 | ⚪ INFO | TODO comment found |
| deps/brotli/c/enc/hash_longest_match_quickly_inc.h | 158 | ⚪ INFO | TODO comment found |
| deps/brotli/c/tools/brotli.c | 256 | ⚪ INFO | TODO comment found |
| deps/cares/src/lib/ares_process.c | 680 | ⚪ INFO | TODO comment found |
| deps/cares/src/lib/config-win32.h | 383 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/googletest/include/gtest/gtest.h | 488 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/icu-small/source/common/brkeng.cpp | 90 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/brkeng.cpp | 215 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/brkeng.cpp | 346 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/brkiter.cpp | 383 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/bytestream.cpp | 49 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/bytestriebuilder.cpp | 115 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/caniter.cpp | 63 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/caniter.cpp | 372 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/caniter.cpp | 397 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/caniter.cpp | 400 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/caniter.cpp | 571 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/characterproperties.cpp | 243 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/characterproperties.cpp | 320 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/characterproperties.cpp | 355 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/characterproperties.cpp | 377 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/dictbe.cpp | 70 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/dictbe.cpp | 103 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/dictbe.cpp | 139 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/dictbe.cpp | 568 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/dictbe.cpp | 761 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/dictbe.cpp | 1108 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/emojiprops.cpp | 46 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/filteredbrk.cpp | 290 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/filteredbrk.cpp | 630 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/localematcher.cpp | 48 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/locmap.cpp | 136 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/locmap.cpp | 526 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/locmap.cpp | 537 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/locmap.cpp | 540 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/locmap.cpp | 621 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/locmap.cpp | 752 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/locmap.cpp | 770 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/locmap.cpp | 794 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/locmap.cpp | 1092 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/locmap.cpp | 1109 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/locutil.cpp | 81 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/locutil.cpp | 124 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/lstmbe.cpp | 671 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/putil.cpp | 1843 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/putilimp.h | 70 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbi.cpp | 290 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbi.cpp | 330 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbi.cpp | 900 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbi_cache.cpp | 151 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbi_cache.cpp | 242 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbi_cache.cpp | 357 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbi_cache.cpp | 493 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbi_cache.cpp | 643 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbinode.cpp | 298 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbinode.h | 90 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbiscan.cpp | 193 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbiscan.cpp | 359 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbiscan.cpp | 1245 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbisetb.cpp | 678 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbitblb.cpp | 746 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/rbbitblb.h | 149 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/ruleiter.h | 33 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/static_unicode_sets.h | 122 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/stringpiece.cpp | 58 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/ucase.h | 322 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/ucasemap_imp.h | 138 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/ucurr.cpp | 589 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/ucurr.cpp | 838 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/ucurr.cpp | 904 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/ucurr.cpp | 1025 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/ucurr.cpp | 1033 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/ucurr.cpp | 1089 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uidna.cpp | 336 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uloc.cpp | 942 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uloc_tag.cpp | 2142 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uloc_tag.cpp | 2189 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/unicode/edits.h | 381 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/unicode/localpointer.h | 570 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/unicode/localpointer.h | 580 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/unisetspan.cpp | 222 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uprops.h | 396 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uprops.h | 507 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 178 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 905 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 942 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1014 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1159 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1167 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1209 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1220 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1253 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1267 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1279 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1325 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1390 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1687 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1759 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1766 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1815 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1822 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1861 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1868 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1904 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 1911 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 2302 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 2382 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 2400 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 2616 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uresbund.cpp | 2640 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uscript.cpp | 91 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/ushape.cpp | 1543 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/usprep.cpp | 242 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/usprep.cpp | 504 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/ustr_imp.h | 59 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/ustr_wcs.cpp | 36 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/ustrcase.cpp | 630 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/utext.cpp | 970 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/utext.cpp | 1576 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/utext.cpp | 1983 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/utext.cpp | 2343 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/utext.cpp | 2470 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uvectr32.h | 200 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/common/uvectr64.h | 189 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/astro.cpp | 559 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/astro.cpp | 586 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/basictz.cpp | 386 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/brktrans.cpp | 157 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/calendar.cpp | 3238 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/collationbuilder.cpp | 1226 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/collationbuilder.cpp | 1562 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/collationdatabuilder.cpp | 279 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/collationdatabuilder.cpp | 370 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/collationdatabuilder.cpp | 1235 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/collationfastlatinbuilder.cpp | 57 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/collationsets.cpp | 510 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/csdetect.cpp | 246 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/csrmbcs.cpp | 25 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/csrmbcs.cpp | 36 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/csrmbcs.cpp | 51 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/csrmbcs.cpp | 66 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/csrmbcs.cpp | 81 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/csrsbcs.cpp | 112 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/csrsbcs.cpp | 127 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/csrsbcs.cpp | 219 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/csrsbcs.cpp | 230 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/currpinf.cpp | 303 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/currunit.cpp | 41 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/currunit.cpp | 67 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/dayperiodrules.cpp | 41 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/dcfmtsym.cpp | 405 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/dcfmtsym.cpp | 523 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/decimfmt.cpp | 35 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/decimfmt.cpp | 406 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/decimfmt.cpp | 746 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/decimfmt.cpp | 776 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/decimfmt.cpp | 842 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/decimfmt.cpp | 1318 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/decimfmt.cpp | 1352 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/decimfmt.cpp | 1370 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/decimfmt.cpp | 1557 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/decimfmt.cpp | 1624 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/decimfmt.cpp | 1668 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/double-conversion-bignum.cpp | 150 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/dtfmtsym.cpp | 2533 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/dtitvfmt.cpp | 19 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/dtitvfmt.cpp | 849 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/dtitvfmt.cpp | 875 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/dtitvfmt.cpp | 878 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/dtitvinf.cpp | 18 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/dtitvinf.cpp | 343 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/dtptngen.cpp | 634 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/dtptngen.cpp | 824 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/dtptngen_impl.h | 170 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/esctrn.cpp | 136 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/fmtable.cpp | 321 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/fmtable.cpp | 438 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/formatted_string_builder.cpp | 73 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/icu-small/source/i18n/formatted_string_builder.cpp | 143 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/formatted_string_builder.cpp | 370 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/hebrwcal.cpp | 669 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/indiancal.h | 186 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/inputext.cpp | 96 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/islamcal.cpp | 217 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/japancal.cpp | 299 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/measfmt.cpp | 607 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/measfmt.cpp | 802 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/measunit_extra.cpp | 43 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/measunit_extra.cpp | 561 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/measunit_extra.cpp | 666 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/measunit_extra.cpp | 1305 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/measunit_extra.cpp | 1683 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/measunit_impl.h | 37 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/messageformat2.cpp | 107 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/messageformat2.cpp | 213 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/messageformat2.cpp | 333 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/messageformat2_errors.cpp | 126 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/messageformat2_function_registry.cpp | 117 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/messageformat2_function_registry.cpp | 211 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/messageformat2_parser.cpp | 93 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/messageformat2_serializer.h | 29 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/nfrule.h | 125 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_affixutils.h | 63 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_asformat.cpp | 40 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_compact.cpp | 307 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_compact.cpp | 320 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_decimalquantity.cpp | 462 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_decimalquantity.cpp | 1302 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_decimalquantity.cpp | 1323 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_decimalquantity.cpp | 1324 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_decimfmtprops.h | 125 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_fluent.cpp | 74 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_fluent.cpp | 86 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_fluent.cpp | 114 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_fluent.cpp | 126 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_formatimpl.cpp | 133 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_formatimpl.cpp | 175 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_formatimpl.h | 109 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_formatimpl.h | 119 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_grouping.cpp | 19 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_grouping.cpp | 28 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_longnames.cpp | 249 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_longnames.cpp | 735 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_longnames.cpp | 737 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_longnames.cpp | 794 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_mapper.cpp | 223 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_mapper.cpp | 245 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_mapper.cpp | 424 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_microprops.h | 10 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_modifiers.cpp | 19 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_modifiers.cpp | 421 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_modifiers.cpp | 430 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_modifiers.cpp | 491 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_padding.cpp | 23 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_padding.cpp | 44 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_patternmodifier.cpp | 79 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_patternstring.cpp | 511 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_patternstring.cpp | 774 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_patternstring.cpp | 924 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_patternstring.h | 134 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_scientific.cpp | 41 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/icu-small/source/i18n/number_scientific.cpp | 80 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_scientific.cpp | 112 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_skeletons.cpp | 135 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/number_types.h | 343 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numfmt.cpp | 1376 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numparse_affixes.cpp | 317 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numparse_affixes.cpp | 327 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numparse_currency.cpp | 43 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numparse_currency.cpp | 179 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numparse_currency.h | 61 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numparse_impl.cpp | 244 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numparse_impl.cpp | 309 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numparse_symbols.cpp | 67 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numparse_types.h | 57 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numparse_utils.h | 20 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numrange_fluent.cpp | 360 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numrange_impl.cpp | 153 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numrange_impl.cpp | 179 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numrange_impl.cpp | 180 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numrange_impl.cpp | 311 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numrange_impl.cpp | 312 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numrange_impl.cpp | 371 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numrange_impl.cpp | 372 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numrange_impl.cpp | 373 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numrange_impl.cpp | 395 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/numsys.cpp | 287 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/persncal.h | 164 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/pluralranges.h | 54 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/plurrule.cpp | 260 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/plurrule.cpp | 274 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/plurrule.cpp | 399 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/plurrule.cpp | 727 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/plurrule.cpp | 1381 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/plurrule.cpp | 1859 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/plurrule_impl.h | 51 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/rbnf.cpp | 842 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/rbnf.cpp | 1481 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/rbt_pars.cpp | 1082 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/regexcmp.cpp | 1411 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/regexcmp.cpp | 3354 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/regexcmp.cpp | 3403 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/regexcmp.cpp | 3637 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/regexcmp.cpp | 4079 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/regexcmp.cpp | 4315 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/regexcmp.cpp | 4634 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/regexst.cpp | 104 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/region.cpp | 722 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/reldatefmt.cpp | 431 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/reldatefmt.cpp | 992 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/reldatefmt.cpp | 1064 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/reldatefmt.cpp | 1152 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/reldtfmt.cpp | 588 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/rematch.cpp | 343 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/rematch.cpp | 375 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/rematch.cpp | 2546 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/rematch.cpp | 3087 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/rematch.cpp | 3147 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/rematch.cpp | 3888 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/rematch.cpp | 4601 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/rematch.cpp | 4659 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/rematch.cpp | 5355 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/scriptset.cpp | 177 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/smpdtfmt.cpp | 1952 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/smpdtfmt.cpp | 2808 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/string_segment.cpp | 86 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/string_segment.cpp | 87 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/string_segment.cpp | 116 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/tmutfmt.cpp | 50 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/tmutfmt.cpp | 271 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/tmutfmt.cpp | 311 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/tmutfmt.cpp | 535 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/translit.cpp | 1124 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/translit.cpp | 1139 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/translit.cpp | 1599 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/transreg.cpp | 1238 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/transreg.cpp | 1346 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/tzfmt.cpp | 450 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/tzgnames.cpp | 680 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/tzgnames.cpp | 900 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/tzgnames.cpp | 922 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/tznames_impl.cpp | 389 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/tznames_impl.cpp | 644 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/tznames_impl.cpp | 686 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/tznames_impl.cpp | 1376 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/tznames_impl.cpp | 2292 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/ucoleitr.cpp | 468 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/ucoleitr.cpp | 472 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/icu-small/source/i18n/ucsdet.cpp | 149 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/ucsdet.cpp | 160 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/udat.cpp | 576 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/udat.cpp | 764 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/unicode/messageformat2.h | 320 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/unicode/messageformat2_formattable.h | 283 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/unicode/messageformat2_function_registry.h | 40 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/units_complexconverter.cpp | 143 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/units_converter.cpp | 115 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/units_converter.cpp | 513 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/units_data.cpp | 307 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/units_data.cpp | 389 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/units_data.cpp | 429 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/units_data.cpp | 439 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/units_router.cpp | 63 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/units_router.cpp | 141 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/unum.cpp | 562 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/unum.cpp | 572 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/uregex.cpp | 1381 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/usearch.cpp | 1424 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/usearch.cpp | 1454 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/usearch.cpp | 1497 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/usearch.cpp | 1759 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/usearch.cpp | 1772 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/usearch.cpp | 2079 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/usearch.cpp | 2092 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/uspoof.cpp | 419 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/uspoof.cpp | 511 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/uspoof_conf.cpp | 52 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/uspoof_conf.cpp | 268 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/uspoof_impl.cpp | 40 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/uspoof_impl.cpp | 49 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/uspoof_impl.h | 314 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/windtfmt.cpp | 100 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/windtfmt.cpp | 112 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/windtfmt.cpp | 147 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/windtfmt.cpp | 163 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/windtfmt.cpp | 224 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/winnmfmt.cpp | 144 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/winnmfmt.cpp | 156 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/i18n/winnmfmt.cpp | 191 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/stubdata/stubdata.h | 45 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/escapesrc/escapesrc.cpp | 389 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genccode/genccode.c | 147 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genccode/genccode.c | 152 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genccode/genccode.c | 164 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genccode/genccode.c | 171 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genccode/genccode.c | 221 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/derb.cpp | 434 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/genrb.cpp | 35 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/parse.cpp | 1150 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/parse.cpp | 1250 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/parse.cpp | 1287 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/reslist.cpp | 94 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/reslist.cpp | 146 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/reslist.cpp | 183 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/reslist.h | 98 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/reslist.h | 126 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/reslist.h | 131 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/reslist.h | 262 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/reslist.h | 335 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/reslist.h | 392 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/reslist.h | 407 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/reslist.h | 423 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/reslist.h | 426 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/reslist.h | 430 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/genrb/wrtxml.cpp | 510 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/icupkg/icupkg.cpp | 48 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/pkgdata/pkgdata.cpp | 2053 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/pkg_genc.cpp | 411 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/pkg_genc.cpp | 943 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/pkg_genc.cpp | 951 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/pkgitems.cpp | 403 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/pkgitems.cpp | 613 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/ppucd.cpp | 366 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/toolutil.cpp | 322 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/ucbuf.cpp | 533 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/udbgutil.cpp | 78 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/udbgutil.cpp | 585 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/udbgutil.cpp | 642 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/xmlparser.cpp | 80 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/xmlparser.cpp | 573 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/xmlparser.cpp | 613 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/xmlparser.cpp | 621 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/xmlparser.cpp | 625 | ⚪ INFO | TODO comment found |
| deps/icu-small/source/tools/toolutil/xmlparser.cpp | 637 | ⚪ INFO | TODO comment found |
| deps/libffi/src/wasm/ffitarget.h | 40 | ⚪ INFO | TODO comment found |
| deps/minimatch/index.js | 803 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/examples/tests/test_04_clientcert.py | 40 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/examples/tests/test_04_clientcert.py | 57 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev.c | 3166 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev.c | 3170 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev.c | 3910 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev.c | 4246 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev.c | 4543 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev.c | 4596 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev.c | 5546 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev_iouring.c | 81 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev_iouring.c | 82 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev_iouring.c | 83 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev_iouring.c | 249 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev_iouring.c | 521 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev_iouring.c | 640 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev_linuxaio.c | 208 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev_linuxaio.c | 375 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev_linuxaio.c | 507 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev_linuxaio.c | 508 | ⚪ INFO | TODO comment found |
| deps/ngtcp2/ngtcp2/third-party/libev/ev_win32.c | 91 | ⚪ INFO | TODO comment found |
| deps/npm/bin/npx-cli.js | 9 | ⚪ INFO | TODO comment found |
| deps/npm/lib/commands/config.js | 112 | ⚪ INFO | TODO comment found |
| deps/npm/lib/commands/doctor.js | 87 | ⚪ INFO | TODO comment found |
| deps/npm/lib/commands/fund.js | 78 | ⚪ INFO | TODO comment found |
| deps/npm/lib/commands/link.js | 169 | ⚪ INFO | TODO comment found |
| deps/npm/lib/commands/outdated.js | 124 | ⚪ INFO | TODO comment found |
| deps/npm/lib/commands/pkg.js | 75 | ⚪ INFO | TODO comment found |
| deps/npm/lib/commands/profile.js | 201 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/npm/lib/commands/rebuild.js | 117 | ⚪ INFO | TODO comment found |
| deps/npm/lib/utils/display.js | 395 | ⚪ INFO | TODO comment found |
| deps/npm/test/lib/commands/audit.js | 2246 | ⚪ INFO | TODO comment found |
| deps/npm/test/lib/commands/outdated.js | 588 | ⚪ INFO | TODO comment found |
| deps/npm/test/lib/commands/pack.js | 210 | ⚪ INFO | TODO comment found |
| deps/npm/test/lib/commands/update.js | 6 | ⚪ INFO | TODO comment found |
| deps/npm/test/lib/utils/open-url.js | 138 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/npm/test/lib/utils/open-url.js | 269 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/apps/ocsp.c | 1239 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/crypto/asn1/tasn_enc.c | 136 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/crypto/asn1/tasn_enc.c | 198 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/crypto/asn1/tasn_enc.c | 238 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/crypto/asn1/tasn_utl.c | 276 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/crypto/asn1/tasn_utl.c | 284 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/crypto/bio/bss_dgram.c | 753 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/crypto/cms/cms_kari.c | 247 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/crypto/comp/c_brotli.c | 416 | ⚪ INFO | TODO comment found |
| deps/openssl/openssl/crypto/comp/c_brotli.c | 419 | ⚪ INFO | TODO comment found |
| deps/openssl/openssl/crypto/comp/c_zstd.c | 481 | ⚪ INFO | TODO comment found |
| deps/openssl/openssl/crypto/comp/c_zstd.c | 484 | ⚪ INFO | TODO comment found |
| deps/openssl/openssl/crypto/evp/evp_local.h | 45 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/crypto/provider_core.c | 1705 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/crypto/txt_db/txt_db.c | 158 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/crypto/ui/ui_openssl.c | 334 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/crypto/x509/v3_san.c | 678 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/fuzz/provider.c | 227 | ⚪ INFO | TODO comment found |
| deps/openssl/openssl/include/openssl/ts.h | 330 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/openssl/openssl/providers/common/digest_to_nid.c | 42 | ⚪ INFO | TODO comment found |
| deps/perfetto/sdk/perfetto.h | 1015 | ⚪ INFO | TODO comment found |
| deps/perfetto/sdk/perfetto.h | 1062 | ⚪ INFO | TODO comment found |
| deps/perfetto/sdk/perfetto.h | 1110 | ⚪ INFO | TODO comment found |
| deps/perfetto/sdk/perfetto.h | 1159 | ⚪ INFO | TODO comment found |
| deps/perfetto/sdk/perfetto.h | 3096 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 65485 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 67638 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 67660 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 70968 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 71484 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 78855 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 81008 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 81030 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 84338 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 84854 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 92712 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 94865 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 94887 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 98195 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 98711 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 106569 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 108722 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 108744 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 112052 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 112568 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 120541 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 122694 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 122716 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 126024 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 126540 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 134830 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 136983 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 137005 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 140313 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 140829 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 148593 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 150746 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 150768 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 154076 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 154592 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 162379 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 164532 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 164554 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 167862 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 168378 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 176169 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 178322 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 178344 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 181652 | ⚪ INFO | TODO comment found |
| deps/simdjson/simdjson.h | 182168 | ⚪ INFO | TODO comment found |
| deps/sqlite/sqlite3.c | 17075 | ⚪ INFO | TODO comment found |
| deps/sqlite/sqlite3.c | 52933 | ⚪ INFO | TODO comment found |
| deps/sqlite/sqlite3.c | 53677 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/sqlite/sqlite3.c | 62273 | ⚪ INFO | TODO comment found |
| deps/sqlite/sqlite3.c | 65489 | ⚪ INFO | TODO comment found |
| deps/sqlite/sqlite3.c | 79411 | ⚪ INFO | TODO comment found |
| deps/sqlite/sqlite3.c | 106095 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/sqlite/sqlite3.c | 133552 | ⚪ INFO | TODO comment found |
| deps/sqlite/sqlite3.c | 230297 | ⚪ INFO | TODO comment found |
| deps/sqlite/sqlite3.c | 233908 | ⚪ INFO | TODO comment found |
| deps/sqlite/sqlite3.c | 233951 | ⚪ INFO | TODO comment found |
| deps/sqlite/sqlite3.c | 251867 | ⚪ INFO | TODO comment found |
| deps/sqlite/sqlite3.c | 259192 | ⚪ INFO | TODO comment found |
| deps/sqlite/sqlite3.c | 261246 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/api/api-request.js | 184 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/api/readable.js | 226 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/api/readable.js | 251 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/core/connect.js | 10 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/core/request.js | 222 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/core/util.js | 67 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/dispatcher/client-h2.js | 933 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/dispatcher/client.js | 382 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/interceptor/cache.js | 378 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/cache/cache.js | 582 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/formdata-parser.js | 143 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 347 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 484 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 589 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 590 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 1414 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 1560 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 1575 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 1607 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 1611 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 1622 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 1653 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 1659 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 1669 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 1762 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 1842 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/index.js | 2219 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/request.js | 422 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/request.js | 933 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/response.js | 81 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/util.js | 259 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/fetch/util.js | 973 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/webidl/index.js | 657 | ⚪ INFO | TODO comment found |
| deps/undici/src/lib/web/websocket/websocket.js | 621 | ⚪ INFO | TODO comment found |
| deps/undici/undici.js | 13026 | ⚪ INFO | TODO comment found |
| deps/uv/include/uv/win.h | 256 | ⚪ INFO | TODO comment found |
| deps/uv/include/uv/win.h | 261 | ⚪ INFO | TODO comment found |
| deps/uv/include/uv/win.h | 273 | ⚪ INFO | TODO comment found |
| deps/uv/include/uv/win.h | 357 | ⚪ INFO | TODO comment found |
| deps/uv/include/uv/win.h | 475 | ⚪ INFO | TODO comment found |
| deps/uv/include/uv/win.h | 479 | ⚪ INFO | TODO comment found |
| deps/uv/include/uv/win.h | 495 | ⚪ INFO | TODO comment found |
| deps/uv/include/uv/win.h | 503 | ⚪ INFO | TODO comment found |
| deps/uv/include/uv/win.h | 609 | ⚪ INFO | TODO comment found |
| deps/uv/include/uv/win.h | 620 | ⚪ INFO | TODO comment found |
| deps/uv/include/uv.h | 573 | ⚪ INFO | TODO comment found |
| deps/uv/src/unix/cygwin.c | 81 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/uv/src/unix/os390.c | 107 | ⚪ INFO | TODO comment found |
| deps/uv/src/unix/os390.c | 278 | ⚪ INFO | TODO comment found |
| deps/uv/src/unix/stream.c | 1458 | ⚪ INFO | TODO comment found |
| deps/uv/src/win/fs.c | 1282 | ⚪ INFO | TODO comment found |
| deps/uv/src/win/fs.c | 1910 | ⚪ INFO | TODO comment found |
| deps/uv/src/win/fs.c | 1997 | ⚪ INFO | TODO comment found |
| deps/uv/src/win/getaddrinfo.c | 126 | ⚪ INFO | TODO comment found |
| deps/uv/src/win/pipe.c | 357 | ⚪ INFO | TODO comment found |
| deps/uv/src/win/process.c | 755 | ⚪ INFO | TODO comment found |
| deps/uv/src/win/tcp.c | 205 | ⚪ INFO | TODO comment found |
| deps/uv/src/win/tcp.c | 398 | ⚪ INFO | TODO comment found |
| deps/uv/src/win/tcp.c | 1419 | ⚪ INFO | TODO comment found |
| deps/uv/src/win/tcp.c | 1469 | ⚪ INFO | TODO comment found |
| deps/uv/src/win/tty.c | 275 | ⚪ INFO | TODO comment found |
| deps/uv/src/win/udp.c | 247 | ⚪ INFO | TODO comment found |
| deps/uv/test/echo-server.c | 262 | ⚪ INFO | TODO comment found |
| deps/uv/test/echo-server.c | 269 | ⚪ INFO | TODO comment found |
| deps/uv/test/echo-server.c | 276 | ⚪ INFO | TODO comment found |
| deps/uv/test/echo-server.c | 296 | ⚪ INFO | TODO comment found |
| deps/uv/test/echo-server.c | 311 | ⚪ INFO | TODO comment found |
| deps/uv/test/test-ip6-addr.c | 36 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/uv/test/test-signal-multiple-loops.c | 203 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/uv/test/test-tty.c | 381 | ⚪ INFO | TODO comment found |
| deps/uv/test/test-tty.c | 392 | ⚪ INFO | TODO comment found |
| deps/uv/test/test-tty.c | 403 | ⚪ INFO | TODO comment found |
| deps/uv/test/test-udp-ipv6.c | 224 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/v8/include/v8-fast-api-calls.h | 91 | ⚪ INFO | TODO comment found |
| deps/v8/include/v8-fast-api-calls.h | 123 | ⚪ INFO | TODO comment found |
| deps/v8/src/baseline/riscv/baseline-assembler-riscv-inl.h | 171 | ⚪ INFO | TODO comment found |
| deps/v8/src/baseline/riscv/baseline-assembler-riscv-inl.h | 209 | ⚪ INFO | TODO comment found |
| deps/v8/src/baseline/riscv/baseline-assembler-riscv-inl.h | 218 | ⚪ INFO | TODO comment found |
| deps/v8/src/codegen/riscv/base-constants-riscv.h | 288 | 🟡 MEDIUM | FIXME comment indicating known issue |

## Detailed Findings

### SECURITY

**Total:** 207 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 16 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 18 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 19 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 20 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 21 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 38 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 40 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 41 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 42 | 🟠 HIGH | Hardcoded username/password detected |
| deps/npm/test/fixtures/libnpmsearch-stream-result.js | 43 | 🟠 HIGH | Hardcoded username/password detected |

*... and 197 more*

### MAINTENANCE

**Total:** 654 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| deps/LIEF/third-party/frozen/include/frozen/bits/constexpr_assert.h | 30 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/LIEF/third-party/mbedtls/library/sha256.c | 95 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/cares/src/lib/config-win32.h | 383 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/googletest/include/gtest/gtest.h | 488 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/icu-small/source/i18n/formatted_string_builder.cpp | 73 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/icu-small/source/i18n/number_scientific.cpp | 41 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/icu-small/source/i18n/ucoleitr.cpp | 472 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/npm/lib/commands/profile.js | 201 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/npm/test/lib/utils/open-url.js | 138 | 🟡 MEDIUM | FIXME comment indicating known issue |
| deps/npm/test/lib/utils/open-url.js | 269 | 🟡 MEDIUM | FIXME comment indicating known issue |

*... and 644 more*

### CODE_QUALITY

**Total:** 109 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| android_configure.py | 7 | 🟢 LOW | Debug print statement found |
| android_configure.py | 8 | 🟢 LOW | Debug print statement found |
| android_configure.py | 11 | 🟢 LOW | Debug print statement found |
| android_configure.py | 14 | 🟢 LOW | Debug print statement found |
| android_configure.py | 22 | 🟢 LOW | Debug print statement found |
| android_configure.py | 26 | 🟢 LOW | Debug print statement found |
| android_configure.py | 30 | 🟢 LOW | Debug print statement found |
| android_configure.py | 52 | 🟢 LOW | Debug print statement found |
| android_configure.py | 55 | 🟢 LOW | Debug print statement found |
| benchmark/_test-double-benchmarker.js | 31 | 🟢 LOW | Debug console.log statement found |

*... and 99 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 68/100 (Tier C)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -1155 | Fair ⚠️ |
| Code Quality | -914 | Needs improvement ⚠️ |
| Test Coverage | +1 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 77 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 18.2%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

