/**
 * Mock ApiService for testing
 */

class MockApiService {
  constructor() {
    this.mockData = {
      recent_scans: [
        { id: '1', name: 'test-repo', language: 'JavaScript', quality_score: 95 },
        { id: '2', name: 'python-repo', language: 'Python', quality_score: 88 },
        { id: '3', name: 'go-repo', language: 'Go', quality_score: 92 },
      ],
      language_distribution: { JavaScript: 100, Python: 50 },
      top_languages: [{ language: 'JavaScript', count: 100, avgScore: 95 }],
      data_files_count: 5,
      total_repositories: 2209,
    };
  }

  async request() {
    return { success: true, data: {} };
  }

  async healthCheck() {
    return {
      success: true,
      data: {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        data_files_found: this.mockData.data_files_count,
        total_records: this.mockData.total_repositories,
      },
    };
  }

  async getReports(filters = {}) {
    let repos = [...this.mockData.recent_scans];
    if (filters.language) repos = repos.filter((r) => r.language === filters.language);
    if (filters.tier) repos = repos.filter((r) => r.tier === filters.tier);
    if (filters.q)
      repos = repos.filter((r) => r.name.toLowerCase().includes(filters.q.toLowerCase()));
    if (filters.minScore > 0)
      repos = repos.filter((r) => (r.quality_score || 0) >= filters.minScore);

    const limit = filters.limit || 50;
    const page = filters.page || 1;
    const total = repos.length;
    const pages = Math.ceil(total / limit);
    const start = (page - 1) * limit;

    return {
      success: true,
      data: {
        repositories: repos.slice(start, start + limit),
        total,
        page,
        perPage: limit,
        limit,
        pages,
      },
    };
  }

  async getLanguages() {
    return {
      success: true,
      data: {
        languages: this.mockData.language_distribution,
        top_languages: this.mockData.top_languages,
      },
    };
  }

  async getStats() {
    return { success: true, data: this.mockData };
  }

  async getCompareReports(ids = []) {
    if (!ids || ids.length === 0) return { success: true, data: { reports: [], count: 0 } };
    const reports = this.mockData.recent_scans.filter((r) => ids.includes(r.id));
    return { success: true, data: { reports, count: reports.length } };
  }

  async searchPackages(query = '', limit = 8) {
    if (!query || !query.trim()) return { success: true, data: { results: [], total: 0, query } };
    const q = query.toLowerCase();
    const results = this.mockData.recent_scans
      .filter((r) => r.name.toLowerCase().includes(q) || r.language.toLowerCase().includes(q))
      .slice(0, limit);
    return { success: true, data: { results, total: results.length, query } };
  }

  async getCategories() {
    return { success: true, data: {} };
  }
  async getRateLimit() {
    return { success: true, data: {} };
  }
  async getTrending(filters = {}) {
    return { success: true, data: {} };
  }
  async getReportsByCategory(category, filters = {}) {
    return { success: true, data: {} };
  }
  async getReportsByLanguage(language, filters = {}) {
    return { success: true, data: {} };
  }
  async downloadReport(reportId, format) {
    return { success: true, data: {} };
  }
  async scanRepository(repoData) {
    return { success: true, data: { scan_id: 'new-scan' } };
  }
  async getScanStatus(scanId) {
    return { success: true, data: { status: 'completed', scanId } };
  }
  async getScanResult(scanId) {
    return { success: true, data: { result: 'scan-data', scanId } };
  }
  async searchRepositories(query) {
    return { success: true, data: { repositories: [] } };
  }
}

export const apiService = new MockApiService();
export default apiService;
