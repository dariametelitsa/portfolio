import React from 'react';
import styled from 'styled-components';
import { MenuData } from '../../layout/header/Header';

export const Menu = (props: {items: Array<MenuData>}) => {
  return (
    <StyledMenu>
      <ul>
        {
          props.items.map((el: MenuData, index: number) => {
            return (
            <li key={index}>
              <a href={el.link}>{el.item}</a>
            </li>);
          })
        }
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav `
  background-color: #e0e0e0;
`

