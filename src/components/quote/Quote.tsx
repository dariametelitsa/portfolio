import React from 'react';
import { quotesArray } from "../../assets/Data";
import { S } from "./Quote_Styles";

type QuotePropsType = {
    quote: string,
    author: string,
}

export const Quote: React.FC = () => {
    return (
        <RandomQuote quote={quotesArray[randomQuoteIndex].quote}  author={quotesArray[randomQuoteIndex].author}/>
    );
};

const RandomQuote: React.FC<QuotePropsType> = (props: QuotePropsType) => {
    return (
        <S.RandomQuote>
            <q>{props.quote}</q>
            <cite>- {props.author}</cite>
        </S.RandomQuote>
    );
};

function getRandom(min = 0, max = 100):number {
    if (min > max) {
        [min, max] = [max, min];
    }
    let res = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(res);
}

const randomQuoteIndex: number = getRandom(0, quotesArray.length - 1);


