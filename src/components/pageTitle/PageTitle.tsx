import React from 'react';
import { Container } from "../Container";
import styled from "styled-components";
import { mainTheme } from "../styles/Theme";
import { font } from "../styles/common";

type PageTitlePropsType = {
    title: string,
    info: string
}
export const PageTitle: React.FC<PageTitlePropsType> = (props: PageTitlePropsType) => {
    return (
        <Container>
            <Title>{props.title}</Title>
            <span>{props.info}</span>
        </Container>
    );
};

const Title = styled.h1 `
    ${font({weight: 500, Fmin: 26, Fmax: 32})}
    margin-bottom: 14px ;
    margin-top: 20px;
    color: ${mainTheme.colors.font};
    text-transform: lowercase;
    
    &::before {
        content: '/';
        color: ${mainTheme.colors.accent};
        letter-spacing: 2px;
    }
    
    span {
        ${font({Fmin: 14, Fmax: 16})}
    }
`