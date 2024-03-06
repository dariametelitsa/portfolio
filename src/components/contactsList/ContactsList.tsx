import React from 'react';
import styled from "styled-components";
import { mainTheme } from "../styles/Theme";

export const ContactsList = () => {
    return (
        <StyledContactsList>
            <b>Message me here</b>
            <ul role={'group'}>
                <li><a href={'tel:88005558628'} ></a>88005558628</li>
                <li><a href={'mailto:elias@elias.me'} ></a>elias@elias.me</li>
            </ul>
        </StyledContactsList>
    );
};

const StyledContactsList = styled.address`
    padding: 16px;
    border: 1px solid ${mainTheme.colors.grey.light};
    
    li {
        padding-left: 27px;
        list-style-type: none;
    }
`