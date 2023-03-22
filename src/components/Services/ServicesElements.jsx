import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    margin-bottom: 5%;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    h1 {
        font-size: 60px;
        font-weight: bolder;
        margin-top: 10%;
        text-align: center;
    }
    p {
        margin-bottom: 5%;
        margin-left: 20%;
        margin-right: 20%;
        text-align: center;
    }
    hr {
        background-color: #0e0638;
        height: 1px;
        width: 94%;
    }
    @media screen and (max-width: 760px) {
        h1 {
            font-size: 36px;
        }
        p {
            margin-bottom: 5%;
            margin-left: 10%;
            margin-right: 10%;
            text-align: center;
        }
    }
`;

export const Row = styled.div`
    display: flex;
    padding-bottom: 3%;
    padding-top: 3%;
    &:hover{
        background-color: #EFF7FF;
    }
`;

export const Column1 = styled.div`
    width: 33.33%;
    margin: 10px;
    @media screen and (max-width: 760px) {
        width: 50%;
    }
`;

export const Column2 = styled.div`
    width: 33.33%;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
        margin: 0;
        text-align: left;
    }
    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const Column3 = styled.div`
    width: 33.33%;
    display: flex;
    align-items: center;
    div {
        width: 6vw;
        height: 6vw;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 60%;
        font-size: 3vw;
    }
    @media screen and (max-width: 760px) {
        width: 50%;
        div {
            width: 10vw;
            height: 10vw;
            font-size: 5.5vw;
        }
    }
`;

export const Para = styled.div`
    margin-left: 10%;
    margin-top: 3%;
    width: 70%;
    p {
        margin: 0;
        width: 100%;
        padding-top: 0;
        text-align: left;
    }
    ul {
        grid-gap: 10px;
        align-items: center;
        color: #000;
        display: grid;
        grid-template-columns: repeat(2,auto);
        margin-top: 5%;
    }
    li {
        margin-bottom: 5%;
    }
    h4 {
        font-weight: normal;
    }
    @media screen and (max-width: 760px) {
        ul {
            display: block;
        }
    }
    @media screen and (min-width: 760px) {
        h4 {
            display: none;
        }
    }
`;

export const ServicesImage = styled.img`
    margin-left: 5%;
    width: 100%;
    @media screen and (max-width: 760px) {
        margin-left: 5px;
        width: 120%;
    }
`;