import { ComponentProps, HTMLAttributes, PropsWithChildren } from "react";
import tw, { styled } from "twin.macro";

type SpaceProps = {
  direction?: "row" | "column";
} & HTMLAttributes<HTMLDivElement>;

const Spaced = styled.div(({ direction = "column" }: SpaceProps) => [
  tw`flex gap-4 w-full`,
  direction === "row" && tw`flex-row`,
  direction === "column" && tw`flex-col`,
]);
export const Space = function ({
                                 children,
                                 ...props
                               }: PropsWithChildren<SpaceProps>) {
  return <Spaced {...props}>{children}</Spaced>;
};
