import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { TooltipRoot, TooltipTrigger, TooltipContent, TooltipProvider, Tooltip } from './Tooltip';

describe('Tooltip', () => {
  it('renders trigger and shows content on hover (composable API)', async () => {
    const user = userEvent.setup();
    render(
      <TooltipProvider delayDuration={0}>
        <TooltipRoot>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip info</TooltipContent>
        </TooltipRoot>
      </TooltipProvider>
    );

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    
    const trigger = screen.getByText('Hover me');
    await user.hover(trigger);
    
    const content = await screen.findByRole('tooltip');
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent('Tooltip info');
  });

  it('renders correctly with simple API', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip content="Simple info">
        <button>Hover simple</button>
      </Tooltip>
    );

    const trigger = screen.getByText('Hover simple');
    await user.hover(trigger);

    const content = await screen.findByRole('tooltip');
    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent('Simple info');
  });
});
