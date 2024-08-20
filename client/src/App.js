// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Login from "./pages/login"
import Home from "./pages/home"
// import Test from "./pages/test"

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/home" element = {<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
