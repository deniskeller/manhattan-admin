import { InputHTMLAttributes, PropsWithChildren } from "react";
import tw from "twin.macro";
import { Checkbox } from "./index";
import { CheckboxProps } from "./Checkbox";

type CheckboxCollapsedProps = CheckboxProps &
  InputHTMLAttributes<HTMLInputElement>;

export const CheckboxCollapsed = function ({
                                             children,
                                             ...props
                                           }: PropsWithChildren<CheckboxCollapsedProps>) {
  return (
    <div css={tw`flex flex-col gap-2`}>
      <Checkbox {...props} value={props.value} />
      {props.checked && children}
    </div>
  );
};
