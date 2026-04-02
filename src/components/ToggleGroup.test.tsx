import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ToggleGroup, ToggleGroupItem } from './ToggleGroup';

describe('ToggleGroup', () => {
  it('renders children correctly', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="center">Center</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>
    );
    expect(screen.getByText('Left')).toBeInTheDocument();
    expect(screen.getByText('Center')).toBeInTheDocument();
    expect(screen.getByText('Right')).toBeInTheDocument();
  });
});
