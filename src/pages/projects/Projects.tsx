import React from 'react';
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { CompleteApps } from "./sections/completeApps/CompleteApps";
import { SmallProjects } from "./sections/smallProjects/SmallProjects";

export const Projects = () => {
    return (
        <main>
            <PageTitle title={'project'} info={'List of my projects'} />
            <CompleteApps />
            <SmallProjects />
        </main>
    );
};
