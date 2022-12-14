import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Calendar } from "@ui/components";
import { withDesign } from "storybook-addon-designs";

export default {
  title: "UI/Calendar",
  component: Calendar,
  decorators: [withDesign],
  args: {
    value: new Date(),
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/WGTNhLuvklDriMmSYh2zTp/Teido-3?node-id=3775%3A68077",
    },
    date: new Date("2021-01-01"),
  },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => (
  <Calendar {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const HoveredDate = Template.bind({});
HoveredDate.args = {};
HoveredDate.parameters = {
  pseudo: {
    hover: [".react-calendar__month-view__days__day:nth-child(10)"],
  },
};
