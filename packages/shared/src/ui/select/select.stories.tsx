import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';

import { Select } from './select';

const meta = {
  title: 'UI/Select/Default',
  component: Select,
  parameters: {
    layout: 'padded',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: FC<Story['args']> = (args) => {
  return (
    <Select
      {...args}
      options={[
        { label: 'Text', value: 'Text' },
        { label: 'Text', value: 'Text' },
        { label: 'Text', value: 'Text' },
        { label: 'Text', value: 'Text' },
        { label: 'Text', value: 'Text' },
      ]}
      placeholder="Placeholder"
    />
  );
};

export const Default: Story = {
  args: { required: false, isSearchable: false },
  render: (args) => <Template {...args} />,
};
