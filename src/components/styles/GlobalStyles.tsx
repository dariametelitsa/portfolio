import { createGlobalStyle } from "styled-components";
import { mainTheme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    footer {
        margin-top: auto;
    }

    body {
        margin: 0;

        font-weight: 400;
        font-size: ${mainTheme.fontSize.main};
        font-family: "Fira Code", monospace;
        font-optical-sizing: auto;
        line-height: 1.2;

        color: ${mainTheme.colors.grey.light};
        background-color: ${mainTheme.colors.primary};
    }


    a {
        color: ${mainTheme.colors.font};
        font-weight: 500;
        text-decoration: unset;
        cursor: pointer;
    }

    button {
        font: inherit;
        font-weight: 500;
        color: ${mainTheme.colors.font};
        cursor: pointer;
    }

    ul {
        list-style-type: none;
    }

    section {
        padding: 56px 0;
    }

    a:focus-visible,
    button:focus-visible,
    select:focus-visible {
        outline: 2px solid ${mainTheme.colors.font};
        box-shadow: 0 0 0 5px transparent, 0 0 0 5px ${mainTheme.colors.accent};
    }
`
