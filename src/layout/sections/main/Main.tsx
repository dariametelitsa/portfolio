import React from 'react';
import styled from 'styled-components';
import { mainTheme } from '../../../components/styles/Theme';
import { Button } from '../../../components/Button';
import logo from '../../../assets/images/decoration/Logo1.svg';
import dots from '../../../assets/images/decoration/Dots.svg';

import image from './../../../assets/Image.png';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Quote } from '../../../components/quote/Quote';
import { Photo } from "../../../components/Photo";
import { Container } from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper alighI='center'>
                    <div>
                        <Title>Elias is a <strong>web designer</strong> and <strong>front-end developer</strong></Title>
                        <Description>He crafts responsive websites where technologies meet creativity</Description>
                        <Button as='a'>Contact me!!</Button>
                    </div>
                    <StyledPhoto>
                        <Photo src={image} width={'457px'} height={'386px'} alt='Photo of a web-designer.'/>
                        <p>Currently working on <span>Portfolio </span></p>
                    </StyledPhoto>
                </FlexWrapper>
                <Quote quote='With great power comes great electricity bill' author='- Dr. Who'/>
            </Container>

        </StyledMain>
    );
};

const StyledMain = styled.section`
    height: 100vh;
`

const Title = styled.h1`
    color: ${mainTheme.colors.font};
`

const Description = styled.p`

`

const StyledPhoto = styled.div`
    position: relative;

    &::before {
        content: url(${logo});
        position: absolute;
        left: -20px;
        top: 20%;
        z-index: -1;
    }

    &::after {
        content: url(${dots});
        position: absolute;
        right: 16px;
        bottom: 100px;
        z-index: 1;
    }

    p {
        position: relative;
        padding: 8px 34px;
        max-width: 402px;
        width: 100%;
        color: inherit;
        border: 1px solid ${mainTheme.colors.grey.light};

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
    }
`