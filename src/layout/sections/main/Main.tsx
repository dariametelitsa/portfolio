import React from 'react';
import styled from 'styled-components';
import { mainTheme } from '../../../components/styles/Theme';
import { Button } from '../../../components/Button';
import photoPng from './../../../assets/images/photo_first.png';
import sprite from './../../../assets/images/icons.svg';
import logo from './../../../assets/Logo1.svg';
import dots from './../../../assets/Dots.svg';

import image from './../../../assets/Image.png';
import { Wrapper } from '../../../components/Wrapper';
import { Quote } from '../../../components/quote/Quote';

export const Main = () => {
  return (
    <StyledMain>
      <Wrapper alighI='center'>
        <div>
          <Title>Elias is a <strong>web designer</strong> and <strong>front-end developer</strong></Title>
          <Description>He crafts responsive websites where technologies meet creativity</Description>
          <Button as='a'>Contact me!!</Button>
        </div>
        <StyledPhoto>
          <Photo src={image} alt='Photo of a web-designer.' />
          <p>Currently working on <span>Portfolio </span></p>
        </StyledPhoto>
      </Wrapper>
      <Quote />
    </StyledMain>
  );
}; 

const StyledMain = styled.section `  
  background-color: ${mainTheme.colors.primary};
  height: 100vh;
`

const Title = styled.h1 `
  color: #fff;
`

const Description = styled.p `
  
`

const StyledPhoto = styled.div `
  position: relative;
  &::before {
    /* content: url('${sprite}#logotypeBg'); */
    content: url(${logo});
    position: absolute;
    left: -20px;
    top: 20%;
    z-index: 0;
  }

  &::after {
    content: url(${dots});
    position: absolute;
    right: 16px;
    bottom: 100px;
    z-index: 2;
  }

  p {
    position: relative;
    padding: 8px 34px ;
    max-width: 402px;
    width: 100%;
    color: inherit;
    border: 1px solid ${mainTheme.colors.grey.light};

    &::before {
      content: '';
      position: absolute;
      left: 8px;
      top: 11 px;
      width: 16px;
      height: 16px;
      background-color: ${mainTheme.colors.accent};
    }

    span {
      color: #fff;
    }
  }
`

const Photo = styled.img `
  transform: scale(1);
  display: block;
  width: 457px;
  height: 386px;
  object-fit: cover;
  object-position: top;
  z-index: 1;
`
