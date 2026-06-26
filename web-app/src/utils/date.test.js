import { formatDate } from './date';

describe('date.js', () => {
  describe('formatDate', () => {
    it('returns em dash for null', () => {
      expect(formatDate(null)).toBe('—');
    });

    it('returns em dash for undefined', () => {
      expect(formatDate(undefined)).toBe('—');
    });

    it('returns em dash for empty string', () => {
      expect(formatDate('')).toBe('—');
    });

    it('returns em dash for falsy non-string values', () => {
      expect(formatDate(0)).toBe('—');
    });

    it('formats a valid date string and returns a string', () => {
      const result = formatDate('2024-06-15T10:30:00Z');
      expect(typeof result).toBe('string');
      expect(result).toContain('2024');
    });

    it('returns the original string for invalid date', () => {
      expect(formatDate('not-a-date')).toBe('not-a-date');
    });

    it('handles ISO 8601 format and returns a string with the year', () => {
      // Use noon UTC to avoid timezone rollover to previous day
      const result = formatDate('2024-06-15T12:00:00.000Z');
      expect(typeof result).toBe('string');
      expect(result).toContain('2024');
    });
  });
});
