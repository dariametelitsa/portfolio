import React, { useState } from 'react';
import { Menu } from "../../../components/menu/Menu";
import { S } from "../Header_Styles";
import { Button } from "../../../components/Button";
import { MenuData } from "../Header";

const MobileMenu: React.FC<{ items: Array<MenuData> }> = (props: { items: Array<MenuData> }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    function onBurgerClickBtn() {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerClickBtn}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                <Menu items={props.items}/>
                <S.Select name='language'>
                    <option value="en">En</option>
                    <option value="ru">Ru</option>
                </S.Select>
                <Button as={'a'} href={''} download>Download CV</Button>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};

export default MobileMenu;