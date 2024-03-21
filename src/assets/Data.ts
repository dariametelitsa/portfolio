import { ProjectCardPropsType } from "../components/projectsGallery/projectCard/ProjectCard";
import prChert from "./images/projects/banner-1.png";
import prProtect from "./images/projects/banner-2.jpeg";
import prKahoot from "./images/projects/banner-3.jpeg";
import prKotik from "./images/projects/banner-4.jpeg";
import prPortfolio from "./images/projects/banner-5.png";
import { SkillsCardPropsType } from "../components/skillsCard/SkillsCard";
import { TabsStatusType } from "../components/tabsMenu/TabsMenu";

export const tabsItems: Array<TabsStatusType> = ['All', 'HTML', 'React', 'Styled-components', 'SCSS', 'CSS', 'JS', 'TS', 'Figma'];

export const projectsBig: Array<ProjectCardPropsType> = [
    {
        src: prChert,
        tags: ['HTML', 'SCSS', 'TS', 'React'],
        title: "ChertNodes",
        text: "Minecraft servers hosting",
        buttonText: "Live ~~>",
        projectLink: "#1",
    },
    {
        src: prProtect,
        tags: ['React', 'Styled-components', 'React,', 'HTML', 'SCSS', 'TS'],
        title: "ProtectX",
        text: "Discord anti-crash bot",
        buttonText: "Live ~~>",
        projectLink: "#2",
    },
    {
        src: prKahoot,
        tags: ['React', 'TS', 'Styled-components'],
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
        tags: ['Vue', 'TS', 'React'],
        title: "Portfolio",
        text: "You’re using it rn",
        buttonText: "Live ~~>",
        projectLink: "#5",
    },
];

export const projectsSmall: Array<ProjectCardPropsType> = [
    {
        tags: ['React', 'TS', 'JS'],
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
        tags: ['React', 'SCSS'],
        title: "Web Dev nvim config",
        text: "Config for neovim perfect for web developer",
        buttonText: "Github ~~>",
        projectLink: "#6",
    },
    {
        tags: ['CSS', 'Quart', 'HTML'],
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

export const quotesArray = [
    {
        quote: 'With great power comes great electricity bill.',
        author: 'Dr. Who',
    },
    {
        quote: 'Они что, транслируют рекламу прямо в сон? — Да, а разве в двадцатом веке не было рекламы? — Была, но не во сне. Только по радио и телевидению. В журналах, фильмах, на спортивных играх, автобусах, молочных коробках, на майках, банданах и на небе, но не во сне! Ни за что!',
        author: 'Futurama',
    },
    {
        quote: 'Мне нравится, что там все люди были равны, будь они белые, чёрные, инопланетяне или даже женщины.',
        author: 'Futurama'
    },
    {
        quote: 'Когда мы убиваем в детях способность критически мыслить, говоря, что кролики появляются из шляп, мы создаем взрослых, которые верят в астрологию и гомеопатию.',
        author: 'The big bang theory',
    },
    {
        quote: 'Подумайте, что является основной проблемой при охоте на монстров? — Ты второстепенный персонаж и умираешь в течение первых пяти минут фильма.',
        author: 'Gravity Falls',
    },
    {
        quote: 'Ты говоришь как прибожек, выглядишь как прибожек... и просто ты прибожек.',
        author: 'The Witcher',
    },
    {
        quote: 'Лиза, знаешь как я дожила до своих лет? С помощью двух вещей: слепой веры и красного вина.',
        author: 'The Simpsons',
    },
    {
        quote: 'Ковер задавал тон всей комнате.',
        author: 'The Big Lebowski',
    },
    {
        quote: `— Ты спятил! — И слава богу, нормальный не пошёл бы на такое.`,
        author: 'Pirates of the Caribbean',
    },
    {
        quote: 'Вселенная настолько велика, Морти, что ничего на свете не имеет значения!',
        author: 'Rick and Morty',
    },
    {
        quote: 'В мире не хватит ромашкового чая, чтобы успокоить ярость в моей груди.',
        author: 'The big bang theory',
    },
    {
        quote: 'План А сработал. План В провалился. Вся надежда оставалась на план С, у которого был лишь один недостаток: вообще-то Кроули успел спланировать только два варианта.',
        author: 'Good Omens',
    },
    {
        quote: 'Можно гадать весь день, но наука даёт более логичное объяснение: в Бин вселился демон!',
        author: 'Disenchantment',
    },
];
