import { ComponentProps } from "react";
import { ArrowLeft } from "react-feather";
import tw from "twin.macro";
import { Button } from "./Button";

export const ButtonBack = function ({
  ...props
}: Pick<ComponentProps<typeof Button>, keyof ComponentProps<"button">>) {
  return (
    <Button
      variant={"secondary"}
      css={[
        tw`border-transparent shadow-none stroke-blue-light-600`,
        tw`hover:bg-transparent hover:[&>*]:stroke-blue-light-700 hover:border hover:border-blue-light-600`,
      ]}
      {...props}
    >
      <ArrowLeft stroke={"inherit"} />
    </Button>
  );
};

ButtonBack.displayName = "Button.Back";
