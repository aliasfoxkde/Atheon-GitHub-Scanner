package scanner

import (
	"strings"
)

// RepositoryList contains curated lists of repositories by category and language
type RepositoryList struct {
	WebFrameworks []string
	CLITools      []string
	Libraries     []string
	Databases     []string
	Testing       []string
	DevOps        []string
	ML_AI         []string
	Documentation []string
}

// GetPopularRepositories returns a curated list of popular repositories by category
func GetPopularRepositories() *RepositoryList {
	return &RepositoryList{
		WebFrameworks: []string{
			"facebook/react",
			"vuejs/vue",
			"sveltejs/svelte",
			"angular/angular",
			"nextjs/next.js",
			"nuxt/nuxt.js",
			"remix-run/remix",
			"gatsbyjs/gatsby",
			"vercel/next.js",
			"astro/astro",
		},
		CLITools: []string{
			"cli/cli",
			"rust-lang/rust",
			"golang/go",
			"python/cpython",
			"nodejs/node",
			"docker/docker-ce",
			"kubernetes/kubernetes",
			"git/git",
			"vim/vim",
			"neovim/neovim",
		},
		Libraries: []string{
			"lodash/lodash",
			"moment/moment",
			"axios/axios",
			"expressjs/express",
			"airbnb/javascript",
			"facebook/jsc",
			"mrdoob/three.js",
			"d3/d3",
			"chakra-ui/chakra-ui",
			"vercel/swr",
		},
		Databases: []string{
			"postgres/postgres",
			"mongodb/mongo",
			"redis/redis",
			"elastic/elasticsearch",
			"cockroachdb/cockroach",
			"apache/cassandra",
			"neo4j/neo4j",
			"influxdata/influxdb",
			"timescale/timescaledb",
			"clickhouse/clickhouse",
		},
		Testing: []string{
			"jestjs/jest",
			"testing-library/react-testing-library",
			"pytest-dev/pytest",
			"google/googletest",
			"apache/jmeter",
			"appium/appium",
			"cypress-io/cypress",
			"puppeteer/puppeteer",
			"seleniumhq/selenium",
			"microsoft/playwright",
		},
		DevOps: []string{
			"ansible/ansible",
			"hashicorp/terraform",
			"puppetlabs/puppet",
			"chef/chef",
			"gitlabhq/gitlab",
			"jenkinsci/jenkins",
			"prometheus/prometheus",
			"grafana/grafana",
			"elastic/logstash",
			"nginx/nginx",
		},
		ML_AI: []string{
			"tensorflow/tensorflow",
			"pytorch/pytorch",
			"scikit-learn/scikit-learn",
			"keras-team/keras",
			"huggingface/transformers",
			"openai/gym",
			"langchain-ai/langchain",
			"microsoft/semantic-kernel",
			"facebookresearch/detectron2",
			"ultralytics/ultralytics",
		},
		Documentation: []string{
			"swagger-api/swagger-ui",
			"slatedocs/slate",
			"docsifyjs/docsify",
			"vuejs/vitepress",
			"mkdocs/mkdocs",
			"squidfunk/mkdocs-material",
			"rust-lang/rustlings",
			"jamstack/jamstack.org",
			"documentationjs/documentation",
			"docusaurus/docusaurus",
		},
	}
}

// GetRepositoriesByLanguage returns repositories filtered by primary language
func GetRepositoriesByLanguage(language string) []string {
	allRepos := GetPopularRepositories()
	var result []string

	language = strings.ToLower(language)

	for _, repo := range allRepos.WebFrameworks {
		if containsLanguage(repo, language) {
			result = append(result, repo)
		}
	}
	for _, repo := range allRepos.CLITools {
		if containsLanguage(repo, language) {
			result = append(result, repo)
		}
	}
	for _, repo := range allRepos.Libraries {
		if containsLanguage(repo, language) {
			result = append(result, repo)
		}
	}
	for _, repo := range allRepos.Databases {
		if containsLanguage(repo, language) {
			result = append(result, repo)
		}
	}
	for _, repo := range allRepos.Testing {
		if containsLanguage(repo, language) {
			result = append(result, repo)
		}
	}
	for _, repo := range allRepos.DevOps {
		if containsLanguage(repo, language) {
			result = append(result, repo)
		}
	}
	for _, repo := range allRepos.ML_AI {
		if containsLanguage(repo, language) {
			result = append(result, repo)
		}
	}
	for _, repo := range allRepos.Documentation {
		if containsLanguage(repo, language) {
			result = append(result, repo)
		}
	}

	return result
}

// GetAllRepositories returns all repositories from all categories
func GetAllRepositories() []string {
	allRepos := GetPopularRepositories()
	var result []string

	result = append(result, allRepos.WebFrameworks...)
	result = append(result, allRepos.CLITools...)
	result = append(result, allRepos.Libraries...)
	result = append(result, allRepos.Databases...)
	result = append(result, allRepos.Testing...)
	result = append(result, allRepos.DevOps...)
	result = append(result, allRepos.ML_AI...)
	result = append(result, allRepos.Documentation...)

	return result
}

// GetCategory returns the category for a given repository
func GetCategory(repoFullName string) string {
	allRepos := GetPopularRepositories()

	for _, repo := range allRepos.WebFrameworks {
		if repo == repoFullName {
			return "Web Framework"
		}
	}
	for _, repo := range allRepos.CLITools {
		if repo == repoFullName {
			return "CLI Tool"
		}
	}
	for _, repo := range allRepos.Libraries {
		if repo == repoFullName {
			return "Library"
		}
	}
	for _, repo := range allRepos.Databases {
		if repo == repoFullName {
			return "Database"
		}
	}
	for _, repo := range allRepos.Testing {
		if repo == repoFullName {
			return "Testing"
		}
	}
	for _, repo := range allRepos.DevOps {
		if repo == repoFullName {
			return "DevOps"
		}
	}
	for _, repo := range allRepos.ML_AI {
		if repo == repoFullName {
			return "ML/AI"
		}
	}
	for _, repo := range allRepos.Documentation {
		if repo == repoFullName {
			return "Documentation"
		}
	}

	return "Other"
}

// containsLanguage checks if a repository likely uses the given language
func containsLanguage(repo, language string) bool {
	repo = strings.ToLower(repo)
	language = strings.ToLower(language)

	// Simple heuristic based on repo owner/name
	knownMappings := map[string][]string{
		"javascript": {"react", "vue", "angular", "next", "nuxt", "express", "axios", "lodash", "d3", "three"},
		"typescript": {"angular", "vue", "astro", "nestjs", "nestjs"},
		"python":     {"python", "django", "flask", "pytest", "tensorflow", "pytorch", "keras", "scikit"},
		"go":         {"golang", "go", "kubernetes", "docker", "prometheus", "grafana", "terraform"},
		"rust":       {"rust", "tokio", "actix", "yew"},
		"java":       {"spring", "apache", "jetbrains", "java"},
		"ruby":       {"rails", "ruby", "jekyll", "chef", "puppet"},
		"php":        {"laravel", "symfony", "php"},
		"c++":        {"cpp", "mongodb", "redis", "postgresql", "mysql"},
	}

	for lang, repos := range knownMappings {
		if lang == language {
			for _, r := range repos {
				if strings.Contains(repo, r) {
					return true
				}
			}
		}
	}

	return false
}
