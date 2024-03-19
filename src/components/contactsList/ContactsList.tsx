import React from 'react';
import { Icon } from "../icon/Icon";
import { S } from "./ContactsList_Styled";

export const ContactsList: React.FC = () => {
    return (
        <S.ContactsList>
            <S.Header>Message me here</S.Header>
            <S.Contacts role={'group'}>
                <S.Item>
                    <a href={'tel:88005558628'}> <Icon iconId={'discord'}/>88005558628</a>
                </S.Item>
                <S.Item>
                    <a href={'mailto:elias@elias.me'}><Icon iconId={'email'}/>elias@elias.me</a>
                </S.Item>
            </S.Contacts>
        </S.ContactsList>
    );
};
