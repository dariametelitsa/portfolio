import React, { Component } from 'react';
import { AlternativeMain } from "./sections/alternativeMain/AlternativeMain";
import { Projects } from "./sections/projects/Projects";
import { Skills } from "./sections/skills/Skills";
import { About } from "./sections/about/About";
import { Contacts } from "./sections/contacts/Contacts";

export class Home extends Component {
    render() {
        return (
            <main>
                <AlternativeMain/>
                {/*<Main/>*/}
                <Projects/>
                <Skills/>
                <About/>
                <Contacts/>
            </main>
        );
    }
}
