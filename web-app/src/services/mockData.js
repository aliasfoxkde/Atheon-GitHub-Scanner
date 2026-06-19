// HONEST Mock Data Service - No fake claims
// This reflects the actual state: no real scans have been performed yet

export const mockReports = [
  {
    id: 'demo_1',
    repo_name: 'react/react',
    full_name: 'react/react',
    description: 'The library for web and native user interfaces.',
    category: 'demo-data',
    language: 'JavaScript',
    stars: 245961,
    forks: 46000,
    open_issues: 1800,
    quality_score: 0,
    tier: 'N/A',
    total_findings: 0,
    critical_findings: 0,
    high_findings: 0,
    medium_findings: 0,
    low_findings: 0,
    scan_date: null,
    created_at: '2013-05-24T16:13:19Z',
    updated_at: null,
    topics: ['declarative', 'frontend', 'javascript', 'library', 'react', 'ui'],
    license: { key: 'mit', name: 'MIT License' },
    findings: [],
    metrics: {
      code_quality: 0,
      security: 0,
      maintainability: 0,
      documentation: 0,
      test_coverage: 0
    },
    note: 'DEMO DATA ONLY - No actual scan performed'
  }
];

export const mockStats = {
  total_repositories: 0,  // HONEST: No repositories scanned yet
  total_scans: 0,         // HONEST: No scans performed
  average_quality_score: 0, // HONEST: No data to average
  tier_distribution: {
    A: 0, B: 0, C: 0, D: 0, F: 0  // HONEST: No tier data available
  },
  top_languages: [
    // HONEST: No language data available yet
  ],
  security_stats: {
    total_findings: 0,    // HONEST: No vulnerabilities found
    critical: 0,
    high: 0,
    medium: 0,
    low: 0
  },
  recent_scans: [],  // HONEST: No recent scans
  system_status: 'NO_SCANS_PERFORMED',  // HONEST status
  message: 'System has not performed any repository scans yet. This is demo data only.',
  last_updated: new Date().toISOString()
};

export const mockCategories = [
  { id: 'demo', name: 'Demo Data', count: 1, description: 'Demo data only - no real scans' }
];

export const mockLanguages = [
  { id: 'javascript', name: 'JavaScript', count: 0 },
  { id: 'python', name: 'Python', count: 0 },
  { id: 'typescript', name: 'TypeScript', count: 0 }
];

export const mockTrending = [];

// Helper function to simulate API delay
export const simulateApiCall = (data, delay = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ success: true, data }), delay);
  });
};

// Filter reports helper
export const filterReports = (reports, filters) => {
  return reports.filter(report => {
    if (filters.category && report.category !== filters.category) return false;
    if (filters.tier && report.tier !== filters.tier) return false;
    if (filters.language && report.language !== filters.language) return false;
    if (filters.minScore && report.quality_score < filters.minScore) return false;
    if (filters.search && !report.repo_name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });
};