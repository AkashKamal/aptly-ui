import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Alert, AlertTitle, AlertDescription } from './Alert';

describe('Alert', () => {
  it('renders title and description correctly', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert Description</AlertDescription>
      </Alert>
    );

    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Alert Description')).toBeInTheDocument();
  });

  it('applies destructive variant class', () => {
    const { container } = render(<Alert variant="destructive">Destructive Alert</Alert>);
    // The variant class applied logic is complex with clsx, so we check for an expectation of color or border
    const alert = container.firstChild as HTMLElement;
    expect(alert.className).toContain('border-[var(--aptly-error)]');
  });
});
