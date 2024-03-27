import React, { useState } from 'react';
import styled from "styled-components";
import { Container } from "../../../../components/Container";
import { SectionTitle } from "../../../../components/SectionTitle";
import { ProjectsGallery } from "../../../../components/projectsGallery/ProjectsGallery";
import { projectsBig, tabsItems } from "../../../../assets/Data";
import { TabsMenu } from "../../../../components/tabsMenu/TabsMenu";
import { filterWorks } from "../filterFunction";
import { TabsStatusProps } from "../../../../assets/Types";

export const CompleteApps: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState(tabsItems[0]);

    function changeFilterStatus(value: TabsStatusProps) {
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
