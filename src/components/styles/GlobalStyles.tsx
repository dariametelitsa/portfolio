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
        margin: 0;
        font-weight: 400;
        font-size: ${mainTheme.fontSize.main};
        line-height: 1.2;
        color: ${mainTheme.colors.grey.light};
        background-color: ${mainTheme.colors.primary};
        overflow: hidden;
    }

    a {
        color: ${mainTheme.colors.grey.light};
        text-decoration: unset;
        cursor: pointer;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style-type: none;
    }

    section {
        padding: 56px 0;
    }

`
