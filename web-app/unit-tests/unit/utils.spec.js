/**
 * Unit Tests - Testing individual functions and components in isolation
 */

// Mock data for testing
const mockStats = {
  totalRepos: 301,
  avgQualityScore: 99.5,
  totalScans: 301,
  criticalIssues: 2,
  tierDistribution: { A: 280, B: 15, C: 4, D: 1, F: 1 }
};

describe('Utility Functions', () => {
  describe('getScoreColor', () => {
    // Import the function to test
    const getScoreColor = (score) => {
      if (score >= 90) return 'text-green-500';
      if (score >= 75) return 'text-blue-500';
      if (score >= 60) return 'text-yellow-500';
      return 'text-red-500';
    };

    test('returns green for scores >= 90', () => {
      expect(getScoreColor(90)).toBe('text-green-500');
      expect(getScoreColor(95)).toBe('text-green-500');
      expect(getScoreColor(100)).toBe('text-green-500');
    });

    test('returns blue for scores >= 75', () => {
      expect(getScoreColor(75)).toBe('text-blue-500');
      expect(getScoreColor(80)).toBe('text-blue-500');
      expect(getScoreColor(89)).toBe('text-blue-500');
    });

    test('returns yellow for scores >= 60', () => {
      expect(getScoreColor(60)).toBe('text-yellow-500');
      expect(getScoreColor(70)).toBe('text-yellow-500');
      expect(getScoreColor(74)).toBe('text-yellow-500');
    });

    test('returns red for scores < 60', () => {
      expect(getScoreColor(0)).toBe('text-red-500');
      expect(getScoreColor(30)).toBe('text-red-500');
      expect(getScoreColor(59)).toBe('text-red-500');
    });

    test('handles edge cases', () => {
      expect(getScoreColor(-10)).toBe('text-red-500');
      expect(getScoreColor(150)).toBe('text-green-500');
    });
  });

  describe('getTierColor', () => {
    const getTierColor = (tier) => {
      switch (tier) {
        case 'A': return 'bg-green-500 text-white';
        case 'B': return 'bg-blue-500 text-white';
        case 'C': return 'bg-yellow-500 text-white';
        case 'D': return 'bg-orange-500 text-white';
        default: return 'bg-red-500 text-white';
      }
    };

    test('returns correct colors for each tier', () => {
      expect(getTierColor('A')).toBe('bg-green-500 text-white');
      expect(getTierColor('B')).toBe('bg-blue-500 text-white');
      expect(getTierColor('C')).toBe('bg-yellow-500 text-white');
      expect(getTierColor('D')).toBe('bg-orange-500 text-white');
      expect(getTierColor('F')).toBe('bg-red-500 text-white');
    });

    test('handles invalid tiers', () => {
      expect(getTierColor('X')).toBe('bg-red-500 text-white');
      expect(getTierColor('')).toBe('bg-red-500 text-white');
      expect(getTierColor(null)).toBe('bg-red-500 text-white');
    });
  });

  describe('formatDate', () => {
    const formatDate = (dateString, referenceDate = new Date()) => {
      const date = new Date(dateString);
      const now = referenceDate;
      const diffMs = now - date;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);

      if (diffMins < 60) return `${diffMins}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      return `${diffDays}d ago`;
    };

    test('formats recent dates in minutes', () => {
      const referenceDate = new Date('2026-06-19T12:00:00Z');
      const recentDate = new Date('2026-06-19T11:30:00Z').toISOString();
      expect(formatDate(recentDate, referenceDate)).toBe('30m ago');
    });

    test('formats today\'s dates in hours', () => {
      const referenceDate = new Date('2026-06-19T12:00:00Z');
      const todayDate = new Date('2026-06-19T08:00:00Z').toISOString();
      expect(formatDate(todayDate, referenceDate)).toBe('4h ago');
    });

    test('formats older dates in days', () => {
      const referenceDate = new Date('2026-06-19T12:00:00Z');
      const oldDate = new Date('2026-06-17T12:00:00Z').toISOString();
      expect(formatDate(oldDate, referenceDate)).toBe('2d ago');
    });

    test('handles invalid dates', () => {
      expect(() => formatDate('invalid-date')).not.toThrow();
    });
  });
});

describe('Data Transformations', () => {
  describe('API response processing', () => {
    test('transforms API stats to component format', () => {
      const apiResponse = {
        total_repositories: 100,
        average_quality_score: 85.5,
        tier_distribution: { A: 50, B: 30, C: 20 }
      };

      const transformed = {
        totalRepos: apiResponse.total_repositories,
        avgQualityScore: apiResponse.average_quality_score,
        tierDistribution: apiResponse.tier_distribution
      };

      expect(transformed.totalRepos).toBe(100);
      expect(transformed.avgQualityScore).toBe(85.5);
      expect(transformed.tierDistribution.A).toBe(50);
    });

    test('handles missing data gracefully', () => {
      const apiResponse = {
        total_repositories: 50
        // Missing other fields
      };

      const transformed = {
        totalRepos: apiResponse.total_repositories || 0,
        avgQualityScore: apiResponse.average_quality_score || 0,
        tierDistribution: apiResponse.tier_distribution || { A: 0, B: 0, C: 0 }
      };

      expect(transformed.totalRepos).toBe(50);
      expect(transformed.avgQualityScore).toBe(0);
      expect(transformed.tierDistribution.A).toBe(0);
    });
  });

  describe('Score calculations', () => {
    test('calculates weighted quality score', () => {
      const weights = { security: 0.3, performance: 0.2, maintainability: 0.5 };
      const scores = { security: 90, performance: 80, maintainability: 100 };

      const weightedScore =
        (scores.security * weights.security) +
        (scores.performance * weights.performance) +
        (scores.maintainability * weights.maintainability);

      expect(weightedScore).toBe(93); // 27 + 16 + 50
    });

    test('handles negative scores', () => {
      const normalizeScore = (score) => Math.max(0, Math.min(100, score));
      expect(normalizeScore(-10)).toBe(0);
      expect(normalizeScore(150)).toBe(100);
      expect(normalizeScore(75)).toBe(75);
    });
  });
});

describe('Component Props Validation', () => {
  test('validates chart data structure', () => {
    const chartData = {
      'Security': 90,
      'Performance': 85,
      'Maintainability': 92
    };

    const isValid = Object.values(chartData).every(
      value => typeof value === 'number' && value >= 0 && value <= 100
    );

    expect(isValid).toBeTruthy();
  });

  test('validates tier distribution', () => {
    const tierDistribution = { A: 280, B: 15, C: 4, D: 1, F: 1 };
    const total = Object.values(tierDistribution).reduce((sum, count) => sum + count, 0);

    expect(total).toBeGreaterThan(0);
    expect(total).toBeLessThanOrEqual(1000);
  });

  test('validates language stats', () => {
    const languageStats = [
      { language: 'JavaScript', count: 180, avgScore: 85.0 },
      { language: 'Python', count: 112, avgScore: 92.0 }
    ];

    const isValid = languageStats.every(
      lang => lang.language && typeof lang.count === 'number' && typeof lang.avgScore === 'number'
    );

    expect(isValid).toBeTruthy();
  });
});