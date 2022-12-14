import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MessageCircle } from "react-feather";
import { screen, userEvent } from "@storybook/testing-library";
import { Select } from "@ui/components";

export default {
  title: "UI/Select",
  component: Select,
  argTypes: {
    required: { control: "boolean" },
  },
  args: {
    options: [
      {
        value: "1",
        label: "Option 1",
      },
      {
        value: "2",
        label: "Option 2",
      },
    ],
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [value, setValue] = React.useState<string>("");

  return (
    <Select
      {...args}
      value={value}
      onChange={(value: unknown) => {
        if (typeof value === "string") setValue(value);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Placeholder",
};

export const Opened = Template.bind({});
Opened.args = {
  placeholder: "Placeholder",
  listboxOpen: true,
};
