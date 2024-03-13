import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Button } from "../../../components/Button";
import { Photo } from "../../../components/Photo";
import  image from './../../../assets/images/about/photo_sec.png.png';
import dots from './../../../assets/images/decoration/Dots.svg';
import { mainTheme } from "../../../components/styles/Theme";
import { Container } from "../../../components/Container";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <SectionTitle line={'326px'}>about-me</SectionTitle>
                <FlexWrapper>
                    <Text>
                        <p>Hello, i’m Elias!</p>
                        <p>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                            scratch and raise them into modern user-friendly web experiences.</p>
                        <p>Transforming my creativity and knowledge intoZ a websites has been my passion for over a year. I
                            have been helping various clients to establish their presence online. I always strive to learn about
                            the newest technologies and frameworks.</p>
                        <Button> Read more &#126;&gt;</Button>
                    </Text>
                    <StyledPhoto>
                        <Photo src={image} width={'339px'} height={'507px'}/>
                    </StyledPhoto>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    position: relative;
    
    &::after{
        content: url(${dots});
        position: absolute;
        right: -23px;
        top: 320px;
        z-index: 1;
    }
`

const StyledPhoto = styled.div `
    position: relative;
    transform: translateY(-13%);
    
    &::before{
        content: url(${dots});
        position: absolute;
        left: -4px;
        top: 59px;
        z-index: 1;
    }

    &::after{
        content: url(${dots});
        position: absolute;
        right: 16px;
        top: 280px;
        z-index: 1;
    }
    
    img {
        position: relative;
        border-bottom: 1px solid ${mainTheme.colors.accent};
    }
`

const Text = styled.div`
    width: 50%;
    p {
        padding-bottom: 27px;
    }
`