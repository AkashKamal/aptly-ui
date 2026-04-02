import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProgressBar } from './ProgressBar';

describe('ProgressBar', () => {
  it('renders linear progress correctly', () => {
    const { container } = render(<ProgressBar value={50} />);
    const bar = container.querySelector('.bg-\\[var\\(--aptly-primary\\)\\]');
    expect(bar).toHaveStyle({ width: '50%' });
  });

  it('renders circular progress correctly', () => {
    const { container } = render(<ProgressBar value={75} variant="circular" />);
    const circle = container.querySelector('circle.text-\\[var\\(--aptly-primary\\)\\]');
    expect(circle).toBeInTheDocument();
    // strokeDashoffset = 251.2 - (75 / 100) * 251.2 = 62.8
    const offset = parseFloat(circle?.getAttribute('stroke-dashoffset') || '0');
    expect(offset).toBeCloseTo(62.8);
  });

  it('clamps value between 0 and 100', () => {
    const { container: containerMin, rerender } = render(<ProgressBar value={-10} />);
    let bar = containerMin.querySelector('.bg-\\[var\\(--aptly-primary\\)\\]');
    expect(bar).toHaveStyle({ width: '0%' });

    rerender(<ProgressBar value={150} />);
    bar = containerMin.querySelector('.bg-\\[var\\(--aptly-primary\\)\\]');
    expect(bar).toHaveStyle({ width: '100%' });
  });
});
