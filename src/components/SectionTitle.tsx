import styled, {css} from "styled-components";
import {mainTheme} from "./styles/Theme";

type SectionTitlePropsType = {
    line?: string;
}
export const SectionTitle = styled.h2<SectionTitlePropsType> `
    position: relative;
    font-size: ${mainTheme.fontSize.headline};
    color: ${mainTheme.colors.font};
    font-weight: 500;
    text-transform: lowercase;
    margin-bottom: 42px;
    
    &::before {
        content: '#';
        letter-spacing: 2px;
        color: ${mainTheme.colors.accent};
    }
    
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
`