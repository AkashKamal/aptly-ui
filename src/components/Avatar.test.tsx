import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders fallback when no src is provided', () => {
    render(<Avatar fallback="John Doe" />);
    expect(screen.getByText('JO')).toBeInTheDocument();
  });

  it('renders image when src is provided', () => {
    render(<Avatar src="avatar.jpg" fallback="JD" />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'avatar.jpg');
    expect(img).toHaveAttribute('alt', 'JD');
  });

  it('applies custom className', () => {
    render(<Avatar fallback="JD" className="custom-avatar" />);
    const avatar = screen.getByText('JD').parentElement;
    expect(avatar).toHaveClass('custom-avatar');
  });
});
