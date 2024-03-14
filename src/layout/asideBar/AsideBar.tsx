import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { mainTheme } from "../../components/styles/Theme";
import { IconLink } from "../../components/IconLink";

export const AsideBar = () => {
    return (
        <StyledAsideBar>
                <FlexWrapper as={"ul"} direction={'column'}>
                    <ListItem>
                        <IconLink href="#1">
                            <Icon iconId={'github'} />
                        </IconLink>
                    </ListItem>
                    <ListItem>
                        <IconLink href="#2">
                            <Icon iconId={'dribble'} />
                        </IconLink>
                    </ListItem>
                    <ListItem>
                        <IconLink href="#3">
                            <Icon iconId={'figma'} />
                        </IconLink>
                    </ListItem>
                </FlexWrapper>
        </StyledAsideBar>
    );
};

const StyledAsideBar = styled.aside`
    position: fixed;
    top: 0;
    z-index: 1;
    
    &::before {
        content: '';
        position: absolute;
        width: 1px;
        height: 190px;
        background-color: ${mainTheme.colors.grey.light};
        right: 50%;
    }
`

const ListItem = styled.li`
    position: relative;
    top: 190px;
    margin: 8px 17px 0 17px;
`