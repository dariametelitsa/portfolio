import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { Footer } from "./layout/footer/Footer";
import { AsideBar } from "./layout/asideBar/AsideBar";
import { Home } from "./pages/home/Home";

function App() {
    return (
        <div className="App">
            <Header/>
            <AsideBar/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
