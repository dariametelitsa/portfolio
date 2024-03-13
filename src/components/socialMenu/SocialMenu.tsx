import React from 'react';
import { IconLink } from "../IconLink";
import { Icon } from "../icon/Icon";
import styled from "styled-components";
import { mainTheme } from "../styles/Theme";

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
        <StyledSocialMenu>
            <Title>{props.title}</Title>
            <ul>
                {
                    props.links.map((props: SocialPropsType) => {
                        return (<li>
                            <IconLink href={props.link} aria-label={props.name}><Icon iconId={props.icon}/></IconLink>
                        </li>)
                    })
                }
            </ul>
       </StyledSocialMenu>
    );
};

const Title = styled.h4`
    margin-bottom: 12px;
    font-weight: 500;
    font-size: ${mainTheme.fontSize.title};
    color: ${mainTheme.colors.font};
`

const StyledSocialMenu = styled.div`
    ul {
        display: flex;
        gap: 8px;
    }
`