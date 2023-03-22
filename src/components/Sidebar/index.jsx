import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarMenu,
    SidebarLink,
} from "./SidebarElements"

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
                <SidebarMenu>
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