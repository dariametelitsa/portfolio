import React from 'react';
import styled from 'styled-components';
import {mainTheme} from "../styles/Theme";

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
    padding-top: 112px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    q {
        padding: 32px;
        font-size: ${mainTheme.fontSize.quote};
        border: 1px solid ${mainTheme.colors.grey.light};
    }
    
    cite {
        padding: 16px;
        font-size: ${mainTheme.fontSize.quote};
        border: 1px solid ${mainTheme.colors.grey.light};
        border-top: none;
    }
`