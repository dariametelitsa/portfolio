import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {WrapperFlex} from "../../../components/WrapperFlex";
import {SkillsCard, SkillsCardPropsType} from "../../../components/skillsCard/SkillsCard";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitle line={'239px'}>skills</SectionTitle>
            <WrapperFlex direction={'row'} justify={'flex-end'} wrap>
                {
                    skillsArr.map((el: SkillsCardPropsType) => {
                        return <SkillsCard title={el.title} skills={el.skills} />
                    })
                }
            </WrapperFlex>
        </StyledSkills>
    );
};

const StyledSkills = styled.section `
    padding: 100px;
`

const skillsArr: Array<SkillsCardPropsType> = [
    {
        title: 'Languages',
        skills: ['TypeScript', 'Lua', 'Python', 'Javascript'],
    },
    {
        title: 'Databases',
        skills: ['SQLite', 'PostgreSQL', 'Mongo'],
    },
    {
        title: 'Tools',
        skills: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome'],
    },
    {
        title: 'Others',
        skills: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja'],
    },
    {
        title: 'Frameworks',
        skills: ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js'],
    },
];
