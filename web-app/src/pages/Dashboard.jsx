import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalRepos: 0,
    avgQualityScore: 0,
    criticalIssues: 0,
    recentScans: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch dashboard statistics
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Overview of code security and quality analysis</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Repositories */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Total Repositories</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.totalRepos}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
        </div>

        {/* Average Quality Score */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Average Quality Score</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.avgQualityScore.toFixed(1)}</p>
            </div>
            <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Critical Issues */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Critical Issues</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.criticalIssues}</p>
            </div>
            <div className="w-12 h-12 bg-red-500 bg-opacity-20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Scans */}
      <div className="bg-gray-800 rounded-lg border border-gray-700">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Recent Scans</h2>
        </div>
        <div className="p-6">
          {stats.recentScans.length === 0 ? (
            <p className="text-gray-400 text-center py-8">No recent scans found</p>
          ) : (
            <div className="space-y-4">
              {stats.recentScans.map((scan) => (
                <div key={scan.id} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
                  <div className="flex-1">
                    <h3 className="text-white font-medium">{scan.repoName}</h3>
                    <p className="text-sm text-gray-400">{scan.language} • {scan.stars} stars</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm text-gray-400">Quality Score</p>
                      <p className={`text-lg font-bold ${getScoreColor(scan.qualityScore)}`}>
                        {scan.qualityScore}/100
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getTierColor(scan.tier)}`}>
                      {scan.tier}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          <span>Submit New Analysis</span>
        </button>
        <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span>Browse Public Reports</span>
        </button>
      </div>
    </div>
  );
};

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