import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { SkillsCard, SkillsCardPropsType } from "../../../../components/skillsCard/SkillsCard";
import logo from '../../../../assets/images/decoration/Logo1.svg';
import dots from '../../../../assets/images/decoration/Dots.svg';
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { mainTheme } from "../../../../components/styles/Theme";
import { Container } from "../../../../components/Container";
import { skillsArr } from "../../../../assets/Data";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle line={'239px'}>skills</SectionTitle>
                <FlexWrapper>
                    <Pictures/>
                    <SkillsBlock role={'group'}>
                        {
                            skillsArr.slice(0, 5).reverse().map((el: SkillsCardPropsType, index) => {
                                return <SkillsCard title={el.title} skills={el.skills} width={'196px'}/>
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
    height: 300px;

`

const Pictures = styled.div`
    position: relative;
    top: -30px;
    width: 382px;
    height: 282px;
    background-image: url(${logo}), url(${dots}), url(${dots});
    background-position: 48px 164px, 210px 143px, 32px 38px;
    background-repeat: no-repeat;
    background-size: 30%, 17%, 17%;
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