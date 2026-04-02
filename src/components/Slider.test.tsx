import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Slider } from './Slider';

describe('Slider', () => {
  it('renders correctly with initial value', () => {
    render(<Slider defaultValue={50} />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveValue('50');
  });

  it('handles onChange events', () => {
    const handleChange = vi.fn();
    render(<Slider defaultValue={30} onChange={handleChange} />);
    const slider = screen.getByRole('slider');
    fireEvent.change(slider, { target: { value: '70' } });
    expect(handleChange).toHaveBeenCalled();
    expect(slider).toHaveValue('70');
  });

  it('respects min and max props', () => {
    render(<Slider min={10} max={50} defaultValue={20} />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('min', '10');
    expect(slider).toHaveAttribute('max', '50');
  });

  it('is disabled when disabled prop is true', () => {
    render(<Slider disabled />);
    expect(screen.getByRole('slider')).toBeDisabled();
  });
});
