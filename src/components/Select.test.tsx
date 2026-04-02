import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';

describe('Select', () => {
  it('renders correctly', () => {
    render(
      <Select>
        <SelectTrigger aria-label="Select color">
          <SelectValue placeholder="Select a color" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="red">Red</SelectItem>
          <SelectItem value="blue">Blue</SelectItem>
        </SelectContent>
      </Select>
    );
    expect(screen.getByLabelText('Select color')).toBeInTheDocument();
  });
});
