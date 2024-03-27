import React from 'react';
import { S } from "./TabsMenuStyles";
import { TabMenuProps } from "../../assets/Types";


export const TabsMenu: React.FC<TabMenuProps> = (props: TabMenuProps) => {
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
