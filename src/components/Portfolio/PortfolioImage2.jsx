import React from "react";
import { useState } from "react";
import {Image, ImageBox2} from "./PortfolioElements";
import {FaArrowRight} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PortfolioImage2 = ({ img, style, hoverimg, hoverimg2, text, url }) => {
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
        <Image className="image" style={style} src={hoverimg}></Image>
        <div style={{display: "block", width: "100%", position: "absolute"}} className="HoverImage" id={img}>
            <div style={{display: "flex", width: "100%", position: "absolute", bottom: "0", padding: "0 1vw"}}>
                <h2 style={{position: "absolute", color: "white", width: "80%", fontSize: "3.5vw", bottom: "25px", left: "10px"}}>{text}</h2>
                <ImageBox2 to={url} style={{position: "absolute", backgroundColor: "#5AFF15", bottom: "30px", right: "20px"}}>
                    <FaArrowRight size={"2.5vw"}/>
                </ImageBox2>
            </div>
        </div>
        </div>
        </>
    );
}
export default PortfolioImage2;