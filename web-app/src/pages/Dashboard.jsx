import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../services/api';
import { loadRealScannerData, checkApiHealth, getApiConfig } from '../services/realScannerData';
import { BarChart, DonutChart } from '../components/Charts';
import SecurityRadarChart from '../components/SecurityRadarChart';
import { Skeleton, SkeletonStat, SkeletonText } from '../components/Skeleton';
import { useToast } from '../contexts/ToastContext';
import { useSettings } from '../contexts/SettingsContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { settings } = useSettings();
  const [stats, setStats] = useState({
    totalRepos: 0,
    avgQualityScore: 0,
    totalScans: 0,
    criticalIssues: 0,
    tierDistribution: { A: 0, B: 0, C: 0, D: 0, F: 0 },
    recentScans: [],
    topLanguages: [],
    securityStats: {
      totalFindings: 0,
      critical: 0,
      high: 0,
      medium: 0,
      low: 0,
    },
    apiStatus: 'unknown',
    dataSource: 'unknown',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  // Global search
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const searchRef = useRef(null);

  // Cmd/Ctrl+K to focus search
  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        searchRef.current?.focus();
      } else if (e.key === 'Escape' && searchOpen) {
        setSearchOpen(false);
        searchRef.current?.blur();
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [searchOpen]);

  // Close search dropdown on outside click
  useEffect(() => {
    function onClick(e) {
      if (searchRef.current && !searchRef.current.parentElement?.contains(e.target)) {
        setSearchOpen(false);
      }
    }
    window.addEventListener('mousedown', onClick);
    return () => window.removeEventListener('mousedown', onClick);
  }, []);

  const fetchStats = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await loadRealScannerData();
      if (!response) throw new Error('No data received from scanner');

      const data = response.data || response;

      setStats({
        totalRepos: data.total_repositories || data.total_packages || 0,
        avgQualityScore: data.average_quality_score || 0,
        totalScans: data.total_scans || data.total_packages || 0,
        criticalIssues: data.tier_distribution?.F || data.security_stats?.critical || 0,
        tierDistribution: data.tier_distribution || { A: 0, B: 0, C: 0, D: 0, F: 0 },
        recentScans: (data.recent_scans || []).slice(0, 10).map((scan) => ({
          id: scan.id || scan.scan_id || scan.name,
          repoName: scan.name || scan.repo_name || 'Unknown',
          language: scan.language || 'Unknown',
          stars: scan.stars || 0,
          qualityScore: scan.quality_score || 0,
          tier: scan.tier || 'A',
          scanDate: scan.scan_date,
          scanMethod: scan.scan_method || 'unknown',
          totalDependencies: scan.total_dependencies || 0,
          totalFiles: scan.total_files || 0,
        })),
        topLanguages: (data.top_languages || []).map((lang) => ({
          language: lang.language,
          count: lang.count,
          avgScore: lang.avgScore,
        })),
        securityStats: {
          totalFindings: data.security_stats?.total_findings || 0,
          critical: data.security_stats?.critical || 0,
          high: data.security_stats?.high || 0,
          medium: data.security_stats?.medium || 0,
          low: data.security_stats?.low || 0,
        },
        apiStatus: 'healthy',
        dataSource: data.data_source || 'unknown',
        dataFilesCount: data.data_files_count || 0,
        lastUpdated: data.last_updated || new Date().toISOString(),
      });
    } catch (err) {
      console.error('❌ Error loading real scanner data:', err);
      setError(err.message);
      setStats((prev) => ({ ...prev, apiStatus: 'error', dataSource: 'error' }));
    } finally {
      setLoading(false);
    }
  };

  const checkHealth = async () => {
    try {
      const health = await checkApiHealth();
      if (health.status === 'healthy') {
        setStats((prev) => ({
          ...prev,
          apiStatus: 'healthy',
          dataSource: health.total_records > 0 ? 'real_data' : 'no_data',
          dataFilesCount: health.data_files_found || 0,
        }));
      }
    } catch (err) {
      setStats((prev) => ({ ...prev, apiStatus: 'unavailable', dataSource: 'fallback' }));
    }
  };

  // Initial load + auto-refresh driven by user setting
  useEffect(() => {
    fetchStats();
    checkHealth();
    const seconds = Number(settings.autoRefreshInterval) || 0;
    if (seconds > 0) {
      const interval = setInterval(() => {
        fetchStats();
        checkHealth();
      }, seconds * 1000);
      return () => clearInterval(interval);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings.autoRefreshInterval]);

  // Global search (debounced)
  useEffect(() => {
    if (!searchQuery || !searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    let cancelled = false;
    setSearchLoading(true);
    const t = setTimeout(async () => {
      try {
        const res = await apiService.searchPackages(searchQuery, 8);
        if (!cancelled) {
          if (res.success) {
            setSearchResults(res.data.results || []);
            setSearchOpen(true);
          } else {
            setSearchResults([]);
          }
        }
      } catch (e) {
        if (!cancelled) {
          setSearchResults([]);
        }
      } finally {
        if (!cancelled) setSearchLoading(false);
      }
    }, 200);
    return () => { cancelled = true; clearTimeout(t); };
  }, [searchQuery]);

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const response = await fetch(`${getApiConfig().baseUrl}/api/refresh`, { method: 'POST' });
      const result = await response.json();
      if (result.success) {
        const data = result.data;
        setStats((prev) => ({
          ...prev,
          totalRepos: data.total_repositories || data.total_packages || prev.totalRepos,
          totalScans: data.total_scans || data.total_packages || prev.totalScans,
          avgQualityScore: data.average_quality_score || prev.avgQualityScore,
          tierDistribution: data.tier_distribution || prev.tierDistribution,
          lastUpdated: data.last_updated || new Date().toISOString(),
        }));
        toast.success('Dashboard refreshed');
      } else {
        throw new Error(result.error || 'Refresh failed');
      }
    } catch (err) {
      // Fallback: re-run the local fetch
      await fetchStats();
      toast.info('Refreshed from embedded data');
    } finally {
      setRefreshing(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid date';
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  const handleDownloadReport = () => {
    const reportData = {
      title: 'Atheon GitHub Scanner - Dashboard Report',
      generatedAt: new Date().toISOString(),
      statistics: {
        totalRepositories: stats.totalRepos,
        totalPackages: stats.totalScans,
        averageQualityScore: stats.avgQualityScore,
        criticalIssues: stats.criticalIssues,
        dataSource: stats.dataSource,
        apiStatus: stats.apiStatus,
        dataFilesCount: stats.dataFilesCount,
      },
      tierDistribution: stats.tierDistribution,
      recentScans: stats.recentScans,
      topLanguages: stats.topLanguages,
      securityStats: stats.securityStats,
    };
    try {
      const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `atheon-scanner-report-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      toast.success('Report downloaded');
    } catch (e) {
      toast.error('Download failed');
    }
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Atheon GitHub Scanner Dashboard',
          text: `Atheon GitHub Scanner: ${stats.totalRepos} packages analyzed with ${stats.avgQualityScore.toFixed(1)} average quality score.`,
          url,
        });
        return;
      } catch (e) {
        /* fall through to clipboard */
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Dashboard URL copied to clipboard');
    } catch {
      toast.error('Copy failed — your browser blocked clipboard access');
    }
  };

  const handleSearchSelect = (r) => {
    setSearchOpen(false);
    setSearchQuery('');
    if (r && r.id) {
      navigate(`/reports?q=${encodeURIComponent(r.name || '')}`);
    }
  };

  const getApiStatusColor = () => {
    switch (stats.apiStatus) {
      case 'healthy': return 'text-green-500';
      case 'error': return 'text-red-500';
      case 'unavailable': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  const getApiStatusText = () => {
    switch (stats.apiStatus) {
      case 'healthy': return 'API Connected';
      case 'error': return 'API Error';
      case 'unavailable': return 'API Unavailable';
      default: return 'Checking...';
    }
  };

  const apiStatusColor = useMemo(() => getApiStatusColor(), [stats.apiStatus]);
  const apiStatusText = useMemo(() => getApiStatusText(), [stats.apiStatus]);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400 text-sm sm:text-base">
            Real-time analysis of {stats.totalRepos.toLocaleString()}+ packages
          </p>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          {/* Global search */}
          <div className="relative">
            <input
              ref={searchRef}
              type="search"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setSearchOpen(true); }}
              onFocus={() => searchQuery && setSearchOpen(true)}
              placeholder="Search packages… (⌘K)"
              data-search
              className="w-48 sm:w-64 bg-gray-700 text-white rounded-lg pl-9 pr-3 py-2 text-sm border border-gray-600 focus:border-blue-500 focus:outline-none placeholder-gray-400"
              aria-label="Global package search"
            />
            <svg className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchOpen && (searchLoading || searchResults.length > 0) && (
              <div className="absolute z-30 left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-lg shadow-xl max-h-80 overflow-y-auto">
                {searchLoading ? (
                  <div className="p-3 text-sm text-gray-400">Searching…</div>
                ) : searchResults.length === 0 ? (
                  <div className="p-3 text-sm text-gray-400">No matches</div>
                ) : (
                  <ul>
                    {searchResults.map((r) => (
                      <li key={r.id}>
                        <button
                          type="button"
                          onClick={() => handleSearchSelect(r)}
                          className="w-full text-left px-3 py-2 hover:bg-gray-700 flex items-center gap-2 text-sm"
                        >
                          <span className="text-white truncate flex-1">{r.name}</span>
                          <span className="text-gray-400 text-xs">{r.language}</span>
                          <span className={`px-1.5 py-0.5 rounded text-xs font-bold ${getTierColor(r.tier)}`}>{r.tier}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* API Status Indicator */}
          <div className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700">
            <div className={`w-2 h-2 rounded-full ${apiStatusColor}`}></div>
            <span className={`text-xs sm:text-sm ${apiStatusColor}`}>{apiStatusText}</span>
          </div>

          {/* Refresh Button */}
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className={`bg-gray-700 hover:bg-gray-600 text-white px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${refreshing ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-label="Refresh data"
          >
            <svg className={`w-4 h-4 sm:w-5 sm:h-5 ${refreshing ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span className="hidden sm:inline">{refreshing ? 'Refreshing…' : 'Refresh'}</span>
          </button>

          {/* Download Button */}
          <button
            onClick={handleDownloadReport}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg transition-colors flex items-center space-x-2"
            aria-label="Download report"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span className="hidden sm:inline">Download</span>
          </button>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg transition-colors flex items-center space-x-2"
            aria-label="Share dashboard"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[1, 2, 3, 4].map((i) => <SkeletonStat key={i} />)}
          </div>
          <Skeleton className="h-64" />
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="bg-red-900/20 border border-red-700 rounded-lg p-4">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="text-white font-semibold">Error Loading Data</h3>
              <p className="text-gray-400 text-sm">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      {!loading && !error && (
        <>
          {/* Data Source Info */}
          {stats.lastUpdated && (
            <div className="bg-gray-800 rounded-lg p-3 border border-gray-700 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="text-gray-400 text-sm">
                Data Source: <span className="text-white font-medium">{stats.dataSource}</span>
              </span>
              <span className="text-gray-400 text-sm">
                Files: <span className="text-white font-medium">{stats.dataFilesCount}</span>
              </span>
              <span className="text-gray-400 text-sm">
                Updated: <span className="text-white font-medium">{formatDate(stats.lastUpdated)}</span>
              </span>
              <span className="text-gray-500 text-xs ml-auto hidden sm:inline">
                Auto-refresh: {Number(settings.autoRefreshInterval) > 0 ? `${settings.autoRefreshInterval}s` : 'off'}
              </span>
            </div>
          )}

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <StatCard label="Packages Analyzed" value={stats.totalRepos.toLocaleString()} color="blue"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />} />
            <StatCard label="Avg Score" value={stats.avgQualityScore ? stats.avgQualityScore.toFixed(1) : '0.0'} color="green"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />} />
            <StatCard label="Total Scans" value={stats.totalScans.toLocaleString()} color="purple"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />} />
            <StatCard label="Critical" value={stats.criticalIssues.toLocaleString()} color="red"
              icon={<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />} />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Scans */}
            <div className="bg-gray-800 rounded-lg border border-gray-700">
              <div className="p-4 sm:p-6 border-b border-gray-700 flex items-center justify-between">
                <h2 className="text-lg sm:text-xl font-semibold text-white">Recent Scans</h2>
                <Link to="/reports" className="text-sm text-blue-400 hover:text-blue-300">View All</Link>
              </div>
              <div className="p-4 sm:p-6">
                {stats.recentScans.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">No recent scans found</p>
                ) : (
                  <div className="space-y-3">
                    {stats.recentScans.map((scan) => (
                      <div
                        key={scan.id}
                        className="flex items-center justify-between p-3 sm:p-4 bg-gray-900 rounded-lg hover:bg-gray-700 transition-colors"
                      >
                        <Link
                          to={`/reports?q=${encodeURIComponent(scan.repoName)}`}
                          className="flex-1 min-w-0"
                        >
                          <h3 className="text-white font-medium text-sm sm:text-base truncate hover:text-blue-300">{scan.repoName}</h3>
                          <div className="flex items-center flex-wrap gap-x-2 mt-1">
                            <span className="text-xs sm:text-sm text-gray-400">{scan.language}</span>
                            {scan.stars > 0 && (
                              <span className="text-xs text-gray-500">
                                {scan.stars >= 1000 ? `${(scan.stars / 1000).toFixed(1)}k stars` : `${scan.stars} stars`}
                              </span>
                            )}
                            {scan.totalDependencies > 0 && (
                              <span className="text-xs text-gray-500">
                                {scan.totalDependencies} deps
                              </span>
                            )}
                            {scan.totalFiles > 0 && (
                              <span className="text-xs text-gray-500">
                                {scan.totalFiles.toLocaleString()} files
                              </span>
                            )}
                          </div>
                        </Link>
                        <div className="flex items-center space-x-2 sm:space-x-4 ml-2">
                          <div className="text-right">
                            <p className="text-xs text-gray-400 hidden sm:block">Score</p>
                            <p className={`text-base sm:text-lg font-bold ${getScoreColor(scan.qualityScore)}`}>
                              {scan.qualityScore}
                            </p>
                          </div>
                          <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${getTierColor(scan.tier)}`}>
                            {scan.tier}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Security Overview */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-red-500/30 transition-all duration-300">
              <div className="p-4 sm:p-6 border-b border-gray-700">
                <h2 className="text-lg sm:text-xl font-semibold text-white">Security Findings</h2>
              </div>
              <div className="p-4 sm:p-6">
                <SecurityRadarChart
                  securityData={stats.securityStats}
                  totalRepos={stats.totalRepos}
                  size={400}
                />
              </div>
            </div>
          </div>

          {/* Tier Distribution */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-purple-500/30 transition-all">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h2 className="text-lg sm:text-xl font-semibold text-white">Quality Tier Distribution</h2>
            </div>
            <div className="p-4 sm:p-6">
              <BarChart data={stats.tierDistribution} title="Packages by Quality Tier" />
            </div>
          </div>

          {/* Top Languages */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-yellow-500/30 transition-all">
            <div className="p-4 sm:p-6 border-b border-gray-700">
              <h2 className="text-lg sm:text-xl font-semibold text-white">Top Programming Languages</h2>
            </div>
            <div className="p-4 sm:p-6">
              <div className="space-y-3">
                {stats.topLanguages.map((lang, index) => (
                  <div key={lang.language} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 min-w-0">
                      <span className="text-lg font-bold text-gray-500">#{index + 1}</span>
                      <span className="text-sm sm:text-base text-white font-medium truncate">{lang.language}</span>
                      <span className="text-xs sm:text-sm text-gray-400">{lang.count.toLocaleString()} pkgs</span>
                    </div>
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <div className="w-24 sm:w-32 bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${(lang.count / Math.max(stats.topLanguages[0]?.count || 1, 1)) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-400 w-16 text-right">Avg: {lang.avgScore}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link to="/submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>Submit New Analysis</span>
            </Link>
            <Link to="/reports" className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Browse Reports</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

function StatCard({ label, value, color, icon }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm text-gray-400">{label}</p>
          <p className="text-2xl sm:text-3xl font-bold text-white mt-1 truncate">{value}</p>
        </div>
        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-${color}-500/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
          <svg className={`w-5 h-5 sm:w-6 sm:h-6 text-${color}-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {icon}
          </svg>
        </div>
      </div>
    </div>
  );
}

function getScoreColor(score) {
  if (score >= 90) return 'text-green-500';
  if (score >= 75) return 'text-blue-500';
  if (score >= 60) return 'text-yellow-500';
  return 'text-red-500';
}

function getTierColor(tier) {
  switch (tier) {
    case 'A': return 'bg-green-500 text-white';
    case 'B': return 'bg-blue-500 text-white';
    case 'C': return 'bg-yellow-500 text-white';
    case 'D': return 'bg-orange-500 text-white';
    default: return 'bg-red-500 text-white';
  }
}

export default Dashboard;
