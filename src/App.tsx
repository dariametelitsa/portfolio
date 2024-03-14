import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Footer } from "./layout/footer/Footer";
import { AsideBar } from "./layout/asideBar/AsideBar";
import { Home } from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/home/sections/main/Main";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <AsideBar/>
            <Routes>
                <Route path={'home'} element={<Home />} />
                <Route path={'projects'} element={<Main/>} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
