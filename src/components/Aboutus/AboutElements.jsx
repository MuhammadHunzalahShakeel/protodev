import styled from "styled-components";
import { Link as LinkS } from 'react-scroll';
import img2 from "/static/media/AboutBackground.png";
import img1 from "/static/media/AboutBackgroundMobile.svg";


export const Link = styled(LinkS)`
`;

export const Box = styled.div`
    background-image: url(${img2});
    background-size: cover;
    display: flex;
    
    @media screen and (max-width: 820px) {
        background-image: url(${img1});
    }
`;

export const Row = styled.div`
    flex: 1 1;
    margin-left: 10%;
    margin-right: 0;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
    margin-top: 10%;
    span {
        font-size: 3.75rem;
        font-weight: bolder;
        margin: 100px 0 0;
    }
    p {
        width: 50%;
    }
    @media screen and (max-width: 760px) {
        span {
            font-size: 36px;
        }
        p {
            width: 90%;
        }
    }
`;

export const AboutImage = styled.img`
    margin-bottom: 15%;
    margin-top: 5%;
    width: 20%;
    cursor: pointer;
    @media screen and (max-width: 760px) {
        width: 60%;
    }
`;