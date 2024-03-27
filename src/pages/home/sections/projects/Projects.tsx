import React from 'react';
import { SectionTitle } from "../../../../components/SectionTitle";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Container } from "../../../../components/Container";
import { ProjectsGallery } from "../../../../components/projectsGallery/ProjectsGallery";
import { projectsBig } from "../../../../assets/Data";
import { S } from "./ProjectsStyles";
import { Fade } from "react-awesome-reveal";

export const Projects: React.FC = () => {
    return (
        <S.Project>
            <Container>
                <FlexWrapper alighI={'flex-start'}>
                    <SectionTitle line={'511px'}>projects</SectionTitle>
                    <S.Link href='#2'>View all &#126;&#126;&gt;</S.Link>
                </FlexWrapper>
                <Fade duration={3000}>
                    <ProjectsGallery projects={projectsBig} size={3}/>
                </Fade>
            </Container>
        </S.Project>
    );
};

