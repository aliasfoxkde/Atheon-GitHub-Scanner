import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Modal from './Modal';

describe('Modal', () => {
  test('renders with children', () => {
    render(
      <Modal id="test-modal" label="Test Modal">
        <div data-testid="modal-content">Modal content here</div>
      </Modal>
    );

    expect(screen.getByTestId('modal-content')).toBeInTheDocument();
  });

  test('renders with custom className via size prop', () => {
    render(
      <Modal id="test-modal" label="Test Modal" size="max-w-5xl">
        <div>Content</div>
      </Modal>
    );

    const modal = screen.getByRole('dialog');
    expect(modal.className).toContain('max-w-5xl');
  });

  test('has correct role and aria attributes', () => {
    render(
      <Modal id="my-modal" label="My Label">
        <div>Content</div>
      </Modal>
    );

    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-modal', 'true');
    expect(modal).toHaveAttribute('aria-label', 'My Label');
    expect(modal).toHaveAttribute('id', 'my-modal');
  });

  test('calls onClose when backdrop clicked', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(
      <Modal id="test-modal" label="Test Modal" onClose={onClose}>
        <div>Content</div>
      </Modal>
    );

    // Click on the backdrop (outer div)
    const backdrop = screen.getByRole('presentation');
    await user.click(backdrop);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('does not call onClose when modal content clicked', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(
      <Modal id="test-modal" label="Test Modal" onClose={onClose}>
        <div data-testid="modal-inner">Inner content</div>
      </Modal>
    );

    await user.click(screen.getByTestId('modal-inner'));
    expect(onClose).not.toHaveBeenCalled();
  });

  test('handles Escape key via keydown event', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(
      <Modal id="test-modal" label="Test Modal" onClose={onClose}>
        <button data-testid="focusable-btn">Focus me</button>
      </Modal>
    );

    // Focus the button first so the modal can receive key events
    const btn = screen.getByTestId('focusable-btn');
    btn.focus();

    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  test('close callback is optional (does not error when omitted)', () => {
    render(
      <Modal id="test-modal" label="Test Modal">
        <div>Content</div>
      </Modal>
    );

    const backdrop = screen.getByRole('presentation');
    expect(() => backdrop.click()).not.toThrow();
  });
});
