import React from 'react';
import styled from "styled-components";
import {TagCloud} from "../tagCloud/TagCloud";
import {Button} from "../Button";
import {Photo} from "../Photo";
import {mainTheme} from "../styles/Theme";

export type ProjectCardPropsType = {
    src: string,
    tags: Array<string>,
    title: string,
    text: string,
    buttonText: string,
    projectLink: string,
};
export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <StyledProjectCard>
            <Photo src={props.src} height={'201px'} alt={props.title +`.`} />
            <TagCloud tags={props.tags} />
            <div>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Button as={'a'} href={props.projectLink}>{props.buttonText}</Button>
            </div>
        </StyledProjectCard>
    );
};

const StyledProjectCard = styled.div `
    width: 100%;
    border: 1px solid ${mainTheme.colors.grey.light};
`

const Title = styled.h3 `
`

const Text = styled.p `

`
