import React, { useEffect, useState } from "react";
import { 
    Box,
    Row,
    Back,
    Heading,
    Quote,
    Forward,
    Backward,
    QuoteImage,
    ForwardImage,
    BackwardImage
} from "./TestimonialsElements";
import img1 from "/static/media/TestimonialsSubBackground.webp";
import img2 from "/static/media/TestimonialsSubBackgroundMobile.svg";
import img3 from "/static/media/TestimonialsQuoteVector.svg";
import img4 from "/static/media/TestimonialsForwardButton.svg";
import img5 from "/static/media/TestimonialsBackwardButton.svg";

const Testimonials = () => {
    const [count, setCount] = useState(0);
    const content = [
        "The design solution were increased our website traffic and conversions. The services provided by protodev were instrumental in the success of our brand. - Edeline G.",
        "They take time and after understanding my company, they used that information to create a unique and cohesive brand identity that perfectly represents my business. - Shoaib",
        "The team was also very good in providing timely updates and addressing any issues that came up during the development process. I highly recommend ProtoDev for any Flutter development needs. - Farhan",
        "Their team of writers are extremely skilled and talented, they were able to understand my business goals and create high-quality, engaging content that resonated with my target audience. - Amelia",
        "The team had a deep understanding of Node.js and Express.js which helped them deliver an efficient and robust server-side solution. - Daniel Garcia",
        "They took the time to understand my business and target audience, and used that information to create a visually stunning and highly effective landing page. - Joseph"
    ];
    const increment = () => {
        if((count+1) === content.length) {
            setCount(0);
        }
        else {
            setCount(count+1);
        }
    }
    const decrement = () => {
        if(count === 0) {
            setCount(5);
        }
        else {
            setCount(count-1);
        }
    }
    const [isMobile, setIsMobile] = useState(false)
    const [isPC, setIsPC] = useState(true)
    const handleResize = () => {
        if (window.innerWidth < 760) {
            setIsMobile(true);
            setIsPC(false);
        } else {
            setIsMobile(false);
            setIsPC(true);
        }
      }
    useEffect(() => {
        window.addEventListener("resize", handleResize)
      })
    return (
        <>
        <Box id="#testimonials">
            <Heading><span style={{color: "#007aff"}}>Client </span><span>Testimonials</span></Heading>
            <Row>
                {isPC && <Back src={img1}></Back>}
                {isMobile && <Back src={img2}></Back>}
                <Quote>
                    <QuoteImage src={img3}></QuoteImage>
                    <p>{content[count]}</p>
                <Forward><ForwardImage onClick={()=>increment()} src={img4}></ForwardImage></Forward>
                <Backward><BackwardImage onClick={()=>decrement()} src={img5}></BackwardImage></Backward>
                </Quote>
            </Row>
        </Box>
        </>
    );
}
export default Testimonials;