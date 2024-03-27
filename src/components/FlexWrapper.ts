import styled from "styled-components";
import { FlexWrapperProps } from "../assets/Types";

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "space-between"};
  align-items: ${props => props.alighI || "stretch"};
  flex-wrap: ${props => props.wrap ? 'wrap' : 'nowrap'};
  gap: ${props => props.gap || '0'};
`