import { ComponentProps, forwardRef } from "react";
import Input from "./Input";
import { Mail } from "react-feather";

export const InputEmail = forwardRef<
  HTMLInputElement,
  ComponentProps<typeof Input>
>((props, ref) => {
  return <Input {...props} ref={ref} left={<Mail />} type="email" />;
});

InputEmail.displayName = "Input.Email";
