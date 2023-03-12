import styled from "styled-components";
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const HeroRow = styled.div`
    // display: flex;
    // flex-direction: row;
    // flex-wrap: wrap;
    // width: 100%;
    // // padding: 4.5rem 7.5rem;
    // // padding-left: 10%;
    // background-image: url(/static/media/HomeBackground.svg);
    margin-top: -6rem;
    height: 45rem;
    // // @media screen and (max-width: 1075px) {
    // //     padding: 2.25rem 3rem;
    // // }
    @media screen and (max-width: 760px) {
        // background-size: cover;
        height: 49rem;
        display: block;
        margin-top: -10rem;
    }
    grid-gap: 10px;
    background-image: url(/static/media/HomeBackground.svg);
    background-repeat: no-repeat;
    display: flex;
    display: grid;
    grid-template-columns: repeat(2,50%);
    // height: 650px;
    position: relative;
`;
export const Link = styled(LinkS)`
`;

export const RightColumn = styled.div`
    // flex: 40%;
    // width: 50%;
    // font-weight: bolder;
    // padding-left: 10%;
    // padding-top: 10%;
    // // padding: 10px;
    // // padding-top: 70px;
    // // // height: 300px; 
    color: white;
    padding-top: 13%;
    h1 {
        margin: 50px 0 0;
        white-space: nowrap;
        // width: 100%;
        font-size: 5.625rem;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    }
    span {
        // display: block;
        // font-size: 90px;
        // margin: 0;
        // margin: 50px 0 0;
        // white-space: nowrap;
        // width: 50%;
        font-size: 5.625rem;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    }
    // @media screen and (max-width: 1075px) {
    //     padding-top: 0px;
    // }
    @media screen and (max-width: 760px) {
        margin-left: 10%;
        margin-top: 0%;
        padding-top: 40%;
        span {
            font-weight: bolder;
            font-size: 2.8125rem;
            width: 100%;
        }
        h1 {
            font-weight: bolder;
            font-size: 2.8125rem;
            width: 100%;
            
        }
    }
    font-weight: bolder;
    margin-left: 20%;
    margin-top: 10%;
    width: 50%;
`;

export const LeftColumn = styled.div`
    // flex: 40%;
    // color: #fff;
    // font-size: 12px;
    // // padding: 5rem;
    // // padding: 0 2rem;
    // padding-right: 10%;
    padding-top: 15%;
    p {
        // padding-left: 8rem;
        // padding-right: 4rem;
        color: #fff;
        font-size: 18px;
        font-weight: 200;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    }
    @media screen and (max-width: 760px) {
        margin-left: 10%;
        margin-right: 11%;
        margin-top: 0%;
        padding-top: 0%;
        right: 80px;
        // width: 50%;
        p {
            font-size: 20px;
            font-weight: 500;
            width: 130%;
        }
    }
    color: #fff;
    font-size: 12px;
    margin-left: 20%;
    margin-right: 11%;
    margin-top: 20%;
    right: 80px;
    width: 52%;
`;

export const Icon = styled(LinkR)`
    display: inline-block;
    // margin-left: 0;
    margin-right: -6%;
    margin-top: 12%;
    width: 22%;
    @media screen and (max-width: 760px) {
        width: 13%;
        margin-right: 8%;
    }
`;

export const IconImage = styled.div`
    width: 7vh;
    height: 7vh;
    border-radius: 50%;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4vh;
    &:hover{
        background-color: white;
        color: rgb(0, 122, 255);
    }
    @media screen and (max-width: 760px) {
        font-size: 2.5vh;
        width: 4vh;
        height: 4vh;
    }
`;

export const LinkImage = styled.img`
    width: 70%;
    cursor: pointer;
    @media screen and (max-width: 760px) {
        width: 100%;
    }
`;
    