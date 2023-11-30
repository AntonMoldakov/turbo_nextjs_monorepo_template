import type { Meta, StoryObj } from '@storybook/react';

import SvgArrow24 from '../../icon/arrow24';
import  {TextButton}  from './text-button';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/Buttons/Default',
  component: TextButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
   children: {type: 'string'}

  },
} satisfies Meta<typeof TextButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const TextButtonDefault: Story = {
  args: {
    variant: 'textbutton',
    size: 'large',
    text: 'Read more',
    rightIcon: '',
    leftIcon: '',
    disabled: false,
    isLoading: false,
    isFullWidth: false,
    enabledDefaultIconColor: true,
  },

  
};

export const TextIconButton: Story = {
  args: {
    ...TextButtonDefault.args,
    variant: 'texticonbutton',
    leftIcon: <SvgArrow24/>,
  },
};
export const TextWhiteButton: Story = {
  args: {
    ...TextButtonDefault.args,
    variant: 'textwhitebutton',
  },
};
