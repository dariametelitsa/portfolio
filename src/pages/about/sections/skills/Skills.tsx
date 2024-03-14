import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { Container } from "../../../../components/Container";
import { SkillsCard, SkillsCardPropsType } from "../../../../components/skillsCard/SkillsCard";
import { skillsArr } from "../../../../assets/Data";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>skills</SectionTitle>
                <SkillsBlock role={'group'}>
                    {
                        skillsArr.map((el: SkillsCardPropsType) => {
                            return <SkillsCard title={el.title} skills={el.skills} width={'18%'}/>
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
    //justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
`