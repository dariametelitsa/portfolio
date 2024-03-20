import React from 'react';
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { IconLink } from "../../components/IconLink";
import { S } from "./SideBar_Styles";

export const SideBar: React.FC = () => {
    return (
        <S.SideBar>
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
        </S.SideBar>
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

