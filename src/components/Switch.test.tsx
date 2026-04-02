import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders label correctly', () => {
    render(<Switch label="Dark mode" />);
    expect(screen.getByText('Dark mode')).toBeInTheDocument();
  });

  it('toggles when clicked', async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();
    render(<Switch label="Toggle" onCheckedChange={handleCheckedChange} />);
    const input = screen.getByRole('switch');
    await user.click(input);
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });

  it('is disabled when disabled prop is true', () => {
    render(<Switch label="Disabled" disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('reflects checked state via aria-checked', () => {
    const { rerender } = render(<Switch checked={false} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    
    rerender(<Switch checked={true} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });
});
