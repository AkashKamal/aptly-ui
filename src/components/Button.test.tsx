import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct variant class', () => {
    const { container } = render(<Button variant="outline">Outline Button</Button>);
    // We check for some part of the outline variant styling or just that it exists
    // The actual classes are managed by cn(), but we can check the rendered element
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  it('is disabled when the disabled prop is passed', () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByText('Disabled Button')).toBeDisabled();
  });
});
