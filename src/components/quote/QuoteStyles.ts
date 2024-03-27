import { mainTheme } from "../styles/Theme";
import quote from './../../assets/images/decoration/quote.svg';
import styled from "styled-components";
import { font } from "../styles/common";

const Quote = styled.div`
    //padding-top: 110px;
    display: flex;
    flex-direction: column;
    //align-items: flex-end;
    width: 100%;
    ${font({family: '"IBM Plex Mono", monospace', weight: 300, Fmax: 20, Fmin: 18})}
    font-style: italic;
    line-height: 1.5;
    color: ${mainTheme.colors.font};


    //margin-top: 50px;
    height: 300px;
    justify-content: center;
    align-items: center;

    @media ${mainTheme.media.tablet} {
        height: 320px;
    }

    q {
        position: relative;
        padding: 32px;
        border: 1px solid ${mainTheme.colors.grey.light};
        background-color: ${mainTheme.colors.primary};

        &::before,
        &::after {
            content: '';
            position: absolute;
            width: 42px;
            height: 29px;
            background-image: url(${quote});
            background-position: left;
            background-repeat: no-repeat;
            background-color: ${mainTheme.colors.primary};
        }

        &::before {
            top: 0;
            left: 10px;
            transform: translateY(-50%);
        }

        &::after {
            bottom: 0;
            right: 10px;
            transform: translateY(50%);
        }
    }

    cite {
        padding: 16px;
        font-style: normal;
        border: 1px solid ${mainTheme.colors.grey.light};
        border-top: none;
        background-color: ${mainTheme.colors.primary};
    }

    @media ${mainTheme.media.tablet} {
        //padding-top: 30px;
    }
`

export const S = {
    Quote
}