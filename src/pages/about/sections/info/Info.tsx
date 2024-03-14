import React from 'react';
import { Photo } from "../../../../components/Photo";
import image from "../../../../assets/images/about/photo_about.png";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import styled from "styled-components";
import { Container } from "../../../../components/Container";
import { mainTheme } from "../../../../components/styles/Theme";

export const Info = () => {
    return (
        <section>
            <Container>
                <FlexWrapper>
                    <Text>
                        <p>Hello, i’m Elias!</p>
                        <p>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                            scratch and raise them into modern user-friendly web experiences.</p>
                        <p>Transforming my creativity and knowledge intoZ a websites has been my passion for over a year. I
                            have been helping various clients to establish their presence online. I always strive to learn about
                            the newest technologies and frameworks.</p>
                    </Text>
                    <StyledPhoto>
                        <Photo src={image} width={'339px'} height={'507px'}/>
                    </StyledPhoto>
                </FlexWrapper>
            </Container>
        </section>
    );
};


const StyledPhoto = styled.div `
    position: relative;
    transform: translateY(-13%);
        
    img {
        position: relative;
        border-bottom: 1px solid ${mainTheme.colors.accent};
    }
`

const Text = styled.div`
    width: 45%;
    p {
        padding-bottom: 27px;
        line-height: 1.5;
    }
`