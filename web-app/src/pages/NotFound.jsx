import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="text-9xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        404
      </div>
      <h1 className="text-3xl font-bold text-white mt-4">Page not found</h1>
      <p className="text-gray-400 mt-2 max-w-md">
        We couldn't find what you were looking for. The page may have been moved or never existed.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <Link
          to="/dashboard"
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
        >
          Go to Dashboard
        </Link>
        <Link
          to="/reports"
          className="px-5 py-2.5 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
        >
          Browse Reports
        </Link>
      </div>
    </div>
  );
}
