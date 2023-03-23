import { Link } from "react-router-dom";
import styled from "styled-components";

export const Back = styled.div`
    // background-image: url(/static/media/ProtfolioBackground.svg);
    padding-top: 5%;
    padding-bottom: 5%;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
`;

export const Row = styled.div`
    display: flex;
    margin: auto;
    margin: 0 10%;
    @media screen and (max-width: 760px) {
        flex-wrap: wrap;
    }
`;

export const Column1 = styled.div`
    flex: 60%;
    span {
        padding-top: 5%;
        color: #fff;
        font-size: 40px;
        font-weight: bolder;
    }
    p {
        color: #fff;
        margin-bottom: 5%;
    }
    @media screen and (max-width: 760px) {
        flex: 100%;
        span {
            font-size: 36px;
            font-weight: bolder;
        }
    }
`;

export const Column2 = styled.div`
    flex: 40%;
    @media screen and (max-width: 760px) {
        flex: 100%;
        margin-bottom: 5vw;
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Button = styled.button`
    min-width: 15vw;
    display: flex;
    align-items: center;
    border: 1px solid #007AFF;
    border-radius: 25px;
    text-decoration none;
    // background-color: #141414;
    color: white;
    &:hover{
        background-color: #007AFF;
    }
    p{
        margin: 0;
        margin: auto;
    }
    @media screen and (max-width: 760px) {
        min-width: 35vw;
        height: 8vw;
    }
`;

export const ImageBox = styled.div`
    height: 3vw;
    width: 3vw;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -0.4vw;
    @media screen and (max-width: 760px) {
        width: 7vw;
        height: 7vw;
        margin-left: -1.2vw;
    }
`;

export const ImageBox2 = styled(Link)`
    height: 3vw;
    width: 3vw;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: -0.4vw;
    @media screen and (max-width: 760px) {
        width: 7vw;
        height: 7vw;
        margin-left: -1.2vw;
    }
`;

export const Icon = styled.img`
    width: 2vw;
    @media screen and (max-width: 760px) {
        width: 5vw;
    }
`;

export const ImagesBox = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const ImagesBox2 = styled.div`
    display: none;
    @media screen and (max-width: 760px) {
        display: block;
        width: 80%;
        margin: auto;
    }
`;

export const ImageColumn = styled.div`
`;

export const Image = styled.img`
    position: relative;
    // overflow: hidden;
    // z-index: 100;
    // src: "/static/media/PortfolioIcon33.svg";
    // &:hover{
    //     background-image: url("/static/media/PortfolioIcon33.svg");
    // }
`;