import React from 'react';
import { S } from "./SkillsCardStyles";
import { SkillsCardProps } from "../../assets/Types";

export const SkillsCard: React.FC<SkillsCardProps> = (props: SkillsCardProps) => {
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

