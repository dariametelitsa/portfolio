export type TabsStatusProps = 'All' | 'HTML' | 'React' | 'Styled-components' | 'SCSS' | 'CSS' | 'JS' | 'TS' | 'Figma';

export type TabMenuProps = {
    tabsItems: Array<TabsStatusProps>;
    changeFilterStatus: (value: TabsStatusProps) => void;
    currentFilterStatus: TabsStatusProps;
};

export type ProjectCardProps = {
    src?: string;
    tags: Array<string>;
    title: string;
    text: string;
    buttonText: string;
    projectLink: string;
    id: number;
};

export type SkillsCardProps = {
    title: string;
    skills: Array<string>;
    grow?: boolean;
};

export type QuoteProps = {
    quote: string;
    author: string;
};

export type FlexWrapperProps = {
    direction?: string;
    justify?: string;
    alighI?: string;
    gap?: string;
    wrap?: boolean;
};

export type IconProps = {
    iconId: string;
    width?: string;
    height?: string;
};

export type PageTitleProps = {
    title: string;
    info: string;
};

export type SectionTitleProps = {
    line?: string;
};

export type SocialMenuProps = {
    title: string;
    links: Array<SocialProps>;
};

export type SocialProps = {
    link: string;
    name: string;
    icon: string;
};

export type FontProps = {
    family?: string;
    weight?: number;
    color?: string;
    lineHeight?: number;
    Fmin?: number;
    Fmax?: number;
};

export type ProjectsGalleryProps = {
    projects: Array<ProjectCardProps>;
    size?: number;
};