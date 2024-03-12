import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { ProjectCard, ProjectCardPropsType } from "../../../components/projectCard/ProjectCard";
import prChert from '../../../assets/images/projects/banner-1.png';
import prProtect from '../../../assets/images/projects/banner-2.jpeg';
import prKahoot from '../../../assets/images/projects/banner-3.jpeg';
import { GridWrapper } from "../../../components/GridWrapper";
import { mainTheme } from "../../../components/styles/Theme";
import { Container } from "../../../components/Container";

export const Projects = () => {
    return (
        <StyledProject>
            <Container>
                <FlexWrapper>
                    <SectionTitle line={'511px'}>projects</SectionTitle>
                    <Link href='#2'>View all &#126;&#126;&gt;</Link>
                </FlexWrapper>
                <GridWrapper role={'group'}>
                    {
                        ProjectsArr.map((el: ProjectCardPropsType) => {
                            return (<ProjectCard src={el.src} tags={el.tags} title={el.title} text={el.text}
                                                 buttonText={el.buttonText} projectLink={el.projectLink}/>);
                        })
                    }
                </GridWrapper>
            </Container>
        </StyledProject>
    );
};

const StyledProject = styled.section`
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 240px;
        right: -68px;
        width: 155px;
        height: 155px;
        border: 1px solid ${mainTheme.colors.grey.light};
    }

`
const Link = styled.a`
    color: inherit;
    text-decoration: none;
`

const ProjectsArr: Array<ProjectCardPropsType> = [
    {
        src: prChert,
        tags: ['HTML', 'SCSS', 'Python', 'Flask'],
        title: "ChertNodes",
        text: "Minecraft servers hosting",
        buttonText: "Live <~~>",
        projectLink: "#1",
    },
    {
        src: prProtect,
        tags: ['React', 'Express', 'Discord.js', 'Node.js,', 'HTML', 'SCSS', 'Python', 'Flask'],
        title: "ProtectX",
        text: "Discord anti-crash bot",
        buttonText: "Live <~~>",
        projectLink: "#2",
    },
    {
        src: prKahoot,
        tags: ['CSS', 'Express', 'Node.js'],
        title: "Kahoot Answers Viewer",
        text: "Get answers to your kahoot quiz",
        buttonText: "Live <~~>",
        projectLink: "#3",
    },
];