/**
 * Unit tests for Submit page
 */
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

// Mock realScannerData
jest.mock('../services/realScannerData', () => ({
  loadRealScannerData: jest.fn(() => Promise.resolve(null)),
}));

// Mock Toast context
jest.mock('../contexts/ToastContext', () => ({
  useToast: () => ({
    show: jest.fn(),
    success: jest.fn(),
    error: jest.fn(),
    info: jest.fn(),
  }),
}));

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn().mockReturnValue('[]'),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = localStorageMock;

import Submit from './Submit';

describe('Submit', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the submit page heading', async () => {
    render(
      <MemoryRouter>
        <Submit />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: /submit code for analysis/i })
      ).toBeInTheDocument();
    });
  });

  it('accepts input in repository field', async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Submit />
      </MemoryRouter>
    );
    await waitFor(() => screen.getByLabelText(/repository/i));
    const input = screen.getByLabelText(/repository/i);
    await user.type(input, 'owner/repo');
    expect(input.value).toBe('owner/repo');
  });
});
