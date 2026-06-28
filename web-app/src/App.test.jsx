/**
 * Unit tests for App.jsx
 */
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

// Mock dependencies
const MockAppLayout = ({ children }) => <div data-testid="app-layout">{children}</div>;
MockAppLayout.displayName = 'AppLayout';

const MockDashboard = () => <div data-testid="dashboard-page">Dashboard</div>;
const MockSubmit = () => <div data-testid="submit-page">Submit</div>;
const MockReports = () => <div data-testid="reports-page">Reports</div>;
const MockApiDocs = () => <div data-testid="api-docs-page">API Docs</div>;
const MockPipeline = () => <div data-testid="pipeline-page">Pipeline</div>;
const MockTrending = () => <div data-testid="trending-page">Trending</div>;
const MockSettings = () => <div data-testid="settings-page">Settings</div>;
const MockReportDetail = () => <div data-testid="report-detail-page">Report Detail</div>;
const MockAbout = () => <div data-testid="about-page">About</div>;
const MockNotFound = () => <div data-testid="not-found-page">Not Found</div>;

jest.mock('./components/Layout/AppLayout', () => MockAppLayout);
jest.mock('./pages/Dashboard', () => MockDashboard);
jest.mock('./pages/Submit', () => MockSubmit);
jest.mock('./pages/Reports', () => MockReports);
jest.mock('./pages/ApiDocs', () => MockApiDocs);
jest.mock('./pages/Pipeline', () => MockPipeline);
jest.mock('./pages/Trending', () => MockTrending);
jest.mock('./pages/Settings', () => MockSettings);
jest.mock('./pages/ReportDetail', () => MockReportDetail);
jest.mock('./pages/About', () => MockAbout);
jest.mock('./pages/NotFound', () => MockNotFound);
jest.mock('./components/ErrorBoundary', ({ children }) => <div>{children}</div>);
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
