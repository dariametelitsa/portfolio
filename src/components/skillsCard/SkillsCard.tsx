import React from 'react';
import styled from "styled-components";
import { mainTheme } from "../styles/Theme";

type StyledSkillsCardPropsType = {
    grow?: boolean,
}

export type SkillsCardPropsType = {
    title: string,
    skills: Array<string>,
    grow?: boolean,
}
export const SkillsCard = (props: SkillsCardPropsType) => {
    return (
        <StyledSkillsCard grow={props.grow}>
            <Title>{props.title}</Title>
            <Skills>{
                props.skills.reduce((el: string, acc:string) => {
                    return el + ' ' + acc;
                }, '')
            }</Skills>
        </StyledSkillsCard>
    );
};

const StyledSkillsCard = styled.li<StyledSkillsCardPropsType>`
    width: 192px;
    flex-grow: ${props => props.grow ? 1 : 0};
    list-style-type: none;
    border: 1px solid ${mainTheme.colors.grey.light};
`;

const Title = styled.h4 `
    padding: 8px;
    font-weight: 600;
    color: ${mainTheme.colors.font};
    border-bottom: 1px solid ${mainTheme.colors.grey.light};
`;

const Skills = styled.strong `
    display: block;
    padding: 8px;
    font-weight: 400;
    line-height: 1.5;
`;