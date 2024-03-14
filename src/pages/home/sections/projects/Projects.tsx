import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from "../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { mainTheme } from "../../../../components/styles/Theme";
import { Container } from "../../../../components/Container";
import { ProjectsGallery } from "../../../../components/projectsGallery/ProjectsGallery";
import { projectsBig } from "../../../../assets/Data";

export const Projects = () => {
    return (
        <StyledProject>
            <Container>
                <FlexWrapper alighI={'flex-start'}>
                    <SectionTitle line={'511px'}>projects</SectionTitle>
                    <Link href='#2'>View all &#126;&#126;&gt;</Link>
                </FlexWrapper>
                <ProjectsGallery projects={projectsBig} size={3} />
            </Container>
        </StyledProject>
    );
};

const StyledProject = styled.section`
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 240px;
        right: -68px;
        width: 155px;
        height: 155px;
        border: 1px solid ${mainTheme.colors.grey.light};
    }
`
const Link = styled.a`
    display: inline-block;
    text-decoration: none;
    
    transition: 0.2s ease-in-out;
    
     &:hover {
         color: ${mainTheme.colors.accent};;
         transform: translateX(-30px);
     }
`