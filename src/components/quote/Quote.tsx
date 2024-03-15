import React from 'react';
import styled from 'styled-components';
import { mainTheme } from '../styles/Theme';
import quote from './../../assets/images/decoration/quote.svg';
import { quotesArray } from "../../assets/Data";

type QuotePropsType = {
    quote: string,
    author: string,
}

export const Quote = () => {
    return (
        <RandomQuote quote={quotesArray[randomQuoteIndex].quote}  author={quotesArray[randomQuoteIndex].author}/>
    );
};

const RandomQuote = (props: QuotePropsType) => {
    return (
        <StyledRandomQuote>
            <q>{props.quote}</q>
            <cite>- {props.author}</cite>
        </StyledRandomQuote>
    );
};

const StyledRandomQuote = styled.div`
    font-family: "IBM Plex Mono", monospace;
    font-weight: 300;
    font-style: italic;
    line-height: 1.5;
    padding-top: 110px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    color: ${mainTheme.colors.font};

    q {
        position: relative;
        padding: 32px;
        font-size: ${mainTheme.fontSize.title};
        font-size: ${mainTheme.fontSize.title};
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
        font-size: ${mainTheme.fontSize.title};
        font-style: normal;
        border: 1px solid ${mainTheme.colors.grey.light};
        border-top: none;
    }
`

function getRandom(min = 0, max = 100):number {
    if (min > max) {
        [min, max] = [max, min];
    }
    let res = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(res);
}

const randomQuoteIndex: number = getRandom(0, quotesArray.length - 1);


