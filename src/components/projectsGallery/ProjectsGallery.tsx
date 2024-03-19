import React from 'react';
import { ProjectCard, ProjectCardPropsType } from "./projectCard/ProjectCard";
import { S } from "./ProjectsGallery_Styles";

type ProjectsGalleryPropsType = {
    projects: Array<ProjectCardPropsType>,
    size?: number,
}
export const ProjectsGallery: React.FC<ProjectsGalleryPropsType> = (props: ProjectsGalleryPropsType) => {
    return (
        <S.GridWrap role={'group'}>
            {
                props.projects.slice(0, props.size || props.projects.length).map((el: ProjectCardPropsType) => {
                    return (<ProjectCard src={el.src} tags={el.tags} title={el.title} text={el.text}
                                         buttonText={el.buttonText} projectLink={el.projectLink}/>);
                })
            }
        </S.GridWrap>
    );
};



