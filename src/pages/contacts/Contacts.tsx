import React from 'react';
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { ContactsList } from "../../components/contactsList/ContactsList";
import { Container } from "../../components/Container";
import styled from "styled-components";
import { mainTheme } from "../../components/styles/Theme";

export const Contacts = () => {
    return (
        <main>
            <PageTitle title={'contacts'} info={'Who am i?'}/>
            <Container>
                <FlexWrapper as={'section'} wrap>
                    <Information>I’m interested in freelance opportunities. However, if you have other request or
                        question, don’t hesitate to contact me</Information>
                    <ContactsList/>
                </FlexWrapper>
            </Container>
        </main>
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
