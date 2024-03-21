import React from 'react';
import { quotesArray } from "../../assets/Data";
import { S } from "./Quote_Styles";
import 'swiper/css';
import './slider.css';

type QuotePropsType = {
    quote: string,
    author: string,
}

export const Slider: React.FC = () => {
    return (
        <RandomQuote quote={quotesArray[randomQuoteIndex].quote}  author={quotesArray[randomQuoteIndex].author}/>
    );
};
const RandomQuote: React.FC<QuotePropsType> = (props: QuotePropsType) => {
    return (
        <S.Quote>
            <q>{props.quote}</q>
            <cite>- {props.author}</cite>
        </S.Quote>
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


//////////////////////////// slider library

//
// import { Navigation, Pagination, Scrollbar, A11y, EffectCreative } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// export const Slider:React.FC = () => {
//     return (
//         <Swiper
//             grabCursor={true}
//             effect={'creative'}
//             creativeEffect={{
//                 prev: {
//                     shadow: true,
//                     translate: ['-20%', 0, -1],
//                 },
//                 next: {
//                     translate: ['100%', 0, 0],
//                 },
//             }}
//             modules={[EffectCreative]}
//             className="mySwiper3">
//             {
//                 quotesArray.map(quote => {
//                     return (
//                         <SwiperSlide>
//                             <Quote quote={quote.quote} author={quote.author} />
//                         </SwiperSlide>
//                     )
//                 })
//             }
//         </Swiper>
//     );
// };
//
// const Quote: React.FC<QuotePropsType> = (props: QuotePropsType) => {
//     return (
//         <S.Quote>
//             <q>{props.quote}</q>
//             <cite>- {props.author}</cite>
//         </S.Quote>
//     );
// };