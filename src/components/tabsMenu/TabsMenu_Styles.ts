import styled, { css } from "styled-components";
import { mainTheme } from "../styles/Theme";

const TabsMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: 20px;
    padding: 20px 0 40px;
`

const TabsItem = styled.li`
`

const Link = styled.button <{ active?: boolean }>`
    display: block;
    box-sizing: border-box;
    padding: 5px;
    border: 1px solid transparent;
    
    &:hover {
        border-bottom: 1px solid ${mainTheme.colors.accent};
    }

    ${props => props.active && css<{ active?: boolean }>`
        border-bottom: 1px solid ${mainTheme.colors.accent};
    `}
`

export const S = {
    TabsMenu,
    TabsItem,
    Link
}