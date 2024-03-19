import React from 'react';
import { Logo } from '../../components/logo/Logo';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from "../../components/Container";
import { S } from "./Header_Styles";
import DesktopMenu from "./desktopMenu/DesktopMenu";
import MobileMenu from "./mobileMenu/mobileMenu";

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint: number = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper alighI={'center'}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu items={menuItems}/> : <DesktopMenu items={menuItems}/>}
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

export interface MenuData {
    item: string,
    link: string,
}

const menuItems: Array<MenuData> = [
    {
        item: 'home',
        link: '/portfolio'
    },
    {
        item: 'works',
        link: '/portfolio/projects'
    },
    {
        item: 'about-me',
        link: '/portfolio/about'
    },
    {
        item: 'contacts',
        link: '/portfolio/contacts'
    }
];