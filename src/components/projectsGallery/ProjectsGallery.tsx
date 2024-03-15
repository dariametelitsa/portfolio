import React from 'react';
import styled from "styled-components";
import { ProjectCard, ProjectCardPropsType } from "./projectCard/ProjectCard";

type ProjectsGalleryPropsType = {
    projects: Array<ProjectCardPropsType>,
    size?: number,
}
export const ProjectsGallery = (props: ProjectsGalleryPropsType) => {
    return (
        <GridWrap role={'group'} >
            {
                props.projects.slice(0, props.size || props.projects.length).map((el: ProjectCardPropsType) => {
                    return (<ProjectCard src={el.src} tags={el.tags} title={el.title} text={el.text}
                                         buttonText={el.buttonText} projectLink={el.projectLink}/>);
                })
            }
        </GridWrap>
    );
};

const GridWrap = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 16px;
    align-content: start;
`
