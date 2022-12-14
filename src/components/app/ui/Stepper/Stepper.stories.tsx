import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Stepper } from "@ui/components";
import tw from "twin.macro";

export default {
  title: "UI/Stepper",
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
  <div css={tw`px-8 py-14`}>
    <Stepper {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  activeStep: 0,
  steps: [
    {
      title: "Step 1",
      completed: false,
    },
    {
      title: "Step 1",
      completed: false,
    },
  ],
};
