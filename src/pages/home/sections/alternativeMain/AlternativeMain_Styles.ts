import styled from "styled-components";
import { Container } from "../../../../components/Container";
import { mainTheme } from "../../../../components/styles/Theme";
import dots from "../../../../assets/images/decoration/Dots.svg";
import {
    GlitchFont,
    GlitchMovement,
    GlitchOpacity,
    GlitchPath
} from "../../../../components/styles/animations/Animations";

const AlternativeMain = styled.section`
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
    width: calc(100% - ${mainTheme.containerPad} * 2);
    top: 400px;
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
        height: 650px;
        object-fit: contain;
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

    @media ${mainTheme.media.desktop} {
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
    }
    
`

const Status = styled.p`
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

export const S = {
    AlternativeMain,
    AbsoluteWrap,
    PhotoWrapper,
    Intro,
    Name,
    Title,
    TextAnimation,
    Status
}