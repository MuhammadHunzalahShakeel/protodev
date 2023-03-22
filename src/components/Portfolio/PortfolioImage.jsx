import React from "react";
import { useState } from "react";
import {Image, ImageBox2} from "./PortfolioElements";
import {FaArrowRight} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PortfolioImage = ({ img, style, hoverimg, hoverimg2, text, url }) => {
    const [image, setImage] = useState(img);
    const setChanges = () => {
        setImage(hoverimg);
        document.getElementById(img).style.display = "block";
    }
    const resetChanges = () => {
        setImage(img);
        document.getElementById(img).style.display = "none";
    }
    const navigate = useNavigate();
    const handleNavigate = (link) => {
        navigate(link);
    }
    return (
        <>
        <div style={{position: "relative"}}>
        <Image onMouseEnter={setChanges} onMouseLeave={resetChanges} className="image" style={style} src={image}></Image>
        <div onMouseEnter={setChanges} onMouseLeave={resetChanges} style={{display: "none", position: "absolute", top: "0"}} className="HoverImage" id={img}>
            <img style={{ width: "25vw"}} src={hoverimg2}/>
            <div style={{display: "flex", position: "absolute", bottom: "0", padding: "0 1vw"}}>
                <h2 style={{color: "white", width: "80%", fontSize: "2.5vw"}}>{text}</h2>
                <ImageBox2 to={url} style={{position: "absolute", backgroundColor: "#5AFF15", bottom: "20px", right: "20px"}}>
                    <FaArrowRight size={"1.5vw"}/>
                </ImageBox2>
            </div>
        </div>
        </div>
        </>
    );
}
export default PortfolioImage;