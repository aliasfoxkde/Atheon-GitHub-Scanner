import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import AppLayout from './AppLayout';

// Mock ThemeToggle
jest.mock(
  '../ThemeToggle',
  () =>
    function MockThemeToggle() {
      return <button data-testid="theme-toggle">Theme</button>;
    }
);

describe('AppLayout', () => {
  it('renders the layout with nav links', () => {
    render(
      <MemoryRouter>
        <AppLayout>
          <div>Page content</div>
        </AppLayout>
      </MemoryRouter>
    );

    expect(screen.getByText('Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Reports')).toBeInTheDocument();
    expect(screen.getByText('Trending')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getByText('Pipeline')).toBeInTheDocument();
    expect(screen.getByText('API')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders the theme toggle', () => {
    render(
      <MemoryRouter>
        <AppLayout>
          <div>Page content</div>
        </AppLayout>
      </MemoryRouter>
    );

    // ThemeToggle renders twice: desktop header + mobile menu
    expect(screen.getAllByTestId('theme-toggle')).toHaveLength(2);
  });

  it('renders a skip-to-content link', () => {
    render(
      <MemoryRouter>
        <AppLayout>
          <div>Page content</div>
        </AppLayout>
      </MemoryRouter>
    );

    const skipLink = screen.getByText(/skip to main content/i);
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renders children content', () => {
    render(
      <MemoryRouter>
        <AppLayout>
          <p data-testid="child-content">Hello world</p>
        </AppLayout>
      </MemoryRouter>
    );

    expect(screen.getByTestId('child-content')).toBeInTheDocument();
  });
});
