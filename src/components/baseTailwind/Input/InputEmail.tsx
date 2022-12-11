import { ComponentProps, forwardRef } from "react";
import Input from "./Input";
import { Mail } from "react-feather";

export const InputEmail = forwardRef<
  HTMLInputElement,
  ComponentProps<typeof Input>
  >((props,
     ref) => {
  //return <Input {...props} ref={ref} left={<Mail color={"#ffffff"} />} type="email" />;
  return <Input {...props} ref={ref}  type="email" />;
});

InputEmail.displayName = "Input.Email";
