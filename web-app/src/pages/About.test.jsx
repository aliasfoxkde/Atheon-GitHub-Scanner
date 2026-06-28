/**
 * Unit tests for About page
 */

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import About from './About';

describe('About', () => {
  it('renders the about page with main heading', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/about atheon scanner/i);
  });

  it('renders version badge', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    // Version appears in the badge spans at the top
    const versionBadge = screen.getByText(/^v1\.0\.0$/i);
    expect(versionBadge).toBeInTheDocument();
  });

  it('renders the What is Atheon Enhanced section', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(screen.getByText(/what is atheon enhanced/i)).toBeInTheDocument();
  });

  it('renders Atheon Enhanced CLI link', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(screen.getByText('Atheon Enhanced CLI')).toBeInTheDocument();
  });

  it('renders pre-release warning', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(screen.getByText(/scanner version is pre-release/i)).toBeInTheDocument();
  });

  it('renders the page without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    expect(container).toBeInTheDocument();
  });
});
