# Repository Analysis Report: docker-archive/docker-ce

**Generated:** 2026-06-19 09:01:24 CDT

**Quality Score:** 76/100 (Tier B)

## Executive Summary

- **Overall Quality:** B (76/100)
- **Total Findings:** 266
- **Critical Issues:** 0
- **High Issues:** 44
- **Medium Issues:** 26
- **Low Issues:** 3
- **Files Scanned:** 11443

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| maintenance | 218 | Medium |
| security | 45 | High |
| code_quality | 3 | Medium |

## Repository Overview

- **Owner:** docker-archive
- **Name:** docker-ce
- **Description:** :warning: This repository is deprecated and will be archived (Docker CE itself is NOT deprecated) see the https://github.com/docker/docker-ce/blob/master/README.md :warning:
- **Primary Language:** Go
- **Stars:** 5758
- **Forks:** 1509
- **Open Issues:** 2
- **Size:** 187193 KB
- **Created:** 2017-05-19
- **Last Updated:** 2026-06-16
- **Default Branch:** master

**Topics:** docker, git, golang, moby

## Security Analysis

⚠️ **Found 45 security-related findings.**

### ⚠️ High Severity Issues (44)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| components/cli/cli/command/registry/login_test.go | 26 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/registry/login_test.go | 85 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/registry/login_test.go | 86 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/registry_test.go | 31 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/registry_test.go | 32 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/registry_test.go | 36 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/registry_test.go | 37 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/trust/sign_test.go | 26 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/config_test.go | 243 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/config_test.go | 244 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 19 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 202 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 203 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 220 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 221 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 249 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 250 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 253 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 254 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 290 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 291 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 294 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 295 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 333 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 334 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 337 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 338 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 376 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 377 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 380 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 381 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 411 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/configfile/file_test.go | 412 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/credentials/native_store_test.go | 101 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/credentials/native_store_test.go | 102 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/credentials/native_store_test.go | 126 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/credentials/native_store_test.go | 127 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/credentials/native_store_test.go | 149 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/credentials/native_store_test.go | 150 | 🟠 HIGH | Hardcoded username/password detected |
| components/engine/distribution/push_v2_test.go | 505 | 🟠 HIGH | Hardcoded username/password detected |
| components/engine/distribution/push_v2_test.go | 506 | 🟠 HIGH | Hardcoded username/password detected |
| components/engine/integration/plugin/common/plugin_test.go | 98 | 🟠 HIGH | Hardcoded username/password detected |
| components/engine/testutil/registry/registry.go | 78 | 🟠 HIGH | Hardcoded username/password detected |
| components/engine/testutil/registry/registry.go | 79 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 10.7% | Poor ❌ |
| Documentation | 0.7% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (3)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| components/engine/libnetwork/cmd/ssd/ssd.py | 163 | 🟢 LOW | Debug print statement found |
| components/engine/libnetwork/cmd/ssd/ssd.py | 165 | 🟢 LOW | Debug print statement found |
| components/engine/libnetwork/cmd/ssd/ssd.py | 184 | 🟢 LOW | Debug print statement found |

### Maintenance Items (218)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| components/cli/cli/command/cli.go | 190 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/container/hijack.go | 19 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/container/opts.go | 585 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/container/opts_test.go | 51 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/formatter/formatter.go | 54 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/formatter/reflect.go | 58 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/cli/cli/command/image/build_buildkit.go | 95 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/image/build_buildkit.go | 286 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/image/build_buildkit.go | 305 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/image/build_buildkit.go | 310 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/image/build_buildkit.go | 357 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/image/build_test.go | 126 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/manifest/create_list.go | 68 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/manifest/inspect_test.go | 55 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/plugin/install.go | 162 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/plugin/upgrade.go | 88 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/service/list.go | 160 | ⚪ INFO | TODO comment found |
| components/cli/cli/command/system/version_test.go | 27 | ⚪ INFO | TODO comment found |
| components/cli/cli/compose/convert/service.go | 252 | ⚪ INFO | TODO comment found |
| components/cli/cli/compose/convert/service.go | 296 | ⚪ INFO | TODO comment found |
| components/cli/cli/compose/convert/service.go | 479 | ⚪ INFO | TODO comment found |
| components/cli/cli/compose/loader/loader.go | 513 | ⚪ INFO | TODO comment found |
| components/cli/cli/compose/schema/schema.go | 21 | ⚪ INFO | TODO comment found |
| components/cli/cli/compose/types/types.go | 308 | ⚪ INFO | TODO comment found |
| components/cli/cli/compose/types/types.go | 316 | ⚪ INFO | TODO comment found |
| components/cli/cli/config/config.go | 112 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/cli/cli/manifest/types/types.go | 21 | ⚪ INFO | TODO comment found |
| components/cli/cli/manifest/types/types.go | 64 | ⚪ INFO | TODO comment found |
| components/cli/cli-plugins/manager/manager.go | 178 | ⚪ INFO | TODO comment found |
| components/cli/docs/yaml/yaml.go | 77 | ⚪ INFO | TODO comment found |
| components/cli/e2e/container/run_test.go | 129 | ⚪ INFO | TODO comment found |
| components/cli/e2e/stack/remove_test.go | 40 | ⚪ INFO | TODO comment found |
| components/engine/api/server/router/container/container_routes.go | 38 | ⚪ INFO | TODO comment found |
| components/engine/api/server/router/container/container_routes.go | 684 | ⚪ INFO | TODO comment found |
| components/engine/api/server/router/grpc/grpc_routes.go | 42 | ⚪ INFO | TODO comment found |
| components/engine/api/server/router/plugin/plugin_routes.go | 196 | ⚪ INFO | TODO comment found |
| components/engine/api/server/router/plugin/plugin_routes.go | 214 | ⚪ INFO | TODO comment found |
| components/engine/api/server/router/system/system_routes.go | 55 | ⚪ INFO | TODO comment found |
| components/engine/api/types/swarm/container.go | 15 | ⚪ INFO | TODO comment found |
| components/engine/builder/builder-next/adapters/containerimage/pull.go | 132 | ⚪ INFO | TODO comment found |
| components/engine/builder/builder-next/adapters/containerimage/pull.go | 440 | ⚪ INFO | TODO comment found |
| components/engine/builder/builder-next/adapters/containerimage/pull.go | 444 | ⚪ INFO | TODO comment found |
| components/engine/builder/builder-next/adapters/containerimage/pull.go | 589 | ⚪ INFO | TODO comment found |
| components/engine/builder/builder-next/adapters/containerimage/pull.go | 818 | ⚪ INFO | TODO comment found |
| components/engine/builder/builder-next/adapters/containerimage/pull.go | 843 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/builder/builder-next/adapters/snapshot/layer.go | 44 | ⚪ INFO | TODO comment found |
| components/engine/builder/builder-next/adapters/snapshot/snapshot.go | 201 | ⚪ INFO | TODO comment found |
| components/engine/builder/builder-next/adapters/snapshot/snapshot.go | 245 | ⚪ INFO | TODO comment found |
| components/engine/builder/builder-next/builder.go | 300 | ⚪ INFO | TODO comment found |
| components/engine/builder/builder-next/exporter/writer.go | 209 | ⚪ INFO | TODO comment found |
| components/engine/builder/builder-next/worker/worker.go | 82 | ⚪ INFO | TODO comment found |
| components/engine/builder/builder-next/worker/worker.go | 491 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/builder.go | 52 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/builder.go | 155 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/builder.go | 320 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/copy.go | 184 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/copy.go | 191 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/copy.go | 243 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/copy.go | 313 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/copy.go | 419 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/copy.go | 424 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/dispatchers.go | 143 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/dispatchers.go | 259 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/dispatchers.go | 386 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/internals.go | 99 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/internals.go | 138 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/internals.go | 165 | ⚪ INFO | TODO comment found |
| components/engine/builder/dockerfile/internals.go | 394 | ⚪ INFO | TODO comment found |
| components/engine/builder/remotecontext/detect.go | 89 | ⚪ INFO | TODO comment found |
| components/engine/builder/remotecontext/detect_test.go | 105 | ⚪ INFO | TODO comment found |
| components/engine/builder/remotecontext/tarsum.go | 138 | ⚪ INFO | TODO comment found |
| components/engine/cli/config/configdir.go | 18 | ⚪ INFO | TODO comment found |
| components/engine/client/plugin_install.go | 39 | ⚪ INFO | TODO comment found |
| components/engine/client/plugin_install.go | 82 | ⚪ INFO | TODO comment found |
| components/engine/cmd/dockerd/daemon.go | 528 | ⚪ INFO | TODO comment found |
| components/engine/container/container_windows.go | 110 | ⚪ INFO | TODO comment found |
| components/engine/daemon/cluster/cluster.go | 122 | ⚪ INFO | TODO comment found |
| components/engine/daemon/cluster/cluster.go | 252 | ⚪ INFO | TODO comment found |
| components/engine/daemon/cluster/cluster.go | 342 | ⚪ INFO | TODO comment found |
| components/engine/daemon/cluster/executor/container/adapter.go | 522 | ⚪ INFO | TODO comment found |
| components/engine/daemon/cluster/executor/container/container.go | 486 | ⚪ INFO | TODO comment found |
| components/engine/daemon/cluster/executor/container/validate.go | 23 | ⚪ INFO | TODO comment found |
| components/engine/daemon/cluster/helpers.go | 22 | ⚪ INFO | TODO comment found |
| components/engine/daemon/cluster/swarm.go | 422 | ⚪ INFO | TODO comment found |
| components/engine/daemon/cluster/utils.go | 39 | ⚪ INFO | TODO comment found |
| components/engine/daemon/config/config.go | 442 | ⚪ INFO | TODO comment found |
| components/engine/daemon/container.go | 153 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/daemon.go | 102 | ⚪ INFO | TODO comment found |
| components/engine/daemon/daemon.go | 103 | ⚪ INFO | TODO comment found |
| components/engine/daemon/daemon.go | 650 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/daemon.go | 971 | ⚪ INFO | TODO comment found |
| components/engine/daemon/daemon.go | 1117 | ⚪ INFO | TODO comment found |
| components/engine/daemon/daemon.go | 1304 | ⚪ INFO | TODO comment found |
| components/engine/daemon/daemon_unix.go | 307 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/errors.go | 164 | ⚪ INFO | TODO comment found |
| components/engine/daemon/exec_linux_test.go | 46 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/graphdriver/copy/copy_test.go | 70 | ⚪ INFO | TODO comment found |
| components/engine/daemon/graphdriver/graphtest/graphbench_unix.go | 180 | ⚪ INFO | TODO comment found |
| components/engine/daemon/graphdriver/overlayutils/randomid.go | 36 | ⚪ INFO | TODO comment found |
| components/engine/daemon/graphdriver/windows/windows.go | 319 | ⚪ INFO | TODO comment found |
| components/engine/daemon/images/image_builder.go | 108 | ⚪ INFO | TODO comment found |
| components/engine/daemon/images/image_builder.go | 146 | ⚪ INFO | TODO comment found |
| components/engine/daemon/images/image_builder.go | 218 | ⚪ INFO | TODO comment found |
| components/engine/daemon/images/image_commit.go | 80 | ⚪ INFO | TODO comment found |
| components/engine/daemon/images/image_commit.go | 115 | ⚪ INFO | TODO comment found |
| components/engine/daemon/images/image_import.go | 128 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/images/image_inspect.go | 83 | ⚪ INFO | TODO comment found |
| components/engine/daemon/images/image_search.go | 22 | ⚪ INFO | TODO comment found |
| components/engine/daemon/images/image_unix.go | 30 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/images/image_windows.go | 21 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/images/locals.go | 29 | ⚪ INFO | TODO comment found |
| components/engine/daemon/images/service.go | 33 | ⚪ INFO | TODO comment found |
| components/engine/daemon/images/service.go | 124 | ⚪ INFO | TODO comment found |
| components/engine/daemon/images/service.go | 131 | ⚪ INFO | TODO comment found |
| components/engine/daemon/images/service.go | 167 | ⚪ INFO | TODO comment found |
| components/engine/daemon/listeners/listeners_linux.go | 17 | ⚪ INFO | TODO comment found |
| components/engine/daemon/logger/loggerutils/logfile.go | 354 | ⚪ INFO | TODO comment found |
| components/engine/daemon/nvidia_linux.go | 15 | ⚪ INFO | TODO comment found |
| components/engine/daemon/nvidia_linux.go | 16 | ⚪ INFO | TODO comment found |
| components/engine/daemon/nvidia_linux.go | 70 | ⚪ INFO | TODO comment found |
| components/engine/daemon/oci_linux.go | 691 | ⚪ INFO | TODO comment found |
| components/engine/daemon/prune.go | 77 | ⚪ INFO | TODO comment found |
| components/engine/daemon/resize.go | 42 | ⚪ INFO | TODO comment found |
| components/engine/daemon/resize_test.go | 80 | ⚪ INFO | TODO comment found |
| components/engine/daemon/start.go | 236 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/stats/collector.go | 129 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/top_unix_test.go | 22 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/trustkey.go | 17 | ⚪ INFO | TODO comment found |
| components/engine/daemon/update.go | 84 | ⚪ INFO | TODO comment found |
| components/engine/daemon/volumes_unix.go | 25 | ⚪ INFO | TODO comment found |
| components/engine/distribution/metadata/v2_metadata_service.go | 164 | ⚪ INFO | TODO comment found |
| components/engine/distribution/metadata/v2_metadata_service.go | 211 | ⚪ INFO | TODO comment found |
| components/engine/distribution/pull_v2.go | 429 | ⚪ INFO | TODO comment found |
| components/engine/distribution/pull_v2_windows.go | 108 | ⚪ INFO | TODO comment found |
| components/engine/distribution/pull_v2_windows.go | 109 | ⚪ INFO | TODO comment found |
| components/engine/distribution/push.go | 53 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/image/cache/cache.go | 176 | ⚪ INFO | TODO comment found |
| components/engine/image/fs.go | 102 | ⚪ INFO | TODO comment found |
| components/engine/image/image.go | 235 | ⚪ INFO | TODO comment found |
| components/engine/image/store.go | 203 | ⚪ INFO | TODO comment found |
| components/engine/image/store.go | 204 | ⚪ INFO | TODO comment found |
| components/engine/image/store.go | 277 | ⚪ INFO | TODO comment found |
| components/engine/image/tarexport/load.go | 207 | ⚪ INFO | TODO comment found |
| components/engine/image/tarexport/load.go | 314 | ⚪ INFO | TODO comment found |
| components/engine/image/tarexport/save.go | 354 | ⚪ INFO | TODO comment found |
| components/engine/image/tarexport/save.go | 405 | ⚪ INFO | TODO comment found |
| components/engine/image/v1/imagev1.go | 52 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/integration/container/checkpoint_test.go | 66 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/integration/container/rename_test.go | 170 | ⚪ INFO | TODO comment found |
| components/engine/integration/daemon/daemon_test.go | 326 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/integration/plugin/common/plugin_test.go | 166 | ⚪ INFO | TODO comment found |
| components/engine/integration/service/inspect_test.go | 56 | ⚪ INFO | TODO comment found |
| components/engine/integration/system/disk_usage_test.go | 265 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/cli/cli.go | 19 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/docker_api_containers_test.go | 664 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/docker_api_swarm_test.go | 39 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/docker_api_swarm_test.go | 88 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/docker_api_test.go | 29 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/docker_cli_attach_test.go | 92 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/docker_cli_build_test.go | 5939 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/docker_cli_cp_from_container_test.go | 23 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/docker_cli_create_test.go | 314 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/docker_cli_daemon_test.go | 560 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/docker_cli_ps_test.go | 548 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/docker_cli_push_test.go | 271 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/docker_cli_run_test.go | 1140 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/utils_test.go | 23 | ⚪ INFO | TODO comment found |
| components/engine/integration-cli/utils_test.go | 58 | ⚪ INFO | TODO comment found |
| components/engine/libcontainerd/remote/client_windows.go | 41 | ⚪ INFO | TODO comment found |
| components/engine/libcontainerd/remote/client_windows.go | 91 | ⚪ INFO | TODO comment found |
| components/engine/libcontainerd/remote/client_windows.go | 96 | ⚪ INFO | TODO comment found |
| components/engine/libnetwork/bitseq/sequence.go | 704 | ⚪ INFO | TODO comment found |
| components/engine/libnetwork/drivers/bridge/network_test.go | 67 | ⚪ INFO | TODO comment found |
| components/engine/libnetwork/drivers/windows/overlay/ov_endpoint_windows.go | 133 | ⚪ INFO | TODO comment found |
| components/engine/libnetwork/network.go | 864 | ⚪ INFO | TODO comment found |
| components/engine/libnetwork/osl/sandbox.go | 149 | ⚪ INFO | TODO comment found |
| components/engine/libnetwork/service_linux.go | 51 | ⚪ INFO | TODO comment found |
| components/engine/pkg/archive/archive.go | 1125 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/pkg/archive/utils_test.go | 130 | ⚪ INFO | TODO comment found |
| components/engine/pkg/archive/wrap.go | 23 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/pkg/archive/wrap.go | 24 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/pkg/authorization/middleware.go | 66 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/pkg/devicemapper/devmapper_wrapper.go | 9 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/pkg/devicemapper/devmapper_wrapper.go | 11 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/pkg/idtools/idtools.go | 166 | ⚪ INFO | TODO comment found |
| components/engine/pkg/idtools/idtools.go | 172 | ⚪ INFO | TODO comment found |
| components/engine/pkg/parsers/operatingsystem/operatingsystem_unix.go | 31 | ⚪ INFO | TODO comment found |
| components/engine/pkg/plugins/plugins.go | 110 | ⚪ INFO | TODO comment found |
| components/engine/pkg/progress/progress.go | 42 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/pkg/system/syscall_windows.go | 28 | ⚪ INFO | TODO comment found |
| components/engine/plugin/backend_linux.go | 208 | ⚪ INFO | TODO comment found |
| components/engine/plugin/backend_linux.go | 256 | ⚪ INFO | TODO comment found |
| components/engine/plugin/backend_linux.go | 300 | ⚪ INFO | TODO comment found |
| components/engine/plugin/backend_linux.go | 398 | ⚪ INFO | TODO comment found |
| components/engine/plugin/backend_linux.go | 451 | ⚪ INFO | TODO comment found |
| components/engine/plugin/backend_linux.go | 494 | ⚪ INFO | TODO comment found |
| components/engine/plugin/backend_linux.go | 733 | ⚪ INFO | TODO comment found |
| components/engine/plugin/fetch_linux.go | 244 | ⚪ INFO | TODO comment found |
| components/engine/plugin/manager.go | 57 | ⚪ INFO | TODO comment found |
| components/engine/plugin/manager.go | 179 | ⚪ INFO | TODO comment found |
| components/engine/plugin/manager_linux.go | 302 | ⚪ INFO | TODO comment found |
| components/engine/plugin/manager_linux.go | 345 | ⚪ INFO | TODO comment found |
| components/engine/plugin/v2/plugin.go | 21 | ⚪ INFO | TODO comment found |
| components/engine/plugin/v2/plugin.go | 24 | ⚪ INFO | TODO comment found |
| components/engine/plugin/v2/plugin_linux.go | 22 | ⚪ INFO | TODO comment found |
| components/engine/plugin/v2/plugin_linux.go | 54 | ⚪ INFO | TODO comment found |
| components/engine/profiles/apparmor/template.go | 10 | ⚪ INFO | TODO comment found |
| components/engine/profiles/seccomp/seccomp_test.go | 217 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/quota/projectquota.go | 9 | ⚪ INFO | TODO comment found |
| components/engine/quota/projectquota_test.go | 59 | ⚪ INFO | TODO comment found |
| components/engine/registry/config.go | 153 | ⚪ INFO | TODO comment found |
| components/engine/registry/config.go | 325 | ⚪ INFO | TODO comment found |
| components/engine/registry/endpoint_v1.go | 25 | ⚪ INFO | TODO comment found |
| components/engine/testutil/environment/environment.go | 145 | ⚪ INFO | TODO comment found |
| components/engine/testutil/fakestorage/storage.go | 36 | ⚪ INFO | TODO comment found |
| components/engine/testutil/fixtures/load/frozen.go | 24 | ⚪ INFO | TODO comment found |
| components/engine/testutil/request/request.go | 138 | ⚪ INFO | TODO comment found |
| components/engine/volume/service/store.go | 593 | ⚪ INFO | TODO comment found |

## Detailed Findings

### MAINTENANCE

**Total:** 218 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| components/cli/cli/command/formatter/reflect.go | 58 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/cli/cli/config/config.go | 112 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/builder/builder-next/adapters/containerimage/pull.go | 843 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/container.go | 153 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/daemon.go | 650 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/daemon_unix.go | 307 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/exec_linux_test.go | 46 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/images/image_import.go | 128 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/images/image_unix.go | 30 | 🟡 MEDIUM | FIXME comment indicating known issue |
| components/engine/daemon/images/image_windows.go | 21 | 🟡 MEDIUM | FIXME comment indicating known issue |

*... and 208 more*

### SECURITY

**Total:** 45 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| components/cli/cli/command/registry/login_test.go | 26 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/registry/login_test.go | 85 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/registry/login_test.go | 86 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/registry_test.go | 31 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/registry_test.go | 32 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/registry_test.go | 36 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/registry_test.go | 37 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/command/trust/sign_test.go | 26 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/config_test.go | 243 | 🟠 HIGH | Hardcoded username/password detected |
| components/cli/cli/config/config_test.go | 244 | 🟠 HIGH | Hardcoded username/password detected |

*... and 35 more*

### CODE_QUALITY

**Total:** 3 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| components/engine/libnetwork/cmd/ssd/ssd.py | 163 | 🟢 LOW | Debug print statement found |
| components/engine/libnetwork/cmd/ssd/ssd.py | 165 | 🟢 LOW | Debug print statement found |
| components/engine/libnetwork/cmd/ssd/ssd.py | 184 | 🟢 LOW | Debug print statement found |

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 76/100 (Tier B)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -660 | Fair ⚠️ |
| Code Quality | -133 | Needs improvement ⚠️ |
| Test Coverage | +1 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 44 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 10.7%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

