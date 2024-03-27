import styled, { css } from "styled-components";
import { mainTheme } from "./styles/Theme";
import { font } from "./styles/common";
import { SectionTitleProps } from "../assets/Types";

export const SectionTitle = styled.h2<SectionTitleProps>`
    position: relative;
    ${font({weight: 500, color: mainTheme.colors.font, Fmin: 26, Fmax: 32})}
    text-transform: lowercase;
    margin-bottom: 42px;


    &::before {
        content: '#';
        letter-spacing: 2px;
        color: ${mainTheme.colors.accent};
    }


    @media ${mainTheme.media.decoration} {
        ${props => props.line && css<SectionTitleProps>`
            &::after {
                content: '';
                position: absolute;
                top: 50%;
                margin-left: 16px;
                height: 1px;
                width: ${props.line};
                background-color: ${mainTheme.colors.accent};
            }
        `}
    }
`