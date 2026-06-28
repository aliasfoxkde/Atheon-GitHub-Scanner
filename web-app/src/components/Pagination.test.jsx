import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from './Pagination';

describe('Pagination', () => {
  const defaultProps = {
    page: 1,
    pages: 5,
    total: 100,
    perPage: 20,
    onChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders page buttons', () => {
    render(<Pagination {...defaultProps} />);

    // Should show page numbers
    expect(screen.getByRole('button', { name: 'Page 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Page 2' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Page 5' })).toBeInTheDocument();
  });

  test('has previous and next buttons', () => {
    render(<Pagination {...defaultProps} />);

    expect(screen.getByRole('button', { name: 'Previous page' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Next page' })).toBeInTheDocument();
  });

  test('has first and last page buttons', () => {
    render(<Pagination {...defaultProps} />);

    expect(screen.getByRole('button', { name: 'First page' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Last page' })).toBeInTheDocument();
  });

  test('calls onChange with correct page when page number clicked', async () => {
    const user = userEvent.setup();
    render(<Pagination {...defaultProps} />);

    await user.click(screen.getByRole('button', { name: 'Page 3' }));

    expect(defaultProps.onChange).toHaveBeenCalledWith(3);
  });

  test('calls onChange with 1 when first page clicked', async () => {
    const user = userEvent.setup();
    render(<Pagination {...defaultProps} page={3} />);

    await user.click(screen.getByRole('button', { name: 'First page' }));

    expect(defaultProps.onChange).toHaveBeenCalledWith(1);
  });

  test('calls onChange with last page when last page clicked', async () => {
    const user = userEvent.setup();
    render(<Pagination {...defaultProps} />);

    await user.click(screen.getByRole('button', { name: 'Last page' }));

    expect(defaultProps.onChange).toHaveBeenCalledWith(5);
  });

  test('calls onChange with previous page when previous clicked', async () => {
    const user = userEvent.setup();
    render(<Pagination {...defaultProps} page={3} />);

    await user.click(screen.getByRole('button', { name: 'Previous page' }));

    expect(defaultProps.onChange).toHaveBeenCalledWith(2);
  });

  test('calls onChange with next page when next clicked', async () => {
    const user = userEvent.setup();
    render(<Pagination {...defaultProps} />);

    await user.click(screen.getByRole('button', { name: 'Next page' }));

    expect(defaultProps.onChange).toHaveBeenCalledWith(2);
  });

  test('shows correct page count display', () => {
    render(<Pagination {...defaultProps} />);

    expect(screen.getByText('Showing 1–20 of 100')).toBeInTheDocument();
  });

  test('shows correct range for middle page', () => {
    render(<Pagination {...defaultProps} page={3} />);

    expect(screen.getByText('Showing 41–60 of 100')).toBeInTheDocument();
  });

  test('shows correct range for last page', () => {
    render(<Pagination {...defaultProps} page={5} />);

    expect(screen.getByText('Showing 81–100 of 100')).toBeInTheDocument();
  });

  test('highlights current page', () => {
    render(<Pagination {...defaultProps} page={2} />);

    const page2 = screen.getByRole('button', { name: 'Page 2' });
    expect(page2).toHaveAttribute('aria-current', 'page');
  });

  test('returns null when pages is 1 or less', () => {
    const { container: c1 } = render(<Pagination {...defaultProps} pages={1} />);
    const { container: c2 } = render(<Pagination {...defaultProps} pages={0} />);

    expect(c1.firstChild).toBeNull();
    expect(c2.firstChild).toBeNull();
  });

  test('disables previous button on first page', () => {
    render(<Pagination {...defaultProps} page={1} />);

    const prevBtn = screen.getByRole('button', { name: 'Previous page' });
    const firstBtn = screen.getByRole('button', { name: 'First page' });

    expect(prevBtn).toBeDisabled();
    expect(firstBtn).toBeDisabled();
  });

  test('disables next button on last page', () => {
    render(<Pagination {...defaultProps} page={5} />);

    const nextBtn = screen.getByRole('button', { name: 'Next page' });
    const lastBtn = screen.getByRole('button', { name: 'Last page' });

    expect(nextBtn).toBeDisabled();
    expect(lastBtn).toBeDisabled();
  });

  test('shows ellipsis for large page counts', () => {
    render(<Pagination {...defaultProps} page={5} pages={20} />);

    // Should have ellipsis indicators
    const ellipses = screen.getAllByText('…');
    expect(ellipses.length).toBeGreaterThan(0);
  });
});
