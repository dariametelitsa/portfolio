import styled from "styled-components";
import { mainTheme } from "../styles/Theme";

const Title = styled.h4`
    margin-bottom: 12px;
    font-weight: 500;
    font-size: ${mainTheme.fontSize.title};
    color: ${mainTheme.colors.font};
`

const SocialMenu = styled.div`
    ul {
        display: flex;
        gap: 8px;
    }

    @media ${mainTheme.media.tablet} {
        text-align: center;
    }
`

export const S = {
    SocialMenu,
    Title
}