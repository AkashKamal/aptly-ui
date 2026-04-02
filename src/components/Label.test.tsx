import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Label } from './Label';

describe('Label', () => {
  it('renders correctly', () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Label className="custom-class">Test Label</Label>);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
