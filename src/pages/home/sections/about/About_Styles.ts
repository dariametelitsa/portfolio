import styled from "styled-components";
import { mainTheme } from "../../../../components/styles/Theme";
import dots from '../../../../assets/images/decoration/Dots.svg';
import { FlexWrapper } from "../../../../components/FlexWrapper";

const About = styled.section`
    position: relative;

    @media ${mainTheme.media.decoration} {
        overflow: hidden;

        &::after {
            content: url(${dots});
            position: absolute;
            right: -23px;
            top: 320px;
            z-index: 1;
        }
    }

    @media ${mainTheme.media.tablet} {
        ${FlexWrapper} {
            justify-content: center;
        }
    }
`

const Photo = styled.div`
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

    @media ${mainTheme.media.tablet} {
        margin-top: 50px;
        transform: translateY(0);
    }
`

const Text = styled.div`
    width: 45%;
    p {
        padding-bottom: 27px;
        line-height: 1.5;
    }
    
    @media ${mainTheme.media.tablet} {
        width: 100%;
    }
`

export const S = {
    About,
    Photo,
    Text
}