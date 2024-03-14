import React from 'react';
import styled from 'styled-components';
import { mainTheme } from '../styles/Theme';
import quote from './../../assets/images/decoration/quote.svg';

type QuotePropsType = {
    quote: string,
    author: string,
}

export const Quote = (props: QuotePropsType) => {
    return (
        <StyledQuote>
            <q>{props.quote}</q>
            <cite>{props.author}</cite>
        </StyledQuote>
    );
};

const StyledQuote = styled.div`
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