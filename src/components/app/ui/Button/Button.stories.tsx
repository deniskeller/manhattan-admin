import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ArrowRight } from "react-feather";

import { Button } from "@ui/components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  children: "Button",
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
  variant: "secondary",
  children: "Button",
};

export const Ghost = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Ghost.args = {
  variant: "ghost",
  children: "Button",
};

export const Destructive = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Destructive.args = {
  variant: "destructive",
  children: "Button",
};

export const PrimaryWithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryWithIcon.args = {
  children: "Button",
  after: <ArrowRight />,
};

const Back: ComponentStory<typeof Button> = (args) => <Button.Back {...args} />;
export const BackPrimary = Back.bind({});
BackPrimary.args = {};
