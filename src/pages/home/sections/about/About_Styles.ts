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

export const S = {
    About
}