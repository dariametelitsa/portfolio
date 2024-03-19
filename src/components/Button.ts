import styled from "styled-components";
import { mainTheme } from "./styles/Theme";

export const Button = styled.button`
    display: inline-block;
    padding: 8px 16px;
    font-weight: 500;
    font-size: ${mainTheme.fontSize.main};
    line-height: 21px;
    border: 1px solid ${mainTheme.colors.accent};
    background-color: transparent;
    
    transition: 0.2s ease-out;
    
    &:hover {
        background-color: ${mainTheme.colors.accent};
    }

    &:active {
        opacity: 0.8;
    }
`