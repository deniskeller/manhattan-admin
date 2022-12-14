import { ComponentProps, CSSProperties, PropsWithChildren } from "react";
import tw from "twin.macro";

type TypographyProps = {
  color?: "primary" | "secondary";
  weight?: CSSProperties["fontWeight"];
} & ComponentProps<"div">;

export default function Typography({
  children,
  color,
  weight,
  ...props
}: PropsWithChildren<TypographyProps>) {
  return (
    <div css={[color === "secondary" && tw`text-secondary`]} {...props}>
      {children}
    </div>
  );
}
