import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Projects } from "./layout/sections/projects/Projects";
import { Skills } from "./layout/sections/skills/Skills";
import { About } from "./layout/sections/about/About";
import { Contacts } from "./layout/sections/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <Skills/>
            <About/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
