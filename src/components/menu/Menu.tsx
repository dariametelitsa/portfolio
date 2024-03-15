import React from 'react';
import styled from 'styled-components';
import { MenuData } from '../../layout/header/Header';
import { mainTheme } from '../styles/Theme';
import { Link } from "react-router-dom";

export const Menu = (props: { items: Array<MenuData> }) => {
    return (
        <StyledMenu>
            <ul role={'menu'}>
                {
                    props.items.map((el: MenuData, index: number) => {
                        return (
                            <li role={'menuitem'} key={index}>
                                <Link to={el.link}>{el.item}</Link>
                            </li>);
                    })
                }
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        display: flex;
        flex-direction: row;
        gap: 32px;
    }

    li {
        list-style-type: none;
    }

    a {
        color: inherit;
        text-decoration: none;

        &::before {
            content: '#';
            color: ${mainTheme.colors.accent};
        }
    }
`


