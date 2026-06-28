/**
 * Unit tests for SecurityRadarChart component
 */
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';

// Mock recharts
jest.mock('recharts', () => ({
  Radar: jest.fn(() => null),
  RadarChart: jest.fn(() => null),
  PolarGrid: jest.fn(() => null),
  PolarAngleAxis: jest.fn(() => null),
  ResponsiveContainer: jest.fn(({ children }) => (
    <div data-testid="responsive-container">{children}</div>
  )),
  Tooltip: jest.fn(() => null),
}));

import SecurityRadarChart from './SecurityRadarChart';

describe('SecurityRadarChart', () => {
  const mockSecurityData = {
    dependencyVulns: 5,
    sqlInjection: 2,
    codeInjection: 1,
    xss: 3,
    secrets: 0,
    crypto: 1,
    config: 4,
    critical: 2,
    high: 3,
    medium: 5,
    low: 10,
    totalFindings: 20,
  };

  it('renders with security data', () => {
    render(<SecurityRadarChart securityData={mockSecurityData} totalRepos={100} />);
    expect(screen.getByTestId('responsive-container')).toBeInTheDocument();
  });

  it('renders with empty security data', () => {
    render(<SecurityRadarChart securityData={{}} totalRepos={100} />);
    expect(screen.getByTestId('responsive-container')).toBeInTheDocument();
  });

  it('renders without security data prop', () => {
    render(<SecurityRadarChart totalRepos={100} />);
    expect(screen.getByTestId('responsive-container')).toBeInTheDocument();
  });

  it('renders with custom size', () => {
    const { container } = render(<SecurityRadarChart securityData={mockSecurityData} size={500} />);
    expect(container.querySelector('[style]')).toBeInTheDocument();
  });

  it('renders the title', () => {
    render(<SecurityRadarChart securityData={mockSecurityData} totalRepos={100} />);
    expect(screen.getByText('Security Radar Analysis')).toBeInTheDocument();
  });

  it('renders category filter select', () => {
    render(<SecurityRadarChart securityData={mockSecurityData} totalRepos={100} />);
    expect(screen.getByLabelText('Filter by category')).toBeInTheDocument();
  });

  it('renders severity breakdown section', () => {
    render(<SecurityRadarChart securityData={mockSecurityData} totalRepos={100} />);
    expect(screen.getByText('Severity Breakdown')).toBeInTheDocument();
    expect(screen.getByText('Critical')).toBeInTheDocument();
    expect(screen.getByText('High')).toBeInTheDocument();
    expect(screen.getByText('Medium')).toBeInTheDocument();
    expect(screen.getByText('Low')).toBeInTheDocument();
  });

  it('renders pattern distribution section', () => {
    render(<SecurityRadarChart securityData={mockSecurityData} totalRepos={100} />);
    expect(screen.getByText('Pattern Distribution')).toBeInTheDocument();
  });

  it('renders legend items', () => {
    render(<SecurityRadarChart securityData={mockSecurityData} totalRepos={100} />);
    expect(screen.getByText('Dependency Vulns')).toBeInTheDocument();
    expect(screen.getByText('SQL Injection')).toBeInTheDocument();
    expect(screen.getByText('Code Injection')).toBeInTheDocument();
    expect(screen.getByText('XSS')).toBeInTheDocument();
    expect(screen.getByText('Secrets Leaked')).toBeInTheDocument();
    expect(screen.getByText('Crypto Issues')).toBeInTheDocument();
    expect(screen.getByText('Config Issues')).toBeInTheDocument();
  });

  it('renders total findings', () => {
    render(<SecurityRadarChart securityData={mockSecurityData} totalRepos={100} />);
    expect(screen.getByText('Total Findings')).toBeInTheDocument();
  });
});
