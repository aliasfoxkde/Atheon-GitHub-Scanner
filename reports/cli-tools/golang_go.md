# Repository Analysis Report: golang/go

**Generated:** 2026-06-19 08:59:11 CDT

**Quality Score:** 77/100 (Tier B)

## Executive Summary

- **Overall Quality:** B (77/100)
- **Total Findings:** 943
- **Critical Issues:** 0
- **High Issues:** 12
- **Medium Issues:** 69
- **Low Issues:** 15
- **Files Scanned:** 15613

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 15 | Medium |
| maintenance | 882 | Medium |
| security | 46 | High |

## Repository Overview

- **Owner:** golang
- **Name:** go
- **Description:** The Go programming language
- **Primary Language:** Go
- **Stars:** 134850
- **Forks:** 19011
- **Open Issues:** 10150
- **Size:** 443293 KB
- **Created:** 2014-08-19
- **Last Updated:** 2026-06-19
- **Default Branch:** master

**Topics:** go, golang, language, programming-language

## Security Analysis

⚠️ **Found 46 security-related findings.**

### ⚠️ High Severity Issues (12)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| src/cmd/go/internal/auth/gitauth_test.go | 27 | 🟠 HIGH | Hardcoded username/password detected |
| src/cmd/go/internal/auth/gitauth_test.go | 28 | 🟠 HIGH | Hardcoded username/password detected |
| src/cmd/go/internal/auth/gitauth_test.go | 39 | 🟠 HIGH | Hardcoded username/password detected |
| src/cmd/go/internal/auth/gitauth_test.go | 40 | 🟠 HIGH | Hardcoded username/password detected |
| src/cmd/go/internal/auth/gitauth_test.go | 51 | 🟠 HIGH | Hardcoded username/password detected |
| src/cmd/go/internal/auth/gitauth_test.go | 52 | 🟠 HIGH | Hardcoded username/password detected |
| src/net/http/request_test.go | 729 | 🟠 HIGH | Hardcoded username/password detected |
| src/net/http/transport_test.go | 7407 | 🟠 HIGH | Hardcoded username/password detected |
| src/net/url/gen_encoding_table.go | 143 | 🟠 HIGH | Hardcoded username/password detected |
| src/net/url/url_test.go | 634 | 🟠 HIGH | Database connection string detected |
| src/os/user/lookup_stubs.go | 47 | 🟠 HIGH | Hardcoded username/password detected |
| src/os/user/lookup_unix_test.go | 199 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 17.0% | Poor ❌ |
| Documentation | 0.1% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (15)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| lib/hg/goreposum.py | 56 | 🟢 LOW | Debug print statement found |
| lib/hg/goreposum.py | 64 | 🟢 LOW | Debug print statement found |
| lib/wasm/wasm_exec.js | 22 | 🟢 LOW | Debug console.log statement found |
| lib/wasm/wasm_exec.js | 473 | 🟢 LOW | Debug console.log statement found |
| misc/chrome/gophertool/popup.js | 18 | 🟢 LOW | Debug console.log statement found |
| misc/chrome/gophertool/popup.js | 23 | 🟢 LOW | Debug console.log statement found |
| misc/chrome/gophertool/popup.js | 33 | 🟢 LOW | Debug console.log statement found |
| misc/chrome/gophertool/popup.js | 44 | 🟢 LOW | Debug console.log statement found |
| src/internal/trace/traceviewer/static/webcomponents.min.js | 14 | 🟢 LOW | Debug console.log statement found |
| src/runtime/runtime-gdb.py | 23 | 🟢 LOW | Debug print statement found |
| src/runtime/runtime-gdb.py | 552 | 🟢 LOW | Debug print statement found |
| src/runtime/runtime-gdb.py | 640 | 🟢 LOW | Debug print statement found |
| src/runtime/runtime-gdb.py | 674 | 🟢 LOW | Debug print statement found |
| src/runtime/runtime-gdb.py | 683 | 🟢 LOW | Debug print statement found |
| src/runtime/runtime-gdb.py | 686 | 🟢 LOW | Debug print statement found |

### Maintenance Items (882)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| misc/chrome/gophertool/gopher.js | 35 | ⚪ INFO | TODO comment found |
| src/archive/tar/fuzz_test.go | 76 | ⚪ INFO | TODO comment found |
| src/archive/tar/stat_unix.go | 97 | ⚪ INFO | TODO comment found |
| src/archive/zip/fuzz_test.go | 79 | ⚪ INFO | TODO comment found |
| src/bytes/bytes.go | 789 | ⚪ INFO | TODO comment found |
| src/bytes/bytes.go | 1361 | ⚪ INFO | TODO comment found |
| src/cmd/api/main_test.go | 436 | ⚪ INFO | TODO comment found |
| src/cmd/asm/internal/asm/asm.go | 25 | ⚪ INFO | TODO comment found |
| src/cmd/asm/internal/asm/operand_test.go | 360 | ⚪ INFO | TODO comment found |
| src/cmd/asm/internal/asm/parse.go | 6 | ⚪ INFO | TODO comment found |
| src/cmd/asm/internal/asm/parse.go | 1204 | ⚪ INFO | TODO comment found |
| src/cmd/asm/internal/lex/slice.go | 61 | ⚪ INFO | TODO comment found |
| src/cmd/cgo/gcc.go | 1061 | ⚪ INFO | TODO comment found |
| src/cmd/cgo/gcc.go | 1100 | ⚪ INFO | TODO comment found |
| src/cmd/cgo/gcc.go | 1399 | ⚪ INFO | TODO comment found |
| src/cmd/cgo/gcc.go | 2740 | ⚪ INFO | TODO comment found |
| src/cmd/cgo/gcc.go | 2853 | ⚪ INFO | TODO comment found |
| src/cmd/cgo/gcc.go | 3135 | ⚪ INFO | TODO comment found |
| src/cmd/cgo/gcc.go | 3358 | ⚪ INFO | TODO comment found |
| src/cmd/cgo/internal/test/callback.go | 202 | ⚪ INFO | TODO comment found |
| src/cmd/cgo/internal/test/callback_windows.go | 65 | ⚪ INFO | TODO comment found |
| src/cmd/cgo/internal/testcshared/cshared_test.go | 447 | ⚪ INFO | TODO comment found |
| src/cmd/cgo/internal/testfortran/fortran_test.go | 32 | ⚪ INFO | TODO comment found |
| src/cmd/cgo/out.go | 1519 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/amd64/ssa.go | 1067 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/amd64/ssa.go | 1136 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/amd64/ssa.go | 1165 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/amd64/ssa.go | 1245 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/amd64/ssa.go | 1605 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/amd64/ssa.go | 1990 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/amd64/ssa.go | 2006 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/amd64/versions_test.go | 106 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/amd64/versions_test.go | 124 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/arm/ssa.go | 1022 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/arm64/ssa.go | 392 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/arm64/ssa.go | 411 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/arm64/ssa.go | 1521 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/arm64/ssa.go | 1555 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/arm64/ssa.go | 1596 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/arm64/ssa.go | 1599 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/base/flag.go | 128 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/base/flag.go | 495 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/base/flag.go | 499 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/base/hashdebug.go | 144 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/base/hashdebug.go | 178 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/base/hashdebug.go | 213 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/base/hashdebug.go | 223 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/base/hashdebug.go | 239 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/base/hashdebug.go | 342 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/base/hashdebug.go | 394 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/base/hashdebug.go | 419 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/bloop/bloop.go | 29 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/escape/leaks.go | 134 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/escape/utils.go | 217 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/gc/compile.go | 160 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/inline/inl.go | 639 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/inline/inl.go | 675 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/inline/inl.go | 1191 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/inline/inlheur/analyze.go | 205 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/inline/inlheur/analyze_func_callsites.go | 185 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/inline/inlheur/analyze_func_flags.go | 243 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/inline/inlheur/callsite.go | 113 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/inline/inlheur/eclassify.go | 137 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/inline/inlheur/score_callresult_uses.go | 155 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/inline/inlheur/scoring.go | 261 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/ir/expr.go | 878 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ir/expr.go | 952 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/liveness/arg.go | 234 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/liveness/plive.go | 759 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/liveness/plive.go | 1356 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/loong64/ssa.go | 1248 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/midway/analysis.go | 156 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/mips/ssa.go | 960 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/mips64/ssa.go | 892 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/noder/noder.go | 268 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/noder/reader.go | 4233 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/noder/reader.go | 4234 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/noder/unified.go | 493 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/objw/prog.go | 206 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ppc64/ssa.go | 2069 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ppc64/ssa.go | 2087 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ppc64/ssa.go | 2116 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ppc64/ssa.go | 2134 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/reflectdata/alg.go | 425 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/reflectdata/alg.go | 494 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/reflectdata/alg.go | 527 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/reflectdata/alg.go | 762 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/reflectdata/reflect.go | 790 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/reflectdata/reflect.go | 1369 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/reflectdata/reflect.go | 1468 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/riscv64/ssa.go | 995 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/rttype/rttype.go | 148 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/rttype/rttype.go | 271 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/s390x/ssa.go | 955 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/s390x/ssa.go | 1008 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/slice/slice.go | 149 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/slice/slice.go | 266 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/slice/slice.go | 272 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/386Ops.go | 407 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/386Ops.go | 413 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/AMD64Ops.go | 82 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/AMD64Ops.go | 888 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/AMD64Ops.go | 966 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/AMD64Ops.go | 1180 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/ARM64Ops.go | 618 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/ARM64Ops.go | 636 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/ARM64Ops.go | 799 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/LOONG64Ops.go | 614 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/PPC64Ops.go | 566 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/S390XOps.go | 580 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/allocators.go | 7 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/genericOps.go | 563 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/main.go | 28 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/rulegen.go | 906 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/rulegen.go | 977 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/_gen/rulegen.go | 1218 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/addressingmodes.go | 44 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/block.go | 45 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/branchelim.go | 23 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/ssa/check.go | 125 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/check.go | 286 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/check.go | 394 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/compile.go | 31 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/compile.go | 79 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/config.go | 84 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/config.go | 523 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/config.go | 591 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/copyelim.go | 94 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/cse.go | 502 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/deadcode.go | 124 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/debug_lines_test.go | 255 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/debug_test.go | 87 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/debug_test.go | 151 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/debug_test.go | 540 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/dom.go | 59 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/dom.go | 258 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/downward_counting_loop.go | 61 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/flags_test.go | 34 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/flags_test.go | 56 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/func_test.go | 155 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/fuse.go | 87 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/fuse_branchredirect.go | 40 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/fuse_comparisons.go | 115 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/html.go | 599 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/html.go | 638 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/html.go | 961 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/html.go | 969 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/html.go | 1013 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/html.go | 1021 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/html.go | 1062 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/known_bits.go | 52 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/layout.go | 140 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/layout.go | 173 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/loopbce.go | 129 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/loopbce.go | 277 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/loopreschedchecks.go | 45 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/loopreschedchecks.go | 86 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/loopreschedchecks.go | 356 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/loopreschedchecks.go | 398 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/memcombine.go | 485 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/memcombine.go | 532 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/nilcheck.go | 21 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/nilcheck.go | 335 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/op.go | 130 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/pair.go | 38 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/pair.go | 64 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/pair.go | 88 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/pair.go | 107 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/pair.go | 224 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/pair.go | 240 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/phiopt.go | 32 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/phiopt.go | 197 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/phiopt.go | 203 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 541 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 685 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 798 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 834 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 920 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 1073 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 1750 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 1845 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 1884 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 1959 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 2184 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 2208 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 2216 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 2456 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/ssa/prove.go | 2467 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 2836 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/prove.go | 3076 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 112 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 511 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 512 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 513 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 689 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 768 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 909 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 1210 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 1231 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 1259 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 1437 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 2124 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 2335 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 2896 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc.go | 3265 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/regalloc_test.go | 207 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/rewrite.go | 138 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/rewrite.go | 798 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/rewrite.go | 1274 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/rewrite.go | 1481 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/rewrite.go | 2115 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/rewrite.go | 2174 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/rewrite.go | 2566 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/rewrite.go | 2858 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/sccp.go | 402 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/sccp.go | 456 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/shortcircuit.go | 482 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/stackalloc.go | 5 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/stackalloc.go | 340 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/stackalloc.go | 360 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssa/value.go | 635 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/abi.go | 310 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/ssagen/pgen.go | 157 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/phi.go | 41 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/phi.go | 124 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/phi.go | 246 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/phi.go | 414 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/phi.go | 420 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 387 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 435 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 799 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 996 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 1042 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 1706 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 1928 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 2196 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 2346 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 3946 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 3969 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 3978 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 4415 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 4513 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 4720 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 5271 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 5405 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 5419 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 5664 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 6551 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 7259 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 7810 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/ssagen/ssa.go | 7950 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/staticinit/sched.go | 916 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/staticinit/sched.go | 1010 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/staticinit/sched.go | 1113 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/test/pgo_inl_test.go | 91 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/test/testdata/gen/arithBoundaryGen.go | 146 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/test/testdata/gen/cmpConstGen.go | 190 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/typecheck/dcl.go | 50 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/types2/api_test.go | 2045 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/types2/resolver.go | 655 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/walk/assign.go | 723 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/walk/complit.go | 182 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/walk/convert.go | 227 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/walk/expr.go | 709 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/walk/expr.go | 1096 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/walk/switch.go | 398 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/walk/switch.go | 882 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/walk/switch.go | 1267 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/walk/switch.go | 1297 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/wasm/ssa.go | 306 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/x86/ssa.go | 661 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/x86/ssa.go | 964 | ⚪ INFO | TODO comment found |
| src/cmd/compile/internal/x86/ssa.go | 1060 | ⚪ INFO | TODO comment found |
| src/cmd/covdata/metamerge.go | 349 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/cover/cover.go | 653 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/cover/cover.go | 726 | ⚪ INFO | TODO comment found |
| src/cmd/cover/cover.go | 891 | ⚪ INFO | TODO comment found |
| src/cmd/cover/cover.go | 971 | ⚪ INFO | TODO comment found |
| src/cmd/cover/cover.go | 1043 | ⚪ INFO | TODO comment found |
| src/cmd/cover/testdata/ranges/ranges.go | 15 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/doc/dirs.go | 182 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/doc/pkg.go | 168 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/doc/pkg.go | 712 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/doc/pkg.go | 859 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/doc/pkg.go | 861 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/doc/pkg.go | 1128 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/doc/pkg.go | 1175 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/list/list.go | 740 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/load/pkg.go | 638 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/load/pkg.go | 1976 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/load/pkg.go | 2474 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/modfetch/codehost/codehost.go | 375 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/modfetch/codehost/codehost.go | 376 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/modfetch/codehost/git.go | 731 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/modfetch/codehost/git.go | 903 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/modfetch/codehost/git_test.go | 47 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/modfetch/coderepo.go | 461 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/modload/init.go | 1963 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/modload/load.go | 2206 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/work/buildid.go | 207 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/work/exec.go | 749 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/work/exec.go | 3014 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/work/exec.go | 3023 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/work/exec.go | 3350 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/work/exec.go | 3689 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/work/shell.go | 452 | ⚪ INFO | TODO comment found |
| src/cmd/go/internal/work/shell.go | 674 | ⚪ INFO | TODO comment found |
| src/cmd/internal/bio/buf_mmap.go | 23 | ⚪ INFO | TODO comment found |
| src/cmd/internal/bootstrap_test/overlaydir_test.go | 17 | ⚪ INFO | TODO comment found |
| src/cmd/internal/goobj/objfile.go | 106 | ⚪ INFO | TODO comment found |
| src/cmd/internal/goobj/objfile.go | 210 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/arm/asm5.go | 763 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/arm/asm5.go | 1108 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/arm64/a.out.go | 221 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/arm64/a.out.go | 627 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/arm64/asm7.go | 438 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/arm64/asm7.go | 1223 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/arm64/asm7.go | 1353 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/arm64/asm7.go | 7563 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/arm64/asm7.go | 8023 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/arm64/asm7.go | 8226 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/arm64/asm7.go | 8240 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/arm64/asm7.go | 8241 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/arm64/inst.go | 452 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/objfile.go | 137 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/objfile.go | 310 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/objfile.go | 393 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/objfile.go | 433 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/objfile.go | 532 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/objfile.go | 703 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/pcln.go | 193 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/plist.go | 243 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/ppc64/asm9.go | 597 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/ppc64/asm9.go | 2706 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/riscv/obj.go | 1700 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/sym.go | 268 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/util.go | 97 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/x86/asm6.go | 2248 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/x86/asm6.go | 4870 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/x86/asm6.go | 4896 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/x86/obj6.go | 153 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/x86/obj6.go | 197 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/x86/obj6.go | 733 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/x86/obj6_test.go | 140 | ⚪ INFO | TODO comment found |
| src/cmd/internal/obj/x86/seh.go | 111 | ⚪ INFO | TODO comment found |
| src/cmd/internal/objabi/flag.go | 51 | ⚪ INFO | TODO comment found |
| src/cmd/internal/objfile/pe.go | 104 | ⚪ INFO | TODO comment found |
| src/cmd/internal/objfile/plan9obj.go | 78 | ⚪ INFO | TODO comment found |
| src/cmd/internal/src/pos.go | 329 | ⚪ INFO | TODO comment found |
| src/cmd/internal/sys/arch.go | 12 | ⚪ INFO | TODO comment found |
| src/cmd/internal/sys/arch.go | 119 | ⚪ INFO | TODO comment found |
| src/cmd/internal/testdir/testdir_test.go | 540 | ⚪ INFO | TODO comment found |
| src/cmd/internal/testdir/testdir_test.go | 1034 | ⚪ INFO | TODO comment found |
| src/cmd/link/dwarf_test.go | 136 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/amd64/asm.go | 138 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/arm/asm.go | 223 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/arm/asm.go | 284 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/arm64/asm.go | 133 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/arm64/asm.go | 137 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/arm64/asm.go | 233 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/data.go | 161 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/data.go | 242 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/data.go | 401 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/ld/data.go | 404 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/data.go | 1409 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/data.go | 1462 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/data.go | 2086 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/ld/data.go | 2090 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/ld/data.go | 2519 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/data.go | 2692 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/dwarf.go | 54 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/ld/dwarf.go | 237 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/ld/dwarf.go | 281 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/ld/dwarf.go | 346 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/ld/dwarf.go | 616 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/ld/dwarf.go | 743 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/ld/dwarf.go | 1102 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/ld/dwarf.go | 1517 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/dwarf.go | 1715 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/ld/dwarf.go | 1964 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/dwarf_test.go | 1126 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/elf.go | 145 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/elf.go | 686 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/elf.go | 1644 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/go.go | 28 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/lib.go | 764 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/lib.go | 1522 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/lib.go | 2061 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/lib.go | 2740 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/lib.go | 2845 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/lib.go | 2923 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/macho.go | 951 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/macho.go | 1439 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/macho.go | 1456 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/macho.go | 1457 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/macho.go | 1491 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/pcln.go | 395 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/pcln.go | 516 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/pcln.go | 848 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/pe.go | 975 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/symtab.go | 229 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/ld/symtab.go | 338 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/symtab.go | 834 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/xcoff.go | 580 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ld/xcoff.go | 1211 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loadelf/ldelf.go | 243 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loadelf/ldelf.go | 963 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/loader/loader.go | 301 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loader/loader.go | 491 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loader/loader.go | 872 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loader/loader.go | 1008 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loader/loader.go | 1033 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loader/loader.go | 1220 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/link/internal/loader/loader.go | 1360 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loader/loader.go | 2187 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loader/loader.go | 2578 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loader/loader.go | 2703 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loadmacho/ldmacho.go | 603 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loadpe/ldpe.go | 251 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loadpe/seh.go | 31 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/loong64/asm.go | 112 | ⚪ INFO | TODO comment found |
| src/cmd/link/internal/ppc64/asm.go | 319 | ⚪ INFO | TODO comment found |
| src/cmd/link/link_test.go | 1831 | ⚪ INFO | TODO comment found |
| src/cmd/link/link_test.go | 2175 | ⚪ INFO | TODO comment found |
| src/cmd/link/link_test.go | 2325 | ⚪ INFO | TODO comment found |
| src/cmd/pprof/pprof.go | 338 | ⚪ INFO | TODO comment found |
| src/cmd/pprof/pprof.go | 348 | ⚪ INFO | TODO comment found |
| src/cmd/pprof/readlineui.go | 117 | ⚪ INFO | TODO comment found |
| src/cmd/trace/tasks.go | 130 | ⚪ INFO | TODO comment found |
| src/cmd/vet/testdata/print/print.go | 634 | ⚪ INFO | TODO comment found |
| src/crypto/internal/boring/goboringcrypto.h | 186 | ⚪ INFO | TODO comment found |
| src/crypto/internal/fips140/edwards25519/field/fe_test.go | 297 | ⚪ INFO | TODO comment found |
| src/crypto/tls/bogo_shim_test.go | 510 | ⚪ INFO | TODO comment found |
| src/crypto/tls/cipher_suites.go | 152 | ⚪ INFO | TODO comment found |
| src/crypto/tls/cipher_suites.go | 214 | ⚪ INFO | TODO comment found |
| src/crypto/tls/link_test.go | 67 | ⚪ INFO | TODO comment found |
| src/crypto/tls/tls_test.go | 1406 | ⚪ INFO | TODO comment found |
| src/crypto/tls/tls_test.go | 1834 | ⚪ INFO | TODO comment found |
| src/database/sql/sql.go | 1624 | ⚪ INFO | TODO comment found |
| src/database/sql/sql_test.go | 2324 | ⚪ INFO | TODO comment found |
| src/debug/dwarf/type.go | 659 | ⚪ INFO | TODO comment found |
| src/debug/elf/file.go | 34 | ⚪ INFO | TODO comment found |
| src/debug/gosym/pclntab.go | 455 | ⚪ INFO | TODO comment found |
| src/encoding/gob/debug.go | 207 | ⚪ INFO | TODO comment found |
| src/encoding/gob/debug.go | 516 | ⚪ INFO | TODO comment found |
| src/encoding/gob/decgen.go | 10 | ⚪ INFO | TODO comment found |
| src/encoding/gob/encgen.go | 10 | ⚪ INFO | TODO comment found |
| src/encoding/gob/encode.go | 323 | ⚪ INFO | TODO comment found |
| src/encoding/gob/encode.go | 346 | ⚪ INFO | TODO comment found |
| src/encoding/gob/encode.go | 436 | ⚪ INFO | TODO comment found |
| src/encoding/json/internal/jsonwire/decode.go | 25 | ⚪ INFO | TODO comment found |
| src/encoding/json/internal/jsonwire/encode.go | 151 | ⚪ INFO | TODO comment found |
| src/encoding/json/jsontext/decode.go | 46 | ⚪ INFO | TODO comment found |
| src/encoding/json/jsontext/decode.go | 226 | ⚪ INFO | TODO comment found |
| src/encoding/json/jsontext/decode.go | 568 | ⚪ INFO | TODO comment found |
| src/encoding/json/jsontext/encode.go | 669 | ⚪ INFO | TODO comment found |
| src/encoding/json/jsontext/state.go | 137 | ⚪ INFO | TODO comment found |
| src/encoding/json/jsontext/token.go | 108 | ⚪ INFO | TODO comment found |
| src/encoding/json/jsontext/token.go | 210 | ⚪ INFO | TODO comment found |
| src/encoding/json/jsontext/token.go | 296 | ⚪ INFO | TODO comment found |
| src/encoding/json/jsontext/token.go | 433 | ⚪ INFO | TODO comment found |
| src/encoding/json/jsontext/value.go | 97 | ⚪ INFO | TODO comment found |
| src/encoding/json/jsontext/value.go | 131 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal.go | 42 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal.go | 504 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_any.go | 200 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_default.go | 369 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_default.go | 934 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_default.go | 1045 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_default.go | 1342 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_default.go | 1364 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_default.go | 1777 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_default.go | 2021 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_embedded.go | 55 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_embedded.go | 178 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_embedded.go | 183 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_embedded.go | 204 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_embedded.go | 214 | ⚪ INFO | TODO comment found |
| src/encoding/json/v2/arshal_funcs.go | 385 | ⚪ INFO | TODO comment found |
| src/encoding/xml/read.go | 409 | ⚪ INFO | TODO comment found |
| src/encoding/xml/xml.go | 2050 | ⚪ INFO | TODO comment found |
| src/encoding/xml/xml_test.go | 861 | ⚪ INFO | TODO comment found |
| src/expvar/expvar.go | 390 | ⚪ INFO | TODO comment found |
| src/fmt/fmt_test.go | 1281 | ⚪ INFO | TODO comment found |
| src/fmt/scan.go | 744 | ⚪ INFO | TODO comment found |
| src/go/ast/filter.go | 476 | ⚪ INFO | TODO comment found |
| src/go/doc/doc_test.go | 261 | ⚪ INFO | TODO comment found |
| src/go/internal/gccgoimporter/importer_test.go | 66 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/go/parser/resolver.go | 360 | ⚪ INFO | TODO comment found |
| src/go/token/token.go | 323 | ⚪ INFO | TODO comment found |
| src/go/types/api_test.go | 2053 | ⚪ INFO | TODO comment found |
| src/go/types/resolver.go | 644 | ⚪ INFO | TODO comment found |
| src/html/template/escape.go | 431 | ⚪ INFO | TODO comment found |
| src/html/template/exec_test.go | 1029 | ⚪ INFO | TODO comment found |
| src/html/template/exec_test.go | 1030 | ⚪ INFO | TODO comment found |
| src/html/template/exec_test.go | 1031 | ⚪ INFO | TODO comment found |
| src/html/template/exec_test.go | 1032 | ⚪ INFO | TODO comment found |
| src/html/template/exec_test.go | 1033 | ⚪ INFO | TODO comment found |
| src/html/template/html.go | 248 | ⚪ INFO | TODO comment found |
| src/html/template/js.go | 160 | ⚪ INFO | TODO comment found |
| src/html/template/js.go | 173 | ⚪ INFO | TODO comment found |
| src/html/template/js.go | 204 | ⚪ INFO | TODO comment found |
| src/html/template/multi_test.go | 232 | ⚪ INFO | TODO comment found |
| src/image/gif/writer.go | 440 | ⚪ INFO | TODO comment found |
| src/internal/abi/bounds.go | 51 | ⚪ INFO | TODO comment found |
| src/internal/abi/escape.go | 59 | ⚪ INFO | TODO comment found |
| src/internal/bytealg/index_s390x.go | 16 | ⚪ INFO | TODO comment found |
| src/internal/coverage/pods/pods.go | 134 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/internal/cpu/cpu_loong64_hwcap.go | 20 | ⚪ INFO | TODO comment found |
| src/internal/cpu/cpu_test.go | 25 | ⚪ INFO | TODO comment found |
| src/internal/cpu/cpu_x86_darwin.go | 15 | ⚪ INFO | TODO comment found |
| src/internal/dag/parse.go | 106 | ⚪ INFO | TODO comment found |
| src/internal/fuzz/counters_unsupported.go | 5 | ⚪ INFO | TODO comment found |
| src/internal/fuzz/mutator.go | 59 | ⚪ INFO | TODO comment found |
| src/internal/fuzz/worker.go | 207 | ⚪ INFO | TODO comment found |
| src/internal/fuzz/worker.go | 321 | ⚪ INFO | TODO comment found |
| src/internal/pkgbits/encoder.go | 385 | ⚪ INFO | TODO comment found |
| src/internal/pkgbits/encoder.go | 391 | ⚪ INFO | TODO comment found |
| src/internal/poll/errno_windows.go | 27 | ⚪ INFO | TODO comment found |
| src/internal/poll/writev.go | 29 | ⚪ INFO | TODO comment found |
| src/internal/profilerecord/profilerecord.go | 8 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/gen.go | 45 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/gen.go | 162 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/gen.go | 218 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/gen.go | 312 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/gen.go | 397 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/gen.go | 480 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/regalloc.go | 100 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/regalloc.go | 171 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/regalloc.go | 255 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/simd.go | 35 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/simd.go | 65 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/simd.go | 97 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/val.go | 95 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/internal/gen/val.go | 102 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/scan/mkasm.go | 259 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/scan/mkasm.go | 274 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/scan/scan_go.go | 32 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/scan/scan_go.go | 50 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/scan/scan_test.go | 177 | ⚪ INFO | TODO comment found |
| src/internal/runtime/gc/scan/scan_test.go | 180 | ⚪ INFO | TODO comment found |
| src/internal/runtime/maps/group.go | 329 | ⚪ INFO | TODO comment found |
| src/internal/runtime/maps/map.go | 321 | ⚪ INFO | TODO comment found |
| src/internal/runtime/maps/map.go | 761 | ⚪ INFO | TODO comment found |
| src/internal/runtime/maps/memhash_aes_simd.go | 44 | ⚪ INFO | TODO comment found |
| src/internal/runtime/maps/runtime.go | 45 | ⚪ INFO | TODO comment found |
| src/internal/runtime/maps/table.go | 16 | ⚪ INFO | TODO comment found |
| src/internal/runtime/maps/table.go | 18 | ⚪ INFO | TODO comment found |
| src/internal/runtime/maps/table.go | 643 | ⚪ INFO | TODO comment found |
| src/internal/runtime/maps/table.go | 1246 | ⚪ INFO | TODO comment found |
| src/internal/strconv/ftoa.go | 493 | ⚪ INFO | TODO comment found |
| src/internal/syscall/windows/at_windows_test.go | 38 | ⚪ INFO | TODO comment found |
| src/internal/syscall/windows/registry/zsyscall_windows.go | 33 | ⚪ INFO | TODO comment found |
| src/internal/syscall/windows/zsyscall_windows.go | 33 | ⚪ INFO | TODO comment found |
| src/internal/trace/generation.go | 174 | ⚪ INFO | TODO comment found |
| src/internal/trace/order.go | 26 | ⚪ INFO | TODO comment found |
| src/internal/trace/testdata/testprog/cpu-profile.go | 82 | ⚪ INFO | TODO comment found |
| src/internal/trace/traceviewer/mmu.go | 7 | ⚪ INFO | TODO comment found |
| src/internal/types/testdata/fixedbugs/issue50782.go | 28 | ⚪ INFO | TODO comment found |
| src/internal/types/testdata/fixedbugs/issue51658.go | 7 | ⚪ INFO | TODO comment found |
| src/internal/types/testdata/spec/range.go | 27 | ⚪ INFO | TODO comment found |
| src/internal/xcoff/ar.go | 217 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/log/slog/handler_test.go | 5 | ⚪ INFO | TODO comment found |
| src/log/slog/text_handler.go | 109 | ⚪ INFO | TODO comment found |
| src/log/slog/text_handler.go | 117 | ⚪ INFO | TODO comment found |
| src/math/big/int.go | 394 | ⚪ INFO | TODO comment found |
| src/math/big/intmarsh_test.go | 52 | ⚪ INFO | TODO comment found |
| src/math/big/ratmarsh_test.go | 39 | ⚪ INFO | TODO comment found |
| src/math/fma.go | 44 | ⚪ INFO | TODO comment found |
| src/math/fma.go | 160 | ⚪ INFO | TODO comment found |
| src/math/rand/rand_test.go | 339 | ⚪ INFO | TODO comment found |
| src/math/rand/rand_test.go | 551 | ⚪ INFO | TODO comment found |
| src/math/rand/v2/rand_test.go | 336 | ⚪ INFO | TODO comment found |
| src/math/rand/v2/rand_test.go | 459 | ⚪ INFO | TODO comment found |
| src/mime/mediatype.go | 244 | ⚪ INFO | TODO comment found |
| src/mime/multipart/formdata.go | 37 | ⚪ INFO | TODO comment found |
| src/mime/multipart/formdata.go | 51 | ⚪ INFO | TODO comment found |
| src/mime/multipart/multipart.go | 175 | ⚪ INFO | TODO comment found |
| src/mime/multipart/multipart_test.go | 407 | ⚪ INFO | TODO comment found |
| src/net/http/cgi/host.go | 370 | ⚪ INFO | TODO comment found |
| src/net/http/cgi/host.go | 405 | ⚪ INFO | TODO comment found |
| src/net/http/client_test.go | 1958 | ⚪ INFO | TODO comment found |
| src/net/http/clientserver_test.go | 234 | ⚪ INFO | TODO comment found |
| src/net/http/clientserver_test.go | 685 | ⚪ INFO | TODO comment found |
| src/net/http/clientserver_test.go | 1719 | ⚪ INFO | TODO comment found |
| src/net/http/cookiejar/jar.go | 42 | ⚪ INFO | TODO comment found |
| src/net/http/cookiejar/jar_test.go | 138 | ⚪ INFO | TODO comment found |
| src/net/http/httputil/dump.go | 157 | ⚪ INFO | TODO comment found |
| src/net/http/internal/chunked.go | 208 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/client_conn_pool.go | 17 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/client_conn_pool.go | 21 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/client_conn_pool.go | 22 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/client_conn_pool.go | 225 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/clientconn_test.go | 298 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/clientconn_test.go | 539 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/connframes_test.go | 190 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/databuffer.go | 20 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/frame.go | 299 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/frame.go | 336 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/http2.go | 218 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/http2.go | 271 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 5 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 61 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 359 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 599 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 987 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 1332 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 1379 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 1384 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 1625 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 2037 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 2499 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 2610 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 2937 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server.go | 3198 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/server_test.go | 668 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport.go | 649 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport.go | 950 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport.go | 1441 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport.go | 1952 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport.go | 2268 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport.go | 2272 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport.go | 2319 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport.go | 2446 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport.go | 2549 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport.go | 2612 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport.go | 2787 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport.go | 2891 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport_test.go | 296 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport_test.go | 501 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport_test.go | 912 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/transport_test.go | 3768 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/write.go | 34 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/write.go | 209 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/write.go | 274 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/write.go | 369 | ⚪ INFO | TODO comment found |
| src/net/http/internal/http2/write.go | 373 | ⚪ INFO | TODO comment found |
| src/net/http/internal/sniff.go | 188 | ⚪ INFO | TODO comment found |
| src/net/http/pprof/pprof.go | 308 | ⚪ INFO | TODO comment found |
| src/net/http/request.go | 668 | ⚪ INFO | TODO comment found |
| src/net/http/request.go | 791 | ⚪ INFO | TODO comment found |
| src/net/http/responsecontroller_test.go | 289 | ⚪ INFO | TODO comment found |
| src/net/http/routing_tree_test.go | 41 | ⚪ INFO | TODO comment found |
| src/net/http/serve_test.go | 2299 | ⚪ INFO | TODO comment found |
| src/net/http/serve_test.go | 2328 | ⚪ INFO | TODO comment found |
| src/net/http/server.go | 1495 | ⚪ INFO | TODO comment found |
| src/net/http/server.go | 3753 | ⚪ INFO | TODO comment found |
| src/net/http/transfer.go | 330 | ⚪ INFO | TODO comment found |
| src/net/http/transport.go | 1837 | ⚪ INFO | TODO comment found |
| src/net/http/transport.go | 2940 | ⚪ INFO | TODO comment found |
| src/net/http/transport_test.go | 53 | ⚪ INFO | TODO comment found |
| src/net/interface_windows.go | 70 | ⚪ INFO | TODO comment found |
| src/net/lookup_test.go | 1024 | ⚪ INFO | TODO comment found |
| src/net/net_test.go | 453 | ⚪ INFO | TODO comment found |
| src/net/net_windows_test.go | 396 | ⚪ INFO | TODO comment found |
| src/net/netip/slow_test.go | 54 | ⚪ INFO | TODO comment found |
| src/net/resolverdialfunc_test.go | 35 | ⚪ INFO | TODO comment found |
| src/net/resolverdialfunc_test.go | 248 | ⚪ INFO | TODO comment found |
| src/net/sock_stub.go | 12 | ⚪ INFO | TODO comment found |
| src/net/tcpsock_posix.go | 137 | ⚪ INFO | TODO comment found |
| src/net/textproto/reader.go | 20 | ⚪ INFO | TODO comment found |
| src/net/udpsock_plan9.go | 33 | ⚪ INFO | TODO comment found |
| src/net/udpsock_plan9.go | 76 | ⚪ INFO | TODO comment found |
| src/os/os_test.go | 1451 | ⚪ INFO | TODO comment found |
| src/os/os_test.go | 1471 | ⚪ INFO | TODO comment found |
| src/os/os_test.go | 2822 | ⚪ INFO | TODO comment found |
| src/os/user/user_test.go | 85 | ⚪ INFO | TODO comment found |
| src/reflect/map.go | 485 | ⚪ INFO | TODO comment found |
| src/regexp/syntax/compile.go | 162 | ⚪ INFO | TODO comment found |
| src/regexp/syntax/compile.go | 195 | ⚪ INFO | TODO comment found |
| src/runtime/asan/asan.go | 66 | ⚪ INFO | TODO comment found |
| src/runtime/cgo/callbacks.go | 36 | ⚪ INFO | TODO comment found |
| src/runtime/cgroup_linux.go | 94 | ⚪ INFO | TODO comment found |
| src/runtime/conv_wasm_test.go | 14 | ⚪ INFO | TODO comment found |
| src/runtime/cpuflags.go | 30 | ⚪ INFO | TODO comment found |
| src/runtime/cpuprof.go | 109 | ⚪ INFO | TODO comment found |
| src/runtime/cpuprof.go | 146 | ⚪ INFO | TODO comment found |
| src/runtime/crash_cgo_test.go | 514 | ⚪ INFO | TODO comment found |
| src/runtime/crash_cgo_test.go | 543 | ⚪ INFO | TODO comment found |
| src/runtime/debug/garbage_test.go | 186 | ⚪ INFO | TODO comment found |
| src/runtime/debug/panic_test.go | 7 | ⚪ INFO | TODO comment found |
| src/runtime/debug_test.go | 5 | ⚪ INFO | TODO comment found |
| src/runtime/iface.go | 302 | ⚪ INFO | TODO comment found |
| src/runtime/iface.go | 359 | ⚪ INFO | TODO comment found |
| src/runtime/import_test.go | 23 | ⚪ INFO | TODO comment found |
| src/runtime/importx_test.go | 7 | ⚪ INFO | TODO comment found |
| src/runtime/lfstack.go | 38 | ⚪ INFO | TODO comment found |
| src/runtime/lock_js.go | 240 | ⚪ INFO | TODO comment found |
| src/runtime/lock_spinbit.go | 134 | ⚪ INFO | TODO comment found |
| src/runtime/lock_spinbit.go | 137 | ⚪ INFO | TODO comment found |
| src/runtime/lock_spinbit.go | 229 | ⚪ INFO | TODO comment found |
| src/runtime/malloc.go | 786 | ⚪ INFO | TODO comment found |
| src/runtime/malloc.go | 1352 | ⚪ INFO | TODO comment found |
| src/runtime/malloc.go | 1356 | ⚪ INFO | TODO comment found |
| src/runtime/malloc.go | 2457 | ⚪ INFO | TODO comment found |
| src/runtime/malloc_test.go | 431 | ⚪ INFO | TODO comment found |
| src/runtime/malloc_test.go | 486 | ⚪ INFO | TODO comment found |
| src/runtime/map.go | 15 | ⚪ INFO | TODO comment found |
| src/runtime/map.go | 209 | ⚪ INFO | TODO comment found |
| src/runtime/map_test.go | 210 | ⚪ INFO | TODO comment found |
| src/runtime/mbarrier.go | 136 | ⚪ INFO | TODO comment found |
| src/runtime/mbarrier.go | 358 | ⚪ INFO | TODO comment found |
| src/runtime/mfinal.go | 226 | ⚪ INFO | TODO comment found |
| src/runtime/mgc.go | 1773 | ⚪ INFO | TODO comment found |
| src/runtime/mgc.go | 1999 | ⚪ INFO | TODO comment found |
| src/runtime/mgcmark.go | 291 | ⚪ INFO | TODO comment found |
| src/runtime/mgcmark.go | 1091 | ⚪ INFO | TODO comment found |
| src/runtime/mgcmark.go | 1103 | ⚪ INFO | TODO comment found |
| src/runtime/mheap.go | 449 | ⚪ INFO | TODO comment found |
| src/runtime/mheap.go | 2939 | ⚪ INFO | TODO comment found |
| src/runtime/mklockrank.go | 38 | ⚪ INFO | TODO comment found |
| src/runtime/mkpreempt.go | 590 | ⚪ INFO | TODO comment found |
| src/runtime/mspanset.go | 153 | ⚪ INFO | TODO comment found |
| src/runtime/mwbbuf.go | 69 | ⚪ INFO | TODO comment found |
| src/runtime/mwbbuf.go | 162 | ⚪ INFO | TODO comment found |
| src/runtime/mwbbuf.go | 218 | ⚪ INFO | TODO comment found |
| src/runtime/mwbbuf.go | 221 | ⚪ INFO | TODO comment found |
| src/runtime/mwbbuf.go | 236 | ⚪ INFO | TODO comment found |
| src/runtime/mwbbuf.go | 247 | ⚪ INFO | TODO comment found |
| src/runtime/netpoll_aix.go | 165 | ⚪ INFO | TODO comment found |
| src/runtime/netpoll_windows.go | 36 | ⚪ INFO | TODO comment found |
| src/runtime/netpoll_windows.go | 173 | ⚪ INFO | TODO comment found |
| src/runtime/netpoll_windows.go | 231 | ⚪ INFO | TODO comment found |
| src/runtime/os3_plan9.go | 162 | ⚪ INFO | TODO comment found |
| src/runtime/os_dragonfly.go | 168 | ⚪ INFO | TODO comment found |
| src/runtime/os_linux_riscv64.go | 17 | ⚪ INFO | TODO comment found |
| src/runtime/os_plan9.go | 555 | ⚪ INFO | TODO comment found |
| src/runtime/os_wasm.go | 39 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/runtime/os_wasm.go | 144 | ⚪ INFO | TODO comment found |
| src/runtime/os_windows_arm64.go | 17 | ⚪ INFO | TODO comment found |
| src/runtime/panic.go | 61 | ⚪ INFO | TODO comment found |
| src/runtime/panic.go | 450 | ⚪ INFO | TODO comment found |
| src/runtime/pprof/label_test.go | 188 | ⚪ INFO | TODO comment found |
| src/runtime/pprof/proto.go | 197 | ⚪ INFO | TODO comment found |
| src/runtime/pprof/proto.go | 386 | ⚪ INFO | TODO comment found |
| src/runtime/pprof/proto.go | 387 | ⚪ INFO | TODO comment found |
| src/runtime/pprof/proto.go | 743 | ⚪ INFO | TODO comment found |
| src/runtime/preempt.go | 130 | ⚪ INFO | TODO comment found |
| src/runtime/preempt.go | 182 | ⚪ INFO | TODO comment found |
| src/runtime/preempt.go | 238 | ⚪ INFO | TODO comment found |
| src/runtime/preempt.go | 452 | ⚪ INFO | TODO comment found |
| src/runtime/preempt.go | 454 | ⚪ INFO | TODO comment found |
| src/runtime/proc.go | 2901 | ⚪ INFO | TODO comment found |
| src/runtime/proc.go | 3167 | ⚪ INFO | TODO comment found |
| src/runtime/proc.go | 5456 | ⚪ INFO | TODO comment found |
| src/runtime/race/testdata/waitgroup_test.go | 224 | ⚪ INFO | TODO comment found |
| src/runtime/race.go | 309 | ⚪ INFO | TODO comment found |
| src/runtime/runtime-gdb.py | 688 | ⚪ INFO | TODO comment found |
| src/runtime/runtime1.go | 104 | ⚪ INFO | TODO comment found |
| src/runtime/runtime2.go | 883 | ⚪ INFO | TODO comment found |
| src/runtime/secret/crash_test.go | 194 | ⚪ INFO | TODO comment found |
| src/runtime/secret/secret_test.go | 7 | ⚪ INFO | TODO comment found |
| src/runtime/secret.go | 48 | ⚪ INFO | TODO comment found |
| src/runtime/security_test.go | 144 | ⚪ INFO | TODO comment found |
| src/runtime/signal_unix.go | 407 | ⚪ INFO | TODO comment found |
| src/runtime/signal_unix.go | 463 | ⚪ INFO | TODO comment found |
| src/runtime/signal_unix.go | 1473 | ⚪ INFO | TODO comment found |
| src/runtime/signal_windows.go | 156 | ⚪ INFO | TODO comment found |
| src/runtime/signal_windows_test.go | 114 | ⚪ INFO | TODO comment found |
| src/runtime/slice.go | 423 | ⚪ INFO | TODO comment found |
| src/runtime/softfloat64.go | 515 | ⚪ INFO | TODO comment found |
| src/runtime/stack.go | 1028 | ⚪ INFO | TODO comment found |
| src/runtime/stubs_386.go | 23 | ⚪ INFO | TODO comment found |
| src/runtime/stubs_amd64.go | 59 | ⚪ INFO | TODO comment found |
| src/runtime/stubs_arm.go | 37 | ⚪ INFO | TODO comment found |
| src/runtime/stubs_arm64.go | 39 | ⚪ INFO | TODO comment found |
| src/runtime/stubs_loong64.go | 39 | ⚪ INFO | TODO comment found |
| src/runtime/stubs_mips64x.go | 28 | ⚪ INFO | TODO comment found |
| src/runtime/stubs_mipsx.go | 25 | ⚪ INFO | TODO comment found |
| src/runtime/stubs_ppc64x.go | 40 | ⚪ INFO | TODO comment found |
| src/runtime/stubs_riscv64.go | 37 | ⚪ INFO | TODO comment found |
| src/runtime/stubs_s390x.go | 37 | ⚪ INFO | TODO comment found |
| src/runtime/symtab.go | 254 | ⚪ INFO | TODO comment found |
| src/runtime/symtab.go | 789 | ⚪ INFO | TODO comment found |
| src/runtime/symtab.go | 934 | ⚪ INFO | TODO comment found |
| src/runtime/symtabinl_test.go | 47 | ⚪ INFO | TODO comment found |
| src/runtime/syscall_aix.go | 58 | ⚪ INFO | TODO comment found |
| src/runtime/testdata/testwinlib/main.c | 26 | ⚪ INFO | TODO comment found |
| src/runtime/traceback.go | 66 | ⚪ INFO | TODO comment found |
| src/runtime/traceback.go | 628 | ⚪ INFO | TODO comment found |
| src/runtime/traceback.go | 1100 | ⚪ INFO | TODO comment found |
| src/runtime/tracecpu.go | 265 | ⚪ INFO | TODO comment found |
| src/runtime/type.go | 107 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/main.go | 221 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/main.go | 222 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/arm64/emit.go | 110 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/arm64/operands.go | 351 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/gen_simdIntrinsics.go | 204 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/gen_simdMachineOps.go | 116 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/gen_simdMachineOps.go | 173 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/gen_simdTypes.go | 476 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/gen_simdTypes.go | 704 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/gen_simdrules.go | 57 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/gen_simdrules.go | 424 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/gen_simdrules.go | 589 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/gen_simdssa.go | 218 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/gen_utility.go | 157 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/gen_utility.go | 354 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/godefs.go | 198 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/godefs.go | 234 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/godefs.go | 262 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/godefs.go | 463 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/godefs.go | 476 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/godefs.go | 503 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/godefs.go | 532 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/main.go | 22 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/main.go | 314 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/xed.go | 58 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/xed.go | 60 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/xed.go | 274 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/xed.go | 442 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/xed.go | 547 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/xed.go | 858 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/xed.go | 943 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/xed.go | 1007 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/xed.go | 1033 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/simdgen/xed.go | 1049 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/tmplgen/main.go | 532 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/tmplgen/main.go | 567 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/closure.go | 100 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/domain.go | 189 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/domain.go | 252 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/dot.go | 69 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/dot.go | 128 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/env.go | 99 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/env.go | 149 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/env.go | 231 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/env.go | 460 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/env.go | 473 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/html.go | 59 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/html.go | 71 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/unify.go | 141 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/unify.go | 285 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/unify_test.go | 87 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/unify_test.go | 109 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/unify_test.go | 112 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/value.go | 111 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/yaml.go | 320 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/yaml.go | 326 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/yaml.go | 433 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/yaml.go | 436 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/yaml.go | 521 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/yaml.go | 552 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/yaml.go | 600 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/_gen/unify/yaml.go | 604 | ⚪ INFO | TODO comment found |
| src/simd/archsimd/internal/simd_test/simd_test.go | 375 | ⚪ INFO | TODO comment found |
| src/simd/testdata/iface/iface.go | 22 | ⚪ INFO | TODO comment found |
| src/slices/slices.go | 439 | ⚪ INFO | TODO comment found |
| src/slices/slices.go | 463 | ⚪ INFO | TODO comment found |
| src/slices/slices.go | 478 | ⚪ INFO | TODO comment found |
| src/strconv/quote.go | 509 | ⚪ INFO | TODO comment found |
| src/strings/builder.go | 37 | ⚪ INFO | TODO comment found |
| src/strings/strings.go | 820 | ⚪ INFO | TODO comment found |
| src/syscall/tables_js.go | 15 | ⚪ INFO | TODO comment found |
| src/syscall/tables_js.go | 102 | ⚪ INFO | TODO comment found |
| src/syscall/tables_js.go | 230 | ⚪ INFO | TODO comment found |
| src/syscall/tables_wasip1.go | 11 | ⚪ INFO | TODO comment found |
| src/syscall/tables_wasip1.go | 94 | ⚪ INFO | TODO comment found |
| src/syscall/types_freebsd.go | 90 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/syscall/zsyscall_windows.go | 32 | ⚪ INFO | TODO comment found |
| src/testing/match.go | 47 | ⚪ INFO | TODO comment found |
| src/testing/testing.go | 2920 | ⚪ INFO | TODO comment found |
| src/testing/testing_windows.go | 40 | ⚪ INFO | TODO comment found |
| src/text/template/exec.go | 114 | ⚪ INFO | TODO comment found |
| src/text/template/funcs.go | 38 | ⚪ INFO | TODO comment found |
| src/text/template/funcs.go | 399 | ⚪ INFO | TODO comment found |
| src/text/template/parse/node.go | 360 | ⚪ INFO | TODO comment found |
| src/text/template/parse/node.go | 368 | ⚪ INFO | TODO comment found |
| src/text/template/parse/node.go | 439 | ⚪ INFO | TODO comment found |
| src/text/template/parse/node.go | 473 | ⚪ INFO | TODO comment found |
| src/unicode/casetables.go | 5 | ⚪ INFO | TODO comment found |
| test/codegen/comparisons.go | 369 | ⚪ INFO | TODO comment found |
| test/codegen/condmove.go | 817 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/codegen/condmove.go | 819 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/codegen/condmove.go | 825 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/codegen/condmove.go | 833 | 🟡 MEDIUM | FIXME comment indicating known issue |
| test/codegen/memcombine.go | 367 | ⚪ INFO | TODO comment found |
| test/codegen/unique.go | 22 | ⚪ INFO | TODO comment found |
| test/escape2.go | 668 | ⚪ INFO | TODO comment found |
| test/escape2n.go | 668 | ⚪ INFO | TODO comment found |
| test/escape6.go | 36 | ⚪ INFO | TODO comment found |
| test/escape6.go | 43 | ⚪ INFO | TODO comment found |

## Detailed Findings

### CODE_QUALITY

**Total:** 15 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| lib/hg/goreposum.py | 56 | 🟢 LOW | Debug print statement found |
| lib/hg/goreposum.py | 64 | 🟢 LOW | Debug print statement found |
| lib/wasm/wasm_exec.js | 22 | 🟢 LOW | Debug console.log statement found |
| lib/wasm/wasm_exec.js | 473 | 🟢 LOW | Debug console.log statement found |
| misc/chrome/gophertool/popup.js | 18 | 🟢 LOW | Debug console.log statement found |
| misc/chrome/gophertool/popup.js | 23 | 🟢 LOW | Debug console.log statement found |
| misc/chrome/gophertool/popup.js | 33 | 🟢 LOW | Debug console.log statement found |
| misc/chrome/gophertool/popup.js | 44 | 🟢 LOW | Debug console.log statement found |
| src/internal/trace/traceviewer/static/webcomponents.min.js | 14 | 🟢 LOW | Debug console.log statement found |
| src/runtime/runtime-gdb.py | 23 | 🟢 LOW | Debug print statement found |

*... and 5 more*

### MAINTENANCE

**Total:** 882 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| src/cmd/compile/internal/inline/inlheur/analyze.go | 205 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/inline/inlheur/analyze_func_callsites.go | 185 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/inline/inlheur/analyze_func_flags.go | 243 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/inline/inlheur/callsite.go | 113 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/inline/inlheur/eclassify.go | 137 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/inline/inlheur/scoring.go | 261 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/ssa/branchelim.go | 23 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/ssa/prove.go | 2456 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/ssagen/abi.go | 310 | 🟡 MEDIUM | FIXME comment indicating known issue |
| src/cmd/compile/internal/staticinit/sched.go | 1113 | 🟡 MEDIUM | FIXME comment indicating known issue |

*... and 872 more*

### SECURITY

**Total:** 46 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| src/cmd/go/internal/auth/gitauth_test.go | 27 | 🟠 HIGH | Hardcoded username/password detected |
| src/cmd/go/internal/auth/gitauth_test.go | 28 | 🟠 HIGH | Hardcoded username/password detected |
| src/cmd/go/internal/auth/gitauth_test.go | 39 | 🟠 HIGH | Hardcoded username/password detected |
| src/cmd/go/internal/auth/gitauth_test.go | 40 | 🟠 HIGH | Hardcoded username/password detected |
| src/cmd/go/internal/auth/gitauth_test.go | 51 | 🟠 HIGH | Hardcoded username/password detected |
| src/cmd/go/internal/auth/gitauth_test.go | 52 | 🟠 HIGH | Hardcoded username/password detected |
| src/net/http/request_test.go | 729 | 🟠 HIGH | Hardcoded username/password detected |
| src/net/http/transport_test.go | 7407 | 🟠 HIGH | Hardcoded username/password detected |
| src/net/url/gen_encoding_table.go | 143 | 🟠 HIGH | Hardcoded username/password detected |
| src/net/url/url_test.go | 634 | 🟠 HIGH | Database connection string detected |

*... and 36 more*

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 77/100 (Tier B)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -180 | Fair ⚠️ |
| Code Quality | -360 | Needs improvement ⚠️ |
| Test Coverage | +1 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 12 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 17.0%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

