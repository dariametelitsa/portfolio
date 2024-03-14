import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Main } from './pages/home/sections/main/Main';
import { Projects } from "./pages/home/sections/projects/Projects";
import { Skills } from "./pages/home/sections/skills/Skills";
import { About } from "./pages/home/sections/about/About";
import { Contacts } from "./pages/home/sections/contacts/Contacts";
import { Footer } from "./layout/footer/Footer";
import { AsideBar } from "./layout/asideBar/AsideBar";
import { AlternativeMain } from "./pages/home/sections/alternativeMain/AlternativeMain";

function App() {
    return (
        <div className="App">
            <Header/>
            <AsideBar/>
            <main>
                <AlternativeMain/>
                {/*<Main/>*/}
                <Projects/>
                <Skills/>
                <About/>
                <Contacts/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
