import React from 'react';
import { S } from "./TabsMenu_Styles";

export type TabsStatusType = 'All' | 'HTML' | 'React' | 'Styled-components' | 'SCSS' | 'CSS' | 'JS' | 'TS' | 'Figma';

export type TabMenuPropsType = {
    tabsItems: Array<TabsStatusType>,
    changeFilterStatus: (value: TabsStatusType) => void,
    currentFilterStatus: TabsStatusType,
}
export const TabsMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.TabsMenu>
            {
                props.tabsItems.map((item => {
                    return <S.TabsItem>
                        <S.Link active={props.currentFilterStatus === item}
                                onClick={() => {
                                    props.changeFilterStatus(item)
                                }}>{item}</S.Link>
                    </S.TabsItem>
                }))
            }
            <S.TabsItem/>

        </S.TabsMenu>
    );
};
