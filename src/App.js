import React from "react";
import {BrowserRouter,Link,Routes,Route, } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Services from "./components/Services/Services";
import Protfolio from "./components/Protfolio/Protfolio";
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Connect from './components/Connect/Connect';
import Footer from './components/Footer/Footer';
// import SubmitButton from './buttons/SubmitButton/SubmitButton';



function App() {
  return (
    <>
    <div className="backgroundiamge"></div>
    <Navbar></Navbar>
    <Home></Home>
    {/* <Aboutus></Aboutus>
    <Services></Services>
    <Protfolio></Protfolio>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Connect></Connect> */}
    {/* <Footer></Footer> */}
    
    </>
  );
}
// function App() {
//   return (
//     <BrowserRouter>
//         <Link to="#home" ></Link>
//         <Link to="#aboutus" ></Link>
//         <Link to="#services" ></Link>
//         <Link to="#testimonials" ></Link>
//         <Link to="#contact" ></Link>
//         <Navbar></Navbar>
//         <Home></Home>
//         <Aboutus></Aboutus>
//         <Services></Services>
        
//         <Testimonials></Testimonials>
//         <Contact></Contact>
//         <Connect></Connect>
//         <Footer></Footer>
//       </BrowserRouter>
//   );
// }

export default App;
