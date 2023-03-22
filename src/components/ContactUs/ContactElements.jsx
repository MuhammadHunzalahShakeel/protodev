import styled from "styled-components";

export const Row = styled.div`
    background-color: #fff;
    display: flex;
    margin-top: 10%;
    margin-bottom: 10%;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
`;

export const Column1 = styled.div`
    flex: 1 1;
    margin-bottom: 30px;
    width: 50%;
    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const Column2 = styled.div`
    margin-top: 80px;
    width: 50%;
    span {
        font-size: 60px;
        font-weight: bolder;
        display: inline;
    }
    p {
        margin-right: 20%;
    }
    input {
        background-color: initial;
        border-style: hidden hidden groove;
        font-size: 18px;
        outline: none;
        width: 41%;
        margin-top: 5%;
    }
    button {
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        font: inherit;
        outline: inherit;
        padding: 0;
    }
    @media screen and (max-width: 760px) {
        width: 100%;
        margin-left: 10%;
        span {
            font-size: 36px;
        }
        p {
            margin-right: 10%;
        }
        input {
            width: 90%;
            margin-top: 5%;
            margin-left: 0%;
        }
        button {
            margin: auto;
            width: 90%;
        }
    }
`;

export const Right = styled.div`
    display: inline;
    @media screen and (max-width: 760px) {
        input {
            margin-top: 7%;
        }
    }
`;

export const Left = styled.div`
    margin-left: 30px;
    margin-top: 5%;
    display: inline;
    @media screen and (max-width: 760px) {
        margin-left: 0px;
        input {
            margin-top: 7%;
        }
    }
`;

export const Bottom = styled.div`
    // margin-left: 30px;
    // width: 100%;
    display: inline;
    input {
        width: 87%;
    }
    @media screen and (max-width: 760px) {
        input {
            margin-top: 15%;
            width: 90%;
        }
    }
`;

export const Column1Image = styled.img`
    height: 675px;
    margin-left: 100px;
    margin-top: 50px;
    width: 441px;
`;

export const Column2Image = styled.img`
    margin-left: 0;
    margin-right: 40%;
    margin-top: 15%;
    width: 58%;
    @media screen and (max-width: 760px) {
        display: flex;
        margin: auto;
        margin-top: 15%;
    }
`;