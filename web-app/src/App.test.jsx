/**
 * Unit tests for App.jsx
 */
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

jest.mock(
  './components/Layout/AppLayout',
  () =>
    function MockAppLayout({ children }) {
      return <div data-testid="app-layout">{children}</div>;
    }
);
jest.mock(
  './pages/Dashboard',
  () =>
    function MockDashboard() {
      return <div data-testid="dashboard-page">Dashboard</div>;
    }
);
jest.mock(
  './pages/Submit',
  () =>
    function MockSubmit() {
      return <div data-testid="submit-page">Submit</div>;
    }
);
jest.mock(
  './pages/Reports',
  () =>
    function MockReports() {
      return <div data-testid="reports-page">Reports</div>;
    }
);
jest.mock(
  './pages/ApiDocs',
  () =>
    function MockApiDocs() {
      return <div data-testid="api-docs-page">API Docs</div>;
    }
);
jest.mock(
  './pages/Pipeline',
  () =>
    function MockPipeline() {
      return <div data-testid="pipeline-page">Pipeline</div>;
    }
);
jest.mock(
  './pages/Trending',
  () =>
    function MockTrending() {
      return <div data-testid="trending-page">Trending</div>;
    }
);
jest.mock(
  './pages/Settings',
  () =>
    function MockSettings() {
      return <div data-testid="settings-page">Settings</div>;
    }
);
jest.mock(
  './pages/ReportDetail',
  () =>
    function MockReportDetail() {
      return <div data-testid="report-detail-page">Report Detail</div>;
    }
);
jest.mock(
  './pages/About',
  () =>
    function MockAbout() {
      return <div data-testid="about-page">About</div>;
    }
);
jest.mock(
  './pages/NotFound',
  () =>
    function MockNotFound() {
      return <div data-testid="not-found-page">Not Found</div>;
    }
);
jest.mock(
  './components/ErrorBoundary',
  () =>
    function MockErrorBoundary({ children }) {
      return <div>{children}</div>;
    }
);
jest.mock('framer-motion', () => ({
  AnimatePresence: ({ children }) => <div>{children}</div>,
  motion: { div: 'div' },
}));
jest.mock('./hooks/useKeyboardShortcuts', () => ({
  __esModule: true,
  default: () => ({ showHelp: false, setShowHelp: jest.fn() }),
  ShortcutsModal: jest.fn(() => null),
}));
jest.mock('./contexts/ToastContext', () => ({
  useToast: () => ({ show: jest.fn(), success: jest.fn(), error: jest.fn(), info: jest.fn() }),
}));
jest.mock('./utils/backgroundSync', () => ({
  getPendingSubmissions: jest.fn(() => []),
  removePendingSubmission: jest.fn(),
}));

import App from './App';

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('app-layout')).toBeInTheDocument();
  });

  it('renders Dashboard at root path', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByTestId('dashboard-page')).toBeInTheDocument();
    });
  });

  it('renders Dashboard at /dashboard path', async () => {
    render(
      <MemoryRouter initialEntries={['/dashboard']}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByTestId('dashboard-page')).toBeInTheDocument();
    });
  });

  it('renders Submit page', async () => {
    render(
      <MemoryRouter initialEntries={['/submit']}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByTestId('submit-page')).toBeInTheDocument();
    });
  });

  it('renders Reports page', async () => {
    render(
      <MemoryRouter initialEntries={['/reports']}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByTestId('reports-page')).toBeInTheDocument();
    });
  });

  it('renders NotFound for unknown routes', async () => {
    render(
      <MemoryRouter initialEntries={['/nonexistent']}>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
    });
  });

  it('renders with online status', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.queryByText(/you're offline/i)).not.toBeInTheDocument();
  });
});
