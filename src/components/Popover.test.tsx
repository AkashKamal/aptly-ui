import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Popover, PopoverTrigger, PopoverContent } from './Popover';

describe('Popover', () => {
  it('opens and closes popover correctly', async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>
          <p>Popover Content</p>
        </PopoverContent>
      </Popover>
    );

    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();
    
    await user.click(screen.getByText('Open Popover'));
    
    expect(screen.getByText('Popover Content')).toBeInTheDocument();
    
    // Clicking outside or pressing escape should close it. 
    // Escape is easier to simulate in jsdom
    await user.keyboard('{Escape}');
    
    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();
  });
});
