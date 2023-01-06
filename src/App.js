import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Services from "./components/Services/Services";

function App() {
  return (
    <>
    <div className="backgroundiamge"></div>
    <Navbar></Navbar>
    <Home></Home>
    <Aboutus></Aboutus>
    <Services></Services>
    </>
  );
}

export default App;
