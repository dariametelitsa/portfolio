import React from 'react';
import { PageTitle } from "../../components/pageTitle/PageTitle";
import { Info } from "./sections/info/Info";
import { Skills } from "./sections/skills/Skills";

export const About = () => {
    return (
        <main>
            <section>
                <PageTitle title={'about-me'} info={'Who am i?'}/>
                <Info/>
                <Skills/>
            </section>
        </main>
    );
};

