import React from 'react';
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { mainTheme } from "../../../components/styles/Theme";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SocialMenu } from "../../../components/socialMenu/SocialMenu";
import dots from '../../../assets/images/decoration/Dots.svg';
import image from "../../../assets/images/main/photo_first.png";
import { GlitchFont, GlitchMovement, GlitchOpacity, GlitchPath} from "../../../components/styles/animations/Animations";
import { Quote } from "../../../components/quote/Quote";


export const AlternativeMain = () => {
    return (
        <StyledAlternativeMain>
            <Container>
                <AbsoluteWrap>
                    <Intro>
                        <Name>I'm Daria</Name>
                        <Title><strong>web designer</strong> and <strong>front-end developer</strong></Title>
                        <Button as='a'>Contact me &#126;&#126;&gt;</Button>
                    </Intro>
                    <SocialMenu title={'Follow me'} links={socials}></SocialMenu>
                </AbsoluteWrap>
                <PhotoWrapper>
                    <img src={image} height={'600px'} alt="Photo of a web-designer." />
                    <TextAnimation data-text={'CREATIVE'}>CREATIVE</TextAnimation>
                </PhotoWrapper>

                <Status>Currently working on <span>Portfolio </span></Status>
                <FlexWrapper justify={'center'}>
                    <Quote quote='With great power comes great electricity bill' author='- Dr. Who'/>
                </FlexWrapper>

            </Container>
        </StyledAlternativeMain>
    );
};

const StyledAlternativeMain = styled.section`
    position: relative;
    overflow: hidden;
    
    & ${Container} {
        position: relative;
    }
`

const AbsoluteWrap = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    top: 360px;
`

const PhotoWrapper = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    z-index: -1;
    
    &::before {
        content: url(${dots});
        transform: scale(1.3);
        position: absolute;
        left: 25%;
        top: 50%;
        opacity: 40%;
        z-index: -1;
    }
    

    &::after {
        content: url(${dots});

        position: absolute;
        left: 70%;
        bottom: 100px;
        z-index: 1;
    }
    
    & img {
        height: 600px;
        border-bottom: 1px solid ${mainTheme.colors.accent};
    }
`

const Intro = styled.div`
    width: 45%;
`

const Name = styled.span`
`

const Title = styled.h1`
    margin: 20px 0 30px;
    color: ${mainTheme.colors.font};
    font-size: ${mainTheme.fontSize.headline};
    
    & strong {
        color: ${mainTheme.colors.accent};
    }
`

const TextAnimation = styled.span`
    position: absolute;
    text-transform: uppercase;
    font-size: 200px;
    font-weight: 700;
    z-index: -2;
    top: 50px;
    color: ${mainTheme.colors.grey.light};
    opacity: 0.1;
    text-align: center;
    left: 0;
    right: 0;
    
    animation: ${GlitchPath} 5s step-end infinite;
    
        &::before,
        &::after {
            content: attr(data-text);
            position: absolute;
            width: 110%;
            z-index: -1;
            animation: ${GlitchPath} 5s step-end infinite,
            ${GlitchOpacity} 5s step-end infinite,
            ${GlitchFont} 7s step-end infinite,
            ${GlitchMovement} 10s step-end infinite;
        }

        &::before {
            top: 10px;
            left: 15px;
            color: #e0287d;
        }

        &::after {
            top: 5px;
            left: -10px;
            color: #1bc7fb;
        }
`

const Status = styled.p `
    position: relative;
    margin: 5px auto 0;
    
    padding: 8px 34px;
    max-width: 402px;
    width: 100%;
    color: inherit;


    &::before {
        content: '';
        position: absolute;
        left: 8px;
        top: 11px;
        width: 16px;
        height: 16px;
        background-color: ${mainTheme.colors.accent};
    }

    span {
        color: ${mainTheme.colors.font};
    }
`

const socials = [
    {
        link: '#1',
        name: 'Telegram',
        icon: 'telegram',
    },
    {
        link: '#2',
        name: 'Email',
        icon: 'email',
    },
    {
        link: '#3',
        name: 'Linkedin',
        icon: 'linkedin',
    },
    {
        link: '#3',
        name: 'Location',
        icon: 'location',
    },
];