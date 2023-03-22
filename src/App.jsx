import React, { lazy, useState } from 'react'
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
const Sidebar = lazy(() => import('./components/Sidebar'));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./components/Home"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/ContactUs"));
const Portfolio = lazy(() => import("./components/Portfolio"));
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./components/Home";
// import AboutUs from "./components/AboutUs";
// import Services from "./components/Services";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/ContactUs";
// import Portfolio from "./components/Portfolio";

function App() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  }
  return (
    <Router>
      <Suspense>
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
      </Suspense>
    </Router>
  )
}

export default App