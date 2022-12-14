import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox } from "@ui/components";

export default {
  title: "UI/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  placeholder: "Placeholder",
};

export const Checked = Template.bind({});
Checked.args = {
  label: "Label",
  placeholder: "Placeholder",
  checked: true,
};

export const Tooltip = Template.bind({});
Tooltip.args = {
  label: "Label",
  placeholder: "Placeholder",
  tooltip: "Tooltip",
};

export const Hovered = Template.bind({});
Hovered.args = {
  label: "Label",
  placeholder: "Placeholder",
  tooltip: "Tooltip",
  tooltipProps: {
    open: true,
  },
};
