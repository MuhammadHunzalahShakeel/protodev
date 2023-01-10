import React, { state,Component } from 'react'
import "./Navbar.css"
// import {BrowserRouter as Router, Link} from 'react-router-dom';
import Logo from "../../assets/Logo.svg"
import MenuIcon from "../../assets/MenuIcon.svg"
import { render } from '@testing-library/react'




class Navbar extends Component {
  state = {clicked:false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  };
  render () {
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
        <ul className={this.state.clicked ? "navmenu active" : "navmenu"}>
          <li className='nav-links' id='no-mobile1'>
            <a href="">Home</a>
          </li>
          <li className='nav-links' id='no-mobile2'>
            <a href="">Services</a>
          </li>
          <li className='nav-links' id='no-mobile3'>
            <a href="">Protfolio</a>
          </li>
          
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
        <div className="menu-icon" onClick={this.handleClick}>
        {/* <img className='Logo' id='Navmenuicon'  src={MenuIcon} ></img> */}
        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    )
  }
  
}

export default Navbar
