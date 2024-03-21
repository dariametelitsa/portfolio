import { mainTheme } from "../styles/Theme";
import quote from './../../assets/images/decoration/quote.svg';
import styled from "styled-components";
import { font } from "../styles/common";

const Quote = styled.div`
    ${font({family: '"IBM Plex Mono", monospace', weight: 300, Fmax: 24, Fmin: 18})}
    font-style: italic;
    line-height: 1.5;
    padding-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    background-color: ${mainTheme.colors.primary};

    color: ${mainTheme.colors.font};

    q {
        position: relative;
        padding: 32px;
        border: 1px solid ${mainTheme.colors.grey.light};

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
    }

    @media ${mainTheme.media.tablet} {
        padding-top: 30px;
    }
`

export const S = {
    Quote
}