import styled from "styled-components";
import {FaTimes} from "react-icons/fa";
import {Link as LinkR} from "react-router-dom";
import {Link as LinkS} from "react-scroll";

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #02002c;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    // align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    // position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

// export const NavLogo = styled(LinkR)`
//     @media screen and (max-width: 760px) {
//         margin-top: 2rem;
//         margin-left: -1.5rem;
//     }
// `;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    // align-items: center;
    // justify-content: center;
    font-size: 1.2rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    &:hover {
        color: #05b52b;
        transition: 0.2s ease-in-out;
    }
`;

export const NavLogo = styled(LinkR)`
    font-family: system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    color: black;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem 13% 0 13%;
    height: 100%;
    cursor: pointer;
    font-size: 1.7rem;
    @media screen and (max-width: 980px) {
        font-size: 1.7rem;
        padding: 1rem 0 0 0;
    }
`;