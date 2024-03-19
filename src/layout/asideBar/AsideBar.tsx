import React from 'react';
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { IconLink } from "../../components/IconLink";
import { S } from "./AsideBar_Styles";

export const AsideBar: React.FC = () => {
    return (
        <S.AsideBar>
            <FlexWrapper as={"ul"} direction={'column'}>
                {
                    socials.map((s) => {
                        return <S.ListItem>
                            <IconLink href={s.link}>
                                <Icon iconId={s.icon}/>
                            </IconLink>
                        </S.ListItem>
                    })
                }
            </FlexWrapper>
        </S.AsideBar>
    );
};

const socials = [
    {
        link: "#1",
        icon: 'github'
    },
    {
        link: "#2",
        icon: 'dribble'
    },
    {
        link: "#3",
        icon: 'figma'
    },
]

