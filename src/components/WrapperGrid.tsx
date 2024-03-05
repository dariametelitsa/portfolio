import styled from "styled-components";

type WrapperGridPropsType = {
    column?: string,
}
export const WrapperGrid = styled.div<WrapperGridPropsType> `
    display: grid;
    grid-template-columns: repeat(${props => props.column || 3}, 1fr);
    gap: 16px;
`