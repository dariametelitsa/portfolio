import { mainTheme } from "../styles/Theme";
import styled from "styled-components";

const Menu = styled.nav`

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