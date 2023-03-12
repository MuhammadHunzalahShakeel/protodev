import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/ContactUs";
import Portfolio from "./components/Portfolio";

function App() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  }
  return (
    <Router>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <Routes>
      <Route path='/' exact element={[
      <Home />,
      <AboutUs />,
      <Services />,
      <Portfolio/>,
      <Testimonials/>,
      <Contact/>
      ]} />
    </Routes>
    <Footer />
  </Router>
  )
}

export default App