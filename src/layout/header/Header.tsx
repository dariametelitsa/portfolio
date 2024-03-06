import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { mainTheme } from '../../components/styles/Theme';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <FlexWrapper>
        <Menu items={menuItems}/>
        <Select name='language'>
          <option value="en">En</option>
          <option value="ru">Ru</option>
        </Select>
      </FlexWrapper>
      
    </StyledHeader>
  );
};

const StyledHeader = styled.header `
  display: flex;
  justify-content: space-between;
  font-size: ${mainTheme.fontSize.main};
  color: ${mainTheme.colors.grey.light};
  background-color: ${mainTheme.colors.primary};
`

const Select = styled.select `
 color: inherit;
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