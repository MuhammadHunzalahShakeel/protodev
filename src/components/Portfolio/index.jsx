import React from "react";
import {copywritingData} from "./copywritingData";
import {designData} from "./designData";
import {developmentData} from "./developmentData";
import {seoData} from "./seoData";
import img1 from "/static/media/PortfolioIcon1.svg";
import img2 from "/static/media/PortfolioIcon2.svg";
import img3 from "/static/media/PortfolioIcon3.svg";
import img4 from "/static/media/PortfolioIcon4.svg";
import { 
    Back,
    Row,
    Column1,
    Column2,
    ButtonRow,
    Button,
    ImageBox,
    Icon,
    ImagesBox,
    ImagesBox2,
    ImageColumn
} from "./PortfolioElements";
import PortfolioImage from "./PortfolioImage";
import PortfolioImage2 from "./PortfolioImage2";
import { useState } from "react";

const Portfolio = () => {
    const [data, setData] = useState(designData);
    const [designColor, setDesignColor] = useState("#007AFF");
    const [copywritingColor, setCopywritingColor] = useState("#141414");
    const [developmentColor, setDevelopmentColor] = useState("#141414");
    const [seoColor, setSeoColor] = useState("#141414");
    const setCopywritingData = () => {
        setData(copywritingData);
        setSeoColor("#141414");
        setDesignColor("#141414");
        setDevelopmentColor("#141414");
        setCopywritingColor("#007AFF");
    }
    const setDesignData = () => {
        setData(designData);
        setSeoColor("#141414");
        setDesignColor("#007AFF");
        setDevelopmentColor("#141414");
        setCopywritingColor("#141414");
    }
    const setDevelopmentData = () => {
        setData(developmentData);
        setSeoColor("#141414");
        setDesignColor("#141414");
        setDevelopmentColor("#007AFF");
        setCopywritingColor("#141414");
    }
    const setSEOData = () => {
        setData(seoData);
        setSeoColor("#007AFF");
        setDesignColor("#141414");
        setDevelopmentColor("#141414");
        setCopywritingColor("#141414");
    }
    return (
        <Back id="#portfolio">
            <Row>
                <Column1>
                    <span>We Create And</span><br></br><span style={{color: "#5aff15"}}>Innovate</span>
                    <p>We design a reflection of your brand and our aim is to help you in engaging your target audience. We design and create online solutions that increase company productivity and resonate with brand image, from web apps to client portals and everything in between.</p>
                </Column1>
                <Column2>
                    <ButtonRow style={{marginBottom: '1rem'}}>
                        <Button style={{backgroundColor: designColor,cursor: "pointer"}} onClick={setDesignData}>
                            <ImageBox>
                                <Icon src={img1}></Icon>
                            </ImageBox>
                            <p>Design</p>
                        </Button>
                        <Button style={{backgroundColor: developmentColor,cursor: "pointer"}} onClick={setDevelopmentData}>
                            <ImageBox>
                                <Icon src={img2}></Icon>
                            </ImageBox>
                            <p>Development</p>
                        </Button>
                    </ButtonRow>
                    <ButtonRow>
                        <Button style={{backgroundColor: copywritingColor,cursor: "pointer"}} onClick={setCopywritingData}>
                            <ImageBox>
                                <Icon src={img3}></Icon>
                            </ImageBox>
                            <p>Branding</p>
                        </Button>
                        <Button style={{backgroundColor: seoColor,cursor: "pointer"}} onClick={setSEOData}>
                            <ImageBox>
                                <Icon src={img4}></Icon>
                            </ImageBox>
                            <p>Social Media Post</p>
                        </Button>
                    </ButtonRow>
                </Column2>
            </Row>
            <ImagesBox>
                <ImageColumn>
                    <PortfolioImage 
                        img={data[0]['img']}
                        style={{width: "25vw", marginBottom: "1.6vw"}}
                        hoverimg={data[0]['hoverimg']}
                        hoverimg2={data[0]['hoverimg2']}
                        text={data[0]['text']}
                        url={data[0]['url']}
                    />
                    <PortfolioImage 
                        img={data[1]['img']}
                        style={{width: "25vw"}}
                        hoverimg={data[1]['hoverimg']}
                        hoverimg2={data[1]['hoverimg2']}
                        text={data[1]['text']}
                        url={data[0]['url']}
                    />
                </ImageColumn>
                <ImageColumn>
                    <PortfolioImage 
                        img={data[2]['img']}
                        style={{width: "25vw", marginRight: "1.5vw", marginLeft: "1.5vw"}}
                        hoverimg={data[2]['hoverimg']}
                        hoverimg2={data[2]['hoverimg2']}
                        text={data[2]['text']}
                        url={data[0]['url']}
                    />
                </ImageColumn>
                <ImageColumn>
                    <PortfolioImage 
                        img={data[3]['img']}
                        style={{width: "25vw", marginBottom: "1.6vw"}}
                        hoverimg={data[3]['hoverimg']}
                        hoverimg2={data[3]['hoverimg2']}
                        text={data[3]['text']}
                        url={data[0]['url']}
                    />
                    <PortfolioImage 
                        img={data[4]['img']} 
                        style={{width: "25vw"}}
                        hoverimg={data[4]['hoverimg']}
                        hoverimg2={data[4]['hoverimg2']}
                        text={data[4]['text']}
                        url={data[0]['url']}
                    />
                </ImageColumn>
            </ImagesBox>
            <ImagesBox2>
                <PortfolioImage2 
                    img={data[0]['img']}
                    style={{width: "100%", margin: "4vw 0"}}
                    hoverimg={data[0]['hoverimg']}
                    text={data[0]['text']}
                    url={data[0]['url']}
                />
                <PortfolioImage2 
                    img={data[1]['img']}
                    style={{width: "100%", margin: "4vw 0"}}
                    hoverimg={data[1]['hoverimg']}
                    text={data[1]['text']}
                    url={data[0]['url']}
                />
                <PortfolioImage2 
                    img={data[3]['img']}
                    style={{width: "100%", margin: "4vw 0"}}
                    hoverimg={data[3]['hoverimg']}
                    text={data[3]['text']}
                    url={data[0]['url']}
                />
                <PortfolioImage2
                    img={data[4]['img']} 
                    style={{width: "100%", margin: "4vw 0"}}
                    hoverimg={data[4]['hoverimg']}
                    text={data[4]['text']}
                    url={data[0]['url']}
                />
                <PortfolioImage2 
                    img={data[2]['img']}
                    style={{width: "100%", margin: "4vw 0"}}
                    hoverimg={data[2]['hoverimg']}
                    text={data[2]['text']}
                    url={data[0]['url']}
                />
            </ImagesBox2>
        </Back>
    );
}
export default Portfolio;