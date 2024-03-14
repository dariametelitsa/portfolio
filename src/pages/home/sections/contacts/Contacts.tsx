import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { ContactsList } from "../../../../components/contactsList/ContactsList";
import dots from '../../../../assets/images/decoration/Dots.svg';
import { Container } from "../../../../components/Container";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle line={'127px'}>contacts</SectionTitle>
                <FlexWrapper>
                    <Information>I’m interested in freelance opportunities. However, if you have other request or question, don’t
                        hesitate to contact me</Information>
                    <ContactsList/>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    position: relative;
    &:before {
        content: url(${dots});
        position: absolute;
        left: -50px;
        top: 150px;
    }
`

const Information = styled.p `
    width: 45%;
    line-height: 1.5;
`
