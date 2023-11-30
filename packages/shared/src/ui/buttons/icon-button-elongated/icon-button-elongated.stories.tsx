



import type { Meta, StoryObj } from '@storybook/react';

import SvgArrowRight from '../../icon/arrow-right';
import  {IconButtonElongated}  from './icon-button-elongated';


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'UI/Buttons/Default',
    component: IconButtonElongated,
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
  } satisfies Meta<typeof IconButtonElongated>;
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;
  
  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
  export const IconnButtonElongated: Story = {
    args: {
      variant: 'iconbuttonelongated',
      size: 'large',
      IconNode: <SvgArrowRight/>,
      rightIcon: '',
      leftIcon: '',
      disabled: false,
      isLoading: false,
      isFullWidth: false,
      enabledDefaultIconColor: true,
    },
};



