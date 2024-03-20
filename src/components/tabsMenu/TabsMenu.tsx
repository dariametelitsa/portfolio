import React from 'react';
import { S } from "./TabsMenu_Styles";

export type TabsStatusType = 'all' | 'landing' | 'react' | 'html';

export type TabMenuPropsType = {
    tabsItems: Array<{ status: TabsStatusType, title: string }>,
    changeFilterStatus: (value: TabsStatusType) => void,
    currentFilterStatus: string,
}
export const TabsMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType) => {
    return (
        <S.TabsMenu>
            {
                props.tabsItems.map((item => {
                    return <S.TabsItem>
                        <S.Link onClick={() => {
                            props.changeFilterStatus(item.status)
                        }}>{item.title}</S.Link>
                    </S.TabsItem>
                }))
            }
            <S.TabsItem/>

        </S.TabsMenu>
    );
};
