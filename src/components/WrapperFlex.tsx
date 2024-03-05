import styled from "styled-components";

type WrapperPropsType = {
  direction?: string,
  justify?: string,
  alighI?: string,
  wrap?: boolean,
}

export const WrapperFlex = styled.div<WrapperPropsType> `
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "space-between"};
  align-items: ${props => props.alighI || "stretch"};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
`