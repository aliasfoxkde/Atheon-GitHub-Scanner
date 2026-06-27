// Mock implementation of api.js that doesn't use import.meta
// This is used in tests to avoid import.meta issues

const mockData = {
  recent_scans: [
    { id: 1, name: 'test-repo', language: 'JavaScript', quality_score: 85 },
    { id: 2, name: 'another-repo', language: 'Python', quality_score: 72 },
  ],
  language_distribution: { JavaScript: 10, Python: 5 },
  top_languages: [
    { language: 'JavaScript', avgScore: 82 },
    { language: 'Python', avgScore: 75 },
  ],
  quality_stats: { average: 78 },
  dependency_stats: {},
  file_stats: {},
  data_files_count: 100,
  total_repositories: 500,
};

let dataCache = null;
let dataCacheTime = 0;
const CACHE_TTL = 60000;

async function loadEmbeddedData(signal) {
  const now = Date.now();
  if (dataCache && (now - dataCacheTime) < CACHE_TTL) {
    return dataCache;
  }
  dataCache = mockData;
  dataCacheTime = now;
  return dataCache;
}

// Polyfill for AbortSignal.any (not supported in all browsers)
function abortSignalAny(signals) {
  if (AbortSignal.any) {
    return AbortSignal.any(signals);
  }
  const controller = new AbortController();
  const abortHandler = () => controller.abort();
  signals.forEach((s) => s?.addEventListener('abort', abortHandler));
  controller.signal.addEventListener('abort', () => {
    signals.forEach((s) => s?.removeEventListener('abort', abortHandler));
  });
  return controller.signal;
}

class MockApiService {
  // Expose abortSignalAny for testing
  abortSignalAny = abortSignalAny;

  async request(endpoint, options = {}, signal) {
    // Simulate successful response for testing
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 15_000);
    const combinedSignal = signal
      ? abortSignalAny([controller.signal, signal])
      : controller.signal;

    try {
      // In a real scenario, this would fetch. For testing, we use embedded fallback.
      clearTimeout(timer);
      return this.handleEmbeddedFallback(endpoint, options, signal);
    } catch (error) {
      clearTimeout(timer);
      if (error.name === 'AbortError') throw error;
      return this.handleEmbeddedFallback(endpoint, options, signal);
    }
  }

  async handleEmbeddedFallback(endpoint, options, signal) {
    const data = await loadEmbeddedData(signal);
    if (!data) {
      return { success: false, error: 'No data available' };
    }

    if (endpoint.startsWith('/api/stats')) {
      return { success: true, data };
    }
    if (endpoint.startsWith('/api/health')) {
      return {
        success: true,
        data: {
          status: 'healthy',
          timestamp: new Date().toISOString(),
          data_files_found: data.data_files_count,
          total_records: data.total_repositories,
        },
      };
    }
    if (endpoint.startsWith('/api/reports')) {
      const url = new URL(endpoint, 'http://localhost');
      const page = parseInt(url.searchParams.get('page') || '1');
      const limit = parseInt(url.searchParams.get('limit') || '50');
      const language = url.searchParams.get('language');

      let repos = [...(data.recent_scans || [])];
      if (language) repos = repos.filter(r => r.language === language);

      const total = repos.length;
      const pages = Math.ceil(total / limit);
      const start = (page - 1) * limit;

      return {
        success: true,
        data: {
          reports: repos.slice(start, start + limit),
          repositories: repos.slice(start, start + limit),
          total,
          page,
          perPage: limit,
          limit,
          pages,
        },
      };
    }
    if (endpoint.startsWith('/api/languages')) {
      return {
        success: true,
        data: {
          languages: data.language_distribution,
          top_languages: data.top_languages,
        },
      };
    }
    if (endpoint.startsWith('/api/patterns')) {
      return {
        success: true,
        data: {
          dependency_analysis: data.dependency_stats,
          file_analysis: data.file_stats,
          quality_analysis: data.quality_stats,
        },
      };
    }
    if (endpoint.startsWith('/api/ecosystems')) {
      const ecosystem_comparison = {};
      const langScores = {};
      for (const entry of data.top_languages || []) {
        if (entry.language) langScores[entry.language] = entry.avgScore || entry.average_quality_score;
      }
      for (const [lang, count] of Object.entries(data.language_distribution || {})) {
        ecosystem_comparison[lang] = {
          repository_count: count,
          average_quality_score: langScores[lang] ?? data.quality_stats?.average ?? 0,
        };
      }
      return {
        success: true,
        data: {
          ecosystem_comparison,
          total_ecosystems: Object.keys(ecosystem_comparison).length,
        },
      };
    }

    return { success: true, data };
  }

  async scanRepository(repoData) {
    return this.request('/api/scan', { method: 'POST', body: JSON.stringify(repoData) });
  }

  async getScanStatus(scanId) {
    return this.request(`/api/scan/${scanId}/status`);
  }

  async getScanResult(scanId) {
    return this.request(`/api/scan/${scanId}/result`);
  }

  async getReports(filters = {}) {
    const params = new URLSearchParams();
    Object.entries(filters || {}).forEach(([k, v]) => {
      if (v !== '' && v !== null && v !== undefined) params.set(k, v);
    });
    const qs = params.toString();
    return this.request(`/api/reports${qs ? '?' + qs : ''}`);
  }

  async getReportById(reportId) {
    return this.request(`/api/reports/${reportId}`);
  }

  async downloadReport(reportId, format = 'json') {
    return this.request(`/api/reports/${reportId}/download?format=${format}`);
  }

  async getStats() {
    return this.request('/api/stats');
  }

  async getTrending(filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/api/trending?${params}`);
  }

  async searchRepositories(query) {
    return this.request(`/api/search?q=${encodeURIComponent(query)}`);
  }

  async getCategories() {
    return this.request('/api/categories');
  }

  async getReportsByCategory(category, filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/api/categories/${category}/reports?${params}`);
  }

  async getLanguages() {
    return this.request('/api/languages');
  }

  async getReportsByLanguage(language, filters = {}) {
    const params = new URLSearchParams(filters);
    return this.request(`/api/languages/${language}/reports?${params}`);
  }

  async healthCheck() {
    return this.request('/api/health');
  }

  async getRateLimit() {
    return this.request('/api/rate-limit');
  }

  async getEcosystems() {
    return this.request('/api/ecosystems');
  }

  async getCompareReports(ids = [], signal) {
    if (!ids || ids.length === 0) return { success: true, data: { reports: [] } };
    const data = await loadEmbeddedData(signal);
    if (!data) return { success: false, error: 'No data' };
    const all = data.recent_scans || [];
    const reports = all.filter((r) => ids.includes(r.id));
    return { success: true, data: { reports, count: reports.length } };
  }

  async searchPackages(query = '', limit = 8, signal) {
    if (!query || !query.trim()) return { success: true, data: { results: [] } };
    const data = await loadEmbeddedData(signal);
    if (!data) return { success: false, error: 'No data' };
    const q = query.toLowerCase();
    const all = data.recent_scans || [];
    const results = all
      .filter((r) => {
        const name = (r.name || '').toLowerCase();
        const lang = (r.language || '').toLowerCase();
        const desc = (r.description || '').toLowerCase();
        const topics = (r.topics || []).map(t => t.toLowerCase()).join(' ');
        return name.includes(q) || lang.includes(q) || desc.includes(q) || topics.includes(q);
      })
      .slice(0, limit);
    return { success: true, data: { results, total: results.length, query } };
  }
}

export const apiService = new MockApiService();
export default apiService;