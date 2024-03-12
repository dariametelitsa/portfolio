import React from 'react';
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";
import { mainTheme } from "../../components/styles/Theme";

export const AsideBar = () => {
    return (
        <StyledAsideBar>
                <FlexWrapper as={"ul"} direction={'column'}>
                    <ListItem>
                        <a href="#1">
                            <Icon iconId={'github'} />
                        </a>
                    </ListItem>
                    <ListItem>
                        <a href="#2">
                            <Icon iconId={'dribble'} />
                        </a>
                    </ListItem>
                    <ListItem>
                        <a href="#3">
                            <Icon iconId={'figma'} />
                        </a>
                    </ListItem>
                </FlexWrapper>
        </StyledAsideBar>
    );
};

const StyledAsideBar = styled.aside`
    position: fixed;
    top: 0;
    
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