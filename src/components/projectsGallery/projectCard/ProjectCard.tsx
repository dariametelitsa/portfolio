import React from 'react';
import { Photo } from "../../Photo";
import { Button } from "../../Button";
import { TagCloud } from "../tagCloud/TagCloud";
import { S } from "../ProjectsGalleryStyles";
import { ProjectCardProps } from "../../../assets/Types";


export const ProjectCard: React.FC<ProjectCardProps> = (props: ProjectCardProps) => {
    return (
        <S.ProjectCard>
            {/*{props.src ? <Photo src={props.src} height={'201px'} alt={props.title +`.`} /> : null}*/}
            {props.src && <Photo src={props.src} height={'201px'} alt={props.title +`.`} />}
            <TagCloud tags={props.tags} />
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <Button as={'a'} href={props.projectLink}>{props.buttonText}</Button>
            </S.Description>
        </S.ProjectCard>
    );
};

