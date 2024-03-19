import styled, { css } from "styled-components";
import { mainTheme } from "./styles/Theme";
import { font } from "./styles/common";

type SectionTitlePropsType = {
    line?: string;
}
export const SectionTitle = styled.h2<SectionTitlePropsType> `
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
        ${props => props.line && css<SectionTitlePropsType>`
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