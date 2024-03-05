import React from 'react';
import styled from 'styled-components';
import {SectionTitle} from "../../../components/SectionTitle";
import {WrapperFlex} from "../../../components/WrapperFlex";
import {ProjectCard, ProjectCardPropsType} from "../../../components/projectCard/ProjectCard";
import prChert from './../../../assets/images/banner-1.png';
import prProtect from './../../../assets/images/banner-2.jpeg';
import prKahoot from './../../../assets/images/banner-3.jpeg';
import {WrapperGrid} from "../../../components/WrapperGrid";

export const Projects = () => {
    return (
        <StyledProject>
            <WrapperFlex>
                <SectionTitle line={'511px'}>projects</SectionTitle>
                <Link href='#2'>View all &#126;&#126;&gt;</Link>
            </WrapperFlex>
            <WrapperGrid>
                {
                ProjectsArr.map((el:ProjectCardPropsType) => {
                    return (<ProjectCard src={el.src} tags={el.tags} title={el.title} text={el.text} buttonText={el.buttonText} projectLink={el.projectLink} />);
                })
            }
            </WrapperGrid>
        </StyledProject>
    );
};

const StyledProject = styled.section `
    background-color: inherit;
`
const Link = styled.a `
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
        tags: ['React', 'Express', 'Discord.js', 'Node.js,','HTML', 'SCSS', 'Python', 'Flask'],
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