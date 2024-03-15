import React from 'react';
import styled from "styled-components";
import { mainTheme } from "../styles/Theme";
import { Icon } from "../icon/Icon";

export const ContactsList = () => {
    return (
        <StyledContactsList>
            <Header>Message me here</Header>
            <Contacts role={'group'}>
                <Item>
                    <a href={'tel:88005558628'}> <Icon iconId={'discord'}/>88005558628</a>
                </Item>
                <Item>
                    <a href={'mailto:elias@elias.me'}><Icon iconId={'email'}/>elias@elias.me</a>
                </Item>
            </Contacts>
        </StyledContactsList>
    );
};

const StyledContactsList = styled.address`
    padding: 16px;
    border: 1px solid ${mainTheme.colors.grey.light};
`

const Header = styled.b`
    font-style: normal;
    font-weight: 600;
    color: ${mainTheme.colors.font};
`

const Contacts = styled.ul`
    margin-top: 16px;
`

const Item = styled.li`
    padding-left: 38px;
    position: relative;

    & + & {
        margin-top: 17px;
    }
    
    svg {
        position: absolute;
        left: 0;
        transform: translateY(-20%);
    }

    a {
        color: ${mainTheme.colors.grey.light};
        font-style: normal;
        font-weight: 400;
    }
`