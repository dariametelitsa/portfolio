import { ProjectCardPropsType } from "../components/projectsGallery/projectCard/ProjectCard";
import prChert from "./images/projects/banner-1.png";
import prProtect from "./images/projects/banner-2.jpeg";
import prKahoot from "./images/projects/banner-3.jpeg";
import prKotik from "./images/projects/banner-4.jpeg";
import prPortfolio from "./images/projects/banner-5.png";
import { SkillsCardPropsType } from "../components/skillsCard/SkillsCard";

export const projectsBig: Array<ProjectCardPropsType> = [
    {
        src: prChert,
        tags: ['HTML', 'SCSS', 'Python', 'Flask'],
        title: "ChertNodes",
        text: "Minecraft servers hosting",
        buttonText: "Live ~~>",
        projectLink: "#1",
    },
    {
        src: prProtect,
        tags: ['React', 'Express', 'Discord.js', 'Node.js,', 'HTML', 'SCSS', 'Python', 'Flask'],
        title: "ProtectX",
        text: "Discord anti-crash bot",
        buttonText: "Live ~~>",
        projectLink: "#2",
    },
    {
        src: prKahoot,
        tags: ['CSS', 'Express', 'Node.js'],
        title: "Kahoot Answers Viewer",
        text: "Get answers to your kahoot quiz",
        buttonText: "Live ~~>",
        projectLink: "#3",
    },
    {
        src: prKotik,
        tags: ['HTML', 'CSS', 'JS'],
        title: "Kotik Bot",
        text: "Multi-functional discord bot",
        buttonText: "Live ~~>",
        projectLink: "#4",
    },
    {
        src: prPortfolio,
        tags: ['Vue', 'TS', 'Node.js'],
        title: "Portfolio",
        text: "You’re using it rn",
        buttonText: "Live ~~>",
        projectLink: "#5",
    },
];

export const projectsSmall: Array<ProjectCardPropsType> = [
    {
        tags: ['Discord.js', 'TS', 'JS'],
        title: "Bot boilerplate",
        text: "Start creating scalable discord.js bot with typescript in seconds",
        buttonText: "Github ~~>",
        projectLink: "#1",
    },
    {
        tags: ['VUE', 'CSS', 'JS'],
        title: "My blog",
        text: "Front-end of my future blog website written in vue. Front-end of my future blog website written in vue",
        buttonText: "Github ~~>",
        projectLink: "#2",
    },
    {
        tags: ['Figma'],
        title: "Chess pro",
        text: "Figma landing page about service for viewing chess tournaments",
        buttonText: "Figma ~~>",
        projectLink: "#3",
    },
    {
        tags: ['Figma'],
        title: "Crash protect website",
        text: "Figma template for website about anti-raid, anti-crash discord bot",
        buttonText: "Figma ~~>",
        projectLink: "#4",
    },
    {
        tags: ['HTML', 'CSS'],
        title: "CSS expirements",
        text: "Collection of my different little projects in css",
        buttonText: "Live ~~>",
        projectLink: "#5",
    },
    {
        tags: ['Lua', 'NeoVim'],
        title: "Web Dev nvim config",
        text: "Config for neovim perfect for web developer",
        buttonText: "Github ~~>",
        projectLink: "#6",
    },
    {
        tags: ['Python', 'Quart', 'HTML'],
        title: "Ooku",
        text: "Simple link shortener with auth",
        buttonText: "Live ~~>",
        projectLink: "#7",
    },
    {
        tags: ['Figma'],
        title: "School website",
        text: "Figma template website for my school",
        buttonText: "Figma ~~>",
        projectLink: "#8",
    },
];


export const skillsArr: Array<SkillsCardPropsType> = [
    {
        title: 'Languages',
        skills: ['TypeScript', 'Lua', 'Python', 'Javascript'],
    },
    {
        title: 'Others',
        skills: ['HTML', 'CSS', 'EJS', 'SCSS', 'REST', 'Jinja'],
    },
    {
        title: 'Databases',
        skills: ['SQLite', 'PostgreSQL', 'Mongo'],
    },
    {
        title: 'Frameworks',
        skills: ['React', 'Vue', 'Disnake', 'Discord.js', 'Flask', 'Express.js'],
    },
    {
        title: 'Tools',
        skills: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome'],
    },

];
