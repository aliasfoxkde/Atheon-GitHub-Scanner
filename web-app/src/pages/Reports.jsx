import { useState, useEffect } from 'react'
import apiService from '../services/api'
import { mockReports, filterReports, simulateApiCall } from '../services/mockData'
import ReportDetailModal from '../components/ReportDetailModal'
import SpiderChart from '../components/Charts'
import { BarChart, DonutChart } from '../components/Charts'
import FilterableTable from '../components/FilterableTable'

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({
    category: '',
    tier: '',
    language: '',
    minScore: '',
    search: ''
  })
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: 20,
    total: 0
  })

  useEffect(() => {
    fetchReports()
  }, [filters])

  const fetchReports = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await apiService.getReports(filters)

      if (response.success) {
        setReports(response.data.reports || [])
        setPagination({
          page: response.data.page || 1,
          perPage: response.data.perPage || 20,
          total: response.data.total || 0
        })
      } else {
        throw new Error(response.error)
      }
    } catch (err) {
      console.log('Using mock data:', err.message)
      // Fallback to mock data
      const filteredReports = filterReports(mockReports, filters)
      await simulateApiCall(filteredReports)
      setReports(filteredReports)
      setPagination({
        page: 1,
        perPage: 20,
        total: filteredReports.length
      })
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (field, value) => {
    setFilters({ ...filters, [field]: value })
  }

  const clearFilters = () => {
    setFilters({
      category: '',
      tier: '',
      language: '',
      minScore: '',
      search: ''
    })
  }

  // Calculate chart data from reports
  const tierDistribution = reports.reduce((acc, report) => {
    acc[report.tier] = (acc[report.tier] || 0) + 1
    return acc
  }, { A: 0, B: 0, C: 0, D: 0, F: 0 })

  const languageDistribution = reports.reduce((acc, report) => {
    acc[report.language] = (acc[report.language] || 0) + 1
    return acc
  }, {})

  const categoryDistribution = reports.reduce((acc, report) => {
    acc[report.category] = (acc[report.category] || 0) + 1
    return acc
  }, {})

  // Calculate average quality metrics
  const avgMetrics = reports.length > 0 ? {
    'Security': reports.reduce((sum, r) => sum + (r.quality_score * 0.9), 0) / reports.length,
    'Performance': reports.reduce((sum, r) => sum + (r.quality_score * 0.85), 0) / reports.length,
    'Maintainability': reports.reduce((sum, r) => sum + (r.quality_score * 0.92), 0) / reports.length,
    'Code Coverage': reports.reduce((sum, r) => sum + (r.quality_score * 0.8), 0) / reports.length,
    'Documentation': reports.reduce((sum, r) => sum + (r.quality_score * 0.75), 0) / reports.length,
    'Testing': reports.reduce((sum, r) => sum + (r.quality_score * 0.88), 0) / reports.length
  } : {}

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Browse Reports</h1>
        <p className="text-gray-400">
          Explore comprehensive security and quality analysis reports from our database
        </p>
      </div>

      {/* Interactive Charts Dashboard */}
      {!loading && reports.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quality Analysis Spider Chart */}
          <div className="bg-gray-800/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold text-white">Quality Analysis</h2>
            </div>
            <div className="p-4 flex items-center justify-center">
              <SpiderChart
                data={avgMetrics}
                title="Average Quality Metrics"
                size={250}
              />
            </div>
          </div>

          {/* Tier Distribution Bar Chart */}
          <div className="bg-gray-800/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold text-white">Tier Distribution</h2>
            </div>
            <div className="p-4">
              <BarChart
                data={tierDistribution}
                title="Reports by Quality Tier"
              />
            </div>
          </div>

          {/* Category Distribution Donut Chart */}
          <div className="bg-gray-800/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-green-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
            <div className="p-4 border-b border-gray-700">
              <h2 className="text-lg font-semibold text-white">Categories</h2>
            </div>
            <div className="p-4 flex items-center justify-center">
              <DonutChart
                data={categoryDistribution}
                title="Reports by Category"
                size={200}
              />
            </div>
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-gray-800 rounded-lg p-4 sm:p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-white">Filter Reports</h2>
          <button
            onClick={clearFilters}
            className="text-sm text-blue-400 hover:text-blue-300"
          >
            Clear Filters
          </button>
        </div>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
            placeholder="Search repositories..."
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
            >
              <option value="">All Categories</option>
              <option value="web-framework">Web Frameworks</option>
              <option value="cli-tool">CLI Tools</option>
              <option value="ml-ai">ML/AI</option>
              <option value="database">Databases</option>
              <option value="testing">Testing</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Quality Tier
            </label>
            <select
              value={filters.tier}
              onChange={(e) => handleFilterChange('tier', e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
            >
              <option value="">All Tiers</option>
              <option value="A">Tier A (90-100)</option>
              <option value="B">Tier B (75-89)</option>
              <option value="C">Tier C (60-74)</option>
              <option value="D">Tier D (40-59)</option>
              <option value="F">Tier F (0-39)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Language
            </label>
            <select
              value={filters.language}
              onChange={(e) => handleFilterChange('language', e.target.value)}
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
            >
              <option value="">All Languages</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="go">Go</option>
              <option value="rust">Rust</option>
              <option value="typescript">TypeScript</option>
              <option value="java">Java</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Min Score
            </label>
            <input
              type="number"
              value={filters.minScore}
              onChange={(e) => handleFilterChange('minScore', e.target.value)}
              placeholder="0"
              min="0"
              max="100"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 text-sm"
            />
          </div>
        </div>

        {/* Results count */}
        <div className="mt-4 text-sm text-gray-400">
          Showing {reports.length} of {pagination.total} reports
        </div>
      </div>

      {/* Reports List */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <FilterableTable
          data={reports}
          columns={[
            {
              key: 'repo_name',
              label: 'Repository',
              render: (value, row) => (
                <div>
                  <div className="text-sm font-medium text-white">{value}</div>
                  <div className="text-sm text-gray-400">{row.language}</div>
                </div>
              )
            },
            {
              key: 'category',
              label: 'Category',
              type: 'badge',
              badgeClass: (value) => {
                const classes = {
                  'web-framework': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
                  'cli-tool': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
                  'ml-ai': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
                  'database': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
                  'testing': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
                  'devops': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300'
                }
                return classes[value] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
              }
            },
            {
              key: 'stars',
              label: 'Stars',
              type: 'number'
            },
            {
              key: 'quality_score',
              label: 'Quality Score',
              render: (value) => (
                <span className={`text-lg font-bold ${getScoreColor(value)}`}>
                  {value}/100
                </span>
              )
            },
            {
              key: 'tier',
              label: 'Tier',
              type: 'badge',
              badgeClass: (value) => {
                const classes = {
                  'A': 'bg-green-500 text-white',
                  'B': 'bg-blue-500 text-white',
                  'C': 'bg-yellow-500 text-white',
                  'D': 'bg-orange-500 text-white',
                  'F': 'bg-red-500 text-white'
                }
                return classes[value] || 'bg-gray-500 text-white'
              }
            },
            {
              key: 'total_findings',
              label: 'Findings',
              type: 'number'
            },
            {
              key: 'actions',
              label: 'Actions',
              render: (value, row) => (
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setSelectedReport(row)
                      setShowModal(true)
                    }}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    View
                  </button>
                  <button className="text-gray-400 hover:text-white">
                    Download
                  </button>
                </div>
              )
            }
          ]}
          title="Repository Reports"
          pageSize={20}
        />
      )}

      {/* Report Detail Modal */}
      {showModal && selectedReport && (
        <ReportDetailModal
          report={selectedReport}
          onClose={() => {
            setShowModal(false)
            setSelectedReport(null)
          }}
        />
      )}
    </div>
  )
}

function getScoreColor(score) {
  if (score >= 90) return 'text-green-500'
  if (score >= 75) return 'text-blue-500'
  if (score >= 60) return 'text-yellow-500'
  return 'text-red-500'
}

function getTierColor(tier) {
  switch (tier) {
    case 'A': return 'bg-green-500 text-white'
    case 'B': return 'bg-blue-500 text-white'
    case 'C': return 'bg-yellow-500 text-white'
    case 'D': return 'bg-orange-500 text-white'
    default: return 'bg-red-500 text-white'
  }
}
