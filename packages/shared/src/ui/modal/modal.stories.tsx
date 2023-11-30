import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef, useState } from 'react';

import { Modal } from './modal';

const meta = {
  title: 'ui/modals/modal-default',
  component: Modal,
  argTypes: {
    isOpen: { type: 'boolean' },
    title: { type: 'string' },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Component: Story = {
  name: 'modal',
  args: {
    title: 'title',
    isOpen: true,
    children: undefined,
  },
  render: function Render(args) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const open = () => {
      setIsOpen(true);
    };
    const close = () => {
      setIsOpen(false);
    };

    return (
      <div ref={containerRef}>
        <button onClick={open} type="button">
          OPEN MODAL
        </button>
        <Modal {...args} close={close} container={containerRef.current} isOpen={isOpen}>
          <div> Ты в модалке</div>
          <div> Ты в модалке</div>
          <div> Ты в модалке</div>
          <div> Ты в модалке</div>
        </Modal>
      </div>
    );
  },
};
