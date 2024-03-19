import styled from "styled-components";
import { mainTheme } from "./styles/Theme";

export const Container = styled.div `
    max-width: 1054px;
    min-height: 100%;
    width: 100%;
    padding: 0 ${mainTheme.containerPad};
    margin: 0 auto;
`