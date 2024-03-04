import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu items={menuItems}/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header `
  background-color: #282C33;
`

export interface MenuData {
  item: string,
  link: string,
}

const menuItems: Array<MenuData> = [
  {
    item: 'home',
    link: '#1'
  },
  {
    item: 'works',
    link: '#2'
  },
  {
    item: 'about-me',
    link: '#3'
  },
  {
    item: 'contacts',
    link: '#4'
  }
];