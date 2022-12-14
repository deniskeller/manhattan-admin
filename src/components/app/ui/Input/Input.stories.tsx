import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "@ui/components";
import { MessageCircle } from "react-feather";
import { screen, userEvent } from "@storybook/testing-library";

export default {
  title: "UI/Input",
  component: Input,
  argTypes: {
    required: { type: "boolean" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Label",
  placeholder: "Placeholder",
  required: true,
};
Primary.play = async () => {
  const input = screen.getByLabelText("Label");
  await userEvent.type(input, "Hello World", {
    delay: 100,
  });
};

export const Error = Template.bind({});
Error.args = {
  label: "Label",
  placeholder: "Placeholder",
  required: true,
  message: "Error",
  variant: "error",
};

export const Success = Template.bind({});
Success.args = {
  label: "Label",
  placeholder: "Placeholder",
  required: true,
  message: "Success",
  variant: "success",
};

export const Left = Template.bind({});
Left.args = {
  placeholder: "Placeholder",
  left: <MessageCircle />,
};

export const Right = Template.bind({});
Right.args = {
  placeholder: "Placeholder",
  right: <MessageCircle />,
};

const CalendarInput: ComponentStory<typeof Input.Calendar> = (args) => (
  <Input.Calendar {...args} />
);
export const Calendar = CalendarInput.bind({});
Calendar.args = {
  type: "date",
  placeholder: "Placeholder",
};

export const CalendarWithValue = Calendar.bind({});
CalendarWithValue.args = {
  type: "date",
  placeholder: "Placeholder",
  value: "2021-01-01",
};

const EmailInput: ComponentStory<typeof Input.Email> = (args) => (
  <Input.Email {...args} />
);
export const Email = EmailInput.bind({});
Email.args = {
  label: "Email",
};

const PhoneInput: ComponentStory<typeof Input.Phone> = (args) => {
  const [value, setValue] = React.useState(args.value);

  return (
    <Input.Phone
      {...args}
      value={value}
      onChange={(value) => {
        setValue(value);
      }}
    />
  );
};

export const Phone = PhoneInput.bind({});
Phone.args = {
  placeholder: "Phone",
};

export const PhoneWithValue = PhoneInput.bind({});
PhoneWithValue.args = {
  placeholder: "Phone",
  value: "+442087712924",
};
