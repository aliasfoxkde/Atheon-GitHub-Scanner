import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ShortcutsModal } from './useKeyboardShortcuts';

describe('useKeyboardShortcuts', () => {
  // ShortcutsModal is testable without the full hook
  describe('ShortcutsModal', () => {
    it('renders nothing when closed', () => {
      const { container } = render(<ShortcutsModal open={false} onClose={jest.fn()} />);
      expect(container).toBeEmptyDOMElement();
    });

    it('renders the shortcuts list when open', () => {
      render(<ShortcutsModal open={true} onClose={jest.fn()} />);
      expect(screen.getByText('Keyboard shortcuts')).toBeInTheDocument();
      expect(screen.getByText('Focus search')).toBeInTheDocument();
      expect(screen.getByText('Go to Dashboard')).toBeInTheDocument();
      expect(screen.getByText('Go to Reports')).toBeInTheDocument();
      expect(screen.getByText('Go to Trending')).toBeInTheDocument();
      expect(screen.getByText('Go to Submit')).toBeInTheDocument();
      expect(screen.getByText('Go to Pipeline')).toBeInTheDocument();
      expect(screen.getByText('Go to API docs')).toBeInTheDocument();
      expect(screen.getByText('Go to Settings')).toBeInTheDocument();
      expect(screen.getByText('Toggle this help')).toBeInTheDocument();
      expect(screen.getByText('Close modal / blur input')).toBeInTheDocument();
    });

    it('renders kbd elements for shortcuts', () => {
      render(<ShortcutsModal open={true} onClose={jest.fn()} />);
      // Should have kbd elements for each key
      const kbdElements = document.querySelectorAll('kbd');
      expect(kbdElements.length).toBeGreaterThan(0);
    });

    it('calls onClose when Close button is clicked', async () => {
      const onClose = jest.fn();
      render(<ShortcutsModal open={true} onClose={onClose} />);

      const closeButton = screen.getByText('Close');

      await act(async () => {
        closeButton.click();
      });

      expect(onClose).toHaveBeenCalledTimes(1);
    });

    it('renders close button with correct styling', () => {
      render(<ShortcutsModal open={true} onClose={jest.fn()} />);
      const closeBtn = screen.getByText('Close');
      expect(closeBtn).toHaveClass('mt-6 w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg');
    });
  });
});
