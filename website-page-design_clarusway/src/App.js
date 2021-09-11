import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
      <Switch>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
