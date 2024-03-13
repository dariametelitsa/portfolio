import styled from "styled-components";
import { mainTheme } from "./styles/Theme";

export const IconLink = styled.a `
    display: inline-block;
    color: ${mainTheme.colors.grey.light};
    transition: 0.2s ease-out;
    
    &:hover {
        color: ${mainTheme.colors.accent};
    }
    
    &:active {
        opacity: 0.7;
    }
`