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
        <div style={{position: "relative"}}>
            <Image className="portfolio-image" style={style} src={hoverimg}></Image>
            <div style={{display: "block", position: "absolute", top: "1rem"}} className="portfolio-HoverImage" id={img}>
                <img style={{width: "100%", objectFit: "cover"}} src={hoverimg2}/>
                <div style={{display: "flex", width: "100%", position: "absolute", bottom: "0", padding: "0 1vw"}}>
                    <h2 style={{position: "absolute", color: "white", width: "80%", fontSize: "8.5vw", bottom: "25px", left: "10px"}}>{text}</h2>
                    <ImageBox2 to={url} style={{position: "absolute", backgroundColor: "#5AFF15", bottom: "40px", right: "20px"}}>
                        <FaArrowRight size={"5vw"}/>
                    </ImageBox2>
                </div>
            </div>
        </div>
    );
}
export default PortfolioImage2;
// import React from "react";
// import { useState } from "react";
// import {Image, ImageBox2} from "./PortfolioElements";
// import {FaArrowRight} from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const PortfolioImage = ({ img, style, hoverimg, hoverimg2, text, url }) => {
//     const [image, setImage] = useState(img);
//     const setChanges = () => {
//         setImage(hoverimg);
//         document.getElementById(img).style.display = "block";
//     }
//     const resetChanges = () => {
//         setImage(img);
//         document.getElementById(img).style.display = "none";
//     }
//     const navigate = useNavigate();
//     const handleNavigate = (link) => {
//         navigate(link);
//     }
//     const [hovering, setHovering] = useState(false);

//     const handleMouseEnter = () => {
//         setHovering(true);
//     };

//     const handleMouseLeave = () => {
//         setHovering(false);
//     };
//     return (
        
//         <>
//         <div className="mobile-container">
//             <Image className="mobile-image" style={style} src={hoverimg}></Image>
//             <div style={{position: "absolute", top: "0"}} className="HoverImage" id={img}>
//                 <img className="mobile-image-overlay" src={hoverimg2}/>
//                 <div className="mobile-text">
//                     <h2 style={{color: "white", width: "80%", fontSize: "2.5vw"}}>{text}</h2>
//                     <ImageBox2 to={url} style={{position: "absolute", backgroundColor: "#5AFF15", bottom: "20px", right: "20px"}}>
//                         <FaArrowRight size={"1.5vw"}/>
//                     </ImageBox2>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// }
// export default PortfolioImage;