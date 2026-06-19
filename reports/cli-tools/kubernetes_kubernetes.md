# Repository Analysis Report: kubernetes/kubernetes

**Generated:** 2026-06-19 09:02:08 CDT

**Quality Score:** 78/100 (Tier B)

## Executive Summary

- **Overall Quality:** B (78/100)
- **Total Findings:** 1257
- **Critical Issues:** 0
- **High Issues:** 203
- **Medium Issues:** 10
- **Low Issues:** 10
- **Files Scanned:** 30541

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 10 | Medium |
| maintenance | 1044 | Medium |
| security | 203 | High |

## Repository Overview

- **Owner:** kubernetes
- **Name:** kubernetes
- **Description:** Production-Grade Container Scheduling and Management
- **Primary Language:** Go
- **Stars:** 123130
- **Forks:** 43248
- **Open Issues:** 2761
- **Size:** 1480873 KB
- **Created:** 2014-06-06
- **Last Updated:** 2026-06-19
- **Default Branch:** master

**Topics:** cncf, containers, go, kubernetes

## Security Analysis

⚠️ **Found 203 security-related findings.**

### ⚠️ High Severity Issues (203)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| cmd/kube-scheduler/app/options/options_test.go | 330 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kube-scheduler/app/options/options_test.go | 437 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kube-scheduler/app/options/options_test.go | 555 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kube-scheduler/app/options/options_test.go | 687 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kube-scheduler/app/options/options_test.go | 842 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kubeadm/app/util/config/cluster_test.go | 837 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kubeadm/app/util/kubeconfig/kubeconfig_test.go | 128 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kubeadm/app/util/kubeconfig/kubeconfig_test.go | 129 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kubeadm/app/util/kubeconfig/kubeconfig_test.go | 273 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/apis/certificates/v1beta1/defaults_test.go | 290 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 71 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 72 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 76 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 77 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 100 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 101 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 105 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 106 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 133 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 134 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 144 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 145 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 156 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 157 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 209 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 210 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 216 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 217 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 223 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 224 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 230 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 231 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 237 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 238 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 244 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 245 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 293 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 294 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 325 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 326 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 369 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 370 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 374 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/config_test.go | 375 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/keyring_test.go | 508 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/keyring_test.go | 509 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/keyring_test.go | 515 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/keyring_test.go | 516 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/keyring_test.go | 579 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 95 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 222 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 223 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 232 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 233 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 249 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 250 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 259 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 260 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 276 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 277 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 286 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 287 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 303 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 304 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 313 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 314 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 330 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 331 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 340 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 341 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 357 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 358 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 367 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 368 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 473 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 474 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 523 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 524 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 561 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 562 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 643 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 644 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 653 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 654 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 704 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 705 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 713 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 714 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 730 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 731 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 750 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 751 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 848 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 849 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 857 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 858 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 874 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 875 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 894 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 895 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1029 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1030 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1046 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1047 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1063 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1064 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1119 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1120 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1129 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1130 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1622 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1623 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1689 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugin_test.go | 1690 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugins_test.go | 143 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugins_test.go | 144 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugins_test.go | 327 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugins_test.go | 328 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugins_test.go | 345 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugins_test.go | 346 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugins_test.go | 367 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugins_test.go | 368 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugins_test.go | 380 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugins_test.go | 381 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugins_test.go | 459 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/plugin/plugins_test.go | 460 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/secrets/secrets_test.go | 74 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/secrets/secrets_test.go | 75 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/secrets/secrets_test.go | 102 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/secrets/secrets_test.go | 103 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/secrets/secrets_test.go | 130 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/secrets/secrets_test.go | 131 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/secrets/secrets_test.go | 158 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/secrets/secrets_test.go | 159 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/secrets/secrets_test.go | 321 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/credentialprovider/secrets/secrets_test.go | 322 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/images/image_manager_test.go | 1519 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/images/image_manager_test.go | 1520 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/images/image_manager_test.go | 1606 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/images/image_manager_test.go | 1607 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/kuberuntime/helpers_test.go | 329 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/kuberuntime/helpers_test.go | 333 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/kuberuntime/helpers_test.go | 344 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/kuberuntime/kuberuntime_container_linux_test.go | 161 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/kuberuntime/kuberuntime_container_windows_test.go | 102 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/kuberuntime/kuberuntime_image_test.go | 319 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/kuberuntime/kuberuntime_image_test.go | 321 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/kuberuntime/kuberuntime_image_test.go | 327 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/kuberuntime/kuberuntime_image_test.go | 335 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/kuberuntime/kuberuntime_image_test.go | 343 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/kuberuntime/kuberuntime_sandbox_test.go | 280 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/kuberuntime/security_context_others_test.go | 128 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/kuberuntime/security_context_windows.go | 33 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/kubelet/server/auth_test.go | 91 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/registry/certificates/certificates/strategy_test.go | 60 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/registry/certificates/certificates/strategy_test.go | 72 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/registry/certificates/certificates/strategy_test.go | 91 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/registry/certificates/certificates/strategy_test.go | 98 | 🟠 HIGH | Hardcoded username/password detected |
| plugin/pkg/admission/gc/gc_admission_test.go | 206 | 🟠 HIGH | Hardcoded username/password detected |
| plugin/pkg/admission/gc/gc_admission_test.go | 213 | 🟠 HIGH | Hardcoded username/password detected |
| plugin/pkg/admission/gc/gc_admission_test.go | 256 | 🟠 HIGH | Hardcoded username/password detected |
| plugin/pkg/admission/gc/gc_admission_test.go | 264 | 🟠 HIGH | Hardcoded username/password detected |
| plugin/pkg/admission/gc/gc_admission_test.go | 272 | 🟠 HIGH | Hardcoded username/password detected |
| plugin/pkg/admission/gc/gc_admission_test.go | 477 | 🟠 HIGH | Hardcoded username/password detected |
| plugin/pkg/admission/gc/gc_admission_test.go | 484 | 🟠 HIGH | Hardcoded username/password detected |
| plugin/pkg/admission/gc/gc_admission_test.go | 491 | 🟠 HIGH | Hardcoded username/password detected |
| plugin/pkg/admission/gc/gc_admission_test.go | 498 | 🟠 HIGH | Hardcoded username/password detected |
| plugin/pkg/admission/gc/gc_admission_test.go | 549 | 🟠 HIGH | Hardcoded username/password detected |
| plugin/pkg/admission/gc/gc_admission_test.go | 557 | 🟠 HIGH | Hardcoded username/password detected |
| plugin/pkg/admission/gc/gc_admission_test.go | 565 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/webhook/request/admissionreview_test.go | 531 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/webhook/request/admissionreview_test.go | 574 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/pkg/authentication/request/bearertoken/bearertoken_test.go | 194 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/pkg/authentication/request/websocket/protocol_test.go | 194 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/pkg/authentication/serviceaccount/util_test.go | 158 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/pkg/endpoints/filters/metrics_test.go | 60 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/pkg/endpoints/filters/metrics_test.go | 107 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/pkg/endpoints/filters/metrics_test.go | 123 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/pkg/server/filters/priority-and-fairness_test.go | 700 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/pkg/server/filters/priority-and-fairness_test.go | 774 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/pkg/server/filters/priority-and-fairness_test.go | 847 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/pkg/server/filters/priority-and-fairness_test.go | 926 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/pkg/server/filters/priority-and-fairness_test.go | 1004 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/audit/log/backend_test.go | 68 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/audit/log/backend_test.go | 127 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1_test.go | 349 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1_test.go | 381 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1_test.go | 404 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1_test.go | 420 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1_test.go | 446 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1_test.go | 458 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1_test.go | 473 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1_test.go | 489 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1beta1_test.go | 346 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1beta1_test.go | 378 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1beta1_test.go | 401 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1beta1_test.go | 417 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1beta1_test.go | 443 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1beta1_test.go | 455 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1beta1_test.go | 470 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/webhook/webhook_v1beta1_test.go | 486 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/cli-runtime/pkg/genericclioptions/config_flags.go | 57 | 🟠 HIGH | Hardcoded username/password detected |
| staging/src/k8s.io/cli-runtime/pkg/genericclioptions/config_flags.go | 58 | 🟠 HIGH | Hardcoded username/password detected |

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 20.4% | Poor ❌ |
| Documentation | 0.3% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (10)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| hack/boilerplate/boilerplate.py | 70 | 🟢 LOW | Debug print statement found |
| hack/boilerplate/boilerplate.py | 97 | 🟢 LOW | Debug print statement found |
| hack/boilerplate/boilerplate.py | 116 | 🟢 LOW | Debug print statement found |
| hack/boilerplate/boilerplate.py | 118 | 🟢 LOW | Debug print statement found |
| hack/boilerplate/boilerplate.py | 122 | 🟢 LOW | Debug print statement found |
| hack/boilerplate/boilerplate.py | 123 | 🟢 LOW | Debug print statement found |
| hack/boilerplate/boilerplate.py | 223 | 🟢 LOW | Debug print statement found |
| hack/verify-flags-underscore.py | 102 | 🟢 LOW | Debug print statement found |
| hack/verify-flags-underscore.py | 103 | 🟢 LOW | Debug print statement found |
| hack/verify-flags-underscore.py | 106 | 🟢 LOW | Debug print statement found |

### Maintenance Items (1044)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| cmd/fieldnamedocscheck/field_name_docs_check.go | 88 | ⚪ INFO | TODO comment found |
| cmd/kube-apiserver/app/options/options.go | 114 | ⚪ INFO | TODO comment found |
| cmd/kube-apiserver/app/options/validation.go | 34 | ⚪ INFO | TODO comment found |
| cmd/kube-apiserver/app/options/validation.go | 116 | ⚪ INFO | TODO comment found |
| cmd/kube-controller-manager/app/controllermanager.go | 258 | ⚪ INFO | TODO comment found |
| cmd/kube-controller-manager/app/controllermanager.go | 839 | ⚪ INFO | TODO comment found |
| cmd/kube-controller-manager/app/import_known_versions.go | 18 | ⚪ INFO | TODO comment found |
| cmd/kube-controller-manager/app/options/options.go | 478 | ⚪ INFO | TODO comment found |
| cmd/kube-proxy/app/server.go | 534 | ⚪ INFO | TODO comment found |
| cmd/kube-scheduler/app/options/deprecated.go | 52 | ⚪ INFO | TODO comment found |
| cmd/kube-scheduler/app/server.go | 380 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/apis/bootstraptoken/v1/utils.go | 127 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/apis/kubeadm/types.go | 215 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/apis/kubeadm/v1/doc.go | 25 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/apis/kubeadm/v1/types.go | 228 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/apis/kubeadm/v1beta4/types.go | 228 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/apis/kubeadm/validation/validation.go | 143 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/apis/kubeadm/validation/validation_test.go | 498 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/cmd/config.go | 223 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/cmd/options/generic.go | 57 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/cmd/options/token.go | 40 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/cmd/phases/init/kubelet.go | 74 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/cmd/phases/init/waitcontrolplane.go | 54 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/cmd/phases/join/kubelet.go | 221 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/cmd/phases/workflow/runner.go | 80 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/cmd/upgrade/apply_test.go | 111 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/componentconfigs/configset.go | 285 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/componentconfigs/kubeproxy.go | 138 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/constants/constants.go | 259 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/constants/constants.go | 383 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/constants/constants.go | 430 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/constants/constants.go | 536 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/constants/constants.go | 545 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/phases/addons/proxy/proxy_test.go | 132 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/phases/certs/certlist.go | 380 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/phases/controlplane/volumes.go | 51 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/phases/controlplane/volumes.go | 64 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/preflight/checks.go | 137 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/preflight/checks.go | 740 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/preflight/checks.go | 994 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/util/apiclient/wait.go | 46 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/util/config/cluster.go | 237 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/util/etcd/etcd.go | 626 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/util/marshal.go | 43 | ⚪ INFO | TODO comment found |
| cmd/kubeadm/app/util/marshal.go | 44 | ⚪ INFO | TODO comment found |
| cmd/kubelet/app/auth.go | 106 | ⚪ INFO | TODO comment found |
| cmd/kubelet/app/server.go | 342 | ⚪ INFO | TODO comment found |
| cmd/kubelet/app/server.go | 372 | ⚪ INFO | TODO comment found |
| cmd/kubelet/app/server.go | 1319 | ⚪ INFO | TODO comment found |
| cmd/kubelet/app/server_others.go | 31 | ⚪ INFO | TODO comment found |
| hack/tools/instrumentation/main.go | 373 | ⚪ INFO | TODO comment found |
| pkg/api/pod/util_test.go | 1612 | ⚪ INFO | TODO comment found |
| pkg/api/testing/defaulting_test.go | 46 | ⚪ INFO | TODO comment found |
| pkg/api/testing/fuzzer.go | 55 | ⚪ INFO | TODO comment found |
| pkg/api/testing/serialization_test.go | 204 | ⚪ INFO | TODO comment found |
| pkg/api/testing/validation_test.go | 32 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/api/testing/validation_test.go | 77 | ⚪ INFO | TODO comment found |
| pkg/apis/abac/latest/latest.go | 26 | ⚪ INFO | TODO comment found |
| pkg/apis/abac/register.go | 32 | ⚪ INFO | TODO comment found |
| pkg/apis/abac/register.go | 39 | ⚪ INFO | TODO comment found |
| pkg/apis/abac/types.go | 66 | ⚪ INFO | TODO comment found |
| pkg/apis/abac/types.go | 68 | ⚪ INFO | TODO comment found |
| pkg/apis/abac/types.go | 71 | ⚪ INFO | TODO comment found |
| pkg/apis/abac/v0/register.go | 33 | ⚪ INFO | TODO comment found |
| pkg/apis/abac/v0/register.go | 41 | ⚪ INFO | TODO comment found |
| pkg/apis/abac/v1beta1/register.go | 33 | ⚪ INFO | TODO comment found |
| pkg/apis/abac/v1beta1/register.go | 41 | ⚪ INFO | TODO comment found |
| pkg/apis/admissionregistration/v1beta1/defaults.go | 73 | ⚪ INFO | TODO comment found |
| pkg/apis/admissionregistration/v1beta1/defaults.go | 106 | ⚪ INFO | TODO comment found |
| pkg/apis/admissionregistration/validation/validation_test.go | 3408 | ⚪ INFO | TODO comment found |
| pkg/apis/apps/types.go | 170 | ⚪ INFO | TODO comment found |
| pkg/apis/apps/types.go | 195 | ⚪ INFO | TODO comment found |
| pkg/apis/apps/types.go | 297 | ⚪ INFO | TODO comment found |
| pkg/apis/apps/types.go | 465 | ⚪ INFO | TODO comment found |
| pkg/apis/apps/types.go | 610 | ⚪ INFO | TODO comment found |
| pkg/apis/apps/types.go | 762 | ⚪ INFO | TODO comment found |
| pkg/apis/apps/v1/conversion.go | 45 | ⚪ INFO | TODO comment found |
| pkg/apis/apps/v1/conversion.go | 70 | ⚪ INFO | TODO comment found |
| pkg/apis/apps/v1beta2/conversion.go | 103 | ⚪ INFO | TODO comment found |
| pkg/apis/apps/v1beta2/conversion.go | 127 | ⚪ INFO | TODO comment found |
| pkg/apis/apps/validation/validation.go | 51 | ⚪ INFO | TODO comment found |
| pkg/apis/apps/validation/validation.go | 305 | ⚪ INFO | TODO comment found |
| pkg/apis/autoscaling/v1/conversion.go | 353 | ⚪ INFO | TODO comment found |
| pkg/apis/autoscaling/v1/conversion.go | 406 | ⚪ INFO | TODO comment found |
| pkg/apis/batch/validation/validation.go | 99 | ⚪ INFO | TODO comment found |
| pkg/apis/core/fuzzer/fuzzer.go | 141 | ⚪ INFO | TODO comment found |
| pkg/apis/core/helper/helpers.go | 97 | ⚪ INFO | TODO comment found |
| pkg/apis/core/objectreference.go | 17 | ⚪ INFO | TODO comment found |
| pkg/apis/core/taint.go | 17 | ⚪ INFO | TODO comment found |
| pkg/apis/core/toleration.go | 17 | ⚪ INFO | TODO comment found |
| pkg/apis/core/toleration.go | 24 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 874 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 927 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 961 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 1009 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 1050 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 1127 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 1160 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 1311 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 1342 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 3956 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 4253 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 6098 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 6216 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 6223 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 6275 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 6287 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 6292 | ⚪ INFO | TODO comment found |
| pkg/apis/core/types.go | 6694 | ⚪ INFO | TODO comment found |
| pkg/apis/core/v1/defaults.go | 55 | ⚪ INFO | TODO comment found |
| pkg/apis/core/v1/register.go | 36 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 425 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 1095 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 2555 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 2562 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 3885 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 4275 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 4283 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 4928 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 5204 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 5223 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 5239 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 5597 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 5847 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 6433 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 6596 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 6647 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 6651 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 7357 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 7364 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation.go | 8387 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation_test.go | 10734 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation_test.go | 10779 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation_test.go | 10812 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation_test.go | 10864 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation_test.go | 23282 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation_test.go | 25259 | ⚪ INFO | TODO comment found |
| pkg/apis/core/validation/validation_test.go | 25389 | ⚪ INFO | TODO comment found |
| pkg/apis/extensions/v1beta1/defaults.go | 36 | ⚪ INFO | TODO comment found |
| pkg/apis/extensions/v1beta1/defaults.go | 128 | ⚪ INFO | TODO comment found |
| pkg/apis/networking/fuzzer/fuzzer.go | 34 | ⚪ INFO | TODO comment found |
| pkg/apis/networking/fuzzer/fuzzer.go | 45 | ⚪ INFO | TODO comment found |
| pkg/apis/networking/types.go | 391 | ⚪ INFO | TODO comment found |
| pkg/apis/networking/types.go | 484 | ⚪ INFO | TODO comment found |
| pkg/apis/networking/types.go | 503 | ⚪ INFO | TODO comment found |
| pkg/apis/networking/validation/validation.go | 332 | ⚪ INFO | TODO comment found |
| pkg/apis/networking/validation/validation.go | 428 | ⚪ INFO | TODO comment found |
| pkg/apis/resource/v1/defaults.go | 59 | ⚪ INFO | TODO comment found |
| pkg/apis/resource/v1/register.go | 36 | ⚪ INFO | TODO comment found |
| pkg/apis/resource/v1alpha3/register.go | 36 | ⚪ INFO | TODO comment found |
| pkg/apis/resource/v1beta1/defaults.go | 69 | ⚪ INFO | TODO comment found |
| pkg/apis/resource/v1beta1/register.go | 36 | ⚪ INFO | TODO comment found |
| pkg/apis/resource/v1beta2/defaults.go | 59 | ⚪ INFO | TODO comment found |
| pkg/apis/resource/v1beta2/register.go | 36 | ⚪ INFO | TODO comment found |
| pkg/apis/resource/validation/validation.go | 1225 | ⚪ INFO | TODO comment found |
| pkg/apis/storage/util/helpers.go | 26 | ⚪ INFO | TODO comment found |
| pkg/apis/storage/util/helpers.go | 31 | ⚪ INFO | TODO comment found |
| pkg/auth/authorizer/abac/abac.go | 61 | ⚪ INFO | TODO comment found |
| pkg/auth/authorizer/abac/abac.go | 183 | ⚪ INFO | TODO comment found |
| pkg/auth/authorizer/abac/abac.go | 239 | ⚪ INFO | TODO comment found |
| pkg/controller/certificates/signer/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/controller_ref_manager.go | 257 | ⚪ INFO | TODO comment found |
| pkg/controller/controller_utils.go | 222 | ⚪ INFO | TODO comment found |
| pkg/controller/controller_utils.go | 223 | ⚪ INFO | TODO comment found |
| pkg/controller/controller_utils.go | 224 | ⚪ INFO | TODO comment found |
| pkg/controller/controller_utils.go | 290 | ⚪ INFO | TODO comment found |
| pkg/controller/controller_utils.go | 339 | ⚪ INFO | TODO comment found |
| pkg/controller/controller_utils.go | 342 | ⚪ INFO | TODO comment found |
| pkg/controller/controller_utils.go | 448 | ⚪ INFO | TODO comment found |
| pkg/controller/controller_utils.go | 722 | ⚪ INFO | TODO comment found |
| pkg/controller/controller_utils.go | 764 | ⚪ INFO | TODO comment found |
| pkg/controller/controller_utils.go | 875 | ⚪ INFO | TODO comment found |
| pkg/controller/cronjob/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/cronjob/cronjob_controllerv2.go | 437 | ⚪ INFO | TODO comment found |
| pkg/controller/cronjob/cronjob_controllerv2.go | 574 | ⚪ INFO | TODO comment found |
| pkg/controller/cronjob/cronjob_controllerv2.go | 600 | ⚪ INFO | TODO comment found |
| pkg/controller/cronjob/cronjob_controllerv2_test.go | 1636 | ⚪ INFO | TODO comment found |
| pkg/controller/cronjob/injection.go | 87 | ⚪ INFO | TODO comment found |
| pkg/controller/cronjob/utils.go | 83 | ⚪ INFO | TODO comment found |
| pkg/controller/daemon/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/daemon/daemon_controller.go | 303 | ⚪ INFO | TODO comment found |
| pkg/controller/daemon/daemon_controller.go | 424 | ⚪ INFO | TODO comment found |
| pkg/controller/daemon/daemon_controller.go | 435 | ⚪ INFO | TODO comment found |
| pkg/controller/daemon/update.go | 544 | ⚪ INFO | TODO comment found |
| pkg/controller/daemon/update_test.go | 671 | ⚪ INFO | TODO comment found |
| pkg/controller/daemon/util/daemonset_util.go | 118 | ⚪ INFO | TODO comment found |
| pkg/controller/deployment/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/deployment/sync.go | 278 | ⚪ INFO | TODO comment found |
| pkg/controller/deployment/sync.go | 504 | ⚪ INFO | TODO comment found |
| pkg/controller/deployment/util/deployment_util.go | 555 | ⚪ INFO | TODO comment found |
| pkg/controller/devicetainteviction/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/devicetainteviction/device_taint_eviction.go | 1416 | ⚪ INFO | TODO comment found |
| pkg/controller/devicetainteviction/device_taint_eviction.go | 1682 | ⚪ INFO | TODO comment found |
| pkg/controller/disruption/disruption_test.go | 829 | ⚪ INFO | TODO comment found |
| pkg/controller/endpoint/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/endpoint/endpoints_controller.go | 366 | ⚪ INFO | TODO comment found |
| pkg/controller/endpointslice/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/garbagecollector/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/garbagecollector/garbagecollector.go | 407 | ⚪ INFO | TODO comment found |
| pkg/controller/garbagecollector/garbagecollector.go | 431 | ⚪ INFO | TODO comment found |
| pkg/controller/garbagecollector/garbagecollector.go | 518 | ⚪ INFO | TODO comment found |
| pkg/controller/garbagecollector/garbagecollector.go | 544 | ⚪ INFO | TODO comment found |
| pkg/controller/garbagecollector/graph_builder.go | 201 | ⚪ INFO | TODO comment found |
| pkg/controller/garbagecollector/graph_builder.go | 567 | ⚪ INFO | TODO comment found |
| pkg/controller/garbagecollector/metaonly/types.go | 25 | ⚪ INFO | TODO comment found |
| pkg/controller/garbagecollector/metaonly/types.go | 37 | ⚪ INFO | TODO comment found |
| pkg/controller/job/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/job/job_controller.go | 710 | ⚪ INFO | TODO comment found |
| pkg/controller/job/job_controller_test.go | 1329 | ⚪ INFO | TODO comment found |
| pkg/controller/job/job_controller_test.go | 2489 | ⚪ INFO | TODO comment found |
| pkg/controller/job/job_controller_test.go | 2755 | ⚪ INFO | TODO comment found |
| pkg/controller/job/job_controller_test.go | 3088 | ⚪ INFO | TODO comment found |
| pkg/controller/job/job_controller_test.go | 4237 | ⚪ INFO | TODO comment found |
| pkg/controller/job/job_controller_test.go | 5086 | ⚪ INFO | TODO comment found |
| pkg/controller/job/job_controller_test.go | 5764 | ⚪ INFO | TODO comment found |
| pkg/controller/job/job_controller_test.go | 7225 | ⚪ INFO | TODO comment found |
| pkg/controller/job/job_controller_test.go | 8009 | ⚪ INFO | TODO comment found |
| pkg/controller/namespace/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/namespace/deletion/namespaced_resources_deleter.go | 330 | ⚪ INFO | TODO comment found |
| pkg/controller/namespace/deletion/namespaced_resources_deleter.go | 365 | ⚪ INFO | TODO comment found |
| pkg/controller/nodeipam/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/nodeipam/ipam/cidr_allocator.go | 56 | ⚪ INFO | TODO comment found |
| pkg/controller/nodeipam/ipam/cidrset/cidr_set.go | 57 | ⚪ INFO | TODO comment found |
| pkg/controller/nodeipam/ipam/range_allocator.go | 274 | ⚪ INFO | TODO comment found |
| pkg/controller/nodeipam/node_ipam_controller.go | 105 | ⚪ INFO | TODO comment found |
| pkg/controller/nodelifecycle/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/nodelifecycle/node_lifecycle_controller.go | 270 | ⚪ INFO | TODO comment found |
| pkg/controller/nodelifecycle/node_lifecycle_controller.go | 529 | ⚪ INFO | TODO comment found |
| pkg/controller/nodelifecycle/node_lifecycle_controller.go | 898 | ⚪ INFO | TODO comment found |
| pkg/controller/nodelifecycle/node_lifecycle_controller.go | 925 | ⚪ INFO | TODO comment found |
| pkg/controller/nodelifecycle/node_lifecycle_controller_test.go | 2484 | ⚪ INFO | TODO comment found |
| pkg/controller/nodelifecycle/node_lifecycle_controller_test.go | 2723 | ⚪ INFO | TODO comment found |
| pkg/controller/nodelifecycle/node_lifecycle_controller_test.go | 2907 | ⚪ INFO | TODO comment found |
| pkg/controller/nodelifecycle/scheduler/rate_limited_queue.go | 297 | ⚪ INFO | TODO comment found |
| pkg/controller/podautoscaler/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/podautoscaler/horizontal.go | 327 | ⚪ INFO | TODO comment found |
| pkg/controller/podautoscaler/horizontal_test.go | 423 | ⚪ INFO | TODO comment found |
| pkg/controller/podautoscaler/horizontal_test.go | 790 | ⚪ INFO | TODO comment found |
| pkg/controller/podautoscaler/horizontal_test.go | 3171 | ⚪ INFO | TODO comment found |
| pkg/controller/podautoscaler/horizontal_test.go | 3206 | ⚪ INFO | TODO comment found |
| pkg/controller/podautoscaler/horizontal_test.go | 4064 | ⚪ INFO | TODO comment found |
| pkg/controller/podautoscaler/replica_calculator_test.go | 652 | ⚪ INFO | TODO comment found |
| pkg/controller/podautoscaler/replica_calculator_test.go | 809 | ⚪ INFO | TODO comment found |
| pkg/controller/podgc/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/replicaset/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/replicaset/replica_set.go | 398 | ⚪ INFO | TODO comment found |
| pkg/controller/replicaset/replica_set.go | 548 | ⚪ INFO | TODO comment found |
| pkg/controller/replicaset/replica_set.go | 662 | ⚪ INFO | TODO comment found |
| pkg/controller/replicaset/replica_set_test.go | 940 | ⚪ INFO | TODO comment found |
| pkg/controller/replicaset/replica_set_utils.go | 57 | ⚪ INFO | TODO comment found |
| pkg/controller/replication/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/replication/replication_controller.go | 72 | ⚪ INFO | TODO comment found |
| pkg/controller/resourceclaim/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/resourcequota/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/resourcequota/resource_quota_controller.go | 446 | ⚪ INFO | TODO comment found |
| pkg/controller/resourcequota/resource_quota_monitor.go | 181 | ⚪ INFO | TODO comment found |
| pkg/controller/serviceaccount/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/servicecidrs/servicecidrs_controller.go | 381 | ⚪ INFO | TODO comment found |
| pkg/controller/servicecidrs/servicecidrs_controller.go | 492 | ⚪ INFO | TODO comment found |
| pkg/controller/servicecidrs/servicecidrs_controller_test.go | 133 | ⚪ INFO | TODO comment found |
| pkg/controller/statefulset/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/statefulset/stateful_pod_control.go | 402 | ⚪ INFO | TODO comment found |
| pkg/controller/statefulset/stateful_set.go | 220 | ⚪ INFO | TODO comment found |
| pkg/controller/statefulset/stateful_set.go | 322 | ⚪ INFO | TODO comment found |
| pkg/controller/statefulset/stateful_set_control_test.go | 77 | ⚪ INFO | TODO comment found |
| pkg/controller/statefulset/stateful_set_status_updater.go | 64 | ⚪ INFO | TODO comment found |
| pkg/controller/statefulset/stateful_set_utils.go | 417 | ⚪ INFO | TODO comment found |
| pkg/controller/storageversionmigrator/migrationrunner.go | 264 | ⚪ INFO | TODO comment found |
| pkg/controller/storageversionmigrator/migrationrunner.go | 406 | ⚪ INFO | TODO comment found |
| pkg/controller/storageversionmigrator/storageversionmigrator_test.go | 154 | ⚪ INFO | TODO comment found |
| pkg/controller/tainteviction/taint_eviction_test.go | 298 | ⚪ INFO | TODO comment found |
| pkg/controller/ttl/ttl_controller.go | 22 | ⚪ INFO | TODO comment found |
| pkg/controller/ttlafterfinished/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/util/node/controller_utils.go | 187 | ⚪ INFO | TODO comment found |
| pkg/controller/validatingadmissionpolicystatus/config/v1alpha1/conversion.go | 28 | ⚪ INFO | TODO comment found |
| pkg/controller/volume/attachdetach/attach_detach_controller.go | 555 | ⚪ INFO | TODO comment found |
| pkg/controller/volume/attachdetach/attach_detach_controller.go | 571 | ⚪ INFO | TODO comment found |
| pkg/controller/volume/attachdetach/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/volume/attachdetach/statusupdater/node_status_updater.go | 63 | ⚪ INFO | TODO comment found |
| pkg/controller/volume/ephemeral/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/volume/persistentvolume/binder_test.go | 488 | ⚪ INFO | TODO comment found |
| pkg/controller/volume/persistentvolume/config/v1alpha1/conversion.go | 29 | ⚪ INFO | TODO comment found |
| pkg/controller/volume/persistentvolume/framework_test.go | 430 | ⚪ INFO | TODO comment found |
| pkg/controller/volume/persistentvolume/framework_test.go | 511 | ⚪ INFO | TODO comment found |
| pkg/controller/volume/persistentvolume/pv_controller.go | 967 | ⚪ INFO | TODO comment found |
| pkg/controller/volume/persistentvolume/pv_controller_base.go | 349 | ⚪ INFO | TODO comment found |
| pkg/controller/volume/persistentvolume/pv_controller_base.go | 680 | ⚪ INFO | TODO comment found |
| pkg/controlplane/apiserver/apis.go | 70 | ⚪ INFO | TODO comment found |
| pkg/controlplane/apiserver/server.go | 272 | ⚪ INFO | TODO comment found |
| pkg/controlplane/apiserver/server.go | 283 | ⚪ INFO | TODO comment found |
| pkg/controlplane/instance.go | 286 | ⚪ INFO | TODO comment found |
| pkg/controlplane/instance.go | 416 | ⚪ INFO | TODO comment found |
| pkg/controlplane/reconcilers/endpointsadapter.go | 124 | ⚪ INFO | TODO comment found |
| pkg/credentialprovider/secrets/secrets_test.go | 352 | ⚪ INFO | TODO comment found |
| pkg/kubeapiserver/default_storage_factory_builder.go | 84 | ⚪ INFO | TODO comment found |
| pkg/kubeapiserver/default_storage_factory_builder.go | 85 | ⚪ INFO | TODO comment found |
| pkg/kubeapiserver/options/authentication.go | 526 | ⚪ INFO | TODO comment found |
| pkg/kubectl/cmd/convert/convert.go | 243 | ⚪ INFO | TODO comment found |
| pkg/kubectl/cmd/convert/convert.go | 246 | ⚪ INFO | TODO comment found |
| pkg/kubectl/cmd/convert/convert.go | 251 | ⚪ INFO | TODO comment found |
| pkg/kubectl/cmd/convert/import_known_versions.go | 20 | ⚪ INFO | TODO comment found |
| pkg/kubelet/allocation/allocation_manager.go | 79 | ⚪ INFO | TODO comment found |
| pkg/kubelet/apis/config/v1beta1/defaults.go | 27 | ⚪ INFO | TODO comment found |
| pkg/kubelet/apis/config/v1beta1/defaults.go | 38 | ⚪ INFO | TODO comment found |
| pkg/kubelet/apis/config/v1beta1/defaults.go | 52 | ⚪ INFO | TODO comment found |
| pkg/kubelet/apis/pods/server.go | 175 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cadvisor/util.go | 74 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/container_manager.go | 30 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/container_manager_linux.go | 753 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/cpumanager/cpu_manager_others.go | 29 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/cpumanager/policy_static.go | 583 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/devicemanager/checkpoint/checkpoint.go | 47 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/devicemanager/manager.go | 915 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/devicemanager/manager.go | 930 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/devicemanager/manager.go | 1053 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/devicemanager/manager_test.go | 138 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/devicemanager/manager_test.go | 220 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/devicemanager/manager_test.go | 338 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/kubelet/cm/devicemanager/plugin/v1beta1/api.go | 39 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/devicemanager/plugin/v1beta1/client.go | 84 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/kubelet/cm/devicemanager/pod_devices.go | 327 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/devicemanager/types.go | 116 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/dra/manager.go | 132 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/dra/plugin/registration_test.go | 155 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/dra/plugin/registration_test.go | 158 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/memorymanager/memory_manager.go | 341 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/memorymanager/policy_static.go | 535 | ⚪ INFO | TODO comment found |
| pkg/kubelet/cm/topologymanager/topology_manager_test.go | 208 | ⚪ INFO | TODO comment found |
| pkg/kubelet/config/common.go | 37 | ⚪ INFO | TODO comment found |
| pkg/kubelet/config/common.go | 161 | ⚪ INFO | TODO comment found |
| pkg/kubelet/config/config.go | 130 | ⚪ INFO | TODO comment found |
| pkg/kubelet/config/config.go | 132 | ⚪ INFO | TODO comment found |
| pkg/kubelet/config/config.go | 369 | ⚪ INFO | TODO comment found |
| pkg/kubelet/config/file_linux_test.go | 90 | ⚪ INFO | TODO comment found |
| pkg/kubelet/config/file_linux_test.go | 375 | ⚪ INFO | TODO comment found |
| pkg/kubelet/config/http_test.go | 317 | ⚪ INFO | TODO comment found |
| pkg/kubelet/container/helpers.go | 234 | ⚪ INFO | TODO comment found |
| pkg/kubelet/container/helpers.go | 379 | ⚪ INFO | TODO comment found |
| pkg/kubelet/container/ref.go | 36 | ⚪ INFO | TODO comment found |
| pkg/kubelet/container/runtime.go | 104 | ⚪ INFO | TODO comment found |
| pkg/kubelet/container/runtime.go | 222 | ⚪ INFO | TODO comment found |
| pkg/kubelet/container/runtime.go | 478 | ⚪ INFO | TODO comment found |
| pkg/kubelet/envvars/envvars.go | 65 | ⚪ INFO | TODO comment found |
| pkg/kubelet/events/resize.go | 35 | ⚪ INFO | TODO comment found |
| pkg/kubelet/eviction/eviction_manager.go | 266 | ⚪ INFO | TODO comment found |
| pkg/kubelet/eviction/eviction_manager.go | 270 | ⚪ INFO | TODO comment found |
| pkg/kubelet/eviction/helpers.go | 533 | ⚪ INFO | TODO comment found |
| pkg/kubelet/images/pullmanager/fs_pullrecords_test.go | 38 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet.go | 1236 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet.go | 2068 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet.go | 2146 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet.go | 2355 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet.go | 2363 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet.go | 2459 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet.go | 2493 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet.go | 2557 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet.go | 3172 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet.go | 3177 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet.go | 3190 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 785 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 817 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 845 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 939 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 994 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 1123 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 1243 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 1320 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 1606 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 1622 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 1645 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 1647 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 2267 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods.go | 2784 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods_linux_test.go | 63 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods_linux_test.go | 133 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_pods_windows_test.go | 35 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_server_journal.go | 81 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_volumes.go | 44 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_volumes.go | 64 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_volumes.go | 82 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_volumes.go | 196 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_volumes_linux_test.go | 169 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kubelet_volumes_test.go | 470 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/helpers.go | 132 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_container.go | 656 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_container.go | 1391 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_container_test.go | 467 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_container_windows_test.go | 155 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_gc.go | 362 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_image.go | 152 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_manager.go | 299 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_manager.go | 578 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_manager.go | 967 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_manager.go | 973 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_manager.go | 987 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_manager.go | 1281 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_manager.go | 2046 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_manager_test.go | 4617 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_sandbox.go | 79 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/kuberuntime_sandbox.go | 101 | ⚪ INFO | TODO comment found |
| pkg/kubelet/kuberuntime/labels.go | 32 | ⚪ INFO | TODO comment found |
| pkg/kubelet/lifecycle/predicate.go | 297 | ⚪ INFO | TODO comment found |
| pkg/kubelet/nodestatus/setters.go | 217 | ⚪ INFO | TODO comment found |
| pkg/kubelet/nodestatus/setters.go | 245 | ⚪ INFO | TODO comment found |
| pkg/kubelet/nodestatus/setters.go | 256 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pleg/generic.go | 152 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pleg/generic.go | 357 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pleg/generic.go | 470 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pluginmanager/pluginwatcher/plugin_watcher.go | 76 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pluginmanager/pluginwatcher/plugin_watcher.go | 148 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pluginmanager/pluginwatcher/plugin_watcher_windows.go | 29 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pluginmanager/pluginwatcher/plugin_watcher_windows_test.go | 33 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pod_workers.go | 230 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pod_workers.go | 964 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pod_workers.go | 1038 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pod_workers.go | 1067 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pod_workers.go | 1203 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pod_workers.go | 1267 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pod_workers_test.go | 383 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pod_workers_test.go | 894 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pod_workers_test.go | 2272 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pod_workers_test.go | 2288 | ⚪ INFO | TODO comment found |
| pkg/kubelet/pod_workers_test.go | 2310 | ⚪ INFO | TODO comment found |
| pkg/kubelet/server/server.go | 794 | ⚪ INFO | TODO comment found |
| pkg/kubelet/server/server.go | 795 | ⚪ INFO | TODO comment found |
| pkg/kubelet/server/server.go | 800 | ⚪ INFO | TODO comment found |
| pkg/kubelet/server/server.go | 805 | ⚪ INFO | TODO comment found |
| pkg/kubelet/server/server.go | 899 | ⚪ INFO | TODO comment found |
| pkg/kubelet/server/server.go | 901 | ⚪ INFO | TODO comment found |
| pkg/kubelet/server/stats/fs_resource_analyzer.go | 105 | ⚪ INFO | TODO comment found |
| pkg/kubelet/stats/cri_stats_provider.go | 86 | ⚪ INFO | TODO comment found |
| pkg/kubelet/stats/cri_stats_provider.go | 540 | ⚪ INFO | TODO comment found |
| pkg/kubelet/stats/cri_stats_provider.go | 625 | ⚪ INFO | TODO comment found |
| pkg/kubelet/stats/cri_stats_provider.go | 717 | ⚪ INFO | TODO comment found |
| pkg/kubelet/stats/cri_stats_provider_test.go | 357 | ⚪ INFO | TODO comment found |
| pkg/kubelet/stats/cri_stats_provider_windows.go | 203 | ⚪ INFO | TODO comment found |
| pkg/kubelet/stats/cri_stats_provider_windows_test.go | 430 | ⚪ INFO | TODO comment found |
| pkg/kubelet/stats/helper.go | 356 | ⚪ INFO | TODO comment found |
| pkg/kubelet/status/status_manager.go | 1153 | ⚪ INFO | TODO comment found |
| pkg/kubelet/status/status_manager_test.go | 947 | ⚪ INFO | TODO comment found |
| pkg/kubelet/status/status_manager_test.go | 1029 | ⚪ INFO | TODO comment found |
| pkg/kubelet/token/token_manager.go | 105 | ⚪ INFO | TODO comment found |
| pkg/kubelet/types/types.go | 28 | ⚪ INFO | TODO comment found |
| pkg/kubelet/userns/userns_manager.go | 399 | ⚪ INFO | TODO comment found |
| pkg/kubelet/util/manager/watch_based_manager.go | 213 | ⚪ INFO | TODO comment found |
| pkg/kubelet/util/manager/watch_based_manager.go | 352 | ⚪ INFO | TODO comment found |
| pkg/kubelet/util/manager/watch_based_manager.go | 364 | ⚪ INFO | TODO comment found |
| pkg/kubelet/util/swap/swap_util.go | 46 | ⚪ INFO | TODO comment found |
| pkg/kubelet/util/swap/swap_util.go | 134 | ⚪ INFO | TODO comment found |
| pkg/kubelet/volume_host.go | 231 | ⚪ INFO | TODO comment found |
| pkg/kubelet/volume_host.go | 278 | ⚪ INFO | TODO comment found |
| pkg/kubelet/volume_host.go | 287 | ⚪ INFO | TODO comment found |
| pkg/kubelet/volumemanager/cache/desired_state_of_wold_selinux_metrics.go | 27 | ⚪ INFO | TODO comment found |
| pkg/kubelet/volumemanager/reconciler/reconstruct.go | 103 | ⚪ INFO | TODO comment found |
| pkg/kubelet/volumemanager/reconciler/reconstruct_common.go | 166 | ⚪ INFO | TODO comment found |
| pkg/kubelet/volumemanager/reconciler/reconstruct_common.go | 383 | ⚪ INFO | TODO comment found |
| pkg/kubelet/winstats/perfcounters_test.go | 37 | ⚪ INFO | TODO comment found |
| pkg/printers/internalversion/import_known_versions.go | 21 | ⚪ INFO | TODO comment found |
| pkg/proxy/apis/config/validation/validation_test.go | 500 | ⚪ INFO | TODO comment found |
| pkg/proxy/config/config_test.go | 860 | ⚪ INFO | TODO comment found |
| pkg/proxy/endpointschangetracker.go | 277 | ⚪ INFO | TODO comment found |
| pkg/proxy/endpointslicecache.go | 177 | ⚪ INFO | TODO comment found |
| pkg/proxy/iptables/proxier_test.go | 85 | ⚪ INFO | TODO comment found |
| pkg/proxy/ipvs/cleanup_test.go | 162 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/proxy/ipvs/ipset/ipset_test.go | 1398 | ⚪ INFO | TODO comment found |
| pkg/proxy/ipvs/ipset/ipset_test.go | 1465 | ⚪ INFO | TODO comment found |
| pkg/proxy/ipvs/ipset/ipset_test.go | 1583 | ⚪ INFO | TODO comment found |
| pkg/proxy/ipvs/ipset/testing/fake_test.go | 160 | ⚪ INFO | TODO comment found |
| pkg/proxy/ipvs/util/ipvs_linux.go | 194 | ⚪ INFO | TODO comment found |
| pkg/proxy/metrics/metrics.go | 360 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/proxy/nftables/proxier_test.go | 76 | ⚪ INFO | TODO comment found |
| pkg/proxy/node.go | 202 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/proxy/node.go | 211 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/proxy/servicechangetracker.go | 122 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns.go | 224 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns.go | 260 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns.go | 262 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns.go | 291 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns.go | 305 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns.go | 307 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns.go | 642 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns_test.go | 54 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns_test.go | 74 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns_test.go | 186 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns_test.go | 227 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns_test.go | 279 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns_test.go | 319 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns_test.go | 364 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns_test.go | 401 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns_test.go | 476 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns_test.go | 530 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/hns_test.go | 597 | ⚪ INFO | TODO comment found |
| pkg/proxy/winkernel/proxier.go | 1369 | ⚪ INFO | TODO comment found |
| pkg/quota/v1/evaluator/core/persistent_volume_claims.go | 59 | ⚪ INFO | TODO comment found |
| pkg/registry/admissionregistration/resolver/resolver.go | 37 | ⚪ INFO | TODO comment found |
| pkg/registry/apps/daemonset/strategy.go | 104 | ⚪ INFO | TODO comment found |
| pkg/registry/apps/deployment/storage/storage.go | 378 | ⚪ INFO | TODO comment found |
| pkg/registry/apps/replicaset/storage/storage.go | 273 | ⚪ INFO | TODO comment found |
| pkg/registry/apps/statefulset/storage/storage.go | 267 | ⚪ INFO | TODO comment found |
| pkg/registry/apps/statefulset/storage/storage_test.go | 43 | ⚪ INFO | TODO comment found |
| pkg/registry/apps/statefulset/storage/storage_test.go | 101 | ⚪ INFO | TODO comment found |
| pkg/registry/apps/statefulset/storage/storage_test.go | 105 | ⚪ INFO | TODO comment found |
| pkg/registry/apps/statefulset/storage/storage_test.go | 304 | ⚪ INFO | TODO comment found |
| pkg/registry/apps/statefulset/strategy.go | 217 | ⚪ INFO | TODO comment found |
| pkg/registry/batch/cronjob/storage/storage_test.go | 35 | ⚪ INFO | TODO comment found |
| pkg/registry/batch/cronjob/storage/storage_test.go | 165 | ⚪ INFO | TODO comment found |
| pkg/registry/batch/job/storage/storage_test.go | 357 | ⚪ INFO | TODO comment found |
| pkg/registry/batch/job/strategy.go | 245 | ⚪ INFO | TODO comment found |
| pkg/registry/batch/job/strategy_test.go | 584 | ⚪ INFO | TODO comment found |
| pkg/registry/batch/job/strategy_test.go | 3455 | ⚪ INFO | TODO comment found |
| pkg/registry/coordination/leasecandidate/strategy.go | 103 | ⚪ INFO | TODO comment found |
| pkg/registry/core/limitrange/storage/storage.go | 45 | ⚪ INFO | TODO comment found |
| pkg/registry/core/namespace/storage/storage.go | 173 | ⚪ INFO | TODO comment found |
| pkg/registry/core/node/storage/storage.go | 138 | ⚪ INFO | TODO comment found |
| pkg/registry/core/pod/storage/eviction.go | 415 | ⚪ INFO | TODO comment found |
| pkg/registry/core/pod/storage/storage.go | 187 | ⚪ INFO | TODO comment found |
| pkg/registry/core/pod/strategy.go | 484 | ⚪ INFO | TODO comment found |
| pkg/registry/core/pod/strategy.go | 497 | ⚪ INFO | TODO comment found |
| pkg/registry/core/pod/strategy_test.go | 1524 | ⚪ INFO | TODO comment found |
| pkg/registry/core/rest/storage_core.go | 562 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/allocator/bitmap.go | 36 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/allocator/storage/storage.go | 43 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/allocator/storage/storage.go | 44 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/allocator/storage/storage.go | 45 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/ipallocator/cidrallocator.go | 110 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/ipallocator/cidrallocator.go | 540 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/ipallocator/controller/repair.go | 56 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/ipallocator/controller/repair.go | 57 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/ipallocator/controller/repair.go | 147 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/ipallocator/ipallocator.go | 93 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/ipallocator/ipallocator.go | 332 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/ipallocator/ipallocator.go | 538 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/portallocator/controller/repair.go | 105 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/portallocator/controller/repair.go | 261 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/storage/alloc.go | 407 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/storage/alloc.go | 432 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/storage/alloc.go | 534 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/storage/alloc.go | 543 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/storage/alloc.go | 559 | ⚪ INFO | TODO comment found |
| pkg/registry/core/service/storage/alloc.go | 831 | ⚪ INFO | TODO comment found |
| pkg/registry/flowcontrol/ensurer/strategy.go | 341 | ⚪ INFO | TODO comment found |
| pkg/registry/flowcontrol/ensurer/strategy.go | 342 | ⚪ INFO | TODO comment found |
| pkg/registry/policy/poddisruptionbudget/storage/storage_test.go | 70 | ⚪ INFO | TODO comment found |
| pkg/registry/policy/poddisruptionbudget/storage/storage_test.go | 74 | ⚪ INFO | TODO comment found |
| pkg/registry/policy/poddisruptionbudget/storage/storage_test.go | 174 | ⚪ INFO | TODO comment found |
| pkg/registry/rbac/clusterrole/storage/storage.go | 45 | ⚪ INFO | TODO comment found |
| pkg/registry/rbac/role/storage/storage.go | 45 | ⚪ INFO | TODO comment found |
| pkg/registry/registrytest/endpoint.go | 43 | ⚪ INFO | TODO comment found |
| pkg/registry/registrytest/endpoint.go | 58 | ⚪ INFO | TODO comment found |
| pkg/registry/registrytest/endpoint.go | 88 | ⚪ INFO | TODO comment found |
| pkg/registry/registrytest/endpoint.go | 115 | ⚪ INFO | TODO comment found |
| pkg/registry/resource/resourceclaim/strategy.go | 112 | ⚪ INFO | TODO comment found |
| pkg/registry/resource/resourceslice/strategy.go | 177 | ⚪ INFO | TODO comment found |
| pkg/scheduler/apis/config/types.go | 59 | ⚪ INFO | TODO comment found |
| pkg/scheduler/apis/config/validation/validation.go | 43 | ⚪ INFO | TODO comment found |
| pkg/scheduler/apis/config/validation/validation_pluginargs.go | 254 | ⚪ INFO | TODO comment found |
| pkg/scheduler/framework/events.go | 236 | ⚪ INFO | TODO comment found |
| pkg/scheduler/framework/plugins/imagelocality/image_locality.go | 150 | ⚪ INFO | TODO comment found |
| pkg/scheduler/framework/plugins/nodeaffinity/node_affinity.go | 314 | ⚪ INFO | TODO comment found |
| pkg/scheduler/framework/plugins/nodeaffinity/node_affinity_test.go | 40 | ⚪ INFO | TODO comment found |
| pkg/scheduler/framework/plugins/nodevolumelimits/csi.go | 269 | ⚪ INFO | TODO comment found |
| pkg/scheduler/framework/plugins/volumebinding/binder.go | 433 | ⚪ INFO | TODO comment found |
| pkg/scheduler/framework/plugins/volumebinding/binder.go | 547 | ⚪ INFO | TODO comment found |
| pkg/scheduler/framework/plugins/volumebinding/binder.go | 609 | ⚪ INFO | TODO comment found |
| pkg/scheduler/framework/plugins/volumebinding/binder.go | 840 | ⚪ INFO | TODO comment found |
| pkg/scheduler/framework/plugins/volumebinding/binder_test.go | 58 | ⚪ INFO | TODO comment found |
| pkg/scheduler/framework/plugins/volumebinding/volume_binding.go | 124 | ⚪ INFO | TODO comment found |
| pkg/scheduler/framework/preemption/types.go | 115 | ⚪ INFO | TODO comment found |
| pkg/scheduler/metrics/resources/resources.go | 192 | ⚪ INFO | TODO comment found |
| pkg/scheduler/schedule_one_podgroup_test.go | 133 | ⚪ INFO | TODO comment found |
| pkg/scheduler/schedule_one_podgroup_test.go | 1098 | ⚪ INFO | TODO comment found |
| pkg/scheduler/schedule_one_test.go | 562 | ⚪ INFO | TODO comment found |
| pkg/util/iptables/iptables.go | 550 | ⚪ INFO | TODO comment found |
| pkg/util/oom/oom.go | 21 | ⚪ INFO | TODO comment found |
| pkg/volume/csi/csi_attacher_test.go | 1101 | ⚪ INFO | TODO comment found |
| pkg/volume/csi/csi_plugin.go | 62 | ⚪ INFO | TODO comment found |
| pkg/volume/downwardapi/downwardapi.go | 138 | ⚪ INFO | TODO comment found |
| pkg/volume/downwardapi/downwardapi.go | 165 | ⚪ INFO | TODO comment found |
| pkg/volume/downwardapi/downwardapi.go | 254 | ⚪ INFO | TODO comment found |
| pkg/volume/emptydir/empty_dir.go | 46 | ⚪ INFO | TODO comment found |
| pkg/volume/fc/disk_manager.go | 95 | ⚪ INFO | TODO comment found |
| pkg/volume/fc/fc_util.go | 324 | ⚪ INFO | TODO comment found |
| pkg/volume/iscsi/iscsi.go | 387 | ⚪ INFO | TODO comment found |
| pkg/volume/local/local.go | 195 | ⚪ INFO | TODO comment found |
| pkg/volume/metrics_block.go | 57 | ⚪ INFO | TODO comment found |
| pkg/volume/metrics_block_linux_test.go | 29 | ⚪ INFO | TODO comment found |
| pkg/volume/plugins.go | 77 | ⚪ INFO | TODO comment found |
| pkg/volume/testing/volume_host.go | 56 | ⚪ INFO | TODO comment found |
| pkg/volume/util/atomic_writer.go | 293 | ⚪ INFO | TODO comment found |
| pkg/volume/util/hostutil/fake_hostutil.go | 37 | ⚪ INFO | TODO comment found |
| pkg/volume/util/metrics.go | 97 | ⚪ INFO | TODO comment found |
| pkg/volume/util/operationexecutor/operation_executor.go | 256 | ⚪ INFO | TODO comment found |
| pkg/volume/util/operationexecutor/operation_executor.go | 856 | ⚪ INFO | TODO comment found |
| pkg/volume/util/operationexecutor/operation_generator.go | 1085 | ⚪ INFO | TODO comment found |
| pkg/volume/util/operationexecutor/operation_generator.go | 2093 | ⚪ INFO | TODO comment found |
| pkg/volume/util/operationexecutor/operation_generator.go | 2186 | ⚪ INFO | TODO comment found |
| pkg/volume/util/storageclass.go | 35 | ⚪ INFO | TODO comment found |
| pkg/volume/util/storageclass.go | 75 | ⚪ INFO | TODO comment found |
| pkg/volume/util/subpath/subpath_linux.go | 37 | ⚪ INFO | TODO comment found |
| pkg/volume/util/util.go | 300 | ⚪ INFO | TODO comment found |
| pkg/volume/util/util.go | 556 | ⚪ INFO | TODO comment found |
| pkg/volume/util/volumepathhandler/volume_path_handler.go | 131 | ⚪ INFO | TODO comment found |
| pkg/volume/util/volumepathhandler/volume_path_handler.go | 295 | ⚪ INFO | TODO comment found |
| plugin/pkg/admission/antiaffinity/admission.go | 71 | ⚪ INFO | TODO comment found |
| plugin/pkg/admission/antiaffinity/admission_test.go | 31 | ⚪ INFO | TODO comment found |
| plugin/pkg/admission/eventratelimit/apis/eventratelimit/v1alpha1/register.go | 31 | ⚪ INFO | TODO comment found |
| plugin/pkg/admission/imagepolicy/admission.go | 261 | ⚪ INFO | TODO comment found |
| plugin/pkg/admission/limitranger/admission.go | 569 | ⚪ INFO | TODO comment found |
| plugin/pkg/admission/limitranger/admission.go | 627 | ⚪ INFO | TODO comment found |
| plugin/pkg/admission/noderestriction/admission.go | 199 | ⚪ INFO | TODO comment found |
| plugin/pkg/admission/noderestriction/admission.go | 649 | ⚪ INFO | TODO comment found |
| plugin/pkg/admission/podtolerationrestriction/apis/podtolerationrestriction/v1alpha1/register.go | 31 | ⚪ INFO | TODO comment found |
| plugin/pkg/admission/podtopologylabels/admission_test.go | 228 | ⚪ INFO | TODO comment found |
| plugin/pkg/admission/serviceaccount/admission.go | 103 | ⚪ INFO | TODO comment found |
| plugin/pkg/auth/authenticator/token/bootstrap/bootstrap.go | 40 | ⚪ INFO | TODO comment found |
| plugin/pkg/auth/authorizer/node/graph_populator.go | 154 | ⚪ INFO | TODO comment found |
| plugin/pkg/auth/authorizer/rbac/bootstrappolicy/controller_policy.go | 122 | ⚪ INFO | TODO comment found |
| plugin/pkg/auth/authorizer/rbac/bootstrappolicy/namespace_policy.go | 106 | ⚪ INFO | TODO comment found |
| plugin/pkg/auth/authorizer/rbac/bootstrappolicy/policy.go | 215 | ⚪ INFO | TODO comment found |
| plugin/pkg/auth/authorizer/rbac/bootstrappolicy/policy.go | 239 | ⚪ INFO | TODO comment found |
| plugin/pkg/auth/authorizer/rbac/bootstrappolicy/policy.go | 615 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/admission/v1/register.go | 36 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/admission/v1beta1/register.go | 36 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/admissionregistration/v1/register.go | 36 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/admissionregistration/v1alpha1/register.go | 36 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/admissionregistration/v1beta1/register.go | 36 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1/types.go | 196 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1/types.go | 224 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1/types.go | 463 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1/types.go | 620 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1/types.go | 773 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1beta1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1beta1/types.go | 243 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1beta1/types.go | 270 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1beta1/types.go | 541 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1beta2/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1beta2/types.go | 250 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1beta2/types.go | 278 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1beta2/types.go | 517 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1beta2/types.go | 676 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/apps/v1beta2/types.go | 828 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/authentication/v1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/authentication/v1alpha1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/authentication/v1beta1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/authorization/v1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/authorization/v1beta1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/autoscaling/v1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/batch/v1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/batch/v1beta1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/certificates/v1beta1/register.go | 42 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/coordination/v1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/coordination/v1alpha2/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/coordination/v1beta1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/toleration.go | 31 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/toleration.go | 61 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 1023 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 1071 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 1275 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 1390 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 1525 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 1573 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 1615 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 4458 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 4916 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 7288 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 7327 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 7473 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 7501 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 7584 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 7589 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/core/v1/types.go | 8041 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/events/v1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/events/v1beta1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/extensions/v1beta1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/extensions/v1beta1/types.go | 201 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/extensions/v1beta1/types.go | 357 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/extensions/v1beta1/types.go | 514 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/extensions/v1beta1/types.go | 681 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/extensions/v1beta1/types.go | 700 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/extensions/v1beta1/types.go | 800 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/extensions/v1beta1/types.go | 824 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/imagepolicy/v1alpha1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/networking/v1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/networking/v1/well_known_labels.go | 21 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/networking/v1beta1/register.go | 38 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/networking/v1beta1/types.go | 109 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/networking/v1beta1/types.go | 129 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/networking/v1beta1/types.go | 230 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/networking/v1beta1/types.go | 249 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/networking/v1beta1/well_known_labels.go | 21 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/policy/v1beta1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/rbac/v1/register.go | 36 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/rbac/v1alpha1/register.go | 36 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/rbac/v1beta1/register.go | 36 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/scheduling/v1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/scheduling/v1alpha3/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/scheduling/v1beta1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/storage/v1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/api/storage/v1beta1/register.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/deepcopy.go | 21 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1/deepcopy.go | 19 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1/types_jsonschema.go | 337 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1/types_jsonschema.go | 361 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1/types_jsonschema.go | 381 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1/types_jsonschema.go | 404 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1/zz_generated.conversion.go | 734 | 🟡 MEDIUM | FIXME comment indicating known issue |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1beta1/deepcopy.go | 19 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1beta1/types_jsonschema.go | 337 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1beta1/types_jsonschema.go | 361 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1beta1/types_jsonschema.go | 381 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1beta1/types_jsonschema.go | 404 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1beta1/zz_generated.conversion.go | 783 | 🟡 MEDIUM | FIXME comment indicating known issue |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/validation/validation_test.go | 2310 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apiserver/conversion/converter.go | 185 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apiserver/conversion/webhook_converter.go | 205 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apiserver/conversion/webhook_converter.go | 222 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apiserver/conversion/webhook_converter.go | 281 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apiserver/conversion/webhook_converter.go | 284 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apiserver/customresource_handler.go | 488 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apiserver/customresource_handler.go | 1429 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apiserver/schema/cel/compilation.go | 235 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apiserver/schema/cel/validation_test.go | 1722 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apiserver/schema/validation.go | 219 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apiserver/validation/validation.go | 111 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/cmd/server/testing/testserver.go | 92 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/controller/openapi/builder/builder.go | 387 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/controller/openapi/builder/builder_test.go | 484 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/registry/customresource/tableconvertor/tableconvertor_test.go | 255 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/registry/customresource/tableconvertor/tableconvertor_test.go | 328 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/registry/customresource/tableconvertor/tableconvertor_test.go | 399 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/registry/customresource/tableconvertor/tableconvertor_test.go | 400 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/pkg/registry/customresource/tableconvertor/tableconvertor_test.go | 401 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/test/integration/conversion/conversion_test.go | 267 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/test/integration/ratcheting_test.go | 1769 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/test/integration/registration_test.go | 427 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/test/integration/versioning_test.go | 100 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiextensions-apiserver/test/integration/versioning_test.go | 125 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/apitesting/codec.go | 58 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/apitesting/fuzzer/valuefuzz.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/apitesting/fuzzer/valuefuzz.go | 45 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/apitesting/fuzzer/valuefuzz.go | 55 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/apitesting/fuzzer/valuefuzz.go | 65 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/apitesting/roundtrip/construct.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/equality/semantic.go | 32 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/errors/errors.go | 253 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/meta/help.go | 32 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/meta/help.go | 42 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/meta/help.go | 79 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/meta/help.go | 138 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/meta/help.go | 243 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/meta/interfaces.go | 112 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/meta/meta.go | 111 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/meta/meta.go | 141 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/meta/restmapper.go | 17 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/meta/restmapper.go | 55 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/meta/restmapper.go | 87 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/meta/restmapper_test.go | 527 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/resource/amount.go | 83 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go | 233 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go | 378 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go | 449 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go | 732 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/resource/scale_int.go | 82 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/validate/each.go | 145 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/api/validate/strfmt.go | 254 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/fuzzer/fuzzer.go | 62 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/internalversion/register.go | 30 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/meta.go | 24 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/meta.go | 74 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/meta.go | 85 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/meta.go | 105 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/register.go | 39 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/types.go | 890 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/types.go | 1292 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/types.go | 1297 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/types.go | 1439 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/unstructured/helpers.go | 369 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/unstructured/helpers.go | 420 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/unstructured/unstructured.go | 38 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/watch.go | 46 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/meta/v1/watch.go | 64 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/testapigroup/fuzzer/fuzzer.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/apis/testapigroup/v1/register.go | 42 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/labels/labels_test.go | 34 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/labels/selector.go | 993 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/labels/selector_test.go | 168 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/codec_check.go | 30 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/converter.go | 470 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/converter.go | 577 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/converter.go | 801 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/converter_test.go | 202 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/embedded.go | 130 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/embedded_test.go | 89 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/extension.go | 100 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/fieldinfo_127.go | 31 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/helper.go | 115 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/helper.go | 124 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/helper.go | 132 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/negotiate.go | 45 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/schema/group_version.go | 192 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/schema/group_version.go | 193 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/schema/group_version.go | 240 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/schema/group_version.go | 241 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/schema/group_version.go | 299 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/scheme.go | 64 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/scheme.go | 131 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/scheme.go | 522 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/scheme.go | 603 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/cbor/cbor.go | 276 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/cbor/internal/modes/buffers.go | 60 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/cbor/internal/modes/decode.go | 82 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/codec_factory.go | 176 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/codec_factory.go | 177 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/codec_factory.go | 245 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/codec_factory.go | 264 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/codec_factory.go | 265 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/codec_factory.go | 280 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/json/json.go | 279 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/negotiated_codec.go | 23 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/protobuf/protobuf.go | 119 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/protobuf/protobuf.go | 124 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/protobuf/protobuf.go | 276 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/protobuf/protobuf.go | 376 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/serializer/versioning/versioning.go | 33 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/types.go | 106 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/runtime/types.go | 116 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/test/apis_meta_v1_unstructed_unstructure_test.go | 517 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/test/runtime_unversioned_test.go | 24 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/intstr/intstr.go | 36 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/managedfields/internal/lastappliedmanager.go | 154 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/managedfields/internal/lastappliedmanager_test.go | 648 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/naming/from_stack.go | 81 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/net/interface.go | 348 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/proxy/transport.go | 70 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/proxy/transport.go | 267 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/proxy/upgradeaware.go | 458 | 🟡 MEDIUM | FIXME comment indicating known issue |
| staging/src/k8s.io/apimachinery/pkg/util/strategicpatch/patch.go | 191 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/validation/field/errors.go | 144 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/validation/field/errors.go | 179 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/validation/validation.go | 41 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/validation/validation.go | 287 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/wait/loop_test.go | 451 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/yaml/decoder.go | 173 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/util/yaml/decoder.go | 299 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/pkg/version/types.go | 20 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apimachinery/third_party/forked/golang/json/fields.go | 28 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/cel/condition.go | 67 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/cel/condition.go | 94 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/config/apis/policyconfig/v1/register.go | 31 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/generic/policy_dispatcher.go | 219 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/generic/policy_source.go | 45 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/internal/generic/controller.go | 165 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/matching/matching.go | 141 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/matching/matching.go | 183 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/mutating/compilation_test.go | 271 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/mutating/dispatcher_test.go | 469 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/mutating/patch/json_patch.go | 163 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/mutating/patch/smd.go | 92 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/validating/dispatcher.go | 88 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/validating/dispatcher.go | 289 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/validating/validator.go | 145 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/validating/validator.go | 235 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/policy/validating/validator_test.go | 662 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/resourcequota/apis/resourcequota/v1/register.go | 31 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/resourcequota/apis/resourcequota/v1alpha1/register.go | 31 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/resourcequota/apis/resourcequota/v1beta1/register.go | 31 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/webhook/config/apis/webhookadmission/v1/register.go | 31 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/webhook/matchconditions/matcher.go | 99 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/webhook/mutating/dispatcher.go | 379 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/webhook/predicates/namespace/matcher.go | 110 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/admission/plugin/webhook/validating/dispatcher.go | 241 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/apis/apiserver/v1/register.go | 31 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/apis/apiserver/v1alpha1/register.go | 35 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/apis/apiserver/v1beta1/register.go | 35 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/apis/example/fuzzer/fuzzer.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/apis/example/v1/register.go | 42 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/apis/example2/v1/register.go | 42 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/audit/scheme.go | 17 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/cel/common/values_test.go | 1247 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/cel/library/cost.go | 256 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/cel/library/cost.go | 617 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/cel/library/library_compatibility_test.go | 65 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/cel/library/library_compatibility_test.go | 118 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/cel/openapi/extensions.go | 87 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/cel/types.go | 493 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/apiserver_test.go | 774 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/apiserver_test.go | 776 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/apiserver_test.go | 783 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/apiserver_test.go | 789 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/apiserver_test.go | 852 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/apiserver_test.go | 3016 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/filters/authorization_test.go | 278 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/filters/metrics_test.go | 260 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/delete.go | 250 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/delete.go | 256 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/delete.go | 390 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/delete_test.go | 1129 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/get.go | 223 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/get.go | 229 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/get.go | 271 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/negotiation/negotiate.go | 57 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/patch.go | 77 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/patch.go | 269 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/patch.go | 270 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/patch.go | 519 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/patch.go | 580 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/patch.go | 630 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/response.go | 395 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/response.go | 401 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/responsewriters/status.go | 58 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/responsewriters/status.go | 63 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/rest.go | 141 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/rest.go | 149 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/rest.go | 201 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/watch.go | 73 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/handlers/watch.go | 96 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/installer.go | 592 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/installer.go | 634 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/installer.go | 672 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/installer.go | 675 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/installer.go | 881 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/installer.go | 943 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/installer.go | 1175 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/installer.go | 1203 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/installer.go | 1226 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/installer.go | 1262 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/metrics/metrics.go | 354 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/metrics/metrics.go | 807 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/request/doc.go | 19 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/request/requestinfo.go | 76 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/watch_test.go | 332 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/endpoints/watch_test.go | 457 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/registry/generic/registry/store.go | 100 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/registry/generic/registry/store.go | 800 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/registry/generic/registry/store.go | 1245 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/registry/generic/registry/store.go | 1557 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/registry/generic/storage_decorator.go | 56 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/registry/generic/testing/tester.go | 232 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/registry/rest/rest.go | 34 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/registry/rest/rest.go | 152 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/registry/rest/update.go | 91 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/config.go | 125 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/config.go | 416 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/config.go | 935 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/filters/cors.go | 27 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/filters/priority-and-fairness.go | 270 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/filters/priority-and-fairness.go | 277 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/filters/priority-and-fairness_test.go | 190 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/filters/with_retry_after.go | 64 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/flagz/flagz.go | 104 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/genericapiserver.go | 80 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/genericapiserver.go | 89 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/genericapiserver.go | 671 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/genericapiserver.go | 690 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/genericapiserver_graceful_termination_test.go | 310 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/handler.go | 156 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/read_write_deadline_test.go | 295 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/secure_serving.go | 100 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/secure_serving.go | 223 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/statusz/statusz.go | 126 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/server/storage/storage_codec.go | 75 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/cacher/cache_watcher.go | 445 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/cacher/cache_watcher.go | 524 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/cacher/cacher.go | 405 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/cacher/cacher.go | 908 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/cacher/cacher_test.go | 73 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/cacher/store/store_btree.go | 289 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/cacher/store/store_btree.go | 431 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/cacher/watch_cache.go | 495 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/cacher/watch_cache.go | 618 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/cacher/watch_cache_history.go | 33 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/cacher/watch_cache_storage.go | 96 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/continue.go | 36 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/continue.go | 46 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/errors/storage.go | 32 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/errors/storage.go | 49 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/errors/storage.go | 66 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/errors/storage.go | 83 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/errors/storage.go | 102 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/etcd3/corrupt_obj_deleter.go | 155 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/etcd3/corrupt_obj_deleter.go | 165 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/etcd3/corrupt_obj_deleter.go | 180 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/etcd3/corrupt_obj_deleter.go | 243 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/etcd3/store_test.go | 427 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/interfaces.go | 270 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/names/generate.go | 43 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/selection_predicate.go | 147 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/storagebackend/factory/etcd3.go | 508 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/storage/value/encrypt/envelope/kmsv2/envelope.go | 193 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/util/flowcontrol/apf_controller.go | 632 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/util/flowcontrol/apf_controller.go | 771 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/util/flowcontrol/fairqueuing/queueset/queueset.go | 756 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/util/flowcontrol/fairqueuing/queueset/queueset.go | 758 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/util/flowcontrol/fairqueuing/queueset/queueset.go | 871 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/util/flowcontrol/request/list_work_estimator.go | 98 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/util/flowcontrol/request/list_work_estimator.go | 168 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/util/flowcontrol/request/list_work_estimator.go | 206 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/util/flowcontrol/request/mutating_work_estimator.go | 97 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/util/flowcontrol/request/mutating_work_estimator.go | 103 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/util/flowcontrol/request/mutating_work_estimator.go | 135 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/util/flowcontrol/watch_tracker.go | 41 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/pkg/util/webhook/validation.go | 83 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/oidc/oidc.go | 800 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/oidc/oidc.go | 1143 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/plugin/pkg/authenticator/token/oidc/oidc.go | 1145 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/apiserver/plugin/pkg/authorizer/webhook/webhook.go | 407 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/cli-runtime/pkg/printers/jsonpath.go | 34 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/cli-runtime/pkg/printers/tableprinter.go | 600 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/cli-runtime/pkg/resource/builder.go | 136 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/cli-runtime/pkg/resource/builder.go | 183 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/cli-runtime/pkg/resource/scheme.go | 71 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/cli-runtime/pkg/resource/visitor.go | 558 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/cli-runtime/pkg/resource/visitor.go | 568 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/cli-runtime/pkg/resource/visitor.go | 599 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/apps/v1/daemonsetcondition.go | 30 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/apps/v1/daemonsetupdatestrategy.go | 34 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/apps/v1/deploymentstrategy.go | 35 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/apps/v1/statefulsetspec.go | 36 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/apps/v1/statefulsetspec.go | 56 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/apps/v1beta1/deploymentstrategy.go | 35 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/apps/v1beta1/statefulsetspec.go | 36 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/apps/v1beta1/statefulsetspec.go | 55 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/apps/v1beta2/daemonsetcondition.go | 30 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/apps/v1beta2/daemonsetupdatestrategy.go | 34 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/apps/v1beta2/deploymentstrategy.go | 35 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/apps/v1beta2/statefulsetspec.go | 36 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/apps/v1beta2/statefulsetspec.go | 56 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/core/v1/awselasticblockstorevolumesource.go | 38 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/core/v1/event.go | 48 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/core/v1/event.go | 51 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/core/v1/fcvolumesource.go | 35 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/core/v1/gcepersistentdiskvolumesource.go | 38 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/core/v1/iscsipersistentvolumesource.go | 42 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/core/v1/iscsivolumesource.go | 42 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/core/v1/localobjectreference.go | 43 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/core/v1/objectreference.go | 69 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/core/v1/podsecuritycontext.go | 80 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/core/v1/podspec.go | 261 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/core/v1/rbdpersistentvolumesource.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/core/v1/rbdvolumesource.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/extensions/v1beta1/daemonsetcondition.go | 30 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/extensions/v1beta1/daemonsetupdatestrategy.go | 37 | ⚪ INFO | TODO comment found |
| staging/src/k8s.io/client-go/applyconfigurations/extensions/v1beta1/deploymentstrategy.go | 35 | ⚪ INFO | TODO comment found |

## Detailed Findings

### MAINTENANCE

**Total:** 1044 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| pkg/api/testing/validation_test.go | 32 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/kubelet/cm/devicemanager/manager_test.go | 338 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/kubelet/cm/devicemanager/plugin/v1beta1/client.go | 84 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/proxy/ipvs/cleanup_test.go | 162 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/proxy/metrics/metrics.go | 360 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/proxy/node.go | 202 | 🟡 MEDIUM | FIXME comment indicating known issue |
| pkg/proxy/node.go | 211 | 🟡 MEDIUM | FIXME comment indicating known issue |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1/zz_generated.conversion.go | 734 | 🟡 MEDIUM | FIXME comment indicating known issue |
| staging/src/k8s.io/apiextensions-apiserver/pkg/apis/apiextensions/v1beta1/zz_generated.conversion.go | 783 | 🟡 MEDIUM | FIXME comment indicating known issue |
| staging/src/k8s.io/apimachinery/pkg/util/proxy/upgradeaware.go | 458 | 🟡 MEDIUM | FIXME comment indicating known issue |

*... and 1034 more*

### SECURITY

**Total:** 203 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| cmd/kube-scheduler/app/options/options_test.go | 330 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kube-scheduler/app/options/options_test.go | 437 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kube-scheduler/app/options/options_test.go | 555 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kube-scheduler/app/options/options_test.go | 687 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kube-scheduler/app/options/options_test.go | 842 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kubeadm/app/util/config/cluster_test.go | 837 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kubeadm/app/util/kubeconfig/kubeconfig_test.go | 128 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kubeadm/app/util/kubeconfig/kubeconfig_test.go | 129 | 🟠 HIGH | Hardcoded username/password detected |
| cmd/kubeadm/app/util/kubeconfig/kubeconfig_test.go | 273 | 🟠 HIGH | Hardcoded username/password detected |
| pkg/apis/certificates/v1beta1/defaults_test.go | 290 | 🟠 HIGH | Hardcoded username/password detected |

*... and 193 more*

### CODE_QUALITY

**Total:** 10 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| hack/boilerplate/boilerplate.py | 70 | 🟢 LOW | Debug print statement found |
| hack/boilerplate/boilerplate.py | 97 | 🟢 LOW | Debug print statement found |
| hack/boilerplate/boilerplate.py | 116 | 🟢 LOW | Debug print statement found |
| hack/boilerplate/boilerplate.py | 118 | 🟢 LOW | Debug print statement found |
| hack/boilerplate/boilerplate.py | 122 | 🟢 LOW | Debug print statement found |
| hack/boilerplate/boilerplate.py | 123 | 🟢 LOW | Debug print statement found |
| hack/boilerplate/boilerplate.py | 223 | 🟢 LOW | Debug print statement found |
| hack/verify-flags-underscore.py | 102 | 🟢 LOW | Debug print statement found |
| hack/verify-flags-underscore.py | 103 | 🟢 LOW | Debug print statement found |
| hack/verify-flags-underscore.py | 106 | 🟢 LOW | Debug print statement found |

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 78/100 (Tier B)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -3045 | Fair ⚠️ |
| Code Quality | -60 | Good ✅ |
| Test Coverage | +2 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Reduce High Severity Issues**
   - Priority: HIGH
   - Address 203 high-severity issues to improve overall code quality.

2. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 20.4%. Aim for at least 70% coverage.

3. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

