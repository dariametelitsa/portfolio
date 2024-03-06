import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string,
  justify?: string,
  alighI?: string,
  wrap?: boolean,
}

export const FlexWrapper = styled.div<FlexWrapperPropsType> `
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "space-between"};
  align-items: ${props => props.alighI || "stretch"};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
`