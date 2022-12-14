import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, Input, Space } from "@ui/components";
import tw from "twin.macro";

export default {
  title: "UI/Space",
  component: Space,
} as ComponentMeta<typeof Space>;

const Template: ComponentStory<typeof Space> = (args) => (
  <Space {...args} css={tw`w-64`} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <Input label="First Name" placeholder="First Name" required full />
      <Input label="Last Name" placeholder="Last Name" required full />
      <Button centered full>
        Submit
      </Button>
    </>
  ),
};
