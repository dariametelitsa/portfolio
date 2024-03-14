import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Footer } from "./layout/footer/Footer";
import { AsideBar } from "./layout/asideBar/AsideBar";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Projects } from "./pages/projects/Projects";
import { About } from "./pages/about/About";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <AsideBar/>
            <Routes>
                <Route path={'home'} element={<Home />} />
                <Route path={'projects'} element={<Projects/>} />
                <Route path={'about'} element={<About/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
