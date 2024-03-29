import styled, { css } from "styled-components";
import { mainTheme } from "../../components/styles/Theme";

const Header = styled.header`
    padding: 32px 0;
    font-size: ${mainTheme.fontSize.main};
    color: ${mainTheme.colors.grey.light};
    background-color: ${mainTheme.colors.primary};
`

//desktop
const DesktopMenu = styled.div`
    display: flex;
    align-items: center;

    ul {
        display: flex;
        flex-direction: row;
        gap: 32px;
    }
`

const Select = styled.select`
    display: inline-block;
    margin-left: 32px;
    padding: 0;

    color: inherit;
    text-transform: uppercase;
    font-weight: 600;
    font-size: inherit;
    font-family: inherit;

    border: none;
    background-color: transparent;

    & + a {
        margin-left: 50px;
    }
`

//mobile
const MobileMenu = styled.div`

    ul {
        display: flex;
        flex-direction: column;
        gap: 32px;
    }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    padding: 16px;
    background-color: rgba(40, 44, 51, 0.9);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 0;

    backdrop-filter: blur(5px);
    transform: translateY(-100%);

    transition: 0.6s ease-in;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        gap: 60px;
        transform: translateY(0);
    `}
    select + a,
    select {
        margin-left: 0;
    }

    a,
    select {
        font-size: ${mainTheme.fontSize.headline};
    }
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 100px;
    height: 100px;
    top: 0;
    right: 0;
    z-index: 9999;
    background-color: transparent;

    span {
        position: absolute;
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${mainTheme.colors.font};
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before,
        &::after {
            content: '';
            display: block;
            height: 2px;
            width: 20px;
            background-color: ${mainTheme.colors.font};
            position: absolute;
        }

        &::before {
            right: 0;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                width: 36px;
                transform: translateY(0) rotate(-45deg);
            `}
        }

        &::after {
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                width: 36px;
                transform: translateY(0) rotate(45deg);
            `}
        }

    }
`

export const S = {
    Header,
    Select,
    DesktopMenu,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
}