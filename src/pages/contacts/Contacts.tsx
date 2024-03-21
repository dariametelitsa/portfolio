import React from 'react';
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { Container } from "../../components/Container";
import { ContactInformation } from "./ContactInformation";

export const Contacts = () => {
    return (
        <main>
            <section>
                <PageTitle title={'contacts'} info={'Who am i?'}/>
                <Container>
                    <ContactInformation/>
                </Container>
            </section>
        </main>
    );
};


