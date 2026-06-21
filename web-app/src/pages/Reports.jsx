import { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import { getScoreColor, getTierColor } from '../utils/colors'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { getAllRepositories, loadRealScannerData } from '../services/realScannerData'
import ReportDetailModal from '../components/ReportDetailModal'
import CompareModal from '../components/CompareModal'
import { SkeletonTable } from '../components/Skeleton'
import { useToast } from '../contexts/ToastContext'
import { useSettings } from '../contexts/SettingsContext'

// Tier score map — kept inline to avoid minifier TDZ issues with module-level const
const TIER_SCORE = { A: 1, B: 2, C: 3, D: 4, F: 5 };

export default function Reports() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedReport, setSelectedReport] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [dataSource, setDataSource] = useState('unknown')
  // Initialize compare selections from URL params ("compare=id1,id2,id3")
  const [selectedForCompare, setSelectedForCompare] = useState(() => {
    const p = searchParams.get('compare')
    return p ? p.split(',').filter(Boolean) : []
  })
  const [showCompare, setShowCompare] = useState(false)
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

  // Abort controller ref for cancellable fetches
  const abortRef = useRef(null)
  // Debounce ref for search input
  const searchDebounceRef = useRef(null)

  useEffect(() => {
    if (abortRef.current) abortRef.current.abort()
    const controller = new AbortController()
    abortRef.current = controller
    fetchReports(controller.signal)
    return () => controller.abort()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, pagination.page, pagination.perPage, settings.defaultPageSize])

  // Load available filter options from real data
  useEffect(() => {
    let cancelled = false
    loadRealScannerData().then((data) => {
      if (cancelled) return
      const langs = Object.keys(data.language_distribution || {}).sort()
      setAvailableLanguages(langs)
      const tiers = Object.keys(data.tier_distribution || {}).sort((a, b) => (TIER_SCORE[a] ?? 9) - (TIER_SCORE[b] ?? 9))
      setAvailableTiers(tiers.length ? tiers : ['A', 'B', 'C', 'D', 'F'])
    }).catch(() => {})
    return () => { cancelled = true }
  }, [])

  // Sync defaultPageSize changes into pagination
  useEffect(() => {
    setPagination((p) => ({ ...p, perPage: settings.defaultPageSize, page: 1 }))
  }, [settings.defaultPageSize])

  const fetchReports = async (signal) => {
    try {
      setLoading(true)
      setError(null)
      const response = await getAllRepositories(
        pagination.page,
        pagination.perPage,
        filters.language,
        filters.tier,
        signal
      )

      if (response && response.repositories) {
        let repos = response.repositories
        if (filters.search) {
          const q = filters.search.toLowerCase()
          repos = repos.filter((r) =>
            (r.name || '').toLowerCase().includes(q) ||
            (r.description || '').toLowerCase().includes(q) ||
            (r.language || '').toLowerCase().includes(q) ||
            ((r.topics || []).some((t) => t.toLowerCase().includes(q)))
          )
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
      if (err.name === 'AbortError') return
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
      if (column === 'tier') return mult * ((TIER_SCORE[av] ?? 9) - (TIER_SCORE[bv] ?? 9))
      if (typeof av === 'number' && typeof bv === 'number') return mult * (av - bv)
      return mult * String(av || '').localeCompare(String(bv || ''))
    })
  }, [reports, sort])

  // Compute table column count based on active settings
  const tableColCount = useMemo(() => {
    return 5 + (settings.showStars !== false ? 1 : 0) + (settings.showDeps !== false ? 1 : 0) + (settings.showFiles !== false ? 1 : 0) + 1
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

  // Debounced search handler — avoids hammering on every keystroke
  const handleSearchChange = useCallback((value) => {
    if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current)
    searchDebounceRef.current = setTimeout(() => {
      handleFilterChange('search', value)
    }, 300)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const clearFilters = () => {
    setFilters({ language: '', tier: '', minScore: '', search: '' })
    setPagination((p) => ({ ...p, page: 1 }))
    setSearchParams(new URLSearchParams(), { replace: true })
    toast.info('Filters cleared')
  }

  const handleReportClick = (report) => {
    navigate(`/reports/${encodeURIComponent(report.id || report.name)}`)
  }

  // Sync compare selections to URL params
  const syncCompareToUrl = (sel) => {
    const next = new URLSearchParams(searchParams)
    if (sel.length > 0) next.set('compare', sel.join(','))
    else next.delete('compare')
    setSearchParams(next, { replace: true })
  }

  const toggleCompareSelection = (id) => {
    setSelectedForCompare((sel) => {
      const next = sel.includes(id) ? sel.filter((x) => x !== id) : sel.length >= 5 ? (toast.warning('Compare up to 5 at once'), sel) : [...sel, id]
      syncCompareToUrl(next)
      return next
    })
  }

  const clearCompareSelection = () => {
    setSelectedForCompare([])
    syncCompareToUrl([])
    toast.info('Selection cleared')
  }

  const selectAllOnPage = () => {
    const pageIds = sortedReports.map((r) => r.id)
    const allSelected = pageIds.every((id) => selectedForCompare.includes(id))
    if (allSelected) {
      // Deselect all on this page
      const next = selectedForCompare.filter((id) => !pageIds.includes(id))
      setSelectedForCompare(next)
      syncCompareToUrl(next)
    } else {
      // Select all on this page (up to 5 total)
      const remaining = 5 - selectedForCompare.length
      const toAdd = pageIds.filter((id) => !selectedForCompare.includes(id)).slice(0, remaining)
      const next = [...selectedForCompare, ...toAdd]
      if (toAdd.length < pageIds.length) toast.warning('Compare limited to 5 at once')
      setSelectedForCompare(next)
      syncCompareToUrl(next)
    }
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
        {selectedForCompare.length > 0 && (
          <>
            <button
              onClick={() => setShowCompare(true)}
              className="self-start sm:self-auto px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium"
            >
              Compare ({selectedForCompare.length})
            </button>
            <button
              onClick={clearCompareSelection}
              className="self-start sm:self-auto px-3 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-sm"
            >
              Clear selection
            </button>
          </>
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
            <label htmlFor="reports-search" className="block text-gray-400 text-xs mb-1">Search</label>
            <input
              id="reports-search"
              type="search"
              data-search
              value={filters.search}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search packages…"
              className="w-full bg-gray-700 text-white rounded px-3 py-2 border border-gray-600 focus:border-blue-500 focus:outline-none text-sm"
            />
          </div>
          <div>
            <label htmlFor="reports-language" className="block text-gray-400 text-xs mb-1">Language</label>
            <select
              id="reports-language"
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
            <label htmlFor="reports-tier" className="block text-gray-400 text-xs mb-1">Tier</label>
            <select
              id="reports-tier"
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
            <label htmlFor="reports-minscore" className="block text-gray-400 text-xs mb-1">Min score</label>
            <input
              id="reports-minscore"
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
          <div className="flex items-center gap-3 ml-auto">
            <label htmlFor="rows-per-page" className="text-gray-400 text-xs whitespace-nowrap">Rows:</label>
            <select
              id="rows-per-page"
              value={pagination.perPage}
              onChange={(e) => setPagination((p) => ({ ...p, perPage: Number(e.target.value), page: 1 }))}
              className="bg-gray-700 text-white text-xs rounded px-2 py-1 border border-gray-600"
            >
              {[10, 25, 50, 100].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
            <span className="text-gray-400 text-xs">
              {reports.length} on page · {pagination.total.toLocaleString()} total
            </span>
          </div>
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
                <th scope="col" className="px-3 py-3 w-8">
                  <input
                    type="checkbox"
                    onChange={selectAllOnPage}
                    checked={sortedReports.length > 0 && sortedReports.every((r) => selectedForCompare.includes(r.id))}
                    aria-label="Select all on page"
                    className="rounded border-gray-600 bg-gray-700 text-purple-500"
                  />
                </th>
                {[
                  { k: 'name', l: 'Package' },
                  { k: 'language', l: 'Language' },
                  { k: 'quality_score', l: 'Score' },
                  { k: 'tier', l: 'Tier' },
                  ...(settings.showStars !== false ? [{ k: 'stars', l: '⭐' }] : []),
                  ...(settings.showDeps !== false ? [{ k: 'total_dependencies', l: 'Deps' }] : []),
                  ...(settings.showFiles !== false ? [{ k: 'total_files', l: 'Files' }] : []),
                  { k: 'forks', l: 'Forks' },
                ].map((c) => (
                  <th
                    key={c.k}
                    scope="col"
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
                          aria-label={`Select ${report.name} for comparison`}
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
                      <td onClick={() => handleReportClick(report)} className="px-3 py-3 text-gray-300 text-sm cursor-pointer">
                        {report.forks > 0 ? report.forks.toLocaleString() : '—'}
                      </td>
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
                  onClick={() => setPagination((p) => ({ ...p, page: 1 }))}
                  disabled={pagination.page === 1}
                  className="px-2 py-1 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded text-xs transition-colors"
                  aria-label="First page"
                >
                  «
                </button>
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
                <button
                  onClick={() => setPagination((p) => ({ ...p, page: p.pages }))}
                  disabled={pagination.page === pagination.pages}
                  className="px-2 py-1 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded text-xs transition-colors"
                  aria-label="Last page"
                >
                  »
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