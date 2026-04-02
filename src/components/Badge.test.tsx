import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders children correctly', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('applies the correct variant classes', () => {
    const { container } = render(<Badge variant="success">Success</Badge>);
    const badge = container.querySelector('span');
    expect(badge).toHaveClass('bg-emerald-50');
  });

  it('applies custom className', () => {
    render(<Badge className="custom-class">Badge</Badge>);
    expect(screen.getByText('Badge')).toHaveClass('custom-class');
  });
});
