import React from 'react';
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { ContactsList } from "../../components/contactsList/ContactsList";
import { Container } from "../../components/Container";
import styled from "styled-components";
import dots from './../../assets/images/decoration/Dots.svg';
import { mainTheme } from "../../components/styles/Theme";

export const Contacts = () => {
    return (
        <main>
            <PageTitle title={'contacts'} info={'Who am i?'}/>
            <Container>
                <FlexWrapper as={'section'}>
                    <Information>I’m interested in freelance opportunities. However, if you have other request or
                        question, don’t
                        hesitate to contact me</Information>
                    <ContactsList/>
                </FlexWrapper>
            </Container>
        </main>
    );
};

const StyledContacts = styled.section`
    position: relative;

    &::before {
        content: url(${dots});
        position: absolute;
        left: -50px;
        top: 150px;
    }

    &::after {
        content: '';
        position: absolute;
        right: -50px;
        top: 150px;
        width: 155px;
        height: 155px;
        border: 1px solid ${mainTheme.colors.grey.light};
    }
`

const Information = styled.p`
    width: 45%;
    line-height: 1.5;
`
