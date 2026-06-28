/**
 * Unit tests for backgroundSync.js - localStorage queue operations
 *
 * Note: These tests use fake timers to control the spin-lock timing.
 * The backgroundSync module uses Date.now() in a spin-lock loop which
 * can behave unexpectedly in Jest's test environment without fake timers.
 */

import {
  addPendingSubmission,
  removePendingSubmission,
  getPendingSubmissions,
  hasPendingSubmissions,
} from './backgroundSync';

const PENDING_KEY = 'atheon_pending_submissions';

describe('backgroundSync.js', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('addPendingSubmission', () => {
    it('adds a submission and returns it with id and timestamp', () => {
      const entry = addPendingSubmission({
        target: 'https://github.com/test/repo',
        type: 'public',
      });

      expect(entry).toHaveProperty('id');
      expect(entry.id).toMatch(/^pending-\d+$/);
      expect(entry.target).toBe('https://github.com/test/repo');
      expect(entry.type).toBe('public');
      expect(entry.submittedAt).toBeDefined();
      expect(typeof entry.submittedAt).toBe('string');
    });

    it('stores the submission in localStorage', () => {
      addPendingSubmission({ target: 'https://github.com/test/repo', type: 'public' });

      const stored = JSON.parse(localStorage.getItem(PENDING_KEY) || '[]');
      expect(stored).toHaveLength(1);
      expect(stored[0].target).toBe('https://github.com/test/repo');
    });

    it('prepends new submissions (newest first)', () => {
      addPendingSubmission({ target: 'https://github.com/first/repo', type: 'public' });
      jest.advanceTimersByTime(15); // Allow spin-lock to release
      addPendingSubmission({ target: 'https://github.com/second/repo', type: 'public' });

      const stored = JSON.parse(localStorage.getItem(PENDING_KEY) || '[]');
      expect(stored).toHaveLength(2);
      expect(stored[0].target).toBe('https://github.com/second/repo');
      expect(stored[1].target).toBe('https://github.com/first/repo');
    });
  });

  describe('getPendingSubmissions', () => {
    it('returns empty array when no submissions exist', () => {
      expect(getPendingSubmissions()).toEqual([]);
    });

    it('returns all stored submissions', () => {
      const submissions = [
        {
          id: 'pending-1',
          target: 'https://github.com/repo1',
          type: 'public',
          submittedAt: '2024-01-01T00:00:00Z',
        },
        {
          id: 'pending-2',
          target: 'https://github.com/repo2',
          type: 'public',
          submittedAt: '2024-01-02T00:00:00Z',
        },
      ];
      localStorage.setItem(PENDING_KEY, JSON.stringify(submissions));

      const result = getPendingSubmissions();
      expect(result).toHaveLength(2);
      expect(result[0].target).toBe('https://github.com/repo1');
    });

    it('returns empty array on corrupted JSON', () => {
      localStorage.setItem(PENDING_KEY, 'not valid json');

      expect(getPendingSubmissions()).toEqual([]);
    });
  });

  describe('removePendingSubmission', () => {
    it('removes a submission by id', () => {
      const entry = addPendingSubmission({
        target: 'https://github.com/test/repo',
        type: 'public',
      });

      expect(getPendingSubmissions()).toHaveLength(1);

      removePendingSubmission(entry.id);

      expect(getPendingSubmissions()).toHaveLength(0);
    });

    it('is idempotent - removing non-existent id does not throw', () => {
      expect(() => removePendingSubmission('non-existent-id')).not.toThrow();
    });

    it('only removes the matching submission', () => {
      const entry1 = addPendingSubmission({ target: 'https://github.com/repo1', type: 'public' });
      jest.advanceTimersByTime(15); // Allow spin-lock to release
      addPendingSubmission({ target: 'https://github.com/repo2', type: 'public' });

      removePendingSubmission(entry1.id);

      const remaining = getPendingSubmissions();
      expect(remaining).toHaveLength(1);
      expect(remaining[0].target).toBe('https://github.com/repo2');
    });
  });

  describe('hasPendingSubmissions', () => {
    it('returns false when queue is empty', () => {
      expect(hasPendingSubmissions()).toBe(false);
    });

    it('returns true when submissions exist', () => {
      addPendingSubmission({ target: 'https://github.com/test/repo', type: 'public' });
      expect(hasPendingSubmissions()).toBe(true);
    });

    it('returns false after removing last submission', () => {
      const entry = addPendingSubmission({
        target: 'https://github.com/test/repo',
        type: 'public',
      });
      expect(hasPendingSubmissions()).toBe(true);

      removePendingSubmission(entry.id);
      expect(hasPendingSubmissions()).toBe(false);
    });
  });
});
