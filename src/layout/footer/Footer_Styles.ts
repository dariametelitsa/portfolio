import styled from "styled-components";
import { mainTheme } from "../../components/styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";

const Footer = styled.footer`
    padding: 32px 0;
    border-top: 1px solid ${mainTheme.colors.grey.light};

    ${FlexWrapper} {
        justify-content: center;
    }
`

const Info = styled.div`
    margin-right: 50px;

    & svg {
        margin-right: 24px;
    }

    a {
        font-weight: 400;
        color: ${mainTheme.colors.grey.light};
        vertical-align: top;
    }

    p {
        margin-top: 16px;
        color: ${mainTheme.colors.font};
    }

    @media ${mainTheme.media.tablet} {
        margin-bottom: 50px;
    }
`

const Copyright = styled.small`
    display: block;
    margin-top: 48px;
    text-align: center;
`

export const S = {
    Footer,
    Info,
    Copyright
}