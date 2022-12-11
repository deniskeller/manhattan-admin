import { ComponentProps } from "react";
import { ArrowLeft } from "react-feather";
import tw from "twin.macro";
import { Button } from "./Button";

export const ButtonBack = function ({
                                      ...props
                                    }: Pick<ComponentProps<typeof Button>, keyof ComponentProps<"button">>) {
  return (
    <Button
      variant={"transparent"}
      css={[tw`[&>*]:stroke-blue-light-700 hover:[&>*]:border-blue-light-600`]}
      {...props}
    >
      <ArrowLeft stroke={"inherit"} />
    </Button>
  );
};

ButtonBack.displayName = "Button.Back";
