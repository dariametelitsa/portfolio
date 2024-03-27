import React from 'react';
import { quotesArray } from "../../assets/Data";
import { S } from "./QuoteStyles";
import 'swiper/css';
import { QuoteProps } from "../../assets/Types";


///////////////// Random quote functional
export const Slider: React.FC = () => {
    return (
        <RandomQuote quote={quotesArray[randomQuoteIndex].quote} author={quotesArray[randomQuoteIndex].author}/>
    );
};

const RandomQuote: React.FC<QuoteProps> = (props: QuoteProps) => {
    return (
        <S.Quote>
            <q>{props.quote}</q>
            <cite>- {props.author}</cite>
        </S.Quote>
    );
};

function getRandom(min = 0, max = 100): number {
    if (min > max) {
        [min, max] = [max, min];
    }
    let res = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(res);
}

const randomQuoteIndex: number = getRandom(0, quotesArray.length - 1);


//////////////////////////// slider library
// export const Slider: React.FC = () => {
//     return (
//         <Swiper
//             effect={'flip'}
//             allowTouchMove={false}
//             modules={[Autoplay]}
//             autoplay={{delay: 7000, disableOnInteraction: false}}
//             speed={2000}
//             loop
//             spaceBetween={20}
//             className="mySwiper3">
//             {
//                 quotesArray.filter(el => el.quote.length < 200).map(quote => {
//                     return (
//                         <SwiperSlide>
//                             <Quote quote={quote.quote} author={quote.author}/>
//                         </SwiperSlide>
//                     )
//                 })
//             }
//         </Swiper>
//     );
// };
// const Quote: React.FC<QuoteProps> = (props: QuoteProps) => {
//     return (
//         <S.Quote>
//             <q>{props.quote}</q>
//             <cite>- {props.author}</cite>
//         </S.Quote>
//     );
// };