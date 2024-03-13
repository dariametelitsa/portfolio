import React from 'react';
import styled from "styled-components";
import { Button } from "../../../components/Button";
import { mainTheme } from "../../../components/styles/Theme";
import { Container } from "../../../components/Container";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SocialMenu } from "../../../components/socialMenu/SocialMenu";
import { Photo } from "../../../components/Photo";
import image from "../../../assets/images/main/photo_first1.png";

export const AlternativeMain = () => {
    return (
        <StyledAlternativeMain>
            <Container>
                <FlexWrapper alighI={'flex-end'} justify={'space-between'}>
                    <Intro>
                        <Name>I'm Daria</Name>
                        <Title><strong>web designer</strong> and <strong>front-end developer</strong></Title>
                        <Button as='a'>Contact me &#126;&#126;&gt;</Button>
                    </Intro>
                    <SocialMenu title={'Follow me'} links={socials}></SocialMenu>
                </FlexWrapper>
                <Wrap><Photo src={image} width={'45%'}  alt='Photo of a web-designer.'/></Wrap>

            </Container>
        </StyledAlternativeMain>
    );
};

const StyledAlternativeMain = styled.section`
    position: relative;
    overflow: hidden;

    //background-image: radial-gradient(farthest-side at 10% 0, rgba(0, 299, 299, 0.5) 0%, transparent 30%, transparent 100%), radial-gradient(circle farthest-side at 0 50px, rgba(233, 97, 255, 0.4) 0%, transparent 50%, transparent 100%);
    
    ${FlexWrapper} {
        position: relative;
        height: 560px;
        
        &::before {
            content: 'CREATIVE';
            position: absolute;
            font-size: 200px;
            font-weight: 700;
            z-index: -1;
            top: 50px;
            color: ${mainTheme.colors.grey.light};
            opacity: 0.1;
            text-align: center;
            left: 0;
            right: 0;
        }
    }
`

const Wrap = styled.div`
    width: 100%;
    position: absolute;
    top: 50px;
    transform: translateX(20%);
    z-index: -1;
    
    &::before {
        content: '';
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(transparent 0%, transparent 80%, ${mainTheme.colors.primary} 100%);
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

const Social = styled.div`
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