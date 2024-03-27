import React from 'react';
import { SectionTitle } from "../../../../components/SectionTitle";
import { Container } from "../../../../components/Container";
import { S } from "./ContactsStyles";
import { ContactInformation } from "../../../contacts/ContactInformation";

export const Contacts: React.FC = () => {
    return (
        <S.Contacts>
            <Container>
                <SectionTitle line={'127px'}>contacts</SectionTitle>
                <ContactInformation/>
            </Container>
        </S.Contacts>
    );
};
