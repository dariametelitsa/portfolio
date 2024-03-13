import styled from "styled-components";
import { getKeyEventProps } from "@testing-library/user-event/dist/keyboard/getEventProps";

type FlexWrapperPropsType = {
  direction?: string,
  justify?: string,
  alighI?: string,
  gap?: string,
  wrap?: boolean,
}

export const FlexWrapper = styled.div<FlexWrapperPropsType> `
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "space-between"};
  align-items: ${props => props.alighI || "stretch"};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  gap: ${props => props.gap || '0'};
`