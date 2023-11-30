import type { Meta, StoryObj } from '@storybook/react';

import SvgFrame1321315492 from '../../icon/frame1321315492';
import SvgSearch20 from '../../icon/search20';
import  {IconButton}  from './icon-button-default';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'UI/Buttons/Default',
  component: IconButton,
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
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const IconButtonDefault: Story = {
  args: {
    variant: 'iconbutton',
    size: 'large',
    IconNode: <SvgSearch20/>,
    rightIcon: '',
    leftIcon: '',
    disabled: false,
    isLoading: false,
    isFullWidth: false,
    enabledDefaultIconColor: true,
  },

  
};

export const IconButtonWhite: Story = {
  args: {
    ...IconButtonDefault.args,
    IconNode: <SvgFrame1321315492/>,
    variant: 'iconbuttonwhite',
  },
};

