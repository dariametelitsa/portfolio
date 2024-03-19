import React from 'react';
import { MenuData } from '../../layout/header/Header';
import { Link } from "react-router-dom";
import { S } from "./Menu_Styles";

export const Menu: React.FC<{ items: Array<MenuData> }> = (props: { items: Array<MenuData> }) => {
    return (
        <S.Menu>
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
        </S.Menu>
    );
};



