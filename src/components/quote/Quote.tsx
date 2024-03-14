import React from 'react';
import styled from 'styled-components';
import { mainTheme } from '../styles/Theme';
import quote from './../../assets/images/decoration/quote.svg';

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

const quotesArray = [
    {
        quote: 'With great power comes great electricity bill',
        author: 'Dr. Who',
    },
    {
        quote: 'Они что, транслируют рекламу прямо в сон? — Да, а разве в двадцатом веке не было рекламы? — Была, но не во сне. Только по радио и телевидению. В журналах, фильмах, на спортивных играх, автобусах, молочных коробках, на майках, банданах и на небе, но не во сне! Ни за что! ',
        author: 'Futurama',
    },
    {
        quote: 'Мне нравится, что там все люди были равны, будь они белые, чёрные, инопланетяне или даже женщины.',
        author: 'Futurama'
    },
    {
        quote: 'Когда мы убиваем в детях способность критически мыслить, говоря, что кролики появляются из шляп, мы создаем взрослых, которые верят в астрологию и гомеопатию',
        author: 'The big bang theory',
    },
    {
        quote: 'Подумайте, что является основной проблемой при охоте на монстров? — Ты второстепенный персонаж и умираешь в течение первых пяти минут фильма',
        author: 'Gravity Falls',
    },
    {
        quote: 'Ты говоришь как прибожек, выглядишь как прибожек... и просто ты прибожек',
        author: 'The Witcher',
    },
    {
        quote: 'Лиза, знаешь как я дожила до своих лет? С помощью двух вещей: слепой веры и красного вина.',
        author: 'The Simpsons',
    },
];

function getRandom(min = 0, max = 100):number {
    if (min > max) {
        [min, max] = [max, min];
    }
    let res = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(res);
}

const randomQuoteIndex: number = getRandom(0, quotesArray.length - 1);


