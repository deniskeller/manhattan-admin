import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography } from "@ui/components";

export default {
  title: "UI/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

const TemplateTitle: ComponentStory<typeof Typography> = (args) => (
  <Typography.Title {...args} />
);

export const Title = TemplateTitle.bind({});
Title.args = {
  children: "Title",
};

const TemplateSubtitle: ComponentStory<typeof Typography> = (args) => (
  <Typography.Subtitle {...args} />
);

export const Subtitle = TemplateSubtitle.bind({});
Subtitle.args = {
  children: "Subitle",
};
