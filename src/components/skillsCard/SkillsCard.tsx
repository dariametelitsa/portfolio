import React from 'react';
import { S } from "./SkillsCardStyles";

export type SkillsCardPropsType = {
    title: string,
    skills: Array<string>,
    grow?: boolean,
}
export const SkillsCard: React.FC<SkillsCardPropsType> = (props: SkillsCardPropsType) => {
    return (
        <S.SkillsCard grow={props.grow}>
            <S.Title>{props.title}</S.Title>
            <S.Skills>{
                props.skills.reduce((el: string, acc:string) => {
                    return el + ' ' + acc;
                }, '')
            }</S.Skills>
        </S.SkillsCard>
    );
};

