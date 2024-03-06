import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { ContactsList } from "../../../components/contactsList/ContactsList";
import dots from './../../../assets/images/decoration/Dots.svg';

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle line={'127px'}>contacts</SectionTitle>
            <FlexWrapper>
                <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t
                    hesitate to contact me</p>
                <ContactsList/>
            </FlexWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    position: relative;
    &:before {
        content: url(${dots});
        position: absolute;
        left: -51px;
        top: 94px;
    }
`
