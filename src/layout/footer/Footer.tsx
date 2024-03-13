import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";
import { mainTheme } from "../../components/styles/Theme";
import { IconLink } from "../../components/IconLink";
import { SocialMenu } from "../../components/socialMenu/SocialMenu";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper>
                    <Info>
                        <Logo/>
                        <a href={'mailto:elias@elias-dev.ml'}>elias@elias-dev.ml</a>
                        <p>Web designer and front-end developer</p>
                    </Info>
                    <SocialMenu links={socials}></SocialMenu>
                </FlexWrapper>
                <Copyright>© Copyright 2022. Made by Elias</Copyright>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 32px 0;
    border-top: 1px solid ${mainTheme.colors.grey.light};
`

const Info = styled.div`
    & svg {
        margin-right: 24px;
    }

    a {
        font-weight: 400;
        color: ${mainTheme.colors.grey.light};
        vertical-align: top;
    }

    p {
        margin-top: 16px;
        color: ${mainTheme.colors.font};
    }
`

const Copyright = styled.small`
    display: block;
    margin-top: 48px;
    text-align: center;
`

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