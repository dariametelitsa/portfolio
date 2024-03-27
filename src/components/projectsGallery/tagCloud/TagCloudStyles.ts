import styled from "styled-components";
import { mainTheme } from "../../styles/Theme";

const TagCloud = styled.p`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 8px;
    line-height: 1.5;
    border-bottom: 1px solid ${mainTheme.colors.grey.light};
`

export const S = {
    TagCloud
}