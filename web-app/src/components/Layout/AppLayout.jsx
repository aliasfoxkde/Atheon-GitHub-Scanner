import React from 'react';
import { Link } from 'react-router-dom';

const AppLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Title */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Atheon Scanner</h1>
                  <p className="text-xs text-gray-400">Code Security & Quality Analysis</p>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link to="/submit" className="text-gray-300 hover:text-white transition-colors">
                Analyze Code
              </Link>
              <Link to="/reports" className="text-gray-300 hover:text-white transition-colors">
                Browse Reports
              </Link>
              <Link to="/api" className="text-gray-300 hover:text-white transition-colors">
                API
              </Link>
            </nav>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-300">Powered by</h3>
              <p className="mt-2 text-sm text-gray-400">
                Patterns from <a href="https://github.com/HoraDomu/Atheon" className="text-blue-400 hover:text-blue-300">Atheon</a>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300">Resources</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-400">
                <li><Link to="/docs" className="hover:text-white">Documentation</Link></li>
                <li><Link to="/api" className="hover:text-white">API Reference</Link></li>
                <li><a href="https://github.com/aliasfoxkde/Atheon-GitHub-Scanner" className="hover:text-white">GitHub</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-300">Community</h3>
              <ul className="mt-2 space-y-1 text-sm text-gray-400">
                <li><a href="https://github.com/aliasfoxkde/Atheon-GitHub-Scanner/issues" className="hover:text-white">Report Issues</a></li>
                <li><a href="https://github.com/aliasfoxkde/Atheon-GitHub-Scanner/discussions" className="hover:text-white">Discussions</a></li>
                <li><a href="https://github.com/HoraDomu/Atheon" className="hover:text-white">Atheon Project</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400 text-center">
            <p>© 2026 Atheon GitHub Scanner. Open source security analysis tool.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;