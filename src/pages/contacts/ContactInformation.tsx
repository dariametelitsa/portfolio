import React from 'react';
import { ContactsList } from "../../components/contactsList/ContactsList";
import { FlexWrapper } from "../../components/FlexWrapper";
import styled from "styled-components";
import { mainTheme } from "../../components/styles/Theme";

export const ContactInformation = () => {
    return (
        <FlexWrapper wrap>
            <Information>I’m interested in freelance opportunities. However, if you have other request or
                question, don’t hesitate to contact me!</Information>
            <ContactsList/>
        </FlexWrapper>
    );
};

const Information = styled.p`
    width: 45%;
    line-height: 1.5;

    @media ${mainTheme.media.tablet} {
        width: 100%;
        margin-bottom: 50px;
    }
`
