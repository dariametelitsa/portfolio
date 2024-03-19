import React from 'react';
import { SectionTitle } from "../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";
import { Photo } from "../../../../components/Photo";
import image from '../../../../assets/images/about/photo_about.png';
import { Container } from "../../../../components/Container";
import { S } from "./About_Styles";

export const About: React.FC = () => {
    return (
        <S.About>
            <Container>
                <SectionTitle line={'326px'}>about-me</SectionTitle>
                <FlexWrapper wrap>
                    <S.Text>
                        <p>Hello, i’m Elias!</p>
                        <p>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                            scratch and raise them into modern user-friendly web experiences.</p>
                        <p>Transforming my creativity and knowledge intoZ a websites has been my passion for over a year. I
                            have been helping various clients to establish their presence online. I always strive to learn about
                            the newest technologies and frameworks.</p>
                        <Button> Read more &#126;&gt;</Button>
                    </S.Text>
                    <S.Photo>
                        <Photo src={image} width={'339px'} height={'507px'}/>
                    </S.Photo>
                </FlexWrapper>
            </Container>
        </S.About>
    );
};
