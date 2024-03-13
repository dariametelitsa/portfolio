import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";
import { mainTheme } from "../../components/styles/Theme";
import { IconLink } from "../../components/IconLink";

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
                    <Media>
                        <Title>Media</Title>
                        <ul>
                            <li><IconLink href="#1" aria-label={'GitHub'}><Icon iconId={'github'}/></IconLink></li>
                            <li><IconLink href="#2" aria-label={'Figma'}><Icon iconId={'figma'}/></IconLink></li>
                            <li><IconLink href="#3" aria-label={'Discord'}><Icon iconId={'discord'}/></IconLink></li>
                        </ul>
                    </Media>
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

const Media = styled.div`
    ul {
        display: flex;
        gap: 8px;
    }
`

const Title = styled.h4`
    margin-bottom: 12px;
    font-weight: 500;
    font-size: ${mainTheme.fontSize.title};
    color: ${mainTheme.colors.font};
`

const Copyright = styled.small`
    display: block;
    margin-top: 48px;
    text-align: center;
`