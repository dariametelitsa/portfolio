import React from 'react';
import styled from "styled-components";
import {mainTheme} from "../styles/Theme";

export const TagCloud = (props: {tags: Array<string>}) => {
    return (
        <StyledTagCloud>
            {
                props.tags.map((el:string) => {
                    return (<span>{el}</span>);
                })
            }
        </StyledTagCloud>
    );
};

const StyledTagCloud = styled.p `
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 8px;
    line-height: 1.5;
    border-top: 1px solid ${mainTheme.colors.grey.light};
    border-bottom: 1px solid ${mainTheme.colors.grey.light};
`