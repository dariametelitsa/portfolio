import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { SkillsCard, SkillsCardPropsType } from "../../../components/skillsCard/SkillsCard";
import logo from '../../../assets/images/decoration/Logo1.svg';
import dots from '../../../assets/images/decoration/Dots.svg';
import { FlexWrapper } from "../../../components/FlexWrapper";
import { mainTheme } from "../../../components/styles/Theme";
import { Container } from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle line={'239px'}>skills</SectionTitle>
                <FlexWrapper>
                    <Pictures/>
                    <SkillsBlock role={'group'}>
                        {
                            skillsArr.map((el: SkillsCardPropsType, index) => {
                                return <SkillsCard title={el.title} skills={el.skills}/>
                            })
                        }
                    </SkillsBlock>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`

`

const SkillsBlock = styled.ul`

    margin-left: auto;
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap-reverse;
    height: 250px;

    li:nth-child(n+7) {
        display: none;
    }

`

const Pictures = styled.div`
    position: relative;
    width: 350px;
    height: 282px;
    background-image: url(${logo}), url(${dots}), url(${dots});
    background-position: 15px 125px, 177px 143px, 0 38px;
    background-repeat: no-repeat;
    object-fit: contain;

    &::before,
    &::after {
        content: '';
        position: absolute;
        border: 1px solid ${mainTheme.colors.grey.light};
    }

    &::before {
        width: 86px;
        height: 86px;
        right: 36px;
    }

    &::after {
        width: 52px;
        height: 52px;
        right: 0;
        bottom: 37px;
    }
`

const skillsArr: Array<SkillsCardPropsType> = [
    {
        title: 'Tools',
        skills: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome'],
    },
    {
        title: 'Frameworks',
        skills: ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js'],
    },
    {
        title: 'Languages',
        skills: ['TypeScript', 'Lua', 'Python', 'Javascript'],
    },
    {
        title: 'Databases',
        skills: ['SQLite', 'PostgreSQL', 'Mongo'],
    },
    {
        title: 'Others',
        skills: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja'],
    },
];
