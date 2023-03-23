import styled from "styled-components"
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    align-items: center;
    background-image: url(/static/media/NavBackground.svg);
    display: flex;
    font-size: 1.2rem;
    height: 96px;
    justify-content: space-between;
    padding: 0 110px;
    position: relative;
    width: 80%;
    margin: auto;
    z-index: 1;
    @media screen and (max-width: 980px) {
        display: flex;
        padding: 0 7%;
        z-index: 1;
    }
`;

export const NavLogo = styled(LinkR)`
    // font-family: system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    // color: #fff;
    // font-weight: bold;
    // display: flex;
    // align-items: center;
    // text-decoration: none;
    // padding: 1rem 13% 0 13%;
    // height: 100%;
    // cursor: pointer;
    // font-size: 1.7rem;
    @media screen and (max-width: 760px) {
        margin-top: 2rem;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 980px) {
        display: block;
        color: #fff;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    // grid-gap: 60px;
    // align-items: center;
    // display: grid;
    // grid-template-columns: repeat(3,auto);
    // list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    @media screen and (max-width: 980px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    display: list-item;
    text-align: -webkit-match-parent;
    
    @media screen and (max-width: 980px) {
        display: none;
    }
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    font-family: Neue Machina;
    margin-left: 0;
    // margin-right: 1rem;
    padding-bottom: 1.7rem;
    padding-top: 1.7rem;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    &:hover {
        color: #5aff15;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 4.7rem;
    z-index: 1;
    width: 100%;
    padding: 0 1.5rem;
    max-width: 68.75rem;
`;

export const NavImage = styled.img`
    cursor: pointer;
    justify-self: center;
    text-align: center;
    width: 10rem;
    @media screen and (max-width: 980px) {
        img {
            margin-left: 0;
        }
    }
`;