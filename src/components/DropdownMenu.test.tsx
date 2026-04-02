import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator 
} from './DropdownMenu';

describe('DropdownMenu', () => {
  it('opens dropdown and handles item clicks', async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onSelect={handleSelect}>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    expect(screen.queryByText('Account')).not.toBeInTheDocument();
    
    await user.click(screen.getByText('Open Menu'));
    
    expect(screen.getByText('Account')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    
    await user.click(screen.getByText('Profile'));
    
    expect(handleSelect).toHaveBeenCalled();
    // Dropdown usually closes on selection
    expect(screen.queryByText('Account')).not.toBeInTheDocument();
  });
});
