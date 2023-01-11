import React from 'react'
import "./Footer.css"
import Logo from "../../assets/Logo.svg"

const Footer = () => {
  return (
    
    <section id='footer'>
    <div className="footer_container">
        <div className="footer_image">
            <img className='footer_logo' alt=''  src={Logo} ></img>
        </div>
        <ul className='footer_nav'>
            <li className="footer_links" id='footer_home'> <a href="#home">Home</a></li>
            <li className="footer_links" id='footer_services'><a href="#services">Services</a></li>
            <li className="footer_links" id='footer_portfolio'><a href="#protfolio">Protfolio</a></li>
            <li className="footer_links" id='footer_testimonials'><a href="#testimonials">Testimonials</a></li>
            <li className="footer_links" id='footer_about'><a href="#aboutus">About Us</a></li>
            <li className="footer_links" id='footer_contact'><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="footer_line"></div>
        <p className="footer_paragraph">© 2023 . All Rights Reserved by ProtoDev.Co</p>
      </div>
    </section>
  
  )
}

export default Footer
