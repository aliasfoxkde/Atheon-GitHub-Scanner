import { render, screen } from '@testing-library/react';
import { Skeleton, SkeletonCard, SkeletonTable, SkeletonStat, SkeletonText } from './Skeleton';

describe('Skeleton components', () => {
  it('Skeleton renders a div with animate-pulse class', () => {
    render(<Skeleton />);
    // Skeleton itself doesn't have role="status", just a plain div with animate-pulse
    const el = document.querySelector('.animate-pulse');
    expect(el).toBeInTheDocument();
    expect(el.className).toContain('animate-pulse');
  });

  it('SkeletonCard renders with role status and contains animate-pulse elements', () => {
    render(<SkeletonCard />);
    const el = screen.getByRole('status');
    expect(el).toBeInTheDocument();
    // The container has role="status", but animate-pulse is on inner elements
    const hasPulse = el.querySelector('.animate-pulse') !== null || el.className.includes('animate-pulse');
    expect(hasPulse).toBe(true);
  });

  it('SkeletonStat renders with role status and contains animate-pulse elements', () => {
    render(<SkeletonStat />);
    const el = screen.getByRole('status');
    expect(el).toBeInTheDocument();
    // Check that at least one descendant has animate-pulse
    const pulseEl = el.querySelector('.animate-pulse');
    expect(pulseEl).toBeInTheDocument();
  });

  it('SkeletonText renders animate-pulse elements', () => {
    render(<SkeletonText />);
    // SkeletonText container doesn't have role="status", but lines inside do
    const pulses = document.querySelectorAll('.animate-pulse');
    expect(pulses.length).toBeGreaterThan(0);
  });

  it('SkeletonTable renders multiple rows', () => {
    render(<SkeletonTable rows={5} columns={3} />);
    const rows = screen.getAllByRole('row');
    // 1 header row + 5 body rows = 6
    expect(rows.length).toBe(6);
  });

  it('SkeletonTable header has correct number of columns', () => {
    render(<SkeletonTable rows={3} columns={4} />);
    const headers = screen.getAllByRole('columnheader');
    expect(headers.length).toBe(4);
  });

  it('SkeletonText renders multiple lines when lines prop > 1', () => {
    render(<SkeletonText lines={3} />);
    const pulses = document.querySelectorAll('.animate-pulse');
    // 3 lines rendered
    expect(pulses.length).toBe(3);
  });

  it('Skeleton exports all expected components', () => {
    expect(Skeleton).toBeDefined();
    expect(SkeletonCard).toBeDefined();
    expect(SkeletonTable).toBeDefined();
    expect(SkeletonStat).toBeDefined();
    expect(SkeletonText).toBeDefined();
  });
});