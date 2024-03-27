import React from 'react';
import { SectionTitle } from "../../../../components/SectionTitle";
import { Container } from "../../../../components/Container";
import { S } from "./AboutStyles";
import { Info } from '../../../about/sections/info/Info';

export const About: React.FC = () => {
    return (
        <S.About>
            <Container>
                <SectionTitle line={'326px'}>about-me</SectionTitle>

                <Info/>

            </Container>
        </S.About>
    );
};
