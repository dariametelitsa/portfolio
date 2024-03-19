import styled from "styled-components";
import { mainTheme } from "../styles/Theme";

const SkillsCard = styled.li<{ grow?: boolean }>`
    width: 192px;
    flex-grow: ${props => props.grow ? 1 : 0};
    list-style-type: none;
    border: 1px solid ${mainTheme.colors.grey.light};
`;

const Title = styled.h4`
    padding: 8px;
    font-weight: 600;
    color: ${mainTheme.colors.font};
    border-bottom: 1px solid ${mainTheme.colors.grey.light};
`;

const Skills = styled.strong`
    display: block;
    padding: 8px;
    font-weight: 400;
    line-height: 1.5;
`;

export const S = {
    SkillsCard,
    Title,
    Skills,
}