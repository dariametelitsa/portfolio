import React from 'react';
import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { ProjectsGallery } from "../../../../components/projectsGallery/ProjectsGallery";
import { projectsSmall } from "../../../../assets/Data";
import { Container } from "../../../../components/Container";

export const SmallProjects: React.FC = () => {
    return (
        <StyledSmallProjects>
            <Container>
                <SectionTitle>small-projects</SectionTitle>
                <ProjectsGallery projects={projectsSmall}/>
            </Container>
        </StyledSmallProjects>
    );
};

const StyledSmallProjects = styled.section `
`