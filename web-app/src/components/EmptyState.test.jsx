import { render, screen, fireEvent } from '@testing-library/react';
import EmptyState from './EmptyState';

describe('EmptyState', () => {
  it('renders with default icon', () => {
    render(<EmptyState title="No results" />);
    expect(screen.getByText('📭')).toBeInTheDocument();
  });

  it('renders with custom icon', () => {
    render(<EmptyState icon="🔍" title="Search" />);
    expect(screen.getByText('🔍')).toBeInTheDocument();
  });

  it('renders title text', () => {
    render(<EmptyState title="No data found" />);
    expect(screen.getByText('No data found')).toBeInTheDocument();
  });

  it('renders body text when provided', () => {
    render(<EmptyState title="No results" body="Try adjusting your filters" />);
    expect(screen.getByText('Try adjusting your filters')).toBeInTheDocument();
  });

  it('does not render body when not provided', () => {
    render(<EmptyState title="No results" />);
    const paragraphs = screen.queryByRole('paragraph');
    expect(paragraphs).toBeNull();
  });

  it('renders action button when action is provided', () => {
    const onClick = jest.fn();
    render(
      <EmptyState
        title="No results"
        action={{ label: 'Clear filters', onClick }}
      />
    );

    const button = screen.getByRole('button', { name: 'Clear filters' });
    expect(button).toBeInTheDocument();
  });

  it('does not render action button when not provided', () => {
    render(<EmptyState title="No results" />);
    expect(screen.queryByRole('button')).toBeNull();
  });

  it('calls onClick when action button is clicked', () => {
    const onClick = jest.fn();
    render(
      <EmptyState
        title="No results"
        action={{ label: 'Clear filters', onClick }}
      />
    );

    fireEvent.click(screen.getByRole('button', { name: 'Clear filters' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});