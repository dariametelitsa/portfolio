import React from 'react';
import './App.css';
import { Icon } from './components/icon/Icon';
import { Header } from './layout/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
     <Icon iconId='telegram' />
    </div>
  );
}

export default App;
