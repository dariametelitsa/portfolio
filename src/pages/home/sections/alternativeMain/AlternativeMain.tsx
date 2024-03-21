import React from 'react';
import { Button } from "../../../../components/Button";
import { Container } from "../../../../components/Container";
import { SocialMenu } from "../../../../components/socialMenu/SocialMenu";
import image from "../../../../assets/images/main/photo_first.png";
import { Slider } from "../../../../components/quote/Quote";
import { S } from "./AlternativeMain_Styles";
import Typewriter from 'typewriter-effect';


export const AlternativeMain: React.FC = () => {
    return (
        <S.AlternativeMain>
            <Container>
                <S.PhotoWrapper>
                    <img src={image} height={'600px'} alt={"Web-designer."}/>
                    <S.TextAnimation data-text={'CREATIVE'}>CREATIVE</S.TextAnimation>
                </S.PhotoWrapper>

                <S.InfoWrap>
                    <S.Intro>
                        <S.Name>I'm Daria</S.Name>
                        {/*<S.Title><strong>web designer</strong> and <strong>front-end developer</strong></S.Title>*/}
                        <S.Title>
                            <p>web designer</p>
                            <Typewriter
                                options={{
                                    strings: ['front-end developer', 'web designer'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150
                                }}
                            />
                        </S.Title>
                        <Button as='a'>Contact me &#126;&#126;&gt;</Button>
                    </S.Intro>
                    <SocialMenu title={'Follow me'} links={socials}></SocialMenu>
                </S.InfoWrap>

                <S.Status>Currently working on <span>Portfolio </span></S.Status>
                <Slider/>
            </Container>
        </S.AlternativeMain>
    );
};

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
