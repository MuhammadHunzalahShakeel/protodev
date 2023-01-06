import React from 'react'
import "./Footer.css"
import Logo from "../../assets/Logo.svg"

const Footer = () => {
  return (
    <>
      <div className="footer_container">
        <div className="footer_image">
            <img className='footer_logo' alt=''  src={Logo} ></img>
        </div>
        <ul className='footer_nav'>
            <li className="footer_links" id='footer_home'>Home</li>
            <li className="footer_links" id='footer_about'>About Us</li>
            <li className="footer_links" id='footer_services'>Services</li>
            <li className="footer_links" id='footer_portfolio'>Portfolio</li>
            <li className="footer_links" id='footer_testimonials'>Testimonials</li>
            <li className="footer_links" id='footer_contact'>Contact Us</li>
        </ul>
        <div className="footer_line"></div>
        <p className="footer_paragraph">© 2023 . All Rights Reserved by ProtoDev.Co</p>
      </div>
        
    </>
  )
}

export default Footer
