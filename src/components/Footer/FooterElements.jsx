import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Row = styled.div`
    // background-image: url(/static/media/ConnectBackground.svg);
    height: 13.75rem;
    color: #fff;
    padding-left: 3%;
    position: relative;
    p {
        display: inline-block;
        font-size: 3.75rem;
        font-weight: bold;
        font-family: system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    }
    @media screen and (max-width: 760px) {
        p {
            font-size: 2.25rem;
            // disply: grid;
            text-align: center;
        }
    }
`;

export const Container = styled.div`
    p {
        margin-left: 5%;
    }
    @media screen and (max-width: 760px) {
        p {
            margin: auto;
            width: 100%;
            margin-top: 5%;
        }
    }
`;

export const Icons = styled.div`
    margin-left: 20%;
    display: inline-block;
    cursor: pointer;
    @media screen and (max-width: 760px) {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        width: 100%;
        margin-top: 5%;
    }
`;

export const Icon = styled(LinkR)`
    display: inline-block;
    cursor: pointer;
`;

export const Nav = styled.nav`
    // height: 4.7rem;
    margin: auto;
    width: 60%;
    // margin-top: -4.7rem;
    // display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    // position: sticky;
    top: 0;
    margin-top: 6%;
    // z-index: 10;
    @media screen and (max-width: 760px) {
        margin-left: 2%;
    }
`;

export const NavLogo = styled(LinkR)`
    font-family: system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    color: #fff;
    font-weight: bold;
    // display: flex;
    // align-items: center;
    text-decoration: none;
    // padding: 1rem 13% 0 13%;
    // height: 100%;
    // cursor: pointer;
    font-size: 1.7rem;
`;

export const NavMenu = styled.ul`
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    // text-align: center;
    // margin-right: -22px;
    @media screen and (max-width: 760px) {
        display: grid;
        padding-left: 10vw;
    }
`;

export const NavItem = styled.li`
    // padding-left: 5%;
    // padding-right: 5%;
    // height: 4.7rem;
    
    // @media screen and (max-width: 980px) {
    //     display: none;
    // }
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    // width: 12vh;
    // padding: 0 2.5rem;
    @media screen and (max-width: 760px) {
        padding: 0.5rem 0;
    }
    cursor: pointer;
    &:hover {
        color: #5aff15;
    }
`;

export const Line = styled.div`
    background-image: linear-gradient(90deg,#0e0638,#007aff,#5aff15);
    height: 1px;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    margin-top: 6%;
`;

export const Bar = styled.div`
    // background-image: url(/static/media/FooterBackground.svg);
    height: 22rem;
    color: #fff;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
`;

export const FooterImage = styled.div`
    width: 7vh;
    height: 7vh;
    cursor: pointer;
    border-radius: 50%;
    background-color: black;
    z-index: -1;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    font-size: 4vh;
    &:hover{
        background-color: white;
        color: rgb(0, 122, 255);
    }
    @media screen and (max-width: 760px) {
        margin-right: 0.5rem;
        font-size: 3vh;
        width: 5vh;
        height: 5vh;
    }
`;

export const NavLogoImage = styled.img`
    width: 15%;
    @media screen and (max-width: 760px) {
        width: 35%;
    }
`;

export const BottomIcon = styled.img`
    position: absolute;
    right: 0;
    width: 25vw;
    bottom: 0;
    @media screen and (max-width: 760px) {
        width: 40vw;
    }
`;