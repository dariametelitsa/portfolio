import React from 'react';
import { SectionTitle } from "../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { ContactsList } from "../../../../components/contactsList/ContactsList";
import { Container } from "../../../../components/Container";
import { S } from "./Contacts_Styles";

export const Contacts: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle line={'127px'}>contacts</SectionTitle>
                <FlexWrapper wrap>
                    <S.Information>I’m interested in freelance opportunities. However, if you have other request or
                        question, don’t
                        hesitate to contact me</S.Information>
                    <ContactsList/>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};
