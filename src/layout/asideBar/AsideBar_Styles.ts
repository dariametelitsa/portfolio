import { mainTheme } from "../../components/styles/Theme";
import styled from "styled-components";

const AsideBar = styled.aside`
    @media ${mainTheme.media.decoration} {
        position: fixed;
        top: 0;
        z-index: 1;

        &::before {
            content: '';
            position: absolute;
            width: 1px;
            height: 190px;
            background-color: ${mainTheme.colors.grey.light};
            right: 50%;
        }
    }
`

const ListItem = styled.li`
    display: none;
    
    @media ${mainTheme.media.decoration} {
        display: block;
        position: relative;
        top: 190px;
        margin: 8px 17px 0 17px;
    }
`

export const S = {
    AsideBar,
    ListItem
}