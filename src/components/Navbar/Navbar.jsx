import React, { state } from 'react'
import "./Navbar.css"
import Logo from "../../assets/Logo.svg"
import MenuIcon from "../../assets/MenuIcon.svg"




const Navbar = () => {
  // state = {clicked:false};
  // handleClick=()=>{
  //   this.setState({clicked:!this.state.clicked})
  // };
  
  return (
    
    <nav className='NavbarItems'>
      {/* <div>
          <img className='Logo' id='Navmenuicon'  src={Logo} ></img>
      </div> */}
      <ul className='navmenu'>
        <li className='nav-links'>
          <a href="">Home</a>
        </li>
        <li className='nav-links'>
          <a href="">Services</a>
        </li>
        <li className='nav-links'>
          <a href="">Protfolio</a>
        </li>
      </ul>
         <div>
          <img className='Logo' id='Navmenuicon'  src={Logo} ></img>
         </div>
      <ul className='navmenu'>
        <li className='nav-links'>
          <a href="">Testimonials</a>
        </li>
        <li className='nav-links'>
          <a href="">About Us</a>
        </li>
        <li className='nav-links'>
          <a href="">Contact Us</a>
        </li>
      </ul>
      <div className="menu-icon" >
      <img className='Logo' id='Navmenuicon'  src={MenuIcon} ></img>
      {/* <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i> */}
      </div>
    </nav>
  )
}

export default Navbar
