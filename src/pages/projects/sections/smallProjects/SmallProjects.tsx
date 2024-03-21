import React, { useState } from 'react';
import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { ProjectsGallery } from "../../../../components/projectsGallery/ProjectsGallery";
import { projectsSmall, tabsItems } from "../../../../assets/Data";
import { Container } from "../../../../components/Container";
import { TabsMenu, TabsStatusType } from "../../../../components/tabsMenu/TabsMenu";
import { filterWorks } from "../filterFunction";

export const SmallProjects: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState(tabsItems[0]);

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value);
    }

    return (
        <StyledSmallProjects>
            <Container>
                <SectionTitle>small-projects</SectionTitle>
                <TabsMenu tabsItems={tabsItems}
                          changeFilterStatus={changeFilterStatus}
                          currentFilterStatus={currentFilterStatus}/>
                <ProjectsGallery projects={filterWorks(projectsSmall, currentFilterStatus)}/>
            </Container>
        </StyledSmallProjects>
    );
};

const StyledSmallProjects = styled.section `
`