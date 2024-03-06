import styled from "styled-components";

type GridWrapperPropsType = {
    column?: string,
}
export const GridWrapper = styled.ul<GridWrapperPropsType> `
    display: grid;
    font-weight: 400;
    grid-template-columns: repeat(${props => props.column || 3}, 1fr);
    gap: 16px;
`