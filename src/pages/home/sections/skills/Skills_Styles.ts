import logo from '../../../../assets/images/decoration/Logo1.svg';
import dots from '../../../../assets/images/decoration/Dots.svg';
import styled from "styled-components";
import { mainTheme } from "../../../../components/styles/Theme";

const Skills = styled.section`
`

const SkillsBlock = styled.ul`
    margin-left: auto;
    display: flex;
    gap: 16px;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap-reverse;
    height: 300px;
    flex-grow: 0;

    @media not ${mainTheme.media.decoration} {
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
        height: auto;

        li {
            flex-grow: 1;
        }
    }
    
`

const Pictures = styled.div`
    @media ${mainTheme.media.decoration} {
        position: relative;
        top: -30px;
        width: 382px;
        height: 282px;
        background-image: url(${logo}), url(${dots}), url(${dots});
        background-position: 48px 164px, 210px 143px, 32px 38px;
        background-repeat: no-repeat;
        background-size: 30%, 17%, 17%;
        object-fit: contain;

        &::before,
        &::after {
            content: '';
            position: absolute;
            border: 1px solid ${mainTheme.colors.grey.light};
        }

        &::before {
            width: 86px;
            height: 86px;
            right: 36px;
        }

        &::after {
            width: 52px;
            height: 52px;
            right: 0;
            bottom: 37px;
        }
    }
`

export const S = {
    Skills,
    SkillsBlock,
    Pictures,
}