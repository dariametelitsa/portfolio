import { mainTheme } from "../styles/Theme";
import styled from "styled-components";

const Menu = styled.nav`
    ul {
        display: flex;
        flex-direction: row;
        gap: 32px;
    }

    a {
        color: inherit;
        text-decoration: none;

        &::before {
            content: '#';
            color: ${mainTheme.colors.accent};
        }
    }
`

export const S = {
    Menu
}