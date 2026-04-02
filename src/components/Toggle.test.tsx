import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  it('renders correctly', () => {
    render(<Toggle>Toggle Me</Toggle>);
    expect(screen.getByText('Toggle Me')).toBeInTheDocument();
  });

  it('calls onPressedChange when clicked', () => {
    const handlePressedChange = vi.fn();
    render(<Toggle onPressedChange={handlePressedChange}>Toggle Me</Toggle>);
    fireEvent.click(screen.getByRole('button'));
    expect(handlePressedChange).toHaveBeenCalled();
  });
});
