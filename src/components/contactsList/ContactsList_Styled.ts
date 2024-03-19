import { mainTheme } from "../styles/Theme";
import styled from "styled-components";

const ContactsList = styled.address`
    padding: 16px;
    border: 1px solid ${mainTheme.colors.grey.light};
`

const Header = styled.b`
    font-style: normal;
    font-weight: 600;
    color: ${mainTheme.colors.font};
`

const Contacts = styled.ul`
    margin-top: 16px;
`

const Item = styled.li`
    padding-left: 38px;
    position: relative;

    & + & {
        margin-top: 17px;
    }
    
    svg {
        position: absolute;
        left: 0;
        transform: translateY(-20%);
    }

    a {
        color: ${mainTheme.colors.grey.light};
        font-style: normal;
        font-weight: 400;
    }
`

export const S = {
    ContactsList,
    Header,
    Contacts,
    Item
}