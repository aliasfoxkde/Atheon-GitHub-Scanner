import { useEffect, useState, lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from './components/Layout/AppLayout'
import Dashboard from './pages/Dashboard'
import Submit from './pages/Submit'
import Reports from './pages/Reports'
import { Skeleton } from './components/Skeleton'
import ErrorBoundary from './components/ErrorBoundary'
import ToastContainer from './components/Toast'
import useKeyboardShortcuts, { ShortcutsModal } from './hooks/useKeyboardShortcuts'

// Lazy-loaded route components for code splitting
const ApiDocs = lazy(() => import('./pages/ApiDocs'))
const Pipeline = lazy(() => import('./pages/Pipeline'))
const Trending = lazy(() => import('./pages/Trending'))
const Settings = lazy(() => import('./pages/Settings'))
const ReportDetail = lazy(() => import('./pages/ReportDetail'))
const About = lazy(() => import('./pages/About'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Suspense fallback for lazy-loaded routes
function RouteLoader() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-10 w-64" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => <Skeleton key={i} className="h-12" />)}
      </div>
      {[1, 2, 3, 4].map((i) => <Skeleton key={i} className="h-24" />)}
    </div>
  )
}

function App() {
  const { showHelp, setShowHelp } = useKeyboardShortcuts();
  const [installPromptEvent, setInstallPromptEvent] = useState(null);
  const [isOnline, setIsOnline] = useState(typeof navigator !== 'undefined' ? navigator.onLine : true);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  // PWA install prompt
  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setInstallPromptEvent(e);
      try {
        if (!localStorage.getItem('atheon_install_dismissed')) {
          setShowInstallBanner(true);
        }
      } catch {
        setShowInstallBanner(true);
      }
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  // Online/offline status
  useEffect(() => {
    const onOnline = () => setIsOnline(true);
    const onOffline = () => setIsOnline(false);
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
    return () => {
      window.removeEventListener('online', onOnline);
      window.removeEventListener('offline', onOffline);
    };
  }, []);

  const handleInstall = async () => {
    if (!installPromptEvent) return;
    installPromptEvent.prompt();
    const { outcome } = await installPromptEvent.userChoice;
    setInstallPromptEvent(null);
    setShowInstallBanner(false);
    try { localStorage.setItem('atheon_install_dismissed', '1'); } catch { /* ignore */ }
    if (outcome === 'accepted') { /* PWA installed */ }
  };

  const dismissInstall = () => {
    setShowInstallBanner(false);
    try { localStorage.setItem('atheon_install_dismissed', '1'); } catch { /* ignore */ }
  };

  return (
    <AppLayout>
      {/* Offline banner */}
      {!isOnline && (
        <div
          role="status"
          className="mb-4 px-4 py-2 bg-yellow-900/30 border border-yellow-700 rounded-lg text-yellow-200 text-sm flex items-center gap-2"
        >
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728M5.636 18.364a9 9 0 010-12.728M12 9v4m0 4h.01" />
          </svg>
          <span>You&apos;re offline. Showing cached data.</span>
        </div>
      )}

      {/* PWA install banner */}
      {showInstallBanner && installPromptEvent && (
        <div className="mb-4 px-4 py-3 bg-blue-900/30 border border-blue-700 rounded-lg text-blue-100 text-sm flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <strong className="block font-semibold text-white">Install Atheon Scanner</strong>
            <span className="text-blue-200">Add to home screen for offline access and a native feel.</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleInstall}
              className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium"
            >
              Install
            </button>
            <button
              onClick={dismissInstall}
              className="px-3 py-1.5 bg-transparent hover:bg-blue-800/40 text-blue-200 rounded text-sm"
              aria-label="Dismiss install banner"
            >
              Not now
            </button>
          </div>
        </div>
      )}

      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/api" element={<Suspense fallback={<RouteLoader />}><ApiDocs /></Suspense>} />
          <Route path="/pipeline" element={<Suspense fallback={<RouteLoader />}><Pipeline /></Suspense>} />
          <Route path="/trending" element={<Suspense fallback={<RouteLoader />}><Trending /></Suspense>} />
          <Route path="/settings" element={<Suspense fallback={<RouteLoader />}><Settings /></Suspense>} />
          <Route path="/reports/:id" element={<Suspense fallback={<RouteLoader />}><ReportDetail /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<RouteLoader />}><About /></Suspense>} />
          <Route path="*" element={<Suspense fallback={<RouteLoader />}><NotFound /></Suspense>} />
        </Routes>
      </ErrorBoundary>

      <ToastContainer />
      <ShortcutsModal open={showHelp} onClose={() => setShowHelp(false)} />
    </AppLayout>
  );
}

export default App;