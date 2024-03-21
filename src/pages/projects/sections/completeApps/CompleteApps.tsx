import React, { useState } from 'react';
import styled from "styled-components";
import { Container } from "../../../../components/Container";
import { SectionTitle } from "../../../../components/SectionTitle";
import { ProjectsGallery } from "../../../../components/projectsGallery/ProjectsGallery";
import { projectsBig, tabsItems } from "../../../../assets/Data";
import { TabsMenu, TabsStatusType } from "../../../../components/tabsMenu/TabsMenu";
import { ProjectCardPropsType } from "../../../../components/projectsGallery/projectCard/ProjectCard";


function filterWorks(works: Array<ProjectCardPropsType>, currentFilterStatus: string) {

    if (currentFilterStatus === 'All') {
        return works;
    }

    return works.filter((work) => work.tags.find(el => el === currentFilterStatus));
}


export const CompleteApps: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState(tabsItems[0]);

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value);
    }

    return (
        <StyledCompleteApps>
            <Container>
                <SectionTitle>complete-apps</SectionTitle>
                <TabsMenu tabsItems={tabsItems}
                          changeFilterStatus={changeFilterStatus}
                          currentFilterStatus={currentFilterStatus}/>
                <ProjectsGallery projects={filterWorks(projectsBig, currentFilterStatus)}/>
            </Container>
        </StyledCompleteApps>
    );
};


const StyledCompleteApps = styled.section`
`
