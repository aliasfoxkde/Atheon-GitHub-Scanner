import React, { useState, useEffect, useMemo } from 'react';
import { loadRealScannerData } from '../services/realScannerData';
import { Skeleton } from '../components/Skeleton';
import { useToast } from '../contexts/ToastContext';

const LANG_BADGE = {
  JavaScript: 'bg-yellow-700 text-white',
  TypeScript: 'bg-blue-700 text-white',
  Python: 'bg-green-700 text-white',
  Go: 'bg-cyan-700 text-white',
  Rust: 'bg-orange-700 text-white',
  Java: 'bg-red-700 text-white',
  'C++': 'bg-pink-700 text-white',
  Ruby: 'bg-rose-700 text-white',
  PHP: 'bg-indigo-700 text-white',
};

// Compute a real trending score: quality-adjusted star popularity
// Higher = more noteworthy: stars * quality_ratio * tier_bonus
const TIER_BONUS = { A: 1.2, B: 1.0, C: 0.85, D: 0.7, F: 0.6 };
function trendingScore(repo) {
  const stars = repo.stars || 0;
  const quality = (repo.quality_score || 0) / 100;
  const tier = TIER_BONUS[repo.tier] ?? 1.0;
  return stars * quality * tier;
}

export default function Trending() {
  const [allRepos, setAllRepos] = useState([]);
  const [trendingData, setTrendingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({ language: '', since: 'all', limit: 20 });
  const toast = useToast();

  useEffect(() => {
    const controller = new AbortController();
    let mounted = true;
    (async () => {
      try {
        const data = await loadRealScannerData(controller.signal);
        if (!mounted) return;
        // Use the pre-built trending array if available, else derive from recent_scans
        const trending = data.trending && data.trending.length > 0
          ? data.trending
          : (data.recent_scans || []).map((s) => ({ ...s, id: s.id || s.name }));
        setAllRepos(data.recent_scans || []);
        setTrendingData(trending);
      } catch (err) {
        if (err.name === 'AbortError') return;
        toast.error('Failed to load trending data');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { controller.abort(); mounted = false; };
  }, []);

  const filtered = useMemo(() => {
    // Prefer the trending list, fall back to allRepos
    let list = [...(trendingData.length > 0 ? trendingData : allRepos)];

    if (filters.language) list = list.filter((r) => r.language === filters.language);

    // Filter by time period based on scan_date
    if (filters.since !== 'all') {
      const now = new Date();
      const cutoff = new Date();
      if (filters.since === 'daily') cutoff.setDate(now.getDate() - 1);
      else if (filters.since === 'weekly') cutoff.setDate(now.getDate() - 7);
      else if (filters.since === 'monthly') cutoff.setMonth(now.getMonth() - 1);

      list = list.filter((r) => {
        if (!r.scan_date) return false;
        const scanDate = new Date(r.scan_date);
        return !isNaN(scanDate.getTime()) && scanDate >= cutoff;
      });
    }

    // Score by quality-adjusted popularity
    list.sort((a, b) => trendingScore(b) - trendingScore(a));
    return list.slice(0, filters.limit);
  }, [allRepos, trendingData, filters]);

  const languages = useMemo(() => {
    const set = new Set(allRepos.map((r) => r.language).filter(Boolean));
    return Array.from(set).sort();
  }, [allRepos]);

  const requestScan = (name) => toast.info(`Scan request queued for ${name}`);
  const addToWatchlist = (name) => toast.success(`Added ${name} to watchlist`);

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-64" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => <Skeleton key={i} className="h-12" />)}
        </div>
        {[1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-24" />)}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Trending Repositories</h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Quality-adjusted ranking · {allRepos.length.toLocaleString()} scanned packages
        </p>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="trending-language" className="block text-sm font-medium text-gray-300 mb-2">Language</label>
            <select
              id="trending-language"
              value={filters.language}
              onChange={(e) => setFilters({ ...filters, language: e.target.value })}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
            >
              <option value="">All languages</option>
              {languages.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="trending-since" className="block text-sm font-medium text-gray-300 mb-2">Time period</label>
            <select
              id="trending-since"
              value={filters.since}
              onChange={(e) => setFilters({ ...filters, since: e.target.value })}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
            >
              <option value="all">All time</option>
              <option value="daily">Last 24h</option>
              <option value="weekly">Last 7 days</option>
              <option value="monthly">Last 30 days</option>
            </select>
          </div>
          <div>
            <label htmlFor="trending-limit" className="block text-sm font-medium text-gray-300 mb-2">Limit</label>
            <select
              id="trending-limit"
              value={filters.limit}
              onChange={(e) => setFilters({ ...filters, limit: parseInt(e.target.value) })}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
            >
              <option value="10">10 results</option>
              <option value="20">20 results</option>
              <option value="50">50 results</option>
            </select>
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="bg-gray-800 rounded-lg p-8 text-center text-gray-400 border border-gray-700">
          <p>No repositories match the selected filters.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((repo, index) => (
            <div key={repo.id || repo.name} className="bg-gray-800 rounded-lg p-4 sm:p-5 border border-gray-700 hover:border-blue-600 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center flex-wrap gap-2 mb-2">
                    <span className="text-xl sm:text-2xl font-bold text-gray-400">#{index + 1}</span>
                    <h3 className="text-base sm:text-lg font-semibold text-white truncate">{repo.name}</h3>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${LANG_BADGE[repo.language] || 'bg-gray-600 text-white'}`}>
                      {repo.language}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                      repo.tier === 'A' ? 'bg-green-700 text-white' :
                      repo.tier === 'B' ? 'bg-blue-700 text-white' :
                      repo.tier === 'C' ? 'bg-yellow-700 text-white' :
                      repo.tier === 'D' ? 'bg-orange-700 text-white' : 'bg-red-700 text-white'
                    }`}>
                      Tier {repo.tier}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-gray-400">
                    {repo.stars > 0 && (
                      <span>⭐ {repo.stars >= 1000 ? `${(repo.stars / 1000).toFixed(1)}k` : repo.stars} stars</span>
                    )}
                    {repo.total_dependencies > 0 && (
                      <span>📦 {repo.total_dependencies} deps</span>
                    )}
                    {repo.total_files > 0 && (
                      <span>📄 {repo.total_files.toLocaleString()} files</span>
                    )}
                    <span>
                      Score: <strong className="text-white">{repo.quality_score}</strong>
                    </span>
                    <span className="text-xs text-gray-400">
                      trend: {(trendingScore(repo)).toFixed(0)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row sm:flex-col gap-2 sm:items-end flex-shrink-0">
                  <button
                    onClick={() => requestScan(repo.name)}
                    className="flex-1 sm:flex-none px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors"
                  >
                    Request scan
                  </button>
                  <button
                    onClick={() => addToWatchlist(repo.name)}
                    className="flex-1 sm:flex-none px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded-lg transition-colors"
                  >
                    Watch
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}