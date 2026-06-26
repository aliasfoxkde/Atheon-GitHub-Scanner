import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToastProvider, useToast } from './ToastContext';

// Component that exposes toast context for testing
function TestConsumer() {
  const { toasts, show, success, error, info, warning, dismiss, clear } = useToast();
  return (
    <div>
      <button onClick={() => show('info message')}>show</button>
      <button onClick={() => success('success message')}>success</button>
      <button onClick={() => error('error message')}>error</button>
      <button onClick={() => info('info message 2')}>info</button>
      <button onClick={() => warning('warning message')}>warning</button>
      <button onClick={() => dismiss(toasts[0]?.id)}>dismiss</button>
      <button onClick={() => clear()}>clear</button>
      <div data-testid="toast-count">{toasts.length}</div>
      <div data-testid="toasts">{JSON.stringify(toasts)}</div>
    </div>
  );
}

describe('ToastContext', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('shows a toast with default type info', async () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>
    );

    await act(async () => {
      userEvent.click(screen.getByText('show'));
    });

    await waitFor(() => {
      expect(screen.getByTestId('toast-count').textContent).toBe('1');
    });

    const toasts = JSON.parse(screen.getByTestId('toasts').textContent);
    expect(toasts[0]).toMatchObject({
      message: 'info message',
      type: 'info',
    });
    expect(toasts[0]).toHaveProperty('id');
  });

  it('shows a success toast', async () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>
    );

    await act(async () => {
      userEvent.click(screen.getByText('success'));
    });

    await waitFor(() => {
      const toasts = JSON.parse(screen.getByTestId('toasts').textContent);
      expect(toasts[0].type).toBe('success');
    });
  });

  it('shows an error toast', async () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>
    );

    await act(async () => {
      userEvent.click(screen.getByText('error'));
    });

    await waitFor(() => {
      const toasts = JSON.parse(screen.getByTestId('toasts').textContent);
      expect(toasts[0].type).toBe('error');
    });
  });

  it('shows a warning toast', async () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>
    );

    await act(async () => {
      userEvent.click(screen.getByText('warning'));
    });

    await waitFor(() => {
      const toasts = JSON.parse(screen.getByTestId('toasts').textContent);
      expect(toasts[0].type).toBe('warning');
    });
  });

  it('dismisses a toast by id', async () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>
    );

    await act(async () => {
      userEvent.click(screen.getByText('show'));
    });

    await waitFor(() => {
      expect(screen.getByTestId('toast-count').textContent).toBe('1');
    });

    await act(async () => {
      userEvent.click(screen.getByText('dismiss'));
    });

    await waitFor(() => {
      expect(screen.getByTestId('toast-count').textContent).toBe('0');
    });
  });

  it('clears all toasts', async () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>
    );

    await act(async () => {
      userEvent.click(screen.getByText('show'));
    });

    await act(async () => {
      userEvent.click(screen.getByText('info'));
    });

    await waitFor(() => {
      expect(screen.getByTestId('toast-count').textContent).toBe('2');
    });

    await act(async () => {
      userEvent.click(screen.getByText('clear'));
    });

    await waitFor(() => {
      expect(screen.getByTestId('toast-count').textContent).toBe('0');
    });
  });

  it('auto-dismisses after duration', async () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>
    );

    await act(async () => {
      userEvent.click(screen.getByText('show'));
    });

    await waitFor(() => {
      expect(screen.getByTestId('toast-count').textContent).toBe('1');
    });

    await act(() => {
      jest.advanceTimersByTime(4000);
    });

    await waitFor(() => {
      expect(screen.getByTestId('toast-count').textContent).toBe('0');
    });
  });

  it('caps toasts at MAX_TOASTS (5)', async () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>
    );

    // Click one at a time, waiting for each to be processed
    for (let i = 0; i < 7; i++) {
      await act(async () => {
        userEvent.click(screen.getByText('show'));
      });
      // Small delay to let React process
      await act(async () => {
        jest.advanceTimersByTime(10);
      });
    }

    const toasts = JSON.parse(screen.getByTestId('toasts').textContent);
    expect(toasts.length).toBe(5);
  });

  it('toast objects have id, type, and message', async () => {
    render(
      <ToastProvider>
        <TestConsumer />
      </ToastProvider>
    );

    await act(async () => {
      userEvent.click(screen.getByText('show'));
    });

    await waitFor(() => {
      const toasts = JSON.parse(screen.getByTestId('toasts').textContent);
      expect(toasts[0]).toHaveProperty('id');
      expect(toasts[0]).toHaveProperty('type');
      expect(toasts[0]).toHaveProperty('message');
    });
  });

  it('show returns the toast id', async () => {
    let returnedId;
    function IdConsumer() {
      const { show } = useToast();
      const handler = () => {
        returnedId = show('test');
      };
      return <button onClick={handler}>get id</button>;
    }

    render(
      <ToastProvider>
        <IdConsumer />
      </ToastProvider>
    );

    await act(async () => {
      userEvent.click(screen.getByText('get id'));
    });

    await waitFor(() => {
      expect(typeof returnedId).toBe('number');
    });
  });
});
