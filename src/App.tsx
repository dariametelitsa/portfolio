import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Footer } from "./layout/footer/Footer";
import { AsideBar } from "./layout/asideBar/AsideBar";
import { Home } from "./pages/home/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Projects } from "./pages/projects/Projects";
import { About } from "./pages/about/About";
import { Contacts } from "./pages/contacts/Contacts";

/*<Route path="/portfolio" >
    <Route index element={<Home />} />
    <Route path={'/projects'} element={<Projects/>}/>
    <Route path={'/about'} element={<About/>}/>
    <Route path={'/contacts'} element={<Contacts/>}/>
</Route>*/
function App() {
    return (
        <HashRouter>
            <Header/>
            <AsideBar/>
            <Routes>
                <Route path="/">
                    <Route index element={<Home/>}/>
                    <Route path={'projects'} element={<Projects/>}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'contacts'} element={<Contacts/>}/>
                </Route>
            </Routes>
            <Footer/>
        </HashRouter>
    );
}

export default App;
