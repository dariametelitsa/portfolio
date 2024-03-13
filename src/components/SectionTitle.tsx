import styled, {css} from "styled-components";
import {mainTheme} from "./styles/Theme";

type SectionTitlePropsType = {
    line?: string;
}
export const SectionTitle = styled.h2<SectionTitlePropsType> `
    position: relative;
    font-size: ${mainTheme.fontSize.headline};
    color: #fff;
    text-transform: lowercase;
    margin-bottom: 23px;
    
    &::before {
        content: '#';
        color: ${mainTheme.colors.accent};
    }
    
    ${props => props.line && css<SectionTitlePropsType>`
        &::after {
            content: '';
            position: absolute;
            top: 50%;
            height: 1px;
            width: ${props.line};
            background-color: ${mainTheme.colors.accent};
        }
    `}
`