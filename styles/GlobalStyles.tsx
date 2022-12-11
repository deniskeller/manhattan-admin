import React from "react";
import { Global } from "@emotion/react";
import tw, { css, GlobalStyles as BaseStyles } from "twin.macro";

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global
      styles={css`
        button,
        [type="button"],
        [type="reset"],
        [type="submit"] {
          background: unset;
        }
      `}
    />
  </>
);

export default GlobalStyles;
