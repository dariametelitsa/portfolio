import styled from "styled-components";
import { mainTheme } from "../styles/Theme";

const TabsMenu = styled.ul`
    display: flex;
    gap: 40px;
    padding: 20px 0 40px;
`

const TabsItem = styled.li`
`

const Link = styled.button`
    display: block;
    box-sizing: border-box;
    padding: 5px;
    border: 1px solid transparent;
    
    &:hover {
        border-bottom: 1px solid ${mainTheme.colors.accent};
    }
`

export const S = {
    TabsMenu,
    TabsItem,
    Link
}