import styled from "styled-components";

export const Box = styled.div`
    background-image: url(/static/media/TestimonialsBackground.svg);
    height: 590px;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    @media screen and (max-width: 760px) {
        background-image: none;
        height: 15%;
    }
`;

export const Heading = styled.div`
    display: block;
    font-size: 60px;
    font-weight: bolder;
    line-height: 100px;
    mix-blend-mode: normal;
    padding-top: 10%;
    text-align: center;
    text-transform: capitalize;
    @media screen and (max-width: 760px) {
        font-size: 36px;
        font-weight: bolder;
        line-height: normal;
        margin-left: 25%;
        width: 200px;
    }
`;

export const Row = styled.div`
    display: flex;
    position: relative;
`;

export const Back = styled.img`
    display: block;
    height: 55%;
    margin-left: auto;
    margin-right: auto;
    width: 65%;
    @media screen and (max-width: 760px) {
        margin-top: 10%;
        width: 80%;
    }
`;

export const Quote = styled.div`
    p {
        color: #fff;
        left: 45%;
        position: absolute;
        right: 24%;
        top: 40%;
    }
    @media screen and (max-width: 760px) {
        p {
            font-size: 10px;
            left: 25%;
            top: 38%;
            width: 60%;
        }
    }
`;

export const Forward = styled.div`
    left: 76%;
    position: absolute;
    top: 70%;
    cursor: pointer;
    width: 38px;
    @media screen and (max-width: 760px) {
        top: 73%;
        width: 25px;
    }
`;

export const Backward = styled.div`
    left: 72%;
    position: absolute;
    top: 70%;
    cursor: pointer;
    width: 38px;
    @media screen and (max-width: 760px) {
        left: 68%;
        top: 73%;
        width: 25px;
    }
`;

export const ForwardImage = styled.img`
    width: 100%;
`;

export const BackwardImage = styled.img`
    width: 100%;
`;

export const QuoteImage = styled.img`
    left: 45%;
    position: absolute;
    right: 24%;
    top: 25%;
    width: 50px;
    @media screen and (max-width: 760px) {
        left: 25%;
        width: 30px;
    }
`;