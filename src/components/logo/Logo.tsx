import React from 'react';
import { Icon } from '../icon/Icon';
import styled from "styled-components";

export const Logo = () => {
  return (
    <LogoLink href='#home'>
      <Icon iconId='logotype' width='72px' height='21'/>
    </LogoLink>
  );
};

const LogoLink = styled.a `
    font-size: 0;
`
