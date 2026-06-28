import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { BarChart, DonutChart, RepositoryRadarChart } from './Charts';

// Mock recharts
jest.mock('recharts', () => ({
  BarChart: ({ children }) => <div data-testid="bar-chart">{children}</div>,
  Bar: () => <div data-testid="bar" />,
  XAxis: () => null,
  YAxis: () => null,
  CartesianGrid: () => null,
  Tooltip: () => null,
  ResponsiveContainer: ({ children }) => <div data-testid="responsive-container">{children}</div>,
  Cell: () => null,
  PieChart: ({ children }) => <div data-testid="pie-chart">{children}</div>,
  Pie: ({ children }) => <div data-testid="pie">{children}</div>,
  RadarChart: ({ children }) => <div data-testid="radar-chart">{children}</div>,
  Radar: () => null,
  PolarGrid: () => null,
  PolarAngleAxis: () => null,
}));

describe('Charts', () => {
  describe('BarChart', () => {
    it('renders the bar chart with data', () => {
      render(<BarChart data={{ A: 10, B: 20, C: 15 }} title="Grade Distribution" />);

      expect(screen.getByTestId('responsive-container')).toBeInTheDocument();
      expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
      expect(screen.getByText('Grade Distribution')).toBeInTheDocument();
    });

    it('shows "No data available" when data is empty', () => {
      render(<BarChart data={{}} />);
      expect(screen.getByText('No data available')).toBeInTheDocument();
    });
  });

  describe('DonutChart', () => {
    it('renders the donut chart with data', () => {
      render(<DonutChart data={{ Critical: 5, High: 10, Medium: 20 }} title="Severity" />);

      expect(screen.getByTestId('responsive-container')).toBeInTheDocument();
      expect(screen.getByTestId('pie-chart')).toBeInTheDocument();
      expect(screen.getByText('Severity')).toBeInTheDocument();
    });

    it('shows "No data" when data is empty', () => {
      render(<DonutChart data={{}} />);
      expect(screen.getByText('No data')).toBeInTheDocument();
    });
  });

  describe('RepositoryRadarChart', () => {
    it('renders the radar chart', () => {
      render(
        <RepositoryRadarChart
          report={{
            quality_score: 85,
            stars: 1000,
            forks: 50,
            total_dependencies: 10,
            total_files: 100,
            open_issues: 5,
          }}
          title="Repo Health"
        />
      );

      expect(screen.getByTestId('radar-chart')).toBeInTheDocument();
      expect(screen.getByText('Repo Health')).toBeInTheDocument();
    });

    it('shows title when provided', () => {
      render(<RepositoryRadarChart report={{}} title="Custom Title" />);
      expect(screen.getByText('Custom Title')).toBeInTheDocument();
    });
  });
});
