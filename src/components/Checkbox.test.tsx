import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders label correctly', () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('toggles when clicked', () => {
    const handleChange = vi.fn();
    render(<Checkbox label="Check me" onChange={handleChange} />);
    const checkbox = screen.getByLabelText('Check me');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
    expect(checkbox).toBeChecked();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Checkbox label="Disabled" disabled />);
    expect(screen.getByLabelText('Disabled')).toBeDisabled();
  });

  it('starts checked if defaultChecked is true', () => {
    render(<Checkbox label="Checked" defaultChecked />);
    expect(screen.getByLabelText('Checked')).toBeChecked();
  });
});
