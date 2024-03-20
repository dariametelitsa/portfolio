import React from 'react';
import { IconLink } from "../IconLink";
import { Icon } from "../icon/Icon";
import { S } from "./SocialMenuStyles";

export type SocialMenuPropsType = {
    title: string,
    links: Array<SocialPropsType>,
}

type SocialPropsType = {
    link: string,
    name: string,
    icon: string,
}
export const SocialMenu = (props: SocialMenuPropsType) => {
    return (
        <S.SocialMenu>
            <S.Title>{props.title}</S.Title>
            <ul>
                {
                    props.links.map((props: SocialPropsType) => {
                        return (<li>
                            <IconLink href={props.link} aria-label={props.name}><Icon iconId={props.icon}/></IconLink>
                        </li>)
                    })
                }
            </ul>
        </S.SocialMenu>
    );
};
