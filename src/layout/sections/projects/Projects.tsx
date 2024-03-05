import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from "../../../components/SectionTitle";
import {Wrapper} from "../../../components/Wrapper";

export const Projects = () => {
    return (
        <StyledProject>
            <Wrapper>
                <SectionTitle line={'190px'}>projects</SectionTitle>
                <Link href='#2'>View all &#126;&#126;&gt;</Link>
            </Wrapper>
        </StyledProject>
    );
};

const StyledProject = styled.section `
    background-color: inherit;
`
const Link = styled.a `
    color: inherit;
    text-decoration: none;
`