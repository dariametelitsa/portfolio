import styled from "styled-components";
import { mainTheme } from "../styles/Theme";
import { Photo } from "../Photo";

const GridWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    gap: 16px;
    align-content: start;
`

const ProjectCard = styled.li`
    width: 100%;
    list-style-type: none;
    border: 1px solid ${mainTheme.colors.grey.light};
    align-self: start;

    & ${Photo} {
        border-bottom: 1px solid ${mainTheme.colors.grey.light};
    }
`

const Title = styled.h3`
    font-weight: 500;
    font-size: ${mainTheme.fontSize.title};
`

const Text = styled.p`
    margin: 16px 0;
    line-height: 1.5;
`

const Description = styled.div`
    padding: 16px;
`

export const S = {
    GridWrap,
    ProjectCard,
    Title,
    Text,
    Description
}

