import React from 'react';
import { AlternativeMain } from "./sections/alternativeMain/AlternativeMain";
import { Projects } from "./sections/projects/Projects";
import { Skills } from "./sections/skills/Skills";
import { About } from "./sections/about/About";
import { Contacts } from "./sections/contacts/Contacts";
import { useScroll, useSpring } from "framer-motion";
import { ProgressBar } from "./sections/ProgressBar";

export const Home: React.FC = () => {
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main>
            <ProgressBar style={{scaleX}}/>
            <AlternativeMain/>
            {/*<Main/>*/}
            <Projects/>
            <Skills/>
            <About/>
            <Contacts/>
        </main>
    );
};