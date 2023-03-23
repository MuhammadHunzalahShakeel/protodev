import React from "react";
import { NavImage, NavLogo } from "../Navbar/NavbarElements";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
} from "./SidebarElements"
import img from "/static/media/Logo.svg";
import MenuCross from "/static/media/MenuCross.svg";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", margin: "0 2rem", marginTop: "3rem"}}>
            {/* <NavLogo to="/"> */}
                <NavImage src={img}></NavImage>
            {/* </NavLogo> */}
            <Icon onClick={toggle}>
                {/* <CloseIcon /> */}
                <img style={{paddingBottom: "2px"}} src={MenuCross}/>
            </Icon>
            </div>
                <SidebarMenu style={{marginTop: "3.5rem"}}>
                    <SidebarLink to="#home" onClick={toggle}>Home</SidebarLink>
                    <SidebarLink to="#aboutus" onClick={toggle}>About us</SidebarLink>
                    <SidebarLink to="#services" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="#portfolio" onClick={toggle}>Portfolio</SidebarLink>
                    <SidebarLink to="#testimonials" onClick={toggle}>Testimonials</SidebarLink>
                    <SidebarLink to="#contactus" onClick={toggle}>Contact Us</SidebarLink>
                </SidebarMenu>
        </SidebarContainer>
    );
}
export default Sidebar;