import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders label and placeholder correctly', () => {
    render(<TextInput label="Email" placeholder="Enter your email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });

  it('handles onChange events', () => {
    const handleChange = vi.fn();
    render(<TextInput placeholder="Type here" onChange={handleChange} />);
    const input = screen.getByPlaceholderText('Type here');
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('renders error message when error prop is provided', () => {
    render(<TextInput label="Email" error="Invalid email address" />);
    expect(screen.getByText('Invalid email address')).toBeInTheDocument();
  });

  it('renders helper text when helperText prop is provided', () => {
    render(<TextInput label="Password" helperText="Must be at least 8 characters" />);
    expect(screen.getByText('Must be at least 8 characters')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<TextInput placeholder="Disabled" disabled />);
    expect(screen.getByPlaceholderText('Disabled')).toBeDisabled();
  });
});
