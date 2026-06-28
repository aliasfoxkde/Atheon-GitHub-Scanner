/**
 * Mock realScannerData service for testing
 */

const mockData = {
  total_repositories: 2209,
  total_packages: 2209,
  average_quality_score: 99.6,
  total_scans: 2209,
  tier_distribution: { A: 2100, B: 80, C: 20, D: 7, F: 2 },
  language_distribution: { JavaScript: 100, Python: 50, TypeScript: 30 },
  top_languages: [
    { language: 'JavaScript', count: 100, avgScore: 95 },
    { language: 'Python', count: 50, avgScore: 88 },
    { language: 'TypeScript', count: 30, avgScore: 92 },
  ],
  recent_scans: [
    { id: '1', name: 'test-repo', language: 'JavaScript', quality_score: 95 },
    { id: '2', name: 'python-repo', language: 'Python', quality_score: 88 },
    { id: '3', name: 'ts-repo', language: 'TypeScript', quality_score: 92 },
  ],
  security_stats: { total_findings: 9, critical: 2, high: 7 },
  data_source: 'MOCK',
  data_files_count: 5,
  last_updated: new Date().toISOString(),
};

export const loadRealScannerData = async () => mockData;

export const getAllRepositories = async (
  page = 1,
  limit = 50,
  language = null,
  tier = null,
  signal,
  search = '',
  minScore = ''
) => {
  let repos = [...mockData.recent_scans];

  if (language) repos = repos.filter((r) => r.language === language);
  if (tier) repos = repos.filter((r) => r.tier === tier);
  if (search) {
    const q = search.toLowerCase();
    repos = repos.filter(
      (r) => r.name.toLowerCase().includes(q) || r.language.toLowerCase().includes(q)
    );
  }
  if (minScore) {
    const min = Number(minScore);
    if (!Number.isNaN(min)) repos = repos.filter((r) => (r.quality_score || 0) >= min);
  }

  const total = repos.length;
  const pages = Math.ceil(total / limit);
  const start = (page - 1) * limit;

  return { repositories: repos.slice(start, start + limit), total, page, limit, pages };
};

export const getEcosystemData = async () => {
  const ecosystem_comparison = {};
  const langScores = {};
  for (const entry of mockData.top_languages) {
    if (entry.language) langScores[entry.language] = entry.avgScore;
  }
  for (const [lang, count] of Object.entries(mockData.language_distribution)) {
    ecosystem_comparison[lang] = {
      repository_count: count,
      average_quality_score: langScores[lang] ?? 90,
    };
  }
  return { ecosystem_comparison, total_ecosystems: Object.keys(ecosystem_comparison).length };
};

export const getLanguageData = async () => ({
  languages: mockData.language_distribution,
  top_languages: mockData.top_languages,
});

export const getPatternData = async () => ({
  dependency_analysis: { total: 100 },
  file_analysis: { total: 500 },
  quality_analysis: { average: 90 },
});

export const checkApiHealth = async () => ({
  status: 'healthy',
  timestamp: new Date().toISOString(),
  data_files_found: mockData.data_files_count,
  total_records: mockData.total_repositories,
  data_source: 'embedded_mock_data',
});

export const refreshDataCache = async () => mockData;

export const isApiAvailable = async () => true;

export const getApiConfig = () => ({
  baseUrl: 'https://atheon-scanner-api.workers.dev',
  embeddedUrl: '/embedded-data.json',
  endpoints: {
    stats: '/api/stats',
    repositories: '/api/repositories',
    embedded: '/embedded-data.json',
  },
});
