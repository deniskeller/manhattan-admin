import TypographyTitle from "./typography-title";
import TypographySubtitle from "./typography-subtitle";
import Typography from "./typography";

const ComposedTypography = Object.assign(Typography, {
  Title: TypographyTitle,
  Subtitle: TypographySubtitle,
});

export { ComposedTypography as Typography };
