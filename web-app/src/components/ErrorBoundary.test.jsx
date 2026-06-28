import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ErrorBoundary from './ErrorBoundary';

// Component that throws when rendered
function ThrowError({ message = 'Test error' }) {
  throw new Error(message);
}

// Normal child for testing
function NormalChild() {
  return <div data-testid="child">Child content</div>;
}

describe('ErrorBoundary', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('renders children normally when no error', () => {
    render(
      <ErrorBoundary>
        <NormalChild />
      </ErrorBoundary>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByTestId('child').textContent).toBe('Child content');
  });

  it('catches a render error and shows fallback UI with "Something went wrong"', () => {
    render(
      <ErrorBoundary>
        <ThrowError message="Boom!" />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Boom!')).toBeInTheDocument();
  });

  it('has a "Try again" button that resets error state', () => {
    render(
      <ErrorBoundary>
        <ThrowError message="Kaboom" />
      </ErrorBoundary>
    );

    const tryAgainBtn = screen.getByRole('button', { name: /try again/i });
    expect(tryAgainBtn).toBeInTheDocument();

    // Clicking Try Again should re-render children (which throw again, but the button exists)
    fireEvent.click(tryAgainBtn);
    // The component resets state; children re-render and throw, so fallback shows again
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('has a "Reload Page" button in fallback UI', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    const reloadBtn = screen.getByRole('button', { name: /reload page/i });
    expect(reloadBtn).toBeInTheDocument();
  });
});
