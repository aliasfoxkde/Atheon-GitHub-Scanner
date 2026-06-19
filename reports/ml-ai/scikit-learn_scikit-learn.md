# Repository Analysis Report: scikit-learn/scikit-learn

**Generated:** 2026-06-19 09:04:46 CDT

**Quality Score:** 99/100 (Tier A)

## Executive Summary

- **Overall Quality:** A (99/100)
- **Total Findings:** 1764
- **Critical Issues:** 0
- **High Issues:** 0
- **Medium Issues:** 29
- **Low Issues:** 1472
- **Files Scanned:** 1806

### Findings by Category

| Category | Count | Severity |
|----------|-------|----------|
| code_quality | 1472 | Medium |
| maintenance | 291 | Medium |
| security | 1 | Medium |

## Repository Overview

- **Owner:** scikit-learn
- **Name:** scikit-learn
- **Description:** scikit-learn: machine learning in Python
- **Primary Language:** Python
- **Stars:** 66371
- **Forks:** 27082
- **Open Issues:** 2089
- **Size:** 186143 KB
- **Created:** 2010-08-17
- **Last Updated:** 2026-06-19
- **Default Branch:** main

**Topics:** data-analysis, data-science, machine-learning, python, statistics

## Security Analysis

⚠️ **Found 1 security-related findings.**

## Code Quality Analysis

### Code Quality Metrics

| Metric | Value | Assessment |
|--------|-------|------------|
| Test Coverage | 26.6% | Poor ❌ |
| Documentation | 1.7% | Needs improvement ❌ |
| Complexity Score | 50.0 | Moderate complexity ⚠️ |
| Maintainability Index | 70.0 | Maintainable ⚠️ |

### Code Quality Issues (1472)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/scripts/add_or_remove_no_pr_warning.py | 37 | 🟢 LOW | Debug print statement found |
| .github/scripts/add_or_remove_no_pr_warning.py | 47 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 45 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 46 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 47 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 48 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 49 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 50 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 51 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 52 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 53 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 54 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 55 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 56 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 57 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 58 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 67 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 75 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 77 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 78 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 79 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 80 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 81 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 82 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 84 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 94 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 79 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 87 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 153 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 159 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 160 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 161 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 162 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 163 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 164 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 165 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 175 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 186 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 187 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 188 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 191 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 216 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 218 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 219 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 220 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 221 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 222 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 224 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_covertype.py | 234 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_feature_expansions.py | 23 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glm.py | 26 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glmnet.py | 44 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glmnet.py | 45 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glmnet.py | 46 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glmnet.py | 65 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glmnet.py | 66 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glmnet.py | 67 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glmnet.py | 82 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glmnet.py | 84 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glmnet.py | 107 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glmnet.py | 108 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glmnet.py | 109 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glmnet.py | 126 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_glmnet.py | 128 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 104 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 105 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 130 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 131 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 132 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 138 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 149 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 150 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 151 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 157 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 166 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 167 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 168 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 174 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 185 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 186 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting.py | 187 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_adult.py | 33 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_adult.py | 37 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_adult.py | 49 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_adult.py | 71 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_adult.py | 72 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_adult.py | 73 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_categorical_only.py | 33 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_categorical_only.py | 37 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_categorical_only.py | 48 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_categorical_only.py | 55 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_categorical_only.py | 56 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_higgsboson.py | 47 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_higgsboson.py | 49 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_higgsboson.py | 51 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_higgsboson.py | 56 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_higgsboson.py | 61 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_higgsboson.py | 65 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_higgsboson.py | 77 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_higgsboson.py | 92 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 66 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 67 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 131 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 136 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 154 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 164 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 165 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 166 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 172 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 184 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 185 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 186 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 192 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 202 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 203 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 204 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 210 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 222 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 223 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 224 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_hist_gradient_boosting_threading.py | 260 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest.py | 30 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest.py | 39 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest.py | 41 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest.py | 42 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest.py | 57 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest.py | 58 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest.py | 77 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest.py | 91 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest.py | 122 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest.py | 131 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest.py | 153 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest_predict.py | 45 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest_predict.py | 104 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest_predict.py | 139 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isolation_forest_predict.py | 167 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_isotonic.py | 102 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_kernel_pca_solvers_time_vs_n_components.py | 48 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_kernel_pca_solvers_time_vs_n_components.py | 84 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_kernel_pca_solvers_time_vs_n_components.py | 87 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_kernel_pca_solvers_time_vs_n_components.py | 97 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_kernel_pca_solvers_time_vs_n_components.py | 110 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_kernel_pca_solvers_time_vs_n_samples.py | 53 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_kernel_pca_solvers_time_vs_n_samples.py | 88 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_kernel_pca_solvers_time_vs_n_samples.py | 94 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_kernel_pca_solvers_time_vs_n_samples.py | 104 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_kernel_pca_solvers_time_vs_n_samples.py | 117 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_lasso.py | 32 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_lasso.py | 33 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_lasso.py | 34 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_lasso.py | 47 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_lasso.py | 54 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_lof.py | 30 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_lof.py | 40 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_lof.py | 70 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_lof.py | 91 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 61 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 70 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 154 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 158 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 159 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 160 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 161 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 162 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 163 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 164 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 172 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 181 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 182 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 183 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 186 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 211 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 213 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 214 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 215 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 216 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 221 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 223 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_mnist.py | 229 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_online_ocsvm.py | 37 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_online_ocsvm.py | 46 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_online_ocsvm.py | 48 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_online_ocsvm.py | 49 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_online_ocsvm.py | 67 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_online_ocsvm.py | 119 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_online_ocsvm.py | 120 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_online_ocsvm.py | 134 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_online_ocsvm.py | 148 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_online_ocsvm.py | 165 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_pca_solvers.py | 41 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_pca_solvers.py | 48 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 19 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 20 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 21 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 22 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 25 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 30 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 31 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 32 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 37 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 45 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 46 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 47 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 48 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 78 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 79 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 80 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 81 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 83 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 89 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 90 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_fastkmeans.py | 91 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_hierarchical.py | 18 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_hierarchical.py | 19 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_hierarchical.py | 20 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_hierarchical.py | 21 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_hierarchical.py | 22 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_hierarchical.py | 26 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_hierarchical.py | 31 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_hierarchical.py | 32 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_incremental_pca.py | 27 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_lasso_path.py | 26 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_lasso_path.py | 27 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_lasso_path.py | 28 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_lasso_path.py | 37 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_lasso_path.py | 38 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_lasso_path.py | 42 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_lasso_path.py | 49 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_lasso_path.py | 53 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_lasso_path.py | 58 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_lasso_path.py | 62 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_lasso_path.py | 67 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_lasso_path.py | 71 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_lasso_path.py | 76 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_neighbors.py | 46 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_neighbors.py | 67 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_neighbors.py | 90 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_nmf.py | 375 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_nmf.py | 377 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_nmf.py | 395 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_nmf.py | 396 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_nmf.py | 398 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_nmf.py | 402 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_nmf.py | 410 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_nmf.py | 411 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_nmf.py | 423 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_nmf.py | 424 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_omp_lars.py | 31 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_omp_lars.py | 32 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_omp_lars.py | 33 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_omp_lars.py | 50 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_omp_lars.py | 51 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_omp_lars.py | 56 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_omp_lars.py | 63 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_omp_lars.py | 67 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_omp_lars.py | 72 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_omp_lars.py | 76 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_omp_lars.py | 81 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_omp_lars.py | 85 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_omp_lars.py | 90 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_randomized_svd.py | 142 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_randomized_svd.py | 147 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_randomized_svd.py | 279 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_randomized_svd.py | 314 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_randomized_svd.py | 336 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_randomized_svd.py | 356 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_randomized_svd.py | 375 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_randomized_svd.py | 423 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_randomized_svd.py | 464 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_randomized_svd.py | 478 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_randomized_svd.py | 511 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_randomized_svd.py | 523 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_randomized_svd.py | 526 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_svd.py | 26 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_svd.py | 27 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_svd.py | 28 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_svd.py | 34 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_svd.py | 40 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_plot_svd.py | 46 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 87 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 199 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 200 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 201 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 202 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 204 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 209 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 210 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 211 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 212 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 213 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 249 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 250 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 251 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 256 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 259 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 262 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 268 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 270 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 275 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 276 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 278 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 285 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 287 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 288 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 290 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 291 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 292 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 293 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 294 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 298 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 303 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_random_projections.py | 304 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_rcv1_logreg_convergence.py | 28 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_rcv1_logreg_convergence.py | 76 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_rcv1_logreg_convergence.py | 91 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_rcv1_logreg_convergence.py | 92 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_rcv1_logreg_convergence.py | 93 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_rcv1_logreg_convergence.py | 94 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_rcv1_logreg_convergence.py | 95 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_rcv1_logreg_convergence.py | 96 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_rcv1_logreg_convergence.py | 98 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_rcv1_logreg_convergence.py | 294 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_saga.py | 43 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_saga.py | 46 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_saga.py | 82 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 175 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 176 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 179 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 188 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 190 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 193 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 197 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 198 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 200 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 207 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 209 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 210 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 212 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 213 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 214 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sample_without_replacement.py | 215 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sgd_regression.py | 21 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sgd_regression.py | 48 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sgd_regression.py | 49 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sgd_regression.py | 50 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sgd_regression.py | 51 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sgd_regression.py | 71 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sgd_regression.py | 79 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sgd_regression.py | 96 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sgd_regression.py | 97 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sgd_regression.py | 115 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sparsify.py | 64 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sparsify.py | 69 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sparsify.py | 79 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sparsify.py | 84 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_sparsify.py | 100 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_text_vectorizers.py | 39 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_text_vectorizers.py | 40 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_text_vectorizers.py | 41 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_text_vectorizers.py | 66 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_text_vectorizers.py | 67 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_text_vectorizers.py | 71 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_text_vectorizers.py | 73 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_text_vectorizers.py | 74 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tree.py | 65 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tree.py | 66 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tree.py | 67 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tree.py | 75 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tree.py | 76 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tree.py | 77 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tree.py | 104 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tree.py | 105 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tree.py | 106 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tsne_mnist.py | 38 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tsne_mnist.py | 105 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tsne_mnist.py | 111 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tsne_mnist.py | 186 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_tsne_mnist.py | 198 | 🟢 LOW | Debug print statement found |
| build_tools/circle/list_versions.py | 21 | 🟢 LOW | Debug print statement found |
| build_tools/circle/list_versions.py | 139 | 🟢 LOW | Debug print statement found |
| build_tools/circle/list_versions.py | 143 | 🟢 LOW | Debug print statement found |
| build_tools/generate_authors_table.py | 18 | 🟢 LOW | Debug print statement found |
| build_tools/generate_authors_table.py | 36 | 🟢 LOW | Debug print statement found |
| build_tools/generate_authors_table.py | 66 | 🟢 LOW | Debug print statement found |
| build_tools/generate_authors_table.py | 72 | 🟢 LOW | Debug print statement found |
| build_tools/generate_authors_table.py | 149 | 🟢 LOW | Debug print statement found |
| build_tools/generate_authors_table.py | 217 | 🟢 LOW | Debug print statement found |
| build_tools/get_comment.py | 239 | 🟢 LOW | Debug print statement found |
| build_tools/get_comment.py | 242 | 🟢 LOW | Debug print statement found |
| build_tools/get_comment.py | 312 | 🟢 LOW | Debug print statement found |
| build_tools/get_comment.py | 317 | 🟢 LOW | Debug print statement found |
| build_tools/get_comment.py | 331 | 🟢 LOW | Debug print statement found |
| build_tools/github/autoclose_prs.py | 38 | 🟢 LOW | Debug print statement found |
| build_tools/github/autoclose_prs.py | 47 | 🟢 LOW | Debug print statement found |
| build_tools/github/autoclose_prs.py | 61 | 🟢 LOW | Debug print statement found |
| build_tools/github/check_wheels.py | 23 | 🟢 LOW | Debug print statement found |
| build_tools/github/check_wheels.py | 29 | 🟢 LOW | Debug print statement found |
| build_tools/github/check_wheels.py | 30 | 🟢 LOW | Debug print statement found |
| build_tools/github/vendor.py | 79 | 🟢 LOW | Debug print statement found |
| build_tools/github/vendor.py | 82 | 🟢 LOW | Debug print statement found |
| build_tools/github/vendor.py | 86 | 🟢 LOW | Debug print statement found |
| doc/conf.py | 795 | 🟢 LOW | Debug print statement found |
| doc/conf.py | 813 | 🟢 LOW | Debug print statement found |
| doc/js/scripts/dropdown.js | 44 | 🟢 LOW | Debug console.log statement found |
| doc/js/scripts/dropdown.js | 51 | 🟢 LOW | Debug console.log statement found |
| doc/sphinxext/github_link.py | 15 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_cyclical_feature_engineering.py | 197 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_cyclical_feature_engineering.py | 222 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_cyclical_feature_engineering.py | 225 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_face_recognition.py | 51 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_face_recognition.py | 52 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_face_recognition.py | 53 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_face_recognition.py | 54 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_face_recognition.py | 117 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_face_recognition.py | 134 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_face_recognition.py | 137 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_face_recognition.py | 152 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_face_recognition.py | 156 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_face_recognition.py | 158 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_model_complexity_influence.py | 116 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_model_complexity_influence.py | 130 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_out_of_core_classification.py | 155 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_out_of_core_classification.py | 173 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_out_of_core_classification.py | 176 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_out_of_core_classification.py | 255 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_out_of_core_classification.py | 323 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_out_of_core_classification.py | 325 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_prediction_latency.py | 55 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_prediction_latency.py | 74 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_prediction_latency.py | 107 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_prediction_latency.py | 129 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_prediction_latency.py | 184 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_prediction_latency.py | 221 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_species_distribution_modeling.py | 118 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_species_distribution_modeling.py | 155 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_species_distribution_modeling.py | 156 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_species_distribution_modeling.py | 164 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_species_distribution_modeling.py | 167 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_species_distribution_modeling.py | 172 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_species_distribution_modeling.py | 184 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_species_distribution_modeling.py | 191 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_species_distribution_modeling.py | 240 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_species_distribution_modeling.py | 242 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_stock_market.py | 96 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_stock_market.py | 154 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_time_series_lagged_features.py | 108 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_time_series_lagged_features.py | 181 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 68 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 77 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 80 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 86 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 89 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 95 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 96 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 99 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 113 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 122 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 140 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 151 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 168 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 180 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 197 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 207 | 🟢 LOW | Debug print statement found |
| examples/applications/plot_topics_extraction_with_nmf_lda.py | 221 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 58 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 62 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 86 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 90 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 94 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 97 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 110 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 128 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 131 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 137 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 143 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 148 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 153 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 155 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 169 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 172 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 176 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 199 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 206 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 217 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 224 | 🟢 LOW | Debug print statement found |
| examples/applications/wikipedia_principal_eigenvector.py | 227 | 🟢 LOW | Debug print statement found |
| examples/bicluster/plot_bicluster_newsgroups.py | 88 | 🟢 LOW | Debug print statement found |
| examples/bicluster/plot_bicluster_newsgroups.py | 91 | 🟢 LOW | Debug print statement found |
| examples/bicluster/plot_bicluster_newsgroups.py | 95 | 🟢 LOW | Debug print statement found |
| examples/bicluster/plot_bicluster_newsgroups.py | 101 | 🟢 LOW | Debug print statement found |
| examples/bicluster/plot_bicluster_newsgroups.py | 104 | 🟢 LOW | Debug print statement found |
| examples/bicluster/plot_bicluster_newsgroups.py | 132 | 🟢 LOW | Debug print statement found |
| examples/bicluster/plot_bicluster_newsgroups.py | 133 | 🟢 LOW | Debug print statement found |
| examples/bicluster/plot_bicluster_newsgroups.py | 134 | 🟢 LOW | Debug print statement found |
| examples/bicluster/plot_bicluster_newsgroups.py | 161 | 🟢 LOW | Debug print statement found |
| examples/bicluster/plot_bicluster_newsgroups.py | 162 | 🟢 LOW | Debug print statement found |
| examples/bicluster/plot_bicluster_newsgroups.py | 163 | 🟢 LOW | Debug print statement found |
| examples/bicluster/plot_spectral_biclustering.py | 84 | 🟢 LOW | Debug print statement found |
| examples/bicluster/plot_spectral_coclustering.py | 48 | 🟢 LOW | Debug print statement found |
| examples/calibration/plot_calibration.py | 76 | 🟢 LOW | Debug print statement found |
| examples/calibration/plot_calibration.py | 79 | 🟢 LOW | Debug print statement found |
| examples/calibration/plot_calibration.py | 82 | 🟢 LOW | Debug print statement found |
| examples/calibration/plot_calibration.py | 85 | 🟢 LOW | Debug print statement found |
| examples/calibration/plot_calibration_multiclass.py | 218 | 🟢 LOW | Debug print statement found |
| examples/calibration/plot_calibration_multiclass.py | 219 | 🟢 LOW | Debug print statement found |
| examples/calibration/plot_calibration_multiclass.py | 220 | 🟢 LOW | Debug print statement found |
| examples/calibration/plot_calibration_multiclass.py | 231 | 🟢 LOW | Debug print statement found |
| examples/calibration/plot_calibration_multiclass.py | 232 | 🟢 LOW | Debug print statement found |
| examples/calibration/plot_calibration_multiclass.py | 233 | 🟢 LOW | Debug print statement found |
| examples/classification/plot_digits_classification.py | 91 | 🟢 LOW | Debug print statement found |
| examples/classification/plot_digits_classification.py | 102 | 🟢 LOW | Debug print statement found |
| examples/classification/plot_digits_classification.py | 125 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_affinity_propagation.py | 38 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_affinity_propagation.py | 39 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_affinity_propagation.py | 40 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_affinity_propagation.py | 41 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_affinity_propagation.py | 42 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_affinity_propagation.py | 43 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_affinity_propagation.py | 47 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_birch_vs_minibatchkmeans.py | 64 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_birch_vs_minibatchkmeans.py | 70 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_birch_vs_minibatchkmeans.py | 96 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_coin_segmentation.py | 94 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_coin_ward_segmentation.py | 60 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_coin_ward_segmentation.py | 68 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_coin_ward_segmentation.py | 69 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_coin_ward_segmentation.py | 70 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_dbscan.py | 61 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_dbscan.py | 62 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_dbscan.py | 81 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_dbscan.py | 82 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_dbscan.py | 83 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_dbscan.py | 84 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_dbscan.py | 85 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_dbscan.py | 89 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_dict_face_patches.py | 46 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_dict_face_patches.py | 69 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_dict_face_patches.py | 72 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_digits_linkage.py | 73 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_digits_linkage.py | 75 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_digits_linkage.py | 83 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_face_compress.py | 25 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_face_compress.py | 26 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_face_compress.py | 27 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_face_compress.py | 163 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_face_compress.py | 164 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_face_compress.py | 172 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_kmeans_digits.py | 46 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_kmeans_digits.py | 113 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_kmeans_digits.py | 133 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_kmeans_digits.py | 134 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_kmeans_digits.py | 146 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_kmeans_silhouette_analysis.py | 82 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_kmeans_stability_low_dim_dense.py | 82 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_mean_shift.py | 43 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_ward_structured_vs_unstructured.py | 58 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_ward_structured_vs_unstructured.py | 63 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_ward_structured_vs_unstructured.py | 64 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_ward_structured_vs_unstructured.py | 94 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_ward_structured_vs_unstructured.py | 101 | 🟢 LOW | Debug print statement found |
| examples/cluster/plot_ward_structured_vs_unstructured.py | 102 | 🟢 LOW | Debug print statement found |
| examples/compose/plot_column_transformer.py | 66 | 🟢 LOW | Debug print statement found |
| examples/compose/plot_column_transformer.py | 186 | 🟢 LOW | Debug print statement found |
| examples/compose/plot_column_transformer_mixed_types.py | 102 | 🟢 LOW | Debug print statement found |
| examples/compose/plot_column_transformer_mixed_types.py | 157 | 🟢 LOW | Debug print statement found |
| examples/compose/plot_column_transformer_mixed_types.py | 200 | 🟢 LOW | Debug print statement found |
| examples/compose/plot_column_transformer_mixed_types.py | 201 | 🟢 LOW | Debug print statement found |
| examples/compose/plot_column_transformer_mixed_types.py | 206 | 🟢 LOW | Debug print statement found |
| examples/compose/plot_column_transformer_mixed_types.py | 229 | 🟢 LOW | Debug print statement found |
| examples/compose/plot_digits_pipe.py | 45 | 🟢 LOW | Debug print statement found |
| examples/compose/plot_digits_pipe.py | 46 | 🟢 LOW | Debug print statement found |
| examples/compose/plot_feature_union.py | 45 | 🟢 LOW | Debug print statement found |
| examples/compose/plot_feature_union.py | 61 | 🟢 LOW | Debug print statement found |
| examples/covariance/plot_mahalanobis_distances.py | 116 | 🟢 LOW | Debug print statement found |
| examples/cross_decomposition/plot_compare_cross_decomposition.py | 48 | 🟢 LOW | Debug print statement found |
| examples/cross_decomposition/plot_compare_cross_decomposition.py | 49 | 🟢 LOW | Debug print statement found |
| examples/cross_decomposition/plot_compare_cross_decomposition.py | 50 | 🟢 LOW | Debug print statement found |
| examples/cross_decomposition/plot_compare_cross_decomposition.py | 51 | 🟢 LOW | Debug print statement found |
| examples/cross_decomposition/plot_compare_cross_decomposition.py | 145 | 🟢 LOW | Debug print statement found |
| examples/cross_decomposition/plot_compare_cross_decomposition.py | 146 | 🟢 LOW | Debug print statement found |
| examples/cross_decomposition/plot_compare_cross_decomposition.py | 148 | 🟢 LOW | Debug print statement found |
| examples/cross_decomposition/plot_compare_cross_decomposition.py | 149 | 🟢 LOW | Debug print statement found |
| examples/cross_decomposition/plot_compare_cross_decomposition.py | 163 | 🟢 LOW | Debug print statement found |
| examples/cross_decomposition/plot_compare_cross_decomposition.py | 164 | 🟢 LOW | Debug print statement found |
| examples/cross_decomposition/plot_pcr_vs_pls.py | 159 | 🟢 LOW | Debug print statement found |
| examples/cross_decomposition/plot_pcr_vs_pls.py | 160 | 🟢 LOW | Debug print statement found |
| examples/cross_decomposition/plot_pcr_vs_pls.py | 169 | 🟢 LOW | Debug print statement found |
| examples/datasets/plot_random_multilabel_dataset.py | 106 | 🟢 LOW | Debug print statement found |
| examples/datasets/plot_random_multilabel_dataset.py | 107 | 🟢 LOW | Debug print statement found |
| examples/datasets/plot_random_multilabel_dataset.py | 109 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_faces_decomposition.py | 43 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_image_denoising.py | 61 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_image_denoising.py | 104 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_image_denoising.py | 111 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_image_denoising.py | 119 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_image_denoising.py | 131 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_image_denoising.py | 152 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_image_denoising.py | 158 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_image_denoising.py | 169 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_image_denoising.py | 185 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_pca_iris.py | 28 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_pca_vs_fa_model_selection.py | 97 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_pca_vs_fa_model_selection.py | 98 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_pca_vs_fa_model_selection.py | 99 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_pca_vs_lda.py | 43 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_varimax_fa.py | 66 | 🟢 LOW | Debug print statement found |
| examples/decomposition/plot_varimax_fa.py | 67 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_adaboost_multiclass.py | 117 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_adaboost_multiclass.py | 121 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_bias_variance.py | 152 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_forest_hist_grad_boosting_comparison.py | 49 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_forest_hist_grad_boosting_comparison.py | 69 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_forest_importances.py | 71 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_forest_importances.py | 100 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_forest_iris.py | 109 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_gradient_boosting_categorical.py | 80 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_gradient_boosting_categorical.py | 81 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_gradient_boosting_categorical.py | 82 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_gradient_boosting_categorical.py | 83 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_gradient_boosting_oob.py | 64 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_gradient_boosting_quantile.py | 345 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_gradient_boosting_quantile.py | 366 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_gradient_boosting_regression.py | 89 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_hgbt_regression.py | 106 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_hgbt_regression.py | 107 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_hgbt_regression.py | 108 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_hgbt_regression.py | 420 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_hgbt_regression.py | 424 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_voting_decision_regions.py | 170 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_voting_decision_regions.py | 173 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_voting_decision_regions.py | 182 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_voting_decision_regions.py | 194 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_voting_decision_regions.py | 202 | 🟢 LOW | Debug print statement found |
| examples/ensemble/plot_voting_decision_regions.py | 215 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_feature_selection.py | 85 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_feature_selection.py | 98 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_feature_selection_pipeline.py | 67 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_rfe_with_cross_validation.py | 65 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_rfe_with_cross_validation.py | 111 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_select_from_model_diabetes.py | 29 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_select_from_model_diabetes.py | 77 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_select_from_model_diabetes.py | 78 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_select_from_model_diabetes.py | 110 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_select_from_model_diabetes.py | 114 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_select_from_model_diabetes.py | 115 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_select_from_model_diabetes.py | 119 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_select_from_model_diabetes.py | 160 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_select_from_model_diabetes.py | 184 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_select_from_model_diabetes.py | 185 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_select_from_model_diabetes.py | 186 | 🟢 LOW | Debug print statement found |
| examples/feature_selection/plot_select_from_model_diabetes.py | 187 | 🟢 LOW | Debug print statement found |
| examples/frozen/plot_frozen_examples.py | 37 | 🟢 LOW | Debug print statement found |
| examples/frozen/plot_frozen_examples.py | 41 | 🟢 LOW | Debug print statement found |
| examples/frozen/plot_frozen_examples.py | 63 | 🟢 LOW | Debug print statement found |
| examples/frozen/plot_frozen_examples.py | 67 | 🟢 LOW | Debug print statement found |
| examples/frozen/plot_frozen_examples.py | 94 | 🟢 LOW | Debug print statement found |
| examples/frozen/plot_frozen_examples.py | 98 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_compare_gpr_krr.py | 135 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_compare_gpr_krr.py | 196 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_compare_gpr_krr.py | 210 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_compare_gpr_krr.py | 259 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_compare_gpr_krr.py | 279 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpc.py | 48 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpc.py | 52 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpc.py | 57 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpc.py | 64 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpc_isoprobability.py | 53 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpr_prior_posterior.py | 122 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpr_prior_posterior.py | 123 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpr_prior_posterior.py | 153 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpr_prior_posterior.py | 154 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpr_prior_posterior.py | 189 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpr_prior_posterior.py | 190 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpr_prior_posterior.py | 222 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpr_prior_posterior.py | 223 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpr_prior_posterior.py | 253 | 🟢 LOW | Debug print statement found |
| examples/gaussian_process/plot_gpr_prior_posterior.py | 254 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_causal_interpretation.py | 113 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_causal_interpretation.py | 147 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 218 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 230 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 231 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 264 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 282 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 300 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 311 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 312 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 326 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 336 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 378 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 395 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 417 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 441 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 455 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 477 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 491 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 518 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 534 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 592 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_partial_dependence.py | 611 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_permutation_importance.py | 102 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_permutation_importance.py | 103 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_permutation_importance.py | 212 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_permutation_importance.py | 213 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_permutation_importance_multicollinear.py | 69 | 🟢 LOW | Debug print statement found |
| examples/inspection/plot_permutation_importance_multicollinear.py | 178 | 🟢 LOW | Debug print statement found |
| examples/kernel_approximation/plot_scalable_poly_kernels.py | 95 | 🟢 LOW | Debug print statement found |
| examples/kernel_approximation/plot_scalable_poly_kernels.py | 144 | 🟢 LOW | Debug print statement found |
| examples/kernel_approximation/plot_scalable_poly_kernels.py | 168 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_and_elasticnet.py | 123 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_and_elasticnet.py | 127 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_and_elasticnet.py | 144 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_and_elasticnet.py | 148 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_and_elasticnet.py | 172 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_and_elasticnet.py | 176 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_dense_vs_sparse_data.py | 43 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_dense_vs_sparse_data.py | 47 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_dense_vs_sparse_data.py | 51 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_dense_vs_sparse_data.py | 71 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_dense_vs_sparse_data.py | 79 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_dense_vs_sparse_data.py | 83 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_dense_vs_sparse_data.py | 87 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_lasso_lars_elasticnet_path.py | 51 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_lasso_lars_elasticnet_path.py | 54 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_lasso_lars_elasticnet_path.py | 59 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_lasso_lars_elasticnet_path.py | 62 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_lasso_lars_elasticnet_path.py | 67 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_lasso_lasso_lars_elasticnet_path.py | 70 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_logistic_l1_l2_sparsity.py | 60 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_logistic_l1_l2_sparsity.py | 61 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_logistic_l1_l2_sparsity.py | 62 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_logistic_l1_l2_sparsity.py | 63 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_logistic_l1_l2_sparsity.py | 64 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_logistic_l1_l2_sparsity.py | 65 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_logistic_l1_l2_sparsity.py | 66 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_nnls.py | 47 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_nnls.py | 54 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_ols_ridge.py | 58 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_ols_ridge.py | 59 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_poisson_regression_non_normal_loss.py | 69 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_poisson_regression_non_normal_loss.py | 73 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_poisson_regression_non_normal_loss.py | 170 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_poisson_regression_non_normal_loss.py | 176 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_poisson_regression_non_normal_loss.py | 188 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_poisson_regression_non_normal_loss.py | 194 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_poisson_regression_non_normal_loss.py | 204 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_poisson_regression_non_normal_loss.py | 233 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_poisson_regression_non_normal_loss.py | 262 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_poisson_regression_non_normal_loss.py | 313 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_poisson_regression_non_normal_loss.py | 431 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_poisson_regression_non_normal_loss.py | 445 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_quantile_regression.py | 263 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_quantile_regression.py | 302 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_ransac.py | 60 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_ransac.py | 61 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_ridge_coeffs.py | 81 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_sgd_early_stopping.py | 106 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_sgd_early_stopping.py | 108 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_sgd_early_stopping.py | 118 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_sparse_logistic_regression_20newsgroups.py | 57 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_sparse_logistic_regression_20newsgroups.py | 77 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_sparse_logistic_regression_20newsgroups.py | 106 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_sparse_logistic_regression_20newsgroups.py | 107 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_sparse_logistic_regression_20newsgroups.py | 111 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_sparse_logistic_regression_20newsgroups.py | 131 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_sparse_logistic_regression_mnist.py | 60 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_sparse_logistic_regression_mnist.py | 61 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_sparse_logistic_regression_mnist.py | 62 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_sparse_logistic_regression_mnist.py | 82 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 270 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 319 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 320 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 424 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 425 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 452 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 453 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 467 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 471 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 475 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 479 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 582 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 584 | 🟢 LOW | Debug print statement found |
| examples/linear_model/plot_tweedie_regression_insurance_claims.py | 615 | 🟢 LOW | Debug print statement found |
| examples/manifold/plot_lle_digits.py | 172 | 🟢 LOW | Debug print statement found |
| examples/manifold/plot_manifold_sphere.py | 87 | 🟢 LOW | Debug print statement found |
| examples/manifold/plot_manifold_sphere.py | 104 | 🟢 LOW | Debug print statement found |
| examples/manifold/plot_manifold_sphere.py | 118 | 🟢 LOW | Debug print statement found |
| examples/manifold/plot_manifold_sphere.py | 131 | 🟢 LOW | Debug print statement found |
| examples/manifold/plot_manifold_sphere.py | 144 | 🟢 LOW | Debug print statement found |
| examples/manifold/plot_manifold_sphere.py | 160 | 🟢 LOW | Debug print statement found |
| examples/manifold/plot_manifold_sphere.py | 174 | 🟢 LOW | Debug print statement found |
| examples/manifold/plot_t_sne_perplexity.py | 70 | 🟢 LOW | Debug print statement found |
| examples/manifold/plot_t_sne_perplexity.py | 100 | 🟢 LOW | Debug print statement found |
| examples/manifold/plot_t_sne_perplexity.py | 137 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_estimator_representation.py | 28 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_johnson_lindenstrauss_bound.py | 133 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_johnson_lindenstrauss_bound.py | 149 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_johnson_lindenstrauss_bound.py | 156 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_johnson_lindenstrauss_bound.py | 177 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_kernel_ridge_regression.py | 68 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_kernel_ridge_regression.py | 69 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_kernel_ridge_regression.py | 74 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_kernel_ridge_regression.py | 75 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_kernel_ridge_regression.py | 78 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_kernel_ridge_regression.py | 83 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_kernel_ridge_regression.py | 88 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_metadata_routing.py | 76 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_metadata_routing.py | 80 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_metadata_routing.py | 251 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_metadata_routing.py | 258 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_metadata_routing.py | 270 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_metadata_routing.py | 294 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_metadata_routing.py | 669 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_metadata_routing.py | 691 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_outlier_detection_bench.py | 95 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_outlier_detection_bench.py | 133 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_outlier_detection_bench.py | 178 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_outlier_detection_bench.py | 224 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_outlier_detection_bench.py | 264 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_set_output.py | 42 | 🟢 LOW | Debug print statement found |
| examples/miscellaneous/plot_set_output.py | 46 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_confusion_matrix.py | 69 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_confusion_matrix.py | 70 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_cost_sensitive_learning.py | 254 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_cost_sensitive_learning.py | 283 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_cost_sensitive_learning.py | 384 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_cost_sensitive_learning.py | 408 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_cost_sensitive_learning.py | 561 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_cost_sensitive_learning.py | 572 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_cost_sensitive_learning.py | 603 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_cost_sensitive_learning.py | 638 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_cost_sensitive_learning.py | 641 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_cost_sensitive_learning.py | 679 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_digits.py | 40 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_digits.py | 86 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_digits.py | 91 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_digits.py | 116 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_digits.py | 124 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_digits.py | 149 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_digits.py | 160 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_digits.py | 206 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_refit_callable.py | 335 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_refit_callable.py | 336 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_refit_callable.py | 337 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_refit_callable.py | 338 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_refit_callable.py | 339 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_refit_callable.py | 360 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_refit_callable.py | 361 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_stats.py | 115 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_stats.py | 237 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_stats.py | 245 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_stats.py | 331 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_stats.py | 335 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_stats.py | 372 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_text_feature_extraction.py | 51 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_text_feature_extraction.py | 52 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_text_feature_extraction.py | 53 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_text_feature_extraction.py | 117 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_text_feature_extraction.py | 118 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_text_feature_extraction.py | 126 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_text_feature_extraction.py | 129 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_text_feature_extraction.py | 132 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_text_feature_extraction.py | 136 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_grid_search_text_feature_extraction.py | 140 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_likelihood_ratios.py | 43 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_likelihood_ratios.py | 65 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_nested_cross_validation_iris.py | 95 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_randomized_search.py | 84 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_randomized_search.py | 129 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_randomized_search.py | 168 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_randomized_search.py | 203 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_roc.py | 155 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_roc.py | 156 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_roc.py | 157 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_roc.py | 192 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_roc.py | 207 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_roc.py | 247 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_roc.py | 259 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_roc.py | 331 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_roc.py | 386 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_roc.py | 400 | 🟢 LOW | Debug print statement found |
| examples/model_selection/plot_train_error_vs_test_error.py | 135 | 🟢 LOW | Debug print statement found |
| examples/neighbors/approximate_nearest_neighbors.py | 28 | 🟢 LOW | Debug print statement found |
| examples/neighbors/approximate_nearest_neighbors.py | 34 | 🟢 LOW | Debug print statement found |
| examples/neighbors/approximate_nearest_neighbors.py | 160 | 🟢 LOW | Debug print statement found |
| examples/neighbors/approximate_nearest_neighbors.py | 167 | 🟢 LOW | Debug print statement found |
| examples/neighbors/approximate_nearest_neighbors.py | 171 | 🟢 LOW | Debug print statement found |
| examples/neighbors/approximate_nearest_neighbors.py | 176 | 🟢 LOW | Debug print statement found |
| examples/neighbors/approximate_nearest_neighbors.py | 247 | 🟢 LOW | Debug print statement found |
| examples/neighbors/approximate_nearest_neighbors.py | 254 | 🟢 LOW | Debug print statement found |
| examples/neighbors/plot_digits_kde_sampling.py | 37 | 🟢 LOW | Debug print statement found |
| examples/neighbors/plot_species_kde.py | 113 | 🟢 LOW | Debug print statement found |
| examples/neighbors/plot_species_kde.py | 129 | 🟢 LOW | Debug print statement found |
| examples/neighbors/plot_species_kde.py | 141 | 🟢 LOW | Debug print statement found |
| examples/neural_networks/plot_mlp_training_curves.py | 97 | 🟢 LOW | Debug print statement found |
| examples/neural_networks/plot_mlp_training_curves.py | 109 | 🟢 LOW | Debug print statement found |
| examples/neural_networks/plot_mlp_training_curves.py | 121 | 🟢 LOW | Debug print statement found |
| examples/neural_networks/plot_mlp_training_curves.py | 122 | 🟢 LOW | Debug print statement found |
| examples/neural_networks/plot_mnist_filters.py | 63 | 🟢 LOW | Debug print statement found |
| examples/neural_networks/plot_mnist_filters.py | 64 | 🟢 LOW | Debug print statement found |
| examples/neural_networks/plot_rbm_logistic_classification.py | 115 | 🟢 LOW | Debug print statement found |
| examples/neural_networks/plot_rbm_logistic_classification.py | 122 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_discretization_classification.py | 135 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_discretization_classification.py | 170 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_scaling_importance.py | 236 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_scaling_importance.py | 237 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_scaling_importance.py | 251 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_scaling_importance.py | 252 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_scaling_importance.py | 253 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_scaling_importance.py | 254 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_scaling_importance.py | 255 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_scaling_importance.py | 256 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_scaling_importance.py | 257 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_scaling_importance.py | 258 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_target_encoder_cross_val.py | 107 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_target_encoder_cross_val.py | 108 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_target_encoder_cross_val.py | 122 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_target_encoder_cross_val.py | 123 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_target_encoder_cross_val.py | 161 | 🟢 LOW | Debug print statement found |
| examples/preprocessing/plot_target_encoder_cross_val.py | 165 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_0_22_0.py | 157 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_0_22_0.py | 213 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_0_22_0.py | 226 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_0_22_0.py | 233 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_0_22_0.py | 248 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_0_22_0.py | 296 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_0_23_0.py | 53 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_0_23_0.py | 54 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_0_23_0.py | 111 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_0_23_0.py | 194 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_0_24_0.py | 154 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_1_0.py | 209 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_3_0.py | 59 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_3_0.py | 63 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_3_0.py | 65 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_4_0.py | 52 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_4_0.py | 79 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_4_0.py | 207 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_4_0.py | 238 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_5_0.py | 82 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_5_0.py | 83 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_5_0.py | 102 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_5_0.py | 103 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_5_0.py | 135 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_5_0.py | 145 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_5_0.py | 174 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_5_0.py | 175 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_6_0.py | 46 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_6_0.py | 52 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_8_0.py | 205 | 🟢 LOW | Debug print statement found |
| examples/release_highlights/plot_release_highlights_1_8_0.py | 248 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_label_propagation_digits.py | 71 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_label_propagation_digits.py | 78 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_label_propagation_digits_active_learning.py | 52 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_label_propagation_digits_active_learning.py | 65 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_label_propagation_digits_active_learning.py | 66 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_label_propagation_digits_active_learning.py | 71 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_label_propagation_digits_active_learning.py | 73 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_label_propagation_digits_active_learning.py | 74 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_semi_supervised_newsgroups.py | 99 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_semi_supervised_newsgroups.py | 100 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_semi_supervised_newsgroups.py | 104 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_semi_supervised_newsgroups.py | 105 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_semi_supervised_newsgroups.py | 118 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_semi_supervised_newsgroups.py | 130 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_semi_supervised_newsgroups.py | 143 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_semi_supervised_newsgroups.py | 158 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_semi_supervised_versus_svm_iris.py | 150 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_semi_supervised_versus_svm_iris.py | 151 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_semi_supervised_versus_svm_iris.py | 168 | 🟢 LOW | Debug print statement found |
| examples/semi_supervised/plot_semi_supervised_versus_svm_iris.py | 169 | 🟢 LOW | Debug print statement found |
| examples/svm/plot_rbf_parameters.py | 150 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 97 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 101 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 102 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 103 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 107 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 108 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 112 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 225 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 226 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 252 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 321 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 322 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 323 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 327 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 332 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 335 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 338 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 339 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 340 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 342 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 388 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_classification_20newsgroups.py | 389 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 68 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 135 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 146 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 192 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 193 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 202 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 233 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 234 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 235 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 285 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 286 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 338 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 340 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 341 | 🟢 LOW | Debug print statement found |
| examples/text/plot_document_clustering.py | 366 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 53 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 56 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 132 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 133 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 194 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 195 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 214 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 215 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 236 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 237 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 286 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 287 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 313 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 348 | 🟢 LOW | Debug print statement found |
| examples/text/plot_hashing_vs_dict_vectorizer.py | 349 | 🟢 LOW | Debug print statement found |
| examples/tree/plot_cost_complexity_pruning.py | 65 | 🟢 LOW | Debug print statement found |
| examples/tree/plot_unveil_tree_structure.py | 104 | 🟢 LOW | Debug print statement found |
| examples/tree/plot_unveil_tree_structure.py | 110 | 🟢 LOW | Debug print statement found |
| examples/tree/plot_unveil_tree_structure.py | 116 | 🟢 LOW | Debug print statement found |
| examples/tree/plot_unveil_tree_structure.py | 198 | 🟢 LOW | Debug print statement found |
| examples/tree/plot_unveil_tree_structure.py | 210 | 🟢 LOW | Debug print statement found |
| examples/tree/plot_unveil_tree_structure.py | 232 | 🟢 LOW | Debug print statement found |
| examples/tree/plot_unveil_tree_structure.py | 237 | 🟢 LOW | Debug print statement found |
| maint_tools/bump-dependencies-versions.py | 187 | 🟢 LOW | Debug print statement found |
| maint_tools/bump-dependencies-versions.py | 190 | 🟢 LOW | Debug print statement found |
| maint_tools/check_xfailed_checks.py | 29 | 🟢 LOW | Debug print statement found |
| maint_tools/check_xfailed_checks.py | 31 | 🟢 LOW | Debug print statement found |
| maint_tools/check_xfailed_checks.py | 35 | 🟢 LOW | Debug print statement found |
| maint_tools/check_xfailed_checks.py | 37 | 🟢 LOW | Debug print statement found |
| maint_tools/sort_whats_new.py | 43 | 🟢 LOW | Debug print statement found |
| maint_tools/update_tracking_issue.py | 61 | 🟢 LOW | Debug print statement found |
| maint_tools/update_tracking_issue.py | 65 | 🟢 LOW | Debug print statement found |
| maint_tools/update_tracking_issue.py | 122 | 🟢 LOW | Debug print statement found |
| maint_tools/update_tracking_issue.py | 128 | 🟢 LOW | Debug print statement found |
| maint_tools/update_tracking_issue.py | 133 | 🟢 LOW | Debug print statement found |
| maint_tools/update_tracking_issue.py | 139 | 🟢 LOW | Debug print statement found |
| maint_tools/update_tracking_issue.py | 150 | 🟢 LOW | Debug print statement found |
| sklearn/__init__.py | 149 | 🟢 LOW | Debug print statement found |
| sklearn/_build_utils/version.py | 16 | 🟢 LOW | Debug print statement found |
| sklearn/_config.py | 111 | 🟢 LOW | Debug print statement found |
| sklearn/_config.py | 291 | 🟢 LOW | Debug print statement found |
| sklearn/_min_dependencies.py | 77 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_affinity_propagation.py | 128 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_affinity_propagation.py | 133 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_bisect_k_means.py | 351 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 581 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 588 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 596 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 719 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 726 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 734 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 1516 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 1667 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 1988 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 2006 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 2015 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 2031 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 2118 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_kmeans.py | 2140 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_spectral.py | 174 | 🟢 LOW | Debug print statement found |
| sklearn/cluster/_spectral.py | 757 | 🟢 LOW | Debug print statement found |
| sklearn/covariance/_graph_lasso.py | 187 | 🟢 LOW | Debug print statement found |
| sklearn/covariance/_graph_lasso.py | 711 | 🟢 LOW | Debug print statement found |
| sklearn/covariance/_graph_lasso.py | 716 | 🟢 LOW | Debug print statement found |
| sklearn/covariance/_graph_lasso.py | 1088 | 🟢 LOW | Debug print statement found |
| sklearn/covariance/_robust_covariance.py | 181 | 🟢 LOW | Debug print statement found |
| sklearn/covariance/_robust_covariance.py | 207 | 🟢 LOW | Debug print statement found |
| sklearn/covariance/tests/test_graphical_lasso.py | 161 | 🟢 LOW | Debug print statement found |
| sklearn/datasets/_base.py | 992 | 🟢 LOW | Debug print statement found |
| sklearn/datasets/_california_housing.py | 159 | 🟢 LOW | Debug print statement found |
| sklearn/datasets/_california_housing.py | 161 | 🟢 LOW | Debug print statement found |
| sklearn/datasets/_lfw.py | 384 | 🟢 LOW | Debug print statement found |
| sklearn/datasets/_olivetti_faces.py | 153 | 🟢 LOW | Debug print statement found |
| sklearn/datasets/_samples_generator.py | 1078 | 🟢 LOW | Debug print statement found |
| sklearn/datasets/_samples_generator.py | 1084 | 🟢 LOW | Debug print statement found |
| sklearn/datasets/_samples_generator.py | 2335 | 🟢 LOW | Debug print statement found |
| sklearn/datasets/_twenty_newsgroups.py | 312 | 🟢 LOW | Debug print statement found |
| sklearn/datasets/_twenty_newsgroups.py | 313 | 🟢 LOW | Debug print statement found |
| sklearn/datasets/_twenty_newsgroups.py | 314 | 🟢 LOW | Debug print statement found |
| sklearn/datasets/_twenty_newsgroups.py | 315 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_dict_learning.py | 548 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_dict_learning.py | 600 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_dict_learning.py | 611 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_dict_learning.py | 651 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_dict_learning.py | 653 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_dict_learning.py | 2159 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_dict_learning.py | 2173 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_dict_learning.py | 2182 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_dict_learning.py | 2198 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_dict_learning.py | 2243 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_lda.py | 684 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_lda.py | 694 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_nmf.py | 511 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_nmf.py | 515 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_nmf.py | 872 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_nmf.py | 884 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_nmf.py | 2129 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_nmf.py | 2144 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_nmf.py | 2153 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_nmf.py | 2169 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_pca.py | 355 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_pca.py | 357 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_pca.py | 363 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_pca.py | 365 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_pca.py | 371 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_pca.py | 373 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_truncated_svd.py | 153 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_truncated_svd.py | 155 | 🟢 LOW | Debug print statement found |
| sklearn/decomposition/_truncated_svd.py | 157 | 🟢 LOW | Debug print statement found |
| sklearn/discriminant_analysis.py | 413 | 🟢 LOW | Debug print statement found |
| sklearn/discriminant_analysis.py | 977 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_bagging.py | 136 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_forest.py | 148 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_forest.py | 1499 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_forest.py | 1882 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_gb.py | 299 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_gb.py | 329 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 621 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 783 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 929 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 934 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 939 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 944 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 949 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 1115 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 1133 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 1178 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_voting.py | 297 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_voting.py | 306 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_voting.py | 325 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_voting.py | 327 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/_voting.py | 628 | 🟢 LOW | Debug print statement found |
| sklearn/ensemble/tests/test_bagging.py | 151 | 🟢 LOW | Debug print statement found |
| sklearn/exceptions.py | 59 | 🟢 LOW | Debug print statement found |
| sklearn/externals/_numpydoc/docscrape.py | 606 | 🟢 LOW | Debug print statement found |
| sklearn/externals/_scipy/sparse/csgraph/_laplacian.py | 327 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/image.py | 243 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/image.py | 409 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/image.py | 412 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/image.py | 415 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/image.py | 420 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/image.py | 499 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/image.py | 502 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/image.py | 508 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/image.py | 572 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/image.py | 576 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/image.py | 579 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/text.py | 751 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/text.py | 1116 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/text.py | 1127 | 🟢 LOW | Debug print statement found |
| sklearn/feature_extraction/text.py | 1943 | 🟢 LOW | Debug print statement found |
| sklearn/feature_selection/_rfe.py | 333 | 🟢 LOW | Debug print statement found |
| sklearn/gaussian_process/kernels.py | 108 | 🟢 LOW | Debug print statement found |
| sklearn/gaussian_process/kernels.py | 113 | 🟢 LOW | Debug print statement found |
| sklearn/gaussian_process/kernels.py | 179 | 🟢 LOW | Debug print statement found |
| sklearn/gaussian_process/kernels.py | 534 | 🟢 LOW | Debug print statement found |
| sklearn/gaussian_process/kernels.py | 537 | 🟢 LOW | Debug print statement found |
| sklearn/gaussian_process/kernels.py | 539 | 🟢 LOW | Debug print statement found |
| sklearn/impute/_base.py | 293 | 🟢 LOW | Debug print statement found |
| sklearn/impute/_iterative.py | 817 | 🟢 LOW | Debug print statement found |
| sklearn/impute/_iterative.py | 845 | 🟢 LOW | Debug print statement found |
| sklearn/impute/_iterative.py | 854 | 🟢 LOW | Debug print statement found |
| sklearn/impute/_iterative.py | 861 | 🟢 LOW | Debug print statement found |
| sklearn/impute/_iterative.py | 898 | 🟢 LOW | Debug print statement found |
| sklearn/impute/_iterative.py | 911 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_bayes.py | 337 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_bayes.py | 743 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 385 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 396 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 871 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 873 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 1039 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 1041 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 1043 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 1474 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 1476 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 2469 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 2471 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 2473 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 2685 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 2688 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 2977 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 2980 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 3180 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_coordinate_descent.py | 3183 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 240 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 241 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 264 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 275 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 286 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 304 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 310 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 321 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 334 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 345 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 358 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 398 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 516 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 590 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_glm/_newton_solver.py | 618 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_huber.py | 243 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_huber.py | 245 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_huber.py | 247 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_least_angle.py | 625 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_least_angle.py | 749 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_least_angle.py | 900 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_least_angle.py | 1031 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_least_angle.py | 1352 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_least_angle.py | 2184 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_passive_aggressive.py | 193 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_passive_aggressive.py | 195 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_passive_aggressive.py | 197 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_passive_aggressive.py | 501 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_passive_aggressive.py | 503 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_passive_aggressive.py | 505 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_stochastic_gradient.py | 1251 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_stochastic_gradient.py | 2267 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_theil_sen.py | 416 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_theil_sen.py | 417 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_theil_sen.py | 419 | 🟢 LOW | Debug print statement found |
| sklearn/linear_model/_theil_sen.py | 420 | 🟢 LOW | Debug print statement found |
| sklearn/manifold/_mds.py | 182 | 🟢 LOW | Debug print statement found |
| sklearn/manifold/_mds.py | 187 | 🟢 LOW | Debug print statement found |
| sklearn/manifold/_t_sne.py | 124 | 🟢 LOW | Debug print statement found |
| sklearn/manifold/_t_sne.py | 418 | 🟢 LOW | Debug print statement found |
| sklearn/manifold/_t_sne.py | 430 | 🟢 LOW | Debug print statement found |
| sklearn/manifold/_t_sne.py | 438 | 🟢 LOW | Debug print statement found |
| sklearn/manifold/_t_sne.py | 521 | 🟢 LOW | Debug print statement found |
| sklearn/manifold/_t_sne.py | 918 | 🟢 LOW | Debug print statement found |
| sklearn/manifold/_t_sne.py | 957 | 🟢 LOW | Debug print statement found |
| sklearn/manifold/_t_sne.py | 971 | 🟢 LOW | Debug print statement found |
| sklearn/manifold/_t_sne.py | 981 | 🟢 LOW | Debug print statement found |
| sklearn/manifold/_t_sne.py | 1080 | 🟢 LOW | Debug print statement found |
| sklearn/manifold/_t_sne.py | 1100 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/_classification.py | 3061 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/_classification.py | 3074 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 626 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 628 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 634 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 636 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 702 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 704 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 710 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 712 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 793 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 795 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 802 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 804 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 810 | 🟢 LOW | Debug print statement found |
| sklearn/metrics/cluster/_supervised.py | 816 | 🟢 LOW | Debug print statement found |
| sklearn/mixture/_base.py | 587 | 🟢 LOW | Debug print statement found |
| sklearn/mixture/_base.py | 589 | 🟢 LOW | Debug print statement found |
| sklearn/mixture/_base.py | 597 | 🟢 LOW | Debug print statement found |
| sklearn/mixture/_base.py | 600 | 🟢 LOW | Debug print statement found |
| sklearn/mixture/_base.py | 610 | 🟢 LOW | Debug print statement found |
| sklearn/mixture/_base.py | 613 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_classification_threshold.py | 285 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_classification_threshold.py | 291 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_classification_threshold.py | 634 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_classification_threshold.py | 647 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_classification_threshold.py | 651 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_search.py | 1059 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_search_successive_halving.py | 327 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_search_successive_halving.py | 328 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_search_successive_halving.py | 329 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_search_successive_halving.py | 330 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_search_successive_halving.py | 331 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_search_successive_halving.py | 332 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_search_successive_halving.py | 333 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_search_successive_halving.py | 368 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_search_successive_halving.py | 369 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_search_successive_halving.py | 370 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_search_successive_halving.py | 371 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 197 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 200 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 201 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 202 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 282 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 285 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 286 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 287 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 480 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 483 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 484 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 485 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 585 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 588 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 589 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 590 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 736 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 739 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 740 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 741 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 950 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 953 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 954 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 955 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 956 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 957 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1172 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1175 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1176 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1177 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1198 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1199 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1200 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1213 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1214 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1215 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1359 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1362 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1363 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1364 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1479 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1482 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1483 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1484 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1712 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1715 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1716 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1717 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1785 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1788 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1789 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 1790 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2030 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2033 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2034 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2035 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2055 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2056 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2057 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2150 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2155 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2158 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2159 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2160 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2291 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2294 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2295 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2296 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2548 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2551 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2552 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_split.py | 2553 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 311 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 313 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 648 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 818 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 919 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 1632 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 1634 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 1639 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 1963 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 1964 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 1965 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 2043 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 2436 | 🟢 LOW | Debug print statement found |
| sklearn/model_selection/_validation.py | 2438 | 🟢 LOW | Debug print statement found |
| sklearn/naive_bayes.py | 235 | 🟢 LOW | Debug print statement found |
| sklearn/naive_bayes.py | 240 | 🟢 LOW | Debug print statement found |
| sklearn/naive_bayes.py | 900 | 🟢 LOW | Debug print statement found |
| sklearn/naive_bayes.py | 1036 | 🟢 LOW | Debug print statement found |
| sklearn/naive_bayes.py | 1192 | 🟢 LOW | Debug print statement found |
| sklearn/naive_bayes.py | 1364 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_base.py | 796 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_base.py | 1153 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_base.py | 1155 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_classification.py | 186 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_classification.py | 188 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_classification.py | 610 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_classification.py | 612 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_graph.py | 609 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_nca.py | 180 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_nca.py | 184 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_nca.py | 354 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_nca.py | 439 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_nca.py | 448 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_nca.py | 453 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_nca.py | 501 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_nca.py | 502 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_nca.py | 538 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_nearest_centroid.py | 128 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_regression.py | 165 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/_regression.py | 404 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/tests/test_nca.py | 92 | 🟢 LOW | Debug print statement found |
| sklearn/neighbors/tests/test_nca.py | 497 | 🟢 LOW | Debug print statement found |
| sklearn/neural_network/_multilayer_perceptron.py | 748 | 🟢 LOW | Debug print statement found |
| sklearn/neural_network/_multilayer_perceptron.py | 807 | 🟢 LOW | Debug print statement found |
| sklearn/neural_network/_rbm.py | 428 | 🟢 LOW | Debug print statement found |
| sklearn/neural_network/_stochastic_optimizers.py | 68 | 🟢 LOW | Debug print statement found |
| sklearn/neural_network/_stochastic_optimizers.py | 155 | 🟢 LOW | Debug print statement found |
| sklearn/neural_network/_stochastic_optimizers.py | 160 | 🟢 LOW | Debug print statement found |
| sklearn/neural_network/_stochastic_optimizers.py | 165 | 🟢 LOW | Debug print statement found |
| sklearn/preprocessing/_data.py | 415 | 🟢 LOW | Debug print statement found |
| sklearn/preprocessing/_data.py | 417 | 🟢 LOW | Debug print statement found |
| sklearn/preprocessing/_data.py | 419 | 🟢 LOW | Debug print statement found |
| sklearn/preprocessing/_data.py | 424 | 🟢 LOW | Debug print statement found |
| sklearn/preprocessing/_data.py | 866 | 🟢 LOW | Debug print statement found |
| sklearn/preprocessing/_data.py | 868 | 🟢 LOW | Debug print statement found |
| sklearn/preprocessing/_data.py | 870 | 🟢 LOW | Debug print statement found |
| sklearn/preprocessing/_data.py | 875 | 🟢 LOW | Debug print statement found |
| sklearn/preprocessing/_data.py | 3345 | 🟢 LOW | Debug print statement found |
| sklearn/preprocessing/_data.py | 3347 | 🟢 LOW | Debug print statement found |
| sklearn/preprocessing/_data.py | 3349 | 🟢 LOW | Debug print statement found |
| sklearn/preprocessing/_data.py | 3741 | 🟢 LOW | Debug print statement found |
| sklearn/semi_supervised/_self_training.py | 310 | 🟢 LOW | Debug print statement found |
| sklearn/svm/_base.py | 290 | 🟢 LOW | Debug print statement found |
| sklearn/svm/_base.py | 1249 | 🟢 LOW | Debug print statement found |
| sklearn/svm/_bounds.py | 74 | 🟢 LOW | Debug print statement found |
| sklearn/svm/_classes.py | 236 | 🟢 LOW | Debug print statement found |
| sklearn/svm/_classes.py | 239 | 🟢 LOW | Debug print statement found |
| sklearn/svm/_classes.py | 241 | 🟢 LOW | Debug print statement found |
| sklearn/svm/_classes.py | 507 | 🟢 LOW | Debug print statement found |
| sklearn/svm/_classes.py | 509 | 🟢 LOW | Debug print statement found |
| sklearn/svm/_classes.py | 511 | 🟢 LOW | Debug print statement found |
| sklearn/svm/_classes.py | 867 | 🟢 LOW | Debug print statement found |
| sklearn/svm/_classes.py | 1139 | 🟢 LOW | Debug print statement found |
| sklearn/tests/test_docstrings.py | 216 | 🟢 LOW | Debug print statement found |
| sklearn/tests/test_docstrings.py | 219 | 🟢 LOW | Debug print statement found |
| sklearn/tests/test_metaestimators.py | 257 | 🟢 LOW | Debug print statement found |
| sklearn/tests/test_metaestimators.py | 261 | 🟢 LOW | Debug print statement found |
| sklearn/tests/test_metaestimators.py | 275 | 🟢 LOW | Debug print statement found |
| sklearn/tree/_export.py | 1118 | 🟢 LOW | Debug print statement found |
| sklearn/tree/_reingold_tilford.py | 84 | 🟢 LOW | Debug print statement found |
| sklearn/tree/_reingold_tilford.py | 137 | 🟢 LOW | Debug print statement found |
| sklearn/tree/_reingold_tilford.py | 150 | 🟢 LOW | Debug print statement found |
| sklearn/utils/_available_if.py | 85 | 🟢 LOW | Debug print statement found |
| sklearn/utils/_show_versions.py | 92 | 🟢 LOW | Debug print statement found |
| sklearn/utils/_show_versions.py | 94 | 🟢 LOW | Debug print statement found |
| sklearn/utils/_show_versions.py | 96 | 🟢 LOW | Debug print statement found |
| sklearn/utils/_show_versions.py | 98 | 🟢 LOW | Debug print statement found |
| sklearn/utils/_show_versions.py | 100 | 🟢 LOW | Debug print statement found |
| sklearn/utils/_show_versions.py | 109 | 🟢 LOW | Debug print statement found |
| sklearn/utils/_show_versions.py | 110 | 🟢 LOW | Debug print statement found |
| sklearn/utils/_show_versions.py | 114 | 🟢 LOW | Debug print statement found |
| sklearn/utils/_show_versions.py | 116 | 🟢 LOW | Debug print statement found |
| sklearn/utils/_testing.py | 96 | 🟢 LOW | Debug print statement found |
| sklearn/utils/_user_interface.py | 57 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 108 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 109 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 110 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 116 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 128 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 139 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 159 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 165 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 211 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 223 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 233 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 242 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 255 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 346 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 347 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 348 | 🟢 LOW | Debug print statement found |
| sklearn/utils/optimize.py | 401 | 🟢 LOW | Debug print statement found |
| sklearn/utils/tests/test_class_weight.py | 69 | 🟢 LOW | Debug print statement found |
| sklearn/utils/tests/test_testing.py | 1069 | 🟢 LOW | Debug print statement found |
| sklearn/utils/tests/test_testing.py | 1073 | 🟢 LOW | Debug print statement found |
| sklearn/utils/tests/test_testing.py | 1080 | 🟢 LOW | Debug print statement found |
| sklearn/utils/validation.py | 222 | 🟢 LOW | Debug print statement found |
| sklearn/utils/validation.py | 224 | 🟢 LOW | Debug print statement found |
| sklearn/utils/validation.py | 1698 | 🟢 LOW | Debug print statement found |

### Maintenance Items (291)

| File | Line | Severity | Description |
|------|------|----------|-------------|
| benchmarks/bench_plot_randomized_svd.py | 103 | ⚪ INFO | TODO comment found |
| build_tools/update_environments_and_lock_files.py | 89 | ⚪ INFO | TODO comment found |
| build_tools/update_environments_and_lock_files.py | 161 | ⚪ INFO | TODO comment found |
| build_tools/update_environments_and_lock_files.py | 188 | ⚪ INFO | TODO comment found |
| build_tools/update_environments_and_lock_files.py | 235 | ⚪ INFO | TODO comment found |
| build_tools/update_environments_and_lock_files.py | 358 | ⚪ INFO | TODO comment found |
| doc/conftest.py | 157 | ⚪ INFO | TODO comment found |
| examples/cluster/plot_coin_segmentation.py | 75 | ⚪ INFO | TODO comment found |
| examples/cluster/plot_coin_segmentation.py | 102 | ⚪ INFO | TODO comment found |
| examples/miscellaneous/plot_johnson_lindenstrauss_bound.py | 185 | ⚪ INFO | TODO comment found |
| sklearn/_loss/link.py | 153 | ⚪ INFO | TODO comment found |
| sklearn/_loss/loss.py | 1764 | ⚪ INFO | TODO comment found |
| sklearn/_loss/tests/test_loss.py | 858 | ⚪ INFO | TODO comment found |
| sklearn/_loss/tests/test_loss.py | 893 | ⚪ INFO | TODO comment found |
| sklearn/calibration.py | 929 | ⚪ INFO | TODO comment found |
| sklearn/calibration.py | 991 | ⚪ INFO | TODO comment found |
| sklearn/calibration.py | 1143 | ⚪ INFO | TODO comment found |
| sklearn/cluster/_hdbscan/hdbscan.py | 792 | ⚪ INFO | TODO comment found |
| sklearn/cluster/_hdbscan/hdbscan.py | 854 | ⚪ INFO | TODO comment found |
| sklearn/cluster/_hdbscan/hdbscan.py | 958 | ⚪ INFO | TODO comment found |
| sklearn/cluster/_optics.py | 621 | ⚪ INFO | TODO comment found |
| sklearn/cluster/tests/test_affinity_propagation.py | 30 | ⚪ INFO | TODO comment found |
| sklearn/cluster/tests/test_mean_shift.py | 81 | ⚪ INFO | TODO comment found |
| sklearn/compose/_target.py | 283 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/compose/tests/test_column_transformer.py | 2661 | ⚪ INFO | TODO comment found |
| sklearn/conftest.py | 210 | ⚪ INFO | TODO comment found |
| sklearn/covariance/_graph_lasso.py | 147 | ⚪ INFO | TODO comment found |
| sklearn/covariance/_shrunk_covariance.py | 373 | ⚪ INFO | TODO comment found |
| sklearn/cross_decomposition/tests/test_pls.py | 78 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/datasets/_arff_parser.py | 68 | ⚪ INFO | TODO comment found |
| sklearn/datasets/_openml.py | 367 | ⚪ INFO | TODO comment found |
| sklearn/datasets/_svmlight_format_io.py | 576 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/_dict_learning.py | 142 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/_dict_learning.py | 149 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/_dict_learning.py | 159 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/_lda.py | 459 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/_pca.py | 564 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/_pca.py | 599 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/_pca.py | 752 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/tests/test_dict_learning.py | 40 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/tests/test_dict_learning.py | 223 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/tests/test_dict_learning.py | 244 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/tests/test_dict_learning.py | 638 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/tests/test_dict_learning.py | 993 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/tests/test_nmf.py | 992 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/tests/test_online_lda.py | 187 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/tests/test_online_lda.py | 212 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/tests/test_pca.py | 580 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/tests/test_pca.py | 597 | ⚪ INFO | TODO comment found |
| sklearn/decomposition/tests/test_sparse_pca.py | 77 | ⚪ INFO | TODO comment found |
| sklearn/discriminant_analysis.py | 122 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/_forest.py | 499 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/ensemble/_gb.py | 94 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/_gb.py | 441 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/_gb.py | 672 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/_hist_gradient_boosting/binning.py | 380 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 92 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 455 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 565 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 973 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/_hist_gradient_boosting/gradient_boosting.py | 2114 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/_hist_gradient_boosting/predictor.py | 143 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/_hist_gradient_boosting/tests/test_compare_lightgbm.py | 103 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/tests/test_bagging.py | 471 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/tests/test_bagging.py | 515 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/tests/test_bagging.py | 556 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/tests/test_common.py | 253 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/ensemble/tests/test_forest.py | 1552 | ⚪ INFO | TODO comment found |
| sklearn/ensemble/tests/test_gradient_boosting.py | 174 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/ensemble/tests/test_gradient_boosting.py | 690 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/externals/array_api_compat/common/_aliases.py | 17 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/common/_aliases.py | 310 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/common/_aliases.py | 382 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/common/_helpers.py | 42 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/common/_helpers.py | 116 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/common/_helpers.py | 271 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/common/_helpers.py | 292 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/common/_helpers.py | 306 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/common/_helpers.py | 313 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/common/_helpers.py | 917 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/cupy/_info.py | 181 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/cupy/_info.py | 243 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/dask/array/_aliases.py | 64 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/dask/array/_aliases.py | 95 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/dask/array/_aliases.py | 159 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/dask/array/_aliases.py | 220 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/dask/array/linalg.py | 23 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_compat/dask/array/linalg.py | 50 | ⚪ INFO | TODO comment found |
| sklearn/externals/array_api_extra/_lib/_funcs.py | 286 | ⚪ INFO | TODO comment found |
| sklearn/feature_extraction/text.py | 1744 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/feature_selection/_univariate_selection.py | 372 | ⚪ INFO | TODO comment found |
| sklearn/feature_selection/tests/test_from_model.py | 472 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/gaussian_process/tests/test_gpr.py | 777 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/inspection/_partial_dependence.py | 117 | ⚪ INFO | TODO comment found |
| sklearn/inspection/_plot/tests/test_boundary_decision_display.py | 778 | ⚪ INFO | TODO comment found |
| sklearn/inspection/_plot/tests/test_boundary_decision_display.py | 808 | ⚪ INFO | TODO comment found |
| sklearn/inspection/tests/test_partial_dependence.py | 680 | ⚪ INFO | TODO comment found |
| sklearn/inspection/tests/test_partial_dependence.py | 703 | ⚪ INFO | TODO comment found |
| sklearn/isotonic.py | 162 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_base.py | 52 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_base.py | 891 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_coordinate_descent.py | 169 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_coordinate_descent.py | 1779 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_coordinate_descent.py | 2799 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_glm/_newton_solver.py | 405 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_glm/glm.py | 247 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_glm/glm.py | 442 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_glm/glm.py | 446 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_glm/tests/test_glm.py | 412 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/linear_model/_least_angle.py | 818 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_least_angle.py | 875 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_least_angle.py | 893 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_linear_loss.py | 22 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_logistic.py | 1519 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/_stochastic_gradient.py | 159 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/tests/test_base.py | 674 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/tests/test_common.py | 68 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/tests/test_coordinate_descent.py | 616 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/tests/test_coordinate_descent.py | 1603 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/tests/test_least_angle.py | 29 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/tests/test_least_angle.py | 120 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/tests/test_least_angle.py | 132 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/tests/test_logistic.py | 869 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/linear_model/tests/test_logistic.py | 1710 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/linear_model/tests/test_logistic.py | 1792 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/linear_model/tests/test_logistic.py | 1826 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/linear_model/tests/test_logistic.py | 1869 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/linear_model/tests/test_logistic.py | 2791 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/tests/test_ridge.py | 329 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/linear_model/tests/test_ridge.py | 391 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/linear_model/tests/test_ridge.py | 446 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/linear_model/tests/test_ridge.py | 2531 | ⚪ INFO | TODO comment found |
| sklearn/linear_model/tests/test_sag.py | 490 | ⚪ INFO | TODO comment found |
| sklearn/manifold/tests/test_isomap.py | 234 | ⚪ INFO | TODO comment found |
| sklearn/manifold/tests/test_locally_linear.py | 48 | ⚪ INFO | TODO comment found |
| sklearn/manifold/tests/test_mds.py | 127 | ⚪ INFO | TODO comment found |
| sklearn/manifold/tests/test_spectral_embedding.py | 128 | ⚪ INFO | TODO comment found |
| sklearn/manifold/tests/test_t_sne.py | 321 | ⚪ INFO | TODO comment found |
| sklearn/manifold/tests/test_t_sne.py | 1020 | ⚪ INFO | TODO comment found |
| sklearn/metrics/_pairwise_distances_reduction/_dispatcher.py | 76 | ⚪ INFO | TODO comment found |
| sklearn/metrics/_pairwise_distances_reduction/_dispatcher.py | 105 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/metrics/_pairwise_distances_reduction/_dispatcher.py | 124 | ⚪ INFO | TODO comment found |
| sklearn/metrics/_pairwise_distances_reduction/_dispatcher.py | 127 | ⚪ INFO | TODO comment found |
| sklearn/metrics/_pairwise_distances_reduction/_dispatcher.py | 472 | ⚪ INFO | TODO comment found |
| sklearn/metrics/_pairwise_distances_reduction/_dispatcher.py | 640 | ⚪ INFO | TODO comment found |
| sklearn/metrics/_plot/tests/test_common_curve_display.py | 263 | ⚪ INFO | TODO comment found |
| sklearn/metrics/_plot/tests/test_common_curve_display.py | 308 | ⚪ INFO | TODO comment found |
| sklearn/metrics/pairwise.py | 2001 | ⚪ INFO | TODO comment found |
| sklearn/metrics/pairwise.py | 2022 | ⚪ INFO | TODO comment found |
| sklearn/metrics/tests/test_classification.py | 3213 | ⚪ INFO | TODO comment found |
| sklearn/metrics/tests/test_common.py | 399 | ⚪ INFO | TODO comment found |
| sklearn/metrics/tests/test_dist_metrics.py | 80 | ⚪ INFO | TODO comment found |
| sklearn/metrics/tests/test_dist_metrics.py | 164 | ⚪ INFO | TODO comment found |
| sklearn/metrics/tests/test_pairwise.py | 1842 | ⚪ INFO | TODO comment found |
| sklearn/metrics/tests/test_pairwise_distances_reduction.py | 698 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/metrics/tests/test_pairwise_distances_reduction.py | 709 | ⚪ INFO | TODO comment found |
| sklearn/metrics/tests/test_pairwise_distances_reduction.py | 716 | ⚪ INFO | TODO comment found |
| sklearn/metrics/tests/test_pairwise_distances_reduction.py | 913 | ⚪ INFO | TODO comment found |
| sklearn/metrics/tests/test_score_objects.py | 1445 | ⚪ INFO | TODO comment found |
| sklearn/mixture/_base.py | 143 | ⚪ INFO | TODO comment found |
| sklearn/model_selection/__init__.py | 51 | ⚪ INFO | TODO comment found |
| sklearn/model_selection/__init__.py | 97 | ⚪ INFO | TODO comment found |
| sklearn/model_selection/_search_successive_halving.py | 419 | ⚪ INFO | TODO comment found |
| sklearn/model_selection/tests/test_search.py | 2105 | ⚪ INFO | TODO comment found |
| sklearn/model_selection/tests/test_search.py | 2133 | ⚪ INFO | TODO comment found |
| sklearn/model_selection/tests/test_search.py | 2550 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/model_selection/tests/test_search.py | 2635 | ⚪ INFO | TODO comment found |
| sklearn/multiclass.py | 1209 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/multioutput.py | 752 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/_classification.py | 334 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/_classification.py | 342 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/_classification.py | 367 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/_kde.py | 40 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/_kde.py | 41 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/_kde.py | 334 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/tests/test_kd_tree.py | 33 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/tests/test_lof.py | 252 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/tests/test_neighbors.py | 381 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/tests/test_neighbors.py | 1626 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/tests/test_neighbors.py | 1730 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/tests/test_neighbors.py | 2102 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/tests/test_neighbors.py | 2259 | ⚪ INFO | TODO comment found |
| sklearn/neighbors/tests/test_neighbors.py | 2494 | ⚪ INFO | TODO comment found |
| sklearn/neural_network/_base.py | 211 | ⚪ INFO | TODO comment found |
| sklearn/neural_network/_multilayer_perceptron.py | 660 | ⚪ INFO | TODO comment found |
| sklearn/preprocessing/_data.py | 2417 | ⚪ INFO | TODO comment found |
| sklearn/preprocessing/tests/test_common.py | 99 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/preprocessing/tests/test_data.py | 817 | ⚪ INFO | TODO comment found |
| sklearn/preprocessing/tests/test_data.py | 831 | ⚪ INFO | TODO comment found |
| sklearn/preprocessing/tests/test_discretization.py | 492 | ⚪ INFO | TODO comment found |
| sklearn/preprocessing/tests/test_target_encoder.py | 726 | ⚪ INFO | TODO comment found |
| sklearn/svm/_base.py | 350 | ⚪ INFO | TODO comment found |
| sklearn/svm/tests/test_svm.py | 69 | ⚪ INFO | TODO comment found |
| sklearn/svm/tests/test_svm.py | 325 | ⚪ INFO | TODO comment found |
| sklearn/svm/tests/test_svm.py | 504 | ⚪ INFO | TODO comment found |
| sklearn/svm/tests/test_svm.py | 683 | ⚪ INFO | TODO comment found |
| sklearn/tests/test_calibration.py | 215 | ⚪ INFO | TODO comment found |
| sklearn/tests/test_calibration.py | 1348 | ⚪ INFO | TODO comment found |
| sklearn/tests/test_common.py | 225 | ⚪ INFO | TODO comment found |
| sklearn/tests/test_common.py | 271 | ⚪ INFO | TODO comment found |
| sklearn/tests/test_docstrings.py | 202 | ⚪ INFO | TODO comment found |
| sklearn/tests/test_metadata_routing.py | 950 | ⚪ INFO | TODO comment found |
| sklearn/tests/test_metaestimators.py | 279 | ⚪ INFO | TODO comment found |
| sklearn/tests/test_multiclass.py | 916 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/tests/test_multioutput.py | 198 | ⚪ INFO | TODO comment found |
| sklearn/tests/test_multioutput.py | 748 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/tests/test_naive_bayes.py | 322 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/tests/test_pipeline.py | 1047 | ⚪ INFO | TODO comment found |
| sklearn/tests/test_pipeline.py | 1832 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/tree/_classes.py | 437 | ⚪ INFO | TODO comment found |
| sklearn/tree/_classes.py | 615 | ⚪ INFO | TODO comment found |
| sklearn/utils/_array_api.py | 24 | ⚪ INFO | TODO comment found |
| sklearn/utils/_array_api.py | 600 | ⚪ INFO | TODO comment found |
| sklearn/utils/_array_api.py | 601 | ⚪ INFO | TODO comment found |
| sklearn/utils/_array_api.py | 700 | ⚪ INFO | TODO comment found |
| sklearn/utils/_array_api.py | 730 | ⚪ INFO | TODO comment found |
| sklearn/utils/_array_api.py | 899 | ⚪ INFO | TODO comment found |
| sklearn/utils/_array_api.py | 920 | ⚪ INFO | TODO comment found |
| sklearn/utils/_array_api.py | 929 | ⚪ INFO | TODO comment found |
| sklearn/utils/_array_api.py | 949 | ⚪ INFO | TODO comment found |
| sklearn/utils/_array_api.py | 969 | ⚪ INFO | TODO comment found |
| sklearn/utils/_array_api.py | 984 | ⚪ INFO | TODO comment found |
| sklearn/utils/_array_api.py | 1243 | ⚪ INFO | TODO comment found |
| sklearn/utils/_array_api.py | 1364 | ⚪ INFO | TODO comment found |
| sklearn/utils/_indexing.py | 89 | ⚪ INFO | TODO comment found |
| sklearn/utils/_indexing.py | 295 | ⚪ INFO | TODO comment found |
| sklearn/utils/_plotting.py | 185 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 615 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 903 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 912 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 921 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 930 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 946 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 998 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1007 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1042 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1051 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1060 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1077 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1095 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1107 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1116 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1128 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1138 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1139 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1152 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1170 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1180 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1185 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1214 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1221 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1227 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1240 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1249 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1274 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1283 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1292 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1327 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1328 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1338 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1356 | ⚪ INFO | TODO comment found |
| sklearn/utils/_test_common/instance_generator.py | 1394 | ⚪ INFO | TODO comment found |
| sklearn/utils/_testing.py | 1431 | ⚪ INFO | TODO comment found |
| sklearn/utils/estimator_checks.py | 263 | ⚪ INFO | TODO comment found |
| sklearn/utils/estimator_checks.py | 264 | ⚪ INFO | TODO comment found |
| sklearn/utils/estimator_checks.py | 3748 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 28 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 51 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 64 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 69 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 74 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 87 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 195 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 212 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 259 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 329 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 338 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 382 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 392 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 451 | ⚪ INFO | TODO comment found |
| sklearn/utils/fixes.py | 468 | ⚪ INFO | TODO comment found |
| sklearn/utils/optimize.py | 37 | ⚪ INFO | TODO comment found |
| sklearn/utils/optimize.py | 155 | ⚪ INFO | TODO comment found |
| sklearn/utils/tests/test_array_api.py | 385 | ⚪ INFO | TODO comment found |
| sklearn/utils/tests/test_array_api.py | 1014 | ⚪ INFO | TODO comment found |
| sklearn/utils/tests/test_estimator_checks.py | 1480 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/utils/tests/test_plotting.py | 199 | ⚪ INFO | TODO comment found |
| sklearn/utils/tests/test_stats.py | 431 | ⚪ INFO | TODO comment found |
| sklearn/utils/tests/test_stats.py | 469 | ⚪ INFO | TODO comment found |
| sklearn/utils/tests/test_validation.py | 23 | ⚪ INFO | TODO comment found |
| sklearn/utils/validation.py | 643 | ⚪ INFO | TODO comment found |

## Detailed Findings

### CODE_QUALITY

**Total:** 1472 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| .github/scripts/add_or_remove_no_pr_warning.py | 37 | 🟢 LOW | Debug print statement found |
| .github/scripts/add_or_remove_no_pr_warning.py | 47 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 45 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 46 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 47 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 48 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 49 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 50 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 51 | 🟢 LOW | Debug print statement found |
| benchmarks/bench_20newsgroups.py | 52 | 🟢 LOW | Debug print statement found |

*... and 1462 more*

### MAINTENANCE

**Total:** 291 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| sklearn/compose/_target.py | 283 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/cross_decomposition/tests/test_pls.py | 78 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/ensemble/_forest.py | 499 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/ensemble/tests/test_common.py | 253 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/ensemble/tests/test_gradient_boosting.py | 174 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/ensemble/tests/test_gradient_boosting.py | 690 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/feature_extraction/text.py | 1744 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/feature_selection/tests/test_from_model.py | 472 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/gaussian_process/tests/test_gpr.py | 777 | 🟡 MEDIUM | FIXME comment indicating known issue |
| sklearn/linear_model/_glm/tests/test_glm.py | 412 | 🟡 MEDIUM | FIXME comment indicating known issue |

*... and 281 more*

### SECURITY

**Total:** 1 findings

| File | Line | Severity | Description |
|------|------|----------|-------------|
| sklearn/datasets/_openml.py | 548 | 🟡 MEDIUM | Weak cryptographic algorithm detected |

## Quality Metrics

### Overall Quality Score Breakdown

**Final Score:** 99/100 (Tier A)

| Component | Impact | Score |
|-----------|--------|-------|
| Security Issues | -0 | Good ✅ |
| Code Quality | -1617 | Needs improvement ⚠️ |
| Test Coverage | +2 | Good |
| Documentation | +0 | Needs improvement ❌ |

## Recommendations

1. **Improve Test Coverage**
   - Priority: MEDIUM
   - Current test coverage is 26.6%. Aim for at least 70% coverage.

2. **Enhance Documentation**
   - Priority: MEDIUM
   - Add comprehensive documentation including README, API docs, and code comments.

