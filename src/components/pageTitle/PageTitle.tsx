import React from 'react';
import { Container } from "../Container";
import styled from "styled-components";
import { mainTheme } from "../styles/Theme";

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
    margin-bottom: 14px ;
    margin-top: 20px;
    color: ${mainTheme.colors.font};
    font-size: ${mainTheme.fontSize.headline};
    font-weight: 500;
    text-transform: lowercase;
    
    &::before {
        content: '/';
        color: ${mainTheme.colors.accent};
        letter-spacing: 2px;
    }
`