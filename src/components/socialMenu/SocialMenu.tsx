import React from 'react';
import { IconLink } from "../IconLink";
import { Icon } from "../icon/Icon";
import { S } from "./SocialMenuStyles";
import { SocialMenuProps, SocialProps } from "../../assets/Types";


export const SocialMenu = (props: SocialMenuProps) => {
    return (
        <S.SocialMenu>
            <S.Title>{props.title}</S.Title>
            <ul>
                {
                    props.links.map((props: SocialProps) => {
                        return (<li>
                            <IconLink href={props.link} aria-label={props.name}><Icon iconId={props.icon}/></IconLink>
                        </li>)
                    })
                }
            </ul>
        </S.SocialMenu>
    );
};
