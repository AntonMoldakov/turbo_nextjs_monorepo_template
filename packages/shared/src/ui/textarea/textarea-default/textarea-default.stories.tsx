import type { Meta, StoryObj } from '@storybook/react';
import type { FC} from 'react';
import { useState } from 'react';

import { TextareaDefault } from './textarea-default';

const meta = {
  title: 'UI/TextArea/Default',
  component: TextareaDefault,
  parameters: {
    layout: 'padded',
  },

  tags: ['autodocs'],

  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof TextareaDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: FC<Story['args']> = (args) => {
  const [value, setValue] = useState(args?.value);

  return (
    <TextareaDefault
      {...args}
      onChange={(e) => { setValue(e.target.value); }}
      placeholder="Enter data about chronic disease"
      value={value}
    />
  );
};

export const Default: Story = {
  args: {
    disabled: false,
    errorMessage: '',
  },
  render: (args) => <Template {...args} />,
};
