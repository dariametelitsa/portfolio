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
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Button as={'a'} href={props.projectLink}>{props.buttonText}</Button>
            </Description>
        </StyledProjectCard>
    );
};

const StyledProjectCard = styled.li `
    width: 100%;
    list-style-type: none;
    border: 1px solid ${mainTheme.colors.grey.light};
`

const Title = styled.h3 `
    font-weight: 500;
    font-size: ${mainTheme.fontSize.title};
`

const Text = styled.p `
    margin: 16px 0;
`

const Description = styled.div `
    padding: 16px;
`