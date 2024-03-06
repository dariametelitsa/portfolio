import React from 'react';
import styled from "styled-components";
import { mainTheme } from "../styles/Theme";

export const ContactsList = () => {
    return (
        <StyledContactsList>
            <b>Message me here</b>
            <ul role={'group'}>
                <li>!Elias#3519</li>
                <li>elias@elias.me</li>
            </ul>
        </StyledContactsList>
    );
};

const StyledContactsList = styled.div`
    padding: 16px;
    border: 1px solid ${mainTheme.colors.grey.light};
    
    li {
        padding-left: 27px;
        list-style-type: none;
    }
`