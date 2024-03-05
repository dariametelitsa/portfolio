import React from 'react';
import styled from "styled-components";
import {mainTheme} from "../styles/Theme";

export type SkillsCardPropsType = {
    title: string,
    skills: Array<string>,
}
export const SkillsCard = (props: SkillsCardPropsType) => {
    return (
        <StyledSkillsCard>
            <Title>{props.title}</Title>
            <Skills>{
                props.skills.reduce((el: string, acc:string) => {
                    return el + ' ' + acc;
                }, '')
            }</Skills>
        </StyledSkillsCard>
    );
};

const StyledSkillsCard = styled.div`
    border: 1px solid ${mainTheme.colors.grey.light};
`;

const Title = styled.h4`
    padding: 8px;
    border-bottom: 1px solid ${mainTheme.colors.grey.light};
`;

const Skills = styled.strong`
    display: block;
    padding: 8px;
`;