import styled from "styled-components";
import dots from "../../../../assets/images/decoration/Dots.svg";
import { mainTheme } from "../../../../components/styles/Theme";
import { FlexWrapper } from "../../../../components/FlexWrapper";

const Contacts = styled.section`
    position: relative;

    @media ${mainTheme.media.decoration} {
        overflow: hidden;

        &::before {
            content: url(${dots});
            position: absolute;
            left: -50px;
            top: 150px;
        }
    }
    @media ${mainTheme.media.tablet} {
        ${FlexWrapper} {
            justify-content: center;
        }
    }

`

const Information = styled.p`
    width: 45%;
    line-height: 1.5;

    @media ${mainTheme.media.tablet} {
        width: 100%;
        margin-bottom: 30px;
    }
`

export const S = {
    Contacts,
    Information
}