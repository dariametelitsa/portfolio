import React, { useState } from 'react';
import styled from "styled-components";
import { SectionTitle } from "../../../../components/SectionTitle";
import { ProjectsGallery } from "../../../../components/projectsGallery/ProjectsGallery";
import { projectsSmall, tabsItems } from "../../../../assets/Data";
import { Container } from "../../../../components/Container";
import { TabsMenu } from "../../../../components/tabsMenu/TabsMenu";
import { filterWorks } from "../filterFunction";
import { TabsStatusProps } from "../../../../assets/Types";

export const SmallProjects: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState(tabsItems[0]);

    function changeFilterStatus(value: TabsStatusProps) {
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