import './App.css';
import UserProvider from './components/UserProvider';
import photoClarusway from "./assets/cw.svg"
import Logo from './components/Logo';
import React from 'react';

function App() {
  return (
    <div className="App">
      <img src={photoClarusway} alt="#"/>
        <UserProvider  />
      <Logo />
    </div>
  );
}

export default App;
