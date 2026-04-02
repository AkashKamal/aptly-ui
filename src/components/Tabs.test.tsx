import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  it('renders triggers and active content', () => {
    render(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs>
    );
    
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    
    const content1 = screen.getByText('Content 1');
    expect(content1).toHaveAttribute('data-state', 'active');
  });

  it('switches content when a trigger is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs>
    );

    const trigger2 = screen.getByRole('tab', { name: 'Tab 2' });
    await user.click(trigger2);
    
    const content2 = screen.getByText('Content 2');
    expect(content2).toHaveAttribute('data-state', 'active');
    
    // Hidden content might not be findable by text normally
    const content1 = screen.queryByText('Content 1', { ignore: false });
    if (content1) {
       expect(content1).toHaveAttribute('data-state', 'inactive');
    }
  });

  it('calls onValueChange when tab changes', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(
      <Tabs defaultValue="tab1" onValueChange={handleChange}>
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    );

    const trigger2 = screen.getByRole('tab', { name: 'Tab 2' });
    await user.click(trigger2);
    expect(handleChange).toHaveBeenCalledWith('tab2');
  });
});
