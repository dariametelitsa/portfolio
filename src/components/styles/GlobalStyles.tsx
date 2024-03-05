import { createGlobalStyle } from "styled-components";
import { mainTheme } from "./Theme";

export const GlobalStyles = createGlobalStyle `
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-weight: 400;
    font-size: ${mainTheme.fontSize.main};
    line-height: 21px;
    color: ${mainTheme.colors.grey.light};
      background-color: ${mainTheme.colors.primary};
  }
`
