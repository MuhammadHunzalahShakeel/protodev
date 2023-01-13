import React, { state,Component } from 'react'
import "./Navbar.css"
import Logo from "../../assets/Logo.svg"


class Navbar extends Component {
  state = {clicked:false};
  handleClick=()=>{
    this.setState({clicked:!this.state.clicked})
  };
  render () {
    return (
      <nav className='NavbarItems'>
        <ul className='navmenu'>
          <li className='nav-links'>
            <a href="#home">Home</a>
          </li>
          <li className='nav-links'>
            <a href="#aboutus">About us</a>
          </li>
          <li className='nav-links'>
            <a href="#services" className='nav-links-services'>Services</a>
          </li>
        </ul>
           <div>
            <img className='Logo' id='Navmenuicon'  src={Logo} ></img>
           </div>
        <ul className={this.state.clicked ? "navmenu active" : "navmenu"}>
          <li className='nav-links' id='no-mobile1'>
            <a  onClick={this.handleClick} href="#home">Home</a>
          </li>
          <li className='nav-links' id='no-mobile2'>
            <a  onClick={this.handleClick} href="#aboutus">About us</a>
          </li>
          <li className='nav-links' id='no-mobile3'>
            <a onClick={this.handleClick} href="#services">Services</a>
          </li>
          <li className='nav-links'>
            <a  onClick={this.handleClick} href="#protfolio">Protfolio</a>
          </li>
          <li className='nav-links'>
            <a  onClick={this.handleClick} href="#testimonials">Testimonials</a>
          </li>
          <li className='nav-links'>
            <a onClick={this.handleClick} href="#contact">Contact Us</a>
          </li>
        </ul>
        <div className="menu-icon" onClick={this.handleClick}>
        <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    )
  }
}

export default Navbar
