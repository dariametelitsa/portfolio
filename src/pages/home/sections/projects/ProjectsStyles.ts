import { mainTheme } from "../../../../components/styles/Theme";
import styled from "styled-components";

const Project = styled.section`
    position: relative;

    @media ${mainTheme.media.decoration} {
        overflow: hidden;

        &::after {
            content: '';
            position: absolute;
            top: 240px;
            right: -68px;
            width: 155px;
            height: 155px;
            border: 1px solid ${mainTheme.colors.grey.light};
        }
    }
`
const Link = styled.a`
    display: inline-block;
    text-decoration: none;
    
    transition: 0.2s ease-in-out;
    
     &:hover {
         color: ${mainTheme.colors.accent};;
         transform: translateX(-30px);
     }
`

export const S = {
    Project,
    Link
}