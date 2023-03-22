import React from "react";
import { animateScroll } from "react-scroll";
import {GrLinkedinOption, GrInstagram, GrFacebookOption} from 'react-icons/gr';
import {BiEnvelope} from 'react-icons/bi';
import img1 from "/static/media/bottomIcon.svg";
import img2 from "/static/media/Logo.svg";
import {
    Row,
    NavLogo,
    Container,
    Icon,
    Nav,
    NavMenu,
    NavItem,
    NavLinks,
    Line,
    Bar,
    Icons,
    FooterImage,
    NavLogoImage,
    BottomIcon
} from "./FooterElements";

const Footer = () => {
    const toggleHome = () => {
        animateScroll.scrollToTop();
    }
    return(
        <>
        <Row>
            <Container>
                <p>Connect With Us</p>
                <Icons>
                    <Icon to="https://www.linkedin.com/company/protodev/" rel='noopener' target='_blank'><FooterImage><GrLinkedinOption/></FooterImage></Icon>
                    <Icon to="https://www.instagram.com/protodev.co/" rel='noopener' target='_blank'><FooterImage><GrInstagram/></FooterImage></Icon>
                    <Icon to="https://www.facebook.com/profile.php?id=100088868936092" rel='noopener' target='_blank'><FooterImage><GrFacebookOption/></FooterImage></Icon>
                    <Icon to="mailto:info@protodev.co" rel='noopener' target='_blank'><FooterImage><BiEnvelope/></FooterImage></Icon>
                </Icons>
                <BottomIcon src={img1}></BottomIcon>
            </Container>
            {/* <img src="/static/media/bottomIcon.svg"/> */}
        </Row>
        <Bar>
            <div style={{paddingTop: "6%"}}>
                <NavLogo to="/" onClick={toggleHome}>
                    <NavLogoImage src={img2}></NavLogoImage>
                </NavLogo>
            </div>
            <Nav>
            <NavMenu>
                    <NavItem>
                        <NavLinks to="#home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        // offset={-80}
                        >Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="#aboutus"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        // offset={-80}
                        >About us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="#services"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        // offset={-80}
                        >Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="#portfolio"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        // offset={-80}
                        >Portfolio</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="#testimonials"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        // offset={-80}
                        >Testimonials</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="#contactus"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        // offset={-80}
                        >Contact Us</NavLinks>
                    </NavItem>
                </NavMenu>
            </Nav>
            <Line></Line>
            <p style={{fontSize: "14px", marginTop: "2%"}}>© 2023 . All Rights Reserved by ProtoDev.Co</p>
        </Bar>
        </>
    );
}
export default Footer;