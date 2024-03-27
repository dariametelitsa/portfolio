import React from 'react';
import { SectionTitle } from "../../../../components/SectionTitle";
import { SkillsCard, SkillsCardPropsType } from "../../../../components/skillsCard/SkillsCard";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Container } from "../../../../components/Container";
import { skillsArr } from "../../../../assets/Data";
import { S } from "./SkillsStyles";

export const Skills: React.FC = () => {
    return (
        <S.Skills>
            <Container>
                <SectionTitle line={'239px'}>skills</SectionTitle>
                <FlexWrapper wrap>
                    <S.Pictures/>
                    <S.SkillsBlock role={'group'}>
                        {
                            skillsArr.slice(0, 5).reverse().map((el: SkillsCardPropsType) => {
                                return <SkillsCard title={el.title} skills={el.skills}/>
                            })
                        }
                    </S.SkillsBlock>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};

