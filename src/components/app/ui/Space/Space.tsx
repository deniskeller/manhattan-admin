import styled from "@emotion/styled";
import { ComponentProps, PropsWithChildren } from "react";
import tw from "twin.macro";

type SpaceProps = {} & ComponentProps<typeof Spaced>;

const Spaced = styled.div(
  ({ direction = "column" }: { direction?: "row" | "column" }) => [
    tw`flex gap-4 w-auto`,
    direction === "row" && tw`flex-row`,
    direction === "column" && tw`flex-col`,
  ]
);
export const Space = function ({
  children,
  ...props
}: PropsWithChildren<SpaceProps>) {
  return (
    <Spaced {...props} as="div">
      {children}
    </Spaced>
  );
};
