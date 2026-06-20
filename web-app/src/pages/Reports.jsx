import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getAllRepositories, loadRealScannerData } from '../services/realScannerData'
import ReportDetailModal from '../components/ReportDetailModal'
import CompareModal from '../components/CompareModal'
import { SkeletonTable } from '../components/Skeleton'
import { useToast } from '../contexts/ToastContext'
import { useSettings } from '../contexts/SettingsContext'

const TIER_ORDER = { A: 1, B: 2, C: 3, D: 4, F: 5 };

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [dataSource, setDataSource] = useState('unknown')
  const [selectedForCompare, setSelectedForCompare] = useState([])
  const [showCompare, setShowCompare] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const toast = useToast()
  const { settings } = useSettings()

  const [availableLanguages, setAvailableLanguages] = useState([])
  const [availableTiers, setAvailableTiers] = useState(['A', 'B', 'C', 'D', 'F'])
  const [filters, setFilters] = useState({
    language: searchParams.get('language') || '',
    tier: searchParams.get('tier') || '',
    minScore: searchParams.get('minScore') || '',
    search: searchParams.get('q') || '',
  })
  const [sort, setSort] = useState({ column: null, dir: 'asc' })
  const [pagination, setPagination] = useState({
    page: 1,
    perPage: settings.defaultPageSize,
    total: 0,
    pages: 0,
  })

  useEffect(() => {
    fetchReports()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, pagination.page, pagination.perPage])

  // Load available filter options from real data
  useEffect(() => {
    loadRealScannerData().then((data) => {
      const langs = Object.keys(data.language_distribution || {}).sort()
      setAvailableLanguages(langs)
      const tiers = Object.keys(data.tier_distribution || {}).sort((a, b) => TIER_ORDER[a] - TIER_ORDER[b])
      setAvailableTiers(tiers.length ? tiers : ['A', 'B', 'C', 'D', 'F'])
    }).catch(() => {})
  }, [])

  const fetchReports = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await getAllRepositories(
        pagination.page,
        pagination.perPage,
        filters.language,
        filters.tier
      )

      if (response && response.repositories) {
        let repos = response.repositories
        if (filters.search) {
          const q = filters.search.toLowerCase()
          repos = repos.filter((r) => (r.name || '').toLowerCase().includes(q))
        }
        if (filters.minScore) {
          const min = Number(filters.minScore)
          if (!Number.isNaN(min)) repos = repos.filter((r) => (r.quality_score || 0) >= min)
        }
        setReports(repos)
        setPagination((p) => ({
          ...p,
          total: response.total || 0,
          pages: response.pages || 0,
        }))
        setDataSource('real_api')
      } else {
        throw new Error('Invalid response format')
      }
    } catch (err) {
      console.error(err)
      setError(err.message)
      setDataSource('error')
      toast.error('Failed to load reports')
    } finally {
      setLoading(false)
    }
  }

  const sortedReports = useMemo(() => {
    if (!sort.column) return reports
    const { column, dir } = sort
    const mult = dir === 'asc' ? 1 : -1
    return [...reports].sort((a, b) => {
      const av = a[column]
      const bv = b[column]
      if (column === 'tier') return (TIER_ORDER[av] || 9) - (TIER_ORDER[bv] || 9) ? mult * ((TIER_ORDER[av] || 9) - (TIER_ORDER[bv] || 9)) : 0
      if (typeof av === 'number' && typeof bv === 'number') return mult * (av - bv)
      return mult * String(av || '').localeCompare(String(bv || ''))
    })
  }, [reports, sort])

  // Compute table column count based on active settings
  const tableColCount = useMemo(() => {
    return 5 + (settings.showStars !== false ? 1 : 0) + (settings.showDeps !== false ? 1 : 0) + (settings.showFiles !== false ? 1 : 0)
  }, [settings.showStars, settings.showDeps, settings.showFiles])

  const handleSort = (column) => {
    setSort((s) => s.column === column ? { column, dir: s.dir === 'asc' ? 'desc' : 'asc' } : { column, dir: 'asc' })
  }

  const handleFilterChange = (field, value) => {
    setFilters((f) => ({ ...f, [field]: value }))
    setPagination((p) => ({ ...p, page: 1 }))
    const next = new URLSearchParams(searchParams)
    if (value) next.set(field === 'search' ? 'q' : field, value)
    else next.delete(field === 'search' ? 'q' : field)
    setSearchParams(next, { replace: true })
  }

  const clearFilters = () => {
    setFilters({ language: '', tier: '', minScore: '', search: '' })
    setPagination((p) => ({ ...p, page: 1 }))
    setSearchParams(new URLSearchParams(), { replace: true })
    toast.info('Filters cleared')
  }

  const handleReportClick = (report) => {
    setSelectedReport(report)
    setShowModal(true)
  }

  const toggleCompareSelection = (id) => {
    setSelectedForCompare((sel) => {
      if (sel.includes(id)) return sel.filter((x) => x !== id)
      if (sel.length >= 5) {
        toast.warning('Compare up to 5 at once')
        return sel
      }
      return [...sel, id]
    })
  }

  const exportData = (format) => {
    if (reports.length === 0) {
      toast.error('No data to export')
      return
    }
    const headers = ['name', 'language', 'quality_score', 'tier', 'stars', 'total_dependencies', 'total_files', 'scan_method', 'scan_date']
    if (format === 'csv') {
      const lines = [headers.join(',')]
      for (const r of reports) {
        lines.push(headers.map((h) => JSON.stringify(r[h] ?? '')).join(','))
      }
      download(`atheon-reports-page${pagination.page}.csv`, lines.join('\n'), 'text/csv')
    } else {
      download(`atheon-reports-page${pagination.page}.json`, JSON.stringify({ exportedAt: new Date().toISOString(), page: pagination.page, total: pagination.total, reports }, null, 2), 'application/json')
    }
    toast.success(`Exported ${reports.length} reports as ${format.toUpperCase()}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">Repository Reports</h1>
          <p className="text-gray-400 text-sm sm:text-base">
            {dataSource === 'real_api' ? `Real data from ${pagination.total.toLocaleString()} analyzed packages` : 'Loading repository data…'}
          </p>
        </div>
        {selectedForCompare.length > 1 && (
          <button
            onClick={() => setShowCompare(true)}
            className="self-start sm:self-auto px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium"
          >
            Compare ({selectedForCompare.length})
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-xs sm:text-sm">Total packages</p>
          <p className="text-2xl font-bold text-white">{pagination.total.toLocaleString()}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-xs sm:text-sm">Showing</p>
          <p className="text-2xl font-bold text-white">{reports.length}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-xs sm:text-sm">Selected</p>
          <p className="text-2xl font-bold text-purple-400">{selectedForCompare.length}</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
          <p className="text-gray-400 text-xs sm:text-sm">Page</p>
          <p className="text-2xl font-bold text-white">{pagination.page} / {pagination.pages || 1}</p>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          <div className="lg:col-span-2">
            <label className="block text-gray-400 text-xs mb-1">Search</label>
            <input
              type="search"
              data-search
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              placeholder="Search packages…"
              className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-400 text-xs mb-1">Language</label>
            <select
              value={filters.language}
              onChange={(e) => handleFilterChange('language', e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
            >
              <option value="">All</option>
              {availableLanguages.map((l) => (
                <option key={l} value={l}>{l}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-400 text-xs mb-1">Tier</label>
            <select
              value={filters.tier}
              onChange={(e) => handleFilterChange('tier', e.target.value)}
              className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
            >
              <option value="">All</option>
              {availableTiers.map((t) => (
                <option key={t} value={t}>Tier {t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-400 text-xs mb-1">Min score</label>
            <input
              type="number"
              min="0"
              max="100"
              value={filters.minScore}
              onChange={(e) => handleFilterChange('minScore', e.target.value)}
              placeholder="0-100"
              className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
            />
          </div>
          <div className="flex items-end">
            <button
              onClick={clearFilters}
              className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded text-sm transition-colors"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button onClick={() => exportData('csv')} className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition-colors">
            Export CSV
          </button>
          <button onClick={() => exportData('json')} className="px-3 py-1.5 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition-colors">
            Export JSON
          </button>
          <span className="text-gray-500 text-xs ml-auto">
            {reports.length} on this page · {pagination.total.toLocaleString()} total
          </span>
        </div>
      </div>

      {loading ? (
        <SkeletonTable rows={10} columns={6} />
      ) : error ? (
        <div className="bg-red-900/20 border border-red-700 rounded-lg p-4 text-red-200">
          <strong>Error:</strong> {error}
        </div>
      ) : (
        <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-3 py-3 w-8">
                  <span className="sr-only">Select</span>
                </th>
                {[
                  { k: 'name', l: 'Package' },
                  { k: 'language', l: 'Language' },
                  { k: 'quality_score', l: 'Score' },
                  { k: 'tier', l: 'Tier' },
                  ...(settings.showStars !== false ? [{ k: 'stars', l: 'Stars' }] : []),
                  ...(settings.showDeps !== false ? [{ k: 'total_dependencies', l: 'Deps' }] : []),
                  ...(settings.showFiles !== false ? [{ k: 'total_files', l: 'Files' }] : []),
                ].map((c) => (
                  <th
                    key={c.k}
                    onClick={() => handleSort(c.k)}
                    className="px-3 py-3 text-left text-gray-400 text-xs font-medium cursor-pointer hover:text-white select-none whitespace-nowrap"
                  >
                    <span className="inline-flex items-center gap-1">
                      {c.l}
                      {sort.column === c.k && (
                        <span className="text-blue-400">{sort.dir === 'asc' ? '↑' : '↓'}</span>
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sortedReports.length === 0 ? (
                <tr>
                  <td colSpan={tableColCount + 1} className="px-4 py-8 text-center text-gray-400">
                    No repositories match your filters
                  </td>
                </tr>
              ) : (
                sortedReports.map((report) => {
                  const isSelected = selectedForCompare.includes(report.id)
                  return (
                    <tr
                      key={report.id}
                      className={`border-t border-gray-700 hover:bg-gray-700/50 transition-colors ${isSelected ? 'bg-purple-900/20' : ''} ${settings.density === 'compact' ? 'py-1' : ''}`}
                    >
                      <td className="px-3 py-3">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(e) => { e.stopPropagation(); toggleCompareSelection(report.id) }}
                          onClick={(e) => e.stopPropagation()}
                          className="rounded border-gray-600 bg-gray-700 text-purple-500"
                        />
                      </td>
                      <td
                        onClick={() => handleReportClick(report)}
                        className="px-3 py-3 text-white font-medium text-sm cursor-pointer"
                      >
                        <div className="truncate max-w-xs">{report.name}</div>
                      </td>
                      <td onClick={() => handleReportClick(report)} className="px-3 py-3 text-gray-300 text-sm cursor-pointer">{report.language}</td>
                      <td onClick={() => handleReportClick(report)} className="px-3 py-3 cursor-pointer">
                        <span className={`font-bold ${getScoreColor(report.quality_score)}`}>
                          {report.quality_score}
                        </span>
                      </td>
                      <td onClick={() => handleReportClick(report)} className="px-3 py-3 cursor-pointer">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${getTierColor(report.tier)}`}>
                          {report.tier}
                        </span>
                      </td>
                      {settings.showStars !== false && (
                        <td onClick={() => handleReportClick(report)} className="px-3 py-3 text-gray-300 text-sm cursor-pointer">
                          {report.stars > 0 ? (report.stars >= 1000 ? `${(report.stars / 1000).toFixed(1)}k` : report.stars) : '—'}
                        </td>
                      )}
                      {settings.showDeps !== false && (
                        <td onClick={() => handleReportClick(report)} className="px-3 py-3 text-gray-300 text-sm cursor-pointer">
                          {report.total_dependencies > 0 ? report.total_dependencies : '—'}
                        </td>
                      )}
                      {settings.showFiles !== false && (
                        <td onClick={() => handleReportClick(report)} className="px-3 py-3 text-gray-300 text-sm cursor-pointer">
                          {report.total_files > 0 ? report.total_files.toLocaleString() : '—'}
                        </td>
                      )}
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>

          {pagination.pages > 1 && (
            <div className="px-4 py-3 border-t border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
              <div className="text-gray-400">
                Showing {((pagination.page - 1) * pagination.perPage) + 1}–{Math.min(pagination.page * pagination.perPage, pagination.total)} of {pagination.total.toLocaleString()}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPagination((p) => ({ ...p, page: p.page - 1 }))}
                  disabled={pagination.page === 1}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded transition-colors"
                >
                  Previous
                </button>
                <span className="text-gray-400">
                  Page {pagination.page} of {pagination.pages}
                </span>
                <button
                  onClick={() => setPagination((p) => ({ ...p, page: p.page + 1 }))}
                  disabled={pagination.page === pagination.pages}
                  className="px-3 py-1 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {showModal && selectedReport && (
        <ReportDetailModal
          report={selectedReport}
          onClose={() => setShowModal(false)}
          onCompare={(r) => toggleCompareSelection(r.id)}
        />
      )}
      {showCompare && (
        <CompareModal ids={selectedForCompare} onClose={() => setShowCompare(false)} />
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

function download(filename, content, type) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}