import styled from "styled-components";
import { mainTheme } from "../../../../components/styles/Theme";

const Photo = styled.div`
    position: relative;
    transform: translateY(-13%);

    img {
        position: relative;
        border-bottom: 1px solid ${mainTheme.colors.accent};

        @media ${mainTheme.media.tablet} {
            margin: 0 auto;
            object-fit: contain;
        }
    }

    @media ${mainTheme.media.tablet} {
        width: 100%;
        margin-top: 50px;
        transform: translateY(0);
    }
`

const Text = styled.div`
    width: 45%;

    p {
        padding-bottom: 27px;
        line-height: 1.5;
    }

    @media ${mainTheme.media.tablet} {
        width: 100%;
    }
`

export const S = {
    Photo,
    Text
}