import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Modal, ModalTrigger, ModalContent, ModalHeader, ModalTitle, ModalDescription, ModalFooter } from './Modal';

describe('Modal', () => {
  it('renders trigger and opens content when clicked', () => {
    render(
      <Modal>
        <ModalTrigger>Open Modal</ModalTrigger>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>Test Title</ModalTitle>
            <ModalDescription>Test Description</ModalDescription>
          </ModalHeader>
          <div>Modal Body</div>
          <ModalFooter>Footer Content</ModalFooter>
        </ModalContent>
      </Modal>
    );

    expect(screen.queryByText('Test Title')).not.toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Open Modal'));
    
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('Modal Body')).toBeInTheDocument();
    expect(screen.getByText('Footer Content')).toBeInTheDocument();
  });

  it('can be controlled via open prop', () => {
    const onOpenChange = vi.fn();
    render(
      <Modal open={true} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalTitle>Controlled Modal</ModalTitle>
        </ModalContent>
      </Modal>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Controlled Modal')).toBeInTheDocument();
  });
});
