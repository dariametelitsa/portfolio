import React from 'react';
import styled from "styled-components";
import {Photo} from "../../Photo";
import {mainTheme} from "../../styles/Theme";
import { Button } from "../../Button";
import { TagCloud } from "../tagCloud/TagCloud";

export type ProjectCardPropsType = {
    src?: string,
    tags: Array<string>,
    title: string,
    text: string,
    buttonText: string,
    projectLink: string,
};
export const ProjectCard = (props: ProjectCardPropsType) => {
    return (
        <StyledProjectCard>
            {/*{props.src ? <Photo src={props.src} height={'201px'} alt={props.title +`.`} /> : null}*/}
            {props.src && <Photo src={props.src} height={'201px'} alt={props.title +`.`} />}
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
    align-self: start;
    
    & ${Photo} {
        border-bottom: 1px solid ${mainTheme.colors.grey.light};
    }
`

const Title = styled.h3 `
    font-weight: 500;
    font-size: ${mainTheme.fontSize.title};
`

const Text = styled.p `
    margin: 16px 0;
    line-height: 1.5;
`

const Description = styled.div `
    padding: 16px;
`