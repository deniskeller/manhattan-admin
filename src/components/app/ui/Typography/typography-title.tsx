import { ComponentProps, PropsWithChildren } from "react";
import tw, { styled } from "twin.macro";
import Typography from "./typography";

type TypographyTitleProps = {} & ComponentProps<typeof Typography>;

export default function TypographyTitle({
  children,
  ...props
}: PropsWithChildren<TypographyTitleProps>) {
  const Title = styled.div`
    ${tw`text-2xl font-semibold`}
  `;

  return (
    <Typography {...props}>
      <Title>{children}</Title>
    </Typography>
  );
}
