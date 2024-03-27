import React from 'react';
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { SocialMenu } from "../../components/socialMenu/SocialMenu";
import { S } from "./FooterStyles";

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper wrap>
                    <S.Info>
                        <Logo/>
                        <a href={'mailto:elias@elias-dev.ml'}>elias@elias-dev.ml</a>
                        <p>Web designer and front-end developer</p>
                    </S.Info>
                    <SocialMenu links={socials} title={'Media'}></SocialMenu>
                </FlexWrapper>
                <S.Copyright>© Copyright 2022. Made by Elias</S.Copyright>
            </Container>
        </S.Footer>
    );
};

const socials = [
    {
        link: '#1',
        name: 'GitHub',
        icon: 'github',
    },
    {
        link: '#2',
        name: 'Figma',
        icon: 'figma',
    },
    {
        link: '#3',
        name: 'Discord',
        icon: 'discord',
    },
];