/**
 * Shared Pagination component.
 * Props:
 *   page      — current page number (1-based)
 *   pages     — total page count
 *   total     — total item count
 *   perPage   — items per page (for range display)
 *   onChange  — (page) => void
 */
export default function Pagination({ page, pages, total, perPage, onChange }) {
  if (pages <= 1) return null;

  const start = (page - 1) * perPage + 1;
  const end = Math.min(page * perPage, total);

  return (
    <div className="px-4 py-3 border-t border-gray-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm">
      <div className="text-gray-400">
        Showing {start.toLocaleString()}–{end.toLocaleString()} of {total.toLocaleString()}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onChange(1)}
          disabled={page === 1}
          className="px-2 py-1 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded text-xs transition-colors"
          aria-label="First page"
        >
          «
        </button>
        <button
          onClick={() => onChange(page - 1)}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded transition-colors"
          aria-label="Previous page"
        >
          Previous
        </button>
        <span className="text-gray-400">
          Page {page} of {pages}
        </span>
        <button
          onClick={() => onChange(page + 1)}
          disabled={page === pages}
          className="px-3 py-1 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded transition-colors"
          aria-label="Next page"
        >
          Next
        </button>
        <button
          onClick={() => onChange(pages)}
          disabled={page === pages}
          className="px-2 py-1 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded text-xs transition-colors"
          aria-label="Last page"
        >
          »
        </button>
      </div>
    </div>
  );
}
