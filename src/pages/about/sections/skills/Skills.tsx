import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Container } from "../../../../components/Container";
import { SkillsCard } from "../../../../components/skillsCard/SkillsCard";
import { skillsArr } from "../../../../assets/Data";
import { SkillsCardProps } from "../../../../assets/Types";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>skills</SectionTitle>
                <SkillsBlock role={'group'}>
                    {
                        skillsArr.map((el: SkillsCardProps) => {
                            return <SkillsCard title={el.title} skills={el.skills} grow/>
                        })
                    }
                </SkillsBlock>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section `
`

const SkillsBlock = styled.ul `
    display: flex;
    gap: 16px;
    width: 100%;
    align-items: flex-start;
    flex-wrap: wrap;
`