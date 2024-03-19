import React from 'react';
import { Photo } from "../../../../components/Photo";
import image from "../../../../assets/images/about/photo_about.png";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Container } from "../../../../components/Container";
import { S } from "./Info_Styled";

export const Info = () => {
    return (
        <section>
            <Container>
                <FlexWrapper wrap>
                    <S.Text>
                        <p>Hello, i’m Elias!</p>
                        <p>I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from
                            scratch and raise them into modern user-friendly web experiences.</p>
                        <p>Transforming my creativity and knowledge intoZ a websites has been my passion for over a year. I
                            have been helping various clients to establish their presence online. I always strive to learn about
                            the newest technologies and frameworks.</p>
                    </S.Text>
                    <S.Photo>
                        <Photo src={image} width={'339px'} height={'507px'}/>
                    </S.Photo>
                </FlexWrapper>
            </Container>
        </section>
    );
};


