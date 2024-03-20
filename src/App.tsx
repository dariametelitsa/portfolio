import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Footer } from "./layout/footer/Footer";
import { SideBar } from "./layout/sideBar/SideBar";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Projects } from "./pages/projects/Projects";
import { About } from "./pages/about/About";
import { Contacts } from "./pages/contacts/Contacts";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <SideBar/>
            <Routes>
                <Route path="/" element={<Navigate to={'/portfolio'}/>}/>
                <Route path="/portfolio">
                    <Route index element={<Home/>}/>
                    <Route path={'projects'} element={<Projects/>}/>
                    <Route path={'about'} element={<About/>}/>
                    <Route path={'contacts'} element={<Contacts/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
