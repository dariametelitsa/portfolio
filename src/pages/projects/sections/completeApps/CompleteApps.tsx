import React from 'react';
import styled from "styled-components";
import { Container } from "../../../../components/Container";
import { SectionTitle } from "../../../../components/SectionTitle";
import { ProjectsGallery } from "../../../../components/projectsGallery/ProjectsGallery";
import { projectsBig } from "../../../../assets/Data";

export const CompleteApps = () => {
    return (
        <StyledCompleteApps>
            <Container>
                <SectionTitle>complete-apps</SectionTitle>
                <ProjectsGallery projects={projectsBig}/>
            </Container>
        </StyledCompleteApps>
    );
};

const StyledCompleteApps = styled.section `
`
