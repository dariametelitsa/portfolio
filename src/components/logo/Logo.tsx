import React from 'react';
import { Icon } from '../icon/Icon';
import styled from "styled-components";

export const Logo: React.FC = () => {
  return (
      <LogoLink href='/portfolio'>
      <Icon iconId='logotype' width='72px' height='21'/>
    </LogoLink>
  );
};

const LogoLink = styled.a `
    font-size: 0;
`
