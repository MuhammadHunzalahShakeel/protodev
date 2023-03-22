import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import img from "/static/media/Logo.svg";
import {
    Nav,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavImage
} from "./NavbarElements"

const Navbar = ({ toggle }) => {
    const navigate = useNavigate();
    const navigateToProfile = () => {
        navigate("/");
    };
    const toggleHome = () => {
        animateScroll.scrollToTop();
    }
    return (
        <>
        <Nav>
            {/* <NavbarContainer> */}
                <MobileIcon onClick={toggle}>
                    <FaBars style={{width: "60%", marginTop: "30%"}} />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks onClick={navigateToProfile} to="#home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        // offset={-80}
                        >Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={navigateToProfile} to="#aboutus"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        // offset={-80}
                        >About us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks style={{marginRight: "0px"}}
                        onClick={navigateToProfile} to="#services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        // offset={-80}
                        >Services</NavLinks>
                    </NavItem>
                </NavMenu>
                    <NavLogo to="/" onClick={toggleHome}>
                        <NavImage src={img}></NavImage>
                    </NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks onClick={navigateToProfile} to="#portfolio"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        // offset={-80}
                        >Portfolio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={navigateToProfile} to="#testimonials"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        // offset={-80}
                        >Testimonials</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick={navigateToProfile} to="#contactus"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        // offset={-80}
                        >Contact Us</NavLinks>
                    </NavItem>
                </NavMenu>
            {/* </NavbarContainer> */}
        </Nav>
        </>
    );
}
export default Navbar;