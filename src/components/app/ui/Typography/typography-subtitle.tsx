import { ComponentProps, PropsWithChildren } from "react";
import tw, { styled } from "twin.macro";
import Typography from "./typography";

type TypographySubtitleProps = {} & ComponentProps<typeof Typography>;

export default function TypographySubtitle({
  children,
  ...props
}: PropsWithChildren<TypographySubtitleProps>) {
  const Subtitle = styled.div`
    ${tw`text-lg font-semibold`}
  `;

  return (
    <Typography {...props}>
      <Subtitle>{children}</Subtitle>
    </Typography>
  );
}
