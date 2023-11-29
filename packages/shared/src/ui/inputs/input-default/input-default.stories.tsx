import type { Meta, StoryObj } from "@storybook/react";
import type { FC} from "react";
import { useState } from "react";

import SvgSearch20 from "../../icon/search20";
import { InputDefault } from "./input-default";

const iconArgs = {
  control: { type: "radio" },
  options: ["None", "Loop"],
  mapping: {
    None: null,
    Loop: <SvgSearch20 />,
  },
};

const meta = {
  title: "UI/Inputs/Default",
  component: InputDefault,
  parameters: {
    layout: "padded",
  },

  tags: ["autodocs"],

  argTypes: {
    contentLeft: iconArgs,
    contentRight: iconArgs,
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof InputDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: FC<Story["args"]> = (args) => {
  const [value, setValue] = useState(args?.value);

  return (
    <InputDefault
      {...args}
      onChange={(e) => { setValue(e.target.value); }}
      placeholder="Placeholder"
      value={value}
    />
  );
};

export const Default: Story = {
  args: {
    disabled: false,
    errorMessage: "",
  },
  render: (args) => <Template {...args} />,
};
