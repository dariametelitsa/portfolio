import React from 'react';
import { quotesArray } from "../../assets/Data";
import { S } from "./Quote_Styles";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type QuotePropsType = {
    quote: string,
    author: string,
}
//
// export const Slider: React.FC = () => {
//     return (
//         <RandomQuote quote={quotesArray[randomQuoteIndex].quote}  author={quotesArray[randomQuoteIndex].author}/>
//     );
// };
// const RandomQuote: React.FC<QuotePropsType> = (props: QuotePropsType) => {
//     return (
//         <S.Quote>
//             <q>{props.quote}</q>
//             <cite>- {props.author}</cite>
//         </S.Quote>
//     );
// };
// function getRandom(min = 0, max = 100):number {
//     if (min > max) {
//         [min, max] = [max, min];
//     }
//     let res = min - 0.5 + Math.random() * (max - min + 1);
//     return Math.round(res);
// }
//
// const randomQuoteIndex: number = getRandom(0, quotesArray.length - 1);


//////////////////////////// slider library


export const Slider: React.FC = () => {
    return (
        <Swiper
            effect={'flip'}
            allowTouchMove={false}
            modules={[Autoplay]}
            autoplay={{delay: 7000, disableOnInteraction: false}}
            speed={2000}
            loop
            spaceBetween={20}
            className="mySwiper3">
            {
                quotesArray.filter(el => el.quote.length < 200).map(quote => {
                    return (
                        <SwiperSlide>
                            <Quote quote={quote.quote} author={quote.author}/>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
};

const Quote: React.FC<QuotePropsType> = (props: QuotePropsType) => {
    return (
        <S.Quote>
            <q>{props.quote}</q>
            <cite>- {props.author}</cite>
        </S.Quote>
    );
};