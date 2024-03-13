import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Logo } from "../../components/logo/Logo";
import { Icon } from "../../components/icon/Icon";
import { Container } from "../../components/Container";

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
                        <h4>Media</h4>
                        <ul>
                            <li><a href="#1" aria-label={'GitHub'}><Icon iconId={'github'}/></a></li>
                            <li><a href="#2" aria-label={'Figma'}><Icon iconId={'figma'}/></a></li>
                            <li><a href="#3" aria-label={'Discord'}><Icon iconId={'discord'}/></a></li>
                        </ul>
                    </Media>
                </FlexWrapper>
                <small>© Copyright 2022. Made by Elias</small>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
`

const Info = styled.div`
`

const Media = styled.div`
    ul {
        display: flex;
        gap: 23px;
    }

    li {
        list-style-type: none;
    }
`